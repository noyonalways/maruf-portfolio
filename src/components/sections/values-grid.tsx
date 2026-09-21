import {
  GaugeIcon,
  HeartHandshakeIcon,
  LayersIcon,
  ShieldCheckIcon,
  SparklesIcon,
  TargetIcon,
  TrendingUpIcon,
  UsersIcon,
  type LucideIcon,
} from "lucide-react";

import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { cn } from "cn";
import { differentiators, values } from "@/content/company";

const valueIcons: Record<string, LucideIcon> = {
  shield: ShieldCheckIcon,
  sparkles: SparklesIcon,
  users: UsersIcon,
  trending: TrendingUpIcon,
};

const differentiatorIcons: Record<string, LucideIcon> = {
  target: TargetIcon,
  gauge: GaugeIcon,
  layers: LayersIcon,
  heart: HeartHandshakeIcon,
};

export function ValuesGrid() {
  return (
    <section className="container-page py-16 sm:py-24">
      <SectionHeading
        eyebrow="Core values"
        title="Built on trust, driven by results"
        description="These are not posters on a wall. They are the rules I use to decide what work I take and how I treat the people who trust me with their growth."
      />

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {values.map((value, index) => {
          const Icon = valueIcons[value.icon] ?? SparklesIcon;
          return (
            <Reveal
              as="article"
              key={value.title}
              delay={index * 70}
              className="h-full"
            >
              <div className="flex h-full flex-col gap-4 rounded-2xl border bg-card p-6">
                <span className="inline-flex size-11 items-center justify-center rounded-xl bg-brand/10 text-brand">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="font-heading text-base font-semibold">
                  {value.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {value.description}
                </p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

export function WhyUs() {
  return (
    <section className="relative overflow-hidden border-y bg-muted/25 py-16 sm:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-dots opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]"
      />
      <div className="container-page relative">
        <SectionHeading
          eyebrow="Why work with me"
          title="I don't just provide services — I build partnerships"
          description="I am driven by passion, commitment and a deep understanding of the digital landscape. Here is what that looks like in practice."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {differentiators.map((item, index) => {
            const Icon = differentiatorIcons[item.icon] ?? TargetIcon;
            return (
              <Reveal
                as="article"
                key={item.title}
                delay={index * 70}
                className="h-full"
              >
                <div
                  className={cn(
                    "flex h-full items-start gap-4 rounded-2xl border bg-card p-6",
                    index % 2 === 1 && "sm:translate-y-4",
                  )}
                >
                  <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-brand to-[color-mix(in_oklch,var(--brand)_55%,var(--highlight))] text-white">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <div className="flex flex-col gap-2">
                    <h3 className="font-heading text-base font-semibold">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
