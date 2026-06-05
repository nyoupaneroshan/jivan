"use client";

import React, { useState } from "react";

type TrainingLink = {
  id: string;
  label: string;
  href: string;
  note?: string;
  badge?: string;
};

export function TrainingLinkItem({
  link,
  accentFrom,
  accentText,
}: {
  link: TrainingLink;
  accentFrom: string;
  accentText: string;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={link.href}
      className="group flex items-center justify-between gap-4 rounded-xl px-5 py-4 border transition-all active:scale-[0.99]"
      style={{
        background: hovered ? `${accentFrom}05` : "#FAFAF9",
        borderColor: hovered ? `${accentFrom}40` : "#E8EDE8",
        boxShadow: hovered ? "0 2px 8px rgba(0,0,0,0.06)" : "none",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="min-w-0">
        <div className="flex items-center gap-2 flex-wrap">
          <p className="text-[14px] font-semibold text-[#1A1714] leading-snug">
            {link.label}
          </p>
          {link.badge && (
            <span
              className="inline-block text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full"
              style={{
                background: `${accentFrom}12`,
                color: accentText,
                border: `1px solid ${accentFrom}20`,
              }}
            >
              {link.badge}
            </span>
          )}
        </div>
        {link.note && (
          <p className="mt-0.5 text-[12px] text-[#8A8580] leading-relaxed">{link.note}</p>
        )}
      </div>
      <svg
        className="flex-shrink-0 transition-transform group-hover:translate-x-0.5"
        width="16"
        height="14"
        viewBox="0 0 16 14"
        fill="none"
        aria-hidden
        style={{ color: accentText }}
      >
        <path
          d="M1 7h14M9 1l6 6-6 6"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </a>
  );
}