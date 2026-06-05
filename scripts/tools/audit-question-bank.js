#!/usr/bin/env node

/**
 * Question bank acceptance audit.
 *
 * This complements grade-alignment checks with hard data validation, level pool
 * coverage, assessment pool coverage and game-flow risks after question updates.
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..', '..');
const QUESTIONS_FILE = path.join(ROOT, 'scripts', 'data', 'questions.js');
const LEVELS_FILE = path.join(ROOT, 'scripts', 'data', 'levels.js');
const REPORT_DIR = path.join(ROOT, 'reports');
const JSON_OUTPUT = path.join(REPORT_DIR, 'question-bank-acceptance-audit.json');
const MD_OUTPUT = path.join(REPORT_DIR, 'question-bank-acceptance-audit.md');

const VALID_TYPES = new Set(['choice', 'fill', 'spell', 'grammar', 'translate', 'reading', 'listen', 'oral']);
const VALID_GRADES = new Set([3, 4, 5, 6]);
const CHOICE_TYPES = new Set(['choice', 'listen', 'reading']);
const TEXT_TYPES = new Set(['fill', 'spell', 'grammar', 'translate', 'oral']);
const CORE_TYPES = ['choice', 'fill', 'spell'];

function readSource(filePath) {
  return fs.readFileSync(filePath, 'utf8');
}

function extractExportedValue(filePath, exportName) {
  const source = readSource(filePath);
  const marker = `export const ${exportName}`;
  const start = source.indexOf(marker);
  if (start === -1) {
    throw new Error(`无法读取 ${exportName}: ${filePath}`);
  }

  const equals = source.indexOf('=', start);
  if (equals === -1) {
    throw new Error(`无法定位 ${exportName} 的赋值: ${filePath}`);
  }

  const valueStart = source.slice(equals + 1).search(/[\[{]/);
  if (valueStart === -1) {
    throw new Error(`无法定位 ${exportName} 的值: ${filePath}`);
  }

  const absoluteStart = equals + 1 + valueStart;
  const opening = source[absoluteStart];
  const closing = opening === '[' ? ']' : '}';
  let depth = 0;
  let inString = false;
  let quote = '';
  let escaped = false;

  for (let index = absoluteStart; index < source.length; index++) {
    const char = source[index];

    if (inString) {
      if (escaped) {
        escaped = false;
      } else if (char === '\\') {
        escaped = true;
      } else if (char === quote) {
        inString = false;
      }
      continue;
    }

    if (char === '"' || char === "'" || char === '`') {
      inString = true;
      quote = char;
    } else if (char === opening) {
      depth++;
    } else if (char === closing) {
      depth--;
      if (depth === 0) {
        return Function(`"use strict"; return (${source.slice(absoluteStart, index + 1)});`)();
      }
    }
  }

  throw new Error(`无法解析 ${exportName}: ${filePath}`);
}

function countBy(items, getKey) {
  const counts = {};
  for (const item of items) {
    const key = getKey(item);
    counts[key] = (counts[key] || 0) + 1;
  }
  return counts;
}

function normalizeAnswer(value) {
  if (value === null || value === undefined) {
    return '';
  }
  return String(value).trim().replace(/\s+/g, ' ');
}

function questionText(question) {
  return [
    question.q,
    Array.isArray(question.choices) ? question.choices.join(' ') : '',
    question.answer
  ].filter(Boolean).join(' ');
}

function addIssue(issues, severity, area, message, refs = {}) {
  issues.push({
    severity,
    area,
    message,
    ...refs
  });
}

function validateQuestions(questions) {
  const issues = [];
  const seenIds = new Map();

  for (const question of questions) {
    if (!question.id || typeof question.id !== 'string') {
      addIssue(issues, 'error', '题目结构', '题目缺少字符串 id', { id: question.id || '' });
    } else if (seenIds.has(question.id)) {
      addIssue(issues, 'error', '题目结构', `题目 id 重复，首次出现序号 ${seenIds.get(question.id) + 1}`, { id: question.id });
    } else {
      seenIds.set(question.id, seenIds.size);
    }

    if (!question.q || typeof question.q !== 'string') {
      addIssue(issues, 'error', '题目结构', '题目缺少题干 q', { id: question.id || '' });
    }

    if (!VALID_TYPES.has(question.type)) {
      addIssue(issues, 'error', '题型', `未知题型：${question.type}`, { id: question.id || '' });
    }

    if (!Array.isArray(question.grades) || question.grades.length === 0) {
      addIssue(issues, 'error', '年级', '缺少 grades 数组', { id: question.id || '' });
    } else {
      for (const grade of question.grades) {
        if (!VALID_GRADES.has(grade)) {
          addIssue(issues, 'error', '年级', `年级超出 3-6：${grade}`, { id: question.id || '' });
        }
      }
    }

    if (!question.topic || typeof question.topic !== 'string') {
      addIssue(issues, 'error', '主题', '缺少 topic 字符串', { id: question.id || '' });
    }

    if (!question.skill || typeof question.skill !== 'string') {
      addIssue(issues, 'warning', '技能', '缺少 skill 字符串', { id: question.id || '' });
    }

    if (!question.skillDetail || typeof question.skillDetail !== 'string') {
      addIssue(issues, 'warning', '技能', '缺少 skillDetail 字符串', { id: question.id || '' });
    }

    if (CHOICE_TYPES.has(question.type)) {
      if (!Array.isArray(question.choices) || question.choices.length < 2) {
        addIssue(issues, 'error', '答案', '选择类题目缺少至少 2 个选项', { id: question.id || '' });
      } else if (!Number.isInteger(question.answer) || question.answer < 0 || question.answer >= question.choices.length) {
        addIssue(issues, 'error', '答案', `选择类题目答案索引越界：${question.answer}`, { id: question.id || '' });
      }

      if (Array.isArray(question.choices)) {
        const normalizedChoices = question.choices.map(choice => normalizeAnswer(choice).toLowerCase());
        const uniqueChoices = new Set(normalizedChoices);
        if (uniqueChoices.size !== normalizedChoices.length) {
          addIssue(issues, 'warning', '选项', '选项存在重复或大小写差异重复', { id: question.id || '' });
        }
      }
    }

    if (TEXT_TYPES.has(question.type) && normalizeAnswer(question.answer) === '') {
      addIssue(issues, 'error', '答案', '输入类题目缺少文本答案', { id: question.id || '' });
    }

    const text = questionText(question);
    if (/\[audio:/i.test(text) && !/\[audio:[a-z0-9_-]+\]/i.test(text)) {
      addIssue(issues, 'warning', '音频标记', 'audio 标记格式可能无法渲染', { id: question.id || '' });
    }

    if (text.length > 260 && question.type !== 'reading') {
      addIssue(issues, 'warning', '移动端显示', '非阅读题文本较长，手机上可能拥挤', { id: question.id || '' });
    }
  }

  return issues;
}

function getLevelPool(level, questions) {
  if (level.topic === 'mixed') {
    return questions.filter(question => question.grades.includes(3));
  }
  if (Array.isArray(level.topic)) {
    return questions.filter(question => level.topic.includes(question.topic));
  }
  return questions.filter(question => question.topic === level.topic);
}

function getAssessmentPool(assessmentId, questions) {
  if (assessmentId === 17) {
    return questions.filter(question =>
      ['food', 'animals', 'family', 'home', 'school', 'colors', 'farmanimals', 'teaparty', 'billygoats'].includes(question.topic)
      && question.grades.includes(3)
    );
  }

  if (assessmentId === 18) {
    return questions.filter(question =>
      ['weather', 'numbers', 'body', 'jobs', 'science', 'shapes', 'dinosaurs', 'polaranimals'].includes(question.topic)
      && (question.grades.includes(4) || question.grades.includes(5))
    );
  }

  if (assessmentId === 19) {
    return questions.filter(question => question.grades.includes(5) || question.grades.includes(6));
  }

  return [];
}

function validateLevelCoverage(levels, assessmentLevels, questions) {
  const issues = [];
  const normalLevels = levels.map(level => {
    const pool = getLevelPool(level, questions);
    const ratio = pool.length / level.questionsPerBattle;
    const typeCounts = countBy(pool, question => question.type);
    const gradeCounts = countBy(pool.flatMap(question => question.grades.map(grade => ({ grade }))), item => item.grade);

    if (pool.length === 0) {
      addIssue(issues, 'error', '关卡题池', '关卡筛不到题，游戏会退回全题库导致主题跑偏', { levelId: level.id, levelName: level.name });
    } else if (pool.length < level.questionsPerBattle) {
      addIssue(issues, 'error', '关卡题池', `题量不足：需要 ${level.questionsPerBattle}，当前 ${pool.length}`, { levelId: level.id, levelName: level.name });
    } else if (ratio < 2) {
      addIssue(issues, 'warning', '关卡题池', `题池偏薄：每局 ${level.questionsPerBattle} 题，题池 ${pool.length} 题，重复率可能偏高`, { levelId: level.id, levelName: level.name });
    }

    return {
      id: level.id,
      name: level.name,
      topics: level.topic,
      questionsPerBattle: level.questionsPerBattle,
      availableQuestions: pool.length,
      typeCounts,
      gradeCounts
    };
  });

  const assessments = assessmentLevels.map(level => {
    const pool = getAssessmentPool(level.id, questions);
    const typeCounts = countBy(pool, question => question.type);
    const gradeCounts = countBy(pool.flatMap(question => question.grades.map(grade => ({ grade }))), item => item.grade);

    if (pool.length === 0) {
      addIssue(issues, 'error', '测评题池', '阶段测评筛不到题，会退回前 15 题', { levelId: level.id, levelName: level.name });
    } else if (pool.length < level.questionsPerBattle) {
      addIssue(issues, 'error', '测评题池', `测评题量不足：需要 ${level.questionsPerBattle}，当前 ${pool.length}`, { levelId: level.id, levelName: level.name });
    } else if (pool.length < level.questionsPerBattle * 2) {
      addIssue(issues, 'warning', '测评题池', `测评题池偏薄：每局 ${level.questionsPerBattle} 题，题池 ${pool.length} 题`, { levelId: level.id, levelName: level.name });
    }

    return {
      id: level.id,
      name: level.name,
      questionsPerBattle: level.questionsPerBattle,
      availableQuestions: pool.length,
      typeCounts,
      gradeCounts
    };
  });

  return { normalLevels, assessments, issues };
}

function validateTopicMetadata(questions, allTopics, allSkillDetails) {
  const issues = [];
  const usedTopics = [...new Set(questions.map(question => question.topic))].sort();
  const declaredTopics = new Set(allTopics);
  const duplicateDeclaredTopics = Object.entries(countBy(allTopics, topic => topic))
    .filter(([, count]) => count > 1)
    .map(([topic]) => topic);
  const missingDeclaredTopics = usedTopics.filter(topic => !declaredTopics.has(topic));
  const unusedDeclaredTopics = [...declaredTopics].filter(topic => !usedTopics.includes(topic)).sort();
  const usedSkillDetails = [...new Set(questions.map(question => question.skillDetail).filter(Boolean))].sort();
  const declaredSkillDetails = new Set(allSkillDetails);
  const missingSkillDetails = usedSkillDetails.filter(skillDetail => !declaredSkillDetails.has(skillDetail));

  if (duplicateDeclaredTopics.length > 0) {
    addIssue(issues, 'warning', '主题元数据', `allTopics 中存在重复主题：${duplicateDeclaredTopics.join(', ')}`);
  }
  if (missingDeclaredTopics.length > 0) {
    addIssue(issues, 'warning', '主题元数据', `题库使用了 allTopics 未声明的主题：${missingDeclaredTopics.join(', ')}`);
  }
  if (missingSkillDetails.length > 0) {
    addIssue(issues, 'warning', '知识点元数据', `题库使用了 allSkillDetails 未声明的知识点：${missingSkillDetails.join(', ')}`);
  }

  return {
    issues,
    usedTopics,
    duplicateDeclaredTopics,
    missingDeclaredTopics,
    unusedDeclaredTopics,
    missingSkillDetails
  };
}

function validateTypeCoverage(questions) {
  const issues = [];
  const byGrade = {};

  for (const question of questions) {
    for (const grade of question.grades || []) {
      if (!byGrade[grade]) {
        byGrade[grade] = [];
      }
      byGrade[grade].push(question);
    }
  }

  const coverage = Object.entries(byGrade)
    .sort(([a], [b]) => Number(a) - Number(b))
    .map(([grade, items]) => {
      const typeCounts = countBy(items, question => question.type);
      const missingCoreTypes = CORE_TYPES.filter(type => !typeCounts[type]);
      if (missingCoreTypes.length > 0) {
        addIssue(issues, 'warning', '题型覆盖', `${grade} 年级缺少核心题型：${missingCoreTypes.join(', ')}`);
      }
      return {
        grade: Number(grade),
        total: items.length,
        typeCounts,
        missingCoreTypes
      };
    });

  return { coverage, issues };
}

function buildMarkdown(report) {
  const issueRows = report.issues.length > 0
    ? report.issues.map(issue => (
      `| ${issue.severity} | ${issue.area} | ${issue.levelId ? `${issue.levelId} ${issue.levelName || ''}` : issue.id || '-'} | ${issue.message} |`
    )).join('\n')
    : '| - | - | - | 未发现硬错误或警告 |';

  const levelRows = report.levelCoverage.normalLevels.map(level => (
    `| ${level.id} | ${level.name} | ${Array.isArray(level.topics) ? level.topics.join(', ') : level.topics} | ${level.availableQuestions}/${level.questionsPerBattle} | ${Object.entries(level.typeCounts).map(([type, count]) => `${type}:${count}`).join(', ') || '-'} |`
  )).join('\n');

  const assessmentRows = report.levelCoverage.assessments.map(level => (
    `| ${level.id} | ${level.name} | ${level.availableQuestions}/${level.questionsPerBattle} | ${Object.entries(level.typeCounts).map(([type, count]) => `${type}:${count}`).join(', ') || '-'} | ${Object.entries(level.gradeCounts).map(([grade, count]) => `${grade}:${count}`).join(', ') || '-'} |`
  )).join('\n');

  const typeRows = report.typeCoverage.map(item => (
    `| ${item.grade} | ${item.total} | ${Object.entries(item.typeCounts).map(([type, count]) => `${type}:${count}`).join(', ')} | ${item.missingCoreTypes.join(', ') || '无'} |`
  )).join('\n');

  return `# 题库验收报告

生成时间：${report.generatedAt}

## 总览

- 总题量：${report.summary.totalQuestions}
- 结构硬错误：${report.summary.errorCount}
- 警告项：${report.summary.warningCount}
- 主题数：${report.summary.topicCount}
- 题型数：${Object.keys(report.summary.typeCounts).length}

## 问题清单

| 级别 | 区域 | 定位 | 说明 |
| --- | --- | --- | --- |
${issueRows}

## 普通关卡题池

| 关卡 | 名称 | 主题 | 可用/每局 | 题型分布 |
| ---: | --- | --- | ---: | --- |
${levelRows}

## 阶段测评题池

| 测评 | 名称 | 可用/每局 | 题型分布 | 年级分布 |
| ---: | --- | ---: | --- | --- |
${assessmentRows}

## 年级题型覆盖

| 年级 | 题量 | 题型分布 | 缺少核心题型 |
| ---: | ---: | --- | --- |
${typeRows}

## 主题元数据

- allTopics 重复项：${report.topicMetadata.duplicateDeclaredTopics.join(', ') || '无'}
- 题库使用但 allTopics 未声明：${report.topicMetadata.missingDeclaredTopics.join(', ') || '无'}
- allTopics 声明但题库未使用：${report.topicMetadata.unusedDeclaredTopics.join(', ') || '无'}
- 题库使用但 allSkillDetails 未声明：${report.topicMetadata.missingSkillDetails.join(', ') || '无'}

## 验收结论

${report.summary.errorCount === 0
  ? '- 没有发现会阻断游戏运行的题库硬错误。'
  : '- 存在题库硬错误，建议先修复后再做移动端体验测试。'}
${report.summary.warningCount === 0
  ? '- 未发现警告项。'
  : '- 存在警告项，主要影响题池丰富度、元数据维护或移动端显示质量。'}
`;
}

function main() {
  const questions = extractExportedValue(QUESTIONS_FILE, 'questions');
  const allTopics = extractExportedValue(QUESTIONS_FILE, 'allTopics');
  const allSkillDetails = extractExportedValue(QUESTIONS_FILE, 'allSkillDetails');
  const levels = extractExportedValue(LEVELS_FILE, 'levels');
  const assessmentLevels = extractExportedValue(LEVELS_FILE, 'assessmentLevels');

  const questionIssues = validateQuestions(questions);
  const levelCoverage = validateLevelCoverage(levels, assessmentLevels, questions);
  const topicMetadata = validateTopicMetadata(questions, allTopics, allSkillDetails);
  const typeCoverage = validateTypeCoverage(questions);
  const issues = [
    ...questionIssues,
    ...levelCoverage.issues,
    ...topicMetadata.issues,
    ...typeCoverage.issues
  ];

  const report = {
    generatedAt: new Date().toISOString(),
    summary: {
      totalQuestions: questions.length,
      errorCount: issues.filter(issue => issue.severity === 'error').length,
      warningCount: issues.filter(issue => issue.severity === 'warning').length,
      topicCount: new Set(questions.map(question => question.topic)).size,
      typeCounts: countBy(questions, question => question.type),
      gradeCounts: countBy(questions.flatMap(question => question.grades.map(grade => ({ grade }))), item => item.grade)
    },
    issues,
    levelCoverage: {
      normalLevels: levelCoverage.normalLevels,
      assessments: levelCoverage.assessments
    },
    typeCoverage: typeCoverage.coverage,
    topicMetadata
  };

  fs.mkdirSync(REPORT_DIR, { recursive: true });
  fs.writeFileSync(JSON_OUTPUT, `${JSON.stringify(report, null, 2)}\n`, 'utf8');
  fs.writeFileSync(MD_OUTPUT, buildMarkdown(report), 'utf8');

  process.stdout.write(`已生成题库验收报告：${MD_OUTPUT}\n`);
  process.stdout.write(`已生成题库验收明细：${JSON_OUTPUT}\n`);
  process.stdout.write(`硬错误：${report.summary.errorCount}，警告：${report.summary.warningCount}\n`);

  if (report.summary.errorCount > 0) {
    process.exitCode = 1;
  }
}

main();
