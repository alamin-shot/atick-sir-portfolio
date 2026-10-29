import { Color, Vector2, Vector3 } from "three";
import { HERO_COLORS } from "@/constants/hero-config";
import type { ParticleUniforms } from "@/types/hero";

export function createParticleUniforms(pointSize: number): ParticleUniforms {
  return {
    uProgress: { value: 0 },
    uIntro: { value: 0 },
    uTime: { value: 0 },
    uScale: { value: 1 },
    uOffset: { value: new Vector2() },
    uPointer: { value: new Vector3() },
    uDisperse: { value: 0 },
    uPixelRatio: { value: 1 },
    uSize: { value: pointSize },
    uEmber: { value: new Color(HERO_COLORS.ember) },
    uIvory: { value: new Color(HERO_COLORS.ivory) },
    uTeal: { value: new Color(HERO_COLORS.teal) },
  };
}
