"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { portfolioItems } from "@/lib/data";

export function PortfolioSection() {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true });

  return (
    <section id="portfolio" className="py-20 lg:py-28 bg-[#F8FAF8]">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Real Client Results"
          title="Proof, Not "
          highlight="Promises"
          description="Unedited dashboard screenshots from stores and campaigns we actually run. No invented numbers — just what the client's own tools report."
        />

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {portfolioItems.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="grid grid-cols-2 gap-px bg-gray-100">
                {item.proof.slice(0, 2).map((p) => (
                  <div key={p.src} className="relative h-40 bg-white overflow-hidden">
                    <Image
                      src={p.src}
                      alt={`${item.client} — ${p.stat}`}
                      width={p.w}
                      height={p.h}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                ))}
              </div>

              <div className="p-7">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold">
                    {item.category}
                  </span>
                  <span className="text-xs font-semibold text-[#888888] uppercase tracking-wide">
                    {item.client}
                  </span>
                </div>
                <h3 className="font-heading font-bold text-[#222222] text-xl mb-2 leading-tight">
                  {item.title}
                </h3>
                <p className="text-sm text-[#666666] leading-relaxed mb-5">{item.description}</p>

                <div className="grid grid-cols-2 gap-3 mb-5">
                  {item.proof.slice(0, 2).map((p) => (
                    <div key={p.label} className="bg-[#F8FAF8] rounded-xl p-3">
                      <p className="font-heading font-bold text-primary text-lg leading-none">{p.stat}</p>
                      <p className="text-[11px] text-[#888888] mt-1">{p.label}</p>
                    </div>
                  ))}
                </div>

                <Link
                  href="/portfolio"
                  className="inline-flex items-center gap-1.5 text-primary text-sm font-semibold group-hover:gap-2.5 transition-all"
                >
                  View Full Case Study
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

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
