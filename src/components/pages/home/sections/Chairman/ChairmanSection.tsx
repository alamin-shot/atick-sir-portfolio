import { RevealText } from "@/components/shared/reveal-text";
import { SectionHeader } from "@/components/shared/section-header";
import { Container } from "@/components/ui/Container";
import { SECTIONS } from "@/constants/sections";
import { getChairman } from "@/services/content";
import { ChairmanPhilosophy } from "./ChairmanPhilosophy";
import { ChairmanPortrait } from "./ChairmanPortrait";
import { ChairmanQuote } from "./ChairmanQuote";

export async function ChairmanSection() {
  const { name, role, organisation, portrait, story, philosophy, quote } =
    await getChairman();
  const fullName = `${name.first} ${name.last}`;

  return (
    <section
      id={SECTIONS.chairman}
      aria-labelledby="chairman-title"
      className="relative py-28 sm:py-40"
    >
      <Container className="grid gap-16 lg:grid-cols-12 lg:gap-20">
        <div className="lg:col-span-5">
          <ChairmanPortrait
            portrait={portrait}
            caption={`${fullName} · ${role}, ${organisation}`}
          />
        </div>
        <div className="grid content-start gap-12 lg:col-span-7 lg:pt-8">
          <SectionHeader section={SECTIONS.chairman} titleId="chairman-title" />
          <RevealText className="grid max-w-2xl gap-6 text-lg leading-relaxed text-ivory/85">
            {story.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </RevealText>
          <ChairmanPhilosophy tenets={philosophy} />
        </div>
      </Container>
      <Container className="mt-28 sm:mt-40">
        <ChairmanQuote quote={quote} author={fullName} />
      </Container>
    </section>
  );
}
