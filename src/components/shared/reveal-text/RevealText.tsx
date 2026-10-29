"use client";

import { useRef } from "react";
import { MEDIA_QUERIES, REVEAL } from "@/constants/motion";
import { gsap, SplitText, useGSAP } from "@/lib/gsap/register";
import type { RevealTextProps } from "@/types/components/motion";

// Reveals each child element line by line as it scrolls into view.
export function RevealText({ children, className }: RevealTextProps) {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const element = root.current;
      if (!element) return;
      const targets = element.children.length
        ? Array.from(element.children)
        : element;

      gsap.matchMedia().add(MEDIA_QUERIES.motionOk, () => {
        SplitText.create(targets, {
          type: "lines",
          mask: "lines",
          autoSplit: true,
          onSplit: (self) =>
            gsap.from(self.lines, {
              yPercent: 110,
              duration: REVEAL.duration,
              stagger: REVEAL.stagger,
              ease: "expo.out",
              scrollTrigger: { trigger: element, start: REVEAL.start },
            }),
        });
      });
    },
    { scope: root },
  );

  return (
    <div ref={root} className={className}>
      {children}
    </div>
  );
}
