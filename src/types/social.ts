import type { SOCIAL_PLATFORMS } from "@/constants/social-platforms";
import type { ContentStatus } from "./content";

export type SocialPlatform =
  (typeof SOCIAL_PLATFORMS)[keyof typeof SOCIAL_PLATFORMS];

export type SocialLink = {
  id: string;
  platform: SocialPlatform;
  label: string;
  handle: string;
  url: string;
  status: ContentStatus;
};
