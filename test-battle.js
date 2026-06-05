// 测试：验证事件绑定和状态转换是否正常

// 模拟游戏状态
let battleState = {
  questions: [
    { id: 'q1', q: '苹果', choices: ['apple', 'banana'], answer: 0 },
    { id: 'q2', q: '香蕉', choices: ['apple', 'banana'], answer: 1 },
  ],
  currentIndex: 0,
  correctCount: 0,
  petHp: 100,
  maxPetHp: 100,
  monsterHp: 30,
  maxMonsterHp: 30,
  level: { monsterHp: 30, timePerQuestion: 20 }
};

let isProcessingAnswer = false;
let battleTimeLeft = 20;

function logLine(...parts) {
  process.stdout.write(`${parts.map(part => String(part)).join(' ')}\n`);
}

function stopQuestionTimer() {
  logLine('[TIMER] 停止计时器');
}

async function sleep(ms) {
  return new Promise(r => setTimeout(r, ms));
}

// 模拟点击处理
async function handleAnswer(choiceIndex) {
  logLine('[HANDLE] 开始处理答案:', choiceIndex);

  if (!battleState) {
    logLine('[HANDLE] 无battleState，直接返回');
    return;
  }

  isProcessingAnswer = true;
  stopQuestionTimer();

  const { questions, currentIndex, level } = battleState;
  const question = questions[currentIndex];
  const correct = choiceIndex === question.answer;

  logLine('[HANDLE] 题目:', question.q, '选择:', choiceIndex, '正确答案:', question.answer, '是否正确:', correct);

  if (correct) {
    battleState.correctCount++;
    battleState.monsterHp = Math.max(0, battleState.monsterHp - (level.monsterHp / questions.length));
  }

  logLine('[HANDLE] 等待800ms...');
  await sleep(800);

  battleState.currentIndex++;
  logLine('[HANDLE] currentIndex:', battleState.currentIndex, '总题数:', questions.length);

  if (battleState.currentIndex >= questions.length) {
    logLine('[HANDLE] 答题结束');
  } else {
    logLine('[HANDLE] 进入下一题:', questions[battleState.currentIndex].q);
  }

  isProcessingAnswer = false;
  logLine('[HANDLE] 处理完成');
}

// 测试流程
logLine('=== 测试开始 ===');
logLine('当前题目:', battleState.questions[battleState.currentIndex].q);
logLine('');

logLine('--- 测试1: 选择正确答案(0) ---');
handleAnswer(0);

setTimeout(() => {
  logLine('');
  logLine('--- 测试2: 选择正确答案(1) ---');
  handleAnswer(1);
}, 1500);
