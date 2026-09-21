import type { ServiceIconName } from "./services";

export type ContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "subheading"; text: string }
  | { type: "list"; items: string[]; ordered?: boolean }
  | { type: "quote"; text: string; attribution?: string }
  | { type: "callout"; title?: string; text: string }
  | { type: "code"; language: string; code: string }
  | { type: "divider" };

export type PostCategory = {
  slug: string;
  title: string;
  description: string;
};

export type Post = {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  date: string;
  updated?: string;
  category: string;
  tags: string[];
  readingMinutes: number;
  featured?: boolean;
  cover: { gradient: string; icon: ServiceIconName };
  content: ContentBlock[];
  faqs?: { question: string; answer: string }[];
};

export const postCategories: PostCategory[] = [
  {
    slug: "seo",
    title: "SEO",
    description:
      "Search engine optimization tactics, checklists and technical guidance that compounds over time.",
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    description:
      "Paid media, content and full-funnel strategy for businesses that need measurable growth.",
  },
  {
    slug: "web-development",
    title: "Web Development",
    description:
      "Building fast, accessible and SEO-friendly websites with modern frameworks.",
  },
  {
    slug: "automation",
    title: "Automation",
    description:
      "Removing manual work with workflows, integrations and practical AI assistants.",
  },
  {
    slug: "branding",
    title: "Branding",
    description:
      "Identity, design systems and creative direction that earn trust and convert.",
  },
];

export const author = {
  name: "Md. Maruf Mondol",
  role: "Digital Marketer",
  initials: "MM",
} as const;

export const posts: Post[] = [
  {
    slug: "seo-checklist-for-new-websites",
    title: "The SEO Checklist Every New Website Needs Before Launch",
    description:
      "A practical, no-fluff SEO checklist to run through before you launch a new website — covering technical setup, metadata, content and indexing.",
    excerpt:
      "Most new websites lose their first three months of search visibility to problems that take an afternoon to fix. Here is the checklist I run before every launch.",
    date: "2026-08-18",
    category: "seo",
    tags: ["technical seo", "launch", "checklist", "on-page"],
    readingMinutes: 9,
    featured: true,
    cover: { gradient: "from-violet-500 via-indigo-500 to-blue-600", icon: "code" },
    content: [
      {
        type: "paragraph",
        text: "Launching a website is exciting. Losing six to twelve weeks of search visibility because of fixable setup problems is not. Search engines need to crawl, understand and trust a new site before they will rank it, and a handful of small issues can quietly delay that process.",
      },
      {
        type: "paragraph",
        text: "This is the checklist I work through before any client site goes live. None of it is exotic. All of it matters.",
      },
      { type: "heading", text: "1. Get the technical foundation right" },
      {
        type: "paragraph",
        text: "Before content, before links, before anything creative — search engines have to be able to read your site reliably.",
      },
      {
        type: "list",
        items: [
          "Every page returns a single canonical URL. Pick www or non-www and redirect the other permanently.",
          "HTTPS is enforced site-wide, with no mixed-content warnings in the console.",
          "The XML sitemap is generated automatically and contains only indexable, canonical pages.",
          "robots.txt is intentional — it should not block CSS, JavaScript or important paths.",
          "Return proper status codes: 404 for missing pages, 301 for moved ones, never a soft 404.",
          "Pagination, filters and search results are excluded from indexing.",
        ],
      },
      {
        type: "callout",
        title: "The one-minute check",
        text: "Open your site in an incognito window with JavaScript disabled. If the main content is missing, search engines may see it that way too. Server-rendered pages avoid this entirely.",
      },
      { type: "heading", text: "2. Write metadata that earns the click" },
      {
        type: "paragraph",
        text: "Metadata does not directly boost rankings, but it decides whether anyone clicks. A page ranking fourth with a compelling title beats a page ranking first with a lazy one.",
      },
      {
        type: "list",
        items: [
          "Unique title tags for every page, roughly 50-60 characters, front-loading the primary keyword.",
          "Unique meta descriptions of 140-160 characters that describe the outcome, not the page.",
          "One H1 per page that states what the page is about in plain language.",
          "Logical heading order — H2s for sections, H3s nested beneath them.",
          "Open Graph and Twitter card metadata so shared links look deliberate.",
        ],
      },
      { type: "heading", text: "3. Structure content for intent" },
      {
        type: "paragraph",
        text: "Search engines match pages to intent. A single page trying to serve five intents usually ranks for none of them. Group content by the question a visitor is asking.",
      },
      {
        type: "list",
        ordered: true,
        items: [
          "Map one primary keyword and two or three supporting terms per page.",
          "Give each service, product and location its own dedicated page.",
          "Link related pages to each other with descriptive anchor text.",
          "Add internal links from high-authority pages to new pages you want indexed fast.",
          "Keep important content within three clicks of the homepage.",
        ],
      },
      { type: "heading", text: "4. Add structured data" },
      {
        type: "paragraph",
        text: "Structured data helps search engines and AI assistants understand your content as entities rather than text. It is one of the highest-leverage things you can add at launch.",
      },
      {
        type: "code",
        language: "json",
        code: `{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Your Company",
  "url": "https://example.com",
  "logo": "https://example.com/logo.png",
  "sameAs": [
    "https://linkedin.com/company/yourcompany",
    "https://facebook.com/yourcompany"
  ]
}`,
      },
      {
        type: "paragraph",
        text: "Add Organization and WebSite schema site-wide, then Article schema on blog posts, Service schema on service pages, and FAQPage schema wherever you answer real questions.",
      },
      { type: "heading", text: "5. Make performance a launch requirement" },
      {
        type: "paragraph",
        text: "Core Web Vitals are a tiebreaker, but on mobile they are often the whole game. Slow pages lose users before they read a word.",
      },
      {
        type: "list",
        items: [
          "Largest Contentful Paint under 2.5 seconds on a mid-range phone.",
          "Cumulative Layout Shift below 0.1 — always set explicit image dimensions.",
          "Serve images in modern formats, sized to the slot they render in.",
          "Defer non-critical JavaScript and lazy-load below-the-fold media.",
          "Compress and cache aggressively at the edge.",
        ],
      },
      { type: "heading", text: "6. Set up measurement before you need it" },
      {
        type: "paragraph",
        text: "You cannot improve what you never recorded. Install analytics and conversion tracking on day one so you have a baseline to compare against later.",
      },
      {
        type: "list",
        items: [
          "GA4 installed and firing on every page.",
          "Search Console and Bing Webmaster Tools verified.",
          "Key conversions defined: form submissions, calls, purchases, signups.",
          "Server-side or event-based tracking for anything ad-blockers interfere with.",
        ],
      },
      { type: "heading", text: "7. Submit and monitor" },
      {
        type: "paragraph",
        text: "Once live, tell search engines the site exists and watch what happens. Expect crawling within days and indexing within one to three weeks for a new domain.",
      },
      {
        type: "list",
        items: [
          "Submit the sitemap in Search Console.",
          "Request indexing for your most important pages.",
          "Check the Pages report weekly for excluded URLs.",
          "Fix crawl errors and broken links as they appear.",
        ],
      },
      {
        type: "quote",
        text: "SEO at launch is not about ranking immediately. It is about removing every excuse a search engine has to ignore you.",
      },
      { type: "heading", text: "The short version" },
      {
        type: "paragraph",
        text: "Get the technical foundation right, write metadata with intent, structure content around real questions, add structured data, hit your performance targets, and measure from day one. Do that and your site starts its life with momentum instead of a handicap.",
      },
    ],
    faqs: [
      {
        question: "How long does it take a new website to rank?",
        answer:
          "For a brand new domain, expect crawling within days and indexing within one to three weeks. Meaningful rankings for competitive terms typically take four to six months of consistent work.",
      },
      {
        question: "Do I need an XML sitemap if my site is small?",
        answer:
          "Yes. Even a five-page site benefits from an explicit sitemap because it removes ambiguity about which URLs matter.",
      },
      {
        question: "Is structured data worth it?",
        answer:
          "It is one of the cheapest wins available. It improves how you appear in rich results and helps AI assistants describe your business accurately.",
      },
    ],
  },
  {
    slug: "digital-marketing-budget-guide",
    title: "How to Split Your Digital Marketing Budget for Real Growth",
    description:
      "A practical framework for dividing your digital marketing budget across SEO, paid ads, content and retention — with the ratios I actually use.",
    excerpt:
      "Most businesses either spread their budget too thin or pour everything into one channel. Here is a split that produces compounding growth instead of spikes.",
    date: "2026-08-05",
    category: "digital-marketing",
    tags: ["budget", "paid ads", "strategy", "roi"],
    readingMinutes: 8,
    featured: true,
    cover: { gradient: "from-amber-400 via-orange-500 to-rose-500", icon: "megaphone" },
    content: [
      {
        type: "paragraph",
        text: "The question I hear most often is not which channel to use. It is how to divide a limited budget between them. Spend everything on ads and growth stops the moment you pause. Spend everything on SEO and you may not survive the wait.",
      },
      {
        type: "paragraph",
        text: "The right split depends on your stage, but the logic behind it is consistent: fund the channel that pays now, and fund the channel that pays later.",
      },
      { type: "heading", text: "Start with your numbers, not a percentage" },
      {
        type: "paragraph",
        text: "Before allocating anything, know three figures: your average customer value, your gross margin, and your target cost per acquisition. Those three numbers determine what you can afford, not the other way around.",
      },
      {
        type: "list",
        items: [
          "Average customer value: what a customer is worth over their lifetime, not just the first sale.",
          "Gross margin: what is left after delivery costs — this caps what you can spend to acquire.",
          "Target cost per acquisition: roughly one third of first-order gross profit is a safe starting ceiling.",
        ],
      },
      {
        type: "callout",
        title: "Example",
        text: "If a customer is worth $1,200 over two years at 60% margin, spending $150-$250 to acquire them is comfortable. Spending $600 is not, no matter how good the campaign looks.",
      },
      { type: "heading", text: "A split that works for most growing businesses" },
      {
        type: "paragraph",
        text: "For a business with an established offer and at least some conversion data, this is a durable starting allocation.",
      },
      {
        type: "list",
        items: [
          "40% paid acquisition — search, social and retargeting that produce leads this month.",
          "25% SEO and content — the compounding asset that lowers acquisition cost over time.",
          "15% creative production — ad creative, landing pages and video that feed every channel.",
          "10% retention and lifecycle — email, SMS and win-back flows that raise customer value.",
          "10% testing and experiments — the budget that finds your next winning channel.",
        ],
      },
      {
        type: "paragraph",
        text: "Notice that only 40% buys immediate traffic. The rest is building the machine that makes that 40% cheaper and more effective each quarter.",
      },
      { type: "heading", text: "Adjust for your stage" },
      {
        type: "subheading",
        text: "If you are pre-revenue or brand new",
      },
      {
        type: "paragraph",
        text: "Lean toward paid and creative. You need signal fast. Keep a small SEO budget to publish cornerstone content, but do not expect it to carry the business yet.",
      },
      {
        type: "subheading",
        text: "If you have steady demand and rising ad costs",
      },
      {
        type: "paragraph",
        text: "Shift toward SEO, content and retention. Rising acquisition costs are the clearest signal that you need owned channels to protect your margin.",
      },
      {
        type: "subheading",
        text: "If you sell high-ticket services",
      },
      {
        type: "paragraph",
        text: "Weight content and SEO more heavily. Long consideration cycles mean buyers research for weeks, and the business that owns the research terms wins.",
      },
      { type: "heading", text: "Judge channels on marginal return, not average" },
      {
        type: "paragraph",
        text: "A channel with a great average return is not necessarily where the next dollar should go. What matters is the return on the next increment.",
      },
      {
        type: "list",
        ordered: true,
        items: [
          "Increase spend in a channel in 20% steps.",
          "Watch cost per acquisition after each step.",
          "When costs rise faster than volume, you have found the ceiling.",
          "Move that increment to the next best channel.",
        ],
      },
      { type: "heading", text: "Protect the budget with reporting" },
      {
        type: "paragraph",
        text: "A budget split only survives if the reporting justifies it. Review monthly against three numbers: blended cost per acquisition, return on ad spend, and the share of leads from owned channels.",
      },
      {
        type: "quote",
        text: "If the share of leads from owned channels is not rising quarter over quarter, you are renting growth rather than building it.",
      },
      { type: "heading", text: "Common mistakes to avoid" },
      {
        type: "list",
        items: [
          "Spreading a small budget across five channels and proving nothing in any of them.",
          "Cutting SEO the moment a quarter is soft — that is exactly when compounding assets pay off.",
          "Ignoring retention while spending everything on acquisition.",
          "Scaling a channel past its efficient ceiling because the dashboard looks good.",
          "Judging creative on aesthetics rather than conversion rate.",
        ],
      },
      { type: "heading", text: "The takeaway" },
      {
        type: "paragraph",
        text: "Fund today's growth with paid and creative, fund tomorrow's growth with SEO and retention, and always keep a slice for testing. Rebalance monthly based on marginal return rather than habit.",
      },
    ],
    faqs: [
      {
        question: "What is the minimum budget to start digital marketing?",
        answer:
          "You can generate useful data from as little as $500 per month concentrated in one channel. Spreading less than that across several channels rarely produces a clear result.",
      },
      {
        question: "Should I do SEO or paid ads first?",
        answer:
          "If you need leads this month, start with paid. If you have a longer runway, start both — paid for immediate signal, SEO for compounding cost reduction.",
      },
      {
        question: "How do I know if my budget split is working?",
        answer:
          "Track blended cost per acquisition and the percentage of leads from owned channels. Costs should fall and owned-channel share should rise over two to three quarters.",
      },
    ],
  },
  {
    slug: "core-web-vitals-nextjs",
    title: "Core Web Vitals in 2026: A Practical Guide for Next.js Sites",
    description:
      "How to hit good Core Web Vitals on a Next.js site — LCP, INP and CLS explained with the specific fixes that move each metric.",
    excerpt:
      "Speed is not a technical vanity metric. It decides whether people stay long enough to convert. Here is how to fix the three metrics that matter.",
    date: "2026-07-22",
    category: "web-development",
    tags: ["performance", "core web vitals", "next.js", "lcp", "cls"],
    readingMinutes: 10,
    cover: { gradient: "from-sky-500 via-cyan-500 to-teal-500", icon: "code" },
    content: [
      {
        type: "paragraph",
        text: "Core Web Vitals measure the experience of using your site, not just how fast a server responds. They influence rankings, but more importantly they influence whether a visitor stays, reads and buys.",
      },
      {
        type: "paragraph",
        text: "There are three metrics: Largest Contentful Paint for loading, Interaction to Next Paint for responsiveness, and Cumulative Layout Shift for visual stability. Each has specific, well-understood fixes.",
      },
      { type: "heading", text: "Largest Contentful Paint: under 2.5 seconds" },
      {
        type: "paragraph",
        text: "LCP measures when the biggest visible element — usually a hero image or heading — finishes rendering. It is the metric most sites fail.",
      },
      {
        type: "subheading",
        text: "Fix the image first",
      },
      {
        type: "list",
        items: [
          "Use next/image so images are automatically resized, converted and lazily loaded.",
          "Mark the hero image with priority so it is fetched early instead of lazy-loaded.",
          "Serve modern formats like AVIF or WebP rather than oversized JPEGs.",
          "Never scale a 2400px image down to a 600px slot.",
        ],
      },
      {
        type: "code",
        language: "tsx",
        code: `import Image from "next/image";

<Image
  src="/hero.webp"
  alt="Team reviewing campaign results"
  width={1200}
  height={630}
  priority
  sizes="(max-width: 768px) 100vw, 1200px"
/>`,
      },
      {
        type: "subheading",
        text: "Then fix delivery",
      },
      {
        type: "list",
        items: [
          "Preconnect to font and asset origins you control.",
          "Inline critical CSS and defer the rest.",
          "Reduce third-party scripts — tag managers and chat widgets are frequent culprits.",
          "Use a CDN so the first byte arrives quickly for every region.",
        ],
      },
      { type: "heading", text: "Interaction to Next Paint: under 200 milliseconds" },
      {
        type: "paragraph",
        text: "INP replaced First Input Delay as the responsiveness metric. It measures the worst interaction latency across the whole visit, not just the first click.",
      },
      {
        type: "list",
        items: [
          "Keep client components small — every extra kilobyte of JavaScript is work on the main thread.",
          "Move heavy computation to the server or into a web worker.",
          "Debounce expensive event handlers like search and resize.",
          "Avoid layout thrashing by batching reads and writes to the DOM.",
          "Split long tasks so the browser can respond between them.",
        ],
      },
      {
        type: "callout",
        title: "Server components are a performance feature",
        text: "In the App Router, components are server-rendered by default. Only add 'use client' where interactivity genuinely requires it. Fewer client components means a smaller bundle and better INP.",
      },
      { type: "heading", text: "Cumulative Layout Shift: under 0.1" },
      {
        type: "paragraph",
        text: "Layout shift is the jolt when content moves as the page loads. It feels broken, and it usually comes from four predictable sources.",
      },
      {
        type: "list",
        ordered: true,
        items: [
          "Images without width and height — always reserve space.",
          "Ads, embeds and iframes injected without a reserved container.",
          "Web fonts that swap and change text width — use font-display swap with matched metrics.",
          "Banners or cookie notices pushed into the flow after load — overlay them instead.",
        ],
      },
      { type: "heading", text: "Measure with real user data" },
      {
        type: "paragraph",
        text: "Lab scores are a starting point. Real user data is the truth. Use both, but trust the field data when they disagree.",
      },
      {
        type: "list",
        items: [
          "Lighthouse and PageSpeed Insights for quick lab diagnostics.",
          "Chrome DevTools Performance panel for main-thread bottlenecks.",
          "The web-vitals library or your analytics platform for field data.",
          "Search Console Core Web Vitals report for real-world pass or fail at scale.",
        ],
      },
      { type: "heading", text: "A practical order of operations" },
      {
        type: "list",
        ordered: true,
        items: [
          "Fix images: sizing, format and priority on the hero.",
          "Remove or defer third-party scripts you do not need.",
          "Reserve space for every image, embed and ad slot.",
          "Reduce client-side JavaScript by moving logic to the server.",
          "Re-measure and repeat, because fixing one metric can shift another.",
        ],
      },
      {
        type: "quote",
        text: "Performance work is not a one-time project. It is a constraint you hold the line on with every feature you ship.",
      },
      { type: "heading", text: "The takeaway" },
      {
        type: "paragraph",
        text: "Optimize the hero image for LCP, shrink your JavaScript for INP, and reserve space for everything for CLS. Those three habits cover the vast majority of real-world improvements.",
      },
    ],
    faqs: [
      {
        question: "Do Core Web Vitals actually affect rankings?",
        answer:
          "They act as a tiebreaker between comparable pages, but the bigger impact is on user behaviour — faster pages keep visitors and convert better.",
      },
      {
        question: "Why is my Lighthouse score good but field data bad?",
        answer:
          "Lighthouse runs on a fast machine with a warm cache. Field data reflects real devices, real networks and real third-party scripts. Trust the field data.",
      },
      {
        question: "How do I find what is hurting INP?",
        answer:
          "Use the Chrome DevTools Performance panel to record interactions and look for long tasks on the main thread. Third-party scripts and large client components are the usual causes.",
      },
    ],
  },
  {
    slug: "automate-lead-follow-up",
    title: "Automate Lead Follow-Up Without Losing the Human Touch",
    description:
      "A practical blueprint for automating lead capture, routing and follow-up so response times drop from hours to minutes without sounding robotic.",
    excerpt:
      "Speed to lead is one of the strongest predictors of conversion. Automation gets you there without turning your brand into a robot.",
    date: "2026-07-09",
    category: "automation",
    tags: ["crm", "lead gen", "workflow", "sales"],
    readingMinutes: 8,
    cover: { gradient: "from-emerald-500 via-teal-500 to-cyan-600", icon: "workflow" },
    content: [
      {
        type: "paragraph",
        text: "A lead that waits four hours for a reply is a lead you are competing to win. A lead that hears back in four minutes is a lead that already trusts you. Automation closes that gap without hiring a night shift.",
      },
      {
        type: "paragraph",
        text: "The goal is not to remove humans. It is to remove the waiting, the manual data entry and the dropped follow-ups that make your team look disorganized.",
      },
      { type: "heading", text: "Step 1: Capture every lead in one place" },
      {
        type: "paragraph",
        text: "Before automating follow-up, make sure every lead lands in the same system. Leads split across inboxes, spreadsheets and DMs are impossible to work reliably.",
      },
      {
        type: "list",
        items: [
          "Connect website forms, chat, phone and social enquiries to your CRM.",
          "Include a source field so you know which channel produced each lead.",
          "Enrich new records with company and location data where relevant.",
          "Deduplicate by email and phone so the same person does not appear three times.",
        ],
      },
      { type: "heading", text: "Step 2: Respond within five minutes" },
      {
        type: "paragraph",
        text: "The first automated message should confirm receipt, set expectations and add value — not just say thanks. Personalize with the field they filled in.",
      },
      {
        type: "code",
        language: "text",
        code: `Subject: Your {{service}} enquiry — here is what happens next

Hi {{first_name}},

Thanks for reaching out about {{service}}. I have your details
and you will hear from a specialist within one business hour.

In the meantime, here is the guide I send most {{industry}}
clients first: {{resource_link}}

— {{owner_name}}`,
      },
      {
        type: "callout",
        title: "Set expectations honestly",
        text: "Promising a reply within an hour and delivering in six is worse than promising a day. Only automate commitments your team can keep.",
      },
      { type: "heading", text: "Step 3: Route to the right person instantly" },
      {
        type: "paragraph",
        text: "Routing rules replace the manual triage that causes delays. Match on service, geography, deal size or account owner.",
      },
      {
        type: "list",
        ordered: true,
        items: [
          "High-value or enterprise leads go straight to a senior rep.",
          "Service-specific leads go to the specialist for that service.",
          "Out-of-hours leads get the automated reply plus a next-morning task.",
          "Unmatched leads land in a shared queue with a same-day SLA.",
        ],
      },
      { type: "heading", text: "Step 4: Build a follow-up sequence with a human in it" },
      {
        type: "paragraph",
        text: "Most deals need several touches. Automate the timing and the reminders, but keep at least one touch genuinely personal.",
      },
      {
        type: "list",
        items: [
          "Day 0: instant confirmation with a useful resource.",
          "Day 1: personal message from the assigned rep referencing their enquiry.",
          "Day 3: relevant case study or example.",
          "Day 7: short check-in asking one specific question.",
          "Day 14: polite close-the-loop message with an easy way to re-engage.",
        ],
      },
      {
        type: "paragraph",
        text: "Stop the sequence the moment a lead replies or books a call. Nothing erodes trust faster than a scripted follow-up arriving after a real conversation has started.",
      },
      { type: "heading", text: "Step 5: Hand off to a human at the right moment" },
      {
        type: "paragraph",
        text: "Automation should know when to step aside. Define clear triggers that create a task or notify a person.",
      },
      {
        type: "list",
        items: [
          "Any reply to an automated message.",
          "A pricing or contract question.",
          "Two or more visits to the pricing page.",
          "A lead marked high-intent by scoring rules.",
        ],
      },
      { type: "heading", text: "Step 6: Measure and tighten" },
      {
        type: "paragraph",
        text: "Track the metrics that reveal whether the automation is helping or hiding problems.",
      },
      {
        type: "list",
        items: [
          "Median first response time — target under five minutes.",
          "Percentage of leads contacted within one hour.",
          "Reply rate per sequence step.",
          "Lead-to-opportunity conversion rate by source.",
          "Percentage of leads that go stale without a human touch.",
        ],
      },
      {
        type: "quote",
        text: "Automate the waiting, not the relationship. The moment a lead replies, a person should own the conversation.",
      },
      { type: "heading", text: "The takeaway" },
      {
        type: "paragraph",
        text: "Centralize capture, respond in minutes, route intelligently, sequence the follow-up with a human moment inside it, and hand off the moment intent appears. That is a follow-up system that scales without feeling mechanical.",
      },
    ],
    faqs: [
      {
        question: "Will automated follow-up feel impersonal?",
        answer:
          "Only if you let it. Personalize with the data the lead gave you, keep the copy conversational, and ensure a human takes over the moment they reply.",
      },
      {
        question: "How fast should you respond to a new lead?",
        answer:
          "Under five minutes is ideal. Response within the first hour dramatically increases the chance of a conversation compared to next-day follow-up.",
      },
      {
        question: "Do I need an expensive CRM to do this?",
        answer:
          "No. Most of this is achievable with mainstream tools. The workflow design matters far more than the price of the platform.",
      },
    ],
  },
  {
    slug: "brand-identity-that-converts",
    title: "Why Your Brand Identity Is a Conversion Tool",
    description:
      "Branding is not just aesthetics. Learn how consistency, clarity and design systems directly influence trust and conversion rates.",
    excerpt:
      "Visitors judge your credibility in milliseconds. A consistent identity is one of the cheapest conversion levers you have.",
    date: "2026-06-26",
    category: "branding",
    tags: ["branding", "design system", "conversion", "trust"],
    readingMinutes: 7,
    cover: { gradient: "from-fuchsia-500 via-purple-500 to-violet-600", icon: "palette" },
    content: [
      {
        type: "paragraph",
        text: "People decide whether to trust a website before they read a sentence. Colour, spacing, typography and consistency all feed that instant judgement. Treating branding as decoration means leaving that judgement to chance.",
      },
      { type: "heading", text: "Consistency signals reliability" },
      {
        type: "paragraph",
        text: "When your logo, colours and tone match across your website, ads, invoices and social profiles, visitors infer that your operations are equally consistent. When they do not, the opposite inference happens — often unconsciously.",
      },
      {
        type: "list",
        items: [
          "The same primary colour across every touchpoint.",
          "One typographic hierarchy, not four competing ones.",
          "A consistent voice — formal or casual, but always the same.",
          "Logo clear-space respected at every size.",
        ],
      },
      {
        type: "callout",
        title: "The trust test",
        text: "Screenshot your homepage, your latest ad and your invoice. Put them side by side. If a stranger would not guess they come from the same company, your identity is costing you conversions.",
      },
      { type: "heading", text: "Clarity beats cleverness" },
      {
        type: "paragraph",
        text: "A visitor should understand what you do, who it is for and what to do next within five seconds. Clever taglines that require interpretation lose to plain ones every time.",
      },
      {
        type: "list",
        ordered: true,
        items: [
          "State the outcome you deliver, not the process you use.",
          "Name the audience so the right people recognize themselves.",
          "Make the next step obvious with one clear primary action.",
          "Remove competing calls to action above the fold.",
        ],
      },
      { type: "heading", text: "Design systems make good design repeatable" },
      {
        type: "paragraph",
        text: "A brand is only as strong as its weakest asset. Design systems solve that by giving everyone reusable components instead of one-off files.",
      },
      {
        type: "list",
        items: [
          "Defined colour tokens with accessible contrast ratios.",
          "A type scale with clear usage rules for each level.",
          "Reusable card, button and form patterns.",
          "Social templates your team can edit without a designer.",
          "Component states: hover, focus, disabled, error, empty.",
        ],
      },
      { type: "heading", text: "Design affects performance, not just perception" },
      {
        type: "paragraph",
        text: "Visual hierarchy guides attention. When everything shouts, nothing is heard. Thoughtful design reduces cognitive load, which raises completion rates on forms and checkouts.",
      },
      {
        type: "list",
        items: [
          "One primary action per screen.",
          "Generous spacing around the elements that matter.",
          "Contrast reserved for the things you want clicked.",
          "Forms with clear labels and obvious error states.",
        ],
      },
      {
        type: "quote",
        text: "Good design does not decorate the message. It removes everything that gets in the message's way.",
      },
      { type: "heading", text: "What to fix first" },
      {
        type: "list",
        ordered: true,
        items: [
          "Make the value proposition unmistakable on the homepage.",
          "Unify colours and typography across your top five touchpoints.",
          "Build a small set of reusable social and ad templates.",
          "Document the rules so consistency survives your team growing.",
        ],
      },
      { type: "heading", text: "The takeaway" },
      {
        type: "paragraph",
        text: "Branding is the cumulative effect of a hundred small consistency decisions. Get them right and trust is easier to earn — and every other marketing channel gets more efficient.",
      },
    ],
    faqs: [
      {
        question: "How do I know if my branding needs work?",
        answer:
          "If your assets look inconsistent side by side, or a visitor cannot tell what you do within five seconds, it needs work regardless of how it looks in isolation.",
      },
      {
        question: "Is a rebrand worth the cost?",
        answer:
          "When the current identity actively undermines trust or blocks scaling, yes. Otherwise refine what you have rather than starting over.",
      },
      {
        question: "What should a brand guideline include?",
        answer:
          "Logo usage, colour values, typography, imagery direction, tone of voice and examples of correct and incorrect application.",
      },
    ],
  },
  {
    slug: "local-seo-for-small-business",
    title: "Local SEO for Small Businesses: Winning the Map Pack",
    description:
      "A step-by-step local SEO playbook covering Google Business Profile, reviews, local citations and location pages that actually rank.",
    excerpt:
      "For local businesses, the map pack is the most valuable real estate on the internet. Here is how to get into it and stay there.",
    date: "2026-06-11",
    category: "seo",
    tags: ["local seo", "google business profile", "reviews", "citations"],
    readingMinutes: 9,
    cover: { gradient: "from-rose-500 via-pink-500 to-fuchsia-600", icon: "megaphone" },
    content: [
      {
        type: "paragraph",
        text: "When someone searches for a service near them, the first thing they see is the map pack — three businesses with photos, ratings and directions. Ranking there beats ranking first in the blue links, because it captures the intentiest traffic on the web.",
      },
      {
        type: "paragraph",
        text: "Local SEO is not a mystery. It is a set of specific, repeatable actions around your profile, your reviews, your citations and your location pages.",
      },
      { type: "heading", text: "1. Optimize your Google Business Profile completely" },
      {
        type: "paragraph",
        text: "An incomplete profile is a profile that loses to a complete one. Fill out every field Google offers.",
      },
      {
        type: "list",
        items: [
          "Choose the most specific primary category available, then add relevant secondary ones.",
          "Write a business description using natural language, not keyword stuffing.",
          "Add your service areas and hours, including holiday hours.",
          "Upload real photos of your team, premises and work — refreshed monthly.",
          "List every service with its own short description.",
          "Enable messaging and answer questions in the Q&A section yourself.",
        ],
      },
      { type: "heading", text: "2. Build a steady review engine" },
      {
        type: "paragraph",
        text: "Reviews are the strongest local ranking factor you directly control, and they convert. The key is consistency rather than bursts.",
      },
      {
        type: "list",
        ordered: true,
        items: [
          "Ask every satisfied customer at the moment of delivery.",
          "Send a direct review link so it takes one tap.",
          "Respond to every review — positive and negative — within two days.",
          "Never buy reviews; the risk far outweighs the short-term gain.",
          "Include service keywords naturally in your replies.",
        ],
      },
      {
        type: "callout",
        title: "Volume and recency both matter",
        text: "Twenty reviews from three years ago rank worse than ten reviews from the last six months. Keep the flow steady rather than front-loaded.",
      },
      { type: "heading", text: "3. Fix and grow your citations" },
      {
        type: "paragraph",
        text: "Citations are mentions of your business name, address and phone number across the web. Consistency matters more than volume.",
      },
      {
        type: "list",
        items: [
          "Audit your NAP — name, address, phone — for exact consistency everywhere.",
          "Claim the major directories relevant to your country and industry.",
          "Remove or correct duplicate and outdated listings.",
          "Add local chamber of commerce and association listings where available.",
        ],
      },
      { type: "heading", text: "4. Create genuinely useful location pages" },
      {
        type: "paragraph",
        text: "If you serve multiple areas, one page per location can rank well — but only if each page is meaningfully different. Duplicate location pages are a common and damaging mistake.",
      },
      {
        type: "list",
        items: [
          "Unique content specific to that area: local landmarks, coverage details, testimonials.",
          "Embedded map and clear directions.",
          "Local phone number or service-area details.",
          "Internal links from your main services pages.",
          "LocalBusiness structured data with the correct area served.",
        ],
      },
      { type: "heading", text: "5. Add local structured data" },
      {
        type: "code",
        language: "json",
        code: `{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Your Business",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Level 4, Banani",
    "addressLocality": "Dhaka",
    "postalCode": "1213",
    "addressCountry": "BD"
  },
  "geo": { "@type": "GeoCoordinates", "latitude": 23.7936, "longitude": 90.4043 },
  "telephone": "+880 1712-345678",
  "openingHours": "Mo-Fr 09:00-18:00"
}`,
      },
      { type: "heading", text: "6. Track what is working" },
      {
        type: "paragraph",
        text: "Use the data inside your Business Profile and Search Console to see which queries and actions are growing.",
      },
      {
        type: "list",
        items: [
          "Profile calls, direction requests and website clicks.",
          "Search terms triggering your map listing.",
          "Review velocity and average rating over time.",
          "Local landing page rankings in Search Console.",
        ],
      },
      {
        type: "quote",
        text: "Local SEO rewards the business that is most present, most reviewed and most consistent — not necessarily the biggest.",
      },
      { type: "heading", text: "The takeaway" },
      {
        type: "paragraph",
        text: "Complete your profile, build a steady review habit, keep citations consistent, write location pages that are actually unique, and add local structured data. Do that consistently and the map pack becomes your most reliable lead source.",
      },
    ],
    faqs: [
      {
        question: "How long does local SEO take to work?",
        answer:
          "Profile improvements can move rankings within two to four weeks. Building durable top-three map pack presence typically takes three to six months of consistent effort.",
      },
      {
        question: "Do reviews really affect local rankings?",
        answer:
          "Yes. Review volume, rating and recency are among the strongest factors you can directly influence, and they heavily influence click-through as well.",
      },
      {
        question: "Do I need a physical address to rank locally?",
        answer:
          "You need a genuine presence. Service-area businesses can rank without a public address, but you must follow Google's guidelines and verify your service areas properly.",
      },
    ],
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((post) => post.slug === slug);
}

export function getPostSlugs(): string[] {
  return posts.map((post) => post.slug);
}

export function getSortedPosts(): Post[] {
  return [...posts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

export function getFeaturedPosts(): Post[] {
  return getSortedPosts().filter((post) => post.featured);
}

export function getPostsByCategory(categorySlug: string): Post[] {
  return getSortedPosts().filter((post) => post.category === categorySlug);
}

export function getCategory(slug: string): PostCategory | undefined {
  return postCategories.find((category) => category.slug === slug);
}

export function getRelatedPosts(post: Post, limit = 3): Post[] {
  const others = getSortedPosts().filter((item) => item.slug !== post.slug);
  const sameCategory = others.filter((item) => item.category === post.category);
  const rest = others.filter((item) => item.category !== post.category);
  return [...sameCategory, ...rest].slice(0, limit);
}
