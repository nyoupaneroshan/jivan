import React from "react";
import type { Metadata } from "next";
import { Breadcrumb } from "@/components/jivan/Breadcrumb";
import { PageHero } from "@/components/jivan/PageHero";
import { QuickNavigation } from "@/components/jivan/QuickNavigation";
import { IntroSection } from "@/components/jivan/yoga/IntroSection";
import { ModuleCard } from "@/components/jivan/ModuleCard";
import { CTASection } from "@/components/jivan/yoga/CTASection";
import { SidebarWidget } from "@/components/jivan/SidebarWidget";
import { generateUpcomingBatches } from "@/utils/batchGenerator";

// ─── Types ────────────────────────────────────────────────────────────────────

type Level = {
  id: string;
  icon: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  href: string;
  accentFrom: string;
  accentTo: string;
};

// ─── SEO Metadata ─────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Reiki Training in Kathmandu (Level 1, 2 & Master) | Jivan Parivartan",
  description:
    "Learn Reiki with a calm, practical approach in Kathmandu, Nepal. Jivan Parivartan offers Reiki Level 1, Level 2, and Master Level training — small groups, hands-on practice, and real guidance you can use.",
  keywords: [
    "Reiki training Kathmandu",
    "Reiki Level 1 Nepal",
    "Reiki Level 2 Nepal",
    "Reiki Master training Nepal",
    "Reiki healing course Kathmandu",
    "Reiki practitioner training Nepal",
    "Jivan Parivartan Reiki",
    "energy healing training Nepal",
  ],
  alternates: {
    canonical: "https://jivanparivartan.com/training/reiki",
  },
  openGraph: {
    title: "Reiki Training — Level 1, 2 & Master | Jivan Parivartan, Kathmandu",
    description:
      "A steady path from beginner to master. Practical, small-group Reiki training in Kathmandu for self-healing, supporting others, or becoming a certified practitioner.",
    url: "https://jivanparivartan.com/training/reiki",
    siteName: "Jivan Parivartan",
    images: [
      {
        url: "https://images.unsplash.com/photo-1545389336-cf090694435e?w=1200",
        width: 1200,
        height: 630,
        alt: "Reiki Training at Jivan Parivartan, Kathmandu",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Reiki Training (L1 · L2 · Master) | Jivan Parivartan",
    description:
      "Practical Reiki training in Kathmandu. Level 1, 2 & Master. Small groups, hands-on practice, real guidance. Starting from $200.",
    images: ["https://images.unsplash.com/photo-1545389336-cf090694435e?w=1200"],
  },
};

// ─── JSON-LD Structured Data ──────────────────────────────────────────────────

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Jivan Parivartan",
  url: "https://jivanparivartan.com",
  logo: "https://jivanparivartan.com/img/logo.png",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Tarkeshwor-5",
    addressLocality: "Kathmandu",
    addressCountry: "NP",
  },
  telephone: "+977-9818514837",
  email: "info@jivanparivartan.com",
};

const itemListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Reiki Training Levels",
  description: "Reiki training programs offered at Jivan Parivartan, Kathmandu",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "Course",
        name: "Reiki Level 1 — Foundation & Self-Healing",
        description:
          "Build your foundation in Reiki. Learn self-healing routine, hand positions, grounding, and protection for daily practice.",
        provider: { "@type": "Organization", name: "Jivan Parivartan" },
        url: "https://jivanparivartan.com/training/reiki-level-1",
        offers: { "@type": "Offer", price: "200", priceCurrency: "USD" },
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "Course",
        name: "Reiki Level 2 — Deeper Practice & Practitioner Track",
        description:
          "Go deeper and work confidently with others. Structured sessions, energy sensitivity, and a path toward professional practice.",
        provider: { "@type": "Organization", name: "Jivan Parivartan" },
        url: "https://jivanparivartan.com/training/reiki-level-2",
        offers: { "@type": "Offer", price: "200", priceCurrency: "USD" },
      },
    },
    {
      "@type": "ListItem",
      position: 3,
      item: {
        "@type": "Course",
        name: "Reiki Master Level — Mastery, Leadership & Teaching",
        description:
          "For serious students ready to carry the practice with responsibility — deepening presence, clarity, and the ability to guide others.",
        provider: { "@type": "Organization", name: "Jivan Parivartan" },
        url: "https://jivanparivartan.com/training/reiki-master-level",
        offers: { "@type": "Offer", price: "200", priceCurrency: "USD" },
      },
    },
  ],
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://jivanparivartan.com/" },
    { "@type": "ListItem", position: 2, name: "Training", item: "https://jivanparivartan.com/training" },
    { "@type": "ListItem", position: 3, name: "Reiki Training", item: "https://jivanparivartan.com/training/reiki" },
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do I need any experience to start Reiki Level 1?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No experience is needed. Reiki Level 1 is designed for complete beginners and focuses on self-healing, hand positions, and building a consistent daily practice.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between Reiki Level 1, 2, and Master?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Level 1 covers foundations and self-healing. Level 2 goes deeper — structured sessions and working ethically with others. Master Level is for serious practitioners who want to teach, mentor, or deepen leadership and presence.",
      },
    },
    {
      "@type": "Question",
      name: "How long does each Reiki training level take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Each level is a focused program with hands-on practice. Duration varies per level — contact us for current batch schedules and exact timings.",
      },
    },
    {
      "@type": "Question",
      name: "Is Reiki training available for people outside Nepal?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Many international students join our Reiki training in Kathmandu. We provide guidance on accommodation and scheduling to support your visit.",
      },
    },
  ],
};

// ─── Static Data ──────────────────────────────────────────────────────────────

const levels: Level[] = [
  {
    id: "l1",
    icon: "🌱",
    title: "Reiki Level 1",
    subtitle: "Foundation & Self-Healing",
    description:
      "L1 is where you build your base. You learn the fundamentals, how to practice safely, and how to work with yourself first — so your Reiki becomes stable and consistent before extending to others.",
    highlights: [
      "Self-healing routine",
      "Basics of energy work",
      "Hand positions & flow",
      "Grounding & protection",
      "Confidence to practice daily",
    ],
    href: "/training/reiki-level-1",
    accentFrom: "#166534",
    accentTo: "#14532D",
  },
  {
    id: "l2",
    icon: "🔥",
    title: "Reiki Level 2",
    subtitle: "Deeper Practice & Practitioner Track",
    description:
      "L2 is for those who want to go deeper and work more confidently with others. It's practice-focused, with stronger emphasis on session structure, energy sensitivity, and ethical client work.",
    highlights: [
      "Structured sessions",
      "Working with others ethically",
      "Energy sensitivity & awareness",
      "Practice feedback & improvement",
      "Path toward professional work",
    ],
    href: "/training/reiki-level-2",
    accentFrom: "#9A3412",
    accentTo: "#7C2D12",
  },
  {
    id: "l3",
    icon: "👑",
    title: "Reiki Master Level",
    subtitle: "Mastery, Leadership & Teaching",
    description:
      "The Master level is for serious students ready to carry the practice with responsibility — deepening presence, clarity, and the ability to guide and inspire others.",
    highlights: [
      "Master-level depth",
      "Mentorship & leadership",
      "Teaching pathway (if desired)",
      "Advanced practice refinement",
      "Long-term integration",
    ],
    href: "/training/reiki-master-level",
    accentFrom: "#4338CA",
    accentTo: "#3730A3",
  },
];

const levelBadgeLabel: Record<string, string> = {
  l1: "Level 1",
  l2: "Level 2",
  l3: "Master",
};

// ─── Level Card Component ─────────────────────────────────────────────────────

function LevelCard({ lvl }: { lvl: Level }) {
  return (
    <article
      id={lvl.id}
      aria-labelledby={`${lvl.id}-title`}
      className="bg-white rounded-2xl border border-[#E8F0E8] overflow-hidden"
      style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.05), 0 6px 20px rgba(0,0,0,0.05)" }}
    >
      {/* Card header accent strip */}
      <div
        className="h-1 w-full"
        style={{ background: `linear-gradient(90deg, ${lvl.accentFrom}, ${lvl.accentTo})` }}
        aria-hidden
      />

      <div className="p-6 sm:p-7">
        {/* Top row */}
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <div className="flex items-center gap-4">
            {/* Icon badge */}
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
              style={{
                background: `linear-gradient(135deg, ${lvl.accentFrom}, ${lvl.accentTo})`,
                boxShadow: `0 4px 12px ${lvl.accentFrom}30`,
              }}
              aria-hidden
            >
              {lvl.icon}
            </div>

            <div>
              {/* Level pill */}
              <span
                className="inline-block text-[11px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full mb-1"
                style={{
                  background: `${lvl.accentFrom}15`,
                  color: lvl.accentFrom,
                  border: `1px solid ${lvl.accentFrom}25`,
                }}
              >
                {levelBadgeLabel[lvl.id]}
              </span>

              <h3
                id={`${lvl.id}-title`}
                className="text-[18px] font-bold text-[#1A1714] leading-snug"
              >
                {lvl.title}
              </h3>

              <p className="text-[13px] text-[#6B6560] mt-0.5 font-medium">
                {lvl.subtitle}
              </p>
            </div>
          </div>

          {/* CTA link */}
          <a
            href={lvl.href}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-[13px] font-semibold text-white transition-all hover:opacity-90 active:scale-[0.98] flex-shrink-0"
            style={{
              background: `linear-gradient(135deg, ${lvl.accentFrom}, ${lvl.accentTo})`,
              boxShadow: `0 3px 10px ${lvl.accentFrom}35`,
            }}
          >
            View details
            <svg width="12" height="10" viewBox="0 0 12 10" fill="none" aria-hidden>
              <path
                d="M1 5h10M7 1l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>

        {/* Description */}
        <p className="mt-4 text-[14px] text-[#3D3A36] leading-relaxed">
          {lvl.description}
        </p>

        {/* Highlights grid */}
        <ul
          className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5"
          role="list"
          aria-label={`${lvl.title} highlights`}
        >
          {lvl.highlights.map((h) => (
            <li
              key={h}
              className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-[13px] font-medium"
              style={{
                background: `${lvl.accentFrom}08`,
                border: `1px solid ${lvl.accentFrom}18`,
                color: "#2D2A26",
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                style={{ background: lvl.accentFrom }}
                aria-hidden
              />
              {h}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

// ─── Page Component ───────────────────────────────────────────────────────────

export default function ReikiTrainingPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Training", href: "/training" },
    { label: "Reiki Training" },
  ];

  const heroStats = [
    { number: "L1–L3", label: "Levels" },
    { number: "Hands-on", label: "Practice" },
    { number: "Small Group", label: "Support" },
    { number: "All Levels", label: "Welcome" },
  ];

  const heroCTAs = [
    { label: "Explore Levels", href: "#levels", primary: true },
    { label: "Training Inquiry", href: "#inquiry" },
  ];

  const quickNavItems = [
    { id: "overview", icon: "📋", label: "Overview",       href: "#overview" },
    { id: "levels",   icon: "🎓", label: "Levels",         href: "#levels" },
    { id: "who",      icon: "🫶", label: "Who It's For",   href: "#who" },
    { id: "how",      icon: "🧩", label: "How We Teach",   href: "#how" },
    { id: "path",     icon: "🛤️", label: "Choose Level",   href: "#path" },
    { id: "inquiry",  icon: "📩", label: "Inquiry",        href: "#inquiry" },
  ];

  const introParagraphs = [
    "Reiki training is a simple, practical path — learn the method, practice it correctly, and build confidence step by step.",
    "Whether you're learning for self-healing, supporting family, or becoming a practitioner, we keep the training grounded: clear technique, real practice, and guidance you can actually use.",
  ];

  const priceInfo = {
    label: "Starting From",
    amount: "$200",
    duration: "Per Level Program",
    includes: [
      "Hands-on guided practice",
      "Small group support",
      "Ethics & boundaries training",
      "Certificate (where applicable)",
    ],
  };

  const batches = generateUpcomingBatches({
    intervalMonths: 2,
    totalBatches: 3,
    batchDay: 15,
  });

  const contact = {
    phone: ["+977 9818514837", "+977 9863049261"],
    email: "info@jivanparivartan.com",
    address: "Tarkeshwor-5, Kathmandu, Nepal",
  };

  return (
    <>
      {/* ── JSON-LD Structured Data ─────────────────────────────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="min-h-screen bg-[#f4faf5] bg-[url('/img/design/color-page.jpg')] bg-repeat bg-center">
        {/* Accessibility skip link */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-white focus:text-green-800 focus:rounded-lg focus:shadow-lg focus:font-semibold focus:text-sm"
        >
          Skip to main content
        </a>

        <Breadcrumb items={breadcrumbItems} />

        <PageHero
          badge={{ icon: "✨", text: "Reiki Training — Kathmandu" }}
          title="Reiki Training (L1 · L2 · Master)"
          subtitle="A calm, practical path — built for real practice, not just theory."
          stats={heroStats}
          ctas={heroCTAs}
          variant="green"
          backgroundImage="https://images.unsplash.com/photo-1545389336-cf090694435e?w=1920"
        />

        <QuickNavigation items={quickNavItems} variant="red" />

        {/* ── Main Layout ──────────────────────────────────────────── */}
        <main
          id="main-content"
          className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16"
        >
          {/* Mobile sidebar */}
          <div className="block lg:hidden mb-10">
            <SidebarWidget
              price={priceInfo}
              batches={batches}
              contact={contact}
              showInquiryForm
              variant="forest"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] xl:grid-cols-[1fr_380px] gap-10 xl:gap-14">
            {/* ── Main Content ───────────────────────────────────── */}
            <div className="min-w-0">

              {/* Overview */}
              <section id="overview" aria-labelledby="overview-heading">
                <IntroSection
                  title="A steady path from beginner to master"
                  paragraphs={introParagraphs}
                  variant="green"
                />
              </section>

              {/* Levels */}
              <section id="levels" aria-labelledby="levels-heading" className="mt-12">
                <div className="mb-6">
                  <h2
                    id="levels-heading"
                    className="text-[22px] font-bold text-[#1A1714]"
                  >
                    Reiki training levels
                  </h2>
                  <p className="text-[14px] text-[#6B6560] mt-1.5 leading-relaxed">
                    Start where you are. If you're unsure, we'll guide you to the right
                    level after a quick conversation.
                  </p>
                </div>

                <div className="space-y-5">
                  {levels.map((lvl) => (
                    <LevelCard key={lvl.id} lvl={lvl} />
                  ))}
                </div>
              </section>

              {/* Who it's for */}
              <section id="who" aria-labelledby="who-heading" className="mt-10">
                <ModuleCard
                  icon="🫶"
                  title="Who this training is for"
                  description="If you want a practice that feels calm, supportive, and repeatable — Reiki is a great fit. Many people join for self-healing first, and later decide whether they want to practice professionally."
                  badges={[
                    "Complete beginners",
                    "Yoga & wellness practitioners",
                    "Caregivers & nurses",
                    "People under stress",
                    "Spiritual seekers",
                    "Future Reiki practitioners",
                  ]}
                  link={{ href: "#path", label: "Choose your level" }}
                  variant="green"
                  defaultExpanded={true}
                />
              </section>

              {/* How we teach */}
              <section id="how" aria-labelledby="how-heading" className="mt-10">
                <ModuleCard
                  icon="🧩"
                  title="How we teach"
                  description="We keep it practical: simple explanations, lots of guided practice, and feedback. You learn how to do Reiki in a real-world way — so you leave with confidence, not confusion."
                  badges={[
                    "Hands-on practice",
                    "Clear technique",
                    "Small group support",
                    "Ethics & boundaries",
                    "Integration guidance",
                  ]}
                  link={{ href: "#inquiry", label: "Ask about the next batch" }}
                  variant="green"
                />
              </section>

              {/* Choose your level */}
              <section id="path" aria-labelledby="path-heading" className="mt-10">
                <ModuleCard
                  icon="🛤️"
                  title="Choose your level — quick guide"
                  description="New to Reiki? Start with L1. Already completed L1 and want deeper work with others? Go for L2. If Reiki is already part of your life and you feel called to lead or teach, explore the Master level."
                  badges={[
                    "L1 — Start here",
                    "L2 — Go deeper",
                    "L3 — Master level",
                    "Not sure? We'll guide you",
                  ]}
                  link={{ href: "#inquiry", label: "Get a recommendation" }}
                  variant="green"
                />
              </section>

              {/* FAQ */}
              <section id="faq" aria-labelledby="faq-heading" className="mt-12 mb-4">
                <h2
                  id="faq-heading"
                  className="text-[22px] font-bold text-[#1A1714] mb-6"
                >
                  Frequently Asked Questions
                </h2>
                <dl className="space-y-4">
                  {[
                    {
                      q: "Do I need any experience to start Reiki Level 1?",
                      a: "No experience is needed. Reiki Level 1 is designed for complete beginners and focuses on self-healing, hand positions, and building a consistent daily practice.",
                    },
                    {
                      q: "What is the difference between Level 1, 2, and Master?",
                      a: "Level 1 covers foundations and self-healing. Level 2 goes deeper — structured sessions and working ethically with others. Master Level is for serious practitioners who want to teach, mentor, or deepen leadership and presence.",
                    },
                    {
                      q: "How long does each level take?",
                      a: "Each level is a focused program with hands-on practice. Duration varies per level — contact us for current batch schedules and exact timings.",
                    },
                    {
                      q: "Is Reiki training available for international students?",
                      a: "Yes. Many international students join our Reiki training in Kathmandu. We provide guidance on accommodation and scheduling to support your visit.",
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="bg-white rounded-xl px-6 py-5 border border-[#E8F0E8] shadow-sm"
                    >
                      <dt className="text-[15px] font-semibold text-[#1A1714] mb-2">
                        {item.q}
                      </dt>
                      <dd className="text-[14px] text-[#5A5550] leading-relaxed">
                        {item.a}
                      </dd>
                    </div>
                  ))}
                </dl>
              </section>

              {/* CTA */}
              <section id="inquiry" aria-labelledby="inquiry-heading" className="mt-10">
                <CTASection
                  title="Ready to Begin Your Reiki Journey?"
                  description="Tell us your current level and goal. We'll recommend the right training and share the next available batch."
                  buttons={[
                    { icon: "📩", label: "Contact for Training", href: "/contact" },
                    { icon: "✨", label: "Explore Reiki Healing", href: "/reiki" },
                  ]}
                  variant="green"
                  backgroundEmoji="🌿"
                />
              </section>
            </div>

            {/* ── Desktop Sidebar ────────────────────────────────── */}
            <div className="hidden lg:block">
              <SidebarWidget
                price={priceInfo}
                batches={batches}
                contact={contact}
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