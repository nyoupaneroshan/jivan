// src/components/jivan/HeroSlider.tsx
"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";

const HERO_IMAGES = [
  {
    src: "/img/slider/IMG_6869.jpg",
    title: "Retreats in the heart of nature",
    subtitle: "Silent mornings, mindful movement and nourishing food.",
  },
  {
    src: "/img/slider/IMG_6882.jpg",
    title: "Yoga for every body",
    subtitle: "Beginner‑friendly classes and advanced teacher trainings.",
  },
  {
    src: "/img/slider/IMG_7142.jpg",
    title: "Meditation & inner stillness",
    subtitle: "Guided practices to calm the mind and open the heart.",
  },
  {
    src: "/img/slider/IMG_7263.jpg",
    title: "Sound healing journeys",
    subtitle: "Himalayan singing bowls for deep relaxation.",
  },
  {
    src: "/img/slider/IMG_7267.jpg",
    title: "Reiki & energy work",
    subtitle: "Subtle yet powerful sessions to restore balance.",
  },
  {
    src: "/img/slider/Singing_Bowl.jpg",
    title: "Healing through vibration",
    subtitle: "Experience chakra balancing with singing bowls.",
  },
  // {
  //   src: "/img/slider/color-page.jpg",
  //   title: "Transformation from within",
  //   subtitle: "Programs designed to support long‑term change.",
  // },
  // {
  //   src: "/img/slider/cream.jpg",
  //   title: "Soft, grounded spaces",
  //   subtitle: "A calm environment to unwind and recharge.",
  // },
  // {
  //   src: "/img/slider/nepali-paper.jpg",
  //   title: "Rooted in Nepal",
  //   subtitle: "Traditional wisdom blended with modern understanding.",
  // },
];

export function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [direction, setDirection] = useState<"left" | "right">("right");

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setDirection("right");
      setIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const go = useCallback((dir: number) => {
    setIsAutoPlaying(false);
    setDirection(dir > 0 ? "right" : "left");
    
    setIndex((prev) => {
      const next = prev + dir;
      if (next < 0) return HERO_IMAGES.length - 1;
      if (next >= HERO_IMAGES.length) return 0;
      return next;
    });

    // Resume autoplay after 10 seconds
    setTimeout(() => setIsAutoPlaying(true), 10000);
  }, []);

  const goToSlide = useCallback((targetIndex: number) => {
    setIsAutoPlaying(false);
    setDirection(targetIndex > index ? "right" : "left");
    setIndex(targetIndex);
    
    // Resume autoplay after 10 seconds
    setTimeout(() => setIsAutoPlaying(true), 10000);
  }, [index]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") go(-1);
      if (e.key === "ArrowRight") go(1);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [go]);

  const current = HERO_IMAGES[index];

  return (
    <section 
      className="relative w-screen left-1/2 right-1/2 -mx-[50vw] h-[70vh] min-h-[360px] max-h-[780px] overflow-hidden bg-black"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Slides */}
      {HERO_IMAGES.map((item, i) => (
        <div
          key={item.src}
          className={`absolute inset-0 transition-all duration-1000 ${
            i === index 
              ? "opacity-100 scale-100" 
              : direction === "right"
              ? "opacity-0 scale-105 translate-x-10"
              : "opacity-0 scale-105 -translate-x-10"
          }`}
        >
          <Image
            src={item.src}
            alt={item.title}
            fill
            className="object-cover"
            priority={i === 0}
          />
        </div>
      ))}

      {/* Overlays */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/45 to-black/20" />
      
      {/* Animated grain texture */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.015] mix-blend-overlay bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')]" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col justify-end px-4 pb-12 sm:px-8 lg:px-10">
        {/* Badge with animation */}
        <div className="mb-3 inline-flex items-center gap-2 w-fit">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/90 animate-fade-in">
            Welcome to Jivan Parivartan
          </p>
        </div>

        {/* Title with slide-in animation */}
        <h1 
          key={`title-${index}`}
          className="max-w-2xl text-2xl font-bold text-white sm:text-3xl md:text-4xl lg:text-5xl animate-slide-up leading-tight"
        >
          {current.title}
        </h1>

        {/* Subtitle with delayed slide-in */}
        <p 
          key={`subtitle-${index}`}
          className="mt-4 max-w-xl text-sm text-white/90 sm:text-base md:text-lg animate-slide-up-delayed leading-relaxed"
        >
          {current.subtitle}
        </p>

        {/* CTA Buttons with staggered animation */}
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/meditation"
            className="group pointer-events-auto relative overflow-hidden rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in-1"
          >
            <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            <span className="relative">Explore retreats</span>
          </Link>
          <Link
            href="/contact"
            className="group pointer-events-auto relative overflow-hidden rounded-full border-2 border-white/80 bg-white/10 backdrop-blur-md px-6 py-3 text-sm font-semibold text-white hover:bg-white/20 hover:border-white transition-all duration-300 hover:scale-105 animate-fade-in-2"
          >
            <span className="relative">Talk to our team</span>
          </Link>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        type="button"
        onClick={() => go(-1)}
        className="group pointer-events-auto absolute left-4 sm:left-6 top-1/2 flex -translate-y-1/2 items-center justify-center rounded-full bg-black/50 backdrop-blur-md p-3 sm:p-4 text-white shadow-xl hover:bg-black/70 transition-all duration-300 hover:scale-110 active:scale-95"
        aria-label="Previous slide"
      >
        <svg className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 group-hover:-translate-x-1" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
      </button>

      <button
        type="button"
        onClick={() => go(1)}
        className="group pointer-events-auto absolute right-4 sm:right-6 top-1/2 flex -translate-y-1/2 items-center justify-center rounded-full bg-black/50 backdrop-blur-md p-3 sm:p-4 text-white shadow-xl hover:bg-black/70 transition-all duration-300 hover:scale-110 active:scale-95"
        aria-label="Next slide"
      >
        <svg className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 group-hover:translate-x-1" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
        </svg>
      </button>

      {/* Progress bar & Dots */}
      <div className="pointer-events-auto absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
        {/* Counter */}
        <div className="rounded-full bg-black/60 backdrop-blur-md px-4 py-2 text-xs font-semibold text-white/90 shadow-lg border border-white/10">
          <span className="tabular-nums">{String(index + 1).padStart(2, '0')}</span>
          <span className="text-white/50 mx-1.5">/</span>
          <span className="text-white/70 tabular-nums">{String(HERO_IMAGES.length).padStart(2, '0')}</span>
        </div>

        {/* Dots */}
        <div className="flex gap-2 p-2 rounded-full bg-black/60 backdrop-blur-md shadow-lg border border-white/10">
          {HERO_IMAGES.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => goToSlide(i)}
              className={`group relative h-2 rounded-full transition-all duration-300 ${
                i === index 
                  ? "w-8 bg-emerald-500" 
                  : "w-2 bg-white/40 hover:bg-white/60 hover:w-4"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            >
              {/* Progress indicator for active slide */}
              {i === index && isAutoPlaying && (
                <div 
                  className="absolute inset-0 bg-emerald-600 rounded-full origin-left animate-progress"
                  style={{ animationDuration: '6s' }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Pause/Play indicator */}
        <div className="text-[10px] text-white/50 uppercase tracking-wider font-medium">
          {isAutoPlaying ? (
            <span className="flex items-center gap-1.5">
              <span className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse" />
              Auto-playing
            </span>
          ) : (
            <span>Paused</span>
          )}
        </div>
      </div>
    </section>
  );
}
