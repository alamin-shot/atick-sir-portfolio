import { SectionHeader } from "@/components/shared/section-header";
import { Container } from "@/components/ui/Container";
import { SECTIONS } from "@/constants/sections";
import { getCertifications, getPartners } from "@/services/content";
import { CertificationPlaque } from "./CertificationPlaque";
import { PartnerMarquee } from "./PartnerMarquee";

export async function TrustSection() {
  const [certifications, partners] = await Promise.all([
    getCertifications(),
    getPartners(),
  ]);

  return (
    <section
      id={SECTIONS.trust}
      aria-labelledby="trust-title"
      className="relative py-28 sm:py-40"
    >
      <Container className="grid gap-16">
        <SectionHeader section={SECTIONS.trust} titleId="trust-title" />
        <ul
          aria-label="Certifications"
          className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5"
        >
          {certifications.map((certification, index) => (
            <CertificationPlaque
              key={certification.id}
              certification={certification}
              index={index}
            />
          ))}
        </ul>
        <h3 className="font-mono text-xs tracking-eyebrow text-mist uppercase">
          Working alongside
        </h3>
      </Container>
      <div className="mt-8">
        <PartnerMarquee partners={partners} />
      </div>
    </section>
  );
}
