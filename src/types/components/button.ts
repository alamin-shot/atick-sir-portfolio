import type { ComponentPropsWithoutRef, ReactNode } from "react";
import type { Route } from "next";
import type { BUTTON_VARIANTS } from "@/constants/button";

export type ButtonVariant =
  (typeof BUTTON_VARIANTS)[keyof typeof BUTTON_VARIANTS];

export type ButtonProps = ComponentPropsWithoutRef<"button"> & {
  variant?: ButtonVariant;
  isLoading?: boolean;
};

export type ButtonLinkProps = {
  href: Route;
  variant?: ButtonVariant;
  className?: string;
  children: ReactNode;
};
