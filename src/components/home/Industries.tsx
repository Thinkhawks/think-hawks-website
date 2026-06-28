"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  ShoppingBag, Heart, Building2, Cpu, GraduationCap,
  DollarSign, Scissors, Utensils, Plane, Dumbbell, Briefcase, HandHeart
} from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { industries } from "@/lib/data";

const iconMap: Record<string, React.ElementType> = {
  ShoppingBag, Heart, Building2, Cpu, GraduationCap,
  DollarSign, Scissors, Utensils, Plane, Dumbbell, Briefcase, HandHeart,
};

export function Industries() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Industries We Serve"
          title="Expertise Across Every "
          highlight="Industry"
          description="We've helped businesses in 12+ industries achieve remarkable growth. No matter your sector, we have the knowledge and experience to make you succeed."
        />

        <div ref={ref} className="mt-14 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {industries.map((industry, i) => {
            const Icon = iconMap[industry.icon] || Briefcase;
            return (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group"
              >
                <div className="flex flex-col items-center gap-3 p-5 bg-[#F8FAF8] rounded-xl hover:bg-white hover:shadow-md transition-all duration-300 hover:-translate-y-1 cursor-default text-center">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${industry.color} flex items-center justify-center`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-xs font-semibold text-[#555353] group-hover:text-[#222222] transition-colors leading-tight">
                    {industry.name}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
