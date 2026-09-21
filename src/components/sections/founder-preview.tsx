import Image from "next/image";
import Link from "next/link";
import {
  ArrowRightIcon,
  BadgeCheckIcon,
  GlobeIcon,
  MailIcon,
  MapPinIcon,
} from "lucide-react";

import { Reveal } from "@/components/reveal";
import { SocialIcon } from "@/components/social-icons";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";

const skills = [
  "SEO strategy",
  "Performance marketing",
  "Conversion optimization",
  "Brand positioning",
  "Marketing automation",
  "Analytics & attribution",
];

export function FounderPreview() {
  return (
    <section className="container-page py-16 sm:py-24">
      <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <Reveal>
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
              <div className="flex flex-col items-center gap-4 p-7 text-center">
                <div className="flex flex-col gap-1">
                  <p className="font-heading text-xl font-semibold">
                    {siteConfig.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {siteConfig.role}
                  </p>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-brand/25 bg-brand/8 px-3 py-1 text-xs font-medium text-brand">
                  <BadgeCheckIcon className="size-3.5" aria-hidden="true" />
                  Working with clients since {siteConfig.experienceSince}
                </span>
                <ul className="flex w-full flex-col gap-2.5 border-t pt-5 text-sm text-muted-foreground">
                  <li className="flex items-center justify-center gap-2">
                    <MapPinIcon className="size-4" aria-hidden="true" />
                    {siteConfig.address.city}, {siteConfig.address.country}
                  </li>
                  <li className="flex items-center justify-center gap-2">
                    <GlobeIcon className="size-4" aria-hidden="true" />
                    Working with clients worldwide
                  </li>
                  <li className="flex items-center justify-center gap-2">
                    <MailIcon className="size-4" aria-hidden="true" />
                    {siteConfig.email}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={100} className="flex flex-col gap-6">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-brand/25 bg-brand/8 px-3 py-1 text-xs font-semibold tracking-[0.14em] text-brand uppercase">
            About me
          </span>
          <h2 className="font-heading text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            A digital marketer who starts with your numbers, not my portfolio
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground">
            I&apos;m {siteConfig.name}, a {siteConfig.role.toLowerCase()} working
            with businesses that want growth they can actually measure. I lead
            strategy on every engagement personally, which is why you always
            talk to the person doing the work.
          </p>
          <p className="text-base leading-relaxed text-muted-foreground">
            From SEO and paid campaigns to brand systems, websites and
            automation, the goal is always the same — build the digital
            foundation that makes the next stage of your business easier.
          </p>

          <ul className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <li
                key={skill}
                className="rounded-full border bg-muted/50 px-3 py-1.5 text-xs font-medium text-muted-foreground"
              >
                {skill}
              </li>
            ))}
          </ul>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild className="w-fit">
              <Link href="/about">
                Read my full story
                <ArrowRightIcon className="size-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="w-fit">
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <SocialIcon name="linkedin" className="size-4" />
                Connect on LinkedIn
              </a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
