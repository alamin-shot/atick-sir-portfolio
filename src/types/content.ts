import type { CONTENT_STATUS } from "@/constants/content-status";

export type ContentStatus =
  (typeof CONTENT_STATUS)[keyof typeof CONTENT_STATUS];
