/**
 * questions.js — 题库（300+题，含8种题型）
 * 按牛津教材+课外拓展，覆盖3-6年级
 */

export const questions = [
  // =====================
  // 三年级 · 食物 (food)
  // =====================
  {
    id: 'g3_food_001',
    q: '"苹果" 英语是？',
    type: 'choice',
    grades: [3],
    topic: 'food',
    skill: 'vocabulary',
    skillDetail: '食物类词汇',
    choices: ['apple', 'banana', 'orange', 'grape'],
    answer: 0
  },
  {
    id: 'g3_food_002',
    q: '"香蕉" 英语是？',
    type: 'choice',
    grades: [3],
    topic: 'food',
    skill: 'vocabulary',
    skillDetail: '食物类词汇',
    choices: ['apple', 'banana', 'orange', 'grape'],
    answer: 1
  },
  {
    id: 'g3_food_003',
    q: '"橙子" 英语是？',
    type: 'choice',
    grades: [3],
    topic: 'food',
    skill: 'vocabulary',
    skillDetail: '食物类词汇',
    choices: ['apple', 'banana', 'orange', 'grape'],
    answer: 2
  },
  {
    id: 'g3_food_004',
    q: '"葡萄" 英语是？',
    type: 'choice',
    grades: [3],
    topic: 'food',
    skill: 'vocabulary',
    skillDetail: '食物类词汇',
    choices: ['apple', 'banana', 'orange', 'grape'],
    answer: 3
  },
  {
    id: 'g3_food_005',
    q: 'I like __________. （我喜欢苹果）',
    type: 'fill',
    grades: [3],
    topic: 'food',
    skill: 'vocabulary',
    skillDetail: '食物类词汇',
    answer: 'apples'
  },
  {
    id: 'g3_food_006',
    q: '"米饭" 英语是？',
    type: 'choice',
    grades: [3],
    topic: 'food',
    skill: 'vocabulary',
    skillDetail: '食物类词汇',
    choices: ['rice', 'bread', 'noodles', 'milk'],
    answer: 0
  },
  {
    id: 'g3_food_007',
    q: '"面包" 英语是？',
    type: 'choice',
    grades: [3],
    topic: 'food',
    skill: 'vocabulary',
    skillDetail: '食物类词汇',
    choices: ['rice', 'bread', 'noodles', 'milk'],
    answer: 1
  },
  {
    id: 'g3_food_008',
    q: '"面条" 英语是？',
    type: 'choice',
    grades: [3],
    topic: 'food',
    skill: 'vocabulary',
    skillDetail: '食物类词汇',
    choices: ['rice', 'bread', 'noodles', 'milk'],
    answer: 2
  },
  {
    id: 'g3_food_009',
    q: '"牛奶" 英语是？',
    type: 'choice',
    grades: [3],
    topic: 'food',
    skill: 'vocabulary',
    skillDetail: '食物类词汇',
    choices: ['rice', 'bread', 'noodles', 'milk'],
    answer: 3
  },
  {
    id: 'g3_food_010',
    q: 'I drink __________ every morning. （我每天早上喝牛奶）',
    type: 'fill',
    grades: [3],
    topic: 'food',
    skill: 'vocabulary',
    skillDetail: '食物类词汇',
    answer: 'milk'
  },
  {
    id: 'g3_food_011',
    q: 'Complete: b___d （面包）',
    type: 'spell',
    grades: [3],
    topic: 'food',
    skill: 'vocabulary',
    skillDetail: '食物类词汇',
    answer: 'bread'
  },
  {
    id: 'g3_food_012',
    q: 'Water please, n__________ sugary drinks.',
    type: 'grammar',
    grades: [3],
    topic: 'food',
    skill: 'grammar',
    skillDetail: '简单否定句',
    answer: 'not'
  },

  // =====================
  // 三年级 · 动物 (animals)
  // =====================
  {
    id: 'g3_animal_001',
    q: '"猫" 英语是？',
    type: 'choice',
    grades: [3],
    topic: 'animals',
    skill: 'vocabulary',
    skillDetail: '动物类词汇',
    choices: ['cat', 'dog', 'bird', 'fish'],
    answer: 0
  },
  {
    id: 'g3_animal_002',
    q: '"狗" 英语是？',
    type: 'choice',
    grades: [3],
    topic: 'animals',
    skill: 'vocabulary',
    skillDetail: '动物类词汇',
    choices: ['cat', 'dog', 'bird', 'fish'],
    answer: 1
  },
  {
    id: 'g3_animal_003',
    q: '"鸟" 英语是？',
    type: 'choice',
    grades: [3],
    topic: 'animals',
    skill: 'vocabulary',
    skillDetail: '动物类词汇',
    choices: ['cat', 'dog', 'bird', 'fish'],
    answer: 2
  },
  {
    id: 'g3_animal_004',
    q: '"鱼" 英语是？',
    type: 'choice',
    grades: [3],
    topic: 'animals',
    skill: 'vocabulary',
    skillDetail: '动物类词汇',
    choices: ['cat', 'dog', 'bird', 'fish'],
    answer: 3
  },
  {
    id: 'g3_animal_005',
    q: 'The cat __________ on the mat. （猫在垫子上）',
    type: 'fill',
    grades: [3],
    topic: 'animals',
    skill: 'grammar',
    skillDetail: 'be动词用法',
    answer: 'is'
  },
  {
    id: 'g3_animal_006',
    q: 'I have a p__________ dog. （宠物狗）',
    type: 'spell',
    grades: [3],
    topic: 'animals',
    skill: 'vocabulary',
    skillDetail: '动物类词汇',
    answer: 'pet'
  },
  {
    id: 'g3_animal_007',
    q: 'She has a pet __________. （她有一只宠物猫）',
    type: 'fill',
    grades: [3],
    topic: 'animals',
    skill: 'vocabulary',
    skillDetail: '动物类词汇',
    answer: 'cat'
  },
  {
    id: 'g3_animal_008',
    q: '"大象" 英语是？',
    type: 'choice',
    grades: [3],
    topic: 'animals',
    skill: 'vocabulary',
    skillDetail: '动物类词汇',
    choices: ['elephant', 'tiger', 'lion', 'monkey'],
    answer: 0
  },
  {
    id: 'g3_animal_009',
    q: '"老虎" 英语是？',
    type: 'choice',
    grades: [3],
    topic: 'animals',
    skill: 'vocabulary',
    skillDetail: '动物类词汇',
    choices: ['elephant', 'tiger', 'lion', 'monkey'],
    answer: 1
  },
  {
    id: 'g3_animal_010',
    q: '"狮子" 英语是？',
    type: 'choice',
    grades: [3],
    topic: 'animals',
    skill: 'vocabulary',
    skillDetail: '动物类词汇',
    choices: ['elephant', 'tiger', 'lion', 'monkey'],
    answer: 2
  },
  {
    id: 'g3_animal_011',
    q: '"猴子" 英语是？',
    type: 'choice',
    grades: [3],
    topic: 'animals',
    skill: 'vocabulary',
    skillDetail: '动物类词汇',
    choices: ['elephant', 'tiger', 'lion', 'monkey'],
    answer: 3
  },
  {
    id: 'g3_animal_012',
    q: 'The dog __________ in the garden. （狗在花园里）',
    type: 'fill',
    grades: [3],
    topic: 'animals',
    skill: 'grammar',
    skillDetail: 'be动词用法',
    answer: 'is'
  },
  {
    id: 'g3_animal_013',
    q: 't__________ （老虎）',
    type: 'spell',
    grades: [3],
    topic: 'animals',
    skill: 'vocabulary',
    skillDetail: '动物类词汇',
    answer: 'tiger'
  },
  {
    id: 'g3_animal_014',
    q: '"兔子" 英语是？',
    type: 'choice',
    grades: [3],
    topic: 'animals',
    skill: 'vocabulary',
    skillDetail: '动物类词汇',
    choices: ['rabbit', 'horse', 'sheep', 'cow'],
    answer: 0
  },
  {
    id: 'g3_animal_015',
    q: '"马" 英语是？',
    type: 'choice',
    grades: [3],
    topic: 'animals',
    skill: 'vocabulary',
    skillDetail: '动物类词汇',
    choices: ['rabbit', 'horse', 'sheep', 'cow'],
    answer: 1
  },

  // =====================
  // 三年级 · 家庭 (family)
  // =====================
  {
    id: 'g3_family_001',
    q: '"妈妈" 英语是？',
    type: 'choice',
    grades: [3],
    topic: 'family',
    skill: 'vocabulary',
    skillDetail: '家庭成员词汇',
    choices: ['mother', 'father', 'sister', 'brother'],
    answer: 0
  },
  {
    id: 'g3_family_002',
    q: '"爸爸" 英语是？',
    type: 'choice',
    grades: [3],
    topic: 'family',
    skill: 'vocabulary',
    skillDetail: '家庭成员词汇',
    choices: ['mother', 'father', 'sister', 'brother'],
    answer: 1
  },
  {
    id: 'g3_family_003',
    q: '"姐姐" 英语是？',
    type: 'choice',
    grades: [3],
    topic: 'family',
    skill: 'vocabulary',
    skillDetail: '家庭成员词汇',
    choices: ['mother', 'father', 'sister', 'brother'],
    answer: 2
  },
  {
    id: 'g3_family_004',
    q: '"哥哥" 英语是？',
    type: 'choice',
    grades: [3],
    topic: 'family',
    skill: 'vocabulary',
    skillDetail: '家庭成员词汇',
    choices: ['mother', 'father', 'sister', 'brother'],
    answer: 3
  },
  {
    id: 'g3_family_005',
    q: 'My __________ is a teacher. （我爸爸是老师）',
    type: 'fill',
    grades: [3],
    topic: 'family',
    skill: 'vocabulary',
    skillDetail: '家庭成员词汇',
    answer: 'father'
  },
  {
    id: 'g3_family_006',
    q: 'I have a baby __________. （我有一个小弟弟）',
    type: 'fill',
    grades: [3],
    topic: 'family',
    skill: 'vocabulary',
    skillDetail: '家庭成员词汇',
    answer: 'brother'
  },
  {
    id: 'g3_family_007',
    q: '"爷爷" 英语是？',
    type: 'choice',
    grades: [3],
    topic: 'family',
    skill: 'vocabulary',
    skillDetail: '家庭成员词汇',
    choices: ['grandfather', 'grandmother', 'uncle', 'aunt'],
    answer: 0
  },
  {
    id: 'g3_family_008',
    q: '"奶奶" 英语是？',
    type: 'choice',
    grades: [3],
    topic: 'family',
    skill: 'vocabulary',
    skillDetail: '家庭成员词汇',
    choices: ['grandfather', 'grandmother', 'uncle', 'aunt'],
    answer: 1
  },
  {
    id: 'g3_family_009',
    q: 'g__________father （爷爷）',
    type: 'spell',
    grades: [3],
    topic: 'family',
    skill: 'vocabulary',
    skillDetail: '家庭成员词汇',
    answer: 'grand'
  },
  {
    id: 'g3_family_010',
    q: 'This is my __________. （这是我的家庭）',
    type: 'grammar',
    grades: [3],
    topic: 'family',
    skill: 'grammar',
    skillDetail: 'this is句型',
    answer: 'family'
  },

  // =====================
  // 三年级 · 学校 (school)
  // =====================
  {
    id: 'g3_school_001',
    q: '"老师" 英语是？',
    type: 'choice',
    grades: [3],
    topic: 'school',
    skill: 'vocabulary',
    skillDetail: '学校相关词汇',
    choices: ['teacher', 'student', 'desk', 'chair'],
    answer: 0
  },
  {
    id: 'g3_school_002',
    q: '"学生" 英语是？',
    type: 'choice',
    grades: [3],
    topic: 'school',
    skill: 'vocabulary',
    skillDetail: '学校相关词汇',
    choices: ['teacher', 'student', 'desk', 'chair'],
    answer: 1
  },
  {
    id: 'g3_school_003',
    q: '"书" 英语是？',
    type: 'choice',
    grades: [3],
    topic: 'school',
    skill: 'vocabulary',
    skillDetail: '学校相关词汇',
    choices: ['book', 'pen', 'ruler', 'eraser'],
    answer: 0
  },
  {
    id: 'g3_school_004',
    q: '"钢笔" 英语是？',
    type: 'choice',
    grades: [3],
    topic: 'school',
    skill: 'vocabulary',
    skillDetail: '学校相关词汇',
    choices: ['book', 'pen', 'ruler', 'eraser'],
    answer: 1
  },
  {
    id: 'g3_school_005',
    q: '"尺子" 英语是？',
    type: 'choice',
    grades: [3],
    topic: 'school',
    skill: 'vocabulary',
    skillDetail: '学校相关词汇',
    choices: ['book', 'pen', 'ruler', 'eraser'],
    answer: 2
  },
  {
    id: 'g3_school_006',
    q: '"橡皮" 英语是？',
    type: 'choice',
    grades: [3],
    topic: 'school',
    skill: 'vocabulary',
    skillDetail: '学校相关词汇',
    choices: ['book', 'pen', 'ruler', 'eraser'],
    answer: 3
  },
  {
    id: 'g3_school_007',
    q: 'I write with a __________. （我用钢笔写字）',
    type: 'fill',
    grades: [3],
    topic: 'school',
    skill: 'vocabulary',
    skillDetail: '学校相关词汇',
    answer: 'pen'
  },
  {
    id: 'g3_school_008',
    q: 'p__________ （钢笔）',
    type: 'spell',
    grades: [3],
    topic: 'school',
    skill: 'vocabulary',
    skillDetail: '学校相关词汇',
    answer: 'pen'
  },

  // =====================
  // 三年级 · 颜色 (colors)
  // =====================
  {
    id: 'g3_colors_001',
    q: '"红色" 英语是？',
    type: 'choice',
    grades: [3],
    topic: 'colors',
    skill: 'vocabulary',
    skillDetail: '颜色词汇',
    choices: ['red', 'blue', 'green', 'yellow'],
    answer: 0
  },
  {
    id: 'g3_colors_002',
    q: '"蓝色" 英语是？',
    type: 'choice',
    grades: [3],
    topic: 'colors',
    skill: 'vocabulary',
    skillDetail: '颜色词汇',
    choices: ['red', 'blue', 'green', 'yellow'],
    answer: 1
  },
  {
    id: 'g3_colors_003',
    q: '"绿色" 英语是？',
    type: 'choice',
    grades: [3],
    topic: 'colors',
    skill: 'vocabulary',
    skillDetail: '颜色词汇',
    choices: ['red', 'blue', 'green', 'yellow'],
    answer: 2
  },
  {
    id: 'g3_colors_004',
    q: '"黄色" 英语是？',
    type: 'choice',
    grades: [3],
    topic: 'colors',
    skill: 'vocabulary',
    skillDetail: '颜色词汇',
    choices: ['red', 'blue', 'green', 'yellow'],
    answer: 3
  },
  {
    id: 'g3_colors_005',
    q: 'The sky is __________. （天空是蓝色的）',
    type: 'fill',
    grades: [3],
    topic: 'colors',
    skill: 'vocabulary',
    skillDetail: '颜色词汇',
    answer: 'blue'
  },
  {
    id: 'g3_colors_006',
    q: '"白色" 英语是？',
    type: 'choice',
    grades: [3],
    topic: 'colors',
    skill: 'vocabulary',
    skillDetail: '颜色词汇',
    choices: ['white', 'black', 'pink', 'purple'],
    answer: 0
  },
  {
    id: 'g3_colors_007',
    q: '"黑色" 英语是？',
    type: 'choice',
    grades: [3],
    topic: 'colors',
    skill: 'vocabulary',
    skillDetail: '颜色词汇',
    choices: ['white', 'black', 'pink', 'purple'],
    answer: 1
  },
  {
    id: 'g3_colors_008',
    q: '"粉色" 英语是？',
    type: 'choice',
    grades: [3],
    topic: 'colors',
    skill: 'vocabulary',
    skillDetail: '颜色词汇',
    choices: ['white', 'black', 'pink', 'purple'],
    answer: 2
  },

  // =====================
  // 三年级 · 数字 (numbers)
  // =====================
  {
    id: 'g3_numbers_001',
    q: '3+4=?',
    type: 'choice',
    grades: [3],
    topic: 'numbers',
    skill: 'vocabulary',
    skillDetail: '数字词汇',
    choices: ['five', 'six', 'seven', 'eight'],
    answer: 2
  },
  {
    id: 'g3_numbers_002',
    q: '"一" 英语是？',
    type: 'choice',
    grades: [3],
    topic: 'numbers',
    skill: 'vocabulary',
    skillDetail: '数字词汇',
    choices: ['one', 'two', 'three', 'four'],
    answer: 0
  },
  {
    id: 'g3_numbers_003',
    q: '"二" 英语是？',
    type: 'choice',
    grades: [3],
    topic: 'numbers',
    skill: 'vocabulary',
    skillDetail: '数字词汇',
    choices: ['one', 'two', 'three', 'four'],
    answer: 1
  },
  {
    id: 'g3_numbers_004',
    q: '"三" 英语是？',
    type: 'choice',
    grades: [3],
    topic: 'numbers',
    skill: 'vocabulary',
    skillDetail: '数字词汇',
    choices: ['one', 'two', 'three', 'four'],
    answer: 2
  },
  {
    id: 'g3_numbers_005',
    q: 'I have __________ apples. （我有两个苹果）',
    type: 'fill',
    grades: [3],
    topic: 'numbers',
    skill: 'vocabulary',
    skillDetail: '数字词汇',
    answer: 'two'
  },

  // =====================
  // 四年级 · 现在时态 (present tense)
  // =====================
  {
    id: 'g4_grammar_001',
    q: 'He __________ (play) football every day.',
    type: 'fill',
    grades: [4],
    topic: 'grammar',
    skill: 'grammar',
    skillDetail: '第三人称单数',
    answer: 'plays'
  },
  {
    id: 'g4_grammar_002',
    q: 'She __________ (go) to school by bus.',
    type: 'fill',
    grades: [4],
    topic: 'grammar',
    skill: 'grammar',
    skillDetail: '第三人称单数',
    answer: 'goes'
  },
  {
    id: 'g4_grammar_003',
    q: 'My mother __________ (watch) TV every evening.',
    type: 'fill',
    grades: [4],
    topic: 'grammar',
    skill: 'grammar',
    skillDetail: '第三人称单数',
    answer: 'watches'
  },
  {
    id: 'g4_grammar_004',
    q: 'The cat __________ (like) fish.',
    type: 'fill',
    grades: [4],
    topic: 'grammar',
    skill: 'grammar',
    skillDetail: '第三人称单数',
    answer: 'likes'
  },
  {
    id: 'g4_grammar_005',
    q: 'He __________ a student. （他是一个学生）',
    type: 'fill',
    grades: [4],
    topic: 'grammar',
    skill: 'grammar',
    skillDetail: 'be动词用法',
    answer: 'is'
  },
  {
    id: 'g4_grammar_006',
    q: 'They __________ in the classroom. （他们在教室里）',
    type: 'fill',
    grades: [4],
    topic: 'grammar',
    skill: 'grammar',
    skillDetail: 'be动词用法',
    answer: 'are'
  },
  {
    id: 'g4_grammar_007',
    q: 'The book __________ on the desk. （书在桌子上）',
    type: 'fill',
    grades: [4],
    topic: 'grammar',
    skill: 'grammar',
    skillDetail: 'be动词用法',
    answer: 'is'
  },

  // =====================
  // 四年级 · 天气 (weather)
  // =====================
  {
    id: 'g4_weather_001',
    q: '"晴天" 英语是？',
    type: 'choice',
    grades: [4],
    topic: 'weather',
    skill: 'vocabulary',
    skillDetail: '天气类词汇',
    choices: ['sunny', 'cloudy', 'rainy', 'snowy'],
    answer: 0
  },
  {
    id: 'g4_weather_002',
    q: '"多云" 英语是？',
    type: 'choice',
    grades: [4],
    topic: 'weather',
    skill: 'vocabulary',
    skillDetail: '天气类词汇',
    choices: ['sunny', 'cloudy', 'rainy', 'snowy'],
    answer: 1
  },
  {
    id: 'g4_weather_003',
    q: '"下雨" 英语是？',
    type: 'choice',
    grades: [4],
    topic: 'weather',
    skill: 'vocabulary',
    skillDetail: '天气类词汇',
    choices: ['sunny', 'cloudy', 'rainy', 'snowy'],
    answer: 2
  },
  {
    id: 'g4_weather_004',
    q: '"下雪" 英语是？',
    type: 'choice',
    grades: [4],
    topic: 'weather',
    skill: 'vocabulary',
    skillDetail: '天气类词汇',
    choices: ['sunny', 'cloudy', 'rainy', 'snowy'],
    answer: 3
  },
  {
    id: 'g4_weather_005',
    q: 'It is __________ today. （今天天气晴朗）',
    type: 'fill',
    grades: [4],
    topic: 'weather',
    skill: 'vocabulary',
    skillDetail: '天气类词汇',
    answer: 'sunny'
  },
  {
    id: 'g4_weather_006',
    q: 'It is __________ outside. Take an umbrella! （外面在下雨）',
    type: 'fill',
    grades: [4],
    topic: 'weather',
    skill: 'vocabulary',
    skillDetail: '天气类词汇',
    answer: 'raining'
  },

  // =====================
  // 四年级 · 身体 (body)
  // =====================
  {
    id: 'g4_body_001',
    q: '"头" 英语是？',
    type: 'choice',
    grades: [4],
    topic: 'body',
    skill: 'vocabulary',
    skillDetail: '身体部位词汇',
    choices: ['head', 'hand', 'foot', 'leg'],
    answer: 0
  },
  {
    id: 'g4_body_002',
    q: '"手" 英语是？',
    type: 'choice',
    grades: [4],
    topic: 'body',
    skill: 'vocabulary',
    skillDetail: '身体部位词汇',
    choices: ['head', 'hand', 'foot', 'leg'],
    answer: 1
  },
  {
    id: 'g4_body_003',
    q: '"脚" 英语是？',
    type: 'choice',
    grades: [4],
    topic: 'body',
    skill: 'vocabulary',
    skillDetail: '身体部位词汇',
    choices: ['head', 'hand', 'foot', 'leg'],
    answer: 2
  },
  {
    id: 'g4_body_004',
    q: '"腿" 英语是？',
    type: 'choice',
    grades: [4],
    topic: 'body',
    skill: 'vocabulary',
    skillDetail: '身体部位词汇',
    choices: ['head', 'hand', 'foot', 'leg'],
    answer: 3
  },
  {
    id: 'g4_body_005',
    q: 'I have two __________ and ten fingers. （我有两个手）',
    type: 'fill',
    grades: [4],
    topic: 'body',
    skill: 'vocabulary',
    skillDetail: '身体部位词汇',
    answer: 'hands'
  },

  // =====================
  // 五年级 · 过去时态 (past tense)
  // =====================
  {
    id: 'g5_grammar_001',
    q: 'Yesterday, I __________ (play) football. 【用正确形式】',
    type: 'fill',
    grades: [5],
    topic: 'grammar',
    skill: 'grammar',
    skillDetail: '过去式变化规则',
    answer: 'played'
  },
  {
    id: 'g5_grammar_002',
    q: 'She __________ (go) to the park yesterday. 【用正确形式】',
    type: 'fill',
    grades: [5],
    topic: 'grammar',
    skill: 'grammar',
    skillDetail: '不规则过去式',
    answer: 'went'
  },
  {
    id: 'g5_grammar_003',
    q: 'They __________ (eat) apples yesterday. 【用正确形式】',
    type: 'fill',
    grades: [5],
    topic: 'grammar',
    skill: 'grammar',
    skillDetail: '过去式变化规则',
    answer: 'ate'
  },
  {
    id: 'g5_grammar_004',
    q: 'He __________ (study) English last night. 【用正确形式】',
    type: 'fill',
    grades: [5],
    topic: 'grammar',
    skill: 'grammar',
    skillDetail: '过去式变化规则',
    answer: 'studied'
  },
  {
    id: 'g5_grammar_005',
    q: 'I __________ (be) happy yesterday. 【用正确形式】',
    type: 'fill',
    grades: [5],
    topic: 'grammar',
    skill: 'grammar',
    skillDetail: 'be动词过去式',
    answer: 'was'
  },
  {
    id: 'g5_grammar_006',
    q: 'We __________ (be) at home last week. 【用正确形式】',
    type: 'fill',
    grades: [5],
    topic: 'grammar',
    skill: 'grammar',
    skillDetail: 'be动词过去式',
    answer: 'were'
  },
  {
    id: 'g5_grammar_007',
    q: 'She __________ (see) a beautiful bird yesterday. 【用正确形式】',
    type: 'fill',
    grades: [5],
    topic: 'grammar',
    skill: 'grammar',
    skillDetail: '不规则过去式',
    answer: 'saw'
  },
  {
    id: 'g5_grammar_008',
    q: 'I __________ (take) many photos last summer. 【用正确形式】',
    type: 'fill',
    grades: [5],
    topic: 'grammar',
    skill: 'grammar',
    skillDetail: '不规则过去式',
    answer: 'took'
  },

  // =====================
  // 五年级 · 职业 (jobs)
  // =====================
  {
    id: 'g5_jobs_001',
    q: '"医生" 英语是？',
    type: 'choice',
    grades: [5],
    topic: 'jobs',
    skill: 'vocabulary',
    skillDetail: '职业类词汇',
    choices: ['doctor', 'nurse', 'teacher', 'engineer'],
    answer: 0
  },
  {
    id: 'g5_jobs_002',
    q: '"护士" 英语是？',
    type: 'choice',
    grades: [5],
    topic: 'jobs',
    skill: 'vocabulary',
    skillDetail: '职业类词汇',
    choices: ['doctor', 'nurse', 'teacher', 'engineer'],
    answer: 1
  },
  {
    id: 'g5_jobs_003',
    q: '"工程师" 英语是？',
    type: 'choice',
    grades: [5],
    topic: 'jobs',
    skill: 'vocabulary',
    skillDetail: '职业类词汇',
    choices: ['doctor', 'nurse', 'teacher', 'engineer'],
    answer: 3
  },
  {
    id: 'g5_jobs_004',
    q: '"警察" 英语是？',
    type: 'choice',
    grades: [5],
    topic: 'jobs',
    skill: 'vocabulary',
    skillDetail: '职业类词汇',
    choices: ['police', 'officer', 'soldier', 'chef'],
    answer: 0
  },
  {
    id: 'g5_jobs_005',
    q: '"厨师" 英语是？',
    type: 'choice',
    grades: [5],
    topic: 'jobs',
    skill: 'vocabulary',
    skillDetail: '职业类词汇',
    choices: ['police', 'officer', 'soldier', 'chef'],
    answer: 3
  },
  {
    id: 'g5_jobs_006',
    q: 'My mother is a __________. She helps sick people. （我妈妈是护士）',
    type: 'fill',
    grades: [5],
    topic: 'jobs',
    skill: 'vocabulary',
    skillDetail: '职业类词汇',
    answer: 'nurse'
  },

  // =====================
  // 五年级 · 翻译题 (translate)
  // =====================
  {
    id: 'g5_translate_001',
    q: '翻译：I go to school every day.',
    type: 'translate',
    grades: [5],
    topic: 'daily',
    skill: 'sentence',
    skillDetail: '简单陈述句',
    answer: '我每天去学校'
  },
  {
    id: 'g5_translate_002',
    q: '翻译：She likes reading books.',
    type: 'translate',
    grades: [5],
    topic: 'daily',
    skill: 'sentence',
    skillDetail: '简单陈述句',
    answer: '她喜欢读书'
  },
  {
    id: 'g5_translate_003',
    q: '翻译：They played football yesterday.',
    type: 'translate',
    grades: [5],
    topic: 'daily',
    skill: 'sentence',
    skillDetail: '过去时态',
    answer: '他们昨天踢足球了'
  },
  {
    id: 'g5_translate_004',
    q: '翻译：我每天早上八点上学。',
    type: 'translate',
    grades: [5],
    topic: 'daily',
    skill: 'sentence',
    skillDetail: '时间状语句型',
    answer: 'I go to school at eight every morning'
  },
  {
    id: 'g5_translate_005',
    q: '翻译：The sun rises in the east.',
    type: 'translate',
    grades: [5],
    topic: 'nature',
    skill: 'sentence',
    skillDetail: '简单陈述句',
    answer: '太阳从东方升起'
  },

  // =====================
  // 六年级 · 综合语法 (mixed grammar)
  // =====================
  {
    id: 'g6_grammar_001',
    q: 'If I __________ (be) rich, I would travel around the world.',
    type: 'fill',
    grades: [6],
    topic: 'grammar',
    skill: 'grammar',
    skillDetail: '虚拟语气',
    answer: 'were'
  },
  {
    id: 'g6_grammar_002',
    q: 'The book __________ (read) by millions of people worldwide.',
    type: 'fill',
    grades: [6],
    topic: 'grammar',
    skill: 'grammar',
    skillDetail: '被动语态',
    answer: 'has been read'
  },
  {
    id: 'g6_grammar_003',
    q: 'She __________ (study) English since 2020.',
    type: 'fill',
    grades: [6],
    topic: 'grammar',
    skill: 'grammar',
    skillDetail: '现在完成时',
    answer: 'has studied'
  },
  {
    id: 'g6_grammar_004',
    q: 'I wish I __________ (can fly) like a bird.',
    type: 'fill',
    grades: [6],
    topic: 'grammar',
    skill: 'grammar',
    skillDetail: '虚拟语气',
    answer: 'could fly'
  },
  {
    id: 'g6_grammar_005',
    q: 'The food __________ (cook) by my mother every day.',
    type: 'fill',
    grades: [6],
    topic: 'grammar',
    skill: 'grammar',
    skillDetail: '被动语态',
    answer: 'is cooked'
  },
  {
    id: 'g6_grammar_006',
    q: 'By next month, I __________ (finish) the project.',
    type: 'fill',
    grades: [6],
    topic: 'grammar',
    skill: 'grammar',
    skillDetail: '将来完成时',
    answer: 'will have finished'
  },

  // =====================
  // 阅读理解 (reading)
  // =====================
  {
    id: 'g4_reading_001',
    q: 'My name is Tom. I am ten years old. I go to school every day. I like English class because my teacher is very nice. I have many friends at school.\n\n问题：How old is Tom?',
    type: 'reading',
    grades: [4],
    topic: 'daily',
    skill: 'reading',
    skillDetail: '短文理解',
    choices: ['Nine', 'Ten', 'Eleven', 'Twelve'],
    answer: 1
  },
  {
    id: 'g5_reading_001',
    q: 'Last summer, my family went to Beijing. We visited the Great Wall. The Wall was very long and great. We took many photos there. The food in Beijing was delicious. We ate Beijing duck. It was yummy.\n\n问题：Where did they go last summer?',
    type: 'reading',
    grades: [5],
    topic: 'daily',
    skill: 'reading',
    skillDetail: '短文理解',
    choices: ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen'],
    answer: 1
  },
  {
    id: 'g5_reading_002',
    q: 'Last summer, my family went to Beijing. We visited the Great Wall. The Wall was very long and great. We took many photos there. The food in Beijing was delicious. We ate Beijing duck. It was yummy.\n\n问题：What did they eat in Beijing?',
    type: 'reading',
    grades: [5],
    topic: 'daily',
    skill: 'reading',
    skillDetail: '短文理解',
    choices: ['Noodles', 'Rice', 'Beijing duck', 'Dumplings'],
    answer: 2
  },
  {
    id: 'g6_reading_001',
    q: 'There is a beautiful park near my home. Every morning, I jog in the park. Many people do exercise there. Some are doing tai chi, some are dancing. The air is fresh. I love this park.\n\n问题：What does the writer do every morning in the park?',
    type: 'reading',
    grades: [6],
    topic: 'daily',
    skill: 'reading',
    skillDetail: '短文理解',
    choices: ['Read books', 'Jog', 'Sing songs', 'Draw pictures'],
    answer: 1
  },

  // =====================
  // 听力题 (listen) - 使用Web Speech API
  // =====================
  {
    id: 'g3_listen_001',
    q: 'Listen and choose: (点击播放按钮听发音)',
    type: 'listen',
    audio: 'apple',
    grades: [3],
    topic: 'food',
    skill: 'listening',
    skillDetail: '听力辨析',
    choices: ['apple', 'banana', 'orange', 'grape'],
    answer: 0
  },
  {
    id: 'g3_listen_002',
    q: 'Listen and choose: (点击播放按钮听发音)',
    type: 'listen',
    audio: 'cat',
    grades: [3],
    topic: 'animals',
    skill: 'listening',
    skillDetail: '听力辨析',
    choices: ['cat', 'dog', 'bird', 'fish'],
    answer: 0
  },
  {
    id: 'g4_listen_001',
    q: 'Listen and choose: (点击播放按钮听发音)',
    type: 'listen',
    audio: 'sunny',
    grades: [4],
    topic: 'weather',
    skill: 'listening',
    skillDetail: '听力辨析',
    choices: ['sunny', 'cloudy', 'rainy', 'snowy'],
    answer: 0
  },
  {
    id: 'g5_listen_001',
    q: 'Listen and choose: (点击播放按钮听发音)',
    type: 'listen',
    audio: 'doctor',
    grades: [5],
    topic: 'jobs',
    skill: 'listening',
    skillDetail: '听力辨析',
    choices: ['doctor', 'nurse', 'teacher', 'engineer'],
    answer: 0
  },

  // =====================
  // 新增 vocabulary.md 主题词汇 (共753题)
  // =====================


  {
    id: 'g3_teaparty_001',
    q: '"面包" 英语是？',
    type: 'choice',
    grades: [3],
    topic: 'teaparty',
    skill: 'vocabulary',
    skillDetail: '茶会词汇',
    choices: ["cucumber","jam","lemonade","bread"],
    answer: 3
  },

  {
    id: 'g3_teaparty_002',
    q: '填写英文：果酱',
    type: 'fill',
    grades: [3],
    topic: 'teaparty',
    skill: 'vocabulary',
    skillDetail: '茶会词汇',
    answer: 'jam'
  },

  {
    id: 'g3_teaparty_003',
    q: '填写英文：蛋糕',
    type: 'fill',
    grades: [3],
    topic: 'teaparty',
    skill: 'vocabulary',
    skillDetail: '茶会词汇',
    answer: 'cake'
  },

  {
    id: 'g3_teaparty_004',
    q: '"黄瓜" 英语是？',
    type: 'choice',
    grades: [3],
    topic: 'teaparty',
    skill: 'vocabulary',
    skillDetail: '茶会词汇',
    choices: ["scones","apples","cucumber","cake"],
    answer: 2
  },

  {
    id: 'g3_teaparty_005',
    q: '填写英文：西红柿',
    type: 'fill',
    grades: [3],
    topic: 'teaparty',
    skill: 'vocabulary',
    skillDetail: '茶会词汇',
    answer: 'tomatoes'
  },

  {
    id: 'g3_teaparty_006',
    q: '填写英文：黄油',
    type: 'fill',
    grades: [3],
    topic: 'teaparty',
    skill: 'vocabulary',
    skillDetail: '茶会词汇',
    answer: 'butter'
  },

  {
    id: 'g3_teaparty_007',
    q: '填写英文：奶酪',
    type: 'fill',
    grades: [3],
    topic: 'teaparty',
    skill: 'vocabulary',
    skillDetail: '茶会词汇',
    answer: 'cheese'
  },

  {
    id: 'g3_teaparty_008',
    q: '"薯片" 英语是？',
    type: 'choice',
    grades: [3],
    topic: 'teaparty',
    skill: 'vocabulary',
    skillDetail: '茶会词汇',
    choices: ["strawberries","lemonade","scones","crisps"],
    answer: 3
  },

  {
    id: 'g3_teaparty_009',
    q: '"果汁饮料" 英语是？',
    type: 'choice',
    grades: [3],
    topic: 'teaparty',
    skill: 'vocabulary',
    skillDetail: '茶会词汇',
    choices: ["strawberries","butter","crisps","squash"],
    answer: 3
  },

  {
    id: 'g3_teaparty_010',
    q: '"司康饼" 英语是？',
    type: 'choice',
    grades: [3],
    topic: 'teaparty',
    skill: 'vocabulary',
    skillDetail: '茶会词汇',
    choices: ["scones","oranges","lemonade","jam"],
    answer: 0
  },

  {
    id: 'g3_teaparty_011',
    q: '"草莓" 英语是？',
    type: 'choice',
    grades: [3],
    topic: 'teaparty',
    skill: 'vocabulary',
    skillDetail: '茶会词汇',
    choices: ["strawberries","butter","scones","cucumber"],
    answer: 0
  },

  {
    id: 'g3_teaparty_012',
    q: '"柠檬水" 英语是？',
    type: 'choice',
    grades: [3],
    topic: 'teaparty',
    skill: 'vocabulary',
    skillDetail: '茶会词汇',
    choices: ["cream","lemonade","cheese","butter"],
    answer: 1
  },

  {
    id: 'g3_teaparty_013',
    q: '"橙子" 英语是？',
    type: 'choice',
    grades: [3],
    topic: 'teaparty',
    skill: 'vocabulary',
    skillDetail: '茶会词汇',
    choices: ["cucumber","cake","oranges","cream"],
    answer: 2
  },

  {
    id: 'g3_teaparty_014',
    q: 'apples（翻译成中文）',
    type: 'translate',
    grades: [3],
    topic: 'teaparty',
    skill: 'vocabulary',
    skillDetail: '茶会词汇',
    answer: '苹果'
  },

  {
    id: 'g3_teaparty_015',
    q: '"奶油" 英语是？',
    type: 'choice',
    grades: [3],
    topic: 'teaparty',
    skill: 'vocabulary',
    skillDetail: '茶会词汇',
    choices: ["scones","cheese","squash","cream"],
    answer: 3
  },

  {
    id: 'g4_billygoats_016',
    q: 'valley（翻译成中文）',
    type: 'translate',
    grades: [4],
    topic: 'billygoats',
    skill: 'vocabulary',
    skillDetail: '故事词汇',
    answer: '山谷'
  },

  {
    id: 'g4_billygoats_017',
    q: '"小的" 英语是？',
    type: 'choice',
    grades: [4],
    topic: 'billygoats',
    skill: 'vocabulary',
    skillDetail: '故事词汇',
    choices: ["grass","medium","big","small"],
    answer: 3
  },

  {
    id: 'g4_billygoats_018',
    q: '"草" 英语是？',
    type: 'choice',
    grades: [4],
    topic: 'billygoats',
    skill: 'vocabulary',
    skillDetail: '故事词汇',
    choices: ["valley","grass","hooves","river"],
    answer: 1
  },

  {
    id: 'g4_billygoats_019',
    q: '"山羊" 英语是？',
    type: 'choice',
    grades: [4],
    topic: 'billygoats',
    skill: 'vocabulary',
    skillDetail: '故事词汇',
    choices: ["goats","valley","small","medium"],
    answer: 0
  },

  {
    id: 'g4_billygoats_020',
    q: 'river（翻译成中文）',
    type: 'translate',
    grades: [4],
    topic: 'billygoats',
    skill: 'vocabulary',
    skillDetail: '故事词汇',
    answer: '河流'
  },

  {
    id: 'g4_billygoats_021',
    q: '"中等的" 英语是？',
    type: 'choice',
    grades: [4],
    topic: 'billygoats',
    skill: 'vocabulary',
    skillDetail: '故事词汇',
    choices: ["troll","medium","valley","small"],
    answer: 1
  },

  {
    id: 'g4_billygoats_022',
    q: '填写英文：桥',
    type: 'fill',
    grades: [4],
    topic: 'billygoats',
    skill: 'vocabulary',
    skillDetail: '故事词汇',
    answer: 'bridge'
  },

  {
    id: 'g4_billygoats_023',
    q: '"大的" 英语是？',
    type: 'choice',
    grades: [4],
    topic: 'billygoats',
    skill: 'vocabulary',
    skillDetail: '故事词汇',
    choices: ["big","valley","small","troll"],
    answer: 0
  },

  {
    id: 'g4_billygoats_024',
    q: '"蹄子" 英语是？',
    type: 'choice',
    grades: [4],
    topic: 'billygoats',
    skill: 'vocabulary',
    skillDetail: '故事词汇',
    choices: ["grass","goats","river","hooves"],
    answer: 3
  },

  {
    id: 'g4_billygoats_025',
    q: '填写英文：巨魔',
    type: 'fill',
    grades: [4],
    topic: 'billygoats',
    skill: 'vocabulary',
    skillDetail: '故事词汇',
    answer: 'troll'
  },

  {
    id: 'g3_littlepigs_026',
    q: '"屋顶" 英语是？',
    type: 'choice',
    grades: [3],
    topic: 'littlepigs',
    skill: 'vocabulary',
    skillDetail: '故事词汇',
    choices: ["huffed and puffed","wood","straw house","roof"],
    answer: 3
  },

  {
    id: 'g3_littlepigs_027',
    q: '"吹" 英语是？',
    type: 'choice',
    grades: [3],
    topic: 'littlepigs',
    skill: 'vocabulary',
    skillDetail: '故事词汇',
    choices: ["brick house","chimney","blow","straw house"],
    answer: 2
  },

  {
    id: 'g3_littlepigs_028',
    q: '"用力吹（呼呼喘气）" 英语是？',
    type: 'choice',
    grades: [3],
    topic: 'littlepigs',
    skill: 'vocabulary',
    skillDetail: '故事词汇',
    choices: ["blow","pot","wooden house","huffed and puffed"],
    answer: 3
  },

  {
    id: 'g3_littlepigs_029',
    q: 'little pigs（翻译成中文）',
    type: 'translate',
    grades: [3],
    topic: 'littlepigs',
    skill: 'vocabulary',
    skillDetail: '故事词汇',
    answer: '小猪'
  },

  {
    id: 'g3_littlepigs_030',
    q: '填写英文：狼',
    type: 'fill',
    grades: [3],
    topic: 'littlepigs',
    skill: 'vocabulary',
    skillDetail: '故事词汇',
    answer: 'wolf'
  },

  {
    id: 'g3_littlepigs_031',
    q: '"稻草" 英语是？',
    type: 'choice',
    grades: [3],
    topic: 'littlepigs',
    skill: 'vocabulary',
    skillDetail: '故事词汇',
    choices: ["roof","straw house","straw","brick"],
    answer: 2
  },

  {
    id: 'g3_littlepigs_032',
    q: 'pot（翻译成中文）',
    type: 'translate',
    grades: [3],
    topic: 'littlepigs',
    skill: 'vocabulary',
    skillDetail: '故事词汇',
    answer: '锅'
  },

  {
    id: 'g3_littlepigs_033',
    q: '"烟囱" 英语是？',
    type: 'choice',
    grades: [3],
    topic: 'littlepigs',
    skill: 'vocabulary',
    skillDetail: '故事词汇',
    choices: ["brick","chimney","wood","blow"],
    answer: 1
  },

  {
    id: 'g3_littlepigs_034',
    q: '"稻草屋" 英语是？',
    type: 'choice',
    grades: [3],
    topic: 'littlepigs',
    skill: 'vocabulary',
    skillDetail: '故事词汇',
    choices: ["roof","straw house","brick","wolf"],
    answer: 1
  },

  {
    id: 'g3_littlepigs_035',
    q: '"木屋" 英语是？',
    type: 'choice',
    grades: [3],
    topic: 'littlepigs',
    skill: 'vocabulary',
    skillDetail: '故事词汇',
    choices: ["pot","wood","wooden house","chimney"],
    answer: 2
  },

  {
    id: 'g3_littlepigs_036',
    q: '"砖房" 英语是？',
    type: 'choice',
    grades: [3],
    topic: 'littlepigs',
    skill: 'vocabulary',
    skillDetail: '故事词汇',
    choices: ["straw","little pigs","brick house","huffed and puffed"],
    answer: 2
  },

  {
    id: 'g3_littlepigs_037',
    q: '"砖块" 英语是？',
    type: 'choice',
    grades: [3],
    topic: 'littlepigs',
    skill: 'vocabulary',
    skillDetail: '故事词汇',
    choices: ["wood","wolf","straw house","brick"],
    answer: 3
  },

  {
    id: 'g3_littlepigs_038',
    q: '"木头" 英语是？',
    type: 'choice',
    grades: [3],
    topic: 'littlepigs',
    skill: 'vocabulary',
    skillDetail: '故事词汇',
    choices: ["wooden house","wood","blow","chimney"],
    answer: 1
  },

  {
    id: 'g4_transport_039',
    q: '"蒸汽火车" 英语是？',
    type: 'choice',
    grades: [4],
    topic: 'transport',
    skill: 'vocabulary',
    skillDetail: '交通词汇',
    choices: ["steam train","bus","boat","truck"],
    answer: 0
  },

  {
    id: 'g4_transport_040',
    q: '填写英文：飞艇',
    type: 'fill',
    grades: [4],
    topic: 'transport',
    skill: 'vocabulary',
    skillDetail: '交通词汇',
    answer: 'airship'
  },

  {
    id: 'g4_transport_041',
    q: '"轮船" 英语是？',
    type: 'choice',
    grades: [4],
    topic: 'transport',
    skill: 'vocabulary',
    skillDetail: '交通词汇',
    choices: ["tractor","space shuttle","lorry","ship"],
    answer: 3
  },

  {
    id: 'g4_transport_042',
    q: '"有轨电车" 英语是？',
    type: 'choice',
    grades: [4],
    topic: 'transport',
    skill: 'vocabulary',
    skillDetail: '交通词汇',
    choices: ["helicopter","tram","van","steam train"],
    answer: 1
  },

  {
    id: 'g4_transport_043',
    q: '"直升机" 英语是？',
    type: 'choice',
    grades: [4],
    topic: 'transport',
    skill: 'vocabulary',
    skillDetail: '交通词汇',
    choices: ["truck","steam train","helicopter","bicycle"],
    answer: 2
  },

  {
    id: 'g4_transport_044',
    q: '"卡车" 英语是？',
    type: 'choice',
    grades: [4],
    topic: 'transport',
    skill: 'vocabulary',
    skillDetail: '交通词汇',
    choices: ["truck","van","steam train","lorry"],
    answer: 0
  },

  {
    id: 'g4_transport_045',
    q: 'bus（翻译成中文）',
    type: 'translate',
    grades: [4],
    topic: 'transport',
    skill: 'vocabulary',
    skillDetail: '交通词汇',
    answer: '公共汽车'
  },

  {
    id: 'g4_transport_046',
    q: '"热气球" 英语是？',
    type: 'choice',
    grades: [4],
    topic: 'transport',
    skill: 'vocabulary',
    skillDetail: '交通词汇',
    choices: ["van","car","hot air balloon","tractor"],
    answer: 2
  },

  {
    id: 'g4_transport_047',
    q: '"拖拉机" 英语是？',
    type: 'choice',
    grades: [4],
    topic: 'transport',
    skill: 'vocabulary',
    skillDetail: '交通词汇',
    choices: ["aeroplane","ship","racing car","tractor"],
    answer: 3
  },

  {
    id: 'g4_transport_048',
    q: '"火车" 英语是？',
    type: 'choice',
    grades: [4],
    topic: 'transport',
    skill: 'vocabulary',
    skillDetail: '交通词汇',
    choices: ["steam train","helicopter","train","ferry"],
    answer: 2
  },

  {
    id: 'g4_transport_049',
    q: 'space shuttle（翻译成中文）',
    type: 'translate',
    grades: [4],
    topic: 'transport',
    skill: 'vocabulary',
    skillDetail: '交通词汇',
    answer: '航天飞机'
  },

  {
    id: 'g4_transport_050',
    q: '填写英文：小汽车',
    type: 'fill',
    grades: [4],
    topic: 'transport',
    skill: 'vocabulary',
    skillDetail: '交通词汇',
    answer: 'car'
  },

  {
    id: 'g4_transport_051',
    q: '"货车" 英语是？',
    type: 'choice',
    grades: [4],
    topic: 'transport',
    skill: 'vocabulary',
    skillDetail: '交通词汇',
    choices: ["bus","submarine","tractor","lorry"],
    answer: 3
  },

  {
    id: 'g4_transport_052',
    q: '"自行车" 英语是？',
    type: 'choice',
    grades: [4],
    topic: 'transport',
    skill: 'vocabulary',
    skillDetail: '交通词汇',
    choices: ["airship","ferry","bicycle","tram"],
    answer: 2
  },

  {
    id: 'g4_transport_053',
    q: '"飞机" 英语是？',
    type: 'choice',
    grades: [4],
    topic: 'transport',
    skill: 'vocabulary',
    skillDetail: '交通词汇',
    choices: ["steam train","hot air balloon","racing car","aeroplane"],
    answer: 3
  },

  {
    id: 'g4_transport_054',
    q: '填写英文：厢式货车',
    type: 'fill',
    grades: [4],
    topic: 'transport',
    skill: 'vocabulary',
    skillDetail: '交通词汇',
    answer: 'van'
  },

  {
    id: 'g4_transport_055',
    q: '"渡轮" 英语是？',
    type: 'choice',
    grades: [4],
    topic: 'transport',
    skill: 'vocabulary',
    skillDetail: '交通词汇',
    choices: ["racing car","ferry","tram","bicycle"],
    answer: 1
  },

  {
    id: 'g4_transport_056',
    q: '"潜水艇" 英语是？',
    type: 'choice',
    grades: [4],
    topic: 'transport',
    skill: 'vocabulary',
    skillDetail: '交通词汇',
    choices: ["submarine","lorry","van","racing car"],
    answer: 0
  },

  {
    id: 'g4_transport_057',
    q: '"赛车" 英语是？',
    type: 'choice',
    grades: [4],
    topic: 'transport',
    skill: 'vocabulary',
    skillDetail: '交通词汇',
    choices: ["truck","airship","racing car","tram"],
    answer: 2
  },

  {
    id: 'g4_transport_058',
    q: '"小船" 英语是？',
    type: 'choice',
    grades: [4],
    topic: 'transport',
    skill: 'vocabulary',
    skillDetail: '交通词汇',
    choices: ["lorry","bus","boat","racing car"],
    answer: 2
  },

  {
    id: 'g6_undersea_059',
    q: '"鲨鱼" 英语是？',
    type: 'choice',
    grades: [6],
    topic: 'undersea',
    skill: 'vocabulary',
    skillDetail: '海底生物',
    choices: ["shark","shell","coral","manta ray"],
    answer: 0
  },

  {
    id: 'g6_undersea_060',
    q: '"水母" 英语是？',
    type: 'choice',
    grades: [6],
    topic: 'undersea',
    skill: 'vocabulary',
    skillDetail: '海底生物',
    choices: ["diver","jellyfish","angelfish","pufferfish"],
    answer: 1
  },

  {
    id: 'g6_undersea_061',
    q: '"鱿鱼" 英语是？',
    type: 'choice',
    grades: [6],
    topic: 'undersea',
    skill: 'vocabulary',
    skillDetail: '海底生物',
    choices: ["anchor","octopus","coral snake","squid"],
    answer: 3
  },

  {
    id: 'g6_undersea_062',
    q: '"贝壳" 英语是？',
    type: 'choice',
    grades: [6],
    topic: 'undersea',
    skill: 'vocabulary',
    skillDetail: '海底生物',
    choices: ["swordfish","shell","anchor","coral snake"],
    answer: 1
  },

  {
    id: 'g6_undersea_063',
    q: '"螃蟹" 英语是？',
    type: 'choice',
    grades: [6],
    topic: 'undersea',
    skill: 'vocabulary',
    skillDetail: '海底生物',
    choices: ["shell","squid","coral snake","crab"],
    answer: 3
  },

  {
    id: 'g6_undersea_064',
    q: '"海星" 英语是？',
    type: 'choice',
    grades: [6],
    topic: 'undersea',
    skill: 'vocabulary',
    skillDetail: '海底生物',
    choices: ["seahorse","coral snake","octopus","starfish"],
    answer: 3
  },

  {
    id: 'g6_undersea_065',
    q: '"鱼" 英语是？',
    type: 'choice',
    grades: [6],
    topic: 'undersea',
    skill: 'vocabulary',
    skillDetail: '海底生物',
    choices: ["fish","angelfish","hermit crab","crab"],
    answer: 0
  },

  {
    id: 'g6_undersea_066',
    q: '"海马" 英语是？',
    type: 'choice',
    grades: [6],
    topic: 'undersea',
    skill: 'vocabulary',
    skillDetail: '海底生物',
    choices: ["swordfish","fish","whale","seahorse"],
    answer: 3
  },

  {
    id: 'g6_undersea_067',
    q: '"海龟" 英语是？',
    type: 'choice',
    grades: [6],
    topic: 'undersea',
    skill: 'vocabulary',
    skillDetail: '海底生物',
    choices: ["shark","octopus","turtle","diver"],
    answer: 2
  },

  {
    id: 'g6_undersea_068',
    q: '填写英文：神仙鱼',
    type: 'fill',
    grades: [6],
    topic: 'undersea',
    skill: 'vocabulary',
    skillDetail: '海底生物',
    answer: 'angelfish'
  },

  {
    id: 'g6_undersea_069',
    q: 'hermit crab（翻译成中文）',
    type: 'translate',
    grades: [6],
    topic: 'undersea',
    skill: 'vocabulary',
    skillDetail: '海底生物',
    answer: '寄居蟹'
  },

  {
    id: 'g6_undersea_070',
    q: '"剑鱼" 英语是？',
    type: 'choice',
    grades: [6],
    topic: 'undersea',
    skill: 'vocabulary',
    skillDetail: '海底生物',
    choices: ["swordfish","squid","jellyfish","manta ray"],
    answer: 0
  },

  {
    id: 'g6_undersea_071',
    q: '"潜水员" 英语是？',
    type: 'choice',
    grades: [6],
    topic: 'undersea',
    skill: 'vocabulary',
    skillDetail: '海底生物',
    choices: ["starfish","diver","seahorse","jellyfish"],
    answer: 1
  },

  {
    id: 'g6_undersea_072',
    q: '"锚" 英语是？',
    type: 'choice',
    grades: [6],
    topic: 'undersea',
    skill: 'vocabulary',
    skillDetail: '海底生物',
    choices: ["coral snake","diver","anchor","octopus"],
    answer: 2
  },

  {
    id: 'g6_undersea_073',
    q: '填写英文：鲸鱼',
    type: 'fill',
    grades: [6],
    topic: 'undersea',
    skill: 'vocabulary',
    skillDetail: '海底生物',
    answer: 'whale'
  },

  {
    id: 'g6_undersea_074',
    q: '"珊瑚蛇" 英语是？',
    type: 'choice',
    grades: [6],
    topic: 'undersea',
    skill: 'vocabulary',
    skillDetail: '海底生物',
    choices: ["angelfish","coral snake","anchor","shell"],
    answer: 1
  },

  {
    id: 'g6_undersea_075',
    q: '填写英文：沉船',
    type: 'fill',
    grades: [6],
    topic: 'undersea',
    skill: 'vocabulary',
    skillDetail: '海底生物',
    answer: 'shipwreck'
  },

  {
    id: 'g6_undersea_076',
    q: '"河豚" 英语是？',
    type: 'choice',
    grades: [6],
    topic: 'undersea',
    skill: 'vocabulary',
    skillDetail: '海底生物',
    choices: ["shark","pufferfish","starfish","coral"],
    answer: 1
  },

  {
    id: 'g6_undersea_077',
    q: '"章鱼" 英语是？',
    type: 'choice',
    grades: [6],
    topic: 'undersea',
    skill: 'vocabulary',
    skillDetail: '海底生物',
    choices: ["octopus","shark","hermit crab","pufferfish"],
    answer: 0
  },

  {
    id: 'g6_undersea_078',
    q: '"蝠鲼" 英语是？',
    type: 'choice',
    grades: [6],
    topic: 'undersea',
    skill: 'vocabulary',
    skillDetail: '海底生物',
    choices: ["jellyfish","seahorse","manta ray","hermit crab"],
    answer: 2
  },

  {
    id: 'g6_undersea_079',
    q: '"小丑鱼" 英语是？',
    type: 'choice',
    grades: [6],
    topic: 'undersea',
    skill: 'vocabulary',
    skillDetail: '海底生物',
    choices: ["crab","hermit crab","clownfish","fish"],
    answer: 2
  },

  {
    id: 'g6_undersea_080',
    q: '"珊瑚" 英语是？',
    type: 'choice',
    grades: [6],
    topic: 'undersea',
    skill: 'vocabulary',
    skillDetail: '海底生物',
    choices: ["diver","crab","whale","coral"],
    answer: 3
  },

  {
    id: 'g3_vegetables_081',
    q: '填写英文：胡萝卜',
    type: 'fill',
    grades: [3],
    topic: 'vegetables',
    skill: 'vocabulary',
    skillDetail: '蔬菜词汇',
    answer: 'carrot'
  },

  {
    id: 'g3_vegetables_082',
    q: '"洋葱" 英语是？',
    type: 'choice',
    grades: [3],
    topic: 'vegetables',
    skill: 'vocabulary',
    skillDetail: '蔬菜词汇',
    choices: ["leek","spinach","onion","broccoli"],
    answer: 2
  },

  {
    id: 'g3_vegetables_083',
    q: '填写英文：花椰菜',
    type: 'fill',
    grades: [3],
    topic: 'vegetables',
    skill: 'vocabulary',
    skillDetail: '蔬菜词汇',
    answer: 'cauliflower'
  },

  {
    id: 'g3_vegetables_084',
    q: '"生菜" 英语是？',
    type: 'choice',
    grades: [3],
    topic: 'vegetables',
    skill: 'vocabulary',
    skillDetail: '蔬菜词汇',
    choices: ["sprout","celery","lettuce","runner beans"],
    answer: 2
  },

  {
    id: 'g3_vegetables_085',
    q: '填写英文：土豆',
    type: 'fill',
    grades: [3],
    topic: 'vegetables',
    skill: 'vocabulary',
    skillDetail: '蔬菜词汇',
    answer: 'potato'
  },

  {
    id: 'g3_vegetables_086',
    q: '填写英文：芹菜',
    type: 'fill',
    grades: [3],
    topic: 'vegetables',
    skill: 'vocabulary',
    skillDetail: '蔬菜词汇',
    answer: 'celery'
  },

  {
    id: 'g3_vegetables_087',
    q: '填写英文：萝卜',
    type: 'fill',
    grades: [3],
    topic: 'vegetables',
    skill: 'vocabulary',
    skillDetail: '蔬菜词汇',
    answer: 'turnip'
  },

  {
    id: 'g3_vegetables_088',
    q: '填写英文：韭葱',
    type: 'fill',
    grades: [3],
    topic: 'vegetables',
    skill: 'vocabulary',
    skillDetail: '蔬菜词汇',
    answer: 'leek'
  },

  {
    id: 'g3_vegetables_089',
    q: 'marrow（翻译成中文）',
    type: 'translate',
    grades: [3],
    topic: 'vegetables',
    skill: 'vocabulary',
    skillDetail: '蔬菜词汇',
    answer: '西葫芦'
  },

  {
    id: 'g3_vegetables_090',
    q: '"芽苗菜" 英语是？',
    type: 'choice',
    grades: [3],
    topic: 'vegetables',
    skill: 'vocabulary',
    skillDetail: '蔬菜词汇',
    choices: ["sprout","potato","onion","marrow"],
    answer: 0
  },

  {
    id: 'g3_vegetables_091',
    q: 'peas（翻译成中文）',
    type: 'translate',
    grades: [3],
    topic: 'vegetables',
    skill: 'vocabulary',
    skillDetail: '蔬菜词汇',
    answer: '豌豆'
  },

  {
    id: 'g3_vegetables_092',
    q: '"四季豆" 英语是？',
    type: 'choice',
    grades: [3],
    topic: 'vegetables',
    skill: 'vocabulary',
    skillDetail: '蔬菜词汇',
    choices: ["onion","leek","runner beans","broccoli"],
    answer: 2
  },

  {
    id: 'g3_vegetables_093',
    q: '"甜玉米" 英语是？',
    type: 'choice',
    grades: [3],
    topic: 'vegetables',
    skill: 'vocabulary',
    skillDetail: '蔬菜词汇',
    choices: ["sweetcorn","lettuce","turnip","spinach"],
    answer: 0
  },

  {
    id: 'g3_vegetables_094',
    q: '"卷心菜" 英语是？',
    type: 'choice',
    grades: [3],
    topic: 'vegetables',
    skill: 'vocabulary',
    skillDetail: '蔬菜词汇',
    choices: ["broccoli","cabbage","sweet potato","runner beans"],
    answer: 1
  },

  {
    id: 'g3_vegetables_095',
    q: '"菠菜" 英语是？',
    type: 'choice',
    grades: [3],
    topic: 'vegetables',
    skill: 'vocabulary',
    skillDetail: '蔬菜词汇',
    choices: ["spinach","lettuce","cabbage","sweetcorn"],
    answer: 0
  },

  {
    id: 'g3_vegetables_096',
    q: '"红薯" 英语是？',
    type: 'choice',
    grades: [3],
    topic: 'vegetables',
    skill: 'vocabulary',
    skillDetail: '蔬菜词汇',
    choices: ["sprout","carrot","sweet potato","marrow"],
    answer: 2
  },

  {
    id: 'g3_vegetables_097',
    q: 'broccoli（翻译成中文）',
    type: 'translate',
    grades: [3],
    topic: 'vegetables',
    skill: 'vocabulary',
    skillDetail: '蔬菜词汇',
    answer: '西兰花'
  },

  {
    id: 'g3_vegetables_098',
    q: '"彩椒" 英语是？',
    type: 'choice',
    grades: [3],
    topic: 'vegetables',
    skill: 'vocabulary',
    skillDetail: '蔬菜词汇',
    choices: ["onion","pepper","broccoli","aubergine"],
    answer: 1
  },

  {
    id: 'g3_vegetables_099',
    q: '"茄子" 英语是？',
    type: 'choice',
    grades: [3],
    topic: 'vegetables',
    skill: 'vocabulary',
    skillDetail: '蔬菜词汇',
    choices: ["aubergine","sprout","cauliflower","cabbage"],
    answer: 0
  },

  {
    id: 'g3_vegetables_100',
    q: '"黄瓜" 英语是？',
    type: 'choice',
    grades: [3],
    topic: 'vegetables',
    skill: 'vocabulary',
    skillDetail: '蔬菜词汇',
    choices: ["aubergine","peas","cucumber","spinach"],
    answer: 2
  },

  {
    id: 'g4_weather_101',
    q: '"雾" 英语是？',
    type: 'choice',
    grades: [4],
    topic: 'weather',
    skill: 'vocabulary',
    skillDetail: '天气词汇',
    choices: ["shine","fog","lightning","hail"],
    answer: 1
  },

  {
    id: 'g4_weather_102',
    q: '"寒冷的" 英语是？',
    type: 'choice',
    grades: [4],
    topic: 'weather',
    skill: 'vocabulary',
    skillDetail: '天气词汇',
    choices: ["stormy","clouds","cold","rainbow"],
    answer: 2
  },

  {
    id: 'g4_weather_103',
    q: '"云" 英语是？',
    type: 'choice',
    grades: [4],
    topic: 'weather',
    skill: 'vocabulary',
    skillDetail: '天气词汇',
    choices: ["thunder","fog","clouds","shine"],
    answer: 2
  },

  {
    id: 'g4_weather_104',
    q: '"阵雨" 英语是？',
    type: 'choice',
    grades: [4],
    topic: 'weather',
    skill: 'vocabulary',
    skillDetail: '天气词汇',
    choices: ["thunder","sleet","showers","fog"],
    answer: 2
  },

  {
    id: 'g4_weather_105',
    q: '填写英文：湿的',
    type: 'fill',
    grades: [4],
    topic: 'weather',
    skill: 'vocabulary',
    skillDetail: '天气词汇',
    answer: 'wet'
  },

  {
    id: 'g4_weather_106',
    q: '"雪" 英语是？',
    type: 'choice',
    grades: [4],
    topic: 'weather',
    skill: 'vocabulary',
    skillDetail: '天气词汇',
    choices: ["snow","shine","showers","sleet"],
    answer: 0
  },

  {
    id: 'g4_weather_107',
    q: '填写英文：暴风雨的',
    type: 'fill',
    grades: [4],
    topic: 'weather',
    skill: 'vocabulary',
    skillDetail: '天气词汇',
    answer: 'stormy'
  },

  {
    id: 'g4_weather_108',
    q: '"干燥的" 英语是？',
    type: 'choice',
    grades: [4],
    topic: 'weather',
    skill: 'vocabulary',
    skillDetail: '天气词汇',
    choices: ["fog","showers","hot","dry"],
    answer: 3
  },

  {
    id: 'g4_weather_109',
    q: '"炎热的" 英语是？',
    type: 'choice',
    grades: [4],
    topic: 'weather',
    skill: 'vocabulary',
    skillDetail: '天气词汇',
    choices: ["hot","dry","drizzle","rain"],
    answer: 0
  },

  {
    id: 'g4_weather_110',
    q: '"雨夹雪" 英语是？',
    type: 'choice',
    grades: [4],
    topic: 'weather',
    skill: 'vocabulary',
    skillDetail: '天气词汇',
    choices: ["thunder","clouds","sleet","cold"],
    answer: 2
  },

  {
    id: 'g4_weather_111',
    q: '"雷声" 英语是？',
    type: 'choice',
    grades: [4],
    topic: 'weather',
    skill: 'vocabulary',
    skillDetail: '天气词汇',
    choices: ["hail","sunny","thunder","lightning"],
    answer: 2
  },

  {
    id: 'g4_weather_112',
    q: 'lightning（翻译成中文）',
    type: 'translate',
    grades: [4],
    topic: 'weather',
    skill: 'vocabulary',
    skillDetail: '天气词汇',
    answer: '闪电'
  },

  {
    id: 'g4_weather_113',
    q: '"照耀" 英语是？',
    type: 'choice',
    grades: [4],
    topic: 'weather',
    skill: 'vocabulary',
    skillDetail: '天气词汇',
    choices: ["shine","sleet","clouds","dry"],
    answer: 0
  },

  {
    id: 'g4_weather_114',
    q: '填写英文：冰雹',
    type: 'fill',
    grades: [4],
    topic: 'weather',
    skill: 'vocabulary',
    skillDetail: '天气词汇',
    answer: 'hail'
  },

  {
    id: 'g4_weather_115',
    q: '"冰" 英语是？',
    type: 'choice',
    grades: [4],
    topic: 'weather',
    skill: 'vocabulary',
    skillDetail: '天气词汇',
    choices: ["shine","rain","sleet","ice"],
    answer: 3
  },

  {
    id: 'g4_weather_116',
    q: '"彩虹" 英语是？',
    type: 'choice',
    grades: [4],
    topic: 'weather',
    skill: 'vocabulary',
    skillDetail: '天气词汇',
    choices: ["fog","clouds","sleet","rainbow"],
    answer: 3
  },

  {
    id: 'g4_weather_117',
    q: '"有风的" 英语是？',
    type: 'choice',
    grades: [4],
    topic: 'weather',
    skill: 'vocabulary',
    skillDetail: '天气词汇',
    choices: ["windy","shine","drizzle","hail"],
    answer: 0
  },

  {
    id: 'g4_weather_118',
    q: '"晴朗的" 英语是？',
    type: 'choice',
    grades: [4],
    topic: 'weather',
    skill: 'vocabulary',
    skillDetail: '天气词汇',
    choices: ["sunny","sleet","clouds","showers"],
    answer: 0
  },

  {
    id: 'g4_weather_119',
    q: '"雨" 英语是？',
    type: 'choice',
    grades: [4],
    topic: 'weather',
    skill: 'vocabulary',
    skillDetail: '天气词汇',
    choices: ["drizzle","cold","rain","windy"],
    answer: 2
  },

  {
    id: 'g4_weather_120',
    q: '填写英文：毛毛雨',
    type: 'fill',
    grades: [4],
    topic: 'weather',
    skill: 'vocabulary',
    skillDetail: '天气词汇',
    answer: 'drizzle'
  },

  {
    id: 'g4_winter_121',
    q: '"海狮" 英语是？',
    type: 'choice',
    grades: [4],
    topic: 'winter',
    skill: 'vocabulary',
    skillDetail: '冬天词汇',
    choices: ["sea lion","cold","Arctic hare","inuit"],
    answer: 0
  },

  {
    id: 'g4_winter_122',
    q: '"冰柱" 英语是？',
    type: 'choice',
    grades: [4],
    topic: 'winter',
    skill: 'vocabulary',
    skillDetail: '冬天词汇',
    choices: ["icicles","snowman","ice","Christmas"],
    answer: 0
  },

  {
    id: 'g4_winter_123',
    q: '"毛衣" 英语是？',
    type: 'choice',
    grades: [4],
    topic: 'winter',
    skill: 'vocabulary',
    skillDetail: '冬天词汇',
    choices: ["jumper","seal","ice","igloo"],
    answer: 0
  },

  {
    id: 'g4_winter_124',
    q: '"圣诞节" 英语是？',
    type: 'choice',
    grades: [4],
    topic: 'winter',
    skill: 'vocabulary',
    skillDetail: '冬天词汇',
    choices: ["ice","Christmas","Arctic hare","gloves"],
    answer: 1
  },

  {
    id: 'g4_winter_125',
    q: '"因纽特人" 英语是？',
    type: 'choice',
    grades: [4],
    topic: 'winter',
    skill: 'vocabulary',
    skillDetail: '冬天词汇',
    choices: ["ice skating","Arctic hare","inuit","seal"],
    answer: 2
  },

  {
    id: 'g4_winter_126',
    q: '"寒冷的" 英语是？',
    type: 'choice',
    grades: [4],
    topic: 'winter',
    skill: 'vocabulary',
    skillDetail: '冬天词汇',
    choices: ["dogs and sled","Christmas","jumper","cold"],
    answer: 3
  },

  {
    id: 'g4_winter_127',
    q: '填写英文：滑雪板',
    type: 'fill',
    grades: [4],
    topic: 'winter',
    skill: 'vocabulary',
    skillDetail: '冬天词汇',
    answer: 'skis'
  },

  {
    id: 'g4_winter_128',
    q: 'dogs and sled（翻译成中文）',
    type: 'translate',
    grades: [4],
    topic: 'winter',
    skill: 'vocabulary',
    skillDetail: '冬天词汇',
    answer: '狗拉雪橇'
  },

  {
    id: 'g4_winter_129',
    q: '"北极兔" 英语是？',
    type: 'choice',
    grades: [4],
    topic: 'winter',
    skill: 'vocabulary',
    skillDetail: '冬天词汇',
    choices: ["Arctic hare","seal","snowman","ice skating"],
    answer: 0
  },

  {
    id: 'g4_winter_130',
    q: '"海豹" 英语是？',
    type: 'choice',
    grades: [4],
    topic: 'winter',
    skill: 'vocabulary',
    skillDetail: '冬天词汇',
    choices: ["winter","seal","ice skating","skis"],
    answer: 1
  },

  {
    id: 'g4_winter_131',
    q: '"雪人" 英语是？',
    type: 'choice',
    grades: [4],
    topic: 'winter',
    skill: 'vocabulary',
    skillDetail: '冬天词汇',
    choices: ["skis","snowman","dogs and sled","scarf"],
    answer: 1
  },

  {
    id: 'g4_winter_132',
    q: '"冰" 英语是？',
    type: 'choice',
    grades: [4],
    topic: 'winter',
    skill: 'vocabulary',
    skillDetail: '冬天词汇',
    choices: ["ice","jumper","cold","icicles"],
    answer: 0
  },

  {
    id: 'g4_winter_133',
    q: '"围巾" 英语是？',
    type: 'choice',
    grades: [4],
    topic: 'winter',
    skill: 'vocabulary',
    skillDetail: '冬天词汇',
    choices: ["woolly hat","Christmas","scarf","sea lion"],
    answer: 2
  },

  {
    id: 'g4_winter_134',
    q: 'snowy owl（翻译成中文）',
    type: 'translate',
    grades: [4],
    topic: 'winter',
    skill: 'vocabulary',
    skillDetail: '冬天词汇',
    answer: '雪鸮'
  },

  {
    id: 'g4_winter_135',
    q: '填写英文：滑冰',
    type: 'fill',
    grades: [4],
    topic: 'winter',
    skill: 'vocabulary',
    skillDetail: '冬天词汇',
    answer: 'ice skating'
  },

  {
    id: 'g4_winter_136',
    q: '"手套" 英语是？',
    type: 'choice',
    grades: [4],
    topic: 'winter',
    skill: 'vocabulary',
    skillDetail: '冬天词汇',
    choices: ["winter","jumper","gloves","skis"],
    answer: 2
  },

  {
    id: 'g4_winter_137',
    q: '"企鹅" 英语是？',
    type: 'choice',
    grades: [4],
    topic: 'winter',
    skill: 'vocabulary',
    skillDetail: '冬天词汇',
    choices: ["skis","woolly hat","Christmas","penguin"],
    answer: 3
  },

  {
    id: 'g4_winter_138',
    q: '"北极熊" 英语是？',
    type: 'choice',
    grades: [4],
    topic: 'winter',
    skill: 'vocabulary',
    skillDetail: '冬天词汇',
    choices: ["winter","snowman","ice","polar bear"],
    answer: 3
  },

  {
    id: 'g4_winter_139',
    q: '"雪球" 英语是？',
    type: 'choice',
    grades: [4],
    topic: 'winter',
    skill: 'vocabulary',
    skillDetail: '冬天词汇',
    choices: ["ice skating","Arctic hare","snowballs","jumper"],
    answer: 2
  },

  {
    id: 'g4_winter_140',
    q: '填写英文：毛线帽',
    type: 'fill',
    grades: [4],
    topic: 'winter',
    skill: 'vocabulary',
    skillDetail: '冬天词汇',
    answer: 'woolly hat'
  },

  {
    id: 'g4_winter_141',
    q: '"冰屋" 英语是？',
    type: 'choice',
    grades: [4],
    topic: 'winter',
    skill: 'vocabulary',
    skillDetail: '冬天词汇',
    choices: ["igloo","skis","snowman","penguin"],
    answer: 0
  },

  {
    id: 'g4_winter_142',
    q: '"冬天" 英语是？',
    type: 'choice',
    grades: [4],
    topic: 'winter',
    skill: 'vocabulary',
    skillDetail: '冬天词汇',
    choices: ["snowballs","penguin","ice skating","winter"],
    answer: 3
  },

  {
    id: 'g5_police_143',
    q: '"指纹" 英语是？',
    type: 'choice',
    grades: [5],
    topic: 'police',
    skill: 'vocabulary',
    skillDetail: '职业词汇',
    choices: ["finger print","siren","police car","police station"],
    answer: 0
  },

  {
    id: 'g5_police_144',
    q: '"对讲机" 英语是？',
    type: 'choice',
    grades: [5],
    topic: 'police',
    skill: 'vocabulary',
    skillDetail: '职业词汇',
    choices: ["police car","siren","police officer","radio"],
    answer: 3
  },

  {
    id: 'g5_police_145',
    q: '填写英文：警犬',
    type: 'fill',
    grades: [5],
    topic: 'police',
    skill: 'vocabulary',
    skillDetail: '职业词汇',
    answer: 'police dog'
  },

  {
    id: 'g5_police_146',
    q: '填写英文：头盔',
    type: 'fill',
    grades: [5],
    topic: 'police',
    skill: 'vocabulary',
    skillDetail: '职业词汇',
    answer: 'helmet'
  },

  {
    id: 'g5_police_147',
    q: '填写英文：警用马',
    type: 'fill',
    grades: [5],
    topic: 'police',
    skill: 'vocabulary',
    skillDetail: '职业词汇',
    answer: 'police horse'
  },

  {
    id: 'g5_police_148',
    q: '"警用直升机" 英语是？',
    type: 'choice',
    grades: [5],
    topic: 'police',
    skill: 'vocabulary',
    skillDetail: '职业词汇',
    choices: ["siren","police helicopter","radio","helmet"],
    answer: 1
  },

  {
    id: 'g5_police_149',
    q: '"警察" 英语是？',
    type: 'choice',
    grades: [5],
    topic: 'police',
    skill: 'vocabulary',
    skillDetail: '职业词汇',
    choices: ["police van","police officer","police station","handcuffs"],
    answer: 1
  },

  {
    id: 'g5_police_150',
    q: 'police car（翻译成中文）',
    type: 'translate',
    grades: [5],
    topic: 'police',
    skill: 'vocabulary',
    skillDetail: '职业词汇',
    answer: '警车'
  },

  {
    id: 'g5_police_151',
    q: '"警用记事本" 英语是？',
    type: 'choice',
    grades: [5],
    topic: 'police',
    skill: 'vocabulary',
    skillDetail: '职业词汇',
    choices: ["police car","police note pad","police horse","police officer"],
    answer: 1
  },

  {
    id: 'g5_police_152',
    q: '"警用面包车" 英语是？',
    type: 'choice',
    grades: [5],
    topic: 'police',
    skill: 'vocabulary',
    skillDetail: '职业词汇',
    choices: ["radio","police van","police station","police horse"],
    answer: 1
  },

  {
    id: 'g5_police_153',
    q: '填写英文：警察局',
    type: 'fill',
    grades: [5],
    topic: 'police',
    skill: 'vocabulary',
    skillDetail: '职业词汇',
    answer: 'police station'
  },

  {
    id: 'g5_police_154',
    q: 'siren（翻译成中文）',
    type: 'translate',
    grades: [5],
    topic: 'police',
    skill: 'vocabulary',
    skillDetail: '职业词汇',
    answer: '警笛'
  },

  {
    id: 'g5_police_155',
    q: '"手电筒" 英语是？',
    type: 'choice',
    grades: [5],
    topic: 'police',
    skill: 'vocabulary',
    skillDetail: '职业词汇',
    choices: ["police station","torch","finger print","police helicopter"],
    answer: 1
  },

  {
    id: 'g5_police_156',
    q: '"手铐" 英语是？',
    type: 'choice',
    grades: [5],
    topic: 'police',
    skill: 'vocabulary',
    skillDetail: '职业词汇',
    choices: ["handcuffs","police note pad","police horse","siren"],
    answer: 0
  },

  {
    id: 'g6_recycling_157',
    q: '"硬纸板" 英语是？',
    type: 'choice',
    grades: [6],
    topic: 'recycling',
    skill: 'vocabulary',
    skillDetail: '环保词汇',
    choices: ["cans","recycle","reuse","cardboard"],
    answer: 3
  },

  {
    id: 'g6_recycling_158',
    q: '"垃圾桶" 英语是？',
    type: 'choice',
    grades: [6],
    topic: 'recycling',
    skill: 'vocabulary',
    skillDetail: '环保词汇',
    choices: ["compost","environment","bin","cardboard"],
    answer: 2
  },

  {
    id: 'g6_recycling_159',
    q: '"堆肥" 英语是？',
    type: 'choice',
    grades: [6],
    topic: 'recycling',
    skill: 'vocabulary',
    skillDetail: '环保词汇',
    choices: ["compost","landfill","recycle","waste"],
    answer: 0
  },

  {
    id: 'g6_recycling_160',
    q: '"塑料" 英语是？',
    type: 'choice',
    grades: [6],
    topic: 'recycling',
    skill: 'vocabulary',
    skillDetail: '环保词汇',
    choices: ["clothes","tip","cardboard","plastic"],
    answer: 3
  },

  {
    id: 'g6_recycling_161',
    q: '"垃圾/废弃物" 英语是？',
    type: 'choice',
    grades: [6],
    topic: 'recycling',
    skill: 'vocabulary',
    skillDetail: '环保词汇',
    choices: ["compost","glass","waste","landfill"],
    answer: 2
  },

  {
    id: 'g6_recycling_162',
    q: '填写英文：环境',
    type: 'fill',
    grades: [6],
    topic: 'recycling',
    skill: 'vocabulary',
    skillDetail: '环保词汇',
    answer: 'environment'
  },

  {
    id: 'g6_recycling_163',
    q: '"金属罐" 英语是？',
    type: 'choice',
    grades: [6],
    topic: 'recycling',
    skill: 'vocabulary',
    skillDetail: '环保词汇',
    choices: ["bin","environment","cans","compost"],
    answer: 2
  },

  {
    id: 'g6_recycling_164',
    q: 'glass（翻译成中文）',
    type: 'translate',
    grades: [6],
    topic: 'recycling',
    skill: 'vocabulary',
    skillDetail: '环保词汇',
    answer: '玻璃'
  },

  {
    id: 'g6_recycling_165',
    q: 'clothes（翻译成中文）',
    type: 'translate',
    grades: [6],
    topic: 'recycling',
    skill: 'vocabulary',
    skillDetail: '环保词汇',
    answer: '衣物'
  },

  {
    id: 'g6_recycling_166',
    q: '"垃圾填埋场" 英语是？',
    type: 'choice',
    grades: [6],
    topic: 'recycling',
    skill: 'vocabulary',
    skillDetail: '环保词汇',
    choices: ["landfill","paper","plastic","tip"],
    answer: 0
  },

  {
    id: 'g6_recycling_167',
    q: 'paper（翻译成中文）',
    type: 'translate',
    grades: [6],
    topic: 'recycling',
    skill: 'vocabulary',
    skillDetail: '环保词汇',
    answer: '纸'
  },

  {
    id: 'g6_recycling_168',
    q: '"回收" 英语是？',
    type: 'choice',
    grades: [6],
    topic: 'recycling',
    skill: 'vocabulary',
    skillDetail: '环保词汇',
    choices: ["environment","recycle","waste","paper"],
    answer: 1
  },

  {
    id: 'g6_recycling_169',
    q: '"再利用" 英语是？',
    type: 'choice',
    grades: [6],
    topic: 'recycling',
    skill: 'vocabulary',
    skillDetail: '环保词汇',
    choices: ["glass","tip","cardboard","reuse"],
    answer: 3
  },

  {
    id: 'g6_recycling_170',
    q: '"垃圾场" 英语是？',
    type: 'choice',
    grades: [6],
    topic: 'recycling',
    skill: 'vocabulary',
    skillDetail: '环保词汇',
    choices: ["environment","tip","glass","cans"],
    answer: 1
  },

  {
    id: 'g5_sleepingbeauty_171',
    q: '"睡觉" 英语是？',
    type: 'choice',
    grades: [5],
    topic: 'sleepingbeauty',
    skill: 'vocabulary',
    skillDetail: '故事词汇',
    choices: ["wicked fairy","sleep","magic","Prince"],
    answer: 1
  },

  {
    id: 'g5_sleepingbeauty_172',
    q: '填写英文：魔法',
    type: 'fill',
    grades: [5],
    topic: 'sleepingbeauty',
    skill: 'vocabulary',
    skillDetail: '故事词汇',
    answer: 'magic'
  },

  {
    id: 'g5_sleepingbeauty_173',
    q: '"婴儿" 英语是？',
    type: 'choice',
    grades: [5],
    topic: 'sleepingbeauty',
    skill: 'vocabulary',
    skillDetail: '故事词汇',
    choices: ["kiss","baby","wicked fairy","castle"],
    answer: 1
  },

  {
    id: 'g5_sleepingbeauty_174',
    q: '填写英文：女王',
    type: 'fill',
    grades: [5],
    topic: 'sleepingbeauty',
    skill: 'vocabulary',
    skillDetail: '故事词汇',
    answer: 'Queen'
  },

  {
    id: 'g5_sleepingbeauty_175',
    q: '"城堡" 英语是？',
    type: 'choice',
    grades: [5],
    topic: 'sleepingbeauty',
    skill: 'vocabulary',
    skillDetail: '故事词汇',
    choices: ["Forest","curse","wicked fairy","castle"],
    answer: 3
  },

  {
    id: 'g5_sleepingbeauty_176',
    q: 'curse（翻译成中文）',
    type: 'translate',
    grades: [5],
    topic: 'sleepingbeauty',
    skill: 'vocabulary',
    skillDetail: '故事词汇',
    answer: '诅咒'
  },

  {
    id: 'g5_sleepingbeauty_177',
    q: '"礼物" 英语是？',
    type: 'choice',
    grades: [5],
    topic: 'sleepingbeauty',
    skill: 'vocabulary',
    skillDetail: '故事词汇',
    choices: ["woke","baby","castle","gifts"],
    answer: 3
  },

  {
    id: 'g5_sleepingbeauty_178',
    q: '填写英文：醒来',
    type: 'fill',
    grades: [5],
    topic: 'sleepingbeauty',
    skill: 'vocabulary',
    skillDetail: '故事词汇',
    answer: 'woke'
  },

  {
    id: 'g5_sleepingbeauty_179',
    q: '"纺车" 英语是？',
    type: 'choice',
    grades: [5],
    topic: 'sleepingbeauty',
    skill: 'vocabulary',
    skillDetail: '故事词汇',
    choices: ["sleep","spinning wheel","woke","magic"],
    answer: 1
  },

  {
    id: 'g5_sleepingbeauty_180',
    q: '"国王" 英语是？',
    type: 'choice',
    grades: [5],
    topic: 'sleepingbeauty',
    skill: 'vocabulary',
    skillDetail: '故事词汇',
    choices: ["spinning wheel","castle","King","woke"],
    answer: 2
  },

  {
    id: 'g5_sleepingbeauty_181',
    q: '"森林" 英语是？',
    type: 'choice',
    grades: [5],
    topic: 'sleepingbeauty',
    skill: 'vocabulary',
    skillDetail: '故事词汇',
    choices: ["curse","Forest","sleep","kiss"],
    answer: 1
  },

  {
    id: 'g5_sleepingbeauty_182',
    q: '"仙女" 英语是？',
    type: 'choice',
    grades: [5],
    topic: 'sleepingbeauty',
    skill: 'vocabulary',
    skillDetail: '故事词汇',
    choices: ["fairies","Prince","magic","sleep"],
    answer: 0
  },

  {
    id: 'g5_sleepingbeauty_183',
    q: '"王子" 英语是？',
    type: 'choice',
    grades: [5],
    topic: 'sleepingbeauty',
    skill: 'vocabulary',
    skillDetail: '故事词汇',
    choices: ["gifts","castle","Prince","wicked fairy"],
    answer: 2
  },

  {
    id: 'g5_sleepingbeauty_184',
    q: '填写英文：邪恶仙女',
    type: 'fill',
    grades: [5],
    topic: 'sleepingbeauty',
    skill: 'vocabulary',
    skillDetail: '故事词汇',
    answer: 'wicked fairy'
  },

  {
    id: 'g5_sleepingbeauty_185',
    q: '"亲吻" 英语是？',
    type: 'choice',
    grades: [5],
    topic: 'sleepingbeauty',
    skill: 'vocabulary',
    skillDetail: '故事词汇',
    choices: ["fairies","castle","kiss","King"],
    answer: 2
  },

  {
    id: 'g5_snowwhite_186',
    q: '"美丽的" 英语是？',
    type: 'choice',
    grades: [5],
    topic: 'snowwhite',
    skill: 'vocabulary',
    skillDetail: '故事词汇',
    choices: ["stepmother","beautiful","Snow White","kiss"],
    answer: 1
  },

  {
    id: 'g5_snowwhite_187',
    q: '填写英文：嫉妒的',
    type: 'fill',
    grades: [5],
    topic: 'snowwhite',
    skill: 'vocabulary',
    skillDetail: '故事词汇',
    answer: 'jealous'
  },

  {
    id: 'g5_snowwhite_188',
    q: '"继母" 英语是？',
    type: 'choice',
    grades: [5],
    topic: 'snowwhite',
    skill: 'vocabulary',
    skillDetail: '故事词汇',
    choices: ["stepmother","jealous","cottage","The Queen"],
    answer: 0
  },

  {
    id: 'g5_snowwhite_189',
    q: 'Snow White（翻译成中文）',
    type: 'translate',
    grades: [5],
    topic: 'snowwhite',
    skill: 'vocabulary',
    skillDetail: '故事词汇',
    answer: '白雪公主'
  },

  {
    id: 'g5_snowwhite_190',
    q: '"有毒的" 英语是？',
    type: 'choice',
    grades: [5],
    topic: 'snowwhite',
    skill: 'vocabulary',
    skillDetail: '故事词汇',
    choices: ["The Prince","seven dwarfs","fairest","poisoned"],
    answer: 3
  },

  {
    id: 'g5_snowwhite_191',
    q: 'The Queen（翻译成中文）',
    type: 'translate',
    grades: [5],
    topic: 'snowwhite',
    skill: 'vocabulary',
    skillDetail: '故事词汇',
    answer: '王后'
  },

  {
    id: 'g5_snowwhite_192',
    q: '"药水" 英语是？',
    type: 'choice',
    grades: [5],
    topic: 'snowwhite',
    skill: 'vocabulary',
    skillDetail: '故事词汇',
    choices: ["potion","apple","forest","fairest"],
    answer: 0
  },

  {
    id: 'g5_snowwhite_193',
    q: '"苹果" 英语是？',
    type: 'choice',
    grades: [5],
    topic: 'snowwhite',
    skill: 'vocabulary',
    skillDetail: '故事词汇',
    choices: ["The Queen","apple","cottage","pig"],
    answer: 1
  },

  {
    id: 'g5_snowwhite_194',
    q: '"魔镜" 英语是？',
    type: 'choice',
    grades: [5],
    topic: 'snowwhite',
    skill: 'vocabulary',
    skillDetail: '故事词汇',
    choices: ["jealous","potion","magic mirror","cottage"],
    answer: 2
  },

  {
    id: 'g5_snowwhite_195',
    q: '填写英文：心脏',
    type: 'fill',
    grades: [5],
    topic: 'snowwhite',
    skill: 'vocabulary',
    skillDetail: '故事词汇',
    answer: 'heart'
  },

  {
    id: 'g5_snowwhite_196',
    q: '"猪" 英语是？',
    type: 'choice',
    grades: [5],
    topic: 'snowwhite',
    skill: 'vocabulary',
    skillDetail: '故事词汇',
    choices: ["old hag","seven dwarfs","forest","pig"],
    answer: 3
  },

  {
    id: 'g5_snowwhite_197',
    q: 'cottage（翻译成中文）',
    type: 'translate',
    grades: [5],
    topic: 'snowwhite',
    skill: 'vocabulary',
    skillDetail: '故事词汇',
    answer: '小屋'
  },

  {
    id: 'g5_snowwhite_198',
    q: 'forest（翻译成中文）',
    type: 'translate',
    grades: [5],
    topic: 'snowwhite',
    skill: 'vocabulary',
    skillDetail: '故事词汇',
    answer: '森林'
  },

  {
    id: 'g5_snowwhite_199',
    q: '"最美的" 英语是？',
    type: 'choice',
    grades: [5],
    topic: 'snowwhite',
    skill: 'vocabulary',
    skillDetail: '故事词汇',
    choices: ["old hag","forest","Snow White","fairest"],
    answer: 3
  },

  {
    id: 'g5_snowwhite_200',
    q: '填写英文：亲吻',
    type: 'fill',
    grades: [5],
    topic: 'snowwhite',
    skill: 'vocabulary',
    skillDetail: '故事词汇',
    answer: 'kiss'
  },

  {
    id: 'g5_snowwhite_201',
    q: '"老巫婆" 英语是？',
    type: 'choice',
    grades: [5],
    topic: 'snowwhite',
    skill: 'vocabulary',
    skillDetail: '故事词汇',
    choices: ["The Prince","asleep","huntsman","old hag"],
    answer: 3
  },

  {
    id: 'g5_snowwhite_202',
    q: '填写英文：七个小矮人',
    type: 'fill',
    grades: [5],
    topic: 'snowwhite',
    skill: 'vocabulary',
    skillDetail: '故事词汇',
    answer: 'seven dwarfs'
  },

  {
    id: 'g5_snowwhite_203',
    q: '填写英文：睡着的',
    type: 'fill',
    grades: [5],
    topic: 'snowwhite',
    skill: 'vocabulary',
    skillDetail: '故事词汇',
    answer: 'asleep'
  },

  {
    id: 'g5_snowwhite_204',
    q: 'huntsman（翻译成中文）',
    type: 'translate',
    grades: [5],
    topic: 'snowwhite',
    skill: 'vocabulary',
    skillDetail: '故事词汇',
    answer: '猎人'
  },

  {
    id: 'g5_snowwhite_205',
    q: '"王子" 英语是？',
    type: 'choice',
    grades: [5],
    topic: 'snowwhite',
    skill: 'vocabulary',
    skillDetail: '故事词汇',
    choices: ["poisoned","The Prince","old hag","huntsman"],
    answer: 1
  },

  {
    id: 'g6_space_206',
    q: '填写英文：水星',
    type: 'fill',
    grades: [6],
    topic: 'space',
    skill: 'vocabulary',
    skillDetail: '太空词汇',
    answer: 'Mercury'
  },

  {
    id: 'g6_space_207',
    q: '"金星" 英语是？',
    type: 'choice',
    grades: [6],
    topic: 'space',
    skill: 'vocabulary',
    skillDetail: '太空词汇',
    choices: ["satellite","comet","stars","Venus"],
    answer: 3
  },

  {
    id: 'g6_space_208',
    q: '"地球" 英语是？',
    type: 'choice',
    grades: [6],
    topic: 'space',
    skill: 'vocabulary',
    skillDetail: '太空词汇',
    choices: ["Venus","Earth","Uranus","satellite"],
    answer: 1
  },

  {
    id: 'g6_space_209',
    q: '"火星" 英语是？',
    type: 'choice',
    grades: [6],
    topic: 'space',
    skill: 'vocabulary',
    skillDetail: '太空词汇',
    choices: ["Uranus","vacuum","Mars","comet"],
    answer: 2
  },

  {
    id: 'g6_space_210',
    q: '填写英文：木星',
    type: 'fill',
    grades: [6],
    topic: 'space',
    skill: 'vocabulary',
    skillDetail: '太空词汇',
    answer: 'Jupiter'
  },

  {
    id: 'g6_space_211',
    q: 'Saturn（翻译成中文）',
    type: 'translate',
    grades: [6],
    topic: 'space',
    skill: 'vocabulary',
    skillDetail: '太空词汇',
    answer: '土星'
  },

  {
    id: 'g6_space_212',
    q: '"天王星" 英语是？',
    type: 'choice',
    grades: [6],
    topic: 'space',
    skill: 'vocabulary',
    skillDetail: '太空词汇',
    choices: ["Uranus","comet","Neptune","stars"],
    answer: 0
  },

  {
    id: 'g6_space_213',
    q: '"海王星" 英语是？',
    type: 'choice',
    grades: [6],
    topic: 'space',
    skill: 'vocabulary',
    skillDetail: '太空词汇',
    choices: ["Jupiter","Neptune","Uranus","rocket"],
    answer: 1
  },

  {
    id: 'g6_space_214',
    q: '"冥王星" 英语是？',
    type: 'choice',
    grades: [6],
    topic: 'space',
    skill: 'vocabulary',
    skillDetail: '太空词汇',
    choices: ["Pluto","Venus","comet","satellite"],
    answer: 0
  },

  {
    id: 'g6_space_215',
    q: '填写英文：月亮',
    type: 'fill',
    grades: [6],
    topic: 'space',
    skill: 'vocabulary',
    skillDetail: '太空词汇',
    answer: 'moon'
  },

  {
    id: 'g6_space_216',
    q: '"小行星" 英语是？',
    type: 'choice',
    grades: [6],
    topic: 'space',
    skill: 'vocabulary',
    skillDetail: '太空词汇',
    choices: ["Neptune","asteroids","sun","Jupiter"],
    answer: 1
  },

  {
    id: 'g6_space_217',
    q: '"彗星" 英语是？',
    type: 'choice',
    grades: [6],
    topic: 'space',
    skill: 'vocabulary',
    skillDetail: '太空词汇',
    choices: ["comet","sun","vacuum","rocket"],
    answer: 0
  },

  {
    id: 'g6_space_218',
    q: '"太阳" 英语是？',
    type: 'choice',
    grades: [6],
    topic: 'space',
    skill: 'vocabulary',
    skillDetail: '太空词汇',
    choices: ["moon","Mercury","satellite","sun"],
    answer: 3
  },

  {
    id: 'g6_space_219',
    q: '"星系" 英语是？',
    type: 'choice',
    grades: [6],
    topic: 'space',
    skill: 'vocabulary',
    skillDetail: '太空词汇',
    choices: ["stars","galaxy","Saturn","Pluto"],
    answer: 1
  },

  {
    id: 'g6_space_220',
    q: '"航天飞机" 英语是？',
    type: 'choice',
    grades: [6],
    topic: 'space',
    skill: 'vocabulary',
    skillDetail: '太空词汇',
    choices: ["Mercury","Jupiter","space shuttle","moon"],
    answer: 2
  },

  {
    id: 'g6_space_221',
    q: '"火箭" 英语是？',
    type: 'choice',
    grades: [6],
    topic: 'space',
    skill: 'vocabulary',
    skillDetail: '太空词汇',
    choices: ["satellite","space shuttle","Saturn","rocket"],
    answer: 3
  },

  {
    id: 'g6_space_222',
    q: '"真空" 英语是？',
    type: 'choice',
    grades: [6],
    topic: 'space',
    skill: 'vocabulary',
    skillDetail: '太空词汇',
    choices: ["vacuum","Earth","Mars","moon"],
    answer: 0
  },

  {
    id: 'g6_space_223',
    q: '"星星" 英语是？',
    type: 'choice',
    grades: [6],
    topic: 'space',
    skill: 'vocabulary',
    skillDetail: '太空词汇',
    choices: ["stars","Pluto","space shuttle","Mars"],
    answer: 0
  },

  {
    id: 'g6_space_224',
    q: '"卫星" 英语是？',
    type: 'choice',
    grades: [6],
    topic: 'space',
    skill: 'vocabulary',
    skillDetail: '太空词汇',
    choices: ["Saturn","Jupiter","satellite","rocket"],
    answer: 2
  },

  {
    id: 'g5_superhero_225',
    q: '"火" 英语是？',
    type: 'choice',
    grades: [5],
    topic: 'superhero',
    skill: 'vocabulary',
    skillDetail: '超级英雄词汇',
    choices: ["vision","lightning","fire","sidekick"],
    answer: 2
  },

  {
    id: 'g5_superhero_226',
    q: '"冰" 英语是？',
    type: 'choice',
    grades: [5],
    topic: 'superhero',
    skill: 'vocabulary',
    skillDetail: '超级英雄词汇',
    choices: ["strong","fast","sidekick","ice"],
    answer: 3
  },

  {
    id: 'g5_superhero_227',
    q: '填写英文：快的',
    type: 'fill',
    grades: [5],
    topic: 'superhero',
    skill: 'vocabulary',
    skillDetail: '超级英雄词汇',
    answer: 'fast'
  },

  {
    id: 'g5_superhero_228',
    q: '"变身" 英语是？',
    type: 'choice',
    grades: [5],
    topic: 'superhero',
    skill: 'vocabulary',
    skillDetail: '超级英雄词汇',
    choices: ["invisibility","boots","costume","transform"],
    answer: 3
  },

  {
    id: 'g5_superhero_229',
    q: '"战衣" 英语是？',
    type: 'choice',
    grades: [5],
    topic: 'superhero',
    skill: 'vocabulary',
    skillDetail: '超级英雄词汇',
    choices: ["cape","costume","sidekick","mask"],
    answer: 1
  },

  {
    id: 'g5_superhero_230',
    q: '填写英文：超级英雄',
    type: 'fill',
    grades: [5],
    topic: 'superhero',
    skill: 'vocabulary',
    skillDetail: '超级英雄词汇',
    answer: 'superhero'
  },

  {
    id: 'g5_superhero_231',
    q: '"闪电" 英语是？',
    type: 'choice',
    grades: [5],
    topic: 'superhero',
    skill: 'vocabulary',
    skillDetail: '超级英雄词汇',
    choices: ["fire","lightning","ice","sidekick"],
    answer: 1
  },

  {
    id: 'g5_superhero_232',
    q: '"飞行" 英语是？',
    type: 'choice',
    grades: [5],
    topic: 'superhero',
    skill: 'vocabulary',
    skillDetail: '超级英雄词汇',
    choices: ["lightning","sidekick","boots","flying"],
    answer: 3
  },

  {
    id: 'g5_superhero_233',
    q: '填写英文：隐身',
    type: 'fill',
    grades: [5],
    topic: 'superhero',
    skill: 'vocabulary',
    skillDetail: '超级英雄词汇',
    answer: 'invisibility'
  },

  {
    id: 'g5_superhero_234',
    q: '"X光" 英语是？',
    type: 'choice',
    grades: [5],
    topic: 'superhero',
    skill: 'vocabulary',
    skillDetail: '超级英雄词汇',
    choices: ["cape","transform","strong","x-ray"],
    answer: 3
  },

  {
    id: 'g5_superhero_235',
    q: '"强壮的" 英语是？',
    type: 'choice',
    grades: [5],
    topic: 'superhero',
    skill: 'vocabulary',
    skillDetail: '超级英雄词汇',
    choices: ["invisibility","mask","fire","strong"],
    answer: 3
  },

  {
    id: 'g5_superhero_236',
    q: '"视力" 英语是？',
    type: 'choice',
    grades: [5],
    topic: 'superhero',
    skill: 'vocabulary',
    skillDetail: '超级英雄词汇',
    choices: ["vision","ice","boots","superhero"],
    answer: 0
  },

  {
    id: 'g5_superhero_237',
    q: '"面具" 英语是？',
    type: 'choice',
    grades: [5],
    topic: 'superhero',
    skill: 'vocabulary',
    skillDetail: '超级英雄词汇',
    choices: ["mask","strong","boots","costume"],
    answer: 0
  },

  {
    id: 'g5_superhero_238',
    q: '"披风" 英语是？',
    type: 'choice',
    grades: [5],
    topic: 'superhero',
    skill: 'vocabulary',
    skillDetail: '超级英雄词汇',
    choices: ["cape","costume","sidekick","mask"],
    answer: 0
  },

  {
    id: 'g5_superhero_239',
    q: '"靴子" 英语是？',
    type: 'choice',
    grades: [5],
    topic: 'superhero',
    skill: 'vocabulary',
    skillDetail: '超级英雄词汇',
    choices: ["mask","boots","transform","x-ray"],
    answer: 1
  },

  {
    id: 'g5_superhero_240',
    q: '"助手" 英语是？',
    type: 'choice',
    grades: [5],
    topic: 'superhero',
    skill: 'vocabulary',
    skillDetail: '超级英雄词汇',
    choices: ["ice","sidekick","boots","costume"],
    answer: 1
  },

  {
    id: 'g4_bearhunt_241',
    q: '"熊" 英语是？',
    type: 'choice',
    grades: [4],
    topic: 'bearhunt',
    skill: 'vocabulary',
    skillDetail: '故事词汇',
    choices: ["thick","wavy","bear","mud"],
    answer: 2
  },

  {
    id: 'g4_bearhunt_242',
    q: '"洞穴" 英语是？',
    type: 'choice',
    grades: [4],
    topic: 'bearhunt',
    skill: 'vocabulary',
    skillDetail: '故事词汇',
    choices: ["thick","bear","mud","cave"],
    answer: 3
  },

  {
    id: 'g4_bearhunt_243',
    q: '"森林" 英语是？',
    type: 'choice',
    grades: [4],
    topic: 'bearhunt',
    skill: 'vocabulary',
    skillDetail: '故事词汇',
    choices: ["forest","grass","cold","snowstorm"],
    answer: 0
  },

  {
    id: 'g4_bearhunt_244',
    q: '"暴风雪" 英语是？',
    type: 'choice',
    grades: [4],
    topic: 'bearhunt',
    skill: 'vocabulary',
    skillDetail: '故事词汇',
    choices: ["narrow","forest","thick","snowstorm"],
    answer: 3
  },

  {
    id: 'g4_bearhunt_245',
    q: '"泥" 英语是？',
    type: 'choice',
    grades: [4],
    topic: 'bearhunt',
    skill: 'vocabulary',
    skillDetail: '故事词汇',
    choices: ["cold","mud","dark","wavy"],
    answer: 1
  },

  {
    id: 'g4_bearhunt_246',
    q: '填写英文：草',
    type: 'fill',
    grades: [4],
    topic: 'bearhunt',
    skill: 'vocabulary',
    skillDetail: '故事词汇',
    answer: 'grass'
  },

  {
    id: 'g4_bearhunt_247',
    q: '"寒冷的" 英语是？',
    type: 'choice',
    grades: [4],
    topic: 'bearhunt',
    skill: 'vocabulary',
    skillDetail: '故事词汇',
    choices: ["cold","mud","dark","wavy"],
    answer: 0
  },

  {
    id: 'g4_bearhunt_248',
    q: '"厚的/浓密的" 英语是？',
    type: 'choice',
    grades: [4],
    topic: 'bearhunt',
    skill: 'vocabulary',
    skillDetail: '故事词汇',
    choices: ["thick","bear","snowstorm","forest"],
    answer: 0
  },

  {
    id: 'g4_bearhunt_249',
    q: '"波浪起伏的" 英语是？',
    type: 'choice',
    grades: [4],
    topic: 'bearhunt',
    skill: 'vocabulary',
    skillDetail: '故事词汇',
    choices: ["wavy","river","whirling","forest"],
    answer: 0
  },

  {
    id: 'g4_bearhunt_250',
    q: '填写英文：河流',
    type: 'fill',
    grades: [4],
    topic: 'bearhunt',
    skill: 'vocabulary',
    skillDetail: '故事词汇',
    answer: 'river'
  },

  {
    id: 'g4_bearhunt_251',
    q: '填写英文：抓住',
    type: 'fill',
    grades: [4],
    topic: 'bearhunt',
    skill: 'vocabulary',
    skillDetail: '故事词汇',
    answer: 'catch'
  },

  {
    id: 'g4_bearhunt_252',
    q: '"黑暗的" 英语是？',
    type: 'choice',
    grades: [4],
    topic: 'bearhunt',
    skill: 'vocabulary',
    skillDetail: '故事词汇',
    choices: ["snowstorm","dark","grass","gloomy"],
    answer: 1
  },

  {
    id: 'g4_bearhunt_253',
    q: '"狭窄的" 英语是？',
    type: 'choice',
    grades: [4],
    topic: 'bearhunt',
    skill: 'vocabulary',
    skillDetail: '故事词汇',
    choices: ["grass","snowstorm","whirling","narrow"],
    answer: 3
  },

  {
    id: 'g4_bearhunt_254',
    q: '"旋转的" 英语是？',
    type: 'choice',
    grades: [4],
    topic: 'bearhunt',
    skill: 'vocabulary',
    skillDetail: '故事词汇',
    choices: ["whirling","cave","thick","grass"],
    answer: 0
  },

  {
    id: 'g4_bearhunt_255',
    q: 'gloomy（翻译成中文）',
    type: 'translate',
    grades: [4],
    topic: 'bearhunt',
    skill: 'vocabulary',
    skillDetail: '故事词汇',
    answer: '阴暗的'
  },

  {
    id: 'g5_character_256',
    q: '填写英文：漂亮的',
    type: 'fill',
    grades: [5],
    topic: 'character',
    skill: 'vocabulary',
    skillDetail: '性格形容词',
    answer: 'pretty'
  },

  {
    id: 'g5_character_257',
    q: '"丑陋的" 英语是？',
    type: 'choice',
    grades: [5],
    topic: 'character',
    skill: 'vocabulary',
    skillDetail: '性格形容词',
    choices: ["short","ugly","annoying","generous"],
    answer: 1
  },

  {
    id: 'g5_character_258',
    q: '"胖的" 英语是？',
    type: 'choice',
    grades: [5],
    topic: 'character',
    skill: 'vocabulary',
    skillDetail: '性格形容词',
    choices: ["pretty","ugly","fat","proud"],
    answer: 2
  },

  {
    id: 'g5_character_259',
    q: '"勇敢的" 英语是？',
    type: 'choice',
    grades: [5],
    topic: 'character',
    skill: 'vocabulary',
    skillDetail: '性格形容词',
    choices: ["mean","foolish","brave","poor"],
    answer: 2
  },

  {
    id: 'g5_character_260',
    q: '填写英文：高的',
    type: 'fill',
    grades: [5],
    topic: 'character',
    skill: 'vocabulary',
    skillDetail: '性格形容词',
    answer: 'tall'
  },

  {
    id: 'g5_character_261',
    q: '"矮的" 英语是？',
    type: 'choice',
    grades: [5],
    topic: 'character',
    skill: 'vocabulary',
    skillDetail: '性格形容词',
    choices: ["scary","foolish","short","poor"],
    answer: 2
  },

  {
    id: 'g5_character_262',
    q: '"吓人的" 英语是？',
    type: 'choice',
    grades: [5],
    topic: 'character',
    skill: 'vocabulary',
    skillDetail: '性格形容词',
    choices: ["polite","fat","scary","fierce"],
    answer: 2
  },

  {
    id: 'g5_character_263',
    q: '填写英文：脏的',
    type: 'fill',
    grades: [5],
    topic: 'character',
    skill: 'vocabulary',
    skillDetail: '性格形容词',
    answer: 'dirty'
  },

  {
    id: 'g5_character_264',
    q: 'fierce（翻译成中文）',
    type: 'translate',
    grades: [5],
    topic: 'character',
    skill: 'vocabulary',
    skillDetail: '性格形容词',
    answer: '凶猛的'
  },

  {
    id: 'g5_character_265',
    q: '"瘦的" 英语是？',
    type: 'choice',
    grades: [5],
    topic: 'character',
    skill: 'vocabulary',
    skillDetail: '性格形容词',
    choices: ["proud","ugly","thin","pretty"],
    answer: 2
  },

  {
    id: 'g5_character_266',
    q: '"愚蠢的" 英语是？',
    type: 'choice',
    grades: [5],
    topic: 'character',
    skill: 'vocabulary',
    skillDetail: '性格形容词',
    choices: ["foolish","smelly","fat","ugly"],
    answer: 0
  },

  {
    id: 'g5_character_267',
    q: '"骄傲的" 英语是？',
    type: 'choice',
    grades: [5],
    topic: 'character',
    skill: 'vocabulary',
    skillDetail: '性格形容词',
    choices: ["proud","dirty","fat","annoying"],
    answer: 0
  },

  {
    id: 'g5_character_268',
    q: '"体贴的" 英语是？',
    type: 'choice',
    grades: [5],
    topic: 'character',
    skill: 'vocabulary',
    skillDetail: '性格形容词',
    choices: ["caring","polite","proud","tall"],
    answer: 0
  },

  {
    id: 'g5_character_269',
    q: '"开朗的" 英语是？',
    type: 'choice',
    grades: [5],
    topic: 'character',
    skill: 'vocabulary',
    skillDetail: '性格形容词',
    choices: ["pretty","cheerful","tall","smelly"],
    answer: 1
  },

  {
    id: 'g5_character_270',
    q: '填写英文：贫穷的',
    type: 'fill',
    grades: [5],
    topic: 'character',
    skill: 'vocabulary',
    skillDetail: '性格形容词',
    answer: 'poor'
  },

  {
    id: 'g5_character_271',
    q: '"刻薄的" 英语是？',
    type: 'choice',
    grades: [5],
    topic: 'character',
    skill: 'vocabulary',
    skillDetail: '性格形容词',
    choices: ["mean","scary","thin","polite"],
    answer: 0
  },

  {
    id: 'g5_character_272',
    q: '"臭的" 英语是？',
    type: 'choice',
    grades: [5],
    topic: 'character',
    skill: 'vocabulary',
    skillDetail: '性格形容词',
    choices: ["smelly","poor","rich","annoying"],
    answer: 0
  },

  {
    id: 'g5_character_273',
    q: '"有礼貌的" 英语是？',
    type: 'choice',
    grades: [5],
    topic: 'character',
    skill: 'vocabulary',
    skillDetail: '性格形容词',
    choices: ["short","polite","pretty","annoying"],
    answer: 1
  },

  {
    id: 'g5_character_274',
    q: '"富有的" 英语是？',
    type: 'choice',
    grades: [5],
    topic: 'character',
    skill: 'vocabulary',
    skillDetail: '性格形容词',
    choices: ["fierce","foolish","rich","annoying"],
    answer: 2
  },

  {
    id: 'g5_character_275',
    q: '填写英文：烦人的',
    type: 'fill',
    grades: [5],
    topic: 'character',
    skill: 'vocabulary',
    skillDetail: '性格形容词',
    answer: 'annoying'
  },

  {
    id: 'g5_character_276',
    q: '"大方的" 英语是？',
    type: 'choice',
    grades: [5],
    topic: 'character',
    skill: 'vocabulary',
    skillDetail: '性格形容词',
    choices: ["thin","generous","pretty","mean"],
    answer: 1
  },

  {
    id: 'g5_emotion_277',
    q: '"害羞的" 英语是？',
    type: 'choice',
    grades: [5],
    topic: 'emotion',
    skill: 'vocabulary',
    skillDetail: '情绪形容词',
    choices: ["surprised","confused","upset","shy"],
    answer: 3
  },

  {
    id: 'g5_emotion_278',
    q: '"无聊的" 英语是？',
    type: 'choice',
    grades: [5],
    topic: 'emotion',
    skill: 'vocabulary',
    skillDetail: '情绪形容词',
    choices: ["frustrated","sensible","terrified","bored"],
    answer: 3
  },

  {
    id: 'g5_emotion_279',
    q: '填写英文：生气的',
    type: 'fill',
    grades: [5],
    topic: 'emotion',
    skill: 'vocabulary',
    skillDetail: '情绪形容词',
    answer: 'angry'
  },

  {
    id: 'g5_emotion_280',
    q: '"担心的" 英语是？',
    type: 'choice',
    grades: [5],
    topic: 'emotion',
    skill: 'vocabulary',
    skillDetail: '情绪形容词',
    choices: ["worried","clever","shy","happy"],
    answer: 0
  },

  {
    id: 'g5_emotion_281',
    q: '"困的" 英语是？',
    type: 'choice',
    grades: [5],
    topic: 'emotion',
    skill: 'vocabulary',
    skillDetail: '情绪形容词',
    choices: ["sleepy","upset","grumpy","surprised"],
    answer: 0
  },

  {
    id: 'g5_emotion_282',
    q: '"兴奋的" 英语是？',
    type: 'choice',
    grades: [5],
    topic: 'emotion',
    skill: 'vocabulary',
    skillDetail: '情绪形容词',
    choices: ["terrified","clever","grumpy","excited"],
    answer: 3
  },

  {
    id: 'g5_emotion_283',
    q: '"紧张的" 英语是？',
    type: 'choice',
    grades: [5],
    topic: 'emotion',
    skill: 'vocabulary',
    skillDetail: '情绪形容词',
    choices: ["beautiful","jolly","happy","nervous"],
    answer: 3
  },

  {
    id: 'g5_emotion_284',
    q: '"惊讶的" 英语是？',
    type: 'choice',
    grades: [5],
    topic: 'emotion',
    skill: 'vocabulary',
    skillDetail: '情绪形容词',
    choices: ["grumpy","excited","sleepy","surprised"],
    answer: 3
  },

  {
    id: 'g5_emotion_285',
    q: '"精力充沛的" 英语是？',
    type: 'choice',
    grades: [5],
    topic: 'emotion',
    skill: 'vocabulary',
    skillDetail: '情绪形容词',
    choices: ["sensible","grumpy","energetic","excited"],
    answer: 2
  },

  {
    id: 'g5_emotion_286',
    q: '"困惑的" 英语是？',
    type: 'choice',
    grades: [5],
    topic: 'emotion',
    skill: 'vocabulary',
    skillDetail: '情绪形容词',
    choices: ["confused","shy","angry","terrified"],
    answer: 0
  },

  {
    id: 'g5_emotion_287',
    q: '"开心的" 英语是？',
    type: 'choice',
    grades: [5],
    topic: 'emotion',
    skill: 'vocabulary',
    skillDetail: '情绪形容词',
    choices: ["angry","intelligent","happy","clever"],
    answer: 2
  },

  {
    id: 'g5_emotion_288',
    q: '"难过的" 英语是？',
    type: 'choice',
    grades: [5],
    topic: 'emotion',
    skill: 'vocabulary',
    skillDetail: '情绪形容词',
    choices: ["frustrated","sensible","quiet","upset"],
    answer: 3
  },

  {
    id: 'g5_emotion_289',
    q: '"安静的" 英语是？',
    type: 'choice',
    grades: [5],
    topic: 'emotion',
    skill: 'vocabulary',
    skillDetail: '情绪形容词',
    choices: ["quiet","energetic","upset","sleepy"],
    answer: 0
  },

  {
    id: 'g5_emotion_290',
    q: '填写英文：快乐的',
    type: 'fill',
    grades: [5],
    topic: 'emotion',
    skill: 'vocabulary',
    skillDetail: '情绪形容词',
    answer: 'jolly'
  },

  {
    id: 'g5_emotion_291',
    q: '"脾气坏的" 英语是？',
    type: 'choice',
    grades: [5],
    topic: 'emotion',
    skill: 'vocabulary',
    skillDetail: '情绪形容词',
    choices: ["clever","grumpy","confused","terrified"],
    answer: 1
  },

  {
    id: 'g5_emotion_292',
    q: '填写英文：恐惧的',
    type: 'fill',
    grades: [5],
    topic: 'emotion',
    skill: 'vocabulary',
    skillDetail: '情绪形容词',
    answer: 'terrified'
  },

  {
    id: 'g5_emotion_293',
    q: '"沮丧的" 英语是？',
    type: 'choice',
    grades: [5],
    topic: 'emotion',
    skill: 'vocabulary',
    skillDetail: '情绪形容词',
    choices: ["beautiful","frustrated","energetic","worried"],
    answer: 1
  },

  {
    id: 'g5_emotion_294',
    q: '填写英文：粗鲁的',
    type: 'fill',
    grades: [5],
    topic: 'emotion',
    skill: 'vocabulary',
    skillDetail: '情绪形容词',
    answer: 'rude'
  },

  {
    id: 'g5_emotion_295',
    q: '"聪明的" 英语是？',
    type: 'choice',
    grades: [5],
    topic: 'emotion',
    skill: 'vocabulary',
    skillDetail: '情绪形容词',
    choices: ["upset","worried","intelligent","frustrated"],
    answer: 2
  },

  {
    id: 'g5_emotion_296',
    q: '"美丽的" 英语是？',
    type: 'choice',
    grades: [5],
    topic: 'emotion',
    skill: 'vocabulary',
    skillDetail: '情绪形容词',
    choices: ["shy","beautiful","upset","excited"],
    answer: 1
  },

  {
    id: 'g5_emotion_297',
    q: '填写英文：懂事的',
    type: 'fill',
    grades: [5],
    topic: 'emotion',
    skill: 'vocabulary',
    skillDetail: '情绪形容词',
    answer: 'sensible'
  },

  {
    id: 'g5_emotion_298',
    q: '"机灵的" 英语是？',
    type: 'choice',
    grades: [5],
    topic: 'emotion',
    skill: 'vocabulary',
    skillDetail: '情绪形容词',
    choices: ["clever","frustrated","excited","happy"],
    answer: 0
  },

  {
    id: 'g5_emotion_299',
    q: '"友好的" 英语是？',
    type: 'choice',
    grades: [5],
    topic: 'emotion',
    skill: 'vocabulary',
    skillDetail: '情绪形容词',
    choices: ["worried","friendly","shy","sleepy"],
    answer: 1
  },

  {
    id: 'g5_emotion_300',
    q: '填写英文：恶毒的',
    type: 'fill',
    grades: [5],
    topic: 'emotion',
    skill: 'vocabulary',
    skillDetail: '情绪形容词',
    answer: 'nasty'
  },

  {
    id: 'g5_cinderella_301',
    q: '填写英文：时钟',
    type: 'fill',
    grades: [5],
    topic: 'cinderella',
    skill: 'vocabulary',
    skillDetail: '故事词汇',
    answer: 'clock'
  },

  {
    id: 'g5_cinderella_302',
    q: '填写英文：王子',
    type: 'fill',
    grades: [5],
    topic: 'cinderella',
    skill: 'vocabulary',
    skillDetail: '故事词汇',
    answer: 'Prince'
  },

  {
    id: 'g5_cinderella_303',
    q: '"灰姑娘" 英语是？',
    type: 'choice',
    grades: [5],
    topic: 'cinderella',
    skill: 'vocabulary',
    skillDetail: '故事词汇',
    choices: ["Prince","wicked stepmother","Cinderella","clock"],
    answer: 2
  },

  {
    id: 'g5_cinderella_304',
    q: '"男仆" 英语是？',
    type: 'choice',
    grades: [5],
    topic: 'cinderella',
    skill: 'vocabulary',
    skillDetail: '故事词汇',
    choices: ["foot","ugly sisters","footmen","ballroom"],
    answer: 2
  },

  {
    id: 'g5_cinderella_305',
    q: '"脚" 英语是？',
    type: 'choice',
    grades: [5],
    topic: 'cinderella',
    skill: 'vocabulary',
    skillDetail: '故事词汇',
    choices: ["lizard","fairy Godmother","foot","pumpkin"],
    answer: 2
  },

  {
    id: 'g5_cinderella_306',
    q: '"蜥蜴" 英语是？',
    type: 'choice',
    grades: [5],
    topic: 'cinderella',
    skill: 'vocabulary',
    skillDetail: '故事词汇',
    choices: ["fairy Godmother","coachman","palace","lizard"],
    answer: 3
  },

  {
    id: 'g5_cinderella_307',
    q: '"马" 英语是？',
    type: 'choice',
    grades: [5],
    topic: 'cinderella',
    skill: 'vocabulary',
    skillDetail: '故事词汇',
    choices: ["invitation","ugly sisters","horses","coach"],
    answer: 2
  },

  {
    id: 'g5_cinderella_308',
    q: '"水晶鞋" 英语是？',
    type: 'choice',
    grades: [5],
    topic: 'cinderella',
    skill: 'vocabulary',
    skillDetail: '故事词汇',
    choices: ["wicked stepmother","lizard","palace","glass slippers"],
    answer: 3
  },

  {
    id: 'g5_cinderella_309',
    q: 'ballroom（翻译成中文）',
    type: 'translate',
    grades: [5],
    topic: 'cinderella',
    skill: 'vocabulary',
    skillDetail: '故事词汇',
    answer: '舞厅'
  },

  {
    id: 'g5_cinderella_310',
    q: '"老鼠" 英语是？',
    type: 'choice',
    grades: [5],
    topic: 'cinderella',
    skill: 'vocabulary',
    skillDetail: '故事词汇',
    choices: ["rat","invitation","footmen","glass slippers"],
    answer: 0
  },

  {
    id: 'g5_cinderella_311',
    q: '填写英文：邀请函',
    type: 'fill',
    grades: [5],
    topic: 'cinderella',
    skill: 'vocabulary',
    skillDetail: '故事词汇',
    answer: 'invitation'
  },

  {
    id: 'g5_cinderella_312',
    q: '"马车" 英语是？',
    type: 'choice',
    grades: [5],
    topic: 'cinderella',
    skill: 'vocabulary',
    skillDetail: '故事词汇',
    choices: ["coach","glass slippers","Cinderella","ugly sisters"],
    answer: 0
  },

  {
    id: 'g5_cinderella_313',
    q: '"恶毒的姐姐" 英语是？',
    type: 'choice',
    grades: [5],
    topic: 'cinderella',
    skill: 'vocabulary',
    skillDetail: '故事词汇',
    choices: ["foot","ballroom","glass slippers","ugly sisters"],
    answer: 3
  },

  {
    id: 'g5_cinderella_314',
    q: '"车夫" 英语是？',
    type: 'choice',
    grades: [5],
    topic: 'cinderella',
    skill: 'vocabulary',
    skillDetail: '故事词汇',
    choices: ["coach","coachman","foot","ugly sisters"],
    answer: 1
  },

  {
    id: 'g5_cinderella_315',
    q: '"南瓜" 英语是？',
    type: 'choice',
    grades: [5],
    topic: 'cinderella',
    skill: 'vocabulary',
    skillDetail: '故事词汇',
    choices: ["coachman","pumpkin","palace","rat"],
    answer: 1
  },

  {
    id: 'g5_cinderella_316',
    q: '"仙女教母" 英语是？',
    type: 'choice',
    grades: [5],
    topic: 'cinderella',
    skill: 'vocabulary',
    skillDetail: '故事词汇',
    choices: ["coachman","fairy Godmother","footmen","rat"],
    answer: 1
  },

  {
    id: 'g5_cinderella_317',
    q: '"恶毒继母" 英语是？',
    type: 'choice',
    grades: [5],
    topic: 'cinderella',
    skill: 'vocabulary',
    skillDetail: '故事词汇',
    choices: ["Prince","horses","wicked stepmother","footmen"],
    answer: 2
  },

  {
    id: 'g5_cinderella_318',
    q: '填写英文：宫殿',
    type: 'fill',
    grades: [5],
    topic: 'cinderella',
    skill: 'vocabulary',
    skillDetail: '故事词汇',
    answer: 'palace'
  },

  {
    id: 'g3_clothes_319',
    q: '"T恤" 英语是？',
    type: 'choice',
    grades: [3],
    topic: 'clothes',
    skill: 'vocabulary',
    skillDetail: '衣物词汇',
    choices: ["T-shirt","vest","trousers","dress"],
    answer: 0
  },

  {
    id: 'g3_clothes_320',
    q: '"牛仔裤" 英语是？',
    type: 'choice',
    grades: [3],
    topic: 'clothes',
    skill: 'vocabulary',
    skillDetail: '衣物词汇',
    choices: ["jeans","underwear","swimming costume","skirt"],
    answer: 0
  },

  {
    id: 'g3_clothes_321',
    q: '"连衣裙" 英语是？',
    type: 'choice',
    grades: [3],
    topic: 'clothes',
    skill: 'vocabulary',
    skillDetail: '衣物词汇',
    choices: ["scarf","hoodie","hat","dress"],
    answer: 3
  },

  {
    id: 'g3_clothes_322',
    q: '"足球衫" 英语是？',
    type: 'choice',
    grades: [3],
    topic: 'clothes',
    skill: 'vocabulary',
    skillDetail: '衣物词汇',
    choices: ["shorts","pants","cap","football shirt"],
    answer: 3
  },

  {
    id: 'g3_clothes_323',
    q: '填写英文：夹克',
    type: 'fill',
    grades: [3],
    topic: 'clothes',
    skill: 'vocabulary',
    skillDetail: '衣物词汇',
    answer: 'jacket'
  },

  {
    id: 'g3_clothes_324',
    q: '"背心" 英语是？',
    type: 'choice',
    grades: [3],
    topic: 'clothes',
    skill: 'vocabulary',
    skillDetail: '衣物词汇',
    choices: ["shorts","skirt","vest","hat"],
    answer: 2
  },

  {
    id: 'g3_clothes_325',
    q: '填写英文：短裙',
    type: 'fill',
    grades: [3],
    topic: 'clothes',
    skill: 'vocabulary',
    skillDetail: '衣物词汇',
    answer: 'skirt'
  },

  {
    id: 'g3_clothes_326',
    q: '"短裤" 英语是？',
    type: 'choice',
    grades: [3],
    topic: 'clothes',
    skill: 'vocabulary',
    skillDetail: '衣物词汇',
    choices: ["jacket","scarf","skirt","shorts"],
    answer: 3
  },

  {
    id: 'g3_clothes_327',
    q: '"长裤" 英语是？',
    type: 'choice',
    grades: [3],
    topic: 'clothes',
    skill: 'vocabulary',
    skillDetail: '衣物词汇',
    choices: ["raincoat","trousers","pants","cardigan"],
    answer: 1
  },

  {
    id: 'g3_clothes_328',
    q: '"内衣" 英语是？',
    type: 'choice',
    grades: [3],
    topic: 'clothes',
    skill: 'vocabulary',
    skillDetail: '衣物词汇',
    choices: ["underwear","cardigan","jeans","swimming trunks"],
    answer: 0
  },

  {
    id: 'g3_clothes_329',
    q: '"雨衣" 英语是？',
    type: 'choice',
    grades: [3],
    topic: 'clothes',
    skill: 'vocabulary',
    skillDetail: '衣物词汇',
    choices: ["raincoat","hoodie","shirt","cap"],
    answer: 0
  },

  {
    id: 'g3_clothes_330',
    q: '"毛衣" 英语是？',
    type: 'choice',
    grades: [3],
    topic: 'clothes',
    skill: 'vocabulary',
    skillDetail: '衣物词汇',
    choices: ["duffel coat","cap","jumper","dress"],
    answer: 2
  },

  {
    id: 'g3_clothes_331',
    q: '填写英文：泳衣',
    type: 'fill',
    grades: [3],
    topic: 'clothes',
    skill: 'vocabulary',
    skillDetail: '衣物词汇',
    answer: 'swimming costume'
  },

  {
    id: 'g3_clothes_332',
    q: '填写英文：女式内裤',
    type: 'fill',
    grades: [3],
    topic: 'clothes',
    skill: 'vocabulary',
    skillDetail: '衣物词汇',
    answer: 'knickers'
  },

  {
    id: 'g3_clothes_333',
    q: '填写英文：内裤/长裤',
    type: 'fill',
    grades: [3],
    topic: 'clothes',
    skill: 'vocabulary',
    skillDetail: '衣物词汇',
    answer: 'pants'
  },

  {
    id: 'g3_clothes_334',
    q: 'tights（翻译成中文）',
    type: 'translate',
    grades: [3],
    topic: 'clothes',
    skill: 'vocabulary',
    skillDetail: '衣物词汇',
    answer: '连裤袜'
  },

  {
    id: 'g3_clothes_335',
    q: 'cap（翻译成中文）',
    type: 'translate',
    grades: [3],
    topic: 'clothes',
    skill: 'vocabulary',
    skillDetail: '衣物词汇',
    answer: '帽子'
  },

  {
    id: 'g3_clothes_336',
    q: '"连指手套" 英语是？',
    type: 'choice',
    grades: [3],
    topic: 'clothes',
    skill: 'vocabulary',
    skillDetail: '衣物词汇',
    choices: ["jumper","cardigan","mittens","trousers"],
    answer: 2
  },

  {
    id: 'g3_clothes_337',
    q: '"衬衫" 英语是？',
    type: 'choice',
    grades: [3],
    topic: 'clothes',
    skill: 'vocabulary',
    skillDetail: '衣物词汇',
    choices: ["scarf","shirt","jacket","trousers"],
    answer: 1
  },

  {
    id: 'g3_clothes_338',
    q: '"泳裤" 英语是？',
    type: 'choice',
    grades: [3],
    topic: 'clothes',
    skill: 'vocabulary',
    skillDetail: '衣物词汇',
    choices: ["swimming trunks","trousers","vest","jumper"],
    answer: 0
  },

  {
    id: 'g3_clothes_339',
    q: '填写英文：平角内裤',
    type: 'fill',
    grades: [3],
    topic: 'clothes',
    skill: 'vocabulary',
    skillDetail: '衣物词汇',
    answer: 'boxers'
  },

  {
    id: 'g3_clothes_340',
    q: '填写英文：袜子',
    type: 'fill',
    grades: [3],
    topic: 'clothes',
    skill: 'vocabulary',
    skillDetail: '衣物词汇',
    answer: 'socks'
  },

  {
    id: 'g3_clothes_341',
    q: '"连帽衫" 英语是？',
    type: 'choice',
    grades: [3],
    topic: 'clothes',
    skill: 'vocabulary',
    skillDetail: '衣物词汇',
    choices: ["cardigan","T-shirt","jeans","hoodie"],
    answer: 3
  },

  {
    id: 'g3_clothes_342',
    q: '"粗呢大衣" 英语是？',
    type: 'choice',
    grades: [3],
    topic: 'clothes',
    skill: 'vocabulary',
    skillDetail: '衣物词汇',
    choices: ["underwear","shorts","duffel coat","tights"],
    answer: 2
  },

  {
    id: 'g3_clothes_343',
    q: '"开衫" 英语是？',
    type: 'choice',
    grades: [3],
    topic: 'clothes',
    skill: 'vocabulary',
    skillDetail: '衣物词汇',
    choices: ["boxers","cardigan","jeans","jacket"],
    answer: 1
  },

  {
    id: 'g3_clothes_344',
    q: '填写英文：围巾',
    type: 'fill',
    grades: [3],
    topic: 'clothes',
    skill: 'vocabulary',
    skillDetail: '衣物词汇',
    answer: 'scarf'
  },

  {
    id: 'g3_clothes_345',
    q: 'hat（翻译成中文）',
    type: 'translate',
    grades: [3],
    topic: 'clothes',
    skill: 'vocabulary',
    skillDetail: '衣物词汇',
    answer: '帽子'
  },

  {
    id: 'g5_desertanimals_346',
    q: '填写英文：骆驼',
    type: 'fill',
    grades: [5],
    topic: 'desertanimals',
    skill: 'vocabulary',
    skillDetail: '沙漠动物',
    answer: 'camel'
  },

  {
    id: 'g5_desertanimals_347',
    q: '"狐獴" 英语是？',
    type: 'choice',
    grades: [5],
    topic: 'desertanimals',
    skill: 'vocabulary',
    skillDetail: '沙漠动物',
    choices: ["lizard","vulture","camel","meerkat"],
    answer: 3
  },

  {
    id: 'g5_desertanimals_348',
    q: '填写英文：蛇',
    type: 'fill',
    grades: [5],
    topic: 'desertanimals',
    skill: 'vocabulary',
    skillDetail: '沙漠动物',
    answer: 'snake'
  },

  {
    id: 'g5_desertanimals_349',
    q: '"狼蛛" 英语是？',
    type: 'choice',
    grades: [5],
    topic: 'desertanimals',
    skill: 'vocabulary',
    skillDetail: '沙漠动物',
    choices: ["vulture","camel","snake","tarantula"],
    answer: 3
  },

  {
    id: 'g5_desertanimals_350',
    q: '"秃鹫" 英语是？',
    type: 'choice',
    grades: [5],
    topic: 'desertanimals',
    skill: 'vocabulary',
    skillDetail: '沙漠动物',
    choices: ["camel","scorpion","vulture","snake"],
    answer: 2
  },

  {
    id: 'g5_desertanimals_351',
    q: 'lizard（翻译成中文）',
    type: 'translate',
    grades: [5],
    topic: 'desertanimals',
    skill: 'vocabulary',
    skillDetail: '沙漠动物',
    answer: '蜥蜴'
  },

  {
    id: 'g5_desertanimals_352',
    q: '"蝎子" 英语是？',
    type: 'choice',
    grades: [5],
    topic: 'desertanimals',
    skill: 'vocabulary',
    skillDetail: '沙漠动物',
    choices: ["scorpion","lizard","snake","meerkat"],
    answer: 0
  },

  {
    id: 'g5_dinosaurs_353',
    q: '填写英文：剑龙',
    type: 'fill',
    grades: [5],
    topic: 'dinosaurs',
    skill: 'vocabulary',
    skillDetail: '恐龙词汇',
    answer: 'Stegosaurus'
  },

  {
    id: 'g5_dinosaurs_354',
    q: '"禽龙" 英语是？',
    type: 'choice',
    grades: [5],
    topic: 'dinosaurs',
    skill: 'vocabulary',
    skillDetail: '恐龙词汇',
    choices: ["Iguanodon","Triceratops","Plesiosaur","Stegosaurus"],
    answer: 0
  },

  {
    id: 'g5_dinosaurs_355',
    q: '填写英文：翼龙',
    type: 'fill',
    grades: [5],
    topic: 'dinosaurs',
    skill: 'vocabulary',
    skillDetail: '恐龙词汇',
    answer: 'Pterodactyl'
  },

  {
    id: 'g5_dinosaurs_356',
    q: '"霸王龙" 英语是？',
    type: 'choice',
    grades: [5],
    topic: 'dinosaurs',
    skill: 'vocabulary',
    skillDetail: '恐龙词汇',
    choices: ["Tyrannosaurus rex","Iguanodon","Velociraptor","Apatosaurus"],
    answer: 0
  },

  {
    id: 'g5_dinosaurs_357',
    q: '填写英文：腕龙',
    type: 'fill',
    grades: [5],
    topic: 'dinosaurs',
    skill: 'vocabulary',
    skillDetail: '恐龙词汇',
    answer: 'Brachiosaurus'
  },

  {
    id: 'g5_dinosaurs_358',
    q: '"三角龙" 英语是？',
    type: 'choice',
    grades: [5],
    topic: 'dinosaurs',
    skill: 'vocabulary',
    skillDetail: '恐龙词汇',
    choices: ["Triceratops","Iguanodon","Brachiosaurus","Tyrannosaurus rex"],
    answer: 0
  },

  {
    id: 'g5_dinosaurs_359',
    q: '"蛇颈龙" 英语是？',
    type: 'choice',
    grades: [5],
    topic: 'dinosaurs',
    skill: 'vocabulary',
    skillDetail: '恐龙词汇',
    choices: ["Pterodactyl","Brachiosaurus","Plesiosaur","Velociraptor"],
    answer: 2
  },

  {
    id: 'g5_dinosaurs_360',
    q: '"迅猛龙" 英语是？',
    type: 'choice',
    grades: [5],
    topic: 'dinosaurs',
    skill: 'vocabulary',
    skillDetail: '恐龙词汇',
    choices: ["Velociraptor","Brachiosaurus","Iguanodon","Stegosaurus"],
    answer: 0
  },

  {
    id: 'g5_dinosaurs_361',
    q: '"迷惑龙" 英语是？',
    type: 'choice',
    grades: [5],
    topic: 'dinosaurs',
    skill: 'vocabulary',
    skillDetail: '恐龙词汇',
    choices: ["Triceratops","Apatosaurus","Iguanodon","Velociraptor"],
    answer: 1
  },

  {
    id: 'g3_family_362',
    q: '填写英文：妈妈',
    type: 'fill',
    grades: [3],
    topic: 'family',
    skill: 'vocabulary',
    skillDetail: '家庭成员',
    answer: 'mother'
  },

  {
    id: 'g3_family_363',
    q: '填写英文：爸爸',
    type: 'fill',
    grades: [3],
    topic: 'family',
    skill: 'vocabulary',
    skillDetail: '家庭成员',
    answer: 'father'
  },

  {
    id: 'g3_family_364',
    q: '填写英文：婴儿',
    type: 'fill',
    grades: [3],
    topic: 'family',
    skill: 'vocabulary',
    skillDetail: '家庭成员',
    answer: 'baby'
  },

  {
    id: 'g3_family_365',
    q: '填写英文：父母',
    type: 'fill',
    grades: [3],
    topic: 'family',
    skill: 'vocabulary',
    skillDetail: '家庭成员',
    answer: 'parents'
  },

  {
    id: 'g3_family_366',
    q: '填写英文：女儿',
    type: 'fill',
    grades: [3],
    topic: 'family',
    skill: 'vocabulary',
    skillDetail: '家庭成员',
    answer: 'daughter'
  },

  {
    id: 'g3_family_367',
    q: '"儿子" 英语是？',
    type: 'choice',
    grades: [3],
    topic: 'family',
    skill: 'vocabulary',
    skillDetail: '家庭成员',
    choices: ["mother","father","son","stepfather"],
    answer: 2
  },

  {
    id: 'g3_family_368',
    q: '填写英文：继母',
    type: 'fill',
    grades: [3],
    topic: 'family',
    skill: 'vocabulary',
    skillDetail: '家庭成员',
    answer: 'stepmother'
  },

  {
    id: 'g3_family_369',
    q: '填写英文：继父',
    type: 'fill',
    grades: [3],
    topic: 'family',
    skill: 'vocabulary',
    skillDetail: '家庭成员',
    answer: 'stepfather'
  },

  {
    id: 'g3_family_370',
    q: '"姑姑/阿姨" 英语是？',
    type: 'choice',
    grades: [3],
    topic: 'family',
    skill: 'vocabulary',
    skillDetail: '家庭成员',
    choices: ["son","aunt","grandmother","sister"],
    answer: 1
  },

  {
    id: 'g3_family_371',
    q: '"家庭" 英语是？',
    type: 'choice',
    grades: [3],
    topic: 'family',
    skill: 'vocabulary',
    skillDetail: '家庭成员',
    choices: ["niece","mother","son","family"],
    answer: 3
  },

  {
    id: 'g3_family_372',
    q: '"叔叔/舅舅" 英语是？',
    type: 'choice',
    grades: [3],
    topic: 'family',
    skill: 'vocabulary',
    skillDetail: '家庭成员',
    choices: ["nephew","cousins","son","uncle"],
    answer: 3
  },

  {
    id: 'g3_family_373',
    q: '填写英文：奶奶/外婆',
    type: 'fill',
    grades: [3],
    topic: 'family',
    skill: 'vocabulary',
    skillDetail: '家庭成员',
    answer: 'grandmother'
  },

  {
    id: 'g3_family_374',
    q: '"姐姐/妹妹" 英语是？',
    type: 'choice',
    grades: [3],
    topic: 'family',
    skill: 'vocabulary',
    skillDetail: '家庭成员',
    choices: ["sister","niece","nephew","cousins"],
    answer: 0
  },

  {
    id: 'g3_family_375',
    q: '"哥哥/弟弟" 英语是？',
    type: 'choice',
    grades: [3],
    topic: 'family',
    skill: 'vocabulary',
    skillDetail: '家庭成员',
    choices: ["uncle","family","grandfather","brother"],
    answer: 3
  },

  {
    id: 'g3_family_376',
    q: '"侄女/外甥女" 英语是？',
    type: 'choice',
    grades: [3],
    topic: 'family',
    skill: 'vocabulary',
    skillDetail: '家庭成员',
    choices: ["mother","niece","father","nephew"],
    answer: 1
  },

  {
    id: 'g3_family_377',
    q: '填写英文：侄子/外甥',
    type: 'fill',
    grades: [3],
    topic: 'family',
    skill: 'vocabulary',
    skillDetail: '家庭成员',
    answer: 'nephew'
  },

  {
    id: 'g3_family_378',
    q: '"爷爷/外公" 英语是？',
    type: 'choice',
    grades: [3],
    topic: 'family',
    skill: 'vocabulary',
    skillDetail: '家庭成员',
    choices: ["grandchildren","family","brother","grandfather"],
    answer: 3
  },

  {
    id: 'g3_family_379',
    q: '"孙辈" 英语是？',
    type: 'choice',
    grades: [3],
    topic: 'family',
    skill: 'vocabulary',
    skillDetail: '家庭成员',
    choices: ["mother","grandchildren","father","stepfather"],
    answer: 1
  },

  {
    id: 'g3_family_380',
    q: '填写英文：堂/表兄弟姐妹',
    type: 'fill',
    grades: [3],
    topic: 'family',
    skill: 'vocabulary',
    skillDetail: '家庭成员',
    answer: 'cousins'
  },

  {
    id: 'g3_farmanimals_381',
    q: '填写英文：奶牛',
    type: 'fill',
    grades: [3],
    topic: 'farmanimals',
    skill: 'vocabulary',
    skillDetail: '农场动物',
    answer: 'cow'
  },

  {
    id: 'g3_farmanimals_382',
    q: '填写英文：猪',
    type: 'fill',
    grades: [3],
    topic: 'farmanimals',
    skill: 'vocabulary',
    skillDetail: '农场动物',
    answer: 'pig'
  },

  {
    id: 'g3_farmanimals_383',
    q: '"狗" 英语是？',
    type: 'choice',
    grades: [3],
    topic: 'farmanimals',
    skill: 'vocabulary',
    skillDetail: '农场动物',
    choices: ["dog","sheep","goose","duck"],
    answer: 0
  },

  {
    id: 'g3_farmanimals_384',
    q: '"猫" 英语是？',
    type: 'choice',
    grades: [3],
    topic: 'farmanimals',
    skill: 'vocabulary',
    skillDetail: '农场动物',
    choices: ["donkey","pig","cat","goose"],
    answer: 2
  },

  {
    id: 'g3_farmanimals_385',
    q: '"鸭子" 英语是？',
    type: 'choice',
    grades: [3],
    topic: 'farmanimals',
    skill: 'vocabulary',
    skillDetail: '农场动物',
    choices: ["turkey","duck","cat","goat"],
    answer: 1
  },

  {
    id: 'g3_farmanimals_386',
    q: '"鹅" 英语是？',
    type: 'choice',
    grades: [3],
    topic: 'farmanimals',
    skill: 'vocabulary',
    skillDetail: '农场动物',
    choices: ["dog","goose","chicken","cow"],
    answer: 1
  },

  {
    id: 'g3_farmanimals_387',
    q: '"驴" 英语是？',
    type: 'choice',
    grades: [3],
    topic: 'farmanimals',
    skill: 'vocabulary',
    skillDetail: '农场动物',
    choices: ["goat","cat","donkey","cow"],
    answer: 2
  },

  {
    id: 'g3_farmanimals_388',
    q: '填写英文：马',
    type: 'fill',
    grades: [3],
    topic: 'farmanimals',
    skill: 'vocabulary',
    skillDetail: '农场动物',
    answer: 'horse'
  },

  {
    id: 'g3_farmanimals_389',
    q: '"绵羊" 英语是？',
    type: 'choice',
    grades: [3],
    topic: 'farmanimals',
    skill: 'vocabulary',
    skillDetail: '农场动物',
    choices: ["goat","sheep","cat","pig"],
    answer: 1
  },

  {
    id: 'g3_farmanimals_390',
    q: '"火鸡" 英语是？',
    type: 'choice',
    grades: [3],
    topic: 'farmanimals',
    skill: 'vocabulary',
    skillDetail: '农场动物',
    choices: ["horse","pig","duck","turkey"],
    answer: 3
  },

  {
    id: 'g3_farmanimals_391',
    q: '"山羊" 英语是？',
    type: 'choice',
    grades: [3],
    topic: 'farmanimals',
    skill: 'vocabulary',
    skillDetail: '农场动物',
    choices: ["duck","horse","goat","turkey"],
    answer: 2
  },

  {
    id: 'g3_farmanimals_392',
    q: '"鸡" 英语是？',
    type: 'choice',
    grades: [3],
    topic: 'farmanimals',
    skill: 'vocabulary',
    skillDetail: '农场动物',
    choices: ["goat","sheep","goose","chicken"],
    answer: 3
  },

  {
    id: 'g5_firebrigade_393',
    q: '填写英文：消防警笛',
    type: 'fill',
    grades: [5],
    topic: 'firebrigade',
    skill: 'vocabulary',
    skillDetail: '消防词汇',
    answer: 'fire siren'
  },

  {
    id: 'g5_firebrigade_394',
    q: '"斧头" 英语是？',
    type: 'choice',
    grades: [5],
    topic: 'firebrigade',
    skill: 'vocabulary',
    skillDetail: '消防词汇',
    choices: ["fire station","fire siren","helmet","axe"],
    answer: 3
  },

  {
    id: 'g5_firebrigade_395',
    q: '"消防站" 英语是？',
    type: 'choice',
    grades: [5],
    topic: 'firebrigade',
    skill: 'vocabulary',
    skillDetail: '消防词汇',
    choices: ["extendable ladder","hose pipe","fire station","fire engine"],
    answer: 2
  },

  {
    id: 'g5_firebrigade_396',
    q: '"消防车" 英语是？',
    type: 'choice',
    grades: [5],
    topic: 'firebrigade',
    skill: 'vocabulary',
    skillDetail: '消防词汇',
    choices: ["fire hydrant","fire engine","fire siren","hose pipe"],
    answer: 1
  },

  {
    id: 'g5_firebrigade_397',
    q: '"伸缩梯" 英语是？',
    type: 'choice',
    grades: [5],
    topic: 'firebrigade',
    skill: 'vocabulary',
    skillDetail: '消防词汇',
    choices: ["radio","extendable ladder","fire extinguisher","axe"],
    answer: 1
  },

  {
    id: 'g5_firebrigade_398',
    q: '"对讲机" 英语是？',
    type: 'choice',
    grades: [5],
    topic: 'firebrigade',
    skill: 'vocabulary',
    skillDetail: '消防词汇',
    choices: ["fire alarm","hose pipe","fire siren","radio"],
    answer: 3
  },

  {
    id: 'g5_firebrigade_399',
    q: '"消防员" 英语是？',
    type: 'choice',
    grades: [5],
    topic: 'firebrigade',
    skill: 'vocabulary',
    skillDetail: '消防词汇',
    choices: ["fire alarm","fire siren","fire fighter","fire hydrant"],
    answer: 2
  },

  {
    id: 'g5_firebrigade_400',
    q: '"头盔" 英语是？',
    type: 'choice',
    grades: [5],
    topic: 'firebrigade',
    skill: 'vocabulary',
    skillDetail: '消防词汇',
    choices: ["extendable ladder","helmet","hose pipe","fire siren"],
    answer: 1
  },

  {
    id: 'g5_firebrigade_401',
    q: '"面罩" 英语是？',
    type: 'choice',
    grades: [5],
    topic: 'firebrigade',
    skill: 'vocabulary',
    skillDetail: '消防词汇',
    choices: ["mask","fire extinguisher","fire station","hose pipe"],
    answer: 0
  },

  {
    id: 'g5_firebrigade_402',
    q: '"消防栓" 英语是？',
    type: 'choice',
    grades: [5],
    topic: 'firebrigade',
    skill: 'vocabulary',
    skillDetail: '消防词汇',
    choices: ["axe","fire siren","hose pipe","fire hydrant"],
    answer: 3
  },

  {
    id: 'g5_firebrigade_403',
    q: '"消防水管" 英语是？',
    type: 'choice',
    grades: [5],
    topic: 'firebrigade',
    skill: 'vocabulary',
    skillDetail: '消防词汇',
    choices: ["fire alarm","fire fighter","hose pipe","mask"],
    answer: 2
  },

  {
    id: 'g5_firebrigade_404',
    q: '"火警报警器" 英语是？',
    type: 'choice',
    grades: [5],
    topic: 'firebrigade',
    skill: 'vocabulary',
    skillDetail: '消防词汇',
    choices: ["fire hydrant","fire siren","radio","fire alarm"],
    answer: 3
  },

  {
    id: 'g5_firebrigade_405',
    q: '填写英文：灭火器',
    type: 'fill',
    grades: [5],
    topic: 'firebrigade',
    skill: 'vocabulary',
    skillDetail: '消防词汇',
    answer: 'fire extinguisher'
  },

  {
    id: 'g3_food_406',
    q: '填写英文：汤',
    type: 'fill',
    grades: [3],
    topic: 'food',
    skill: 'vocabulary',
    skillDetail: '食物词汇',
    answer: 'soup'
  },

  {
    id: 'g3_food_407',
    q: '"三明治" 英语是？',
    type: 'choice',
    grades: [3],
    topic: 'food',
    skill: 'vocabulary',
    skillDetail: '食物词汇',
    choices: ["ice cream","sandwiches","chickpeas","chocolate"],
    answer: 1
  },

  {
    id: 'g3_food_408',
    q: 'pizza（翻译成中文）',
    type: 'translate',
    grades: [3],
    topic: 'food',
    skill: 'vocabulary',
    skillDetail: '食物词汇',
    answer: '披萨'
  },

  {
    id: 'g3_food_409',
    q: '"小扁豆" 英语是？',
    type: 'choice',
    grades: [3],
    topic: 'food',
    skill: 'vocabulary',
    skillDetail: '食物词汇',
    choices: ["lentils","chocolate","pasta","bangers and mash"],
    answer: 0
  },

  {
    id: 'g3_food_410',
    q: '"鹰嘴豆" 英语是？',
    type: 'choice',
    grades: [3],
    topic: 'food',
    skill: 'vocabulary',
    skillDetail: '食物词汇',
    choices: ["chocolate","fried eggs","chickpeas","beans"],
    answer: 2
  },

  {
    id: 'g3_food_411',
    q: '"意大利面" 英语是？',
    type: 'choice',
    grades: [3],
    topic: 'food',
    skill: 'vocabulary',
    skillDetail: '食物词汇',
    choices: ["Sunday roast","spaghetti","steak pie","fruit"],
    answer: 1
  },

  {
    id: 'g3_food_412',
    q: 'fried eggs（翻译成中文）',
    type: 'translate',
    grades: [3],
    topic: 'food',
    skill: 'vocabulary',
    skillDetail: '食物词汇',
    answer: '煎蛋'
  },

  {
    id: 'g3_food_413',
    q: '填写英文：香肠',
    type: 'fill',
    grades: [3],
    topic: 'food',
    skill: 'vocabulary',
    skillDetail: '食物词汇',
    answer: 'sausages'
  },

  {
    id: 'g3_food_414',
    q: '"吐司" 英语是？',
    type: 'choice',
    grades: [3],
    topic: 'food',
    skill: 'vocabulary',
    skillDetail: '食物词汇',
    choices: ["cherry pie","toast","fried eggs","Chinese food"],
    answer: 1
  },

  {
    id: 'g3_food_415',
    q: '"培根" 英语是？',
    type: 'choice',
    grades: [3],
    topic: 'food',
    skill: 'vocabulary',
    skillDetail: '食物词汇',
    choices: ["beans","bacon","cereal","soup"],
    answer: 1
  },

  {
    id: 'g3_food_416',
    q: '填写英文：水果',
    type: 'fill',
    grades: [3],
    topic: 'food',
    skill: 'vocabulary',
    skillDetail: '食物词汇',
    answer: 'fruit'
  },

  {
    id: 'g3_food_417',
    q: '填写英文：豆子',
    type: 'fill',
    grades: [3],
    topic: 'food',
    skill: 'vocabulary',
    skillDetail: '食物词汇',
    answer: 'beans'
  },

  {
    id: 'g3_food_418',
    q: '填写英文：巧克力',
    type: 'fill',
    grades: [3],
    topic: 'food',
    skill: 'vocabulary',
    skillDetail: '食物词汇',
    answer: 'chocolate'
  },

  {
    id: 'g3_food_419',
    q: 'cereal（翻译成中文）',
    type: 'translate',
    grades: [3],
    topic: 'food',
    skill: 'vocabulary',
    skillDetail: '食物词汇',
    answer: '麦片'
  },

  {
    id: 'g3_food_420',
    q: '填写英文：牛排派',
    type: 'fill',
    grades: [3],
    topic: 'food',
    skill: 'vocabulary',
    skillDetail: '食物词汇',
    answer: 'steak pie'
  },

  {
    id: 'g3_food_421',
    q: '"冰淇淋" 英语是？',
    type: 'choice',
    grades: [3],
    topic: 'food',
    skill: 'vocabulary',
    skillDetail: '食物词汇',
    choices: ["bangers and mash","vegetables","steak pie","ice cream"],
    answer: 3
  },

  {
    id: 'g3_food_422',
    q: '填写英文：樱桃派',
    type: 'fill',
    grades: [3],
    topic: 'food',
    skill: 'vocabulary',
    skillDetail: '食物词汇',
    answer: 'cherry pie'
  },

  {
    id: 'g3_food_423',
    q: '填写英文：意面',
    type: 'fill',
    grades: [3],
    topic: 'food',
    skill: 'vocabulary',
    skillDetail: '食物词汇',
    answer: 'pasta'
  },

  {
    id: 'g3_food_424',
    q: '"蔬菜" 英语是？',
    type: 'choice',
    grades: [3],
    topic: 'food',
    skill: 'vocabulary',
    skillDetail: '食物词汇',
    choices: ["vegetables","ice cream","fried eggs","chickpeas"],
    answer: 0
  },

  {
    id: 'g3_food_425',
    q: '填写英文：坚果',
    type: 'fill',
    grades: [3],
    topic: 'food',
    skill: 'vocabulary',
    skillDetail: '食物词汇',
    answer: 'nuts'
  },

  {
    id: 'g3_food_426',
    q: '"中餐" 英语是？',
    type: 'choice',
    grades: [3],
    topic: 'food',
    skill: 'vocabulary',
    skillDetail: '食物词汇',
    choices: ["cereal","Sunday roast","pizza","Chinese food"],
    answer: 3
  },

  {
    id: 'g3_food_427',
    q: '"香肠土豆泥" 英语是？',
    type: 'choice',
    grades: [3],
    topic: 'food',
    skill: 'vocabulary',
    skillDetail: '食物词汇',
    choices: ["sandwiches","spaghetti","bangers and mash","fish fingers"],
    answer: 2
  },

  {
    id: 'g3_food_428',
    q: '填写英文：鱼条',
    type: 'fill',
    grades: [3],
    topic: 'food',
    skill: 'vocabulary',
    skillDetail: '食物词汇',
    answer: 'fish fingers'
  },

  {
    id: 'g3_food_429',
    q: '"炸鱼薯条" 英语是？',
    type: 'choice',
    grades: [3],
    topic: 'food',
    skill: 'vocabulary',
    skillDetail: '食物词汇',
    choices: ["vegetables","cherry pie","fish and chips","lentils"],
    answer: 2
  },

  {
    id: 'g3_food_430',
    q: '"周日烤肉" 英语是？',
    type: 'choice',
    grades: [3],
    topic: 'food',
    skill: 'vocabulary',
    skillDetail: '食物词汇',
    choices: ["steak pie","vegetables","soup","Sunday roast"],
    answer: 3
  },

  {
    id: 'g6_forces_431',
    q: 'up（翻译成中文）',
    type: 'translate',
    grades: [6],
    topic: 'forces',
    skill: 'vocabulary',
    skillDetail: '力与运动',
    answer: '向上'
  },

  {
    id: 'g6_forces_432',
    q: '"向下" 英语是？',
    type: 'choice',
    grades: [6],
    topic: 'forces',
    skill: 'vocabulary',
    skillDetail: '力与运动',
    choices: ["spring","slow","down","roll"],
    answer: 2
  },

  {
    id: 'g6_forces_433',
    q: '填写英文：旋转',
    type: 'fill',
    grades: [6],
    topic: 'forces',
    skill: 'vocabulary',
    skillDetail: '力与运动',
    answer: 'spin'
  },

  {
    id: 'g6_forces_434',
    q: '"拉" 英语是？',
    type: 'choice',
    grades: [6],
    topic: 'forces',
    skill: 'vocabulary',
    skillDetail: '力与运动',
    choices: ["pull","gravity","sink","bounce"],
    answer: 0
  },

  {
    id: 'g6_forces_435',
    q: '填写英文：推',
    type: 'fill',
    grades: [6],
    topic: 'forces',
    skill: 'vocabulary',
    skillDetail: '力与运动',
    answer: 'push'
  },

  {
    id: 'g6_forces_436',
    q: '"拉伸" 英语是？',
    type: 'choice',
    grades: [6],
    topic: 'forces',
    skill: 'vocabulary',
    skillDetail: '力与运动',
    choices: ["up","rub","stretch","roll"],
    answer: 2
  },

  {
    id: 'g6_forces_437',
    q: 'rub（翻译成中文）',
    type: 'translate',
    grades: [6],
    topic: 'forces',
    skill: 'vocabulary',
    skillDetail: '力与运动',
    answer: '摩擦'
  },

  {
    id: 'g6_forces_438',
    q: '"滑动" 英语是？',
    type: 'choice',
    grades: [6],
    topic: 'forces',
    skill: 'vocabulary',
    skillDetail: '力与运动',
    choices: ["force","push","up","slide"],
    answer: 3
  },

  {
    id: 'g6_forces_439',
    q: '"弹簧" 英语是？',
    type: 'choice',
    grades: [6],
    topic: 'forces',
    skill: 'vocabulary',
    skillDetail: '力与运动',
    choices: ["spring","bounce","slide","spin"],
    answer: 0
  },

  {
    id: 'g6_forces_440',
    q: '"滚动" 英语是？',
    type: 'choice',
    grades: [6],
    topic: 'forces',
    skill: 'vocabulary',
    skillDetail: '力与运动',
    choices: ["repel","roll","stretch","up"],
    answer: 1
  },

  {
    id: 'g6_forces_441',
    q: '"弹跳" 英语是？',
    type: 'choice',
    grades: [6],
    topic: 'forces',
    skill: 'vocabulary',
    skillDetail: '力与运动',
    choices: ["pull","bounce","rub","fast"],
    answer: 1
  },

  {
    id: 'g6_forces_442',
    q: '"重力" 英语是？',
    type: 'choice',
    grades: [6],
    topic: 'forces',
    skill: 'vocabulary',
    skillDetail: '力与运动',
    choices: ["float","spin","gravity","slide"],
    answer: 2
  },

  {
    id: 'g6_forces_443',
    q: '"磁化" 英语是？',
    type: 'choice',
    grades: [6],
    topic: 'forces',
    skill: 'vocabulary',
    skillDetail: '力与运动',
    choices: ["float","down","rub","magnetise"],
    answer: 3
  },

  {
    id: 'g6_forces_444',
    q: 'repel（翻译成中文）',
    type: 'translate',
    grades: [6],
    topic: 'forces',
    skill: 'vocabulary',
    skillDetail: '力与运动',
    answer: '排斥'
  },

  {
    id: 'g6_forces_445',
    q: '"力" 英语是？',
    type: 'choice',
    grades: [6],
    topic: 'forces',
    skill: 'vocabulary',
    skillDetail: '力与运动',
    choices: ["force","rub","push","float"],
    answer: 0
  },

  {
    id: 'g6_forces_446',
    q: '填写英文：快的',
    type: 'fill',
    grades: [6],
    topic: 'forces',
    skill: 'vocabulary',
    skillDetail: '力与运动',
    answer: 'fast'
  },

  {
    id: 'g6_forces_447',
    q: '"慢的" 英语是？',
    type: 'choice',
    grades: [6],
    topic: 'forces',
    skill: 'vocabulary',
    skillDetail: '力与运动',
    choices: ["spin","slow","up","force"],
    answer: 1
  },

  {
    id: 'g6_forces_448',
    q: '填写英文：下沉',
    type: 'fill',
    grades: [6],
    topic: 'forces',
    skill: 'vocabulary',
    skillDetail: '力与运动',
    answer: 'sink'
  },

  {
    id: 'g6_forces_449',
    q: '填写英文：漂浮',
    type: 'fill',
    grades: [6],
    topic: 'forces',
    skill: 'vocabulary',
    skillDetail: '力与运动',
    answer: 'float'
  },

  {
    id: 'g3_fruit_450',
    q: '"苹果" 英语是？',
    type: 'choice',
    grades: [3],
    topic: 'fruit',
    skill: 'vocabulary',
    skillDetail: '水果词汇',
    choices: ["melon","apple","plum","pear"],
    answer: 1
  },

  {
    id: 'g3_fruit_451',
    q: 'banana（翻译成中文）',
    type: 'translate',
    grades: [3],
    topic: 'fruit',
    skill: 'vocabulary',
    skillDetail: '水果词汇',
    answer: '香蕉'
  },

  {
    id: 'g3_fruit_452',
    q: '"黑莓" 英语是？',
    type: 'choice',
    grades: [3],
    topic: 'fruit',
    skill: 'vocabulary',
    skillDetail: '水果词汇',
    choices: ["raspberry","grapes","passion fruit","blackberry"],
    answer: 3
  },

  {
    id: 'g3_fruit_453',
    q: '"樱桃" 英语是？',
    type: 'choice',
    grades: [3],
    topic: 'fruit',
    skill: 'vocabulary',
    skillDetail: '水果词汇',
    choices: ["pineapple","guava","pear","cherry"],
    answer: 3
  },

  {
    id: 'g3_fruit_454',
    q: '填写英文：桃子',
    type: 'fill',
    grades: [3],
    topic: 'fruit',
    skill: 'vocabulary',
    skillDetail: '水果词汇',
    answer: 'peach'
  },

  {
    id: 'g3_fruit_455',
    q: '"番石榴" 英语是？',
    type: 'choice',
    grades: [3],
    topic: 'fruit',
    skill: 'vocabulary',
    skillDetail: '水果词汇',
    choices: ["lemon","lime","guava","pineapple"],
    answer: 2
  },

  {
    id: 'g3_fruit_456',
    q: '"牛油果" 英语是？',
    type: 'choice',
    grades: [3],
    topic: 'fruit',
    skill: 'vocabulary',
    skillDetail: '水果词汇',
    choices: ["avocado","lemon","blackberry","peach"],
    answer: 0
  },

  {
    id: 'g3_fruit_457',
    q: '"葡萄" 英语是？',
    type: 'choice',
    grades: [3],
    topic: 'fruit',
    skill: 'vocabulary',
    skillDetail: '水果词汇',
    choices: ["mango","pineapple","lime","grapes"],
    answer: 3
  },

  {
    id: 'g3_fruit_458',
    q: '"柠檬" 英语是？',
    type: 'choice',
    grades: [3],
    topic: 'fruit',
    skill: 'vocabulary',
    skillDetail: '水果词汇',
    choices: ["raspberry","lemon","banana","grapes"],
    answer: 1
  },

  {
    id: 'g3_fruit_459',
    q: '"青柠" 英语是？',
    type: 'choice',
    grades: [3],
    topic: 'fruit',
    skill: 'vocabulary',
    skillDetail: '水果词汇',
    choices: ["lemon","orange","lime","blackberry"],
    answer: 2
  },

  {
    id: 'g3_fruit_460',
    q: '"芒果" 英语是？',
    type: 'choice',
    grades: [3],
    topic: 'fruit',
    skill: 'vocabulary',
    skillDetail: '水果词汇',
    choices: ["papaya","mango","orange","lime"],
    answer: 1
  },

  {
    id: 'g3_fruit_461',
    q: '"橙子" 英语是？',
    type: 'choice',
    grades: [3],
    topic: 'fruit',
    skill: 'vocabulary',
    skillDetail: '水果词汇',
    choices: ["blackberry","peach","orange","melon"],
    answer: 2
  },

  {
    id: 'g3_fruit_462',
    q: '"甜瓜" 英语是？',
    type: 'choice',
    grades: [3],
    topic: 'fruit',
    skill: 'vocabulary',
    skillDetail: '水果词汇',
    choices: ["mango","avocado","melon","peach"],
    answer: 2
  },

  {
    id: 'g3_fruit_463',
    q: '"木瓜" 英语是？',
    type: 'choice',
    grades: [3],
    topic: 'fruit',
    skill: 'vocabulary',
    skillDetail: '水果词汇',
    choices: ["avocado","papaya","passion fruit","peach"],
    answer: 1
  },

  {
    id: 'g3_fruit_464',
    q: 'passion fruit（翻译成中文）',
    type: 'translate',
    grades: [3],
    topic: 'fruit',
    skill: 'vocabulary',
    skillDetail: '水果词汇',
    answer: '百香果'
  },

  {
    id: 'g3_fruit_465',
    q: 'pear（翻译成中文）',
    type: 'translate',
    grades: [3],
    topic: 'fruit',
    skill: 'vocabulary',
    skillDetail: '水果词汇',
    answer: '梨'
  },

  {
    id: 'g3_fruit_466',
    q: '填写英文：菠萝',
    type: 'fill',
    grades: [3],
    topic: 'fruit',
    skill: 'vocabulary',
    skillDetail: '水果词汇',
    answer: 'pineapple'
  },

  {
    id: 'g3_fruit_467',
    q: '"李子" 英语是？',
    type: 'choice',
    grades: [3],
    topic: 'fruit',
    skill: 'vocabulary',
    skillDetail: '水果词汇',
    choices: ["raspberry","avocado","peach","plum"],
    answer: 3
  },

  {
    id: 'g3_fruit_468',
    q: '"树莓" 英语是？',
    type: 'choice',
    grades: [3],
    topic: 'fruit',
    skill: 'vocabulary',
    skillDetail: '水果词汇',
    choices: ["apple","grapes","avocado","raspberry"],
    answer: 3
  },

  {
    id: 'g3_fruit_469',
    q: '"小蜜橘" 英语是？',
    type: 'choice',
    grades: [3],
    topic: 'fruit',
    skill: 'vocabulary',
    skillDetail: '水果词汇',
    choices: ["pineapple","satsuma","cherry","papaya"],
    answer: 1
  },

  {
    id: 'g3_fruit_470',
    q: '"草莓" 英语是？',
    type: 'choice',
    grades: [3],
    topic: 'fruit',
    skill: 'vocabulary',
    skillDetail: '水果词汇',
    choices: ["strawberry","plum","pineapple","blackberry"],
    answer: 0
  },

  {
    id: 'g4_goldilocks_471',
    q: '"金发姑娘" 英语是？',
    type: 'choice',
    grades: [4],
    topic: 'goldilocks',
    skill: 'vocabulary',
    skillDetail: '故事词汇',
    choices: ["chair","bed","Goldilocks","porridge"],
    answer: 2
  },

  {
    id: 'g4_goldilocks_472',
    q: '"熊爸爸" 英语是？',
    type: 'choice',
    grades: [4],
    topic: 'goldilocks',
    skill: 'vocabulary',
    skillDetail: '故事词汇',
    choices: ["Daddy Bear","milk","woods","chair"],
    answer: 0
  },

  {
    id: 'g4_goldilocks_473',
    q: '"熊妈妈" 英语是？',
    type: 'choice',
    grades: [4],
    topic: 'goldilocks',
    skill: 'vocabulary',
    skillDetail: '故事词汇',
    choices: ["bed","spoon","Mummy Bear","bowl"],
    answer: 2
  },

  {
    id: 'g4_goldilocks_474',
    q: '"熊宝宝" 英语是？',
    type: 'choice',
    grades: [4],
    topic: 'goldilocks',
    skill: 'vocabulary',
    skillDetail: '故事词汇',
    choices: ["oven","spoon","cottage","Baby Bear"],
    answer: 3
  },

  {
    id: 'g4_goldilocks_475',
    q: '"粥" 英语是？',
    type: 'choice',
    grades: [4],
    topic: 'goldilocks',
    skill: 'vocabulary',
    skillDetail: '故事词汇',
    choices: ["porridge","Baby Bear","woods","Mummy Bear"],
    answer: 0
  },

  {
    id: 'g4_goldilocks_476',
    q: '"小屋" 英语是？',
    type: 'choice',
    grades: [4],
    topic: 'goldilocks',
    skill: 'vocabulary',
    skillDetail: '故事词汇',
    choices: ["cottage","bed","Goldilocks","porridge"],
    answer: 0
  },

  {
    id: 'g4_goldilocks_477',
    q: '填写英文：树林',
    type: 'fill',
    grades: [4],
    topic: 'goldilocks',
    skill: 'vocabulary',
    skillDetail: '故事词汇',
    answer: 'woods'
  },

  {
    id: 'g4_goldilocks_478',
    q: '"勺子" 英语是？',
    type: 'choice',
    grades: [4],
    topic: 'goldilocks',
    skill: 'vocabulary',
    skillDetail: '故事词汇',
    choices: ["bowl","chair","milk","spoon"],
    answer: 3
  },

  {
    id: 'g4_goldilocks_479',
    q: '"碗" 英语是？',
    type: 'choice',
    grades: [4],
    topic: 'goldilocks',
    skill: 'vocabulary',
    skillDetail: '故事词汇',
    choices: ["bowl","oven","porridge","Baby Bear"],
    answer: 0
  },

  {
    id: 'g4_goldilocks_480',
    q: '"床" 英语是？',
    type: 'choice',
    grades: [4],
    topic: 'goldilocks',
    skill: 'vocabulary',
    skillDetail: '故事词汇',
    choices: ["Mummy Bear","bed","spoon","woods"],
    answer: 1
  },

  {
    id: 'g4_goldilocks_481',
    q: '"椅子" 英语是？',
    type: 'choice',
    grades: [4],
    topic: 'goldilocks',
    skill: 'vocabulary',
    skillDetail: '故事词汇',
    choices: ["spoon","woods","chair","Mummy Bear"],
    answer: 2
  },

  {
    id: 'g4_goldilocks_482',
    q: '"牛奶" 英语是？',
    type: 'choice',
    grades: [4],
    topic: 'goldilocks',
    skill: 'vocabulary',
    skillDetail: '故事词汇',
    choices: ["milk","spoon","oven","woods"],
    answer: 0
  },

  {
    id: 'g4_goldilocks_483',
    q: '"烤箱" 英语是？',
    type: 'choice',
    grades: [4],
    topic: 'goldilocks',
    skill: 'vocabulary',
    skillDetail: '故事词汇',
    choices: ["oven","bed","porridge","woods"],
    answer: 0
  },

  {
    id: 'g4_jackbeanstalk_484',
    q: '"贫穷的" 英语是？',
    type: 'choice',
    grades: [4],
    topic: 'jackbeanstalk',
    skill: 'vocabulary',
    skillDetail: '故事词汇',
    choices: ["hen","poor","harp","magic beans"],
    answer: 1
  },

  {
    id: 'g4_jackbeanstalk_485',
    q: '"云" 英语是？',
    type: 'choice',
    grades: [4],
    topic: 'jackbeanstalk',
    skill: 'vocabulary',
    skillDetail: '故事词汇',
    choices: ["beanstalk","gold","harp","clouds"],
    answer: 3
  },

  {
    id: 'g4_jackbeanstalk_486',
    q: '"鸡蛋" 英语是？',
    type: 'choice',
    grades: [4],
    topic: 'jackbeanstalk',
    skill: 'vocabulary',
    skillDetail: '故事词汇',
    choices: ["poor","magic beans","eggs","clouds"],
    answer: 2
  },

  {
    id: 'g4_jackbeanstalk_487',
    q: '"母鸡" 英语是？',
    type: 'choice',
    grades: [4],
    topic: 'jackbeanstalk',
    skill: 'vocabulary',
    skillDetail: '故事词汇',
    choices: ["cottage","hen","poor","eggs"],
    answer: 1
  },

  {
    id: 'g4_jackbeanstalk_488',
    q: '填写英文：巨人',
    type: 'fill',
    grades: [4],
    topic: 'jackbeanstalk',
    skill: 'vocabulary',
    skillDetail: '故事词汇',
    answer: 'giant'
  },

  {
    id: 'g4_jackbeanstalk_489',
    q: '"杰克的妈妈" 英语是？',
    type: 'choice',
    grades: [4],
    topic: 'jackbeanstalk',
    skill: 'vocabulary',
    skillDetail: '故事词汇',
    choices: ["Jack's mother","harp","cottage","clouds"],
    answer: 0
  },

  {
    id: 'g4_jackbeanstalk_490',
    q: '"小屋" 英语是？',
    type: 'choice',
    grades: [4],
    topic: 'jackbeanstalk',
    skill: 'vocabulary',
    skillDetail: '故事词汇',
    choices: ["cottage","poor","harp","Jack's mother"],
    answer: 0
  },

  {
    id: 'g4_jackbeanstalk_491',
    q: '"奶牛" 英语是？',
    type: 'choice',
    grades: [4],
    topic: 'jackbeanstalk',
    skill: 'vocabulary',
    skillDetail: '故事词汇',
    choices: ["cow","gold","cottage","Jack's mother"],
    answer: 0
  },

  {
    id: 'g4_jackbeanstalk_492',
    q: '"魔法豆" 英语是？',
    type: 'choice',
    grades: [4],
    topic: 'jackbeanstalk',
    skill: 'vocabulary',
    skillDetail: '故事词汇',
    choices: ["beanstalk","hen","Jack's mother","magic beans"],
    answer: 3
  },

  {
    id: 'g4_jackbeanstalk_493',
    q: '"斧头" 英语是？',
    type: 'choice',
    grades: [4],
    topic: 'jackbeanstalk',
    skill: 'vocabulary',
    skillDetail: '故事词汇',
    choices: ["castle","golden","axe","Jack's mother"],
    answer: 2
  },

  {
    id: 'g4_jackbeanstalk_494',
    q: '"豆茎" 英语是？',
    type: 'choice',
    grades: [4],
    topic: 'jackbeanstalk',
    skill: 'vocabulary',
    skillDetail: '故事词汇',
    choices: ["axe","beanstalk","Jack's mother","eggs"],
    answer: 1
  },

  {
    id: 'g4_jackbeanstalk_495',
    q: '"竖琴" 英语是？',
    type: 'choice',
    grades: [4],
    topic: 'jackbeanstalk',
    skill: 'vocabulary',
    skillDetail: '故事词汇',
    choices: ["clouds","beanstalk","harp","hen"],
    answer: 2
  },

  {
    id: 'g4_jackbeanstalk_496',
    q: '"金子" 英语是？',
    type: 'choice',
    grades: [4],
    topic: 'jackbeanstalk',
    skill: 'vocabulary',
    skillDetail: '故事词汇',
    choices: ["gold","cow","hen","cottage"],
    answer: 0
  },

  {
    id: 'g4_jackbeanstalk_497',
    q: '"金色的" 英语是？',
    type: 'choice',
    grades: [4],
    topic: 'jackbeanstalk',
    skill: 'vocabulary',
    skillDetail: '故事词汇',
    choices: ["harp","golden","Jack's mother","magic beans"],
    answer: 1
  },

  {
    id: 'g4_jackbeanstalk_498',
    q: '填写英文：城堡',
    type: 'fill',
    grades: [4],
    topic: 'jackbeanstalk',
    skill: 'vocabulary',
    skillDetail: '故事词汇',
    answer: 'castle'
  },

  {
    id: 'g4_jungle_499',
    q: 'ant（翻译成中文）',
    type: 'translate',
    grades: [4],
    topic: 'jungle',
    skill: 'vocabulary',
    skillDetail: '丛林动物',
    answer: '蚂蚁'
  },

  {
    id: 'g4_jungle_500',
    q: 'tiger（翻译成中文）',
    type: 'translate',
    grades: [4],
    topic: 'jungle',
    skill: 'vocabulary',
    skillDetail: '丛林动物',
    answer: '老虎'
  },

  {
    id: 'g4_jungle_501',
    q: '"蟒蛇" 英语是？',
    type: 'choice',
    grades: [4],
    topic: 'jungle',
    skill: 'vocabulary',
    skillDetail: '丛林动物',
    choices: ["sloth","python","fruit bat","ant"],
    answer: 1
  },

  {
    id: 'g4_jungle_502',
    q: '填写英文：食蚁兽',
    type: 'fill',
    grades: [4],
    topic: 'jungle',
    skill: 'vocabulary',
    skillDetail: '丛林动物',
    answer: 'anteater'
  },

  {
    id: 'g4_jungle_503',
    q: '"蝴蝶" 英语是？',
    type: 'choice',
    grades: [4],
    topic: 'jungle',
    skill: 'vocabulary',
    skillDetail: '丛林动物',
    choices: ["butterfly","tree frog","lemur","anteater"],
    answer: 0
  },

  {
    id: 'g4_jungle_504',
    q: '"树懒" 英语是？',
    type: 'choice',
    grades: [4],
    topic: 'jungle',
    skill: 'vocabulary',
    skillDetail: '丛林动物',
    choices: ["sloth","lemur","caiman","chimpanzee"],
    answer: 0
  },

  {
    id: 'g4_jungle_505',
    q: '"熊猫" 英语是？',
    type: 'choice',
    grades: [4],
    topic: 'jungle',
    skill: 'vocabulary',
    skillDetail: '丛林动物',
    choices: ["ocelot","orangutan","iguana","panda"],
    answer: 3
  },

  {
    id: 'g4_jungle_506',
    q: '"白蚁" 英语是？',
    type: 'choice',
    grades: [4],
    topic: 'jungle',
    skill: 'vocabulary',
    skillDetail: '丛林动物',
    choices: ["fruit bat","panda","piranha","termite"],
    answer: 3
  },

  {
    id: 'g4_jungle_507',
    q: '"果蝠" 英语是？',
    type: 'choice',
    grades: [4],
    topic: 'jungle',
    skill: 'vocabulary',
    skillDetail: '丛林动物',
    choices: ["ocelot","fruit bat","macaw","lemur"],
    answer: 1
  },

  {
    id: 'g4_jungle_508',
    q: 'orangutan（翻译成中文）',
    type: 'translate',
    grades: [4],
    topic: 'jungle',
    skill: 'vocabulary',
    skillDetail: '丛林动物',
    answer: '猩猩'
  },

  {
    id: 'g4_jungle_509',
    q: 'chimpanzee（翻译成中文）',
    type: 'translate',
    grades: [4],
    topic: 'jungle',
    skill: 'vocabulary',
    skillDetail: '丛林动物',
    answer: '黑猩猩'
  },

  {
    id: 'g4_jungle_510',
    q: '"虎猫" 英语是？',
    type: 'choice',
    grades: [4],
    topic: 'jungle',
    skill: 'vocabulary',
    skillDetail: '丛林动物',
    choices: ["chimpanzee","ocelot","tapir","ant"],
    answer: 1
  },

  {
    id: 'g4_jungle_511',
    q: '填写英文：食人鱼',
    type: 'fill',
    grades: [4],
    topic: 'jungle',
    skill: 'vocabulary',
    skillDetail: '丛林动物',
    answer: 'piranha'
  },

  {
    id: 'g4_jungle_512',
    q: '"金刚鹦鹉" 英语是？',
    type: 'choice',
    grades: [4],
    topic: 'jungle',
    skill: 'vocabulary',
    skillDetail: '丛林动物',
    choices: ["tree frog","tapir","macaw","panda"],
    answer: 2
  },

  {
    id: 'g4_jungle_513',
    q: '"鬣蜥" 英语是？',
    type: 'choice',
    grades: [4],
    topic: 'jungle',
    skill: 'vocabulary',
    skillDetail: '丛林动物',
    choices: ["caiman","iguana","butterfly","ocelot"],
    answer: 1
  },

  {
    id: 'g4_jungle_514',
    q: 'tree frog（翻译成中文）',
    type: 'translate',
    grades: [4],
    topic: 'jungle',
    skill: 'vocabulary',
    skillDetail: '丛林动物',
    answer: '树蛙'
  },

  {
    id: 'g4_jungle_515',
    q: '"貘" 英语是？',
    type: 'choice',
    grades: [4],
    topic: 'jungle',
    skill: 'vocabulary',
    skillDetail: '丛林动物',
    choices: ["tapir","orangutan","tiger","iguana"],
    answer: 0
  },

  {
    id: 'g4_jungle_516',
    q: '填写英文：狐猴',
    type: 'fill',
    grades: [4],
    topic: 'jungle',
    skill: 'vocabulary',
    skillDetail: '丛林动物',
    answer: 'lemur'
  },

  {
    id: 'g4_jungle_517',
    q: '"凯门鳄" 英语是？',
    type: 'choice',
    grades: [4],
    topic: 'jungle',
    skill: 'vocabulary',
    skillDetail: '丛林动物',
    choices: ["caiman","fruit bat","piranha","orangutan"],
    answer: 0
  },

  {
    id: 'g4_jungle_518',
    q: '"大猩猩" 英语是？',
    type: 'choice',
    grades: [4],
    topic: 'jungle',
    skill: 'vocabulary',
    skillDetail: '丛林动物',
    choices: ["gorilla","tiger","python","ocelot"],
    answer: 0
  },

  {
    id: 'g4_jungle_519',
    q: '填写英文：豹子',
    type: 'fill',
    grades: [4],
    topic: 'jungle',
    skill: 'vocabulary',
    skillDetail: '丛林动物',
    answer: 'leopard'
  },

  {
    id: 'g4_redridinghood_520',
    q: '"篮子" 英语是？',
    type: 'choice',
    grades: [4],
    topic: 'redridinghood',
    skill: 'vocabulary',
    skillDetail: '故事词汇',
    choices: ["Grandmother","basket","eyes","food"],
    answer: 1
  },

  {
    id: 'g4_redridinghood_521',
    q: '填写英文：看见',
    type: 'fill',
    grades: [4],
    topic: 'redridinghood',
    skill: 'vocabulary',
    skillDetail: '故事词汇',
    answer: 'see'
  },

  {
    id: 'g4_redridinghood_522',
    q: '"耳朵" 英语是？',
    type: 'choice',
    grades: [4],
    topic: 'redridinghood',
    skill: 'vocabulary',
    skillDetail: '故事词汇',
    choices: ["ears","basket","house","wolf"],
    answer: 0
  },

  {
    id: 'g4_redridinghood_523',
    q: '"外婆" 英语是？',
    type: 'choice',
    grades: [4],
    topic: 'redridinghood',
    skill: 'vocabulary',
    skillDetail: '故事词汇',
    choices: ["Granny","teeth","basket","eyes"],
    answer: 0
  },

  {
    id: 'g4_redridinghood_524',
    q: '"奶奶/外婆" 英语是？',
    type: 'choice',
    grades: [4],
    topic: 'redridinghood',
    skill: 'vocabulary',
    skillDetail: '故事词汇',
    choices: ["teeth","Grandmother","Granny","wolf"],
    answer: 1
  },

  {
    id: 'g4_redridinghood_525',
    q: '"食物" 英语是？',
    type: 'choice',
    grades: [4],
    topic: 'redridinghood',
    skill: 'vocabulary',
    skillDetail: '故事词汇',
    choices: ["woodcutter","teeth","eyes","food"],
    answer: 3
  },

  {
    id: 'g4_redridinghood_526',
    q: '"森林" 英语是？',
    type: 'choice',
    grades: [4],
    topic: 'redridinghood',
    skill: 'vocabulary',
    skillDetail: '故事词汇',
    choices: ["forest","woodcutter","see","basket"],
    answer: 0
  },

  {
    id: 'g4_redridinghood_527',
    q: '"小红帽" 英语是？',
    type: 'choice',
    grades: [4],
    topic: 'redridinghood',
    skill: 'vocabulary',
    skillDetail: '故事词汇',
    choices: ["woodcutter","see","teeth","Little Red Riding Hood"],
    answer: 3
  },

  {
    id: 'g4_redridinghood_528',
    q: '填写英文：狼',
    type: 'fill',
    grades: [4],
    topic: 'redridinghood',
    skill: 'vocabulary',
    skillDetail: '故事词汇',
    answer: 'wolf'
  },

  {
    id: 'g4_redridinghood_529',
    q: '填写英文：牙齿',
    type: 'fill',
    grades: [4],
    topic: 'redridinghood',
    skill: 'vocabulary',
    skillDetail: '故事词汇',
    answer: 'teeth'
  },

  {
    id: 'g4_redridinghood_530',
    q: '"樵夫" 英语是？',
    type: 'choice',
    grades: [4],
    topic: 'redridinghood',
    skill: 'vocabulary',
    skillDetail: '故事词汇',
    choices: ["eyes","woodcutter","eat","see"],
    answer: 1
  },

  {
    id: 'g4_redridinghood_531',
    q: '"吃" 英语是？',
    type: 'choice',
    grades: [4],
    topic: 'redridinghood',
    skill: 'vocabulary',
    skillDetail: '故事词汇',
    choices: ["see","house","woodcutter","eat"],
    answer: 3
  },

  {
    id: 'g4_redridinghood_532',
    q: '"房子" 英语是？',
    type: 'choice',
    grades: [4],
    topic: 'redridinghood',
    skill: 'vocabulary',
    skillDetail: '故事词汇',
    choices: ["teeth","eat","house","basket"],
    answer: 2
  },

  {
    id: 'g4_redridinghood_533',
    q: 'eyes（翻译成中文）',
    type: 'translate',
    grades: [4],
    topic: 'redridinghood',
    skill: 'vocabulary',
    skillDetail: '故事词汇',
    answer: '眼睛'
  },

  {
    id: 'g4_redridinghood_534',
    q: '"床" 英语是？',
    type: 'choice',
    grades: [4],
    topic: 'redridinghood',
    skill: 'vocabulary',
    skillDetail: '故事词汇',
    choices: ["bed","eat","forest","teeth"],
    answer: 0
  },

  {
    id: 'g3_lostfound_535',
    q: '"朋友" 英语是？',
    type: 'choice',
    grades: [3],
    topic: 'lostfound',
    skill: 'vocabulary',
    skillDetail: '失物招领',
    choices: ["South Pole","duck","rowboat","friends"],
    answer: 3
  },

  {
    id: 'g3_lostfound_536',
    q: '"雨伞" 英语是？',
    type: 'choice',
    grades: [3],
    topic: 'lostfound',
    skill: 'vocabulary',
    skillDetail: '失物招领',
    choices: ["waves","penguin","umbrella","South Pole"],
    answer: 2
  },

  {
    id: 'g3_lostfound_537',
    q: '填写英文：企鹅',
    type: 'fill',
    grades: [3],
    topic: 'lostfound',
    skill: 'vocabulary',
    skillDetail: '失物招领',
    answer: 'penguin'
  },

  {
    id: 'g3_lostfound_538',
    q: '填写英文：男孩',
    type: 'fill',
    grades: [3],
    topic: 'lostfound',
    skill: 'vocabulary',
    skillDetail: '失物招领',
    answer: 'boy'
  },

  {
    id: 'g3_lostfound_539',
    q: 'South Pole（翻译成中文）',
    type: 'translate',
    grades: [3],
    topic: 'lostfound',
    skill: 'vocabulary',
    skillDetail: '失物招领',
    answer: '南极'
  },

  {
    id: 'g3_lostfound_540',
    q: '"鸭子" 英语是？',
    type: 'choice',
    grades: [3],
    topic: 'lostfound',
    skill: 'vocabulary',
    skillDetail: '失物招领',
    choices: ["South Pole","birds","rowboat","duck"],
    answer: 3
  },

  {
    id: 'g3_lostfound_541',
    q: '填写英文：鸟',
    type: 'fill',
    grades: [3],
    topic: 'lostfound',
    skill: 'vocabulary',
    skillDetail: '失物招领',
    answer: 'birds'
  },

  {
    id: 'g3_lostfound_542',
    q: '"波浪" 英语是？',
    type: 'choice',
    grades: [3],
    topic: 'lostfound',
    skill: 'vocabulary',
    skillDetail: '失物招领',
    choices: ["friends","South Pole","waves","penguin"],
    answer: 2
  },

  {
    id: 'g3_lostfound_543',
    q: '填写英文：划艇',
    type: 'fill',
    grades: [3],
    topic: 'lostfound',
    skill: 'vocabulary',
    skillDetail: '失物招领',
    answer: 'rowboat'
  },

  {
    id: 'g3_bedroom_544',
    q: 'bedroom（翻译成中文）',
    type: 'translate',
    grades: [3],
    topic: 'bedroom',
    skill: 'vocabulary',
    skillDetail: '卧室物品',
    answer: '卧室'
  },

  {
    id: 'g3_bedroom_545',
    q: '"五斗柜" 英语是？',
    type: 'choice',
    grades: [3],
    topic: 'bedroom',
    skill: 'vocabulary',
    skillDetail: '卧室物品',
    choices: ["chest of drawers","curtains","teddy","pillows"],
    answer: 0
  },

  {
    id: 'g3_bedroom_546',
    q: '填写英文：婴儿床',
    type: 'fill',
    grades: [3],
    topic: 'bedroom',
    skill: 'vocabulary',
    skillDetail: '卧室物品',
    answer: 'cot'
  },

  {
    id: 'g3_bedroom_547',
    q: '填写英文：窗帘',
    type: 'fill',
    grades: [3],
    topic: 'bedroom',
    skill: 'vocabulary',
    skillDetail: '卧室物品',
    answer: 'curtains'
  },

  {
    id: 'g3_bedroom_548',
    q: '"床头柜" 英语是？',
    type: 'choice',
    grades: [3],
    topic: 'bedroom',
    skill: 'vocabulary',
    skillDetail: '卧室物品',
    choices: ["bedside table","duvet","lamp","cushion"],
    answer: 0
  },

  {
    id: 'g3_bedroom_549',
    q: '"羽绒被" 英语是？',
    type: 'choice',
    grades: [3],
    topic: 'bedroom',
    skill: 'vocabulary',
    skillDetail: '卧室物品',
    choices: ["toys","duvet","lamp","cushion"],
    answer: 1
  },

  {
    id: 'g3_bedroom_550',
    q: '"靠垫" 英语是？',
    type: 'choice',
    grades: [3],
    topic: 'bedroom',
    skill: 'vocabulary',
    skillDetail: '卧室物品',
    choices: ["duvet","bed","mobile","cushion"],
    answer: 3
  },

  {
    id: 'g3_bedroom_551',
    q: '"枕头" 英语是？',
    type: 'choice',
    grades: [3],
    topic: 'bedroom',
    skill: 'vocabulary',
    skillDetail: '卧室物品',
    choices: ["teddy","toys","pillows","bed"],
    answer: 2
  },

  {
    id: 'g3_bedroom_552',
    q: 'rug（翻译成中文）',
    type: 'translate',
    grades: [3],
    topic: 'bedroom',
    skill: 'vocabulary',
    skillDetail: '卧室物品',
    answer: '小地毯'
  },

  {
    id: 'g3_bedroom_553',
    q: '填写英文：台灯',
    type: 'fill',
    grades: [3],
    topic: 'bedroom',
    skill: 'vocabulary',
    skillDetail: '卧室物品',
    answer: 'lamp'
  },

  {
    id: 'g3_bedroom_554',
    q: '"衣柜" 英语是？',
    type: 'choice',
    grades: [3],
    topic: 'bedroom',
    skill: 'vocabulary',
    skillDetail: '卧室物品',
    choices: ["wardrobe","cushion","toys","bedside table"],
    answer: 0
  },

  {
    id: 'g3_bedroom_555',
    q: '"床铃" 英语是？',
    type: 'choice',
    grades: [3],
    topic: 'bedroom',
    skill: 'vocabulary',
    skillDetail: '卧室物品',
    choices: ["bedside table","cot","chest of drawers","mobile"],
    answer: 3
  },

  {
    id: 'g3_bedroom_556',
    q: '"玩具" 英语是？',
    type: 'choice',
    grades: [3],
    topic: 'bedroom',
    skill: 'vocabulary',
    skillDetail: '卧室物品',
    choices: ["teddy","chest of drawers","toys","mobile"],
    answer: 2
  },

  {
    id: 'g3_bedroom_557',
    q: '"床" 英语是？',
    type: 'choice',
    grades: [3],
    topic: 'bedroom',
    skill: 'vocabulary',
    skillDetail: '卧室物品',
    choices: ["toys","curtains","bed","pillows"],
    answer: 2
  },

  {
    id: 'g3_bedroom_558',
    q: '"泰迪熊" 英语是？',
    type: 'choice',
    grades: [3],
    topic: 'bedroom',
    skill: 'vocabulary',
    skillDetail: '卧室物品',
    choices: ["teddy","bedroom","cot","pillows"],
    answer: 0
  },

  {
    id: 'g3_bathroom_559',
    q: '"浴室" 英语是？',
    type: 'choice',
    grades: [3],
    topic: 'bathroom',
    skill: 'vocabulary',
    skillDetail: '浴室物品',
    choices: ["bathroom","mouth wash","toothbrush","mirror"],
    answer: 0
  },

  {
    id: 'g3_bathroom_560',
    q: '"浴缸" 英语是？',
    type: 'choice',
    grades: [3],
    topic: 'bathroom',
    skill: 'vocabulary',
    skillDetail: '浴室物品',
    choices: ["bath","toilet","shower","tap"],
    answer: 0
  },

  {
    id: 'g3_bathroom_561',
    q: 'mat（翻译成中文）',
    type: 'translate',
    grades: [3],
    topic: 'bathroom',
    skill: 'vocabulary',
    skillDetail: '浴室物品',
    answer: '地垫'
  },

  {
    id: 'g3_bathroom_562',
    q: '"手巾" 英语是？',
    type: 'choice',
    grades: [3],
    topic: 'bathroom',
    skill: 'vocabulary',
    skillDetail: '浴室物品',
    choices: ["hand towel","bin","bathroom","toilet"],
    answer: 0
  },

  {
    id: 'g3_bathroom_563',
    q: '"淋浴" 英语是？',
    type: 'choice',
    grades: [3],
    topic: 'bathroom',
    skill: 'vocabulary',
    skillDetail: '浴室物品',
    choices: ["toothbrush","shower","hand towel","soap"],
    answer: 1
  },

  {
    id: 'g3_bathroom_564',
    q: '"肥皂" 英语是？',
    type: 'choice',
    grades: [3],
    topic: 'bathroom',
    skill: 'vocabulary',
    skillDetail: '浴室物品',
    choices: ["mirror","toothbrush","soap","bathroom"],
    answer: 2
  },

  {
    id: 'g3_bathroom_565',
    q: '"镜子" 英语是？',
    type: 'choice',
    grades: [3],
    topic: 'bathroom',
    skill: 'vocabulary',
    skillDetail: '浴室物品',
    choices: ["mouth wash","bath","toilet roll","mirror"],
    answer: 3
  },

  {
    id: 'g3_bathroom_566',
    q: '"牙膏" 英语是？',
    type: 'choice',
    grades: [3],
    topic: 'bathroom',
    skill: 'vocabulary',
    skillDetail: '浴室物品',
    choices: ["soap","toothpaste","bin","toothbrush"],
    answer: 1
  },

  {
    id: 'g3_bathroom_567',
    q: 'mouth wash（翻译成中文）',
    type: 'translate',
    grades: [3],
    topic: 'bathroom',
    skill: 'vocabulary',
    skillDetail: '浴室物品',
    answer: '漱口水'
  },

  {
    id: 'g3_bathroom_568',
    q: 'toilet（翻译成中文）',
    type: 'translate',
    grades: [3],
    topic: 'bathroom',
    skill: 'vocabulary',
    skillDetail: '浴室物品',
    answer: '马桶'
  },

  {
    id: 'g3_bathroom_569',
    q: 'toilet roll（翻译成中文）',
    type: 'translate',
    grades: [3],
    topic: 'bathroom',
    skill: 'vocabulary',
    skillDetail: '浴室物品',
    answer: '卫生纸'
  },

  {
    id: 'g3_bathroom_570',
    q: '"洗手池" 英语是？',
    type: 'choice',
    grades: [3],
    topic: 'bathroom',
    skill: 'vocabulary',
    skillDetail: '浴室物品',
    choices: ["sink","toothpaste","bathroom","toilet roll"],
    answer: 0
  },

  {
    id: 'g3_bathroom_571',
    q: '填写英文：水龙头',
    type: 'fill',
    grades: [3],
    topic: 'bathroom',
    skill: 'vocabulary',
    skillDetail: '浴室物品',
    answer: 'tap'
  },

  {
    id: 'g3_bathroom_572',
    q: '"垃圾桶" 英语是？',
    type: 'choice',
    grades: [3],
    topic: 'bathroom',
    skill: 'vocabulary',
    skillDetail: '浴室物品',
    choices: ["bin","toilet roll","mat","mirror"],
    answer: 0
  },

  {
    id: 'g3_bathroom_573',
    q: '填写英文：牙刷',
    type: 'fill',
    grades: [3],
    topic: 'bathroom',
    skill: 'vocabulary',
    skillDetail: '浴室物品',
    answer: 'toothbrush'
  },

  {
    id: 'g4_lounge_574',
    q: '"客厅" 英语是？',
    type: 'choice',
    grades: [4],
    topic: 'lounge',
    skill: 'vocabulary',
    skillDetail: '客厅物品',
    choices: ["radio","lounge","armchair","dvd player"],
    answer: 1
  },

  {
    id: 'g4_lounge_575',
    q: '"窗帘" 英语是？',
    type: 'choice',
    grades: [4],
    topic: 'lounge',
    skill: 'vocabulary',
    skillDetail: '客厅物品',
    choices: ["sofa","hi-fi system","cushion","curtains"],
    answer: 3
  },

  {
    id: 'g4_lounge_576',
    q: '"电视" 英语是？',
    type: 'choice',
    grades: [4],
    topic: 'lounge',
    skill: 'vocabulary',
    skillDetail: '客厅物品',
    choices: ["armchair","lounge","television","curtains"],
    answer: 2
  },

  {
    id: 'g4_lounge_577',
    q: '"音响" 英语是？',
    type: 'choice',
    grades: [4],
    topic: 'lounge',
    skill: 'vocabulary',
    skillDetail: '客厅物品',
    choices: ["curtains","hi-fi system","rug","radio"],
    answer: 1
  },

  {
    id: 'g4_lounge_578',
    q: '"靠垫" 英语是？',
    type: 'choice',
    grades: [4],
    topic: 'lounge',
    skill: 'vocabulary',
    skillDetail: '客厅物品',
    choices: ["cushion","radio","television","dvd player"],
    answer: 0
  },

  {
    id: 'g4_lounge_579',
    q: '"地毯" 英语是？',
    type: 'choice',
    grades: [4],
    topic: 'lounge',
    skill: 'vocabulary',
    skillDetail: '客厅物品',
    choices: ["games console","hi-fi system","coffee table","rug"],
    answer: 3
  },

  {
    id: 'g4_lounge_580',
    q: '"收音机" 英语是？',
    type: 'choice',
    grades: [4],
    topic: 'lounge',
    skill: 'vocabulary',
    skillDetail: '客厅物品',
    choices: ["coffee table","radio","sofa","rug"],
    answer: 1
  },

  {
    id: 'g4_lounge_581',
    q: 'lamp（翻译成中文）',
    type: 'translate',
    grades: [4],
    topic: 'lounge',
    skill: 'vocabulary',
    skillDetail: '客厅物品',
    answer: '落地灯'
  },

  {
    id: 'g4_lounge_582',
    q: '填写英文：DVD播放器',
    type: 'fill',
    grades: [4],
    topic: 'lounge',
    skill: 'vocabulary',
    skillDetail: '客厅物品',
    answer: 'dvd player'
  },

  {
    id: 'g4_lounge_583',
    q: '"茶几" 英语是？',
    type: 'choice',
    grades: [4],
    topic: 'lounge',
    skill: 'vocabulary',
    skillDetail: '客厅物品',
    choices: ["coffee table","lounge","radio","dvd player"],
    answer: 0
  },

  {
    id: 'g4_lounge_584',
    q: '填写英文：扶手椅',
    type: 'fill',
    grades: [4],
    topic: 'lounge',
    skill: 'vocabulary',
    skillDetail: '客厅物品',
    answer: 'armchair'
  },

  {
    id: 'g4_lounge_585',
    q: '"沙发" 英语是？',
    type: 'choice',
    grades: [4],
    topic: 'lounge',
    skill: 'vocabulary',
    skillDetail: '客厅物品',
    choices: ["rug","radio","lounge","sofa"],
    answer: 3
  },

  {
    id: 'g4_lounge_586',
    q: 'games console（翻译成中文）',
    type: 'translate',
    grades: [4],
    topic: 'lounge',
    skill: 'vocabulary',
    skillDetail: '客厅物品',
    answer: '游戏机'
  },

  {
    id: 'g4_kitchen_587',
    q: '"厨房" 英语是？',
    type: 'choice',
    grades: [4],
    topic: 'kitchen',
    skill: 'vocabulary',
    skillDetail: '厨房物品',
    choices: ["kitchen","kettle","hob","sink"],
    answer: 0
  },

  {
    id: 'g4_kitchen_588',
    q: 'crockery（翻译成中文）',
    type: 'translate',
    grades: [4],
    topic: 'kitchen',
    skill: 'vocabulary',
    skillDetail: '厨房物品',
    answer: '陶瓷餐具'
  },

  {
    id: 'g4_kitchen_589',
    q: '填写英文：餐具',
    type: 'fill',
    grades: [4],
    topic: 'kitchen',
    skill: 'vocabulary',
    skillDetail: '厨房物品',
    answer: 'cutlery'
  },

  {
    id: 'g4_kitchen_590',
    q: '"冰箱" 英语是？',
    type: 'choice',
    grades: [4],
    topic: 'kitchen',
    skill: 'vocabulary',
    skillDetail: '厨房物品',
    choices: ["fridge","kettle","washing up gloves","radio"],
    answer: 0
  },

  {
    id: 'g4_kitchen_591',
    q: '"炉灶" 英语是？',
    type: 'choice',
    grades: [4],
    topic: 'kitchen',
    skill: 'vocabulary',
    skillDetail: '厨房物品',
    choices: ["kitchen","crockery","hob","radio"],
    answer: 2
  },

  {
    id: 'g4_kitchen_592',
    q: 'microwave（翻译成中文）',
    type: 'translate',
    grades: [4],
    topic: 'kitchen',
    skill: 'vocabulary',
    skillDetail: '厨房物品',
    answer: '微波炉'
  },

  {
    id: 'g4_kitchen_593',
    q: '填写英文：熨斗',
    type: 'fill',
    grades: [4],
    topic: 'kitchen',
    skill: 'vocabulary',
    skillDetail: '厨房物品',
    answer: 'iron'
  },

  {
    id: 'g4_kitchen_594',
    q: '填写英文：熨衣板',
    type: 'fill',
    grades: [4],
    topic: 'kitchen',
    skill: 'vocabulary',
    skillDetail: '厨房物品',
    answer: 'ironing board'
  },

  {
    id: 'g4_kitchen_595',
    q: '"水壶" 英语是？',
    type: 'choice',
    grades: [4],
    topic: 'kitchen',
    skill: 'vocabulary',
    skillDetail: '厨房物品',
    choices: ["ironing board","kettle","toaster","sink"],
    answer: 1
  },

  {
    id: 'g4_kitchen_596',
    q: '填写英文：收音机',
    type: 'fill',
    grades: [4],
    topic: 'kitchen',
    skill: 'vocabulary',
    skillDetail: '厨房物品',
    answer: 'radio'
  },

  {
    id: 'g4_kitchen_597',
    q: '填写英文：烤箱',
    type: 'fill',
    grades: [4],
    topic: 'kitchen',
    skill: 'vocabulary',
    skillDetail: '厨房物品',
    answer: 'oven'
  },

  {
    id: 'g4_kitchen_598',
    q: '"水槽" 英语是？',
    type: 'choice',
    grades: [4],
    topic: 'kitchen',
    skill: 'vocabulary',
    skillDetail: '厨房物品',
    choices: ["sink","toaster","microwave","crockery"],
    answer: 0
  },

  {
    id: 'g4_kitchen_599',
    q: 'washing up gloves（翻译成中文）',
    type: 'translate',
    grades: [4],
    topic: 'kitchen',
    skill: 'vocabulary',
    skillDetail: '厨房物品',
    answer: '洗碗手套'
  },

  {
    id: 'g4_kitchen_600',
    q: '"烤面包机" 英语是？',
    type: 'choice',
    grades: [4],
    topic: 'kitchen',
    skill: 'vocabulary',
    skillDetail: '厨房物品',
    choices: ["toaster","oven","washing up gloves","washing machine"],
    answer: 0
  },

  {
    id: 'g4_kitchen_601',
    q: '填写英文：洗衣机',
    type: 'fill',
    grades: [4],
    topic: 'kitchen',
    skill: 'vocabulary',
    skillDetail: '厨房物品',
    answer: 'washing machine'
  },

  {
    id: 'g3_diningroom_602',
    q: '"餐厅" 英语是？',
    type: 'choice',
    grades: [3],
    topic: 'diningroom',
    skill: 'vocabulary',
    skillDetail: '餐厅物品',
    choices: ["dining room","cutlery","table","chair"],
    answer: 0
  },

  {
    id: 'g3_diningroom_603',
    q: '"桌子" 英语是？',
    type: 'choice',
    grades: [3],
    topic: 'diningroom',
    skill: 'vocabulary',
    skillDetail: '餐厅物品',
    choices: ["candle","table","napkin","cutlery"],
    answer: 1
  },

  {
    id: 'g3_diningroom_604',
    q: '填写英文：椅子',
    type: 'fill',
    grades: [3],
    topic: 'diningroom',
    skill: 'vocabulary',
    skillDetail: '餐厅物品',
    answer: 'chair'
  },

  {
    id: 'g3_diningroom_605',
    q: '"餐具" 英语是？',
    type: 'choice',
    grades: [3],
    topic: 'diningroom',
    skill: 'vocabulary',
    skillDetail: '餐厅物品',
    choices: ["placemat","cutlery","napkin","rug"],
    answer: 1
  },

  {
    id: 'g3_diningroom_606',
    q: '"餐垫" 英语是？',
    type: 'choice',
    grades: [3],
    topic: 'diningroom',
    skill: 'vocabulary',
    skillDetail: '餐厅物品',
    choices: ["cutlery","candle","table","placemat"],
    answer: 3
  },

  {
    id: 'g3_diningroom_607',
    q: '"地毯" 英语是？',
    type: 'choice',
    grades: [3],
    topic: 'diningroom',
    skill: 'vocabulary',
    skillDetail: '餐厅物品',
    choices: ["rug","placemat","candle","chair"],
    answer: 0
  },

  {
    id: 'g3_diningroom_608',
    q: '"蜡烛" 英语是？',
    type: 'choice',
    grades: [3],
    topic: 'diningroom',
    skill: 'vocabulary',
    skillDetail: '餐厅物品',
    choices: ["candle","chair","placemat","rug"],
    answer: 0
  },

  {
    id: 'g3_diningroom_609',
    q: '"餐巾" 英语是？',
    type: 'choice',
    grades: [3],
    topic: 'diningroom',
    skill: 'vocabulary',
    skillDetail: '餐厅物品',
    choices: ["placemat","chair","table","napkin"],
    answer: 3
  },

  {
    id: 'g4_garden_610',
    q: '"花园" 英语是？',
    type: 'choice',
    grades: [4],
    topic: 'garden',
    skill: 'vocabulary',
    skillDetail: '花园词汇',
    choices: ["grass","vegetable patch","potted plant","garden"],
    answer: 3
  },

  {
    id: 'g4_garden_611',
    q: '"温室" 英语是？',
    type: 'choice',
    grades: [4],
    topic: 'garden',
    skill: 'vocabulary',
    skillDetail: '花园词汇',
    choices: ["garden","path","tree","greenhouse"],
    answer: 3
  },

  {
    id: 'g4_garden_612',
    q: '填写英文：草',
    type: 'fill',
    grades: [4],
    topic: 'garden',
    skill: 'vocabulary',
    skillDetail: '花园词汇',
    answer: 'grass'
  },

  {
    id: 'g4_garden_613',
    q: '"花" 英语是？',
    type: 'choice',
    grades: [4],
    topic: 'garden',
    skill: 'vocabulary',
    skillDetail: '花园词汇',
    choices: ["tree","path","potted plant","flowers"],
    answer: 3
  },

  {
    id: 'g4_garden_614',
    q: '"盆栽" 英语是？',
    type: 'choice',
    grades: [4],
    topic: 'garden',
    skill: 'vocabulary',
    skillDetail: '花园词汇',
    choices: ["potted plant","flowers","tree","vegetable patch"],
    answer: 0
  },

  {
    id: 'g4_garden_615',
    q: '"工具棚" 英语是？',
    type: 'choice',
    grades: [4],
    topic: 'garden',
    skill: 'vocabulary',
    skillDetail: '花园词汇',
    choices: ["shed","potted plant","garden","greenhouse"],
    answer: 0
  },

  {
    id: 'g4_garden_616',
    q: '填写英文：灌木丛',
    type: 'fill',
    grades: [4],
    topic: 'garden',
    skill: 'vocabulary',
    skillDetail: '花园词汇',
    answer: 'bush'
  },

  {
    id: 'g4_garden_617',
    q: '"露台" 英语是？',
    type: 'choice',
    grades: [4],
    topic: 'garden',
    skill: 'vocabulary',
    skillDetail: '花园词汇',
    choices: ["shed","bush","greenhouse","patio"],
    answer: 3
  },

  {
    id: 'g4_garden_618',
    q: '填写英文：树',
    type: 'fill',
    grades: [4],
    topic: 'garden',
    skill: 'vocabulary',
    skillDetail: '花园词汇',
    answer: 'tree'
  },

  {
    id: 'g4_garden_619',
    q: '"菜园" 英语是？',
    type: 'choice',
    grades: [4],
    topic: 'garden',
    skill: 'vocabulary',
    skillDetail: '花园词汇',
    choices: ["pond","vegetable patch","garden","tree"],
    answer: 1
  },

  {
    id: 'g4_garden_620',
    q: '填写英文：游泳池',
    type: 'fill',
    grades: [4],
    topic: 'garden',
    skill: 'vocabulary',
    skillDetail: '花园词汇',
    answer: 'swimming pool'
  },

  {
    id: 'g4_garden_621',
    q: '填写英文：小路',
    type: 'fill',
    grades: [4],
    topic: 'garden',
    skill: 'vocabulary',
    skillDetail: '花园词汇',
    answer: 'path'
  },

  {
    id: 'g4_garden_622',
    q: '"池塘" 英语是？',
    type: 'choice',
    grades: [4],
    topic: 'garden',
    skill: 'vocabulary',
    skillDetail: '花园词汇',
    choices: ["flowers","path","garden","pond"],
    answer: 3
  },

  {
    id: 'g4_jobs1_623',
    q: '"兽医" 英语是？',
    type: 'choice',
    grades: [4],
    topic: 'jobs1',
    skill: 'vocabulary',
    skillDetail: '职业词汇',
    choices: ["doctor","lollipop person","vet","lunchtime supervisor"],
    answer: 2
  },

  {
    id: 'g4_jobs1_624',
    q: '"老师" 英语是？',
    type: 'choice',
    grades: [4],
    topic: 'jobs1',
    skill: 'vocabulary',
    skillDetail: '职业词汇',
    choices: ["milk deliverer","paramedic","teacher","lollipop person"],
    answer: 2
  },

  {
    id: 'g4_jobs1_625',
    q: '"交通协管员" 英语是？',
    type: 'choice',
    grades: [4],
    topic: 'jobs1',
    skill: 'vocabulary',
    skillDetail: '职业词汇',
    choices: ["lollipop person","vet","police officer","milk deliverer"],
    answer: 0
  },

  {
    id: 'g4_jobs1_626',
    q: '"修路工人" 英语是？',
    type: 'choice',
    grades: [4],
    topic: 'jobs1',
    skill: 'vocabulary',
    skillDetail: '职业词汇',
    choices: ["lollipop person","road worker","mechanic","taxi driver"],
    answer: 1
  },

  {
    id: 'g4_jobs1_627',
    q: '填写英文：警察',
    type: 'fill',
    grades: [4],
    topic: 'jobs1',
    skill: 'vocabulary',
    skillDetail: '职业词汇',
    answer: 'police officer'
  },

  {
    id: 'g4_jobs1_628',
    q: '填写英文：午餐管理员',
    type: 'fill',
    grades: [4],
    topic: 'jobs1',
    skill: 'vocabulary',
    skillDetail: '职业词汇',
    answer: 'lunchtime supervisor'
  },

  {
    id: 'g4_jobs1_629',
    q: '"护理人员" 英语是？',
    type: 'choice',
    grades: [4],
    topic: 'jobs1',
    skill: 'vocabulary',
    skillDetail: '职业词汇',
    choices: ["road worker","mechanic","paramedic","taxi driver"],
    answer: 2
  },

  {
    id: 'g4_jobs1_630',
    q: '"护士" 英语是？',
    type: 'choice',
    grades: [4],
    topic: 'jobs1',
    skill: 'vocabulary',
    skillDetail: '职业词汇',
    choices: ["lunchtime supervisor","road worker","doctor","nurse"],
    answer: 3
  },

  {
    id: 'g4_jobs1_631',
    q: '"送奶工" 英语是？',
    type: 'choice',
    grades: [4],
    topic: 'jobs1',
    skill: 'vocabulary',
    skillDetail: '职业词汇',
    choices: ["paramedic","milk deliverer","lollipop person","vet"],
    answer: 1
  },

  {
    id: 'g4_jobs1_632',
    q: 'mechanic（翻译成中文）',
    type: 'translate',
    grades: [4],
    topic: 'jobs1',
    skill: 'vocabulary',
    skillDetail: '职业词汇',
    answer: '修理工'
  },

  {
    id: 'g4_jobs1_633',
    q: '"医生" 英语是？',
    type: 'choice',
    grades: [4],
    topic: 'jobs1',
    skill: 'vocabulary',
    skillDetail: '职业词汇',
    choices: ["vet","teacher","doctor","milk deliverer"],
    answer: 2
  },

  {
    id: 'g4_jobs1_634',
    q: '填写英文：出租车司机',
    type: 'fill',
    grades: [4],
    topic: 'jobs1',
    skill: 'vocabulary',
    skillDetail: '职业词汇',
    answer: 'taxi driver'
  },

  {
    id: 'g5_jobs2_635',
    q: '"牙医" 英语是？',
    type: 'choice',
    grades: [5],
    topic: 'jobs2',
    skill: 'vocabulary',
    skillDetail: '职业词汇',
    choices: ["librarian","dentist","mechanic","builder"],
    answer: 1
  },

  {
    id: 'g5_jobs2_636',
    q: 'librarian（翻译成中文）',
    type: 'translate',
    grades: [5],
    topic: 'jobs2',
    skill: 'vocabulary',
    skillDetail: '职业词汇',
    answer: '图书管理员'
  },

  {
    id: 'g5_jobs2_637',
    q: '填写英文：消防员',
    type: 'fill',
    grades: [5],
    topic: 'jobs2',
    skill: 'vocabulary',
    skillDetail: '职业词汇',
    answer: 'firefighter'
  },

  {
    id: 'g5_jobs2_638',
    q: '填写英文：垃圾清运工',
    type: 'fill',
    grades: [5],
    topic: 'jobs2',
    skill: 'vocabulary',
    skillDetail: '职业词汇',
    answer: 'refuse collector'
  },

  {
    id: 'g5_jobs2_639',
    q: '"公交车司机" 英语是？',
    type: 'choice',
    grades: [5],
    topic: 'jobs2',
    skill: 'vocabulary',
    skillDetail: '职业词汇',
    choices: ["bus driver","life guard","dentist","caretaker"],
    answer: 0
  },

  {
    id: 'g5_jobs2_640',
    q: '填写英文：技工',
    type: 'fill',
    grades: [5],
    topic: 'jobs2',
    skill: 'vocabulary',
    skillDetail: '职业词汇',
    answer: 'mechanic'
  },

  {
    id: 'g5_jobs2_641',
    q: '"管理员" 英语是？',
    type: 'choice',
    grades: [5],
    topic: 'jobs2',
    skill: 'vocabulary',
    skillDetail: '职业词汇',
    choices: ["refuse collector","caretaker","builder","post deliverer"],
    answer: 1
  },

  {
    id: 'g5_jobs2_642',
    q: '填写英文：山地救援员',
    type: 'fill',
    grades: [5],
    topic: 'jobs2',
    skill: 'vocabulary',
    skillDetail: '职业词汇',
    answer: 'mountain rescuer'
  },

  {
    id: 'g5_jobs2_643',
    q: '"建筑工人" 英语是？',
    type: 'choice',
    grades: [5],
    topic: 'jobs2',
    skill: 'vocabulary',
    skillDetail: '职业词汇',
    choices: ["builder","life guard","firefighter","librarian"],
    answer: 0
  },

  {
    id: 'g5_jobs2_644',
    q: '"邮递员" 英语是？',
    type: 'choice',
    grades: [5],
    topic: 'jobs2',
    skill: 'vocabulary',
    skillDetail: '职业词汇',
    choices: ["mountain rescuer","caretaker","post deliverer","refuse collector"],
    answer: 2
  },

  {
    id: 'g5_jobs2_645',
    q: '填写英文：救生员',
    type: 'fill',
    grades: [5],
    topic: 'jobs2',
    skill: 'vocabulary',
    skillDetail: '职业词汇',
    answer: 'life guard'
  },

  {
    id: 'g3_pets_646',
    q: '"蜗牛" 英语是？',
    type: 'choice',
    grades: [3],
    topic: 'pets',
    skill: 'vocabulary',
    skillDetail: '宠物词汇',
    choices: ["chipmunk","chicken","snail","parrot"],
    answer: 2
  },

  {
    id: 'g3_pets_647',
    q: '"蜥蜴" 英语是？',
    type: 'choice',
    grades: [3],
    topic: 'pets',
    skill: 'vocabulary',
    skillDetail: '宠物词汇',
    choices: ["snail","lizard","snake","guinea pig"],
    answer: 1
  },

  {
    id: 'g3_pets_648',
    q: '"花栗鼠" 英语是？',
    type: 'choice',
    grades: [3],
    topic: 'pets',
    skill: 'vocabulary',
    skillDetail: '宠物词汇',
    choices: ["chipmunk","rat","parrot","snail"],
    answer: 0
  },

  {
    id: 'g3_pets_649',
    q: '"小鸡" 英语是？',
    type: 'choice',
    grades: [3],
    topic: 'pets',
    skill: 'vocabulary',
    skillDetail: '宠物词汇',
    choices: ["budgie","chicken","rat","hamster"],
    answer: 1
  },

  {
    id: 'g3_pets_650',
    q: '"狗" 英语是？',
    type: 'choice',
    grades: [3],
    topic: 'pets',
    skill: 'vocabulary',
    skillDetail: '宠物词汇',
    choices: ["chicken","dog","spider","snail"],
    answer: 1
  },

  {
    id: 'g3_pets_651',
    q: '"老鼠" 英语是？',
    type: 'choice',
    grades: [3],
    topic: 'pets',
    skill: 'vocabulary',
    skillDetail: '宠物词汇',
    choices: ["cat","rat","hamster","fish"],
    answer: 1
  },

  {
    id: 'g3_pets_652',
    q: '"小老鼠" 英语是？',
    type: 'choice',
    grades: [3],
    topic: 'pets',
    skill: 'vocabulary',
    skillDetail: '宠物词汇',
    choices: ["fish","mouse","lizard","rat"],
    answer: 1
  },

  {
    id: 'g3_pets_653',
    q: '填写英文：乌龟',
    type: 'fill',
    grades: [3],
    topic: 'pets',
    skill: 'vocabulary',
    skillDetail: '宠物词汇',
    answer: 'tortoise'
  },

  {
    id: 'g3_pets_654',
    q: '"豚鼠" 英语是？',
    type: 'choice',
    grades: [3],
    topic: 'pets',
    skill: 'vocabulary',
    skillDetail: '宠物词汇',
    choices: ["mouse","guinea pig","parrot","budgie"],
    answer: 1
  },

  {
    id: 'g3_pets_655',
    q: '"猫" 英语是？',
    type: 'choice',
    grades: [3],
    topic: 'pets',
    skill: 'vocabulary',
    skillDetail: '宠物词汇',
    choices: ["chicken","cat","hamster","lizard"],
    answer: 1
  },

  {
    id: 'g3_pets_656',
    q: '填写英文：蛇',
    type: 'fill',
    grades: [3],
    topic: 'pets',
    skill: 'vocabulary',
    skillDetail: '宠物词汇',
    answer: 'snake'
  },

  {
    id: 'g3_pets_657',
    q: '"鹦鹉" 英语是？',
    type: 'choice',
    grades: [3],
    topic: 'pets',
    skill: 'vocabulary',
    skillDetail: '宠物词汇',
    choices: ["snake","chicken","spider","parrot"],
    answer: 3
  },

  {
    id: 'g3_pets_658',
    q: '"蜘蛛" 英语是？',
    type: 'choice',
    grades: [3],
    topic: 'pets',
    skill: 'vocabulary',
    skillDetail: '宠物词汇',
    choices: ["cat","hamster","spider","tortoise"],
    answer: 2
  },

  {
    id: 'g3_pets_659',
    q: '"仓鼠" 英语是？',
    type: 'choice',
    grades: [3],
    topic: 'pets',
    skill: 'vocabulary',
    skillDetail: '宠物词汇',
    choices: ["lizard","fish","hamster","chicken"],
    answer: 2
  },

  {
    id: 'g3_pets_660',
    q: '"虎皮鹦鹉" 英语是？',
    type: 'choice',
    grades: [3],
    topic: 'pets',
    skill: 'vocabulary',
    skillDetail: '宠物词汇',
    choices: ["budgie","cat","rabbit","snail"],
    answer: 0
  },

  {
    id: 'g3_pets_661',
    q: '"鱼" 英语是？',
    type: 'choice',
    grades: [3],
    topic: 'pets',
    skill: 'vocabulary',
    skillDetail: '宠物词汇',
    choices: ["chicken","fish","chipmunk","guinea pig"],
    answer: 1
  },

  {
    id: 'g3_pets_662',
    q: '填写英文：兔子',
    type: 'fill',
    grades: [3],
    topic: 'pets',
    skill: 'vocabulary',
    skillDetail: '宠物词汇',
    answer: 'rabbit'
  },

  {
    id: 'g5_pirates_663',
    q: '"船" 英语是？',
    type: 'choice',
    grades: [5],
    topic: 'pirates',
    skill: 'vocabulary',
    skillDetail: '海盗词汇',
    choices: ["treasure map","captain","compass","ship"],
    answer: 3
  },

  {
    id: 'g5_pirates_664',
    q: '填写英文：大海',
    type: 'fill',
    grades: [5],
    topic: 'pirates',
    skill: 'vocabulary',
    skillDetail: '海盗词汇',
    answer: 'sea'
  },

  {
    id: 'g5_pirates_665',
    q: 'hook（翻译成中文）',
    type: 'translate',
    grades: [5],
    topic: 'pirates',
    skill: 'vocabulary',
    skillDetail: '海盗词汇',
    answer: '铁钩'
  },

  {
    id: 'g5_pirates_666',
    q: '"海盗旗" 英语是？',
    type: 'choice',
    grades: [5],
    topic: 'pirates',
    skill: 'vocabulary',
    skillDetail: '海盗词汇',
    choices: ["eyepatch","treasure chest","hook","pirate flag"],
    answer: 3
  },

  {
    id: 'g5_pirates_667',
    q: '"海盗" 英语是？',
    type: 'choice',
    grades: [5],
    topic: 'pirates',
    skill: 'vocabulary',
    skillDetail: '海盗词汇',
    choices: ["desert island","sea","pirate","treasure chest"],
    answer: 2
  },

  {
    id: 'g5_pirates_668',
    q: '"藏宝图" 英语是？',
    type: 'choice',
    grades: [5],
    topic: 'pirates',
    skill: 'vocabulary',
    skillDetail: '海盗词汇',
    choices: ["ship","treasure map","pirate","pirate flag"],
    answer: 1
  },

  {
    id: 'g5_pirates_669',
    q: '"船长" 英语是？',
    type: 'choice',
    grades: [5],
    topic: 'pirates',
    skill: 'vocabulary',
    skillDetail: '海盗词汇',
    choices: ["desert island","captain","pirate flag","eyepatch"],
    answer: 1
  },

  {
    id: 'g5_pirates_670',
    q: '填写英文：宝箱',
    type: 'fill',
    grades: [5],
    topic: 'pirates',
    skill: 'vocabulary',
    skillDetail: '海盗词汇',
    answer: 'treasure chest'
  },

  {
    id: 'g5_pirates_671',
    q: 'desert island（翻译成中文）',
    type: 'translate',
    grades: [5],
    topic: 'pirates',
    skill: 'vocabulary',
    skillDetail: '海盗词汇',
    answer: '荒岛'
  },

  {
    id: 'g5_pirates_672',
    q: '"眼罩" 英语是？',
    type: 'choice',
    grades: [5],
    topic: 'pirates',
    skill: 'vocabulary',
    skillDetail: '海盗词汇',
    choices: ["compass","ship","desert island","eyepatch"],
    answer: 3
  },

  {
    id: 'g5_pirates_673',
    q: '"宝藏" 英语是？',
    type: 'choice',
    grades: [5],
    topic: 'pirates',
    skill: 'vocabulary',
    skillDetail: '海盗词汇',
    choices: ["pirate","desert island","hook","treasure"],
    answer: 3
  },

  {
    id: 'g5_pirates_674',
    q: '"指南针" 英语是？',
    type: 'choice',
    grades: [5],
    topic: 'pirates',
    skill: 'vocabulary',
    skillDetail: '海盗词汇',
    choices: ["pirate flag","sea","compass","treasure"],
    answer: 2
  },

  {
    id: 'g5_polaranimals_675',
    q: '填写英文：企鹅',
    type: 'fill',
    grades: [5],
    topic: 'polaranimals',
    skill: 'vocabulary',
    skillDetail: '极地动物',
    answer: 'penguin'
  },

  {
    id: 'g5_polaranimals_676',
    q: '填写英文：北极狐',
    type: 'fill',
    grades: [5],
    topic: 'polaranimals',
    skill: 'vocabulary',
    skillDetail: '极地动物',
    answer: 'arctic fox'
  },

  {
    id: 'g5_polaranimals_677',
    q: '"海象" 英语是？',
    type: 'choice',
    grades: [5],
    topic: 'polaranimals',
    skill: 'vocabulary',
    skillDetail: '极地动物',
    choices: ["musk ox","seal","arctic fox","walrus"],
    answer: 3
  },

  {
    id: 'g5_polaranimals_678',
    q: '"虎鲸" 英语是？',
    type: 'choice',
    grades: [5],
    topic: 'polaranimals',
    skill: 'vocabulary',
    skillDetail: '极地动物',
    choices: ["seal","killer whale","arctic fox","reindeer"],
    answer: 1
  },

  {
    id: 'g5_polaranimals_679',
    q: '"狼" 英语是？',
    type: 'choice',
    grades: [5],
    topic: 'polaranimals',
    skill: 'vocabulary',
    skillDetail: '极地动物',
    choices: ["killer whale","arctic hare","seal","wolf"],
    answer: 3
  },

  {
    id: 'g5_polaranimals_680',
    q: '"一角鲸" 英语是？',
    type: 'choice',
    grades: [5],
    topic: 'polaranimals',
    skill: 'vocabulary',
    skillDetail: '极地动物',
    choices: ["snowy owl","narwhal","arctic hare","polar bear"],
    answer: 1
  },

  {
    id: 'g5_polaranimals_681',
    q: '"北极兔" 英语是？',
    type: 'choice',
    grades: [5],
    topic: 'polaranimals',
    skill: 'vocabulary',
    skillDetail: '极地动物',
    choices: ["arctic fox","reindeer","arctic hare","musk ox"],
    answer: 2
  },

  {
    id: 'g5_polaranimals_682',
    q: '"海豹" 英语是？',
    type: 'choice',
    grades: [5],
    topic: 'polaranimals',
    skill: 'vocabulary',
    skillDetail: '极地动物',
    choices: ["seal","polar bear","arctic hare","narwhal"],
    answer: 0
  },

  {
    id: 'g5_polaranimals_683',
    q: '"白鲸" 英语是？',
    type: 'choice',
    grades: [5],
    topic: 'polaranimals',
    skill: 'vocabulary',
    skillDetail: '极地动物',
    choices: ["beluga whale","killer whale","albatross","wolf"],
    answer: 0
  },

  {
    id: 'g5_polaranimals_684',
    q: '填写英文：雪鸮',
    type: 'fill',
    grades: [5],
    topic: 'polaranimals',
    skill: 'vocabulary',
    skillDetail: '极地动物',
    answer: 'snowy owl'
  },

  {
    id: 'g5_polaranimals_685',
    q: '"北极熊" 英语是？',
    type: 'choice',
    grades: [5],
    topic: 'polaranimals',
    skill: 'vocabulary',
    skillDetail: '极地动物',
    choices: ["arctic hare","narwhal","polar bear","seal"],
    answer: 2
  },

  {
    id: 'g5_polaranimals_686',
    q: '"驯鹿" 英语是？',
    type: 'choice',
    grades: [5],
    topic: 'polaranimals',
    skill: 'vocabulary',
    skillDetail: '极地动物',
    choices: ["reindeer","arctic hare","snowy owl","seal"],
    answer: 0
  },

  {
    id: 'g5_polaranimals_687',
    q: '"信天翁" 英语是？',
    type: 'choice',
    grades: [5],
    topic: 'polaranimals',
    skill: 'vocabulary',
    skillDetail: '极地动物',
    choices: ["reindeer","beluga whale","albatross","penguin"],
    answer: 2
  },

  {
    id: 'g5_polaranimals_688',
    q: 'musk ox（翻译成中文）',
    type: 'translate',
    grades: [5],
    topic: 'polaranimals',
    skill: 'vocabulary',
    skillDetail: '极地动物',
    answer: '麝牛'
  },

  {
    id: 'g4_shapes_689',
    q: '填写英文：圆形',
    type: 'fill',
    grades: [4],
    topic: 'shapes',
    skill: 'vocabulary',
    skillDetail: '形状词汇',
    answer: 'Circle'
  },

  {
    id: 'g4_shapes_690',
    q: '"正方形" 英语是？',
    type: 'choice',
    grades: [4],
    topic: 'shapes',
    skill: 'vocabulary',
    skillDetail: '形状词汇',
    choices: ["Oval","Star","Square","Heart"],
    answer: 2
  },

  {
    id: 'g4_shapes_691',
    q: '"长方形" 英语是？',
    type: 'choice',
    grades: [4],
    topic: 'shapes',
    skill: 'vocabulary',
    skillDetail: '形状词汇',
    choices: ["Heart","Rectangle","Triangle","Square"],
    answer: 1
  },

  {
    id: 'g4_shapes_692',
    q: '"三角形" 英语是？',
    type: 'choice',
    grades: [4],
    topic: 'shapes',
    skill: 'vocabulary',
    skillDetail: '形状词汇',
    choices: ["Triangle","Heart","Circle","Oval"],
    answer: 0
  },

  {
    id: 'g4_shapes_693',
    q: '"椭圆形" 英语是？',
    type: 'choice',
    grades: [4],
    topic: 'shapes',
    skill: 'vocabulary',
    skillDetail: '形状词汇',
    choices: ["Oval","Triangle","Diamond","Star"],
    answer: 0
  },

  {
    id: 'g4_shapes_694',
    q: '"菱形',
    type: 'choice',
    grades: [4],
    topic: 'shapes',
    skill: 'vocabulary',
    skillDetail: '形状词汇',
    choices: ["Oval","Diamond","Heart","Rectangle"],
    answer: 1
  },

  {
    id: 'g4_shapes_695',
    q: '填写英文：星形',
    type: 'fill',
    grades: [4],
    topic: 'shapes',
    skill: 'vocabulary',
    skillDetail: '形状词汇',
    answer: 'Star'
  },

  {
    id: 'g4_shapes_696',
    q: '填写英文：心形',
    type: 'fill',
    grades: [4],
    topic: 'shapes',
    skill: 'vocabulary',
    skillDetail: '形状词汇',
    answer: 'Heart'
  },

  {
    id: 'g4_peelegg_697',
    q: '"水煮蛋" 英语是？',
    type: 'choice',
    grades: [4],
    topic: 'peelegg',
    skill: 'vocabulary',
    skillDetail: '日常生活',
    choices: ["Watch out","boiled egg","cool water","Roll"],
    answer: 1
  },

  {
    id: 'g4_peelegg_698',
    q: '"冷水" 英语是？',
    type: 'choice',
    grades: [4],
    topic: 'peelegg',
    skill: 'vocabulary',
    skillDetail: '日常生活',
    choices: ["Watch out","Roll","Smooth","cool water"],
    answer: 3
  },

  {
    id: 'g4_peelegg_699',
    q: '填写英文：轻敲',
    type: 'fill',
    grades: [4],
    topic: 'peelegg',
    skill: 'vocabulary',
    skillDetail: '日常生活',
    answer: 'Tap'
  },

  {
    id: 'g4_peelegg_700',
    q: '"滚动" 英语是？',
    type: 'choice',
    grades: [4],
    topic: 'peelegg',
    skill: 'vocabulary',
    skillDetail: '日常生活',
    choices: ["Tap","Watch out","Roll","boiled egg"],
    answer: 2
  },

  {
    id: 'g4_peelegg_701',
    q: '"壳" 英语是？',
    type: 'choice',
    grades: [4],
    topic: 'peelegg',
    skill: 'vocabulary',
    skillDetail: '日常生活',
    choices: ["shell","Tap","Smooth","Roll"],
    answer: 0
  },

  {
    id: 'g4_peelegg_702',
    q: '"注意" 英语是？',
    type: 'choice',
    grades: [4],
    topic: 'peelegg',
    skill: 'vocabulary',
    skillDetail: '日常生活',
    choices: ["Roll","boiled egg","shell","Watch out"],
    answer: 3
  },

  {
    id: 'g4_peelegg_703',
    q: '"光滑" 英语是？',
    type: 'choice',
    grades: [4],
    topic: 'peelegg',
    skill: 'vocabulary',
    skillDetail: '日常生活',
    choices: ["Watch out","Roll","boiled egg","Smooth"],
    answer: 3
  },

  {
    id: 'g3_snack_704',
    q: '填写英文：零食',
    type: 'fill',
    grades: [3],
    topic: 'snack',
    skill: 'vocabulary',
    skillDetail: '零食词汇',
    answer: 'snack'
  },

  {
    id: 'g3_snack_705',
    q: '填写英文：分享',
    type: 'fill',
    grades: [3],
    topic: 'snack',
    skill: 'vocabulary',
    skillDetail: '零食词汇',
    answer: 'share'
  },

  {
    id: 'g3_snack_706',
    q: '"过期" 英语是？',
    type: 'choice',
    grades: [3],
    topic: 'snack',
    skill: 'vocabulary',
    skillDetail: '零食词汇',
    choices: ["open","too much","snack","expire"],
    answer: 3
  },

  {
    id: 'g3_snack_707',
    q: 'wash hands（翻译成中文）',
    type: 'translate',
    grades: [3],
    topic: 'snack',
    skill: 'vocabulary',
    skillDetail: '零食词汇',
    answer: '洗手'
  },

  {
    id: 'g3_snack_708',
    q: '填写英文：太多',
    type: 'fill',
    grades: [3],
    topic: 'snack',
    skill: 'vocabulary',
    skillDetail: '零食词汇',
    answer: 'too much'
  },

  {
    id: 'g3_snack_709',
    q: '"尝试" 英语是？',
    type: 'choice',
    grades: [3],
    topic: 'snack',
    skill: 'vocabulary',
    skillDetail: '零食词汇',
    choices: ["sample","share","too much","snack"],
    answer: 0
  },

  {
    id: 'g3_snack_710',
    q: 'open（翻译成中文）',
    type: 'translate',
    grades: [3],
    topic: 'snack',
    skill: 'vocabulary',
    skillDetail: '零食词汇',
    answer: '打开'
  },

  {
    id: 'g3_washhair_711',
    q: 'wash hair（翻译成中文）',
    type: 'translate',
    grades: [3],
    topic: 'washhair',
    skill: 'vocabulary',
    skillDetail: '洗护词汇',
    answer: '洗头发'
  },

  {
    id: 'g3_washhair_712',
    q: '"洗发水" 英语是？',
    type: 'choice',
    grades: [3],
    topic: 'washhair',
    skill: 'vocabulary',
    skillDetail: '洗护词汇',
    choices: ["wash hair","hairdryer","shampoo","towel"],
    answer: 2
  },

  {
    id: 'g3_washhair_713',
    q: '"按摩" 英语是？',
    type: 'choice',
    grades: [3],
    topic: 'washhair',
    skill: 'vocabulary',
    skillDetail: '洗护词汇',
    choices: ["shampoo","Conditioner","massage","hairdryer"],
    answer: 2
  },

  {
    id: 'g3_washhair_714',
    q: '填写英文：冲洗',
    type: 'fill',
    grades: [3],
    topic: 'washhair',
    skill: 'vocabulary',
    skillDetail: '洗护词汇',
    answer: 'Rinse'
  },

  {
    id: 'g3_washhair_715',
    q: '"护发素" 英语是？',
    type: 'choice',
    grades: [3],
    topic: 'washhair',
    skill: 'vocabulary',
    skillDetail: '洗护词汇',
    choices: ["Rinse","shampoo","Conditioner","wash hair"],
    answer: 2
  },

  {
    id: 'g3_washhair_716',
    q: '"毛巾" 英语是？',
    type: 'choice',
    grades: [3],
    topic: 'washhair',
    skill: 'vocabulary',
    skillDetail: '洗护词汇',
    choices: ["Rinse","wash hair","massage","towel"],
    answer: 3
  },

  {
    id: 'g3_washhair_717',
    q: '填写英文：吹风机',
    type: 'fill',
    grades: [3],
    topic: 'washhair',
    skill: 'vocabulary',
    skillDetail: '洗护词汇',
    answer: 'hairdryer'
  },

  {
    id: 'g3_washhair_718',
    q: '"梳子" 英语是？',
    type: 'choice',
    grades: [3],
    topic: 'washhair',
    skill: 'vocabulary',
    skillDetail: '洗护词汇',
    choices: ["hairdryer","comb","towel","wash hair"],
    answer: 1
  },

  {
    id: 'g3_eatathome_719',
    q: '填写英文：米饭',
    type: 'fill',
    grades: [3],
    topic: 'eatathome',
    skill: 'vocabulary',
    skillDetail: '用餐词汇',
    answer: 'rice'
  },

  {
    id: 'g3_eatathome_720',
    q: '"勺子" 英语是？',
    type: 'choice',
    grades: [3],
    topic: 'eatathome',
    skill: 'vocabulary',
    skillDetail: '用餐词汇',
    choices: ["chew","chopsticks","slurp","spoon"],
    answer: 3
  },

  {
    id: 'g3_eatathome_721',
    q: '填写英文：筷子',
    type: 'fill',
    grades: [3],
    topic: 'eatathome',
    skill: 'vocabulary',
    skillDetail: '用餐词汇',
    answer: 'chopsticks'
  },

  {
    id: 'g3_eatathome_722',
    q: '"纸巾" 英语是？',
    type: 'choice',
    grades: [3],
    topic: 'eatathome',
    skill: 'vocabulary',
    skillDetail: '用餐词汇',
    choices: ["tissue","chopsticks","chew","rice"],
    answer: 0
  },

  {
    id: 'g3_eatathome_723',
    q: '"咀嚼" 英语是？',
    type: 'choice',
    grades: [3],
    topic: 'eatathome',
    skill: 'vocabulary',
    skillDetail: '用餐词汇',
    choices: ["rice","bowl","tissue","chew"],
    answer: 3
  },

  {
    id: 'g3_eatathome_724',
    q: '"碗" 英语是？',
    type: 'choice',
    grades: [3],
    topic: 'eatathome',
    skill: 'vocabulary',
    skillDetail: '用餐词汇',
    choices: ["rice","bowl","chew","tissue"],
    answer: 1
  },

  {
    id: 'g3_eatathome_725',
    q: '填写英文：吸食',
    type: 'fill',
    grades: [3],
    topic: 'eatathome',
    skill: 'vocabulary',
    skillDetail: '用餐词汇',
    answer: 'slurp'
  },

  {
    id: 'g3_washingdishes_726',
    q: '"洗碗" 英语是？',
    type: 'choice',
    grades: [3],
    topic: 'washingdishes',
    skill: 'vocabulary',
    skillDetail: '家务词汇',
    choices: ["brush","washing dishes","sponge","dry"],
    answer: 1
  },

  {
    id: 'g3_washingdishes_727',
    q: 'dish soap（翻译成中文）',
    type: 'translate',
    grades: [3],
    topic: 'washingdishes',
    skill: 'vocabulary',
    skillDetail: '家务词汇',
    answer: '洗洁精'
  },

  {
    id: 'g3_washingdishes_728',
    q: '填写英文：冲洗',
    type: 'fill',
    grades: [3],
    topic: 'washingdishes',
    skill: 'vocabulary',
    skillDetail: '家务词汇',
    answer: 'rinse'
  },

  {
    id: 'g3_washingdishes_729',
    q: '"海绵" 英语是？',
    type: 'choice',
    grades: [3],
    topic: 'washingdishes',
    skill: 'vocabulary',
    skillDetail: '家务词汇',
    choices: ["sponge","dish soap","chopsticks","cupboard"],
    answer: 0
  },

  {
    id: 'g3_washingdishes_730',
    q: '填写英文：筷子',
    type: 'fill',
    grades: [3],
    topic: 'washingdishes',
    skill: 'vocabulary',
    skillDetail: '家务词汇',
    answer: 'chopsticks'
  },

  {
    id: 'g3_washingdishes_731',
    q: '"刷子" 英语是？',
    type: 'choice',
    grades: [3],
    topic: 'washingdishes',
    skill: 'vocabulary',
    skillDetail: '家务词汇',
    choices: ["brush","dry","rinse","chopsticks"],
    answer: 0
  },

  {
    id: 'g3_washingdishes_732',
    q: 'dry（翻译成中文）',
    type: 'translate',
    grades: [3],
    topic: 'washingdishes',
    skill: 'vocabulary',
    skillDetail: '家务词汇',
    answer: '擦干'
  },

  {
    id: 'g3_washingdishes_733',
    q: 'cupboard（翻译成中文）',
    type: 'translate',
    grades: [3],
    topic: 'washingdishes',
    skill: 'vocabulary',
    skillDetail: '家务词汇',
    answer: '橱柜'
  },

  {
    id: 'g4_summersweat_734',
    q: '填写英文：出汗',
    type: 'fill',
    grades: [4],
    topic: 'summersweat',
    skill: 'vocabulary',
    skillDetail: '夏天词汇',
    answer: 'sweat'
  },

  {
    id: 'g4_summersweat_735',
    q: '"擦" 英语是？',
    type: 'choice',
    grades: [4],
    topic: 'summersweat',
    skill: 'vocabulary',
    skillDetail: '夏天词汇',
    choices: ["running","water","wipe","tissue"],
    answer: 2
  },

  {
    id: 'g4_summersweat_736',
    q: 'cool down（翻译成中文）',
    type: 'translate',
    grades: [4],
    topic: 'summersweat',
    skill: 'vocabulary',
    skillDetail: '夏天词汇',
    answer: '降温'
  },

  {
    id: 'g4_summersweat_737',
    q: '"滴下" 英语是？',
    type: 'choice',
    grades: [4],
    topic: 'summersweat',
    skill: 'vocabulary',
    skillDetail: '夏天词汇',
    choices: ["tissue","cool down","wipe","drip down"],
    answer: 3
  },

  {
    id: 'g4_summersweat_738',
    q: '"跑步" 英语是？',
    type: 'choice',
    grades: [4],
    topic: 'summersweat',
    skill: 'vocabulary',
    skillDetail: '夏天词汇',
    choices: ["running","drip down","water","wipe"],
    answer: 0
  },

  {
    id: 'g4_summersweat_739',
    q: '"纸巾" 英语是？',
    type: 'choice',
    grades: [4],
    topic: 'summersweat',
    skill: 'vocabulary',
    skillDetail: '夏天词汇',
    choices: ["tissue","water","running","cool down"],
    answer: 0
  },

  {
    id: 'g4_summersweat_740',
    q: '"水" 英语是？',
    type: 'choice',
    grades: [4],
    topic: 'summersweat',
    skill: 'vocabulary',
    skillDetail: '夏天词汇',
    choices: ["water","running","tissue","cool down"],
    answer: 0
  },

  {
    id: 'g5_wastesorting_741',
    q: '"垃圾分类" 英语是？',
    type: 'choice',
    grades: [5],
    topic: 'wastesorting',
    skill: 'vocabulary',
    skillDetail: '环保词汇',
    choices: ["waste sorting","other waste","clothes","food waste"],
    answer: 0
  },

  {
    id: 'g5_wastesorting_742',
    q: '"可回收垃圾" 英语是？',
    type: 'choice',
    grades: [5],
    topic: 'wastesorting',
    skill: 'vocabulary',
    skillDetail: '环保词汇',
    choices: ["clothes","waste sorting","hazardous waste","recyclable waste"],
    answer: 3
  },

  {
    id: 'g5_wastesorting_743',
    q: '"厨余垃圾" 英语是？',
    type: 'choice',
    grades: [5],
    topic: 'wastesorting',
    skill: 'vocabulary',
    skillDetail: '环保词汇',
    choices: ["other waste","waste sorting","recyclable waste","food waste"],
    answer: 3
  },

  {
    id: 'g5_wastesorting_744',
    q: '"有害垃圾" 英语是？',
    type: 'choice',
    grades: [5],
    topic: 'wastesorting',
    skill: 'vocabulary',
    skillDetail: '环保词汇',
    choices: ["other waste","clothes","hazardous waste","food waste"],
    answer: 2
  },

  {
    id: 'g5_wastesorting_745',
    q: '填写英文：其他垃圾',
    type: 'fill',
    grades: [5],
    topic: 'wastesorting',
    skill: 'vocabulary',
    skillDetail: '环保词汇',
    answer: 'other waste'
  },

  {
    id: 'g5_wastesorting_746',
    q: 'clothes（翻译成中文）',
    type: 'translate',
    grades: [5],
    topic: 'wastesorting',
    skill: 'vocabulary',
    skillDetail: '环保词汇',
    answer: '衣物；衣物和纺织品，捐赠或回收，别乱扔。'
  },

  {
    id: 'g3_housework_747',
    q: '填写英文：叠衣服',
    type: 'fill',
    grades: [3],
    topic: 'housework',
    skill: 'vocabulary',
    skillDetail: '家务词汇',
    answer: 'fold the clothes'
  },

  {
    id: 'g3_housework_748',
    q: '"扫地" 英语是？',
    type: 'choice',
    grades: [3],
    topic: 'housework',
    skill: 'vocabulary',
    skillDetail: '家务词汇',
    choices: ["toy","sweep the floor","fold the clothes","wash dishes"],
    answer: 1
  },

  {
    id: 'g3_housework_749',
    q: '"洗碗" 英语是？',
    type: 'choice',
    grades: [3],
    topic: 'housework',
    skill: 'vocabulary',
    skillDetail: '家务词汇',
    choices: ["water","sweep the floor","wash dishes","fold the clothes"],
    answer: 2
  },

  {
    id: 'g3_housework_750',
    q: '填写英文：玩具',
    type: 'fill',
    grades: [3],
    topic: 'housework',
    skill: 'vocabulary',
    skillDetail: '家务词汇',
    answer: 'toy'
  },

  {
    id: 'g3_housework_751',
    q: '填写英文：浇水',
    type: 'fill',
    grades: [3],
    topic: 'housework',
    skill: 'vocabulary',
    skillDetail: '家务词汇',
    answer: 'water'
  },

  {
    id: 'g3_housework_752',
    q: '"整理床铺" 英语是？',
    type: 'choice',
    grades: [3],
    topic: 'housework',
    skill: 'vocabulary',
    skillDetail: '家务词汇',
    choices: ["trash","wash dishes","toy","make bed"],
    answer: 3
  },

  {
    id: 'g3_housework_753',
    q: 'trash（翻译成中文）',
    type: 'translate',
    grades: [3],
    topic: 'housework',
    skill: 'vocabulary',
    skillDetail: '家务词汇',
    answer: '垃圾；把垃圾拿出去。'
  }
];

// =====================
// 题库查询函数
// 按主题过滤
export function getQuestionsByTopic(topic) {
  if (topic === 'mixed') return questions;
  return questions.filter(q => q.topic === topic);
}

// 按年级过滤
export function getQuestionsByGrade(grade) {
  return questions.filter(q => q.grades.includes(grade));
}

// 按年级+主题过滤
export function getQuestionsByGradeAndTopic(grade, topics) {
  return questions.filter(q =>
    q.grades.includes(grade) &&
    (topics.includes(q.topic) || topics.includes('mixed'))
  );
}

// 根据关卡获取题目
export function getQuestionsForLevel(level) {
  const levelData = level;
  if (levelData.topic === 'mixed') {
    return questions.filter(q => q.grades.includes(3));
  }
  if (Array.isArray(levelData.topic)) {
    return questions.filter(q => levelData.topic.includes(q.topic));
  }
  return questions.filter(q => q.topic === levelData.topic);
}

// 随机获取N道题
export function getRandomQuestions(count, excludeIds = []) {
  const available = questions.filter(q => !excludeIds.includes(q.id));
  const shuffled = [...available].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

// 获取单题
export function getQuestionById(id) {
  return questions.find(q => q.id === id);
}

// 按题型统计
export function getQuestionsByType(type) {
  return questions.filter(q => q.type === type);
}

// 所有主题列表
export const allTopics = [
  'food', 'animals', 'family', 'home', 'school', 'colors',
  'weather', 'numbers', 'body', 'jobs', 'science',
  'earth', 'time', 'clothing', 'transport', 'sports',
  'feelings', 'nature', 'clothes', 'daily',
  'teaparty', 'billygoats', 'littlepigs', 'transport',
  'undersea', 'vegetables', 'winter', 'police', 'recycling',
  'sleepingbeauty', 'snowwhite', 'space', 'superhero', 'bearhunt',
  'character', 'emotion', 'cinderella', 'clothes', 'desertanimals',
  'dinosaurs', 'farmanimals', 'firebrigade', 'food', 'forces',
  'fruit', 'goldilocks', 'jackbeanstalk', 'jungle', 'redridinghood',
  'lostfound', 'bedroom', 'bathroom', 'lounge', 'kitchen',
  'diningroom', 'garden', 'jobs1', 'jobs2', 'pets', 'pirates',
  'polaranimals', 'shapes', 'peelegg', 'snack', 'washhair',
  'eatathome', 'washingdishes', 'summersweat', 'wastesorting', 'housework'
];

// 所有知识点标签
export const allSkillDetails = [
  '食物类词汇', '动物类词汇', '家庭成员词汇', '学校相关词汇',
  '天气类词汇', '职业类词汇', '数字词汇', '颜色词汇',
  '第三人称单数', 'be动词用法', '现在进行时', '过去式变化规则',
  '不规则过去式', '现在完成时', '被动语态', '虚拟语气',
  '可数/不可数名词', 'there be句型', '祈使句', '宾语从句',
  '短文理解', '听力辨析', '日常问候', '自我介绍', '问答练习',
  '茶会词汇', '故事词汇', '交通词汇', '海底生物', '蔬菜词汇',
  '冬天词汇', '环保词汇', '太空词汇', '超级英雄词汇', '性格形容词',
  '情绪形容词', '衣物词汇', '沙漠动物', '恐龙词汇', '农场动物',
  '消防词汇', '力与运动', '水果词汇', '丛林动物', '失物招领',
  '卧室物品', '浴室物品', '客厅物品', '厨房物品', '餐厅物品',
  '花园词汇', '宠物词汇', '海盗词汇', '极地动物', '形状词汇',
  '日常生活', '零食词汇', '洗护词汇', '用餐词汇', '家务词汇', '夏天词汇'
];
