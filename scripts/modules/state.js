/**
 * state.js — 游戏状态单一数据源
 */

import { save, load } from './storage.js';

const SAVE_KEY = 'learning_rpg_save';

// 默认存档结构
function createDefaultState() {
  return {
    profile: {
      name: '',
      grade: 3,
      pet: 'cat',
      createdAt: null
    },
    progress: {
      xp: 0,
      level: 1,
      unlockedLevels: [1],
      levelStars: {},
      title: '魔法学徒'
    },
    pets: {
      current: { hp: 100, maxHp: 100 }
    },
    stats: {
      totalQuestions: 0,
      correctCount: 0,
      streakDays: 0,
      lastPlayDate: null
    },
    achievements: [],
    wrongbook: [],
    reviewPoints: 0,
    weeklyReport: null
  };
}

// 加载存档
export function loadState() {
  const saved = load(SAVE_KEY);
  if (saved) {
    // 浅合并：存档有数据则用存档，存档没有则用默认值
    return { ...createDefaultState(), ...saved };
  }
  return createDefaultState();
}

// 保存存档
export function saveState(state) {
  save(SAVE_KEY, state);
}

// 更新存档指定路径
export function updateState(path, value) {
  const state = loadState();
  const keys = path.split('.');
  let current = state;

  for (let i = 0; i < keys.length - 1; i++) {
    if (current[keys[i]] === undefined) {
      current[keys[i]] = {};
    }
    current = current[keys[i]];
  }

  current[keys[keys.length - 1]] = value;
  saveState(state);
  return state;
}

// 重置存档
export function resetState() {
  const defaultState = createDefaultState();
  saveState(defaultState);
  return defaultState;
}

// 获取当前宠物HP
export function getPetHp(state) {
  return state.pets.current.hp;
}

// 扣减宠物HP
export function damagePet(state, amount) {
  state.pets.current.hp = Math.max(0, state.pets.current.hp - amount);
  saveState(state);
  return state;
}

// 重置宠物HP到满
export function healPet(state) {
  state.pets.current.hp = state.pets.current.maxHp;
  saveState(state);
  return state;
}

// 添加XP
export function addXp(state, amount) {
  state.progress.xp += amount;
  // 简单升级逻辑：每200XP升1级
  state.progress.level = Math.floor(state.progress.xp / 200) + 1;
  saveState(state);
  return state;
}

// 解锁关卡
export function unlockLevel(state, levelId) {
  if (!state.progress.unlockedLevels.includes(levelId)) {
    state.progress.unlockedLevels.push(levelId);
    state.progress.unlockedLevels.sort((a, b) => a - b);
    saveState(state);
  }
  return state;
}

// 设置关卡通关星级
export function setLevelStars(state, levelId, stars) {
  const current = state.progress.levelStars[levelId] || 0;
  if (stars > current) {
    state.progress.levelStars[levelId] = stars;
    saveState(state);
  }
  return state;
}