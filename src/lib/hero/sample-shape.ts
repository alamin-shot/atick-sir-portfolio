import { HERO_SAMPLE } from "@/constants/hero-config";
import type { ShapeDrawer } from "@/types/hero";

// Draws a shape off-screen and scatters `count` points over its filled pixels,
// normalised to [-1, 1] and centred on the shape's bounding box.
export function sampleShape(
  draw: ShapeDrawer,
  count: number,
  random: () => number,
): Float32Array {
  const { canvasSize: size, designSize, alphaThreshold, depth } = HERO_SAMPLE;
  const out = new Float32Array(count * 3);
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d", { willReadFrequently: true });
  if (!ctx) return out;

  const scale = size / designSize;
  ctx.setTransform(scale, 0, 0, scale, 0, 0);
  ctx.fillStyle = "#fff";
  ctx.strokeStyle = "#fff";
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  draw(ctx);

  const { data } = ctx.getImageData(0, 0, size, size);
  const filled: number[] = [];
  let minX: number = size;
  let minY: number = size;
  let maxX = 0;
  let maxY = 0;
  for (let i = 0; i < size * size; i++) {
    if (data[i * 4 + 3] <= alphaThreshold) continue;
    const x = i % size;
    const y = Math.floor(i / size);
    filled.push(i);
    minX = Math.min(minX, x);
    minY = Math.min(minY, y);
    maxX = Math.max(maxX, x);
    maxY = Math.max(maxY, y);
  }
  if (filled.length === 0) return out;

  const centreX = (minX + maxX + 1) / 2;
  const centreY = (minY + maxY + 1) / 2;
  const half = Math.max(maxX - minX + 1, maxY - minY + 1) / 2;
  for (let p = 0; p < count; p++) {
    const pixel = filled[Math.floor(random() * filled.length)];
    const x = (pixel % size) + random();
    const y = Math.floor(pixel / size) + random();
    out[p * 3] = (x - centreX) / half;
    out[p * 3 + 1] = -(y - centreY) / half;
    out[p * 3 + 2] = (random() - 0.5) * depth;
  }
  return out;
}
