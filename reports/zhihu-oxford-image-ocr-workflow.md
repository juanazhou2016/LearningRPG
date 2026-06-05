# 知乎上海牛津版图片 OCR 整理流程

来源页面：https://zhuanlan.zhihu.com/p/699538900

## 使用边界

- 本流程用于生成题库年级校验所需的学习大纲线索。
- 不建议把教材或页面图片中的内容逐字完整复刻进项目。
- 最终应输出主题、词汇范围、语法点、句式类型和待复核项。

## 手动准备图片

1. 在已登录知乎的浏览器里打开来源页面。
2. 逐张保存和教材目录/词汇/语法/句式相关的图片。
3. 放到项目目录：`resources/zhihu-oxford-images/`
4. 建议命名为：`grade-3a-01.png`、`grade-3b-02.png` 这类带年级和册次的文件名。

## 运行 OCR

```bash
swift scripts/tools/ocr-images.swift resources/zhihu-oxford-images reports/zhihu-oxford-ocr.json
```

## 生成整理草稿

```bash
node scripts/tools/build-syllabus-from-ocr.js
```

默认输出：

- `reports/zhihu-oxford-ocr.json`
- `reports/zhihu-oxford-syllabus-draft.md`
- `reports/zhihu-oxford-syllabus-draft.json`

## 后续接入校验基准

人工复核 `reports/zhihu-oxford-syllabus-draft.md` 后，再把确认可靠的主题、语法、句式写入：

- `scripts/data/shanghaiOxfordSyllabus.js`

这样可以让 `scripts/tools/validate-grade-alignment.js` 按更具体的教材线索重新校验题库。
