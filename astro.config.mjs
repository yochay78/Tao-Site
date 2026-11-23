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
  eternity: '/shop/practicing-eternity/',
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

// ── Sitemap lastmod ─────────────────────────────────────────────
// Journal + glossary URLs get <lastmod> from frontmatter (updated, else date); index pages get the newest.
function fmDate(file) {
  const fm = (fs.readFileSync(file, 'utf8').match(/^---\n([\s\S]*?)\n---/) || [])[1] || '';
  const v = (fm.match(/^updated:\s*"?([0-9-]{10})/m) || fm.match(/^date:\s*"?([0-9-]{10})/m) || [])[1];
  return v ? new Date(v + 'T00:00:00Z') : null;
}
const lastmods = {};
for (const [dir, base] of [['journal', '/journal/'], ['journal-he', '/he/journal/'], ['glossary', '/glossary/'], ['glossary-he', '/he/glossary/']]) {
  const d = path.join('src/content', dir);
  if (!fs.existsSync(d)) continue;
  let newest = null;
  for (const f of fs.readdirSync(d).filter(x => x.endsWith('.md'))) {
    const dt = fmDate(path.join(d, f));
    if (!dt) continue;
    lastmods[base + f.replace(/\.md$/, '') + '/'] = dt;
    if (!newest || dt > newest) newest = dt;
  }
  if (newest) lastmods[base] = newest;
}
function addLastmod(item) {
  const dt = lastmods[new URL(item.url).pathname];
  if (dt) item.lastmod = dt.toISOString();
  return item;
}

// Canonical domain is configurable: set SITE_URL in Render when a custom domain is connected.
const site = process.env.SITE_URL || 'https://silent-power.onrender.com';
export default defineConfig({
  site,
  integrations: [sitemap({ filter: taoFilter, serialize: addLastmod, i18n: { defaultLocale: 'en', locales: { en: 'en', he: 'he', es: 'es', fr: 'fr', it: 'it', hi: 'hi', fil: 'fil' } } })],
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
