// Draws dots between their scattered start and their place in the shape.
// `targets` holds x, y, z per dot in [-1, 1]; `starts` holds x, y per dot.
export function drawEmblem(
  ctx: CanvasRenderingContext2D,
  targets: Float32Array,
  starts: Float32Array,
  progress: number,
  radius: number,
) {
  const { width, height } = ctx.canvas;
  const half = Math.min(width, height) * 0.45;
  const count = starts.length / 2;

  ctx.clearRect(0, 0, width, height);
  ctx.beginPath();
  for (let i = 0; i < count; i++) {
    const x = starts[i * 2] + (targets[i * 3] - starts[i * 2]) * progress;
    const y =
      starts[i * 2 + 1] + (targets[i * 3 + 1] - starts[i * 2 + 1]) * progress;
    const px = width / 2 + x * half;
    const py = height / 2 - y * half;
    ctx.moveTo(px + radius, py);
    ctx.arc(px, py, radius, 0, Math.PI * 2);
  }
  ctx.fill();
}
