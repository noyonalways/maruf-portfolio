import Link from "next/link";
import {
  ArrowRightIcon,
  PlayIcon,
  SparklesIcon,
  StarIcon,
  TrendingUpIcon,
} from "lucide-react";

import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";
import { cn } from "cn";

const heroBars = [38, 52, 44, 66, 58, 79, 71, 92];

export function Hero() {
  return (
    <section className="relative -mt-20 overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute inset-0 bg-grid opacity-[0.55] [mask-image:radial-gradient(ellipse_at_top,black,transparent_72%)]" />
        <div className="absolute -top-32 -left-24 size-[26rem] animate-aurora rounded-full bg-brand/25 blur-[110px]" />
        <div className="absolute top-10 -right-20 size-[22rem] animate-aurora rounded-full bg-highlight/25 blur-[110px] [animation-delay:-6s]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-b from-transparent to-background" />
      </div>

      <div className="container-page grid items-center gap-14 pt-36 pb-16 sm:pt-40 sm:pb-20 lg:grid-cols-[1.05fr_0.95fr] lg:pt-48 lg:pb-28">
        <div className="flex flex-col items-start gap-7">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-brand/25 bg-brand/8 px-3.5 py-1.5 text-xs font-semibold tracking-wide text-brand">
              <SparklesIcon className="size-3.5" aria-hidden="true" />
              {siteConfig.role} &middot; {siteConfig.address.city}
            </span>
          </Reveal>

          <Reveal delay={60}>
            <h1 className="font-heading text-4xl leading-[1.08] font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl">
              Smart digital marketing that drives{" "}
              <span className="text-gradient">real growth</span>
            </h1>
          </Reveal>

          <Reveal delay={120}>
            <p className="max-w-xl text-lg leading-relaxed text-pretty text-muted-foreground">
              I&apos;m {siteConfig.name}. I blend creativity, technology and
              strategic thinking to deliver digital marketing, SEO, design, web
              development and business automation that produce measurable
              results — not busywork.
            </p>
          </Reveal>

          <Reveal delay={180} className="w-full">
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="h-11 px-6">
                <Link href="/contact">
                  Book a free strategy call
                  <ArrowRightIcon className="size-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-11 px-6"
              >
                <Link href="/services">
                  <PlayIcon className="size-4" />
                  Explore my services
                </Link>
              </Button>
            </div>
          </Reveal>

          <Reveal delay={240} className="w-full">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-2">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {["MM", "SW", "DO", "PR"].map((initials, index) => (
                    <span
                      key={initials}
                      className={cn(
                        "inline-flex size-8 items-center justify-center rounded-full border-2 border-background text-[0.65rem] font-semibold text-white",
                        [
                          "bg-brand",
                          "bg-violet-500",
                          "bg-emerald-500",
                          "bg-amber-500",
                        ][index],
                      )}
                    >
                      {initials}
                    </span>
                  ))}
                </div>
                <div className="flex flex-col leading-tight">
                  <span className="flex items-center gap-0.5 text-highlight">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <StarIcon
                        key={index}
                        className="size-3.5 fill-current"
                        aria-hidden="true"
                      />
                    ))}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    Rated 5.0 by 48+ businesses
                  </span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={140} className="w-full">
          <div className="relative mx-auto w-full max-w-lg">
            <div
              aria-hidden="true"
              className="absolute -inset-4 -z-10 rounded-[2rem] bg-linear-to-br from-brand/20 via-transparent to-highlight/20 blur-2xl"
            />
            <div className="rounded-3xl border bg-card/85 p-5 shadow-xl shadow-brand/5 backdrop-blur-sm sm:p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
                    Campaign performance
                  </p>
                  <p className="font-heading text-3xl font-semibold tracking-tight">
                    3.4x
                    <span className="ml-2 inline-flex items-center gap-1 align-middle text-xs font-medium text-emerald-500">
                      <TrendingUpIcon className="size-3.5" aria-hidden="true" />
                      +41%
                    </span>
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Return on ad spend, last 90 days
                  </p>
                </div>
                <span className="inline-flex size-11 items-center justify-center rounded-xl bg-brand/10 text-brand">
                  <TrendingUpIcon className="size-5" aria-hidden="true" />
                </span>
              </div>

              <div className="mt-6 flex h-32 items-end gap-2">
                {heroBars.map((height, index) => (
                  <div
                    key={index}
                    className="flex-1 rounded-t-md bg-linear-to-t from-brand/25 to-brand"
                    style={{ height: `${height}%` }}
                  />
                ))}
              </div>

              <div className="mt-6 grid grid-cols-3 gap-3">
                {[
                  { label: "Leads", value: "1,248" },
                  { label: "Cost / lead", value: "$18" },
                  { label: "Traffic", value: "86k" },
                ].map((metric) => (
                  <div
                    key={metric.label}
                    className="rounded-xl border bg-background/60 p-3"
                  >
                    <p className="text-[0.7rem] tracking-wide text-muted-foreground uppercase">
                      {metric.label}
                    </p>
                    <p className="font-heading text-lg font-semibold">
                      {metric.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="absolute -bottom-6 -left-4 hidden animate-float rounded-2xl border bg-card p-3.5 shadow-lg sm:block">
              <p className="text-[0.7rem] tracking-wide text-muted-foreground uppercase">
                Organic traffic
              </p>
              <p className="font-heading text-xl font-semibold">+212%</p>
            </div>

            <div className="absolute -top-5 -right-3 hidden animate-float rounded-2xl border bg-card p-3.5 shadow-lg [animation-delay:-3s] sm:block">
              <p className="text-[0.7rem] tracking-wide text-muted-foreground uppercase">
                Hours saved / mo
              </p>
              <p className="font-heading text-xl font-semibold">20</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
