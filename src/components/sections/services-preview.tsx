import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";

import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";
import { Button } from "@/components/ui/button";
import { services } from "@/content/services";

export function ServicesPreview() {
  return (
    <section className="container-page py-16 sm:py-24">
      <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading
          eyebrow="Core services"
          title="Everything you need to grow online"
          description="Four focused capabilities that work better together — so your brand, website, campaigns and operations pull in the same direction."
          className="max-w-2xl"
        />
        <Button asChild variant="outline" className="w-fit shrink-0">
          <Link href="/services">
            All services
            <ArrowRightIcon className="size-4" />
          </Link>
        </Button>
      </div>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service, index) => (
          <ServiceCard key={service.slug} service={service} index={index} />
        ))}
      </div>
    </section>
  );
}
