/**
 * renderer.js — 视图渲染引擎
 * 负责所有屏幕的显示/切换/动画
 */

import { getAllAchievements, getAchievementProgress } from './achievements.js';
import { getWrongbook } from './wrongbook.js';
import { getQuestionById } from '../data/questions.js';
import { loadState } from './state.js';
import { renderParentReport as doRenderParentReport } from '../features/parentReport.js';
import { assessmentLevels } from '../data/levels.js';

let currentScreen = null;

// 切换屏幕
export function showScreen(screenId, data = {}) {
  // 隐藏当前屏幕
  if (currentScreen) {
    const prev = document.getElementById(currentScreen);
    if (prev) {
      prev.classList.remove('active');
      prev.style.display = '';
    }
  }

  // 显示新屏幕
  const next = document.getElementById(screenId);
  if (!next) {
    console.error(`[renderer] 屏幕不存在: ${screenId}`);
    return;
  }

  next.style.display = '';
  next.classList.add('active');
  requestAnimationFrame(() => {
    next.style.opacity = '1';
  });

  currentScreen = screenId;

  // 执行屏幕初始化
  if (screenHandlers[screenId]) {
    screenHandlers[screenId](data);
  }
}

// 屏幕初始化处理器
const screenHandlers = {};

// 注册屏幕初始化处理器
export function onScreenReady(screenId, handler) {
  screenHandlers[screenId] = handler;
}

// 设置加载进度
export function setLoadingProgress(percent, tip = '') {
  const progress = document.getElementById('loading-progress');
  const tipEl = document.getElementById('loading-tip');
  if (progress) progress.style.width = `${percent}%`;
  if (tipEl && tip) tipEl.textContent = tip;
}

// 显示主菜单
export function renderMainMenu(state) {
  const container = document.getElementById('main-menu-content');
  if (!container) return;

  const petEmojis = { cat: '🐱', dog: '🐶', rabbit: '🐰', frog: '🐸', fox: '🦊', panda: '🐼' };
  const petEmoji = petEmojis[state.profile.pet] || '🐱';

  container.innerHTML = `
    <div class="menu-header">
      <div class="menu-title">🌍 学习大陆冒险</div>
      <div class="menu-subtitle">欢迎回来，${state.profile.name}！</div>
    </div>
    <div class="player-info">
      <div class="player-pet">${petEmoji}</div>
      <div class="player-stats">
        <div class="stat-xp">⭐ ${state.progress.xp} XP</div>
        <div class="stat-level">Lv.${state.progress.level} · ${state.progress.title}</div>
      </div>
    </div>
    <div class="menu-buttons">
      <button class="menu-btn" data-action="adventure">
        <span class="icon">🎮</span>
        <span>冒险模式</span>
      </button>
      <button class="menu-btn" data-action="practice">
        <span class="icon">📝</span>
        <span>练习模式</span>
      </button>
      <button class="menu-btn" data-action="wrongbook">
        <span class="icon">📋</span>
        <span>错题本</span>
        ${state.wrongbook.length > 0 ? `<span class="badge">${state.wrongbook.length}</span>` : ''}
      </button>
      <button class="menu-btn" data-action="achievements">
        <span class="icon">🏆</span>
        <span>成就</span>
      </button>
      <button class="menu-btn" data-action="parent-report">
        <span class="icon">👨‍👩‍👧</span>
        <span>家长报告</span>
      </button>
      <button class="menu-btn" data-action="settings">
        <span class="icon">⚙️</span>
        <span>设置</span>
      </button>
    </div>
  `;
}

// 显示关卡地图
export function renderMap(state, levels) {
  const container = document.getElementById('map-content');
  if (!container) return;

  let html = `
    <div class="map-header">
      <button class="btn-back" data-action="back-to-menu">← 返回</button>
      <div class="map-title">🗺️ 冒险地图</div>
      <div class="xp-display">⭐ ${state.progress.xp} XP</div>
    </div>
    <div class="level-grid">
  `;

  const allLevels = [...levels, ...assessmentLevels];

  for (const level of allLevels) {
    const unlocked = state.progress.unlockedLevels.includes(level.id);
    const completed = state.progress.levelStars[level.id] !== undefined;
    const stars = state.progress.levelStars[level.id] || 0;
    const starsDisplay = completed ? '⭐'.repeat(stars) + '☆'.repeat(3 - stars) : '';

    let className = 'level-card';
    if (completed) className += ' completed';
    else if (unlocked) className += ' unlocked';
    else className += ' locked';

    html += `
      <div class="${className}" data-level="${level.id}">
        <div class="level-icon">${unlocked ? level.icon : '🔒'}</div>
        <div class="level-name">${level.name}</div>
        ${unlocked ? `<div class="level-xp">${level.unlockXp !== null ? level.unlockXp + ' XP' : ''}</div>` : ''}
        ${completed ? `<div class="stars">${starsDisplay}</div>` : ''}
      </div>
    `;
  }

  html += `</div>`;
  container.innerHTML = html;
}

// 替换 [audio:xxx] 为播放按钮
function replaceAudioHint(text, audioWord) {
  return text.replace(/\[audio:(\w+)\]/g, (match, word) => {
    return `<button class="btn listen-btn audio-hint-btn" data-audio="${word}">🔊 听发音</button>`;
  });
}

function renderAudioButton(word) {
  return `<button class="btn listen-btn audio-hint-btn" data-audio="${word}">🔊 听发音</button>`;
}

// 显示战斗界面
export function renderBattle(state, battleData) {
  const { level, question, questionIndex, totalQuestions, petHp, maxPetHp, monsterHp, maxMonsterHp, timeLeft } = battleData;

  const petEmojis = { cat: '🐱', dog: '🐶', rabbit: '🐰', frog: '🐸', fox: '🦊', panda: '🐼' };
  const petEmoji = petEmojis[state.profile.pet] || '🐱';

  const petHpPercent = (petHp / maxPetHp) * 100;
  const monsterHpPercent = (monsterHp / maxMonsterHp) * 100;
  const petHpClass = petHpPercent < 30 ? 'danger' : petHpPercent < 60 ? 'warning' : '';

  const timerClass = timeLeft <= 5 ? 'timer-danger' : timeLeft <= 10 ? 'timer-warning' : '';

  const container = document.getElementById('battle-content');
  if (!container) return;

  // 处理题目中的 [audio:xxx] 提示
  if (!question || !question.q) return;

  const questionText = question.q.replace(/\[audio:(\w+)\]/g, (match, word) => {
    return `<button class="btn listen-btn audio-hint-btn" data-audio="${word}">[audio]</button>`;
  });

  // 根据题型渲染不同UI
  let questionUI = '';
  if (question.type === 'choice') {
    // 检查题目文本是否包含音频提示
    const hasAudioHint = question.q.includes('[audio:');
    questionUI = `
      ${hasAudioHint ? `<div class="listen-area" style="margin-bottom:16px;"></div>` : ''}
      <div class="choices-grid" id="choices-grid">
        ${question.choices.map((choice, i) => `
          <button class="choice-btn" data-choice="${i}">${choice}</button>
        `).join('')}
      </div>
    `;
  } else if (question.type === 'listen') {
    questionUI = `
      <div class="listen-area">
        <button class="btn listen-btn" id="listen-play">🔊 播放听力</button>
      </div>
      <div class="choices-grid" id="choices-grid">
        ${question.choices.map((choice, i) => `
          <button class="choice-btn" data-choice="${i}">${choice}</button>
        `).join('')}
      </div>
    `;
  } else if (question.type === 'fill' || question.type === 'spell' || question.type === 'grammar') {
    questionUI = `
      <div class="fill-area">
        <input type="text" class="form-input" id="fill-input" placeholder="输入答案..." autocomplete="off">
        <button class="btn" id="fill-submit">确认</button>
      </div>
    `;
  } else if (question.type === 'translate') {
    questionUI = `
      <div class="fill-area">
        <input type="text" class="form-input" id="fill-input" placeholder="输入翻译..." autocomplete="off">
        <button class="btn" id="fill-submit">确认</button>
      </div>
    `;
  } else if (question.type === 'reading') {
    questionUI = `
      <div class="question-text" style="font-size:14px;color:#a0a0b0;margin-bottom:16px;white-space:pre-wrap;">${question.q.split('\n\n')[0]}</div>
      <div class="question-text" style="font-size:18px;margin-bottom:16px;">${question.q.split('\n\n')[1] || ''}</div>
      <div class="choices-grid" id="choices-grid">
        ${question.choices.map((choice, i) => `
          <button class="choice-btn" data-choice="${i}">${choice}</button>
        `).join('')}
      </div>
    `;
  } else if (question.type === 'oral') {
    questionUI = `
      <div class="oral-area">
        <button class="btn" id="oral-play">🔊 播放</button>
        <button class="btn btn-secondary" id="oral-record">🎤 跟读</button>
      </div>
    `;
  }

  container.innerHTML = `
    <div class="battle-hud">
      <button class="btn-back btn-sm" data-action="back-to-map">← 返回</button>
      <div class="hud-left">
        <div class="pet-status">
          <span class="pet-avatar">${petEmoji}</span>
          <div class="pet-hp-bar">
            <div class="pet-hp-fill ${petHpClass}" style="width: ${petHpPercent}%"></div>
          </div>
        </div>
      </div>
      <div class="hud-right">
        <div class="monster-status">
          <div class="monster-avatar">${level.monster}</div>
          <div class="monster-name">${level.name}</div>
          <div class="monster-hp-bar">
            <div class="monster-hp-fill" style="width: ${monsterHpPercent}%"></div>
          </div>
        </div>
      </div>
    </div>

    <div class="progress-indicator">
      ${Array.from({ length: totalQuestions }, (_, i) => {
        let cls = 'progress-dot';
        if (i === questionIndex) cls += ' current';
        return `<div class="${cls}"></div>`;
      }).join('')}
    </div>

    <div class="timer-display ${timerClass}" id="timer-display">
      ⏱️ ${timeLeft}s
    </div>

    <div class="question-area">
      <div class="question-text">${questionText}</div>
      ${questionUI}
    </div>

    <div class="battle-footer">
      题目 ${questionIndex + 1} / ${totalQuestions}
    </div>
  `;
}

// 显示战斗结果
export function renderBattleResult(result) {
  const { passed, correctCount, totalQuestions, stars, xpGained, newUnlockedLevel } = result;

  const container = document.getElementById('battle-result-content');
  if (!container) return;

  container.innerHTML = `
    <div class="result-header">
      <div class="result-icon">${passed ? '🎉' : '😢'}</div>
      <div class="result-title">${passed ? '通关成功！' : '挑战失败'}</div>
    </div>
    <div class="result-stats">
      <div class="result-stars">${'⭐'.repeat(stars)}${'☆'.repeat(3 - stars)}</div>
      <div class="result-detail">答对 ${correctCount} / ${totalQuestions} 题</div>
      <div class="result-xp">+${xpGained} XP</div>
    </div>
    ${newUnlockedLevel ? `
      <div class="result-unlock">
        🔓 解锁新关卡：${newUnlockedLevel.name}
      </div>
    ` : ''}
    <div class="result-buttons">
      <button class="btn" data-action="retry-battle">再挑战一次</button>
      <button class="btn btn-secondary" data-action="back-to-map">返回地图</button>
      <button class="btn btn-secondary" data-action="back-to-menu">返回主菜单</button>
    </div>
  `;
}

// 显示角色创建
export function renderCreateScreen() {
  const container = document.getElementById('create-content');
  if (!container) return;

  const pets = [
    { id: 'cat', emoji: '🐱', name: '小猫', type: '速度型', bonus: '连击+20%' },
    { id: 'dog', emoji: '🐶', name: '小狗', type: '防御型', bonus: '受伤-15%' },
    { id: 'rabbit', emoji: '🐰', name: '小兔', type: '幸运型', bonus: '暴击+15%' },
    { id: 'frog', emoji: '🐸', name: '青蛙', type: '智慧型', bonus: 'XP+10%' },
    { id: 'fox', emoji: '🦊', name: '狐狸', type: '技巧型', bonus: '时间+5秒' },
    { id: 'panda', emoji: '🐼', name: '熊猫', type: '均衡型', bonus: '全+5%' }
  ];

  container.innerHTML = `
    <div class="create-title">创建你的冒险角色</div>
    <div class="form-group">
      <label class="form-label">起个名字</label>
      <input class="form-input" type="text" id="player-name" placeholder="请输入姓名" maxlength="10">
    </div>
    <div class="form-group">
      <label class="form-label">选择年级</label>
      <div class="select-grid" data-field="grade">
        <div class="select-item selected" data-value="3"><div class="pet-icon">3</div><div class="pet-name">三年级</div></div>
        <div class="select-item" data-value="4"><div class="pet-icon">4</div><div class="pet-name">四年级</div></div>
        <div class="select-item" data-value="5"><div class="pet-icon">5</div><div class="pet-name">五年级</div></div>
        <div class="select-item" data-value="6"><div class="pet-icon">6</div><div class="pet-name">六年级</div></div>
      </div>
    </div>
    <div class="form-group">
      <label class="form-label">选择宠物伙伴</label>
      <div class="select-grid" data-field="pet">
        ${pets.map(p => `
          <div class="select-item" data-value="${p.id}">
            <div class="pet-icon">${p.emoji}</div>
            <div class="pet-name">${p.name}</div>
          </div>
        `).join('')}
      </div>
    </div>
    <button class="btn" id="start-adventure-btn" style="width:100%;margin-top:16px;">开始冒险 🚀</button>
  `;
}

// 通用弹窗
export function showModal(title, content, buttons = []) {
  const modal = document.getElementById('modal-overlay');
  const modalContent = document.getElementById('modal-content');

  let buttonsHtml = '';
  for (const btn of buttons) {
    buttonsHtml += `<button class="btn ${btn.class || ''}" data-action="${btn.action}">${btn.label}</button>`;
  }

  modalContent.innerHTML = `
    <div class="modal-title">${title}</div>
    <div class="modal-body">${content}</div>
    <div class="modal-buttons">${buttonsHtml}</div>
  `;

  modal.classList.add('active');
}

export function hideModal() {
  const modal = document.getElementById('modal-overlay');
  modal.classList.remove('active');
}

// 更新宠物HP显示
export function updatePetHp(hp, maxHp) {
  const fill = document.querySelector('.pet-hp-fill');
  if (!fill) return;
  const percent = (hp / maxHp) * 100;
  fill.style.width = `${percent}%`;
  fill.className = 'pet-hp-fill';
  if (percent < 30) fill.classList.add('danger');
  else if (percent < 60) fill.classList.add('warning');
}

// 更新怪物HP显示
export function updateMonsterHp(hp, maxHp) {
  const fill = document.querySelector('.monster-hp-fill');
  if (!fill) return;
  fill.style.width = `${(hp / maxHp) * 100}%`;
}

// 显示作答结果（正确/错误动画）
export function showAnswerResult(correct, correctAnswer) {
  const buttons = document.querySelectorAll('.choice-btn');
  buttons.forEach((btn, i) => {
    btn.disabled = true;
    if (i === correctAnswer) {
      btn.classList.add('correct');
    }
  });

  if (!correct) {
    document.querySelector('.question-area').classList.add('shake');
  }
}

// 显示成就界面
export function renderAchievements(state) {
  const container = document.getElementById('achievements-content');
  if (!container) return;

  const achievements = getAllAchievements();
  const progress = getAchievementProgress();

  container.innerHTML = `
    <div class="achievements-header">
      <button class="btn-back btn-sm" data-action="back-to-menu">← 返回</button>
      <div class="achievements-title">🏆 成就系统</div>
      <div class="achievements-progress">${progress.earned}/${progress.total}</div>
    </div>
    <div class="achievements-grid">
      ${achievements.map(a => `
        <div class="achievement-card ${a.earned ? 'earned' : 'locked'}">
          <div class="achievement-icon">${a.icon}</div>
          <div class="achievement-name">${a.name}</div>
          <div class="achievement-desc">${a.desc}</div>
          ${a.earned ? '<div class="achievement-badge">已解锁</div>' : ''}
        </div>
      `).join('')}
    </div>
  `;
}

// 初始化成就界面事件
export function initAchievementsHandlers() {
  const container = document.getElementById('achievements-content');
  if (!container) return;

  container.onclick = function(e) {
    const btn = e.target.closest('[data-action="back-to-menu"]');
    if (btn) {
      showScreen('main-menu');
      renderMainMenu(loadState());
    }
  };
}

// 显示错题本
export function renderWrongbook(state) {
  const container = document.getElementById('wrongbook-content');
  if (!container) return;

  const wrongbook = getWrongbook();

  container.innerHTML = `
    <div class="wrongbook-header">
      <button class="btn-back btn-sm" data-action="back-to-menu">← 返回</button>
      <div class="wrongbook-title">📋 错题本</div>
      <div class="wrongbook-count">${wrongbook.length} 道错题</div>
    </div>
    <div class="wrongbook-list">
      ${wrongbook.length === 0 ? '<div class="empty-state">太棒了！没有错题 🎉</div>' : ''}
      ${wrongbook.map(w => {
        const q = getQuestionById(w.questionId);
        if (!q) return '';
        return `
          <div class="wrongbook-item">
            <div class="wrongbook-question">${q.q}</div>
            <div class="wrongbook-answer">正确答案：${typeof q.answer === 'number' ? q.choices[q.answer] : q.answer}</div>
            <div class="wrongbook-meta">错误 ${w.wrongCount} 次 · ${w.skillDetail}</div>
          </div>
        `;
      }).join('')}
    </div>
  `;
}

// 初始化错题本事件
export function initWrongbookHandlers() {
  const container = document.getElementById('wrongbook-content');
  if (!container) return;

  container.onclick = function(e) {
    const btn = e.target.closest('[data-action="back-to-menu"]');
    if (btn) {
      showScreen('main-menu');
      renderMainMenu(loadState());
    }
  };
}

// 显示家长报告
export function renderParentReport(state) {
  const container = document.getElementById('parent-report-content');
  if (!container) return;

  doRenderParentReport();
}

// 初始化家长报告事件
export function initParentReportHandlers() {
  const container = document.getElementById('parent-report-content');
  if (!container) return;

  container.onclick = function(e) {
    const btn = e.target.closest('[data-action="back-to-menu"]');
    if (btn) {
      showScreen('main-menu');
      renderMainMenu(loadState());
    }
  };
}