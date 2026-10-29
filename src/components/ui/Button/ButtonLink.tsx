import Link from "next/link";
import { BUTTON_BASE_CLASS, BUTTON_VARIANT_CLASS } from "@/constants/button";
import { cn } from "@/lib/cn";
import type { ButtonLinkProps } from "@/types/components/button";

export function ButtonLink({
  href,
  variant = "primary",
  className,
  children,
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        BUTTON_BASE_CLASS,
        BUTTON_VARIANT_CLASS[variant],
        className,
      )}
    >
      {children}
    </Link>
  );
}
