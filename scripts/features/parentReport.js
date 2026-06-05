/**
 * parentReport.js — 家长报告模块
 */

import { loadState } from '../modules/state.js';
import { getWeakPoints } from '../utils/analytics.js';

// 生成学习报告数据
export function generateReport() {
  const state = loadState();
  const { stats, progress, wrongbook, achievements, reviewPoints } = state;

  // 计算正确率
  const accuracy = stats.totalQuestions > 0
    ? Math.round((stats.correctCount / stats.totalQuestions) * 100)
    : 0;

  // 获取薄弱知识点TOP5
  const weakPoints = getWeakPoints(5);

  // 获取各关卡完成情况
  const levelStats = Object.entries(progress.levelStars || {}).map(([id, stars]) => ({
    levelId: parseInt(id),
    stars,
    completed: true
  }));

  // 统计各topic正确率
  const topicStats = calculateTopicAccuracy();

  // 进步趋势（简化版：对比累计正确率）
  const trend = {
    current: accuracy,
    previous: 0, // 简化：下次可记录历史数据
    status: accuracy >= 70 ? 'good' : accuracy >= 50 ? 'medium' : 'needsAttention'
  };

  // 预警检测
  const warnings = [];
  if (weakPoints.length > 0 && weakPoints[0].wrongCount >= 3) {
    warnings.push({
      type: 'high_wrong_count',
      message: `知识点"${weakPoints[0].skillDetail}"错误次数过多（${weakPoints[0].wrongCount}次）`,
      suggestion: '建议优先练习该知识点'
    });
  }
  if (stats.streakDays === 0) {
    warnings.push({
      type: 'no_streak',
      message: '今日未学习',
      suggestion: '鼓励孩子今天完成一关'
    });
  }
  if (accuracy < 50) {
    warnings.push({
      type: 'low_accuracy',
      message: '近期正确率偏低',
      suggestion: '建议从简单关卡重新开始巩固'
    });
  }

  return {
    summary: {
      totalQuestions: stats.totalQuestions,
      correctCount: stats.correctCount,
      accuracy,
      streakDays: stats.streakDays,
      reviewPoints: reviewPoints || 0
    },
    progress: {
      xp: progress.xp,
      level: progress.level,
      title: progress.title,
      unlockedLevels: progress.unlockedLevels.length
    },
    weakPoints,
    levelStats,
    topicStats,
    trend,
    warnings,
    achievements: {
      earned: achievements.length,
      total: 15
    }
  };
}

// 计算各topic正确率
function calculateTopicAccuracy() {
  // 简化实现：基于错题本中各topic的题目数量
  const state = loadState();
  const wrongbook = state.wrongbook || [];

  const topicCounts = {};
  wrongbook.forEach(w => {
    topicCounts[w.topic] = (topicCounts[w.topic] || 0) + w.wrongCount;
  });

  const topicNames = {
    food: '食物',
    animals: '动物',
    family: '家庭',
    home: '家',
    school: '学校',
    colors: '颜色',
    weather: '天气',
    numbers: '数字',
    body: '身体',
    jobs: '职业',
    science: '科学',
    earth: '地球',
    grammar: '语法'
  };

  return Object.entries(topicCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)
    .map(([topic, count]) => ({
      topic,
      name: topicNames[topic] || topic,
      wrongCount: count,
      needPractice: count >= 3
    }));
}

// 渲染家长报告界面
export function renderParentReport() {
  const container = document.getElementById('parent-report-content');
  if (!container) return;

  const report = generateReport();
  const { summary, weakPoints, warnings, achievements, topicStats } = report;

  let warningsHtml = '';
  if (warnings.length > 0) {
    warningsHtml = `
      <div class="report-section">
        <div class="report-section-title warning">⚠️ 需要关注</div>
        ${warnings.map(w => `
          <div class="warning-card">
            <div class="warning-message">${w.message}</div>
            <div class="warning-suggestion">💡 ${w.suggestion}</div>
          </div>
        `).join('')}
      </div>
    `;
  }

  let weakPointsHtml = '';
  if (weakPoints.length > 0) {
    weakPointsHtml = `
      <div class="report-section">
        <div class="report-section-title">📚 薄弱知识点</div>
        ${weakPoints.map(w => `
          <div class="weak-point-card">
            <div class="weak-point-name">${w.skillDetail || w.skill}</div>
            <div class="weak-point-meta">错误 ${w.wrongCount} 次 · ${w.topic}</div>
          </div>
        `).join('')}
      </div>
    `;
  }

  container.innerHTML = `
    <div class="report-header">
      <button class="btn-back btn-sm" id="report-back" data-action="back-to-menu">← 返回</button>
      <div class="report-title">👨‍👩‍👧 家长报告</div>
    </div>

    <div class="report-summary">
      <div class="summary-card">
        <div class="summary-value">${summary.accuracy}%</div>
        <div class="summary-label">正确率</div>
      </div>
      <div class="summary-card">
        <div class="summary-value">${summary.totalQuestions}</div>
        <div class="summary-label">总答题数</div>
      </div>
      <div class="summary-card">
        <div class="summary-value">${summary.streakDays}天</div>
        <div class="summary-label">连续学习</div>
      </div>
      <div class="summary-card">
        <div class="summary-value">${achievements.earned}/15</div>
        <div class="summary-label">成就</div>
      </div>
    </div>

    <div class="report-subtitle">📈 学习趋势</div>
    <div class="trend-card">
      <div class="trend-accuracy ${report.trend.status}">
        正确率 <span class="trend-value">${summary.accuracy}%</span>
        ${summary.accuracy >= 70 ? '✅ 良好' : summary.accuracy >= 50 ? '⚠️ 一般' : '❌ 需要加强'}
      </div>
    </div>

    ${warningsHtml}
    ${weakPointsHtml}

    <div class="report-section">
      <div class="report-section-title">📊 知识点掌握情况</div>
      <div class="topic-list">
        ${topicStats.map(t => `
          <div class="topic-item ${t.needPractice ? 'need-practice' : ''}">
            <span class="topic-name">${t.name}</span>
            <span class="topic-wrong">错误 ${t.wrongCount} 次</span>
          </div>
        `).join('')}
        ${topicStats.length === 0 ? '<div class="topic-empty">暂无数据，继续加油！</div>' : ''}
      </div>
    </div>
  `;
}
