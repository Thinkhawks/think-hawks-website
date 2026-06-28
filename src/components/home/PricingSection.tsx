"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import { Check, X } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { pricingPlans } from "@/lib/data";

export function PricingSection() {
  const [isYearly, setIsYearly] = useState(false);
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="pricing" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Transparent Pricing"
          title="Plans That Grow "
          highlight="With You"
          description="No hidden fees, no surprises. Choose the plan that fits your goals and budget."
        />

        {/* Billing toggle */}
        <div className="mt-8 flex items-center justify-center gap-4">
          <span className={`text-sm font-medium ${!isYearly ? "text-[#222222]" : "text-[#6B6B6B]"}`}>
            Monthly
          </span>
          <button
            onClick={() => setIsYearly(!isYearly)}
            className={`relative w-14 h-7 rounded-full transition-colors duration-300 cursor-pointer ${
              isYearly ? "gradient-bg" : "bg-gray-200"
            }`}
          >
            <span
              className={`absolute top-1 w-5 h-5 rounded-full bg-white shadow-md transition-transform duration-300 ${
                isYearly ? "translate-x-8" : "translate-x-1"
              }`}
            />
          </button>
          <span className={`text-sm font-medium ${isYearly ? "text-[#222222]" : "text-[#6B6B6B]"}`}>
            Yearly
          </span>
          {isYearly && (
            <span className="px-2.5 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
              Save 20%
            </span>
          )}
        </div>

        <div
          ref={ref}
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
        >
          {pricingPlans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative rounded-xl overflow-hidden ${
                plan.highlighted
                  ? "shadow-2xl shadow-primary/25 ring-2 ring-primary/40"
                  : "shadow-md"
              }`}
            >
              {plan.badge && (
                <div
                  className={`absolute top-0 left-0 right-0 text-center py-1.5 text-xs font-bold uppercase tracking-widest ${
                    plan.highlighted ? "gradient-bg text-white" : "bg-gray-100 text-[#666666]"
                  }`}
                >
                  {plan.badge}
                </div>
              )}

              <div
                className={`p-6 lg:p-8 h-full flex flex-col border ${
                  plan.highlighted
                    ? "bg-[#111111] border-primary/30 text-white"
                    : "bg-white border-gray-100"
                } ${plan.badge ? "pt-12" : ""}`}
              >
                <div>
                  <h3
                    className={`font-heading text-2xl font-bold ${
                      plan.highlighted ? "text-white" : "text-[#222222]"
                    }`}
                  >
                    {plan.name}
                  </h3>
                  <p
                    className={`text-sm mt-1 ${
                      plan.highlighted ? "text-white/60" : "text-[#666666]"
                    }`}
                  >
                    {plan.tagline}
                  </p>

                  {/* Price */}
                  <div className="mt-5 mb-6">
                    {plan.price.monthly !== null ? (
                      <div className="flex items-end gap-1">
                        <span
                          className={`font-heading text-5xl font-bold ${
                            plan.highlighted ? "text-white" : "text-[#222222]"
                          }`}
                        >
                          $
                          {isYearly
                            ? plan.price.yearly
                            : plan.price.monthly}
                        </span>
                        <span
                          className={`mb-2 text-sm ${
                            plan.highlighted ? "text-white/50" : "text-[#6B6B6B]"
                          }`}
                        >
                          /mo
                        </span>
                      </div>
                    ) : (
                      <div>
                        <span
                          className={`font-heading text-3xl font-bold ${
                            plan.highlighted ? "text-white" : "text-[#222222]"
                          }`}
                        >
                          Custom
                        </span>
                        <p className={`text-sm mt-1 ${plan.highlighted ? "text-white/50" : "text-[#6B6B6B]"}`}>
                          Tailored to your needs
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Divider */}
                  <div className={`h-px mb-6 ${plan.highlighted ? "bg-white/10" : "bg-gray-100"}`} />

                  {/* Features */}
                  <ul className="space-y-3 flex-1">
                    {plan.features.map((feature, j) => (
                      <li key={j} className="flex items-start gap-2.5">
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                          plan.highlighted ? "bg-primary/20" : "bg-primary/10"
                        }`}>
                          <Check className="w-3 h-3 text-primary" />
                        </div>
                        <span className={`text-sm ${plan.highlighted ? "text-white/80" : "text-[#555353]"}`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                    {plan.excluded.map((feature, j) => (
                      <li key={`x-${j}`} className="flex items-start gap-2.5 opacity-40">
                        <div className="w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <X className="w-3 h-3 text-gray-500" />
                        </div>
                        <span className="text-sm text-[#6B6B6B] line-through">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <div className="mt-8">
                  <Link
                    href="/contact"
                    className={`block text-center font-semibold py-3.5 rounded-xl transition-all duration-300 hover:-translate-y-0.5 ${
                      plan.highlighted
                        ? "gradient-bg text-white shadow-lg shadow-primary/30 hover:shadow-xl"
                        : plan.name === "Enterprise"
                        ? "border-2 border-primary text-primary hover:bg-primary hover:text-white"
                        : "bg-[#F8FAF8] text-[#222222] hover:bg-gray-100 border border-gray-200"
                    }`}
                  >
                    {plan.cta}
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-[#6B6B6B]">
          All prices in USD. Need something custom?{" "}
          <Link href="/contact" className="text-primary hover:underline font-medium">
            Let&apos;s talk.
          </Link>
        </p>
      </div>
    </section>
  );
}
