import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  CalendarIcon,
  ClockIcon,
  ListIcon,
  TagIcon,
} from "lucide-react";

import { BlogContent, extractHeadings } from "@/components/blog-content";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CtaBand } from "@/components/cta-band";
import { FaqAccordion } from "@/components/faq-accordion";
import { JsonLd } from "@/components/json-ld";
import { PostCard } from "@/components/post-card";
import { SectionHeading } from "@/components/section-heading";
import { ServiceIcon } from "@/components/service-icon";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  author,
  blogCategories,
  getBlogCategory,
  getBlogPost,
  getBlogPostSlugs,
  getRelatedBlogPosts,
} from "@/content/blogs";
import { formatDate, toIsoDate } from "@/lib/format";
import {
  articleSchema,
  breadcrumbSchema,
  buildMetadata,
  faqSchema,
} from "@/lib/seo";
import { siteConfig } from "@/lib/site";
import { cn } from "cn";

export function generateStaticParams() {
  return getBlogPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata(
  props: PageProps<"/blog/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const post = getBlogPost(slug);

  if (!post) {
    return buildMetadata({
      title: "Article not found",
      description: "The article you are looking for does not exist.",
      path: `/blog/${slug}`,
      noIndex: true,
    });
  }

  return buildMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
    keywords: post.tags,
    type: "article",
    publishedTime: toIsoDate(post.date),
    modifiedTime: toIsoDate(post.updated ?? post.date),
    authors: [author.name],
  });
}

export default async function BlogPostPage(props: PageProps<"/blog/[slug]">) {
  const { slug } = await props.params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const category = getBlogCategory(post.category);
  const headings = extractHeadings(post.content);
  const relatedPosts = getRelatedBlogPosts(post);

  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
    ...(category
      ? [{ name: category.title, path: `/blog/category/${category.slug}` }]
      : []),
    { name: post.title, path: `/blog/${post.slug}` },
  ];

  return (
    <>
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />
      <JsonLd
        data={articleSchema({
          title: post.title,
          description: post.description,
          path: `/blog/${post.slug}`,
          datePublished: toIsoDate(post.date),
          dateModified: toIsoDate(post.updated ?? post.date),
          authorName: author.name,
          section: category?.title,
          keywords: post.tags,
        })}
      />
      {post.faqs?.length ? <JsonLd data={faqSchema(post.faqs)} /> : null}

      <article>
        <header className="relative overflow-hidden border-b">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10"
          >
            <div className="absolute inset-0 bg-grid opacity-50 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
            <div className="absolute -top-24 left-1/2 size-[24rem] -translate-x-1/2 animate-aurora rounded-full bg-brand/20 blur-[110px]" />
          </div>

          <div className="container-page flex max-w-4xl flex-col gap-5 py-14 sm:py-20">
            <Breadcrumbs items={breadcrumbs} />

            <div className="flex flex-wrap items-center gap-3">
              <Badge asChild variant="secondary" className="rounded-full">
                <Link href={`/blog/category/${post.category}`}>
                  {category?.title ?? "Article"}
                </Link>
              </Badge>
              <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                <CalendarIcon className="size-3.5" aria-hidden="true" />
                <time dateTime={toIsoDate(post.date)}>
                  {formatDate(post.date)}
                </time>
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                <ClockIcon className="size-3.5" aria-hidden="true" />
                {post.readingMinutes} min read
              </span>
            </div>

            <h1 className="font-heading text-3xl leading-[1.15] font-semibold tracking-tight text-balance sm:text-4xl lg:text-5xl">
              {post.title}
            </h1>

            <p className="text-lg leading-relaxed text-pretty text-muted-foreground">
              {post.description}
            </p>

            <div className="flex items-center gap-3 pt-2">
              <span className="inline-flex size-10 items-center justify-center rounded-full bg-brand/10 text-xs font-semibold text-brand">
                {author.initials}
              </span>
              <span className="flex flex-col leading-tight">
                <span className="text-sm font-semibold">{author.name}</span>
                <span className="text-xs text-muted-foreground">
                  {author.role}
                </span>
              </span>
            </div>
          </div>

          <div
            className={cn(
              "relative flex h-40 items-center justify-center overflow-hidden bg-linear-to-br sm:h-56",
              post.cover.gradient,
            )}
          >
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-dots opacity-25 mix-blend-overlay"
            />
            <ServiceIcon
              name={post.cover.icon}
              className="relative size-16 text-white/80"
            />
          </div>
        </header>

        <div className="container-page grid gap-12 py-14 sm:py-20 lg:grid-cols-[minmax(0,1fr)_18rem] lg:gap-16">
          <div className="min-w-0">
            <BlogContent blocks={post.content} />

            {post.tags.length ? (
              <div className="mt-10 flex flex-wrap items-center gap-2 border-t pt-6">
                <TagIcon
                  className="size-4 text-muted-foreground"
                  aria-hidden="true"
                />
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border bg-muted/50 px-3 py-1 text-xs font-medium text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            ) : null}

            <div className="mt-10 flex flex-col gap-4 rounded-2xl border bg-card p-6 sm:flex-row sm:items-center">
              <span className="inline-flex size-14 shrink-0 items-center justify-center rounded-full bg-brand/10 font-heading text-lg font-semibold text-brand">
                {author.initials}
              </span>
              <div className="flex flex-col gap-1.5">
                <p className="font-heading text-base font-semibold">
                  {author.name}
                </p>
                <p className="text-sm text-muted-foreground">{author.role}</p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Writes about SEO, performance marketing, web development and
                  automation — and leads strategy on every engagement.
                </p>
                <div className="flex flex-wrap gap-3 pt-1">
                  <Link
                    href="/about"
                    className="text-sm font-medium text-brand hover:text-brand/80"
                  >
                    About me
                  </Link>
                  <a
                    href={siteConfig.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-brand hover:text-brand/80"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>

            {post.faqs?.length ? (
              <section className="mt-12">
                <h2 className="font-heading text-2xl font-semibold tracking-tight">
                  Frequently asked questions
                </h2>
                <FaqAccordion items={post.faqs} className="mt-4" />
              </section>
            ) : null}

            <div className="mt-12">
              <Button asChild variant="outline" className="w-fit">
                <Link href="/blog">
                  <ArrowLeftIcon className="size-4" />
                  Back to all articles
                </Link>
              </Button>
            </div>
          </div>

          <aside className="lg:sticky lg:top-24 lg:self-start">
            {headings.length ? (
              <nav
                aria-label="Table of contents"
                className="rounded-2xl border bg-card p-5"
              >
                <p className="inline-flex items-center gap-2 font-heading text-sm font-semibold">
                  <ListIcon className="size-4 text-brand" aria-hidden="true" />
                  On this page
                </p>
                <ol className="mt-4 flex flex-col gap-2.5">
                  {headings.map((heading) => (
                    <li key={heading.id}>
                      <a
                        href={`#${heading.id}`}
                        className="block text-sm leading-snug text-muted-foreground transition-colors hover:text-brand"
                      >
                        {heading.text}
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            ) : null}

            <div className="mt-5 rounded-2xl border bg-card p-5">
              <p className="font-heading text-sm font-semibold">
                Explore by topic
              </p>
              <ul className="mt-3 flex flex-col gap-2">
                {blogCategories.map((item) => (
                  <li key={item.slug}>
                    <Link
                      href={`/blog/category/${item.slug}`}
                      className={cn(
                        "text-sm transition-colors hover:text-brand",
                        item.slug === post.category
                          ? "font-medium text-brand"
                          : "text-muted-foreground",
                      )}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-5 rounded-2xl border border-brand/20 bg-brand/5 p-5">
              <p className="font-heading text-sm font-semibold">
                Need this implemented?
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                I can apply everything in this guide to your business.
              </p>
              <Button asChild size="sm" className="mt-3 w-full">
                <Link href="/contact">
                  Book a free call
                  <ArrowRightIcon className="size-3.5" />
                </Link>
              </Button>
            </div>
          </aside>
        </div>
      </article>

      <section className="border-t bg-muted/25 py-16 sm:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="Keep reading"
            title="Related articles"
            description="More practical guidance from the same library."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {relatedPosts.map((related, index) => (
              <PostCard key={related.slug} post={related} index={index} />
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Let's turn these ideas into results"
        description="Send me a short brief and I will tell you exactly where to start for your business."
      />
    </>
  );
}
