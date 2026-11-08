import type { Metadata, Viewport } from "next";
import { Sofia_Sans } from "next/font/google";
import "./globals.css";

const body = Sofia_Sans({ subsets: ["latin"], variable: "--font-body" });


const SITE_URL = "https://medicai.health";
const DESCRIPTION =
  "MEDIC AI is an AI health assistant in development, built to explain symptoms and test results in plain words and escalate severe cases to human consultations. Launching with the $MEDIC memecoin. Not medical or financial advice.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "MEDIC AI: AI health assistant and $MEDIC memecoin",
    template: "%s | MEDIC AI",
  },
  description: DESCRIPTION,
  applicationName: "MEDIC AI",
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    siteName: "MEDIC AI",
    url: "/",
    title: "MEDIC AI: AI health assistant and $MEDIC memecoin",
    description: DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: "MEDIC AI: AI health assistant and $MEDIC memecoin",
    description: DESCRIPTION,
  },
};

export const viewport: Viewport = { themeColor: "#060623" };

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "MEDIC AI",
      url: SITE_URL,
      logo: `${SITE_URL}/logo.png`,
      sameAs: ["https://github.com/medic-ailab/medic-ai"],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      name: "MEDIC AI",
      url: SITE_URL,
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={body.variable}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
        {children}
      </body>
    </html>
  );
}
