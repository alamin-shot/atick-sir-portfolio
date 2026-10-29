import "@/styles/globals.css";
import { GrainOverlay } from "@/components/layout/GrainOverlay";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SkipLink } from "@/components/layout/SkipLink";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { fontVariables } from "@/config/fonts";
import { rootMetadata, rootViewport } from "@/config/metadata";
import { StoreProvider } from "@/store/provider";

export const ensureStatic = "navigation";
export const metadata = rootMetadata;
export const viewport = rootViewport;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={fontVariables}>
      <body>
        <SkipLink />
        <StoreProvider>
          <main id="main-content">{children}</main>
        </StoreProvider>
        <SiteFooter />
        <GrainOverlay />
        <SmoothScroll />
      </body>
    </html>
  );
}
