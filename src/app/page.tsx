import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";

import { CtaBand } from "@/components/cta-band";
import { JsonLd } from "@/components/json-ld";
import { PostCard } from "@/components/post-card";
import { SectionHeading } from "@/components/section-heading";
import { FaqSection } from "@/components/sections/faq-section";
import { FounderPreview } from "@/components/sections/founder-preview";
import { Hero } from "@/components/sections/hero";
import { ProcessTimeline } from "@/components/sections/process-timeline";
import { ServicesPreview } from "@/components/sections/services-preview";
import { Testimonials } from "@/components/sections/testimonials";
import { TrustMarquee } from "@/components/sections/trust-marquee";
import { ValuesGrid, WhyUs } from "@/components/sections/values-grid";
import { Button } from "@/components/ui/button";
import { generalFaqs } from "@/content/company";
import { getFeaturedBlogPosts } from "@/content/blogs";
import { buildMetadata, faqSchema } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata = buildMetadata({
  title: `${siteConfig.name} — ${siteConfig.tagline}`,
  description: siteConfig.description,
  path: "/",
});

export default function HomePage() {
  const featuredPosts = getFeaturedBlogPosts();

  return (
    <>
      <JsonLd data={faqSchema(generalFaqs)} />
      <Hero />
      <TrustMarquee />
      <ServicesPreview />
      <ValuesGrid />
      <WhyUs />
      <ProcessTimeline />
      <FounderPreview />
      <Testimonials />

      <section className="container-page py-16 sm:py-24">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="From the blog"
            title="Practical guides for growing online"
            description="No fluff, no recycled tips — just the frameworks and checklists I use with clients."
            className="max-w-2xl"
          />
          <Button asChild variant="outline" className="w-fit shrink-0">
            <Link href="/blog">
              Read all articles
              <ArrowRightIcon className="size-4" />
            </Link>
          </Button>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {featuredPosts.slice(0, 2).map((post, index) => (
            <PostCard key={post.slug} post={post} index={index} featured />
          ))}
        </div>
      </section>

      <FaqSection items={generalFaqs} />
      <CtaBand />
    </>
  );
}
