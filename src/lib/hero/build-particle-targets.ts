import { HERO_SAMPLE } from "@/constants/hero-config";
import { createRandom } from "@/lib/random/create-random";
import type { ParticleTargets } from "@/types/hero";
import { samplePortrait } from "./sample-portrait";
import { sampleShape } from "./sample-shape";
import { HERO_SHAPES } from "./shapes";

// Fallback silhouette brightness when the photo is missing.
const FALLBACK_LIGHT = 0.6;

// The last stage is the Chairman: sampled from his photo when it loaded,
// otherwise from the drawn silhouette.
export function buildParticleTargets(
  count: number,
  portrait: ImageData | null,
): ParticleTargets {
  const random = createRandom(HERO_SAMPLE.seed);
  const venturePositions = HERO_SHAPES.slice(0, -1).map((draw) =>
    sampleShape(draw, count, random),
  );
  const chairman = portrait
    ? samplePortrait(portrait, count, random)
    : {
        positions: sampleShape(
          HERO_SHAPES[HERO_SHAPES.length - 1],
          count,
          random,
        ),
        light: new Float32Array(count).fill(FALLBACK_LIGHT),
      };
  const seeds = new Float32Array(count);
  for (let i = 0; i < count; i++) seeds[i] = random();

  return {
    positions: [...venturePositions, chairman.positions],
    seeds,
    portraitLight: chairman.light,
  };
}
