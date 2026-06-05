// Service Worker v1.1.0
// 策略：核心资源网络优先，离线时回退缓存

const CACHE_NAME = 'learning-rpg-v2';
const APP_SHELL_URL = new URL('./index.html', self.location.href).toString();
const ASSETS_TO_CACHE = [
  './index.html',
  './styles/app.css',
  './scripts/app.js',
  './scripts/data/questions.js',
  './scripts/data/levels.js',
  './scripts/data/topics.js',
  './scripts/modules/achievements.js',
  './scripts/modules/audio.js',
  './scripts/modules/renderer.js',
  './scripts/modules/state.js',
  './scripts/modules/storage.js',
  './scripts/modules/wrongbook.js',
  './scripts/features/assessment.js',
  './scripts/features/parentReport.js',
  './scripts/features/practice.js',
  './scripts/utils/analytics.js',
  './scripts/utils/dateUtils.js',
  './manifest.json',
  './assets/icons/icon-192.png',
  './assets/icons/icon-512.png'
].map(assetPath => new URL(assetPath, self.location.href).toString());

function isFreshResource(request) {
  const url = new URL(request.url);
  return ['.html', '.js', '.css', '.json'].some(ext => url.pathname.endsWith(ext)) || url.href === self.registration.scope;
}

// 安装：预缓存所有资源
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
  // 立即激活，避免等待
  self.skipWaiting();
});

// 激活：清理旧缓存
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames
          .filter(name => name !== CACHE_NAME)
          .map(name => caches.delete(name))
      );
    })
  );
  // 立即接管所有页面
  self.clients.claim();
});

// 请求拦截：代码和配置网络优先，静态图片缓存优先
self.addEventListener('fetch', event => {
  // 仅处理同源请求
  if (!event.request.url.startsWith(self.location.origin)) {
    return;
  }

  if (event.request.method !== 'GET') {
    return;
  }

  if (isFreshResource(event.request)) {
    event.respondWith(
      fetch(event.request).then(response => {
        if (response && response.status === 200) {
          const responseToCache = response.clone();
          caches.open(CACHE_NAME).then(cache => {
            cache.put(event.request, responseToCache);
          });
        }
        return response;
      }).catch(() => caches.match(event.request).then(cachedResponse => cachedResponse || caches.match(APP_SHELL_URL)))
    );
    return;
  }

  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      if (cachedResponse) {
        return cachedResponse;
      }

      return fetch(event.request).then(response => {
        // 不缓存非成功响应
        if (!response || response.status !== 200) {
          return response;
        }

        // 缓存新的响应
        const responseToCache = response.clone();
        caches.open(CACHE_NAME).then(cache => {
          cache.put(event.request, responseToCache);
        });

        return response;
      }).catch(() => {
        // 离线且缓存未命中，可返回离线页面
        return caches.match(APP_SHELL_URL);
      });
    })
  );
});
