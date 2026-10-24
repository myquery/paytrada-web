import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const manrope = localFont({
  src: "../../public/fonts/manrope-variable.ttf",
  variable: "--font-manrope",
  display: "swap",
  weight: "400 800",
});

const dmSans = localFont({
  src: "../../public/fonts/dm-sans-variable.ttf",
  variable: "--font-dm-sans",
  display: "swap",
  weight: "400 700",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://paytrada.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Paytrada — Agentic Commerce on Bitcoin",
  description:
    "Paytrada is building a connected commerce network where wallets, merchants, and AI agents come together through Bitcoin, Lightning, and RGB.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Paytrada — Agentic Commerce on Bitcoin",
    description:
      "Connecting people, merchants, and intelligent agents through a new commerce network.",
    url: siteUrl,
    siteName: "Paytrada",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Paytrada — Agentic Commerce on Bitcoin",
    description:
      "A connected commerce network for people, merchants, and intelligent agents.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${manrope.variable} ${dmSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
