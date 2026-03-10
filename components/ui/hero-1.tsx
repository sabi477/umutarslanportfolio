"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  RocketIcon,
  ArrowRightIcon,
  PhoneCallIcon,
} from "lucide-react";
import { LogoCloud } from "@/components/ui/logo-cloud-3";

export function HeroSection() {
  return (
    <section className="mx-auto w-full max-w-5xl">
      {/* Top Shades */}
      <div
        aria-hidden="true"
        className="absolute inset-0 isolate hidden overflow-hidden contain-strict lg:block"
      >
        <div className="absolute inset-0 -top-14 isolate -z-10 bg-[radial-gradient(35%_80%_at_49%_0%,var(--color-foreground)/0.08,transparent)] contain-strict" />
      </div>

      {/* X Bold Faded Borders */}
      <div
        aria-hidden="true"
        className="absolute inset-0 mx-auto hidden min-h-screen w-full max-w-5xl lg:block"
      >
        <div className="mask-y-from-80% mask-y-to-100% absolute inset-y-0 left-0 z-10 h-full w-px bg-foreground/15" />
        <div className="mask-y-from-80% mask-y-to-100% absolute inset-y-0 right-0 z-10 h-full w-px bg-foreground/15" />
      </div>

      {/* main content */}

      <div className="relative flex min-w-0 flex-col items-center justify-center gap-4 px-4 py-14 md:py-16">
        {/* X Content Faded Borders */}
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-1 size-full overflow-hidden"
        >
          <div className="absolute inset-y-0 left-4 w-px bg-linear-to-b from-transparent via-border to-border md:left-8" />
          <div className="absolute inset-y-0 right-4 w-px bg-linear-to-b from-transparent via-border to-border md:right-8" />
          <div className="absolute inset-y-0 left-8 w-px bg-linear-to-b from-transparent via-border/50 to-border/50 md:left-12" />
          <div className="absolute inset-y-0 right-8 w-px bg-linear-to-b from-transparent via-border/50 to-border/50 md:right-12" />
        </div>

        <a
          className={cn(
            "group mx-auto flex w-fit items-center gap-3 rounded-full border bg-card px-3 py-1 shadow",
            "fade-in slide-in-from-bottom-10 animate-in fill-mode-backwards transition-all delay-500 duration-500 ease-out",
          )}
          href="#link"
        >
          <RocketIcon className="size-3 text-muted-foreground" />
          <span className="text-xs">shipped new features!</span>
          <span className="block h-5 border-l" />

          <ArrowRightIcon className="size-3 duration-150 ease-out group-hover:translate-x-1" />
        </a>

        <h1
          className={cn(
            "fade-in slide-in-from-bottom-10 animate-in text-balance fill-mode-backwards text-center font-semibold tracking-tight delay-100 duration-500 ease-out leading-tight text-[2rem] sm:text-[2.5rem] md:text-[3.5rem] lg:text-[4.5rem] xl:text-[5.5rem] 2xl:text-[6.5rem]",
            "text-shadow-[0_0px_50px_var(--color-foreground)/0.2]",
          )}
        >
          Building Teams Help <br /> You Scale and Lead
        </h1>

        <p className="fade-in slide-in-from-bottom-10 mx-auto max-w-3xl animate-in fill-mode-backwards text-center text-foreground/80 tracking-wide delay-200 duration-500 ease-out text-[1rem] sm:text-[1.25rem] md:text-[1.75rem] lg:text-[2.25rem] xl:text-[2.75rem] 2xl:text-[3.25rem]">
          Connecting you with world-class talent <br /> to scale, innovate and
          lead
        </p>

        <div className="fade-in slide-in-from-bottom-10 flex animate-in flex-row flex-wrap items-center justify-center gap-3 fill-mode-backwards pt-2 delay-300 duration-500 ease-out">
          <Button
            className="hero-cta-button rounded-full"
            size="lg"
            variant="secondary"
            asChild
          >
            <Link href="/meeting">
              <PhoneCallIcon
                data-icon="inline-start"
                className="mr-2 size-4"
              />{" "}
              Book a Call
            </Link>
          </Button>
          <Button className="hero-cta-button rounded-full" size="lg" asChild>
            <Link href="/meeting">
              Get started{" "}
              <ArrowRightIcon
                className="ms-2 size-4"
                data-icon="inline-end"
              />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

export function LogosSection() {
  return (
    <section className="relative space-y-6 py-8 md:py-10">
      <div className="absolute inset-x-0 top-0 h-px w-full bg-border" />
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, ease: [0.22, 0.61, 0.36, 1] }}
      >
        <p className="text-sm text-muted-foreground">Güvenilir ortaklar</p>
        <h2 className="mt-2 text-2xl font-semibold text-foreground md:text-3xl">
          Trusted by experts
        </h2>
      </motion.div>
      <motion.div
        className="relative z-10 mx-auto max-w-4xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 0.61, 0.36, 1] }}
      >
        <LogoCloud logos={logos} />
      </motion.div>
    </section>
  );
}

const logos = [
  {
    src: "https://storage.efferd.com/logo/nvidia-wordmark.svg",
    alt: "Nvidia Logo",
  },
  {
    src: "https://storage.efferd.com/logo/supabase-wordmark.svg",
    alt: "Supabase Logo",
  },
  {
    src: "https://storage.efferd.com/logo/openai-wordmark.svg",
    alt: "OpenAI Logo",
  },
  {
    src: "https://storage.efferd.com/logo/turso-wordmark.svg",
    alt: "Turso Logo",
  },
  {
    src: "https://storage.efferd.com/logo/vercel-wordmark.svg",
    alt: "Vercel Logo",
  },
  {
    src: "https://storage.efferd.com/logo/github-wordmark.svg",
    alt: "GitHub Logo",
  },
  {
    src: "https://storage.efferd.com/logo/claude-wordmark.svg",
    alt: "Claude AI Logo",
  },
  {
    src: "https://storage.efferd.com/logo/clerk-wordmark.svg",
    alt: "Clerk Logo",
  },
];
