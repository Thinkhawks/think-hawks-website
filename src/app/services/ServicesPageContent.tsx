"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import {
  Share2, Search, FileText, Code2, Globe, Layout,
  Palette, Sparkles, Target, MousePointer, Image,
  TrendingUp, Users, BarChart3, ArrowRight, Check
} from "lucide-react";
import { services } from "@/lib/data";
import { CTASection } from "@/components/home/CTASection";

const iconMap: Record<string, React.ElementType> = {
  Share2, Search, FileText, Code2, Globe, Layout,
  Palette, Sparkles, Target, MousePointer, Image,
  TrendingUp, Users, BarChart3,
};

const categoryColors: Record<string, { bg: string; text: string; border: string }> = {
  "Digital Marketing": { bg: "bg-emerald-50", text: "text-emerald-700", border: "border-emerald-200" },
  "Web Development": { bg: "bg-blue-50", text: "text-blue-700", border: "border-blue-200" },
  "Creative Services": { bg: "bg-purple-50", text: "text-purple-700", border: "border-purple-200" },
  "Paid Advertising": { bg: "bg-orange-50", text: "text-orange-700", border: "border-orange-200" },
};

const iconBgMap: Record<string, string> = {
  "Digital Marketing": "bg-emerald-100 text-emerald-600",
  "Web Development": "bg-blue-100 text-blue-600",
  "Creative Services": "bg-purple-100 text-purple-600",
  "Paid Advertising": "bg-orange-100 text-orange-600",
};

export function ServicesPageContent() {
  const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true });

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-[#111111] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0d1a0d] via-[#111111] to-[#1a1a2e]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/10 rounded-full blur-[100px]" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/15 border border-primary/30 text-primary text-sm font-medium mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              What We Do
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-5">
              Services That Drive{" "}
              <span className="text-primary">Real Business Growth</span>
            </h1>
            <p className="text-white/65 text-lg leading-relaxed max-w-2xl mx-auto">
              From search engine dominance to social media mastery, web development to paid
              advertising — we offer every digital service your brand needs to succeed and scale.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
          <svg viewBox="0 0 1440 60" fill="none" className="w-full" preserveAspectRatio="none">
            <path d="M0 60L1440 60L1440 20C1200 55 720 0 360 35C180 52 0 20 0 20V60Z" fill="#F8FAF8" />
          </svg>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-20 lg:py-28 bg-[#F8FAF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#222222] mb-3">
              Our Digital Marketing &amp; Web Development Services
            </h2>
            <p className="text-[#666666] max-w-2xl mx-auto leading-relaxed">
              Explore every service we offer — each one crafted to deliver measurable results for your business.
            </p>
          </div>
          <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => {
              const Icon = iconMap[service.icon] || TrendingUp;
              const cat = categoryColors[service.category] || { bg: "bg-primary/10", text: "text-primary", border: "border-primary/20" };
              const iconBg = iconBgMap[service.category] || "bg-primary/10 text-primary";

              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 24 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                >
                  <Link href={`/services/${service.id}`}>
                    <div className="group bg-white rounded-xl p-7 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
                      <div className="flex items-start justify-between mb-5">
                        <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${iconBg}`}>
                          <Icon className="w-7 h-7" />
                        </div>
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${cat.bg} ${cat.text} border ${cat.border}`}>
                          {service.category}
                        </span>
                      </div>

                      <h3 className="font-heading font-bold text-[#222222] text-lg mb-2 group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-sm text-[#666666] leading-relaxed flex-1 mb-5">
                        {service.description}
                      </p>

                      <div className="space-y-2 mb-5">
                        {service.benefits.map((b, j) => (
                          <div key={j} className="flex items-center gap-2 text-sm text-[#555353]">
                            <Check className="w-4 h-4 text-primary flex-shrink-0" />
                            {b}
                          </div>
                        ))}
                      </div>

                      <div className="flex items-center gap-1 text-primary text-sm font-semibold">
                        Learn More
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
