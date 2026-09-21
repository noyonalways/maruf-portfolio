import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  ArrowRightIcon,
  CheckIcon,
  ClockIcon,
  PhoneIcon,
  SparklesIcon,
} from "lucide-react";

import { CtaBand } from "@/components/cta-band";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { PostCard } from "@/components/post-card";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { FaqSection } from "@/components/sections/faq-section";
import { ServiceCard } from "@/components/service-card";
import { ServiceIcon } from "@/components/service-icon";
import { Button } from "@/components/ui/button";
import { getBlogPostsByCategory, getSortedBlogPosts } from "@/content/blogs";
import { getRelatedServices, getService, getServiceSlugs } from "@/content/services";
import {
  absoluteUrl,
  breadcrumbSchema,
  buildMetadata,
  faqSchema,
} from "@/lib/seo";
import { siteConfig } from "@/lib/site";
import { cn } from "cn";

const categoryForService: Record<string, string> = {
  "digital-marketing": "digital-marketing",
  "graphics-design": "branding",
  "web-development": "web-development",
  "business-automation": "automation",
};

export function generateStaticParams() {
  return getServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata(
  props: PageProps<"/services/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const service = getService(slug);

  if (!service) {
    return buildMetadata({
      title: "Service not found",
      description: "The service you are looking for does not exist.",
      path: `/services/${slug}`,
      noIndex: true,
    });
  }

  return buildMetadata({
    title: `${service.title} Services`,
    description: service.summary,
    path: `/services/${service.slug}`,
    keywords: service.keywords,
  });
}

function serviceSchema(service: NonNullable<ReturnType<typeof getService>>) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${absoluteUrl(`/services/${service.slug}`)}#service`,
    name: `${service.title} Services`,
    serviceType: service.title,
    description: service.summary,
    url: absoluteUrl(`/services/${service.slug}`),
    provider: { "@id": `${siteConfig.url}/#person` },
    areaServed: { "@type": "Place", name: "Worldwide" },
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      description: `Starting from ${service.priceFrom}`,
      availability: "https://schema.org/InStock",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${service.title} deliverables`,
      itemListElement: service.deliverables.map((item) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: item },
      })),
    },
  };
}

export default async function ServiceDetailPage(
  props: PageProps<"/services/[slug]">,
) {
  const { slug } = await props.params;
  const service = getService(slug);

  if (!service) {
    notFound();
  }

  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: service.title, path: `/services/${service.slug}` },
  ];

  const relatedServices = getRelatedServices(service);
  const categorySlug = categoryForService[service.slug];
  const categoryPosts = categorySlug
    ? getBlogPostsByCategory(categorySlug)
    : [];
  const relatedPosts = (
    categoryPosts.length >= 3 ? categoryPosts : getSortedBlogPosts()
  ).slice(0, 3);

  return (
    <>
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />
      <JsonLd data={serviceSchema(service)} />
      <JsonLd data={faqSchema(service.faqs)} />

      <PageHero
        eyebrow={service.tagline}
        title={
          <>
            {service.title}{" "}
            <span className="text-gradient">services</span>
          </>
        }
        description={service.summary}
        breadcrumbs={breadcrumbs}
      >
        <div className="flex flex-col gap-5 pt-2">
          <ul className="flex flex-wrap gap-2">
            {service.highlights.map((highlight) => (
              <li
                key={highlight}
                className="inline-flex items-center gap-1.5 rounded-full border bg-card px-3 py-1.5 text-xs font-medium"
              >
                <CheckIcon className="size-3.5 text-brand" aria-hidden="true" />
                {highlight}
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap items-center gap-4">
            <Button asChild size="lg" className="h-11 px-6">
              <Link href="/contact">
                Request a proposal
                <ArrowRightIcon className="size-4" />
              </Link>
            </Button>
            <span className="text-sm text-muted-foreground">
              Starting from{" "}
              <span className="font-semibold text-foreground">
                {service.priceFrom}
              </span>
            </span>
          </div>
        </div>
      </PageHero>

      <section className="container-page py-14 sm:py-20">
        <dl className="grid gap-6 rounded-2xl border bg-muted/25 p-6 sm:grid-cols-3 sm:p-8">
          {service.stats.map((stat) => (
            <div key={stat.label} className="flex flex-col gap-1 text-center">
              <dd className="font-heading text-3xl font-semibold tracking-tight">
                {stat.value}
              </dd>
              <dt className="text-xs tracking-wide text-muted-foreground uppercase">
                {stat.label}
              </dt>
            </div>
          ))}
        </dl>
      </section>

      <section className="container-page pb-16 sm:pb-24">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
          <Reveal className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <span
                className={cn(
                  "inline-flex size-12 items-center justify-center rounded-2xl bg-linear-to-br text-white shadow-sm",
                  service.accent,
                )}
              >
                <ServiceIcon name={service.icon} className="size-6" />
              </span>
              <h2 className="font-heading text-2xl font-semibold tracking-tight sm:text-3xl">
                Overview
              </h2>
            </div>
            {service.description.map((paragraph) => (
              <p
                key={paragraph}
                className="text-base leading-[1.8] text-pretty text-muted-foreground"
              >
                {paragraph}
              </p>
            ))}

            <h3 className="mt-4 font-heading text-xl font-semibold tracking-tight">
              What I deliver
            </h3>
            <ul className="grid gap-3 sm:grid-cols-2">
              {service.deliverables.map((deliverable) => (
                <li
                  key={deliverable}
                  className="flex items-start gap-2.5 rounded-xl border bg-card p-3.5 text-sm"
                >
                  <CheckIcon
                    className="mt-0.5 size-4 shrink-0 text-brand"
                    aria-hidden="true"
                  />
                  {deliverable}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={100} className="lg:sticky lg:top-24 lg:self-start">
            <aside className="flex flex-col gap-5 rounded-2xl border bg-card p-6">
              <div className="flex flex-col gap-1">
                <p className="text-xs font-semibold tracking-[0.14em] text-brand uppercase">
                  Get started
                </p>
                <p className="font-heading text-xl font-semibold">
                  {service.shortTitle}
                </p>
                <p className="text-sm text-muted-foreground">
                  Starting from{" "}
                  <span className="font-medium text-foreground">
                    {service.priceFrom}
                  </span>
                </p>
              </div>

              <ul className="flex flex-col gap-2.5 border-y py-4 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <ClockIcon className="size-4 shrink-0 text-brand" aria-hidden="true" />
                  Reply within one business day
                </li>
                <li className="flex items-center gap-2">
                  <SparklesIcon
                    className="size-4 shrink-0 text-brand"
                    aria-hidden="true"
                  />
                  Free initial audit and plan
                </li>
                <li className="flex items-center gap-2">
                  <PhoneIcon className="size-4 shrink-0 text-brand" aria-hidden="true" />
                  Direct access to me
                </li>
              </ul>

              <div className="flex flex-col gap-2.5">
                <Button asChild className="h-10 w-full">
                  <Link href="/contact">
                    Request a proposal
                    <ArrowRightIcon className="size-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="h-10 w-full">
                  <a href={siteConfig.phoneHref}>
                    Call {siteConfig.phone}
                  </a>
                </Button>
              </div>
            </aside>
          </Reveal>
        </div>
      </section>

      <section className="border-y bg-muted/25 py-16 sm:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="What's included"
            title={`Everything in my ${service.shortTitle.toLowerCase()} service`}
            description="Each element below is delivered as standard — not sold as an upsell."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {service.features.map((feature, index) => (
              <Reveal
                as="article"
                key={feature.title}
                delay={index * 60}
                className="h-full"
              >
                <div className="flex h-full flex-col gap-2.5 rounded-2xl border bg-card p-6">
                  <h3 className="font-heading text-base font-semibold">
                    {feature.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-16 sm:py-24">
        <SectionHeading
          eyebrow="My process"
          title={`How I run a ${service.shortTitle.toLowerCase()} engagement`}
          description="Clear stages, clear deliverables and a clear view of progress from day one."
        />
        <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {service.process.map((step, index) => (
            <Reveal
              as="li"
              key={step.title}
              delay={index * 70}
              className="h-full"
            >
              <div className="flex h-full flex-col gap-3 rounded-2xl border bg-card p-6">
                <span className="font-heading inline-flex size-10 items-center justify-center rounded-xl bg-brand/10 text-sm font-semibold text-brand">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="font-heading text-base font-semibold">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>
      </section>

      <FaqSection
        items={service.faqs}
        eyebrow={`${service.shortTitle} FAQ`}
        title={`Common questions about ${service.shortTitle.toLowerCase()}`}
        description="Still unsure about something? Ask me directly and I will give you a straight answer."
      />

      <section className="container-page pb-16 sm:pb-24">
        <SectionHeading
          eyebrow="Related services"
          title="Pairs well with"
          description="Most clients combine two or more of these for compounding results."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {relatedServices.map((related, index) => (
            <ServiceCard
              key={related.slug}
              service={related}
              index={index}
            />
          ))}
        </div>
      </section>

      <section className="container-page pb-16 sm:pb-24">
        <SectionHeading
          eyebrow="Further reading"
          title="Guides related to this service"
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {relatedPosts.map((post, index) => (
            <PostCard key={post.slug} post={post} index={index} />
          ))}
        </div>
      </section>

      <CtaBand
        title={`Ready to start your ${service.shortTitle.toLowerCase()} project?`}
        description="Send me a short brief and I will come back with a clear plan, timeline and price."
      />
    </>
  );
}
