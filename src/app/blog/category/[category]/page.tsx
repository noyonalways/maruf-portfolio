import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeftIcon } from "lucide-react";

import { CtaBand } from "@/components/cta-band";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { PostCard } from "@/components/post-card";
import { Button } from "@/components/ui/button";
import {
  blogCategories,
  getBlogCategory,
  getBlogPostsByCategory,
} from "@/content/blogs";
import { absoluteUrl, breadcrumbSchema, buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";
import { cn } from "cn";

export function generateStaticParams() {
  return blogCategories.map((category) => ({ category: category.slug }));
}

export async function generateMetadata(
  props: PageProps<"/blog/category/[category]">,
): Promise<Metadata> {
  const { category: categorySlug } = await props.params;
  const category = getBlogCategory(categorySlug);

  if (!category) {
    return buildMetadata({
      title: "Category not found",
      description: "The category you are looking for does not exist.",
      path: `/blog/category/${categorySlug}`,
      noIndex: true,
    });
  }

  return buildMetadata({
    title: `${category.title} Articles`,
    description: category.description,
    path: `/blog/category/${category.slug}`,
    keywords: [
      category.title,
      `${category.title} guides`,
      `${siteConfig.name} blog`,
    ],
  });
}

export default async function CategoryPage(
  props: PageProps<"/blog/category/[category]">,
) {
  const { category: categorySlug } = await props.params;
  const category = getBlogCategory(categorySlug);

  if (!category) {
    notFound();
  }

  const posts = getBlogPostsByCategory(category.slug);

  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: category.title, path: `/blog/category/${category.slug}` },
  ];

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `${category.title} articles`,
    description: category.description,
    url: absoluteUrl(`/blog/category/${category.slug}`),
    isPartOf: { "@id": `${absoluteUrl("/blog")}#blog` },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: posts.map((post, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: absoluteUrl(`/blog/${post.slug}`),
        name: post.title,
      })),
    },
  };

  return (
    <>
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />
      <JsonLd data={collectionSchema} />

      <PageHero
        eyebrow="Blog category"
        title={
          <>
            {category.title}{" "}
            <span className="text-gradient">articles</span>
          </>
        }
        description={category.description}
        breadcrumbs={breadcrumbs}
      >
        <ul className="flex flex-wrap gap-2 pt-2">
          <li>
            <Link
              href="/blog"
              className="inline-flex items-center rounded-full border bg-card px-3.5 py-1.5 text-sm font-medium transition-colors hover:border-brand/40 hover:text-brand"
            >
              All articles
            </Link>
          </li>
          {blogCategories.map((item) => (
            <li key={item.slug}>
              <Link
                href={`/blog/category/${item.slug}`}
                className={cn(
                  "inline-flex items-center rounded-full border bg-card px-3.5 py-1.5 text-sm font-medium transition-colors hover:border-brand/40 hover:text-brand",
                  item.slug === category.slug && "border-brand/40 text-brand",
                )}
                aria-current={item.slug === category.slug ? "page" : undefined}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </PageHero>

      <section className="container-page py-14 sm:py-20">
        {posts.length ? (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, index) => (
              <PostCard key={post.slug} post={post} index={index} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center gap-4 rounded-2xl border border-dashed py-20 text-center">
            <p className="font-heading text-lg font-semibold">
              No articles in this category yet
            </p>
            <p className="max-w-md text-sm text-muted-foreground">
              I am working on it. In the meantime, browse everything in the
              blog or get in touch with a question.
            </p>
            <Button asChild variant="outline" className="mt-2">
              <Link href="/blog">
                <ArrowLeftIcon className="size-4" />
                Back to all articles
              </Link>
            </Button>
          </div>
        )}
      </section>

      <CtaBand
        title={`Want help with ${category.title.toLowerCase()}?`}
        description={`Tell me where you are with ${category.title.toLowerCase()} and I will show you the fastest path to results.`}
        primaryHref={`/contact`}
      />
    </>
  );
}
