// src/components/jivan/HeroSlider.tsx
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const HERO_IMAGES = [
  {
    src: "/img/IMG_6869.jpg",
    title: "Retreats in the heart of nature",
    subtitle: "Silent mornings, mindful movement and nourishing food.",
  },
  {
    src: "/img/IMG_6882.jpg",
    title: "Yoga for every body",
    subtitle: "Beginner‑friendly classes and advanced teacher trainings.",
  },
  {
    src: "/img/IMG_7142.jpg",
    title: "Meditation & inner stillness",
    subtitle: "Guided practices to calm the mind and open the heart.",
  },
  {
    src: "/img/IMG_7263.jpg",
    title: "Sound healing journeys",
    subtitle: "Himalayan singing bowls for deep relaxation.",
  },
  {
    src: "/img/IMG_7267.jpg",
    title: "Reiki & energy work",
    subtitle: "Subtle yet powerful sessions to restore balance.",
  },
  {
    src: "/img/Singing_Bowl.jpg",
    title: "Healing through vibration",
    subtitle: "Experience chakra balancing with singing bowls.",
  },
  {
    src: "/img/color-page.jpg",
    title: "Transformation from within",
    subtitle: "Programs designed to support long‑term change.",
  },
  {
    src: "/img/cream.jpg",
    title: "Soft, grounded spaces",
    subtitle: "A calm environment to unwind and recharge.",
  },
  {
    src: "/img/nepali-paper.jpg",
    title: "Rooted in Nepal",
    subtitle: "Traditional wisdom blended with modern understanding.",
  },
];

export function HeroSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setIndex((prev) => (prev + 1) % HERO_IMAGES.length),
      6000
    );
    return () => clearInterval(interval);
  }, []);

  const go = (dir: number) => {
    setIndex((prev) => {
      const next = prev + dir;
      if (next < 0) return HERO_IMAGES.length - 1;
      if (next >= HERO_IMAGES.length) return 0;
      return next;
    });
  };

  const current = HERO_IMAGES[index];

  return (
    <section className="relative w-screen left-1/2 right-1/2 -mx-[50vw] h-[70vh] min-h-[360px] max-h-[780px] overflow-hidden bg-black">
      {/* Slides */}
      {HERO_IMAGES.map((item, i) => (
        <div
          key={item.src}
          className={`absolute inset-0 transition-opacity duration-700 ${
            i === index ? "opacity-100" : "opacity-0"
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
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/40 to-black/15" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col justify-end px-4 pb-10 sm:px-8 lg:px-10">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-white/80">
          Welcome to Jivan Parivartan
        </p>
        <h1 className="max-w-2xl text-2xl font-bold text-white sm:text-3xl md:text-4xl lg:text-5xl">
          {current.title}
        </h1>
        <p className="mt-3 max-w-xl text-xs text-white/85 sm:text-sm md:text-base">
          {current.subtitle}
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link
            href="/meditation"
            className="pointer-events-auto rounded-full bg-emerald-500 px-5 py-2 text-xs font-semibold text-white shadow-md hover:bg-emerald-600 sm:text-sm"
          >
            Explore retreats
          </Link>
          <Link
            href="/contact"
            className="pointer-events-auto rounded-full border border-white/70 px-5 py-2 text-xs font-semibold text-white hover:bg-white/10 sm:text-sm"
          >
            Talk to our team
          </Link>
        </div>
      </div>

      {/* Arrows */}
      <button
        type="button"
        onClick={() => go(-1)}
        className="group pointer-events-auto absolute left-4 top-1/2 flex -translate-y-1/2 items-center justify-center rounded-full bg-black/40 p-3 text-white shadow-lg backdrop-blur hover:bg-black/60"
        aria-label="Previous slide"
      >
        <span className="text-lg sm:text-xl">◀</span>
      </button>
      <button
        type="button"
        onClick={() => go(1)}
        className="group pointer-events-auto absolute right-4 top-1/2 flex -translate-y-1/2 items-center justify-center rounded-full bg-black/40 p-3 text-white shadow-lg backdrop-blur hover:bg-black/60"
        aria-label="Next slide"
      >
        <span className="text-lg sm:text-xl">▶</span>
      </button>

      {/* Dots + counter */}
      <div className="pointer-events-auto absolute bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-3 rounded-full bg-black/40 px-4 py-2 text-[11px] text-white/80 backdrop-blur">
        <span>
          {index + 1} / {HERO_IMAGES.length}
        </span>
        <div className="flex gap-1.5">
          {HERO_IMAGES.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIndex(i)}
              className={`h-2.5 w-2.5 rounded-full border border-white/70 transition ${
                i === index ? "bg-white" : "bg-white/20"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
