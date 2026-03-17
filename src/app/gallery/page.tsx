"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { Breadcrumb } from "@/components/jivan/Breadcrumb";
import { PageHero } from "@/components/jivan/PageHero";
import { X, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react";

type Category = { id: string; label: string };
type Item = { src: string; alt: string; category: string };

const PAGE_SIZE = 18;

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function ShimmerSkeleton() {
  return (
    <div className="absolute inset-0">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-100 via-gray-200 to-gray-100 animate-pulse" />
      <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/55 to-transparent animate-shimmer" />
    </div>
  );
}

function GalleryCard({
  item,
  index,
  onClick,
}: {
  item: Item;
  index: number;
  onClick: () => void;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [revealed, setRevealed] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);

  // Reveal once when card is near viewport (smooth entrance)
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        setRevealed(true);
        io.disconnect();
      },
      { root: null, threshold: 0, rootMargin: "180px" }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Stagger a bit for “premium” feel, but cap delay so it doesn’t get sluggish
  const delayMs = Math.min(index, 12) * 35;

  return (
    <figure
      ref={ref as any}
      onClick={onClick}
      className={cn(
        "group relative overflow-hidden rounded-2xl bg-white border border-green-100 cursor-pointer",
        "shadow-[0_6px_18px_rgba(0,0,0,0.08)] hover:shadow-[0_18px_40px_rgba(0,0,0,0.16)]",
        "transition-[transform,box-shadow] duration-500 ease-out hover:-translate-y-2",
        "will-change-transform",
        revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
      )}
      style={{ transitionDelay: `${delayMs}ms` }}
    >
      <div className="aspect-[4/3] w-full overflow-hidden bg-gray-100 relative">
        {!imgLoaded && <ShimmerSkeleton />}

        <img
          src={item.src}
          alt={item.alt}
          loading="lazy"
          onLoad={() => setImgLoaded(true)}
          className={cn(
            "h-full w-full object-cover transform",
            "transition-[transform,opacity] duration-700 ease-out",
            "group-hover:scale-[1.07]",
            imgLoaded ? "opacity-100" : "opacity-0"
          )}
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur flex items-center justify-center text-green-600 transition-all duration-300 scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100">
          <ZoomIn size={20} />
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-5">
          <h3 className="text-white font-bold text-lg leading-snug line-clamp-2">
            {item.alt}
          </h3>
        </div>
      </div>
    </figure>
  );
}

export default function GalleryPage() {
  const breadcrumbItems = [{ label: "Home", href: "/" }, { label: "Gallery" }];

  const [categories, setCategories] = useState<Category[]>([{ id: "all", label: "All" }]);
  const [active, setActive] = useState<string>("all");

  const [items, setItems] = useState<Item[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);

  const [lightbox, setLightbox] = useState<number | null>(null);

  const sentinelRef = useRef<HTMLDivElement | null>(null);

  async function load(p: number, category: string, mode: "replace" | "append") {
    setLoading(true);
    try {
      const res = await fetch(
        `/api/gallery?category=${encodeURIComponent(category)}&page=${p}&limit=${PAGE_SIZE}`,
        { cache: "no-store" }
      );
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data: { categories: Category[]; items: Item[]; hasMore: boolean } = await res.json();

      setCategories(data.categories);
      setHasMore(data.hasMore);
      setItems((prev) => (mode === "replace" ? data.items : [...prev, ...data.items]));
    } finally {
      setLoading(false);
    }
  }

  // Initial load + when category changes
  useEffect(() => {
    setItems([]);
    setPage(1);
    setHasMore(true);
    setLightbox(null);
    load(1, active, "replace");
  }, [active]);

  // Infinite scroll (preload earlier to feel smoother)
  useEffect(() => {
    const el = sentinelRef.current;
    if (!el) return;
    if (!hasMore || loading) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        setPage((prev) => prev + 1);
      },
      { root: null, threshold: 0, rootMargin: "900px" }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [hasMore, loading]);

  // When page increments, fetch next page
  useEffect(() => {
    if (page === 1) return;
    if (!hasMore) return;
    load(page, active, "append");
  }, [page]);

  const filtered = useMemo(() => items, [items]);

  const openLightbox = (index: number) => {
    setLightbox(index);
    document.body.style.overflow = "hidden";
  };
  const closeLightbox = () => {
    setLightbox(null);
    document.body.style.overflow = "unset";
  };
  const goToPrevious = () => {
    if (lightbox === null) return;
    setLightbox(lightbox === 0 ? filtered.length - 1 : lightbox - 1);
  };
  const goToNext = () => {
    if (lightbox === null) return;
    setLightbox(lightbox === filtered.length - 1 ? 0 : lightbox + 1);
  };

  useEffect(() => {
    if (lightbox === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") goToPrevious();
      if (e.key === "ArrowRight") goToNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightbox, filtered.length]);

  return (
    <div className="min-h-screen bg-[#eaf7ee] bg-[url('/img/design/color-page.jpg')] bg-repeat bg-center">
      <Breadcrumb items={breadcrumbItems} />

      <PageHero
        badge={{ icon: "🖼️", text: "Moments & Memories" }}
        title="Gallery"
        subtitle="Explore highlights from our sessions, trainings, retreats, and events"
        stats={[
          { number: String(items.length), label: "Loaded" },
          { number: String(categories.length - 1), label: "Categories" },
        ]}
        ctas={[
          { label: "View Gallery", href: "#gallery", primary: true },
          { label: "Contact Us", href: "/contact" },
        ]}
        variant="green"
        backgroundImage="https://images.unsplash.com/photo-1529693662653-9d480530a697?w=1920"
      />

      <div className="max-w-[1400px] mx-auto px-5 py-16" id="gallery">
        {/* Category buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {categories.map((c) => {
            const isActive = c.id === active;
            return (
              <button
                key={c.id}
                type="button"
                onClick={() => setActive(c.id)}
                className={cn(
                  "px-6 py-3 rounded-full font-semibold border-2 transition-all duration-300",
                  "focus:outline-none focus:ring-2 focus:ring-green-400/60 focus:ring-offset-2 focus:ring-offset-transparent",
                  isActive
                    ? "bg-gradient-to-r from-green-600 to-green-700 text-white border-transparent shadow-lg"
                    : "bg-white/90 backdrop-blur text-green-800 border-green-200 hover:shadow-md hover:bg-white hover:border-green-300"
                )}
              >
                {c.label}
              </button>
            );
          })}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6">
          {filtered.map((item, idx) => (
            <GalleryCard
              key={`${item.src}-${idx}`}
              item={item}
              index={idx}
              onClick={() => openLightbox(idx)}
            />
          ))}
        </div>

        {/* Sentinel */}
        <div ref={sentinelRef} className="h-10" />

        {/* Loading row (skeleton) */}
        {loading && (
          <div className="grid grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 mt-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="aspect-[4/3] w-full rounded-2xl bg-white border border-green-100 overflow-hidden relative"
              >
                <ShimmerSkeleton />
              </div>
            ))}
          </div>
        )}

        {!hasMore && items.length > 0 && (
          <p className="text-center mt-8 text-gray-600">No more photos.</p>
        )}
      </div>

      {/* Lightbox */}
      {lightbox !== null && filtered[lightbox] && (
        <div className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4">
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 backdrop-blur hover:bg-white/20 flex items-center justify-center text-white transition-transform duration-300 hover:scale-110"
            aria-label="Close lightbox"
          >
            <X size={24} />
          </button>

          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur hover:bg-white/20 flex items-center justify-center text-white transition-transform duration-300 hover:scale-110"
            aria-label="Previous image"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur hover:bg-white/20 flex items-center justify-center text-white transition-transform duration-300 hover:scale-110"
            aria-label="Next image"
          >
            <ChevronRight size={24} />
          </button>

          <div className="relative max-w-6xl max-h-[90vh] w-full animate-fadeUp">
            <img
              src={filtered[lightbox].src}
              alt={filtered[lightbox].alt}
              className="w-full h-full object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
}
