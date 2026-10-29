import type { RootState } from "@/types/store";

export const selectIsMenuOpen = (state: RootState) => state.ui.isMenuOpen;
export const selectActiveSection = (state: RootState) => state.ui.activeSection;
export const selectDeviceTier = (state: RootState) => state.ui.deviceTier;
export const selectHeroStageIndex = (state: RootState) =>
  state.ui.heroStageIndex;
