import { certificationsMock } from "@/mocks/certifications";
import type { Certification } from "@/types/certification";

export async function getCertifications(): Promise<Certification[]> {
  return certificationsMock;
}
