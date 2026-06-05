#!/usr/bin/env node

/**
 * Build a grade/book syllabus summary from locally saved Zhihu article images.
 *
 * The output is a review-oriented teaching baseline. It summarizes OCR clues
 * into themes, vocabulary candidates, grammar signals and sentence patterns,
 * without creating a verbatim textbook copy.
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..', '..');
const OCR_FILE = path.join(ROOT, 'reports', 'zhihu-oxford-ocr.json');
const IMAGE_MAP_FILE = path.join(ROOT, 'reports', 'zhihu-image-grade-map.json');
const REPORT_DIR = path.join(ROOT, 'reports');
const JSON_OUTPUT = path.join(REPORT_DIR, 'zhihu-oxford-syllabus-summary.json');
const MD_OUTPUT = path.join(REPORT_DIR, 'zhihu-oxford-syllabus-summary.md');

const BOOK_ORDER = ['1A', '1B', '2A', '2B', '3A', '3B', '4A', '4B', '5A', '5B', '6A', '6B'];
const GRADE_LABELS = {
  1: '一年级',
  2: '二年级',
  3: '三年级',
  4: '四年级',
  5: '五年级',
  6: '六年级'
};

const STOP_LINES = new Set([
  'look and learn',
  'look and say',
  'look and see',
  'ask and answer',
  'listen and enjoy',
  'listen and say',
  'say and act',
  'read and act',
  'read and write',
  'read and match',
  'learn the sound',
  'contents',
  'module',
  'unit',
  'page',
  'pages',
  'project',
  'revision',
  'daily expressions',
  'doily expressions',
  'grammar',
  'learn the letters',
  'oxford shanghai edition',
  'english'
]);

const OCR_FIXES = [
  [/\bi\s*can\b/gi, 'I can'],
  [/\bi\s*can't\b/gi, "I can't"],
  [/\bi\s*like\b/gi, 'I like'],
  [/\bi\s*have\b/gi, 'I have'],
  [/\bi\s*hear\b/gi, 'I hear'],
  [/\bi\s*see\b/gi, 'I see'],
  [/\bit'?s\b/gi, "It's"],
  [/\bcan i\b/gi, 'Can I'],
  [/\bwhat'?s\b/gi, "What's"],
  [/\bwho'?s\b/gi, "Who's"],
  [/\bwhere'?s\b/gi, "Where's"]
];

const THEME_RULES = [
  { theme: '感官与身体', pattern: /sense|see|hear|smell|taste|touch|eye|ear|nose|mouth|hand|body|face|hair/i },
  { theme: '食物与饮品', pattern: /food|drink|soup|rice|noodle|cake|biscuit|water|milk|juice|apple|banana|peach|orange|grape|fruit|restaurant/i },
  { theme: '季节与天气', pattern: /season|spring|summer|autumn|winter|weather|sunny|rain|wind|cloud|snow|hot|cold|warm|cool/i },
  { theme: '家庭与朋友', pattern: /family|friend|father|mother|brother|sister|grandfather|grandmother|aunt|uncle/i },
  { theme: '学校生活', pattern: /school|classroom|book|pencil|ruler|rubber|desk|teacher|student|lesson|subject/i },
  { theme: '动物', pattern: /animal|cat|dog|bird|fish|rabbit|mouse|elephant|tiger|lion|panda|duck|chick|farm|zoo/i },
  { theme: '玩具与物品', pattern: /toy|ball|kite|doll|robot|thing|bag|box|watch|clock/i },
  { theme: '颜色与形状', pattern: /colour|color|red|blue|green|yellow|black|white|shape|circle|square|triangle|star/i },
  { theme: '地点与方位', pattern: /park|home|room|kitchen|bedroom|bathroom|shop|supermarket|street|road|near|beside|behind|under|between/i },
  { theme: '职业与公共服务', pattern: /job|doctor|nurse|teacher|fireman|firefighter|police|driver|cook|postman|dentist/i },
  { theme: '交通出行', pattern: /bus|car|taxi|train|plane|ship|bike|bicycle|station|travel/i },
  { theme: '活动与能力', pattern: /run|swim|write|draw|sing|dance|jump|play|read|make|fly|skate|ride|activity/i },
  { theme: '故事阅读', pattern: /story|tale|giant|princess|king|queen|wolf|little|beanstalk|goldilocks|cinderella/i },
  { theme: '自然与科学', pattern: /plant|tree|flower|leaf|seed|water|earth|moon|sun|space|force|light|shadow|science/i },
  { theme: '环保与规则', pattern: /recycle|waste|rubbish|bin|environment|rule|must|should|sign/i }
];

const GRAMMAR_RULES = [
  { id: 'basic-be', label: 'be 动词基础搭配', minGrade: 3, pattern: /\b(am|is|are)\b/i },
  { id: 'simple-present', label: '一般现在时与日常表达', minGrade: 3, pattern: /\b(do|does|like|likes|have|has|want|wants|need|needs)\b/i },
  { id: 'modal-can', label: 'can 表能力/请求', minGrade: 3, pattern: /\bcan\b/i },
  { id: 'imperative', label: '祈使句和课堂指令', minGrade: 3, pattern: /^(look|listen|read|write|draw|smell|taste|touch|close|open|come|go|please)\b/i },
  { id: 'wh-question', label: 'what/how/where/who/whose 等特殊疑问句', minGrade: 3, pattern: /\b(what|how|where|who|whose|which|when|why)\b/i },
  { id: 'there-be', label: 'there be 句型', minGrade: 4, pattern: /\bthere\s+(is|are|was|were)\b/i },
  { id: 'present-continuous', label: '现在进行时', minGrade: 4, pattern: /\b(am|is|are)\s+[a-z]+ing\b/i },
  { id: 'third-person-singular', label: '第三人称单数', minGrade: 4, pattern: /\b(he|she|it|[A-Z][a-z]+)\s+[a-z]+(s|es|ies)\b/i },
  { id: 'simple-past', label: '一般过去时', minGrade: 4, pattern: /\b(was|were|went|ate|saw|had|did|made|came|took|visited|played|looked|liked|lived|wanted|needed|helped)\b/i },
  { id: 'future-simple', label: '一般将来时', minGrade: 5, pattern: /\b(will|shall|going to)\b/i },
  { id: 'comparative', label: '比较级/最高级入门', minGrade: 5, pattern: /\b(bigger|smaller|longer|shorter|better|worse|more|most|than)\b/i },
  { id: 'present-perfect', label: '现在完成时入门', minGrade: 6, pattern: /\b(have|has)\s+(been|done|seen|gone|made|had|taken|eaten|visited|played|looked)\b/i },
  { id: 'passive-voice', label: '被动语态入门', minGrade: 6, pattern: /\b(is|are|was|were)\s+[a-z]+ed\s+by\b/i }
];

function readJson(filePath) {
  if (!fs.existsSync(filePath)) {
    throw new Error(`缺少输入文件：${filePath}`);
  }
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function normalizeLine(line) {
  let value = String(line || '')
    .replace(/[“”]/g, '"')
    .replace(/[’]/g, "'")
    .replace(/[，]/g, ',')
    .replace(/[？]/g, '?')
    .replace(/[。]/g, '.')
    .replace(/\s+/g, ' ')
    .trim();

  for (const [pattern, replacement] of OCR_FIXES) {
    value = value.replace(pattern, replacement);
  }

  return value;
}

function normalizeForKey(value) {
  return String(value || '').toLowerCase().replace(/[^\u4e00-\u9fffa-z0-9]+/g, ' ').trim();
}

function addUnique(target, value, limit = 80) {
  const normalized = normalizeForKey(value);
  if (!value || !normalized || target.some(item => normalizeForKey(item) === normalized) || target.length >= limit) {
    return;
  }
  target.push(value);
}

function isMostlyEnglish(value) {
  const letters = (value.match(/[A-Za-z]/g) || []).length;
  return letters >= 2 && letters / Math.max(value.length, 1) > 0.45;
}

function isNoiseLine(value) {
  const normalized = normalizeForKey(value);
  if (!normalized || STOP_LINES.has(normalized)) {
    return true;
  }

  return /^\d+([-.]\d+)?$/.test(value)
    || /^知乎\b/.test(value)
    || /美英桥/.test(value)
    || /^[-•]\s*(verb|yes\/no|wh-question|imperative|imperatives|simple present|preposition)/i.test(value)
    || /^[A-Z]?\d[:：]/.test(value)
    || value.length > 120;
}

function isVocabularyCandidate(value) {
  if (!isMostlyEnglish(value) || isNoiseLine(value)) {
    return false;
  }

  if (/[?!.:,;]/.test(value)) {
    return false;
  }

  const words = value.split(/\s+/).filter(Boolean);
  const looksLikeTitle = words.length > 1 && words.every(word => /^[A-Z]/.test(word));
  const hasOcrNoise = /\b(ond|dcl|yai|whors|tnenos|hnsedts|doilg|moring|ngort|doy|doily|llook|ican|lcan|if's|lt|fn|mg|ryj|poodl|toysl|dbthes|seasans|brony)\b/i.test(value);

  return words.length >= 1
    && words.length <= 3
    && words.every(word => /^[A-Za-z][A-Za-z'-]*$/.test(word))
    && !looksLikeTitle
    && !hasOcrNoise
    && !/^(module|unit|project|page|contents|pages|grammar|daily|doily|learn)$/i.test(words[0]);
}

function isSentencePattern(value) {
  if (!isMostlyEnglish(value) || isNoiseLine(value)) {
    return false;
  }

  return /[?!.]$/.test(value)
    || /\.\.\./.test(value)
    || /^(what|how|where|who|whose|which|can|do|does|is|are|there|i |you |he |she |it |we |they |this |these |that |those )/i.test(value);
}

function isUnitOrThemeLine(value) {
  if (!isMostlyEnglish(value) || isNoiseLine(value)) {
    return false;
  }

  return /\b(module|unit|project)\b/i.test(value)
    || /^[A-Z][A-Za-z' -]{2,45}$/.test(value) && value.split(/\s+/).length <= 5;
}

function inferThemes(lines) {
  const themes = [];
  const text = lines.join('\n');
  for (const rule of THEME_RULES) {
    if (rule.pattern.test(text)) {
      themes.push(rule.theme);
    }
  }
  return themes;
}

function inferGrammar(lines) {
  const grammar = [];
  const evidenceById = {};

  for (const line of lines) {
    for (const rule of GRAMMAR_RULES) {
      if (rule.pattern.test(line)) {
        if (!evidenceById[rule.id]) {
          evidenceById[rule.id] = [];
        }
        addUnique(evidenceById[rule.id], line, 8);
      }
    }
  }

  for (const rule of GRAMMAR_RULES) {
    if (evidenceById[rule.id]) {
      grammar.push({
        id: rule.id,
        label: rule.label,
        minGrade: rule.minGrade,
        evidence: evidenceById[rule.id].slice(0, 5)
      });
    }
  }

  return grammar;
}

function buildEmptyBook(book, grade, label) {
  return {
    book,
    grade,
    label,
    files: [],
    imageCount: 0,
    averageConfidence: 0,
    unitAndThemeLines: [],
    themes: [],
    vocabularyCandidates: [],
    sentencePatterns: [],
    grammarFocus: [],
    questionBankUses: [],
    reviewNotes: []
  };
}

function getBookLabel(book) {
  const grade = Number(book[0]);
  const term = book.endsWith('A') ? '上册' : '下册';
  return `${GRADE_LABELS[grade]}${term}`;
}

function summarizeBook(bookItem) {
  if (bookItem.files.length === 0) {
    bookItem.reviewNotes.push('没有可用 OCR 图片，不能自动整理该册知识点。');
    return bookItem;
  }

  const allLines = bookItem.files.flatMap(file => file.lines);
  const allTextLength = allLines.join('').length;
  const confidenceTotal = bookItem.files.reduce((sum, file) => sum + file.confidence, 0);
  bookItem.averageConfidence = Math.round((confidenceTotal / bookItem.files.length) * 1000) / 10;

  for (const line of allLines) {
    if (isUnitOrThemeLine(line)) {
      addUnique(bookItem.unitAndThemeLines, line, 60);
    }
    if (isVocabularyCandidate(line)) {
      addUnique(bookItem.vocabularyCandidates, line, 120);
    }
    if (isSentencePattern(line)) {
      addUnique(bookItem.sentencePatterns, line, 80);
    }
  }

  bookItem.themes = inferThemes(allLines);
  bookItem.grammarFocus = inferGrammar(allLines);

  if (bookItem.averageConfidence < 45) {
    bookItem.reviewNotes.push('OCR 平均置信度偏低，词汇拼写需要人工抽查。');
  }
  if (bookItem.vocabularyCandidates.length < 10) {
    bookItem.reviewNotes.push('词汇候选较少，可能是图片页数不足或 OCR 噪声较高。');
  }
  if (allTextLength < 200) {
    bookItem.reviewNotes.push('可识别文本较少，不宜作为完整基准。');
  }

  bookItem.questionBankUses = buildQuestionBankUses(bookItem);
  return bookItem;
}

function buildQuestionBankUses(bookItem) {
  const uses = [];
  const minGrade = Math.max(bookItem.grade, 3);
  const vocabularySample = bookItem.vocabularyCandidates.slice(0, 12).join(', ');
  const sentenceSample = bookItem.sentencePatterns.slice(0, 6).join(' / ');
  const grammarSample = bookItem.grammarFocus.map(item => item.label).slice(0, 6).join('、');

  if (bookItem.grade < 3) {
    uses.push('当前游戏题库从三年级起步，本册更适合作为低年级预备词汇参考，不直接下放到 3-6 年级校验。');
  } else {
    uses.push(`可作为 ${minGrade} 年级题库的主题和词汇补充线索。`);
  }

  if (vocabularySample) {
    uses.push(`适合补充选择题、拼写题和听辨题的词汇方向：${vocabularySample}`);
  }
  if (sentenceSample) {
    uses.push(`适合补充句型操练、翻译和口语题的表达方向：${sentenceSample}`);
  }
  if (grammarSample) {
    uses.push(`分级校验时可重点关注：${grammarSample}`);
  }

  return uses;
}

function buildSummary(ocrResults, imageMap) {
  const imageByFile = new Map(imageMap.images.map(image => [image.localFile, image]));
  const books = {};

  for (const book of BOOK_ORDER) {
    const grade = Number(book[0]);
    books[book] = buildEmptyBook(book, grade, getBookLabel(book));
  }

  const unmapped = [];

  for (const result of ocrResults) {
    const mapped = imageByFile.get(result.file);
    if (!mapped || !mapped.book || !books[mapped.book]) {
      unmapped.push({
        file: result.file,
        previousText: mapped?.previousText || '',
        confidence: result.confidence
      });
      continue;
    }

    const lines = String(result.text || '')
      .split(/\r?\n/)
      .map(normalizeLine)
      .filter(line => line && !isNoiseLine(line));

    books[mapped.book].files.push({
      file: result.file,
      confidence: result.confidence,
      lines
    });
    books[mapped.book].imageCount++;
  }

  const summarizedBooks = {};
  for (const book of BOOK_ORDER) {
    summarizedBooks[book] = summarizeBook(books[book]);
  }

  const gradeSummary = {};
  for (const book of BOOK_ORDER) {
    const item = summarizedBooks[book];
    const gradeKey = String(item.grade);
    if (!gradeSummary[gradeKey]) {
      gradeSummary[gradeKey] = {
        grade: item.grade,
        label: GRADE_LABELS[item.grade],
        books: [],
        unitAndThemeLines: [],
        themes: [],
        vocabularyCandidates: [],
        sentencePatterns: [],
        grammarFocus: [],
        questionBankUses: [],
        reviewNotes: []
      };
    }

    const grade = gradeSummary[gradeKey];
    grade.books.push(book);
    for (const value of item.unitAndThemeLines) addUnique(grade.unitAndThemeLines, value, 100);
    for (const value of item.themes) addUnique(grade.themes, value, 40);
    for (const value of item.vocabularyCandidates) addUnique(grade.vocabularyCandidates, value, 160);
    for (const value of item.sentencePatterns) addUnique(grade.sentencePatterns, value, 100);
    for (const value of item.questionBankUses) addUnique(grade.questionBankUses, value, 40);
    for (const value of item.reviewNotes) addUnique(grade.reviewNotes, `${book}: ${value}`, 40);

    for (const grammar of item.grammarFocus) {
      if (!grade.grammarFocus.some(existing => existing.id === grammar.id)) {
        grade.grammarFocus.push({
          id: grammar.id,
          label: grammar.label,
          minGrade: grammar.minGrade,
          books: [book]
        });
      } else {
        const existing = grade.grammarFocus.find(entry => entry.id === grammar.id);
        if (!existing.books.includes(book)) {
          existing.books.push(book);
        }
      }
    }
  }

  return {
    generatedAt: new Date().toISOString(),
    source: {
      page: 'https://zhuanlan.zhihu.com/p/699538900',
      imageFolder: 'resources/zhihu-oxford-images',
      ocrFile: 'reports/zhihu-oxford-ocr.json',
      imageMapFile: 'reports/zhihu-image-grade-map.json',
      note: '本结果是 OCR 摘要和教学线索整理，不是官方完整教材词表或逐字复刻。'
    },
    totals: {
      ocrImages: ocrResults.length,
      mappedImages: ocrResults.length - unmapped.length,
      unmappedImages: unmapped.length,
      averageConfidence: Math.round((ocrResults.reduce((sum, item) => sum + item.confidence, 0) / Math.max(ocrResults.length, 1)) * 1000) / 10
    },
    books: summarizedBooks,
    grades: gradeSummary,
    unmapped
  };
}

function formatList(items, limit = 20) {
  const values = items.slice(0, limit);
  if (values.length === 0) {
    return '- 暂无可靠线索';
  }
  return values.map(item => `- ${item}`).join('\n');
}

function formatGrammar(items) {
  if (items.length === 0) {
    return '- 暂无明确语法线索';
  }
  return items.map(item => {
    const books = item.books ? `（见于 ${item.books.join(', ')}）` : '';
    const evidence = item.evidence ? `；例证线索：${item.evidence.slice(0, 3).join(' / ')}` : '';
    return `- ${item.label}${books}${evidence}`;
  }).join('\n');
}

function buildMarkdown(summary) {
  const gradeSections = Object.values(summary.grades)
    .sort((a, b) => a.grade - b.grade)
    .map(grade => `## ${grade.label}

覆盖册次：${grade.books.join(', ')}

### 主题线索
${formatList(grade.themes, 24)}

### 单元/目录线索
${formatList(grade.unitAndThemeLines, 32)}

### 词汇方向
${formatList(grade.vocabularyCandidates, 36)}

### 语法重点
${formatGrammar(grade.grammarFocus)}

### 句型方向
${formatList(grade.sentencePatterns, 24)}

### 题库补充与校验用途
${formatList(grade.questionBankUses, 12)}

### 复核提示
${formatList(grade.reviewNotes, 12)}
`).join('\n');

  const bookRows = BOOK_ORDER.map(book => {
    const item = summary.books[book];
    return `| ${book} | ${item.label} | ${item.imageCount} | ${item.averageConfidence}% | ${item.themes.join('、') || '-'} | ${item.grammarFocus.map(grammar => grammar.label).join('、') || '-'} |`;
  }).join('\n');

  const unmappedRows = summary.unmapped.length > 0
    ? summary.unmapped.map(item => `- ${item.file}：${item.previousText || '无归属标题'}`).join('\n')
    : '- 无';

  return `# 上海牛津版图片 OCR 年级知识点整理

生成时间：${summary.generatedAt}

## 使用边界

- 来源：用户保存的知乎页面图片和 \`body.txt\`。
- 性质：OCR 后的教学线索摘要，用于题库扩充和分级校验，不是官方完整词表。
- 版权处理：本报告只保留主题、词汇方向、语法点和短句型线索，避免逐页逐字复刻教材。
- 质量提醒：整体 OCR 平均置信度 ${summary.totals.averageConfidence}%，拼写和低置信度册次需要人工抽查。

## 总览

- OCR 图片数：${summary.totals.ocrImages}
- 已归属图片数：${summary.totals.mappedImages}
- 未归属图片数：${summary.totals.unmappedImages}

| 册次 | 年级册次 | 图片数 | OCR 均值 | 主题线索 | 语法线索 |
| --- | --- | ---: | ---: | --- | --- |
${bookRows}

${gradeSections}

## 未归属图片

${unmappedRows}
`;
}

function main() {
  const ocrResults = readJson(OCR_FILE);
  const imageMap = readJson(IMAGE_MAP_FILE);
  const summary = buildSummary(ocrResults, imageMap);

  fs.mkdirSync(REPORT_DIR, { recursive: true });
  fs.writeFileSync(JSON_OUTPUT, `${JSON.stringify(summary, null, 2)}\n`, 'utf8');
  fs.writeFileSync(MD_OUTPUT, buildMarkdown(summary), 'utf8');

  process.stdout.write(`已生成知识点整理：${MD_OUTPUT}\n`);
  process.stdout.write(`已生成结构化明细：${JSON_OUTPUT}\n`);
  process.stdout.write(`OCR 图片 ${summary.totals.ocrImages} 张，已归属 ${summary.totals.mappedImages} 张。\n`);
}

main();
