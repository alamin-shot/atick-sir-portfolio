import { CONTENT_STATUS } from "@/constants/content-status";
import { SOCIAL_PLATFORMS } from "@/constants/social-platforms";
import type { SocialLink } from "@/types/social";

// Tekzo's public support channels, used until the Chairman's office details are supplied.
export const contactMock: SocialLink[] = [
  {
    id: "whatsapp",
    platform: SOCIAL_PLATFORMS.whatsapp,
    label: "WhatsApp",
    handle: "+880 1897-715222",
    url: "https://wa.me/8801897715222",
    status: CONTENT_STATUS.placeholder,
  },
  {
    id: "email",
    platform: SOCIAL_PLATFORMS.email,
    label: "Email",
    handle: "support@tekzo.com.bd",
    url: "mailto:support@tekzo.com.bd",
    status: CONTENT_STATUS.placeholder,
  },
];
