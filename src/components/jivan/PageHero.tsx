"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type Variant = "orange" | "green" | "red";

type HeroStat = { number: string; label: string };
type HeroCTA = { label: string; href: string; primary?: boolean };

export function PageHero({
  badge,
  title,
  subtitle,
  stats,
  ctas,
  variant = "green",
  backgroundImage,
}: {
  badge?: { icon?: string; text: string };
  title: string;
  subtitle?: string;
  stats?: HeroStat[];
  ctas?: HeroCTA[];
  variant?: Variant;
  backgroundImage?: string;
}) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animations on mount
    setIsVisible(true);
  }, []);

  const theme =
    variant === "orange"
      ? {
          overlay: "from-[#FF6B35]/95 via-[#FF8C00]/85 to-[#FF6B35]/75",
          primaryText: "text-[#FF6B35]",
          pillBg: "bg-white/20",
          pillBorder: "border-white/30",
          primaryBtn: "bg-white text-[#FF6B35] hover:bg-white/90",
          secondaryBtn: "border-white text-white hover:bg-white/20",
          accentGlow: "rgba(255, 107, 53, 0.4)",
        }
      : variant === "red"
      ? {
          overlay: "from-[#8B0000]/95 via-[#4B0000]/90 to-[#8B0000]/85",
          primaryText: "text-[#8B0000]",
          pillBg: "bg-white/20",
          pillBorder: "border-white/30",
          primaryBtn: "bg-white text-[#8B0000] hover:bg-white/90",
          secondaryBtn: "border-white text-white hover:bg-white/20",
          accentGlow: "rgba(139, 0, 0, 0.4)",
        }
      : {
          // Green theme
          overlay: "from-[#093815]/95 via-[#0B3D1C]/92 to-[#0B3D1C]/85",
          primaryText: "text-[#2D6A4F]",
          pillBg: "bg-white/20",
          pillBorder: "border-white/30",
          primaryBtn: "bg-white text-[#2D6A4F] hover:bg-white/90",
          secondaryBtn: "border-white text-white hover:bg-white/20",
          accentGlow: "rgba(45, 106, 79, 0.4)",
        };

  return (
    <section className="relative min-h-[260px] md:min-h-[300px] flex items-center justify-center px-5 pt-20 pb-16 text-white overflow-hidden">
      {/* Background Image with parallax effect */}
      {!!backgroundImage && (
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-[2000ms] ease-out"
          style={{
            backgroundImage: `url('${backgroundImage}')`,
            transform: isVisible ? "scale(1)" : "scale(1.1)",
          }}
        />
      )}

      {/* Gradient Overlay */}
      <div className={`absolute inset-0 bg-gradient-to-br ${theme.overlay}`} />

      {/* Animated decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-20 left-10 w-64 h-64 rounded-full opacity-20 blur-3xl animate-float"
          style={{ background: theme.accentGlow }}
        />
        <div
          className="absolute bottom-20 right-10 w-80 h-80 rounded-full opacity-15 blur-3xl animate-float-delayed"
          style={{ background: theme.accentGlow }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full opacity-10 blur-3xl animate-pulse-slow"
          style={{ background: theme.accentGlow }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-[1100px] mx-auto">
        {/* Badge with entrance animation */}
        {badge?.text && (
          <div
            className={`inline-flex items-center gap-2 ${theme.pillBg} px-7 py-3 rounded-full backdrop-blur-md border-2 ${theme.pillBorder} text-[12px] md:text-[14px] font-semibold uppercase tracking-[2px] shadow-[0_4px_20px_rgba(0,0,0,0.2)] transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
            }`}
            style={{ transitionDelay: "100ms" }}
          >
            {badge.icon ? (
              <span className="text-lg animate-bounce-subtle">{badge.icon}</span>
            ) : null}
            <span>{badge.text}</span>
          </div>
        )}

        {/* Title with staggered word animation */}
        <h1
          className={`mt-6 text-[36px] md:text-[56px] font-black leading-tight drop-shadow-[0_4px_30px_rgba(0,0,0,0.5)] transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          {title}
        </h1>

        {/* Subtitle */}
        {subtitle ? (
          <p
            className={`mt-4 text-[16px] md:text-[22px] opacity-0 transition-all duration-700 ${
              isVisible ? "opacity-95 translate-y-0" : "translate-y-6"
            }`}
            style={{ transitionDelay: "350ms" }}
          >
            {subtitle}
          </p>
        ) : null}

        {/* Stats with staggered fade-in */}
        {stats?.length ? (
          <div className="mt-10 flex flex-wrap justify-center gap-6 md:gap-12">
            {stats.map((s, idx) => (
              <div
                key={idx}
                className={`group text-center transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${500 + idx * 100}ms` }}
              >
                <span className="block text-[28px] md:text-[40px] font-bold transition-all duration-300 group-hover:scale-110 group-hover:text-yellow-300">
                  {s.number}
                </span>
                <span className="block text-[12px] md:text-[13px] opacity-90 uppercase tracking-[1.5px] font-medium mt-1">
                  {s.label}
                </span>
                {/* Animated underline */}
                <div className="mt-2 mx-auto w-0 h-0.5 bg-white/50 rounded-full transition-all duration-500 group-hover:w-12" />
              </div>
            ))}
          </div>
        ) : null}

        {/* CTAs with hover effects */}
        {ctas?.length ? (
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            {ctas.map((cta, idx) => {
              const isPrimary = !!cta.primary;
              return (
                <Link
                  key={idx}
                  href={cta.href}
                  className={`group inline-flex items-center gap-2 px-10 py-4 rounded-full font-bold text-[15px] md:text-[16px] transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_8px_30px_${theme.accentGlow}] hover:-translate-y-2 ${
                    isPrimary ? theme.primaryBtn : `border-2 ${theme.secondaryBtn}`
                  } ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                  }`}
                  style={{ transitionDelay: `${700 + idx * 100}ms` }}
                >
                  <span>{cta.label}</span>
                  <span className="text-[18px] transition-transform duration-300 group-hover:translate-x-2">
                    →
                  </span>
                </Link>
              );
            })}
          </div>
        ) : null}
      </div>

      
    </section>
  );
}
