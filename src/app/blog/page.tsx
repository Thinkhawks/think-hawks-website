import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { BackToTop } from "@/components/ui/BackToTop";
import { BlogPageContent } from "./BlogPageContent";

export const metadata: Metadata = {
  title: "Digital Marketing Blog | Think Hawks",
  description:
    "Read the latest digital marketing insights, SEO strategies, social media tips, and growth hacks from the Think Hawks team.",
};

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main>
        <BlogPageContent />
      </main>
      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </>
  );
}
