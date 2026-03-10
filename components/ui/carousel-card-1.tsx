"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export interface CarouselCardData {
  id: number;
  imgUrl: string;
  content: string;
}

interface CarouselCardProps {
  data: CarouselCardData[];
  showCarousel?: boolean;
  cardsPerView?: number;
}

export function CarouselCard({
  data,
  showCarousel = true,
  cardsPerView = 3,
}: CarouselCardProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSingleCard, setIsSingleCard] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsSingleCard(data?.length === 1);
  }, [data]);

  const cardWidth = 75 / cardsPerView;

  const nextSlide = () => {
    if (isAnimating || !showCarousel || !data) return;
    if (data.length <= cardsPerView) return;

    setIsAnimating(true);
    const nextIndex = (currentIndex + 1) % data.length;

    if (containerRef.current) {
      containerRef.current.style.transition = "transform 500ms ease";
      containerRef.current.style.transform = `translateX(-${cardWidth}%)`;

      setTimeout(() => {
        setCurrentIndex(nextIndex);
        if (containerRef.current) {
          containerRef.current.style.transition = "none";
          containerRef.current.style.transform = "translateX(0)";
          void containerRef.current.offsetWidth;
          setIsAnimating(false);
        }
      }, 500);
    }
  };

  const prevSlide = () => {
    if (isAnimating || !showCarousel || !data) return;
    if (data.length <= cardsPerView) return;

    setIsAnimating(true);
    const prevIndex = (currentIndex - 1 + data.length) % data.length;

    if (containerRef.current) {
      containerRef.current.style.transition = "none";
      containerRef.current.style.transform = `translateX(-${cardWidth}%)`;
      setCurrentIndex(prevIndex);
      void containerRef.current.offsetWidth;
      containerRef.current.style.transition = "transform 500ms ease";
      containerRef.current.style.transform = "translateX(0)";

      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const getVisibleCards = () => {
    if (!showCarousel || !data) return data || [];
    const visibleCards = [];
    const totalCards = data.length;
    for (let i = 0; i < cardsPerView + 1; i++) {
      const index = (currentIndex + i) % totalCards;
      visibleCards.push(data[index]);
    }
    return visibleCards;
  };

  if (!data || data.length === 0) {
    return <div className="py-12 text-center text-muted-foreground">İçerik yükleniyor...</div>;
  }

  return (
    <div className="w-full px-4">
      <div
        className={`relative ${isSingleCard ? "mx-auto max-w-sm" : "w-full"}`}
      >
        {showCarousel && data.length > cardsPerView && (
          <>
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded-full border border-border bg-background/80 p-2 text-foreground backdrop-blur-sm transition-colors hover:bg-accent disabled:opacity-50"
              disabled={isAnimating}
              aria-label="Önceki"
            >
              <ChevronLeft className="size-5" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 z-10 -translate-y-1/2 rounded-full border border-border bg-background/80 p-2 text-foreground backdrop-blur-sm transition-colors hover:bg-accent disabled:opacity-50"
              disabled={isAnimating}
              aria-label="Sonraki"
            >
              <ChevronRight className="size-5" />
            </button>
          </>
        )}

        <div className="overflow-hidden">
          <div
            ref={containerRef}
            className="flex"
            style={{
              transform: "translateX(0)",
              width: showCarousel
                ? `${((cardsPerView + 1) * 100) / cardsPerView}%`
                : "100%",
            }}
          >
            {getVisibleCards().map((card, idx) => (
              <div
                key={`card-${currentIndex}-${idx}`}
                style={{
                  width: showCarousel
                    ? `${100 / (cardsPerView + 1)}%`
                    : `${100 / Math.min(cardsPerView, data.length)}%`,
                }}
                className="px-2"
              >
                <div className="group relative h-full overflow-hidden rounded-lg border border-border shadow-md">
                  <div className="h-48 w-full md:h-56">
                    <img
                      src={card.imgUrl}
                      alt=""
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute inset-0 translate-y-full overflow-y-auto bg-black/85 p-4 text-white transition-transform duration-300 group-hover:translate-y-0">
                    <p className="text-sm leading-relaxed">{card.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
