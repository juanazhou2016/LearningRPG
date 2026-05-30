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
  }
];

// 阶段测评关卡
export const assessmentLevels = [
  {
    id: 9,
    name: '知识评估1',
    icon: '📋',
    topic: [1, 2, 3],
    monster: '📝',
    monsterHp: 1,
    questionsPerBattle: 10,
    timePerQuestion: 20,
    unlockXp: null
  },
  {
    id: 10,
    name: '知识评估2',
    icon: '📋',
    topic: [4, 5, 6],
    monster: '📝',
    monsterHp: 1,
    questionsPerBattle: 12,
    timePerQuestion: 18,
    unlockXp: null
  },
  {
    id: 11,
    name: '知识评估3',
    icon: '📋',
    topic: 'all',
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