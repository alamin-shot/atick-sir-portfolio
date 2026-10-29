import { VENTURE_IDS } from "@/constants/ventures";
import type { ShapeDrawer } from "@/types/hero";
import type { VentureId } from "@/types/venture";
import { drawHeadphones } from "./headphones";
import { drawMotorcycle } from "./motorcycle";
import { drawPhone } from "./phone";
import { drawShirt } from "./shirt";

// The shape each venture formed in the hero returns as its chapter emblem.
export const VENTURE_EMBLEMS = {
  [VENTURE_IDS.salamat]: drawHeadphones,
  [VENTURE_IDS.tekzo]: drawPhone,
  [VENTURE_IDS.etaan]: drawShirt,
  [VENTURE_IDS.motors]: drawMotorcycle,
} as const satisfies Record<VentureId, ShapeDrawer>;
