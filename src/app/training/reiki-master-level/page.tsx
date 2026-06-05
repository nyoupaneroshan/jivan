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

// ─── SEO Metadata ─────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Reiki Master Level Training in Kathmandu (L3) | Jivan Parivartan",
  description:
    "Reiki Master Level (L3) training in Kathmandu, Nepal. Deep practice refinement, mentorship, advanced energy balancing, and an optional teaching pathway. For serious students who have completed L1 & L2.",
  keywords: [
    "Reiki Master Level training Kathmandu",
    "Reiki L3 Nepal",
    "Reiki Master training Nepal",
    "Reiki teacher training Nepal",
    "advanced Reiki Kathmandu",
    "Jivan Parivartan Reiki Master",
    "Reiki mastery Nepal",
    "Reiki Master attunement Nepal",
  ],
  alternates: {
    canonical: "https://jivanparivartan.com/training/reiki-master-level",
  },
  openGraph: {
    title: "Reiki Master Level (L3) Training | Jivan Parivartan, Kathmandu",
    description:
      "A deep training for mastery, mentorship, and the responsibility of holding space for others. Advanced Reiki practice refinement and optional teaching pathway in Kathmandu, Nepal.",
    url: "https://jivanparivartan.com/training/reiki-master-level",
    siteName: "Jivan Parivartan",
    images: [
      {
        url: "https://images.unsplash.com/photo-1545389336-cf090694435e?w=1200",
        width: 1200,
        height: 630,
        alt: "Reiki Master Level Training at Jivan Parivartan, Kathmandu",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Reiki Master Level (L3) | Jivan Parivartan",
    description:
      "Advanced Reiki Master training in Kathmandu. Mastery, mentorship, deep practice refinement & teaching pathway. Starting from $350.",
    images: ["https://images.unsplash.com/photo-1545389336-cf090694435e?w=1200"],
  },
};

// ─── JSON-LD Structured Data ──────────────────────────────────────────────────

const courseJsonLd = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "Reiki Master Level (L3) — Mastery, Leadership & Teaching",
  description:
    "Advanced Reiki Master training covering practice refinement, deep chakra and energy balancing, advanced grounding, mentorship, holding space with maturity, and an optional Reiki teaching pathway. For practitioners who have completed Reiki L1 and L2.",
  provider: {
    "@type": "Organization",
    name: "Jivan Parivartan",
    sameAs: "https://jivanparivartan.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Tarkeshwor-5",
      addressLocality: "Kathmandu",
      addressCountry: "NP",
    },
    telephone: "+977-9818514837",
    email: "info@jivanparivartan.com",
  },
  url: "https://jivanparivartan.com/training/reiki-master-level",
  image: "https://images.unsplash.com/photo-1545389336-cf090694435e?w=1200",
  offers: {
    "@type": "Offer",
    price: "350",
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
    validFrom: new Date().toISOString().split("T")[0],
  },
  hasCourseInstance: {
    "@type": "CourseInstance",
    courseMode: "onsite",
    location: {
      "@type": "Place",
      name: "Jivan Parivartan",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Tarkeshwor-5",
        addressLocality: "Kathmandu",
        addressCountry: "NP",
      },
    },
  },
  coursePrerequisites: "Reiki Level 1 and Reiki Level 2 completion required. Regular ongoing practice recommended.",
  educationalCredentialAwarded: "Reiki Master Level Certificate",
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home",           item: "https://jivanparivartan.com/" },
    { "@type": "ListItem", position: 2, name: "Training",       item: "https://jivanparivartan.com/training" },
    { "@type": "ListItem", position: 3, name: "Reiki Training", item: "https://jivanparivartan.com/training/reiki" },
    { "@type": "ListItem", position: 4, name: "Reiki Master Level", item: "https://jivanparivartan.com/training/reiki-master-level" },
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What are the requirements for Reiki Master Level (L3)?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You need to have completed Reiki Level 1 and Reiki Level 2, have a regular ongoing practice, and a genuine willingness to go deeper. Emotional stability and readiness to take on responsibility are also important. If unsure, contact us and we'll guide you honestly.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need to want to teach to join Reiki Master Level?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Teaching is completely optional. Many students take L3 purely for personal mastery — to deepen their practice, presence, and inner steadiness. The teaching pathway is available if you want it, not required.",
      },
    },
    {
      "@type": "Question",
      name: "How is Reiki Master Level different from Level 2?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "L3 moves from building skills to refining mastery. It's less about learning new techniques and more about deepening steadiness, clearing energetic boundaries, holding space with maturity, and integrating Reiki as a long-term way of being.",
      },
    },
    {
      "@type": "Question",
      name: "What does the teaching pathway in Reiki Master training cover?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The optional teaching pathway covers how to hold training space, support students, explain Reiki clearly, and guide practice without ego. It's focused on responsible, grounded teaching rather than a rigid curriculum.",
      },
    },
  ],
};

// ─── Static Data ──────────────────────────────────────────────────────────────

const curriculumCards = [
  {
    title: "Presence over performance",
    body: "The deeper the work, the simpler it becomes. We focus on grounded presence, clear intention, and steady practice — so your sessions feel safe and genuinely effective.",
  },
  {
    title: "Mentorship-style guidance",
    body: "This level is often smaller and more guided. We give real feedback, answer honest questions, and help you integrate the practice into your life — not just your notes.",
  },
];

const masteryCards = [
  {
    title: "For active practitioners",
    body: "If you're already working with clients, we help you refine your flow, communication, consent, and personal energetic hygiene — so your work stays sustainable long-term.",
  },
];

const requirementsCards = [
  {
    title: "If you're not ready yet",
    body: "That's not a failure — it's timing. We can recommend a practice plan or suggest deepening your L1/L2 work until your foundation feels truly stable.",
  },
];

// ─── Reusable Info Card ───────────────────────────────────────────────────────

function InfoCard({ title, body }: { title: string; body: string }) {
  return (
    <div
      className="bg-white rounded-xl px-6 py-5 border border-[#EDE9F4]"
      style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.04), 0 4px 12px rgba(0,0,0,0.04)" }}
    >
      <h4 className="text-[15px] font-semibold text-[#4338CA] mb-2 leading-snug">
        {title}
      </h4>
      <p className="text-[13px] text-[#5A5550] leading-relaxed">{body}</p>
    </div>
  );
}

// ─── Prerequisite Step ───────────────────────────────────────────────────────

function PrerequisiteStep({
  step,
  label,
  href,
  done,
}: {
  step: string;
  label: string;
  href: string;
  done?: boolean;
}) {
  return (
    <a
      href={href}
      className="flex items-center gap-3 px-4 py-3 rounded-xl border transition-all hover:opacity-80 active:scale-[0.99]"
      style={{
        background: done ? "#F0FDF4" : "#FAFAF9",
        borderColor: done ? "#BBF7D0" : "#E5E3DF",
      }}
    >
      <span
        className="w-7 h-7 rounded-full flex items-center justify-center text-[12px] font-bold flex-shrink-0"
        style={{
          background: done ? "#16A34A" : "#6B6560",
          color: "#fff",
        }}
      >
        {step}
      </span>
      <span className="text-[13px] font-medium text-[#2D2A26] leading-snug">
        {label}
      </span>
      <svg
        className="ml-auto flex-shrink-0"
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        aria-hidden
      >
        <path
          d="M3 7h8M8 4l3 3-3 3"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ color: done ? "#16A34A" : "#9A9690" }}
        />
      </svg>
    </a>
  );
}

// ─── Page Component ───────────────────────────────────────────────────────────

export default function ReikiMasterLevelTrainingPage() {
  const breadcrumbItems = [
    { label: "Home",           href: "/" },
    { label: "Training",       href: "/training" },
    { label: "Reiki Training", href: "/training/reiki" },
    { label: "Reiki Master Level (L3)" },
  ];

  const heroStats = [
    { number: "L3",          label: "Master Level" },
    { number: "Deep",        label: "Practice & presence" },
    { number: "Mentorship",  label: "Support" },
    { number: "Leadership",  label: "Optional teaching" },
  ];

  const heroCTAs = [
    { label: "Master Inquiry",    href: "#inquiry",   primary: true },
    { label: "What You'll Learn", href: "#curriculum" },
  ];

  const quickNavItems = [
    { id: "overview",      icon: "📋", label: "Overview",        href: "#overview" },
    { id: "curriculum",    icon: "🧩", label: "What You'll Learn",href: "#curriculum" },
    { id: "mastery",       icon: "🧘", label: "Mastery Focus",    href: "#mastery" },
    { id: "teaching",      icon: "🎓", label: "Teaching Path",    href: "#teaching" },
    { id: "requirements",  icon: "✅", label: "Requirements",     href: "#requirements" },
    { id: "inquiry",       icon: "📩", label: "Inquiry",          href: "#inquiry" },
  ];

  const introParagraphs = [
    "Reiki Master Level (L3) is for serious students who want to carry the practice with maturity — deepening presence, clarity, and responsibility.",
    "Some come to L3 to teach. Others come because Reiki has become part of their life and they want the next layer of depth. Either path is held with care, not ego.",
  ];

  const priceInfo = {
    label: "Starting From",
    amount: "$350",
    duration: "Per Level Program",
    includes: [
      "Master-level guided practice",
      "Practice refinement & feedback",
      "Mentorship support",
      "Advanced attunement",
      "Optional teaching pathway",
      "Certificate (where applicable)",
    ],
  };

  const batches = generateUpcomingBatches({
    intervalMonths: 1,
    totalBatches: 3,
    batchDay: 10,
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="min-h-screen bg-[#F5F3FB] bg-[url('/img/design/color-page.jpg')] bg-repeat bg-center">
        {/* Accessibility skip link */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-white focus:text-indigo-800 focus:rounded-lg focus:shadow-lg focus:font-semibold focus:text-sm"
        >
          Skip to main content
        </a>

        <Breadcrumb items={breadcrumbItems} />

        <PageHero
          badge={{ icon: "👑", text: "Reiki Training · Master Level" }}
          title="Reiki Master Level (L3)"
          subtitle="A deep training for mastery, mentorship, and the responsibility of holding space for others."
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
              variant="indigo"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] xl:grid-cols-[1fr_380px] gap-10 xl:gap-14">
            {/* ── Main Content ───────────────────────────────────── */}
            <div className="min-w-0">

              {/* Overview */}
              <section id="overview" aria-labelledby="overview-heading">
                <IntroSection
                  title="Mastery is a way of being"
                  paragraphs={introParagraphs}
                  variant="green"
                />

                {/* Prerequisite journey — visual path */}
                <div
                  className="mt-6 rounded-xl border px-5 py-5"
                  style={{ background: "#F8F7FD", borderColor: "#DDD8F0" }}
                >
                  <p className="text-[13px] font-semibold text-[#4338CA] uppercase tracking-widest mb-3">
                    Your Reiki journey so far
                  </p>
                  <div className="space-y-2.5">
                    <PrerequisiteStep
                      step="L1"
                      label="Reiki Level 1 — Foundation & Self-Healing"
                      href="/training/reiki-level-1"
                      done
                    />
                    <PrerequisiteStep
                      step="L2"
                      label="Reiki Level 2 — Deeper Practice & Practitioner Track"
                      href="/training/reiki-level-2"
                      done
                    />
                    <div
                      className="flex items-center gap-3 px-4 py-3 rounded-xl border"
                      style={{ background: "#EDE9F4", borderColor: "#C4B5FD" }}
                    >
                      <span
                        className="w-7 h-7 rounded-full flex items-center justify-center text-[12px] font-bold flex-shrink-0"
                        style={{ background: "#4338CA", color: "#fff" }}
                      >
                        L3
                      </span>
                      <span className="text-[13px] font-semibold text-[#4338CA]">
                        Reiki Master Level — You are here
                      </span>
                      <span className="ml-auto text-[11px] font-bold uppercase tracking-widest text-[#4338CA] bg-white px-2.5 py-1 rounded-full border border-[#C4B5FD]">
                        Current
                      </span>
                    </div>
                  </div>
                </div>
              </section>

              {/* Curriculum */}
              <section id="curriculum" aria-labelledby="curriculum-heading" className="mt-10">
                <ModuleCard
                  icon="🧩"
                  title="What you'll learn in Master Level (L3)"
                  description="Master level is not about collecting techniques — it's about refinement. How you practice, how you hold space, and how you guide others with clarity and humility."
                  badges={[
                    "Master-level session refinement",
                    "Deeper chakra & energy balancing",
                    "Advanced grounding & protection",
                    "Holding space with maturity",
                    "Ethics & responsibility",
                    "Long-term integration",
                  ]}
                  link={{ href: "#mastery", label: "Mastery focus" }}
                  defaultExpanded={true}
                  variant="green"
                >
                  <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {curriculumCards.map((c) => (
                      <InfoCard key={c.title} title={c.title} body={c.body} />
                    ))}
                  </div>
                </ModuleCard>
              </section>

              {/* Mastery Focus */}
              <section id="mastery" aria-labelledby="mastery-heading" className="mt-10">
                <ModuleCard
                  icon="🧘"
                  title="Mastery focus — what changes in L3"
                  description="At this level, the training is less about learning new things and more about becoming steady: consistent practice, clean energetic boundaries, and the ability to support others without absorbing their heaviness."
                  badges={[
                    "Stronger boundaries",
                    "Clear session structure",
                    "Deeper inner steadiness",
                    "More intuitive clarity",
                    "Ethical, sustainable practice",
                  ]}
                  link={{ href: "#requirements", label: "See requirements" }}
                  variant="green"
                >
                  <div className="mt-5">
                    {masteryCards.map((c) => (
                      <InfoCard key={c.title} title={c.title} body={c.body} />
                    ))}
                  </div>
                </ModuleCard>
              </section>

              {/* Teaching Path */}
              <section id="teaching" aria-labelledby="teaching-heading" className="mt-10">
                <ModuleCard
                  icon="🎓"
                  title="Teaching path — optional"
                  description="If you feel called to teach, we guide you on sharing Reiki responsibly — how to hold training space, support students, and teach without ego. This is not required; it's for those who genuinely feel the call."
                  badges={[
                    "Teaching mindset",
                    "Student support",
                    "Clear explanations",
                    "Practice-based learning",
                    "Responsible guidance",
                  ]}
                  link={{ href: "#inquiry", label: "Ask about the teaching path" }}
                  variant="green"
                >
                  {/* Teaching-optional callout */}
                  <div
                    className="mt-5 flex items-start gap-3 px-5 py-4 rounded-xl border"
                    style={{ background: "#F0FDF4", borderColor: "#BBF7D0" }}
                  >
                    <span className="text-xl flex-shrink-0" aria-hidden>🌿</span>
                    <p className="text-[13px] text-[#14532D] leading-relaxed">
                      <strong className="font-semibold">Teaching is optional, not expected.</strong>{" "}
                      Many Master-level students never teach — they simply hold the practice more deeply for themselves and those around them.
                    </p>
                  </div>
                </ModuleCard>
              </section>

              {/* Requirements */}
              <section id="requirements" aria-labelledby="requirements-heading" className="mt-10">
                <ModuleCard
                  icon="✅"
                  title="Requirements — so L3 stays strong"
                  description="Master level works best when you've already built a steady foundation. If you're unsure whether you're ready, message us — tell us your background and we'll guide you honestly."
                  badges={[
                    "L1 completed",
                    "L2 completed",
                    "Regular ongoing practice",
                    "Emotional stability",
                    "Genuine willingness to go deeper",
                  ]}
                  link={{ href: "#inquiry", label: "Check your eligibility" }}
                  variant="green"
                >
                  <div className="mt-5">
                    {requirementsCards.map((c) => (
                      <InfoCard key={c.title} title={c.title} body={c.body} />
                    ))}
                  </div>
                </ModuleCard>
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
                      q: "What are the requirements for Reiki Master Level (L3)?",
                      a: "You need to have completed Reiki Level 1 and Level 2, have a regular ongoing practice, and a genuine willingness to go deeper. Emotional stability and readiness to take on responsibility are also important.",
                    },
                    {
                      q: "Do I need to want to teach to join Reiki Master Level?",
                      a: "No. Teaching is completely optional. Many students take L3 purely for personal mastery — to deepen their practice, presence, and inner steadiness. The teaching pathway is available, not required.",
                    },
                    {
                      q: "How is Reiki Master Level different from Level 2?",
                      a: "L3 moves from building skills to refining mastery. It's less about new techniques and more about deepening steadiness, clearing energetic boundaries, holding space with maturity, and long-term integration.",
                    },
                    {
                      q: "What does the teaching pathway cover?",
                      a: "The optional teaching pathway covers how to hold training space, support students, explain Reiki clearly, and guide practice without ego — focused on responsible, grounded teaching.",
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="bg-white rounded-xl px-6 py-5 border border-[#EDE9F4] shadow-sm"
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
                  title="Ready for Reiki Mastery?"
                  description="Tell us your Reiki background (L1 & L2 completion), your practice experience, and whether you're aiming for personal mastery or the teaching path. We'll share the next available batch."
                  buttons={[
                    { icon: "📩", label: "Contact for L3 Training", href: "/contact" },
                    { icon: "🎓", label: "Back to Reiki Training",  href: "/training/reiki" },
                  ]}
                  variant="green"
                  backgroundEmoji="👑"
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
                variant="indigo"
              />
            </div>
          </div>
        </main>
      </div>
    </>
  );
}