/**
 * app.js — 应用入口
 * 职责：初始化 → 检测存档 → 路由 → 事件绑定
 */

import { loadState, saveState, resetState } from './modules/state.js';
import { showScreen, setLoadingProgress, onScreenReady, renderMainMenu, renderMap, renderBattle, renderBattleResult, renderCreateScreen, renderWrongbook, renderAchievements, renderParentReport } from './modules/renderer.js';
import { levels, getLevelById, getNextLevel } from './data/levels.js';
import { questions, getQuestionsForLevel, getRandomQuestions, getQuestionById } from './data/questions.js';
import { syncMemoryCache } from './modules/storage.js';
import { startPractice, showPracticeSelect } from './features/practice.js';
import { checkAchievements } from './modules/achievements.js';
import { isAssessmentUnlocked, startAssessment } from './features/assessment.js';

// 初始化应用
async function init() {
  // 尝试同步内存缓存
  syncMemoryCache();

  // 注册 Service Worker
  if ('serviceWorker' in navigator) {
    try {
      const reg = await navigator.serviceWorker.register('/sw.js');
      console.log('[app] Service Worker 注册成功', reg.scope);
    } catch (e) {
      console.warn('[app] Service Worker 注册失败', e);
    }
  }

  // 显示加载页面
  showScreen('loading-screen');

  // 模拟加载进度（实际项目中可替换为真实资源加载）
  const steps = [
    { percent: 20, tip: '加载题库...' },
    { percent: 45, tip: '读取存档...' },
    { percent: 70, tip: '初始化宠物...' },
    { percent: 90, tip: '准备冒险...' },
    { percent: 100, tip: '出发！' }
  ];

  for (const step of steps) {
    setLoadingProgress(step.percent, step.tip);
    await sleep(150);
  }

  await sleep(300);

  // 检测存档决定去向
  const state = loadState();
  if (state.profile.name) {
    // 已存档 → 主菜单
    showMainMenu(state);
  } else {
    // 未存档 → 创建角色
    showCreateScreen();
  }
}

// 显示主菜单
function showMainMenu(state) {
  showScreen('main-menu');
  renderMainMenu(state);
}

// 显示角色创建
function showCreateScreen() {
  showScreen('create-screen');
  renderCreateScreen();
  initCreateScreenHandlers();
}

// 创建屏幕事件绑定
function initCreateScreenHandlers() {
  const container = document.getElementById('create-content');
  if (!container) return;

  container.addEventListener('click', e => {
    const selectItem = e.target.closest('.select-item');
    if (selectItem) {
      // 取消同组其他选中
      const group = selectItem.closest('.select-grid');
      group.querySelectorAll('.select-item').forEach(s => s.classList.remove('selected'));
      selectItem.classList.add('selected');
    }
  });

  const startBtn = document.getElementById('start-adventure-btn');
  if (startBtn) {
    startBtn.addEventListener('click', () => {
      const nameInput = document.getElementById('player-name');
      const name = nameInput?.value.trim() || '冒险家';

      const gradeGroup = container.querySelector('[data-field="grade"]');
      const petGroup = container.querySelector('[data-field="pet"]');

      const grade = parseInt(gradeGroup?.querySelector('.selected')?.dataset.value || '3');
      const pet = petGroup?.querySelector('.selected')?.dataset.value || 'cat';

      // 创建存档
      const state = loadState();
      state.profile = {
        name,
        grade,
        pet,
        createdAt: new Date().toISOString().split('T')[0]
      };
      state.pets.current = { hp: 100, maxHp: 100 };
      saveState(state);

      showMainMenu(state);
    });
  }
}

// 主菜单事件
document.addEventListener('click', e => {
  const btn = e.target.closest('[data-action]');
  if (!btn) return;

  const action = btn.dataset.action;
  const state = loadState();

  switch (action) {
    case 'adventure':
      showMapScreen(state);
      break;
    case 'practice':
      showScreen('practice-screen');
      showPracticeSelect();
      break;
    case 'wrongbook':
      showScreen('wrongbook-screen');
      renderWrongbook(state);
      initWrongbookHandlers();
      break;
    case 'achievements':
      showScreen('achievements-screen');
      renderAchievements(state);
      initAchievementsHandlers();
      break;
    case 'parent-report':
      showScreen('parent-report-screen');
      renderParentReport(state);
      initParentReportHandlers();
      break;
    case 'settings':
      handleSettings();
      break;
    case 'back-to-menu':
      showMainMenu(state);
      break;
    case 'back-to-map':
      showMapScreen(state);
      break;
  }
});

// 显示关卡地图
function showMapScreen(state) {
  showScreen('map-screen');
  renderMap(state, levels);
  initMapScreenHandlers(state);
}

// 关卡地图事件
function initMapScreenHandlers(state) {
  const container = document.getElementById('map-content');
  if (!container) return;

  container.onclick = function(e) {
    const btn = e.target.closest('[data-action="back-to-menu"]');
    if (btn) {
      showMainMenu(loadState());
      return;
    }

    const card = e.target.closest('.level-card');
    if (!card) return;

    const levelId = parseInt(card.dataset.level);
    const unlocked = state.progress.unlockedLevels.includes(levelId);

    if (!unlocked) {
      alert('需要更多 XP 才能解锁此关卡！');
      return;
    }

    // 测评关卡
    if (levelId >= 9) {
      startAssessment(levelId);
      return;
    }

    startBattle(levelId);
  };
}

// 开始战斗
let battleState = null;
let battleTimer = null;
let battleTimeLeft = 0;

async function startBattle(levelId) {
  const level = getLevelById(levelId);
  if (!level) return;

  const state = loadState();

  // 获取题目
  let pool = getQuestionsForLevel(level);
  // 如果题库题目不够用，减少本关题目数量，最多取pool全部题目
  const actualCount = Math.min(level.questionsPerBattle, pool.length);
  if (pool.length === 0) pool = questions.slice(0, actualCount);

  const shuffled = [...pool].sort(() => Math.random() - 0.5);
  const battleQuestions = shuffled.slice(0, actualCount);

  battleState = {
    levelId,
    level,
    questions: battleQuestions,
    totalQuestions: actualCount,
    currentIndex: 0,
    correctCount: 0,
    petHp: state.pets.current.hp,
    maxPetHp: state.pets.current.maxHp,
    monsterHp: level.monsterHp,
    maxMonsterHp: level.monsterHp,
    questionResults: []
  };

  showScreen('battle-screen');
  startQuestionTimer();
  renderBattle(state, {
    level,
    question: battleQuestions[0],
    questionIndex: 0,
    totalQuestions: battleQuestions.length,
    petHp: battleState.petHp,
    maxPetHp: battleState.maxPetHp,
    monsterHp: battleState.monsterHp,
    maxMonsterHp: battleState.maxMonsterHp,
    timeLeft: battleTimeLeft
  });

  // 听力题自动播放
  if (battleQuestions[0].type === 'listen' && 'speechSynthesis' in window) {
    const wordToSpeak = battleQuestions[0].audio || battleQuestions[0].choices[battleQuestions[0].answer];
    setTimeout(() => speakWord(wordToSpeak), 300); // 延迟确保页面加载完成
  }

  initBattleHandlers();
}

import { speakWord } from './modules/audio.js';

// 启动计时器
let isProcessingAnswer = false;

function startQuestionTimer() {
  clearInterval(battleTimer);
  battleTimer = null;
  battleTimeLeft = battleState.level.timePerQuestion || 20;

  battleTimer = setInterval(() => {
    // 安全检查
    if (!battleState) {
      clearInterval(battleTimer);
      battleTimer = null;
      return;
    }

    // 如果正在处理答题，不触发超时
    if (isProcessingAnswer) return;

    battleTimeLeft--;

    const timerEl = document.getElementById('timer-display');
    if (timerEl) {
      timerEl.textContent = `⏱️ ${battleTimeLeft}s`;
      timerEl.className = 'timer-display';
      if (battleTimeLeft <= 5) timerEl.classList.add('timer-danger');
      else if (battleTimeLeft <= 10) timerEl.classList.add('timer-warning');
    }

    if (battleTimeLeft <= 0) {
      clearInterval(battleTimer);
      // 超时视为答错
      handleAnswer(-1); // -1 表示超时
    }
  }, 1000);
}

function stopQuestionTimer() {
  clearInterval(battleTimer);
  battleTimer = null;
}

// 战斗界面事件
function initBattleHandlers() {
  // 每次都重新获取容器（innerHTML替换后DOM已更新）
  const container = document.getElementById('battle-content');
  if (!container) return;

  container.onclick = function(e) {
    const backBtn = e.target.closest('[data-action="back-to-map"]');
    if (backBtn) {
      stopQuestionTimer();
      battleState = null;
      showMapScreen(loadState());
      return;
    }

    if (isProcessingAnswer) return;

    // 听力播放按钮
    const listenPlayBtn = e.target.closest('#listen-play');
    if (listenPlayBtn) {
      console.log('听力按钮被点击');
      const q = battleState.questions[battleState.currentIndex];
      console.log('当前题目:', q.id, q.type);
      const wordToSpeak = q.audio || q.choices[q.answer];
      console.log('播放:', wordToSpeak);
      console.log('speechSynthesis可用:', 'speechSynthesis' in window);
      speakWord(wordToSpeak);
      return;
    }

    // 音频提示按钮 [audio:xxx]
    const audioHintBtn = e.target.closest('.audio-hint-btn');
    if (audioHintBtn) {
      const wordToSpeak = audioHintBtn.dataset.audio;
      console.log('播放音频提示:', wordToSpeak);
      speakWord(wordToSpeak);
      return;
    }

    // 选择类题型
    const choiceBtn = e.target.closest('.choice-btn');
    if (choiceBtn) {
      const choiceIndex = parseInt(choiceBtn.dataset.choice);
      handleAnswer(choiceIndex);
      return;
    }

    // 口语播放按钮
    const oralPlayBtn = e.target.closest('#oral-play');
    if (oralPlayBtn) {
      const q = battleState.questions[battleState.currentIndex];
      if ('speechSynthesis' in window) {
        speakWord(q.answer);
      }
      return;
    }

    // 口语跟读按钮
    const oralRecordBtn = e.target.closest('#oral-record');
    if (oralRecordBtn) {
      alert('口语评分功能开发中...');
      return;
    }
  };

  // 单独处理输入框回车确认
  const fillInput = document.getElementById('fill-input');
  if (fillInput) {
    fillInput.onkeydown = function(e) {
      if (e.key === 'Enter' && !isProcessingAnswer) {
        handleAnswer(null, fillInput.value);
      }
    };
  }

  // 单独处理填空确认按钮
  const fillSubmitBtn = document.getElementById('fill-submit');
  if (fillSubmitBtn) {
    fillSubmitBtn.onclick = function() {
      const inputEl = document.getElementById('fill-input');
      if (inputEl && !isProcessingAnswer) {
        handleAnswer(null, inputEl.value);
      }
    };
  }
}

// 处理答题（choiceIndex=-1表示超时，textAnswer用于填空/拼写等）
async function handleAnswer(choiceIndex, textAnswer = null) {
  if (!battleState) return;

  isProcessingAnswer = true;
  stopQuestionTimer();

  const { questions, currentIndex, level, petHp, maxPetHp, monsterHp, maxMonsterHp } = battleState;
  const question = questions[currentIndex];
  const isTimeout = choiceIndex === -1;

  // 判断是否正确
  let correct = false;
  if (textAnswer !== null) {
    // 填空/拼写/翻译题：比较文本（忽略大小写和空格）
    const userAns = textAnswer.toLowerCase().trim().replace(/\s+/g, ' ');
    const correctAns = question.answer.toLowerCase().trim().replace(/\s+/g, ' ');
    correct = userAns === correctAns;
  } else if (!isTimeout) {
    correct = choiceIndex === question.answer;
  }

  // 显示结果
  if (question.type === 'choice' || question.type === 'listen' || question.type === 'reading') {
    const choiceBtns = document.querySelectorAll('.choice-btn');
    choiceBtns.forEach((btn, i) => {
      btn.disabled = true;
      if (i === question.answer) btn.classList.add('correct');
      if (!isTimeout && i === choiceIndex && !correct) btn.classList.add('wrong');
    });
  } else if (textAnswer !== null) {
    // 输入类题目：显示正确/错误
    const inputEl = document.getElementById('fill-input');
    if (inputEl) {
      inputEl.disabled = true;
      inputEl.style.backgroundColor = correct ? 'rgba(82,196,26,0.3)' : 'rgba(255,77,79,0.3)';
      inputEl.style.borderColor = correct ? '#52c41a' : '#ff4d4f';
    }
    // 显示正确答案
    const submitBtn = document.getElementById('fill-submit');
    if (submitBtn) submitBtn.disabled = true;
  }

  battleState.questionResults.push(correct ? 'correct' : 'wrong');
  if (correct) {
    battleState.correctCount++;
    battleState.monsterHp = Math.max(0, battleState.monsterHp - (level.monsterHp / questions.length));
    const monsterHpFill = document.querySelector('.monster-hp-fill');
    if (monsterHpFill) {
      monsterHpFill.style.width = `${(battleState.monsterHp / maxMonsterHp) * 100}%`;
    }
  } else {
    const petType = loadState().profile.pet;
    const damage = petType === 'dog' ? 12 : 15;
    battleState.petHp = Math.max(0, battleState.petHp - damage);

    const petHpPercent = (battleState.petHp / maxPetHp) * 100;
    const petHpFill = document.querySelector('.pet-hp-fill');
    if (petHpFill) {
      petHpFill.style.width = `${petHpPercent}%`;
      petHpFill.className = 'pet-hp-fill';
      if (petHpPercent < 30) petHpFill.classList.add('danger');
      else if (petHpPercent < 60) petHpFill.classList.add('warning');
    }

    recordWrongQuestion(question);
  }

  await sleep(800);

  battleState.currentIndex++;
  if (battleState.currentIndex >= questions.length || battleState.petHp <= 0) {
    endBattle();
  } else {
    const state = loadState();
    startQuestionTimer();
    const nextQuestion = questions[battleState.currentIndex];
    renderBattle(state, {
      level,
      question: nextQuestion,
      questionIndex: battleState.currentIndex,
      totalQuestions: questions.length,
      petHp: battleState.petHp,
      maxPetHp: battleState.maxPetHp,
      monsterHp: battleState.monsterHp,
      maxMonsterHp: battleState.maxMonsterHp,
      timeLeft: battleState.level.timePerQuestion || 20
    });
    initBattleHandlers();

    // 听力题自动播放
    if (nextQuestion.type === 'listen' && 'speechSynthesis' in window) {
      const wordToSpeak = nextQuestion.audio || nextQuestion.choices[nextQuestion.answer];
      setTimeout(() => speakWord(wordToSpeak), 300);
    }
  }

  isProcessingAnswer = false;

  const container = document.getElementById('battle-content');
  if (container) container.dataset.waiting = '';
}

// 记录错题
function recordWrongQuestion(question) {
  const state = loadState();
  const existing = state.wrongbook.find(w => w.questionId === question.id);

  if (existing) {
    existing.wrongCount++;
    existing.lastWrongDate = new Date().toISOString().split('T')[0];
    existing.consecutiveCorrect = 0;
  } else {
    state.wrongbook.push({
      questionId: question.id,
      wrongCount: 1,
      lastWrongDate: new Date().toISOString().split('T')[0],
      lastCorrectDate: null,
      consecutiveCorrect: 0,
      skill: question.skill,
      skillDetail: question.skillDetail,
      topic: question.topic,
      nextReviewDate: new Date().toISOString().split('T')[0]
    });
  }

  saveState(state);
}

// 结束战斗
async function endBattle() {
  if (!battleState) return;

  stopQuestionTimer();

  const { level, correctCount, questions, petHp, maxPetHp, monsterHp } = battleState;
  const totalQuestions = questions.length;
  const passed = monsterHp <= 0;
  const correctRate = correctCount / totalQuestions;
  const stars = correctRate >= 0.9 ? 3 : correctRate >= 0.7 ? 2 : 1;
  const xpGained = Math.floor(correctCount * 10 * (passed ? 1.5 : 1));

  // 更新存档
  let state = loadState();

  if (passed) {
    state = addXp(state, xpGained);
    state = setLevelStars(state, level.id, stars);
    state = unlockLevel(state, level.id + 1);
  }

  state.pets.current.hp = petHp;
  state.stats.totalQuestions += totalQuestions;
  state.stats.correctCount += correctCount;
  state.stats.lastPlayDate = new Date().toISOString().split('T')[0];

  if (petHp <= 0) {
    state.pets.current.hp = state.pets.current.maxHp; // 复活重置HP
  }

  saveState(state);

  // 检查解锁下一关
  const nextLevel = getNextLevel(level.id);
  const newUnlockedLevel = passed && nextLevel && state.progress.unlockedLevels.includes(nextLevel.id) ? nextLevel : null;

  battleState = null;

  showScreen('battle-result');
  renderBattleResult({
    passed,
    correctCount,
    totalQuestions,
    stars,
    xpGained,
    newUnlockedLevel
  });

  initBattleResultHandlers();
}

// 战斗结果界面事件
function initBattleResultHandlers() {
  const container = document.getElementById('battle-result-content');
  if (!container) return;

  container.addEventListener('click', e => {
    const btn = e.target.closest('[data-action]');
    if (!btn) return;

    const action = btn.dataset.action;
    const state = loadState();

    switch (action) {
      case 'retry-battle':
        showMapScreen(state);
        break;
      case 'back-to-map':
        showMapScreen(state);
        break;
      case 'back-to-menu':
        showMainMenu(state);
        break;
    }
  });
}

// 设置处理
function handleSettings() {
  if (confirm('确定要重置所有进度吗？此操作不可撤销。')) {
    resetState();
    showCreateScreen();
  }
}

// 工具函数
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// XP加成（青蛙智慧型+10%）
function addXp(state, amount) {
  const petType = state.profile.pet;
  const bonus = petType === 'frog' ? 1.1 : 1.0;
  state.progress.xp = Math.floor((state.progress.xp + amount * bonus) * 10) / 10;
  state.progress.level = Math.floor(state.progress.xp / 200) + 1;
  return state;
}

// 解锁关卡
function unlockLevel(state, levelId) {
  if (!state.progress.unlockedLevels.includes(levelId) && levelId <= 11) {
    state.progress.unlockedLevels.push(levelId);
    state.progress.unlockedLevels.sort((a, b) => a - b);
  }
  return state;
}

// 设置星级
function setLevelStars(state, levelId, stars) {
  const current = state.progress.levelStars[levelId] || 0;
  if (stars > current) {
    state.progress.levelStars[levelId] = stars;
  }
  return state;
}

// 启动应用
init();