"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import {
  Share2, Search, FileText, Code2, Globe, Layout,
  Palette, Sparkles, Target, MousePointer, Image,
  TrendingUp, Users, BarChart3, ArrowRight
} from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { services } from "@/lib/data";

const iconMap: Record<string, React.ElementType> = {
  Share2, Search, FileText, Code2, Globe, Layout,
  Palette, Sparkles, Target, MousePointer, Image,
  TrendingUp, Users, BarChart3,
};

const iconBg: Record<string, string> = {
  "Digital Marketing": "bg-emerald-100 text-emerald-600",
  "Web Development": "bg-blue-100 text-blue-600",
  "Creative Services": "bg-purple-100 text-purple-600",
  "Paid Advertising": "bg-orange-100 text-orange-600",
};

// Maps the granular data categories onto the 4 top-level tabs shown on the homepage.
const categoryGroups: Record<string, string> = {
  "Digital Marketing": "Digital Marketing",
  "E-commerce": "E-commerce",
  "Paid Advertising": "Paid Advertising",
  "Web Development": "Web & Creative",
  "Creative Services": "Web & Creative",
};

const tabs = ["Digital Marketing", "E-commerce", "Paid Advertising", "Web & Creative"];

export function ServicesSection() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const filteredServices = useMemo(
    () => services.filter((service) => categoryGroups[service.category] === activeTab),
    [activeTab]
  );

  return (
    <section id="services" className="py-20 lg:py-28 bg-[#F8FAF8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="What We Do"
          title="Services That Drive "
          highlight="Real Results"
          description="From SEO to social media, web development to paid advertising — we offer everything your brand needs to grow and dominate your market."
        />

        <div className="mt-10 flex flex-wrap justify-center gap-2 sm:gap-3">
          {tabs.map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeTab === tab
                  ? "gradient-bg text-white shadow-md"
                  : "bg-white text-[#555353] border border-gray-200 hover:border-primary/40 hover:text-primary"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            ref={ref}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
          >
            {filteredServices.map((service, i) => {
              const Icon = iconMap[service.icon] || TrendingUp;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 24 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                >
                  <Link href={`/services/${service.id}`}>
                    <div className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                          iconBg[service.category] || "bg-primary/10 text-primary"
                        }`}
                      >
                        <Icon className="w-6 h-6" />
                      </div>

                      <h3 className="font-heading font-semibold text-[#222222] text-base mb-2 group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-sm text-[#666666] leading-relaxed flex-1">
                        {service.description.substring(0, 80)}...
                      </p>

                      <div className="mt-4 flex items-center gap-1 text-primary text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                        Learn more
                        <ArrowRight className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 gradient-bg text-white font-semibold px-8 py-3.5 rounded-xl shadow-md hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5 transition-all duration-300"
          >
            Explore All Services
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
