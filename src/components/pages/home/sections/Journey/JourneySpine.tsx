"use client";

import { useRef } from "react";
import { JOURNEY, MEDIA_QUERIES } from "@/constants/motion";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap/register";
import type { JourneySpineProps } from "@/types/components/journey";

// A hairline spine that draws itself on scroll, lighting each milestone it reaches.
export function JourneySpine({ children }: JourneySpineProps) {
  const root = useRef<HTMLDivElement>(null);
  const fill = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.matchMedia().add(MEDIA_QUERIES.motionOk, () => {
        gsap.fromTo(
          fill.current,
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: "none",
            scrollTrigger: {
              trigger: root.current,
              start: JOURNEY.start,
              end: JOURNEY.end,
              scrub: true,
            },
          },
        );

        gsap.utils.toArray<HTMLElement>("[data-milestone]").forEach((item) => {
          ScrollTrigger.create({
            trigger: item,
            start: JOURNEY.start,
            onEnter: () => item.classList.add("is-reached"),
            onLeaveBack: () => item.classList.remove("is-reached"),
          });
        });
      });
    },
    { scope: root },
  );

  return (
    <div ref={root} className="relative">
      <div
        aria-hidden="true"
        className="absolute top-2 bottom-2 left-[0.4375rem] w-px bg-line"
      >
        <div ref={fill} className="h-full origin-top bg-ember" />
      </div>
      {children}
    </div>
  );
}
