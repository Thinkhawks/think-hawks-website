"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import {
  ArrowRight, Check, Award, BookOpen, Monitor, Users,
  MessageSquare, Star, Plus, Minus, Play, Clock,
  ChevronRight, Zap, Shield, TrendingUp, Store, Package, ShoppingBag, Gift,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { academyModules, academyFeatures, academyFaqs, academyTracks } from "@/lib/data";

const iconMap: Record<string, React.ElementType> = {
  Users, BookOpen, Monitor, Award, MessageSquare, Zap, Shield, TrendingUp,
  Store, Package, ShoppingBag, Gift,
};

const outcomes = [
  "Launch a live, revenue-generating store or marketplace shop",
  "Sell on Shopify, Amazon, eBay, or Etsy with confidence",
  "Run profitable Meta and TikTok Ads independently",
  "Source winning products from local and international suppliers",
  "Build a brand customers trust and return to",
  "Set up JazzCash, EasyPaisa, and card payment gateways",
  "Rank your listings in Amazon, eBay, and Etsy search",
  "Automate key operations with email flows and store apps",
  "Understand analytics and make data-driven growth decisions",
  "Scale from Rs. 0 to Rs. 500K+ monthly revenue",
];

const programStats = [
  { value: "8", label: "Weeks", sub: "per program" },
  { value: "12", label: "Modules", sub: "structured curriculum" },
  { value: "30+", label: "Hours", sub: "of live instruction" },
  { value: "100%", label: "Practical", sub: "build while you learn" },
];

export function AcademyPageContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [expandedModule, setExpandedModule] = useState<number | null>(null);
  const { ref: statsRef, inView: statsInView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <>
      {/* ── Hero ────────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-[#111111]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a1505] via-[#111111] to-[#1a1a2e]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-amber-400/5 rounded-full blur-[100px] pointer-events-none" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(142,169,122,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(142,169,122,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 lg:pt-36 lg:pb-28">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400/15 border border-amber-400/30 text-amber-400 text-sm font-medium mb-6"
              >
                <Award className="w-3.5 h-3.5" />
                Think Hawks Academy
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight"
              >
                Build a Profitable
                <br />
                <span className="text-primary">E-commerce Business</span>
                <br />
                From Scratch
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-6 text-white/65 text-lg leading-relaxed max-w-xl"
              >
                Pakistan&apos;s most practical e-commerce training. Separate programs for Shopify,
                Amazon, eBay, and Etsy. No fluff, no theory. You build a real store, run real ads,
                and generate real revenue — before you graduate.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-5 grid grid-cols-2 gap-2"
              >
                {["Shopify, Amazon, eBay & Etsy", "Structured Modules", "1-on-1 Mentorship", "Industry Certificate"].map((t) => (
                  <span key={t} className="flex items-center gap-1.5 text-sm text-white/60">
                    <Check className="w-4 h-4 text-primary flex-shrink-0" />
                    {t}
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
                  className="inline-flex items-center gap-2 gradient-bg text-white font-semibold px-7 py-3.5 rounded-xl shadow-lg shadow-primary/30 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 text-sm"
                >
                  Enroll Now — Limited Seats
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="#curriculum"
                  className="inline-flex items-center gap-2 border border-white/20 text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-white/10 hover:-translate-y-0.5 transition-all duration-300 text-sm"
                >
                  <Play className="w-4 h-4" />
                  View Curriculum
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="mt-10 flex items-center gap-6 pt-8 border-t border-white/10"
              >
                <div className="flex -space-x-2">
                  {["HB", "OS", "ZK", "AM", "SR"].map((init, i) => (
                    <div key={i} className="w-9 h-9 gradient-bg rounded-full flex items-center justify-center border-2 border-[#111111] text-white text-xs font-bold">
                      {init}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1 mb-1">
                    {[1,2,3,4,5].map(s => <Star key={s} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />)}
                  </div>
                  <p className="text-white/50 text-xs">Rated 5.0 by graduates</p>
                </div>
              </motion.div>
            </div>

            {/* Right — Program Card */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="glass-dark rounded-xl p-8 border border-white/10"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-heading font-bold text-white text-sm">Flagship Program</p>
                  <p className="text-white/50 text-xs">Shopify Mastery · Amazon, eBay & Etsy also taught</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 mb-6">
                {programStats.map((s, i) => (
                  <div key={i} className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <p className="font-heading text-2xl font-bold text-white">{s.value}</p>
                    <p className="text-primary text-xs font-semibold">{s.label}</p>
                    <p className="text-white/40 text-xs mt-0.5">{s.sub}</p>
                  </div>
                ))}
              </div>

              <div className="space-y-3 mb-6">
                {[
                  { icon: Monitor, text: "Online (Zoom) + Lahore sessions" },
                  { icon: Clock, text: "2 sessions per week, all recorded" },
                  { icon: Award, text: "Certificate on completion" },
                  { icon: Users, text: "Private alumni community access" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-4 h-4 text-primary" />
                    </div>
                    <p className="text-white/70 text-sm">{item.text}</p>
                  </div>
                ))}
              </div>

              <Link
                href="/contact"
                className="block text-center gradient-bg text-white font-semibold py-3.5 rounded-xl shadow-lg shadow-primary/30 hover:shadow-xl transition-all duration-300"
              >
                Apply for Next Batch
              </Link>
              <p className="text-center text-white/30 text-xs mt-3">Seats are limited — batch fills fast</p>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 overflow-hidden pointer-events-none">
          <svg viewBox="0 0 1440 60" fill="none" className="w-full" preserveAspectRatio="none">
            <path d="M0 60L1440 60L1440 20C1200 55 720 0 360 35C180 52 0 20 0 20V60Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* ── What You'll Achieve ──────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeader
                badge="Program Outcomes"
                title="What You'll Be Able to Do After "
                highlight="Graduating"
                centered={false}
                description="This isn't a passive video course. By graduation day, you will have built and launched a real store or marketplace shop — with real products, real marketing, and real revenue."
              />
              <div className="mt-8 space-y-3">
                {outcomes.map((o, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.06 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-6 h-6 gradient-bg rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-3.5 h-3.5 text-white" />
                    </div>
                    <p className="text-[#333333] text-sm">{o}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-[#F8FAF8] rounded-xl p-6">
                <p className="font-heading font-bold text-[#222222] mb-2">Graduate Success Story</p>
                <p className="text-sm text-[#666666] leading-relaxed italic mb-4">
                  &quot;I enrolled with zero e-commerce knowledge. By Week 4 I had my store live. Within four months I was generating Rs. 800K per month. Think Hawks Academy changed my life.&quot;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 gradient-bg rounded-full flex items-center justify-center text-white font-bold text-sm">OS</div>
                  <div>
                    <p className="font-semibold text-[#222222] text-sm">Omar Siddiqui</p>
                    <p className="text-xs text-[#666666]">Graduate · SwiftCart PK · Rs. 800K/month</p>
                  </div>
                  <div className="ml-auto flex gap-0.5">
                    {[1,2,3,4,5].map(s => <Star key={s} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />)}
                  </div>
                </div>
              </div>

              <div className="bg-[#F8FAF8] rounded-xl p-6">
                <p className="font-heading font-bold text-[#222222] mb-2">Another Graduate</p>
                <p className="text-sm text-[#666666] leading-relaxed italic mb-4">
                  &quot;I was a fresh graduate with no startup capital. Think Hawks Academy taught me how to start with dropshipping, validate products cheaply, and scale only what works. My store now earns more than my corporate job ever did.&quot;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 gradient-bg rounded-full flex items-center justify-center text-white font-bold text-sm">HB</div>
                  <div>
                    <p className="font-semibold text-[#222222] text-sm">Hira Baig</p>
                    <p className="text-xs text-[#666666]">Graduate · GlowLux Beauty · PKR 1.2M Q1</p>
                  </div>
                  <div className="ml-auto flex gap-0.5">
                    {[1,2,3,4,5].map(s => <Star key={s} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Program Features ─────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-[#F8FAF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Why Our Academy"
            title="More Than a Course."
            highlight=" A Complete Launch System."
            description="Every feature of the Think Hawks Academy is designed to get you to one outcome: a profitable, running e-commerce business — whichever platform you choose."
          />

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {academyFeatures.map((f, i) => {
              const Icon = iconMap[f.icon] || Users;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center mb-5 shadow-lg shadow-primary/20">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-heading font-bold text-[#222222] text-lg mb-2">{f.title}</h3>
                  <p className="text-sm text-[#666666] leading-relaxed">{f.description}</p>
                </motion.div>
              );
            })}
            {/* Extra feature card */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: academyFeatures.length * 0.1 }}
              className="bg-[#111111] rounded-xl p-6 border border-primary/20 sm:col-span-2 lg:col-span-1"
            >
              <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-5">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading font-bold text-white text-lg mb-2">Alumni Network & Job Board</h3>
              <p className="text-sm text-white/60 leading-relaxed">Join a growing network of Think Hawks Academy graduates and access freelance e-commerce opportunities, store management roles, and business partnerships.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Programs ─────────────────────────────────────────────────────── */}
      <section id="programs" className="py-20 lg:py-28 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            light
            badge="Our Programs"
            title="Four Platforms. "
            highlight="Four Programs."
            description="Shopify, Amazon, eBay, and Etsy are each taught as a separate program with their own modules and live sessions. Take one, or combine several."
          />

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {academyTracks.map((track, i) => {
              const Icon = iconMap[track.icon] || Store;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.09 }}
                  className={`relative flex flex-col glass-dark rounded-xl p-6 border transition-all duration-300 ${track.flagship ? "border-primary/40" : "border-white/10 hover:border-primary/30"}`}
                >
                  {track.flagship && (
                    <span className="absolute -top-2.5 right-5 px-2.5 py-0.5 rounded-full bg-amber-400 text-[#111111] text-[10px] font-bold tracking-wide">
                      MOST POPULAR
                    </span>
                  )}

                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${track.color} flex items-center justify-center mb-5 shadow-sm`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  <h3 className="font-heading font-bold text-white text-lg leading-snug">{track.title}</h3>
                  <p className="flex items-center gap-3 text-xs text-primary font-semibold mt-1.5 mb-3">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {track.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <BookOpen className="w-3 h-3" />
                      {track.modules}
                    </span>
                  </p>
                  <p className="text-sm text-white/60 leading-relaxed mb-4">{track.summary}</p>

                  <ul className="space-y-2 mb-6">
                    {track.topics.map((t, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-white/75">
                        <ChevronRight className="w-3.5 h-3.5 text-primary flex-shrink-0 mt-0.5" />
                        {t}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contact"
                    className="mt-auto block text-center border border-white/20 text-white font-semibold py-2.5 rounded-xl text-sm hover:bg-white/10 transition-all duration-300"
                  >
                    Enroll in {track.platform}
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Curriculum ───────────────────────────────────────────────────── */}
      <section id="curriculum" className="py-20 lg:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Shopify Mastery Curriculum"
            title="12 Modules to "
            highlight="E-commerce Mastery"
            description="The full module breakdown of our flagship Shopify program — a structured 8-week journey from complete beginner to confident, profitable store owner. Ask us for the Amazon, eBay, or Etsy outlines."
          />

          <div className="mt-10 space-y-3">
            {academyModules.map((mod, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: Math.min(i * 0.05, 0.4) }}
                className={`rounded-xl border overflow-hidden transition-all ${expandedModule === i ? "border-primary/30 shadow-md" : "border-gray-100"}`}
              >
                <button
                  onClick={() => setExpandedModule(expandedModule === i ? null : i)}
                  className="flex items-center gap-4 w-full text-left p-5 cursor-pointer hover:bg-[#F8FAF8] transition-colors"
                >
                  <span className={`font-heading text-2xl font-black leading-none ${expandedModule === i ? "text-primary" : "text-primary/20"}`}>
                    {mod.number}
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="font-heading font-bold text-[#222222] text-sm">{mod.title}</p>
                    <p className="text-xs text-[#6B6B6B] mt-0.5 flex items-center gap-1.5">
                      <Clock className="w-3 h-3" />
                      {mod.duration}
                    </p>
                  </div>
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-all ${expandedModule === i ? "gradient-bg text-white" : "bg-gray-50 text-[#666666]"}`}>
                    {expandedModule === i ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                <AnimatePresence>
                  {expandedModule === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 pt-0">
                        <div className="h-px bg-gray-100 mb-4" />
                        <p className="text-sm text-[#666666] leading-relaxed mb-4">{mod.description}</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {mod.topics.map((t, j) => (
                            <div key={j} className="flex items-center gap-2 text-sm text-[#444444]">
                              <ChevronRight className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                              {t}
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 gradient-bg text-white font-semibold px-8 py-4 rounded-xl shadow-lg shadow-primary/30 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
            >
              Enroll in the Program
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Enrollment CTA ───────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-[#111111]" ref={statsRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={statsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400/15 border border-amber-400/30 text-amber-400 text-sm font-medium mb-6"
              >
                <Award className="w-3.5 h-3.5" />
                Limited Enrollment — Next Batch Starting Soon
              </motion.span>

              <motion.h2
                initial={{ opacity: 0, y: 24 }}
                animate={statsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-5"
              >
                Invest in Yourself.{" "}
                <span className="text-primary">Build an Income</span>{" "}
                That Lasts.
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 24 }}
                animate={statsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-white/65 text-lg leading-relaxed mb-8"
              >
                Our graduates have launched stores that earn more than most corporate salaries — in
                months, not years. This program gives you the knowledge, systems, mentorship, and
                accountability to do the same.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={statsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-wrap gap-4"
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 gradient-bg text-white font-semibold px-8 py-4 rounded-xl shadow-lg shadow-primary/30 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
                >
                  Apply Now — Secure Your Seat
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={statsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="mt-8 flex flex-wrap gap-5"
              >
                {[
                  "Flexible payment plans",
                  "No prior experience needed",
                  "Recorded sessions available",
                ].map((t, i) => (
                  <span key={i} className="flex items-center gap-2 text-sm text-white/50">
                    <Check className="w-4 h-4 text-primary" />
                    {t}
                  </span>
                ))}
              </motion.div>
            </div>

            <div className="space-y-4">
              {[
                { q: "When does the next batch start?", a: "We run batches quarterly. Contact us via WhatsApp to get the exact start date and reserve your seat before it fills." },
                { q: "Is there a payment plan available?", a: "Yes — we offer 2 and 3 installment payment plans to make enrollment accessible. The full program fee and installment options are shared during your onboarding call." },
                { q: "What if I miss a session?", a: "All sessions are recorded and uploaded to your student portal within 24 hours of the live session. You can catch up at any time and ask questions in the student support group." },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 30 }}
                  animate={statsInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="glass-dark rounded-xl p-5 border border-white/10"
                >
                  <p className="font-heading font-semibold text-white text-sm mb-2">{item.q}</p>
                  <p className="text-white/55 text-sm leading-relaxed">{item.a}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQs ─────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="FAQ"
            title="Everything You Want to Know About "
            highlight="the Academy"
          />

          <div className="mt-10 space-y-3">
            {academyFaqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.06 }}
                className={`bg-[#F8FAF8] rounded-xl border overflow-hidden transition-all ${openFaq === i ? "border-primary/30" : "border-gray-100"}`}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="flex items-center justify-between w-full text-left p-5 cursor-pointer"
                >
                  <span className="font-heading font-semibold text-[#222222] text-sm pr-4">{faq.question}</span>
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-all ${openFaq === i ? "gradient-bg text-white" : "bg-white text-[#666666]"}`}>
                    {openFaq === i ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 pt-0">
                        <div className="h-px bg-gray-200 mb-4" />
                        <p className="text-[#666666] text-sm leading-relaxed">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 p-6 bg-primary/5 border border-primary/15 rounded-xl text-center">
            <p className="text-[#444444] text-sm mb-3">Still have questions? We&apos;re happy to help.</p>
            <a
              href="https://wa.me/923284580621"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 gradient-bg text-white font-semibold px-6 py-2.5 rounded-xl text-sm hover:shadow-lg transition-all"
            >
              Chat on WhatsApp
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
