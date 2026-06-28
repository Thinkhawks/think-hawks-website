import Link from "next/link";
import { Calendar, Clock, ArrowLeft, ArrowRight, BookOpen } from "lucide-react";
import { blogPosts, blogContent } from "@/lib/data";

type Post = (typeof blogPosts)[number];

const categoryColors: Record<string, string> = {
  SEO: "bg-emerald-100 text-emerald-700",
  "Paid Ads": "bg-blue-100 text-blue-700",
  "Social Media": "bg-pink-100 text-pink-700",
  "Web Development": "bg-orange-100 text-orange-700",
  "Content Marketing": "bg-purple-100 text-purple-700",
  "E-commerce": "bg-teal-100 text-teal-700",
};

export function BlogPostContent({ post }: { post: Post }) {
  const sections = blogContent[post.slug] ?? [];
  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 bg-[#111111] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0d1a0d] via-[#111111] to-[#1a1a2e]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/10 rounded-full blur-[100px]" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-white/60 hover:text-white text-sm mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            Back to all articles
          </Link>
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span
              className={`px-3 py-1 rounded-full text-xs font-semibold ${
                categoryColors[post.category] || "bg-white/15 text-white"
              }`}
            >
              {post.category}
            </span>
            <span className="inline-flex items-center gap-1.5 text-white/55 text-xs">
              <Calendar className="w-3.5 h-3.5" aria-hidden="true" />
              {post.date}
            </span>
            <span className="inline-flex items-center gap-1.5 text-white/55 text-xs">
              <Clock className="w-3.5 h-3.5" aria-hidden="true" />
              {post.readTime}
            </span>
          </div>
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            {post.title}
          </h1>
          <p className="mt-5 text-white/65 text-lg leading-relaxed">{post.excerpt}</p>
          <p className="mt-6 text-white/45 text-sm">By {post.author}</p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
          <svg viewBox="0 0 1440 60" fill="none" className="w-full" preserveAspectRatio="none">
            <path d="M0 60L1440 60L1440 20C1200 55 720 0 360 35C180 52 0 20 0 20V60Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Article body */}
      <article className="py-14 lg:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {sections.map((section, i) => (
            <section key={i} className="mb-10 last:mb-0">
              <h2 className="font-heading font-bold text-[#222222] text-2xl mb-4">
                {section.heading}
              </h2>
              {section.paragraphs?.map((p, j) => (
                <p key={j} className="text-[#444444] leading-relaxed mb-4">
                  {p}
                </p>
              ))}
              {section.bullets && (
                <ul className="space-y-2.5 mt-3">
                  {section.bullets.map((b, j) => (
                    <li key={j} className="flex items-start gap-3 text-[#444444] leading-relaxed">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}

          {/* CTA */}
          <div className="mt-12 rounded-xl gradient-bg p-8 text-center text-white">
            <h3 className="font-heading font-bold text-xl mb-2">
              Want results like these for your business?
            </h3>
            <p className="text-white/85 text-sm mb-5 max-w-md mx-auto">
              Book a free strategy consultation and we&apos;ll show you exactly where your growth
              opportunities are.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-[#222222] font-semibold px-6 py-3 rounded-xl hover:shadow-lg transition-all"
            >
              Get Your Free Consultation
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </article>

      {/* Related */}
      <section className="py-14 lg:py-20 bg-[#F8FAF8] border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-bold text-[#222222] text-2xl mb-8">
            Keep reading
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {related.map((p) => (
              <Link
                key={p.id}
                href={`/blog/${p.slug}`}
                className="group block bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative h-40 bg-gradient-to-br from-primary to-primary-light flex items-center justify-center">
                  <BookOpen className="w-10 h-10 text-white/70" aria-hidden="true" />
                </div>
                <div className="p-5">
                  <span
                    className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold mb-2 ${
                      categoryColors[p.category] || "bg-gray-100 text-gray-700"
                    }`}
                  >
                    {p.category}
                  </span>
                  <h3 className="font-heading font-bold text-[#222222] text-base leading-tight group-hover:text-primary transition-colors">
                    {p.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
