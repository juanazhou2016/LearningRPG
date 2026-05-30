/**
 * analytics.js — 学习数据收集
 */

import { loadState, saveState } from '../modules/state.js';

export function logAnswer(question, correct, timeSpent) {
  const state = loadState();
  state.stats.totalQuestions++;

  if (correct) {
    state.stats.correctCount++;
  }

  // 更新连续学习天数
  const today = new Date().toISOString().split('T')[0];
  if (state.stats.lastPlayDate !== today) {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const yesterdayStr = yesterday.toISOString().split('T')[0];

    if (state.stats.lastPlayDate === yesterdayStr) {
      state.stats.streakDays++;
    } else if (state.stats.lastPlayDate !== today) {
      state.stats.streakDays = 1;
    }
    state.stats.lastPlayDate = today;
  }

  saveState(state);
}

export function getStats() {
  const state = loadState();
  const { totalQuestions, correctCount, streakDays, lastPlayDate } = state.stats;
  const accuracy = totalQuestions > 0 ? Math.round((correctCount / totalQuestions) * 100) : 0;

  return {
    totalQuestions,
    correctCount,
    accuracy,
    streakDays,
    lastPlayDate
  };
}

export function getWeakPoints(limit = 5) {
  const state = loadState();
  const wrongbook = state.wrongbook || [];

  return wrongbook
    .sort((a, b) => {
      // 按错误次数降序，再按距今天数降序
      if (b.wrongCount !== a.wrongCount) return b.wrongCount - a.wrongCount;
      return new Date(b.lastWrongDate) - new Date(a.lastWrongDate);
    })
    .slice(0, limit);
}

export function getProgressTrend(days = 30) {
  // 简化实现：返回近30天每日正确率趋势
  // 实际需要每日记录数据点
  const state = loadState();
  const accuracy = state.stats.totalQuestions > 0
    ? Math.round((state.stats.correctCount / state.stats.totalQuestions) * 100)
    : 0;

  return {
    days,
    trend: Array.from({ length: days }, (_, i) => ({
      day: i,
      accuracy: i === days - 1 ? accuracy : null // 今天有数据，历史为null
    }))
  };
}