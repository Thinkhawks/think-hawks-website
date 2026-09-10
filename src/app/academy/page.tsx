import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { BackToTop } from "@/components/ui/BackToTop";
import { AcademyPageContent } from "./AcademyPageContent";

export const metadata: Metadata = {
  title: "Think Hawks Academy | Shopify, Amazon, eBay & Etsy Courses",
  description:
    "Learn to build and grow a profitable e-commerce business from scratch. Separate Shopify, Amazon, eBay, and Etsy programs with mentorship, live projects, and industry certification. Enroll now.",
  keywords: [
    "Shopify course Pakistan",
    "Amazon course Pakistan",
    "Amazon FBA training Lahore",
    "eBay course Pakistan",
    "Etsy course Pakistan",
    "e-commerce course Pakistan",
    "learn Shopify Lahore",
    "e-commerce training Lahore",
    "online store course Pakistan",
    "Think Hawks Academy",
  ],
  openGraph: {
    title: "Think Hawks Academy | Shopify, Amazon, eBay & Etsy Courses",
    description:
      "Pakistan's most practical e-commerce training. Programs for Shopify, Amazon, eBay, and Etsy. Build a real store. Generate real revenue. Earn real certification.",
    type: "website",
  },
};

export default function AcademyPage() {
  return (
    <>
      <Navbar />
      <main>
        <AcademyPageContent />
      </main>
      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </>
  );
}
