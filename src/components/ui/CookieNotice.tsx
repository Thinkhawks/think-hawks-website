"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { X } from "lucide-react";

export function CookieNotice() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("th-cookies-accepted");
    if (!accepted) {
      const timer = setTimeout(() => setVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("th-cookies-accepted", "true");
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 80 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed bottom-24 right-6 z-50 max-w-sm glass rounded-2xl shadow-2xl p-5 border border-primary/20"
        >
          <button
            onClick={() => setVisible(false)}
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
              onClick={accept}
              className="flex-1 gradient-bg text-white text-xs font-semibold py-2.5 rounded-xl hover:shadow-lg transition-all cursor-pointer"
            >
              Accept All
            </button>
            <button
              onClick={() => setVisible(false)}
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
