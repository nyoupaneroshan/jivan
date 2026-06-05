import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { Breadcrumb } from "@/components/jivan/Breadcrumb";
import { PageHero } from "@/components/jivan/PageHero";
import { QuickNavigation } from "@/components/jivan/QuickNavigation";
import { SidebarWidget } from "@/components/jivan/SidebarWidget";

// ── removed "use client" — no event handlers, no hooks needed ─────────────────

// ─── SEO Metadata ─────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Corporate Wellness Retreat in Kathmandu | Jivan Parivartan",
  description:
    "Structured corporate wellness retreat programs in Nepal — yoga, meditation, sound healing, and stress management for teams of all sizes. On-site or off-site. Fully customizable.",
  keywords: [
    "corporate wellness retreat Nepal",
    "corporate yoga program Kathmandu",
    "workplace wellness retreat Nepal",
    "team wellness program Nepal",
    "corporate meditation Kathmandu",
    "employee wellness retreat Nepal",
    "sound healing corporate Nepal",
    "Jivan Parivartan corporate retreat",
  ],
  alternates: {
    canonical: "https://jivanparivartan.com/meditation/corporate-retreat",
  },
  openGraph: {
    title: "Corporate Wellness Retreat | Jivan Parivartan, Kathmandu",
    description:
      "Refresh your workforce with yoga, meditation, sound healing, and stress management. Customizable corporate wellness retreats in Nepal.",
    url: "https://jivanparivartan.com/meditation/corporate-retreat",
    siteName: "Jivan Parivartan",
    images: [
      {
        url: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200",
        width: 1200,
        height: 630,
        alt: "Corporate Wellness Retreat at Jivan Parivartan",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Corporate Wellness Retreat | Jivan Parivartan",
    description:
      "Yoga, meditation, sound healing & stress management for your team in Kathmandu. Flexible, customizable, all group sizes.",
    images: ["https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200"],
  },
};

// ─── JSON-LD ──────────────────────────────────────────────────────────────────

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Corporate Wellness Retreat",
  description:
    "Structured corporate wellness retreat programs including yoga, meditation, sound healing, stress management, and spiritual guidance for organizations in Nepal. Available on-site or off-site, fully customizable for any team size.",
  provider: {
    "@type": "Organization",
    name: "Jivan Parivartan",
    url: "https://jivanparivartan.com",
    telephone: "+977-9818514837",
    email: "jivanparivartan9@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kathmandu",
      addressCountry: "NP",
    },
  },
  serviceType: "Corporate Wellness Program",
  areaServed: {
    "@type": "Country",
    name: "Nepal",
  },
  url: "https://jivanparivartan.com/meditation/corporate-retreat",
  image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200",
  offers: {
    "@type": "Offer",
    description: "Customizable corporate wellness retreat — pricing on request.",
    availability: "https://schema.org/InStock",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home",                     item: "https://jivanparivartan.com/" },
    { "@type": "ListItem", position: 2, name: "Meditation & Retreats",    item: "https://jivanparivartan.com/meditation" },
    { "@type": "ListItem", position: 3, name: "Corporate Wellness Retreat",item: "https://jivanparivartan.com/meditation/corporate-retreat" },
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is included in the Jivan Parivartan Corporate Wellness Retreat?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The program includes stress management sessions, yoga (led by Yogi Adwaitmani and Yogi Anupam Chidananda), guided meditation and spiritual guidance (by Maa Nisha Kabir), and Himalayan singing bowl sound healing therapy (by Anish Swami).",
      },
    },
    {
      "@type": "Question",
      name: "Can the corporate wellness retreat be conducted at our office premises?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We offer both on-site programs at your company's premises and off-site retreats at selected peaceful venues in Nepal. The program is fully customizable based on your preference.",
      },
    },
    {
      "@type": "Question",
      name: "How long is the corporate wellness retreat?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The duration is fully flexible — from half-day sessions to multi-day retreats. We customize the length and content based on your organization's schedule, team size, and objectives.",
      },
    },
    {
      "@type": "Question",
      name: "Is the program suitable for employees with no yoga or meditation experience?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. All sessions are designed to be accessible for complete beginners and are suitable for all fitness levels and age groups. No prior experience with yoga, meditation, or sound healing is required.",
      },
    },
  ],
};

// ─── Static Data ──────────────────────────────────────────────────────────────

const programComponents = [
  {
    icon: "🧠",
    title: "Stress Management & Mental Relaxation",
    description:
      "Guided techniques specifically designed to release work-related stress and mental pressure. Participants learn to identify tension patterns and develop healthy coping mechanisms that can be applied immediately in their professional environment.",
  },
  {
    icon: "🧘",
    title: "Yoga Sessions",
    description:
      "Led by Yogi Adwaitmani and Yogi Anupam Chidananda — simple yet powerful practices improving physical health, flexibility, posture, and energy levels. Suitable for all age groups and fitness levels, with a focus on workplace-relevant benefits like reducing physical tension from desk work.",
  },
  {
    icon: "🌿",
    title: "Meditation Practices",
    description:
      "Conducted by Maa Nisha Kabir — deep, guided sessions to enhance focus, mental clarity, emotional stability, and inner awareness. Participants learn techniques that integrate naturally into daily routines, maintaining mental balance even during high-pressure situations.",
  },
  {
    icon: "🎵",
    title: "Sound Healing Therapy",
    description:
      "Facilitated by Anish Swami using traditional Himalayan singing bowls. The therapeutic vibrations calm the nervous system, release deep-seated tension, and restore inner harmony — reducing anxiety and promoting profound rest and rejuvenation.",
  },
  {
    icon: "✨",
    title: "Spiritual Guidance",
    description:
      "Sessions by Maa Nisha Kabir and her team focused on inner awareness, self-healing, emotional well-being, and positive life transformation. Supports personal growth, resolves internal conflicts, and cultivates a more purposeful approach to both work and life.",
  },
];

const facilitators = [
  {
    name: "Yogi Adwaitmani",
    role: "Yoga Instructor",
    initial: "A",
    expertise: "Physical wellness, flexibility, and energy enhancement through yoga practices.",
  },
  {
    name: "Yogi Anupam Chidananda",
    role: "Yoga Instructor",
    initial: "A",
    expertise: "Holistic yoga practices suitable for all fitness levels and age groups.",
  },
  {
    name: "Maa Nisha Kabir",
    role: "Meditation Guide & Spiritual Teacher",
    initial: "N",
    expertise: "Deep meditation, spiritual guidance, and emotional well-being practices.",
  },
  {
    name: "Anish Swami",
    role: "Sound Healing Therapist",
    initial: "A",
    expertise: "Traditional Himalayan singing bowl therapy and nervous system healing.",
  },
];

const benefits = [
  {
    category: "Mental Well-being",
    icon: "🧠",
    accentColor: "#166534",
    points: [
      "Significant reduction in work-related stress and mental fatigue",
      "Enhanced mental clarity and improved decision-making",
      "Better emotional stability and resilience under pressure",
      "Increased focus and concentration during work hours",
    ],
  },
  {
    category: "Physical Health",
    icon: "💪",
    accentColor: "#B45309",
    points: [
      "Improved flexibility, posture, and physical energy levels",
      "Reduced physical tension from prolonged desk work",
      "Better overall vitality and stamina throughout the workday",
      "Enhanced body awareness and physical well-being",
    ],
  },
  {
    category: "Professional Performance",
    icon: "📈",
    accentColor: "#4338CA",
    points: [
      "Renewed motivation and positive approach to challenges",
      "Improved productivity and work efficiency",
      "Better teamwork and interpersonal relationships",
      "Enhanced creativity and problem-solving capabilities",
    ],
  },
  {
    category: "Organizational Impact",
    icon: "🏢",
    accentColor: "#0F766E",
    points: [
      "Healthier and more positive organizational culture",
      "Reduced employee burnout and absenteeism",
      "Improved employee satisfaction and retention",
      "Stronger sense of community and team cohesion",
    ],
  },
];

const customizationOptions = [
  {
    icon: "⏱️",
    title: "Program Duration",
    body: "Half-day sessions to multi-day retreats. We design programs from intensive one-day experiences to comprehensive multi-day transformations based on your schedule.",
  },
  {
    icon: "📍",
    title: "Location Options",
    body: "On-site at your company premises or off-site at carefully selected peaceful venues. The choice depends on your preference and the experience you wish to create.",
  },
  {
    icon: "👥",
    title: "Group Size",
    body: "Accommodates groups from small department teams to large company-wide events. Every participant receives adequate attention regardless of group size.",
  },
  {
    icon: "🎯",
    title: "Content Focus",
    body: "Emphasize specific components based on your team's needs — stress management, physical wellness, meditation, or team building. Fully adjustable.",
  },
];

// ─── Sub-Components ───────────────────────────────────────────────────────────

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-[20px] sm:text-[24px] font-bold text-[#1A1714] mb-6 pb-4 border-b border-[#F0EDE8]">
      {children}
    </h2>
  );
}

function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={`bg-white rounded-2xl px-7 sm:px-9 py-8 border border-[#EAE6E0] ${className}`}
      style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.04), 0 6px 20px rgba(0,0,0,0.05)" }}
    >
      {children}
    </div>
  );
}

function ComponentItem({
  icon,
  title,
  description,
  index,
}: {
  icon: string;
  title: string;
  description: string;
  index: number;
}) {
  return (
    <div className="flex gap-4 items-start">
      {/* Step number + icon */}
      <div className="flex-shrink-0 flex flex-col items-center gap-1.5">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center text-lg"
          style={{ background: "#F0F7F1", border: "1px solid #D1E8D4" }}
          aria-hidden
        >
          {icon}
        </div>
        <span className="text-[10px] font-bold text-[#8A8580] tabular-nums">
          0{index + 1}
        </span>
      </div>
      {/* Content */}
      <div className="flex-1 min-w-0 pb-6 border-b border-[#F4F1ED] last:border-0 last:pb-0">
        <h3 className="text-[16px] font-bold text-[#1A1714] mb-2 leading-snug">
          {title}
        </h3>
        <p className="text-[14px] text-[#5A5550] leading-[1.75]">{description}</p>
      </div>
    </div>
  );
}

function FacilitatorCard({
  name,
  role,
  initial,
  expertise,
}: {
  name: string;
  role: string;
  initial: string;
  expertise: string;
}) {
  return (
    <div
      className="bg-white rounded-xl px-5 py-5 border border-[#E8EDE8] flex gap-4 items-start"
      style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}
    >
      <div
        className="w-11 h-11 rounded-full flex items-center justify-center text-white text-[15px] font-bold flex-shrink-0"
        style={{ background: "linear-gradient(135deg, #166534, #14532D)", boxShadow: "0 3px 10px rgba(22,101,52,0.25)" }}
        aria-hidden
      >
        {initial}
      </div>
      <div>
        <p className="text-[15px] font-bold text-[#1A1714] leading-snug">{name}</p>
        <p className="text-[12px] font-semibold text-[#166534] mt-0.5 mb-2">{role}</p>
        <p className="text-[13px] text-[#5A5550] leading-relaxed">{expertise}</p>
      </div>
    </div>
  );
}

function BenefitGroup({
  category,
  icon,
  accentColor,
  points,
}: {
  category: string;
  icon: string;
  accentColor: string;
  points: string[];
}) {
  return (
    <div>
      <div className="flex items-center gap-2.5 mb-4">
        <div
          className="w-8 h-8 rounded-lg flex items-center justify-center text-base flex-shrink-0"
          style={{ background: `${accentColor}12`, border: `1px solid ${accentColor}20` }}
          aria-hidden
        >
          {icon}
        </div>
        <h3
          className="text-[16px] font-bold"
          style={{ color: accentColor }}
        >
          {category}
        </h3>
      </div>
      <ul className="space-y-2.5 pl-0" role="list">
        {points.map((point) => (
          <li key={point} className="flex items-start gap-3 text-[14px] text-[#3D3A35] leading-[1.75]">
            <span
              className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-[3px]"
              style={{ background: `${accentColor}15`, color: accentColor }}
              aria-hidden
            >
              <svg width="8" height="7" viewBox="0 0 8 7" fill="none">
                <path d="M1 3.5L3 5.5L7 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
}

function CustomizeCard({
  icon,
  title,
  body,
}: {
  icon: string;
  title: string;
  body: string;
}) {
  return (
    <div
      className="bg-white rounded-xl px-5 py-5 border border-[#E8EDE8]"
      style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}
    >
      <div
        className="w-9 h-9 rounded-lg flex items-center justify-center text-lg mb-3"
        style={{ background: "#F0F7F1", border: "1px solid #D1E8D4" }}
        aria-hidden
      >
        {icon}
      </div>
      <h3 className="text-[14px] font-bold text-[#1A1714] mb-1.5">{title}</h3>
      <p className="text-[13px] text-[#5A5550] leading-relaxed">{body}</p>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function CorporateRetreatPage() {
  const breadcrumbItems = [
    { label: "Home",                   href: "/" },
    { label: "Meditation & Retreats",  href: "/meditation" },
    { label: "Corporate Wellness Retreat" },
  ];

  const quickNavItems = [
    { id: "overview",      icon: "📋", label: "Overview",         href: "#overview" },
    { id: "components",    icon: "🎯", label: "Key Components",   href: "#components" },
    { id: "facilitators",  icon: "👥", label: "Facilitators",     href: "#facilitators" },
    { id: "benefits",      icon: "✅", label: "Benefits",         href: "#benefits" },
    { id: "customize",     icon: "⚙️", label: "Customize",        href: "#customize" },
    { id: "contact",       icon: "📞", label: "Inquiry",          href: "#contact" },
  ];

  const heroStats = [
    { number: "Custom",   label: "Duration" },
    { number: "On-site",  label: "Available" },
    { number: "All",      label: "Team Sizes" },
    { number: "Flexible", label: "Schedule" },
  ];

  const heroCTAs = [
    { label: "View Program",  href: "#components", primary: true },
    { label: "Enquire Now",   href: "#contact" },
  ];

  return (
    <>
      {/* ── JSON-LD ─────────────────────────────────────────────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="min-h-screen bg-[#F5F2EC] bg-[url('/img/design/color-page.jpg')] bg-repeat bg-center">

        {/* Skip link */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-white focus:text-green-800 focus:rounded-lg focus:shadow-lg focus:font-semibold focus:text-sm"
        >
          Skip to main content
        </a>

        <Breadcrumb items={breadcrumbItems} />

        <PageHero
          badge={{ icon: "🏢", text: "Workplace Wellness Program" }}
          title="Corporate Wellness Retreat"
          subtitle="Structured retreat programs to refresh your workforce, enhance work efficiency, and promote emotional balance — customizable for any team size and schedule."
          stats={heroStats}
          ctas={heroCTAs}
          variant="green"
          backgroundImage="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920"
        />

        <QuickNavigation items={quickNavItems} variant="green" />

        <main
          id="main-content"
          className="max-w-[1400px] mx-auto px-4 sm:px-5 lg:px-6 py-12 sm:py-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] xl:grid-cols-[1fr_380px] gap-8 lg:gap-12">

            {/* ── Content ───────────────────────────────────────── */}
            <div className="space-y-8 min-w-0">

              {/* Overview */}
              <section id="overview" aria-labelledby="overview-heading">
                <Card>
                  <SectionHeading>Overview</SectionHeading>
                  <div className="space-y-4 text-[15px] text-[#3D3A35] leading-[1.8]">
                    <p>
                      In today's fast-paced corporate environment, employees often face high levels
                      of stress, mental fatigue, and burnout — impacting both personal well-being
                      and professional performance. Understanding this need, Jivan Parivartan offers
                      a structured retreat program aimed at refreshing workers, enhancing work
                      efficiency, and promoting emotional balance.
                    </p>
                    <p>
                      The primary purpose of this program is to help employees rejuvenate mentally
                      and physically, improve concentration, build resilience, and return to work
                      with renewed motivation and positivity. A balanced and relaxed workforce
                      ultimately contributes to higher productivity, better teamwork, and a
                      healthier organizational culture.
                    </p>
                    <p>
                      We would be honored to collaborate with your organization at a mutually
                      convenient time and location. The program can be fully customized according
                      to your company's requirements and duration preferences.
                    </p>
                  </div>

                  {/* Quick feature chips */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {[
                      "Yoga & Movement",
                      "Guided Meditation",
                      "Sound Healing",
                      "Stress Management",
                      "Spiritual Guidance",
                      "Fully Customizable",
                    ].map((tag) => (
                      <span
                        key={tag}
                        className="inline-block text-[11px] font-semibold uppercase tracking-widest px-3 py-1 rounded-full"
                        style={{ background: "#F0F7F1", color: "#166534", border: "1px solid #D1E8D4" }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </Card>
              </section>

              {/* Key Components */}
              <section id="components" aria-labelledby="components-heading">
                <Card>
                  <SectionHeading>Key Program Components</SectionHeading>
                  <div className="space-y-0">
                    {programComponents.map((c, i) => (
                      <ComponentItem
                        key={c.title}
                        icon={c.icon}
                        title={c.title}
                        description={c.description}
                        index={i}
                      />
                    ))}
                  </div>
                </Card>
              </section>

              {/* Facilitators */}
              <section id="facilitators" aria-labelledby="facilitators-heading">
                <Card>
                  <SectionHeading>Expert Facilitators</SectionHeading>
                  <p className="text-[14px] text-[#5A5550] leading-relaxed mb-6">
                    Our program is led by a team of highly experienced practitioners, each
                    bringing unique expertise to create a comprehensive wellness experience.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {facilitators.map((f) => (
                      <FacilitatorCard
                        key={f.name}
                        name={f.name}
                        role={f.role}
                        initial={f.initial}
                        expertise={f.expertise}
                      />
                    ))}
                  </div>
                </Card>
              </section>

              {/* Benefits */}
              <section id="benefits" aria-labelledby="benefits-heading">
                <Card>
                  <SectionHeading>Program Benefits</SectionHeading>
                  <p className="text-[14px] text-[#5A5550] leading-relaxed mb-8">
                    Comprehensive benefits that positively impact individual employees, team
                    dynamics, and overall organizational success.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {benefits.map((b) => (
                      <BenefitGroup
                        key={b.category}
                        category={b.category}
                        icon={b.icon}
                        accentColor={b.accentColor}
                        points={b.points}
                      />
                    ))}
                  </div>
                </Card>
              </section>

              {/* Customize */}
              <section id="customize" aria-labelledby="customize-heading">
                <Card>
                  <SectionHeading>Flexible & Customizable</SectionHeading>
                  <p className="text-[14px] text-[#5A5550] leading-relaxed mb-6">
                    Every organization has unique needs. Our program is designed to be fully
                    flexible — customized to your schedule, team size, location, and objectives.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {customizationOptions.map((o) => (
                      <CustomizeCard key={o.title} icon={o.icon} title={o.title} body={o.body} />
                    ))}
                  </div>
                </Card>
              </section>

              {/* FAQ */}
              <section id="faq" aria-labelledby="faq-heading">
                <Card>
                  <SectionHeading>Frequently Asked Questions</SectionHeading>
                  <dl className="space-y-4">
                    {[
                      {
                        q: "What is included in the Corporate Wellness Retreat?",
                        a: "The program includes stress management sessions, yoga (by Yogi Adwaitmani and Yogi Anupam Chidananda), guided meditation and spiritual guidance (by Maa Nisha Kabir), and Himalayan singing bowl sound healing therapy (by Anish Swami).",
                      },
                      {
                        q: "Can the retreat be conducted at our office premises?",
                        a: "Yes. We offer both on-site programs at your company's premises and off-site retreats at selected peaceful venues in Nepal.",
                      },
                      {
                        q: "How long is the program and what does it cost?",
                        a: "Duration is fully flexible — from half-day sessions to multi-day retreats. Pricing is customized based on team size, duration, and location. Contact us for a tailored proposal.",
                      },
                      {
                        q: "Is it suitable for employees with no prior yoga or meditation experience?",
                        a: "Yes. All sessions are accessible for complete beginners and suitable for all fitness levels and age groups. No prior experience is required.",
                      },
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="bg-[#FAFAF8] rounded-xl px-5 py-4 border border-[#EAE6E0]"
                      >
                        <dt className="text-[14px] font-semibold text-[#1A1714] mb-1.5">
                          {item.q}
                        </dt>
                        <dd className="text-[13px] text-[#5A5550] leading-relaxed">{item.a}</dd>
                      </div>
                    ))}
                  </dl>
                </Card>
              </section>

              {/* CTA */}
              <section
                id="contact"
                aria-labelledby="contact-heading"
                className="rounded-2xl p-8 sm:p-10 overflow-hidden relative"
                style={{
                  background: "linear-gradient(135deg, #166534 0%, #14532D 100%)",
                  boxShadow: "0 8px 32px rgba(22,101,52,0.3)",
                }}
              >
                {/* Decorative circle */}
                <div
                  className="absolute -top-12 -right-12 w-48 h-48 rounded-full opacity-10"
                  style={{ background: "white" }}
                  aria-hidden
                />
                <div className="relative">
                  <span
                    className="inline-block text-[11px] font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4"
                    style={{ background: "rgba(255,255,255,0.15)", color: "white" }}
                  >
                    Get Started
                  </span>
                  <h3
                    id="contact-heading"
                    className="text-[22px] sm:text-[26px] font-extrabold text-white mb-3 leading-snug"
                  >
                    Ready to Transform Your Workplace Culture?
                  </h3>
                  <p className="text-[15px] text-white/80 mb-7 leading-relaxed max-w-xl">
                    Contact us today to discuss how we can design a customized wellness retreat for
                    your organization. We'll tailor the program to your team's needs, schedule,
                    and objectives.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center gap-2 bg-white text-[#166534] px-7 py-3 rounded-xl text-[14px] font-bold hover:bg-[#F0FDF4] transition-colors"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                      </svg>
                      Contact Us
                    </Link>
                    <a
                      href="tel:+9779818514837"
                      className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white/40 text-white px-7 py-3 rounded-xl text-[14px] font-bold hover:bg-white/10 transition-colors"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.19 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.11 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 9.09a16 16 0 0 0 5.88 5.88l1.46-1.45a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16.92z" />
                      </svg>
                      +977 9818514837
                    </a>
                  </div>
                </div>
              </section>
            </div>

            {/* ── Sidebar ───────────────────────────────────────── */}
            <div className="lg:sticky lg:top-[104px] self-start">
              <SidebarWidget
                contact={{
                  phone: ["+977 9818514837", "+977 9808514837"],
                  email: "jivanparivartan9@gmail.com",
                  address: "Kathmandu, Nepal",
                }}
                showInquiryForm
                variant="forest"
              />
            </div>
          </div>
        </main>
      </div>
    </>
  );
}