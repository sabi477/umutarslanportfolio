"use client";

import { useEffect } from "react";

/**
 * Double-tap zoom'u engeller.
 * Not: iOS Safari pinch-to-zoom'u erişilebilirlik nedeniyle engellenemez.
 */
export function DisableZoom() {
  useEffect(() => {
    let lastTouchEnd = 0;
    const handler = (e: TouchEvent) => {
      const now = Date.now();
      if (now - lastTouchEnd <= 300) {
        e.preventDefault();
      }
      lastTouchEnd = now;
    };
    document.addEventListener("touchend", handler, { passive: false });
    return () => document.removeEventListener("touchend", handler);
  }, []);
  return null;
}
