"use client";

import { motion } from "framer-motion";

const clients = [
  "TechPulse", "Bloom Retail", "Apex Group", "StyleBox", "PrimeCare",
  "GreenTech", "Nexus Corp", "UrbanMart", "VisionX", "PeakBrands",
];

export function ClientLogos() {
  return (
    <section className="py-12 bg-white border-b border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-medium text-[#6B6B6B] uppercase tracking-widest mb-8">
          Trusted by 50+ businesses worldwide
        </p>
      </div>

      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="flex">
          <motion.div
            className="flex items-center gap-16 whitespace-nowrap"
            animate={{ x: [0, -1600] }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {[...clients, ...clients, ...clients].map((client, i) => (
              <div
                key={`${client}-${i}`}
                className="flex items-center gap-2 text-[#BBBBBB] hover:text-[#8EA97A] transition-colors duration-300 cursor-default flex-shrink-0"
              >
                <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 opacity-50">
                  <polygon points="10,1 12.9,7 19.5,7.6 14.5,12 16.2,18.5 10,15 3.8,18.5 5.5,12 0.5,7.6 7.1,7" />
                </svg>
                <span className="font-heading font-semibold text-sm tracking-wide">{client}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
