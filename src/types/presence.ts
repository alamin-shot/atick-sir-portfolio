import type { ContentStatus } from "./content";
import type { SocialLink } from "./social";

export type PresenceHighlight = {
  id: string;
  title: string;
  body: string;
};

export type Presence = {
  intro: string;
  highlights: PresenceHighlight[];
  channels: SocialLink[];
  status: ContentStatus;
};
