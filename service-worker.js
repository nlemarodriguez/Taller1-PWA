"use strict";

// CODELAB: Update cache names any time any of the cached files change.
const CACHE_NAME = "static-cache-v1";

// CODELAB: Add list of files to cache here.
const FILES_TO_CACHE = [
    "/offline.html",
    '/styles/inline.css',
    '/images/icons/icon-128x128.png',
    '/images/icons/icon-192x192.png',
    '/images/icons/icon-256x256.png',
    '/images/icons/icon-512x512.png',
    '/images/ic_add_white_24px.svg',
    '/images/ic_refresh_white_24px.svg',
    '/scripts/app.js'

];

self.addEventListener("install", evt => {
    console.log("[ServiceWorker] Install");
    // CODELAB: Precache static resources here.
    evt.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            console.log("[ServiceWorker] Pre-caching offline page");
            return cache.addAll(FILES_TO_CACHE);
        })
    );

    self.skipWaiting();
});

self.addEventListener("activate", evt => {
    console.log("[ServiceWorker] Activate");
    // CODELAB: Remove previous cached data from disk.
    // CODELAB: Remove previous cached data from disk.
    evt.waitUntil(
        caches.keys().then(keyList => {
            return Promise.all(
                keyList.map(key => {
                    if (key !== CACHE_NAME) {
                        console.log("[ServiceWorker] Removing old cache", key);
                        return caches.delete(key);
                    }
                })
            );
        })
    );

    self.clients.claim();
});

self.addEventListener("fetch", evt => {
    console.log("[ServiceWorker] Fetch", evt.request.url);
    // CODELAB: Add fetch event handler here.
    if (evt.request.mode !== "navigate") {
        // Not a page navigation, bail.
        return;
    }
    evt.respondWith(
        fetch(evt.request).catch(() => {
            return caches.open(CACHE_NAME).then(cache => {
                return cache.match("offline.html");
            });
        })
    );
});
