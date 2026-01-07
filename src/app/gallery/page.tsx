"use client";

import React, { useMemo, useState } from "react";
import { Breadcrumb } from "@/components/jivan/Breadcrumb";
import { PageHero } from "@/components/jivan/PageHero";

type GalleryCategory = "all" | "yoga" | "reiki" | "meditation" | "retreat" | "events";

type GalleryItem = {
  src: string;
  alt: string;
  category: Exclude<GalleryCategory, "all">;
};

export default function GalleryPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Gallery" },
  ];

  // Categories found in PHP data-category attributes [file:38]
  const categories: { id: GalleryCategory; label: string; icon: string }[] = [
    { id: "all", label: "All", icon: "🖼️" },
    { id: "yoga", label: "Yoga", icon: "🧘" },
    { id: "reiki", label: "Reiki", icon: "✨" },
    { id: "meditation", label: "Meditation", icon: "🌿" },
    { id: "retreat", label: "Retreat", icon: "🏔️" },
    { id: "events", label: "Events", icon: "🎉" },
  ];

  // Images and alt text taken from gallery.php [file:38]
  const items: GalleryItem[] = [
    { src: "/img/IMG_6869.jpg", alt: "Yoga Training Session", category: "yoga" },
    { src: "/img/IMG_6870.jpg", alt: "Asana Practice", category: "yoga" },
    { src: "/img/IMG_6871.jpg", alt: "Graduation Ceremony", category: "yoga" },

    { src: "/img/IMG_6880.jpg", alt: "Reiki Healing Session", category: "reiki" },
    { src: "/img/IMG_6881.jpg", alt: "Reiki Training", category: "reiki" },

    { src: "/img/IMG_6890.jpg", alt: "Morning Meditation", category: "meditation" },
    { src: "/img/IMG_6891.jpg", alt: "Group Meditation", category: "meditation" },

    { src: "/img/IMG_6900.jpg", alt: "Mountain Retreat", category: "retreat" },
    { src: "/img/IMG_6901.jpg", alt: "Trekking Retreat", category: "retreat" },

    { src: "/img/IMG_6910.jpg", alt: "Wellness Workshop", category: "events" },
    { src: "/img/IMG_6911.jpg", alt: "Community Gathering", category: "events" },
    { src: "/img/IMG_6912.jpg", alt: "Special Event Session", category: "events" },
  ];

  const [active, setActive] = useState<GalleryCategory>("all");

  const filtered = useMemo(() => {
    if (active === "all") return items;
    return items.filter((i) => i.category === active);
  }, [active, items]);

  return (
    <div className="min-h-screen bg-[#eaf7ee] bg-[url('/img/design/color-page.jpg')] bg-repeat bg-center">
      <Breadcrumb items={breadcrumbItems} />

      <PageHero
        badge={{ icon: "🖼️", text: "Moments & Memories" }}
        title="Gallery"
        subtitle="Explore highlights from our sessions, trainings, retreats, and events"
        stats={[
          { number: String(items.length), label: "Photos" },
          { number: "6", label: "Categories" },
          { number: "Yoga", label: "Trainings" },
          { number: "Retreats", label: "Experiences" },
        ]}
        ctas={[
          { label: "View Gallery", href: "#gallery", primary: true },
          { label: "Contact Us", href: "/contact" },
        ]}
        variant="green"
        backgroundImage="https://images.unsplash.com/photo-1529693662653-9d480530a697?w=1920"
      />

      <div className="max-w-[1400px] mx-auto px-5 py-16" id="gallery">
        {/* Filter Buttons (PHP has category buttons) [file:38] */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {categories.map((c) => {
            const isActive = c.id === active;
            return (
              <button
                key={c.id}
                type="button"
                onClick={() => setActive(c.id)}
                className={[
                  "px-5 py-2 rounded-full font-semibold transition-all border",
                  isActive
                    ? "bg-gradient-to-br from-green-500 to-green-700 text-white border-transparent shadow-md"
                    : "bg-white/80 backdrop-blur text-green-900 border-green-100 hover:shadow-sm hover:bg-white",
                ].join(" ")}
              >
                <span className="mr-2">{c.icon}</span>
                {c.label}
              </button>
            );
          })}
        </div>

        {/* Grid (PHP: gallery-grid + gallery-item) [file:38] */}
        <div className="grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-7">
          {filtered.map((item, idx) => (
            <figure
              key={`${item.src}-${idx}`}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-md border border-green-100"
            >
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="h-full w-full object-cover transform transition-transform duration-500 group-hover:scale-[1.06]"
                  loading="lazy"
                />
              </div>

              {/* Hover overlay like typical gallery UI in PHP [file:38] */}
              <figcaption className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="text-white font-extrabold text-lg">{item.alt}</div>
                  <div className="mt-1 text-white/80 text-sm capitalize">
                    {item.category}
                  </div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </div>
  );
}
