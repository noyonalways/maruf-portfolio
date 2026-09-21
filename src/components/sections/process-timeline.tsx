import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { processSteps } from "@/content/company";

export function ProcessTimeline() {
  return (
    <section className="container-page py-16 sm:py-24">
      <SectionHeading
        eyebrow="How I work"
        title="A process that removes guesswork"
        description="Five steps, applied consistently, so you always know what is happening, why, and what it is producing."
      />

      <ol className="mt-14 grid gap-8 lg:grid-cols-5 lg:gap-5">
        {processSteps.map((step, index) => (
          <Reveal
            as="li"
            key={step.step}
            delay={index * 70}
            className="relative flex gap-5 lg:flex-col lg:gap-4"
          >
            <div className="flex flex-col items-center lg:flex-row">
              <span className="font-heading inline-flex size-12 shrink-0 items-center justify-center rounded-2xl border border-brand/25 bg-brand/8 text-sm font-semibold text-brand">
                {step.step}
              </span>
              {index < processSteps.length - 1 ? (
                <span
                  aria-hidden="true"
                  className="mt-2 w-px flex-1 bg-linear-to-b from-brand/35 to-transparent lg:mt-0 lg:ml-4 lg:h-px lg:w-full lg:bg-linear-to-r"
                />
              ) : null}
            </div>
            <div className="flex flex-col gap-2 pb-2 lg:pt-2">
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
  );
}
