import { Loader } from "@/components/shared/loader";
import { BUTTON_BASE_CLASS, BUTTON_VARIANT_CLASS } from "@/constants/button";
import { cn } from "@/lib/cn";
import type { ButtonProps } from "@/types/components/button";

export function Button({
  variant = "primary",
  isLoading = false,
  disabled,
  className,
  children,
  type = "button",
  ...rest
}: ButtonProps) {
  return (
    <button
      type={type}
      disabled={disabled || isLoading}
      aria-busy={isLoading || undefined}
      className={cn(
        BUTTON_BASE_CLASS,
        BUTTON_VARIANT_CLASS[variant],
        className,
      )}
      {...rest}
    >
      {isLoading ? <Loader variant="inline" /> : null}
      {children}
    </button>
  );
}
