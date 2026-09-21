"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRightIcon, ChevronDownIcon, MenuIcon } from "lucide-react";

import { Logo } from "@/components/logo";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { services } from "@/content/services";
import { mainNav, siteConfig } from "@/lib/site";
import { cn } from "cn";

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const navItemClass = (active: boolean) =>
    cn(
      "group relative inline-flex items-center gap-1 rounded-full px-3.5 py-1.5 text-sm font-medium outline-none transition-colors duration-200 focus-visible:ring-3 focus-visible:ring-ring/50",
      active
        ? "bg-muted text-foreground"
        : "text-muted-foreground hover:bg-muted/60 hover:text-foreground",
    );

  return (
    <header className="sticky top-0 z-50 w-full">
      <div
        className={cn(
          "container-page transition-all duration-300",
          scrolled ? "py-2 " : "py-3 px-5",
        )}
      >
        <div
          className={cn(
            "flex h-14 items-center justify-between gap-3 rounded-2xl border px-2.5 transition-all duration-300 sm:px-3.5",
            scrolled
              ? "border-border/60 backdrop-blur-xl"
              : "border-transparent",
          )}
        >
          <Link
            href="/"
            className="rounded-xl px-1 outline-none transition-opacity hover:opacity-90 focus-visible:ring-3 focus-visible:ring-ring/50"
            aria-label={`${siteConfig.name} home`}
          >
            <Logo />
          </Link>

          <nav
            className="hidden items-center gap-1 lg:flex"
            aria-label="Main navigation"
          >
            {mainNav.map((item) =>
              item.href === "/services" ? (
                <DropdownMenu key={item.href}>
                  <DropdownMenuTrigger asChild>
                    <button
                      type="button"
                      className={navItemClass(isActive(item.href))}
                    >
                      {item.title}
                      <ChevronDownIcon
                        className="size-3.5 opacity-70 transition-transform duration-200 group-aria-expanded:rotate-180"
                        aria-hidden="true"
                      />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    align="start"
                    className="w-64 rounded-xl p-1.5"
                  >
                    <DropdownMenuItem asChild className="rounded-lg">
                      <Link href="/services" className="font-medium">
                        All services
                      </Link>
                    </DropdownMenuItem>
                    {services.map((service) => (
                      <DropdownMenuItem
                        key={service.slug}
                        asChild
                        className="rounded-lg"
                      >
                        <Link href={`/services/${service.slug}`}>
                          {service.title}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className={navItemClass(isActive(item.href))}
                  aria-current={isActive(item.href) ? "page" : undefined}
                >
                  {item.title}
                </Link>
              ),
            )}
          </nav>

          <div className="flex items-center gap-1.5">
            <ThemeToggle className="size-9 rounded-full" />
            <Button
              asChild
              size="lg"
              className="hidden h-9 rounded-full px-4 shadow-sm shadow-primary/20 sm:inline-flex"
            >
              <Link href="/contact">
                Get a proposal
                <ArrowRightIcon className="size-4" />
              </Link>
            </Button>

            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="size-9 rounded-full lg:hidden"
                  aria-label="Open menu"
                >
                  <MenuIcon className="size-5" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[19rem] gap-0 border-l-border/70 bg-popover/95 p-0 backdrop-blur-xl"
              >
                <SheetHeader className="border-b border-border/70">
                  <SheetTitle className="sr-only">Navigation menu</SheetTitle>
                  <Logo />
                </SheetHeader>
                <nav
                  className="flex flex-col gap-1 overflow-y-auto p-4"
                  aria-label="Mobile navigation"
                >
                  {mainNav.map((item) => (
                    <SheetClose asChild key={item.href}>
                      <Link
                        href={item.href}
                        className={cn(
                          "rounded-xl px-3.5 py-2.5 text-sm font-medium transition-colors",
                          isActive(item.href)
                            ? "bg-muted text-foreground"
                            : "text-muted-foreground hover:bg-muted/60 hover:text-foreground",
                        )}
                      >
                        {item.title}
                      </Link>
                    </SheetClose>
                  ))}
                  <p className="mt-4 px-3.5 text-xs font-semibold tracking-[0.14em] text-muted-foreground uppercase">
                    Services
                  </p>
                  {services.map((service) => (
                    <SheetClose asChild key={service.slug}>
                      <Link
                        href={`/services/${service.slug}`}
                        className={cn(
                          "rounded-xl px-3.5 py-2.5 text-sm transition-colors",
                          pathname === `/services/${service.slug}`
                            ? "bg-muted text-foreground"
                            : "text-muted-foreground hover:bg-muted/60 hover:text-foreground",
                        )}
                      >
                        {service.title}
                      </Link>
                    </SheetClose>
                  ))}
                </nav>
                <div className="mt-auto border-t border-border/70 p-4">
                  <SheetClose asChild>
                    <Button
                      asChild
                      size="lg"
                      className="h-10 w-full rounded-full shadow-sm shadow-primary/20"
                    >
                      <Link href="/contact">
                        Get a proposal
                        <ArrowRightIcon className="size-4" />
                      </Link>
                    </Button>
                  </SheetClose>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
