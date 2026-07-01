"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { portfolioItems } from "@/lib/data";

const categories = ["All", "E-commerce", "Website Development", "SEO", "Performance Marketing", "Social Media", "Lead Generation", "Content Marketing"];

const categoryColors: Record<string, string> = {
  "E-commerce": "bg-amber-100 text-amber-700",
  "Website Development": "bg-purple-100 text-purple-700",
  "SEO": "bg-emerald-100 text-emerald-700",
  "Performance Marketing": "bg-blue-100 text-blue-700",
  "Social Media": "bg-pink-100 text-pink-700",
  "Lead Generation": "bg-orange-100 text-orange-700",
  "Content Marketing": "bg-teal-100 text-teal-700",
};

const illustrationColors = [
  "from-blue-500 to-blue-700",
  "from-emerald-500 to-teal-700",
  "from-slate-500 to-slate-700",
  "from-rose-500 to-red-700",
  "from-amber-500 to-orange-700",
  "from-teal-500 to-cyan-700",
];

export function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState("All");
  const { ref } = useInView({ threshold: 0.1, triggerOnce: true });

  const filtered =
    activeFilter === "All"
      ? portfolioItems
      : portfolioItems.filter((p) => p.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 lg:py-28 bg-[#F8FAF8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Our Work"
          title="Results That Speak "
          highlight="For Themselves"
          description="Explore our portfolio of successful campaigns across industries. Real clients, real results, real ROI."
        />

        {/* Filters */}
        <div className="mt-10 flex flex-wrap gap-2 justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 cursor-pointer ${
                activeFilter === cat
                  ? "gradient-bg text-white shadow-md"
                  : "bg-white text-[#666666] hover:text-[#222222] border border-gray-200 hover:border-primary/30"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div
          ref={ref}
          className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          layout
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((item, i) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="group"
              >
                <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  {/* Image placeholder */}
                  <div
                    className={`relative h-52 bg-gradient-to-br ${illustrationColors[item.id % illustrationColors.length]} overflow-hidden`}
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <PortfolioIllustration category={item.category} />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                          categoryColors[item.category] || "bg-white text-gray-700"
                        }`}
                      >
                        {item.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-1">
                      {item.client}
                    </p>
                    <h3 className="font-heading font-bold text-[#222222] text-lg mb-2 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[#666666] mb-5 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Metrics */}
                    <div className="grid grid-cols-3 gap-2 p-3 bg-[#F8FAF8] rounded-xl mb-4">
                      {item.metrics.map((m, j) => (
                        <div key={j} className="text-center">
                          <p className="font-heading font-bold text-primary text-sm">{m.value}</p>
                          <p className="text-[10px] text-[#888888] mt-0.5">{m.label}</p>
                        </div>
                      ))}
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 bg-gray-100 text-[#666666] rounded-lg text-[11px] font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="mt-12 text-center">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 gradient-bg text-white font-semibold px-8 py-3.5 rounded-xl shadow-md hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5 transition-all duration-300"
          >
            View Full Portfolio
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function PortfolioIllustration({ category }: { category: string }) {
  if (category === "SEO") {
    return (
      <svg viewBox="0 0 200 150" className="w-32 h-24 opacity-80">
        <polyline points="20,120 50,80 80,100 110,50 140,70 170,20" stroke="white" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="170" cy="20" r="5" fill="white" />
        <circle cx="110" cy="50" r="5" fill="white" />
        <rect x="20" y="110" width="20" height="30" rx="3" fill="white" fillOpacity="0.5" />
        <rect x="50" y="90" width="20" height="50" rx="3" fill="white" fillOpacity="0.6" />
        <rect x="80" y="100" width="20" height="40" rx="3" fill="white" fillOpacity="0.5" />
        <rect x="110" y="60" width="20" height="80" rx="3" fill="white" fillOpacity="0.7" />
        <rect x="140" y="70" width="20" height="70" rx="3" fill="white" fillOpacity="0.6" />
        <rect x="170" y="30" width="20" height="110" rx="3" fill="white" fillOpacity="0.9" />
      </svg>
    );
  }
  if (category === "Social Media") {
    return (
      <svg viewBox="0 0 200 150" className="w-32 h-24 opacity-80">
        <circle cx="100" cy="75" r="45" fill="white" fillOpacity="0.2" stroke="white" strokeWidth="2" />
        <circle cx="100" cy="75" r="25" fill="white" fillOpacity="0.3" />
        <circle cx="100" cy="75" r="8" fill="white" />
        <line x1="100" y1="30" x2="100" y2="120" stroke="white" strokeWidth="1.5" strokeOpacity="0.5" />
        <line x1="55" y1="75" x2="145" y2="75" stroke="white" strokeWidth="1.5" strokeOpacity="0.5" />
        <path d="M67 45 Q100 30 133 45 Q145 75 133 105 Q100 120 67 105 Q55 75 67 45Z" stroke="white" strokeWidth="1.5" fill="none" strokeOpacity="0.5" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 200 150" className="w-32 h-24 opacity-80">
      <rect x="20" y="20" width="160" height="110" rx="12" fill="white" fillOpacity="0.15" stroke="white" strokeWidth="1.5" />
      <rect x="40" y="40" width="80" height="10" rx="5" fill="white" fillOpacity="0.7" />
      <rect x="40" y="58" width="120" height="6" rx="3" fill="white" fillOpacity="0.4" />
      <rect x="40" y="72" width="100" height="6" rx="3" fill="white" fillOpacity="0.4" />
      <rect x="40" y="86" width="60" height="6" rx="3" fill="white" fillOpacity="0.4" />
      <rect x="40" y="106" width="60" height="14" rx="7" fill="white" fillOpacity="0.8" />
      <rect x="110" y="106" width="50" height="14" rx="7" fill="white" fillOpacity="0.3" stroke="white" strokeWidth="1" />
    </svg>
  );
}
