/**
 * assessment.js — 阶段测评模块
 */

import { loadState, saveState } from '../modules/state.js';
import { levels, assessmentLevels, getLevelById } from '../data/levels.js';
import { questions, getQuestionsForLevel } from '../data/questions.js';
import { showScreen } from '../modules/renderer.js';
import { speakWord } from '../modules/audio.js';

let assessmentState = null;
let isProcessingAssessment = false;

export function startAssessment(assessmentId) {
  const level = getLevelById(assessmentId);
  if (!level) return;

  // 获取本测评范围的题目
  let pool = [];

  if (assessmentId === 17) {
    // 知识评估1：基于1-3关+9-10关的题目
    pool = questions.filter(q =>
      ['food', 'animals', 'family', 'home', 'school', 'colors', 'farmanimals', 'teaparty', 'billygoats'].includes(q.topic) &&
      q.grades.includes(3)
    );
  } else if (assessmentId === 18) {
    // 知识评估2：基于4-6关+11-13关的题目
    pool = questions.filter(q =>
      ['weather', 'numbers', 'body', 'jobs', 'science', 'shapes', 'dinosaurs', 'polaranimals'].includes(q.topic) &&
      (q.grades.includes(4) || q.grades.includes(5))
    );
  } else if (assessmentId === 19) {
    // 知识评估3：全部范围
    pool = questions.filter(q => q.grades.includes(5) || q.grades.includes(6));
  }

  if (pool.length === 0) {
    pool = questions.slice(0, 15);
  }

  const shuffled = [...pool].sort(() => Math.random() - 0.5);
  const count = Math.min(level.questionsPerBattle, shuffled.length);
  const assessmentQuestions = shuffled.slice(0, count);

  assessmentState = {
    assessmentId,
    level,
    questions: assessmentQuestions,
    currentIndex: 0,
    correctCount: 0,
    questionResults: [],
    timer: null,
    timeLeft: level.timePerQuestion || 20
  };

  showScreen('assessment-screen');
  renderAssessmentQuestion(assessmentQuestions[0], 0, assessmentQuestions.length);
  initAssessmentHandlers();
  startAssessmentTimer();
}

let assessmentTimer = null;
let assessmentTimeLeft = 0;

function startAssessmentTimer() {
  clearInterval(assessmentTimer);
  assessmentTimer = null;
  assessmentTimeLeft = assessmentState.level.timePerQuestion || 20;

  assessmentTimer = setInterval(() => {
    if (!assessmentState) {
      clearInterval(assessmentTimer);
      assessmentTimer = null;
      return;
    }

    assessmentTimeLeft--;

    const timerEl = document.getElementById('assessment-timer');
    if (timerEl) {
      timerEl.textContent = `⏱️ ${assessmentTimeLeft}s`;
      timerEl.className = 'timer-display';
      if (assessmentTimeLeft <= 5) timerEl.classList.add('timer-danger');
      else if (assessmentTimeLeft <= 10) timerEl.classList.add('timer-warning');
    }

    if (assessmentTimeLeft <= 0) {
      clearInterval(assessmentTimer);
      assessmentTimer = null;
      handleAssessmentAnswer(-1); // -1 表示超时
    }
  }, 1000);
}

function stopAssessmentTimer() {
  clearInterval(assessmentTimer);
  assessmentTimer = null;
}

function renderAssessmentQuestion(question, index, total) {
  const container = document.getElementById('assessment-content');
  if (!container) return;

  let questionUI = '';

  if (question.type === 'choice' || question.type === 'listen' || question.type === 'reading') {
    questionUI = `
      <div class="choices-grid" id="assessment-choices">
        ${question.choices.map((choice, i) => `
          <button class="choice-btn" data-choice="${i}">${choice}</button>
        `).join('')}
      </div>
    `;
  } else if (question.type === 'fill' || question.type === 'spell' || question.type === 'grammar' || question.type === 'translate') {
    questionUI = `
      <div class="fill-area">
        <input type="text" class="form-input" id="assessment-input" placeholder="输入答案..." autocomplete="off">
        <button class="btn" id="assessment-submit">确认</button>
      </div>
    `;
  } else if (question.type === 'oral') {
    questionUI = `
      <div class="oral-area">
        <button class="btn" id="assessment-oral-play">🔊 播放</button>
      </div>
    `;
  }

  container.innerHTML = `
    <div class="assessment-header">
      <button class="btn-back btn-sm" id="assessment-back">← 返回</button>
      <div class="assessment-title">📋 ${assessmentState.level.name}</div>
      <div class="assessment-timer" id="assessment-timer">⏱️ ${assessmentTimeLeft}s</div>
      <div class="assessment-progress">${index + 1} / ${total}</div>
    </div>
    <div class="progress-indicator">
      ${Array.from({ length: total }, (_, i) => {
        let cls = 'progress-dot';
        if (i === index) cls += ' current';
        return `<div class="${cls}"></div>`;
      }).join('')}
    </div>
    <div class="question-area">
      <div class="question-text">${question.q}</div>
      ${questionUI}
    </div>
  `;

  // 听力题显示播放按钮
  if (question.type === 'listen' && question.choices) {
    const timerEl = document.getElementById('assessment-timer');
    if (timerEl) {
      timerEl.insertAdjacentHTML('beforebegin', `<button class="btn btn-sm" id="listen-play">🔊 播放</button> `);
    }
  }
}

function initAssessmentHandlers() {
  const container = document.getElementById('assessment-content');
  if (!container) return;

  container.onclick = function(e) {
    if (e.target.closest('#assessment-back')) {
      stopAssessmentTimer();
      assessmentState = null;
      showScreen('map-screen');
      return;
    }

    // 听力播放按钮
    const listenPlayBtn = e.target.closest('#listen-play');
    if (listenPlayBtn) {
      const q = assessmentState.questions[assessmentState.currentIndex];
      if (q.choices && q.choices[q.answer]) {
        speakWord(q.choices[q.answer]);
      }
      return;
    }

    if (isProcessingAssessment) return;

    const choiceBtn = e.target.closest('.choice-btn');
    if (choiceBtn) {
      const choiceIndex = parseInt(choiceBtn.dataset.choice);
      handleAssessmentAnswer(choiceIndex);
      return;
    }

    if (e.target.closest('#assessment-submit')) {
      const inputEl = document.getElementById('assessment-input');
      if (inputEl) {
        handleAssessmentAnswer(null, inputEl.value);
      }
      return;
    }

    if (e.target.closest('#assessment-oral-play')) {
      const q = assessmentState.questions[assessmentState.currentIndex];
      if (q.answer) speakWord(q.answer);
      return;
    }
  };

  const inputEl = document.getElementById('assessment-input');
  if (inputEl) {
    inputEl.onkeydown = function(e) {
      if (e.key === 'Enter' && !isProcessingAssessment) {
        handleAssessmentAnswer(null, inputEl.value);
      }
    };
  }
}

async function handleAssessmentAnswer(choiceIndex, textAnswer = null) {
  if (!assessmentState || isProcessingAssessment) return;
  isProcessingAssessment = true;

  stopAssessmentTimer();

  const { questions, currentIndex, level } = assessmentState;
  const question = questions[currentIndex];

  const isTimeout = choiceIndex === -1;

  let correct = false;
  if (textAnswer !== null) {
    const userAns = textAnswer.toLowerCase().trim().replace(/\s+/g, ' ');
    const correctAns = question.answer.toLowerCase().trim().replace(/\s+/g, ' ');
    correct = userAns === correctAns;
  } else if (!isTimeout) {
    correct = choiceIndex === question.answer;
  }

  if (question.type === 'choice' || question.type === 'listen' || question.type === 'reading') {
    const choiceBtns = document.querySelectorAll('.choice-btn');
    choiceBtns.forEach((btn, i) => {
      btn.disabled = true;
      if (i === question.answer) btn.classList.add('correct');
      if (!isTimeout && i === choiceIndex && !correct) btn.classList.add('wrong');
    });
  } else if (textAnswer !== null) {
    const inputEl = document.getElementById('assessment-input');
    if (inputEl) {
      inputEl.disabled = true;
      inputEl.style.backgroundColor = correct ? 'rgba(82,196,26,0.3)' : 'rgba(255,77,79,0.3)';
      inputEl.style.borderColor = correct ? '#52c41a' : '#ff4d4f';
    }
  }

  if (correct) assessmentState.correctCount++;

  await sleep(800);

  assessmentState.currentIndex++;
  if (assessmentState.currentIndex >= questions.length) {
    showAssessmentResult();
  } else {
    startAssessmentTimer();
    renderAssessmentQuestion(
      questions[assessmentState.currentIndex],
      assessmentState.currentIndex,
      questions.length
    );
    initAssessmentHandlers();
  }

  isProcessingAssessment = false;
}

async function sleep(ms) {
  return new Promise(r => setTimeout(r, ms));
}

function showAssessmentResult() {
  const { correctCount, questions, assessmentId, level } = assessmentState;
  const total = questions.length;
  const rate = Math.round((correctCount / total) * 100);
  const passed = rate >= 60; // 测评60%及格

  // 更新存档
  const state = loadState();

  if (passed) {
    // 测评通过：解锁下一关 + 给复习积分
    state.reviewPoints = (state.reviewPoints || 0) + 50;

    // 解锁对应关卡
    const nextLevelId = assessmentId + 1;
    if (!state.progress.unlockedLevels.includes(nextLevelId)) {
      state.progress.unlockedLevels.push(nextLevelId);
    }
  }

  state.stats.totalQuestions += total;
  state.stats.correctCount += correctCount;
  saveState(state);

  const container = document.getElementById('assessment-content');
  if (!container) return;

  // 根据测评编号显示称号
  let badge = '';
  if (assessmentId === 11) {
    badge = rate >= 90 ? '金龙' : rate >= 70 ? '银龙' : '铜龙';
  }

  container.innerHTML = `
    <div class="result-header">
      <div class="result-icon">${passed ? '🎉' : '😢'}</div>
      <div class="result-title">${passed ? '测评通过！' : '还需努力'}</div>
    </div>
    <div class="result-stats">
      <div class="result-detail">答对 ${correctCount} / ${total} 题</div>
      <div class="result-xp">正确率 ${rate}%</div>
      ${badge ? `<div class="result-title">获得称号：${badge}</div>` : ''}
      <div class="result-xp">${passed ? '+50 复习积分' : '未获得奖励'}</div>
    </div>
    <div class="result-buttons">
      <button class="btn btn-secondary" id="assessment-back-level">返回冒险地图</button>
    </div>
  `;

  container.onclick = function(e) {
    if (e.target.closest('#assessment-back-level')) {
      assessmentState = null;
      showScreen('map-screen');
    }
  };
}

export function isAssessmentUnlocked(assessmentId, state) {
  // 知识评估1需要通关第8关，知识评估2需要通关第12关，知识评估3需要通关第16关
  if (assessmentId === 17) {
    return state.progress.levelStars[8] !== undefined;
  } else if (assessmentId === 18) {
    return state.progress.levelStars[12] !== undefined;
  } else if (assessmentId === 19) {
    return state.progress.levelStars[16] !== undefined;
  }
  return false;
}