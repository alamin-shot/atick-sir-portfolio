"use client";

import { useRef } from "react";
import { MEDIA_QUERIES, PARALLAX_AMOUNT } from "@/constants/motion";
import { gsap, useGSAP } from "@/lib/gsap/register";
import type { ParallaxProps } from "@/types/components/motion";

// Drifts its children vertically while the parent crosses the viewport.
export function Parallax({
  children,
  className,
  amount = PARALLAX_AMOUNT,
}: ParallaxProps) {
  const layer = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.matchMedia().add(MEDIA_QUERIES.motionOk, () => {
        gsap.fromTo(
          layer.current,
          { yPercent: -amount },
          {
            yPercent: amount,
            ease: "none",
            scrollTrigger: {
              trigger: layer.current?.parentElement,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          },
        );
      });
    },
    { scope: layer, dependencies: [amount] },
  );

  return (
    <div ref={layer} className={className}>
      {children}
    </div>
  );
}
