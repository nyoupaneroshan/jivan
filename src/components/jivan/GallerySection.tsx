"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";

interface GallerySliderProps {
  // It's still typed as required, but we will default it in the function signature
  images: string[];
}

// ---------------------------------------------------------------------
// FIX APPLIED HERE: { images = [] } defaults the prop to an empty array
// ---------------------------------------------------------------------
export function GallerySection({ images = [] }: GallerySliderProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(4);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState(0);

  // This line is now safe, as images will be an array (either the prop or [])
  const totalSlides = Math.ceil(images.length / slidesPerView);

  const updateSlidesPerView = useCallback(() => {
    if (typeof window !== 'undefined') { // Check if window is defined (client-side)
      if (window.innerWidth > 1024) setSlidesPerView(4);
      else if (window.innerWidth > 768) setSlidesPerView(3);
      else if (window.innerWidth > 480) setSlidesPerView(2);
      else setSlidesPerView(1);
    }
  }, []);

  useEffect(() => {
    // Only run on client (after component mounts)
    updateSlidesPerView();
    window.addEventListener("resize", updateSlidesPerView);
    return () => window.removeEventListener("resize", updateSlidesPerView);
  }, [updateSlidesPerView]);

  useEffect(() => {
    // Ensure we only try to run the interval if there are images
    if (images.length === 0 || images.length <= slidesPerView) return;
    
    // Ensure totalSlides is at least 1 to prevent infinite loop logic
    if (totalSlides < 1) return; 
    
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
    if (typeof document !== 'undefined') {
        document.body.style.overflow = "hidden";
    }
  };

  const closeModal = () => {
    setModalOpen(false);
    if (typeof document !== 'undefined') {
        document.body.style.overflow = "auto";
    }
  };

  const modalNavigate = (direction: number) => {
    setModalImage((prev) => {
      const next = prev + direction;
      if (next >= images.length) return 0;
      if (next < 0) return images.length - 1;
      return next;
    });
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!modalOpen) return;
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowLeft") modalNavigate(-1);
      if (e.key === "ArrowRight") modalNavigate(1);
    };
    if (typeof window !== 'undefined') {
      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    }
  }, [modalOpen, images.length]); // Added images.length to dependency array

  if (images.length === 0) {
    return (
      <section className="relative py-20 bg-[#f5f0e8]">
        <div className="text-center py-16 text-gray-600">
          No images found in gallery folder. Please add images.
        </div>
      </section>
    );
  }

  const slideWidth = 100 / slidesPerView;
  const translateX = -(currentSlide * slideWidth * slidesPerView);

  return (
    <>
      <section
        className="relative py-20 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920')",
        }}
      >
        <div className="absolute inset-0 bg-[#f5f0e8]/88" />

        <div className="max-w-[1400px] mx-auto px-10 md:px-5 relative z-10">
          <h2 className="text-5xl md:text-4xl font-bold text-[#5E3523] text-center mb-16 relative pb-5 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-24 after:h-1 after:bg-gradient-to-r after:from-[#5E3523] after:to-[#8B5A3C] after:rounded-full">
            Our Photo Gallery
          </h2>

          <div className="relative px-16 md:px-12 overflow-hidden">
            {/* Previous Button - Hide if totalSlides is 1 or less */}
            {totalSlides > 1 && (
                <button
                onClick={() => moveSlide(-1)}
                className="absolute left-2.5 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-[#5E3523]/80 hover:bg-[#5E3523] text-white flex items-center justify-center text-xl z-10 transition-colors"
                aria-label="Previous"
                >
                ❮
                </button>
            )}

            <div
              className="flex transition-transform duration-600 ease-in-out"
              style={{ transform: `translateX(${translateX}%)` }}
            >
              {images.map((image, index) => (
                <div
                  key={index}
                  className="px-4"
                  style={{ minWidth: `${slideWidth}%` }}
                >
                  <div
                    className="relative h-[350px] md:h-[280px] rounded-xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl hover:scale-105 transition-all"
                    onClick={() => openModal(index)}
                  >
                    <Image
                      src={image}
                      alt={`Gallery ${index + 1}`}
                      fill
                      className="object-cover"
                      // Add Next.js optimization config if images are external
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-black/0 hover:bg-black/40 flex items-center justify-center transition-all">
                      <span className="text-white text-4xl opacity-0 hover:opacity-100 transition-opacity">
                        🔍
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Next Button - Hide if totalSlides is 1 or less */}
            {totalSlides > 1 && (
                <button
                onClick={() => moveSlide(1)}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-[#5E3523]/80 hover:bg-[#5E3523] text-white flex items-center justify-center text-xl z-10 transition-colors"
                aria-label="Next"
                >
                ❯
                </button>
            )}
          </div>

          {/* Dots Navigation - Hide if totalSlides is 1 or less */}
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

      {/* Modal Section */}
      {modalOpen && images.length > 0 && ( // Ensure there are images before rendering modal content
        <div
          className="fixed inset-0 bg-black/95 z-[1000] flex items-center justify-center"
          onClick={closeModal}
        >
          <div className="relative max-w-[90%] max-h-[90%]" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 text-white text-4xl w-12 h-12 flex items-center justify-center hover:scale-125 transition-transform"
              aria-label="Close"
            >
              ×
            </button>

            {/* Modal Previous Button */}
            <button
              onClick={() => modalNavigate(-1)}
              className="absolute -left-20 top-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center text-2xl transition-colors"
              aria-label="Previous"
            >
              ❮
            </button>

            <div className="relative max-w-full max-h-[90vh]">
              {/* Ensure image path exists before rendering */}
              {images[modalImage] && (
                <Image
                  src={images[modalImage]}
                  alt={`Gallery ${modalImage + 1}`}
                  width={1200}
                  height={800}
                  className="max-w-full max-h-[90vh] rounded-lg shadow-2xl object-contain"
                />
              )}
            </div>

            {/* Modal Next Button */}
            <button
              onClick={() => modalNavigate(1)}
              className="absolute -right-20 top-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center text-2xl transition-colors"
              aria-label="Next"
            >
              ❯
            </button>

            <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 text-white text-lg">
              {modalImage + 1} / {images.length}
            </div>
          </div>
        </div>
      )}
    </>
  );
}