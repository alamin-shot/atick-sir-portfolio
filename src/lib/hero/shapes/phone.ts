import { roundRectPath } from "@/lib/canvas/round-rect-path";
import type { ShapeDrawer } from "@/types/hero";

export const drawPhone: ShapeDrawer = (ctx) => {
  ctx.lineWidth = 8;
  roundRectPath(ctx, 64, 14, 92, 192, 20);
  ctx.stroke();

  roundRectPath(ctx, 94, 28, 32, 9, 5);
  ctx.fill();

  for (let row = 0; row < 4; row++) {
    for (let col = 0; col < 3; col++) {
      roundRectPath(ctx, 80 + col * 22, 54 + row * 28, 14, 14, 4);
      ctx.fill();
    }
  }

  roundRectPath(ctx, 92, 188, 36, 5, 3);
  ctx.fill();
};
