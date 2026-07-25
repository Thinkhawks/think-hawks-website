"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Award, DollarSign, Zap, MessageSquare,
  TrendingUp, Handshake, BarChart3, Settings
} from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { whyUsReasons } from "@/lib/data";

const iconMap: Record<string, React.ElementType> = {
  Award, DollarSign, Zap, MessageSquare,
  TrendingUp, Handshake, BarChart3, Settings,
};

const colors = [
  "bg-primary/10 text-primary",
  "bg-blue-50 text-blue-600",
  "bg-amber-50 text-amber-600",
  "bg-purple-50 text-purple-600",
  "bg-rose-50 text-rose-600",
  "bg-cyan-50 text-cyan-600",
  "bg-orange-50 text-orange-600",
  "bg-emerald-50 text-emerald-600",
];

export function WhyUsSection() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Why Choose Us"
          title="The Think Hawks "
          highlight="Advantage"
          description="We don't just run campaigns — we become invested in your success. Here's why 50+ businesses trust us to grow their brand."
        />

        <div
          ref={ref}
          className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {whyUsReasons.map((reason, i) => {
            const Icon = iconMap[reason.icon] || Award;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="group"
              >
                <div className="bg-[#F8FAF8] rounded-xl p-6 h-full hover:bg-white hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${colors[i % colors.length]}`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading font-semibold text-[#222222] mb-2 group-hover:text-primary transition-colors">
                    {reason.title}
                  </h3>
                  <p className="text-sm text-[#666666] leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
