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
  title: "7-Day Singing Bowl Advanced Course in Kathmandu | Jivan Parivartan",
  description:
    "Advanced singing bowl therapy training in Kathmandu, Nepal. 7-day course covering chakra-based session flow, group sound bath facilitation, client ethics, professional setup, and advanced certification. Hands-on daily practice.",
  keywords: [
    "singing bowl advanced course Kathmandu",
    "7 day singing bowl training Nepal",
    "singing bowl therapy training Nepal",
    "sound bath facilitator training Nepal",
    "chakra singing bowl course Kathmandu",
    "Jivan Parivartan singing bowl advanced",
    "professional singing bowl training Nepal",
    "sound healing advanced course Nepal",
  ],
  alternates: {
    canonical: "https://jivanparivartan.com/training/singing-bowl/advanced-7-days",
  },
  openGraph: {
    title: "7-Day Singing Bowl Advanced Course | Jivan Parivartan, Kathmandu",
    description:
      "Therapy-level training for confident sessions, chakra-focused flows, and professional practice. 7-day advanced singing bowl course in Kathmandu, Nepal.",
    url: "https://jivanparivartan.com/training/singing-bowl/advanced-7-days",
    siteName: "Jivan Parivartan",
    images: [
      {
        url: "https://images.unsplash.com/photo-1545389336-cf090694435e?w=1200",
        width: 1200,
        height: 630,
        alt: "7-Day Singing Bowl Advanced Course at Jivan Parivartan, Kathmandu",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Singing Bowl Advanced Course (7 Days) | Jivan Parivartan",
    description:
      "Advanced singing bowl therapy training in Kathmandu. Chakra flows, sound bath facilitation, client ethics & professional certification. Starting from $800.",
    images: ["https://images.unsplash.com/photo-1545389336-cf090694435e?w=1200"],
  },
};

// ─── JSON-LD Structured Data ──────────────────────────────────────────────────

const courseJsonLd = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "7-Day Singing Bowl Advanced Course",
  description:
    "Advanced singing bowl therapy training covering technique refinement, chakra-based session flow, group sound bath facilitation, client ethics, professional setup, and advanced certification. For students with basic singing bowl knowledge or prior training.",
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
  url: "https://jivanparivartan.com/training/singing-bowl/advanced-7-days",
  image: "https://images.unsplash.com/photo-1545389336-cf090694435e?w=1200",
  timeRequired: "P7D",
  offers: {
    "@type": "Offer",
    price: "800",
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
  coursePrerequisites: "Basic singing bowl knowledge or completion of the 3-Day Singing Bowl Basic Course recommended.",
  educationalCredentialAwarded: "Singing Bowl Advanced Course Certificate",
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home",                   item: "https://jivanparivartan.com/" },
    { "@type": "ListItem", position: 2, name: "Training",               item: "https://jivanparivartan.com/training" },
    { "@type": "ListItem", position: 3, name: "Singing Bowl Training",  item: "https://jivanparivartan.com/training/singing-bowl" },
    { "@type": "ListItem", position: 4, name: "Advanced Course (7 Days)", item: "https://jivanparivartan.com/training/singing-bowl/advanced-7-days" },
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do I need to complete the Basic Course before the 7-Day Advanced Course?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Basic singing bowl knowledge or completion of the 3-Day Basic Course is recommended. If you already have experience with bowls, contact us and we'll assess your readiness for the advanced course directly.",
      },
    },
    {
      "@type": "Question",
      name: "What therapy-level skills does the 7-Day Advanced Course cover?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The course covers advanced technique refinement, chakra-based session flow, intention setting, group sound bath facilitation, volume and room setup, client comfort and consent, professional session documentation, and an advanced certification pathway.",
      },
    },
    {
      "@type": "Question",
      name: "What is covered on each phase of the 7 days?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Days 1–2 refine technique: clean tone, advanced rimming, and layering. Days 3–4 build therapeutic session flow: chakra structure, intention, and clean closing. Days 5–6 cover group facilitation: sound bath planning, room setup, and leading a group session. Day 7 is integration: supervised practice, personal improvement plan, and certification discussion.",
      },
    },
    {
      "@type": "Question",
      name: "Can I work professionally as a sound healer after the 7-Day Advanced Course?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The Advanced Course covers professional session structure, client ethics and consent, safe intensity control, and session documentation basics — giving you the foundation to work with clients and facilitate group sound baths professionally.",
      },
    },
  ],
};

// ─── Static Data ──────────────────────────────────────────────────────────────

const dayWisePlan = [
  {
    range: "Days 1–2",
    title: "Refine Technique",
    accent: "#166534",
    items: [
      "Clean tone, stability & control",
      "Advanced rimming & striking refinement",
      "Layering without overstimulation",
      "Practice with structured feedback",
    ],
  },
  {
    range: "Days 3–4",
    title: "Therapeutic Session Flow",
    accent: "#B45309",
    items: [
      "Chakra-based structure & pacing",
      "Intention setting & integration",
      "Working with comfort & sensitivity",
      "Closing a session cleanly",
    ],
  },
  {
    range: "Days 5–6",
    title: "Group Facilitation",
    accent: "#4338CA",
    items: [
      "Holding group space with confidence",
      "Sound bath planning & flow",
      "Volume control & room setup",
      "Practice leading a group session",
    ],
  },
  {
    range: "Day 7",
    title: "Integration & Next Steps",
    accent: "#0F766E",
    items: [
      "Final supervised practice session",
      "Personal improvement plan",
      "Professional guidance & practice steps",
      "Completion & certification discussion",
    ],
  },
];

// ─── Reusable Components ──────────────────────────────────────────────────────

function InfoCard({ title, body, accentColor = "#166534" }: { title: string; body: string; accentColor?: string }) {
  return (
    <div
      className="bg-white rounded-xl px-6 py-5 border border-[#E8F0E8]"
      style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.04), 0 4px 12px rgba(0,0,0,0.04)" }}
    >
      <h4
        className="text-[15px] font-semibold mb-2 leading-snug"
        style={{ color: accentColor }}
      >
        {title}
      </h4>
      <p className="text-[13px] text-[#5A5550] leading-relaxed">{body}</p>
    </div>
  );
}

function DayCard({
  range,
  title,
  items,
  accent,
}: {
  range: string;
  title: string;
  items: string[];
  accent: string;
}) {
  return (
    <div
      className="bg-white rounded-xl overflow-hidden border border-[#E8F0E8]"
      style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.04), 0 4px 12px rgba(0,0,0,0.04)" }}
    >
      <div className="h-1 w-full" style={{ background: accent }} aria-hidden />
      <div className="px-5 py-5">
        <span
          className="inline-block text-[11px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full mb-2"
          style={{
            background: `${accent}12`,
            color: accent,
            border: `1px solid ${accent}20`,
          }}
        >
          {range}
        </span>
        <h4 className="text-[16px] font-bold text-[#1A1714] mb-3">{title}</h4>
        <ul className="space-y-2" role="list">
          {items.map((item) => (
            <li
              key={item}
              className="flex items-start gap-2.5 text-[13px] text-[#5A5550] leading-relaxed"
            >
              <span
                className="w-1.5 h-1.5 rounded-full mt-[5px] flex-shrink-0"
                style={{ background: accent }}
                aria-hidden
              />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// ─── Page Component ───────────────────────────────────────────────────────────

export default function SingingBowlAdvanced7DaysPage() {
  const breadcrumbItems = [
    { label: "Home",                  href: "/" },
    { label: "Training",              href: "/training" },
    { label: "Singing Bowl Training", href: "/training/singing-bowl" },
    { label: "Advanced (7 Days)" },
  ];

  const heroStats = [
    { number: "7 Days",        label: "Advanced course" },
    { number: "Therapy-level", label: "Session skills" },
    { number: "Group + 1:1",   label: "Formats" },
    { number: "Daily",         label: "Practice" },
  ];

  const heroCTAs = [
    { label: "Training Inquiry", href: "#inquiry",   primary: true },
    { label: "See Curriculum",   href: "#curriculum" },
  ];

  const quickNavItems = [
    { id: "overview",     icon: "📋", label: "Overview",              href: "#overview" },
    { id: "curriculum",   icon: "🧩", label: "Curriculum",             href: "#curriculum" },
    { id: "day-wise",     icon: "🗓️", label: "Day-wise Plan",          href: "#day-wise" },
    { id: "professional", icon: "🤝", label: "Professional Practice",  href: "#professional" },
    { id: "who",          icon: "🫶", label: "Who It's For",           href: "#who" },
    { id: "inquiry",      icon: "📩", label: "Inquiry",                href: "#inquiry" },
  ];

  const introParagraphs = [
    "This 7-day advanced course is for students who want to go beyond technique and learn how to hold real therapeutic sessions with confidence and care.",
    "We focus on clean sound, clear structure, and professional-level session flow. You'll practice daily, learn how to work with different needs, and build a repeatable framework for both one-to-one and group sound bath settings.",
  ];

  const priceInfo = {
    label: "Starting From",
    amount: "$800",
    duration: "7-Day Program",
    includes: [
      "7 days daily hands-on practice",
      "Chakra-based session training",
      "Group sound bath facilitation",
      "Professional ethics module",
      "Personal improvement plan",
      "Advanced certification",
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
          badge={{ icon: "🔥", text: "Singing Bowl · Advanced Course" }}
          title="Singing Bowl Advanced Course (7 Days)"
          subtitle="Therapy-level training for confident sessions, chakra-focused flows, and professional practice."
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
                  title="Advanced training for real therapeutic sessions"
                  paragraphs={introParagraphs}
                  variant="green"
                />

                {/* Prerequisite callout */}
                <div
                  className="mt-6 flex items-start gap-4 px-5 py-4 rounded-xl border"
                  style={{ background: "#FFFBEB", borderColor: "#FDE68A" }}
                >
                  <span className="text-xl flex-shrink-0" aria-hidden>💡</span>
                  <div>
                    <p className="text-[14px] font-semibold text-[#92400E]">
                      Basic singing bowl knowledge recommended before joining
                    </p>
                    <p className="text-[13px] text-[#6B5020] mt-0.5 leading-relaxed">
                      New to singing bowls? Start with the{" "}
                      <a
                        href="/training/singing-bowl-basic"
                        className="underline font-medium hover:opacity-75 transition-opacity"
                        style={{ color: "#B45309" }}
                      >
                        3-Day Basic Course
                      </a>{" "}
                      first — it builds the technique foundation that makes this course significantly more effective.
                    </p>
                  </div>
                </div>
              </section>

              {/* Curriculum */}
              <section id="curriculum" aria-labelledby="curriculum-heading" className="mt-10">
                <ModuleCard
                  icon="🧩"
                  title="What you'll learn"
                  description="Advanced is about depth and structure. You'll learn how to build sessions that are calm, safe, and effective — with clear pacing, purpose, and professional-level confidence."
                  badges={[
                    "Advanced playing technique",
                    "Layering & pacing control",
                    "Chakra-based session structure",
                    "Working with intentions safely",
                    "Group sound bath guidance",
                    "Professional session flow",
                  ]}
                  link={{ href: "#day-wise", label: "See the day-wise plan" }}
                  defaultExpanded={true}
                  variant="green"
                >
                  <div className="mt-5">
                    <InfoCard
                      title="Core focus of the Advanced Course"
                      body="The goal is not to play more bowls. The goal is to create a clean, grounded sound field and guide a session with clarity, presence, and repeatable confidence."
                      accentColor="#B45309"
                    />
                  </div>
                </ModuleCard>
              </section>

              {/* Day-wise plan */}
              <section id="day-wise" aria-labelledby="day-wise-heading" className="mt-10">
                <ModuleCard
                  icon="🗓️"
                  title="Day-wise plan — 7 days"
                  description="This outline is the common flow. The exact timing may adjust depending on group pace and practice needs. Every day includes hands-on practice time."
                  badges={[
                    "Daily practice",
                    "Feedback & refinement",
                    "Session building",
                    "Group facilitation",
                  ]}
                  link={{ href: "#professional", label: "Professional practice module" }}
                  variant="green"
                >
                  <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {dayWisePlan.map((d) => (
                      <DayCard
                        key={d.range}
                        range={d.range}
                        title={d.title}
                        items={d.items}
                        accent={d.accent}
                      />
                    ))}
                  </div>
                </ModuleCard>
              </section>

              {/* Professional practice */}
              <section id="professional" aria-labelledby="professional-heading" className="mt-10">
                <ModuleCard
                  icon="🤝"
                  title="Professional practice & ethics"
                  description="If you plan to work with others, structure and ethics matter as much as technique. We cover comfort-first practice, consent, safe intensity control, and how to keep sessions grounded and sustainable."
                  badges={[
                    "Client comfort-first",
                    "Consent & boundaries",
                    "Safe intensity control",
                    "Session documentation basics",
                    "Sustainable practice habits",
                  ]}
                  link={{ href: "#inquiry", label: "Ask about enrollment" }}
                  variant="green"
                >
                  {/* Professional outcome cards */}
                  <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <InfoCard
                      title="Working with individual clients"
                      body="You'll learn how to adapt session intensity for individual sensitivity, communicate clearly before and after sessions, and maintain energetic hygiene for yourself."
                      accentColor="#B45309"
                    />
                    <InfoCard
                      title="Facilitating group sound baths"
                      body="Group work requires different skills — room setup, volume management, holding attention across multiple people, and bringing a group gently back to presence at the close."
                      accentColor="#B45309"
                    />
                  </div>
                </ModuleCard>
              </section>

              {/* Who it's for */}
              <section id="who" aria-labelledby="who-heading" className="mt-10">
                <ModuleCard
                  icon="🫶"
                  title="Who this course is for"
                  description="This course is best if you already have basic familiarity with bowls and want a deeper, therapy-level skill set for professional or dedicated personal use."
                  badges={[
                    "3-Day Basic Course graduates",
                    "Wellness practitioners",
                    "Yoga & meditation teachers",
                    "Healers & facilitators",
                    "People building professional skills",
                  ]}
                  link={{ href: "/training/singing-bowl-basic", label: "Start with Basic (3 Days)" }}
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
                      q: "Do I need to complete the Basic Course before the 7-Day Advanced Course?",
                      a: "Basic singing bowl knowledge or completion of the 3-Day Basic Course is recommended. If you already have experience with bowls, contact us and we'll assess your readiness for the advanced course directly.",
                    },
                    {
                      q: "What therapy-level skills does the 7-Day Advanced Course cover?",
                      a: "The course covers advanced technique refinement, chakra-based session flow, intention setting, group sound bath facilitation, volume and room setup, client comfort and consent, professional session documentation, and an advanced certification pathway.",
                    },
                    {
                      q: "What is covered on each phase of the 7 days?",
                      a: "Days 1–2 refine technique: clean tone, advanced rimming, and layering. Days 3–4 build therapeutic session flow: chakra structure and clean closing. Days 5–6 cover group facilitation: sound bath planning and leading a group. Day 7 is integration: supervised practice, personal improvement plan, and certification discussion.",
                    },
                    {
                      q: "Can I work professionally as a sound healer after this course?",
                      a: "Yes. The Advanced Course covers professional session structure, client ethics and consent, safe intensity control, and session documentation — giving you the foundation to work with clients and facilitate group sound baths professionally.",
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
                  title="Ready for Advanced Singing Bowl Training?"
                  description="Share your background (beginner or Basic Course completed), your preferred dates, and your goal. We'll respond with the next batch details and preparation notes."
                  buttons={[
                    { icon: "📩", label: "Contact for Advanced Training",  href: "/contact" },
                    { icon: "🎓", label: "Back to Singing Bowl Training",  href: "/training/singing-bowl" },
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