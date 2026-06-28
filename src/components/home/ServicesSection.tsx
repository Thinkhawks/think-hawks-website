"use client";

import { motion } from "framer-motion";
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

export function ServicesSection() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="services" className="py-20 lg:py-28 bg-[#F8FAF8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="What We Do"
          title="Services That Drive "
          highlight="Real Results"
          description="From SEO to social media, web development to paid advertising — we offer everything your brand needs to grow and dominate your market."
        />

        <motion.div
          ref={ref}
          className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
        >
          {services.map((service, i) => {
            const Icon = iconMap[service.icon] || TrendingUp;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.05 }}
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
