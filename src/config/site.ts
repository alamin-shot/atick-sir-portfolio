import type { SiteConfig } from "@/types/site";
import { env } from "./env";

export const siteConfig: SiteConfig = {
  name: "Atick Hasan Sajib",
  title: "Atick Hasan Sajib · Founder & CEO, Salamat Innovation",
  description:
    "Founder & CEO of Salamat Innovation and Tekzo, building Bangladesh's home for genuine technology, mobility and fashion.",
  url: env.siteUrl,
  locale: "en_US",
  themeColor: "#0b0e0e",
  lastUpdated: "2026-10-28",
};
