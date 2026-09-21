---
title: The SEO Checklist Every New Website Needs Before Launch
description: A practical, no-fluff SEO checklist to run through before you launch a new website — covering technical setup, metadata, content and indexing.
excerpt: Most new websites lose their first three months of search visibility to problems that take an afternoon to fix. Here is the checklist I run before every launch.
date: 2026-08-18
category: seo
tags: technical seo, launch, checklist, on-page
readingMinutes: 9
featured: true
cover: ocean
icon: code
---

Launching a website is exciting. Losing six to twelve weeks of search visibility because of fixable setup problems is not. Search engines need to crawl, understand and trust a new site before they will rank it, and a handful of small issues can quietly delay that process.

This is the checklist I work through before any client site goes live. None of it is exotic. All of it matters.

## 1. Get the technical foundation right

Before content, before links, before anything creative — search engines have to be able to read your site reliably.

- Every page returns a single canonical URL. Pick www or non-www and redirect the other permanently.
- HTTPS is enforced site-wide, with no mixed-content warnings in the console.
- The XML sitemap is generated automatically and contains only indexable, canonical pages.
- robots.txt is intentional — it should not block CSS, JavaScript or important paths.
- Return proper status codes: 404 for missing pages, 301 for moved ones, never a soft 404.
- Pagination, filters and search results are excluded from indexing.

> [!NOTE] The one-minute check
> Open your site in an incognito window with JavaScript disabled. If the main content is missing, search engines may see it that way too. Server-rendered pages avoid this entirely.

## 2. Write metadata that earns the click

Metadata does not directly boost rankings, but it decides whether anyone clicks. A page ranking fourth with a compelling title beats a page ranking first with a lazy one.

- Unique title tags for every page, roughly 50-60 characters, front-loading the primary keyword.
- Unique meta descriptions of 140-160 characters that describe the outcome, not the page.
- One H1 per page that states what the page is about in plain language.
- Logical heading order — H2s for sections, H3s nested beneath them.
- Open Graph and Twitter card metadata so shared links look deliberate.

## 3. Structure content for intent

Search engines match pages to intent. A single page trying to serve five intents usually ranks for none of them. Group content by the question a visitor is asking.

1. Map one primary keyword and two or three supporting terms per page.
2. Give each service, product and location its own dedicated page.
3. Link related pages to each other with descriptive anchor text.
4. Add internal links from high-authority pages to new pages you want indexed fast.
5. Keep important content within three clicks of the homepage.

## 4. Add structured data

Structured data helps search engines and AI assistants understand your content as entities rather than text. It is one of the highest-leverage things you can add at launch.

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Your Company",
  "url": "https://example.com",
  "logo": "https://example.com/logo.png",
  "sameAs": [
    "https://linkedin.com/company/yourcompany",
    "https://facebook.com/yourcompany"
  ]
}
```

Add Organization and WebSite schema site-wide, then Article schema on blog posts, Service schema on service pages, and FAQPage schema wherever you answer real questions.

## 5. Make performance a launch requirement

Core Web Vitals are a tiebreaker, but on mobile they are often the whole game. Slow pages lose users before they read a word.

- Largest Contentful Paint under 2.5 seconds on a mid-range phone.
- Cumulative Layout Shift below 0.1 — always set explicit image dimensions.
- Serve images in modern formats, sized to the slot they render in.
- Defer non-critical JavaScript and lazy-load below-the-fold media.
- Compress and cache aggressively at the edge.

## 6. Set up measurement before you need it

You cannot improve what you never recorded. Install analytics and conversion tracking on day one so you have a baseline to compare against later.

- GA4 installed and firing on every page.
- Search Console and Bing Webmaster Tools verified.
- Key conversions defined: form submissions, calls, purchases, signups.
- Server-side or event-based tracking for anything ad-blockers interfere with.

## 7. Submit and monitor

Once live, tell search engines the site exists and watch what happens. Expect crawling within days and indexing within one to three weeks for a new domain.

- Submit the sitemap in Search Console.
- Request indexing for your most important pages.
- Check the Pages report weekly for excluded URLs.
- Fix crawl errors and broken links as they appear.

> SEO at launch is not about ranking immediately. It is about removing every excuse a search engine has to ignore you.

## The short version

Get the technical foundation right, write metadata with intent, structure content around real questions, add structured data, hit your performance targets, and measure from day one. Do that and your site starts its life with momentum instead of a handicap.

:::faq
Q: How long does it take a new website to rank?
A: For a brand new domain, expect crawling within days and indexing within one to three weeks. Meaningful rankings for competitive terms typically take four to six months of consistent work.

Q: Do I need an XML sitemap if my site is small?
A: Yes. Even a five-page site benefits from an explicit sitemap because it removes ambiguity about which URLs matter.

Q: Is structured data worth it?
A: It is one of the cheapest wins available. It improves how you appear in rich results and helps AI assistants describe your business accurately.
:::
