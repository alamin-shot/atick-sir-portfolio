"use client";

import { Canvas } from "@react-three/fiber";
import { useRef } from "react";
import { useInView } from "@/components/pages/home/hooks/use-in-view";
import { getTierSettings } from "@/lib/hero/get-tier-settings";
import { useAppSelector } from "@/store/hooks";
import { selectDeviceTier } from "@/store/slices/ui-selectors";
import { HeroEffects } from "./HeroEffects";
import { ParticleField } from "./ParticleField";

export function HeroCanvas() {
  const wrapper = useRef<HTMLDivElement>(null);
  const isInView = useInView(wrapper);
  const tier = useAppSelector(selectDeviceTier);
  const { maxDpr } = getTierSettings(tier);

  return (
    <div
      ref={wrapper}
      aria-hidden="true"
      className="hero-canvas absolute inset-0"
    >
      <Canvas
        dpr={[1, maxDpr]}
        frameloop={isInView ? "always" : "never"}
        camera={{ position: [0, 0, 6], fov: 35 }}
        gl={{
          antialias: false,
          alpha: true,
          powerPreference: "high-performance",
        }}
      >
        <ParticleField />
        <HeroEffects />
      </Canvas>
    </div>
  );
}
