"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface SectionHeaderProps {
  badge?: string;
  title: string;
  highlight?: string;
  description?: string;
  centered?: boolean;
  className?: string;
  light?: boolean;
}

export function SectionHeader({
  badge,
  title,
  highlight,
  description,
  centered = true,
  className,
  light = false,
}: SectionHeaderProps) {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  const titleParts = highlight ? title.split(highlight) : [title];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        centered ? "text-center" : "text-left",
        "max-w-3xl",
        centered && "mx-auto",
        className
      )}
    >
      {badge && (
        <span
          className={cn(
            "inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wide mb-4",
            light
              ? "bg-white/15 text-white/80"
              : "bg-primary/10 text-primary"
          )}
        >
          {badge}
        </span>
      )}

      <h2
        className={cn(
          "font-heading text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight [text-wrap:balance]",
          light ? "text-white" : "text-[#222222]"
        )}
      >
        {highlight ? (
          <>
            {titleParts[0]}
            <span className={light ? "text-primary-light" : "text-primary"}>{highlight}</span>
            {titleParts[1]}
          </>
        ) : (
          title
        )}
      </h2>

      {description && (
        <p
          className={cn(
            "mt-4 text-lg leading-relaxed",
            light ? "text-white/75" : "text-[#666666]"
          )}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}
