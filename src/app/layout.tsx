import type { Metadata } from "next";
import { LanguageProvider } from "@/i18n/LanguageProvider";
import { organizationSchema } from "@/lib/seo-identity";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://seaintenterprises.com"),
  title: { default: "SEAINT Enterprises | Technology, Investment & Company Building", template: "%s | SEAINT Enterprises" },
  description: "SEAINT Enterprises is a technology and investment-focused enterprise co-founded by Luis ‘Saint’ Altamirano, developing AI-powered software and business infrastructure.",
  openGraph: { type: "website", siteName: "SEAINT Enterprises", title: "SEAINT Enterprises | Technology & Private Investment", description: "Technology, company building, and private investment." },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema).replace(/</g, "\\u003c") }}
        />
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
