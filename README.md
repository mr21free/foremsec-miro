# Miro Remias Website

Personal website and publishing platform for [https://miro.foremsec.com](https://miro.foremsec.com).

Built with Astro and Tailwind CSS. The site includes:

- homepage with bio, projects, blog posts, and CV sections
- blog and project publishing from Markdown content
- contact page with social links, downloadable vCard, and QR sharing page
- RSS feed, sitemap, redirects, and security headers

## Stack

- Astro
- Tailwind CSS
- Astro Content Collections
- `astro-seo`
- `astro-icon`
- `qrcode`

## Local Development

Install dependencies:

```bash
npm install
```

Start the dev server:

```bash
npm run dev
```

Build the static site:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Content Model

Content lives in `src/content/`:

- blog posts: `src/content/blog/*.md`
- projects: `src/content/projects/*.md`
- CV sections: `src/content/cv.yml`
- site metadata and social links: `src/site-config.yml`

Blog posts and projects support frontmatter like:

```md
---
title: Example Title
description: Short summary
author: Miro Remias
pubDate: 2026-03-30
updatedDate: 2026-03-30
heroImage: ../../assets/example.png
draft: false
tags:
  - bitcoin
  - product
---
```

## Important Pages

- home: `/`
- blog index: `/blog`
- projects index: `/projects`
- contact page: `/contact`
- contact QR page: `/contact/qr`
- QR image: `/contact-qr.png`
- RSS feed: `/rss.xml`

## Custom Features

### Contact Sharing

The contact flow is built around:

- `src/pages/contact.astro`
- `src/pages/contact/qr.astro`
- `src/pages/contact-qr.png.ts`
- `public/miro-remias-contact.vcf`

Social links and the vCard path are configured centrally in `src/site-config.yml`.

### Titles and Metadata

Browser tab titles are centralized through shared layout helpers so page titles stay consistent across:

- homepage
- blog
- projects
- contact
- tags
- 404

### Reading Time

Reading time is calculated automatically for blog posts and projects in:

- `src/utils/reading-time.ts`

### Redirects and Headers

Hosting-level behavior is configured in:

- `public/_redirects`
- `public/_headers`

These files handle things like:

- legacy URL redirects
- security headers

## Analytics

Analytics loading is gated by the `PUBLIC_ENABLE_ANALYTICS` environment variable used by `src/components/Analytics.astro`.

- `PUBLIC_ENABLE_ANALYTICS=true`: enables Umami script injection
- `PUBLIC_ENABLE_ANALYTICS=false`: disables analytics

Example:

```bash
PUBLIC_ENABLE_ANALYTICS=false npm run dev
```

## Notes

- `.astro/` is generated and should not be treated as source
- `node_modules/` changes should not be committed
- the site is static, so redirects are handled through hosting config plus a few route-level fallbacks where needed
