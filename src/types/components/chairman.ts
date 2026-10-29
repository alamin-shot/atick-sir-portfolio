import type { ImageAsset } from "@/types/media";

export type ChairmanPortraitProps = {
  portrait: ImageAsset;
  caption: string;
};

export type ChairmanPhilosophyProps = {
  tenets: string[];
};

export type ChairmanQuoteProps = {
  quote: string;
  author: string;
};
