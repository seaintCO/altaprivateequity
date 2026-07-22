import type { Metadata } from "next";
import { LanguageProvider } from "@/i18n/LanguageProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "SEAINT Enterprise | Build Tomorrow, Today",
  description: "Private Equity | Venture Capital | Company Building",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
