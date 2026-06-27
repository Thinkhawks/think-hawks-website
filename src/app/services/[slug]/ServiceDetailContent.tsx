"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import {
  ArrowRight, Check, ArrowLeft,
  Share2, Search, FileText, Code2, Globe, Layout,
  Palette, Sparkles, Target, MousePointer, Image,
  TrendingUp, Users, BarChart3
} from "lucide-react";
import { services, faqs } from "@/lib/data";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CTASection } from "@/components/home/CTASection";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { AnimatePresence } from "framer-motion";

const iconMap: Record<string, React.ElementType> = {
  Share2, Search, FileText, Code2, Globe, Layout,
  Palette, Sparkles, Target, MousePointer, Image,
  TrendingUp, Users, BarChart3,
};

const processSteps = [
  { title: "Discovery & Audit", desc: "We analyze your current situation, competitors, and opportunities." },
  { title: "Strategy Development", desc: "We craft a customized plan tailored to your goals and budget." },
  { title: "Implementation", desc: "Our team executes the strategy with precision and attention to detail." },
  { title: "Monitor & Optimize", desc: "We continuously track performance and optimize for better results." },
  { title: "Report & Scale", desc: "Transparent reporting helps us identify what to scale for even greater ROI." },
];

interface ServiceType {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: string;
  benefits: string[];
  color: string;
  iconColor: string;
}

export function ServiceDetailContent({ service }: { service: ServiceType }) {
  const Icon = iconMap[service.icon] || TrendingUp;
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  const relatedServices = services.filter(
    (s) => s.category === service.category && s.id !== service.id
  ).slice(0, 3);

  const serviceFaqs = faqs.slice(0, 5);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-[#111111] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0d1a0d] via-[#111111] to-[#1a1a2e]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/10 rounded-full blur-[100px]" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Link
              href="/services"
              className="inline-flex items-center gap-1.5 text-white/50 hover:text-white text-sm mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              All Services
            </Link>

            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-semibold">
                {service.category}
              </span>
            </div>

            <div className="flex items-start gap-5">
              <div className="w-16 h-16 gradient-bg rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                <Icon className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-3">
                  {service.title}
                </h1>
                <p className="text-white/65 text-lg leading-relaxed max-w-2xl">
                  {service.description}
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 gradient-bg text-white font-semibold px-7 py-3.5 rounded-xl shadow-lg shadow-primary/30 hover:shadow-xl hover:-translate-y-0.5 transition-all text-sm"
              >
                Get Started
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border border-white/20 text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-white/10 hover:-translate-y-0.5 transition-all text-sm"
              >
                Request a Free Audit
              </Link>
            </div>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
          <svg viewBox="0 0 1440 60" fill="none" className="w-full" preserveAspectRatio="none">
            <path d="M0 60L1440 60L1440 20C1200 55 720 0 360 35C180 52 0 20 0 20V60Z" fill="#F8FAF8" />
          </svg>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-[#F8FAF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
                What You Get
              </span>
              <h2 className="font-heading text-3xl font-bold text-[#222222] mb-5">
                Key Benefits & Deliverables
              </h2>
              <div className="space-y-4">
                {service.benefits.map((b, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-100 shadow-sm"
                  >
                    <div className="w-8 h-8 gradient-bg rounded-lg flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-[#333333] font-medium">{b}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Process */}
            <div>
              <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
                Our Process
              </span>
              <h2 className="font-heading text-3xl font-bold text-[#222222] mb-5">
                How We Deliver Results
              </h2>
              <div className="space-y-4">
                {processSteps.map((step, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="w-8 h-8 rounded-full bg-[#222222] text-white flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                      {i + 1}
                    </div>
                    <div>
                      <p className="font-heading font-semibold text-[#222222]">{step.title}</p>
                      <p className="text-sm text-[#666666] mt-0.5">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="FAQ"
            title="Common Questions About "
            highlight={service.title}
          />
          <div ref={ref} className="mt-10 space-y-3">
            {serviceFaqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className={`bg-[#F8FAF8] rounded-2xl border overflow-hidden transition-all ${openFaq === i ? "border-primary/30" : "border-gray-100"}`}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="flex items-center justify-between w-full text-left p-5 cursor-pointer"
                >
                  <span className="font-heading font-semibold text-[#222222] text-sm pr-4">{faq.question}</span>
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-all ${openFaq === i ? "gradient-bg text-white" : "bg-white text-[#666666]"}`}>
                    {openFaq === i ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 pt-0">
                        <div className="h-px bg-gray-200 mb-4" />
                        <p className="text-[#666666] text-sm leading-relaxed">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Related services */}
      {relatedServices.length > 0 && (
        <section className="py-16 bg-[#F8FAF8]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader badge="Related Services" title="You Might Also Need" />
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-5">
              {relatedServices.map((s) => {
                const SIcon = iconMap[s.icon] || TrendingUp;
                return (
                  <Link key={s.id} href={`/services/${s.id}`}>
                    <div className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg border border-gray-100 hover:border-primary/15 transition-all duration-300 hover:-translate-y-1">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                        <SIcon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="font-heading font-semibold text-[#222222] mb-2 group-hover:text-primary transition-colors">{s.title}</h3>
                      <p className="text-sm text-[#666666] line-clamp-2">{s.description}</p>
                      <div className="mt-4 flex items-center gap-1 text-primary text-xs font-semibold">
                        Learn More <ArrowRight className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      <CTASection />
    </>
  );
}
