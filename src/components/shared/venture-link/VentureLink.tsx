import { FiArrowUpRight } from "react-icons/fi";
import type { VentureLinkProps } from "@/types/components/group";

export function VentureLink({ url, name }: VentureLinkProps) {
  const host = new URL(url).host;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Visit ${name} at ${host} (opens in a new tab)`}
      className="group inline-flex w-fit items-center gap-2 border-b border-(--accent) pb-1 font-mono text-xs tracking-eyebrow text-ivory uppercase transition-colors hover:text-(--accent)"
    >
      {host}
      <FiArrowUpRight
        aria-hidden="true"
        className="transition-transform duration-500 ease-chairman group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      />
    </a>
  );
}
