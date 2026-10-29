import type { LOADER_VARIANTS } from "@/constants/loader";

export type LoaderVariant =
  (typeof LOADER_VARIANTS)[keyof typeof LOADER_VARIANTS];

export type LoaderProps = {
  variant?: LoaderVariant;
  label?: string;
};
