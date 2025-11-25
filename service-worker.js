// Service Worker 版本
const CACHE_NAME = 'pwa-demo-v1';

// 需要缓存的资源列表
const RESOURCES_TO_CACHE = [
    '/',
    '/index.html',
    '/manifest.json',
    '/icons/icon-192x192.png',
    '/icons/icon-512x512.png'
];

// 安装 Service Worker
self.addEventListener('install', (event) => {
    console.log('Service Worker: 安装中');
    
    // 等待直到缓存完成
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('Service Worker: 缓存文件');
                return cache.addAll(RESOURCES_TO_CACHE);
            })
            .then(() => self.skipWaiting())
    );
});

// 激活 Service Worker
self.addEventListener('activate', (event) => {
    console.log('Service Worker: 激活中');
    
    // 清理旧缓存
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cache) => {
                    if (cache !== CACHE_NAME) {
                        console.log('Service Worker: 清除旧缓存');
                        return caches.delete(cache);
                    }
                })
            );
        })
    );
});

// 拦截网络请求
self.addEventListener('fetch', (event) => {
    console.log('Service Worker: 拦截请求');
    
    // 网络优先策略：先尝试网络请求，如果失败则使用缓存
    event.respondWith(
        fetch(event.request)
            .then((response) => {
                // 如果响应有效，更新缓存
                if (response && response.status === 200) {
                    const responseToCache = response.clone();
                    caches.open(CACHE_NAME)
                        .then((cache) => {
                            cache.put(event.request, responseToCache);
                        });
                }
                return response;
            })
            .catch(() => {
                // 网络请求失败，使用缓存
                return caches.match(event.request);
            })
    );
});
