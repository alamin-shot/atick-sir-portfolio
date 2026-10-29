import type { PublicEnv } from "@/types/env";

const isProduction = process.env.NODE_ENV === "production";
const rawSiteUrl = process.env.NEXT_PUBLIC_SITE_URL;

if (isProduction && !rawSiteUrl) {
  throw new Error("NEXT_PUBLIC_SITE_URL must be set for production builds.");
}

const siteUrl = new URL(rawSiteUrl ?? "http://localhost:3000").origin;

export const env: PublicEnv = {
  siteUrl,
  isDevelopment: process.env.NODE_ENV === "development",
};
