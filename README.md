# mralbu-web

Personal home page of Marcelo Albuquerque, built with [Astro](https://astro.build).
It's an Astro port of the Hugo Academic / blogdown site at https://mralbu.github.io.

## Develop

```sh
npm install
npm run dev       # http://localhost:4321
npm run build     # static output in dist/
npm run check     # type-check .astro / .ts files
```

## Where things live

| What | Where |
| --- | --- |
| Name, bio, interests, education, skills, social links | `src/data/profile.ts` |
| Blog posts | `src/content/posts/*.md` |
| Projects (card + external link) | `src/content/projects/<name>/index.md` + `featured.png` |
| Publications | `src/content/publications/<name>/index.md` + `featured.png`; PDFs in `public/publication/<name>/` |
| Colors / typography | `src/styles/global.css` |

Frontmatter is validated by the schemas in `src/content.config.ts`.

To add a post, create `src/content/posts/my-post.md`:

```md
---
title: My post
date: 2026-11-07
summary: One-line summary shown in lists and RSS.
tags: [python]
---

Markdown here.
```

## Deploy

`.github/workflows/deploy.yml` builds and publishes to GitHub Pages on every push to `main`
(set **Settings → Pages → Source** to *GitHub Actions*). The base path is picked up from Pages
automatically, so it works both as a user site (`mralbu.github.io`) and as a project site
(`mralbu.github.io/mralbu-web/`).

Old Hugo URLs are preserved: `/post/hello-blog/`, `/publication/<name>/` (and the PDF paths), and
`/project/<name>/` now redirect to the project's external page.
