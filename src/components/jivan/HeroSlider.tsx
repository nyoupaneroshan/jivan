// src/components/jivan/HeroSlider.tsx
"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const HERO_IMAGES = [
  {
    src: "/img/slider/IMG_6869.jpg",
    title: "Retreats in the heart of nature",
    subtitle: "Silent mornings, mindful movement, nourishing food, and space to reset deeply.",
    ctaPrimary: { label: "Explore retreats", href: "/meditation" },
    ctaSecondary: { label: "Talk to our team", href: "/contact" },
  },
  {
    src: "/img/slider/IMG_6882.jpg",
    title: "Yoga for every stage of practice",
    subtitle: "Beginner-friendly classes, deeper immersion, and advanced teacher training paths.",
    ctaPrimary: { label: "Explore yoga", href: "/services#yoga" },
    ctaSecondary: { label: "Book a session", href: "/contact" },
  },
  {
    src: "/img/slider/IMG_7142.jpg",
    title: "Meditation and inner stillness",
    subtitle: "Guided practices designed to calm the mind, steady the breath, and open the heart.",
    ctaPrimary: { label: "View meditation", href: "/meditation" },
    ctaSecondary: { label: "Ask a question", href: "/contact" },
  },
  {
    src: "/img/slider/IMG_7263.jpg",
    title: "Sound healing journeys",
    subtitle: "Himalayan singing bowls and therapeutic vibration for deep relaxation and release.",
    ctaPrimary: { label: "Explore healing", href: "/services#healing" },
    ctaSecondary: { label: "Enquire now", href: "/contact" },
  },
  {
    src: "/img/slider/IMG_7267.jpg",
    title: "Reiki and energy work",
    subtitle: "Gentle yet powerful sessions that support balance, clarity, and restoration.",
    ctaPrimary: { label: "Discover healing", href: "/services#healing" },
    ctaSecondary: { label: "Speak with us", href: "/contact" },
  },
  {
    src: "/img/slider/Singing_Bowl.jpg",
    title: "Healing through vibration",
    subtitle: "Experience chakra-balancing sound work in a grounded and nurturing setting.",
    ctaPrimary: { label: "View programs", href: "/services#healing" },
    ctaSecondary: { label: "Contact us", href: "/contact" },
  },
];

const AUTOPLAY_MS = 6000;
const RESUME_MS = 10000;

export function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isPausedByUser, setIsPausedByUser] = useState(false);
  const resumeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const current = HERO_IMAGES[index];
  const total = HERO_IMAGES.length;

  const clearResumeTimeout = () => {
    if (resumeTimeoutRef.current) {
      clearTimeout(resumeTimeoutRef.current);
      resumeTimeoutRef.current = null;
    }
  };

  const scheduleResume = useCallback(() => {
    clearResumeTimeout();
    resumeTimeoutRef.current = setTimeout(() => {
      if (!isPausedByUser) setIsAutoPlaying(true);
    }, RESUME_MS);
  }, [isPausedByUser]);

  const go = useCallback(
    (dir: number) => {
      setIsAutoPlaying(false);
      clearResumeTimeout();

      setIndex((prev) => {
        const next = prev + dir;
        if (next < 0) return total - 1;
        if (next >= total) return 0;
        return next;
      });

      if (!isPausedByUser) scheduleResume();
    },
    [total, isPausedByUser, scheduleResume]
  );

  const goToSlide = useCallback(
    (targetIndex: number) => {
      if (targetIndex === index) return;

      setIsAutoPlaying(false);
      clearResumeTimeout();
      setIndex(targetIndex);

      if (!isPausedByUser) scheduleResume();
    },
    [index, isPausedByUser, scheduleResume]
  );

  const toggleAutoplay = useCallback(() => {
    clearResumeTimeout();
    setIsPausedByUser((prev) => {
      const next = !prev;
      setIsAutoPlaying(!next);
      return next;
    });
  }, []);

  useEffect(() => {
    if (!isAutoPlaying || isPausedByUser) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % total);
    }, AUTOPLAY_MS);

    return () => clearInterval(interval);
  }, [isAutoPlaying, isPausedByUser, total]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") go(-1);
      if (e.key === "ArrowRight") go(1);
      if (e.key.toLowerCase() === " ") {
        const target = e.target as HTMLElement | null;
        const tag = target?.tagName?.toLowerCase();
        if (tag !== "input" && tag !== "textarea" && tag !== "button") {
          e.preventDefault();
          toggleAutoplay();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [go, toggleAutoplay]);

  useEffect(() => {
    return () => clearResumeTimeout();
  }, []);

  const slideLabel = useMemo(
    () => `Slide ${index + 1} of ${total}: ${current.title}`,
    [index, total, current.title]
  );

  return (
    <section
      className="relative left-1/2 right-1/2 -mx-[50vw] h-[76vh] min-h-[420px] max-h-[860px] w-screen overflow-hidden bg-[#0f0d0a]"
      aria-roledescription="carousel"
      aria-label="Featured Jivan Parivartan highlights"
      onMouseEnter={() => {
        if (!isPausedByUser) setIsAutoPlaying(false);
      }}
      onMouseLeave={() => {
        if (!isPausedByUser) setIsAutoPlaying(true);
      }}
      onFocusCapture={() => {
        if (!isPausedByUser) setIsAutoPlaying(false);
      }}
      onBlurCapture={() => {
        if (!isPausedByUser) setIsAutoPlaying(true);
      }}
    >
      {/* Slides */}
      {HERO_IMAGES.map((item, i) => {
        const isActive = i === index;

        return (
          <div
            key={item.src}
            className={`absolute inset-0 transition-[opacity,transform] duration-[1400ms] ease-out ${
              isActive ? "opacity-100 scale-100" : "opacity-0 scale-[1.04]"
            }`}
            aria-hidden={!isActive}
          >
            <Image
              src={item.src}
              alt={isActive ? item.title : ""}
              fill
              priority={i === 0}
              sizes="100vw"
              className="object-cover"
            />
          </div>
        );
      })}

      {/* Overlays */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.78),rgba(0,0,0,0.34)_45%,rgba(0,0,0,0.18))]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(16,185,129,0.08),transparent_30%),radial-gradient(circle_at_80%_30%,rgba(245,158,11,0.08),transparent_28%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.02] mix-blend-overlay bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')]" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col justify-end px-5 pb-16 sm:px-8 lg:px-10">
        <div className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 backdrop-blur-md">
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-white/88">
            Welcome to Jivan Parivartan
          </p>
        </div>

        <div className="max-w-3xl">
          <p className="sr-only" aria-live="polite">
            {slideLabel}
          </p>

          <h1
            key={`title-${index}`}
            className="max-w-2xl text-3xl font-extrabold leading-[1.05] text-white sm:text-4xl md:text-5xl lg:text-6xl"
          >
            {current.title}
          </h1>

          <p
            key={`subtitle-${index}`}
            className="mt-5 max-w-xl text-sm leading-relaxed text-white/84 sm:text-base md:text-lg"
          >
            {current.subtitle}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={current.ctaPrimary.href}
              className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-6 py-3 text-sm font-bold text-white shadow-[0_10px_30px_rgba(5,150,105,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-500"
            >
              {current.ctaPrimary.label}
            </Link>

            <Link
              href={current.ctaSecondary.href}
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-bold text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/16"
            >
              {current.ctaSecondary.label}
            </Link>
          </div>
        </div>
      </div>

      {/* Arrows */}
      <button
        type="button"
        onClick={() => go(-1)}
        className="absolute left-4 top-1/2 z-20 flex -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/35 p-3 text-white backdrop-blur-md transition-all duration-300 hover:bg-black/55 sm:left-6 sm:p-4"
        aria-label="Previous slide"
      >
        <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      <button
        type="button"
        onClick={() => go(1)}
        className="absolute right-4 top-1/2 z-20 flex -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/35 p-3 text-white backdrop-blur-md transition-all duration-300 hover:bg-black/55 sm:right-6 sm:p-4"
        aria-label="Next slide"
      >
        <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {/* Controls */}
      <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-3">
        <div className="rounded-full border border-white/10 bg-black/45 px-4 py-2 text-xs font-semibold text-white/92 backdrop-blur-md">
          <span className="tabular-nums">{String(index + 1).padStart(2, "0")}</span>
          <span className="mx-1.5 text-white/45">/</span>
          <span className="tabular-nums text-white/70">{String(total).padStart(2, "0")}</span>
        </div>

        <div className="flex items-center gap-2 rounded-full border border-white/10 bg-black/45 px-3 py-2 backdrop-blur-md">
          {HERO_IMAGES.map((slide, i) => (
            <button
              key={slide.src}
              type="button"
              onClick={() => goToSlide(i)}
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === index ? "true" : undefined}
              className={`relative h-2 rounded-full transition-all duration-300 ${
                i === index ? "w-8 bg-emerald-500" : "w-2 bg-white/40 hover:bg-white/65"
              }`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={toggleAutoplay}
          className="rounded-full border border-white/10 bg-black/45 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-white/80 backdrop-blur-md transition-all duration-300 hover:bg-black/60 hover:text-white"
          aria-pressed={!isAutoPlaying}
          aria-label={isAutoPlaying ? "Pause autoplay" : "Resume autoplay"}
        >
          {isAutoPlaying ? "Pause" : "Play"}
        </button>
      </div>
    </section>
  );
}