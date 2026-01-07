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
  variant?: "red" | "dark-red" | "orange";
}

const variantStyles = {
  red: {
    border: "border-l-[#05402b]",
    icon: "bg-gradient-to-br from-[#05402b] to-[#032d1e]",
    expandIcon: "bg-[#05402b]/10 text-[#05402b]",
    badge: "bg-gradient-to-br from-green-50 to-white text-[#05402b] border-[#05402b]/10",
    link: "bg-gradient-to-br from-[#05402b] to-[#032d1e]",
    advanced: "bg-gradient-to-br from-[#FF6B35] to-[#05402b]",
  },
  "dark-red": {
    border: "border-l-[#05402b]",
    icon: "bg-gradient-to-br from-[#05402b] to-[#032d1e]",
    expandIcon: "bg-[#05402b]/10 text-[#05402b]",
    badge: "bg-gradient-to-br from-green-50 to-white text-[#05402b] border-[#05402b]/10",
    link: "bg-gradient-to-br from-[#05402b] to-[#032d1e]",
    advanced: "bg-gradient-to-br from-yellow-400 to-orange-500",
  },
  orange: {
    border: "border-l-[#FF6B35]",
    icon: "bg-gradient-to-br from-[#FF6B35] to-[#FF8C00]",
    expandIcon: "bg-[#FF6B35]/10 text-[#FF6B35]",
    badge: "bg-gradient-to-br from-orange-50 to-white text-[#FF8C00] border-[#FF6B35]/10",
    link: "bg-gradient-to-br from-[#FF6B35] to-[#FF8C00]",
    advanced: "bg-gradient-to-br from-[#FFD700] to-[#FFA500]",
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
  variant = "red",
}: ModuleCardProps) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);
  const styles = variantStyles[variant];

  return (
    <div
      className={`bg-white rounded-2xl p-10 md:p-8 sm:p-6 mb-8 shadow-lg transition-all hover:shadow-2xl hover:-translate-y-1 border-l-[5px] ${styles.border} relative overflow-hidden`}
    >
      {/* Decorative Corner */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-gray-50 to-transparent rounded-bl-full opacity-50" />

      {/* Header */}
      <div
        className="flex justify-between items-center mb-6 cursor-pointer relative z-10"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center gap-5 md:gap-4">
          <div
            className={`w-16 h-16 md:w-14 md:h-14 sm:w-12 sm:h-12 ${styles.icon} rounded-2xl flex items-center justify-center text-3xl md:text-2xl text-white flex-shrink-0`}
          >
            {icon}
          </div>
          <h3 className="text-2xl md:text-xl sm:text-lg font-bold text-gray-800 m-0">
            {title}
          </h3>
        </div>
        <span
          className={`text-xl ${styles.expandIcon} w-9 h-9 rounded-full flex items-center justify-center transition-transform ${
            isExpanded ? "rotate-180" : ""
          }`}
        >
          ▼
        </span>
      </div>

      {/* Content */}
      <div
        className={`overflow-hidden transition-all duration-400 ${
          isExpanded ? "max-h-[5000px]" : "max-h-0"
        }`}
      >
        {advanced && advancedText && (
          <div
            className={`${styles.advanced} ${variant === 'dark-red' ? 'text-gray-900' : 'text-white'} p-5 rounded-xl mb-5 font-semibold`}
          >
            {advancedText}
          </div>
        )}

        <div className="pt-5 border-t border-gray-100">
          <p className="text-base leading-relaxed text-gray-600 mb-6">
            {description}
          </p>

          {children}

          {badges && badges.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-1 gap-4 mb-6">
              {badges.map((badge, index) => (
                <div
                  key={index}
                  className={`${styles.badge} px-5 py-3 rounded-lg text-sm font-semibold text-center border`}
                >
                  {badge}
                </div>
              ))}
            </div>
          )}

          {features && features.length > 0 && (
            <ul className="list-none p-0 mb-6 space-y-3">
              {features.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-gray-600 text-[15px]"
                >
                  <span className="text-xl flex-shrink-0" style={{ color: variant === 'orange' ? '#FF6B35' : variant === 'dark-red' ? '#8B0000' : '#C41E3A' }}>
                    •
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
          )}

          {link && (
            <Link
              href={link.href}
              className={`inline-flex items-center gap-2 ${styles.link} text-white px-8 py-3 rounded-full font-semibold transition-all hover:translate-x-1 hover:shadow-lg no-underline`}
            >
              {link.label}
              <span>→</span>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}