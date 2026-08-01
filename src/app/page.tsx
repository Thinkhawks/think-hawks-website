import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { ClientLogos } from "@/components/home/ClientLogos";
import { ServicesSection } from "@/components/home/ServicesSection";
import { StatsSection } from "@/components/home/StatsSection";
import { WebsiteShowcase } from "@/components/home/WebsiteShowcase";
import { WhyUsSection } from "@/components/home/WhyUsSection";
import { HowWeWork } from "@/components/home/HowWeWork";
import { EcommercePreview } from "@/components/home/EcommercePreview";
import { AcademyPreview } from "@/components/home/AcademyPreview";
import { Industries } from "@/components/home/Industries";
import { PortfolioSection } from "@/components/home/PortfolioSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { FAQSection } from "@/components/home/FAQSection";
import { CTASection } from "@/components/home/CTASection";
import { ContactSection } from "@/components/home/ContactSection";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { BackToTop } from "@/components/ui/BackToTop";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ClientLogos />
        <ServicesSection />
        <StatsSection />
        <WebsiteShowcase />
        <WhyUsSection />
        <HowWeWork />
        <EcommercePreview />
        <AcademyPreview />
        <Industries />
        <PortfolioSection />
        <TestimonialsSection />
        <FAQSection />
        <CTASection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </>
  );
}
