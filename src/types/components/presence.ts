import type { PresenceHighlight } from "@/types/presence";
import type { SocialLink } from "@/types/social";

export type PresenceHighlightsProps = {
  highlights: PresenceHighlight[];
};

export type SocialRowProps = {
  link: SocialLink;
};
