import { LightbulbIcon, QuoteIcon } from "lucide-react";

import { cn } from "cn";
import type { ContentBlock } from "@/content/posts";
import { slugify } from "@/lib/format";

export function extractHeadings(blocks: ContentBlock[]) {
  return blocks
    .filter(
      (block): block is { type: "heading"; text: string } =>
        block.type === "heading",
    )
    .map((block) => ({ id: slugify(block.text), text: block.text }));
}

export function BlogContent({
  blocks,
  className,
}: {
  blocks: ContentBlock[];
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col gap-5", className)}>
      {blocks.map((block, index) => {
        switch (block.type) {
          case "heading":
            return (
              <h2
                key={index}
                id={slugify(block.text)}
                className="mt-6 scroll-mt-24 font-heading text-2xl font-semibold tracking-tight text-balance first:mt-0 sm:text-[1.75rem]"
              >
                {block.text}
              </h2>
            );
          case "subheading":
            return (
              <h3
                key={index}
                className="mt-2 font-heading text-lg font-semibold tracking-tight"
              >
                {block.text}
              </h3>
            );
          case "paragraph":
            return (
              <p
                key={index}
                className="text-base leading-[1.8] text-pretty text-muted-foreground"
              >
                {block.text}
              </p>
            );
          case "list":
            return block.ordered ? (
              <ol
                key={index}
                className="flex flex-col gap-2.5 pl-5 text-base leading-relaxed text-muted-foreground [counter-reset:item]"
              >
                {block.items.map((item) => (
                  <li
                    key={item}
                    className="relative pl-1 marker:font-medium marker:text-brand"
                  >
                    {item}
                  </li>
                ))}
              </ol>
            ) : (
              <ul key={index} className="flex flex-col gap-2.5 text-base leading-relaxed text-muted-foreground">
                {block.items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span
                      aria-hidden="true"
                      className="mt-2 size-1.5 shrink-0 rounded-full bg-brand"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            );
          case "quote":
            return (
              <figure
                key={index}
                className="relative my-2 rounded-2xl border-l-4 border-brand bg-brand/5 px-6 py-5"
              >
                <QuoteIcon
                  className="absolute top-4 right-5 size-5 text-brand/25"
                  aria-hidden="true"
                />
                <blockquote className="font-heading text-lg leading-snug font-medium text-pretty">
                  {block.text}
                </blockquote>
                {block.attribution ? (
                  <figcaption className="mt-2 text-sm text-muted-foreground">
                    {block.attribution}
                  </figcaption>
                ) : null}
              </figure>
            );
          case "callout":
            return (
              <aside
                key={index}
                className="flex gap-4 rounded-2xl border border-brand/20 bg-brand/5 p-5"
              >
                <LightbulbIcon
                  className="mt-0.5 size-5 shrink-0 text-brand"
                  aria-hidden="true"
                />
                <div className="flex flex-col gap-1.5">
                  {block.title ? (
                    <p className="font-heading text-sm font-semibold">
                      {block.title}
                    </p>
                  ) : null}
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {block.text}
                  </p>
                </div>
              </aside>
            );
          case "code":
            return (
              <pre
                key={index}
                className="overflow-x-auto rounded-xl border bg-muted/60 p-4 text-xs leading-relaxed"
              >
                <code className="font-mono">{block.code}</code>
              </pre>
            );
          case "divider":
            return <hr key={index} className="my-4 border-border" />;
          default:
            return null;
        }
      })}
    </div>
  );
}
