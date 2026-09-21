import Link from "next/link";
import { ArrowRightIcon, MessageCircleQuestionIcon } from "lucide-react";

import { FaqAccordion } from "@/components/faq-accordion";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";

export function FaqSection({
  items,
  title = "Questions I get asked a lot",
  description = "If your question is not here, ask me directly — I usually reply within one business day.",
  eyebrow = "FAQ",
}: {
  items: { question: string; answer: string }[];
  title?: string;
  description?: string;
  eyebrow?: string;
}) {
  return (
    <section className="container-page py-16 sm:py-24">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <Reveal className="flex flex-col gap-5">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-brand/25 bg-brand/8 px-3 py-1 text-xs font-semibold tracking-[0.14em] text-brand uppercase">
            <MessageCircleQuestionIcon className="size-3.5" aria-hidden="true" />
            {eyebrow}
          </span>
          <h2 className="font-heading text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            {title}
          </h2>
          <p className="max-w-md text-base leading-relaxed text-muted-foreground">
            {description}
          </p>
          <Button asChild variant="outline" className="w-fit">
            <Link href="/contact">
              Ask me anything
              <ArrowRightIcon className="size-4" />
            </Link>
          </Button>
        </Reveal>

        <Reveal delay={100}>
          <FaqAccordion items={items} />
        </Reveal>
      </div>
    </section>
  );
}
