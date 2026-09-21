# Md. Maruf Mondol — Portfolio

Personal portfolio and blog for **Md. Maruf Mondol**, a digital marketer working across
digital marketing, SEO, graphics design, web development and business automation.

Built with Next.js (App Router), React, TypeScript, Tailwind CSS v4 and shadcn/ui.

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
    sitemap.ts, robots.ts, manifest.ts, icon.svg
  components/                    UI, layout and section components
  content/                       Services, posts and company content data
  lib/                           Site config, SEO helpers, validation, utils
```

## Content

All copy is data-driven so it can be edited without touching components:

- `src/content/services.ts` — the four services, their features, process, deliverables and FAQs
- `src/content/posts.ts` — blog posts as structured content blocks, categories and author
- `src/content/company.ts` — mission, vision, values, process, testimonials, milestones and FAQs
- `src/lib/site.ts` — site name, contact details, social links and navigation

### Profile photo

The portrait shown on the home page and About page is a single, easily swappable file:

1. Replace `public/maruf-mondol.png` with the real photo (a portrait crop, ideally
   around 800×1000), keeping the same filename, **or**
2. Drop a new file into `public/` and update `siteConfig.photo` in `src/lib/site.ts`.

The photo is also used for the `Person` structured data, so updating it once keeps
the pages and SEO in sync.

## SEO

- Per-page metadata via a shared `buildMetadata` helper (canonical URLs, Open Graph, Twitter cards)
- JSON-LD structured data: `Person`, `WebSite`, `ProfessionalService`, `Service`, `BlogPosting`,
  `FAQPage`, `BreadcrumbList`, `CollectionPage`, `AboutPage`, `ProfilePage`, `ContactPage`
- Dynamic Open Graph images generated at `/og`
- Auto-generated `sitemap.xml`, `robots.txt` and web manifest

## Environment variables

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL (defaults to `https://marufmondol.com`) |
| `CONTACT_WEBHOOK_URL` | Optional webhook that contact submissions are POSTed to |

Without `CONTACT_WEBHOOK_URL`, contact submissions are validated, rate limited and logged
server-side so the form works out of the box.

## Deployment

The site is a standard Next.js app and deploys anywhere Next.js is supported
(Vercel, Cloudflare, a Node host, or Docker). Set `NEXT_PUBLIC_SITE_URL` to your
production domain before building.
