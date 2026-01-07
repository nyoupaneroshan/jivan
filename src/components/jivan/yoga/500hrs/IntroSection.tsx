"use client";

import React from "react";
import Link from "next/link";

interface HeroStat {
  number: string;
  label: string;
}

interface HeroCTA {
  label: string;
  href: string;
  primary?: boolean;
}

interface PageHeroProps {
  badge?: {
    icon: string;
    text: string;
  };
  title: string;
  subtitle: string;
  stats?: HeroStat[];
  ctas?: HeroCTA[];
  backgroundImage?: string;
  variant?: "orange" | "red" | "dark-red" | "gold";
}

const variantStyles = {
  orange: {
    gradient: "linear-gradient(135deg, rgba(255, 107, 53, 0.95), rgba(255, 140, 0, 0.85))",
    badgeBg: "bg-white/20 border-white/30",
    statColor: "text-white",
    primaryBtn: "bg-white text-[#FF6B35] hover:shadow-white/40",
  },
  red: {
    gradient: "linear-gradient(135deg, rgba(5, 64, 43, 0.95), rgba(3, 45, 30, 0.9))",
    badgeBg: "bg-white/15 border-white/20",
    statColor: "text-white",
    primaryBtn: "bg-white text-[#05402b] hover:shadow-white/40",
  },
  "dark-red": {
    gradient: "linear-gradient(135deg, rgba(5, 64, 43, 0.95), rgba(3, 45, 30, 0.9))",
    badgeBg: "bg-yellow-400/20 border-yellow-400/30",
    statColor: "text-yellow-400",
    primaryBtn: "bg-gradient-to-br from-yellow-400 to-orange-500 text-gray-900 hover:shadow-yellow-400/50",
  },
  gold: {
    gradient: "linear-gradient(135deg, rgba(139, 69, 19, 0.95), rgba(160, 82, 45, 0.9))",
    badgeBg: "bg-white/20 border-white/30",
    statColor: "text-yellow-300",
    primaryBtn: "bg-gradient-to-br from-yellow-400 to-orange-500 text-gray-900 hover:shadow-yellow-400/50",
  },
};

export function PageHero({
  badge,
  title,
  subtitle,
  stats,
  ctas,
  backgroundImage = "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1920",
  variant = "orange",
}: PageHeroProps) {
  const styles = variantStyles[variant];

  return (
    <section
      className="relative min-h-[600px] md:min-h-[500px] sm:min-h-[450px] flex items-center justify-center py-20 md:py-16 sm:py-12 px-5"
      style={{
        background: `${styles.gradient}, url('${backgroundImage}') center/cover`,
      }}
    >
      <div className="relative z-10 text-center text-white max-w-[1100px] mx-auto">
        {badge && (
          <div
            className={`inline-flex items-center gap-2.5 ${styles.badgeBg} px-8 py-3 rounded-full text-sm mb-6 backdrop-blur-md border-2 font-semibold uppercase tracking-widest`}
          >
            <span>{badge.icon}</span>
            <span>{badge.text}</span>
          </div>
        )}

        <h1 className="text-6xl md:text-5xl sm:text-4xl font-extrabold mb-5 drop-shadow-2xl tracking-tight leading-tight">
          {title}
        </h1>

        <p className="text-2xl md:text-xl sm:text-lg mb-10 opacity-95 font-normal">
          {subtitle}
        </p>

        {stats && stats.length > 0 && (
          <div className="flex justify-center gap-12 md:gap-8 sm:gap-6 mb-10 flex-wrap">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <span className={`block text-5xl md:text-4xl sm:text-3xl font-bold mb-1 ${styles.statColor}`}>
                  {stat.number}
                </span>
                <span className="text-sm opacity-90 uppercase tracking-widest font-medium">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        )}

        {ctas && ctas.length > 0 && (
          <div className="flex gap-5 justify-center flex-wrap">
            {ctas.map((cta, index) => (
              <Link
                key={index}
                href={cta.href}
                className={`inline-block px-11 py-4 rounded-full font-bold text-base transition-all shadow-lg ${
                  cta.primary
                    ? styles.primaryBtn
                    : "bg-transparent text-white border-2 border-white hover:bg-white/20"
                } hover:-translate-y-1 hover:shadow-xl`}
              >
                {cta.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}