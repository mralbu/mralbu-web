// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// SITE / BASE_PATH are set by the GitHub Pages workflow, so the same build works as
// https://mralbu.github.io/ (user site) or https://mralbu.github.io/<repo>/ (project site).
export default defineConfig({
  site: process.env.SITE ?? 'https://mralbu.github.io',
  base: process.env.BASE_PATH || '/',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  markdown: {
    shikiConfig: { themes: { light: 'github-light', dark: 'github-dark' } },
  },
});
