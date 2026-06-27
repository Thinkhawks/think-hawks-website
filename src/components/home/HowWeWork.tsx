"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Search, FileText, Rocket, TrendingUp } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { workSteps } from "@/lib/data";

const iconMap: Record<string, React.ElementType> = {
  Search, FileText, Rocket, TrendingUp,
};

export function HowWeWork() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section className="py-20 lg:py-28 bg-[#F8FAF8] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Our Process"
          title="How We Turn Strategy Into "
          highlight="Success"
          description="A proven four-step process that transforms your goals into measurable results, consistently."
        />

        <div ref={ref} className="mt-16 relative">
          <div className="hidden lg:block absolute top-8 left-1/2 -translate-x-1/2 w-3/4 h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {workSteps.map((step, i) => {
              const Icon = iconMap[step.icon] || Rocket;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  className="relative"
                >
                  <div className="text-center">
                    <div className="relative inline-flex flex-col items-center mb-6">
                      <div className="w-16 h-16 gradient-bg rounded-2xl flex items-center justify-center shadow-lg shadow-primary/25 mb-3">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <span className="font-heading text-5xl font-black text-primary/10 leading-none">
                        {step.step}
                      </span>
                    </div>

                    {i < workSteps.length - 1 && (
                      <div className="lg:hidden flex justify-center my-4">
                        <div className="w-0.5 h-8 bg-gradient-to-b from-primary/40 to-primary/10" />
                      </div>
                    )}

                    <h3 className="font-heading font-bold text-[#222222] text-lg mb-3">
                      {step.title}
                    </h3>
                    <p className="text-sm text-[#666666] leading-relaxed max-w-xs mx-auto">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
