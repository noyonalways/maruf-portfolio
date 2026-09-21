import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

type SeoInput = {
  title: string;
  description: string;
  path?: string;
  keywords?: readonly string[];
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  authors?: string[];
  noIndex?: boolean;
};

export const defaultOgImage = "/og";

export function absoluteUrl(path = "/"): string {
  const base = siteConfig.url.replace(/\/$/, "");
  if (!path || path === "/") return base;
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}

export function ogImageUrl(title: string, subtitle?: string): string {
  const url = new URL("/og", siteConfig.url);
  url.searchParams.set("title", title);
  if (subtitle) url.searchParams.set("subtitle", subtitle);
  return url.toString();
}

export function buildMetadata({
  title,
  description,
  path = "/",
  keywords,
  type = "website",
  publishedTime,
  modifiedTime,
  authors,
  noIndex,
}: SeoInput): Metadata {
  const url = absoluteUrl(path);
  const ogTitle = title.includes(siteConfig.name)
    ? title
    : `${title} | ${siteConfig.name}`;
  const image = ogImageUrl(title, description);

  return {
    title,
    description,
    keywords: keywords ? [...keywords] : [...siteConfig.keywords],
    alternates: { canonical: url },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        },
    openGraph: {
      type,
      title: ogTitle,
      description,
      url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} — ${siteConfig.tagline}`,
        },
      ],
      ...(type === "article"
        ? {
            publishedTime,
            modifiedTime: modifiedTime ?? publishedTime,
            authors,
          }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description,
      images: [image],
      creator: siteConfig.handle,
    },
  };
}

export function personSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteConfig.url}/#person`,
    name: siteConfig.name,
    alternateName: siteConfig.shortName,
    jobTitle: siteConfig.role,
    description: siteConfig.description,
    url: siteConfig.url,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    image: absoluteUrl(siteConfig.photo),
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.region,
      addressCountry: "BD",
    },
    sameAs: Object.values(siteConfig.social),
    knowsAbout: [
      "Digital Marketing",
      "Search Engine Optimization",
      "Search Engine Marketing",
      "Social Media Marketing",
      "Graphics Design",
      "Web Development",
      "Business Automation",
      "Analytics",
    ],
    hasOccupation: {
      "@type": "Occupation",
      name: "Digital Marketer",
      occupationLocation: {
        "@type": "City",
        name: siteConfig.address.city,
      },
      skills:
        "SEO, paid advertising, conversion optimization, brand design, web development, business automation",
    },
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    url: siteConfig.url,
    name: siteConfig.name,
    description: siteConfig.description,
    publisher: { "@id": `${siteConfig.url}/#person` },
    inLanguage: "en",
  };
}

export function professionalServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${siteConfig.url}/#service`,
    name: `${siteConfig.name} — ${siteConfig.role}`,
    url: siteConfig.url,
    image: absoluteUrl(defaultOgImage),
    email: siteConfig.email,
    telephone: siteConfig.phone,
    priceRange: "$$",
    founder: { "@id": `${siteConfig.url}/#person` },
    employee: { "@id": `${siteConfig.url}/#person` },
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.region,
      postalCode: siteConfig.address.postalCode,
      addressCountry: "BD",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.geo.latitude,
      longitude: siteConfig.geo.longitude,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
        ],
        opens: "09:00",
        closes: "18:00",
      },
    ],
    sameAs: Object.values(siteConfig.social),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}

export function articleSchema(input: {
  title: string;
  description: string;
  path: string;
  datePublished: string;
  dateModified?: string;
  authorName: string;
  section?: string;
  keywords?: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${absoluteUrl(input.path)}#article`,
    headline: input.title,
    description: input.description,
    url: absoluteUrl(input.path),
    datePublished: input.datePublished,
    dateModified: input.dateModified ?? input.datePublished,
    author: {
      "@type": "Person",
      "@id": `${siteConfig.url}/#person`,
      name: input.authorName,
      url: absoluteUrl("/about"),
    },
    publisher: { "@id": `${siteConfig.url}/#person` },
    image: absoluteUrl(defaultOgImage),
    articleSection: input.section,
    keywords: input.keywords?.join(", "),
    mainEntityOfPage: { "@type": "WebPage", "@id": absoluteUrl(input.path) },
    inLanguage: "en",
  };
}
