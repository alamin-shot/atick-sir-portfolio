import { DEVICE_TIERS } from "@/constants/device-tiers";
import { HERO_TIER_SETTINGS } from "@/constants/hero-config";
import type { DeviceTier, TierSettings } from "@/types/hero";

export function getTierSettings(tier: DeviceTier | null): TierSettings {
  return tier === DEVICE_TIERS.high
    ? HERO_TIER_SETTINGS.high
    : HERO_TIER_SETTINGS.mid;
}
