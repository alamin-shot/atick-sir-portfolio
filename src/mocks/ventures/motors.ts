import { CONTENT_STATUS } from "@/constants/content-status";
import { VENTURE_ACCENTS, VENTURE_IDS } from "@/constants/ventures";
import type { Venture } from "@/types/venture";

// Placeholder: the showroom's name and brands are not known yet.
export const motorsMock: Venture = {
  id: VENTURE_IDS.motors,
  name: "Bike Showroom",
  sector: "Motorcycles",
  summary:
    "A motorcycle showroom bringing trusted brands and after-sales care.",
  description: [
    "The showroom sells motorcycles with the same promise as the rest of the group: genuine products and support after the sale.",
  ],
  url: null,
  accent: VENTURE_ACCENTS.motors,
  highlights: ["Showroom name to be supplied", "Brands carried to be supplied"],
  stats: [],
  status: CONTENT_STATUS.placeholder,
};
