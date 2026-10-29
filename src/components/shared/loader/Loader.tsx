import { LOADER_VARIANT_CLASS } from "@/constants/loader";
import { cn } from "@/lib/cn";
import type { LoaderProps } from "@/types/components/loader";

export function Loader({
  variant = "section",
  label = "Loading",
}: LoaderProps) {
  return (
    <div
      role="status"
      aria-live="polite"
      className={cn("loader", LOADER_VARIANT_CLASS[variant])}
    >
      <span className="loader-ring" aria-hidden="true">
        <span className="loader-orbit">
          <span className="loader-dot" />
        </span>
      </span>
      <span className="sr-only">{label}</span>
    </div>
  );
}
