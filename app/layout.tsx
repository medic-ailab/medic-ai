import type { Metadata } from "next";
import { Sofia_Sans, Sofia_Sans_Extra_Condensed } from "next/font/google";
import "./globals.css";

const body = Sofia_Sans({ subsets: ["latin"], variable: "--font-body" });
const display = Sofia_Sans_Extra_Condensed({ subsets: ["latin"], weight: ["700", "800", "900"], variable: "--font-display" });

export const metadata: Metadata = {
  title: "MEDIC AI: the $MEDIC memecoin launch",
  description:
    "$MEDIC is a memecoin launching with MEDIC AI, a health assistant in development. Try the scripted demo. Not medicine. Not financial advice.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${body.variable} ${display.variable}`}>
      <body>{children}</body>
    </html>
  );
}
