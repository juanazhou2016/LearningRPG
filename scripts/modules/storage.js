/**
 * storage.js — localStorage 封装
 * 兼容 file:// 协议（部分浏览器 localStorage 不可用时降级到内存）
 */

const memoryCache = {};

export function save(key, data) {
  try {
    localStorage.setItem(key, JSON.stringify(data));
    return true;
  } catch (e) {
    // file:// 协议下 localStorage 可能抛出 QuotaExceededError 或 SecurityError
    console.warn(`[storage] localStorage 不可用，数据暂存内存: ${key}`);
    memoryCache[key] = data;
    return false;
  }
}

export function load(key) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : null;
  } catch (e) {
    return memoryCache[key] ?? null;
  }
}

export function remove(key) {
  try {
    localStorage.removeItem(key);
  } catch (e) {
    delete memoryCache[key];
  }
}

export function isLocalStorageAvailable() {
  try {
    const testKey = '__storage_test__';
    localStorage.setItem(testKey, '1');
    localStorage.removeItem(testKey);
    return true;
  } catch (e) {
    return false;
  }
}

// 定期尝试将内存缓存写入 localStorage（当其恢复可用时）
export function syncMemoryCache() {
  const available = isLocalStorageAvailable();
  if (!available || Object.keys(memoryCache).length === 0) return;

  for (const [key, data] of Object.entries(memoryCache)) {
    try {
      localStorage.setItem(key, JSON.stringify(data));
      delete memoryCache[key];
    } catch (e) {
      // 仍然不可用，跳过
      break;
    }
  }
}
