import { cn } from "cn";

export function Logo({
  className,
  showWordmark = true,
}: {
  className?: string;
  showWordmark?: boolean;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <span className="relative inline-flex size-9 items-center justify-center">
        <svg
          viewBox="0 0 40 40"
          role="img"
          aria-hidden="true"
          className="size-9"
        >
          <defs>
            <linearGradient id="mm-mark" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="var(--brand)" />
              <stop offset="100%" stopColor="var(--highlight)" />
            </linearGradient>
          </defs>
          <rect
            width="40"
            height="40"
            rx="12"
            fill="url(#mm-mark)"
            className="opacity-95"
          />
          <path
            d="M9 28V13.6h4.3l4.6 8.6 4.6-8.6H27V28h-4v-8.2l-3.6 6.6h-1l-3.6-6.6V28H9Z"
            fill="var(--brand-foreground)"
          />
        </svg>
      </span>
      {showWordmark ? (
        <span className="flex flex-col leading-none">
          <span className="font-heading text-[1.05rem] font-semibold tracking-tight">
            Maruf<span className="text-brand">Mondol</span>
          </span>
          <span className="text-[0.65rem] font-medium tracking-[0.18em] text-muted-foreground uppercase">
            Digital Marketer
          </span>
        </span>
      ) : null}
    </span>
  );
}
