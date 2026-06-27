import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { BackToTop } from "@/components/ui/BackToTop";
import { AcademyPageContent } from "./AcademyPageContent";

export const metadata: Metadata = {
  title: "Think Hawks Academy | Complete Shopify & E-commerce Mastery Program",
  description:
    "Learn to build and grow a profitable Shopify store from scratch. Pakistan's most practical e-commerce training program with mentorship, live projects, and industry certification. Enroll now.",
  keywords: [
    "Shopify course Pakistan",
    "e-commerce course Pakistan",
    "learn Shopify Lahore",
    "Shopify training Pakistan",
    "e-commerce training Lahore",
    "online store course Pakistan",
    "Think Hawks Academy",
  ],
  openGraph: {
    title: "Think Hawks Academy | Shopify & E-commerce Mastery",
    description:
      "Pakistan's most practical Shopify & e-commerce training program. Build a real store. Generate real revenue. Earn real certification.",
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
