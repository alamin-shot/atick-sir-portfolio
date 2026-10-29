import type { ContentStatus } from "./content";

export type ChairmanLetter = {
  greeting: string;
  paragraphs: string[];
  signOff: string;
  signatory: string;
  status: ContentStatus;
};
