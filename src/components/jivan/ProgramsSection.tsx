"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

interface Program {
  id: number;
  title: string;
  overlayTitle: string;
  image: string;
  author: string;
  comments: number;
  badge?: string;
}

export function ProgramsSection() {
  const recentPrograms: Program[] = [
    {
      id: 1,
      title: "Silent Meditation in Mustang: Nisha Kabir's Divine Knowledge with Tikaram Yatri",
      overlayTitle: "तपस्यादेखि तृप्तीसम्म",
      image: "/img/IMG_6869.jpg",
      author: "Jivan Parivartan",
      comments: 0,
      badge: "Jivan Kabir",
    },
    {
      id: 2,
      title: "Silent Meditation in Mustang: Nisha Kabir's Divine Knowledge with Tikaram Yatri",
      overlayTitle: "तपस्यादेखि तृप्तीसम्म",
      image: "/img/IMG_6869.jpg",
      author: "Jivan Parivartan",
      comments: 0,
      badge: "Jivan Kabir",
    },
  ];

  const upcomingPrograms: Program[] = [
    {
      id: 3,
      title: "Nagarjun Resort Retreat: Your Sanctuary for Wellness & Transformation in Kathmandu",
      overlayTitle: "NAGARJUN RESORT RETREAT",
      image: "/img/IMG_6869.jpg",
      author: "Jivan Parivartan",
      comments: 0,
    },
    {
      id: 4,
      title: "Himalayan Luxury Retreat: An Inner Journey to Silence in the Peaks of Mustang",
      overlayTitle: "HIMALAYAN LUXURY RETREAT",
      image: "/img/IMG_6869.jpg",
      author: "Jivan Parivartan",
      comments: 0,
    },
  ];

  const stats = [
    { icon: "🎯", number: "20,000+", label: "Total Healing Done" },
    { icon: "👥", number: "5,000+", label: "Happy Clients" },
    { icon: "🏆", number: "15+", label: "Years Experience" },
    { icon: "⭐", number: "500+", label: "Retreats Conducted" },
  ];

  const aboutFeatures = [
    "To be a beacon of healing and hope in our community.",
    "Offering a range of holistic therapies",
    "Empower individuals to discover their inner strength and resilience",
  ];

  const ProgramCard = ({ program }: { program: Program }) => (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all cursor-pointer">
      <div className="relative h-[280px] overflow-hidden">
        <Image
          src={program.image}
          alt={program.title}
          fill
          className="object-cover hover:scale-110 transition-transform duration-500"
        />
        {program.badge && (
          <span className="absolute top-4 right-4 bg-gradient-to-br from-[#FF6B35] to-[#C41E3A] text-white px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wide">
            {program.badge}
          </span>
        )}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#C41E3A]/90 to-transparent p-10 pt-16">
          <h3 className="text-white text-xl font-bold drop-shadow-lg">{program.overlayTitle}</h3>
        </div>
      </div>
      <div className="p-6">
        <div className="flex gap-5 text-xs text-gray-600 mb-4 items-center">
          <span className="flex items-center gap-1.5">
            👤 by {program.author}
          </span>
          <span className="flex items-center gap-1.5">
            💬 {program.comments} comments
          </span>
        </div>
        <h3 className="text-xl font-semibold text-gray-800 mb-3 leading-snug">{program.title}</h3>
        <Link href="#" className="inline-flex items-center gap-2 text-[#C41E3A] font-semibold hover:gap-3 transition-all">
          Read More →
        </Link>
      </div>
    </div>
  );

  return (
    <section className="w-full bg-[#f5f0e8]">
      <div
        className="relative w-full py-16 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920')",
        }}
      >
        <div className="absolute inset-0 bg-[#f5f0e8]/85" />

        <div className="w-full max-w-[1400px] mx-auto px-10 md:px-5 relative z-10">
          <div className="mb-20">
            <h2 className="text-[42px] md:text-4xl font-bold text-[#C41E3A] mb-10 text-center relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-gradient-to-r after:from-[#C41E3A] after:to-[#8B0000] after:rounded-full">
              Recent Programs
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-10">
              {recentPrograms.map((program) => (
                <ProgramCard key={program.id} program={program} />
              ))}
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-[42px] md:text-4xl font-bold text-[#C41E3A] mb-10 text-center relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-gradient-to-r after:from-[#C41E3A] after:to-[#8B0000] after:rounded-full">
              Upcoming Programs
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-10">
              {upcomingPrograms.map((program) => (
                <ProgramCard key={program.id} program={program} />
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-20 bg-white p-16 md:p-10 rounded-2xl shadow-xl">
            <div>
              <h2 className="text-[42px] md:text-4xl font-bold text-gray-800 mb-6">About us</h2>
              <p className="text-base leading-relaxed text-gray-600 mb-5">
                At Jivan Parivartan, we are committed to creating a sanctuary where healing, transformation, and holistic well-being come together in harmony. Our center serves as a tranquil haven, inviting individuals to embark on a profound journey toward physical, emotional, and spiritual renewal.
              </p>
              <p className="text-base leading-relaxed text-gray-600 mb-10">
                Guided by the belief that true healing encompasses the mind, body, heart, and soul, our mission is to walk beside you on this transformative path, nurturing your growth and empowering your inner light to shine.
              </p>
              <ul className="space-y-5">
                {aboutFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3 text-[15px] text-gray-600 leading-relaxed">
                    <span className="text-[#C41E3A] text-xl font-bold flex-shrink-0">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-[#8B4513] to-[#A0522D] text-white p-8 rounded-xl text-center shadow-lg"
                >
                  <div className="text-4xl mb-4">{stat.icon}</div>
                  <div className="text-4xl font-bold mb-2">{stat.number}</div>
                  <div className="text-sm uppercase tracking-wider opacity-90">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}