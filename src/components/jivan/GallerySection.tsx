"use client";

import React, { useState, useEffect, useCallback, useMemo } from "react";
import Image from "next/image";

const SLIDER_IMAGES = [
  "/img/slider/IMG_6869.jpg",
  "/img/slider/IMG_6882.jpg",
  "/img/slider/IMG_7142.jpg",
  "/img/slider/IMG_7263.jpg",
  "/img/slider/IMG_7267.jpg",
  "/img/slider/Singing_Bowl.jpg",
];

export function GallerySection() {
  const images = useMemo(() => SLIDER_IMAGES, []);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(4);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState(0);

  const totalSlides = Math.max(1, Math.ceil(images.length / slidesPerView));

  const updateSlidesPerView = useCallback(() => {
    if (typeof window === "undefined") return;

    if (window.innerWidth > 1024) setSlidesPerView(4);
    else if (window.innerWidth > 768) setSlidesPerView(3);
    else if (window.innerWidth > 480) setSlidesPerView(2);
    else setSlidesPerView(1);
  }, []);

  useEffect(() => {
    updateSlidesPerView();
    window.addEventListener("resize", updateSlidesPerView);
    return () => window.removeEventListener("resize", updateSlidesPerView);
  }, [updateSlidesPerView]);

  useEffect(() => {
    setCurrentSlide((prev) => Math.min(prev, totalSlides - 1));
  }, [totalSlides]);

  useEffect(() => {
    if (images.length === 0 || images.length <= slidesPerView) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length, slidesPerView, totalSlides]);

  const moveSlide = (direction: number) => {
    setCurrentSlide((prev) => {
      const next = prev + direction;
      if (next >= totalSlides) return 0;
      if (next < 0) return totalSlides - 1;
      return next;
    });
  };

  const openModal = (index: number) => {
    setModalImage(index);
    setModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setModalOpen(false);
    document.body.style.overflow = "auto";
  };

  const modalNavigate = useCallback(
    (direction: number) => {
      setModalImage((prev) => {
        const next = prev + direction;
        if (next >= images.length) return 0;
        if (next < 0) return images.length - 1;
        return next;
      });
    },
    [images.length]
  );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!modalOpen) return;
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowLeft") modalNavigate(-1);
      if (e.key === "ArrowRight") modalNavigate(1);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [modalOpen, modalNavigate]);

  useEffect(() => {
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  if (images.length === 0) {
    return (
      <section className="relative py-20 bg-[#000000]">
        <div className="text-center py-16 text-gray-600">
          No images found in <code>public/img/slider</code>.
        </div>
      </section>
    );
  }

  const slideWidth = 100 / slidesPerView;
  const translateX = -(currentSlide * slideWidth * slidesPerView);

  return (
    <>
      <section className="relative py-20 bg-[#f5f0e8] bg-[url('/img/design/color-page.jpg')] bg-repeat bg-center overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-5 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-[#5E3523] text-center mb-14 relative pb-5 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-24 after:h-1 after:bg-gradient-to-r after:from-[#5E3523] after:to-[#8B5A3C] after:rounded-full">
            Our Photo Gallery
          </h2>

          <div className="relative px-12 md:px-10 overflow-hidden">
            {totalSlides > 1 && (
              <button
                onClick={() => moveSlide(-1)}
                className="absolute left-0 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-[#5E3523]/85 hover:bg-[#5E3523] text-white flex items-center justify-center text-xl z-10 transition-colors"
                aria-label="Previous"
              >
                ❮
              </button>
            )}

            <div
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(${translateX}%)` }}
            >
              {images.map((image, index) => (
                <div
                  key={image}
                  className="px-3"
                  style={{ minWidth: `${slideWidth}%` }}
                >
                  <button
                    type="button"
                    className="relative block w-full h-[340px] md:h-[280px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all"
                    onClick={() => openModal(index)}
                  >
                    <Image
                      src={image}
                      alt={`Gallery image ${index + 1}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-black/0 hover:bg-black/30 transition-colors flex items-center justify-center">
                      <span className="text-white text-3xl opacity-0 hover:opacity-100 transition-opacity">
                        🔍
                      </span>
                    </div>
                  </button>
                </div>
              ))}
            </div>

            {totalSlides > 1 && (
              <button
                onClick={() => moveSlide(1)}
                className="absolute right-0 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-[#5E3523]/85 hover:bg-[#5E3523] text-white flex items-center justify-center text-xl z-10 transition-colors"
                aria-label="Next"
              >
                ❯
              </button>
            )}
          </div>

          {totalSlides > 1 && (
            <div className="flex justify-center gap-3 mt-10">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentSlide
                      ? "bg-[#5E3523] scale-125"
                      : "bg-[#5E3523]/30 hover:bg-[#5E3523]"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {modalOpen && (
        <div
          className="fixed inset-0 bg-black/95 z-[1000] flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div
            className="relative w-full max-w-6xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute right-0 -top-12 text-white text-4xl w-12 h-12 flex items-center justify-center hover:scale-110 transition-transform"
              aria-label="Close"
            >
              ×
            </button>

            {images.length > 1 && (
              <button
                onClick={() => modalNavigate(-1)}
                className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center text-2xl z-10"
                aria-label="Previous"
              >
                ❮
              </button>
            )}

            <div className="relative max-w-full max-h-[90vh] overflow-hidden rounded-2xl">
              <Image
                src={images[modalImage]}
                alt={`Gallery image ${modalImage + 1}`}
                width={1400}
                height={950}
                className="max-w-full max-h-[90vh] object-contain rounded-2xl"
                sizes="100vw"
              />
            </div>

            {images.length > 1 && (
              <button
                onClick={() => modalNavigate(1)}
                className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center text-2xl z-10"
                aria-label="Next"
              >
                ❯
              </button>
            )}

            <div className="mt-4 text-center text-white text-sm">
              {modalImage + 1} / {images.length}
            </div>
          </div>
        </div>
      )}
    </>
  );
}