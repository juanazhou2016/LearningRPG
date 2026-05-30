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
  // 口语题 (oral)
  // =====================
  {
    id: 'g3_oral_001',
    q: '跟读：Hello, my name is Tom.',
    type: 'oral',
    grades: [3],
    topic: 'daily',
    skill: 'oral',
    skillDetail: '日常问候',
    answer: 'hello my name is tom'
  },
  {
    id: 'g3_oral_002',
    q: '跟读：I am nine years old.',
    type: 'oral',
    grades: [3],
    topic: 'daily',
    skill: 'oral',
    skillDetail: '自我介绍',
    answer: 'i am nine years old'
  },
  {
    id: 'g4_oral_001',
    q: '跟读：What is your favourite food?',
    type: 'oral',
    grades: [4],
    topic: 'food',
    skill: 'oral',
    skillDetail: '问答练习',
    answer: 'what is your favourite food'
  },
  {
    id: 'g5_oral_001',
    q: '跟读：Where did you go last weekend?',
    type: 'oral',
    grades: [5],
    topic: 'daily',
    skill: 'oral',
    skillDetail: '过去时态问答',
    answer: 'where did you go last weekend'
  }
];

// =====================
// 题库查询函数
// =====================

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
  'feelings', 'nature', 'clothes', 'daily'
];

// 所有知识点标签
export const allSkillDetails = [
  '食物类词汇', '动物类词汇', '家庭成员词汇', '学校相关词汇',
  '天气类词汇', '职业类词汇', '数字词汇', '颜色词汇',
  '第三人称单数', 'be动词用法', '现在进行时', '过去式变化规则',
  '不规则过去式', '现在完成时', '被动语态', '虚拟语气',
  '可数/不可数名词', 'there be句型', '祈使句', '宾语从句',
  '短文理解', '听力辨析', '日常问候', '自我介绍', '问答练习'
];