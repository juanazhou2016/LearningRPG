/**
 * achievements.js — 成就系统
 */

import { loadState, saveState } from './state.js';

// 15个成就定义
export const achievements = [
  { id: 'first_level', name: '初次冒险', desc: '通关任意关卡', icon: '🎯' },
  { id: 'streak_3', name: '连胜3天', desc: '连续3天完成学习', icon: '🔥' },
  { id: 'streak_7', name: '连续7天', desc: '连续7天完成学习', icon: '💎' },
  { id: 'streak_30', name: '坚持一个月', desc: '连续30天完成学习', icon: '👑' },
  { id: 'correct_10', name: '10连对', desc: '连续答对10题', icon: '⭐' },
  { id: 'correct_20', name: '20连对', desc: '连续答对20题', icon: '🌟' },
  { id: 'correct_50', name: '50连对', desc: '连续答对50题', icon: '💫' },
  { id: 'no_damage', name: '完美通关', desc: '宠物HP不减通关', icon: '🛡️' },
  { id: 'total_100', name: '百题斩', desc: '累计答对100题', icon: '💯' },
  { id: 'total_500', name: '五百题', desc: '累计答对500题', icon: '🎖️' },
  { id: 'total_1000', name: '千题王', desc: '累计答对1000题', icon: '🏆' },
  { id: 'all_levels', name: '征服大陆', desc: '通关所有关卡', icon: '🌍' },
  { id: 'all_pets', name: '宠物收藏家', desc: '集齐所有宠物', icon: '🐾' },
  { id: 'master_10', name: '错题大师', desc: '将10道错题练至掌握', icon: '📚' },
  { id: 'review_50', name: '复习达人', desc: '使用错题本练习50次', icon: '🔄' }
];

// 检查成就解锁
export function checkAchievements(event, data) {
  const state = loadState();
  const earned = state.achievements || [];

  let newAchievement = null;

  switch (event) {
    case 'level_complete':
      // 通关任意关卡
      if (!earned.includes('first_level')) {
        newAchievement = 'first_level';
      }
      // 完美通关
      if (data.petHp === data.maxPetHp && !earned.includes('no_damage')) {
        newAchievement = 'no_damage';
      }
      break;

    case 'streak_update':
      // 更新连续学习天数
      if (data.streakDays >= 30 && !earned.includes('streak_30')) {
        newAchievement = 'streak_30';
      } else if (data.streakDays >= 7 && !earned.includes('streak_7')) {
        newAchievement = 'streak_7';
      } else if (data.streakDays >= 3 && !earned.includes('streak_3')) {
        newAchievement = 'streak_3';
      }
      break;

    case 'correct_streak':
      // 连续答对
      if (data.count >= 50 && !earned.includes('correct_50')) {
        newAchievement = 'correct_50';
      } else if (data.count >= 20 && !earned.includes('correct_20')) {
        newAchievement = 'correct_20';
      } else if (data.count >= 10 && !earned.includes('correct_10')) {
        newAchievement = 'correct_10';
      }
      break;

    case 'total_correct':
      // 累计答对
      if (data.total >= 1000 && !earned.includes('total_1000')) {
        newAchievement = 'total_1000';
      } else if (data.total >= 500 && !earned.includes('total_500')) {
        newAchievement = 'total_500';
      } else if (data.total >= 100 && !earned.includes('total_100')) {
        newAchievement = 'total_100';
      }
      break;
  }

  if (newAchievement && !earned.includes(newAchievement)) {
    state.achievements.push(newAchievement);
    saveState(state);
    return getAchievementById(newAchievement);
  }

  return null;
}

export function getAchievementById(id) {
  return achievements.find(a => a.id === id);
}

export function getAllAchievements() {
  const state = loadState();
  const earned = state.achievements || [];

  return achievements.map(a => ({
    ...a,
    earned: earned.includes(a.id)
  }));
}

export function getEarnedAchievements() {
  const state = loadState();
  const earned = state.achievements || [];
  return achievements.filter(a => earned.includes(a.id));
}

export function getUnearnedAchievements() {
  const state = loadState();
  const earned = state.achievements || [];
  return achievements.filter(a => !earned.includes(a.id));
}

// 获取成就解锁进度
export function getAchievementProgress() {
  const state = loadState();
  const earned = state.achievements || [];
  return {
    earned: earned.length,
    total: achievements.length,
    percent: Math.round((earned.length / achievements.length) * 100)
  };
}