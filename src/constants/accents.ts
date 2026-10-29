import type { VentureAccent } from "@/types/venture";

// Each class sets --accent (see styles/partials/accents.css).
export const ACCENT_CLASS = {
  "teal-bright": "accent-teal-bright",
  ember: "accent-ember",
  etaan: "accent-etaan",
  motors: "accent-motors",
} as const satisfies Record<VentureAccent, string>;
