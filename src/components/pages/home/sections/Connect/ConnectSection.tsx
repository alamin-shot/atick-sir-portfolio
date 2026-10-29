import { SectionHeader } from "@/components/shared/section-header";
import { SocialRow } from "@/components/shared/social-row";
import { VentureLink } from "@/components/shared/venture-link";
import { Container } from "@/components/ui/Container";
import { ACCENT_CLASS } from "@/constants/accents";
import { SECTIONS } from "@/constants/sections";
import { cn } from "@/lib/cn";
import { getContact, getVentures } from "@/services/content";

export async function ConnectSection() {
  const [contact, ventures] = await Promise.all([getContact(), getVentures()]);
  const online = ventures.filter((venture) => venture.url !== null);

  return (
    <section
      id={SECTIONS.connect}
      aria-labelledby="connect-title"
      className="hero-backdrop relative border-t border-line py-28 sm:py-40"
    >
      <Container className="grid gap-16 lg:grid-cols-12 lg:gap-20">
        <SectionHeader
          section={SECTIONS.connect}
          titleId="connect-title"
          className="self-start lg:col-span-5"
        />
        <div className="grid gap-16 lg:col-span-7">
          <div className="grid gap-6">
            <h3 className="font-mono text-xs tracking-eyebrow text-mist uppercase">
              Direct
            </h3>
            <ul className="border-t border-line">
              {contact.map((link) => (
                <SocialRow key={link.id} link={link} />
              ))}
            </ul>
          </div>
          <div className="grid gap-6">
            <h3 className="font-mono text-xs tracking-eyebrow text-mist uppercase">
              The group online
            </h3>
            <ul className="flex flex-wrap gap-x-14 gap-y-8">
              {online.map((venture) => (
                <li
                  key={venture.id}
                  className={cn("grid gap-3", ACCENT_CLASS[venture.accent])}
                >
                  <span className="font-display text-3xl">{venture.name}</span>
                  {venture.url ? (
                    <VentureLink url={venture.url} name={venture.name} />
                  ) : null}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
