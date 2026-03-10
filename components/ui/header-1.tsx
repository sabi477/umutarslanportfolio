"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { MenuToggleIcon } from "@/components/ui/menu-toggle-icon";
import { useScroll } from "@/components/ui/use-scroll";
import { createPortal } from "react-dom";

export function Header() {
  const [open, setOpen] = React.useState(false);
  const scrolled = useScroll(10);

  const links = [
    {
      label: "Özellikler",
      href: "#features",
    },
    {
      label: "Örnek Çalışmalar",
      href: "#casestudies",
    },
    {
      label: "SSS",
      href: "#faq",
    },
    {
      label: "Timeline",
      href: "#timeline",
    },
  ];

  React.useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b border-transparent py-2",
        {
          "border-border bg-background/95 supports-[backdrop-filter]:bg-background/50 backdrop-blur-lg":
            scrolled,
        },
      )}
    >
      <nav className="relative mx-auto flex h-12 w-full max-w-5xl items-center px-4">
        <a href="/" className="flex flex-1 items-center gap-2 rounded-md p-2 hover:bg-accent">
          <Image
            src="/ua-logo.png"
            alt="UA Logo"
            width={64}
            height={64}
            className="size-8 object-contain invert mix-blend-multiply dark:invert-0 dark:mix-blend-screen"
          />
          <span className="font-bold">UMUT ARSLAN</span>
        </a>
        <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 md:flex">
          {links.map((link) => (
            <a
              key={link.label}
              className={buttonVariants({ variant: "ghost" })}
              href={link.href}
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="flex flex-1 justify-end">
          <Button asChild className="hero-cta-button hidden md:inline-flex">
            <Link href="/meeting">Get Started</Link>
          </Button>
        </div>
        <Button
          size="icon"
          variant="outline"
          onClick={() => setOpen(!open)}
          className="md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label="Toggle menu"
        >
          <MenuToggleIcon open={open} className="size-5" duration={300} />
        </Button>
      </nav>
      <MobileMenu open={open} className="flex flex-col justify-between gap-2">
        <div className="grid gap-y-2">
          {links.map((link) => (
            <a
              key={link.label}
              className={buttonVariants({
                variant: "ghost",
                className: "justify-start",
              })}
              href={link.href}
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="flex flex-col gap-2">
          <Button className="hero-cta-button w-full" asChild>
            <Link href="/meeting">Get Started</Link>
          </Button>
        </div>
      </MobileMenu>
    </header>
  );
}

type MobileMenuProps = React.ComponentProps<"div"> & {
  open: boolean;
};

function MobileMenu({ open, children, className, ...props }: MobileMenuProps) {
  if (!open || typeof window === "undefined") return null;

  return createPortal(
    <div
      id="mobile-menu"
      className={cn(
        "supports-[backdrop-filter]:bg-background/50 fixed top-14 right-0 bottom-0 left-0 z-40 flex flex-col overflow-hidden border-y bg-background/95 backdrop-blur-lg md:hidden",
      )}
    >
      <div
        data-slot={open ? "open" : "closed"}
        className={cn(
          "data-[slot=open]:animate-in data-[slot=open]:zoom-in-97 size-full ease-out p-4",
          className,
        )}
        {...props}
      >
        {children}
      </div>
    </div>,
    document.body,
  );
}
