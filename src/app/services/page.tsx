import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { BackToTop } from "@/components/ui/BackToTop";
import { ServicesPageContent } from "./ServicesPageContent";

export const metadata: Metadata = {
  title: "Digital Marketing Services | Think Hawks",
  description:
    "Explore Think Hawks' comprehensive digital marketing services: SEO, social media, Google Ads, web development, branding, content marketing, and more.",
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        <ServicesPageContent />
      </main>
      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </>
  );
}
