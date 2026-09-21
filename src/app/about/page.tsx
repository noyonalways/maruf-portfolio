import Image from "next/image";
import Link from "next/link";
import {
  ArrowRightIcon,
  CompassIcon,
  QuoteIcon,
  RocketIcon,
  TargetIcon,
} from "lucide-react";

import { CtaBand } from "@/components/cta-band";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { ProcessTimeline } from "@/components/sections/process-timeline";
import { Testimonials } from "@/components/sections/testimonials";
import { ValuesGrid, WhyUs } from "@/components/sections/values-grid";
import { Button } from "@/components/ui/button";
import { milestones, mission, vision } from "@/content/company";
import { services } from "@/content/services";
import { absoluteUrl, breadcrumbSchema, buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

const description =
  "Md. Maruf Mondol is a digital marketer blending creativity, technology and strategic thinking to deliver digital marketing, SEO, design, web development and business automation.";

export const metadata = buildMetadata({
  title: "About Md. Maruf Mondol",
  description,
  path: "/about",
  keywords: [
    "Md. Maruf Mondol",
    "digital marketer",
    "digital marketing consultant",
    "SEO specialist",
    "about Maruf Mondol",
  ],
});

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
];

const skills = [
  { label: "SEO & Organic Growth", value: 95 },
  { label: "Paid Media & PPC", value: 92 },
  { label: "Conversion Optimization", value: 88 },
  { label: "Analytics & Reporting", value: 90 },
  { label: "Marketing Automation", value: 85 },
];

const profileFacts = [
  { label: "Based in", value: `${siteConfig.address.city}, ${siteConfig.address.country}` },
  { label: "Working since", value: siteConfig.experienceSince },
  { label: "Focus", value: "Measurable growth" },
  { label: "Clients", value: "SMBs to enterprises" },
];

function aboutPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: `About ${siteConfig.name}`,
    url: absoluteUrl("/about"),
    description,
    mainEntity: { "@id": `${siteConfig.url}/#person` },
  };
}

function profilePageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    name: `${siteConfig.name} — ${siteConfig.role}`,
    url: absoluteUrl("/about"),
    about: { "@id": `${siteConfig.url}/#person` },
    mainEntity: { "@id": `${siteConfig.url}/#person` },
    knowsAbout: [
      "Digital Marketing",
      "Search Engine Optimization",
      "Web Development",
      "Business Automation",
      "Brand Strategy",
    ],
  };
}

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />
      <JsonLd data={aboutPageSchema()} />
      <JsonLd data={profilePageSchema()} />

      <PageHero
        eyebrow="About me"
        title={
          <>
            I help businesses grow online with work that is{" "}
            <span className="text-gradient">measured, not guessed</span>
          </>
        }
        description={description}
        breadcrumbs={breadcrumbs}
      >
        <div className="flex flex-wrap gap-3 pt-2">
          <Button asChild size="lg" className="h-11 px-6">
            <Link href="/contact">
              Work with me
              <ArrowRightIcon className="size-4" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="h-11 px-6">
            <Link href="/services">See my services</Link>
          </Button>
        </div>
      </PageHero>

      <section className="container-page py-16 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <Reveal className="flex flex-col gap-6">
            <SectionHeading
              eyebrow="My story"
              title="Success lives at the intersection of vision, innovation and execution"
            />
            <div className="flex flex-col gap-4 text-base leading-relaxed text-muted-foreground">
              <p>
                I started out in digital marketing the way most people do —
                learning by shipping work and watching the numbers. What stuck
                with me was how often businesses were spending real money on
                tactics that were never connected to a clear outcome.
              </p>
              <p>
                So I built my practice around a simple idea: start with your
                numbers, not with a service list. Understand what a customer is
                worth, what a lead costs, and what margin you have to work with —
                then choose the channels, creative and technology that make
                sense for your situation.
              </p>
              <p>
                Today I work with businesses and individuals across digital
                marketing, SEO, graphics design, web development and business
                automation. I believe success lies at the intersection of
                vision, innovation and execution, and that the work should be
                judged by the growth it produces.
              </p>
              <p>
                Whether you run a small business or a large corporation, I work
                closely with you to create customized solutions that align with
                your objectives — and I stay close enough to be accountable for
                the results.
              </p>
            </div>

            <figure className="mt-2 rounded-2xl border-l-4 border-brand bg-brand/5 px-6 py-5">
              <QuoteIcon
                className="mb-3 size-5 text-brand/40"
                aria-hidden="true"
              />
              <blockquote className="font-heading text-lg leading-snug font-medium text-pretty">
                I don&apos;t just provide services — I build lasting
                partnerships that help my clients achieve meaningful success.
              </blockquote>
              <figcaption className="mt-3 text-sm text-muted-foreground">
                {siteConfig.name}, {siteConfig.role}
              </figcaption>
            </figure>
          </Reveal>

          <Reveal delay={120} className="flex flex-col gap-5">
            <h3 className="font-heading text-sm font-semibold tracking-[0.14em] text-muted-foreground uppercase">
              My journey
            </h3>
            <ol className="flex flex-col gap-5 border-l pl-6">
              {milestones.map((milestone) => (
                <li key={milestone.year} className="relative">
                  <span
                    aria-hidden="true"
                    className="absolute -left-[1.9rem] top-1.5 size-2.5 rounded-full bg-brand ring-4 ring-brand/15"
                  />
                  <p className="font-heading text-sm font-semibold text-brand">
                    {milestone.year}
                  </p>
                  <p className="mt-1 font-heading text-base font-semibold">
                    {milestone.title}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {milestone.description}
                  </p>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>

      <section className="border-y bg-muted/25 py-16 sm:py-24">
        <div className="container-page grid gap-5 lg:grid-cols-2">
          <Reveal className="h-full">
            <article className="flex h-full flex-col gap-4 rounded-2xl border bg-card p-7">
              <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-linear-to-br from-brand to-[color-mix(in_oklch,var(--brand)_55%,var(--highlight))] text-white">
                <TargetIcon className="size-5" aria-hidden="true" />
              </span>
              <h2 className="font-heading text-2xl font-semibold tracking-tight">
                My Mission
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground">
                {mission}
              </p>
            </article>
          </Reveal>

          <Reveal delay={100} className="h-full">
            <article className="flex h-full flex-col gap-4 rounded-2xl border bg-card p-7">
              <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-linear-to-br from-highlight to-[color-mix(in_oklch,var(--highlight)_60%,var(--brand))] text-highlight-foreground">
                <CompassIcon className="size-5" aria-hidden="true" />
              </span>
              <h2 className="font-heading text-2xl font-semibold tracking-tight">
                My Vision
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground">
                {vision}
              </p>
            </article>
          </Reveal>
        </div>
      </section>

      <section className="container-page py-16 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Reveal className="flex flex-col gap-5">
            <div className="relative mx-auto w-full max-w-sm">
              <div
                aria-hidden="true"
                className="absolute -inset-4 -z-10 rounded-[2rem] bg-linear-to-br from-brand/25 via-transparent to-highlight/25 blur-2xl"
              />
              <div className="relative overflow-hidden rounded-3xl border bg-card">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={siteConfig.photo}
                    alt={`${siteConfig.name} — ${siteConfig.role}`}
                    fill
                    sizes="(max-width: 1024px) 90vw, 24rem"
                    className="object-cover object-center"
                  />
                </div>
                <div className="flex flex-col items-center gap-3 px-8 py-7 text-center">
                  <p className="font-heading text-xl font-semibold">
                    {siteConfig.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {siteConfig.role}
                  </p>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Leading strategy and staying hands-on with every client I
                    partner with.
                  </p>
                </div>
              </div>
            </div>

            <dl className="grid grid-cols-2 gap-4">
              {profileFacts.map((fact) => (
                <div
                  key={fact.label}
                  className="rounded-xl border bg-card p-4"
                >
                  <dt className="text-xs tracking-wide text-muted-foreground uppercase">
                    {fact.label}
                  </dt>
                  <dd className="mt-1 text-sm font-medium">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={100} className="flex flex-col gap-6">
            <SectionHeading
              eyebrow="What I bring"
              title="Strategy, execution and honest reporting"
              description="I combine marketing, design, development and automation so the pieces reinforce each other instead of pulling in different directions."
            />
            <div className="flex flex-col gap-4 text-base leading-relaxed text-muted-foreground">
              <p>
                Most businesses do not need more tactics — they need a clear
                plan and someone accountable for executing it. I start with
                research and positioning, then move into the channels and assets
                that will actually move your numbers.
              </p>
              <p>
                Because I cover marketing, design, development and automation
                myself, there is no handoff gap where good ideas quietly die.
              </p>
            </div>

            <ul className="flex flex-col gap-3.5">
              {skills.map((skill) => (
                <li key={skill.label} className="flex flex-col gap-1.5">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium">{skill.label}</span>
                    <span className="text-muted-foreground">
                      {skill.value}%
                    </span>
                  </div>
                  <span
                    className="h-1.5 w-full overflow-hidden rounded-full bg-muted"
                    role="presentation"
                  >
                    <span
                      className="block h-full rounded-full bg-linear-to-r from-brand to-[color-mix(in_oklch,var(--brand)_55%,var(--highlight))]"
                      style={{ width: `${skill.value}%` }}
                    />
                  </span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-3">
              <Button asChild className="w-fit">
                <Link href="/contact">
                  Book a call with me
                  <ArrowRightIcon className="size-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="w-fit">
                <Link href="/services">
                  <RocketIcon className="size-4" />
                  What I do
                </Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="container-page pb-16 sm:pb-24">
        <SectionHeading
          eyebrow="Capabilities"
          title="Four services, one accountable partner"
          description="Each capability strengthens the others — which is why I build them together rather than selling them in isolation."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <Reveal key={service.slug} delay={index * 60} className="h-full">
              <Link
                href={`/services/${service.slug}`}
                className="group flex h-full flex-col gap-2 rounded-2xl border bg-card p-5 transition-all duration-300 hover:-translate-y-1 hover:border-brand/35 hover:shadow-lg hover:shadow-brand/5"
              >
                <p className="font-heading text-base font-semibold transition-colors group-hover:text-brand">
                  {service.title}
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {service.tagline}
                </p>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <ValuesGrid />
      <WhyUs />
      <ProcessTimeline />
      <Testimonials />
      <CtaBand
        title="Let's build your next stage of growth"
        description="Tell me about your business and goals. I will come back with an honest assessment and a clear plan."
        primaryLabel="Start the conversation"
      />
    </>
  );
}
