"use client";

import { useSyncExternalStore } from "react";

function subscribe(callback: () => void) {
  if (typeof window === "undefined") return () => {};
  window.addEventListener("scroll", callback);
  return () => window.removeEventListener("scroll", callback);
}

export function useScroll(threshold: number) {
  const getSnapshot = () =>
    typeof window !== "undefined" ? window.scrollY > threshold : false;
  const getServerSnapshot = () => false;

  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
