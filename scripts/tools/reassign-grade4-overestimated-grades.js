#!/usr/bin/env node

/**
 * Reassign remaining overestimated grade-alignment items to grade 4.
 *
 * It uses the latest alignment report and only touches items whose verdict is
 * overestimated and whose recommended minimum grade is exactly 4.
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..', '..');
const QUESTIONS_FILE = path.join(ROOT, 'scripts', 'data', 'questions.js');
const ALIGNMENT_REPORT = path.join(ROOT, 'reports', 'shanghai-oxford-grade-alignment.json');

function escapeRegExp(value) {
  return String(value).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function main() {
  const report = JSON.parse(fs.readFileSync(ALIGNMENT_REPORT, 'utf8'));
  const ids = report.questions
    .filter(question => question.verdict === 'overestimated' && question.recommendedMinGrade === 4)
    .map(question => question.id);

  let source = fs.readFileSync(QUESTIONS_FILE, 'utf8');
  let changed = 0;

  for (const id of ids) {
    const pattern = new RegExp(`(id: '${escapeRegExp(id)}',[\\s\\S]*?grades:) \\[[^\\]]*\\]`);

    if (!pattern.test(source)) {
      throw new Error(`未找到题目：${id}`);
    }

    source = source.replace(pattern, (match, prefix) => {
      changed++;
      return `${prefix} [4]`;
    });
  }

  fs.writeFileSync(QUESTIONS_FILE, source, 'utf8');
  process.stdout.write(`已调整 ${changed}/${ids.length} 道四年级基础题到 4 年级。\n`);
}

main();
