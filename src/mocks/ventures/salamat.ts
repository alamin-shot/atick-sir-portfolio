import { CONTENT_STATUS } from "@/constants/content-status";
import { VENTURE_ACCENTS, VENTURE_IDS } from "@/constants/ventures";
import type { Venture } from "@/types/venture";

export const salamatMock: Venture = {
  id: VENTURE_IDS.salamat,
  name: "Salamat Innovation",
  sector: "Electronics distribution",
  summary:
    "The group's distribution house, bringing global technology brands to Bangladesh.",
  description: [
    "Salamat Innovation handles sourcing, warehousing, logistics and warranty management for the brands it represents.",
    "It supplies retail, e-commerce and corporate channels across the country.",
  ],
  url: "https://salamatinnovation.com",
  accent: VENTURE_ACCENTS.teal,
  highlights: [
    "Official exclusive distributor of VOLTME",
    "Authorised distributor of TOZO",
    "Authenticity checks on every unit",
  ],
  stats: [
    { id: "brands", value: 100, suffix: "+", label: "Global brands" },
    { id: "partners", value: 1200, suffix: "+", label: "Retail partners" },
    { id: "units", value: 500, suffix: "k+", label: "Units distributed" },
  ],
  status: CONTENT_STATUS.verified,
};
