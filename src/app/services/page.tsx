import Link from "next/link";
import { ArrowRightIcon, CheckIcon } from "lucide-react";

import { CtaBand } from "@/components/cta-band";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { FaqSection } from "@/components/sections/faq-section";
import { ProcessTimeline } from "@/components/sections/process-timeline";
import { WhyUs } from "@/components/sections/values-grid";
import { ServiceIcon } from "@/components/service-icon";
import { Button } from "@/components/ui/button";
import { generalFaqs } from "@/content/company";
import { services } from "@/content/services";
import { absoluteUrl, breadcrumbSchema, buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";
import { cn } from "cn";

const description =
  "Digital marketing, graphics design, web development and business automation — four focused services delivered by one accountable partner.";

export const metadata = buildMetadata({
  title: "Services",
  description,
  path: "/services",
  keywords: [
    "digital marketing services",
    "graphics design services",
    "web development services",
    "business automation services",
  ],
});

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
];

function servicesListSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `Services by ${siteConfig.name}`,
    itemListElement: services.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: service.title,
      url: absoluteUrl(`/services/${service.slug}`),
    })),
  };
}

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />
      <JsonLd data={servicesListSchema()} />

      <PageHero
        eyebrow="Core services"
        title={
          <>
            Four capabilities that work better{" "}
            <span className="text-gradient">together</span>
          </>
        }
        description={description}
        breadcrumbs={breadcrumbs}
      >
        <ul className="flex flex-wrap gap-2 pt-2">
          {services.map((service) => (
            <li key={service.slug}>
              <Link
                href={`/services/${service.slug}`}
                className="inline-flex items-center gap-2 rounded-full border bg-card px-4 py-2 text-sm font-medium transition-colors hover:border-brand/40 hover:text-brand"
              >
                <ServiceIcon name={service.icon} className="size-4" />
                {service.shortTitle}
              </Link>
            </li>
          ))}
        </ul>
      </PageHero>

      <section className="container-page py-16 sm:py-24">
        <SectionHeading
          eyebrow="What I deliver"
          title="Comprehensive solutions, tailored to your goals"
          description="Whether you need one service or all four, every engagement starts with the same question: what will actually move your numbers?"
        />

        <div className="mt-14 flex flex-col gap-16">
          {services.map((service, index) => (
            <Reveal key={service.slug}>
              <article
                className={cn(
                  "grid items-center gap-10 lg:grid-cols-2 lg:gap-14",
                  index % 2 === 1 && "lg:[&>*:first-child]:order-2",
                )}
              >
                <div className="flex flex-col gap-5">
                  <span
                    className={cn(
                      "inline-flex size-12 items-center justify-center rounded-2xl bg-linear-to-br text-white shadow-sm",
                      service.accent,
                    )}
                  >
                    <ServiceIcon name={service.icon} className="size-6" />
                  </span>
                  <div className="flex flex-col gap-2">
                    <p className="text-xs font-semibold tracking-[0.14em] text-brand uppercase">
                      {service.tagline}
                    </p>
                    <h3 className="font-heading text-2xl font-semibold tracking-tight text-balance sm:text-3xl">
                      {service.title}
                    </h3>
                  </div>
                  {service.description.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="text-base leading-relaxed text-muted-foreground"
                    >
                      {paragraph}
                    </p>
                  ))}
                  <div className="flex flex-wrap items-center gap-3 pt-1">
                    <Button asChild className="w-fit">
                      <Link href={`/services/${service.slug}`}>
                        Explore {service.shortTitle.toLowerCase()}
                        <ArrowRightIcon className="size-4" />
                      </Link>
                    </Button>
                    <span className="text-sm text-muted-foreground">
                      From{" "}
                      <span className="font-medium text-foreground">
                        {service.priceFrom}
                      </span>
                    </span>
                  </div>
                </div>

                <div className="rounded-2xl border bg-card p-6 sm:p-7">
                  <p className="font-heading text-sm font-semibold tracking-wide">
                    What&apos;s included
                  </p>
                  <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                    {service.features.map((feature) => (
                      <li key={feature.title} className="flex items-start gap-2.5">
                        <CheckIcon
                          className="mt-0.5 size-4 shrink-0 text-brand"
                          aria-hidden="true"
                        />
                        <span className="flex flex-col gap-0.5">
                          <span className="text-sm font-medium">
                            {feature.title}
                          </span>
                          <span className="text-xs leading-relaxed text-muted-foreground">
                            {feature.description}
                          </span>
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <ProcessTimeline />
      <WhyUs />

      <section className="container-page py-16 sm:py-24">
        <div className="relative overflow-hidden rounded-3xl border bg-card p-8 sm:p-12">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 -right-16 size-64 rounded-full bg-brand/15 blur-3xl"
          />
          <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="flex flex-col gap-3">
              <h2 className="font-heading text-2xl font-semibold tracking-tight text-balance sm:text-3xl">
                Not sure which service you need?
              </h2>
              <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
                Most clients come to me with a problem, not a service in mind.
                Tell me what is not working and I will recommend the smallest
                set of changes that will make the biggest difference.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="h-11 px-6">
                <Link href="/contact">
                  Get a free audit
                  <ArrowRightIcon className="size-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-11 px-6">
                <a href={siteConfig.phoneHref}>Call {siteConfig.phone}</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <FaqSection
        items={generalFaqs}
        eyebrow="Service FAQ"
        title="Everything you need to know before we start"
      />

      <CtaBand />
    </>
  );
}
