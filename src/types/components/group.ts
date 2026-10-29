import type { ReactNode } from "react";
import type { Stat } from "@/types/stat";
import type { Venture, VentureId } from "@/types/venture";

export type EmpireTrackProps = {
  children: ReactNode;
};

export type VentureChapterProps = {
  venture: Venture;
  index: number;
  total: number;
};

export type VentureEmblemProps = {
  ventureId: VentureId;
  label: string;
};

export type VentureStatsProps = {
  stats: Stat[];
};

export type VentureLinkProps = {
  url: string;
  name: string;
};
