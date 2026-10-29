import type { SECTIONS } from "@/constants/sections";

export type SectionId = (typeof SECTIONS)[keyof typeof SECTIONS];

export type CopySectionId = Exclude<SectionId, "hero">;

export type SectionCopy = {
  index: string;
  eyebrow: string;
  title: string;
  lede: string;
};
