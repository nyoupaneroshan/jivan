"use client";

import React, { useState } from "react";
import Link from "next/link";

interface ModuleCardProps {
  icon: string;
  title: string;
  description: string;
  features?: string[];
  badges?: string[];
  link?: {
    href: string;
    label: string;
  };
  advanced?: boolean;
  advancedText?: string;
  children?: React.ReactNode;
  defaultExpanded?: boolean;
  variant?: "red" | "dark-red" | "orange" | "green" | "purple" | "blue";
}

const variantStyles = {
  red: {
    border: "border-l-red-600",
    icon: "from-red-600 to-red-800",
    expandIcon: "bg-red-50 text-red-700",
    badge: "from-red-50 to-white text-red-700 border-red-200",
    link: "from-red-600 to-red-800",
    linkShadow: "rgba(220, 38, 38, 0.3)",
    advanced: "from-amber-400 to-red-600",
    accentColor: "#dc2626",
    cornerGradient: "from-red-50",
  },
  "dark-red": {
    border: "border-l-red-900",
    icon: "from-red-900 to-red-950",
    expandIcon: "bg-red-950/10 text-red-900",
    badge: "from-orange-50 to-white text-red-900 border-red-900/10",
    link: "from-red-900 to-red-950",
    linkShadow: "rgba(127, 29, 29, 0.3)",
    advanced: "from-yellow-400 to-orange-500",
    accentColor: "#7f1d1d",
    cornerGradient: "from-red-50",
  },
  orange: {
    border: "border-l-orange-600",
    icon: "from-orange-600 to-orange-700",
    expandIcon: "bg-orange-50 text-orange-700",
    badge: "from-orange-50 to-white text-orange-700 border-orange-200",
    link: "from-orange-600 to-orange-700",
    linkShadow: "rgba(234, 88, 12, 0.3)",
    advanced: "from-yellow-400 to-orange-500",
    accentColor: "#ea580c",
    cornerGradient: "from-orange-50",
  },
  green: {
    border: "border-l-green-600",
    icon: "from-green-600 to-green-800",
    expandIcon: "bg-green-50 text-green-700",
    badge: "from-green-50 to-white text-green-700 border-green-200",
    link: "from-green-600 to-green-800",
    linkShadow: "rgba(22, 163, 74, 0.3)",
    advanced: "from-yellow-400 to-green-600",
    accentColor: "#16a34a",
    cornerGradient: "from-green-50",
  },
  purple: {
    border: "border-l-purple-600",
    icon: "from-purple-600 to-purple-800",
    expandIcon: "bg-purple-50 text-purple-700",
    badge: "from-purple-50 to-white text-purple-700 border-purple-200",
    link: "from-purple-600 to-purple-800",
    linkShadow: "rgba(147, 51, 234, 0.3)",
    advanced: "from-yellow-400 to-purple-600",
    accentColor: "#9333ea",
    cornerGradient: "from-purple-50",
  },
  blue: {
    border: "border-l-blue-600",
    icon: "from-blue-600 to-blue-800",
    expandIcon: "bg-blue-50 text-blue-700",
    badge: "from-blue-50 to-white text-blue-700 border-blue-200",
    link: "from-blue-600 to-blue-800",
    linkShadow: "rgba(37, 99, 235, 0.3)",
    advanced: "from-yellow-400 to-blue-600",
    accentColor: "#2563eb",
    cornerGradient: "from-blue-50",
  },
};

export function ModuleCard({
  icon,
  title,
  description,
  features,
  badges,
  link,
  advanced,
  advancedText,
  children,
  defaultExpanded = false,
  variant = "green",
}: ModuleCardProps) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);
  const styles = variantStyles[variant];

  return (
    <div
      className={`group bg-white rounded-2xl sm:rounded-[20px] p-6 sm:p-8 lg:p-10 mb-6 sm:mb-8 shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border-l-4 sm:border-l-[5px] ${styles.border} relative overflow-hidden`}
    >
      {/* Decorative Corner with animation */}
      <div
        className={`absolute top-0 right-0 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gradient-to-br ${styles.cornerGradient} to-transparent rounded-bl-full opacity-0 group-hover:opacity-50 transition-opacity duration-500`}
      />

      {/* Animated background accent */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-700"
        style={{
          background: `radial-gradient(circle at top right, ${styles.accentColor}, transparent 70%)`,
        }}
      />

      {/* Header */}
      <div
        className="flex justify-between items-center mb-5 sm:mb-6 cursor-pointer relative z-10 group/header"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center gap-3 sm:gap-4 lg:gap-5 flex-1 min-w-0">
          {/* Icon with pulse effect */}
          <div
            className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br ${styles.icon} rounded-xl sm:rounded-[15px] flex items-center justify-center text-2xl sm:text-3xl text-white flex-shrink-0 shadow-lg transition-all duration-500 group-hover/header:scale-110 group-hover/header:rotate-6`}
          >
            {icon}
          </div>
          {/* Title with color transition */}
          <h3
            className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 m-0 transition-colors duration-300 group-hover/header:opacity-80 leading-tight"
            style={{
              color: isExpanded ? styles.accentColor : undefined,
            }}
          >
            {title}
          </h3>
        </div>

        {/* Expand icon with smooth rotation */}
        <span
          className={`text-base sm:text-lg lg:text-xl ${styles.expandIcon} w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center transition-all duration-500 shadow-sm flex-shrink-0 ml-3 ${
            isExpanded ? "rotate-180 scale-110" : "rotate-0 scale-100"
          } group-hover/header:scale-110`}
        >
          ▼
        </span>
      </div>

      {/* Content with smooth expand/collapse */}
      <div
        className={`transition-all duration-700 ease-in-out overflow-hidden ${
          isExpanded ? "max-h-[5000px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {/* Advanced badge with shine effect */}
        {advanced && advancedText && (
          <div
            className={`relative bg-gradient-to-br ${styles.advanced} ${
              variant === "dark-red" ? "text-gray-900" : "text-white"
            } p-4 sm:p-5 rounded-xl sm:rounded-[12px] mb-4 sm:mb-5 font-semibold shadow-lg overflow-hidden group/badge`}
          >
            {/* Shine animation */}
            <div className="absolute inset-0 -translate-x-full group-hover/badge:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            
            <div className="relative z-10 flex items-center gap-2">
              <span className="text-lg sm:text-xl animate-pulse">⭐</span>
              <span className="text-sm sm:text-base">{advancedText}</span>
            </div>
          </div>
        )}

        <div className="pt-4 sm:pt-5 border-t border-gray-100">
          {/* Description with fade-in */}
          <p
            className={`text-sm sm:text-base leading-relaxed text-gray-700 mb-5 sm:mb-6 transition-all duration-500 ${
              isExpanded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
            style={{ transitionDelay: isExpanded ? "100ms" : "0ms" }}
          >
            {description}
          </p>

          {/* Children content */}
          {children && (
            <div
              className={`mb-5 sm:mb-6 transition-all duration-500 ${
                isExpanded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              }`}
              style={{ transitionDelay: isExpanded ? "200ms" : "0ms" }}
            >
              {children}
            </div>
          )}

          {/* Badges grid with staggered animation */}
          {badges && badges.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-5 sm:mb-6">
              {badges.map((badge, index) => (
                <div
                  key={index}
                  className={`bg-gradient-to-br ${styles.badge} px-4 sm:px-5 py-2.5 sm:py-3 rounded-lg sm:rounded-[10px] text-xs sm:text-sm font-semibold text-center border transition-all duration-500 hover:scale-105 hover:shadow-md ${
                    isExpanded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                  }`}
                  style={{
                    transitionDelay: isExpanded ? `${300 + index * 50}ms` : "0ms",
                  }}
                >
                  {badge}
                </div>
              ))}
            </div>
          )}

          {/* Features list with staggered animation */}
          {features && features.length > 0 && (
            <ul className="list-none p-0 mb-5 sm:mb-6 space-y-2.5 sm:space-y-3">
              {features.map((feature, index) => (
                <li
                  key={index}
                  className={`group/feature flex items-start gap-2.5 sm:gap-3 text-gray-700 text-sm sm:text-[15px] transition-all duration-500 hover:translate-x-2 ${
                    isExpanded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                  }`}
                  style={{
                    transitionDelay: isExpanded ? `${400 + index * 50}ms` : "0ms",
                  }}
                >
                  <span
                    className="text-lg sm:text-xl flex-shrink-0 transition-all duration-300 group-hover/feature:scale-125 font-bold"
                    style={{ color: styles.accentColor }}
                  >
                    ✓
                  </span>
                  <span className="transition-colors duration-300 group-hover/feature:text-gray-900 leading-snug">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          )}

          {/* CTA link with animated arrow */}
          {link && (
            <Link
              href={link.href}
              className={`group/link inline-flex items-center justify-center sm:justify-start gap-2 bg-gradient-to-br ${styles.link} text-white px-6 sm:px-8 py-3 sm:py-3.5 rounded-full font-bold text-sm sm:text-base transition-all duration-300 hover:-translate-y-1 no-underline w-full sm:w-auto ${
                isExpanded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              }`}
              style={{
                transitionDelay: isExpanded
                  ? `${500 + (features?.length || 0) * 50}ms`
                  : "0ms",
                boxShadow: `0 4px 15px ${styles.linkShadow}`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = `0 8px 25px ${styles.linkShadow}`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = `0 4px 15px ${styles.linkShadow}`;
              }}
            >
              <span>{link.label}</span>
              <span className="transition-transform duration-300 group-hover/link:translate-x-2 text-lg">
                →
              </span>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
