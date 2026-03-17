"use client";
import React, { use } from "react";
import Link from "next/link";

type Variant = "orange" | "green" | "red";

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  specialties: string[];
  contact: {
    email: string;
    phone?: string;
  };
  slug?: string; // for future individual pages
  link?: string; // direct link to profile page
}

const VARIANT_STYLES: Record<Variant, { accent: string; bg: string; badge: string }> = {
  orange: {
    accent: "#FF6B35",
    bg: "from-orange-50",
    badge: "from-[#FF6B35] to-[#FF8C00]",
  },
  green: {
    accent: "#2D6A4F",
    bg: "from-green-50",
    badge: "from-[#2D6A4F] to-[#34A853]",
  },
  red: {
    accent: "#8B0000",
    bg: "from-red-50",
    badge: "from-[#8B0000] to-[#4B0000]",
  },
};

export function TeamGrid({
  members,
  variant = "green",
  columns = 3,
}: {
  members: TeamMember[];
  variant?: Variant;
  columns?: 1 | 2 | 3;
}) {
  const styles = VARIANT_STYLES[variant];

  const gridCols =
    columns === 1
      ? "grid-cols-1 max-w-[600px] mx-auto"
      : columns === 2
      ? "grid-cols-1 md:grid-cols-2"
      : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3";

  return (
    <div className={`grid ${gridCols} gap-8`}>
      {members.map((member, idx) => (
        <div
          key={idx}
          className="bg-white/90 bg-[url('/img/design/cream.jpg')] bg-cover bg-center rounded-[20px] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.1)] transition-all hover:-translate-y-2 hover:shadow-[0_8px_30px_rgba(45,106,79,0.2)] border-t-[5px]"
          style={{ borderTopColor: styles.accent }}
        >
          {/* Image */}
          <div className="relative h-[280px] overflow-hidden bg-gradient-to-br from-[#2D6A4F]/10 to-[#34A853]/5">
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                // Fallback to placeholder if image doesn't exist
                (e.target as HTMLImageElement).src =
                  `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&size=400&background=2D6A4F&color=fff&bold=true`;
              }}
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"
            />
          </div>

          {/* Content */}
          <div className="p-8">
            {member.link ? (
  <a href={member.link}>
    <h3 className="text-[24px] font-bold text-[#333] mb-2 cursor-pointer">
      {member.name}
    </h3>
  </a>
) : (
  <h3 className="text-[24px] font-bold text-[#333] mb-2">
    {member.name}
  </h3>
)}

            <p
              className="text-[15px] font-semibold mb-4 uppercase tracking-[1px]"
              style={{ color: styles.accent }}
            >
              {member.role}
            </p>

            <p className="text-[15px] text-[#555] leading-[1.8] mb-6">{member.bio}</p>

            {/* Specialties */}
            <div className="mb-6">
              <h4 className="text-[13px] font-bold text-[#333] uppercase tracking-[1px] mb-3">
                Specialties
              </h4>
              <div className="flex flex-wrap gap-2">
                {member.specialties.map((specialty, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-full text-[13px] font-semibold border"
                    style={{
                      background: `${styles.accent}10`,
                      color: styles.accent,
                      borderColor: `${styles.accent}30`,
                    }}
                  >
                    {specialty}
                  </span>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div className="border-t border-[#e9ecef] pt-5 space-y-2">
              <a
                href={`mailto:${member.contact.email}`}
                className="flex items-center gap-2 text-[14px] text-[#666] hover:text-[#2D6A4F] transition"
              >
                <span className="text-[18px]">✉️</span>
                <span>{member.contact.email}</span>
              </a>
              {member.contact.phone && (
                <a
                  href={`tel:${member.contact.phone}`}
                  className="flex items-center gap-2 text-[14px] text-[#666] hover:text-[#2D6A4F] transition"
                >
                  <span className="text-[18px]">📞</span>
                  <span>{member.contact.phone}</span>
                </a>
              )}
            </div>

            {/* Future: Link to individual page */}
            {member.slug && (
              <Link
                href={`/team/${member.slug}`}
                className="inline-flex items-center gap-2 mt-5 font-semibold transition-all hover:gap-3"
                style={{ color: styles.accent }}
              >
                View Full Profile <span>→</span>
              </Link>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
