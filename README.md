# Md. Maruf Mondol — Portfolio & Blog

Personal portfolio and blog for **Md. Maruf Mondol**, a digital marketer working
across digital marketing, SEO, graphics design, web development and business
automation.

Built with Next.js (App Router), React, TypeScript, Tailwind CSS v4 and shadcn/ui.

[![Next.js](https://img.shields.io/badge/Next.js-16-000000?logo=nextdotjs&logoColor=white&style=flat-square)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19-087EA4?logo=react&logoColor=white&style=flat-square)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white&style=flat-square)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white&style=flat-square)](https://tailwindcss.com)
[![Made by Noyon Rahman](https://img.shields.io/badge/Made_by-Noyon_Rahman-2563EB?style=flat-square)](https://noyonrahman.com)

> **Designed & developed by [Noyon Rahman](https://noyonrahman.com)** ·
> [GitHub](https://github.com/noyonalways)

---

## For the site owner (no coding needed)

You do **not** need to be a developer to keep this website up to date. All of the
text, photos, services and blog posts live in a few easy-to-edit files. You only
ever change the words **between the quote marks** — everything else stays as it is.

### The golden rules

1. Only change text between `"quotes"`.
2. Never delete the quotes `"` or the comma `,` at the end of a line.
3. Save the file, then refresh the site (or wait for it to rebuild) to see your change.

### What you can change, and where

| I want to change… | Edit this file |
| --- | --- |
| Name, job title, email, phone, WhatsApp, address, social links | `src/content/site.ts` |
| Your photo | Replace `public/maruf-mondol.png` (keep the same name) |
| Homepage headline, buttons and intro | `src/content/site.ts` |
| About page, mission, vision, values, process, FAQs, stats, testimonials | `src/content/site.ts` |
| The four services (features, pricing, FAQs) | `src/content/services.ts` |
| A blog article | A `.md` file inside `src/content/blogs/` |

**Full step-by-step instructions with examples live in
[CONTENT-GUIDE.md](./CONTENT-GUIDE.md)** — start there. It explains exactly what
each field does, how to add a new service, and how to write a blog post.

### A few useful tips

- **To add** a card, testimonial, FAQ or service: copy an existing `{ ... }`
  block (including the comma after it), paste it, and edit the words.
- **To remove** one: delete its whole `{ ... }` block.
- **Blog posts:** one file per article in `src/content/blogs/`. To publish, add a
  new `.md` file; to unpublish, delete the file.
- **Something looks broken?** The cause is almost always a missing quote `"` or
  comma `,` on the line you just edited. Undo with `Ctrl + Z` and save again.
- If you get stuck, send the file to your developer (see [Credits](#credits)).

---

## Tech stack

- **Next.js 16** (App Router, Turbopack, React 19)
- **TypeScript** with generated route types (`PageProps`, `LayoutProps`, `RouteContext`)
- **Tailwind CSS v4** with a custom brand theme and dark mode via `next-themes`
- **shadcn/ui** components (Radix-based, "nova" preset) + `lucide-react`
- **react-hook-form** + **zod** for the contact form
- **pnpm** as the package manager

## Getting started

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Description |
| --- | --- |
| `pnpm dev` | Start the dev server (Turbopack) |
| `pnpm build` | Production build |
| `pnpm start` | Serve the production build |
| `pnpm lint` | Run ESLint |
| `pnpm exec tsc --noEmit` | Typecheck |
| `pnpm exec next typegen` | Regenerate Next.js route types |

## Project structure

```
src/
  app/
    page.tsx                     Home
    about/page.tsx               About Md. Maruf Mondol
    services/page.tsx            Services index
    services/[slug]/page.tsx     4 dedicated service pages (data-driven)
    blog/page.tsx                Blog listing
    blog/[slug]/page.tsx         Blog posts with TOC
    blog/category/[category]/    Blog category pages
    contact/page.tsx             Contact page
    api/contact/route.ts         Contact form endpoint (zod validated + rate limited)
    og/route.tsx                 Dynamic Open Graph image
    og/logo/route.tsx            Square brand logo (for structured data)
    icon.tsx, apple-icon.tsx     Favicon + Apple touch icon
    sitemap.ts, robots.ts, manifest.ts, rss.xml/route.ts
  components/                    UI, layout and section components
  content/                       Editable content (site.ts, services.ts, blogs/*.md)
  lib/                           Site config, SEO helpers, validation, utils
```

## Content

All copy is data-driven so it can be edited without touching any component.
Non-technical editors should start with **[CONTENT-GUIDE.md](./CONTENT-GUIDE.md)**.

- `src/content/site.ts` — **the main config**: business details, contact info,
  social links, navigation, homepage hero, About page, mission, vision, values,
  process, testimonials, stats, clients, milestones, FAQs, CTA and contact copy
- `src/content/services.ts` — the four services (features, process, deliverables, pricing, FAQs)
- `src/content/blogs/*.md` — blog articles, one Markdown file per article (frontmatter + body)
- `src/content/blogs.ts` — blog categories, author, cover styles and the Markdown loader

`src/lib/site.ts` and `src/content/company.ts` are thin re-exports kept so
existing imports keep working — edit `src/content/site.ts` instead.

### Profile photo

The portrait shown on the home page and About page is a single, easily swappable file:

1. Replace `public/maruf-mondol.png` with the real photo (a portrait crop, ideally
   around 800×1000), keeping the same filename, **or**
2. Drop a new file into `public/` and update `siteConfig.photo` in `src/content/site.ts`.

The photo is also used for the `Person` structured data, so updating it once keeps
the pages and SEO in sync.

## SEO

- Per-page metadata via a shared `buildMetadata` helper (canonical URLs, Open Graph, Twitter cards)
- JSON-LD structured data: `Person`, `Organization`, `WebSite`, `ProfessionalService`,
  `Service`, `BlogPosting`, `FAQPage`, `BreadcrumbList`, `CollectionPage`, `AboutPage`,
  `ProfilePage`, `ContactPage`
- Dynamic Open Graph images generated at `/og`, plus a square brand logo at `/og/logo`
- Auto-generated `sitemap.xml`, `robots.txt`, web manifest, RSS feed (`/rss.xml`) and app icons
- Search engine verification tags (see [Environment variables](#environment-variables))

## Environment variables

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL (defaults to `https://marufmondol.com`) |
| `CONTACT_WEBHOOK_URL` | Optional webhook that contact submissions are POSTed to |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | Google Search Console verification code |
| `NEXT_PUBLIC_BING_SITE_VERIFICATION` | Bing Webmaster Tools verification code |

Without `CONTACT_WEBHOOK_URL`, contact submissions are validated, rate limited and logged
server-side so the form works out of the box. The verification variables are optional —
add them in your hosting provider's dashboard to claim the site in Google Search Console
and Bing Webmaster Tools.

## Deployment

The site is a standard Next.js app and deploys anywhere Next.js is supported
(Vercel, Cloudflare, a Node host, or Docker). Set `NEXT_PUBLIC_SITE_URL` to your
production domain before building.

---

## Credits

Designed & developed by **Noyon Rahman**.

- Website: [noyonrahman.com](https://noyonrahman.com)
- GitHub: [@noyonalways](https://github.com/noyonalways)

The site is owned and maintained by **Md. Maruf Mondol**.
