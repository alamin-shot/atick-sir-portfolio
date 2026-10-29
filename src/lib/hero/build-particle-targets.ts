import { HERO_SAMPLE } from "@/constants/hero-config";
import { createRandom } from "@/lib/random/create-random";
import type { ParticleTargets } from "@/types/hero";
import { sampleShape } from "./sample-shape";
import { HERO_SHAPES } from "./shapes";

export function buildParticleTargets(count: number): ParticleTargets {
  const random = createRandom(HERO_SAMPLE.seed);
  const positions = HERO_SHAPES.map((draw) => sampleShape(draw, count, random));
  const seeds = new Float32Array(count);
  for (let i = 0; i < count; i++) seeds[i] = random();

  return { positions, seeds };
}
