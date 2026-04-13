import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Ceon Electric — Licensed Electrician in Los Angeles",
  description:
    "Ceon Electric is a licensed and insured electrician serving Los Angeles and surrounding areas. Commercial & residential electrical services. Get a free quote today!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
