import { CONTENT_STATUS } from "@/constants/content-status";
import { VENTURE_ACCENTS, VENTURE_IDS } from "@/constants/ventures";
import type { Venture } from "@/types/venture";

// Placeholder: no public source found yet. Replace with the brand's real story.
export const etaanMock: Venture = {
  id: VENTURE_IDS.etaan,
  name: "Etaan",
  sector: "Clothing & lifestyle",
  summary: "A clothing label for everyday wear with a considered finish.",
  description: [
    "Etaan designs clothing for people who want quality they can feel and a fit they can trust.",
  ],
  url: null,
  accent: VENTURE_ACCENTS.etaan,
  highlights: ["Brand story to be supplied", "Lookbook to be supplied"],
  stats: [],
  status: CONTENT_STATUS.placeholder,
};
