"use client";

import { motion } from "framer-motion";
import {
  Phone, Mail, MapPin, MessageSquare,
  CheckCircle, ArrowRight, Star, Users, Zap,
} from "lucide-react";
import { ContactForm } from "@/components/forms/ContactForm";
import { MAPS_PLACE_URL, MAPS_EMBED_URL } from "@/lib/data";

const contactMethods = [
  {
    icon: Phone,
    heading: "Call Us",
    sub: "Mon–Fri 9am–7pm PKT",
    detail: "+92 328 458 0621",
    detail2: "+92 326 212 4461",
    href: "tel:+923284580621",
    color: "from-primary to-primary-light",
    bg: "bg-primary/10",
    text: "text-primary",
  },
  {
    icon: Mail,
    heading: "Email Us",
    sub: "Reply within 24 hours",
    detail: "thinkhawks@gmail.com",
    href: "mailto:thinkhawks@gmail.com",
    color: "from-blue-500 to-blue-600",
    bg: "bg-blue-50",
    text: "text-blue-600",
  },
  {
    icon: MessageSquare,
    heading: "WhatsApp",
    sub: "Instant response",
    detail: "+92 328 458 0621",
    href: "https://wa.me/923284580621",
    color: "from-green-500 to-green-600",
    bg: "bg-green-50",
    text: "text-green-600",
  },
  {
    icon: MapPin,
    heading: "Visit Us",
    sub: "Gulberg III, Lahore",
    detail: "Al Hafeez Mall",
    href: MAPS_PLACE_URL,
    color: "from-orange-500 to-orange-600",
    bg: "bg-orange-50",
    text: "text-orange-600",
  },
];

const processSteps = [
  {
    step: "01",
    heading: "We Review Your Request",
    desc: "Our team reads every submission personally. We'll understand your business, goals, and challenges within a few hours.",
  },
  {
    step: "02",
    heading: "Free Strategy Call",
    desc: "We schedule a 30-minute call to dig deeper into your needs and share initial ideas — no sales pressure, just real insights.",
  },
  {
    step: "03",
    heading: "Custom Proposal",
    desc: "You receive a transparent, itemized proposal within 48 hours. Clear deliverables, timelines, and pricing — nothing hidden.",
  },
];

const faqs = [
  {
    q: "How quickly will you respond to my enquiry?",
    a: "We respond to all enquiries within 4 business hours. For urgent matters, call us directly or message on WhatsApp for an instant reply.",
  },
  {
    q: "Is the initial consultation really free?",
    a: "Yes — completely free, no strings attached. We'll analyze your digital presence and give you actionable recommendations whether you hire us or not.",
  },
  {
    q: "Do you work with businesses outside Pakistan?",
    a: "Absolutely. We serve clients across Pakistan, UK, Canada, Australia, and the UAE. All meetings can be conducted online via Zoom or Google Meet.",
  },
  {
    q: "What budget do I need to get started?",
    a: "Our packages start from $300/month. We'll always recommend the most cost-effective approach for your specific goals and current stage.",
  },
];

export function ContactPageContent() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section
        aria-labelledby="contact-hero-heading"
        className="relative pt-32 pb-16 bg-[#111111] overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#0d1a0d] via-[#111111] to-[#1a1a2e]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(142,169,122,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(142,169,122,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/15 border border-primary/30 text-primary text-sm font-medium mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Free Consultation — No Commitment
            </span>

            <h1
              id="contact-hero-heading"
              className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-5"
            >
              Get Your Free{" "}
              <span className="text-primary">Marketing Consultation</span>
            </h1>

            <p className="text-white/65 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
              Tell us about your business. We&apos;ll craft a tailored digital strategy and
              share honest, actionable recommendations — completely free.
            </p>

            {/* Trust bar */}
            <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
              {[
                { icon: Zap, label: "Responds in 4 hrs" },
                { icon: Users, label: "50+ businesses served" },
                { icon: Star, label: "5.0 ★ client rating" },
              ].map((t, i) => (
                <div key={i} className="flex items-center gap-2 text-white/60 text-sm">
                  <t.icon className="w-4 h-4 text-primary" />
                  {t.label}
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 overflow-hidden pointer-events-none">
          <svg viewBox="0 0 1440 60" fill="none" className="w-full" preserveAspectRatio="none">
            <path d="M0 60L1440 60L1440 20C1200 55 720 0 360 35C180 52 0 20 0 20V60Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* ── Contact Methods ──────────────────────────────────────────── */}
      <section aria-label="Contact methods" className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {contactMethods.map((m, i) => (
              <motion.a
                key={i}
                href={m.href}
                target={m.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="group relative flex flex-col items-start gap-3 p-4 sm:p-5 bg-[#F8FAF8] rounded-2xl border border-transparent hover:border-primary/20 hover:bg-white hover:shadow-lg transition-all duration-300"
              >
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${m.color} flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                  <m.icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className={`font-heading font-bold text-sm ${m.text} mb-0.5`}>
                    {m.heading}
                  </h3>
                  <p className="text-[11px] text-[#6B6B6B] mb-1">{m.sub}</p>
                  <p className="text-sm font-medium text-[#222222] leading-snug">{m.detail}</p>
                  {m.detail2 && (
                    <p className="text-sm text-[#666666]">{m.detail2}</p>
                  )}
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-[#CCCCCC] group-hover:text-primary group-hover:translate-x-0.5 transition-all absolute top-4 right-4" />
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Form + Sidebar ───────────────────────────────────────────── */}
      <section
        aria-labelledby="form-heading"
        className="py-12 lg:py-20 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-10 xl:gap-16 items-start">

            {/* ─ Form (3/5) ─ */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-3"
            >
              <div className="bg-[#F8FAF8] rounded-2xl p-6 lg:p-10 border border-gray-100">
                <div className="mb-7">
                  <h2
                    id="form-heading"
                    className="font-heading font-bold text-[#222222] text-2xl sm:text-3xl mb-2"
                  >
                    Tell Us About Your Project
                  </h2>
                  <p className="text-[#666666] text-sm leading-relaxed">
                    Fill in the form below and we&apos;ll review it personally. Expect a reply
                    within 4 business hours.
                  </p>
                </div>

                <ContactForm />
              </div>
            </motion.div>

            {/* ─ Sidebar (2/5) ─ */}
            <motion.aside
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-2 space-y-5"
              aria-label="Additional contact information"
            >
              {/* Why Choose Us */}
              <div className="bg-[#111111] rounded-2xl p-6 text-white">
                <h2 className="font-heading font-bold text-lg mb-4">
                  Why Choose Think Hawks?
                </h2>
                <ul className="space-y-3">
                  {[
                    "Free initial strategy consultation",
                    "No long-term contracts required",
                    "Dedicated account manager",
                    "Transparent monthly reporting",
                    "Results-guaranteed on select plans",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-white/70">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Map */}
              <div className="rounded-2xl overflow-hidden border border-gray-100 bg-[#F8FAF8]">
                <h2 className="sr-only">Our Office Location</h2>
                <iframe
                  src={MAPS_EMBED_URL}
                  title="Think Hawks office — Al Hafeez Shopping Mall, Gulberg III, Lahore"
                  className="w-full h-44 border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
                <div className="flex items-center justify-between gap-2 p-4">
                  <div>
                    <p className="font-semibold text-[#222222] text-sm">Al Hafeez Shopping Mall</p>
                    <p className="text-xs text-[#6B6B6B]">Gulberg III, Lahore</p>
                  </div>
                  <a
                    href={MAPS_PLACE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-primary font-medium hover:underline whitespace-nowrap"
                  >
                    Get Directions →
                  </a>
                </div>
              </div>
            </motion.aside>
          </div>
        </div>
      </section>

      {/* ── What Happens Next ────────────────────────────────────────── */}
      <section
        aria-labelledby="process-heading"
        className="py-16 lg:py-24 bg-[#F8FAF8]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2
              id="process-heading"
              className="font-heading text-3xl sm:text-4xl font-bold text-[#222222] mb-3"
            >
              What Happens After You Submit?
            </h2>
            <p className="text-[#666666] leading-relaxed">
              No generic auto-responders. Here&apos;s exactly what our process looks like.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {processSteps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative"
              >
                {i < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-px bg-primary/20 z-0" />
                )}
                <div className="relative bg-white rounded-2xl p-6 shadow-sm border border-gray-100 h-full">
                  <div className="w-14 h-14 gradient-bg rounded-2xl flex items-center justify-center mb-5 shadow-md">
                    <span className="font-heading font-bold text-white text-lg">{step.step}</span>
                  </div>
                  <h3 className="font-heading font-bold text-[#222222] text-lg mb-2">
                    {step.heading}
                  </h3>
                  <p className="text-sm text-[#666666] leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────── */}
      <section
        aria-labelledby="faq-heading"
        className="py-16 lg:py-24 bg-white"
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2
              id="faq-heading"
              className="font-heading text-3xl sm:text-4xl font-bold text-[#222222] mb-3"
            >
              Frequently Asked Questions
            </h2>
            <p className="text-[#666666]">
              Quick answers before you reach out.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="bg-[#F8FAF8] rounded-2xl p-6 border border-gray-100"
              >
                <h3 className="font-heading font-semibold text-[#222222] mb-2">
                  {faq.q}
                </h3>
                <p className="text-sm text-[#666666] leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
