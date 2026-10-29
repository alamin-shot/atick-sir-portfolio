// Morphs every particle between five stage shapes on the GPU. uProgress wraps every 5,
// so after the last shape it flows on into the first. Each particle starts its move
// with a small per-seed delay so shapes dissolve, not jump.
export const particleVertexShader = /* glsl */ `
uniform float uProgress;
uniform float uIntro;
uniform float uTime;
uniform float uScale;
uniform vec2 uOffset;
uniform vec3 uPointer;
uniform float uDisperse;
uniform float uPixelRatio;
uniform float uSize;

attribute vec3 aPos0;
attribute vec3 aPos1;
attribute vec3 aPos2;
attribute vec3 aPos3;
attribute vec3 aPos4;
attribute float aSeed;

varying float vSeed;
varying float vAlpha;

vec3 stagePosition(float index) {
  if (index < 0.5) return aPos0;
  if (index < 1.5) return aPos1;
  if (index < 2.5) return aPos2;
  if (index < 3.5) return aPos3;
  return aPos4;
}

void main() {
  float stage = mod(uProgress, 5.0);
  float fromStage = floor(stage);
  float toStage = mod(fromStage + 1.0, 5.0);
  float delay = aSeed * 0.35;
  float t = smoothstep(delay, delay + 0.65, fract(stage));

  vec3 dir = normalize(vec3(sin(aSeed * 91.7), cos(aSeed * 47.3), sin(aSeed * 13.1) * 0.6) + 0.0001);
  vec3 shape = mix(stagePosition(fromStage), stagePosition(toStage), t);
  shape += dir * sin(t * 3.14159) * 0.28;

  vec3 cloud = dir * (2.2 + aSeed * 2.6);
  vec3 pos = mix(cloud, shape, smoothstep(aSeed * 0.4, 1.0, uIntro)) * uScale;
  pos.xy += uOffset;
  pos += vec3(sin(uTime * 0.6 + aSeed * 40.0), cos(uTime * 0.5 + aSeed * 30.0), 0.0) * 0.012 * uScale;

  vec2 away = pos.xy - uPointer.xy;
  float push = smoothstep(0.7, 0.0, length(away)) * uPointer.z;
  pos.xy += normalize(away + 0.0001) * push * 0.35;
  pos += dir * uDisperse * 3.5;

  vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
  gl_Position = projectionMatrix * mvPosition;
  gl_PointSize = uSize * uPixelRatio * (0.55 + aSeed * 0.9) / -mvPosition.z;

  vSeed = aSeed;
  vAlpha = 1.0 - uDisperse * 0.85;
}
`;
