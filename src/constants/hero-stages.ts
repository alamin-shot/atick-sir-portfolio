import type { HeroStageMeta } from "@/types/hero";

// Order matches the shape drawers in src/lib/hero/shapes. The loop holds longest on the Chairman.
export const HERO_STAGES = [
  { id: "motors", label: "Motorcycles", venture: "Bike Showroom" },
  { id: "gadgets", label: "Gadgets", venture: "Salamat Innovation" },
  { id: "mobiles", label: "Mobiles", venture: "Tekzo" },
  { id: "apparel", label: "Apparel", venture: "Etaan" },
  { id: "chairman", label: "The Chairman", venture: "Founder & CEO" },
] as const satisfies readonly HeroStageMeta[];
