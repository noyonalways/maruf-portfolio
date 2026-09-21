export type Value = {
  title: string;
  description: string;
  icon: "shield" | "sparkles" | "users" | "trending";
};

export type ProcessStep = {
  step: string;
  title: string;
  description: string;
};

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
  initials: string;
  rating: number;
};

export type Differentiator = {
  title: string;
  description: string;
  icon: "target" | "gauge" | "layers" | "heart";
};

export type Milestone = {
  year: string;
  title: string;
  description: string;
};

export const mission =
  "To help businesses and individuals unlock their full potential online by delivering smart digital solutions that foster sustainable growth and long-term success. Whether you run a small business or a large corporation, I work closely with you to build solutions that align with your objectives — and measure them honestly.";

export const vision =
  "To be recognised as a trusted digital marketer known for delivering exceptional marketing services, top-tier SEO strategies and seamless business automation — work that produces measurable results rather than vanity metrics.";

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

export const stats = [
  { value: "120+", label: "Projects delivered" },
  { value: "48+", label: "Businesses supported" },
  { value: "3.4x", label: "Average return on ad spend" },
  { value: "98%", label: "Client retention rate" },
];

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
