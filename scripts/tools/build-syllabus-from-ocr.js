#!/usr/bin/env node

/**
 * Build a review-oriented syllabus draft from OCR results.
 *
 * The output is a summary for grade-alignment work. It intentionally avoids
 * creating a verbatim textbook copy; keep the generated draft for review and
 * cite the original page/images when using it.
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..', '..');
const DEFAULT_INPUT = path.join(ROOT, 'reports', 'zhihu-oxford-ocr.json');
const DEFAULT_MD_OUTPUT = path.join(ROOT, 'reports', 'zhihu-oxford-syllabus-draft.md');
const DEFAULT_JSON_OUTPUT = path.join(ROOT, 'reports', 'zhihu-oxford-syllabus-draft.json');

const GRADE_PATTERNS = [
  { pattern: /(一年级|1A|1B|1\s*年级)/i, grade: 1 },
  { pattern: /(二年级|2A|2B|2\s*年级)/i, grade: 2 },
  { pattern: /(三年级|3A|3B|3\s*年级)/i, grade: 3 },
  { pattern: /(四年级|4A|4B|4\s*年级)/i, grade: 4 },
  { pattern: /(五年级|5A|5B|5\s*年级)/i, grade: 5 },
  { pattern: /(六年级|6A|6B|6\s*年级)/i, grade: 6 }
];

const SECTION_PATTERNS = {
  vocabulary: /(word|vocabulary|词汇|单词|核心词)/i,
  grammar: /(grammar|语法|时态|句型结构|be动词|过去式|现在进行时|完成时|被动)/i,
  sentencePatterns: /(sentence|pattern|句式|句型|表达|重点句)/i,
  units: /(unit|module|单元|模块|目录)/i
};

function usage() {
  process.stderr.write('Usage: node scripts/tools/build-syllabus-from-ocr.js [ocr-json] [markdown-output] [json-output]\n');
  process.exit(2);
}

function compactLine(line) {
  return line.replace(/\s+/g, ' ').trim();
}

function inferGrade(file, text) {
  const haystack = `${file}\n${text}`;
  for (const rule of GRADE_PATTERNS) {
    if (rule.pattern.test(haystack)) {
      return rule.grade;
    }
  }
  return null;
}

function classifyLine(line) {
  const matches = [];
  for (const [section, pattern] of Object.entries(SECTION_PATTERNS)) {
    if (pattern.test(line)) {
      matches.push(section);
    }
  }
  return matches.length > 0 ? matches : ['other'];
}

function addUnique(target, value, limit = 120) {
  if (!value || target.includes(value) || target.length >= limit) {
    return;
  }
  target.push(value);
}

function buildDraft(ocrResults) {
  const draft = {
    source: {
      page: 'https://zhuanlan.zhihu.com/p/699538900',
      note: '由用户手动保存页面图片后 OCR 得到。此草稿用于题库校验，不是官方完整教材复刻。'
    },
    grades: {}
  };

  for (const result of ocrResults) {
    const grade = inferGrade(result.file, result.text) || 'unknown';
    if (!draft.grades[grade]) {
      draft.grades[grade] = {
        files: [],
        units: [],
        vocabulary: [],
        grammar: [],
        sentencePatterns: [],
        other: []
      };
    }

    draft.grades[grade].files.push({
      file: result.file,
      confidence: result.confidence
    });

    const lines = String(result.text || '')
      .split(/\r?\n/)
      .map(compactLine)
      .filter(line => line.length >= 2);

    for (const line of lines) {
      for (const section of classifyLine(line)) {
        addUnique(draft.grades[grade][section], line);
      }
    }
  }

  return draft;
}

function buildMarkdown(draft) {
  const gradeKeys = Object.keys(draft.grades).sort((a, b) => {
    if (a === 'unknown') return 1;
    if (b === 'unknown') return -1;
    return Number(a) - Number(b);
  });

  const sections = gradeKeys.map(grade => {
    const item = draft.grades[grade];
    return `## ${grade === 'unknown' ? '未识别年级' : `${grade} 年级`}

图片文件：${item.files.map(file => `${file.file}(${Math.round(file.confidence * 100)}%)`).join(', ') || '无'}

### 单元/目录线索
${item.units.map(line => `- ${line}`).join('\n') || '- 暂无明确线索'}

### 词汇线索
${item.vocabulary.map(line => `- ${line}`).join('\n') || '- 暂无明确线索'}

### 语法线索
${item.grammar.map(line => `- ${line}`).join('\n') || '- 暂无明确线索'}

### 句式线索
${item.sentencePatterns.map(line => `- ${line}`).join('\n') || '- 暂无明确线索'}

### 其他待复核线索
${item.other.slice(0, 80).map(line => `- ${line}`).join('\n') || '- 暂无'}
`;
  }).join('\n');

  return `# 知乎上海牛津版教材图片 OCR 整理草稿

来源页面：${draft.source.page}

说明：本文件是 OCR 后的学习大纲草稿，用于题库年级校验。它不是官方完整词表，也不应作为教材内容的逐字复刻发布。

${sections}
`;
}

function main() {
  const input = process.argv[2] ? path.resolve(process.argv[2]) : DEFAULT_INPUT;
  const markdownOutput = process.argv[3] ? path.resolve(process.argv[3]) : DEFAULT_MD_OUTPUT;
  const jsonOutput = process.argv[4] ? path.resolve(process.argv[4]) : DEFAULT_JSON_OUTPUT;

  if (process.argv.length > 5) {
    usage();
  }

  if (!fs.existsSync(input)) {
    throw new Error(`OCR JSON 不存在：${input}`);
  }

  const ocrResults = JSON.parse(fs.readFileSync(input, 'utf8'));
  if (!Array.isArray(ocrResults)) {
    throw new Error('OCR JSON 格式错误：应为数组');
  }

  const draft = buildDraft(ocrResults);
  fs.mkdirSync(path.dirname(markdownOutput), { recursive: true });
  fs.mkdirSync(path.dirname(jsonOutput), { recursive: true });
  fs.writeFileSync(jsonOutput, `${JSON.stringify(draft, null, 2)}\n`, 'utf8');
  fs.writeFileSync(markdownOutput, buildMarkdown(draft), 'utf8');

  process.stdout.write(`已生成整理草稿：${markdownOutput}\n`);
  process.stdout.write(`已生成 JSON 草稿：${jsonOutput}\n`);
}

main();
