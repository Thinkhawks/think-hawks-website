"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence, type PanInfo } from "framer-motion";
import { ChevronLeft, ChevronRight, ImagePlus, Pause, Play } from "lucide-react";
import Image from "next/image";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { websiteShowcase, type WebsiteScreen } from "@/lib/data";

const AUTOPLAY_MS = 4500;
const SCREEN_CYCLE_MS = 2200;
const MIN_AUTOSCROLL_PX = 40;
const PAN_PX_PER_SEC = 140;
const PAN_HOLD_SEC = 1.2;
const PAN_MIN_TRAVEL_SEC = 6;
const PAN_MAX_TRAVEL_SEC = 18;

const CARD_SIZES = "(max-width: 640px) 78vw, (max-width: 1024px) 62vw, 640px";

/** Long full-page captures pan slowly top-to-bottom instead of cropping to the top. */
function ScrollingScreenshot({
  image,
  alt,
  animate,
  priority,
}: {
  image: WebsiteScreen;
  alt: string;
  animate: boolean;
  priority: boolean;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [maxScroll, setMaxScroll] = useState(0);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const measure = () => {
      const renderedHeight = el.clientWidth * (image.h / image.w);
      setMaxScroll(Math.max(0, renderedHeight - el.clientHeight));
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, [image.h, image.w]);

  const shouldScroll = animate && maxScroll > MIN_AUTOSCROLL_PX;

  const { travelSec, times } = useMemo(() => {
    const travel = Math.min(
      PAN_MAX_TRAVEL_SEC,
      Math.max(PAN_MIN_TRAVEL_SEC, maxScroll / PAN_PX_PER_SEC)
    );
    const total = PAN_HOLD_SEC * 2 + travel * 2;
    return {
      travelSec: travel,
      times: [
        0,
        PAN_HOLD_SEC / total,
        (PAN_HOLD_SEC + travel) / total,
        (PAN_HOLD_SEC * 2 + travel) / total,
        1,
      ],
    };
  }, [maxScroll]);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden">
      <motion.div
        animate={shouldScroll ? { y: [0, 0, -maxScroll, -maxScroll, 0] } : { y: 0 }}
        transition={
          shouldScroll
            ? { duration: PAN_HOLD_SEC * 2 + travelSec * 2, times, repeat: Infinity, ease: "easeInOut" }
            : { duration: 0.3 }
        }
      >
        <Image
          src={image.src}
          alt={alt}
          width={image.w}
          height={image.h}
          sizes={CARD_SIZES}
          priority={priority}
          className="w-full h-auto"
        />
      </motion.div>
    </div>
  );
}

function BrowserFrame({
  item,
  isActive,
  paused,
  onTogglePause,
}: {
  item: (typeof websiteShowcase)[number];
  isActive: boolean;
  paused: boolean;
  onTogglePause: () => void;
}) {
  const [screen, setScreen] = useState(0);
  const { images } = item;
  const playing = isActive && !paused;

  useEffect(() => {
    if (!playing || images.length <= 1) return;
    const t = setInterval(() => setScreen((s) => (s + 1) % images.length), SCREEN_CYCLE_MS);
    return () => clearInterval(t);
  }, [playing, images.length]);

  const current = images[screen];

  return (
    <div className="w-full h-full bg-white rounded-2xl shadow-2xl shadow-black/20 overflow-hidden border border-black/5 flex flex-col">
      {/* Chrome bar */}
      <div className="flex items-center gap-2 px-4 py-3 bg-[#F0F1EE] border-b border-black/5 flex-shrink-0">
        <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
        <div className="ml-3 flex-1 bg-white rounded-full px-3 py-1 text-[11px] text-[#999999] truncate border border-black/5">
          {item.name}
        </div>
      </div>

      {/* Content */}
      <div className="relative flex-1 bg-[#FAFAF8] overflow-hidden">
        {current ? (
          <AnimatePresence mode="wait">
            <motion.div
              key={screen}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0"
            >
              <ScrollingScreenshot
                image={current}
                alt={`${item.name} screen ${screen + 1}`}
                animate={playing}
                priority={isActive}
              />
            </motion.div>
          </AnimatePresence>
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center gap-3 border-2 border-dashed border-black/10 m-3 rounded-xl">
            <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center">
              <ImagePlus className="w-5 h-5 text-primary" />
            </div>
            <p className="text-sm font-semibold text-[#888888]">{item.category}</p>
            <p className="text-xs text-[#aaaaaa]">Screenshot coming soon</p>
          </div>
        )}

        {images.length > 1 && (
          <div className="absolute bottom-3 right-3 flex gap-1 z-10">
            {images.map((_, i) => (
              <span
                key={i}
                className="w-1.5 h-1.5 rounded-full transition-colors duration-300"
                style={{ backgroundColor: i === screen ? "var(--color-primary)" : "rgba(0,0,0,0.15)" }}
              />
            ))}
          </div>
        )}

        {isActive && current && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onTogglePause();
            }}
            aria-label={paused ? "Play preview" : "Pause preview"}
            className="absolute bottom-3 left-3 z-10 w-8 h-8 rounded-full bg-black/50 hover:bg-black/65 backdrop-blur-sm flex items-center justify-center text-white cursor-pointer transition-colors"
          >
            {paused ? <Play className="w-3.5 h-3.5 ml-0.5" /> : <Pause className="w-3.5 h-3.5" />}
          </button>
        )}
      </div>
    </div>
  );
}

export function WebsiteShowcase() {
  const [active, setActive] = useState(0);
  const [hoverPaused, setHoverPaused] = useState(false);
  const [manualPaused, setManualPaused] = useState(false);
  const paused = hoverPaused || manualPaused;
  const count = websiteShowcase.length;

  const goTo = useCallback(
    (i: number) => setActive(((i % count) + count) % count),
    [count]
  );
  const next = useCallback(() => goTo(active + 1), [active, goTo]);
  const prev = useCallback(() => goTo(active - 1), [active, goTo]);

  const togglePause = useCallback(() => {
    // The button sits inside the hover-to-pause zone, so clicking "Play" while still
    // hovering must also clear the hover suppression or playback never resumes.
    setHoverPaused(false);
    setManualPaused((p) => !p);
  }, []);

  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  useEffect(() => {
    if (paused || count <= 1) return;
    timerRef.current = setInterval(next, AUTOPLAY_MS);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [paused, next, count]);

  const handleDragEnd = (_: unknown, info: PanInfo) => {
    if (info.offset.x < -80) next();
    else if (info.offset.x > 80) prev();
  };

  if (count === 0) return null;

  return (
    <section className="py-20 lg:py-28 bg-[#F8FAF8] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Our Portfolio"
          title="Websites We've "
          highlight="Actually Built"
          description="A look inside real projects — swipe through, or let it play."
        />

        <div
          className="relative mt-14 h-[380px] sm:h-[440px] lg:h-[480px]"
          style={{ perspective: "1400px" }}
          onMouseEnter={() => setHoverPaused(true)}
          onMouseLeave={() => setHoverPaused(false)}
        >
          {websiteShowcase.map((item, i) => {
            let offset = i - active;
            if (offset > count / 2) offset -= count;
            if (offset < -count / 2) offset += count;

            const isActive = offset === 0;
            const abs = Math.abs(offset);
            if (abs > 1) return null;

            return (
              <motion.div
                key={item.id}
                className="absolute inset-0 mx-auto w-[78%] sm:w-[62%] lg:w-[50%] cursor-grab active:cursor-grabbing"
                style={{ zIndex: 10 - abs }}
                animate={{
                  x: `${offset * 62}%`,
                  scale: isActive ? 1 : 0.82,
                  opacity: isActive ? 1 : 0.45,
                  rotateY: offset * -8,
                }}
                transition={{ type: "spring", stiffness: 260, damping: 30 }}
                drag={isActive ? "x" : false}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.6}
                onDragEnd={handleDragEnd}
                onClick={() => !isActive && goTo(i)}
              >
                <BrowserFrame
                  key={`${item.id}-${isActive}`}
                  item={item}
                  isActive={isActive}
                  paused={paused}
                  onTogglePause={togglePause}
                />
              </motion.div>
            );
          })}
        </div>

        {/* Controls */}
        <div className="mt-8 flex items-center justify-center gap-6">
          <button
            onClick={prev}
            aria-label="Previous project"
            className="w-11 h-11 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center text-[#666666] hover:text-primary hover:border-primary/30 transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2">
            {websiteShowcase.map((item, i) => (
              <button
                key={item.id}
                onClick={() => goTo(i)}
                aria-label={`Go to ${item.name}`}
                className="relative h-2 rounded-full transition-all duration-300 cursor-pointer"
                style={{ width: i === active ? 24 : 8, backgroundColor: i === active ? "var(--color-primary)" : "#D9DED3" }}
              />
            ))}
          </div>

          <button
            onClick={next}
            aria-label="Next project"
            className="w-11 h-11 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center text-[#666666] hover:text-primary hover:border-primary/30 transition-colors cursor-pointer"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        <AnimatePresence mode="wait">
          <motion.p
            key={active}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.25 }}
            className="mt-4 text-center text-sm font-medium text-[#666666]"
          >
            {websiteShowcase[active].name}
            <span className="text-[#aaaaaa]"> — {websiteShowcase[active].category}</span>
          </motion.p>
        </AnimatePresence>
      </div>
    </section>
  );
}
