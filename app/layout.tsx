import type { Metadata } from "next";
import "./globals.css";
import { LAYOUT, METADATA } from "@/data/data";

export const metadata: Metadata = METADATA;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang={LAYOUT.htmlLang} suppressHydrationWarning className={LAYOUT.htmlClass}>
      <body className={LAYOUT.bodyClass}>{children}</body>
    </html>
  );
}
