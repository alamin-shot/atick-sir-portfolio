import type { ReactNode } from "react";
import type { CopySectionId } from "@/types/section";

export type EyebrowProps = {
  index?: string;
  children: ReactNode;
  className?: string;
};

export type SectionHeaderProps = {
  section: CopySectionId;
  titleId: string;
  className?: string;
};
