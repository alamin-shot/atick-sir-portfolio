import { RevealText } from "@/components/shared/reveal-text";
import { SectionHeader } from "@/components/shared/section-header";
import { SocialRow } from "@/components/shared/social-row";
import { Container } from "@/components/ui/Container";
import { SECTIONS } from "@/constants/sections";
import { getPresence } from "@/services/content";
import { PresenceHighlights } from "./PresenceHighlights";

export async function PresenceSection() {
  const { intro, highlights, channels } = await getPresence();

  return (
    <section
      id={SECTIONS.presence}
      aria-labelledby="presence-title"
      className="relative border-t border-line py-28 sm:py-40"
    >
      <Container className="grid gap-16 lg:grid-cols-12 lg:gap-20">
        <div className="grid content-start gap-12 lg:col-span-6">
          <SectionHeader section={SECTIONS.presence} titleId="presence-title" />
          <RevealText>
            <p className="max-w-xl font-display text-2xl leading-snug text-ivory/90 italic sm:text-3xl">
              {intro}
            </p>
          </RevealText>
          <PresenceHighlights highlights={highlights} />
        </div>
        <div className="grid content-start gap-6 lg:col-span-6 lg:pt-4">
          <h3 className="font-mono text-xs tracking-eyebrow text-mist uppercase">
            Channels
          </h3>
          <ul className="border-t border-line">
            {channels.map((link) => (
              <SocialRow key={link.id} link={link} />
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
