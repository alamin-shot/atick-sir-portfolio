import type { DeviceTier } from "./hero";
import type { SectionId } from "./section";

export type UiState = {
  isMenuOpen: boolean;
  activeSection: SectionId;
  deviceTier: DeviceTier | null;
  heroStageIndex: number;
};
