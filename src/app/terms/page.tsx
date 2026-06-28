import type { Metadata } from "next";
import { LegalShell } from "@/components/layout/LegalShell";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The terms that govern your use of the Think Hawks website and the services we provide.",
};

export default function TermsPage() {
  return (
    <LegalShell
      title="Terms of Service"
      updated="June 2026"
      intro="These terms govern your use of the Think Hawks website and any services you engage us to provide. By using our site or working with us, you agree to these terms."
      blocks={[
        {
          heading: "Using our website",
          paragraphs: [
            "You may browse and use this website for lawful purposes only. You agree not to misuse the site, attempt to disrupt it, or use its content without permission.",
          ],
        },
        {
          heading: "Our services",
          paragraphs: [
            "Specific deliverables, timelines, and fees for any engagement are agreed separately in a written proposal or contract. Where those documents conflict with this page, the signed agreement takes precedence.",
          ],
        },
        {
          heading: "Quotes and results",
          bullets: [
            "Pricing shown on the website is indicative and may vary based on scope.",
            "Marketing results depend on many factors; we work hard to deliver outcomes but do not guarantee specific revenue or ranking figures.",
            "Case studies and testimonials describe past results and are not a promise of future performance.",
          ],
        },
        {
          heading: "Intellectual property",
          paragraphs: [
            "All branding, text, and design on this website belong to Think Hawks unless otherwise stated. Ownership of work we create for clients transfers as set out in the relevant engagement agreement.",
          ],
        },
        {
          heading: "Payments",
          paragraphs: [
            "Fees, payment schedules, and cancellation terms are defined in your service agreement. Invoices are due as stated on each invoice.",
          ],
        },
        {
          heading: "Limitation of liability",
          paragraphs: [
            "To the extent permitted by law, Think Hawks is not liable for indirect or consequential losses arising from use of the website or our services.",
          ],
        },
        {
          heading: "Contact us",
          paragraphs: [
            "Questions about these terms? Email thinkhawks@gmail.com or call +92 328 458 0621.",
          ],
        },
      ]}
    />
  );
}
