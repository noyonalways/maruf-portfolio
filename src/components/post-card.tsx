import Link from "next/link";
import { ArrowUpRightIcon, ClockIcon } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { ServiceIcon } from "@/components/service-icon";
import { Badge } from "@/components/ui/badge";
import { cn } from "cn";
import { author, getCategory, type Post } from "@/content/posts";
import { formatDate, toIsoDate } from "@/lib/format";

export function PostCard({
  post,
  index = 0,
  featured = false,
  className,
}: {
  post: Post;
  index?: number;
  featured?: boolean;
  className?: string;
}) {
  const category = getCategory(post.category);

  return (
    <Reveal
      as="article"
      delay={index * 70}
      className={cn("h-full", className)}
    >
      <Link
        href={`/blog/${post.slug}`}
        className="group flex h-full flex-col overflow-hidden rounded-2xl border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-brand/35 hover:shadow-lg hover:shadow-brand/5"
      >
        <div
          className={cn(
            "relative flex items-center justify-between overflow-hidden bg-linear-to-br p-5 text-white",
            featured ? "min-h-40" : "min-h-32",
            post.cover.gradient,
          )}
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-dots opacity-25 mix-blend-overlay"
          />
          <ServiceIcon
            name={post.cover.icon}
            className={cn(
              "relative text-white/85",
              featured ? "size-12" : "size-9",
            )}
          />
          <span className="relative rounded-full bg-white/15 px-2.5 py-1 text-[0.7rem] font-semibold tracking-wide backdrop-blur-sm">
            {category?.title ?? "Article"}
          </span>
        </div>

        <div className="flex flex-1 flex-col gap-3 p-5">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground">
            <time dateTime={toIsoDate(post.date)}>{formatDate(post.date)}</time>
            <span aria-hidden="true" className="opacity-40">
              &middot;
            </span>
            <span className="inline-flex items-center gap-1">
              <ClockIcon className="size-3.5" aria-hidden="true" />
              {post.readingMinutes} min read
            </span>
          </div>

          <h3
            className={cn(
              "font-heading font-semibold tracking-tight text-balance transition-colors group-hover:text-brand",
              featured ? "text-xl sm:text-2xl" : "text-lg",
            )}
          >
            {post.title}
          </h3>

          <p className="line-clamp-3 text-sm leading-relaxed text-muted-foreground">
            {post.excerpt}
          </p>

          <div className="mt-auto flex items-center justify-between pt-2">
            <span className="text-xs text-muted-foreground">
              By {author.name}
            </span>
            <span className="inline-flex items-center gap-1 text-sm font-medium text-brand">
              Read
              <ArrowUpRightIcon
                className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </span>
          </div>
        </div>
      </Link>
    </Reveal>
  );
}

export function PostCardCompact({ post }: { post: Post }) {
  const category = getCategory(post.category);
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col gap-2 rounded-xl border bg-card p-4 transition-colors hover:border-brand/35"
    >
      <div className="flex items-center gap-2">
        <Badge variant="secondary" className="rounded-full">
          {category?.title ?? "Article"}
        </Badge>
        <span className="text-xs text-muted-foreground">
          {formatDate(post.date)}
        </span>
      </div>
      <h3 className="font-heading text-sm font-semibold leading-snug text-balance transition-colors group-hover:text-brand">
        {post.title}
      </h3>
    </Link>
  );
}
