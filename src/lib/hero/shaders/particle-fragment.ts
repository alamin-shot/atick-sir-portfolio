// Soft round points: mostly Tekzo ember, some ivory, a few teal. On the Chairman's
// photo stage each point takes its pixel's tone instead, dark ember to bright ivory.
export const particleFragmentShader = /* glsl */ `
uniform vec3 uEmber;
uniform vec3 uIvory;
uniform vec3 uTeal;

varying float vSeed;
varying float vAlpha;
varying float vLight;
varying float vPortrait;

void main() {
  float d = length(gl_PointCoord - 0.5);
  if (d > 0.5) discard;

  float glow = smoothstep(0.5, 0.0, d);
  vec3 venture = vSeed < 0.78 ? uEmber : (vSeed < 0.92 ? uIvory : uTeal);
  vec3 photo = mix(uEmber, uIvory, vLight * vLight);
  vec3 color = mix(venture, photo, vPortrait);
  float tone = mix(0.6, 0.08 + 1.1 * pow(vLight, 1.4), vPortrait);
  gl_FragColor = vec4(color, glow * tone * vAlpha);

  #include <colorspace_fragment>
}
`;
