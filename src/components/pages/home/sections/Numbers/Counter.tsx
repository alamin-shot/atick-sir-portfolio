"use client";

import { useRef } from "react";
import { COUNTER, MEDIA_QUERIES } from "@/constants/motion";
import { formatNumber } from "@/lib/format/format-number";
import { gsap, useGSAP } from "@/lib/gsap/register";
import type { CounterProps } from "@/types/components/numbers";

// Counts up once when it scrolls into view. Server HTML already holds the final
// figure, so it reads correctly without JavaScript or with reduced motion.
export function Counter({ value, suffix }: CounterProps) {
  const digits = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      gsap.matchMedia().add(MEDIA_QUERIES.motionOk, () => {
        const element = digits.current;
        if (!element) return;
        const state = { value: 0 };
        const render = () => {
          element.textContent = formatNumber(Math.round(state.value));
        };

        render();
        gsap.to(state, {
          value,
          duration: COUNTER.duration,
          ease: "power3.out",
          onUpdate: render,
          scrollTrigger: { trigger: element, start: COUNTER.start, once: true },
        });

        return () => {
          element.textContent = formatNumber(value);
        };
      });
    },
    { dependencies: [value] },
  );

  return (
    <span aria-hidden="true" className="tabular-nums">
      <span ref={digits}>{formatNumber(value)}</span>
      <span className="text-ember">{suffix}</span>
    </span>
  );
}
