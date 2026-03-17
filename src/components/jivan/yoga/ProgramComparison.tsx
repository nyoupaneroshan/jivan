"use client";

import React from "react";
import Link from "next/link";

interface Program {
  badge: string;
  title: string;
  duration: string;
  description: string;
  highlights: string[];
  link: {
    href: string;
    label: string;
  };
}

type Variant = "orange" | "green" | "blue";

interface ProgramComparisonProps {
  programs: Program[];
  variant?: Variant | string; // allow string to avoid runtime errors if wrong value passed
}

const VARIANT_STYLES: Record<
  "orange" | "green" | "blue",
  {
    borderTop: string;
    cornerFrom: string;
    badgeFrom: string;
    badgeTo: string;
    check: string;
    buttonFrom: string;
    buttonTo: string;
  }
> = {
  orange: {
    borderTop: "#FF6B35",
    cornerFrom: "from-orange-50",
    badgeFrom: "#FF6B35",
    badgeTo: "#FF8C00",
    check: "#FF6B35",
    buttonFrom: "#FF6B35",
    buttonTo: "#FF8C00",
  },
  green: {
    borderTop: "#2D6A4F",
    cornerFrom: "from-green-50",
    badgeFrom: "#2D6A4F",
    badgeTo: "#34A853",
    check: "#2D6A4F",
    buttonFrom: "#2D6A4F",
    buttonTo: "#34A853",
  },
  blue: {
    borderTop: "#0F5D8A",
    cornerFrom: "from-blue-50",
    badgeFrom: "#0F5D8A",
    badgeTo: "#58A6E8",
    check: "#0F5D8A",
    buttonFrom: "#0F5D8A",
    buttonTo: "#58A6E8",
  },
};

export function ProgramComparison({ programs, variant = "green" }: ProgramComparisonProps) {
  const styles =
    (VARIANT_STYLES as Record<string, (typeof VARIANT_STYLES)["green"]>)[variant] ??
    VARIANT_STYLES.green;

  return (
    <section className="mb-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-3xl font-bold text-gray-800 mb-4">
          Choose Your Path
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Two comprehensive programs to match your experience and goals
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {programs.map((program, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-12 md:p-8 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 border-t-[5px] relative overflow-hidden"
            style={{ borderTopColor: styles.borderTop }}
          >
            {/* Decorative Corner */}
            <div
              className={`absolute top-0 right-0 w-36 h-36 bg-gradient-to-br ${styles.cornerFrom} to-transparent rounded-bl-full opacity-50`}
            />

            <span
              className="inline-block text-white px-6 py-2 rounded-full text-sm font-bold uppercase tracking-widest mb-5"
              style={{
                background: `linear-gradient(135deg, ${styles.badgeFrom}, ${styles.badgeTo})`,
              }}
            >
              {program.badge}
            </span>

            <h3 className="text-3xl md:text-2xl font-bold text-gray-800 mb-4">
              {program.title}
            </h3>

            <p className="text-base text-gray-600 font-semibold mb-6 flex items-center gap-2">
              <span>📅</span> {program.duration}
            </p>

            <p className="text-[17px] leading-relaxed text-gray-600 mb-8">
              {program.description}
            </p>

            <ul className="list-none p-0 mb-8 space-y-3">
              {program.highlights.map((highlight, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-3 text-gray-600 text-base border-b border-gray-100 pb-3 last:border-b-0"
                >
                  <span
                    className="text-xl font-bold flex-shrink-0"
                    style={{ color: styles.check }}
                  >
                    ✓
                  </span>
                  {highlight}
                </li>
              ))}
            </ul>

            <Link
              href={program.link.href}
              className="inline-block text-white px-10 py-4 rounded-full font-bold transition-all hover:-translate-y-1 hover:shadow-xl no-underline"
              style={{
                background: `linear-gradient(135deg, ${styles.buttonFrom}, ${styles.buttonTo})`,
              }}
            >
              {program.link.label} →
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
