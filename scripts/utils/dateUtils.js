/**
 * dateUtils.js — 日期工具（间隔重复算法用）
 */

export function formatDate(date) {
  const d = date instanceof Date ? date : new Date(date);
  return d.toISOString().split('T')[0];
}

export function today() {
  return formatDate(new Date());
}

export function daysBetween(date1, date2) {
  const d1 = new Date(date1);
  const d2 = new Date(date2);
  const diff = Math.abs(d2 - d1);
  return Math.floor(diff / (1000 * 60 * 60 * 24));
}

export function daysSince(date) {
  return daysBetween(date, new Date());
}

export function addDays(date, days) {
  const d = new Date(date);
  d.setDate(d.getDate() + days);
  return formatDate(d);
}

export function isToday(date) {
  return formatDate(date) === today();
}