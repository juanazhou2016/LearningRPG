#!/usr/bin/env node

/**
 * Map locally saved Zhihu article images to grade/book labels from body HTML.
 *
 * It reads the article body source, walks paragraphs and figures in order, and
 * assigns each image to the nearest preceding grade/book heading.
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..', '..');
const IMAGE_DIR = path.join(ROOT, 'resources', 'zhihu-oxford-images');
const BODY_FILE = path.join(IMAGE_DIR, 'body.txt');
const REPORT_DIR = path.join(ROOT, 'reports');
const JSON_OUTPUT = path.join(REPORT_DIR, 'zhihu-image-grade-map.json');
const MD_OUTPUT = path.join(REPORT_DIR, 'zhihu-image-grade-map.md');

const GRADE_BOOK_PATTERNS = [
  { pattern: /一年级上册|1A/i, grade: 1, book: '1A', label: '一年级上册' },
  { pattern: /一年级下册|1B/i, grade: 1, book: '1B', label: '一年级下册' },
  { pattern: /二年级上册|2A/i, grade: 2, book: '2A', label: '二年级上册' },
  { pattern: /二年级下册|2B/i, grade: 2, book: '2B', label: '二年级下册' },
  { pattern: /三年级上册|3A/i, grade: 3, book: '3A', label: '三年级上册' },
  { pattern: /三年级下册|3B/i, grade: 3, book: '3B', label: '三年级下册' },
  { pattern: /四年级上册|4A/i, grade: 4, book: '4A', label: '四年级上册' },
  { pattern: /四年级下册|4B/i, grade: 4, book: '4B', label: '四年级下册' },
  { pattern: /五年级上册|5A/i, grade: 5, book: '5A', label: '五年级上册' },
  { pattern: /五年级下册|5B/i, grade: 5, book: '5B', label: '五年级下册' },
  { pattern: /六年级上册|6A/i, grade: 6, book: '6A', label: '六年级上册' },
  { pattern: /六年级下册|6B/i, grade: 6, book: '6B', label: '六年级下册' }
];

function stripTags(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<style[\s\S]*?<\/style>/gi, '')
    .replace(/<[^>]+>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#x27;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/\s+/g, ' ')
    .trim();
}

function extractHash(value) {
  const match = String(value || '').match(/v2-[a-z0-9]+/i);
  return match ? match[0] : '';
}

function getCurrentBookFromText(text) {
  const isCatalogueHeading = /[一二三四五六七八九十]+：/.test(text) && /教材目录/.test(text);
  if (!isCatalogueHeading) {
    return null;
  }

  for (const item of GRADE_BOOK_PATTERNS) {
    if (item.pattern.test(text)) {
      return item;
    }
  }
  return null;
}

function getLocalImages() {
  return fs.readdirSync(IMAGE_DIR)
    .filter(file => /\.(jpe?g|png|webp|avif)$/i.test(file))
    .map(file => ({
      file,
      hash: extractHash(file)
    }));
}

function parseBody(body) {
  const tokenPattern = /<p\b[\s\S]*?<\/p>|<h[1-6]\b[\s\S]*?<\/h[1-6]>|<figure\b[\s\S]*?<\/figure>/gi;
  const tokens = body.match(tokenPattern) || [];
  const localImages = getLocalImages();
  const localByHash = new Map(localImages.map(image => [image.hash, image.file]));
  const results = [];
  const bookSections = [];
  let currentBook = null;
  let lastHeading = '';

  for (const token of tokens) {
    if (/^<p\b|^<h[1-6]\b/i.test(token)) {
      const text = stripTags(token);
      if (!text) {
        continue;
      }

      const matchedBook = getCurrentBookFromText(text);
      if (matchedBook) {
        if (currentBook) {
          bookSections.push(currentBook);
        }
        currentBook = {
          ...matchedBook,
          heading: text,
          imageCount: 0
        };
      }
      lastHeading = text;
      continue;
    }

    const imgMatches = [...token.matchAll(/<img\b[^>]*>/gi)];
    for (const imgMatch of imgMatches) {
      const imgTag = imgMatch[0];
      const srcMatch = imgTag.match(/\bsrc=["']([^"']+)["']/i);
      const originalMatch = imgTag.match(/\bdata-original=["']([^"']+)["']/i);
      const rawWidthMatch = imgTag.match(/\bdata-rawwidth=["']?(\d+)/i);
      const rawHeightMatch = imgTag.match(/\bdata-rawheight=["']?(\d+)/i);
      const src = srcMatch ? srcMatch[1] : '';
      const original = originalMatch ? originalMatch[1] : '';
      const hash = extractHash(src) || extractHash(original);
      const localFile = localByHash.get(hash) || '';

      results.push({
        index: results.length + 1,
        hash,
        localFile,
        grade: currentBook?.grade || null,
        book: currentBook?.book || '',
        label: currentBook?.label || '未识别',
        heading: currentBook?.heading || '',
        previousText: lastHeading,
        rawWidth: rawWidthMatch ? Number(rawWidthMatch[1]) : null,
        rawHeight: rawHeightMatch ? Number(rawHeightMatch[1]) : null,
        src
      });

      if (currentBook) {
        currentBook.imageCount++;
      }
    }
  }

  if (currentBook) {
    bookSections.push(currentBook);
  }

  const referencedHashes = new Set(results.map(item => item.hash).filter(Boolean));
  const unmatchedLocalImages = localImages
    .filter(image => !referencedHashes.has(image.hash))
    .map(image => image.file);

  return {
    generatedAt: new Date().toISOString(),
    source: BODY_FILE,
    totals: {
      bodyImages: results.length,
      localImages: localImages.length,
      matchedLocalImages: results.filter(item => item.localFile).length,
      unmatchedLocalImages: unmatchedLocalImages.length
    },
    bookSections,
    missingBookSections: GRADE_BOOK_PATTERNS
      .filter(expected => !bookSections.some(section => section.book === expected.book))
      .map(expected => ({
        grade: expected.grade,
        book: expected.book,
        label: expected.label,
        reason: '页面代码中未找到该册标题'
      })),
    emptyBookSections: bookSections
      .filter(section => section.imageCount === 0)
      .map(section => ({
        grade: section.grade,
        book: section.book,
        label: section.label,
        heading: section.heading,
        reason: '页面代码中该册标题后没有正文 figure 图片；可能只有商品卡或未保存正文图'
      })),
    unmatchedLocalImages,
    images: results
  };
}

function buildMarkdown(report) {
  const rows = report.images.map(item => (
    `| ${item.index} | ${item.localFile || '-'} | ${item.hash || '-'} | ${item.label} | ${item.book || '-'} | ${item.heading || item.previousText || '-'} |`
  )).join('\n');

  const unmatched = report.unmatchedLocalImages.length > 0
    ? report.unmatchedLocalImages.map(file => `- ${file}`).join('\n')
    : '- 无';
  const sectionRows = report.bookSections.map(section => (
    `| ${section.label} | ${section.book} | ${section.imageCount} | ${section.heading} |`
  )).join('\n');
  const emptySections = report.emptyBookSections.length > 0
    ? report.emptyBookSections.map(section => `- ${section.label}（${section.book}）：${section.reason}`).join('\n')
    : '- 无';
  const missingSections = report.missingBookSections.length > 0
    ? report.missingBookSections.map(section => `- ${section.label}（${section.book}）：${section.reason}`).join('\n')
    : '- 无';

  return `# 知乎页面图片年级归属识别

生成时间：${report.generatedAt}

依据：\`resources/zhihu-oxford-images/body.txt\` 中的文章正文顺序、年级/册次标题，以及图片 URL 中的 \`v2-...\` 标识与本地文件名匹配。

## 汇总

- 页面正文图片数：${report.totals.bodyImages}
- 本地图片数：${report.totals.localImages}
- 已匹配本地图片数：${report.totals.matchedLocalImages}
- 未在正文中匹配到的本地图片数：${report.totals.unmatchedLocalImages}

## 册次标题与正文图片数

| 年级册次 | 册次 | 正文图片数 | 依据标题 |
| --- | --- | ---: | --- |
${sectionRows}

## 有标题但无正文图片的册次

${emptySections}

## 页面代码中缺失标题的册次

${missingSections}

## 图片归属表

| 序号 | 本地文件 | 图片标识 | 年级归属 | 册次 | 依据标题 |
| ---: | --- | --- | --- | --- | --- |
${rows}

## 未匹配到正文图片标识的本地文件

${unmatched}
`;
}

function main() {
  const body = fs.readFileSync(BODY_FILE, 'utf8');
  const report = parseBody(body);
  fs.mkdirSync(REPORT_DIR, { recursive: true });
  fs.writeFileSync(JSON_OUTPUT, `${JSON.stringify(report, null, 2)}\n`, 'utf8');
  fs.writeFileSync(MD_OUTPUT, buildMarkdown(report), 'utf8');
  process.stdout.write(`已生成图片归属报告：${MD_OUTPUT}\n`);
  process.stdout.write(`已生成图片归属明细：${JSON_OUTPUT}\n`);
  process.stdout.write(`页面图片 ${report.totals.bodyImages} 张，本地匹配 ${report.totals.matchedLocalImages} 张。\n`);
}

main();
