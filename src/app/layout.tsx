import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { TawkChat } from "@/components/ui/TawkChat";
import { CookieNotice } from "@/components/ui/CookieNotice";
import { MotionProvider } from "@/components/providers/MotionProvider";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Think Hawks",
  description:
    "Premium digital marketing agency in Lahore offering SEO, social media marketing, web development, branding, and paid advertising.",
  url: "https://thinkhawks.com",
  email: "thinkhawks@gmail.com",
  telephone: "+92-328-458-0621",
  image: "https://thinkhawks.com/icon.png",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Office #19, 1st Floor, Al Hafeez Shopping Mall, Gulberg III",
    addressLocality: "Lahore",
    addressCountry: "PK",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "19:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "10:00",
      closes: "16:00",
    },
  ],
  sameAs: ["https://linkedin.com/company/thinkhawks"],
};

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: {
    default: "Think Hawks | Digital Marketing Agency in Lahore",
    template: "%s | Think Hawks",
  },
  description:
    "Think Hawks is a premium digital marketing agency in Lahore, Pakistan. We offer SEO, social media marketing, web development, branding, Google Ads, and more. Helping businesses dominate the digital landscape.",
  keywords: [
    "digital marketing agency",
    "SEO agency Lahore",
    "social media marketing",
    "web development",
    "Google Ads",
    "Facebook Ads",
    "branding agency",
    "Think Hawks",
    "digital agency Pakistan",
  ],
  authors: [{ name: "Think Hawks" }],
  creator: "Think Hawks",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://thinkhawks.com",
    siteName: "Think Hawks",
    title: "Think Hawks | Dominate the Digital Sky",
    description:
      "Premium digital marketing agency helping ambitious businesses dominate the digital landscape through strategic marketing, creative design, and data-driven advertising.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Think Hawks | Dominate the Digital Sky",
    description:
      "Premium digital marketing agency helping businesses grow online.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  metadataBase: new URL("https://thinkhawks.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={plusJakartaSans.variable} data-scroll-behavior="smooth">
      <body className="min-h-screen flex flex-col antialiased bg-white text-[#222222]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-ZYMFXXVK0P"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-ZYMFXXVK0P');
          `}
        </Script>
        <MotionProvider>{children}</MotionProvider>
        <TawkChat />
        <CookieNotice />
      </body>
    </html>
  );
}
