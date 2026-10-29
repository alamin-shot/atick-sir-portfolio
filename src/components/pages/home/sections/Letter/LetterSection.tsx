import { RevealText } from "@/components/shared/reveal-text";
import { SectionHeader } from "@/components/shared/section-header";
import { Container } from "@/components/ui/Container";
import { SECTIONS } from "@/constants/sections";
import { getChairman, getLetter } from "@/services/content";
import { SignatureDraw } from "./SignatureDraw";

export async function LetterSection() {
  const [letter, { role, organisation }] = await Promise.all([
    getLetter(),
    getChairman(),
  ]);

  return (
    <section
      id={SECTIONS.letter}
      aria-labelledby="letter-title"
      className="relative border-t border-line py-28 sm:py-40"
    >
      <Container className="grid gap-16">
        <SectionHeader
          section={SECTIONS.letter}
          titleId="letter-title"
          className="mx-auto justify-items-center text-center"
        />
        <article className="mx-auto w-full max-w-2xl rounded-sm border border-line bg-panel px-6 py-12 sm:px-14 sm:py-16">
          <p className="flex justify-between gap-4 border-b border-line pb-6 font-mono text-[0.7rem] tracking-eyebrow text-mist uppercase">
            <span>From the desk of the Chairman</span>
            <span className="text-ember-soft">{organisation}</span>
          </p>
          <RevealText className="mt-10 grid gap-6 font-display text-xl leading-relaxed sm:text-2xl">
            <p className="italic">{letter.greeting}</p>
            {letter.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </RevealText>
          <div className="mt-12 grid gap-3">
            <p className="text-mist">{letter.signOff}</p>
            <SignatureDraw text={letter.signatory} />
            <p className="font-mono text-[0.7rem] tracking-eyebrow text-mist uppercase">
              {letter.signatory} · {role}, {organisation}
            </p>
          </div>
        </article>
      </Container>
    </section>
  );
}
