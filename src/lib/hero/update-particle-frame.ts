import type { RootState as FiberState } from "@react-three/fiber";
import { HERO_LAYOUT, HERO_POINTER_EASE } from "@/constants/hero-config";
import type { ParticleUniforms, PointerNdc } from "@/types/hero";

// Runs every frame: time, responsive placement and the eased cursor field.
export function updateParticleFrame(
  uniforms: ParticleUniforms,
  { viewport }: FiberState,
  delta: number,
  pointer: PointerNdc,
) {
  const isWide = viewport.aspect > HERO_LAYOUT.wideAspect;
  uniforms.uTime.value += delta;
  uniforms.uPixelRatio.value = viewport.dpr;
  uniforms.uScale.value =
    viewport.height *
    (isWide ? HERO_LAYOUT.wideScale : HERO_LAYOUT.narrowScale);
  uniforms.uOffset.value.set(
    isWide ? viewport.width * HERO_LAYOUT.wideOffsetX : 0,
    isWide ? 0 : viewport.height * HERO_LAYOUT.narrowOffsetY,
  );

  const field = uniforms.uPointer.value;
  field.x = (pointer.x * viewport.width) / 2;
  field.y = (pointer.y * viewport.height) / 2;
  field.z += ((pointer.active ? 1 : 0) - field.z) * HERO_POINTER_EASE;
}
