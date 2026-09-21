import Link from "next/link";
import { ArrowRightIcon, CheckIcon } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { ServiceIcon } from "@/components/service-icon";
import { cn } from "cn";
import type { Service } from "@/content/services";

export function ServiceCard({
  service,
  index = 0,
  className,
}: {
  service: Service;
  index?: number;
  className?: string;
}) {
  return (
    <Reveal as="article" delay={index * 70} className={cn("h-full", className)}>
      <div className="group relative flex h-full flex-col gap-4 overflow-hidden rounded-2xl border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand/35 hover:shadow-lg hover:shadow-brand/5">
        <div
          aria-hidden="true"
          className={cn(
            "absolute -top-16 -right-16 size-40 rounded-full bg-linear-to-br opacity-10 blur-2xl transition-opacity duration-300 group-hover:opacity-25",
            service.accent,
          )}
        />
        <span
          className={cn(
            "relative inline-flex size-11 items-center justify-center rounded-xl bg-linear-to-br text-white shadow-sm",
            service.accent,
          )}
        >
          <ServiceIcon name={service.icon} className="size-5" />
        </span>

        <div className="relative flex flex-1 flex-col gap-2.5">
          <h3 className="font-heading text-lg font-semibold tracking-tight">
            {service.title}
          </h3>
          <p className="text-sm leading-relaxed text-muted-foreground">
            {service.summary}
          </p>
          <ul className="mt-1 flex flex-col gap-1.5">
            {service.highlights.map((highlight) => (
              <li
                key={highlight}
                className="flex items-start gap-2 text-xs text-muted-foreground"
              >
                <CheckIcon
                  className="mt-0.5 size-3.5 shrink-0 text-brand"
                  aria-hidden="true"
                />
                {highlight}
              </li>
            ))}
          </ul>
        </div>

        <Link
          href={`/services/${service.slug}`}
          className="relative inline-flex w-fit items-center gap-1.5 text-sm font-medium text-brand transition-colors hover:text-brand/80"
        >
          Explore {service.shortTitle.toLowerCase()}
          <ArrowRightIcon
            className="size-4 transition-transform duration-300 group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </Link>
      </div>
    </Reveal>
  );
}
