"use client";

import Lenis from "lenis";
import { useEffect } from "react";
import { LENIS_OPTIONS } from "@/constants/motion";
import { gsap, ScrollTrigger } from "@/lib/gsap/register";

// Lenis smooth scroll driven by GSAP's ticker so ScrollTrigger stays in sync.
export function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis(LENIS_OPTIONS);
    const tick = (time: number) => lenis.raf(time * 1000);
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(tick);
      lenis.destroy();
    };
  }, []);

  return null;
}
