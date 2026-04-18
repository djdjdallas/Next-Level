import Breadcrumbs from "@/components/Breadcrumbs";
import ContactPageClient from "./ContactPageClient";

export const metadata = {
  title: "Contact Ceon Electric | Free Quote for LA Electrical Work",
  description:
    "Contact Ceon Electric for a free estimate. Licensed C-10 electrician in LA. Call (818) 430-9508 (24/7) or (323) 963-2089 (office). Reply within 1 hour.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Ceon Electric | Free LA Electrical Quote",
    description:
      "Free estimates. Call (818) 430-9508 (24/7) or (323) 963-2089 (office). Licensed C-10 #1141112.",
    url: "/contact",
  },
};

export default function ContactPage() {
  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Contact", url: "/contact" },
  ];
  return (
    <>
      <Breadcrumbs items={breadcrumbs} />
      <ContactPageClient />
    </>
  );
}
