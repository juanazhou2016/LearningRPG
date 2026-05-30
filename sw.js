// Service Worker v1.0.0
// 策略：Cache First（离线优先）

const CACHE_NAME = 'learning-rpg-v1';
const ASSETS_TO_CACHE = [
  '/index.html',
  '/styles/app.css',
  '/scripts/app.js',
  '/manifest.json',
  '/assets/icons/icon-192.png',
  '/assets/icons/icon-512.png'
];

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

// 请求拦截：缓存优先，回退网络
self.addEventListener('fetch', event => {
  // 仅处理同源请求
  if (!event.request.url.startsWith(self.location.origin)) {
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
        return caches.match('/index.html');
      });
    })
  );
});