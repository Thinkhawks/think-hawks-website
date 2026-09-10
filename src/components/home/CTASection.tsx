"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

export function CTASection() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section className="py-20 lg:py-28 relative overflow-hidden">
      <div className="absolute inset-0 gradient-bg" />
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      <div className="absolute -top-24 -left-24 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-black/10 rounded-full blur-3xl" />

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 text-white text-sm font-medium mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
          Limited Spots Available This Month
        </span>

        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-5">
          Ready to Dominate Your{" "}
          <span className="text-white underline decoration-white/40">Digital Market</span>?
        </h2>

        <p className="text-white/80 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
          Get a free strategy session with our senior team. No commitment, no sales pitch —
          just actionable insights to help you grow faster online.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-secondary font-bold px-8 py-4 rounded-xl shadow-2xl hover:shadow-3xl hover:-translate-y-1 transition-all duration-300 text-sm"
          >
            Get Your Free Consultation
            <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href="tel:+19369300119"
            className="inline-flex items-center gap-2 border-2 border-white/40 text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/10 hover:-translate-y-0.5 transition-all duration-300 text-sm"
          >
            <Phone className="w-4 h-4" />
            Call Us Now
          </a>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
          {[
            "Free Strategy Call",
            "No Long-Term Contracts",
            "Results Guaranteed*",
            "Transparent Pricing",
          ].map((item) => (
            <div key={item} className="flex items-center gap-2 text-white/70 text-sm">
              <svg viewBox="0 0 16 16" className="w-4 h-4 text-white" fill="currentColor">
                <path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm3.3 6.2l-3.8 4.5c-.2.2-.4.3-.7.3-.2 0-.5-.1-.6-.3L4.3 8.8C4 8.5 4 8 4.3 7.7c.3-.3.8-.3 1.1 0l1.3 1.3 3.2-3.8c.3-.3.8-.4 1.1-.1.3.3.4.8.3 1.1z" />
              </svg>
              {item}
            </div>
          ))}
        </div>

        <p className="mt-4 text-white/40 text-xs">
          *We&apos;re so confident in our results, we offer a 90-day performance guarantee on select plans.
        </p>
      </motion.div>
    </section>
  );
}
