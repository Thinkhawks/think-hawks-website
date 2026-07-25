"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { X } from "lucide-react";
import { COOKIE_CONSENT_KEY, COOKIE_CONSENT_EVENT } from "./CookieNotice";

const PHONE = "923284580621";
const MESSAGE = encodeURIComponent(
  "Hello Think Hawks! I'd like to know more about your digital marketing services."
);

export function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const dismissedRef = useRef(false);

  // Auto-open the popup once after 4 s on first visit — but never while the
  // cookie notice is still up. On narrow screens that notice spans the full
  // width and lands on top of this card, burying the "Start Chat" CTA.
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    const openLater = () => {
      timer = setTimeout(() => {
        if (!dismissedRef.current) setIsOpen(true);
      }, 4000);
    };

    // localStorage throws when storage is blocked (private mode, blocked
    // cookies). Treat that as "no choice recorded" rather than breaking.
    let consent: string | null = null;
    try {
      consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    } catch {
      consent = null;
    }

    if (consent) {
      openLater();
    } else {
      window.addEventListener(COOKIE_CONSENT_EVENT, openLater, { once: true });
    }

    return () => {
      clearTimeout(timer);
      window.removeEventListener(COOKIE_CONSENT_EVENT, openLater);
    };
  }, []);

  const handleDismiss = () => {
    setIsOpen(false);
    setIsDismissed(true);
    dismissedRef.current = true;
  };

  if (isDismissed && !isOpen) {
    // Show a minimal ghost button so user can re-open
    return (
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        onClick={() => { setIsDismissed(false); dismissedRef.current = false; setIsOpen(true); }}
        className="fixed bottom-6 left-6 z-50 w-12 h-12 bg-green-500 hover:bg-green-600 rounded-full shadow-xl flex items-center justify-center transition-colors duration-200 cursor-pointer"
        aria-label="Open WhatsApp chat"
      >
        <WhatsAppIcon className="w-6 h-6 text-white" />
      </motion.button>
    );
  }

  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col items-start gap-3">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.95 }}
            transition={{ duration: 0.22 }}
            className="glass rounded-2xl shadow-2xl p-4 w-[270px] border border-green-200"
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <WhatsAppIcon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm font-bold text-[#222222] leading-none">Think Hawks</p>
                  <p className="text-[11px] text-green-600 mt-0.5 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block" />
                    Online now
                  </p>
                </div>
              </div>
              <button
                onClick={handleDismiss}
                className="w-7 h-7 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors cursor-pointer flex-shrink-0"
                aria-label="Close WhatsApp chat"
              >
                <X className="w-3.5 h-3.5 text-gray-500" />
              </button>
            </div>

            {/* Chat bubble */}
            <div className="bg-[#DCF8C6] rounded-xl rounded-tl-sm px-3 py-2.5 mb-3">
              <p className="text-[13px] text-[#333] leading-relaxed">
                Hi there! 👋 Ready to grow your business? We&apos;re here to help!
              </p>
              <p className="text-[10px] text-gray-500 text-right mt-1">Just now</p>
            </div>

            <a
              href={`https://wa.me/${PHONE}?text=${MESSAGE}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-green-500 hover:bg-green-600 text-white text-sm font-semibold py-2.5 rounded-xl transition-all duration-200 hover:shadow-lg"
            >
              <WhatsAppIcon className="w-4 h-4" />
              Start Chat on WhatsApp
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Trigger button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="relative w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full shadow-2xl flex items-center justify-center transition-colors duration-200 cursor-pointer"
        aria-label={isOpen ? "Close WhatsApp chat" : "Chat on WhatsApp"}
      >
        <span className="absolute inset-0 rounded-full bg-green-400 animate-ping-slow" />
        <AnimatePresence mode="wait" initial={false}>
          {isOpen ? (
            <motion.span
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="relative z-10"
            >
              <X className="w-6 h-6 text-white" />
            </motion.span>
          ) : (
            <motion.span
              key="wa"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="relative z-10"
            >
              <WhatsAppIcon className="w-7 h-7 text-white" />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}
