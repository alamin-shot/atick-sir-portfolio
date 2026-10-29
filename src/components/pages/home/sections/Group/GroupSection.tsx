import { SectionHeader } from "@/components/shared/section-header";
import { Container } from "@/components/ui/Container";
import { SECTIONS } from "@/constants/sections";
import { getVentures } from "@/services/content";
import { EmpireTrack } from "./EmpireTrack";
import { VentureChapter } from "./VentureChapter";

export async function GroupSection() {
  const ventures = await getVentures();

  return (
    <section
      id={SECTIONS.group}
      aria-labelledby="group-title"
      className="relative border-t border-line"
    >
      <EmpireTrack>
        <div className="flex items-center py-28 lg:motion-safe:min-h-svh lg:motion-safe:w-[55vw] lg:motion-safe:shrink-0">
          <Container className="grid gap-10">
            <SectionHeader section={SECTIONS.group} titleId="group-title" />
            <p className="hidden items-center gap-3 font-mono text-xs tracking-eyebrow text-mist uppercase lg:motion-safe:flex">
              Keep scrolling
              <span aria-hidden="true" className="h-px w-16 bg-ember" />
            </p>
          </Container>
        </div>
        {ventures.map((venture, index) => (
          <VentureChapter
            key={venture.id}
            venture={venture}
            index={index}
            total={ventures.length}
          />
        ))}
      </EmpireTrack>
    </section>
  );
}
