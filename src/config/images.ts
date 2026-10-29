import type { ImagesConfig } from "@/types/config";

export const imagesConfig: ImagesConfig = {
  formats: ["image/avif", "image/webp"],
  qualities: [75],
  localPatterns: [{ pathname: "/images/**", search: "" }],
  remotePatterns: [],
};
