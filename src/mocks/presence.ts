import { CONTENT_STATUS } from "@/constants/content-status";
import type { Presence } from "@/types/presence";
import { socialsMock } from "./socials";

export const presenceMock: Presence = {
  intro:
    "Tekzo built a digital storefront that feels like a community, known for high-energy content and trust through transparency.",
  highlights: [
    {
      id: "live",
      title: "Live verification",
      body: "Seals and serial numbers are checked live, so buyers know exactly what they are getting.",
    },
    {
      id: "library",
      title: "A library of reviews",
      body: "How-to guides and comparisons on YouTube position the team as experts, not just sellers.",
    },
    {
      id: "reels",
      title: "Made for Gen Z",
      body: "Fast-paced reels and unboxing videos on TikTok and Instagram.",
    },
  ],
  channels: socialsMock,
  status: CONTENT_STATUS.verified,
};
