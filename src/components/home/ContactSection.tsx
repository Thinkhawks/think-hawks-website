"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, Phone, Mail, MapPin, Clock } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
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

const contactInfo = [
  {
    icon: Phone,
    title: "Call Us",
    lines: ["+92 328 458 0621", "+92 326 212 4461"],
    href: "tel:+923284580621",
  },
  {
    icon: Mail,
    title: "Email Us",
    lines: ["thinkhawks@gmail.com"],
    href: "mailto:thinkhawks@gmail.com",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    lines: ["Office #19, 1st Floor", "Al Hafeez Shopping Mall", "Gulberg III, Lahore"],
    href: "https://maps.google.com",
  },
  {
    icon: Clock,
    title: "Business Hours",
    lines: ["Mon–Fri: 9am – 7pm", "Sat: 10am – 4pm", "Sun: Closed"],
    href: null,
  },
];

export function ContactSection() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    await new Promise((r) => setTimeout(r, 1500));
    console.log(data);
    reset();
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Get In Touch"
          title="Let's Start Your "
          highlight="Growth Journey"
          description="Ready to take your business to the next level? Fill out the form and we'll get back to you within 24 hours."
        />

        <div ref={ref} className="mt-14 grid lg:grid-cols-5 gap-10 lg:gap-14">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-5"
          >
            {contactInfo.map((info, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-4 rounded-2xl bg-[#F8FAF8] hover:bg-white hover:shadow-md border border-transparent hover:border-gray-100 transition-all duration-300"
              >
                <div className="w-11 h-11 gradient-bg rounded-xl flex items-center justify-center flex-shrink-0">
                  <info.icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-heading font-semibold text-[#222222] text-sm mb-1">
                    {info.title}
                  </p>
                  {info.lines.map((line, j) =>
                    info.href && j === 0 ? (
                      <a
                        key={j}
                        href={info.href}
                        target={info.href.startsWith("http") ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className="block text-sm text-[#666666] hover:text-primary transition-colors"
                      >
                        {line}
                      </a>
                    ) : (
                      <p key={j} className="text-sm text-[#666666]">{line}</p>
                    )
                  )}
                </div>
              </div>
            ))}

            {/* Map placeholder */}
            <div className="rounded-2xl overflow-hidden border border-gray-100 h-48 bg-[#F8FAF8] flex items-center justify-center relative">
              <div className="text-center">
                <MapPin className="w-8 h-8 text-primary mx-auto mb-2" />
                <p className="text-sm font-medium text-[#444444]">Al Hafeez Shopping Mall</p>
                <p className="text-xs text-[#666666]">Gulberg III, Lahore</p>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 text-xs text-primary hover:underline"
                >
                  Get Directions →
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <div className="bg-[#F8FAF8] rounded-3xl p-6 lg:p-8 border border-gray-100">
              {isSubmitSuccessful ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 gradient-bg rounded-full flex items-center justify-center mx-auto mb-5 shadow-lg">
                    <Send className="w-9 h-9 text-white" />
                  </div>
                  <h3 className="font-heading font-bold text-[#222222] text-xl mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-[#666666] text-sm">
                    Thank you! We&apos;ll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#444444] mb-1.5 uppercase tracking-wide">
                        Your Name *
                      </label>
                      <input
                        {...register("name")}
                        placeholder="John Smith"
                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm text-[#222222] placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all"
                      />
                      {errors.name && (
                        <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#444444] mb-1.5 uppercase tracking-wide">
                        Email Address *
                      </label>
                      <input
                        {...register("email")}
                        type="email"
                        placeholder="john@company.com"
                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm text-[#222222] placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all"
                      />
                      {errors.email && (
                        <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#444444] mb-1.5 uppercase tracking-wide">
                        Phone Number
                      </label>
                      <input
                        {...register("phone")}
                        placeholder="+1 234 567 8900"
                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm text-[#222222] placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#444444] mb-1.5 uppercase tracking-wide">
                        Company Name
                      </label>
                      <input
                        {...register("company")}
                        placeholder="Your Company"
                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm text-[#222222] placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#444444] mb-1.5 uppercase tracking-wide">
                        Service Needed *
                      </label>
                      <select
                        {...register("service")}
                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm text-[#222222] focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all"
                      >
                        <option value="">Select a service</option>
                        {services.map((s) => (
                          <option key={s.id} value={s.id}>{s.title}</option>
                        ))}
                      </select>
                      {errors.service && (
                        <p className="text-red-500 text-xs mt-1">{errors.service.message}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#444444] mb-1.5 uppercase tracking-wide">
                        Monthly Budget
                      </label>
                      <select
                        {...register("budget")}
                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm text-[#222222] focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all"
                      >
                        <option value="">Select budget range</option>
                        <option>Under $500</option>
                        <option>$500 – $1,000</option>
                        <option>$1,000 – $2,500</option>
                        <option>$2,500 – $5,000</option>
                        <option>$5,000+</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#444444] mb-1.5 uppercase tracking-wide">
                      Tell Us About Your Goals *
                    </label>
                    <textarea
                      {...register("message")}
                      rows={4}
                      placeholder="Tell us about your business, goals, and what you're looking to achieve..."
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm text-[#222222] placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all resize-none"
                    />
                    {errors.message && (
                      <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full gradient-bg text-white font-semibold py-3.5 rounded-xl shadow-md hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
