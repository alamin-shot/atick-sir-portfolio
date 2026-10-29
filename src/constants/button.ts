import type { ButtonVariant } from "@/types/components/button";

export const BUTTON_VARIANTS = {
  primary: "primary",
  ghost: "ghost",
} as const;

export const BUTTON_BASE_CLASS =
  "inline-flex items-center justify-center gap-2 rounded-sm px-5 py-3 font-mono text-xs uppercase tracking-eyebrow transition-colors duration-300 ease-chairman disabled:pointer-events-none disabled:opacity-60";

export const BUTTON_VARIANT_CLASS = {
  primary: "border border-ember text-ivory hover:bg-ember hover:text-obsidian",
  ghost: "border border-line text-mist hover:border-ivory hover:text-ivory",
} as const satisfies Record<ButtonVariant, string>;
