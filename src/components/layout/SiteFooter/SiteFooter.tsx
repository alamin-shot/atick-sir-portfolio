import { FiArrowUp } from "react-icons/fi";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/config/site";
import { getChairman } from "@/services/content";

// The year comes from lastUpdated so the page stays fully static.
export async function SiteFooter() {
  const { role, organisation } = await getChairman();
  const year = siteConfig.lastUpdated.slice(0, 4);

  return (
    <footer className="border-t border-line">
      <Container className="flex flex-col gap-4 py-10 font-mono text-[0.7rem] tracking-eyebrow text-mist uppercase sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {year} {siteConfig.name}
        </p>
        <p>
          {role} · {organisation}
        </p>
        <a
          href="#main-content"
          className="inline-flex w-fit items-center gap-2 transition-colors hover:text-ember-soft"
        >
          Back to top
          <FiArrowUp aria-hidden="true" />
        </a>
      </Container>
    </footer>
  );
}
