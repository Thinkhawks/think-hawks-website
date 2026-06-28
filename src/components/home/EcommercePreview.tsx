"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import { ArrowRight, ShoppingBag, TrendingUp, Globe, CreditCard } from "lucide-react";

const highlights = [
  { icon: ShoppingBag, text: "Shopify Store Development" },
  { icon: CreditCard, text: "JazzCash & Stripe Integration" },
  { icon: TrendingUp, text: "Meta, TikTok & Google Ads" },
  { icon: Globe, text: "Local & International Selling" },
];

const quickStats = [
  { value: "50+", label: "Stores Built" },
  { value: "6.8x", label: "Avg ROAS" },
  { value: "$2M+", label: "Revenue Generated" },
];

export function EcommercePreview() {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true });

  return (
    <section className="py-20 lg:py-28 bg-[#111111] overflow-hidden">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/15 border border-primary/30 text-primary text-sm font-medium mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              New: E-commerce Growth Solutions
            </span>

            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-5">
              We Build Shopify Stores{" "}
              <span className="text-primary">That Actually Sell</span>
            </h2>

            <p className="text-white/60 text-lg leading-relaxed mb-8">
              From complete store setup and product research to local payment integration and
              multi-channel marketing — we handle every layer of your e-commerce business so you
              can focus on growth.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {highlights.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                  className="flex items-center gap-3 glass-dark rounded-xl px-4 py-3 border border-white/10"
                >
                  <div className="w-8 h-8 gradient-bg rounded-lg flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-sm text-white/80 font-medium">{item.text}</span>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/ecommerce"
                className="inline-flex items-center gap-2 gradient-bg text-white font-semibold px-7 py-3.5 rounded-xl shadow-lg shadow-primary/30 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
              >
                Explore E-commerce Solutions
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border border-white/20 text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-white/10 hover:-translate-y-0.5 transition-all duration-300"
              >
                Get Free Store Audit
              </Link>
            </div>
          </motion.div>

          {/* Right — visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative"
          >
            {/* Stats bar */}
            <div className="grid grid-cols-3 gap-3 mb-5">
              {quickStats.map((s, i) => (
                <div key={i} className="glass-dark rounded-2xl p-4 text-center border border-white/10">
                  <p className="font-heading text-2xl font-bold text-white">{s.value}</p>
                  <p className="text-primary text-xs font-semibold mt-1">{s.label}</p>
                </div>
              ))}
            </div>

            {/* Shopify dashboard card */}
            <div className="glass-dark rounded-xl p-6 border border-white/10">
              <div className="flex items-center justify-between mb-5">
                <div>
                  <p className="font-heading font-bold text-white text-sm">Store Performance</p>
                  <p className="text-white/40 text-xs">Last 30 days</p>
                </div>
                <span className="px-3 py-1 bg-primary/20 text-primary text-xs font-semibold rounded-full border border-primary/30">
                  Live
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3 mb-5">
                {[
                  { label: "Total Revenue", value: "PKR 1.2M", change: "+38%" },
                  { label: "Orders", value: "847", change: "+22%" },
                  { label: "Avg Order Value", value: "PKR 1,418", change: "+12%" },
                  { label: "ROAS", value: "6.8x", change: "+104%" },
                ].map((m, i) => (
                  <div key={i} className="bg-white/5 rounded-xl p-3 border border-white/10">
                    <p className="text-white/40 text-xs mb-1">{m.label}</p>
                    <p className="font-heading font-bold text-white text-base">{m.value}</p>
                    <p className="text-primary text-xs font-semibold">{m.change}</p>
                  </div>
                ))}
              </div>

              {/* Mini bar chart */}
              <div className="flex items-end gap-2 h-16">
                {[40, 55, 45, 70, 65, 85, 78, 90, 82, 100, 95, 88].map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    animate={inView ? { height: `${h}%` } : {}}
                    transition={{ duration: 0.6, delay: 0.5 + i * 0.04 }}
                    className="flex-1 gradient-bg rounded-t-sm opacity-80"
                    style={{ height: 0 }}
                  />
                ))}
              </div>
              <div className="mt-2 flex items-center gap-2">
                <div className="w-2.5 h-2.5 gradient-bg rounded-sm" />
                <p className="text-white/30 text-xs">Daily Revenue (Last 12 days)</p>
              </div>
            </div>

            {/* Payment badge */}
            <div className="absolute -bottom-4 -right-4 glass rounded-2xl px-4 py-3 shadow-2xl border border-primary/20">
              <p className="text-xs font-semibold text-[#222222] mb-1.5">Payment Methods</p>
              <div className="flex items-center gap-2">
                {["JazzCash", "EasyPaisa", "Stripe"].map((p, i) => (
                  <span key={i} className="px-2 py-1 bg-primary/10 text-primary text-[10px] font-semibold rounded-md">{p}</span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
