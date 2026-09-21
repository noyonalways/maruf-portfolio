import type * as React from "react";

import { Breadcrumbs } from "@/components/breadcrumbs";
import { Reveal } from "@/components/reveal";
import { cn } from "cn";

export function PageHero({
  eyebrow,
  title,
  description,
  breadcrumbs,
  children,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  breadcrumbs?: { name: string; path: string }[];
  children?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <section className={cn("relative -mt-20 overflow-hidden border-b", className)}>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute inset-0 bg-grid opacity-50 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
        <div className="absolute -top-24 left-1/2 size-[24rem] -translate-x-1/2 animate-aurora rounded-full bg-brand/20 blur-[110px]" />
        <div className="absolute -right-24 top-8 size-[18rem] animate-aurora rounded-full bg-highlight/20 blur-[110px] [animation-delay:-7s]" />
      </div>

      <div
        className={cn(
          "container-page flex flex-col gap-5 pt-34 pb-14 sm:pt-40 sm:pb-20",
          align === "center" && "items-center text-center",
        )}
      >
        {breadcrumbs ? (
          <Reveal>
            <Breadcrumbs items={breadcrumbs} />
          </Reveal>
        ) : null}

        {eyebrow ? (
          <Reveal>
            <span className="inline-flex w-fit items-center rounded-full border border-brand/25 bg-brand/8 px-3 py-1 text-xs font-semibold tracking-[0.14em] text-brand uppercase">
              {eyebrow}
            </span>
          </Reveal>
        ) : null}

        <Reveal delay={60}>
          <h1
            className={cn(
              "max-w-4xl font-heading text-4xl leading-[1.1] font-semibold tracking-tight text-balance sm:text-5xl",
              align === "center" && "mx-auto",
            )}
          >
            {title}
          </h1>
        </Reveal>

        {description ? (
          <Reveal delay={120}>
            <p
              className={cn(
                "max-w-2xl text-lg leading-relaxed text-pretty text-muted-foreground",
                align === "center" && "mx-auto",
              )}
            >
              {description}
            </p>
          </Reveal>
        ) : null}

        {children ? (
          <Reveal delay={180} className="w-full">
            {children}
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}
