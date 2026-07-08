import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SEAINT Enterprise | Build Tomorrow, Today",
  description: "Private Equity | Venture Capital | Company Building",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
