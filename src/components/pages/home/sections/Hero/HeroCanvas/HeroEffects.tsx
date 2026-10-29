"use client";

import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { DEVICE_TIERS } from "@/constants/device-tiers";
import { HERO_BLOOM } from "@/constants/hero-config";
import { useAppSelector } from "@/store/hooks";
import { selectDeviceTier } from "@/store/slices/ui-selectors";

// Bloom only on the high tier; mid-tier devices keep the plain glow.
export function HeroEffects() {
  const tier = useAppSelector(selectDeviceTier);
  if (tier !== DEVICE_TIERS.high) return null;

  return (
    <EffectComposer multisampling={0}>
      <Bloom
        intensity={HERO_BLOOM.intensity}
        luminanceThreshold={HERO_BLOOM.luminanceThreshold}
        luminanceSmoothing={HERO_BLOOM.luminanceSmoothing}
        mipmapBlur
      />
    </EffectComposer>
  );
}
