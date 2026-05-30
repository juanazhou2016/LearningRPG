/**
 * levels.js — 关卡配置
 */

export const levels = [
  {
    id: 1,
    name: '单词森林',
    icon: '🍎',
    topic: ['food', 'animals'],
    monster: '🐛',
    monsterHp: 30,
    questionsPerBattle: 10,
    timePerQuestion: 20,
    unlockXp: 0
  },
  {
    id: 2,
    name: '家庭小屋',
    icon: '🏠',
    topic: ['family', 'home'],
    monster: '🐜',
    monsterHp: 40,
    questionsPerBattle: 10,
    timePerQuestion: 20,
    unlockXp: 100
  },
  {
    id: 3,
    name: '学校城堡',
    icon: '🏫',
    topic: ['school', 'colors'],
    monster: '🦎',
    monsterHp: 50,
    questionsPerBattle: 10,
    timePerQuestion: 20,
    unlockXp: 250
  },
  {
    id: 4,
    name: '天气山谷',
    icon: '🌤️',
    topic: ['weather', 'numbers'],
    monster: '⛈️',
    monsterHp: 60,
    questionsPerBattle: 10,
    timePerQuestion: 18,
    unlockXp: 450
  },
  {
    id: 5,
    name: '工作城镇',
    icon: '🏥',
    topic: ['jobs', 'body'],
    monster: '🦊',
    monsterHp: 70,
    questionsPerBattle: 10,
    timePerQuestion: 18,
    unlockXp: 700
  },
  {
    id: 6,
    name: '科学山洞',
    icon: '📚',
    topic: ['science', 'colors'],
    monster: '🦇',
    monsterHp: 80,
    questionsPerBattle: 12,
    timePerQuestion: 15,
    unlockXp: 1000
  },
  {
    id: 7,
    name: '地球要塞',
    icon: '🌍',
    topic: ['science', 'earth'],
    monster: '🐙',
    monsterHp: 90,
    questionsPerBattle: 12,
    timePerQuestion: 15,
    unlockXp: 1400
  },
  {
    id: 8,
    name: '王座大厅',
    icon: '🏆',
    topic: 'mixed',
    monster: '🐉',
    monsterHp: 100,
    questionsPerBattle: 15,
    timePerQuestion: 12,
    unlockXp: 1900
  },
  {
    id: 9,
    name: '自然乐园',
    icon: '🌿',
    topic: ['farmanimals', 'jungle', 'desertanimals'],
    monster: '🦁',
    monsterHp: 110,
    questionsPerBattle: 12,
    timePerQuestion: 15,
    unlockXp: 2400
  },
  {
    id: 10,
    name: '故事王国',
    icon: '📖',
    topic: ['cinderella', 'snowwhite', 'goldilocks', 'jackbeanstalk', 'littlepigs', 'billygoats', 'sleepingbeauty'],
    monster: '🦄',
    monsterHp: 120,
    questionsPerBattle: 12,
    timePerQuestion: 15,
    unlockXp: 3000
  },
  {
    id: 11,
    name: '超级英雄',
    icon: '🦸',
    topic: ['superhero', 'police', 'firebrigade'],
    monster: '🦇',
    monsterHp: 130,
    questionsPerBattle: 12,
    timePerQuestion: 15,
    unlockXp: 3700
  },
  {
    id: 12,
    name: '形状王国',
    icon: '⭐',
    topic: ['shapes'],
    monster: '🐸',
    monsterHp: 80,
    questionsPerBattle: 10,
    timePerQuestion: 18,
    unlockXp: 4500
  },
  {
    id: 13,
    name: '史前世界',
    icon: '🦕',
    topic: ['dinosaurs', 'polaranimals'],
    monster: '🦖',
    monsterHp: 140,
    questionsPerBattle: 12,
    timePerQuestion: 15,
    unlockXp: 5400
  },
  {
    id: 14,
    name: '海洋探险',
    icon: '🌊',
    topic: ['undersea', 'pirates'],
    monster: '🐙',
    monsterHp: 150,
    questionsPerBattle: 15,
    timePerQuestion: 12,
    unlockXp: 6400
  },
  {
    id: 15,
    name: '日常生活',
    icon: '🏠',
    topic: ['peelegg', 'snack', 'washhair', 'eatathome', 'washingdishes', 'housework', 'summersweat'],
    monster: '🐷',
    monsterHp: 100,
    questionsPerBattle: 10,
    timePerQuestion: 18,
    unlockXp: 7500
  },
  {
    id: 16,
    name: '太空之旅',
    icon: '🚀',
    topic: ['space', 'forces'],
    monster: '👾',
    monsterHp: 160,
    questionsPerBattle: 15,
    timePerQuestion: 12,
    unlockXp: 8700
  }
];

// 阶段测评关卡
export const assessmentLevels = [
  {
    id: 17,
    name: '知识评估1',
    icon: '📋',
    topic: [1, 2, 3, 9, 10],
    monster: '📝',
    monsterHp: 1,
    questionsPerBattle: 12,
    timePerQuestion: 20,
    unlockXp: null
  },
  {
    id: 18,
    name: '知识评估2',
    icon: '📋',
    topic: [4, 5, 6, 11, 12, 13],
    monster: '📝',
    monsterHp: 1,
    questionsPerBattle: 15,
    timePerQuestion: 18,
    unlockXp: null
  },
  {
    id: 19,
    name: '知识评估3',
    icon: '📋',
    topic: [7, 8, 14, 15, 16],
    monster: '📝',
    monsterHp: 1,
    questionsPerBattle: 15,
    timePerQuestion: 15,
    unlockXp: null
  }
];

export function getLevelById(id) {
  return [...levels, ...assessmentLevels].find(l => l.id === id);
}

export function getNextLevel(currentId) {
  const allLevels = [...levels, ...assessmentLevels];
  const currentIndex = allLevels.findIndex(l => l.id === currentId);
  return currentIndex >= 0 ? allLevels[currentIndex + 1] : null;
}