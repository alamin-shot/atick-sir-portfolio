import type { NextConfig } from "next";

export type ImagesConfig = NonNullable<NextConfig["images"]>;

export type SecurityHeader = {
  key: string;
  value: string;
};
