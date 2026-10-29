import { HERO_PORTRAIT } from "@/constants/hero-config";
import type { PortraitSample } from "@/types/hero";

// Scatters `count` points over a photo, more where it is bright, and records each
// point's brightness so the shader can shade it like the photo. Normalised to
// [-1, 1] like sampleShape, then enlarged by `scale`; brighter points sit forward.
export function samplePortrait(
  image: ImageData,
  count: number,
  random: () => number,
): PortraitSample {
  const {
    alphaThreshold,
    floor,
    gamma,
    fadeFrom,
    fadeMin,
    depth,
    scale,
    shiftX,
  } = HERO_PORTRAIT;
  const { data, width, height } = image;
  const positions = new Float32Array(count * 3);
  const lights = new Float32Array(count);
  const pixels: number[] = [];
  const cumulative: number[] = [];
  let total = 0;

  for (let i = 0; i < width * height; i++) {
    if (data[i * 4 + 3] <= alphaThreshold) continue;
    const y = Math.floor(i / width) / height;
    const fade =
      y < fadeFrom ? 1 : 1 - ((1 - fadeMin) * (y - fadeFrom)) / (1 - fadeFrom);
    const light = (data[i * 4] / 255) ** gamma;
    total += (floor + (1 - floor) * light) * fade;
    pixels.push(i);
    cumulative.push(total);
  }
  if (pixels.length === 0) return { positions, light: lights };

  const half = Math.max(width, height) / 2 / scale;
  for (let p = 0; p < count; p++) {
    const pixel = pixels[pickIndex(cumulative, random() * total)];
    const x = (pixel % width) + random();
    const y = Math.floor(pixel / width) + random();
    const light = data[pixel * 4] / 255;
    positions[p * 3] = (x - width / 2) / half + shiftX;
    positions[p * 3 + 1] = -(y - height / 2) / half;
    positions[p * 3 + 2] = (light - 0.5) * depth + (random() - 0.5) * 0.05;
    lights[p] = light;
  }
  return { positions, light: lights };
}

// Binary search for the first running total above `target`.
function pickIndex(cumulative: number[], target: number) {
  let low = 0;
  let high = cumulative.length - 1;
  while (low < high) {
    const mid = (low + high) >> 1;
    if (cumulative[mid] < target) low = mid + 1;
    else high = mid;
  }
  return low;
}
