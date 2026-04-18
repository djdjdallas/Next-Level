import "./globals.css";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { SITE_URL } from "@/lib/seo/business";
import { electricianSchema } from "@/lib/seo/schema";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Licensed Electrician Los Angeles | Ceon Electric",
    template: "%s | Ceon Electric",
  },
  description:
    "Licensed C-10 electrician serving Los Angeles. Panel upgrades, EV charger installation, whole-home rewiring, and 24/7 emergency service. Free estimates.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "Ceon Electric",
    locale: "en_US",
    url: SITE_URL,
    title: "Licensed Electrician Los Angeles | Ceon Electric",
    description:
      "Panel upgrades, EV chargers, rewiring, and 24/7 emergency electrical service. Licensed C-10 #1141112.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Licensed Electrician Los Angeles | Ceon Electric",
    description:
      "Panel upgrades, EV chargers, rewiring, and 24/7 emergency service in LA. C-10 licensed.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.cdnfonts.com/css/cabinet-grotesk"
        />
        <link
          rel="stylesheet"
          href="https://fonts.cdnfonts.com/css/satoshi"
        />
      </head>
      <body className="min-h-full flex flex-col pt-20">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Script
          src="https://widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js"
          strategy="afterInteractive"
        />
        <JsonLd data={electricianSchema()} />
      </body>
    </html>
  );
}
