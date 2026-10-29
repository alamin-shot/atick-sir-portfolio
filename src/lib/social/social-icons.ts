import type { IconType } from "react-icons";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa6";
import { FiMail } from "react-icons/fi";
import { SOCIAL_PLATFORMS } from "@/constants/social-platforms";
import type { SocialPlatform } from "@/types/social";

export const SOCIAL_ICONS = {
  [SOCIAL_PLATFORMS.facebook]: FaFacebookF,
  [SOCIAL_PLATFORMS.instagram]: FaInstagram,
  [SOCIAL_PLATFORMS.tiktok]: FaTiktok,
  [SOCIAL_PLATFORMS.youtube]: FaYoutube,
  [SOCIAL_PLATFORMS.linkedin]: FaLinkedinIn,
  [SOCIAL_PLATFORMS.whatsapp]: FaWhatsapp,
  [SOCIAL_PLATFORMS.email]: FiMail,
} as const satisfies Record<SocialPlatform, IconType>;
