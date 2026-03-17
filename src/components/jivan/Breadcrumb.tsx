"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  variant?: "default" | "green" | "red" | "orange";
}

const variantStyles = {
  default: {
    activeColor: "text-[#C41E3A]",
    hoverColor: "hover:text-[#C41E3A]",
    separatorColor: "text-gray-400",
    iconBg: "bg-[#C41E3A]/10",
    iconColor: "text-[#C41E3A]",
  },
  green: {
    activeColor: "text-[#2D6A4F]",
    hoverColor: "hover:text-[#2D6A4F]",
    separatorColor: "text-emerald-400",
    iconBg: "bg-[#2D6A4F]/10",
    iconColor: "text-[#2D6A4F]",
  },
  red: {
    activeColor: "text-[#8B0000]",
    hoverColor: "hover:text-[#8B0000]",
    separatorColor: "text-red-400",
    iconBg: "bg-[#8B0000]/10",
    iconColor: "text-[#8B0000]",
  },
  orange: {
    activeColor: "text-[#FF6B35]",
    hoverColor: "hover:text-[#FF6B35]",
    separatorColor: "text-orange-400",
    iconBg: "bg-[#FF6B35]/10",
    iconColor: "text-[#FF6B35]",
  },
};

export function Breadcrumb({ items, variant = "default" }: BreadcrumbProps) {
  const styles = variantStyles[variant];

  return (
    <div className="relative bg-gradient-to-b from-gray-50 to-white border-b border-gray-200 py-6 overflow-hidden">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{          backgroundImage: `radial-gradient(circle, #000 1px, transparent 1px)`,
          backgroundSize: '20px 20px'
        }} />
      </div>

      <div className="max-w-[1400px] mx-auto px-5 relative z-10">
        <nav
          className="flex items-center text-sm flex-wrap gap-2"
          aria-label="Breadcrumb"
        >
          {items.map((item, index) => {
            const isFirst = index === 0;
            const isLast = index === items.length - 1;

            return (
              <React.Fragment key={index}>
                {/* Separator */}
                {index > 0 && (
                  <ChevronRight
                    className={`${styles.separatorColor} transition-all duration-300 flex-shrink-0`}
                    size={16}
                  />
                )}

                {/* Breadcrumb Item */}
                {item.href ? (
                  <Link
                    href={item.href}
                    className={`group inline-flex items-center gap-2 px-3 py-1.5 rounded-lg transition-all duration-300 ${styles.hoverColor} text-gray-600 hover:bg-gray-100/80`}
                  >
                    {/* Home icon for first item */}
                    {isFirst && (
                      <span className={`${styles.iconBg} ${styles.iconColor} p-1.5 rounded-lg transition-all duration-300 group-hover:scale-110`}>
                        <Home size={14} />
                      </span>
                    )}
                    
                    <span className="relative">
                      {item.label}
                      {/* Animated underline */}
                      <span className={`absolute bottom-0 left-0 w-0 h-0.5 ${styles.activeColor.replace('text-', 'bg-')} transition-all duration-300 group-hover:w-full`} />
                    </span>
                  </Link>
                ) : (
                  <span
                    className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg ${styles.activeColor} font-semibold ${styles.iconBg} transition-all duration-300 animate-fade-in`}
                  >
                    {/* Current page indicator */}
                    <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
                    {item.label}
                  </span>
                )}
              </React.Fragment>
            );
          })}
        </nav>

        {/* Progress bar indicator */}
        <div className="mt-3 h-1 bg-gray-200 rounded-full overflow-hidden">
          <div
            className={`h-full ${styles.activeColor.replace('text-', 'bg-')} rounded-full transition-all duration-700 ease-out`}
            style={{ width: `${(items.length / (items.length + 2)) * 100}%` }}
          />
        </div>
      </div>

      
    </div>
  );
}
