import type { Certification } from "@/types/certification";
import type { Partner } from "@/types/partner";

export type CertificationPlaqueProps = {
  certification: Certification;
  index: number;
};

export type PartnerMarqueeProps = {
  partners: Partner[];
};
