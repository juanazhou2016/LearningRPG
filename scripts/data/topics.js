/**
 * topics.js — 主题/技能标签定义
 */

export const topics = [
  { id: 'food',     name: '食物',     emoji: '🍎' },
  { id: 'animals',  name: '动物',     emoji: '🐾' },
  { id: 'family',  name: '家庭',     emoji: '👨‍👩‍👧' },
  { id: 'home',     name: '家',       emoji: '🏠' },
  { id: 'school',  name: '学校',     emoji: '🏫' },
  { id: 'colors',  name: '颜色',     emoji: '🌈' },
  { id: 'numbers', name: '数字',     emoji: '🔢' },
  { id: 'weather', name: '天气',     emoji: '⛅' },
  { id: 'body',    name: '身体',     emoji: '💪' },
  { id: 'jobs',    name: '职业',     emoji: '👨‍⚕️' },
  { id: 'science', name: '科学',     emoji: '🔬' },
  { id: 'earth',   name: '地球',     emoji: '🌍' },
  { id: 'time',    name: '时间',     emoji: '🕐' },
  { id: 'clothing',name: '服装',     emoji: '👕' },
  { id: 'transport',name:'交通',    emoji: '🚗' },
  { id: 'sports',  name: '运动',     emoji: '⚽' },
  { id: 'feelings',name: '情绪',     emoji: '😊' },
  { id: 'nature',  name: '自然',     emoji: '🌳' },
  { id: 'clothes', name: '衣物',     emoji: '👗' },
  { id: 'daily',   name: '日常',     emoji: '📅' }
];

export const skills = [
  { id: 'vocabulary',  name: '词汇',    description: '单词拼写与释义' },
  { id: 'grammar',     name: '语法',    description: '句型与语法规则' },
  { id: 'sentence',    name: '句子',    description: '句子组织与翻译' },
  { id: 'reading',     name: '阅读',    description: '短文理解' },
  { id: 'listening',   name: '听力',    description: '听力辨析' },
  { id: 'oral',        name: '口语',    description: '跟读与表达' }
];

export const skillDetails = [
  { skill: 'vocabulary', detail: '食物类词汇' },
  { skill: 'vocabulary', detail: '动物类词汇' },
  { skill: 'vocabulary', detail: '家庭成员词汇' },
  { skill: 'vocabulary', detail: '学校相关词汇' },
  { skill: 'vocabulary', detail: '天气类词汇' },
  { skill: 'vocabulary', detail: '职业类词汇' },
  { skill: 'vocabulary', detail: '数字词汇' },
  { skill: 'vocabulary', detail: '颜色词汇' },
  { skill: 'grammar',    detail: '第三人称单数' },
  { skill: 'grammar',    detail: 'be动词用法' },
  { skill: 'grammar',    detail: '现在进行时' },
  { skill: 'grammar',    detail: '过去式变化规则' },
  { skill: 'grammar',    detail: '不规则过去式' },
  { skill: 'grammar',    detail: '现在完成时' },
  { skill: 'grammar',    detail: '被动语态' },
  { skill: 'grammar',    detail: '虚拟语气' },
  { skill: 'grammar',    detail: '可数/不可数名词' },
  { skill: 'grammar',    detail: 'there be句型' },
  { skill: 'grammar',    detail: '祈使句' },
  { skill: 'grammar',    detail: '宾语从句' }
];

export function getTopicById(id) {
  return topics.find(t => t.id === id);
}

export function getSkillById(id) {
  return skills.find(s => s.id === id);
}