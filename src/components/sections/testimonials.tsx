import { QuoteIcon, StarIcon } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { testimonials } from "@/content/company";

export function Testimonials() {
  return (
    <section className="relative overflow-hidden border-y bg-muted/25 py-16 sm:py-24">
      <div className="container-page">
        <SectionHeading
          eyebrow="Client stories"
          title="Results clients talk about"
          description="I measure success in leads, revenue and hours saved — and so do the people I work with."
          align="center"
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Reveal
              as="article"
              key={testimonial.name}
              delay={index * 60}
              className="h-full"
            >
              <figure className="relative flex h-full flex-col gap-4 rounded-2xl border bg-card p-6">
                <QuoteIcon
                  className="absolute top-5 right-5 size-6 text-brand/15"
                  aria-hidden="true"
                />
                <div
                  className="flex items-center gap-0.5 text-highlight"
                  aria-label={`${testimonial.rating} out of 5 stars`}
                >
                  {Array.from({ length: testimonial.rating }).map((_, star) => (
                    <StarIcon
                      key={star}
                      className="size-3.5 fill-current"
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <blockquote className="text-sm leading-relaxed text-pretty text-muted-foreground">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-auto flex items-center gap-3 pt-2">
                  <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-brand/10 text-xs font-semibold text-brand">
                    {testimonial.initials}
                  </span>
                  <span className="flex flex-col leading-tight">
                    <span className="text-sm font-semibold">
                      {testimonial.name}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {testimonial.role}, {testimonial.company}
                    </span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
