import type { LenisOptions } from "lenis";

export const LENIS_OPTIONS = {
  autoRaf: false,
  lerp: 0.085,
  smoothWheel: true,
} as const satisfies LenisOptions;

export const MEDIA_QUERIES = {
  motionOk: "(prefers-reduced-motion: no-preference)",
  reducedMotion: "(prefers-reduced-motion: reduce)",
  wideMotionOk:
    "(min-width: 1024px) and (prefers-reduced-motion: no-preference)",
} as const;

export const REVEAL = {
  duration: 1.1,
  stagger: 0.09,
  start: "top 85%",
} as const;

// Percent of the layer's height it drifts either way while crossing the viewport.
export const PARALLAX_AMOUNT = 8;

// The spine fills and each milestone lights up as it crosses this line.
export const JOURNEY = {
  start: "top 60%",
  end: "bottom 60%",
} as const;

export const COUNTER = {
  duration: 2.2,
  start: "top 85%",
} as const;

export const GROUP_TRACK = {
  scrub: 1,
} as const;

export const EMBLEM = {
  size: 360,
  dotCount: 1400,
  dotRadius: 1.15,
  assembleSeconds: 1.6,
  seed: 4096,
} as const;
