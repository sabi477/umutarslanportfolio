"use client";

import { CarouselCard } from "@/components/ui/carousel-card-1";
import { SectionHeader } from "@/components/ui/section-header";
import { siteData } from "@/lib/site-data";

export function CarouselSection() {
  const { title, subtitle, items } = siteData.carousel;

  return (
    <section className="py-10 md:py-14">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeader subtitle={subtitle} title={title} className="mb-8" />
        <CarouselCard
          data={[...items]}
          showCarousel={true}
          cardsPerView={3}
        />
      </div>
    </section>
  );
}
