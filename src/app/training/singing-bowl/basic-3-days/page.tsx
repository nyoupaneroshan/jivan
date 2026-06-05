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
  title: "3-Day Singing Bowl Basic Course in Kathmandu | Jivan Parivartan",
  description:
    "Learn singing bowl technique from scratch in a 3-day hands-on course in Kathmandu, Nepal. Covers correct holding, striking, rimming, basic session flow, and a home practice routine. Beginner-friendly, small group.",
  keywords: [
    "singing bowl basic course Kathmandu",
    "3 day singing bowl training Nepal",
    "singing bowl beginner course Nepal",
    "singing bowl technique Kathmandu",
    "sound healing beginner training Nepal",
    "Jivan Parivartan singing bowl basic",
    "singing bowl course for beginners Nepal",
    "singing bowl self-practice training",
  ],
  alternates: {
    canonical: "https://jivanparivartan.com/training/singing-bowl/basic-3-days",
  },
  openGraph: {
    title: "3-Day Singing Bowl Basic Course | Jivan Parivartan, Kathmandu",
    description:
      "Learn clean technique, safe practice, and a simple session flow you can repeat with confidence. 3-day beginner singing bowl training in Kathmandu, Nepal.",
    url: "https://jivanparivartan.com//training/singing-bowl/basic-3-days",
    siteName: "Jivan Parivartan",
    images: [
      {
        url: "https://images.unsplash.com/photo-1545389336-cf090694435e?w=1200",
        width: 1200,
        height: 630,
        alt: "3-Day Singing Bowl Basic Course at Jivan Parivartan, Kathmandu",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Singing Bowl Basic Course (3 Days) | Jivan Parivartan",
    description:
      "Beginner singing bowl training in Kathmandu. Correct technique, session flow & home practice routine. Starting from $450.",
    images: ["https://images.unsplash.com/photo-1545389336-cf090694435e?w=1200"],
  },
};

// ─── JSON-LD Structured Data ──────────────────────────────────────────────────

const courseJsonLd = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "3-Day Singing Bowl Basic Course",
  description:
    "Beginner singing bowl training covering correct holding, striking technique, rimming, basic session structure, comfort-first setup, and a self-practice routine. Suitable for complete beginners in Kathmandu, Nepal.",
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
  url: "https://jivanparivartan.com/training/singing-bowl/basic-3-days",
  image: "https://images.unsplash.com/photo-1545389336-cf090694435e?w=1200",
  timeRequired: "P3D",
  offers: {
    "@type": "Offer",
    price: "450",
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
  coursePrerequisites: "No prior experience required. Open to complete beginners.",
  educationalCredentialAwarded: "Singing Bowl Basic Course Certificate",
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home",                   item: "https://jivanparivartan.com/" },
    { "@type": "ListItem", position: 2, name: "Training",               item: "https://jivanparivartan.com/training" },
    { "@type": "ListItem", position: 3, name: "Singing Bowl Training",  item: "https://jivanparivartan.com/training/singing-bowl" },
    { "@type": "ListItem", position: 4, name: "Basic Course (3 Days)",  item: "https://jivanparivartan.com/training/singing-bowl-basic" },
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do I need any experience to join the 3-Day Singing Bowl Basic Course?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No experience is needed. This course is designed for complete beginners and starts from the very basics — how to hold a bowl, correct striking technique, and building your first self-practice routine.",
      },
    },
    {
      "@type": "Question",
      name: "What will I be able to do after completing the 3-Day Basic Course?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "After the course you'll be able to hold and strike bowls with correct technique, perform basic rimming, run a simple self-practice session, and conduct a basic comfort-first session for others. You'll also receive a home practice routine to keep the skill sharp.",
      },
    },
    {
      "@type": "Question",
      name: "What happens on each of the 3 days?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Day 1 covers foundations — bowl introduction, holding, posture, and basic striking. Day 2 focuses on technique and flow — rimming, sound layering, timing, and guided practice with feedback. Day 3 is session practice — full session structure, optional partner work, and a home practice plan.",
      },
    },
    {
      "@type": "Question",
      name: "Can I progress to the 7-Day Advanced Course after completing the Basic Course?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The 3-Day Basic Course is the ideal foundation for the 7-Day Advanced Course. After building correct technique and a basic session flow, the advanced course feels smooth and progressive rather than overwhelming.",
      },
    },
  ],
};

// ─── Static Data ──────────────────────────────────────────────────────────────

const dayWisePlan = [
  {
    day: "Day 1",
    title: "Foundation",
    accent: "#166534",
    items: [
      "Intro to bowls, sound & intention",
      "Holding + posture + comfort setup",
      "Basic striking technique (clean tone)",
      "Common mistakes and fixes",
    ],
  },
  {
    day: "Day 2",
    title: "Technique & Flow",
    accent: "#B45309",
    items: [
      "Rimming technique (steady vibration)",
      "Sound layering (simple, not noisy)",
      "Timing and pacing",
      "Guided practice + feedback",
    ],
  },
  {
    day: "Day 3",
    title: "Session Practice",
    accent: "#4338CA",
    items: [
      "Basic session structure (start → finish)",
      "Working with a partner (optional)",
      "Comfort & boundaries",
      "How to practice at home",
    ],
  },
];

const whatYouGetCards = [
  {
    title: "A simple home routine",
    body: "A short self-practice flow you can do even on busy days — so the skill stays in your hands and keeps growing.",
  },
  {
    title: "Readiness for Advanced",
    body: "If you want deeper therapy-level work, this basic foundation makes the 7-Day Advanced Course feel smooth and natural.",
  },
];

// ─── Reusable Info Card ───────────────────────────────────────────────────────

function InfoCard({ title, body }: { title: string; body: string }) {
  return (
    <div
      className="bg-white rounded-xl px-6 py-5 border border-[#E8F0E8]"
      style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.04), 0 4px 12px rgba(0,0,0,0.04)" }}
    >
      <h4 className="text-[15px] font-semibold text-[#166534] mb-2 leading-snug">
        {title}
      </h4>
      <p className="text-[13px] text-[#5A5550] leading-relaxed">{body}</p>
    </div>
  );
}

// ─── Day Card ─────────────────────────────────────────────────────────────────

function DayCard({
  day,
  title,
  items,
  accent,
}: {
  day: string;
  title: string;
  items: string[];
  accent: string;
}) {
  return (
    <div
      className="bg-white rounded-xl overflow-hidden border border-[#E8F0E8]"
      style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.04), 0 4px 12px rgba(0,0,0,0.04)" }}
    >
      {/* Accent strip */}
      <div
        className="h-1 w-full"
        style={{ background: accent }}
        aria-hidden
      />
      <div className="px-5 py-5">
        <span
          className="inline-block text-[11px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full mb-2"
          style={{
            background: `${accent}12`,
            color: accent,
            border: `1px solid ${accent}20`,
          }}
        >
          {day}
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

export default function SingingBowlBasic3DaysPage() {
  const breadcrumbItems = [
    { label: "Home",                  href: "/" },
    { label: "Training",              href: "/training" },
    { label: "Singing Bowl Training", href: "/training/singing-bowl" },
    { label: "Basic (3 Days)" },
  ];

  const heroStats = [
    { number: "3 Days",   label: "Basic course" },
    { number: "Hands-on", label: "Real practice" },
    { number: "Technique",label: "Clean sound" },
    { number: "Beginner", label: "Friendly" },
  ];

  const heroCTAs = [
    { label: "Training Inquiry", href: "#inquiry",   primary: true },
    { label: "See Curriculum",   href: "#curriculum" },
  ];

  const quickNavItems = [
    { id: "overview",    icon: "📋", label: "Overview",        href: "#overview" },
    { id: "curriculum",  icon: "🧩", label: "Curriculum",       href: "#curriculum" },
    { id: "day-wise",    icon: "🗓️", label: "Day-wise Plan",    href: "#day-wise" },
    { id: "who",         icon: "🫶", label: "Who It's For",     href: "#who" },
    { id: "what-you-get",icon: "🎁", label: "What You Get",     href: "#what-you-get" },
    { id: "inquiry",     icon: "📩", label: "Inquiry",          href: "#inquiry" },
  ];

  const introParagraphs = [
    "This 3-day basic course is the best starting point if you're new to singing bowls or want to fix your technique and learn it properly from the ground up.",
    "We keep it practical: clean sound, correct handling, safe session structure, and enough guided practice so you feel confident using bowls for self-care or simple sessions for others.",
  ];

  const priceInfo = {
    label: "Starting From",
    amount: "$450",
    duration: "3-Day Program",
    includes: [
      "3 days hands-on practice",
      "Guided technique feedback",
      "Beginner-friendly support",
      "Home practice routine",
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
          badge={{ icon: "🌱", text: "Singing Bowl · Basic Course" }}
          title="Singing Bowl Basic Course (3 Days)"
          subtitle="Learn clean technique, safe practice, and a simple session flow you can repeat with confidence."
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
                  title="Start strong — so your sound feels clean and calming"
                  paragraphs={introParagraphs}
                  variant="green"
                />

                {/* Next level callout */}
                <div
                  className="mt-6 flex items-start gap-4 px-5 py-4 rounded-xl border"
                  style={{ background: "#F0FDF4", borderColor: "#BBF7D0" }}
                >
                  <span className="text-xl flex-shrink-0" aria-hidden>🎵</span>
                  <div>
                    <p className="text-[14px] font-semibold text-[#14532D]">
                      This is Part 1 of a 2-course path
                    </p>
                    <p className="text-[13px] text-[#166534] mt-0.5 leading-relaxed">
                      After the Basic Course, you can continue to the{" "}
                      <a
                        href="training/singing-bowl/advanced-7-days"
                        className="underline font-medium hover:opacity-75 transition-opacity"
                      >
                        7-Day Advanced Course
                      </a>{" "}
                      for therapy-level application and professional certification.
                    </p>
                  </div>
                </div>
              </section>

              {/* Curriculum */}
              <section id="curriculum" aria-labelledby="curriculum-heading" className="mt-10">
                <ModuleCard
                  icon="🧩"
                  title="What you'll learn"
                  description="This course focuses on the essentials that matter most: technique, comfort-first setup, and a basic structure for sessions. By the end, you'll know exactly what to do — and what to avoid."
                  badges={[
                    "Understanding bowls (types & tones)",
                    "How to hold & place bowls safely",
                    "Striking technique (clean sound)",
                    "Rimming technique (stable vibration)",
                    "Session setup & client comfort",
                    "Basic session flow (start → finish)",
                  ]}
                  link={{ href: "#day-wise", label: "See the day-wise plan" }}
                  defaultExpanded={true}
                  variant="green"
                >
                  <div className="mt-5">
                    <InfoCard
                      title="Real goal of the Basic Course"
                      body="Not fancy tricks — clean sound, steady rhythm, safe placement, and calm confidence you can rely on every time."
                    />
                  </div>
                </ModuleCard>
              </section>

              {/* Day-wise plan */}
              <section id="day-wise" aria-labelledby="day-wise-heading" className="mt-10">
                <ModuleCard
                  icon="🗓️"
                  title="Day-wise plan — simple and practical"
                  description="We teach in a calm rhythm: learn → practice → feedback. The exact flow can shift based on group pace, but this is the general structure across the 3 days."
                  badges={["Practice-first", "Feedback loops", "Comfort & safety", "Confidence building"]}
                  link={{ href: "#what-you-get", label: "What you get after training" }}
                  variant="green"
                >
                  <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {dayWisePlan.map((d) => (
                      <DayCard
                        key={d.day}
                        day={d.day}
                        title={d.title}
                        items={d.items}
                        accent={d.accent}
                      />
                    ))}
                  </div>
                </ModuleCard>
              </section>

              {/* Who it's for */}
              <section id="who" aria-labelledby="who-heading" className="mt-10">
                <ModuleCard
                  icon="🫶"
                  title="Who this course is for"
                  description="A great fit if you want a grounded start and a real skill — not just a one-time experience or a general overview."
                  badges={[
                    "Complete beginners",
                    "Yoga & meditation students",
                    "Wellness practitioners",
                    "People learning for self-care",
                    "Those planning advanced training later",
                  ]}
                  link={{ href: "#inquiry", label: "Ask about the next batch" }}
                  variant="green"
                />
              </section>

              {/* What you get */}
              <section id="what-you-get" aria-labelledby="what-you-get-heading" className="mt-10">
                <ModuleCard
                  icon="🎁"
                  title="What you get after training"
                  description="We want you to leave with a clear practice you can repeat — not confusion. Here's what you walk away with."
                  badges={[
                    "Correct technique foundation",
                    "Home practice routine",
                    "Safe session structure",
                    "Confidence to practice daily",
                  ]}
                  link={{ href: "#inquiry", label: "Join Basic (3 Days)" }}
                  variant="green"
                >
                  <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {whatYouGetCards.map((c) => (
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
                      q: "Do I need any experience to join the 3-Day Basic Course?",
                      a: "No experience is needed. This course is designed for complete beginners and starts from the very basics — how to hold a bowl, correct striking technique, and building your first self-practice routine.",
                    },
                    {
                      q: "What will I be able to do after completing the Basic Course?",
                      a: "You'll be able to hold and strike bowls with correct technique, perform basic rimming, run a simple session structure, and maintain a home self-practice routine. You'll also have a comfort-first approach for working with others informally.",
                    },
                    {
                      q: "What happens on each of the 3 days?",
                      a: "Day 1 covers foundations — bowl introduction, holding, posture, and striking. Day 2 focuses on technique and flow — rimming, sound layering, and guided practice with feedback. Day 3 is session practice — full session structure, optional partner work, and your home practice plan.",
                    },
                    {
                      q: "Can I progress to the 7-Day Advanced Course after this?",
                      a: "Yes. The 3-Day Basic Course is the ideal foundation for the 7-Day Advanced Course. With correct technique and basic session flow already in place, the advanced course feels smooth and progressive rather than overwhelming.",
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
                  title="Ready to Start the 3-Day Basic Course?"
                  description="Tell us your preferred dates and your goal — self-practice or a professional path. We'll share the next batch details and what to prepare."
                  buttons={[
                    { icon: "📩", label: "Contact for Basic Training",    href: "/contact" },
                    { icon: "🎓", label: "Back to Singing Bowl Training", href: "/training/singing-bowl" },
                  ]}
                  variant="green"
                  backgroundEmoji="🌱"
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