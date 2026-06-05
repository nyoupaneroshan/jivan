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

type Course = {
  id: string;
  icon: string;
  title: string;
  subtitle: string;
  duration: string;
  level: string;
  description: string;
  highlights: string[];
  href: string;
  accentFrom: string;
  accentTo: string;
  levelColor: string;
};

// ─── SEO Metadata ─────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Singing Bowl Training in Kathmandu (3-Day & 7-Day) | Jivan Parivartan",
  description:
    "Learn singing bowl technique and sound healing in Kathmandu, Nepal. Jivan Parivartan offers a 3-Day Basic Course and 7-Day Advanced Course — hands-on practice, chakra balancing, and professional certification.",
  keywords: [
    "singing bowl training Kathmandu",
    "singing bowl course Nepal",
    "sound healing training Nepal",
    "singing bowl therapy course Kathmandu",
    "chakra balancing training Nepal",
    "Jivan Parivartan singing bowl",
    "sound bath training Nepal",
    "singing bowl certification Nepal",
  ],
  alternates: {
    canonical: "https://jivanparivartan.com/training/singing-bowl",
  },
  openGraph: {
    title: "Singing Bowl Training (3-Day & 7-Day) | Jivan Parivartan, Kathmandu",
    description:
      "Learn correct technique, safe practice, and real session flow — from beginner to professional. Singing bowl training in Kathmandu for self-practice and therapy application.",
    url: "https://jivanparivartan.com/training/singing-bowl",
    siteName: "Jivan Parivartan",
    images: [
      {
        url: "https://images.unsplash.com/photo-1545389336-cf090694435e?w=1200",
        width: 1200,
        height: 630,
        alt: "Singing Bowl Training at Jivan Parivartan, Kathmandu",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Singing Bowl Training | Jivan Parivartan, Kathmandu",
    description:
      "3-Day Basic & 7-Day Advanced singing bowl courses in Kathmandu. Hands-on technique, sound therapy, chakra balancing, certification. Starting from $200.",
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
  name: "Singing Bowl Training Courses",
  description: "Singing bowl training programs offered at Jivan Parivartan, Kathmandu",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "Course",
        name: "3-Day Singing Bowl Basic Course",
        description:
          "Foundation singing bowl training covering correct technique, holding, striking, rimming, basic session structure, and self-practice routine. Suitable for all levels.",
        provider: { "@type": "Organization", name: "Jivan Parivartan" },
        url: "https://jivanparivartan.com/training/singing-bowl-basic",
        timeRequired: "P3D",
        offers: { "@type": "Offer", price: "200", priceCurrency: "USD" },
        coursePrerequisites: "No prior experience required.",
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "Course",
        name: "7-Day Singing Bowl Advanced Course",
        description:
          "Advanced singing bowl training covering therapy application, chakra-based session flow, group sound bath guidance, client ethics, professional setup, and advanced certification.",
        provider: { "@type": "Organization", name: "Jivan Parivartan" },
        url: "https://jivanparivartan.com/training/singing-bowl-advanced",
        timeRequired: "P7D",
        offers: { "@type": "Offer", price: "200", priceCurrency: "USD" },
        coursePrerequisites: "Basic singing bowl knowledge or 3-Day Basic Course recommended.",
      },
    },
  ],
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home",     item: "https://jivanparivartan.com/" },
    { "@type": "ListItem", position: 2, name: "Training", item: "https://jivanparivartan.com/training" },
    { "@type": "ListItem", position: 3, name: "Singing Bowl Training", item: "https://jivanparivartan.com/training/singing-bowl" },
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do I need experience to join the 3-Day Basic singing bowl course?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No experience is needed. The 3-Day Basic Course is designed for complete beginners and covers correct technique, holding, striking, and a basic self-practice session.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between the 3-Day Basic and 7-Day Advanced course?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The 3-Day Basic Course focuses on foundations: correct technique, basic session flow, and self-practice. The 7-Day Advanced Course adds therapy-level application: chakra-based flow, group sound baths, client ethics, professional setup, and an advanced certification path.",
      },
    },
    {
      "@type": "Question",
      name: "Can I become a professional sound healer after the 7-Day Advanced course?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The 7-Day Advanced Course covers professional session structure, client handling, ethics, and certification — giving you the foundation to work with clients professionally in sound healing and therapy.",
      },
    },
    {
      "@type": "Question",
      name: "Is singing bowl training available for international students in Kathmandu?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Kathmandu is a well-known destination for sound healing training, and many international students join our programs. We can assist with scheduling and guidance on your visit.",
      },
    },
  ],
};

// ─── Static Data ──────────────────────────────────────────────────────────────

const courses: Course[] = [
  {
    id: "basic",
    icon: "🌱",
    title: "3-Day Basic Course",
    subtitle: "Strong foundation & correct technique",
    duration: "3 Days",
    level: "Beginner",
    description:
      "Learn the essentials properly — how to choose bowls, play them with clean sound, and create a calm, safe session for yourself and others. You'll leave with a repeatable self-practice you can trust.",
    highlights: [
      "Introduction to singing bowls",
      "Correct holding & striking",
      "Rimming technique (clean tone)",
      "Basic session structure",
      "Safety & comfort-first practice",
      "Self-practice routine",
    ],
    href: "/training/singing-bowl-basic",
    accentFrom: "#166534",
    accentTo: "#14532D",
    levelColor: "#166534",
  },
  {
    id: "advanced",
    icon: "🔥",
    title: "7-Day Advanced Course",
    subtitle: "Therapy application & deeper healing work",
    duration: "7 Days",
    level: "Advanced",
    description:
      "For those who want deeper skill — stronger session flow, working with intention, and applying bowls in a more therapeutic way. Especially suited for chakra balancing, stress relief, and emotional reset work with clients.",
    highlights: [
      "Advanced playing techniques",
      "Chakra-based session flow",
      "Group sound bath guidance",
      "Client handling & ethics",
      "Professional setup & practice",
      "Advanced certification path",
    ],
    href: "/training/singing-bowl-advanced",
    accentFrom: "#B45309",
    accentTo: "#92400E",
    levelColor: "#B45309",
  },
];

// ─── Course Card ──────────────────────────────────────────────────────────────

function CourseCard({ course }: { course: Course }) {
  return (
    <article
      id={course.id}
      aria-labelledby={`${course.id}-title`}
      className="bg-white rounded-2xl border border-[#E8F0E8] overflow-hidden"
      style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.05), 0 6px 20px rgba(0,0,0,0.05)" }}
    >
      {/* Accent strip */}
      <div
        className="h-1 w-full"
        style={{ background: `linear-gradient(90deg, ${course.accentFrom}, ${course.accentTo})` }}
        aria-hidden
      />

      <div className="p-6 sm:p-7">
        {/* Top row */}
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <div className="flex items-center gap-4">
            {/* Icon */}
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
              style={{
                background: `linear-gradient(135deg, ${course.accentFrom}, ${course.accentTo})`,
                boxShadow: `0 4px 12px ${course.accentFrom}30`,
              }}
              aria-hidden
            >
              {course.icon}
            </div>

            <div>
              {/* Dual badges: duration + level */}
              <div className="flex items-center gap-2 mb-1 flex-wrap">
                <span
                  className="inline-block text-[11px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full"
                  style={{
                    background: `${course.accentFrom}15`,
                    color: course.accentFrom,
                    border: `1px solid ${course.accentFrom}25`,
                  }}
                >
                  {course.duration}
                </span>
                <span
                  className="inline-block text-[11px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-[#F3F4F6] text-[#6B7280] border border-[#E5E7EB]"
                >
                  {course.level}
                </span>
              </div>

              <h3
                id={`${course.id}-title`}
                className="text-[18px] font-bold text-[#1A1714] leading-snug"
              >
                {course.title}
              </h3>
              <p className="text-[13px] text-[#6B6560] mt-0.5 font-medium">
                {course.subtitle}
              </p>
            </div>
          </div>

          {/* CTA */}
          <a
            href={course.href}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-[13px] font-semibold text-white transition-all hover:opacity-90 active:scale-[0.98] flex-shrink-0"
            style={{
              background: `linear-gradient(135deg, ${course.accentFrom}, ${course.accentTo})`,
              boxShadow: `0 3px 10px ${course.accentFrom}35`,
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
          {course.description}
        </p>

        {/* Highlights */}
        <ul
          className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5"
          role="list"
          aria-label={`${course.title} highlights`}
        >
          {course.highlights.map((h) => (
            <li
              key={h}
              className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-[13px] font-medium"
              style={{
                background: `${course.accentFrom}08`,
                border: `1px solid ${course.accentFrom}18`,
                color: "#2D2A26",
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                style={{ background: course.accentFrom }}
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

// ─── Course Comparison Table ──────────────────────────────────────────────────

function CourseComparisonTable() {
  const rows = [
    { label: "Duration",       basic: "3 Days",              advanced: "7 Days" },
    { label: "Level",          basic: "Beginner",            advanced: "Intermediate–Advanced" },
    { label: "Technique",      basic: "Holding, striking, rimming", advanced: "Advanced playing" },
    { label: "Session work",   basic: "Basic session flow",  advanced: "Chakra-based session flow" },
    { label: "Group work",     basic: "Self-practice",       advanced: "Sound bath facilitation" },
    { label: "Client work",    basic: "—",                   advanced: "Client handling & ethics" },
    { label: "Certification",  basic: "Basic certificate",   advanced: "Advanced certification" },
    { label: "Best for",       basic: "Personal practice, beginners", advanced: "Practitioners, therapists" },
  ];

  return (
    <div
      className="mt-8 rounded-2xl overflow-hidden border border-[#E8F0E8]"
      style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}
    >
      <div className="grid grid-cols-3 bg-[#F4FAF5] border-b border-[#E8F0E8] px-4 py-3">
        <span className="text-[12px] font-semibold text-[#6B6560] uppercase tracking-widest">Feature</span>
        <span className="text-[12px] font-semibold uppercase tracking-widest text-center" style={{ color: "#166534" }}>
          3-Day Basic
        </span>
        <span className="text-[12px] font-semibold uppercase tracking-widest text-center" style={{ color: "#B45309" }}>
          7-Day Advanced
        </span>
      </div>
      {rows.map((row, i) => (
        <div
          key={row.label}
          className={`grid grid-cols-3 px-4 py-3 border-b border-[#F0F0EE] ${
            i % 2 === 0 ? "bg-white" : "bg-[#FAFAF9]"
          }`}
        >
          <span className="text-[13px] font-medium text-[#5A5550]">{row.label}</span>
          <span className="text-[13px] text-[#2D2A26] text-center">{row.basic}</span>
          <span className="text-[13px] text-[#2D2A26] text-center">{row.advanced}</span>
        </div>
      ))}
    </div>
  );
}

// ─── Page Component ───────────────────────────────────────────────────────────

export default function SingingBowlTrainingPage() {
  const breadcrumbItems = [
    { label: "Home",     href: "/" },
    { label: "Training", href: "/training" },
    { label: "Singing Bowl Training" },
  ];

  const heroStats = [
    { number: "3 Days",    label: "Basic course" },
    { number: "7 Days",    label: "Advanced course" },
    { number: "Hands-on",  label: "Practice" },
    { number: "All Levels",label: "Welcome" },
  ];

  const heroCTAs = [
    { label: "Explore Courses",   href: "#courses",  primary: true },
    { label: "Training Inquiry",  href: "#inquiry" },
  ];

  const quickNavItems = [
    { id: "overview",  icon: "📋", label: "Overview",        href: "#overview" },
    { id: "courses",   icon: "🎓", label: "Courses",          href: "#courses" },
    { id: "basic",     icon: "🌱", label: "3-Day Basic",      href: "#basic" },
    { id: "advanced",  icon: "🔥", label: "7-Day Advanced",   href: "#advanced" },
    { id: "who",       icon: "🫶", label: "Who It's For",     href: "#who" },
    { id: "how",       icon: "🧩", label: "How We Teach",     href: "#how" },
    { id: "inquiry",   icon: "📩", label: "Inquiry",          href: "#inquiry" },
  ];

  const introParagraphs = [
    "Singing bowl training is both an art and a healing skill. We teach it in a grounded way — clear technique, safe use, and real session flow you can repeat confidently.",
    "If you're learning for personal practice, the 3-Day Basic Course is a beautiful start. If you want to work professionally or go deeper into chakra work and therapy application, the 7-Day Advanced Course is the right track.",
  ];

  const priceInfo = {
    label: "Starting From",
    amount: "$200",
    duration: "Per Course",
    includes: [
      "Hands-on guided practice",
      "Technique & session flow",
      "Small group support",
      "Q&A and feedback",
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
          badge={{ icon: "🎵", text: "Singing Bowl Training — Kathmandu" }}
          title="Singing Bowl Training"
          subtitle="Learn correct technique, safe practice, and real session flow — from beginner to professional."
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
                  title="Learn it properly — so your sound feels clean and healing"
                  paragraphs={introParagraphs}
                  variant="green"
                />
              </section>

              {/* Courses */}
              <section id="courses" aria-labelledby="courses-heading" className="mt-10">
                <div className="mb-6">
                  <h2
                    id="courses-heading"
                    className="text-[22px] font-bold text-[#1A1714]"
                  >
                    Choose your course
                  </h2>
                  <p className="text-[14px] text-[#6B6560] mt-1.5 leading-relaxed">
                    Start with Basic if you're new. Choose Advanced if you already practice and want
                    therapy-level depth and professional application.
                  </p>
                </div>

                <div className="space-y-5">
                  {courses.map((c) => (
                    <CourseCard key={c.id} course={c} />
                  ))}
                </div>

                {/* Comparison table */}
                <div className="mt-10">
                  <h3 className="text-[16px] font-semibold text-[#1A1714] mb-1">
                    Not sure which to choose?
                  </h3>
                  <p className="text-[13px] text-[#6B6560]">
                    Here's a quick side-by-side comparison.
                  </p>
                  <CourseComparisonTable />
                </div>
              </section>

              {/* Who it's for */}
              <section id="who" aria-labelledby="who-heading" className="mt-10">
                <ModuleCard
                  icon="🫶"
                  title="Who this training is for"
                  description="This training is for beginners and practitioners who want clean technique and a calm, professional approach — without rushing or performing."
                  badges={[
                    "Complete beginners",
                    "Yoga & meditation teachers",
                    "Wellness practitioners",
                    "Therapists & healers",
                    "Spiritual seekers",
                    "Anyone drawn to sound healing",
                  ]}
                  link={{ href: "#inquiry", label: "Ask about the next batch" }}
                  defaultExpanded={true}
                  variant="green"
                />
              </section>

              {/* How we teach */}
              <section id="how" aria-labelledby="how-heading" className="mt-10">
                <ModuleCard
                  icon="🧩"
                  title="How we teach"
                  description="We teach by doing. You'll practice technique, learn session flow, and get guidance so your sound feels stable, clean, and genuinely calming — not harsh or random."
                  badges={[
                    "Hands-on technique",
                    "Safe use & guidance",
                    "Session structure",
                    "Q&A support",
                    "Practice feedback",
                  ]}
                  link={{ href: "#inquiry", label: "Training inquiry" }}
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
                      q: "Do I need experience to join the 3-Day Basic course?",
                      a: "No experience is needed. The 3-Day Basic Course is designed for complete beginners and covers correct technique, holding, striking, and a basic self-practice session.",
                    },
                    {
                      q: "What is the difference between the 3-Day Basic and 7-Day Advanced course?",
                      a: "The Basic Course focuses on foundations: correct technique and basic session flow. The Advanced Course adds therapy-level application: chakra-based flow, group sound baths, client ethics, and an advanced certification path.",
                    },
                    {
                      q: "Can I become a professional sound healer after the 7-Day Advanced course?",
                      a: "Yes. The 7-Day Advanced Course covers professional session structure, client handling, ethics, and certification — giving you the foundation to work with clients professionally.",
                    },
                    {
                      q: "Is singing bowl training available for international students?",
                      a: "Yes. Kathmandu is a well-known destination for sound healing training and many international students join our programs. We can assist with scheduling and visit guidance.",
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
                  title="Ready to Learn Singing Bowl?"
                  description="Tell us whether you want Basic (3 days) or Advanced (7 days), your preferred dates, and your goal — self-practice or professional work. We'll share the next batch details."
                  buttons={[
                    { icon: "📩", label: "Contact for Training",         href: "/contact" },
                    { icon: "🎵", label: "Explore Singing Bowl Healing", href: "/healing/singing-bowl" },
                  ]}
                  variant="green"
                  backgroundEmoji="🎵"
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