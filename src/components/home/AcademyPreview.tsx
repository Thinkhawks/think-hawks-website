"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import { ArrowRight, Award, BookOpen, Users, Monitor, Check, Star } from "lucide-react";

const modules = [
  "Shopify Basics & Store Setup",
  "Product Research & Sourcing",
  "Meta & TikTok Ads",
  "E-commerce SEO",
  "Order Management",
  "Scaling & Automation",
];

const features = [
  { icon: Users, text: "1-on-1 Mentorship" },
  { icon: Monitor, text: "Live Projects" },
  { icon: Award, text: "Certification" },
  { icon: BookOpen, text: "Practical Assignments" },
];

export function AcademyPreview() {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true });

  return (
    <section className="py-20 lg:py-28 bg-white overflow-hidden">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — course card visual */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="bg-[#111111] rounded-xl p-8">
              {/* Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 gradient-bg rounded-2xl flex items-center justify-center shadow-lg">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-heading font-bold text-white text-sm">Think Hawks Academy</p>
                  <p className="text-white/40 text-xs">Complete Shopify & E-commerce Mastery</p>
                </div>
                <span className="ml-auto px-3 py-1 bg-amber-400/20 text-amber-400 text-xs font-semibold rounded-full border border-amber-400/30">
                  Enrolling
                </span>
              </div>

              {/* Curriculum preview */}
              <div className="space-y-2 mb-6">
                {modules.map((mod, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -16 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + i * 0.07 }}
                    className="flex items-center gap-3 bg-white/5 rounded-xl px-4 py-2.5 border border-white/10"
                  >
                    <span className="font-heading text-xs font-bold text-primary/60 w-5">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm text-white/75">{mod}</span>
                    <Check className="w-3.5 h-3.5 text-primary ml-auto flex-shrink-0" />
                  </motion.div>
                ))}
                <div className="text-center py-2">
                  <span className="text-white/30 text-xs">+ 6 more modules</span>
                </div>
              </div>

              {/* Features row */}
              <div className="grid grid-cols-2 gap-2 mb-6">
                {features.map((f, i) => (
                  <div key={i} className="flex items-center gap-2 bg-white/5 rounded-lg px-3 py-2 border border-white/10">
                    <f.icon className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                    <span className="text-xs text-white/60">{f.text}</span>
                  </div>
                ))}
              </div>

              {/* Student reviews */}
              <div className="border-t border-white/10 pt-5">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-white/50 text-xs">Graduate Reviews</p>
                  <div className="flex items-center gap-1">
                    {[1,2,3,4,5].map(s => <Star key={s} className="w-3 h-3 text-amber-400 fill-amber-400" />)}
                    <span className="text-white/40 text-xs ml-1">5.0</span>
                  </div>
                </div>
                <div className="flex -space-x-2">
                  {["OS", "HB", "ZK", "AM", "SR", "FK"].map((init, i) => (
                    <div key={i} className="w-8 h-8 gradient-bg rounded-full flex items-center justify-center border-2 border-[#111111] text-white text-[10px] font-bold">
                      {init}
                    </div>
                  ))}
                  <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center border-2 border-[#111111] text-white text-[9px] font-bold">
                    +42
                  </div>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-4 right-4 glass rounded-2xl px-5 py-3 shadow-xl border border-primary/20">
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-amber-500" />
                <div>
                  <p className="font-heading font-bold text-xs text-[#222222]">Certificate Included</p>
                  <p className="text-[10px] text-[#666666]">Industry-recognized</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-600 text-sm font-medium mb-6">
              <Award className="w-3.5 h-3.5" />
              Think Hawks Academy
            </span>

            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#222222] leading-tight mb-5">
              Learn to Build a Profitable{" "}
              <span className="text-primary">E-commerce Business</span>
            </h2>

            <p className="text-[#666666] text-lg leading-relaxed mb-6">
              Pakistan&apos;s most practical e-commerce training. In 8 weeks, you&apos;ll go from
              absolute beginner to owning a live, revenue-generating store — with
              real mentorship and real support at every step.
            </p>

            <div className="space-y-3 mb-8">
              {[
                "8 weeks — built for complete beginners",
                "Separate programs for Shopify, Amazon, eBay & Etsy",
                "Build your real store during the program",
                "1-on-1 mentorship from 6-figure store owners",
                "Flexible online sessions with recorded replays",
                "Industry certification on completion",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full gradient-bg flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <p className="text-sm text-[#444444]">{item}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/academy"
                className="inline-flex items-center gap-2 gradient-bg text-white font-semibold px-7 py-3.5 rounded-xl shadow-md hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5 transition-all duration-300"
              >
                View Full Curriculum
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border-2 border-primary text-primary font-semibold px-7 py-3.5 rounded-xl hover:bg-primary hover:text-white hover:-translate-y-0.5 transition-all duration-300"
              >
                Apply Now
              </Link>
            </div>

            <p className="mt-4 text-sm text-[#6B6B6B]">
              Next batch enrolling soon — seats are limited.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
