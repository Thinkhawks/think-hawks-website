"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { X } from "lucide-react";

/** Where the visitor's choice is stored. */
export const COOKIE_CONSENT_KEY = "th-cookie-consent";
/** Fired on `window` once the visitor accepts or declines. */
export const COOKIE_CONSENT_EVENT = "th:cookie-consent";

export function CookieNotice() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Only show until the visitor has made a choice (accept OR decline).
    const choice = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!choice) {
      const timer = setTimeout(() => setVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  // Persist the choice. Analytics scripts should check this value
  // (`localStorage.getItem("th-cookie-consent") === "accepted"`) before loading.
  const choose = (consent: "accepted" | "declined") => {
    localStorage.setItem(COOKIE_CONSENT_KEY, consent);
    setVisible(false);
    // Let the WhatsApp popup know it can surface now without colliding.
    window.dispatchEvent(new CustomEvent(COOKIE_CONSENT_EVENT));
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 80 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed inset-x-4 bottom-24 z-50 mx-auto max-w-md glass rounded-2xl shadow-2xl p-5 border border-primary/20 sm:bottom-6"
        >
          <button
            onClick={() => choose("declined")}
            className="absolute top-3 right-3 text-[#666666] hover:text-[#222222] transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>

          <p className="text-[13px] text-[#444444] leading-relaxed mb-4 pr-4">
            🍪 We use cookies to enhance your experience, analyze traffic, and serve
            personalized content. By continuing you agree to our{" "}
            <a href="/privacy-policy" className="text-primary underline hover:text-primary-dark">
              Privacy Policy
            </a>
            .
          </p>

          <div className="flex gap-2">
            <button
              onClick={() => choose("accepted")}
              className="flex-1 gradient-bg text-white text-xs font-semibold py-2.5 rounded-xl hover:shadow-lg transition-all cursor-pointer"
            >
              Accept All
            </button>
            <button
              onClick={() => choose("declined")}
              className="flex-1 border border-gray-200 text-[#666666] text-xs font-semibold py-2.5 rounded-xl hover:bg-gray-50 transition-all cursor-pointer"
            >
              Decline
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
