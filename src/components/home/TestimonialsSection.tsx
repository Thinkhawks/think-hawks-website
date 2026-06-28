"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { testimonials } from "@/lib/data";

const avatarColors = [
  "from-primary to-primary-light",
  "from-blue-500 to-blue-600",
  "from-slate-500 to-slate-600",
  "from-amber-500 to-amber-600",
  "from-rose-500 to-rose-600",
  "from-teal-500 to-teal-600",
];

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrent((c) => (c + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const prev = () => {
    setIsAutoPlaying(false);
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  };
  const next = () => {
    setIsAutoPlaying(false);
    setCurrent((c) => (c + 1) % testimonials.length);
  };

  return (
    <section className="py-20 lg:py-28 bg-[#111111] relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0d1a0d] via-[#111111] to-[#1a1222]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/8 rounded-full blur-[100px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Client Success"
          title="What Our Clients "
          highlight="Say About Us"
          description="Real results, real relationships. Here's what business owners say about partnering with Think Hawks."
          light
        />

        <div className="mt-14">
          {/* Main testimonial */}
          <div className="relative max-w-3xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <div className="glass-dark rounded-xl p-8 lg:p-12 relative">
                  <Quote className="w-10 h-10 text-primary/40 mb-6" />

                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonials[current].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                    ))}
                  </div>

                  <p className="text-white/85 text-lg leading-relaxed mb-8 font-light italic">
                    &ldquo;{testimonials[current].text}&rdquo;
                  </p>

                  <div className="flex items-center gap-4">
                    <div
                      className={`w-14 h-14 rounded-full bg-gradient-to-br ${avatarColors[current % avatarColors.length]} flex items-center justify-center flex-shrink-0 shadow-lg`}
                    >
                      <span className="font-heading font-bold text-white text-sm">
                        {testimonials[current].avatar}
                      </span>
                    </div>
                    <div>
                      <p className="font-heading font-bold text-white">
                        {testimonials[current].name}
                      </p>
                      <p className="text-white/50 text-sm">
                        {testimonials[current].role} at {testimonials[current].company}
                      </p>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-xs text-primary">{testimonials[current].country}</span>
                        <span className="w-1 h-1 rounded-full bg-white/30" />
                        <span className="text-xs text-white/40">{testimonials[current].industry}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-primary hover:bg-primary/10 transition-all cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setIsAutoPlaying(false); setCurrent(i); }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    i === current ? "w-6 bg-primary" : "bg-white/25 hover:bg-white/50"
                  }`}
                />
              ))}

              <button
                onClick={next}
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-primary hover:bg-primary/10 transition-all cursor-pointer"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Mini cards grid */}
          <div className="mt-14 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {testimonials.map((t, i) => (
              <button
                key={t.id}
                onClick={() => { setIsAutoPlaying(false); setCurrent(i); }}
                className={`p-3 rounded-xl border text-left transition-all duration-200 cursor-pointer ${
                  i === current
                    ? "border-primary bg-primary/10"
                    : "border-white/10 bg-white/5 hover:border-white/30"
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-full bg-gradient-to-br ${avatarColors[i % avatarColors.length]} flex items-center justify-center mb-2`}
                >
                  <span className="text-xs font-bold text-white">{t.avatar}</span>
                </div>
                <p className="text-white/80 text-xs font-semibold leading-tight">{t.name}</p>
                <p className="text-white/35 text-[10px] mt-0.5 leading-tight">{t.company}</p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
