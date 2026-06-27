import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { BackToTop } from "@/components/ui/BackToTop";
import { PortfolioPageContent } from "./PortfolioPageContent";

export const metadata: Metadata = {
  title: "Portfolio & Case Studies | Think Hawks",
  description:
    "Explore Think Hawks' portfolio of successful digital marketing campaigns, web development projects, and brand transformations.",
};

export default function PortfolioPage() {
  return (
    <>
      <Navbar />
      <main>
        <PortfolioPageContent />
      </main>
      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </>
  );
}
