import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export type LegalBlock = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
};

export function LegalShell({
  title,
  updated,
  intro,
  blocks,
}: {
  title: string;
  updated: string;
  intro: string;
  blocks: LegalBlock[];
}) {
  return (
    <>
      <Navbar />
      <main>
        <section className="relative pt-32 pb-14 bg-[#111111] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0d1a0d] via-[#111111] to-[#1a1a2e]" />
          <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              {title}
            </h1>
            <p className="mt-3 text-white/50 text-sm">Last updated: {updated}</p>
            <p className="mt-5 text-white/65 leading-relaxed">{intro}</p>
          </div>
        </section>

        <section className="py-14 lg:py-20 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            {blocks.map((block, i) => (
              <div key={i} className="mb-9 last:mb-0">
                <h2 className="font-heading font-bold text-[#222222] text-xl mb-3">
                  {block.heading}
                </h2>
                {block.paragraphs?.map((p, j) => (
                  <p key={j} className="text-[#444444] leading-relaxed mb-3">
                    {p}
                  </p>
                ))}
                {block.bullets && (
                  <ul className="space-y-2 mt-2">
                    {block.bullets.map((b, j) => (
                      <li key={j} className="flex items-start gap-3 text-[#444444] leading-relaxed">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
