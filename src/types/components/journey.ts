import type { ReactNode } from "react";
import type { Milestone } from "@/types/milestone";

export type JourneySpineProps = {
  children: ReactNode;
};

export type MilestoneItemProps = {
  milestone: Milestone;
  index: number;
};
