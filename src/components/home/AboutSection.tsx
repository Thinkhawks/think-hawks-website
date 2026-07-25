"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import { ArrowRight, CheckCircle, Rocket, Globe2, Shield } from "lucide-react";

const highlights = [
  { icon: Rocket, text: "Results-driven strategies for every budget" },
  { icon: Globe2, text: "Serving clients globally, based in Lahore" },
  { icon: Shield, text: "Transparent, ethical, and data-backed approach" },
  { icon: CheckCircle, text: "Long-term partnerships, not one-off campaigns" },
];

export function AboutSection() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section id="about" className="py-20 lg:py-28 bg-white overflow-hidden">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Visual side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="relative pb-8 pr-4"
          >
            <div className="relative bg-[#F8FAF8] rounded-xl p-8 overflow-hidden">
              {/* Abstract visual */}
              <div className="aspect-square max-w-md mx-auto relative">
                <svg viewBox="0 0 400 400" className="w-full h-full">
                  {/* Background circles */}
                  <circle cx="200" cy="200" r="180" fill="#8EA97A" fillOpacity="0.05" />
                  <circle cx="200" cy="200" r="140" fill="#8EA97A" fillOpacity="0.08" />

                  {/* Hawk silhouette stylized */}
                  <g transform="translate(90, 70) scale(1.1)">
                    <path
                      d="M100 30 L130 80 L160 20 L180 90 L200 40 L190 110 L220 100 L200 140 L170 130 L160 170 L140 140 L120 170 L110 140 L80 150 L70 110 L100 120 L90 90 L120 100 L100 60 L80 80 Z"
                      fill="#8EA97A"
                      fillOpacity="0.25"
                    />
                    {/* Eye */}
                    <circle cx="155" cy="55" r="8" fill="#8EA97A" fillOpacity="0.5" />
                    <circle cx="155" cy="55" r="4" fill="#6E8960" fillOpacity="0.7" />
                  </g>

                  {/* Stats cards overlay */}
                  <rect x="30" y="250" width="140" height="80" rx="16" fill="white" filter="url(#shadow1)" />
                  <text x="55" y="280" fill="#8EA97A" fontSize="20" fontWeight="bold" fontFamily="system-ui">2+</text>
                  <text x="55" y="298" fill="#666666" fontSize="12" fontFamily="system-ui">Years of Experience</text>
                  <rect x="55" y="308" width="80" height="5" rx="2.5" fill="#8EA97A" fillOpacity="0.3" />

                  <rect x="230" y="50" width="140" height="80" rx="16" fill="white" filter="url(#shadow1)" />
                  <text x="255" y="80" fill="#8EA97A" fontSize="20" fontWeight="bold" fontFamily="system-ui">25+</text>
                  <text x="255" y="98" fill="#666666" fontSize="12" fontFamily="system-ui">Projects Delivered</text>
                  <rect x="255" y="108" width="90" height="5" rx="2.5" fill="#8EA97A" fillOpacity="0.5" />

                  <rect x="230" y="270" width="140" height="80" rx="16" fill="white" filter="url(#shadow1)" />
                  <text x="255" y="300" fill="#8EA97A" fontSize="20" fontWeight="bold" fontFamily="system-ui">97%</text>
                  <text x="255" y="318" fill="#666666" fontSize="12" fontFamily="system-ui">Client Retention</text>
                  <rect x="255" y="328" width="90" height="5" rx="2.5" fill="#8EA97A" fillOpacity="0.8" />

                  <defs>
                    <filter id="shadow1" x="-10%" y="-10%" width="120%" height="120%">
                      <feDropShadow dx="0" dy="4" stdDeviation="8" floodOpacity="0.08" />
                    </filter>
                  </defs>
                </svg>
              </div>
            </div>

            <div className="absolute bottom-0 right-0 glass rounded-xl px-5 py-3 shadow-xl border border-primary/20">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 gradient-bg rounded-lg flex items-center justify-center">
                  <span className="text-white text-sm font-bold">TH</span>
                </div>
                <div>
                  <p className="font-heading font-bold text-sm text-[#222222]">Think Hawks</p>
                  <p className="text-[11px] text-[#666666]">Dominate the Digital Sky</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              Our Story
            </span>

            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#222222] leading-tight mb-5">
              Built to Help Brands{" "}
              <span className="text-primary">Soar Higher</span>
            </h2>

            <p className="text-[#666666] text-lg leading-relaxed mb-4">
              Think Hawks was founded with a single mission: to make world-class digital marketing
              accessible to businesses of all sizes. We combine strategic thinking with creative
              execution to deliver campaigns that don&apos;t just look good — they <em>perform</em>.
            </p>

            <p className="text-[#666666] leading-relaxed mb-8">
              Based in Lahore&apos;s vibrant business hub at Al Hafeez Shopping Mall, our team of
              passionate marketers, designers, and developers serves clients across Pakistan and
              internationally. We&apos;re not just a service provider — we&apos;re your growth partner.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {highlights.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <item.icon className="w-4 h-4 text-primary" />
                  </div>
                  <p className="text-sm text-[#555353] leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 gradient-bg text-white font-semibold px-7 py-3.5 rounded-xl shadow-md hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5 transition-all duration-300"
            >
              Learn More About Us
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
