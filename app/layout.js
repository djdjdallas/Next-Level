import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Ceon Electric | Licensed Electrician Los Angeles",
  description:
    "Ceon Electric is a licensed and insured electrician serving Los Angeles and surrounding areas. Commercial & residential electrical services. Get a free quote today!",
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
      </body>
    </html>
  );
}
