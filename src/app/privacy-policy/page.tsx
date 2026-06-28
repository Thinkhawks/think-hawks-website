import type { Metadata } from "next";
import { LegalShell } from "@/components/layout/LegalShell";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Think Hawks collects, uses, and protects the personal information you share with us.",
};

export default function PrivacyPolicyPage() {
  return (
    <LegalShell
      title="Privacy Policy"
      updated="June 2026"
      intro="Think Hawks (“we”, “us”, “our”) respects your privacy. This policy explains what information we collect when you use our website or contact us, how we use it, and the choices you have."
      blocks={[
        {
          heading: "Information we collect",
          paragraphs: [
            "We only collect information you choose to give us, plus basic technical data needed to run the site.",
          ],
          bullets: [
            "Contact details you submit through our forms (name, email, phone, company).",
            "The content of your enquiry, including the service and budget you select.",
            "Standard analytics data such as pages visited and approximate location, collected only with your consent.",
          ],
        },
        {
          heading: "How we use your information",
          bullets: [
            "To respond to your enquiry and provide the services you request.",
            "To send a confirmation of your message and follow up about your project.",
            "To improve our website and understand which content is useful.",
          ],
          paragraphs: [
            "We do not sell or rent your personal data to third parties.",
          ],
        },
        {
          heading: "Third-party services",
          paragraphs: [
            "Our contact form is delivered via Web3Forms, and our website chat is provided by Tawk.to. These providers process your submission solely to deliver it to us. We may also use privacy-friendly analytics. Each provider maintains its own privacy policy.",
          ],
        },
        {
          heading: "Cookies",
          paragraphs: [
            "We use essential cookies to make the site work and, with your consent, analytics cookies to measure usage. You can control cookies through our cookie notice and your browser settings.",
          ],
        },
        {
          heading: "Data retention & security",
          paragraphs: [
            "We keep enquiry data only as long as needed to serve you and meet legal obligations, and we take reasonable measures to protect it from unauthorised access.",
          ],
        },
        {
          heading: "Your rights",
          paragraphs: [
            "You can ask us to access, correct, or delete the personal information we hold about you. To make a request, email thinkhawks@gmail.com.",
          ],
        },
        {
          heading: "Contact us",
          paragraphs: [
            "Questions about this policy? Email thinkhawks@gmail.com or call +92 328 458 0621. Think Hawks, Office #19, 1st Floor, Al Hafeez Shopping Mall, Gulberg III, Lahore, Pakistan.",
          ],
        },
      ]}
    />
  );
}
