/**
 * wrongbook.js — 错题本模块
 */

import { loadState, saveState } from './state.js';
import { addDays, today } from '../utils/dateUtils.js';

// 错题本每条记录结构
// {
//   questionId: string,
//   wrongCount: number,
//   lastWrongDate: string,
//   lastCorrectDate: string | null,
//   consecutiveCorrect: number,
//   skill: string,
//   skillDetail: string,
//   topic: string,
//   nextReviewDate: string | null
// }

// 添加错题
export function addWrong(question) {
  const state = loadState();
  const existing = state.wrongbook.find(w => w.questionId === question.id);

  if (existing) {
    existing.wrongCount++;
    existing.lastWrongDate = today();
    existing.consecutiveCorrect = 0;
    existing.nextReviewDate = today(); // 立即复习
  } else {
    state.wrongbook.push({
      questionId: question.id,
      wrongCount: 1,
      lastWrongDate: today(),
      lastCorrectDate: null,
      consecutiveCorrect: 0,
      skill: question.skill,
      skillDetail: question.skillDetail,
      topic: question.topic,
      nextReviewDate: today()
    });
  }

  saveState(state);
}

// 获取错题本（排序后）
export function getWrongbook() {
  const state = loadState();
  return [...state.wrongbook].sort((a, b) => {
    // 优先：错误次数多的 + 到期该复习的
    if (b.wrongCount !== a.wrongCount) return b.wrongCount - a.wrongCount;
    return new Date(a.nextReviewDate) - new Date(b.nextReviewDate);
  });
}

// 标记为已掌握（连续答对5次）
export function markAsMastered(questionId) {
  const state = loadState();
  const entry = state.wrongbook.find(w => w.questionId === questionId);

  if (entry) {
    entry.consecutiveCorrect++;
    entry.lastCorrectDate = today();

    if (entry.consecutiveCorrect >= 5) {
      // 连续答对5次，移出错题本
      state.wrongbook = state.wrongbook.filter(w => w.questionId !== questionId);
    } else {
      // 更新下次复习日期
      entry.nextReviewDate = calculateNextReview(entry);
    }
  }

  saveState(state);
}

// 手动从错题本移除
export function removeWrong(questionId) {
  const state = loadState();
  state.wrongbook = state.wrongbook.filter(w => w.questionId !== questionId);
  saveState(state);
}

// 计算间隔重复的下次复习日期
export function calculateNextReview(entry) {
  const baseIntervals = [1, 3, 7, 14, 30, 60];
  const idx = Math.min(entry.consecutiveCorrect, baseIntervals.length - 1);
  return addDays(today(), baseIntervals[idx]);
}

// 获取需要复习的错题（到期了）
export function getDueWrongs() {
  const wrongbook = getWrongbook();
  const todayStr = today();
  return wrongbook.filter(w => {
    if (!w.nextReviewDate) return true;
    return new Date(w.nextReviewDate) <= new Date(todayStr);
  });
}

// 获取错题数量
export function getWrongCount() {
  const state = loadState();
  return state.wrongbook.length;
}

// 根据ID获取错题详情
export function getWrongById(questionId) {
  const state = loadState();
  return state.wrongbook.find(w => w.questionId === questionId) || null;
}
