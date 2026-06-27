import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { BackToTop } from "@/components/ui/BackToTop";
import { EcommercePageContent } from "./EcommercePageContent";

export const metadata: Metadata = {
  title: "E-commerce Growth Solutions | Shopify Development Pakistan | Think Hawks",
  description:
    "Pakistan's leading Shopify development and e-commerce growth agency. We build, manage, and scale Shopify stores — from local payment integration to international expansion. Get a free consultation.",
  keywords: [
    "Shopify development Pakistan",
    "e-commerce agency Pakistan",
    "Shopify experts Lahore",
    "Shopify store management",
    "e-commerce growth Pakistan",
    "JazzCash Shopify integration",
    "online store Pakistan",
  ],
  openGraph: {
    title: "E-commerce Growth Solutions | Think Hawks",
    description:
      "Build, manage, and scale your Shopify store with Pakistan's leading e-commerce growth agency.",
    type: "website",
  },
};

export default function EcommercePage() {
  return (
    <>
      <Navbar />
      <main>
        <EcommercePageContent />
      </main>
      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </>
  );
}
