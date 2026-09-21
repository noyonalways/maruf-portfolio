import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

import {
  extractFaqs,
  parseFrontmatter,
  parseMarkdown,
  type ContentBlock,
  type Faq,
} from "@/lib/markdown";

import type { ServiceIconName } from "./services";

export type { ContentBlock };

export type BlogCategory = {
  slug: string;
  title: string;
  description: string;
};

export type BlogPost = {
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
  faqs?: Faq[];
};

/** Blog categories. "slug" must match the category used in each article's file. */
export const blogCategories: BlogCategory[] = [
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

/** The author shown on every blog article. */
export const author = {
  name: "Md. Maruf Mondol",
  role: "Digital Marketer",
  initials: "MM",
} as const;

/**
 * Cover colours for blog articles. In an article's file, set `cover:` to one of
 * these names (ocean, ember, royal, forest, sunset, lime) and `icon:` to one of
 * megaphone, palette, code, workflow.
 */
export const coverStyles = {
  ocean: { gradient: "from-sky-500 via-cyan-500 to-teal-500", icon: "code" },
  ember: {
    gradient: "from-amber-400 via-orange-500 to-rose-500",
    icon: "megaphone",
  },
  royal: { gradient: "from-blue-700 via-blue-600 to-sky-500", icon: "code" },
  forest: {
    gradient: "from-emerald-500 via-teal-500 to-cyan-600",
    icon: "workflow",
  },
  sunset: {
    gradient: "from-orange-500 via-rose-500 to-red-500",
    icon: "palette",
  },
  lime: { gradient: "from-lime-500 via-emerald-500 to-teal-600", icon: "workflow" },
} satisfies Record<string, { gradient: string; icon: ServiceIconName }>;

const blogsDirectory = join(process.cwd(), "src", "content", "blogs");

function asString(value: unknown, fallback = ""): string {
  if (typeof value === "string") return value;
  if (value == null) return fallback;
  return String(value);
}

function loadBlogPosts(): BlogPost[] {
  const files = readdirSync(blogsDirectory).filter((file) =>
    file.endsWith(".md"),
  );

  return files.map((file) => {
    const raw = readFileSync(join(blogsDirectory, file), "utf8");
    const { data, content } = parseFrontmatter(raw);
    const { content: body, faqs } = extractFaqs(content);
    const slug = file.replace(/\.md$/, "");

    const styleName = asString(data.cover, "ocean") as keyof typeof coverStyles;
    const style = coverStyles[styleName] ?? coverStyles.ocean;
    const icon = asString(data.icon, style.icon) as ServiceIconName;

    const tags = asString(data.tags)
      .split(",")
      .map((tag) => tag.trim())
      .filter(Boolean);

    const description = asString(data.description);

    return {
      slug,
      title: asString(data.title, slug),
      description,
      excerpt: asString(data.excerpt, description),
      date: asString(data.date),
      updated: data.updated ? asString(data.updated) : undefined,
      category: asString(data.category),
      tags,
      readingMinutes: Number(data.readingMinutes) || 5,
      featured: data.featured === true,
      cover: { gradient: style.gradient, icon },
      content: parseMarkdown(body),
      faqs,
    } satisfies BlogPost;
  });
}

export const blogPosts: BlogPost[] = loadBlogPosts();

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getBlogPostSlugs(): string[] {
  return blogPosts.map((post) => post.slug);
}

export function getSortedBlogPosts(): BlogPost[] {
  return [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

export function getFeaturedBlogPosts(): BlogPost[] {
  return getSortedBlogPosts().filter((post) => post.featured);
}

export function getBlogPostsByCategory(categorySlug: string): BlogPost[] {
  return getSortedBlogPosts().filter((post) => post.category === categorySlug);
}

export function getBlogCategory(slug: string): BlogCategory | undefined {
  return blogCategories.find((category) => category.slug === slug);
}

export function getRelatedBlogPosts(post: BlogPost, limit = 3): BlogPost[] {
  const others = getSortedBlogPosts().filter((item) => item.slug !== post.slug);
  const sameCategory = others.filter((item) => item.category === post.category);
  const rest = others.filter((item) => item.category !== post.category);
  return [...sameCategory, ...rest].slice(0, limit);
}
