// @ts-check
import { defineConfig } from 'astro/config';
import { satteri } from '@astrojs/markdown-satteri';
import sitemap from '@astrojs/sitemap';
import katex from 'katex';

/** @type {import('satteri').HastPluginDefinition} */
const katexPlugin = {
  name: 'katex',
  element: {
    filter: ['pre', 'code'],
    visit(node, ctx) {
      if (node.tagName === 'pre') {
        const code = node.children?.find((c) => c.type === 'element' && c.tagName === 'code');
        if (!code || code.type !== 'element') return;
        const classes = Array.isArray(code.properties?.className) ? code.properties.className : [];
        if (!classes.includes('math-display')) return;
        const html = katex.renderToString(ctx.textContent(code).trim(), { displayMode: true, throwOnError: false });
        ctx.replaceNode(node, { type: 'raw', value: html });
      } else if (node.tagName === 'code') {
        const classes = Array.isArray(node.properties?.className) ? node.properties.className : [];
        if (!classes.includes('math-inline')) return;
        const html = katex.renderToString(ctx.textContent(node), { displayMode: false, throwOnError: false });
        ctx.replaceNode(node, { type: 'raw', value: html });
      }
    },
  },
};

// SITE / BASE_PATH are set by the GitHub Pages workflow, so the same build works as
// https://mralbu.github.io/ (user site) or https://mralbu.github.io/<repo>/ (project site).
export default defineConfig({
  site: process.env.SITE ?? 'https://mralbu.github.io',
  base: process.env.BASE_PATH || '/',
  trailingSlash: 'ignore',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/project/'),
    }),
  ],
  markdown: {
    processor: satteri({
      features: { math: true },
      hastPlugins: [katexPlugin],
    }),
    shikiConfig: { themes: { light: 'github-light', dark: 'github-dark' } },
  },
});
