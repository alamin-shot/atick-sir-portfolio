"use client";

import dynamic from "next/dynamic";
import { useDeviceTier } from "@/components/pages/home/hooks/use-device-tier";
import { DEVICE_TIERS } from "@/constants/device-tiers";
import { useAppSelector } from "@/store/hooks";
import { selectDeviceTier } from "@/store/slices/ui-selectors";
import type { HeroStageProps } from "@/types/components/hero";
import { HeroStageLabel } from "./HeroStageLabel";

// Three.js only downloads on devices that will actually run it.
const HeroCanvas = dynamic(
  () => import("./HeroCanvas").then((module) => module.HeroCanvas),
  { ssr: false },
);

export function HeroStage({ fallback }: HeroStageProps) {
  useDeviceTier();
  const tier = useAppSelector(selectDeviceTier);

  if (tier === null) return null;
  if (tier === DEVICE_TIERS.low) return fallback;

  return (
    <>
      <HeroCanvas />
      <HeroStageLabel />
    </>
  );
}
