"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Play, CheckCircle, TrendingUp, Users, Star } from "lucide-react";

const stats = [
  { value: "200+", label: "Happy Clients" },
  { value: "350+", label: "Projects Done" },
  { value: "97%", label: "Retention Rate" },
];

const floatingCards = [
  {
    icon: TrendingUp,
    label: "Organic Traffic",
    value: "+247%",
    color: "text-green-500",
    bg: "bg-green-50",
    delay: 0.2,
    position: "top-16 right-0",
  },
  {
    icon: Star,
    label: "Client Rating",
    value: "5.0 ★",
    color: "text-amber-500",
    bg: "bg-amber-50",
    delay: 0.5,
    position: "bottom-24 right-16",
  },
  {
    icon: Users,
    label: "ROI Generated",
    value: "+186%",
    color: "text-primary",
    bg: "bg-primary/10",
    delay: 0.8,
    position: "top-[42%] left-2",
  },
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#111111]">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0d1a0d] via-[#111111] to-[#1a1a2e]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-primary-light/5 rounded-full blur-[80px] pointer-events-none" />
        <div className="absolute top-1/3 left-0 w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-[80px] pointer-events-none" />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(142,169,122,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(142,169,122,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20 lg:pt-32 lg:pb-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/15 border border-primary/30 text-primary text-sm font-medium mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Trusted by 200+ businesses worldwide
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight tracking-tight"
            >
              Elevate Your{" "}
              <span className="relative inline-block">
                <span className="gradient-text">Brand</span>
              </span>
              <br />
              Above the{" "}
              <span className="gradient-text">Competition</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-white/65 text-lg leading-relaxed max-w-xl"
            >
              Helping ambitious businesses dominate the digital landscape through strategic
              marketing, creative design, powerful websites, and data-driven advertising.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-4 flex flex-wrap gap-3"
            >
              {["SEO & SEM", "Social Media", "Web Development", "Paid Ads"].map((item) => (
                <span
                  key={item}
                  className="flex items-center gap-1.5 text-sm text-white/60"
                >
                  <CheckCircle className="w-4 h-4 text-primary" />
                  {item}
                </span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 gradient-bg text-white font-semibold px-7 py-3.5 rounded-xl shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-0.5 transition-all duration-300 text-sm"
              >
                Get Free Consultation
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 border border-white/20 text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-white/10 hover:-translate-y-0.5 transition-all duration-300 text-sm"
              >
                View Our Services
              </Link>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-12 flex items-center gap-8 pt-8 border-t border-white/10"
            >
              {stats.map((stat, i) => (
                <div key={i}>
                  <p className="font-heading text-2xl font-bold text-white">{stat.value}</p>
                  <p className="text-white/50 text-xs mt-0.5">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Main visual */}
              <HeroIllustration />

              {/* Floating cards – two-layer pattern: outer motion.div handles
                  entrance (opacity + y), inner div carries the CSS float animation.
                  Separate layers avoid CSS keyframes and Framer Motion competing
                  for `transform` on the same node. */}
              {floatingCards.map((card, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: card.delay + 0.6 }}
                  className={`absolute ${card.position}`}
                >
                  <div
                    className="animate-float glass rounded-2xl px-4 py-3 shadow-2xl min-w-[120px]"
                    style={{ animationDelay: `${i * 0.4}s` }}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <div className={`w-6 h-6 ${card.bg} rounded-lg flex items-center justify-center`}>
                        <card.icon className={`w-3.5 h-3.5 ${card.color}`} />
                      </div>
                      <span className={`text-base font-bold font-heading ${card.color}`}>
                        {card.value}
                      </span>
                    </div>
                    <p className="text-[11px] text-[#555353] font-medium">{card.label}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom wave — pointer-events-none so it never blocks the stats row above */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden pointer-events-none">
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 60L1440 60L1440 20C1200 55 720 0 360 35C180 52 0 20 0 20V60Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}

function HeroIllustration() {
  return (
    <svg viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Outer ring */}
      <circle cx="250" cy="250" r="220" stroke="#8EA97A" strokeWidth="1" strokeOpacity="0.2" strokeDasharray="8 8" />
      <circle cx="250" cy="250" r="180" stroke="#8EA97A" strokeWidth="1" strokeOpacity="0.1" />

      {/* Center dashboard card */}
      <rect x="130" y="140" width="240" height="160" rx="20" fill="#1a2a1a" stroke="#8EA97A" strokeWidth="1.5" strokeOpacity="0.4" />
      <rect x="130" y="140" width="240" height="160" rx="20" fill="url(#cardGrad)" />

      {/* Dashboard header */}
      <rect x="150" y="158" width="80" height="10" rx="5" fill="#8EA97A" fillOpacity="0.8" />
      <text x="150" y="170" fill="#8EA97A" fontSize="10" fontFamily="system-ui" fillOpacity="0.8">Analytics</text>

      {/* Bar chart */}
      <rect x="155" y="205" width="18" height="60" rx="5" fill="#8EA97A" fillOpacity="0.4" />
      <rect x="182" y="190" width="18" height="75" rx="5" fill="#8EA97A" fillOpacity="0.6" />
      <rect x="209" y="175" width="18" height="90" rx="5" fill="#8EA97A" fillOpacity="0.8" />
      <rect x="236" y="160" width="18" height="105" rx="5" fill="#8EA97A" />
      <rect x="263" y="180" width="18" height="85" rx="5" fill="#A9C193" fillOpacity="0.7" />
      <rect x="290" y="200" width="18" height="65" rx="5" fill="#8EA97A" fillOpacity="0.5" />

      {/* Trend line */}
      <polyline
        points="164,200 191,185 218,170 245,155 272,168 299,188"
        stroke="#A9C193"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Dots on trend line */}
      <circle cx="245" cy="155" r="4" fill="#A9C193" />
      <circle cx="191" cy="185" r="3" fill="#A9C193" fillOpacity="0.6" />
      <circle cx="299" cy="188" r="3" fill="#A9C193" fillOpacity="0.6" />

      {/* Secondary card - SEO */}
      <rect x="60" y="290" width="150" height="100" rx="16" fill="#1a2a1a" stroke="#8EA97A" strokeWidth="1" strokeOpacity="0.3" />
      <circle cx="90" cy="325" r="22" stroke="#8EA97A" strokeWidth="6" strokeOpacity="0.2" fill="none" />
      <circle cx="90" cy="325" r="22" stroke="#8EA97A" strokeWidth="6" strokeDasharray="88 30" strokeLinecap="round" fill="none" />
      <text x="82" y="329" fill="white" fontSize="10" fontFamily="system-ui" fontWeight="bold">82%</text>
      <rect x="120" y="315" width="70" height="8" rx="4" fill="#8EA97A" fillOpacity="0.6" />
      <rect x="120" y="329" width="50" height="6" rx="3" fill="#ffffff" fillOpacity="0.2" />
      <text x="120" y="313" fill="#8EA97A" fontSize="9" fontFamily="system-ui" fillOpacity="0.8">SEO Score</text>
      <rect x="80" y="360" width="110" height="20" rx="10" fill="#8EA97A" fillOpacity="0.15" />
      <text x="92" y="374" fill="#8EA97A" fontSize="9" fontFamily="system-ui">↑ Top 3 Rankings</text>

      {/* Secondary card - Social */}
      <rect x="290" y="300" width="150" height="95" rx="16" fill="#1a2a1a" stroke="#8EA97A" strokeWidth="1" strokeOpacity="0.3" />
      <text x="310" y="325" fill="#8EA97A" fontSize="10" fontFamily="system-ui" fillOpacity="0.9">Social Reach</text>
      <text x="310" y="348" fill="white" fontSize="22" fontFamily="system-ui" fontWeight="bold">85k</text>
      <text x="365" y="348" fill="#8EA97A" fontSize="12" fontFamily="system-ui">+</text>
      <rect x="310" y="358" width="110" height="6" rx="3" fill="#ffffff" fillOpacity="0.1" />
      <rect x="310" y="358" width="75" height="6" rx="3" fill="#8EA97A" fillOpacity="0.6" />
      <text x="310" y="380" fill="#8EA97A" fontSize="9" fontFamily="system-ui" fillOpacity="0.7">Followers this month</text>

      {/* Decorative dots */}
      <circle cx="80" cy="130" r="3" fill="#8EA97A" fillOpacity="0.4" />
      <circle cx="100" cy="120" r="5" fill="#8EA97A" fillOpacity="0.2" />
      <circle cx="420" cy="180" r="4" fill="#8EA97A" fillOpacity="0.3" />
      <circle cx="400" cy="380" r="6" fill="#8EA97A" fillOpacity="0.15" />
      <circle cx="60" cy="200" r="4" fill="#A9C193" fillOpacity="0.3" />

      {/* Connecting lines */}
      <line x1="210" y1="300" x2="170" y2="290" stroke="#8EA97A" strokeWidth="1" strokeOpacity="0.2" strokeDasharray="4 4" />
      <line x1="320" y1="300" x2="340" y2="300" stroke="#8EA97A" strokeWidth="1" strokeOpacity="0.2" strokeDasharray="4 4" />

      <defs>
        <linearGradient id="cardGrad" x1="130" y1="140" x2="370" y2="300" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1a2a1a" stopOpacity="0.95" />
          <stop offset="1" stopColor="#0d1a0d" stopOpacity="0.95" />
        </linearGradient>
      </defs>
    </svg>
  );
}
