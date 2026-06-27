"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Plus, Minus } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { faqs } from "@/lib/data";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section className="py-20 lg:py-28 bg-[#F8FAF8]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="FAQs"
          title="Frequently Asked "
          highlight="Questions"
          description="Everything you need to know about working with Think Hawks. Can't find your answer? Just ask."
        />

        <div ref={ref} className="mt-12 space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className={`bg-white rounded-2xl border overflow-hidden transition-all duration-200 ${
                openIndex === i ? "border-primary/30 shadow-md" : "border-gray-100 shadow-sm"
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="flex items-center justify-between w-full text-left p-5 lg:p-6 cursor-pointer"
              >
                <span className="font-heading font-semibold text-[#222222] text-sm lg:text-base pr-4">
                  {faq.question}
                </span>
                <div
                  className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-200 ${
                    openIndex === i ? "gradient-bg text-white" : "bg-gray-100 text-[#666666]"
                  }`}
                >
                  {openIndex === i ? (
                    <Minus className="w-4 h-4" />
                  ) : (
                    <Plus className="w-4 h-4" />
                  )}
                </div>
              </button>

              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-5 lg:px-6 lg:pb-6 pt-0">
                      <div className="h-px bg-gray-100 mb-4" />
                      <p className="text-[#666666] text-sm leading-relaxed">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
          <p className="text-[#666666] text-sm mb-3">
            Still have questions? We&apos;re happy to help.
          </p>
          <a
            href="mailto:thinkhawks@gmail.com"
            className="inline-flex items-center gap-2 gradient-bg text-white font-semibold px-6 py-2.5 rounded-xl text-sm hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5 transition-all duration-300"
          >
            Email Us Directly
          </a>
        </div>
      </div>
    </section>
  );
}
