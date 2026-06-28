"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, MessageSquare } from "lucide-react";
import { ContactForm } from "@/components/forms/ContactForm";
import { MAPS_PLACE_URL, MAPS_EMBED_URL } from "@/lib/data";

const contactCards = [
  {
    icon: Phone,
    title: "Call Us",
    subtitle: "Mon–Fri, 9am–7pm PKT",
    lines: ["+92 328 458 0621", "+92 326 212 4461"],
    href: "tel:+923284580621",
    gradient: "from-primary to-primary-light",
  },
  {
    icon: Mail,
    title: "Email Us",
    subtitle: "We reply within 24 hours",
    lines: ["thinkhawks@gmail.com"],
    href: "mailto:thinkhawks@gmail.com",
    gradient: "from-blue-500 to-blue-600",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    subtitle: "Come say hello",
    lines: ["Office #19, 1st Floor", "Al Hafeez Shopping Mall", "Gulberg III, Lahore"],
    href: MAPS_PLACE_URL,
    gradient: "from-orange-500 to-orange-600",
  },
  {
    icon: MessageSquare,
    title: "WhatsApp",
    subtitle: "Chat with us instantly",
    lines: ["+92 328 458 0621"],
    href: "https://wa.me/923284580621",
    gradient: "from-green-500 to-green-600",
  },
];

export function ContactPageContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-[#111111] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0d1a0d] via-[#111111] to-[#1a1a2e]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/10 rounded-full blur-[100px]" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/15 border border-primary/30 text-primary text-sm font-medium mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Let&apos;s Talk
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-5">
              Ready to{" "}
              <span className="text-primary">Grow Your Business</span>?
            </h1>
            <p className="text-white/65 text-lg leading-relaxed max-w-2xl mx-auto">
              Get your free strategy consultation. We&apos;ll analyze your digital presence and
              give you actionable insights — no commitment required.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
          <svg viewBox="0 0 1440 60" fill="none" className="w-full" preserveAspectRatio="none">
            <path d="M0 60L1440 60L1440 20C1200 55 720 0 360 35C180 52 0 20 0 20V60Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Contact cards */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {contactCards.map((card, i) => (
              <motion.a
                key={i}
                href={card.href}
                target={card.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group block p-5 bg-[#F8FAF8] rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${card.gradient} flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform`}>
                  <card.icon className="w-6 h-6 text-white" />
                </div>
                <p className="font-heading font-bold text-[#222222] mb-0.5">{card.title}</p>
                <p className="text-xs text-[#6B6B6B] mb-2">{card.subtitle}</p>
                {card.lines.map((line, j) => (
                  <p key={j} className="text-sm text-[#555353] leading-relaxed">{line}</p>
                ))}
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Hours */}
      <section className="py-10 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              {/* Business hours */}
              <div className="bg-[#F8FAF8] rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 gradient-bg rounded-xl flex items-center justify-center">
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-heading font-bold text-[#222222]">Business Hours</h3>
                </div>
                <div className="space-y-2">
                  {[
                    { day: "Monday – Friday", hours: "9:00 AM – 7:00 PM" },
                    { day: "Saturday", hours: "10:00 AM – 4:00 PM" },
                    { day: "Sunday", hours: "Closed" },
                  ].map((item) => (
                    <div key={item.day} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                      <span className="text-sm text-[#555353]">{item.day}</span>
                      <span className="text-sm font-medium text-[#222222]">{item.hours}</span>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-[#6B6B6B] mt-3">
                  All times in Pakistan Standard Time (PKT/GMT+5)
                </p>
              </div>

              {/* Map */}
              <div className="bg-[#F8FAF8] rounded-xl overflow-hidden">
                <iframe
                  src={MAPS_EMBED_URL}
                  title="Think Hawks office location — Al Hafeez Shopping Mall, Gulberg III, Lahore"
                  className="w-full h-44 border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
                <div className="flex items-center justify-between gap-2 p-4">
                  <div>
                    <p className="font-heading font-bold text-[#222222] text-sm">Al Hafeez Shopping Mall</p>
                    <p className="text-xs text-[#6B6B6B]">Office #19, Gulberg III, Lahore</p>
                  </div>
                  <a
                    href={MAPS_PLACE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-primary hover:underline font-medium whitespace-nowrap"
                  >
                    Directions →
                  </a>
                </div>
              </div>

              {/* Why choose */}
              <div className="bg-[#111111] rounded-xl p-6 text-white">
                <h3 className="font-heading font-bold mb-4">Why Choose Think Hawks?</h3>
                <ul className="space-y-3">
                  {[
                    "Free initial strategy consultation",
                    "No long-term contracts required",
                    "Results-focused approach",
                    "Transparent monthly reporting",
                    "Dedicated account manager",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2.5 text-sm text-white/70">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Main form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-2"
            >
              <div className="bg-[#F8FAF8] rounded-xl p-6 lg:p-8">
                <h2 className="font-heading font-bold text-[#222222] text-2xl mb-2">
                  Send Us a Message
                </h2>
                <p className="text-[#666666] text-sm mb-7">
                  Fill out the form below and we&apos;ll get back to you within 24 hours.
                </p>

                <ContactForm />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
