---
title: Core Web Vitals in 2026: A Practical Guide for Next.js Sites
description: How to hit good Core Web Vitals on a Next.js site — LCP, INP and CLS explained with the specific fixes that move each metric.
excerpt: Speed is not a technical vanity metric. It decides whether people stay long enough to convert. Here is how to fix the three metrics that matter.
date: 2026-07-22
category: web-development
tags: performance, core web vitals, next.js, lcp, cls
readingMinutes: 10
cover: royal
icon: code
---

Core Web Vitals measure the experience of using your site, not just how fast a server responds. They influence rankings, but more importantly they influence whether a visitor stays, reads and buys.

There are three metrics: Largest Contentful Paint for loading, Interaction to Next Paint for responsiveness, and Cumulative Layout Shift for visual stability. Each has specific, well-understood fixes.

## Largest Contentful Paint: under 2.5 seconds

LCP measures when the biggest visible element — usually a hero image or heading — finishes rendering. It is the metric most sites fail.

### Fix the image first

- Use next/image so images are automatically resized, converted and lazily loaded.
- Mark the hero image with priority so it is fetched early instead of lazy-loaded.
- Serve modern formats like AVIF or WebP rather than oversized JPEGs.
- Never scale a 2400px image down to a 600px slot.

```tsx
import Image from "next/image";

<Image
  src="/hero.webp"
  alt="Team reviewing campaign results"
  width={1200}
  height={630}
  priority
  sizes="(max-width: 768px) 100vw, 1200px"
/>
```

### Then fix delivery

- Preconnect to font and asset origins you control.
- Inline critical CSS and defer the rest.
- Reduce third-party scripts — tag managers and chat widgets are frequent culprits.
- Use a CDN so the first byte arrives quickly for every region.

## Interaction to Next Paint: under 200 milliseconds

INP replaced First Input Delay as the responsiveness metric. It measures the worst interaction latency across the whole visit, not just the first click.

- Keep client components small — every extra kilobyte of JavaScript is work on the main thread.
- Move heavy computation to the server or into a web worker.
- Debounce expensive event handlers like search and resize.
- Avoid layout thrashing by batching reads and writes to the DOM.
- Split long tasks so the browser can respond between them.

> [!NOTE] Server components are a performance feature
> In the App Router, components are server-rendered by default. Only add 'use client' where interactivity genuinely requires it. Fewer client components means a smaller bundle and better INP.

## Cumulative Layout Shift: under 0.1

Layout shift is the jolt when content moves as the page loads. It feels broken, and it usually comes from four predictable sources.

1. Images without width and height — always reserve space.
2. Ads, embeds and iframes injected without a reserved container.
3. Web fonts that swap and change text width — use font-display swap with matched metrics.
4. Banners or cookie notices pushed into the flow after load — overlay them instead.

## Measure with real user data

Lab scores are a starting point. Real user data is the truth. Use both, but trust the field data when they disagree.

- Lighthouse and PageSpeed Insights for quick lab diagnostics.
- Chrome DevTools Performance panel for main-thread bottlenecks.
- The web-vitals library or your analytics platform for field data.
- Search Console Core Web Vitals report for real-world pass or fail at scale.

## A practical order of operations

1. Fix images: sizing, format and priority on the hero.
2. Remove or defer third-party scripts you do not need.
3. Reserve space for every image, embed and ad slot.
4. Reduce client-side JavaScript by moving logic to the server.
5. Re-measure and repeat, because fixing one metric can shift another.

> Performance work is not a one-time project. It is a constraint you hold the line on with every feature you ship.

## The takeaway

Optimize the hero image for LCP, shrink your JavaScript for INP, and reserve space for everything for CLS. Those three habits cover the vast majority of real-world improvements.

:::faq
Q: Do Core Web Vitals actually affect rankings?
A: They act as a tiebreaker between comparable pages, but the bigger impact is on user behaviour — faster pages keep visitors and convert better.

Q: Why is my Lighthouse score good but field data bad?
A: Lighthouse runs on a fast machine with a warm cache. Field data reflects real devices, real networks and real third-party scripts. Trust the field data.

Q: How do I find what is hurting INP?
A: Use the Chrome DevTools Performance panel to record interactions and look for long tasks on the main thread. Third-party scripts and large client components are the usual causes.
:::
