import { roundRectPath } from "@/lib/canvas/round-rect-path";
import type { ShapeDrawer } from "@/types/hero";

export const drawHeadphones: ShapeDrawer = (ctx) => {
  ctx.lineWidth = 12;
  ctx.beginPath();
  ctx.arc(110, 120, 70, Math.PI + 0.12, Math.PI * 2 - 0.12);
  ctx.stroke();

  for (const x of [26, 154]) {
    roundRectPath(ctx, x, 110, 40, 70, 16);
    ctx.fill();
  }

  for (const x of [34, 176]) {
    roundRectPath(ctx, x, 94, 10, 20, 4);
    ctx.fill();
  }
};
