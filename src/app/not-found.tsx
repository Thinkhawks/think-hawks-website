import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="relative flex min-h-[70vh] items-center justify-center overflow-hidden bg-[#111111] px-4 py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0d1a0d] via-[#111111] to-[#1a1a2e]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/10 rounded-full blur-[100px]" />
        <div className="relative text-center max-w-lg">
          <p className="font-heading text-7xl sm:text-8xl font-extrabold text-primary">404</p>
          <h1 className="mt-4 font-heading text-2xl sm:text-3xl font-bold text-white">
            This page flew the nest
          </h1>
          <p className="mt-3 text-white/60 leading-relaxed">
            The page you&apos;re looking for doesn&apos;t exist or has moved. Let&apos;s get you
            back on track.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/"
              className="gradient-bg text-white font-semibold px-6 py-3 rounded-xl shadow-md hover:shadow-lg hover:shadow-primary/25 transition-all"
            >
              Back to Home
            </Link>
            <Link
              href="/contact"
              className="border border-white/20 text-white font-semibold px-6 py-3 rounded-xl hover:bg-white/10 transition-all"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
