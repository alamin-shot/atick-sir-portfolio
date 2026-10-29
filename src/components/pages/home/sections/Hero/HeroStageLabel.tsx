"use client";

import { HERO_STAGES } from "@/constants/hero-stages";
import { useAppSelector } from "@/store/hooks";
import { selectHeroStageIndex } from "@/store/slices/ui-selectors";

export function HeroStageLabel() {
  const index = useAppSelector(selectHeroStageIndex);
  const stage = HERO_STAGES[index] ?? HERO_STAGES[0];

  return (
    <p
      aria-live="polite"
      className="absolute top-8 right-4 z-20 rounded-sm border border-line bg-obsidian/60 px-3 py-1.5 font-mono text-[0.7rem] tracking-eyebrow text-ivory uppercase backdrop-blur-sm sm:right-8"
    >
      <span className="text-ember-soft">{stage.venture}</span>
      <span aria-hidden="true"> · </span>
      {stage.label}
    </p>
  );
}
