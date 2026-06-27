import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { BackToTop } from "@/components/ui/BackToTop";
import { AboutPageContent } from "./AboutPageContent";

export const metadata: Metadata = {
  title: "About Think Hawks | Our Story, Mission & Values",
  description:
    "Learn about Think Hawks — a premium digital marketing agency based in Lahore, Pakistan. Discover our story, mission, values, and the team behind your brand growth.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <AboutPageContent />
      </main>
      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </>
  );
}
