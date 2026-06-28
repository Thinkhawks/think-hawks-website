"use client";

import { MotionConfig } from "framer-motion";

/**
 * Makes every Framer Motion animation respect the visitor's
 * "prefers-reduced-motion" system setting. When reduced motion is on,
 * transform/layout animations are disabled (opacity still fades), which
 * is the recommended accessible behavior.
 */
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
