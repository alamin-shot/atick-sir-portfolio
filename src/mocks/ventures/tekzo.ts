import { CONTENT_STATUS } from "@/constants/content-status";
import { VENTURE_ACCENTS, VENTURE_IDS } from "@/constants/ventures";
import type { Venture } from "@/types/venture";

export const tekzoMock: Venture = {
  id: VENTURE_IDS.tekzo,
  name: "Tekzo",
  sector: "Multi-brand tech retail",
  summary:
    "An officially authorised destination for genuine smartphones, gadgets and accessories.",
  description: [
    "Tekzo brings the latest mobile devices, accessories and smart home products under one roof, each with an official warranty.",
    "Its flagship store sits at Jamuna Future Park, backed by a nationwide online store.",
  ],
  url: "https://tekzo.com.bd",
  accent: VENTURE_ACCENTS.ember,
  highlights: [
    "Authorised for Apple, Samsung, Google, Anker, UGREEN and more",
    "Flagship store at Jamuna Future Park, Dhaka",
    "Certified by e-CAB, DBID and DCCI",
  ],
  stats: [],
  status: CONTENT_STATUS.verified,
};
