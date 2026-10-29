"use client";

import { useFrame } from "@react-three/fiber";
import { useEffect, useMemo } from "react";
import { useMorphTimeline } from "@/components/pages/home/hooks/use-morph-timeline";
import { usePointerNdc } from "@/components/pages/home/hooks/use-pointer-ndc";
import { useScrollDisperse } from "@/components/pages/home/hooks/use-scroll-disperse";
import { buildParticleTargets } from "@/lib/hero/build-particle-targets";
import { createParticleMaterial } from "@/lib/hero/create-particle-material";
import { createParticleUniforms } from "@/lib/hero/create-particle-uniforms";
import { getTierSettings } from "@/lib/hero/get-tier-settings";
import { updateParticleFrame } from "@/lib/hero/update-particle-frame";
import { useAppSelector } from "@/store/hooks";
import { selectDeviceTier } from "@/store/slices/ui-selectors";
import type { ParticleFieldProps } from "@/types/components/hero";

export function ParticleField({ portrait }: ParticleFieldProps) {
  const tier = useAppSelector(selectDeviceTier);
  const { particleCount, pointSize } = getTierSettings(tier);
  const targets = useMemo(
    () => buildParticleTargets(particleCount, portrait),
    [particleCount, portrait],
  );
  const uniforms = useMemo(
    () => createParticleUniforms(pointSize),
    [pointSize],
  );
  const material = useMemo(() => createParticleMaterial(uniforms), [uniforms]);
  const pointer = usePointerNdc();

  useEffect(() => () => material.dispose(), [material]);
  useMorphTimeline(uniforms);
  useScrollDisperse(uniforms);
  useFrame((state, delta) =>
    updateParticleFrame(uniforms, state, delta, pointer.current),
  );

  const finalShape = targets.positions[targets.positions.length - 1];

  return (
    <points frustumCulled={false} material={material}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[finalShape, 3]} />
        {targets.positions.map((stage, index) => (
          <bufferAttribute
            key={index}
            attach={`attributes-aPos${index}`}
            args={[stage, 3]}
          />
        ))}
        <bufferAttribute attach="attributes-aSeed" args={[targets.seeds, 1]} />
        <bufferAttribute
          attach="attributes-aLight"
          args={[targets.portraitLight, 1]}
        />
      </bufferGeometry>
    </points>
  );
}
