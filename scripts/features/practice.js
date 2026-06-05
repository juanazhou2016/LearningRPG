/**
 * practice.js — 练习模式模块
 */

import { loadState, saveState } from '../modules/state.js';
import { levels, getLevelById } from '../data/levels.js';
import { questions, getQuestionsByGrade, getQuestionsByTopic, getRandomQuestions } from '../data/questions.js';
import { showScreen } from '../modules/renderer.js';
import { speakWord } from '../modules/audio.js';
import { addWrong, markAsMastered } from '../modules/wrongbook.js';

let practiceState = null;
let isProcessingPractice = false;

// 练习模式选择界面
export function showPracticeSelect() {
  const container = document.getElementById('practice-content');
  if (!container) return;

  container.innerHTML = `
    <div class="practice-header">
      <button class="btn-back btn-sm" id="practice-back">← 返回</button>
      <div class="practice-title">📝 练习模式</div>
    </div>
    <div class="practice-select">
      <div class="form-group">
        <label class="form-label">选择年级</label>
        <div class="select-grid" id="practice-grade-select">
          <div class="select-item selected" data-value="all"><div class="pet-icon">全部</div></div>
          <div class="select-item" data-value="3"><div class="pet-icon">3</div><div class="pet-name">三年级</div></div>
          <div class="select-item" data-value="4"><div class="pet-icon">4</div><div class="pet-name">四年级</div></div>
          <div class="select-item" data-value="5"><div class="pet-icon">5</div><div class="pet-name">五年级</div></div>
          <div class="select-item" data-value="6"><div class="pet-icon">6</div><div class="pet-name">六年级</div></div>
        </div>
      </div>
      <div class="form-group">
        <label class="form-label">选择题型</label>
        <div class="select-grid" id="practice-type-select">
          <div class="select-item selected" data-value="all"><div class="pet-icon">全部</div></div>
          <div class="select-item" data-value="choice"><div class="pet-icon">☑️</div><div class="pet-name">选择</div></div>
          <div class="select-item" data-value="listen"><div class="pet-icon">🔊</div><div class="pet-name">听力</div></div>
          <div class="select-item" data-value="fill"><div class="pet-icon">✏️</div><div class="pet-name">填空</div></div>
          <div class="select-item" data-value="grammar"><div class="pet-icon">📖</div><div class="pet-name">语法</div></div>
        </div>
      </div>
      <button class="btn" id="start-practice-btn" style="width:100%;margin-top:16px;">开始练习 🚀</button>
    </div>
  `;

  initPracticeSelectHandlers();
}

function initPracticeSelectHandlers() {
  const container = document.getElementById('practice-content');
  if (!container) return;

  container.onclick = function(e) {
    // 返回
    if (e.target.closest('#practice-back')) {
      showScreen('main-menu');
      return;
    }

    // 选中项切换
    const selectItem = e.target.closest('.select-item');
    if (selectItem) {
      const group = selectItem.closest('.select-grid');
      group.querySelectorAll('.select-item').forEach(s => s.classList.remove('selected'));
      selectItem.classList.add('selected');
      return;
    }

    // 开始练习
    if (e.target.closest('#start-practice-btn')) {
      const gradeEl = document.querySelector('#practice-grade-select .selected');
      const typeEl = document.querySelector('#practice-type-select .selected');
      const grade = gradeEl?.dataset.value === 'all' ? null : parseInt(gradeEl?.dataset.value || 'all');
      const type = typeEl?.dataset.value === 'all' ? null : typeEl?.dataset.value;
      startPractice({ grade, type, count: 10 });
      return;
    }
  };
}

export function startPractice(options = {}) {
  const { grade, topic, type, count = 15 } = options;

  // 获取符合条件的题目
  let pool = questions;
  if (grade) {
    pool = pool.filter(q => q.grades.includes(grade));
  }
  if (topic) {
    pool = pool.filter(q => q.topic === topic);
  }
  if (type) {
    pool = pool.filter(q => q.type === type);
  }

  if (pool.length === 0) {
    alert('没有找到符合条件的题目');
    return;
  }

  const shuffled = [...pool].sort(() => Math.random() - 0.5);
  const practiceQuestions = shuffled.slice(0, Math.min(count, pool.length));

  practiceState = {
    questions: practiceQuestions,
    currentIndex: 0,
    correctCount: 0,
    questionResults: []
  };

  showScreen('practice-screen');
  renderPracticeQuestionUI(practiceQuestions[0], 0, practiceQuestions.length);
  initPracticeHandlers();
}

function renderPracticeQuestionUI(question, index, total) {
  const container = document.getElementById('practice-content');
  if (!container) return;

  let questionUI = '';

  if (question.type === 'choice' || question.type === 'reading') {
    questionUI = `
      <div class="choices-grid" id="practice-choices">
        ${question.choices.map((choice, i) => `
          <button class="choice-btn" data-choice="${i}">${choice}</button>
        `).join('')}
      </div>
    `;
  } else if (question.type === 'listen') {
    questionUI = `
      <div class="listen-area">
        <button class="btn listen-btn" id="practice-listen-play">🔊 播放听力</button>
      </div>
      <div class="choices-grid" id="practice-choices">
        ${question.choices.map((choice, i) => `
          <button class="choice-btn" data-choice="${i}">${choice}</button>
        `).join('')}
      </div>
    `;
  } else if (question.type === 'fill' || question.type === 'spell' || question.type === 'grammar' || question.type === 'translate') {
    questionUI = `
      <div class="fill-area">
        <input type="text" class="form-input" id="practice-input" placeholder="输入答案..." autocomplete="off">
        <button class="btn" id="practice-submit">确认</button>
      </div>
    `;
  } else if (question.type === 'oral') {
    questionUI = `
      <div class="oral-area">
        <button class="btn" id="practice-oral-play">🔊 播放</button>
      </div>
    `;
  }

  container.innerHTML = `
    <div class="practice-header">
      <button class="btn-back btn-sm" id="practice-back">← 返回</button>
      <div class="practice-title">📝 练习模式</div>
      <div class="practice-progress">${index + 1} / ${total}</div>
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
}

function initPracticeHandlers() {
  const container = document.getElementById('practice-content');
  if (!container) return;

  container.onclick = function(e) {
    // 返回按钮
    if (e.target.closest('#practice-back')) {
      practiceState = null;
      showScreen('main-menu');
      return;
    }

    if (isProcessingPractice) return;

    // 听力播放按钮
    const listenPlayBtn = e.target.closest('#practice-listen-play');
    if (listenPlayBtn) {
      const q = practiceState.questions[practiceState.currentIndex];
      const wordToSpeak = q.audio || q.choices?.[q.answer];
      if (wordToSpeak) {
        speakWord(wordToSpeak);
      }
      return;
    }

    // 选择类题型
    const choiceBtn = e.target.closest('.choice-btn');
    if (choiceBtn) {
      const choiceIndex = parseInt(choiceBtn.dataset.choice);
      handlePracticeAnswer(choiceIndex);
      return;
    }

    // 填空确认
    if (e.target.closest('#practice-submit')) {
      const inputEl = document.getElementById('practice-input');
      if (inputEl) {
        handlePracticeAnswer(null, inputEl.value);
      }
      return;
    }

    // 口语播放
    if (e.target.closest('#practice-oral-play')) {
      const q = practiceState.questions[practiceState.currentIndex];
      if (q.answer) speakWord(q.answer);
      return;
    }
  };

  // 输入框回车
  const inputEl = document.getElementById('practice-input');
  if (inputEl) {
    inputEl.focus(); // 自动聚焦
    inputEl.onkeydown = function(e) {
      if (e.key === 'Enter' && !isProcessingPractice) {
        handlePracticeAnswer(null, inputEl.value);
      }
    };
  }
}

async function handlePracticeAnswer(choiceIndex, textAnswer = null) {
  if (!practiceState || isProcessingPractice) return;
  isProcessingPractice = true;

  const { questions, currentIndex } = practiceState;
  const question = questions[currentIndex];

  let correct = false;
  if (textAnswer !== null) {
    const userAns = textAnswer.toLowerCase().trim().replace(/\s+/g, ' ');
    const correctAns = question.answer.toLowerCase().trim().replace(/\s+/g, ' ');
    correct = userAns === correctAns;
  } else {
    correct = choiceIndex === question.answer;
  }

  // 显示结果
  if (question.type === 'choice' || question.type === 'listen' || question.type === 'reading') {
    const choiceBtns = document.querySelectorAll('.choice-btn');
    choiceBtns.forEach((btn, i) => {
      btn.disabled = true;
      if (i === question.answer) btn.classList.add('correct');
      if (i === choiceIndex && !correct) btn.classList.add('wrong');
    });
  } else if (textAnswer !== null) {
    const inputEl = document.getElementById('practice-input');
    if (inputEl) {
      inputEl.disabled = true;
      inputEl.style.backgroundColor = correct ? 'rgba(82,196,26,0.3)' : 'rgba(255,77,79,0.3)';
      inputEl.style.borderColor = correct ? '#52c41a' : '#ff4d4f';
    }
    const submitBtn = document.getElementById('practice-submit');
    if (submitBtn) submitBtn.disabled = true;
  }

  practiceState.questionResults.push(correct ? 'correct' : 'wrong');
  if (correct) {
    practiceState.correctCount++;
    // 如果在错题本中，标记为已掌握（连续答对5次移除）
    markAsMastered(question.id);
  } else {
    // 记录错题
    addWrong(question);
  }

  await sleep(800);

  practiceState.currentIndex++;
  if (practiceState.currentIndex >= questions.length) {
    showPracticeResult();
  } else {
    renderPracticeQuestionUI(
      questions[practiceState.currentIndex],
      practiceState.currentIndex,
      questions.length
    );
    initPracticeHandlers();
  }

  isProcessingPractice = false;
}

function showPracticeResult() {
  const { correctCount, questions } = practiceState;
  const total = questions.length;
  const rate = Math.round((correctCount / total) * 100);
  const passed = rate >= 70;

  // 获得复习积分
  const state = loadState();
  state.reviewPoints = (state.reviewPoints || 0) + correctCount * 5;
  state.stats.totalQuestions += total;
  state.stats.correctCount += correctCount;
  saveState(state);

  const container = document.getElementById('practice-content');
  if (!container) return;

  container.innerHTML = `
    <div class="result-header">
      <div class="result-icon">${passed ? '🎉' : '😢'}</div>
      <div class="result-title">${passed ? '练习完成！' : '继续加油！'}</div>
    </div>
    <div class="result-stats">
      <div class="result-detail">答对 ${correctCount} / ${total} 题</div>
      <div class="result-xp">正确率 ${rate}%</div>
      <div class="result-xp">+${correctCount * 5} 复习积分</div>
    </div>
    <div class="result-buttons">
      <button class="btn" id="practice-again">再来一次</button>
      <button class="btn btn-secondary" id="practice-back-menu">返回主菜单</button>
    </div>
  `;

  container.onclick = function(e) {
    if (e.target.closest('#practice-again')) {
      startPractice();
    } else if (e.target.closest('#practice-back-menu')) {
      practiceState = null;
      showScreen('main-menu');
    }
  };
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
