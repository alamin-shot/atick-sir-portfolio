"use client";

import { useRef } from "react";
import { EMBLEM, MEDIA_QUERIES } from "@/constants/motion";
import { gsap, useGSAP } from "@/lib/gsap/register";
import { drawEmblem } from "@/lib/hero/draw-emblem";
import { sampleShape } from "@/lib/hero/sample-shape";
import { VENTURE_EMBLEMS } from "@/lib/hero/shapes/venture-emblems";
import { createRandom } from "@/lib/random/create-random";
import type { VentureEmblemProps } from "@/types/components/group";

// The venture's hero shape, re-assembling from dust when it comes into view.
export function VentureEmblem({ ventureId, label }: VentureEmblemProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useGSAP(
    () => {
      const canvas = canvasRef.current;
      const ctx = canvas?.getContext("2d");
      if (!canvas || !ctx) return;

      const random = createRandom(EMBLEM.seed);
      const targets = sampleShape(
        VENTURE_EMBLEMS[ventureId],
        EMBLEM.dotCount,
        random,
      );
      const starts = Float32Array.from(
        { length: EMBLEM.dotCount * 2 },
        () => random() * 2 - 1,
      );
      const pixelRatio = Math.min(window.devicePixelRatio, 2);
      canvas.width = EMBLEM.size * pixelRatio;
      canvas.height = EMBLEM.size * pixelRatio;
      ctx.fillStyle = getComputedStyle(canvas).color;

      const state = { progress: 0 };
      const draw = () =>
        drawEmblem(
          ctx,
          targets,
          starts,
          state.progress,
          EMBLEM.dotRadius * pixelRatio,
        );

      if (window.matchMedia(MEDIA_QUERIES.reducedMotion).matches) {
        state.progress = 1;
        draw();
        return;
      }

      draw();
      const tween = gsap.to(state, {
        progress: 1,
        duration: EMBLEM.assembleSeconds,
        ease: "expo.out",
        paused: true,
        onUpdate: draw,
      });
      const observer = new IntersectionObserver(([entry]) => {
        if (!entry?.isIntersecting) return;
        tween.play();
        observer.disconnect();
      });
      observer.observe(canvas);
      return () => observer.disconnect();
    },
    { dependencies: [ventureId] },
  );

  return (
    <canvas
      ref={canvasRef}
      role="img"
      aria-label={label}
      className="venture-emblem aspect-square w-full max-w-[22rem]"
    />
  );
}
