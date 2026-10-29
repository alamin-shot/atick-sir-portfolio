import type { VENTURE_ACCENTS, VENTURE_IDS } from "@/constants/ventures";
import type { ContentStatus } from "./content";
import type { Stat } from "./stat";

export type VentureId = (typeof VENTURE_IDS)[keyof typeof VENTURE_IDS];

export type VentureAccent =
  (typeof VENTURE_ACCENTS)[keyof typeof VENTURE_ACCENTS];

export type Venture = {
  id: VentureId;
  name: string;
  sector: string;
  summary: string;
  description: string[];
  url: string | null;
  accent: VentureAccent;
  highlights: string[];
  stats: Stat[];
  status: ContentStatus;
};
