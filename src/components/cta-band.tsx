import Link from "next/link";
import { ArrowRightIcon, PhoneIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { cta } from "@/content/site";
import { siteConfig } from "@/lib/site";

export function CtaBand({
  title = cta.title,
  description = cta.description,
  primaryLabel = cta.primaryLabel,
  primaryHref = cta.primaryHref,
}: {
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
}) {
  return (
    <section className="container-page py-16 sm:py-24">
      <Reveal className="relative overflow-hidden rounded-3xl border border-brand/20 bg-linear-to-br from-brand via-brand to-[color-mix(in_oklch,var(--brand)_55%,var(--highlight))] px-6 py-14 text-center sm:px-12 sm:py-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-dots opacity-20 mix-blend-overlay"
        />
        <div className="relative mx-auto flex max-w-2xl flex-col items-center gap-6">
          <h2 className="font-heading text-3xl font-semibold tracking-tight text-balance text-brand-foreground sm:text-4xl">
            {title}
          </h2>
          <p className="text-base leading-relaxed text-pretty text-brand-foreground/85">
            {description}
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="h-11 bg-background px-6 text-foreground hover:bg-background/90"
            >
              <Link href={primaryHref}>
                {primaryLabel}
                <ArrowRightIcon className="size-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-11 border-brand-foreground/35 bg-transparent px-6 text-brand-foreground hover:bg-brand-foreground/10 hover:text-brand-foreground"
            >
              <a href={siteConfig.phoneHref}>
                <PhoneIcon className="size-4" />
                {siteConfig.phone}
              </a>
            </Button>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
