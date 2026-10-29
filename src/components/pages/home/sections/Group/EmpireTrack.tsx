"use client";

import { useRef } from "react";
import { GROUP_TRACK, MEDIA_QUERIES } from "@/constants/motion";
import { gsap, useGSAP } from "@/lib/gsap/register";
import type { EmpireTrackProps } from "@/types/components/group";

// On wide screens with motion allowed, pins the group and scrolls the chapters
// sideways. Everywhere else the chapters simply stack.
export function EmpireTrack({ children }: EmpireTrackProps) {
  const root = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const bar = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.matchMedia().add(MEDIA_QUERIES.wideMotionOk, () => {
        const element = track.current;
        if (!element) return;
        const distance = () => element.scrollWidth - window.innerWidth;

        gsap
          .timeline({
            defaults: { ease: "none" },
            scrollTrigger: {
              trigger: root.current,
              start: "top top",
              end: () => `+=${distance()}`,
              pin: true,
              scrub: GROUP_TRACK.scrub,
              invalidateOnRefresh: true,
            },
          })
          .to(element, { x: () => -distance() }, 0)
          .fromTo(bar.current, { scaleX: 0 }, { scaleX: 1 }, 0);
      });
    },
    { scope: root },
  );

  return (
    <div ref={root} className="relative overflow-hidden">
      <div
        ref={track}
        className="flex flex-col lg:motion-safe:w-max lg:motion-safe:flex-row"
      >
        {children}
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 hidden h-px bg-line lg:motion-safe:block"
      >
        <div ref={bar} className="h-full origin-left bg-ember" />
      </div>
    </div>
  );
}
