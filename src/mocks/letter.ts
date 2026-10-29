import { CONTENT_STATUS } from "@/constants/content-status";
import type { ChairmanLetter } from "@/types/letter";

// Placeholder letter for the CEO to rewrite in his own voice.
export const letterMock: ChairmanLetter = {
  greeting: "To everyone who has trusted us,",
  paragraphs: [
    "When we started, the promise was simple: if it carries our name, it is genuine. Every company in this group still keeps that promise.",
    "We are building for a Bangladesh that deserves the best the world makes, sold honestly and supported long after the sale.",
    "Thank you for being part of it. The next chapter is the one we write together.",
  ],
  signOff: "With gratitude,",
  signatory: "Atick Hasan Sajib",
  status: CONTENT_STATUS.placeholder,
};
