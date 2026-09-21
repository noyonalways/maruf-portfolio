import Link from "next/link";
import {
  ArrowUpRightIcon,
  ClockIcon,
  MailIcon,
  MapPinIcon,
  MessageCircleIcon,
  PhoneIcon,
} from "lucide-react";

import { ContactForm } from "@/components/contact-form";
import { FaqSection } from "@/components/sections/faq-section";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { SocialIcon, type SocialName } from "@/components/social-icons";
import { generalFaqs } from "@/content/company";
import {
  absoluteUrl,
  breadcrumbSchema,
  buildMetadata,
  professionalServiceSchema,
} from "@/lib/seo";
import { siteConfig } from "@/lib/site";

const description =
  "Contact Md. Maruf Mondol to discuss digital marketing, SEO, graphics design, web development or business automation. I reply within one business day.";

export const metadata = buildMetadata({
  title: "Contact Me",
  description,
  path: "/contact",
  keywords: [
    "contact digital marketer",
    "hire digital marketer",
    "SEO consultation",
    "get a proposal",
  ],
});

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Contact", path: "/contact" },
];

const socials: { name: SocialName; href: string; label: string }[] = [
  { name: "facebook", href: siteConfig.social.facebook, label: "Facebook" },
  { name: "linkedin", href: siteConfig.social.linkedin, label: "LinkedIn" },
  { name: "x", href: siteConfig.social.x, label: "X" },
  { name: "instagram", href: siteConfig.social.instagram, label: "Instagram" },
  { name: "youtube", href: siteConfig.social.youtube, label: "YouTube" },
];

const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${siteConfig.address.street}, ${siteConfig.address.city}, ${siteConfig.address.country}`,
)}`;

const contactChannels = [
  {
    icon: MailIcon,
    label: "Email me",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
  {
    icon: PhoneIcon,
    label: "Call me",
    value: siteConfig.phone,
    href: siteConfig.phoneHref,
  },
  {
    icon: MessageCircleIcon,
    label: "WhatsApp",
    value: "Chat with me",
    href: siteConfig.whatsapp,
  },
];

function contactPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: `Contact ${siteConfig.name}`,
    url: absoluteUrl("/contact"),
    description,
    about: { "@id": `${siteConfig.url}/#person` },
  };
}

export default function ContactPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />
      <JsonLd data={contactPageSchema()} />
      <JsonLd data={professionalServiceSchema()} />

      <PageHero
        eyebrow="Contact me"
        title={
          <>
            Let&apos;s talk about your{" "}
            <span className="text-gradient">growth</span>
          </>
        }
        description="If you are ready to take your business to the next level with digital solutions that actually get measured, I am here to help. Tell me where you are and I will show you what is possible."
        breadcrumbs={breadcrumbs}
      />

      <section className="container-page py-14 sm:py-20">
        <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:gap-10">
          <Reveal>
            <ContactForm />
          </Reveal>

          <Reveal delay={100} className="flex flex-col gap-5">
            <div className="flex flex-col gap-4 rounded-2xl border bg-card p-6">
              <h2 className="font-heading text-lg font-semibold">
                Reach me directly
              </h2>
              <ul className="flex flex-col gap-4">
                {contactChannels.map((channel) => (
                  <li key={channel.label}>
                    <a
                      href={channel.href}
                      target={
                        channel.href.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        channel.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="group flex items-start gap-3.5"
                    >
                      <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-xl bg-brand/10 text-brand">
                        <channel.icon className="size-4.5" aria-hidden="true" />
                      </span>
                      <span className="flex flex-col leading-tight">
                        <span className="text-xs tracking-wide text-muted-foreground uppercase">
                          {channel.label}
                        </span>
                        <span className="text-sm font-medium transition-colors group-hover:text-brand">
                          {channel.value}
                        </span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-4 rounded-2xl border bg-card p-6">
              <h2 className="font-heading text-lg font-semibold">
                Visit or write to me
              </h2>
              <ul className="flex flex-col gap-4 text-sm">
                <li className="flex items-start gap-3.5">
                  <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-xl bg-brand/10 text-brand">
                    <MapPinIcon className="size-4.5" aria-hidden="true" />
                  </span>
                  <span className="flex flex-col gap-0.5 leading-snug">
                    <span className="text-xs tracking-wide text-muted-foreground uppercase">
                      Office
                    </span>
                    <span>
                      {siteConfig.address.street}
                      <br />
                      {siteConfig.address.city} {siteConfig.address.postalCode}
                      <br />
                      {siteConfig.address.country}
                    </span>
                  </span>
                </li>
                <li className="flex items-start gap-3.5">
                  <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-xl bg-brand/10 text-brand">
                    <ClockIcon className="size-4.5" aria-hidden="true" />
                  </span>
                  <span className="flex flex-col gap-0.5 leading-snug">
                    <span className="text-xs tracking-wide text-muted-foreground uppercase">
                      Hours
                    </span>
                    <span>
                      Monday – Friday
                      <br />
                      9:00 AM – 6:00 PM
                    </span>
                  </span>
                </li>
              </ul>
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-brand transition-colors hover:text-brand/80"
              >
                Get directions
                <ArrowUpRightIcon className="size-4" aria-hidden="true" />
              </a>
            </div>

            <div className="flex flex-col gap-4 rounded-2xl border bg-card p-6">
              <h2 className="font-heading text-lg font-semibold">Follow me</h2>
              <ul className="flex flex-wrap gap-2">
                {socials.map((social) => (
                  <li key={social.name}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="inline-flex size-10 items-center justify-center rounded-xl border bg-background text-muted-foreground transition-colors hover:border-brand/40 hover:text-brand"
                    >
                      <SocialIcon name={social.name} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-brand/20 bg-brand/5 p-6">
              <h2 className="font-heading text-base font-semibold">
                Prefer a quick call?
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Book a free 30-minute strategy call. I will review your current
                setup and suggest the fastest path to results — no obligation.
              </p>
              <Link
                href={siteConfig.phoneHref}
                className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-brand hover:text-brand/80"
              >
                Call {siteConfig.phone}
                <ArrowUpRightIcon className="size-4" aria-hidden="true" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <FaqSection
        items={generalFaqs.slice(0, 5)}
        eyebrow="Before you write"
        title="Answers to the questions I hear most"
      />
    </>
  );
}
