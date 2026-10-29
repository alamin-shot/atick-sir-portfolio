import type { LoaderVariant } from "@/types/components/loader";

export const LOADER_VARIANTS = {
  fullscreen: "fullscreen",
  section: "section",
  inline: "inline",
} as const;

export const LOADER_VARIANT_CLASS = {
  fullscreen: "loader--fullscreen",
  section: "loader--section",
  inline: "loader--inline",
} as const satisfies Record<LoaderVariant, string>;
