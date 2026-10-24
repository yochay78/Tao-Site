import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
// Canonical domain is configurable: set SITE_URL in Render when a custom domain is connected.
const site = process.env.SITE_URL || 'https://silent-power.onrender.com';
export default defineConfig({
  site,
  integrations: [sitemap({ filter: (page) => !page.includes('/tao/'), i18n: { defaultLocale: 'en', locales: { en: 'en', he: 'he', es: 'es', fr: 'fr', it: 'it', hi: 'hi', fil: 'fil' } } })],
  redirects: {
    '/books': '/shop/',
    '/books/becoming-unshakable': '/shop/becoming-unshakable/',
    '/books/the-root': '/shop/the-root/',
    '/shop/effortless-he': '/he/shop/effortless-he/',
    '/shop/frictionless-he': '/he/shop/frictionless-he/',
    '/music': '/shop/sound-of-the-tao/',
  },
});
