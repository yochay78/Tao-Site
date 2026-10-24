import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
// Canonical domain is configurable: set SITE_URL in Render when a custom domain is connected.
const site = process.env.SITE_URL || 'https://silent-power.onrender.com';
export default defineConfig({
  site,
  integrations: [sitemap()],
  redirects: {
    '/books': '/shop/',
    '/books/becoming-unshakable': '/shop/becoming-unshakable/',
    '/books/the-root': '/shop/the-root/',
    '/music': '/shop/sound-of-the-tao/',
  },
});
