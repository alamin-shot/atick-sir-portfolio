import { CONTENT_STATUS } from "@/constants/content-status";
import type { Chairman } from "@/types/chairman";

// Draft copy built from the Tekzo About page. The CEO replaces it with final wording.
export const chairmanMock: Chairman = {
  name: { first: "Atick Hasan", last: "Sajib" },
  role: "Founder & CEO",
  organisation: "Salamat Innovation",
  disciplines: ["Technology", "Mobility", "Fashion", "Distribution"],
  tagline:
    "Building Bangladesh's home for genuine technology, and the group of companies around it.",
  portrait: {
    src: "/images/chairman/portrait.avif",
    alt: "Portrait of Atick Hasan Sajib",
    width: 1200,
    height: 1500,
  },
  story: [
    "Atick Hasan Sajib founded Salamat Innovation to do one thing well: bring genuine global technology to Bangladesh, with real warranties and honest prices.",
    "From that distribution house grew Tekzo, an officially authorised multi-brand retailer whose first store opened at Jamuna Future Park, and a group that now reaches into mobility and fashion.",
    "He believes technology should make everyday life simpler, and that trust is earned after the sale as much as before it.",
  ],
  philosophy: [
    "Genuine or nothing.",
    "Service is the product.",
    "Build communities, not only customers.",
  ],
  quote:
    "Trust is the one thing you cannot import. You build it here, one customer at a time.",
  status: CONTENT_STATUS.placeholder,
};
