"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Phone, Mail, MapPin } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ContactForm } from "@/components/forms/ContactForm";
import { MAPS_PLACE_URL, MAPS_EMBED_URL } from "@/lib/data";

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
    lines: ["Al Hafeez Shopping Mall", "Gulberg III, Lahore"],
    href: MAPS_PLACE_URL,
  },
];

export function ContactSection() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

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
                className="flex items-start gap-4 p-4 rounded-xl bg-[#F8FAF8] hover:bg-white hover:shadow-md transition-all duration-300"
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

            {/* Map */}
            <div className="rounded-xl overflow-hidden bg-[#F8FAF8]">
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
                  <p className="text-sm font-medium text-[#444444]">Al Hafeez Shopping Mall</p>
                  <p className="text-xs text-[#6B6B6B]">Gulberg III, Lahore</p>
                </div>
                <a
                  href={MAPS_PLACE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-primary hover:underline whitespace-nowrap"
                >
                  Directions →
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
            <div className="bg-[#F8FAF8] rounded-xl p-6 lg:p-8">
              <ContactForm compact />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
