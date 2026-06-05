"use client";

import React, { useId, useState } from "react";
import Link from "next/link";
import { ChevronDown, ArrowRight, Sparkles } from "lucide-react";

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
    topBar: "from-red-700 via-rose-600 to-red-800",
    iconWrap: "bg-red-50 text-red-700",
    badge: "bg-red-50 text-red-800 border-red-100",
    chip: "bg-red-50 text-red-700 border-red-100",
    button: "bg-red-700 hover:bg-red-600 text-white",
    accent: "text-red-700",
    ring: "focus-visible:ring-red-300",
    subtle: "bg-red-100/60",
  },
  "dark-red": {
    topBar: "from-red-950 via-red-900 to-red-950",
    iconWrap: "bg-red-100 text-red-950",
    badge: "bg-orange-50 text-red-900 border-red-100",
    chip: "bg-orange-50 text-red-900 border-red-100",
    button: "bg-red-950 hover:bg-red-900 text-white",
    accent: "text-red-900",
    ring: "focus-visible:ring-red-300",
    subtle: "bg-red-100/60",
  },
  orange: {
    topBar: "from-orange-700 via-amber-500 to-orange-800",
    iconWrap: "bg-orange-50 text-orange-700",
    badge: "bg-orange-50 text-orange-800 border-orange-100",
    chip: "bg-orange-50 text-orange-700 border-orange-100",
    button: "bg-orange-700 hover:bg-orange-600 text-white",
    accent: "text-orange-700",
    ring: "focus-visible:ring-orange-300",
    subtle: "bg-orange-100/60",
  },
  green: {
    topBar: "from-emerald-700 via-green-600 to-emerald-900",
    iconWrap: "bg-emerald-50 text-emerald-700",
    badge: "bg-emerald-50 text-emerald-800 border-emerald-100",
    chip: "bg-emerald-50 text-emerald-700 border-emerald-100",
    button: "bg-emerald-700 hover:bg-emerald-600 text-white",
    accent: "text-emerald-700",
    ring: "focus-visible:ring-emerald-300",
    subtle: "bg-emerald-100/60",
  },
  purple: {
    topBar: "from-purple-700 via-fuchsia-500 to-purple-900",
    iconWrap: "bg-purple-50 text-purple-700",
    badge: "bg-purple-50 text-purple-800 border-purple-100",
    chip: "bg-purple-50 text-purple-700 border-purple-100",
    button: "bg-purple-700 hover:bg-purple-600 text-white",
    accent: "text-purple-700",
    ring: "focus-visible:ring-purple-300",
    subtle: "bg-purple-100/60",
  },
  blue: {
    topBar: "from-blue-700 via-sky-500 to-blue-900",
    iconWrap: "bg-blue-50 text-blue-700",
    badge: "bg-blue-50 text-blue-800 border-blue-100",
    chip: "bg-blue-50 text-blue-700 border-blue-100",
    button: "bg-blue-700 hover:bg-blue-600 text-white",
    accent: "text-blue-700",
    ring: "focus-visible:ring-blue-300",
    subtle: "bg-blue-100/60",
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
  const panelId = useId();
  const buttonId = useId();

  return (
    <section className="group relative mb-6 overflow-hidden rounded-[28px] border border-[#e7dfd5] bg-white shadow-[0_14px_35px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_50px_rgba(15,23,42,0.10)]">
      <div className={`h-[3px] bg-gradient-to-r ${styles.topBar}`} />

      <div className="absolute right-0 top-0 h-24 w-24 rounded-bl-full bg-gradient-to-br from-white/0 to-slate-100/70 opacity-70" />

      <h3 className="relative z-10">
        <button
          id={buttonId}
          type="button"
          aria-expanded={isExpanded}
          aria-controls={panelId}
          onClick={() => setIsExpanded((prev) => !prev)}
          className={`flex w-full items-center justify-between gap-4 px-6 py-6 text-left transition-colors duration-300 focus:outline-none focus-visible:ring-4 ${styles.ring} sm:px-8 sm:py-7`}
        >
          <span className="flex min-w-0 items-center gap-4 sm:gap-5">
            <span
              className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${styles.iconWrap} text-2xl shadow-sm sm:h-14 sm:w-14 sm:text-3xl`}
              aria-hidden="true"
            >
              {icon}
            </span>

            <span className="min-w-0">
              <span className={`block text-lg font-bold leading-tight text-slate-900 sm:text-xl ${isExpanded ? styles.accent : ""}`}>
                {title}
              </span>
              <span className="mt-1 block text-sm leading-6 text-slate-500">
                {isExpanded ? "Tap to collapse details" : "Tap to expand details"}
              </span>
            </span>
          </span>

          <span
            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${styles.subtle} transition-transform duration-300 ${
              isExpanded ? "rotate-180" : ""
            }`}
            aria-hidden="true"
          >
            <ChevronDown size={18} className={styles.accent} />
          </span>
        </button>
      </h3>

      {isExpanded && (
        <div
          id={panelId}
          role="region"
          aria-labelledby={buttonId}
          className="px-6 pb-6 sm:px-8 sm:pb-8"
        >
          <div className="border-t border-slate-100 pt-5">
            {advanced && advancedText && (
              <div
                className={`mb-5 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] ${styles.badge}`}
              >
                <Sparkles size={14} />
                {advancedText}
              </div>
            )}

            <p className="text-sm leading-7 text-slate-700 sm:text-[15px]">
              {description}
            </p>

            {children ? <div className="mt-5">{children}</div> : null}

            {badges && badges.length > 0 ? (
              <div className="mt-5 flex flex-wrap gap-2.5">
                {badges.map((badge) => (
                  <span
                    key={badge}
                    className={`inline-flex rounded-full border px-3 py-2 text-xs font-semibold sm:text-sm ${styles.chip}`}
                  >
                    {badge}
                  </span>
                ))}
              </div>
            ) : null}

            {features && features.length > 0 ? (
              <ul className="mt-5 space-y-3">
                {features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-slate-700 sm:text-[15px]">
                    <span className={`mt-2 h-2 w-2 shrink-0 rounded-full ${styles.accent.replace("text-", "bg-")}`} />
                    <span className="leading-6">{feature}</span>
                  </li>
                ))}
              </ul>
            ) : null}

            {link ? (
              <div className="mt-6">
                <Link
                  href={link.href}
                  className={`inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold transition-all duration-300 hover:-translate-y-0.5 ${styles.button}`}
                >
                  {link.label}
                  <ArrowRight size={16} />
                </Link>
              </div>
            ) : null}
          </div>
        </div>
      )}
    </section>
  );
}