import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';
import { profile } from '../data/profile';

export async function GET(context: APIContext) {
  const posts = (await getCollection('posts', ({ data }) => !data.draft)).sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf(),
  );
  const basePath = `${import.meta.env.BASE_URL.replace(/\/$/, '')}/`;
  const site = new URL(basePath, context.site!);
  return rss({
    title: `${profile.shortName} · posts`,
    description: profile.description,
    site,
    items: posts.map((p) => ({
      title: p.data.title,
      pubDate: p.data.date,
      description: p.data.summary,
      link: `post/${p.id}/`,
    })),
  });
}
