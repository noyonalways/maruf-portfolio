/**
 * ============================================================================
 *  SITE CONTENT — EDIT THIS FILE
 * ============================================================================
 *
 *  Everything a non-technical editor needs to change lives in this one file:
 *  business details, contact info, social links, the homepage hero, the About
 *  page, values, process, testimonials, stats, FAQs and the call-to-action.
 *
 *  HOW TO EDIT
 *  -----------
 *  1. Only change the text between the "quotes".
 *  2. Keep the quotes (") and the comma (,) at the end of every line.
 *  3. Save the file. The website updates on the next build / refresh.
 *
 *  WHERE THE REST OF THE CONTENT LIVES
 *  -----------------------------------
 *  - src/content/services.ts   → the four services (features, pricing, FAQs)
 *  - src/content/blogs/*.md    → blog articles (one Markdown file per article)
 *
 *  If you are unsure, read CONTENT-GUIDE.md in the project root.
 * ============================================================================
 */

/* ==========================================================================
 *  1. BUSINESS DETAILS  (name, contact, social links)
 * ========================================================================== */

export const siteConfig = {
  /** Full name shown across the site. */
  name: "Md. Maruf Mondol",
  /** Shorter name used in tight spaces (browser tab, app icon). */
  shortName: "Maruf Mondol",
  /** Your job title. */
  role: "Digital Marketer",
  /** Your photo. Replace the file public/maruf-mondol.png, or change this path. */
  photo: "/maruf-mondol.png",
  /** The short sentence that appears in search results and social previews. */
  tagline: "Smart digital marketing that drives real growth",
  /** A one-paragraph description of what you do. */
  description:
    "Md. Maruf Mondol is a digital marketer helping businesses grow with SEO, digital marketing, graphics design, web development and business automation.",
  /** Your live website address (no trailing slash). */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://marufmondol.com",
  /** Language/region for search engines. Leave as-is unless you know why. */
  locale: "en_US",

  /* ---- Contact ---- */
  email: "hello@marufmondol.com",
  /** Phone number as you want it displayed. */
  phone: "+880 1712-345678",
  /** Same number in "click to call" format: tel: + country code + number. */
  phoneHref: "tel:+8801712345678",
  /** WhatsApp link: https://wa.me/ + country code + number. */
  whatsapp: "https://wa.me/8801712345678",

  /* ---- Address ---- */
  address: {
    street: "Level 4, Banani",
    city: "Dhaka",
    region: "Dhaka",
    postalCode: "1213",
    country: "Bangladesh",
  },
  /** Map coordinates — search your address on Google Maps to find these. */
  geo: { latitude: 23.7936, longitude: 90.4043 },

  /** The year you started working with clients. */
  experienceSince: "2019",

  /* ---- Social profiles (paste your full profile links) ---- */
  social: {
    facebook: "https://facebook.com/marufmondol",
    linkedin: "https://linkedin.com/in/marufmondol",
    x: "https://x.com/marufmondol",
    instagram: "https://instagram.com/marufmondol",
    youtube: "https://youtube.com/@marufmondol",
    github: "https://github.com/marufmondol",
  },
  /** Your handle, used in social previews. */
  handle: "@marufmondol",

  /** Words search engines use to understand your site. */
  keywords: [
    "Md. Maruf Mondol",
    "digital marketer",
    "digital marketing consultant",
    "SEO specialist",
    "SEO services",
    "graphics design",
    "web development",
    "business automation",
    "digital marketer Bangladesh",
  ],

  /**
   * Developer credit. Shown as a small line in the footer and in the page
   * source only — not part of the visible marketing content.
   */
  developer: {
    name: "Noyon Rahman",
    url: "https://noyonrahman.com",
    github: "https://github.com/noyonalways",
  },
} as const;

export type SiteConfig = typeof siteConfig;

/* ==========================================================================
 *  2. NAVIGATION  (the menu at the top of every page)
 * ========================================================================== */

export const mainNav = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Services", href: "/services" },
  { title: "Blog", href: "/blog" },
  { title: "Contact", href: "/contact" },
] as const;

export const socialLinks = [
  { title: "Facebook", href: siteConfig.social.facebook, icon: "facebook" },
  { title: "LinkedIn", href: siteConfig.social.linkedin, icon: "linkedin" },
  { title: "X", href: siteConfig.social.x, icon: "x" },
  { title: "Instagram", href: siteConfig.social.instagram, icon: "instagram" },
  { title: "YouTube", href: siteConfig.social.youtube, icon: "youtube" },
] as const;

/* ==========================================================================
 *  3. HOMEPAGE HERO  (the first thing visitors see)
 * ========================================================================== */

export const hero = {
  /** The main headline. The highlighted part gets the coloured gradient. */
  headline: "Smart digital marketing that drives",
  headlineHighlight: "real growth",
  /** The paragraph under the headline. */
  intro:
    "I'm Md. Maruf Mondol. I blend creativity, technology and strategic thinking to deliver digital marketing, SEO, design, web development and business automation that produce measurable results — not busywork.",
  /** The two buttons. Change the "label" text and, if needed, the "href" link. */
  primaryCta: { label: "Book a free strategy call", href: "/contact" },
  secondaryCta: { label: "Explore my services", href: "/services" },
  /** The small trust line under the buttons. */
  rating: "Rated 5.0 by 48+ businesses",
};

/* ==========================================================================
 *  4. ABOUT PAGE
 * ========================================================================== */

export const about = {
  /** The big heading at the top of the About page. */
  heroTitle: "I help businesses grow online with work that is",
  heroTitleHighlight: "measured, not guessed",
  /** The paragraph under the About heading. */
  heroDescription:
    "Md. Maruf Mondol is a digital marketer blending creativity, technology and strategic thinking to deliver digital marketing, SEO, design, web development and business automation.",
  /** The "My story" paragraphs. Add or remove lines as you like. */
  story: [
    "I started out in digital marketing the way most people do — learning by shipping work and watching the numbers. What stuck with me was how often businesses were spending real money on tactics that were never connected to a clear outcome.",
    "So I built my practice around a simple idea: start with your numbers, not with a service list. Understand what a customer is worth, what a lead costs, and what margin you have to work with — then choose the channels, creative and technology that make sense for your situation.",
    "Today I work with businesses and individuals across digital marketing, SEO, graphics design, web development and business automation. I believe success lies at the intersection of vision, innovation and execution, and that the work should be judged by the growth it produces.",
    "Whether you run a small business or a large corporation, I work closely with you to create customized solutions that align with your objectives — and I stay close enough to be accountable for the results.",
  ],
  /** The pull-quote shown under your story. */
  quote:
    "I don't just provide services — I build lasting partnerships that help my clients achieve meaningful success.",
  /** The skill bars. "value" is a number from 0 to 100. */
  skills: [
    { label: "SEO & Organic Growth", value: 95 },
    { label: "Paid Media & PPC", value: 92 },
    { label: "Conversion Optimization", value: 88 },
    { label: "Analytics & Reporting", value: 90 },
    { label: "Marketing Automation", value: 85 },
  ],
};

/* ==========================================================================
 *  5. MISSION & VISION
 * ========================================================================== */

export const mission =
  "To help businesses and individuals unlock their full potential online by delivering smart digital solutions that foster sustainable growth and long-term success. Whether you run a small business or a large corporation, I work closely with you to build solutions that align with your objectives — and measure them honestly.";

export const vision =
  "To be recognised as a trusted digital marketer known for delivering exceptional marketing services, top-tier SEO strategies and seamless business automation — work that produces measurable results rather than vanity metrics.";

/* ==========================================================================
 *  6. VALUES  (the "What I stand for" cards)
 *     icon must be one of: shield, sparkles, users, trending
 * ========================================================================== */

export type Value = {
  title: string;
  description: string;
  icon: "shield" | "sparkles" | "users" | "trending";
};

export const values: Value[] = [
  {
    title: "Trust & Professionalism",
    description:
      "Long-term relationships are built on trust and integrity. Clear scope, honest timelines and no hidden surprises — ever.",
    icon: "shield",
  },
  {
    title: "Innovation & Creativity",
    description:
      "I keep looking for creative solutions to the ever-changing needs of the digital world instead of recycling last year's playbook.",
    icon: "sparkles",
  },
  {
    title: "Client-Centric Approach",
    description:
      "Your success is at the heart of everything I do. Your numbers are the scoreboard I care about.",
    icon: "users",
  },
  {
    title: "Continuous Improvement",
    description:
      "I embrace constant improvement so the strategies I bring you stay ahead of shifting platforms and algorithms.",
    icon: "trending",
  },
];

/* ==========================================================================
 *  7. WHY CHOOSE ME  (the differentiator cards)
 *     icon must be one of: target, gauge, layers, heart
 * ========================================================================== */

export type Differentiator = {
  title: string;
  description: string;
  icon: "target" | "gauge" | "layers" | "heart";
};

export const differentiators: Differentiator[] = [
  {
    title: "Strategy before execution",
    description:
      "Every engagement starts with research, positioning and a measurable plan — not a list of tactics.",
    icon: "target",
  },
  {
    title: "One person, full stack",
    description:
      "Marketing, design, development and automation from a single accountable partner, so nothing gets lost between vendors.",
    icon: "layers",
  },
  {
    title: "Transparent reporting",
    description:
      "You see what I see. Plain-English reporting on spend, leads and results every single month.",
    icon: "gauge",
  },
  {
    title: "Partnership, not projects",
    description:
      "I act like an extension of your team and care about the outcome long after launch day.",
    icon: "heart",
  },
];

/* ==========================================================================
 *  8. MY PROCESS  (the numbered steps)
 *     "step" is the number shown in the circle.
 * ========================================================================== */

export type ProcessStep = {
  step: string;
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Discover",
    description:
      "I dig into your business, audience, competitors and current numbers to understand what actually drives growth for you.",
  },
  {
    step: "02",
    title: "Strategize",
    description:
      "You receive a clear plan: priorities, channels, budget, timeline and the KPIs I will be measured against.",
  },
  {
    step: "03",
    title: "Create",
    description:
      "Design, development and content come together — built to the plan, reviewed with you, refined until it is right.",
  },
  {
    step: "04",
    title: "Launch",
    description:
      "Everything goes live with tracking in place from day one, so performance is visible immediately.",
  },
  {
    step: "05",
    title: "Optimize",
    description:
      "I test, measure and improve continuously, reporting on what changed and what it produced.",
  },
];

/* ==========================================================================
 *  9. TESTIMONIALS  (client quotes)
 *     "initials" are shown in the avatar circle, "rating" is 1–5.
 * ========================================================================== */

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
  initials: string;
  rating: number;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Maruf rebuilt our website and took over our marketing. Organic traffic tripled in five months and the site finally feels like our brand. The reporting is the clearest I have ever had from a marketer.",
    name: "Sarah Whitfield",
    role: "Managing Director",
    company: "Northline Interiors",
    initials: "SW",
    rating: 5,
  },
  {
    quote:
      "He understood our numbers before he touched our ads. Cost per lead dropped 41% in the first quarter and we finally know which channel is actually paying for itself.",
    name: "Daniel Okafor",
    role: "Founder",
    company: "Corely SaaS",
    initials: "DO",
    rating: 5,
  },
  {
    quote:
      "The automation work changed how our office runs. Leads get answered in minutes, invoices go out automatically, and my team stopped doing data entry. Easily the best money we spent last year.",
    name: "Priya Raman",
    role: "Operations Lead",
    company: "Harbour Logistics",
    initials: "PR",
    rating: 5,
  },
  {
    quote:
      "Our brand finally looks as professional as the work we do. The design system he handed over means we can create our own social content now without waiting on anyone.",
    name: "Tom Bergström",
    role: "Co-founder",
    company: "Lumen Studio",
    initials: "TB",
    rating: 5,
  },
  {
    quote:
      "Honest, fast and genuinely invested. He flagged a channel that was wasting our budget instead of quietly billing us for it. That is why we have stayed for two years.",
    name: "Ayesha Karim",
    role: "Head of Growth",
    company: "Verity Health",
    initials: "AK",
    rating: 5,
  },
  {
    quote:
      "We went from page four to the map pack top three in our city. Walk-ins are up and the phone rings before lunch most days. Local SEO finally makes sense to us.",
    name: "Marcus Bell",
    role: "Owner",
    company: "Bell & Co. Dental",
    initials: "MB",
    rating: 5,
  },
];

/* ==========================================================================
 *  10. HEADLINE STATS  (the four big numbers)
 * ========================================================================== */

export const stats = [
  { value: "120+", label: "Projects delivered" },
  { value: "48+", label: "Businesses supported" },
  { value: "3.4x", label: "Average return on ad spend" },
  { value: "98%", label: "Client retention rate" },
];

/* ==========================================================================
 *  11. CLIENT NAMES  (the scrolling logo strip — plain text)
 * ========================================================================== */

export const clients = [
  "Northline",
  "Corely",
  "Harbour Logistics",
  "Lumen Studio",
  "Verity Health",
  "Bell & Co.",
  "Orbit Labs",
  "Fairmont Retail",
  "Skyline Realty",
  "Meridian Foods",
];

/* ==========================================================================
 *  12. MY JOURNEY  (the timeline on the About page)
 * ========================================================================== */

export type Milestone = {
  year: string;
  title: string;
  description: string;
};

export const milestones: Milestone[] = [
  {
    year: "2019",
    title: "Started in digital marketing",
    description:
      "Began with SEO and content for local businesses, learning the fundamentals by shipping work and reading the numbers.",
  },
  {
    year: "2021",
    title: "Moved into performance marketing",
    description:
      "Added paid search and social to the mix, managing budgets where every dollar had to be justified by a measurable return.",
  },
  {
    year: "2023",
    title: "Expanded into design and web development",
    description:
      "Started building the full funnel — brand identity, websites and landing pages — so campaigns had a destination worth sending traffic to.",
  },
  {
    year: "2024",
    title: "Added business automation",
    description:
      "Began removing manual work with workflow automation, CRM integrations and practical AI assistants for clients.",
  },
  {
    year: "Today",
    title: "An independent digital marketer",
    description:
      "Working directly with businesses worldwide across marketing, design, development and automation — strategy to execution, one accountable partner.",
  },
];

/* ==========================================================================
 *  13. FREQUENTLY ASKED QUESTIONS
 * ========================================================================== */

export const generalFaqs = [
  {
    question: "What do you actually do?",
    answer:
      "I work across four core services: digital marketing, graphics design, web development and business automation. Most clients start with one and expand as they see results.",
  },
  {
    question: "How quickly can we get started?",
    answer:
      "Discovery calls usually happen within one business day of your enquiry. For most projects I can start within one to two weeks of agreeing the scope.",
  },
  {
    question: "Do you work with small businesses?",
    answer:
      "Yes. A large share of my work is with small and medium businesses. I scope engagements to fit your stage and budget rather than forcing an enterprise package.",
  },
  {
    question: "How do you price your work?",
    answer:
      "Marketing and ongoing support are monthly retainers. Websites, branding and automation are fixed-price projects based on scope. You always get a written quote before we begin.",
  },
  {
    question: "Can you work with my existing website or team?",
    answer:
      "Absolutely. I frequently improve existing sites, support in-house marketing teams, and integrate with the tools you already use instead of replacing them.",
  },
  {
    question: "What reporting will I receive?",
    answer:
      "You get a live dashboard plus a written monthly summary covering what I did, what it produced and what I am changing next. No vanity metrics.",
  },
  {
    question: "Are there long-term contracts?",
    answer:
      "Retainers run in 90-day cycles so you can evaluate real results. Project work is fixed-scope with clear milestones.",
  },
  {
    question: "Who will I work with day to day?",
    answer:
      "Me. I lead strategy and stay hands-on across every engagement, so you always know who is accountable for the results.",
  },
];

/* ==========================================================================
 *  14. CALL-TO-ACTION BAND  (the coloured box near the bottom of pages)
 * ========================================================================== */

export const cta = {
  title: "Ready to grow your business online?",
  description:
    "Tell me where you are today and where you want to be. I will come back with a clear, honest plan — no jargon, no pressure.",
  primaryLabel: "Book a free strategy call",
  primaryHref: "/contact",
};

/* ==========================================================================
 *  15. CONTACT PAGE
 * ========================================================================== */

export const contact = {
  heroTitle: "Let's talk about your",
  heroTitleHighlight: "growth",
  heroDescription:
    "If you are ready to take your business to the next level with digital solutions that actually get measured, I am here to help. Tell me where you are and I will show you what is possible.",
};
