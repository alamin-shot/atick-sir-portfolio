import { DEVICE_TIER_RULES } from "@/constants/hero-config";
import { DEVICE_TIERS } from "@/constants/device-tiers";
import type { DeviceTier } from "@/types/hero";

// Browser-only. Picks how much of the hero this device should run.
export function detectDeviceTier(): DeviceTier {
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;
  const isSmallTouch =
    window.matchMedia("(pointer: coarse)").matches &&
    window.innerWidth < DEVICE_TIER_RULES.lowMaxWidth;
  if (prefersReducedMotion || isSmallTouch) return DEVICE_TIERS.low;

  const supportsWebGl2 = Boolean(
    document.createElement("canvas").getContext("webgl2"),
  );
  if (!supportsWebGl2) return DEVICE_TIERS.low;

  const cores = navigator.hardwareConcurrency || 4;
  const hasFinePointer = window.matchMedia("(pointer: fine)").matches;
  if (cores >= DEVICE_TIER_RULES.highMinCores && hasFinePointer) {
    return DEVICE_TIERS.high;
  }
  return DEVICE_TIERS.mid;
}
