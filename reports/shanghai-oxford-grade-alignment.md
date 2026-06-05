# 上海牛津版题库年级匹配校验报告

生成时间：2026-06-05T05:22:01.999Z

## 校验口径

- 教材基准：英语（牛津上海版）3A-6B。
- 上海学制：上海小学为 1-5 年级，报告中的 6 年级按上海六年级/初中起始段处理。
- 校验方式：结合项目内词汇年级映射、主题基准、语法信号、题型难度和结构校验进行保守判定。
- 重要说明：当前仓库没有逐册逐页教材词表，因此本报告用于定位风险题和给出建议年级，不自动修改题库。

## 基准数据来源

- 基准状态：partial-review-baseline
- 基准文件：scripts/data/shanghaiOxfordSyllabus.js

| 来源 | 地址 | 用途 |
| --- | --- | --- |
| 上海市教育委员会五四学制通知 | https://service.shanghai.gov.cn/xingzhengwendangkujyh/XZGFDetails.aspx?docid=REPORT_NDOC_001002 | 确认上海小学 1-5 年级、六年级为初中起始段。 |
| 义务教育课程方案和课程标准（2022年版） | https://www.shanghai.gov.cn/rkywjy1/20230628/45e23e72e2fb4098b0922dbc7fc8334a.html | 作为英语课程能力进阶的总口径。 |
| 知乎：上海牛津版小学英语全套课本介绍和目录 | https://zhuanlan.zhihu.com/p/699538900 | 确认上海地区版本、五四制、出版社和目录图片线索。 |
| 本地 OCR 年级知识点整理 | reports/zhihu-oxford-syllabus-summary.md | 由用户保存图片和 body.txt 归属表生成，用于补充 3A-5B 主题、句型和语法证据；OCR 噪声需人工复核。 |
| 项目内 vocabulary-grade.js | scripts/data/vocabulary-grade.js | 补充主题词汇难度和题库当前主题体系。 |

## 年级基准

- 3 年级：上海牛津版小学中段入门：基础词汇、简单现在时、基础 be 动词、简单句。
- 4 年级：上海牛津版小学中高段：主题扩展、现在进行时、简单过去时入门、基础阅读。
- 5 年级：上海小学高年级：一般过去时、不规则过去式、一般将来时、较长语篇。
- 6 年级：上海五四学制下六年级按初中起始段处理：可接受完成时、被动语态基础和复合句入门。

## 总览

- 总题量：913
- 年级匹配率：100%
- 结构问题题数：0
- 主题数量：63

| 判定 | 题数 |
| --- | ---: |
| 匹配 | 913 |
| 偏低 | 0 |
| 偏高 | 0 |
| 需人工复核 | 0 |

## 各年级题量

| 年级 | 题数 |
| --- | ---: |
| 3 | 307 |
| 4 | 317 |
| 5 | 197 |
| 6 | 92 |

## 主题题量 Top 30

| 主题 | 题数 |
| --- | ---: |
| food | 38 |
| family | 29 |
| weather | 27 |
| clothes | 27 |
| emotion | 24 |
| undersea | 22 |
| winter | 22 |
| grammar | 21 |
| character | 21 |
| fruit | 21 |
| jungle | 21 |
| transport | 20 |
| vegetables | 20 |
| snowwhite | 20 |
| space | 20 |
| forces | 20 |
| shapes | 20 |
| cinderella | 18 |
| pets | 17 |
| animals | 16 |
| superhero | 16 |
| science | 16 |
| teaparty | 15 |
| sleepingbeauty | 15 |
| bearhunt | 15 |
| jackbeanstalk | 15 |
| redridinghood | 15 |
| bedroom | 15 |
| bathroom | 15 |
| kitchen | 15 |

## 关卡结构问题

| 关卡 | 名称 | 主题 | 可用/需要 | 问题 |
| ---: | --- | --- | ---: | --- |
| - | - | - | - | 未发现 |

## 题型覆盖

| 年级 | 题型分布 | 缺少核心题型 |
| ---: | --- | --- |
| 3 | choice:213, fill:86, spell:6, listen:2 | 无 |
| 4 | grammar:2, fill:62, choice:195, listen:1, translate:51, spell:6 | 无 |
| 5 | choice:121, fill:46, translate:21, reading:2, listen:1, spell:6 | 无 |
| 6 | fill:32, reading:2, choice:49, translate:7, spell:2 | 无 |

## 越级/低估题清单

这些题的实际难度高于当前标注年级，建议优先复核。

| ID | 当前年级 | 建议年级 | 主题 | 题型 | 原因 |
| --- | --- | --- | --- | --- | --- |
| - | - | - | - | - | 未发现 |

## 偏高题清单

这些题可能比当前标注年级更基础，可考虑下放或扩展适用年级。

| ID | 当前年级 | 建议年级 | 主题 | 题型 | 原因 |
| --- | --- | --- | --- | --- | --- |
| - | - | - | - | - | 未发现 |

## 需人工复核题清单

| ID | 当前年级 | 主题 | 题型 | 原因 |
| --- | --- | --- | --- | --- |
| - | - | - | - | 未发现 |

## 可直接修改的建议年级标记

| ID | 当前年级 | 建议年级 | 判定 | 原因 |
| --- | --- | --- | --- | --- |
| - | - | - | - | 未发现 |

## 明细文件

- JSON 明细：reports/shanghai-oxford-grade-alignment.json
- 每题均包含判定、建议年级和至少一条判断理由。
