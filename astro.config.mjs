import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import fs from 'node:fs';
import path from 'node:path';

// Tao chapter pages are indexable only when a note (explanation + FAQ) exists for them.
function noteKeys(files) {
  const keys = new Set();
  for (const f of files) {
    if (!fs.existsSync(f)) continue;
    for (const m of fs.readFileSync(f, 'utf8').matchAll(/^\s*(\d+): \{\s*$/gm)) keys.add(Number(m[1]));
  }
  return keys;
}
const dirFiles = (d) => fs.existsSync(d) ? fs.readdirSync(d).filter(x => x.endsWith('.ts')).map(x => path.join(d, x)) : [];
const enKeys = noteKeys(['src/data/tao-notes.ts', ...dirFiles('src/data/notes-en')]);
const heKeys = noteKeys(dirFiles('src/data/notes-he'));
function taoFilter(page) {
  if (/\/he\/tao\/?$/.test(page) && !heKeys.size) return false;
  const m = page.match(/\/(he\/)?tao\/(\d+)\/?$/);
  if (!m) return true;
  return (m[1] ? heKeys : enKeys).has(Number(m[2]));
}

// ── Short links ─────────────────────────────────────────────────
// silentpower.me/<code>        → the book page
// silentpower.me/<code>/<src>  → the book page + source tag for GA4 (yt, ig, fb, tt, ...)
const shortLinks = {
  push: '/shop/stop-pushing/',
  mind: '/shop/mind-wont-slow-down/',
  rock: '/shop/becoming-unshakable/',
  root: '/shop/the-root/',
  tone: '/shop/sound-of-the-tao/',
  nine: '/shop/root-audio/',
  hush: '/he/shop/effortless-he/',
  hrok: '/he/shop/frictionless-he/',
};
const sources = { yt: 'youtube', ig: 'instagram', fb: 'facebook', tt: 'tiktok', x: 'twitter', pin: 'pinterest', em: 'email', ttdm: 'tiktok_dm', bot: 'reply_bot' };
const shortRedirects = {};
for (const [code, dest] of Object.entries(shortLinks)) {
  shortRedirects['/' + code] = dest;
  for (const [short, source] of Object.entries(sources)) {
    shortRedirects[`/${code}/${short}`] = `${dest}?utm_source=${source}&utm_medium=social&utm_campaign=${code}`;
  }
}
// Canonical domain is configurable: set SITE_URL in Render when a custom domain is connected.
const site = process.env.SITE_URL || 'https://silent-power.onrender.com';
export default defineConfig({
  site,
  integrations: [sitemap({ filter: taoFilter, i18n: { defaultLocale: 'en', locales: { en: 'en', he: 'he', es: 'es', fr: 'fr', it: 'it', hi: 'hi', fil: 'fil' } } })],
  redirects: {
    ...shortRedirects,
    '/books': '/shop/',
    '/books/becoming-unshakable': '/shop/becoming-unshakable/',
    '/books/the-root': '/shop/the-root/',
    '/shop/effortless-he': '/he/shop/effortless-he/',
    '/shop/frictionless-he': '/he/shop/frictionless-he/',
    '/music': '/shop/sound-of-the-tao/',
  },
});
