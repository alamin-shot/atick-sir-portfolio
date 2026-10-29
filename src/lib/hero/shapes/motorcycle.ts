import { roundRectPath } from "@/lib/canvas/round-rect-path";
import type { ShapeDrawer } from "@/types/hero";

const FULL_TURN = Math.PI * 2;

export const drawMotorcycle: ShapeDrawer = (ctx) => {
  ctx.lineWidth = 10;
  for (const x of [50, 170]) {
    ctx.beginPath();
    ctx.arc(x, 150, 32, 0, FULL_TURN);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(x, 150, 7, 0, FULL_TURN);
    ctx.fill();
  }

  ctx.lineWidth = 8;
  ctx.beginPath();
  ctx.moveTo(50, 150);
  ctx.lineTo(92, 108);
  ctx.lineTo(138, 108);
  ctx.lineTo(170, 150);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(170, 150);
  ctx.lineTo(150, 78);
  ctx.stroke();

  ctx.lineWidth = 7;
  ctx.beginPath();
  ctx.moveTo(140, 74);
  ctx.lineTo(164, 66);
  ctx.stroke();

  roundRectPath(ctx, 86, 114, 44, 30, 6);
  ctx.fill();
  roundRectPath(ctx, 56, 96, 36, 10, 5);
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(88, 106);
  ctx.quadraticCurveTo(106, 80, 134, 86);
  ctx.lineTo(150, 96);
  ctx.lineTo(148, 106);
  ctx.closePath();
  ctx.fill();

  ctx.beginPath();
  ctx.arc(160, 92, 7, 0, FULL_TURN);
  ctx.fill();
};
