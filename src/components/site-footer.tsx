import Link from "next/link";
import { ArrowUpRightIcon, MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";

import { Logo } from "@/components/logo";
import { SocialIcon, type SocialName } from "@/components/social-icons";
import { services } from "@/content/services";
import { postCategories } from "@/content/posts";
import { mainNav, siteConfig } from "@/lib/site";

const socials: { name: SocialName; href: string; label: string }[] = [
  { name: "facebook", href: siteConfig.social.facebook, label: "Facebook" },
  { name: "linkedin", href: siteConfig.social.linkedin, label: "LinkedIn" },
  { name: "x", href: siteConfig.social.x, label: "X" },
  { name: "instagram", href: siteConfig.social.instagram, label: "Instagram" },
  { name: "youtube", href: siteConfig.social.youtube, label: "YouTube" },
];

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t bg-muted/35">
      <div className="container-page grid gap-12 py-14 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr] lg:py-16">
        <div className="flex flex-col gap-5">
          <Logo />
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
            {siteConfig.description}
          </p>
          <ul className="flex flex-col gap-2.5 text-sm text-muted-foreground">
            <li>
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
              >
                <MailIcon className="size-4 shrink-0" aria-hidden="true" />
                {siteConfig.email}
              </a>
            </li>
            <li>
              <a
                href={siteConfig.phoneHref}
                className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
              >
                <PhoneIcon className="size-4 shrink-0" aria-hidden="true" />
                {siteConfig.phone}
              </a>
            </li>
            <li className="inline-flex items-start gap-2">
              <MapPinIcon className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
              <span>
                {siteConfig.address.street}, {siteConfig.address.city}{" "}
                {siteConfig.address.postalCode}, {siteConfig.address.country}
              </span>
            </li>
          </ul>
        </div>

        <nav aria-label="Services">
          <h2 className="font-heading text-sm font-semibold tracking-wide">
            Services
          </h2>
          <ul className="mt-4 flex flex-col gap-2.5 text-sm text-muted-foreground">
            {services.map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/services/${service.slug}`}
                  className="transition-colors hover:text-foreground"
                >
                  {service.title}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/services"
                className="inline-flex items-center gap-1 font-medium text-brand transition-colors hover:text-brand/80"
              >
                View all services
                <ArrowUpRightIcon className="size-3.5" aria-hidden="true" />
              </Link>
            </li>
          </ul>
        </nav>

        <nav aria-label="Explore">
          <h2 className="font-heading text-sm font-semibold tracking-wide">
            Explore
          </h2>
          <ul className="mt-4 flex flex-col gap-2.5 text-sm text-muted-foreground">
            {mainNav
              .filter((item) => item.href !== "/")
              .map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="transition-colors hover:text-foreground"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            {postCategories.slice(0, 3).map((category) => (
              <li key={category.slug}>
                <Link
                  href={`/blog/category/${category.slug}`}
                  className="transition-colors hover:text-foreground"
                >
                  {category.title} articles
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex flex-col gap-5">
          <h2 className="font-heading text-sm font-semibold tracking-wide">
            Work with me
          </h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Have a project in mind? Send me a short brief and I will reply
            within one business day.
          </p>
          <Link
            href="/contact"
            className="inline-flex h-10 w-fit items-center gap-2 rounded-lg bg-primary px-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/85"
          >
            Start a project
            <ArrowUpRightIcon className="size-4" aria-hidden="true" />
          </Link>
          <ul className="flex flex-wrap gap-2">
            {socials.map((social) => (
              <li key={social.name}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="inline-flex size-9 items-center justify-center rounded-lg border bg-background text-muted-foreground transition-colors hover:border-brand/40 hover:text-brand"
                >
                  <SocialIcon name={social.name} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t">
        <div className="container-page flex flex-col items-center justify-between gap-3 py-6 text-xs text-muted-foreground sm:flex-row">
          <p>
            &copy; {year} {siteConfig.name}. All rights reserved.
          </p>
          <p className="text-[11px] text-muted-foreground/45">
            Site by{" "}
            <a
              href={siteConfig.developer.url}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-muted-foreground"
            >
              {siteConfig.developer.name}
            </a>
          </p>
          <p>
            {siteConfig.role} &middot; {siteConfig.address.city},{" "}
            {siteConfig.address.country}
          </p>
        </div>
      </div>
    </footer>
  );
}
