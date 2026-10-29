import { FiArrowUpRight } from "react-icons/fi";
import { SOCIAL_ICONS } from "@/lib/social/social-icons";
import type { SocialRowProps } from "@/types/components/presence";

// One channel as a large row: icon, name, handle and an arrow.
export function SocialRow({ link }: SocialRowProps) {
  const Icon = SOCIAL_ICONS[link.platform];
  const isWeb = link.url.startsWith("https://");

  return (
    <li className="border-b border-line">
      <a
        href={link.url}
        {...(isWeb ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        className="group flex items-center gap-5 py-6 transition-colors duration-500 hover:text-ember-soft"
      >
        <span className="grid size-12 shrink-0 place-items-center rounded-full border border-line text-lg transition-colors duration-500 group-hover:border-ember">
          <Icon aria-hidden="true" />
        </span>
        <span className="grid flex-1 gap-1">
          <span className="font-display text-2xl sm:text-3xl">
            {link.label}
          </span>
          <span className="font-mono text-xs tracking-eyebrow text-mist">
            {link.handle}
          </span>
        </span>
        {isWeb ? <span className="sr-only">(opens in a new tab)</span> : null}
        <FiArrowUpRight
          aria-hidden="true"
          className="text-xl text-mist transition duration-500 ease-chairman group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-ember"
        />
      </a>
    </li>
  );
}
