"use client";

import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, Phone, Mail, MapPin, Clock, MessageSquare } from "lucide-react";
import { services } from "@/lib/data";

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().optional(),
  company: z.string().optional(),
  service: z.string().min(1, "Please select a service"),
  budget: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof schema>;

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
    href: "https://maps.google.com",
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
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    await new Promise((r) => setTimeout(r, 1500));
    console.log(data);
    reset();
  };

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
              <span className="gradient-text">Grow Your Business</span>?
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
                className="group block p-5 bg-[#F8FAF8] rounded-2xl border border-gray-100 hover:bg-white hover:shadow-lg hover:border-primary/10 transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${card.gradient} flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform`}>
                  <card.icon className="w-6 h-6 text-white" />
                </div>
                <p className="font-heading font-bold text-[#222222] mb-0.5">{card.title}</p>
                <p className="text-xs text-[#999999] mb-2">{card.subtitle}</p>
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
              <div className="bg-[#F8FAF8] rounded-2xl p-6 border border-gray-100">
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
                <p className="text-xs text-[#999999] mt-3">
                  All times in Pakistan Standard Time (PKT/GMT+5)
                </p>
              </div>

              {/* Map placeholder */}
              <div className="bg-[#F8FAF8] rounded-2xl overflow-hidden border border-gray-100">
                <div className="h-48 flex flex-col items-center justify-center text-center p-6">
                  <MapPin className="w-8 h-8 text-primary mb-3" />
                  <p className="font-heading font-bold text-[#222222] text-sm">Al Hafeez Shopping Mall</p>
                  <p className="text-xs text-[#666666] mt-1">Office #19, 1st Floor</p>
                  <p className="text-xs text-[#666666]">Gulberg III, Lahore, Pakistan</p>
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 text-xs text-primary hover:underline font-medium"
                  >
                    Get Directions on Google Maps →
                  </a>
                </div>
              </div>

              {/* Why choose */}
              <div className="bg-[#111111] rounded-2xl p-6 text-white">
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
              <div className="bg-[#F8FAF8] rounded-3xl p-6 lg:p-8 border border-gray-100">
                <h2 className="font-heading font-bold text-[#222222] text-2xl mb-2">
                  Send Us a Message
                </h2>
                <p className="text-[#666666] text-sm mb-7">
                  Fill out the form below and we&apos;ll get back to you within 24 hours.
                </p>

                {isSubmitSuccessful ? (
                  <div className="text-center py-16">
                    <div className="w-24 h-24 gradient-bg rounded-full flex items-center justify-center mx-auto mb-5 shadow-xl">
                      <Send className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="font-heading font-bold text-[#222222] text-2xl mb-2">
                      Message Sent Successfully!
                    </h3>
                    <p className="text-[#666666]">
                      Thank you for reaching out. Our team will get back to you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-[#444444] mb-1.5 uppercase tracking-wide">Full Name *</label>
                        <input
                          {...register("name")}
                          placeholder="John Smith"
                          className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all"
                        />
                        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-[#444444] mb-1.5 uppercase tracking-wide">Email Address *</label>
                        <input
                          {...register("email")}
                          type="email"
                          placeholder="john@company.com"
                          className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all"
                        />
                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-[#444444] mb-1.5 uppercase tracking-wide">Phone Number</label>
                        <input
                          {...register("phone")}
                          placeholder="+1 234 567 8900"
                          className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-[#444444] mb-1.5 uppercase tracking-wide">Company Name</label>
                        <input
                          {...register("company")}
                          placeholder="Your Company Inc."
                          className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-[#444444] mb-1.5 uppercase tracking-wide">Service Needed *</label>
                        <select
                          {...register("service")}
                          className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all"
                        >
                          <option value="">Select a service</option>
                          {services.map((s) => (
                            <option key={s.id} value={s.id}>{s.title}</option>
                          ))}
                        </select>
                        {errors.service && <p className="text-red-500 text-xs mt-1">{errors.service.message}</p>}
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-[#444444] mb-1.5 uppercase tracking-wide">Monthly Budget</label>
                        <select
                          {...register("budget")}
                          className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all"
                        >
                          <option value="">Select budget range</option>
                          <option>Under $500</option>
                          <option>$500 – $1,000</option>
                          <option>$1,000 – $2,500</option>
                          <option>$2,500 – $5,000</option>
                          <option>$5,000 – $10,000</option>
                          <option>$10,000+</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#444444] mb-1.5 uppercase tracking-wide">Your Message *</label>
                      <textarea
                        {...register("message")}
                        rows={5}
                        placeholder="Tell us about your business, your goals, challenges you're facing, and anything else that would help us understand how we can help you grow..."
                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all resize-none"
                      />
                      {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full gradient-bg text-white font-semibold py-4 rounded-xl shadow-md hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed text-sm"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending your message...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Send Message — It&apos;s Free
                        </>
                      )}
                    </button>

                    <p className="text-center text-xs text-[#999999]">
                      By submitting, you agree to our{" "}
                      <a href="/privacy-policy" className="text-primary hover:underline">Privacy Policy</a>.
                      We never share your data.
                    </p>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
