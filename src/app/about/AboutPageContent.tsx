"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import {
  ArrowRight, Target, Eye, Heart, Lightbulb,
  Shield, Zap, Users, Globe2, TrendingUp, ExternalLink
} from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { CTASection } from "@/components/home/CTASection";
import { teamMembers } from "@/lib/data";

const values = [
  { icon: Target, title: "Results First", desc: "Every decision is measured by its impact on your business outcomes." },
  { icon: Eye, title: "Full Transparency", desc: "Open communication, honest reporting, no hidden fees — ever." },
  { icon: Heart, title: "Client-Centric", desc: "Your success is our success. We celebrate every win together." },
  { icon: Lightbulb, title: "Creative Excellence", desc: "We push creative boundaries while staying strategically grounded." },
  { icon: Shield, title: "Ethical Practice", desc: "We build sustainable growth through ethical, white-hat strategies." },
  { icon: Zap, title: "Continuous Innovation", desc: "We stay ahead of trends so your brand always leads the market." },
];

const teamStats = [
  { value: 200, suffix: "+", label: "Happy Clients" },
  { value: 350, suffix: "+", label: "Projects Delivered" },
  { value: 5, suffix: "+", label: "Years of Experience" },
  { value: 15, suffix: "+", label: "Team Members" },
];

const milestones = [
  { year: "2019", title: "Think Hawks Founded", desc: "Started as a small digital marketing consultancy in Lahore with a vision to help local businesses grow online." },
  { year: "2020", title: "First 50 Clients", desc: "Expanded our services to include web development and branding, growing our client base to 50+ businesses." },
  { year: "2021", title: "International Expansion", desc: "Began serving international clients across UK, Canada, and Australia, bringing global expertise to every project." },
  { year: "2022", title: "Team Growth", desc: "Grew our team to 10+ dedicated specialists across SEO, paid advertising, design, and development." },
  { year: "2023", title: "200+ Clients Milestone", desc: "Reached the milestone of 200+ happy clients and launched our premium Enterprise service tier." },
  { year: "2024", title: "E-commerce Division Launched", desc: "Launched Think Hawks E-commerce Growth Solutions and Think Hawks Academy — expanding into Shopify development, store management, and Pakistan's first dedicated e-commerce training program." },
  { year: "2025+", title: "The Future", desc: "Continuing to innovate with AI-assisted marketing, international e-commerce expansion, and building the largest alumni network of e-commerce entrepreneurs in Pakistan." },
];

export function AboutPageContent() {
  const { ref: statsRef, inView: statsInView } = useInView({ threshold: 0.2, triggerOnce: true });
  const { ref: valuesRef, inView: valuesInView } = useInView({ threshold: 0.1, triggerOnce: true });
  const { ref: timelineRef, inView: timelineInView } = useInView({ threshold: 0.1, triggerOnce: true });
  const { ref: teamRef, inView: teamInView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-[#111111] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0d1a0d] via-[#111111] to-[#1a1a2e]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/10 rounded-full blur-[100px]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "linear-gradient(rgba(142,169,122,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(142,169,122,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/15 border border-primary/30 text-primary text-sm font-medium mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Our Story
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-5">
              We Help Brands{" "}
              <span className="text-primary">Soar Higher</span>{" "}
              Than the Competition
            </h1>
            <p className="text-white/65 text-lg leading-relaxed max-w-2xl mx-auto">
              Think Hawks was built on the belief that every business — regardless of size —
              deserves world-class digital marketing. We&apos;re your strategic growth partner,
              not just a service provider.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
          <svg viewBox="0 0 1440 60" fill="none" className="w-full" preserveAspectRatio="none">
            <path d="M0 60L1440 60L1440 20C1200 55 720 0 360 35C180 52 0 20 0 20V60Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: Target,
                label: "Our Mission",
                color: "from-primary to-primary-light",
                title: "Make World-Class Marketing Accessible to Every Business",
                text: "We exist to democratize digital marketing excellence. By combining strategic insight with creative execution and data-driven optimization, we deliver agency-quality results that were once only available to the largest brands — now accessible to businesses of all sizes.",
              },
              {
                icon: Eye,
                label: "Our Vision",
                color: "from-blue-500 to-blue-600",
                title: "Become the Most Trusted Digital Agency in South Asia",
                text: "We envision a world where every ambitious business has access to a dedicated digital growth partner. Our goal is to be recognized as the leading agency for ROI-focused digital marketing, known for our results, transparency, and genuine care for client success.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-[#F8FAF8] rounded-xl p-8"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-5 shadow-lg`}>
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <span className="text-xs font-bold text-primary uppercase tracking-widest mb-2 block">
                  {item.label}
                </span>
                <h3 className="font-heading text-xl font-bold text-[#222222] mb-3">
                  {item.title}
                </h3>
                <p className="text-[#666666] leading-relaxed text-sm">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 gradient-bg relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "30px 30px" }} />
        <div ref={statsRef} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {teamStats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={statsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="font-heading text-4xl font-bold text-white">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-white/75 text-sm mt-1.5 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story / Timeline */}
      <section className="py-20 lg:py-28 bg-[#F8FAF8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Our Journey"
            title="From Startup to "
            highlight="Trusted Partner"
            description="Our journey from a small consultancy to a full-service agency trusted by 200+ businesses worldwide."
          />

          <div ref={timelineRef} className="mt-14 relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent hidden sm:block" />
            <div className="space-y-8">
              {milestones.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={timelineInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex gap-6 sm:gap-8 items-start"
                >
                  <div className="hidden sm:flex flex-col items-center">
                    <div className="w-16 h-16 gradient-bg rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                      <span className="font-heading font-bold text-white text-xs">{m.year}</span>
                    </div>
                  </div>
                  <div className="bg-white rounded-xl p-5 flex-1 shadow-sm hover:shadow-md transition-shadow">
                    <span className="sm:hidden inline-block px-3 py-1 gradient-bg text-white text-xs font-bold rounded-full mb-2">
                      {m.year}
                    </span>
                    <h4 className="font-heading font-bold text-[#222222] mb-2">{m.title}</h4>
                    <p className="text-sm text-[#666666] leading-relaxed">{m.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Our Team"
            title="The People Behind "
            highlight="Your Growth"
            description="Meet the specialists, strategists, and creatives who dedicate themselves to making your business win online."
          />

          <div ref={teamRef} className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 28 }}
                animate={teamInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.09 }}
                className="bg-[#F8FAF8] rounded-xl p-6 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 gradient-bg rounded-xl flex items-center justify-center flex-shrink-0 shadow-md text-white font-heading font-bold text-lg">
                    {member.avatar}
                  </div>
                  <div className="min-w-0">
                    <p className="font-heading font-bold text-[#222222] truncate">{member.name}</p>
                    <p className="text-primary text-xs font-semibold mt-0.5">{member.role}</p>
                  </div>
                  {member.linkedin && member.linkedin !== "#" && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${member.name} on LinkedIn`}
                      className="ml-auto text-[#888888] hover:text-primary transition-colors flex-shrink-0"
                    >
                      <ExternalLink className="w-4 h-4" aria-hidden="true" />
                    </a>
                  )}
                </div>
                <p className="text-sm text-[#666666] leading-relaxed mb-4">{member.bio}</p>
                <div className="flex flex-wrap gap-1.5">
                  {member.specialties.map((s, j) => (
                    <span key={j} className="text-[10px] font-semibold px-2.5 py-1 bg-primary/8 text-primary rounded-full border border-primary/15">
                      {s}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="text-[#666666] text-sm mb-4">
              Want to work with a team that genuinely cares about your growth?
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 gradient-bg text-white font-semibold px-7 py-3.5 rounded-xl shadow-md hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5 transition-all duration-300"
            >
              Work With Us
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-28 bg-[#F8FAF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Our Values"
            title="The Principles That "
            highlight="Drive Us"
            description="Everything we do is guided by a set of core values that keep us honest, creative, and relentlessly focused on your success."
          />

          <div ref={valuesRef} className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group bg-[#F8FAF8] rounded-xl p-6 hover:bg-white hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-[#222222] mb-2 group-hover:text-primary transition-colors">
                  {value.title}
                </h3>
                <p className="text-sm text-[#666666] leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
                Our Approach
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#222222] leading-tight mb-5">
                Strategy + Creativity +{" "}
                <span className="text-primary">Data</span> = Growth
              </h2>
              <p className="text-[#666666] leading-relaxed mb-6">
                We believe the best marketing combines deep strategic thinking with creative
                brilliance and rigorous data analysis. No single ingredient is enough on its own.
              </p>
              <p className="text-[#666666] leading-relaxed mb-8">
                That&apos;s why every Think Hawks campaign starts with research, is built with
                creativity, and is continuously optimized by data. This three-part framework
                is how we consistently deliver results that exceed expectations.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 gradient-bg text-white font-semibold px-7 py-3.5 rounded-xl shadow-md hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5 transition-all duration-300"
              >
                Start Your Growth Journey
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: TrendingUp, label: "Strategy", value: "Research-First", color: "bg-primary/10 text-primary" },
                { icon: Lightbulb, label: "Creativity", value: "Bold & Original", color: "bg-amber-50 text-amber-600" },
                { icon: Globe2, label: "Reach", value: "Multi-Channel", color: "bg-blue-50 text-blue-600" },
                { icon: Users, label: "Impact", value: "Measurable ROI", color: "bg-emerald-50 text-emerald-600" },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-xl p-5 shadow-sm">
                  <div className={`w-10 h-10 ${item.color} rounded-xl flex items-center justify-center mb-3`}>
                    <item.icon className="w-5 h-5" />
                  </div>
                  <p className="text-[#6B6B6B] text-xs uppercase tracking-widest mb-1">{item.label}</p>
                  <p className="font-heading font-bold text-[#222222]">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
