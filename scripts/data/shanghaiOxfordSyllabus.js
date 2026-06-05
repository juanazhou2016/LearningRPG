/**
 * Shanghai Oxford English syllabus baseline for grade alignment checks.
 *
 * This is a review baseline, not a verbatim official textbook word list. It
 * combines public version/catalogue clues, Shanghai five-four school system,
 * the national 2022 English curriculum standard, and this project's existing
 * topic vocabulary mapping. Keep it conservative and auditable.
 */

export const shanghaiOxfordSyllabus = {
  meta: {
    name: '英语（牛津上海版）3A-6B 年级适配基准',
    status: 'partial-review-baseline',
    locale: 'Shanghai',
    schoolSystem: '上海五四学制：小学 1-5 年级，六年级按初中起始段处理',
    textbookVersion: '英语（牛津上海版）/ 上海教育出版社 + 牛津大学出版社线索',
    notes: [
      '不是官方完整词表复刻，避免把非官方资料误当官方内容。',
      '用于题库风险定位、年级建议和人工复核排序。',
      '如拿到逐册词表和语法目录，可在 unitBands、topicBenchmarks、grammarBenchmarks 中继续补充。'
    ],
    sourceNotes: [
      {
        label: '上海市教育委员会五四学制通知',
        url: 'https://service.shanghai.gov.cn/xingzhengwendangkujyh/XZGFDetails.aspx?docid=REPORT_NDOC_001002',
        usage: '确认上海小学 1-5 年级、六年级为初中起始段。'
      },
      {
        label: '义务教育课程方案和课程标准（2022年版）',
        url: 'https://www.shanghai.gov.cn/rkywjy1/20230628/45e23e72e2fb4098b0922dbc7fc8334a.html',
        usage: '作为英语课程能力进阶的总口径。'
      },
      {
        label: '知乎：上海牛津版小学英语全套课本介绍和目录',
        url: 'https://zhuanlan.zhihu.com/p/699538900',
        usage: '确认上海地区版本、五四制、出版社和目录图片线索。'
      },
      {
        label: '本地 OCR 年级知识点整理',
        url: 'reports/zhihu-oxford-syllabus-summary.md',
        usage: '由用户保存图片和 body.txt 归属表生成，用于补充 3A-5B 主题、句型和语法证据；OCR 噪声需人工复核。'
      },
      {
        label: '项目内 vocabulary-grade.js',
        url: 'scripts/data/vocabulary-grade.js',
        usage: '补充主题词汇难度和题库当前主题体系。'
      }
    ]
  },

  gradeBands: {
    3: {
      stage: '小学中段入门',
      allowedGrammar: ['simple-present', 'basic-be', 'simple-negation', 'imperative-basic'],
      cautionGrammar: ['third-person-singular', 'present-continuous'],
      blockedGrammar: ['present-perfect', 'passive-voice', 'object-clause'],
      typeNotes: '以选择、听辨、基础填空和拼写为主；完整翻译题需谨慎。'
    },
    4: {
      stage: '小学中高段扩展',
      allowedGrammar: ['third-person-singular', 'present-continuous', 'there-be', 'countable-uncountable', 'simple-past-regular'],
      cautionGrammar: ['irregular-past', 'future-simple'],
      blockedGrammar: ['present-perfect', 'passive-voice', 'object-clause'],
      typeNotes: '可加入显性语法、较短阅读和简单翻译。'
    },
    5: {
      stage: '上海小学高年级',
      allowedGrammar: ['simple-past', 'irregular-past', 'future-simple', 'comparative-basic', 'longer-reading'],
      cautionGrammar: ['present-perfect-basic', 'passive-voice-basic'],
      blockedGrammar: ['advanced-object-clause', 'subjunctive'],
      typeNotes: '可加入较长语篇、过去时和将来时综合练习。'
    },
    6: {
      stage: '上海六年级/初中起始段',
      allowedGrammar: ['present-perfect-basic', 'passive-voice-basic', 'compound-sentence-basic'],
      cautionGrammar: ['advanced-passive', 'subjunctive'],
      blockedGrammar: [],
      typeNotes: '可接受更抽象主题、初中入门语法和综合阅读。'
    }
  },

  unitBands: [
    {
      grades: [3],
      sourceBooks: ['3A', '3B'],
      themes: ['greetings', 'name and age', 'family', 'friends', 'school places', 'shopping', 'park', 'insects', 'farm animals', 'plants', 'five senses', 'transport', 'food', 'simple stories'],
      grammarFocus: ['pronouns I/you/he/she', 'basic be', 'have/has entry', 'my/your possessives', 'imperatives', 'yes-no questions', 'wh questions', 'modal can', 'simple present'],
      sentenceFunctions: ['How are you?', 'What is your name?', 'How old are you?', 'Who is he/she?', 'Can I have ...?', 'What can you see/hear?', 'How does it feel?'],
      confidence: 'medium'
    },
    {
      grades: [4],
      sourceBooks: ['4A', '4B'],
      themes: ['abilities', 'feelings', 'fruit and taste', 'touch and texture', 'sun and shadow', 'sports', 'cute animals', 'home life', 'sounds', 'time', 'days of the week', 'music', 'Chinese festivals'],
      grammarFocus: ['modal can with he/she/it', 'be + feelings', 'alternative questions', 'whose and possessive nouns', 'prepositions of place', 'simple present with frequency', 'present continuous entry', 'there be'],
      sentenceFunctions: ['Can he/she ...?', 'How do you feel?', 'What do you have?', 'Is it ... or ...?', 'How does it taste/feel?', 'Whose ... is this/that?', 'What time is it?'],
      confidence: 'medium'
    },
    {
      grades: [5],
      sourceBooks: ['5A', '5B'],
      themes: ['birthdays and dates', 'jobs', 'stories', 'school things', 'growth and life cycle', 'sounds and noise', 'food and drinks', 'films', 'school subjects', 'signs and rules', 'science objects such as magnets'],
      grammarFocus: ['ordinal numbers and dates', 'when questions', 'third-person singular', 'want to be / be good at', 'possessive pronouns mine/yours/his/hers/ours/theirs', 'simple past', 'shall', 'must/should/can for rules', 'longer reading'],
      sentenceFunctions: ['When is your birthday?', 'What time does ... begin?', 'What does he/she do?', 'Whose ... is this?', 'It is mine/hers/theirs.', 'What should I do?', 'What does this sign mean?'],
      confidence: 'medium'
    },
    {
      grades: [6],
      themes: ['space', 'forces', 'environment', 'abstract traits', 'integrated grammar'],
      grammarFocus: ['present perfect entry', 'passive voice entry', 'compound sentences'],
      sentenceFunctions: ['experience and result expressions', 'basic passive descriptions', 'cause-and-effect or compound-sentence reading'],
      confidence: 'medium'
    }
  ],

  topicBenchmarks: {
    food: { minGrade: 3, confidence: 'high', reason: '基础生活词汇' },
    animals: { minGrade: 3, confidence: 'high', reason: '基础动物词汇' },
    animal: { minGrade: 3, confidence: 'high', reason: '基础动物词汇' },
    family: { minGrade: 3, confidence: 'high', reason: '家庭成员基础词汇' },
    home: { minGrade: 3, confidence: 'high', reason: '家庭和房间基础词汇' },
    school: { minGrade: 3, confidence: 'high', reason: '学校生活基础词汇' },
    colors: { minGrade: 3, confidence: 'high', reason: '基础颜色词汇' },
    numbers: { minGrade: 3, confidence: 'high', reason: '基础数字词汇' },
    body: { minGrade: 3, confidence: 'medium', reason: '身体部位基础词汇' },
    clothes: { minGrade: 3, confidence: 'medium', reason: '衣物基础词汇' },
    clothing: { minGrade: 3, confidence: 'medium', reason: '衣物基础词汇' },
    daily: { minGrade: 3, confidence: 'medium', reason: '日常生活基础表达' },
    fruit: { minGrade: 3, confidence: 'high', reason: '基础水果词汇' },
    vegetables: { minGrade: 3, confidence: 'medium', reason: '蔬菜主题可在中低年级出现' },
    pets: { minGrade: 3, confidence: 'high', reason: '宠物基础词汇' },
    bedroom: { minGrade: 3, confidence: 'medium', reason: '房间物品基础词汇' },
    bathroom: { minGrade: 3, confidence: 'medium', reason: '房间物品基础词汇' },
    lounge: { minGrade: 3, confidence: 'medium', reason: '房间物品基础词汇' },
    kitchen: { minGrade: 3, confidence: 'medium', reason: '房间物品基础词汇' },
    diningroom: { minGrade: 3, confidence: 'medium', reason: '房间物品基础词汇' },
    garden: { minGrade: 3, confidence: 'medium', reason: '家庭场景基础词汇' },
    teaparty: { minGrade: 3, confidence: 'medium', reason: '食物和故事场景基础词汇' },
    billygoats: { minGrade: 3, confidence: 'medium', reason: '简单故事词汇' },
    littlepigs: { minGrade: 3, confidence: 'medium', reason: '简单故事词汇' },
    sleepingbeauty: { minGrade: 3, confidence: 'medium', reason: '童话故事基础词汇，需结合过去时判断' },
    cinderella: { minGrade: 3, confidence: 'medium', reason: '童话故事基础词汇，需结合过去时判断' },
    goldilocks: { minGrade: 3, confidence: 'medium', reason: '童话故事基础词汇，需结合过去时判断' },
    snowwhite: { minGrade: 3, confidence: 'medium', reason: '童话故事基础词汇，需结合过去时判断' },
    redridinghood: { minGrade: 3, confidence: 'medium', reason: '童话故事基础词汇，需结合过去时判断' },
    peelegg: { minGrade: 3, confidence: 'low', reason: '项目日常生活主题，需人工核对来源' },
    snack: { minGrade: 3, confidence: 'medium', reason: '基础零食词汇' },
    washhair: { minGrade: 3, confidence: 'low', reason: '项目日常生活主题，需人工核对来源' },
    eatathome: { minGrade: 3, confidence: 'low', reason: '项目日常生活主题，需人工核对来源' },
    washingdishes: { minGrade: 3, confidence: 'low', reason: '项目家务主题，需人工核对来源' },
    housework: { minGrade: 3, confidence: 'low', reason: '项目家务主题，需人工核对来源' },
    summersweat: { minGrade: 3, confidence: 'low', reason: '项目日常生活主题，需人工核对来源' },
    winter: { minGrade: 3, confidence: 'medium', reason: '季节和天气基础词汇' },

    weather: { minGrade: 4, confidence: 'high', reason: '天气主题通常进入中高段扩展' },
    jobs: { minGrade: 4, confidence: 'medium', reason: '职业主题通常进入中高段扩展' },
    jobs1: { minGrade: 4, confidence: 'medium', reason: '职业主题通常进入中高段扩展' },
    jobs2: { minGrade: 4, confidence: 'medium', reason: '职业主题通常进入中高段扩展' },
    time: { minGrade: 4, confidence: 'medium', reason: '时间表达建议四年级及以上' },
    transport: { minGrade: 4, confidence: 'medium', reason: '交通主题建议四年级及以上' },
    sports: { minGrade: 4, confidence: 'medium', reason: '运动主题建议四年级及以上' },
    feelings: { minGrade: 4, confidence: 'medium', reason: '情绪表达建议四年级及以上' },
    emotion: { minGrade: 4, confidence: 'medium', reason: '情绪表达建议四年级及以上' },
    nature: { minGrade: 4, confidence: 'medium', reason: '自然主题建议四年级及以上' },
    shapes: { minGrade: 4, confidence: 'medium', reason: '形状主题建议四年级及以上' },
    police: { minGrade: 4, confidence: 'medium', reason: '公共服务主题建议四年级及以上' },
    undersea: { minGrade: 4, confidence: 'medium', reason: '海洋生物主题建议四年级及以上' },
    farmanimals: { minGrade: 4, confidence: 'medium', reason: '农场动物主题建议四年级及以上' },
    jungle: { minGrade: 4, confidence: 'medium', reason: '丛林动物主题建议四年级及以上' },
    desertanimals: { minGrade: 4, confidence: 'medium', reason: '沙漠动物主题建议四年级及以上' },
    pirates: { minGrade: 4, confidence: 'medium', reason: '海盗故事主题建议四年级及以上' },
    polaranimals: { minGrade: 4, confidence: 'medium', reason: '极地动物主题建议四年级及以上' },
    lostfound: { minGrade: 4, confidence: 'medium', reason: '失物招领情境建议四年级及以上' },

    science: { minGrade: 5, confidence: 'medium', reason: '科学主题建议五年级及以上' },
    earth: { minGrade: 5, confidence: 'medium', reason: '地球科学主题建议五年级及以上' },
    dinosaurs: { minGrade: 5, confidence: 'medium', reason: '恐龙主题词汇较专门' },
    superhero: { minGrade: 5, confidence: 'medium', reason: '超级英雄和能力表达较复杂' },
    firebrigade: { minGrade: 5, confidence: 'medium', reason: '消防主题建议五年级及以上' },
    character: { minGrade: 5, confidence: 'medium', reason: '性格抽象形容词建议五年级及以上' },
    recycling: { minGrade: 5, confidence: 'medium', reason: '环保回收主题建议五年级及以上' },
    wastesorting: { minGrade: 5, confidence: 'medium', reason: '垃圾分类主题建议五年级及以上' },
    jackbeanstalk: { minGrade: 5, confidence: 'medium', reason: '故事语篇和过去时需求更高' },

    space: { minGrade: 6, confidence: 'medium', reason: '太空科学主题按六年级/初中起始段处理' },
    forces: { minGrade: 6, confidence: 'medium', reason: '力与运动主题按六年级/初中起始段处理' },
    grammar: { minGrade: 6, confidence: 'low', reason: '泛语法主题需结合具体语法点判断' }
  },

  typeBenchmarks: {
    choice: { minGrade: 3, reason: '选择题适合三年级起步' },
    fill: { minGrade: 3, reason: '基础填空可适合三年级起步' },
    spell: { minGrade: 3, reason: '拼写题可适合三年级起步，但需结合词汇难度' },
    listen: { minGrade: 3, reason: '听辨题可适合三年级起步' },
    oral: { minGrade: 4, reason: '口语跟读建议四年级及以上更稳定' },
    grammar: { minGrade: 4, reason: '显性语法题建议四年级及以上' },
    translate: { minGrade: 4, reason: '完整翻译题建议四年级及以上' },
    reading: { minGrade: 5, reason: '阅读理解题建议五年级及以上' }
  },

  grammarBenchmarks: [
    { id: 'present-perfect', pattern: '现在完成时|完成时', minGrade: 6, reason: '现在完成时按上海六年级/初中起始段处理' },
    { id: 'passive-voice', pattern: '被动语态', minGrade: 6, reason: '被动语态基础按上海六年级/初中起始段处理' },
    { id: 'compound-advanced', pattern: '虚拟语气|宾语从句|复合句', minGrade: 6, reason: '复合句或高级语法不宜放在小学低年级' },
    { id: 'irregular-past', pattern: '不规则过去式', minGrade: 5, reason: '不规则过去式更适合五年级及以上' },
    { id: 'simple-past', pattern: '过去式|一般过去时', minGrade: 4, reason: '简单过去时可从四年级入门' },
    { id: 'present-continuous', pattern: '现在进行时', minGrade: 4, reason: '现在进行时更适合四年级及以上' },
    { id: 'third-person-singular', pattern: '第三人称单数', minGrade: 4, reason: '三单变化建议四年级及以上系统练习' },
    { id: 'noun-number-there-be', pattern: '可数/不可数名词|there be', minGrade: 4, reason: '名词数和 there be 建议四年级及以上系统练习' },
    { id: 'basic-be', pattern: 'be动词|简单否定句|祈使句', minGrade: 3, reason: '基础 be 动词和简单句可放在三年级' }
  ]
};
