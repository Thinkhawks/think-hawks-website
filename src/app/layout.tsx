import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

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
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Think Hawks Digital Marketing Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Think Hawks | Dominate the Digital Sky",
    description:
      "Premium digital marketing agency helping businesses grow online.",
    images: ["/og-image.jpg"],
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
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  metadataBase: new URL("https://thinkhawks.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="min-h-screen flex flex-col antialiased bg-white text-[#222222]">
        {children}
      </body>
    </html>
  );
}
