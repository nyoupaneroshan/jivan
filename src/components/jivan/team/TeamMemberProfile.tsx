"use client";
import React from "react";
import Link from "next/link";

type Variant = "orange" | "green" | "red";

interface ProfileData {
  name: string;
  title: string;
  subtitle: string;
  image: string;
  introduction: {
    text: string;
    stats: Array<{ number: string; label: string }>;
  };
  journey: {
    title: string;
    content: string[];
  };
  expertise: {
    title: string;
    skills: Array<{
      icon: string;
      name: string;
      description: string;
    }>;
  };
  achievements: {
    title: string;
    items: string[];
  };
  philosophy: {
    title: string;
    content: string;
  };
  sessions: {
    title: string;
    offerings: Array<{
      name: string;
      description: string;
      duration: string;
    }>;
  };
  testimonials: Array<{
    text: string;
    author: string;
    location: string;
  }>;
  contact: {
    email: string;
    phone: string;
    bookingText: string;
  };
}

const VARIANT_STYLES: Record<Variant, { accent: string; gradient: string }> = {
  orange: { accent: "#FF6B35", gradient: "from-[#FF6B35] to-[#FF8C00]" },
  green: { accent: "#2D6A4F", gradient: "from-[#2D6A4F] to-[#34A853]" },
  red: { accent: "#8B0000", gradient: "from-[#8B0000] to-[#4B0000]" },
};

export function TeamMemberProfile({
  profile,
  variant = "green",
}: {
  profile: ProfileData;
  variant?: Variant;
}) {
  const styles = VARIANT_STYLES[variant];

  return (
    <div className="max-w-[1200px] mx-auto px-5 py-16">
      {/* Hero Section */}
      <section className="bg-white/90 bg-[url('/img/design/cream.jpg')] bg-cover bg-center rounded-[20px] overflow-hidden shadow-[0_4px_25px_rgba(0,0,0,0.1)] mb-12 border-t-[5px]" style={{ borderTopColor: styles.accent }}>
        <div className="grid grid-cols-1 md:grid-cols-[400px_1fr] gap-0">
          {/* Image */}
          <div className="relative h-[400px] md:h-auto overflow-hidden bg-gradient-to-br from-[#2D6A4F]/10 to-[#34A853]/5">
            <img
              src={profile.image}
              alt={profile.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
                  profile.name
                )}&size=600&background=2D6A4F&color=fff&bold=true`;
              }}
            />
          </div>

          {/* Content */}
          <div className="p-8 md:p-12">
            <h1 className="text-[36px] md:text-[42px] font-bold text-[#333] mb-3">
              {profile.name}
            </h1>
            <p className="text-[18px] md:text-[20px] font-semibold mb-2" style={{ color: styles.accent }}>
              {profile.title}
            </p>
            <p className="text-[15px] text-[#666] mb-6">{profile.subtitle}</p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              {profile.introduction.stats.map((stat, idx) => (
                <div key={idx} className="text-center p-4 rounded-lg border-2" style={{ borderColor: `${styles.accent}20`, background: `${styles.accent}05` }}>
                  <div className="text-[24px] font-bold mb-1" style={{ color: styles.accent }}>
                    {stat.number}
                  </div>
                  <div className="text-[13px] text-[#666] font-medium">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3">
              <a
                href={`mailto:${profile.contact.email}`}
                className="inline-flex items-center gap-2 text-white px-6 py-3 rounded-full font-semibold transition-all hover:-translate-y-1 shadow-[0_4px_15px_rgba(45,106,79,0.3)]"
                style={{ background: `linear-gradient(135deg, ${styles.gradient.replace("from-", "").replace(" to-", ", ")})` }}
              >
                <span>✉️</span>
                <span>Contact</span>
              </a>
              <a
                href={`tel:${profile.contact.phone}`}
                className="inline-flex items-center gap-2 bg-white border-2 px-6 py-3 rounded-full font-semibold transition-all hover:bg-opacity-90"
                style={{ borderColor: styles.accent, color: styles.accent }}
              >
                <span>📞</span>
                <span>Call</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="bg-white/90 bg-[url('/img/design/cream.jpg')] bg-cover bg-center rounded-[15px] p-8 md:p-10 shadow-[0_4px_20px_rgba(0,0,0,0.08)] mb-8 border-l-[5px]" style={{ borderLeftColor: styles.accent }}>
        <p className="text-[16px] md:text-[17px] text-[#555] leading-[1.9]">
          {profile.introduction.text}
        </p>
      </section>

      {/* Spiritual Journey */}
      <section className="bg-white/90 bg-[url('/img/design/cream.jpg')] bg-cover bg-center rounded-[15px] p-8 md:p-10 shadow-[0_4px_20px_rgba(0,0,0,0.08)] mb-8 border-l-[5px]" style={{ borderLeftColor: styles.accent }}>
        <h2 className="text-[28px] md:text-[32px] font-bold mb-6" style={{ color: styles.accent }}>
          {profile.journey.title}
        </h2>
        <div className="space-y-4">
          {profile.journey.content.map((para, idx) => (
            <p key={idx} className="text-[15px] md:text-[16px] text-[#555] leading-[1.9]">
              {para}
            </p>
          ))}
        </div>
      </section>

      {/* Expertise */}
      <section className="bg-white/90 bg-[url('/img/design/cream.jpg')] bg-cover bg-center rounded-[15px] p-8 md:p-10 shadow-[0_4px_20px_rgba(0,0,0,0.08)] mb-8 border-l-[5px]" style={{ borderLeftColor: styles.accent }}>
        <h2 className="text-[28px] md:text-[32px] font-bold mb-8 text-center" style={{ color: styles.accent }}>
          {profile.expertise.title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {profile.expertise.skills.map((skill, idx) => (
            <div key={idx} className="p-6 rounded-[12px] border-2 transition-all hover:shadow-lg" style={{ borderColor: `${styles.accent}20`, background: `${styles.accent}05` }}>
              <div className="text-[36px] mb-3">{skill.icon}</div>
              <h3 className="text-[18px] font-bold text-[#333] mb-2">{skill.name}</h3>
              <p className="text-[14px] text-[#555] leading-[1.7]">{skill.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Achievements */}
      <section className="bg-white/90 bg-[url('/img/design/cream.jpg')] bg-cover bg-center rounded-[15px] p-8 md:p-10 shadow-[0_4px_20px_rgba(0,0,0,0.08)] mb-8 border-l-[5px]" style={{ borderLeftColor: styles.accent }}>
        <h2 className="text-[28px] md:text-[32px] font-bold mb-6" style={{ color: styles.accent }}>
          {profile.achievements.title}
        </h2>
        <ul className="space-y-3">
          {profile.achievements.items.map((item, idx) => (
            <li key={idx} className="flex items-start gap-3 text-[15px] text-[#555] leading-[1.8]">
              <span className="flex-shrink-0 w-6 h-6 rounded-full grid place-items-center text-white text-[12px] font-bold mt-1" style={{ background: styles.accent }}>
                ✓
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Philosophy */}
      <section className="bg-gradient-to-br rounded-[15px] p-8 md:p-10 shadow-[0_4px_20px_rgba(45,106,79,0.3)] mb-8 text-white" style={{ background: `linear-gradient(135deg, #2D6A4F, #34A853)` }}>
        <h2 className="text-[28px] md:text-[32px] font-bold mb-6">{profile.philosophy.title}</h2>
        <p className="text-[16px] md:text-[17px] leading-[1.9] opacity-95">{profile.philosophy.content}</p>
      </section>

      {/* Sessions */}
      <section className="bg-white/90 bg-[url('/img/design/cream.jpg')] bg-cover bg-center rounded-[15px] p-8 md:p-10 shadow-[0_4px_20px_rgba(0,0,0,0.08)] mb-8 border-l-[5px]" style={{ borderLeftColor: styles.accent }}>
        <h2 className="text-[28px] md:text-[32px] font-bold mb-6 text-center" style={{ color: styles.accent }}>
          {profile.sessions.title}
        </h2>
        <div className="space-y-4">
          {profile.sessions.offerings.map((offering, idx) => (
            <div key={idx} className="p-5 rounded-[10px] border-l-4 bg-white/50" style={{ borderLeftColor: styles.accent }}>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <h3 className="text-[17px] font-bold text-[#333]">{offering.name}</h3>
                <span className="text-[13px] font-semibold px-3 py-1 rounded-full mt-2 md:mt-0" style={{ background: `${styles.accent}15`, color: styles.accent }}>
                  {offering.duration}
                </span>
              </div>
              <p className="text-[14px] text-[#555] leading-[1.7]">{offering.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white/90 bg-[url('/img/design/cream.jpg')] bg-cover bg-center rounded-[15px] p-8 md:p-10 shadow-[0_4px_20px_rgba(0,0,0,0.08)] mb-8 border-l-[5px]" style={{ borderLeftColor: styles.accent }}>
        <h2 className="text-[28px] md:text-[32px] font-bold mb-8 text-center" style={{ color: styles.accent }}>
          What People Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {profile.testimonials.map((testimonial, idx) => (
            <div key={idx} className="p-6 rounded-[12px] bg-white border-2" style={{ borderColor: `${styles.accent}15` }}>
              <p className="text-[14px] text-[#555] leading-[1.8] mb-4 italic">"{testimonial.text}"</p>
              <div className="text-[13px] font-semibold" style={{ color: styles.accent }}>
                — {testimonial.author}
              </div>
              <div className="text-[12px] text-[#666]">{testimonial.location}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Booking CTA */}
      <section className="bg-gradient-to-br rounded-[15px] p-8 md:p-10 shadow-[0_4px_20px_rgba(45,106,79,0.3)] text-center text-white" style={{ background: `linear-gradient(135deg, ${styles.gradient.replace("from-", "").replace(" to-", ", ")})` }}>
        <h2 className="text-[26px] md:text-[30px] font-bold mb-4">Ready to Begin Your Transformation?</h2>
        <p className="text-[16px] mb-6 opacity-95">{profile.contact.bookingText}</p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="/contact" className="inline-block bg-white px-8 py-3 rounded-full font-bold transition-all hover:-translate-y-1" style={{ color: styles.accent }}>
            Book a Session
          </a>
          <a href={`mailto:${profile.contact.email}`} className="inline-block bg-white/20 backdrop-blur-sm text-white border-2 border-white px-8 py-3 rounded-full font-bold transition-all hover:bg-white/30">
            Send Email
          </a>
        </div>
      </section>
    </div>
  );
}
