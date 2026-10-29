import type { CanvasTier, TierSettings } from "@/types/hero";

export const HERO_TIER_SETTINGS = {
  high: { particleCount: 34000, maxDpr: 2, pointSize: 9 },
  mid: { particleCount: 11000, maxDpr: 1.5, pointSize: 11 },
} as const satisfies Record<CanvasTier, TierSettings>;

export const HERO_SAMPLE = {
  canvasSize: 320,
  designSize: 220,
  alphaThreshold: 128,
  depth: 0.18,
  seed: 20261028,
} as const;

// Head-and-shoulders photo the Chairman stage is sampled from (made by
// scripts/prepare-ceo-portrait.mjs). Brighter pixels draw more particles and each
// particle is shaded by its pixel, so the dust reads as the photo. `floor` keeps dark
// hair and suit visible; below `fadeFrom` the suit thins out to `fadeMin`. `scale`
// draws him larger than the venture shapes; `shiftX` keeps his shoulder off the edge.
export const HERO_PORTRAIT = {
  src: "/images/chairman/ceo-particles.png",
  alphaThreshold: 128,
  floor: 0.2,
  gamma: 1,
  fadeFrom: 0.6,
  fadeMin: 0.5,
  depth: 0.2,
  scale: 1.45,
  shiftX: -0.14,
  pointScale: 0.7,
} as const;

export const HERO_COLORS = {
  ember: "#e8553d",
  ivory: "#eee8df",
  teal: "#3db1a7",
} as const;

// Seconds.
export const HERO_TIMELINE = {
  gather: 1.6,
  morph: 1.15,
  hold: 0.85,
  portraitHold: 2.4,
} as const;

// Fractions of the visible viewport in world units.
export const HERO_LAYOUT = {
  wideAspect: 0.95,
  wideOffsetX: 0.25,
  wideScale: 0.3,
  narrowOffsetY: 0.24,
  narrowScale: 0.2,
} as const;

export const HERO_POINTER_EASE = 0.08;

export const HERO_BLOOM = {
  intensity: 0.9,
  luminanceThreshold: 0.15,
  luminanceSmoothing: 0.4,
} as const;

export const DEVICE_TIER_RULES = {
  highMinCores: 8,
  lowMaxWidth: 768,
} as const;
