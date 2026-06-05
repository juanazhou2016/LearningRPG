#!/usr/bin/env node

/**
 * Shanghai Oxford grade-alignment validator for the local question bank.
 *
 * The checker intentionally uses conservative heuristics because the complete
 * textbook word list is not bundled in this repository. It combines the local
 * vocabulary-grade mapping, topic names, grammar signals, and question type
 * difficulty to produce a reviewable report instead of editing question data.
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..', '..');
const QUESTIONS_FILE = path.join(ROOT, 'scripts', 'data', 'questions.js');
const LEVELS_FILE = path.join(ROOT, 'scripts', 'data', 'levels.js');
const VOCABULARY_FILE = path.join(ROOT, 'scripts', 'data', 'vocabulary-grade.js');
const SYLLABUS_FILE = path.join(ROOT, 'scripts', 'data', 'shanghaiOxfordSyllabus.js');
const REPORT_DIR = path.join(ROOT, 'reports');
const MARKDOWN_REPORT = path.join(REPORT_DIR, 'shanghai-oxford-grade-alignment.md');
const JSON_REPORT = path.join(REPORT_DIR, 'shanghai-oxford-grade-alignment.json');

const VALID_TYPES = new Set(['choice', 'fill', 'spell', 'grammar', 'translate', 'reading', 'listen', 'oral']);
const VALID_GRADES = new Set([3, 4, 5, 6]);

const VERDICT_LABELS = {
  match: '匹配',
  underestimated: '偏低',
  overestimated: '偏高',
  review: '需人工复核'
};

const SHANGHAI_GRADE_NOTES = {
  3: '上海牛津版小学中段入门：基础词汇、简单现在时、基础 be 动词、简单句。',
  4: '上海牛津版小学中高段：主题扩展、现在进行时、简单过去时入门、基础阅读。',
  5: '上海小学高年级：一般过去时、不规则过去式、一般将来时、较长语篇。',
  6: '上海五四学制下六年级按初中起始段处理：可接受完成时、被动语态基础和复合句入门。'
};

const TOPIC_MIN_GRADES = {
  food: 3,
  animals: 3,
  animal: 3,
  family: 3,
  home: 3,
  school: 3,
  colors: 3,
  numbers: 3,
  body: 3,
  clothes: 3,
  clothing: 3,
  daily: 3,
  fruit: 3,
  vegetables: 3,
  pets: 3,
  winter: 3,
  teaparty: 3,
  billygoats: 3,
  littlepigs: 3,
  sleepingbeauty: 3,
  cinderella: 3,
  goldilocks: 3,
  snowwhite: 3,
  redridinghood: 3,
  peelegg: 3,
  snack: 3,
  washhair: 3,
  eatathome: 3,
  washingdishes: 3,
  housework: 3,
  summersweat: 3,
  bedroom: 3,
  bathroom: 3,
  lounge: 3,
  kitchen: 3,
  diningroom: 3,
  garden: 3,

  weather: 4,
  jobs: 4,
  jobs1: 4,
  jobs2: 4,
  time: 4,
  transport: 4,
  sports: 4,
  feelings: 4,
  emotion: 4,
  nature: 4,
  shapes: 4,
  police: 4,
  undersea: 4,
  farmanimals: 4,
  jungle: 4,
  desertanimals: 4,
  pirates: 4,
  polaranimals: 4,
  lostfound: 4,

  science: 5,
  earth: 5,
  dinosaurs: 5,
  superhero: 5,
  firebrigade: 5,
  character: 5,
  recycling: 5,
  wastesorting: 5,
  jackbeanstalk: 5,

  space: 6,
  forces: 6,
  grammar: 6
};

const SKILL_DETAIL_MIN_GRADES = [
  { pattern: /现在完成时|完成时/i, grade: 6, reason: '现在完成时按上海六年级/初中起始段处理' },
  { pattern: /被动语态/i, grade: 6, reason: '被动语态基础按上海六年级/初中起始段处理' },
  { pattern: /虚拟语气|宾语从句|复合句/i, grade: 6, reason: '复合句或高级语法不宜放在小学低年级' },
  { pattern: /不规则过去式/i, grade: 5, reason: '不规则过去式更适合五年级及以上' },
  { pattern: /过去式|一般过去时/i, grade: 4, reason: '简单过去时可从四年级入门' },
  { pattern: /现在进行时/i, grade: 4, reason: '现在进行时更适合四年级及以上' },
  { pattern: /第三人称单数/i, grade: 4, reason: '三单变化建议四年级及以上系统练习' },
  { pattern: /可数\/不可数名词|there be/i, grade: 4, reason: '名词数和 there be 建议四年级及以上系统练习' },
  { pattern: /be动词|简单否定句|祈使句/i, grade: 3, reason: '基础 be 动词和简单句可放在三年级' }
];

const TEXT_SIGNALS = [
  { pattern: /\b(have|has)\s+\w*(ed|en)\b|\b(have|has)\s+(been|done|seen|taken|eaten|had|made|gone)\b/i, grade: 6, reason: '题干/答案出现现在完成时信号' },
  { pattern: /\b(is|are|was|were)\s+\w+ed\s+by\b|\b(passive|被动)\b/i, grade: 6, reason: '题干/答案出现被动语态信号' },
  { pattern: /\b(went|ate|saw|took|had|made|came|woke|bought|brought|caught|thought|found|left|lost|built)\b/i, grade: 5, reason: '出现常见不规则过去式' },
  { pattern: /\bwill\s+\w+|going to\s+\w+/i, grade: 5, reason: '出现一般将来时表达' },
  { pattern: /\b(yesterday|last week|last year|last night|ago)\b|\b(played|watched|visited|studied|walked|jumped|cooked|cleaned|opened|closed|liked|lived|looked|worked|washed|helped|wanted|needed)\b/i, grade: 4, reason: '出现一般过去时或过去时间状语' },
  { pattern: /\b(is|am|are)\s+\w+ing\b/i, grade: 4, reason: '出现现在进行时' },
  { pattern: /\b(he|she|it)\s+\w+(s|es|ies)\b/i, grade: 4, reason: '出现第三人称单数动词形式' }
];

const TYPE_MIN_GRADES = {
  choice: 3,
  fill: 3,
  spell: 3,
  listen: 3,
  oral: 4,
  grammar: 4,
  translate: 4,
  reading: 5
};

const TYPE_REASONS = {
  choice: '选择题适合三年级起步',
  fill: '基础填空可适合三年级起步',
  spell: '拼写题可适合三年级起步，但需结合词汇难度',
  listen: '听辨题可适合三年级起步',
  oral: '口语跟读建议四年级及以上更稳定',
  grammar: '显性语法题建议四年级及以上',
  translate: '完整翻译题建议四年级及以上',
  reading: '阅读理解题建议五年级及以上'
};

const TOPIC_ALIASES = {
  teaParty: 'teaparty',
  threeBillyGoatsGruff: 'billygoats',
  threeLittlePigs: 'littlepigs',
  underTheSea: 'undersea',
  sleepingBeauty: 'sleepingbeauty',
  littleRedRidingHood: 'redridinghood',
  jackAndTheBeanstalk: 'jackbeanstalk',
  polarAnimals: 'polaranimals',
  desertAnimals: 'desertanimals',
  farmAnimals: 'farmanimals',
  fireBrigade: 'firebrigade',
  wasteSorting: 'wastesorting'
};

function loadExportedArray(filePath, exportName) {
  const source = fs.readFileSync(filePath, 'utf8');
  const arrayMatch = source.match(new RegExp(`export\\s+const\\s+${exportName}\\s*=\\s*(\\[[\\s\\S]*?\\]);`));
  if (!arrayMatch) {
    throw new Error(`无法读取 ${exportName}: ${filePath}`);
  }

  return Function(`"use strict"; return (${arrayMatch[1]});`)();
}

function loadExportedObject(filePath, exportName) {
  if (!fs.existsSync(filePath)) {
    return null;
  }

  const source = fs.readFileSync(filePath, 'utf8');
  const objectStart = source.indexOf(`export const ${exportName} =`);
  if (objectStart === -1) {
    return null;
  }

  const braceStart = source.indexOf('{', objectStart);
  if (braceStart === -1) {
    return null;
  }

  let depth = 0;
  let inString = false;
  let stringQuote = '';
  let escaped = false;

  for (let i = braceStart; i < source.length; i++) {
    const char = source[i];

    if (inString) {
      if (escaped) {
        escaped = false;
      } else if (char === '\\') {
        escaped = true;
      } else if (char === stringQuote) {
        inString = false;
      }
      continue;
    }

    if (char === '"' || char === "'") {
      inString = true;
      stringQuote = char;
    } else if (char === '{') {
      depth++;
    } else if (char === '}') {
      depth--;
      if (depth === 0) {
        return Function(`"use strict"; return (${source.slice(braceStart, i + 1)});`)();
      }
    }
  }

  return null;
}

function loadShanghaiOxfordSyllabus() {
  return loadExportedObject(SYLLABUS_FILE, 'shanghaiOxfordSyllabus') || {
    meta: {
      status: 'fallback',
      sourceNotes: []
    },
    topicBenchmarks: {},
    typeBenchmarks: {},
    grammarBenchmarks: []
  };
}

function loadVocabularyGrades() {
  const source = fs.readFileSync(VOCABULARY_FILE, 'utf8');
  const objectMatch = source.match(/export\s+const\s+vocabularyGrades\s*=\s*(\{[\s\S]*?\n\});/);
  if (!objectMatch) {
    return {};
  }

  const vocabularyGrades = Function(`"use strict"; return (${objectMatch[1]});`)();
  const topicGrades = {};

  for (const [topicKey, value] of Object.entries(vocabularyGrades)) {
    const normalized = TOPIC_ALIASES[topicKey] || topicKey.toLowerCase();
    topicGrades[normalized] = value.grade;
  }

  return topicGrades;
}

function getSyllabusTopicGrades(syllabus) {
  const topicGrades = {};

  for (const [topic, benchmark] of Object.entries(syllabus.topicBenchmarks || {})) {
    topicGrades[topic] = benchmark.minGrade;
  }

  return topicGrades;
}

function getSyllabusTypeBenchmarks(syllabus) {
  const typeBenchmarks = {};

  for (const [type, benchmark] of Object.entries(syllabus.typeBenchmarks || {})) {
    typeBenchmarks[type] = {
      minGrade: benchmark.minGrade,
      reason: benchmark.reason
    };
  }

  return typeBenchmarks;
}

function getSyllabusGrammarRules(syllabus) {
  return (syllabus.grammarBenchmarks || []).map(rule => ({
    pattern: new RegExp(rule.pattern, 'i'),
    grade: rule.minGrade,
    reason: rule.reason
  }));
}

function normalizeText(value) {
  if (Array.isArray(value)) {
    return value.join(' ');
  }

  if (value === null || value === undefined) {
    return '';
  }

  return String(value);
}

function getQuestionText(question) {
  const choices = normalizeText(question.choices);
  const answer = normalizeText(question.answer);
  return `${question.q || ''} ${choices} ${answer}`;
}

function getRecommendedGrade(question, benchmarks) {
  const signals = [];
  const topicGrade = benchmarks.topicGrades[question.topic] || TOPIC_MIN_GRADES[question.topic];
  let recommendedGrade = topicGrade || 3;
  let decisiveReason = topicGrade
    ? `主题 ${question.topic} 基准为 ${topicGrade} 年级`
    : `主题 ${question.topic} 未在基准表中，按三年级起步并标记复核`;

  if (topicGrade) {
    signals.push(decisiveReason);
  } else {
    signals.push(decisiveReason);
  }

  const typeBenchmark = benchmarks.typeBenchmarks[question.type];
  const typeGrade = typeBenchmark?.minGrade || TYPE_MIN_GRADES[question.type] || 3;
  if (typeGrade > recommendedGrade) {
    recommendedGrade = typeGrade;
    decisiveReason = typeBenchmark?.reason || TYPE_REASONS[question.type] || `题型 ${question.type} 需人工判断`;
  }
  signals.push(typeBenchmark?.reason || TYPE_REASONS[question.type] || `题型 ${question.type} 需人工判断`);

  const detail = `${question.skill || ''} ${question.skillDetail || ''}`;
  for (const rule of benchmarks.grammarRules) {
    if (rule.pattern.test(detail)) {
      if (rule.grade > recommendedGrade) {
        recommendedGrade = rule.grade;
        decisiveReason = rule.reason;
      }
      signals.push(rule.reason);
    }
  }

  const text = getQuestionText(question);
  for (const rule of TEXT_SIGNALS) {
    if (rule.pattern.test(text)) {
      if (rule.grade > recommendedGrade) {
        recommendedGrade = rule.grade;
        decisiveReason = rule.reason;
      }
      signals.push(rule.reason);
    }
  }

  const wordCount = text.split(/\s+/).filter(Boolean).length;
  if (question.type === 'reading' && wordCount > 55) {
    recommendedGrade = Math.max(recommendedGrade, 6);
    decisiveReason = '阅读文本较长，建议按六年级/初中起始段复核';
    signals.push('阅读文本较长，建议按六年级/初中起始段复核');
  } else if (wordCount > 35) {
    recommendedGrade = Math.max(recommendedGrade, 5);
    decisiveReason = '题干文本较长，建议五年级及以上';
    signals.push('题干文本较长，建议五年级及以上');
  }

  return {
    recommendedGrade: Math.min(Math.max(recommendedGrade, 3), 6),
    signals,
    decisiveReason
  };
}

function validateQuestionStructure(question, seenIds) {
  const issues = [];

  if (!question.id || typeof question.id !== 'string') {
    issues.push('缺少字符串 ID');
  } else if (seenIds.has(question.id)) {
    issues.push('题目 ID 重复');
  }

  if (!question.q || typeof question.q !== 'string') {
    issues.push('缺少题干');
  }

  if (!VALID_TYPES.has(question.type)) {
    issues.push(`未知题型 ${question.type}`);
  }

  if (!Array.isArray(question.grades) || question.grades.length === 0) {
    issues.push('缺少年级数组');
  } else if (question.grades.some(grade => !VALID_GRADES.has(grade))) {
    issues.push('年级字段超出 3-6 范围');
  }

  if (['choice', 'listen', 'reading'].includes(question.type)) {
    if (!Array.isArray(question.choices) || question.choices.length < 2) {
      issues.push('选择类题目缺少有效 choices');
    } else if (!Number.isInteger(question.answer) || question.answer < 0 || question.answer >= question.choices.length) {
      issues.push('选择类题目答案索引越界');
    }
  } else if (question.answer === undefined || question.answer === null || String(question.answer).trim() === '') {
    issues.push('输入类题目缺少答案文本');
  }

  return issues;
}

function getVerdict(question, recommendedGrade, structuralIssues, unknownTopic) {
  if (structuralIssues.length > 0 || unknownTopic) {
    return 'review';
  }

  const assignedMinGrade = Math.min(...question.grades);
  const assignedMaxGrade = Math.max(...question.grades);

  if (assignedMinGrade < recommendedGrade) {
    return 'underestimated';
  }

  if (assignedMaxGrade > recommendedGrade + 1) {
    return 'overestimated';
  }

  return 'match';
}

function getSuggestedGrades(recommendedGrade, verdict) {
  if (verdict === 'review') {
    return [];
  }

  return [recommendedGrade];
}

function countBy(items, getKey) {
  const counts = {};

  for (const item of items) {
    const key = getKey(item);
    counts[key] = (counts[key] || 0) + 1;
  }

  return counts;
}

function getLevelStructureIssues(levels, questions) {
  return levels.map(level => {
    let pool = [];

    if (level.topic === 'mixed') {
      pool = questions.filter(question => question.grades.includes(3));
    } else if (Array.isArray(level.topic)) {
      pool = questions.filter(question => level.topic.includes(question.topic));
    } else {
      pool = questions.filter(question => question.topic === level.topic);
    }

    const issue = pool.length === 0
      ? '主题筛不到题，当前战斗会退回全题库，关卡主题会跑偏'
      : pool.length < level.questionsPerBattle
        ? `题量不足：需要 ${level.questionsPerBattle} 题，当前仅 ${pool.length} 题`
        : '';

    return {
      id: level.id,
      name: level.name,
      topics: level.topic,
      questionsPerBattle: level.questionsPerBattle,
      availableQuestions: pool.length,
      issue
    };
  }).filter(level => level.issue);
}

function getCoverageIssues(questions) {
  const typeByGrade = {};
  for (const question of questions) {
    for (const grade of question.grades) {
      if (!typeByGrade[grade]) {
        typeByGrade[grade] = {};
      }
      typeByGrade[grade][question.type] = (typeByGrade[grade][question.type] || 0) + 1;
    }
  }

  return Object.entries(typeByGrade).map(([grade, typeCounts]) => ({
    grade: Number(grade),
    typeCounts,
    missingCoreTypes: ['choice', 'fill', 'spell'].filter(type => !typeCounts[type])
  }));
}

function buildMarkdown(report) {
  const verdictRows = Object.entries(report.summary.verdictCounts)
    .map(([verdict, count]) => `| ${VERDICT_LABELS[verdict]} | ${count} |`)
    .join('\n');

  const gradeRows = Object.entries(report.summary.gradeCounts)
    .sort(([a], [b]) => Number(a) - Number(b))
    .map(([grade, count]) => `| ${grade} | ${count} |`)
    .join('\n');

  const topicRows = Object.entries(report.summary.topicCounts)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 30)
    .map(([topic, count]) => `| ${topic} | ${count} |`)
    .join('\n');

  const levelRows = report.structure.levelIssues
    .map(level => `| ${level.id} | ${level.name} | ${normalizeText(level.topics)} | ${level.availableQuestions}/${level.questionsPerBattle} | ${level.issue} |`)
    .join('\n') || '| - | - | - | - | 未发现 |';

  const underestimatedRows = report.questions
    .filter(question => question.verdict === 'underestimated')
    .slice(0, 80)
    .map(question => `| ${question.id} | ${question.grades.join(',')} | ${question.recommendedGrades.join(',') || '-'} | ${question.topic} | ${question.type} | ${question.reason} |`)
    .join('\n') || '| - | - | - | - | - | 未发现 |';

  const overestimatedRows = report.questions
    .filter(question => question.verdict === 'overestimated')
    .slice(0, 80)
    .map(question => `| ${question.id} | ${question.grades.join(',')} | ${question.recommendedGrades.join(',') || '-'} | ${question.topic} | ${question.type} | ${question.reason} |`)
    .join('\n') || '| - | - | - | - | - | 未发现 |';

  const reviewRows = report.questions
    .filter(question => question.verdict === 'review')
    .slice(0, 80)
    .map(question => `| ${question.id} | ${question.grades.join(',')} | ${question.topic} | ${question.type} | ${question.reason} |`)
    .join('\n') || '| - | - | - | - | 未发现 |';

  const suggestedRows = report.questions
    .filter(question => question.verdict !== 'match' && question.recommendedGrades.length > 0)
    .slice(0, 120)
    .map(question => `| ${question.id} | ${question.grades.join(',')} | ${question.recommendedGrades.join(',')} | ${VERDICT_LABELS[question.verdict]} | ${question.reason} |`)
    .join('\n') || '| - | - | - | - | 未发现 |';

  const coverageRows = report.structure.typeCoverage
    .map(item => `| ${item.grade} | ${Object.entries(item.typeCounts).map(([type, count]) => `${type}:${count}`).join(', ')} | ${item.missingCoreTypes.join(', ') || '无'} |`)
    .join('\n');

  const sourceRows = (report.syllabus.sourceNotes || [])
    .map(source => `| ${source.label} | ${source.url} | ${source.usage} |`)
    .join('\n') || '| - | - | 未记录 |';

  return `# 上海牛津版题库年级匹配校验报告

生成时间：${report.generatedAt}

## 校验口径

- 教材基准：英语（牛津上海版）3A-6B。
- 上海学制：上海小学为 1-5 年级，报告中的 6 年级按上海六年级/初中起始段处理。
- 校验方式：结合项目内词汇年级映射、主题基准、语法信号、题型难度和结构校验进行保守判定。
- 重要说明：当前仓库没有逐册逐页教材词表，因此本报告用于定位风险题和给出建议年级，不自动修改题库。

## 基准数据来源

- 基准状态：${report.syllabus.status}
- 基准文件：scripts/data/shanghaiOxfordSyllabus.js

| 来源 | 地址 | 用途 |
| --- | --- | --- |
${sourceRows}

## 年级基准

${Object.entries(SHANGHAI_GRADE_NOTES).map(([grade, note]) => `- ${grade} 年级：${note}`).join('\n')}

## 总览

- 总题量：${report.summary.totalQuestions}
- 年级匹配率：${report.summary.matchRate}%
- 结构问题题数：${report.summary.structuralIssueCount}
- 主题数量：${Object.keys(report.summary.topicCounts).length}

| 判定 | 题数 |
| --- | ---: |
${verdictRows}

## 各年级题量

| 年级 | 题数 |
| --- | ---: |
${gradeRows}

## 主题题量 Top 30

| 主题 | 题数 |
| --- | ---: |
${topicRows}

## 关卡结构问题

| 关卡 | 名称 | 主题 | 可用/需要 | 问题 |
| ---: | --- | --- | ---: | --- |
${levelRows}

## 题型覆盖

| 年级 | 题型分布 | 缺少核心题型 |
| ---: | --- | --- |
${coverageRows}

## 越级/低估题清单

这些题的实际难度高于当前标注年级，建议优先复核。

| ID | 当前年级 | 建议年级 | 主题 | 题型 | 原因 |
| --- | --- | --- | --- | --- | --- |
${underestimatedRows}

## 偏高题清单

这些题可能比当前标注年级更基础，可考虑下放或扩展适用年级。

| ID | 当前年级 | 建议年级 | 主题 | 题型 | 原因 |
| --- | --- | --- | --- | --- | --- |
${overestimatedRows}

## 需人工复核题清单

| ID | 当前年级 | 主题 | 题型 | 原因 |
| --- | --- | --- | --- | --- |
${reviewRows}

## 可直接修改的建议年级标记

| ID | 当前年级 | 建议年级 | 判定 | 原因 |
| --- | --- | --- | --- | --- |
${suggestedRows}

## 明细文件

- JSON 明细：reports/shanghai-oxford-grade-alignment.json
- 每题均包含判定、建议年级和至少一条判断理由。
`;
}

function main() {
  const questions = loadExportedArray(QUESTIONS_FILE, 'questions');
  const levels = loadExportedArray(LEVELS_FILE, 'levels');
  const syllabus = loadShanghaiOxfordSyllabus();
  const vocabularyTopicGrades = loadVocabularyGrades();
  const benchmarks = {
    topicGrades: {
      ...vocabularyTopicGrades,
      ...getSyllabusTopicGrades(syllabus)
    },
    typeBenchmarks: getSyllabusTypeBenchmarks(syllabus),
    grammarRules: [
      ...getSyllabusGrammarRules(syllabus),
      ...SKILL_DETAIL_MIN_GRADES
    ]
  };
  const seenIds = new Set();

  const results = questions.map(question => {
    const structuralIssues = validateQuestionStructure(question, seenIds);
    if (question.id) {
      seenIds.add(question.id);
    }

    const { recommendedGrade, signals, decisiveReason } = getRecommendedGrade(question, benchmarks);
    const unknownTopic = !benchmarks.topicGrades[question.topic] && !TOPIC_MIN_GRADES[question.topic];
    const verdict = getVerdict(question, recommendedGrade, structuralIssues, unknownTopic);
    const reasonParts = [...structuralIssues, ...signals];
    let primaryReason = structuralIssues[0] || decisiveReason || '未发现越级信号，按主题和题型基准判定匹配';

    if (unknownTopic) {
      reasonParts.unshift('主题未纳入上海牛津版基准映射，需人工确认');
      primaryReason = '主题未纳入上海牛津版基准映射，需人工确认';
    }

    return {
      id: question.id,
      q: question.q,
      type: question.type,
      topic: question.topic,
      skill: question.skill,
      skillDetail: question.skillDetail,
      grades: question.grades,
      answer: question.answer,
      recommendedGrades: getSuggestedGrades(recommendedGrade, verdict),
      recommendedMinGrade: recommendedGrade,
      verdict,
      verdictLabel: VERDICT_LABELS[verdict],
      reason: primaryReason,
      structuralIssues,
      reasons: reasonParts
    };
  });

  const verdictCounts = {
    match: 0,
    underestimated: 0,
    overestimated: 0,
    review: 0
  };

  for (const result of results) {
    verdictCounts[result.verdict]++;
  }

  const gradeEntries = [];
  for (const question of questions) {
    for (const grade of question.grades || []) {
      gradeEntries.push({ grade });
    }
  }

  const structuralIssueCount = results.filter(result => result.structuralIssues.length > 0).length;
  const matchRate = questions.length > 0 ? Math.round((verdictCounts.match / questions.length) * 1000) / 10 : 0;

  const report = {
    generatedAt: new Date().toISOString(),
    assumptions: [
      '教材版本按英语（牛津上海版）3A-6B。',
      '上海六年级按初中起始段处理。',
      '没有逐册逐页教材词表时，结合 shanghaiOxfordSyllabus.js、项目内词汇映射、公开课标口径、主题和语法信号做风险判定。'
    ],
    syllabus: {
      status: syllabus.meta?.status || 'unknown',
      sourceNotes: syllabus.meta?.sourceNotes || [],
      gradeBands: syllabus.gradeBands || {},
      unitBands: syllabus.unitBands || []
    },
    summary: {
      totalQuestions: questions.length,
      matchRate,
      verdictCounts,
      structuralIssueCount,
      gradeCounts: countBy(gradeEntries, item => item.grade),
      topicCounts: countBy(questions, question => question.topic),
      typeCounts: countBy(questions, question => question.type)
    },
    structure: {
      levelIssues: getLevelStructureIssues(levels, questions),
      typeCoverage: getCoverageIssues(questions)
    },
    questions: results
  };

  fs.mkdirSync(REPORT_DIR, { recursive: true });
  fs.writeFileSync(JSON_REPORT, `${JSON.stringify(report, null, 2)}\n`, 'utf8');
  fs.writeFileSync(MARKDOWN_REPORT, buildMarkdown(report), 'utf8');

  process.stdout.write(`已生成报告：${MARKDOWN_REPORT}\n`);
  process.stdout.write(`已生成明细：${JSON_REPORT}\n`);
  process.stdout.write(`题库总量：${report.summary.totalQuestions}，匹配率：${report.summary.matchRate}%\n`);
}

main();
