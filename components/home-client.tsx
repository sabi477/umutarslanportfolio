"use client";

import dynamic from "next/dynamic";
import { HeroSection, LogosSection } from "@/components/ui/hero-1";
import { Features } from "@/components/ui/features-4";
import { Casestudy5 } from "@/components/ui/casestudy-5";
import { CarouselSection } from "@/components/ui/carousel-section";
import { FAQ } from "@/components/ui/faq-tabs";
import { MinimalFooter } from "@/components/ui/minimal-footer";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const Header = dynamic(
  () => import("@/components/ui/header-1").then((m) => ({ default: m.Header })),
  { ssr: false },
);

const RadialTimelineSection = dynamic(
  () =>
    import("@/components/radial-timeline-section").then((m) => ({
      default: m.RadialTimelineSection,
    })),
  { ssr: false },
);

export function HomeClient() {
  return (
    <div className="flex min-w-0 w-full flex-col overflow-x-hidden">
      <Header />
      <main className="flex grow flex-col gap-8 pt-[30px] md:gap-12">
        <HeroSection />
        <ScrollReveal variant="fadeUp" delay={0.1}>
          <LogosSection />
        </ScrollReveal>
        <ScrollReveal variant="fadeUp" delay={0.1}>
          <Casestudy5 />
        </ScrollReveal>
        <ScrollReveal variant="scale" delay={0.1}>
          <section id="timeline" className="pb-32 md:pb-40">
            <RadialTimelineSection />
          </section>
        </ScrollReveal>
        <ScrollReveal variant="fadeUp" delay={0.1}>
          <Features />
        </ScrollReveal>
      </main>
      <ScrollReveal variant="fadeUp" delay={0.1}>
        <CarouselSection />
      </ScrollReveal>
      <ScrollReveal variant="fadeIn" delay={0.1}>
        <FAQ />
      </ScrollReveal>
      <ScrollReveal variant="fadeUp" delay={0.05}>
        <MinimalFooter />
      </ScrollReveal>
    </div>
  );
}
