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
  title: "Reiki Level 2 Training in Kathmandu | Jivan Parivartan",
  description:
    "Deepen your Reiki practice with Level 2 training in Kathmandu, Nepal. Build practitioner confidence, session structure, chakra balancing, and stronger energetic awareness. Small groups, hands-on guidance.",
  keywords: [
    "Reiki Level 2 training Kathmandu",
    "Reiki L2 Nepal",
    "Reiki practitioner training Nepal",
    "Reiki session skills Nepal",
    "chakra balancing Reiki Nepal",
    "Jivan Parivartan Reiki Level 2",
    "advanced Reiki training Kathmandu",
    "Reiki attunement L2 Nepal",
  ],
  alternates: {
    canonical: "https://jivanparivartan.com/training/reiki-level-2",
  },
  openGraph: {
    title: "Reiki Level 2 (L2) Training | Jivan Parivartan, Kathmandu",
    description:
      "Deepen your Reiki practice — build practitioner confidence, session structure, and stronger energetic awareness. Hands-on, small-group training in Kathmandu.",
    url: "https://jivanparivartan.com/training/reiki-level-2",
    siteName: "Jivan Parivartan",
    images: [
      {
        url: "https://images.unsplash.com/photo-1545389336-cf090694435e?w=1200",
        width: 1200,
        height: 630,
        alt: "Reiki Level 2 Training at Jivan Parivartan, Kathmandu",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Reiki Level 2 (L2) Training | Jivan Parivartan",
    description:
      "Practitioner-track Reiki training in Kathmandu. Session skills, chakra balancing, ethics & deeper attunement. Starting from $300.",
    images: ["https://images.unsplash.com/photo-1545389336-cf090694435e?w=1200"],
  },
};

// ─── JSON-LD Structured Data ──────────────────────────────────────────────────

const courseJsonLd = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "Reiki Level 2 (L2) — Deeper Practice & Practitioner Track",
  description:
    "Intermediate Reiki training covering deeper energetic awareness, structured session skills, chakra balancing, partner practice, ethics, and attunement. For practitioners who have completed Reiki Level 1.",
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
  url: "https://jivanparivartan.com/training/reiki-level-2",
  image: "https://images.unsplash.com/photo-1545389336-cf090694435e?w=1200",
  offers: {
    "@type": "Offer",
    price: "300",
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
  coursePrerequisites: "Reiki Level 1 (L1) completion recommended.",
  educationalCredentialAwarded: "Reiki Level 2 Certificate",
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home",           item: "https://jivanparivartan.com/" },
    { "@type": "ListItem", position: 2, name: "Training",       item: "https://jivanparivartan.com/training" },
    { "@type": "ListItem", position: 3, name: "Reiki Training", item: "https://jivanparivartan.com/training/reiki" },
    { "@type": "ListItem", position: 4, name: "Reiki Level 2",  item: "https://jivanparivartan.com/training/reiki-level-2" },
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do I need to complete Reiki Level 1 before joining Level 2?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Reiki Level 1 is recommended before joining L2. L2 builds directly on the foundation established in L1 — self-healing routine, hand positions, and basic energy awareness.",
      },
    },
    {
      "@type": "Question",
      name: "What new skills does Reiki Level 2 add over Level 1?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Level 2 adds structured session skills for working with others, deeper energetic awareness, chakra balancing, partner practice, ethics and boundaries, and a deeper attunement. It moves from self-healing toward practitioner-level confidence.",
      },
    },
    {
      "@type": "Question",
      name: "Can I start a professional Reiki practice after Level 2?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. After L2 you have the session structure, ethics training, and hands-on practice to begin working with clients professionally. We provide guidance on building a simple, ethical practice.",
      },
    },
    {
      "@type": "Question",
      name: "What if I want to take Level 2 for personal growth only?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "That's completely valid. Many students take L2 to deepen their personal calm, clarity, and energetic awareness without pursuing professional practice. The skills are just as valuable for personal use.",
      },
    },
  ],
};

// ─── Static Data ──────────────────────────────────────────────────────────────

const curriculumCards = [
  {
    title: "More than just more techniques",
    body: "L2 is about clarity — what to do, when to do it, how to stay grounded, and how to read the session without overthinking.",
  },
  {
    title: "Attunement & initiation (if applicable)",
    body: "L2 typically includes a deeper initiation to support your practice at the next level. We explain the process clearly before we begin — no surprises.",
  },
];

const practiceCards = [
  {
    title: "Professional-style structure (without pressure)",
    body: "Even if you don't plan to work professionally, learning structure makes your Reiki cleaner and more effective — because you're not guessing.",
  },
];

const afterCards = [
  {
    title: "If you want to practice professionally",
    body: "We'll guide you on session structure, client comfort, and how to build a simple, ethical practice that grows organically.",
  },
  {
    title: "If you're doing this for personal growth",
    body: "L2 can still be a beautiful step — many people take it just to deepen their calm, clarity, and inner steadiness.",
  },
];

// ─── Reusable Info Card ───────────────────────────────────────────────────────

function InfoCard({ title, body }: { title: string; body: string }) {
  return (
    <div
      className="bg-white rounded-xl px-6 py-5 border border-[#E8F0E8]"
      style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.04), 0 4px 12px rgba(0,0,0,0.04)" }}
    >
      <h4 className="text-[15px] font-semibold text-[#9A3412] mb-2 leading-snug">
        {title}
      </h4>
      <p className="text-[13px] text-[#5A5550] leading-relaxed">{body}</p>
    </div>
  );
}

// ─── Page Component ───────────────────────────────────────────────────────────

export default function ReikiLevel2TrainingPage() {
  const breadcrumbItems = [
    { label: "Home",           href: "/" },
    { label: "Training",       href: "/training" },
    { label: "Reiki Training", href: "/training/reiki" },
    { label: "Reiki Level 2 (L2)" },
  ];

  const heroStats = [
    { number: "L2",         label: "Practitioner path" },
    { number: "Deeper",     label: "Energy practice" },
    { number: "Hands-on",   label: "Session skills" },
    { number: "Guided",     label: "With support" },
  ];

  const heroCTAs = [
    { label: "Training Inquiry", href: "#inquiry",   primary: true },
    { label: "See Curriculum",   href: "#curriculum" },
  ];

  const quickNavItems = [
    { id: "overview",   icon: "📋", label: "Overview",           href: "#overview" },
    { id: "curriculum", icon: "🧩", label: "What You'll Learn",  href: "#curriculum" },
    { id: "practice",   icon: "🤝", label: "Practice & Sessions",href: "#practice" },
    { id: "ethics",     icon: "🫶", label: "Ethics & Boundaries",href: "#ethics" },
    { id: "after",      icon: "✅", label: "After Training",     href: "#after" },
    { id: "inquiry",    icon: "📩", label: "Inquiry",            href: "#inquiry" },
  ];

  const introParagraphs = [
    "Reiki Level 2 is where your practice becomes more confident and more consistent — especially if you want to work with others in a structured, ethical way.",
    "L2 is often chosen by practitioners who have completed L1 and now want deeper practice, clearer session flow, and stronger energetic awareness — with real guidance and feedback along the way.",
  ];

  const priceInfo = {
    label: "Starting From",
    amount: "$300",
    duration: "Per Level Program",
    includes: [
      "Guided hands-on learning",
      "Session structure training",
      "Partner practice sessions",
      "Ethics & boundaries module",
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
          badge={{ icon: "🔥", text: "Reiki Training · Level 2" }}
          title="Reiki Level 2 (L2) Training"
          subtitle="Deepen your practice — build practitioner confidence, session structure, and stronger energetic awareness."
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
              variant="saffron"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] xl:grid-cols-[1fr_380px] gap-10 xl:gap-14">
            {/* ── Main Content ───────────────────────────────────── */}
            <div className="min-w-0">

              {/* Overview */}
              <section id="overview" aria-labelledby="overview-heading">
                <IntroSection
                  title="Where practice turns into confidence"
                  paragraphs={introParagraphs}
                  variant="green"
                />

                {/* L1 prerequisite callout */}
                <div
                  className="mt-6 flex items-start gap-4 px-5 py-4 rounded-xl border"
                  style={{
                    background: "#FFFBEB",
                    borderColor: "#FDE68A",
                  }}
                >
                  <span className="text-xl flex-shrink-0" aria-hidden>💡</span>
                  <div>
                    <p className="text-[14px] font-semibold text-[#92400E]">
                      Reiki Level 1 recommended before joining L2
                    </p>
                    <p className="text-[13px] text-[#6B5020] mt-0.5 leading-relaxed">
                      L2 builds directly on your L1 foundation. If you haven't done L1 yet,{" "}
                      <a
                        href="/training/reiki-level-1"
                        className="underline font-medium hover:opacity-75 transition-opacity"
                        style={{ color: "#B45309" }}
                      >
                        start there
                      </a>
                      .
                    </p>
                  </div>
                </div>
              </section>

              {/* Curriculum */}
              <section id="curriculum" aria-labelledby="curriculum-heading" className="mt-10">
                <ModuleCard
                  icon="🧩"
                  title="What you'll learn in Level 2"
                  description="L2 is more practice-driven. We refine the basics, deepen your sensitivity, and help you build a clean, repeatable session structure so you can work with others in a grounded way."
                  badges={[
                    "Deeper energetic awareness",
                    "Working with others (structured)",
                    "Session flow & pacing",
                    "Chakra balancing approach",
                    "Clearing & grounding",
                    "Practice refinement",
                  ]}
                  link={{ href: "#practice", label: "How practice works" }}
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

              {/* Practice & Sessions */}
              <section id="practice" aria-labelledby="practice-heading" className="mt-10">
                <ModuleCard
                  icon="🤝"
                  title="Practice & session skills"
                  description="You'll do guided practice and optional partner practice. We focus on real session skills: how to begin, how to pace, how to stay present, and how to close a session cleanly."
                  badges={[
                    "Guided practice",
                    "Partner practice (optional)",
                    "Session opening & closing",
                    "Grounded presence",
                    "Feedback & improvement",
                  ]}
                  link={{ href: "#ethics", label: "Ethics & boundaries" }}
                  variant="green"
                >
                  <div className="mt-5">
                    {practiceCards.map((c) => (
                      <InfoCard key={c.title} title={c.title} body={c.body} />
                    ))}
                  </div>
                </ModuleCard>
              </section>

              {/* Ethics */}
              <section id="ethics" aria-labelledby="ethics-heading" className="mt-10">
                <ModuleCard
                  icon="🫶"
                  title="Ethics & boundaries — essential in L2"
                  description="When you start working with others, clarity matters. We cover consent, communication, and how to hold space respectfully — without trying to 'fix' people or overstepping your role."
                  badges={[
                    "Consent & comfort-first",
                    "Clear communication",
                    "Healthy boundaries",
                    "Scope & responsibility",
                    "Respectful practice",
                  ]}
                  link={{ href: "#after", label: "After training plan" }}
                  variant="green"
                />
              </section>

              {/* After training */}
              <section id="after" aria-labelledby="after-heading" className="mt-10">
                <ModuleCard
                  icon="✅"
                  title="After training — so your L2 stays strong"
                  description="L2 becomes powerful when you keep it consistent. We'll share a simple practice plan and recommendations for how to build confidence with real sessions over time."
                  badges={[
                    "Regular self-practice",
                    "Practice with others (gently)",
                    "Session journaling",
                    "Consistency over intensity",
                  ]}
                  link={{ href: "#inquiry", label: "Join the next L2 batch" }}
                  variant="green"
                >
                  <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {afterCards.map((c) => (
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
                      q: "Do I need to complete Reiki Level 1 before joining Level 2?",
                      a: "Yes, Reiki Level 1 is recommended before joining L2. L2 builds directly on the foundation of L1 — self-healing routine, hand positions, and basic energy awareness.",
                    },
                    {
                      q: "What new skills does Reiki Level 2 add over Level 1?",
                      a: "Level 2 adds structured session skills for working with others, deeper energetic awareness, chakra balancing, partner practice, ethics and boundaries training, and a deeper attunement.",
                    },
                    {
                      q: "Can I start a professional Reiki practice after Level 2?",
                      a: "Yes. After L2 you have the session structure, ethics training, and hands-on experience to begin working with clients. We provide guidance on building a simple, ethical practice.",
                    },
                    {
                      q: "What if I want to take Level 2 for personal growth only?",
                      a: "That's completely valid. Many students take L2 to deepen their personal calm, clarity, and energetic awareness — without pursuing professional practice.",
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
                  title="Ready to Deepen Your Reiki Practice?"
                  description="Tell us if you've completed L1, your preferred dates, and your goal — personal growth or practitioner path. We'll share the next batch details."
                  buttons={[
                    { icon: "📩", label: "Contact for L2 Training",  href: "/contact" },
                    { icon: "🎓", label: "Back to Reiki Training",   href: "/training/reiki" },
                  ]}
                  variant="green"
                  backgroundEmoji="🔥"
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
                variant="saffron"
              />
            </div>
          </div>
        </main>
      </div>
    </>
  );
}