import type { ShapeDrawer } from "@/types/hero";

// Placeholder silhouette until the Chairman's portrait photo is sampled instead.
export const drawBust: ShapeDrawer = (ctx) => {
  ctx.beginPath();
  ctx.ellipse(110, 70, 34, 42, 0, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillRect(96, 104, 28, 22);

  ctx.beginPath();
  ctx.moveTo(18, 220);
  ctx.bezierCurveTo(24, 150, 70, 128, 110, 128);
  ctx.bezierCurveTo(150, 128, 196, 150, 202, 220);
  ctx.closePath();
  ctx.fill();
};
