import Link from "next/link";
import { ArrowRightIcon, MailIcon } from "lucide-react";

import { CtaBand } from "@/components/cta-band";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { PostCard } from "@/components/post-card";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { getSortedPosts, postCategories } from "@/content/posts";
import { absoluteUrl, breadcrumbSchema, buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";
import { cn } from "cn";

const description =
  "Practical guides on SEO, digital marketing, web development, branding and automation from Md. Maruf Mondol.";

export const metadata = buildMetadata({
  title: "Blog",
  description,
  path: "/blog",
  keywords: [
    "digital marketing blog",
    "SEO guides",
    "web development articles",
    "business automation tips",
  ],
});

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Blog", path: "/blog" },
];

export default function BlogPage() {
  const posts = getSortedPosts();
  const [featured, ...rest] = posts;

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${absoluteUrl("/blog")}#blog`,
    name: `${siteConfig.name} Blog`,
    description,
    url: absoluteUrl("/blog"),
    publisher: { "@id": `${siteConfig.url}/#person` },
    blogPost: posts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      url: absoluteUrl(`/blog/${post.slug}`),
      datePublished: post.date,
      author: { "@type": "Person", name: siteConfig.name },
    })),
  };

  return (
    <>
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />
      <JsonLd data={blogSchema} />

      <PageHero
        eyebrow="Insights"
        title={
          <>
            Practical guides for{" "}
            <span className="text-gradient">growing online</span>
          </>
        }
        description={description}
        breadcrumbs={breadcrumbs}
      >
        <ul className="flex flex-wrap gap-2 pt-2">
          <li>
            <Link
              href="/blog"
              className={cn(
                "inline-flex items-center rounded-full border bg-card px-3.5 py-1.5 text-sm font-medium transition-colors",
                "border-brand/40 text-brand",
              )}
              aria-current="page"
            >
              All articles
            </Link>
          </li>
          {postCategories.map((category) => (
            <li key={category.slug}>
              <Link
                href={`/blog/category/${category.slug}`}
                className="inline-flex items-center rounded-full border bg-card px-3.5 py-1.5 text-sm font-medium transition-colors hover:border-brand/40 hover:text-brand"
              >
                {category.title}
              </Link>
            </li>
          ))}
        </ul>
      </PageHero>

      {featured ? (
        <section className="container-page pt-14 sm:pt-20">
          <Reveal>
            <PostCard post={featured} featured />
          </Reveal>
        </section>
      ) : null}

      <section className="container-page py-14 sm:py-20">
        <div className="flex flex-col gap-8">
          <div className="flex items-center justify-between">
            <h2 className="font-heading text-2xl font-semibold tracking-tight">
              Latest articles
            </h2>
            <span className="text-sm text-muted-foreground">
              {posts.length} articles
            </span>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((post, index) => (
              <PostCard key={post.slug} post={post} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="container-page pb-16 sm:pb-24">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border bg-linear-to-br from-muted/60 to-card p-8 sm:p-12">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-20 -right-10 size-56 rounded-full bg-brand/15 blur-3xl"
            />
            <div className="relative flex flex-col items-start gap-5 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex max-w-xl flex-col gap-2.5">
                <span className="inline-flex size-11 items-center justify-center rounded-xl bg-brand/10 text-brand">
                  <MailIcon className="size-5" aria-hidden="true" />
                </span>
                <h2 className="font-heading text-2xl font-semibold tracking-tight text-balance">
                  Want these guides applied to your business?
                </h2>
                <p className="text-base leading-relaxed text-muted-foreground">
                  Reading is useful. Execution is what moves revenue. Tell me
                  your situation and I will tell you exactly where to start.
                </p>
              </div>
              <Button asChild size="lg" className="h-11 shrink-0 px-6">
                <Link href="/contact">
                  Get a free audit
                  <ArrowRightIcon className="size-4" />
                </Link>
              </Button>
            </div>
          </div>
        </Reveal>
      </section>

      <CtaBand />
    </>
  );
}
