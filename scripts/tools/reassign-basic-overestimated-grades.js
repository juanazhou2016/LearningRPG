#!/usr/bin/env node

/**
 * Reassign clearly basic overestimated items to grade 3.
 *
 * The latest alignment report marks some items as overestimated after a prior
 * conservative move to grade 6. Only items whose recommended minimum grade is
 * exactly 3 are moved back to grade 3.
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
    .filter(question => question.verdict === 'overestimated' && question.recommendedMinGrade === 3)
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
      return `${prefix} [3]`;
    });
  }

  fs.writeFileSync(QUESTIONS_FILE, source, 'utf8');
  process.stdout.write(`已调整 ${changed}/${ids.length} 道明显基础题到 3 年级。\n`);
}

main();
