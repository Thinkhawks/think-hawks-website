import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { BackToTop } from "@/components/ui/BackToTop";

export const metadata: Metadata = {
  title: "Sitemap | Think Hawks",
  description: "Complete sitemap of the Think Hawks website — all pages, services, and resources in one place.",
  robots: { index: true, follow: true },
};

const sections = [
  {
    title: "Main Pages",
    links: [
      { label: "Home", href: "/" },
      { label: "About Us", href: "/about" },
      { label: "Services", href: "/services" },
      { label: "Portfolio", href: "/portfolio" },
      { label: "Blog & Insights", href: "/blog" },
      { label: "Contact Us", href: "/contact" },
      { label: "Think Hawks Academy", href: "/academy" },
      { label: "E-commerce Solutions", href: "/ecommerce" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Social Media Marketing", href: "/services/social-media-marketing" },
      { label: "Search Engine Optimization (SEO)", href: "/services/seo" },
      { label: "Google Ads", href: "/services/google-ads" },
      { label: "Facebook Ads", href: "/services/facebook-ads" },
      { label: "Content Marketing", href: "/services/content-marketing" },
      { label: "Website Development", href: "/services/website-development" },
      { label: "Shopify & E-commerce Growth", href: "/services/ecommerce-growth" },
      { label: "Graphic Design", href: "/services/graphic-design" },
      { label: "Branding", href: "/services/branding" },
    ],
  },
  {
    title: "Academy",
    links: [
      { label: "Think Hawks Academy", href: "/academy" },
      { label: "Shopify Mastery Program", href: "/academy#curriculum" },
      { label: "E-commerce Courses", href: "/academy" },
      { label: "Enroll Now", href: "/contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Free Consultation", href: "/contact" },
      { label: "Case Studies & Portfolio", href: "/portfolio" },
      { label: "Blog & Insights", href: "/blog" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },
];

export default function SitemapPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-12 bg-[#111111]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-4">
              Site Map
            </h1>
            <p className="text-white/60 text-lg max-w-xl mx-auto">
              A complete overview of every page on the Think Hawks website.
            </p>
          </div>
        </section>

        {/* Links grid */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {sections.map((section) => (
                <div key={section.title}>
                  <h2 className="font-heading font-bold text-primary text-xs uppercase tracking-widest mb-5 pb-2 border-b border-gray-100">
                    {section.title}
                  </h2>
                  <ul className="space-y-1">
                    {section.links.map((link) => (
                      <li key={link.label}>
                        <Link
                          href={link.href}
                          className="text-[#444444] hover:text-primary active:text-primary text-sm block py-1.5 transition-colors"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </>
  );
}
