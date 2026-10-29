import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { SECTIONS } from "@/constants/sections";
import type { DeviceTier } from "@/types/hero";
import type { SectionId } from "@/types/section";
import type { UiState } from "@/types/ui";

const initialState: UiState = {
  isMenuOpen: false,
  activeSection: SECTIONS.hero,
  deviceTier: null,
  heroStageIndex: 0,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    menuToggled(state) {
      state.isMenuOpen = !state.isMenuOpen;
    },
    menuClosed(state) {
      state.isMenuOpen = false;
    },
    sectionEntered(state, action: PayloadAction<SectionId>) {
      state.activeSection = action.payload;
    },
    deviceTierDetected(state, action: PayloadAction<DeviceTier>) {
      state.deviceTier = action.payload;
    },
    heroStageChanged(state, action: PayloadAction<number>) {
      state.heroStageIndex = action.payload;
    },
  },
});

export const {
  menuToggled,
  menuClosed,
  sectionEntered,
  deviceTierDetected,
  heroStageChanged,
} = uiSlice.actions;

export const uiReducer = uiSlice.reducer;
