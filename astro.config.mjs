import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
// Replace with the real domain before deploying
export default defineConfig({ site: 'https://silentpower.example', integrations: [sitemap()] });
