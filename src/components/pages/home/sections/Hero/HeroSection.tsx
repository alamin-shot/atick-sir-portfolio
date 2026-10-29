import { Container } from "@/components/ui/Container";
import { SECTIONS } from "@/constants/sections";
import { HeroCopy } from "./HeroCopy";
import { HeroSignature } from "./HeroSignature";
import { HeroStage } from "./HeroStage";

export function HeroSection() {
  return (
    <section
      id={SECTIONS.hero}
      aria-labelledby="hero-title"
      className="hero-backdrop relative isolate flex min-h-svh items-end overflow-hidden pt-32 pb-16 sm:pb-24"
    >
      <HeroStage fallback={<HeroSignature />} />
      <Container className="relative z-10">
        <HeroCopy />
      </Container>
    </section>
  );
}
