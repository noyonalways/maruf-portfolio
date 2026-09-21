/**
 * ============================================================================
 *  SERVICES — EDIT THIS FILE
 * ============================================================================
 *  Each service below is one card on the Services page and its own page, e.g.
 *  /services/digital-marketing.
 *
 *  To edit a service: change the text between the "quotes".
 *  To add a service: copy a whole { ... } block, paste it after the last one,
 *  then change the values. Keep the "slug" short, lowercase and unique (use
 *  dashes instead of spaces), and point "related" at the slugs of other
 *  services you want to link to.
 *
 *  "icon" must be one of: megaphone, palette, code, workflow
 * ============================================================================
 */

export type ServiceFeature = {
  title: string;
  description: string;
};

export type ServiceProcessStep = {
  title: string;
  description: string;
};

export type ServiceFaq = {
  question: string;
  answer: string;
};

export type ServiceStat = {
  value: string;
  label: string;
};

export type Service = {
  /** Short, lowercase id used in the URL (dashes, no spaces). */
  slug: string;
  /** Full service name. */
  title: string;
  /** Shorter name used in menus and cards. */
  shortTitle: string;
  /** One-line promise shown on cards. */
  tagline: string;
  /** One-paragraph summary used in previews and search results. */
  summary: string;
  /** Paragraphs shown at the top of the service page. */
  description: string[];
  /** One of: megaphone, palette, code, workflow. */
  icon: ServiceIconName;
  /** Tailwind gradient classes for the service icon. */
  accent: string;
  /** Starting price shown on the card, e.g. "$499/mo". */
  priceFrom: string;
  /** Words search engines use to understand this service. */
  keywords: string[];
  /** Three short selling points. */
  highlights: string[];
  /** What is included — the feature cards. */
  features: ServiceFeature[];
  /** The numbered "how it works" steps. */
  process: ServiceProcessStep[];
  /** The deliverables checklist. */
  deliverables: string[];
  /** Three small stats shown on the service page. */
  stats: ServiceStat[];
  /** Questions shown at the bottom of the service page. */
  faqs: ServiceFaq[];
  /** Slugs of other services to link to. */
  related: string[];
};

export type ServiceIconName = "megaphone" | "palette" | "code" | "workflow";

export const services: Service[] = [
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    shortTitle: "Digital Marketing",
    tagline: "Campaigns that turn attention into revenue",
    summary:
      "Brand-building campaigns and full-funnel online marketing that grow visibility, traffic and qualified leads through SEO, PPC and social media.",
    description: [
      "I design brand-building campaigns and online marketing solutions that enhance your visibility and grow your audience through effective SEO, PPC and social media tactics.",
      "Every engagement starts with your numbers — where demand comes from, what a lead is worth, and which channels can scale profitably. From there I build a channel mix you can actually measure, not a vanity dashboard.",
    ],
    icon: "megaphone",
    accent: "from-violet-500 to-indigo-600",
    priceFrom: "$499/mo",
    keywords: [
      "digital marketing consultant",
      "PPC management",
      "social media marketing",
      "performance marketing",
      "lead generation",
    ],
    highlights: [
      "Full-funnel strategy before spend",
      "Transparent reporting you can read",
      "Creative and media in one place",
    ],
    features: [
      {
        title: "Search Engine Optimization",
        description:
          "Technical fixes, on-page optimization and content built around the queries your buyers actually type.",
      },
      {
        title: "Google & Meta Ads",
        description:
          "Paid search, shopping and paid social campaigns structured for efficient cost per acquisition.",
      },
      {
        title: "Social Media Management",
        description:
          "Content calendars, community management and creative that keeps your brand present and consistent.",
      },
      {
        title: "Content Marketing",
        description:
          "Blogs, landing pages and lead magnets that answer real questions and earn organic traffic.",
      },
      {
        title: "Email & Lifecycle",
        description:
          "Welcome flows, nurture sequences and retention campaigns that keep customers coming back.",
      },
      {
        title: "Analytics & Attribution",
        description:
          "GA4, conversion tracking and clean reporting so every decision is backed by real numbers.",
      },
    ],
    process: [
      {
        title: "Audit & Discovery",
        description:
          "I review your funnel, competitors and analytics to find where growth is leaking.",
      },
      {
        title: "Strategy & Roadmap",
        description:
          "A prioritized 90-day plan with channel mix, budget split, KPIs and owners.",
      },
      {
        title: "Launch & Optimize",
        description:
          "Campaigns go live, then I test creative, audiences and landing pages weekly.",
      },
      {
        title: "Scale & Report",
        description:
          "Winning segments get more budget. You get a plain-English report every month.",
      },
    ],
    deliverables: [
      "Channel strategy and budget plan",
      "Keyword and competitor research",
      "Ad creative and copy variations",
      "Landing page recommendations",
      "Monthly performance report",
      "Conversion tracking setup",
      "Content calendar",
      "Quarterly growth review",
    ],
    stats: [
      { value: "3.4x", label: "Average return on ad spend" },
      { value: "-38%", label: "Typical cost per lead" },
      { value: "12 wk", label: "To meaningful traction" },
    ],
    faqs: [
      {
        question: "How soon will I see results from digital marketing?",
        answer:
          "Paid campaigns usually produce data within the first two weeks and meaningful leads within 4-6 weeks. SEO is compounding — expect visible movement in 8-12 weeks and significant traffic in 4-6 months.",
      },
      {
        question: "Do you require a long contract?",
        answer:
          "No. I work in 90-day cycles so you can evaluate progress on real numbers. Most clients stay because the reporting makes the value obvious.",
      },
      {
        question: "What budget do I need for ads?",
        answer:
          "I have run profitable campaigns from $500/month upward. The right number depends on your average order value and target cost per acquisition — I model it during the audit.",
      },
      {
        question: "Do you handle creative as well as media buying?",
        answer:
          "Yes. Copy, static graphics, short-form video edits and landing pages can all be produced directly, so nothing gets lost between teams.",
      },
      {
        question: "How do you report on performance?",
        answer:
          "You get a live dashboard plus a monthly written summary covering spend, leads, cost per lead and what I am changing next.",
      },
    ],
    related: ["web-development", "graphics-design", "business-automation"],
  },
  {
    slug: "graphics-design",
    title: "Graphics Design",
    shortTitle: "Graphics Design",
    tagline: "Brand identities people remember",
    summary:
      "Creative direction and design that makes your brand look established, feel consistent and stand out across every channel.",
    description: [
      "I design brand identities that connect with your audience, helping you stand out with high-quality, visually appealing graphics.",
      "Design is not decoration — it is the fastest signal of how credible your business is. I build a visual system with rules, so your team can produce on-brand work long after the project ends.",
    ],
    icon: "palette",
    accent: "from-fuchsia-500 to-rose-500",
    priceFrom: "$349/project",
    keywords: [
      "graphics design services",
      "logo design",
      "brand identity",
      "social media graphics",
      "UI design",
    ],
    highlights: [
      "Strategy-led identity, not just a logo",
      "Complete brand guidelines",
      "Editable source files always included",
    ],
    features: [
      {
        title: "Logo & Identity",
        description:
          "Primary mark, secondary marks, lockups and clear-space rules that hold up at any size.",
      },
      {
        title: "Brand Guidelines",
        description:
          "Colour, typography, imagery and tone documented so your brand stays consistent.",
      },
      {
        title: "Social Media Graphics",
        description:
          "Reusable templates for posts, stories, carousels and ads that your team can edit.",
      },
      {
        title: "Marketing Collateral",
        description:
          "Brochures, pitch decks, packaging, signage and print-ready files with correct specs.",
      },
      {
        title: "UI & Product Design",
        description:
          "Web and app interfaces designed in a system — components, states and handoff ready.",
      },
      {
        title: "Motion & Video Assets",
        description:
          "Animated logos, explainer visuals and short-form edits for modern feeds.",
      },
    ],
    process: [
      {
        title: "Brand Discovery",
        description:
          "A working session on positioning, audience, competitors and the feeling you want to own.",
      },
      {
        title: "Concepts & Direction",
        description:
          "Two or three distinct directions presented in real-world context, not just on a white canvas.",
      },
      {
        title: "Refine & Systemize",
        description:
          "I refine the chosen route and expand it into a full, documented visual system.",
      },
      {
        title: "Handoff & Support",
        description:
          "Organized source files, guidelines and a walkthrough so your team can run with it.",
      },
    ],
    deliverables: [
      "Primary and secondary logo files",
      "Colour palette with hex and print values",
      "Typography hierarchy and pairings",
      "Brand guideline document",
      "Social media template pack",
      "Business card and stationery design",
      "Editable source files",
      "Export set for web and print",
    ],
    stats: [
      { value: "10+", label: "Design assets per project" },
      { value: "48 hr", label: "First concept turnaround" },
      { value: "100%", label: "Editable source files" },
    ],
    faqs: [
      {
        question: "How many logo concepts do I get?",
        answer:
          "You receive two to three distinct design directions, each shown in realistic applications. I then refine your favourite until it is production ready.",
      },
      {
        question: "Do I own the final files?",
        answer:
          "Yes. Full ownership of the final approved artwork transfers to you, and you receive organized source files plus export-ready formats.",
      },
      {
        question: "Can you match an existing brand style?",
        answer:
          "Absolutely. I frequently extend existing brand systems for new campaigns, products or markets without breaking consistency.",
      },
      {
        question: "How long does a brand identity take?",
        answer:
          "A focused identity project typically runs two to three weeks. Larger systems with packaging or app UI extend from there.",
      },
      {
        question: "Do you design print-ready files?",
        answer:
          "Yes. I prepare CMYK files with bleed, crop marks and correct resolution, and coordinate directly with your printer when needed.",
      },
    ],
    related: ["web-development", "digital-marketing", "business-automation"],
  },
  {
    slug: "web-development",
    title: "Web Development",
    shortTitle: "Web Development",
    tagline: "Fast, SEO-friendly websites built to scale",
    summary:
      "Responsive, user-centric websites engineered for performance, search visibility and conversion — not just good looks.",
    description: [
      "I develop responsive, SEO-friendly websites that are user-centric and optimized for performance, ensuring your digital presence is both powerful and scalable.",
      "Built on modern frameworks like Next.js, every site ships with clean semantic markup, Core Web Vitals in the green and a content structure that search engines and AI assistants can understand.",
    ],
    icon: "code",
    accent: "from-sky-500 to-cyan-500",
    priceFrom: "$899/project",
    keywords: [
      "web development services",
      "Next.js development",
      "SEO-friendly website",
      "ecommerce development",
      "website redesign",
    ],
    highlights: [
      "Core Web Vitals in the green",
      "Accessible and responsive by default",
      "You own the code and the content",
    ],
    features: [
      {
        title: "Marketing Websites",
        description:
          "Multi-page sites with clear information architecture, fast loads and conversion-focused pages.",
      },
      {
        title: "Next.js & React",
        description:
          "Server-rendered applications with great SEO, image optimization and instant navigation.",
      },
      {
        title: "Ecommerce",
        description:
          "Product catalogues, cart and checkout integrations tuned for speed and trust.",
      },
      {
        title: "Technical SEO",
        description:
          "Structured data, sitemaps, metadata, canonical tags and clean crawlable markup.",
      },
      {
        title: "CMS Integration",
        description:
          "Headless or traditional CMS setups so your team can publish without a developer.",
      },
      {
        title: "Performance & Security",
        description:
          "Optimized assets, caching, HTTPS, and hardened forms and integrations.",
      },
    ],
    process: [
      {
        title: "Scope & Architecture",
        description:
          "I map pages, user journeys and integrations, then we agree the build plan and timeline.",
      },
      {
        title: "Design to Code",
        description:
          "Responsive UI built component by component with accessibility baked in.",
      },
      {
        title: "Content & SEO",
        description:
          "Pages populated, metadata written, structured data and sitemaps wired up.",
      },
      {
        title: "Launch & Handover",
        description:
          "I test across devices, deploy, monitor and hand over documentation.",
      },
    ],
    deliverables: [
      "Fully responsive website build",
      "SEO metadata and structured data",
      "XML sitemap and robots configuration",
      "Analytics and conversion tracking",
      "Contact forms with spam protection",
      "Image and asset optimization",
      "Cross-browser QA report",
      "Documentation and training",
    ],
    stats: [
      { value: "95+", label: "Typical Lighthouse score" },
      { value: "<1.5s", label: "Target load time" },
      { value: "100%", label: "Mobile responsive" },
    ],
    faqs: [
      {
        question: "What technologies do you build with?",
        answer:
          "My default stack is Next.js, React, TypeScript and Tailwind CSS. For simpler sites I may recommend a CMS-first approach — I recommend what fits your goals, not what is trendy.",
      },
      {
        question: "Will the website be SEO friendly?",
        answer:
          "Yes. Semantic HTML, metadata, structured data, sitemaps, canonical tags, fast Core Web Vitals and mobile responsiveness are part of every build, not an add-on.",
      },
      {
        question: "Can I update the content myself?",
        answer:
          "Absolutely. I integrate a CMS or a simple content layer so your team can edit pages, blog posts and services without touching code.",
      },
      {
        question: "Do you redesign existing websites?",
        answer:
          "Often. I audit the current site, preserve what is ranking well, and rebuild the weak areas so you do not lose existing search equity.",
      },
      {
        question: "What happens after launch?",
        answer:
          "I offer care plans covering updates, monitoring, backups and small improvements, or a clean handover if you prefer to manage it in-house.",
      },
    ],
    related: ["digital-marketing", "graphics-design", "business-automation"],
  },
  {
    slug: "business-automation",
    title: "Business Automation",
    shortTitle: "Business Automation",
    tagline: "Remove manual work, scale without chaos",
    summary:
      "I simplify and automate business processes to increase efficiency, scalability and overall business performance.",
    description: [
      "I simplify and automate business processes to increase efficiency, scalability and overall business performance through practical automation solutions.",
      "If your team is copying data between tools, chasing follow-ups manually or rebuilding the same report every week, that is time you are paying for twice. I map the process, then automate it end to end.",
    ],
    icon: "workflow",
    accent: "from-emerald-500 to-teal-500",
    priceFrom: "$699/project",
    keywords: [
      "business automation services",
      "workflow automation",
      "CRM automation",
      "AI automation",
      "process optimization",
    ],
    highlights: [
      "Automate the process, not just the task",
      "Fewer errors, faster response times",
      "Documented and maintainable workflows",
    ],
    features: [
      {
        title: "Workflow Automation",
        description:
          "Connect your apps so data flows automatically between sales, operations and finance.",
      },
      {
        title: "CRM & Sales Ops",
        description:
          "Lead capture, routing, follow-up sequences and pipeline hygiene handled automatically.",
      },
      {
        title: "AI Assistants",
        description:
          "Chat and email agents that answer common questions and route the rest to a human.",
      },
      {
        title: "Reporting Dashboards",
        description:
          "Live dashboards replacing the spreadsheet someone rebuilds every Monday.",
      },
      {
        title: "Document Generation",
        description:
          "Quotes, invoices and contracts generated and filed from your existing data.",
      },
      {
        title: "Process Mapping",
        description:
          "I document how work actually happens before automating — no automating a mess.",
      },
    ],
    process: [
      {
        title: "Process Audit",
        description:
          "I shadow the real workflow, time each step and find the highest-cost bottlenecks.",
      },
      {
        title: "Automation Blueprint",
        description:
          "A prioritized map of what to automate, which tools to use and expected hours saved.",
      },
      {
        title: "Build & Integrate",
        description:
          "Workflows, integrations and AI agents built and tested against real edge cases.",
      },
      {
        title: "Train & Iterate",
        description:
          "Your team is trained on the new process and I monitor for the first month.",
      },
    ],
    deliverables: [
      "Documented process map",
      "Automation blueprint and priority list",
      "Configured integrations between tools",
      "CRM and pipeline automation",
      "AI assistant setup and prompts",
      "Live reporting dashboard",
      "Team training session",
      "30-day monitoring and tuning",
    ],
    stats: [
      { value: "20 hr", label: "Typical hours saved monthly" },
      { value: "80%", label: "Less manual data entry" },
      { value: "30 days", label: "Included monitoring" },
    ],
    faqs: [
      {
        question: "What kinds of processes can be automated?",
        answer:
          "Anything repetitive and rule-based: lead routing, follow-ups, invoicing, reporting, onboarding, data sync between tools, and first-line customer support.",
      },
      {
        question: "Do I need to replace my existing tools?",
        answer:
          "Rarely. I prefer to connect what you already use. I only recommend replacing a tool when it is actively blocking automation.",
      },
      {
        question: "How much does automation cost?",
        answer:
          "Projects start from $699. Most automation stacks also carry a small monthly platform cost, which I always disclose before you commit.",
      },
      {
        question: "Is my data safe?",
        answer:
          "Yes. I use least-privilege access, encrypted connections and reputable platforms, and I document exactly what data moves where.",
      },
      {
        question: "What if something breaks later?",
        answer:
          "Every build includes 30 days of monitoring and tuning, plus documentation so any developer can maintain the workflows.",
      },
    ],
    related: ["web-development", "digital-marketing", "graphics-design"],
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}

export function getServiceSlugs(): string[] {
  return services.map((service) => service.slug);
}

export function getRelatedServices(service: Service): Service[] {
  return service.related
    .map((slug) => getService(slug))
    .filter((item): item is Service => Boolean(item));
}
