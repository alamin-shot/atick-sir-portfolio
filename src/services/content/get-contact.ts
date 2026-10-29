import { contactMock } from "@/mocks/contact";
import type { SocialLink } from "@/types/social";

export async function getContact(): Promise<SocialLink[]> {
  return contactMock;
}
