"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import {
  ArrowRight, Check, TrendingUp, ShoppingBag,
  Globe, CreditCard, BarChart3, Settings, Zap, Shield,
  Package, Star, Plus, Minus, Store, DollarSign, Monitor,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ecommerceServices, ecommerceStats, ecommerceFaqs } from "@/lib/data";

const iconMap: Record<string, React.ElementType> = {
  Store, Package, BarChart3, Settings, CreditCard, Globe,
  TrendingUp, ShoppingBag, Zap, DollarSign, Monitor,
};

const localServices = [
  "Shopify Store Development (Urdu-friendly UX)",
  "JazzCash & EasyPaisa Payment Integration",
  "Daraz & Shopify Dual-Channel Strategy",
  "COD (Cash on Delivery) System Setup",
  "Local Courier Integration (TCS, Leopards, PostEx)",
  "Pakistani Market Product Research",
  "Urdu/English Bilingual Content",
  "Local Tax & Invoice Configuration",
];

const internationalServices = [
  "Shopify Markets & Multi-Currency Setup",
  "Stripe, PayPal & 2Checkout Integration",
  "International Shipping & DHL/FedEx Setup",
  "Amazon & eBay Marketplace Strategy",
  "VAT/GST Compliance Configuration",
  "Cross-Border SEO & Google Shopping",
  "Currency-Specific Pricing Rules",
  "International Returns Management",
];

const successMetrics = [
  { metric: "Average ROAS", value: "6.8x", note: "across all e-commerce clients" },
  { metric: "Store Launch Time", value: "5 weeks", note: "from brief to live" },
  { metric: "Revenue Generated", value: "$2M+", note: "for clients in last 12 months" },
  { metric: "Client Retention", value: "96%", note: "renew within 3 months" },
  { metric: "Avg Order Value Lift", value: "+38%", note: "after store optimization" },
  { metric: "Cart Abandonment Drop", value: "-44%", note: "with email flows" },
];

export function EcommercePageContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const { ref: metricsRef, inView: metricsInView } = useInView({ threshold: 0.1, triggerOnce: true });
  const { ref: faqRef, inView: faqInView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <>
      {/* ── Hero ────────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-[#111111]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a1a12] via-[#111111] to-[#0d1a2e]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-[80px] pointer-events-none" />
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
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/15 border border-primary/30 text-primary text-sm font-medium mb-6"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                Pakistan&apos;s E-commerce Growth Partner
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight"
              >
                Build, Manage &{" "}
                <span className="text-primary">Scale Your</span>
                <br />
                E-commerce Store
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-6 text-white/65 text-lg leading-relaxed max-w-xl"
              >
                From Shopify store development and product research to multi-channel marketing
                and complete store management — we handle every layer of your e-commerce growth.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-5 flex flex-wrap gap-3"
              >
                {["Shopify Development", "Local Payments", "Meta & TikTok Ads", "Store Management"].map((t) => (
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
                  Get Free Store Audit
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/academy"
                  className="inline-flex items-center gap-2 border border-white/20 text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-white/10 hover:-translate-y-0.5 transition-all duration-300 text-sm"
                >
                  Join Academy Instead
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="mt-10 flex items-center gap-8 pt-8 border-t border-white/10"
              >
                {ecommerceStats.map((s, i) => {
                  const Icon = iconMap[s.icon] || TrendingUp;
                  return (
                    <div key={i}>
                      <Icon className="w-4 h-4 text-primary mb-1" />
                      <p className="font-heading text-2xl font-bold text-white">{s.value}</p>
                      <p className="text-white/50 text-xs mt-0.5">{s.label}</p>
                    </div>
                  );
                })}
              </motion.div>
            </div>

            {/* Right illustration */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 40 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative hidden lg:block"
            >
              <EcommerceIllustration />
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 overflow-hidden pointer-events-none">
          <svg viewBox="0 0 1440 60" fill="none" className="w-full" preserveAspectRatio="none">
            <path d="M0 60L1440 60L1440 20C1200 55 720 0 360 35C180 52 0 20 0 20V60Z" fill="#F8FAF8" />
          </svg>
        </div>
      </section>

      {/* ── Services Grid ────────────────────────────────────────────────── */}
      <section id="services" className="py-20 lg:py-28 bg-[#F8FAF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Our E-commerce Services"
            title="Everything Your Store Needs to "
            highlight="Grow & Win"
            description="End-to-end e-commerce solutions — from store development to marketing to management. One agency, zero gaps."
          />

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ecommerceServices.map((service, i) => {
              const Icon = iconMap[service.icon] || ShoppingBag;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 group"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-heading font-bold text-[#222222] text-lg mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-[#666666] leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.points.map((p, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm text-[#555353]">
                        <Check className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── E-commerce Business Development ─────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeader
                badge="E-commerce Development"
                title="We Don't Just Build Stores."
                highlight=" We Build Revenue Machines."
                centered={false}
                description="Every Shopify store we build is engineered around one goal: converting your visitors into customers at maximum efficiency."
              />

              <div className="mt-8 space-y-5">
                {[
                  { title: "Conversion-Optimized Design", desc: "Every UI element is placed with one goal: turning browsers into buyers. Hero sections, product pages, cart flows — all rigorously tested." },
                  { title: "Sub-2 Second Load Speed", desc: "Slow stores lose sales. We optimize images, scripts, and architecture so your store loads fast on any device, any network." },
                  { title: "Mobile-First Architecture", desc: "60–80% of e-commerce traffic is mobile. We build mobile-first so your store looks and converts perfectly on any screen." },
                  { title: "SEO Built In From Day One", desc: "On-page optimization, schema markup, and site architecture that gives your store the best chance of ranking in Google Shopping and organic search." },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="w-8 h-8 gradient-bg rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="font-heading font-semibold text-[#222222] mb-1">{item.title}</p>
                      <p className="text-sm text-[#666666] leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 gradient-bg text-white font-semibold px-7 py-3.5 rounded-xl shadow-md hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5 transition-all duration-300"
                >
                  Start Your Store Today
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="bg-[#F8FAF8] rounded-xl p-8">
                <p className="font-heading font-bold text-[#222222] mb-5 text-lg">
                  What We Build For You
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    "Custom Shopify Theme",
                    "Product Catalog Setup",
                    "Payment Gateways",
                    "Shipping Rules",
                    "Email Flows",
                    "Discount & Coupon System",
                    "Analytics Integration",
                    "App Configuration",
                    "SEO Optimization",
                    "Speed Optimization",
                    "Mobile Optimization",
                    "Launch Support",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 bg-white rounded-lg px-3 py-2.5 shadow-sm">
                      <Check className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                      <span className="text-xs font-medium text-[#333333]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Store Management ─────────────────────────────────────────────── */}
      <section id="management" className="py-20 lg:py-28 bg-[#F8FAF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Complete Store Management"
            title="Your Store Runs. You "
            highlight="Focus on Growth."
            description="Hand us the keys. Our team handles the day-to-day operations of your Shopify store so you never miss a beat."
          />

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: Package, title: "Product Management", items: ["New product listings", "Inventory tracking", "Variant & pricing updates", "Seasonal collection updates"] },
              { icon: Settings, title: "Order Processing", items: ["Order fulfillment", "Courier booking (TCS, Leopards)", "Tracking updates to customers", "Returns & exchange handling"] },
              { icon: Shield, title: "Customer Support", items: ["Chat & email responses", "Complaint resolution", "Review management", "WhatsApp support setup"] },
              { icon: BarChart3, title: "Performance Monitoring", items: ["Monthly revenue reports", "Conversion analysis", "Traffic & source breakdown", "Improvement recommendations"] },
            ].map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-sm"
              >
                <div className="w-11 h-11 gradient-bg rounded-xl flex items-center justify-center mb-5">
                  <card.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-heading font-bold text-[#222222] mb-4">{card.title}</h3>
                <ul className="space-y-2.5">
                  {card.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-[#666666]">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Local vs International ───────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="E-commerce Solutions"
            title="Sell Locally. Sell "
            highlight="Globally."
            description="Whether you're targeting Pakistani buyers or customers in the UK, USA, and UAE — we build the infrastructure for both."
          />

          <div className="mt-14 grid lg:grid-cols-2 gap-6">
            {/* Local */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-[#F8FAF8] rounded-xl p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center">
                  <span className="text-2xl">🇵🇰</span>
                </div>
                <div>
                  <h3 className="font-heading font-bold text-[#222222] text-xl">Local E-commerce</h3>
                  <p className="text-sm text-[#666666]">Built for Pakistan&apos;s unique market</p>
                </div>
              </div>
              <ul className="space-y-3">
                {localServices.map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-sm text-[#444444]">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* International */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-[#111111] rounded-xl p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-primary/20 rounded-2xl flex items-center justify-center">
                  <Globe className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-white text-xl">International E-commerce</h3>
                  <p className="text-sm text-white/50">Scale beyond borders</p>
                </div>
              </div>
              <ul className="space-y-3">
                {internationalServices.map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-sm text-white/75">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Marketing Services ───────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-[#F8FAF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="E-commerce Marketing"
            title="Traffic That Converts Into "
            highlight="Real Revenue"
            description="We run the full marketing stack — Meta, Google, TikTok, email, and SEO — designed to maximize your store's revenue at every funnel stage."
          />

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: "📱", title: "Meta Ads (Facebook & Instagram)", desc: "TOF → MOF → BOF full-funnel campaigns with systematic creative testing and retargeting that consistently delivers 4–8x ROAS for e-commerce stores." },
              { icon: "🎵", title: "TikTok Performance Ads", desc: "TikTok is the fastest-growing acquisition channel for e-commerce. We create compelling native-style ad content and manage campaigns that reach new audiences at low CPAs." },
              { icon: "🔍", title: "Google Shopping & PMAX", desc: "Get your products in front of high-intent buyers searching to buy. We manage Google Shopping, Performance Max, and search campaigns optimized for e-commerce revenue." },
              { icon: "📧", title: "Email & SMS Automation", desc: "Klaviyo flows — abandoned cart, welcome series, post-purchase, winback — that typically contribute 25–35% of total store revenue on autopilot." },
              { icon: "🌐", title: "E-commerce SEO", desc: "Collection page optimization, product SEO, schema markup, and content strategy that drives free, high-intent organic traffic to your store every single month." },
              { icon: "📊", title: "Analytics & Attribution", desc: "Unified reporting across all channels — understand exactly where your revenue comes from and allocate budget to what works." },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="font-heading font-bold text-[#222222] mb-3">{item.title}</h3>
                <p className="text-sm text-[#666666] leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Success Metrics ───────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-[#111111]" ref={metricsRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Our Track Record"
            title="Numbers That "
            highlight="Prove Results"
            light
            description="Real metrics from real client e-commerce stores we've built, managed, and scaled."
          />

          <div className="mt-14 grid grid-cols-2 lg:grid-cols-3 gap-4">
            {successMetrics.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={metricsInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-dark rounded-xl p-6 text-center border border-white/10"
              >
                <p className="font-heading text-3xl lg:text-4xl font-bold text-white mb-1">{m.value}</p>
                <p className="text-primary font-semibold text-sm mb-1">{m.metric}</p>
                <p className="text-white/40 text-xs">{m.note}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <div className="flex items-center gap-2">
              {[1, 2, 3, 4, 5].map((s) => <Star key={s} className="w-5 h-5 text-amber-400 fill-amber-400" />)}
            </div>
            <p className="text-white/60 text-sm">Rated 5.0 by 50+ clients across Pakistan and globally</p>
          </div>
        </div>
      </section>

      {/* ── FAQs ─────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="FAQ"
            title="Questions About Our "
            highlight="E-commerce Services"
          />

          <div ref={faqRef} className="mt-10 space-y-3">
            {ecommerceFaqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                animate={faqInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.07 }}
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
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-[#F8FAF8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              Ready to Start?
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#222222] leading-tight mb-5">
              Launch Your Profitable Store{" "}
              <span className="text-primary">This Month</span>
            </h2>
            <p className="text-[#666666] text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
              Get a free e-commerce strategy session. We&apos;ll audit your current situation (or help you start from zero), identify your biggest opportunities, and give you a clear roadmap to revenue.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 gradient-bg text-white font-semibold px-8 py-4 rounded-xl shadow-lg shadow-primary/30 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
              >
                Get Free Strategy Session
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/academy"
                className="inline-flex items-center gap-2 bg-white border-2 border-primary text-primary font-semibold px-8 py-4 rounded-xl hover:bg-primary hover:text-white hover:-translate-y-0.5 transition-all duration-300"
              >
                Explore Academy
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

function EcommerceIllustration() {
  return (
    <div className="relative w-full aspect-square max-w-lg mx-auto">
      <svg viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* Background rings */}
        <circle cx="250" cy="250" r="220" stroke="#8EA97A" strokeWidth="1" strokeOpacity="0.15" strokeDasharray="8 8" />
        <circle cx="250" cy="250" r="170" stroke="#8EA97A" strokeWidth="1" strokeOpacity="0.08" />

        {/* Store card - center */}
        <rect x="120" y="130" width="260" height="180" rx="20" fill="#1a2a1a" stroke="#8EA97A" strokeWidth="1.5" strokeOpacity="0.4" />
        <rect x="120" y="130" width="260" height="50" rx="20" fill="#8EA97A" fillOpacity="0.15" />
        <rect x="120" y="155" width="260" height="25" fill="#8EA97A" fillOpacity="0.15" />

        {/* Store header */}
        <text x="148" y="162" fill="#8EA97A" fontSize="11" fontFamily="system-ui" fontWeight="bold">🛍️ ShopMaster PK</text>
        <rect x="330" y="148" width="32" height="18" rx="5" fill="#8EA97A" fillOpacity="0.3" />
        <text x="337" y="161" fill="#8EA97A" fontSize="9" fontFamily="system-ui">Live</text>

        {/* Product grid */}
        <rect x="135" y="188" width="65" height="55" rx="10" fill="#ffffff" fillOpacity="0.08" />
        <rect x="140" y="193" width="55" height="35" rx="7" fill="#8EA97A" fillOpacity="0.2" />
        <text x="148" y="238" fill="white" fontSize="8" fontFamily="system-ui">Rs. 2,500</text>

        <rect x="210" y="188" width="65" height="55" rx="10" fill="#ffffff" fillOpacity="0.08" />
        <rect x="215" y="193" width="55" height="35" rx="7" fill="#A9C193" fillOpacity="0.2" />
        <text x="223" y="238" fill="white" fontSize="8" fontFamily="system-ui">Rs. 4,200</text>

        <rect x="285" y="188" width="65" height="55" rx="10" fill="#ffffff" fillOpacity="0.08" />
        <rect x="290" y="193" width="55" height="35" rx="7" fill="#6E8960" fillOpacity="0.2" />
        <text x="298" y="238" fill="white" fontSize="8" fontFamily="system-ui">Rs. 1,800</text>

        {/* Revenue bar */}
        <rect x="135" y="255" width="235" height="40" rx="8" fill="#ffffff" fillOpacity="0.05" />
        <text x="145" y="270" fill="#8EA97A" fontSize="9" fontFamily="system-ui">Monthly Revenue</text>
        <text x="145" y="287" fill="white" fontSize="14" fontFamily="system-ui" fontWeight="bold">PKR 1,245,000</text>
        <text x="270" y="287" fill="#8EA97A" fontSize="9" fontFamily="system-ui">↑ +38%</text>

        {/* Payment badges */}
        <rect x="50" y="270" width="120" height="70" rx="14" fill="#1a2a1a" stroke="#8EA97A" strokeWidth="1" strokeOpacity="0.3" />
        <text x="68" y="295" fill="#8EA97A" fontSize="9" fontFamily="system-ui">Payment Methods</text>
        <rect x="62" y="300" width="35" height="18" rx="4" fill="#8EA97A" fillOpacity="0.3" />
        <text x="68" y="313" fill="white" fontSize="8" fontFamily="system-ui">JazzCash</text>
        <rect x="105" y="300" width="35" height="18" rx="4" fill="#8EA97A" fillOpacity="0.3" />
        <text x="110" y="313" fill="white" fontSize="8" fontFamily="system-ui">EasyPaisa</text>
        <text x="62" y="334" fill="white" fontSize="8" fontFamily="system-ui" fillOpacity="0.6">+ Stripe, PayPal, Card</text>

        {/* Orders card */}
        <rect x="330" y="270" width="130" height="80" rx="14" fill="#1a2a1a" stroke="#8EA97A" strokeWidth="1" strokeOpacity="0.3" />
        <text x="348" y="295" fill="#8EA97A" fontSize="9" fontFamily="system-ui">Today&apos;s Orders</text>
        <text x="348" y="318" fill="white" fontSize="26" fontFamily="system-ui" fontWeight="bold">47</text>
        <rect x="390" y="305" width="50" height="10" rx="3" fill="#8EA97A" fillOpacity="0.3" />
        <text x="395" y="338" fill="#8EA97A" fontSize="8" fontFamily="system-ui">↑ vs yesterday</text>

        {/* Decorative dots */}
        <circle cx="80" cy="120" r="4" fill="#8EA97A" fillOpacity="0.3" />
        <circle cx="420" cy="150" r="3" fill="#8EA97A" fillOpacity="0.25" />
        <circle cx="440" cy="380" r="5" fill="#8EA97A" fillOpacity="0.15" />
        <circle cx="70" cy="380" r="4" fill="#A9C193" fillOpacity="0.2" />

        {/* ROAS badge */}
        <rect x="175" y="60" width="160" height="50" rx="14" fill="#1a2a1a" stroke="#8EA97A" strokeWidth="1.5" strokeOpacity="0.4" />
        <text x="205" y="85" fill="#8EA97A" fontSize="10" fontFamily="system-ui">Average ROAS</text>
        <text x="215" y="102" fill="white" fontSize="18" fontFamily="system-ui" fontWeight="bold">6.8x</text>
        <text x="268" y="102" fill="#8EA97A" fontSize="10" fontFamily="system-ui">✓</text>
      </svg>

      {/* Floating badges */}
      <div className="absolute top-12 right-0">
        <div className="animate-float glass rounded-2xl px-4 py-3 shadow-2xl min-w-[120px]" style={{ animationDelay: "0s" }}>
          <div className="flex items-center gap-2 mb-1">
            <div className="w-6 h-6 bg-emerald-50 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-3.5 h-3.5 text-emerald-500" />
            </div>
            <span className="text-base font-bold font-heading text-emerald-600">+340%</span>
          </div>
          <p className="text-[11px] text-[#555353] font-medium">Revenue Growth</p>
        </div>
      </div>
      <div className="absolute bottom-20 left-0">
        <div className="animate-float glass rounded-2xl px-4 py-3 shadow-2xl min-w-[120px]" style={{ animationDelay: "0.8s" }}>
          <div className="flex items-center gap-2 mb-1">
            <div className="w-6 h-6 bg-primary/10 rounded-lg flex items-center justify-center">
              <ShoppingBag className="w-3.5 h-3.5 text-primary" />
            </div>
            <span className="text-base font-bold font-heading text-primary">50+</span>
          </div>
          <p className="text-[11px] text-[#555353] font-medium">Stores Launched</p>
        </div>
      </div>
    </div>
  );
}
