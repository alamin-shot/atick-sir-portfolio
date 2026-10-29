import { cn } from "@/lib/cn";
import type { ContainerProps } from "@/types/components/layout";

export function Container({ children, className }: ContainerProps) {
  return (
    <div className={cn("mx-auto w-full max-w-7xl px-4 sm:px-8", className)}>
      {children}
    </div>
  );
}
