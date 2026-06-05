import React from "react";
import type { Metadata } from "next";
import { Breadcrumb } from "@/components/jivan/Breadcrumb";
import { PageHero } from "@/components/jivan/PageHero";
import { QuickNavigation } from "@/components/jivan/QuickNavigation";
import { IntroSection } from "@/components/jivan/yoga/IntroSection";
import { CTASection } from "@/components/jivan/yoga/CTASection";
import { SidebarWidget } from "@/components/jivan/SidebarWidget";
import { generateUpcomingBatches } from "@/utils/batchGenerator";
import { TrainingLinkItem } from "@/components/jivan/TrainingLinkItem";

// ─── Types ────────────────────────────────────────────────────────────────────

type TrainingLink = {
  id: string;
  label: string;
  href: string;
  note?: string;
  badge?: string;
};

type TrainingCategory = {
  id: string;
  icon: string;
  title: string;
  subtitle: string;
  accentFrom: string;
  accentTo: string;
  accentText: string;
  links: TrainingLink[];
};

// ─── SEO Metadata ─────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Reiki & Singing Bowl Training in Kathmandu | Jivan Parivartan",
  description:
    "Practical Reiki and Singing Bowl training in Kathmandu, Nepal. Level 1 to Master Reiki, 3-Day Basic and 7-Day Advanced Singing Bowl courses. Small groups, hands-on practice, professional certification.",
  keywords: [
    "Reiki training Kathmandu",
    "singing bowl training Nepal",
    "energy healing courses Nepal",
    "Reiki certification Kathmandu",
    "sound healing training Nepal",
    "Jivan Parivartan training",
    "wellness training programs Nepal",
    "healing arts training Kathmandu",
  ],
  alternates: {
    canonical: "https://jivanparivartan.com/training",
  },
  openGraph: {
    title: "Reiki & Singing Bowl Training | Jivan Parivartan, Kathmandu",
    description:
      "Learn Reiki (Level 1–3) and Singing Bowl therapy with a calm, practical approach in Kathmandu, Nepal. Small groups, hands-on practice, professional certification.",
    url: "https://jivanparivartan.com/training",
    siteName: "Jivan Parivartan",
    images: [
      {
        url: "https://images.unsplash.com/photo-1529693662653-9d480530a697?w=1200",
        width: 1200,
        height: 630,
        alt: "Healing Arts Training at Jivan Parivartan, Kathmandu",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Reiki & Singing Bowl Training | Jivan Parivartan",
    description:
      "Practical Reiki (L1–L3) and Singing Bowl training in Kathmandu. Hands-on, small groups. Starting from $200.",
    images: ["https://images.unsplash.com/photo-1529693662653-9d480530a697?w=1200"],
  },
};

// ─── JSON-LD Structured Data ──────────────────────────────────────────────────

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "Jivan Parivartan",
  url: "https://jivanparivartan.com",
  logo: "https://jivanparivartan.com/img/logo.png",
  description:
    "Jivan Parivartan offers practical Reiki and Singing Bowl training in Kathmandu, Nepal — small groups, hands-on practice, and professional certification.",
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
  name: "Training Programs at Jivan Parivartan",
  description: "Reiki and Singing Bowl training programs in Kathmandu, Nepal",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "Course",
        name: "Reiki Level 1 (L1) — Foundation & Self-Healing",
        url: "https://jivanparivartan.com/training/reiki-level-1",
        provider: { "@type": "Organization", name: "Jivan Parivartan" },
        offers: { "@type": "Offer", price: "300", priceCurrency: "USD" },
        coursePrerequisites: "No experience required.",
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "Course",
        name: "Reiki Level 2 (L2) — Deeper Practice & Practitioner Track",
        url: "https://jivanparivartan.com/training/reiki-level-2",
        provider: { "@type": "Organization", name: "Jivan Parivartan" },
        offers: { "@type": "Offer", price: "300", priceCurrency: "USD" },
        coursePrerequisites: "Reiki Level 1 recommended.",
      },
    },
    {
      "@type": "ListItem",
      position: 3,
      item: {
        "@type": "Course",
        name: "Reiki Master Level (L3) — Mastery, Leadership & Teaching",
        url: "https://jivanparivartan.com/training/reiki-master-level",
        provider: { "@type": "Organization", name: "Jivan Parivartan" },
        offers: { "@type": "Offer", price: "350", priceCurrency: "USD" },
        coursePrerequisites: "Reiki Level 1 and Level 2 required.",
      },
    },
    {
      "@type": "ListItem",
      position: 4,
      item: {
        "@type": "Course",
        name: "3-Day Singing Bowl Basic Course",
        url: "https://jivanparivartan.com/training/singing-bowl-basic",
        provider: { "@type": "Organization", name: "Jivan Parivartan" },
        timeRequired: "P3D",
        offers: { "@type": "Offer", price: "450", priceCurrency: "USD" },
        coursePrerequisites: "No experience required.",
      },
    },
    {
      "@type": "ListItem",
      position: 5,
      item: {
        "@type": "Course",
        name: "7-Day Singing Bowl Advanced Course",
        url: "https://jivanparivartan.com/training/singing-bowl/advanced-7-days",
        provider: { "@type": "Organization", name: "Jivan Parivartan" },
        timeRequired: "P7D",
        offers: { "@type": "Offer", price: "800", priceCurrency: "USD" },
        coursePrerequisites: "Basic singing bowl knowledge recommended.",
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
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What training programs does Jivan Parivartan offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Jivan Parivartan offers Reiki training (Level 1, Level 2, and Master Level) and Singing Bowl training (3-Day Basic Course and 7-Day Advanced Course). All programs are hands-on, small-group, and based in Kathmandu, Nepal.",
      },
    },
    {
      "@type": "Question",
      name: "Which training should I start with — Reiki or Singing Bowl?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It depends on your goal. Choose Reiki if you want a structured energy healing practice — starting with Level 1 for self-healing and progressing toward professional practice. Choose Singing Bowl if you're drawn to vibration and sound therapy, or want to learn sound bath facilitation.",
      },
    },
    {
      "@type": "Question",
      name: "Are the training programs suitable for complete beginners?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Reiki Level 1 and the 3-Day Singing Bowl Basic Course are both designed for complete beginners with no prior experience. Advanced levels have prerequisites but we guide you through the right progression.",
      },
    },
    {
      "@type": "Question",
      name: "Can I do both Reiki and Singing Bowl training?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Many students combine both paths — Reiki for energy healing and Singing Bowl for sound therapy. We can help you plan a sequence that makes sense for your schedule and goals.",
      },
    },
  ],
};

// ─── Static Data ──────────────────────────────────────────────────────────────

const trainingCategories: TrainingCategory[] = [
  {
    id: "reiki",
    icon: "✨",
    title: "Reiki Training",
    subtitle: "A structured path from foundation to mastery",
    accentFrom: "#166534",
    accentTo: "#14532D",
    accentText: "#166534",
    links: [
      {
        id: "reiki-l1",
        label: "Reiki Level 1 (L1)",
        href: "/training/reiki-level-1",
        note: "Foundation, self-healing & daily practice.",
        badge: "Beginner",
      },
      {
        id: "reiki-l2",
        label: "Reiki Level 2 (L2)",
        href: "/training/reiki-level-2",
        note: "Deeper practice & practitioner track.",
        badge: "Intermediate",
      },
      {
        id: "reiki-l3",
        label: "Reiki Master Level (L3)",
        href: "/training/reiki-master-level",
        note: "Mastery, leadership & optional teaching path.",
        badge: "Advanced",
      },
    ],
  },
  {
    id: "singing-bowl",
    icon: "🎵",
    title: "Singing Bowl Training",
    subtitle: "Therapeutic sound — technique, session flow & professional practice",
    accentFrom: "#B45309",
    accentTo: "#92400E",
    accentText: "#B45309",
    links: [
      {
        id: "sb-basic",
        label: "3-Day Basic Course",
        href: "/training/singing-bowl-basic",
        note: "Correct technique, clean sound & safe session structure.",
        badge: "3 Days",
      },
      {
        id: "sb-advanced",
        label: "7-Day Advanced Course",
        href: "/training/singing-bowl/advanced-7-days",
        note: "Chakra work, group sound baths & professional setup.",
        badge: "7 Days",
      },
    ],
  },
];



// ─── Training Category Card ───────────────────────────────────────────────────

function TrainingCategoryCard({ category }: { category: TrainingCategory }) {
  return (
    <div
      id={category.id}
      className="bg-white rounded-2xl overflow-hidden border border-[#E8EDE8]"
      style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.05), 0 6px 20px rgba(0,0,0,0.05)" }}
    >
      {/* Accent strip */}
      <div
        className="h-1 w-full"
        style={{ background: `linear-gradient(90deg, ${category.accentFrom}, ${category.accentTo})` }}
        aria-hidden
      />

      <div className="p-6 sm:p-7">
        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center text-lg flex-shrink-0"
            style={{
              background: `linear-gradient(135deg, ${category.accentFrom}, ${category.accentTo})`,
              boxShadow: `0 3px 10px ${category.accentFrom}30`,
            }}
            aria-hidden
          >
            {category.icon}
          </div>
          <div>
            <h3
              className="text-[17px] font-bold text-[#1A1714] leading-snug"
              id={`${category.id}-heading`}
            >
              {category.title}
            </h3>
            <p className="text-[12px] text-[#8A8580] mt-0.5">{category.subtitle}</p>
          </div>
        </div>

        {/* Links */}
        <nav aria-labelledby={`${category.id}-heading`}>
          <ul className="space-y-2.5" role="list">
            {category.links.map((link) => (
              <li key={link.id}>
                <TrainingLinkItem
                  link={link}
                  accentFrom={category.accentFrom}
                  accentText={category.accentText}
                />
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}

// ─── Path Chooser ─────────────────────────────────────────────────────────────

function PathChooser() {
  return (
    <div
      className="mt-8 rounded-2xl border overflow-hidden"
      style={{ borderColor: "#E8EDE8", boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}
    >
      <div
        className="px-6 py-4 border-b"
        style={{ background: "#F4FAF5", borderColor: "#E8EDE8" }}
      >
        <p className="text-[13px] font-semibold text-[#1A1714]">
          🧭 Not sure which path to choose?
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-[#F0F0EE] bg-white">
        <div className="px-6 py-5">
          <p className="text-[13px] font-semibold text-[#166534] mb-1">Choose Reiki if…</p>
          <ul className="space-y-1.5">
            {[
              "You want a structured energy healing practice",
              "You're focused on self-healing first",
              "You want to work with others professionally",
              "You're drawn to hands-on energy work",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-[12px] text-[#5A5550]">
                <span className="text-[#166534] mt-0.5 flex-shrink-0">✓</span>
                {item}
              </li>
            ))}
          </ul>
          <a
            href="/training/reiki"
            className="inline-flex items-center gap-1.5 mt-4 text-[12px] font-semibold text-[#166534] hover:opacity-75 transition-opacity"
          >
            Explore Reiki Training
            <svg width="12" height="10" viewBox="0 0 12 10" fill="none" aria-hidden>
              <path d="M1 5h10M7 1l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
        <div className="px-6 py-5">
          <p className="text-[13px] font-semibold text-[#B45309] mb-1">Choose Singing Bowl if…</p>
          <ul className="space-y-1.5">
            {[
              "You're drawn to vibration and sound",
              "You want to facilitate group sound baths",
              "You prefer an instrument-based practice",
              "You want therapy-level session skills",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-[12px] text-[#5A5550]">
                <span className="text-[#B45309] mt-0.5 flex-shrink-0">✓</span>
                {item}
              </li>
            ))}
          </ul>
          <a
            href="/training/singing-bowl"
            className="inline-flex items-center gap-1.5 mt-4 text-[12px] font-semibold text-[#B45309] hover:opacity-75 transition-opacity"
          >
            Explore Singing Bowl Training
            <svg width="12" height="10" viewBox="0 0 12 10" fill="none" aria-hidden>
              <path d="M1 5h10M7 1l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

// ─── Page Component ───────────────────────────────────────────────────────────

export default function TrainingPage() {
  const breadcrumbItems = [
    { label: "Home",     href: "/" },
    { label: "Training" },
  ];

  const heroStats = [
    { number: "Reiki",        label: "L1 to Master" },
    { number: "Singing Bowl", label: "Basic & Advanced" },
    { number: "Small Groups", label: "Better learning" },
    { number: "Hands-on",     label: "Practice-first" },
  ];

  const heroCTAs = [
    { label: "Explore Trainings",  href: "#trainings", primary: true },
    { label: "Upcoming Batches",   href: "#sidebar",   primary: false },
  ];

  const quickNavItems = [
    { id: "overview",     icon: "📋", label: "Overview",             href: "#overview" },
    { id: "trainings",    icon: "🎓", label: "All Trainings",        href: "#trainings" },
    { id: "reiki",        icon: "✨", label: "Reiki Training",       href: "#reiki" },
    { id: "singing-bowl", icon: "🎵", label: "Singing Bowl Training",href: "#singing-bowl" },
    { id: "enroll",       icon: "📩", label: "Inquiry",              href: "#enroll" },
  ];

  const introParagraphs = [
    "Training is where your practice becomes steady. We keep it practical, supportive, and easy to apply — whether you're learning for personal growth or to work professionally.",
    "Choose Reiki (Level 1–3) if you want a structured energy healing path, or Singing Bowl Training if you're drawn to vibration, sound, and therapeutic session work.",
  ];

  const priceInfo = {
    label: "Starting From",
    amount: "$200",
    duration: "Per Program",
    includes: [
      "Hands-on practice",
      "Guided small-group learning",
      "Session structure guidance",
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
          badge={{ icon: "🎓", text: "Training Programs — Kathmandu" }}
          title="Training Programs"
          subtitle="Learn Reiki and Singing Bowl therapy with a calm, practical approach — built for real practice, not just theory."
          stats={heroStats}
          ctas={heroCTAs}
          variant="green"
          backgroundImage="https://images.unsplash.com/photo-1529693662653-9d480530a697?w=1920"
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
                  title="Choose the path that fits you"
                  paragraphs={introParagraphs}
                  variant="green"
                />
              </section>

              {/* Trainings */}
              <section id="trainings" aria-labelledby="trainings-heading" className="mt-10">
                <div className="mb-6">
                  <h2
                    id="trainings-heading"
                    className="text-[22px] font-bold text-[#1A1714]"
                  >
                    Training options
                  </h2>
                  <p className="text-[14px] text-[#6B6560] mt-1.5 leading-relaxed">
                    Not sure where to begin? Message us — tell us your goal and we'll recommend
                    the right starting point.
                  </p>
                </div>

                {/* Category cards — stacked on mobile, 2-col on md+ */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {trainingCategories.map((cat) => (
                    <TrainingCategoryCard key={cat.id} category={cat} />
                  ))}
                </div>

                {/* Path chooser */}
                <PathChooser />
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
                      q: "What training programs does Jivan Parivartan offer?",
                      a: "Jivan Parivartan offers Reiki training (Level 1, Level 2, and Master Level) and Singing Bowl training (3-Day Basic Course and 7-Day Advanced Course). All programs are hands-on, small-group, and based in Kathmandu, Nepal.",
                    },
                    {
                      q: "Which training should I start with — Reiki or Singing Bowl?",
                      a: "It depends on your goal. Choose Reiki if you want a structured energy healing practice starting with self-healing. Choose Singing Bowl if you're drawn to vibration and sound therapy, or want to learn sound bath facilitation.",
                    },
                    {
                      q: "Are the training programs suitable for complete beginners?",
                      a: "Yes. Reiki Level 1 and the 3-Day Singing Bowl Basic Course are designed for complete beginners with no prior experience. Advanced levels have prerequisites, but we guide you through the right progression.",
                    },
                    {
                      q: "Can I do both Reiki and Singing Bowl training?",
                      a: "Yes. Many students combine both paths. We can help you plan a sequence that makes sense for your schedule and goals.",
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="bg-white rounded-xl px-6 py-5 border border-[#E8EDE8] shadow-sm"
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
              <section id="enroll" aria-labelledby="enroll-heading" className="mt-10">
                <CTASection
                  title="Want Help Choosing the Right Training?"
                  description="Tell us your background (beginner or practitioner) and your goal (self-healing or professional practice). We'll guide you to the best starting level."
                  buttons={[
                    { icon: "📩", label: "Training Inquiry",   href: "/contact" },
                    { icon: "📅", label: "Upcoming Batches",   href: "#sidebar" },
                  ]}
                  variant="green"
                  backgroundEmoji="🎓"
                />
              </section>
            </div>

            {/* ── Desktop Sidebar ────────────────────────────────── */}
            <div id="sidebar" className="hidden lg:block">
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