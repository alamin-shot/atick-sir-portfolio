import type { ShapeDrawer } from "@/types/hero";

export const drawShirt: ShapeDrawer = (ctx) => {
  ctx.beginPath();
  ctx.moveTo(82, 30);
  ctx.lineTo(40, 48);
  ctx.lineTo(10, 98);
  ctx.lineTo(42, 116);
  ctx.lineTo(58, 92);
  ctx.lineTo(58, 204);
  ctx.lineTo(162, 204);
  ctx.lineTo(162, 92);
  ctx.lineTo(178, 116);
  ctx.lineTo(210, 98);
  ctx.lineTo(180, 48);
  ctx.lineTo(138, 30);
  ctx.quadraticCurveTo(110, 62, 82, 30);
  ctx.closePath();
  ctx.fill();

  // Cut the placket and buttons out of the body.
  ctx.globalCompositeOperation = "destination-out";
  ctx.lineWidth = 5;
  ctx.beginPath();
  ctx.moveTo(110, 52);
  ctx.lineTo(110, 204);
  ctx.stroke();
  for (let y = 78; y < 200; y += 30) {
    ctx.beginPath();
    ctx.arc(118, y, 3.5, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.globalCompositeOperation = "source-over";
};
