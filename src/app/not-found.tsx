import Link from "next/link";
import { ArrowRightIcon, CompassIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { services } from "@/content/services";
import { blogCategories } from "@/content/blogs";

export default function NotFound() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute inset-0 bg-grid opacity-50 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
        <div className="absolute -top-24 left-1/2 size-[24rem] -translate-x-1/2 animate-aurora rounded-full bg-brand/20 blur-[110px]" />
      </div>

      <div className="container-page flex flex-col items-center gap-6 py-24 text-center sm:py-32">
        <span className="inline-flex size-14 items-center justify-center rounded-2xl bg-brand/10 text-brand">
          <CompassIcon className="size-7" aria-hidden="true" />
        </span>
        <p className="font-heading text-6xl font-semibold tracking-tight text-gradient sm:text-8xl">
          404
        </p>
        <h1 className="font-heading text-2xl font-semibold tracking-tight text-balance sm:text-3xl">
          That page could not be found
        </h1>
        <p className="max-w-lg text-base leading-relaxed text-muted-foreground">
          The link may be broken or the page may have moved. Try one of these
          popular destinations instead.
        </p>

        <div className="flex flex-col gap-3 pt-2 sm:flex-row">
          <Button asChild size="lg" className="h-11 px-6">
            <Link href="/">
              Back to home
              <ArrowRightIcon className="size-4" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="h-11 px-6">
            <Link href="/contact">Contact me</Link>
          </Button>
        </div>

        <div className="mt-8 flex w-full max-w-3xl flex-col gap-6">
          <div className="flex flex-wrap justify-center gap-2">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="rounded-full border bg-card px-3.5 py-1.5 text-sm font-medium transition-colors hover:border-brand/40 hover:text-brand"
              >
                {service.title}
              </Link>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {blogCategories.map((category) => (
              <Link
                key={category.slug}
                href={`/blog/category/${category.slug}`}
                className="rounded-full border bg-card px-3.5 py-1.5 text-sm text-muted-foreground transition-colors hover:border-brand/40 hover:text-brand"
              >
                {category.title} articles
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
