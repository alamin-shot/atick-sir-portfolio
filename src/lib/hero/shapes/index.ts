import type { ShapeDrawer } from "@/types/hero";
import { drawBust } from "./bust";
import { drawHeadphones } from "./headphones";
import { drawMotorcycle } from "./motorcycle";
import { drawPhone } from "./phone";
import { drawShirt } from "./shirt";

// Same order as HERO_STAGES.
export const HERO_SHAPES: ShapeDrawer[] = [
  drawMotorcycle,
  drawHeadphones,
  drawPhone,
  drawShirt,
  drawBust,
];
