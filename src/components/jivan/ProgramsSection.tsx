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
      title: "10 Days Online Meditation with Maa Nisha Kabir",
      overlayTitle: "तपस्यादेखि तृप्तीसम्म",
      image: "/img/programs/10daysmeditation.jpg",
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
      image: "/img/other/nagarjunaresort.jpg",
      author: "Jivan Parivartan",
      comments: 0,
    },
    {
      id: 4,
      title: "Himalayan Luxury Retreat: An Inner Journey to Silence in the Peaks of Mustang",
      overlayTitle: "HIMALAYAN LUXURY RETREAT",
      image: "/img/other/thasangvillage.jpg",
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
    <div className="group bg-white rounded-2xl sm:rounded-[15px] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3">
      <div className="relative h-[240px] sm:h-[260px] md:h-[280px] overflow-hidden">
        {/* Image with zoom effect */}
        <Image
          src={program.image}
          alt={program.title}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-110 group-hover:rotate-1"
        />
        
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
        
        {/* Badge with pulse animation */}
        {program.badge && (
          <span className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-gradient-to-br from-green-600 to-green-700 text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-[10px] sm:text-[11px] font-bold uppercase tracking-wider shadow-lg animate-pulse">
            {program.badge}
          </span>
        )}
        
        {/* Overlay title with slide-up animation */}
        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 md:p-6 transform transition-transform duration-500 group-hover:translate-y-[-8px]">
          <h3 className="text-white text-lg sm:text-xl md:text-[22px] font-bold drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] leading-tight">
            {program.overlayTitle}
          </h3>
          {/* Animated underline */}
          <div className="mt-2 h-1 w-0 bg-gradient-to-r from-green-600 to-green-700 rounded-full transition-all duration-500 group-hover:w-16" />
        </div>
      </div>

      {/* Card content */}
      <div className="p-5 sm:p-6 relative">
        {/* Meta information */}
        <div className="flex flex-wrap gap-3 sm:gap-5 text-[11px] sm:text-[12px] text-gray-500 mb-3 sm:mb-4 items-center">
          <span className="flex items-center gap-1.5 transition-colors group-hover:text-green-700">
            <span className="text-[13px] sm:text-[14px]">👤</span> by {program.author}
          </span>
          <span className="flex items-center gap-1.5 transition-colors group-hover:text-green-700">
            <span className="text-[13px] sm:text-[14px]">💬</span> {program.comments} comments
          </span>
        </div>

        {/* Title with animated color change */}
        <h3 className="text-base sm:text-lg md:text-[18px] font-semibold text-gray-800 mb-3 sm:mb-4 leading-snug transition-colors duration-300 group-hover:text-green-700 line-clamp-2">
          {program.title}
        </h3>

        {/* Read more link with animated arrow */}
        <Link
          href="#"
          className="inline-flex items-center gap-2 text-green-700 font-semibold text-sm sm:text-[14px] transition-all duration-300 group-hover:gap-4"
        >
          <span>Read More</span>
          <span className="transform transition-transform duration-300 group-hover:translate-x-2">→</span>
        </Link>

        {/* Decorative corner accent */}
        <div className="absolute bottom-0 right-0 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-tl from-green-600/5 to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
    </div>
  );

  return (
    <section className="w-full bg-[#f5f0e8] bg-[url('/img/design/color-page.jpg')] bg-repeat bg-center">
      <div className="relative w-full py-12 sm:py-16 lg:py-20">
        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-5 lg:px-6 relative z-10">
          {/* Recent Programs */}
          <div className="mb-16 sm:mb-20">
            <div className="text-center mb-8 sm:mb-10 lg:mb-12">
              <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-full text-xs sm:text-[13px] font-bold uppercase tracking-wider mb-4 border border-green-200">
                <span className="w-1.5 h-1.5 rounded-full bg-green-600 animate-pulse" />
                Featured
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-gray-900 leading-tight relative inline-block">
                Recent Programs
                {/* Animated underline */}
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-16 sm:w-20 h-1 bg-gradient-to-r from-green-600 to-green-700 rounded-full">
                  <span className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-700 rounded-full animate-pulse" />
                </span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mt-8 sm:mt-12">
              {recentPrograms.map((program, index) => (
                <div
                  key={program.id}
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <ProgramCard program={program} />
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming Programs */}
          <div className="mb-16 sm:mb-20">
            <div className="text-center mb-8 sm:mb-10 lg:mb-12">
              <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-full text-xs sm:text-[13px] font-bold uppercase tracking-wider mb-4 border border-green-200">
                <span className="w-1.5 h-1.5 rounded-full bg-green-600 animate-pulse" />
                Coming Soon
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-gray-900 leading-tight relative inline-block">
                Upcoming Programs
                {/* Animated underline */}
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-16 sm:w-20 h-1 bg-gradient-to-r from-green-600 to-green-700 rounded-full">
                  <span className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-700 rounded-full animate-pulse" />
                </span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mt-8 sm:mt-12">
              {upcomingPrograms.map((program, index) => (
                <div
                  key={program.id}
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <ProgramCard program={program} />
                </div>
              ))}
            </div>
          </div>

          {/* About Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 mt-12 sm:mt-16 lg:mt-20 bg-white/95 backdrop-blur-sm p-6 sm:p-8 lg:p-12 rounded-2xl sm:rounded-[20px] shadow-xl relative overflow-hidden">
            {/* Decorative gradient blobs */}
            <div className="absolute top-0 right-0 w-40 h-40 sm:w-64 sm:h-64 bg-gradient-to-bl from-green-600/5 to-transparent rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-40 h-40 sm:w-64 sm:h-64 bg-gradient-to-tr from-amber-700/5 to-transparent rounded-full blur-3xl" />

            {/* Content */}
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-full text-xs sm:text-[13px] font-bold uppercase tracking-wider mb-4 border border-green-200">
                <span className="w-1.5 h-1.5 rounded-full bg-green-600 animate-pulse" />
                Who We Are
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-gray-900 mb-4 sm:mb-6 leading-tight">
                About Us
              </h2>
              <p className="text-sm sm:text-base lg:text-[15px] leading-relaxed text-gray-700 mb-4 sm:mb-5">
                At Jivan Parivartan, we are committed to creating a sanctuary where healing,
                transformation, and holistic well-being come together in harmony. Our center serves
                as a tranquil haven, inviting individuals to embark on a profound journey toward
                physical, emotional, and spiritual renewal.
              </p>
              <p className="text-sm sm:text-base lg:text-[15px] leading-relaxed text-gray-700 mb-6 sm:mb-8">
                Guided by the belief that true healing encompasses the mind, body, heart, and soul,
                our mission is to walk beside you on this transformative path, nurturing your growth
                and empowering your inner light to shine.
              </p>

              {/* Features list */}
              <ul className="space-y-3 sm:space-y-4">
                {aboutFeatures.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2.5 sm:gap-3 text-sm sm:text-base lg:text-[15px] text-gray-700 leading-relaxed group"
                  >
                    <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-green-600 text-white text-xs sm:text-[14px] font-bold flex items-center justify-center flex-shrink-0 mt-0.5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
                      ✓
                    </span>
                    <span className="transition-colors duration-300 group-hover:text-gray-900">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 relative z-10">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="group bg-gradient-to-br from-green-600 to-green-800 text-white p-6 sm:p-7 lg:p-8 rounded-2xl sm:rounded-[15px] text-center shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden"
                >
                  {/* Animated background effect */}
                  <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-500" />
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <div className="text-4xl sm:text-5xl lg:text-[48px] mb-2 sm:mb-3 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                      {stat.icon}
                    </div>
                    <div className="text-3xl sm:text-4xl lg:text-[36px] font-extrabold mb-1 sm:mb-2 transition-all duration-300 group-hover:scale-105">
                      {stat.number}
                    </div>
                    <div className="text-xs sm:text-[13px] uppercase tracking-wider opacity-90 font-semibold">
                      {stat.label}
                    </div>
                  </div>

                  {/* Decorative corner */}
                  <div className="absolute top-0 right-0 w-10 h-10 sm:w-12 sm:h-12 bg-white/10 rounded-bl-full transform scale-0 group-hover:scale-100 transition-transform duration-500" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Add custom animations */}
      <style jsx global>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
}
