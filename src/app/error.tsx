"use client";

import * as React from "react";
import { AlertTriangleIcon, RotateCcwIcon } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  React.useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="container-page flex flex-col items-center gap-5 py-24 text-center sm:py-32">
      <span className="inline-flex size-14 items-center justify-center rounded-2xl bg-destructive/10 text-destructive">
        <AlertTriangleIcon className="size-7" aria-hidden="true" />
      </span>
      <h1 className="font-heading text-2xl font-semibold tracking-tight sm:text-3xl">
        Something went wrong
      </h1>
      <p className="max-w-lg text-base leading-relaxed text-muted-foreground">
        An unexpected error occurred while loading this page. Try again, and if
        it keeps happening please get in touch.
      </p>
      {error.digest ? (
        <p className="font-mono text-xs text-muted-foreground">
          Reference: {error.digest}
        </p>
      ) : null}
      <Button onClick={reset} size="lg" className="h-11 px-6">
        <RotateCcwIcon className="size-4" />
        Try again
      </Button>
    </section>
  );
}
