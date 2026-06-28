"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Search, ArrowRight, Clock, Calendar, BookOpen } from "lucide-react";
import { blogPosts } from "@/lib/data";

const allCategories = ["All", "SEO", "Paid Ads", "Social Media", "Web Development", "Content Marketing"];

const categoryColors: Record<string, string> = {
  "SEO": "bg-emerald-100 text-emerald-700",
  "Paid Ads": "bg-blue-100 text-blue-700",
  "Social Media": "bg-pink-100 text-pink-700",
  "Web Development": "bg-orange-100 text-orange-700",
  "Content Marketing": "bg-purple-100 text-purple-700",
};

const postBgColors = [
  "from-emerald-500 to-teal-700",
  "from-blue-500 to-blue-700",
  "from-amber-500 to-orange-700",
  "from-rose-500 to-red-700",
  "from-sky-500 to-cyan-700",
  "from-slate-500 to-slate-700",
];

export function BlogPageContent() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true });

  const filtered = blogPosts.filter((p) => {
    const matchesSearch =
      search === "" ||
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.excerpt.toLowerCase().includes(search.toLowerCase());
    const matchesCategory =
      activeCategory === "All" || p.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const featured = blogPosts.find((p) => p.featured);
  const rest = filtered.filter((p) => !p.featured || activeCategory !== "All" || search !== "");

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
              Insights & Resources
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-5">
              Marketing Insights to{" "}
              <span className="text-primary">Grow Your Brand</span>
            </h1>
            <p className="text-white/65 text-lg leading-relaxed max-w-2xl mx-auto mb-8">
              Actionable strategies, expert insights, and the latest trends in digital marketing
              — written by practitioners who live and breathe results.
            </p>

            {/* Search */}
            <div className="max-w-lg mx-auto relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search articles..."
                className="w-full pl-12 pr-4 py-3.5 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/40 text-sm focus:outline-none focus:border-primary focus:bg-white/15 transition-all"
              />
            </div>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
          <svg viewBox="0 0 1440 60" fill="none" className="w-full" preserveAspectRatio="none">
            <path d="M0 60L1440 60L1440 20C1200 55 720 0 360 35C180 52 0 20 0 20V60Z" fill="#F8FAF8" />
          </svg>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-[#F8FAF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category filters */}
          <div className="flex flex-wrap gap-2 justify-center mb-10">
            {allCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all cursor-pointer ${
                  activeCategory === cat
                    ? "gradient-bg text-white shadow-md"
                    : "bg-white text-[#666666] border border-gray-200 hover:border-primary/30"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Featured post */}
          {featured && activeCategory === "All" && search === "" && (
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-10 group"
            >
              <Link
                href={`/blog/${featured.slug}`}
                className="block bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="grid md:grid-cols-2">
                  <div className={`relative h-64 md:h-auto bg-gradient-to-br ${postBgColors[0]} min-h-[280px]`}>
                    <div className="absolute inset-0 flex items-center justify-center opacity-60">
                      <BookOpen className="w-20 h-20 text-white" />
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/90 text-[#222222] text-xs font-bold rounded-full">
                        Featured
                      </span>
                    </div>
                  </div>
                  <div className="p-8 lg:p-10 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${categoryColors[featured.category] || "bg-gray-100 text-gray-700"}`}>
                        {featured.category}
                      </span>
                      <div className="flex items-center gap-1 text-[#6B6B6B] text-xs">
                        <Clock className="w-3.5 h-3.5" />
                        {featured.readTime}
                      </div>
                    </div>
                    <h2 className="font-heading font-bold text-[#222222] text-2xl lg:text-3xl mb-3 group-hover:text-primary transition-colors leading-tight">
                      {featured.title}
                    </h2>
                    <p className="text-[#666666] text-sm leading-relaxed mb-5">
                      {featured.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-xs text-[#6B6B6B]">
                        <Calendar className="w-3.5 h-3.5" />
                        {featured.date}
                      </div>
                      <span className="inline-flex items-center gap-1.5 text-primary text-sm font-semibold group-hover:underline">
                        Read Article
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          )}

          {/* Articles grid */}
          <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(activeCategory === "All" && search === "" ? rest : filtered).map((post, i) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="group"
              >
                <Link
                  href={`/blog/${post.slug}`}
                  className="block bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full flex flex-col"
                >
                  <div className={`relative h-48 bg-gradient-to-br ${postBgColors[post.id % postBgColors.length]}`}>
                    <div className="absolute inset-0 flex items-center justify-center opacity-50">
                      <BookOpen className="w-12 h-12 text-white" />
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${categoryColors[post.category] || "bg-white text-gray-700"}`}>
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <div className="flex items-center gap-3 text-xs text-[#6B6B6B] mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {post.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {post.readTime}
                      </div>
                    </div>
                    <h3 className="font-heading font-bold text-[#222222] text-base mb-2 group-hover:text-primary transition-colors leading-tight flex-1">
                      {post.title}
                    </h3>
                    <p className="text-sm text-[#666666] leading-relaxed mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-1.5 text-primary text-sm font-semibold">
                      Read More
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16">
              <p className="text-[#6B6B6B] text-lg">No articles found for your search.</p>
              <button
                onClick={() => { setSearch(""); setActiveCategory("All"); }}
                className="mt-3 text-primary font-medium hover:underline cursor-pointer"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-2xl lg:text-3xl font-bold text-[#222222] mb-3">
            Never Miss a Marketing Insight
          </h2>
          <p className="text-[#666666] mb-6">
            Get weekly strategies and tactics delivered straight to your inbox. No spam, ever.
          </p>
          <form className="flex gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 bg-[#F8FAF8] border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all"
            />
            <button
              type="submit"
              className="gradient-bg text-white font-semibold px-6 py-3 rounded-xl hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5 transition-all text-sm flex-shrink-0"
            >
              Subscribe
            </button>
          </form>
          <p className="text-xs text-[#6B6B6B] mt-3">
            Join 5,000+ marketers and business owners. Unsubscribe any time.
          </p>
        </div>
      </section>
    </>
  );
}
