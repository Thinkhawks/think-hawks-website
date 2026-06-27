"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import {
  ArrowRight, TrendingUp, X, ChevronRight,
  Target, Lightbulb, Zap, BarChart3, Star, Quote
} from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { portfolioItems, testimonials } from "@/lib/data";
import { CTASection } from "@/components/home/CTASection";

type PortfolioItem = typeof portfolioItems[number];

const categories = ["All", "E-commerce", "Website Development", "SEO", "Performance Marketing", "Social Media", "Lead Generation", "Content Marketing"];

const gradients = [
  "from-emerald-400 to-teal-500",
  "from-blue-400 to-indigo-500",
  "from-primary to-green-600",
  "from-violet-400 to-purple-500",
  "from-pink-400 to-rose-500",
  "from-orange-400 to-amber-500",
  "from-teal-400 to-cyan-500",
];

const avatarColors = [
  "from-primary to-primary-light",
  "from-blue-500 to-blue-600",
  "from-purple-500 to-purple-600",
  "from-amber-500 to-amber-600",
  "from-rose-500 to-rose-600",
  "from-teal-500 to-teal-600",
];

function CaseStudyModal({ item, onClose }: { item: PortfolioItem; onClose: () => void }) {
  const gradient = gradients[item.id % gradients.length];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-start justify-center px-4 py-8 overflow-y-auto"
        onClick={onClose}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.35 }}
          className="relative bg-white rounded-3xl shadow-2xl max-w-3xl w-full my-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className={`relative bg-gradient-to-br ${gradient} rounded-t-3xl p-8 overflow-hidden`}>
            <div className="absolute inset-0 bg-black/20" />
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-9 h-9 bg-white/20 hover:bg-white/30 rounded-xl flex items-center justify-center text-white cursor-pointer transition-colors z-10"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="relative z-10">
              <span className="inline-block px-3 py-1 bg-white/20 border border-white/30 text-white text-xs font-semibold rounded-full mb-3">
                {item.category}
              </span>
              <h2 className="font-heading font-bold text-white text-2xl leading-tight mb-1">{item.title}</h2>
              <p className="text-white/70 text-sm">{item.client}</p>
            </div>
          </div>

          <div className="p-8 space-y-8">
            {/* Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {item.metrics.map((m, i) => (
                <div key={i} className="bg-[#F8FAF8] rounded-2xl p-4 text-center border border-gray-100">
                  <p className="font-heading font-bold text-primary text-lg">{m.value}</p>
                  <p className="text-xs text-[#888888] mt-0.5">{m.label}</p>
                  <p className="text-[10px] text-primary/60 mt-0.5">{m.change}</p>
                </div>
              ))}
            </div>

            {/* Before / After */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-red-50 border border-red-100 rounded-2xl p-4">
                <p className="text-xs font-bold text-red-400 uppercase tracking-widest mb-2">Before</p>
                <p className="text-sm text-[#555353] leading-relaxed">{item.beforeAfter.before}</p>
              </div>
              <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-4">
                <p className="text-xs font-bold text-emerald-500 uppercase tracking-widest mb-2">After</p>
                <p className="text-sm text-[#555353] leading-relaxed">{item.beforeAfter.after}</p>
              </div>
            </div>

            {/* Challenge */}
            <div>
              <div className="flex items-center gap-2.5 mb-3">
                <div className="w-8 h-8 bg-red-50 rounded-lg flex items-center justify-center">
                  <Target className="w-4 h-4 text-red-400" />
                </div>
                <h3 className="font-heading font-bold text-[#222222]">The Challenge</h3>
              </div>
              <p className="text-sm text-[#666666] leading-relaxed pl-11">{item.challenge}</p>
            </div>

            {/* Strategy */}
            <div>
              <div className="flex items-center gap-2.5 mb-3">
                <div className="w-8 h-8 bg-amber-50 rounded-lg flex items-center justify-center">
                  <Lightbulb className="w-4 h-4 text-amber-500" />
                </div>
                <h3 className="font-heading font-bold text-[#222222]">Our Strategy</h3>
              </div>
              <p className="text-sm text-[#666666] leading-relaxed pl-11">{item.strategy}</p>
            </div>

            {/* Solution */}
            <div>
              <div className="flex items-center gap-2.5 mb-3">
                <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center">
                  <Zap className="w-4 h-4 text-blue-500" />
                </div>
                <h3 className="font-heading font-bold text-[#222222]">The Solution</h3>
              </div>
              <p className="text-sm text-[#666666] leading-relaxed pl-11">{item.solution}</p>
            </div>

            {/* Results */}
            <div>
              <div className="flex items-center gap-2.5 mb-3">
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                  <BarChart3 className="w-4 h-4 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-[#222222]">The Results</h3>
              </div>
              <ul className="space-y-2 pl-11">
                {item.results.map((r, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-[#555353]">
                    <ChevronRight className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    {r}
                  </li>
                ))}
              </ul>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 pt-2 border-t border-gray-100">
              {item.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 bg-primary/8 text-primary text-xs font-semibold rounded-full border border-primary/15">
                  {tag}
                </span>
              ))}
            </div>

            <Link
              href="/contact"
              className="flex items-center justify-center gap-2 gradient-bg text-white font-semibold py-3.5 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
            >
              Get Similar Results for Your Business
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export function PortfolioPageContent() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  const filtered =
    activeFilter === "All"
      ? portfolioItems
      : portfolioItems.filter((p) => p.category === activeFilter);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-[#111111] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0d1a0d] via-[#111111] to-[#1a1a2e]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/10 rounded-full blur-[100px]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "linear-gradient(rgba(142,169,122,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(142,169,122,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/15 border border-primary/30 text-primary text-sm font-medium mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Our Work
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-5">
              Results That{" "}
              <span className="gradient-text">Speak For Themselves</span>
            </h1>
            <p className="text-white/65 text-lg leading-relaxed max-w-2xl mx-auto">
              Explore real case studies across digital marketing, e-commerce, SEO, and web development.
              Click any project to see the full strategy and results.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden pointer-events-none">
          <svg viewBox="0 0 1440 60" fill="none" className="w-full" preserveAspectRatio="none">
            <path d="M0 60L1440 60L1440 20C1200 55 720 0 360 35C180 52 0 20 0 20V60Z" fill="#F8FAF8" />
          </svg>
        </div>
      </section>

      {/* Portfolio grid */}
      <section className="py-20 bg-[#F8FAF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filters */}
          <div className="flex flex-wrap gap-2 justify-center mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all cursor-pointer ${
                  activeFilter === cat
                    ? "gradient-bg text-white shadow-md"
                    : "bg-white text-[#666666] border border-gray-200 hover:border-primary/30"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <motion.div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" layout>
            <AnimatePresence mode="popLayout">
              {filtered.map((item, i) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 hover:border-primary/10 transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                  onClick={() => setSelectedItem(item)}
                >
                  <div className={`relative h-52 bg-gradient-to-br ${gradients[item.id % gradients.length]} overflow-hidden`}>
                    <div className="absolute inset-0 flex items-center justify-center opacity-25">
                      <TrendingUp className="w-24 h-24 text-white" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                    {/* Metrics overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <div className="flex gap-3">
                        {item.metrics.slice(0, 2).map((m, j) => (
                          <div key={j} className="bg-white/15 backdrop-blur rounded-xl px-3 py-1.5">
                            <p className="font-heading font-bold text-white text-sm">{m.value}</p>
                            <p className="text-white/70 text-[10px]">{m.label}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="absolute top-4 left-4 flex items-center gap-2">
                      <span className="bg-white/90 backdrop-blur rounded-xl px-3 py-1.5 text-xs font-bold text-[#222222]">
                        {item.category}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <p className="text-white/70 text-xs font-medium">{item.client}</p>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="font-heading font-bold text-[#222222] text-lg mb-2 group-hover:text-primary transition-colors leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[#666666] mb-5 leading-relaxed line-clamp-2">{item.description}</p>

                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {item.tags.map((tag) => (
                        <span key={tag} className="px-2.5 py-1 bg-gray-100 text-[#666666] rounded-lg text-[11px] font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-1.5 text-primary text-sm font-semibold group-hover:gap-2.5 transition-all">
                      View Full Case Study
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Case Study Modal */}
      {selectedItem && (
        <CaseStudyModal
          item={selectedItem}
          onClose={() => setSelectedItem(null)}
        />
      )}

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Client Reviews"
            title="What Our Clients "
            highlight="Are Saying"
          />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.slice(0, 6).map((t, i) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-[#F8FAF8] rounded-2xl p-6 border border-gray-100"
              >
                <Quote className="w-6 h-6 text-primary/40 mb-3" />
                <div className="flex gap-0.5 mb-3">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-[#555353] leading-relaxed mb-4 italic">
                  &ldquo;{t.text.substring(0, 160)}...&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${avatarColors[i % avatarColors.length]} flex items-center justify-center`}>
                    <span className="text-xs font-bold text-white">{t.avatar}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-[#222222]">{t.name}</p>
                    <p className="text-xs text-[#666666]">{t.role}, {t.company}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
