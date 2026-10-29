import type { ContentStatus } from "./content";
import type { ImageAsset } from "./media";

export type ChairmanName = {
  first: string;
  last: string;
};

export type Chairman = {
  name: ChairmanName;
  role: string;
  organisation: string;
  disciplines: string[];
  tagline: string;
  portrait: ImageAsset;
  story: string[];
  philosophy: string[];
  quote: string;
  status: ContentStatus;
};
