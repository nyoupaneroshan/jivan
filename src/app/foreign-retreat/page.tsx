import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { Breadcrumb } from "@/components/jivan/Breadcrumb";
import { PageHero } from "@/components/jivan/PageHero";

// ─── SEO Metadata ─────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "International Luxury Yoga Retreat Nepal — 7 Days at Thasang | Jivan Parivartan",
  description:
    "A 7-day premium yoga and meditation retreat at Lodge Thasang Village, Nepal. Private hosting, daily practices, sound healing, and a personalized take-home plan. From $10,000.",
  keywords: [
    "international luxury yoga retreat Nepal",
    "luxury retreat Thasang Village Nepal",
    "premium meditation retreat Nepal",
    "yoga retreat Nepal 7 days",
    "luxury wellness retreat Kathmandu",
    "private yoga retreat Nepal",
    "Jivan Parivartan international retreat",
    "sound healing retreat Nepal",
  ],
  alternates: {
    canonical: "https://jivanparivartan.com/retreats/international-luxury-retreat",
  },
  openGraph: {
    title: "International Luxury Retreat — 7 Days at Thasang Village | Jivan Parivartan",
    description:
      "Premium 7-day yoga, meditation & healing retreat at Lodge Thasang Village, Nepal. Private hosting, daily practice, and a personalized take-home plan. From $10,000.",
    url: "https://jivanparivartan.com/retreats/international-luxury-retreat",
    siteName: "Jivan Parivartan",
    images: [
      {
        url: "https://images.unsplash.com/photo-1526779259212-756e04f08db3?w=1200",
        width: 1200,
        height: 630,
        alt: "International Luxury Retreat at Lodge Thasang Village, Nepal",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "International Luxury Yoga Retreat Nepal | Jivan Parivartan",
    description:
      "7 days of premium yoga, meditation & healing at Thasang Village. Private hosting. From $10,000.",
    images: ["https://images.unsplash.com/photo-1526779259212-756e04f08db3?w=1200"],
  },
};

// ─── JSON-LD ──────────────────────────────────────────────────────────────────

const eventJsonLd = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: "International Luxury Yoga & Meditation Retreat",
  description:
    "A 7-day premium yoga, meditation, and healing retreat at Lodge Thasang Village, Nepal. Private hosting, daily practices, sound healing, and a personalized take-home plan.",
  url: "https://jivanparivartan.com/retreats/international-luxury-retreat",
  image: "https://images.unsplash.com/photo-1526779259212-756e04f08db3?w=1200",
  location: {
    "@type": "Place",
    name: "Lodge Thasang Village",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Thasang",
      addressCountry: "NP",
    },
  },
  organizer: {
    "@type": "Organization",
    name: "Jivan Parivartan",
    url: "https://jivanparivartan.com",
  },
  offers: {
    "@type": "Offer",
    price: "10000",
    priceCurrency: "USD",
    description: "Starting price for 7-day international luxury retreat. Final price depends on room type, season, and group size.",
    availability: "https://schema.org/InStock",
    url: "https://jivanparivartan.com/retreats/international-luxury-retreat#inquiry",
  },
  duration: "P7D",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  eventStatus: "https://schema.org/EventScheduled",
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://jivanparivartan.com/" },
    { "@type": "ListItem", position: 2, name: "International Luxury Retreat", item: "https://jivanparivartan.com/retreats/international-luxury-retreat" },
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the price of the International Luxury Retreat at Jivan Parivartan?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The International Luxury Retreat starts from $10,000 for 7 days. Final pricing depends on season, room type at Lodge Thasang Village, group size, and optional upgrades.",
      },
    },
    {
      "@type": "Question",
      name: "What accommodation is included in the retreat?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The retreat includes 3-star accommodation at Lodge Thasang Village in Thasang, Nepal. Room upgrades may be available depending on season and availability.",
      },
    },
    {
      "@type": "Question",
      name: "Is the luxury retreat suitable for beginners?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The program is tailored to your experience level. The focus is safe progress, calm, and clarity — no prior yoga or meditation experience is required.",
      },
    },
    {
      "@type": "Question",
      name: "What is not included in the retreat price?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "International flights, visa, travel insurance, and personal expenses are generally not included unless agreed in writing. All inclusions are listed on the retreat page.",
      },
    },
  ],
};

// ─── Static Data ──────────────────────────────────────────────────────────────

const highlights = [
  {
    icon: "🌏",
    title: "Designed for international guests",
    body: "Clear coordination, calm hosting, and support from arrival to departure.",
  },
  {
    icon: "🛁",
    title: "Luxury, not rush",
    body: "A premium pace with privacy, comfort, and daily practices designed for deep restoration.",
  },
  {
    icon: "📋",
    title: "A take-home practice plan",
    body: "You leave with a personal routine that is realistic and sustainable after you return home.",
  },
];

const included = [
  {
    icon: "🧘",
    title: "Daily yoga and meditation",
    desc: "A refined rhythm of movement, breathwork, and stillness tailored to your level and goals.",
  },
  {
    icon: "✨",
    title: "Luxury wellness and healing sessions",
    desc: "Mantra practices, mindfulness, and optional private healing sessions based on your preferences.",
  },
  {
    icon: "🛬",
    title: "International guest support",
    desc: "Assistance with arrival coordination, local guidance, and a smooth experience for international travelers.",
  },
  {
    icon: "🏡",
    title: "Private hosting and flexible pacing",
    desc: "High-touch privacy and comfort, with a schedule that adapts to your energy each day.",
  },
  {
    icon: "🍽️",
    title: "Accommodation and meals",
    desc: "3-star lodge accommodation at Lodge Thasang Village with nourishing vegetarian meals aligned with the retreat rhythm.",
  },
  {
    icon: "🚐",
    title: "Local transport (in-retreat)",
    desc: "Ground transfers during programmed retreat days and curated local experiences per itinerary.",
  },
];

const samplePlan = [
  {
    day: "Day 1",
    title: "Arrival at Thasang and grounding",
    points: [
      "Arrival support and lodge check-in at Lodge Thasang Village",
      "Gentle welcome session — stretching and breathwork",
      "Evening meditation and intention setting",
    ],
  },
  {
    day: "Day 2",
    title: "Reset the body, calm the mind",
    points: [
      "Morning pranayama and gentle Hatha flow",
      "Guided mindfulness with quiet time",
      "Optional private healing session (by request)",
    ],
  },
  {
    day: "Day 3",
    title: "Deepen practice and stability",
    points: [
      "Meditation training — technique and personal practice plan",
      "Journaling and integration time",
      "Evening mantra practice and seated meditation",
    ],
  },
  {
    day: "Day 4",
    title: "Nature immersion and mindful walking",
    points: [
      "Guided mindful walk and local nature exploration near Thasang",
      "Breath-led relaxation and grounding practice",
      "Evening restorative session — gentle movement and meditation",
    ],
  },
  {
    day: "Day 5",
    title: "Healing and inner work",
    points: [
      "Yoga for nervous system balance",
      "Private coaching session — goals, habits, and continuity plan",
      "Evening deep meditation and reflection",
    ],
  },
  {
    day: "Day 6",
    title: "Retreat peak day",
    points: [
      "Longer morning practice — flow, breath, stillness",
      "Quiet afternoon (rest, reading, reflection)",
      "Closing circle and gratitude practice",
    ],
  },
  {
    day: "Day 7",
    title: "Departure and take-home plan",
    points: [
      "Light morning session",
      "Personalized continuation plan handover",
      "Departure coordination and onward travel support",
    ],
  },
];

const upgradeOptions = [
  "Private driver support",
  "Premium room preference",
  "Extra healing sessions",
  "Extended program",
  "Photography support",
  "Concierge coordination",
];

const faqs = [
  {
    q: "What is the price?",
    a: "International Luxury Retreat starts from $10,000 for 7 days. Final pricing depends on season, room type at Lodge Thasang Village, group size, and optional upgrades.",
  },
  {
    q: "What kind of accommodation is included?",
    a: "The retreat includes 3-star accommodation at Lodge Thasang Village (Thasang). Upgrades may be possible depending on availability and season.",
  },
  {
    q: "Is this suitable for beginners?",
    a: "Yes. The program is tailored to your experience level. The focus is safe progress, calm, and clarity.",
  },
  {
    q: "What's included vs not included?",
    a: "Included items are listed on this page. International flights, visa, travel insurance, and personal expenses are usually not included unless agreed in writing.",
  },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

/** Frosted glass card — the site's visual signature on this page */
function GlassCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-2xl bg-white/80 backdrop-blur-sm border border-[#C8E6CA] ${className}`}
      style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.04), 0 6px 20px rgba(0,0,0,0.05)" }}
    >
      {children}
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[10px] font-bold uppercase tracking-widest text-[#166534] mb-2">
      {children}
    </p>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-[22px] sm:text-[26px] font-extrabold text-[#1A1714] leading-snug">
      {children}
    </h2>
  );
}

function HighlightCard({
  icon,
  title,
  body,
}: {
  icon: string;
  title: string;
  body: string;
}) {
  return (
    <GlassCard className="p-6">
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center text-xl mb-4"
        style={{ background: "#F0F7F1", border: "1px solid #C8E6CA" }}
        aria-hidden
      >
        {icon}
      </div>
      <h3 className="text-[15px] font-bold text-[#1A1714] mb-1.5 leading-snug">{title}</h3>
      <p className="text-[13px] text-[#5A5550] leading-relaxed">{body}</p>
    </GlassCard>
  );
}

function IncludedCard({
  icon,
  title,
  desc,
}: {
  icon: string;
  title: string;
  desc: string;
}) {
  return (
    <GlassCard className="p-6 flex gap-4 items-start">
      <div
        className="w-9 h-9 rounded-lg flex items-center justify-center text-lg flex-shrink-0 mt-0.5"
        style={{ background: "#F0F7F1", border: "1px solid #C8E6CA" }}
        aria-hidden
      >
        {icon}
      </div>
      <div>
        <h3 className="text-[14px] font-bold text-[#1A1714] mb-1 leading-snug">{title}</h3>
        <p className="text-[13px] text-[#5A5550] leading-relaxed">{desc}</p>
      </div>
    </GlassCard>
  );
}

function DayCard({
  day,
  title,
  points,
  index,
}: {
  day: string;
  title: string;
  points: string[];
  index: number;
}) {
  // Last card spans full width if odd count
  const isLast = index === samplePlan.length - 1;
  return (
    <GlassCard className={`p-6 ${isLast ? "sm:col-span-2 lg:col-span-1" : ""}`}>
      <div className="flex items-center gap-2 mb-3">
        <span
          className="text-[11px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full"
          style={{ background: "#F0F7F1", color: "#166534", border: "1px solid #C8E6CA" }}
        >
          {day}
        </span>
      </div>
      <h3 className="text-[15px] font-bold text-[#1A1714] mb-3 leading-snug">{title}</h3>
      <ul className="space-y-2" role="list">
        {points.map((p) => (
          <li key={p} className="flex items-start gap-2.5 text-[13px] text-[#3D3A35] leading-[1.7]">
            <span
              className="mt-[6px] w-1.5 h-1.5 rounded-full flex-shrink-0"
              style={{ background: "#166534" }}
              aria-hidden
            />
            {p}
          </li>
        ))}
      </ul>
    </GlassCard>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  return (
    <div className="border-b border-[#E8EDE8] pb-4 last:border-0 last:pb-0">
      <p className="text-[14px] font-semibold text-[#1A1714] mb-1">{q}</p>
      <p className="text-[13px] text-[#5A5550] leading-relaxed">{a}</p>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function InternationalLuxuryRetreatPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "International Luxury Retreat" },
  ];

  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="min-h-screen bg-[#EAF4EC] bg-[url('/img/design/color-page.jpg')] bg-repeat bg-center">

        {/* Skip link */}
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-white focus:text-green-800 focus:rounded-lg focus:shadow-lg focus:font-semibold focus:text-sm"
        >
          Skip to main content
        </a>

        <Breadcrumb items={breadcrumbItems} />

        <PageHero
          badge={{ icon: "🌿", text: "International Luxury Retreat" }}
          title="International Luxury Retreat"
          subtitle="A 7-day premium retreat at Lodge Thasang Village — curated for deep rest, clarity, and guided practice in one of Nepal's most serene settings."
          stats={[
            { number: "7 Days",      label: "Program length" },
            { number: "From $10k",   label: "Starting price" },
            { number: "Thasang",     label: "3-star lodge" },
            { number: "Private",     label: "Hosting" },
          ]}
          ctas={[
            { label: "Request itinerary", href: "#inquiry", primary: true },
            { label: "See program",       href: "#program" },
          ]}
          variant="green"
          backgroundImage="https://images.unsplash.com/photo-1526779259212-756e04f08db3?w=1920"
        />

        <main id="main" className="max-w-[1200px] mx-auto px-4 sm:px-5 pb-20 space-y-14 pt-12">

          {/* ── Why this retreat ──────────────────────────────── */}
          <section aria-label="Why this retreat">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {highlights.map((h) => (
                <HighlightCard key={h.title} icon={h.icon} title={h.title} body={h.body} />
              ))}
            </div>
          </section>

          {/* ── What's included ───────────────────────────────── */}
          <section id="included" aria-labelledby="included-heading">
            <div className="flex items-end justify-between gap-4 flex-wrap mb-7">
              <div>
                <SectionLabel>Retreat Package</SectionLabel>
                <SectionHeading>What's included</SectionHeading>
                <p className="mt-2 text-[14px] text-[#5A5550] max-w-xl leading-relaxed">
                  A premium 7-day structure with daily practice, integration time, and optional
                  healing support, hosted at Lodge Thasang Village.
                </p>
              </div>
              <span
                className="inline-block rounded-full px-5 py-2 text-[13px] font-bold"
                style={{
                  background: "white",
                  border: "1px solid #C8E6CA",
                  color: "#166534",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
                }}
              >
                Starting from $10,000
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {included.map((x) => (
                <IncludedCard key={x.title} icon={x.icon} title={x.title} desc={x.desc} />
              ))}
            </div>
          </section>

          {/* ── 7-day program ─────────────────────────────────── */}
          <section id="program" aria-labelledby="program-heading">
            <SectionLabel>Sample Itinerary</SectionLabel>
            <SectionHeading>7-day flow</SectionHeading>
            <p className="mt-2 mb-7 text-[14px] text-[#5A5550] max-w-2xl leading-relaxed">
              This is a sample outline. Your final itinerary is tailored to your pace, goals, and
              comfort level while staying based at Lodge Thasang Village.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
              {samplePlan.map((d, i) => (
                <DayCard key={d.day} day={d.day} title={d.title} points={d.points} index={i} />
              ))}
            </div>
          </section>

          {/* ── VIP upgrades ──────────────────────────────────── */}
          <section id="vip" aria-labelledby="vip-heading">
            <div
              className="rounded-2xl p-8 sm:p-10 border overflow-hidden relative"
              style={{
                background: "linear-gradient(135deg, #166534, #14532D)",
                borderColor: "#0F3F22",
                boxShadow: "0 8px 32px rgba(22,101,52,0.25)",
              }}
            >
              {/* Decorative circle */}
              <div
                className="absolute -top-16 -right-16 w-56 h-56 rounded-full"
                style={{ background: "rgba(255,255,255,0.06)" }}
                aria-hidden
              />
              <div className="relative">
                <span
                  className="inline-block text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4"
                  style={{ background: "rgba(255,255,255,0.15)", color: "white" }}
                >
                  Optional Add-ons
                </span>
                <h2
                  id="vip-heading"
                  className="text-[20px] sm:text-[24px] font-extrabold text-white mb-2 leading-snug"
                >
                  Luxury upgrades
                </h2>
                <p className="text-[14px] text-white/80 max-w-2xl mb-7 leading-relaxed">
                  Add comfort and exclusivity — premium room choices, private driver support,
                  photography, extended nights, and specialized healing sessions aligned with your goals.
                </p>
                <div className="flex flex-wrap gap-2.5">
                  {upgradeOptions.map((t) => (
                    <span
                      key={t}
                      className="px-4 py-1.5 rounded-full text-[13px] font-semibold"
                      style={{
                        background: "rgba(255,255,255,0.12)",
                        border: "1px solid rgba(255,255,255,0.2)",
                        color: "white",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* ── Inquiry + Sidebar ─────────────────────────────── */}
          <section id="inquiry" aria-labelledby="inquiry-heading">
            <div className="grid grid-cols-1 lg:grid-cols-[1.25fr_0.75fr] gap-8 items-start">

              {/* Inquiry form */}
              <GlassCard className="p-7 sm:p-9">
                <SectionLabel>Custom Itinerary</SectionLabel>
                <h2
                  id="inquiry-heading"
                  className="text-[22px] sm:text-[26px] font-extrabold text-[#1A1714] mb-2 leading-snug"
                >
                  Request your itinerary
                </h2>
                <p className="text-[14px] text-[#5A5550] mb-7 leading-relaxed">
                  Tell us your dates, interests (meditation, yoga, healing, nature), and comfort
                  level. We'll send a customized 7-day plan based at Lodge Thasang Village with
                  clear inclusions and pricing.
                </p>

                <form
                  className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                  action="/api/retreat-inquiry"
                  method="POST"
                >
                  <label className="block">
                    <span className="text-[12px] font-semibold text-[#3D3A35] block mb-1.5">
                      Full name <span className="text-red-500" aria-hidden>*</span>
                    </span>
                    <input
                      name="name"
                      required
                      placeholder="Your name"
                      className="w-full rounded-xl border border-[#D4EDD6] bg-white px-4 py-2.5 text-[13px] placeholder:text-[#B0ACA8] outline-none focus:ring-2 focus:ring-emerald-600/30 focus:border-emerald-600 transition"
                    />
                  </label>

                  <label className="block">
                    <span className="text-[12px] font-semibold text-[#3D3A35] block mb-1.5">
                      Email <span className="text-red-500" aria-hidden>*</span>
                    </span>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="you@example.com"
                      className="w-full rounded-xl border border-[#D4EDD6] bg-white px-4 py-2.5 text-[13px] placeholder:text-[#B0ACA8] outline-none focus:ring-2 focus:ring-emerald-600/30 focus:border-emerald-600 transition"
                    />
                  </label>

                  <label className="block">
                    <span className="text-[12px] font-semibold text-[#3D3A35] block mb-1.5">
                      WhatsApp / Phone
                    </span>
                    <input
                      name="phone"
                      placeholder="+1 ..."
                      className="w-full rounded-xl border border-[#D4EDD6] bg-white px-4 py-2.5 text-[13px] placeholder:text-[#B0ACA8] outline-none focus:ring-2 focus:ring-emerald-600/30 focus:border-emerald-600 transition"
                    />
                  </label>

                  <label className="block">
                    <span className="text-[12px] font-semibold text-[#3D3A35] block mb-1.5">
                      Preferred dates
                    </span>
                    <input
                      name="dates"
                      placeholder="e.g., March 10–17, 2026"
                      className="w-full rounded-xl border border-[#D4EDD6] bg-white px-4 py-2.5 text-[13px] placeholder:text-[#B0ACA8] outline-none focus:ring-2 focus:ring-emerald-600/30 focus:border-emerald-600 transition"
                    />
                  </label>

                  <label className="block sm:col-span-2">
                    <span className="text-[12px] font-semibold text-[#3D3A35] block mb-1.5">
                      What do you want from this retreat?
                    </span>
                    <textarea
                      name="goals"
                      placeholder="Goals, preferences, health notes, comfort level..."
                      className="w-full rounded-xl border border-[#D4EDD6] bg-white px-4 py-2.5 text-[13px] placeholder:text-[#B0ACA8] outline-none focus:ring-2 focus:ring-emerald-600/30 focus:border-emerald-600 transition min-h-[110px] resize-y"
                    />
                  </label>

                  <button
                    type="submit"
                    className="sm:col-span-2 rounded-xl text-white font-bold py-3 text-[14px] transition-opacity hover:opacity-90"
                    style={{
                      background: "linear-gradient(135deg, #166534, #14532D)",
                      boxShadow: "0 4px 14px rgba(22,101,52,0.3)",
                    }}
                  >
                    Send inquiry
                  </button>

                  <p className="sm:col-span-2 text-[11px] text-[#8A8580] leading-relaxed">
                    By sending this form, you agree we may contact you about your retreat plan.
                    We typically respond within 24 hours.
                  </p>
                </form>
              </GlassCard>

              {/* Right sidebar */}
              <div className="lg:sticky lg:top-[104px] space-y-5">

                {/* Quick actions */}
                <GlassCard className="p-6">
                  <h3 className="text-[15px] font-bold text-[#1A1714] mb-1.5">Quick actions</h3>
                  <p className="text-[13px] text-[#5A5550] mb-5 leading-relaxed">
                    Prefer fast coordination? Message us for a tailored itinerary based at Lodge
                    Thasang Village.
                  </p>
                  <div className="space-y-2.5">
                    <Link
                      href="#inquiry"
                      className="flex items-center justify-center w-full rounded-xl text-white font-bold py-2.5 text-[13px] transition-opacity hover:opacity-90"
                      style={{ background: "linear-gradient(135deg, #166534, #14532D)" }}
                    >
                      Request itinerary
                    </Link>
                    <Link
                      href="/contact"
                      className="flex items-center justify-center w-full rounded-xl border border-[#D4EDD6] bg-white text-[#166534] font-bold py-2.5 text-[13px] hover:bg-[#F0F7F1] transition-colors"
                    >
                      Contact page
                    </Link>
                  </div>

                  {/* Price anchor */}
                  <div
                    className="mt-5 rounded-xl p-4 border"
                    style={{ background: "#F0F7F1", borderColor: "#C8E6CA" }}
                  >
                    <p className="text-[11px] font-bold uppercase tracking-widest text-[#166534] mb-1">
                      Price anchor
                    </p>
                    <p className="text-[24px] font-extrabold text-[#1A1714]">$10,000+</p>
                    <p className="text-[11px] text-[#5A5550] mt-0.5 leading-relaxed">
                      Final quote based on room type, season, group size, and customizations.
                    </p>
                  </div>
                </GlassCard>

                {/* What's not included notice */}
                <GlassCard className="p-5">
                  <p className="text-[11px] font-bold uppercase tracking-widest text-[#8A8580] mb-3">
                    Not included
                  </p>
                  <ul className="space-y-1.5" role="list">
                    {[
                      "International flights",
                      "Nepal visa",
                      "Travel insurance",
                      "Personal expenses",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-2 text-[13px] text-[#5A5550]">
                        <span
                          className="w-1 h-1 rounded-full flex-shrink-0"
                          style={{ background: "#8A8580" }}
                          aria-hidden
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </GlassCard>

                {/* FAQs */}
                <GlassCard className="p-6">
                  <h3 className="text-[15px] font-bold text-[#1A1714] mb-4">
                    Frequently asked questions
                  </h3>
                  <div className="space-y-4">
                    {faqs.map((f) => (
                      <FaqItem key={f.q} q={f.q} a={f.a} />
                    ))}
                  </div>
                </GlassCard>
              </div>
            </div>
          </section>

          {/* ── Final CTA banner ──────────────────────────────── */}
          <section aria-label="Final call to action">
            <GlassCard className="p-8 sm:p-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div className="max-w-xl">
                <SectionLabel>Ready to Begin?</SectionLabel>
                <h2 className="text-[20px] sm:text-[24px] font-extrabold text-[#1A1714] leading-snug">
                  Plan your International Luxury Retreat
                </h2>
                <p className="mt-2 text-[14px] text-[#5A5550] leading-relaxed">
                  We'll send a customized 7-day itinerary based at Lodge Thasang Village with
                  clear inclusions and pricing.
                </p>
              </div>
              <Link
                href="#inquiry"
                className="flex-shrink-0 inline-flex items-center gap-2 rounded-xl text-white font-bold px-7 py-3.5 text-[14px] transition-opacity hover:opacity-90"
                style={{
                  background: "linear-gradient(135deg, #166534, #14532D)",
                  boxShadow: "0 4px 14px rgba(22,101,52,0.25)",
                }}
              >
                Request itinerary
                <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden>
                  <path d="M1 5h12M9 1l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </GlassCard>
          </section>
        </main>
      </div>
    </>
  );
}