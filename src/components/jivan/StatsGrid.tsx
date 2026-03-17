// src/components/jivan/StatsGrid.tsx
"use client";

import { useEffect, useRef, useState } from "react";

type StatProps = { 
  icon: string; 
  number: string; 
  label: string;
  index: number;
};

function Stat({ icon, number, label, index }: StatProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [count, setCount] = useState(0);
  const statRef = useRef<HTMLDivElement>(null);

  // Extract numeric value for animation
  const numericValue = parseInt(number.replace(/[^0-9]/g, ''));
  const hasPlus = number.includes('+');
  const suffix = hasPlus ? '+' : '';

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (statRef.current) {
      observer.observe(statRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Animate counter
  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = numericValue / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= numericValue) {
        setCount(numericValue);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, numericValue]);

  return (
    <div
      ref={statRef}
      className="group relative flex flex-col items-center rounded-2xl bg-gradient-to-br from-[#8B4513] via-[#A0522D] to-[#8B4513] px-6 py-8 text-center text-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden"
      style={{
        animationDelay: `${index * 100}ms`,
      }}
    >
      {/* Shine effect */}
      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Decorative corner gradient */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-white/5 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Icon with animation */}
      <div className="relative mb-3 text-5xl transition-all duration-500 group-hover:scale-125 group-hover:rotate-12">
        {icon}
      </div>

      {/* Animated counter */}
      <div className="relative text-4xl font-extrabold leading-none transition-all duration-300 group-hover:scale-110">
        {isVisible ? (
          <>
            {count.toLocaleString()}
            {suffix}
          </>
        ) : (
          "0"
        )}
      </div>

      {/* Label */}
      <div className="relative mt-3 text-xs uppercase tracking-[0.15em] text-white/90 font-semibold">
        {label}
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

      {/* Pulsing ring on hover */}
      <div className="absolute inset-0 rounded-2xl border-2 border-white/0 group-hover:border-white/20 transition-all duration-500" />
    </div>
  );
}

export function StatsGrid() {
  const stats = [
    { icon: "🎯", number: "20001+", label: "Total Healings" },
    { icon: "👥", number: "5000+", label: "Happy Clients" },
    { icon: "🏆", number: "15+", label: "Years Experience" },
    { icon: "⭐", number: "500+", label: "Retreats Conducted" },
  ];

  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, index) => (
        <Stat
          key={stat.label}
          icon={stat.icon}
          number={stat.number}
          label={stat.label}
          index={index}
        />
      ))}
    </div>
  );
}
