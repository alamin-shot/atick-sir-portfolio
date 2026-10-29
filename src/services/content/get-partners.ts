import { partnersMock } from "@/mocks/partners";
import type { Partner } from "@/types/partner";

export async function getPartners(): Promise<Partner[]> {
  return partnersMock;
}
