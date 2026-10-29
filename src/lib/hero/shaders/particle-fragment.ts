// Soft round points: mostly Tekzo ember, some ivory, a few teal.
export const particleFragmentShader = /* glsl */ `
uniform vec3 uEmber;
uniform vec3 uIvory;
uniform vec3 uTeal;

varying float vSeed;
varying float vAlpha;

void main() {
  float d = length(gl_PointCoord - 0.5);
  if (d > 0.5) discard;

  float glow = smoothstep(0.5, 0.0, d);
  vec3 color = vSeed < 0.78 ? uEmber : (vSeed < 0.92 ? uIvory : uTeal);
  gl_FragColor = vec4(color, glow * 0.6 * vAlpha);

  #include <colorspace_fragment>
}
`;
