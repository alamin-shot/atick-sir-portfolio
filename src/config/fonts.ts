import { Bodoni_Moda, Hanken_Grotesk, IBM_Plex_Mono } from "next/font/google";

const displayFont = Bodoni_Moda({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-bodoni",
  display: "swap",
});

const bodyFont = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken",
  display: "swap",
});

const monoFont = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
});

export const fontVariables = [
  displayFont.variable,
  bodyFont.variable,
  monoFont.variable,
].join(" ");
