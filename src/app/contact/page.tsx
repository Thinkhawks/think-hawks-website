import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { BackToTop } from "@/components/ui/BackToTop";
import { ContactPageContent } from "./ContactPageContent";

export const metadata: Metadata = {
  title: "Contact Think Hawks | Get a Free Consultation",
  description:
    "Ready to grow your business? Contact Think Hawks for a free digital marketing consultation. Based in Lahore, serving clients worldwide.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <ContactPageContent />
      </main>
      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </>
  );
}
