import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

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
const sources = { yt: 'youtube', ig: 'instagram', fb: 'facebook', tt: 'tiktok', x: 'twitter', pin: 'pinterest', em: 'email' };
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
  integrations: [sitemap({ filter: (page) => !page.includes('/tao/') || /\/tao\/(8|11|16|17|18)?\/?$/.test(page) && !page.includes('/he/'), i18n: { defaultLocale: 'en', locales: { en: 'en', he: 'he', es: 'es', fr: 'fr', it: 'it', hi: 'hi', fil: 'fil' } } })],
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
