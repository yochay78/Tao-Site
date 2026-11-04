import type { APIRoute } from 'astro';
export const GET: APIRoute = ({ site }) => {
  const noindex = import.meta.env.PUBLIC_NOINDEX === 'true';
  const body = noindex
    ? 'User-agent: *\nDisallow: /\n'
    : `User-agent: *\nAllow: /\n\n# AI search and answer crawlers are welcome\n${['GPTBot','OAI-SearchBot','ChatGPT-User','ClaudeBot','Claude-SearchBot','Claude-User','PerplexityBot','Perplexity-User','Google-Extended','Applebot-Extended'].map(b => `User-agent: ${b}\nAllow: /\n`).join('\n')}\nSitemap: ${new URL('/sitemap-index.xml', site).href}\n`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain' } });
};
