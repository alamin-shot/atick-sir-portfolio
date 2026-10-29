import { SectionHeader } from "@/components/shared/section-header";
import { Container } from "@/components/ui/Container";
import { SECTIONS } from "@/constants/sections";
import { getNumbers } from "@/services/content";
import { NumberFigure } from "./NumberFigure";

export async function NumbersSection() {
  const numbers = await getNumbers();

  return (
    <section
      id={SECTIONS.numbers}
      aria-labelledby="numbers-title"
      className="numbers-band relative border-y border-line py-28 sm:py-36"
    >
      <Container className="grid gap-16 sm:gap-20">
        <SectionHeader section={SECTIONS.numbers} titleId="numbers-title" />
        <dl className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {numbers.map((stat) => (
            <NumberFigure key={stat.id} stat={stat} />
          ))}
        </dl>
      </Container>
    </section>
  );
}
