import { CONTENT_STATUS } from "@/constants/content-status";
import { SOCIAL_PLATFORMS } from "@/constants/social-platforms";
import type { SocialLink } from "@/types/social";

// Tekzo's public channels. Swap for the Chairman's personal profiles when supplied.
export const socialsMock: SocialLink[] = [
  {
    id: "facebook",
    platform: SOCIAL_PLATFORMS.facebook,
    label: "Facebook",
    handle: "tekzobd",
    url: "https://facebook.com/tekzobd",
    status: CONTENT_STATUS.verified,
  },
  {
    id: "instagram",
    platform: SOCIAL_PLATFORMS.instagram,
    label: "Instagram",
    handle: "tekzo.com.bd",
    url: "https://instagram.com/tekzo.com.bd",
    status: CONTENT_STATUS.verified,
  },
  {
    id: "tiktok",
    platform: SOCIAL_PLATFORMS.tiktok,
    label: "TikTok",
    handle: "@tekzobd",
    url: "https://tiktok.com/@tekzobd",
    status: CONTENT_STATUS.verified,
  },
  {
    id: "youtube",
    platform: SOCIAL_PLATFORMS.youtube,
    label: "YouTube",
    handle: "@tekzo_bd",
    url: "https://youtube.com/@tekzo_bd",
    status: CONTENT_STATUS.verified,
  },
  {
    id: "linkedin",
    platform: SOCIAL_PLATFORMS.linkedin,
    label: "LinkedIn",
    handle: "tekzobd",
    url: "https://linkedin.com/company/tekzobd",
    status: CONTENT_STATUS.verified,
  },
];
