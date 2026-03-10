"use client";

import { useState, useEffect } from "react";
import { CarouselCard } from "@/components/ui/carousel-card-1";
import { SectionHeader } from "@/components/ui/section-header";
import { siteData } from "@/lib/site-data";

export function CarouselSection() {
  const { title, subtitle, items } = siteData.carousel;
  const [cardsPerView, setCardsPerView] = useState(3);

  useEffect(() => {
    const update = () =>
      setCardsPerView(window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 3);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <section className="py-10 md:py-14">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <SectionHeader subtitle={subtitle} title={title} className="mb-8" />
        <CarouselCard
          data={[...items]}
          showCarousel={true}
          cardsPerView={cardsPerView}
        />
      </div>
    </section>
  );
}
