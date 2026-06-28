"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { navLinks } from "@/lib/data";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const pathname = usePathname();
  const megaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    // Intentionally sync menu UI to the external router state: collapse the
    // mobile drawer and mega menu whenever the route changes after a click.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMobileOpen(false);
    setMegaMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-white/90 backdrop-blur-xl border-b border-gray-100 shadow-sm"
            : "bg-transparent"
        )}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center flex-shrink-0 py-2 pr-4">
              <Image
                src="/logo.png"
                alt="Think Hawks"
                width={149}
                height={159}
                className={cn(
                  "w-auto object-contain transition-all duration-300",
                  "h-[40px] sm:h-[46px] lg:h-[56px]",
                  scrolled ? "brightness-100" : "brightness-[3]"
                )}
                priority
              />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) =>
                link.megaMenu ? (
                  <div
                    key={link.label}
                    ref={megaRef}
                    className="relative"
                    onMouseEnter={() => setMegaMenuOpen(true)}
                    onMouseLeave={() => setMegaMenuOpen(false)}
                  >
                    <button
                      className={cn(
                        "flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                        scrolled
                          ? isActive(link.href)
                            ? "text-primary"
                            : "text-[#444444] hover:text-primary"
                          : "text-white/90 hover:text-white"
                      )}
                    >
                      {link.label}
                      <ChevronDown
                        className={cn(
                          "w-3.5 h-3.5 transition-transform duration-200",
                          megaMenuOpen && "rotate-180"
                        )}
                      />
                    </button>

                    <AnimatePresence>
                      {megaMenuOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-[880px] max-w-[95vw]"
                        >
                          <div className="bg-white rounded-xl shadow-2xl p-6">
                            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                              {link.categories?.map((cat) => (
                                <div key={cat.name}>
                                  <p className="text-xs font-bold text-primary uppercase tracking-widest mb-3">
                                    {cat.name}
                                  </p>
                                  <ul className="space-y-1.5">
                                    {cat.items.map((item) => (
                                      <li key={item.label}>
                                        <Link
                                          href={item.href}
                                          className="flex items-center gap-2 text-sm text-[#555353] hover:text-primary hover:bg-primary/5 px-2.5 py-1.5 rounded-lg transition-all duration-150"
                                        >
                                          <span className="w-1 h-1 rounded-full bg-primary/50 flex-shrink-0" />
                                          {item.label}
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              ))}
                            </div>

                            <div className="mt-5 pt-5 border-t border-gray-100 flex items-center justify-between">
                              <p className="text-sm text-[#666666]">
                                Ready to grow your business?
                              </p>
                              <Link
                                href="/contact"
                                className="gradient-bg text-white text-sm font-semibold px-5 py-2 rounded-xl hover:shadow-lg hover:shadow-primary/20 transition-all"
                              >
                                Get Free Consultation
                              </Link>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={cn(
                      "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                      scrolled
                        ? isActive(link.href)
                          ? "text-primary"
                          : "text-[#444444] hover:text-primary"
                        : isActive(link.href)
                        ? "text-primary-light"
                        : "text-white/90 hover:text-white"
                    )}
                  >
                    {link.label}
                  </Link>
                )
              )}
            </div>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="tel:+923284580621"
                className={cn(
                  "flex items-center gap-1.5 text-sm font-medium transition-colors",
                  scrolled ? "text-[#555353] hover:text-primary" : "text-white/80 hover:text-white"
                )}
              >
                <Phone className="w-3.5 h-3.5" />
                <span>+92 328 458 0621</span>
              </a>
              <Link
                href="/contact"
                className="gradient-bg text-white text-sm font-semibold px-5 py-2.5 rounded-xl shadow-md hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5 transition-all duration-200"
              >
                Get Free Consultation
              </Link>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={cn(
                "lg:hidden p-2 rounded-lg transition-colors cursor-pointer",
                scrolled ? "text-[#222222] hover:bg-gray-100" : "text-white hover:bg-white/10"
              )}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div
              className="absolute inset-0 bg-black/50"
              onClick={() => setMobileOpen(false)}
            />
            <div className="absolute top-0 right-0 h-full w-4/5 max-w-sm bg-white shadow-2xl overflow-y-auto">
              <div className="flex items-center justify-between p-5 border-b border-gray-100">
                <Link href="/" className="flex items-center">
                  <Image
                    src="/logo.png"
                    alt="Think Hawks"
                    width={149}
                    height={159}
                    className="h-[42px] w-auto object-contain"
                  />
                </Link>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-2 text-[#666666] hover:text-[#222222] cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-5 space-y-1">
                {navLinks.map((link) =>
                  link.megaMenu ? (
                    <MobileMegaMenu key={link.label} link={link} />
                  ) : (
                    <Link
                      key={link.label}
                      href={link.href}
                      className={cn(
                        "flex items-center px-4 py-3 rounded-xl text-sm font-medium transition-all",
                        isActive(link.href)
                          ? "bg-primary/10 text-primary"
                          : "text-[#444444] hover:bg-gray-50"
                      )}
                    >
                      {link.label}
                    </Link>
                  )
                )}
              </div>

              <div className="p-5 border-t border-gray-100 space-y-3">
                <a
                  href="tel:+923284580621"
                  className="flex items-center gap-2 text-sm text-[#555353] px-4 py-3 rounded-xl hover:bg-gray-50"
                >
                  <Phone className="w-4 h-4 text-primary" />
                  +92 328 458 0621
                </a>
                <Link
                  href="/contact"
                  className="block text-center gradient-bg text-white font-semibold py-3 rounded-xl shadow-md"
                >
                  Get Free Consultation
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function MobileMegaMenu({ link }: { link: (typeof navLinks)[number] }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full px-4 py-3 rounded-xl text-sm font-medium text-[#444444] hover:bg-gray-50 transition-all cursor-pointer"
      >
        {link.label}
        <ChevronDown
          className={cn(
            "w-4 h-4 transition-transform duration-200",
            open && "rotate-180"
          )}
        />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <div className="pb-2 space-y-3">
              {link.categories?.map((cat) => (
                <div key={cat.name} className="px-4">
                  <p className="text-[10px] font-bold text-primary uppercase tracking-widest mb-2 pt-2">
                    {cat.name}
                  </p>
                  {cat.items.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className={cn(
                        "flex items-center gap-2 py-2 text-sm transition-colors",
                        pathname === item.href ? "text-primary" : "text-[#555555] hover:text-primary"
                      )}
                    >
                      <span className="w-1 h-1 rounded-full bg-primary/50" />
                      {item.label}
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

