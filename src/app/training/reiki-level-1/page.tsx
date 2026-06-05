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
  title: "Reiki Level 1 Training in Kathmandu | Jivan Parivartan",
  description:
    "Learn Reiki Level 1 in Kathmandu, Nepal. Jivan Parivartan's L1 training covers self-healing routines, hand positions, energy grounding, and attunement — perfect for complete beginners. Small groups, hands-on practice.",
  keywords: [
    "Reiki Level 1 training Kathmandu",
    "Reiki L1 Nepal",
    "Reiki beginner course Nepal",
    "Reiki self-healing training",
    "Reiki attunement Kathmandu",
    "Jivan Parivartan Reiki Level 1",
    "energy healing beginner Nepal",
    "Reiki foundation course Nepal",
  ],
  alternates: {
    canonical: "https://jivanparivartan.com/training/reiki-level-1",
  },
  openGraph: {
    title: "Reiki Level 1 (L1) Training | Jivan Parivartan, Kathmandu",
    description:
      "Learn Reiki from the ground up. Clear technique, real practice, and a self-healing routine you can trust. Beginner-friendly, small-group training in Kathmandu, Nepal.",
    url: "https://jivanparivartan.com/training/reiki-level-1",
    siteName: "Jivan Parivartan",
    images: [
      {
        url: "https://images.unsplash.com/photo-1545389336-cf090694435e?w=1200",
        width: 1200,
        height: 630,
        alt: "Reiki Level 1 Training at Jivan Parivartan, Kathmandu",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Reiki Level 1 (L1) Training | Jivan Parivartan",
    description:
      "Beginner Reiki training in Kathmandu. Self-healing routine, hand positions, attunement & grounding. Starting from $300.",
    images: ["https://images.unsplash.com/photo-1545389336-cf090694435e?w=1200"],
  },
};

// ─── JSON-LD Structured Data ──────────────────────────────────────────────────

const courseJsonLd = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "Reiki Level 1 (L1) — Foundation & Self-Healing",
  description:
    "Beginner Reiki training covering the basics of energy healing, self-healing routines, hand positions, grounding, attunement, and daily practice. Suitable for complete beginners in Kathmandu, Nepal.",
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
  url: "https://jivanparivartan.com/training/reiki-level-1",
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
  coursePrerequisites: "No prior experience required. Open to complete beginners.",
  educationalCredentialAwarded: "Reiki Level 1 Certificate",
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home",          item: "https://jivanparivartan.com/" },
    { "@type": "ListItem", position: 2, name: "Training",      item: "https://jivanparivartan.com/training" },
    { "@type": "ListItem", position: 3, name: "Reiki Training",item: "https://jivanparivartan.com/training/reiki" },
    { "@type": "ListItem", position: 4, name: "Reiki Level 1", item: "https://jivanparivartan.com/training/reiki-level-1" },
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do I need any experience to join Reiki Level 1?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No experience is needed at all. Reiki Level 1 is designed specifically for complete beginners and focuses on building a strong foundation through self-healing and daily practice.",
      },
    },
    {
      "@type": "Question",
      name: "What is included in Reiki Level 1 training?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Level 1 covers what Reiki is, its history and principles, a self-healing routine, hand positions, energy hygiene, grounding, attunement (initiation), and a post-training integration plan.",
      },
    },
    {
      "@type": "Question",
      name: "Can I use Reiki Level 1 to help others?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Level 1 is primarily focused on self-healing. You can informally support close family members, but working with others professionally is covered in Level 2.",
      },
    },
    {
      "@type": "Question",
      name: "What happens after completing Reiki Level 1?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "After L1 you receive a certificate and guidance for a 21-day self-practice routine. If you wish to work professionally with others, you can progress to Reiki Level 2.",
      },
    },
  ],
};

// ─── Info Cards Data ──────────────────────────────────────────────────────────

const curriculumCards = [
  {
    title: "Self-healing (the heart of L1)",
    body: "You'll learn a simple self-treatment sequence you can do at home — especially helpful for stress, sleep support, and emotional steadiness.",
  },
  {
    title: "Attunement & initiation",
    body: "Level 1 includes an initiation process led by the teacher to support your connection and practice. We'll explain clearly what to expect — no surprises.",
  },
];

const afterCards = [
  {
    title: "If you want to become a practitioner",
    body: "L1 is the starting point. After building steady self-practice, Level 2 is where you deepen work with others and refine your session structure.",
  },
  {
    title: "If you want personal healing only",
    body: "That's completely valid. Many people stop at L1 and still receive tremendous value from a consistent self-healing routine.",
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

// ─── Page Component ───────────────────────────────────────────────────────────

export default function ReikiLevel1TrainingPage() {
  const breadcrumbItems = [
    { label: "Home",          href: "/" },
    { label: "Training",      href: "/training" },
    { label: "Reiki Training",href: "/training/reiki" },
    { label: "Reiki Level 1 (L1)" },
  ];

  const heroStats = [
    { number: "L1",         label: "Foundation" },
    { number: "Self-healing",label: "Daily practice" },
    { number: "Hands-on",   label: "Simple method" },
    { number: "Beginners",  label: "Welcome" },
  ];

  const heroCTAs = [
    { label: "Training Inquiry", href: "#inquiry", primary: true },
    { label: "See Curriculum",   href: "#curriculum" },
  ];

  const quickNavItems = [
    { id: "overview",  icon: "📋", label: "Overview",        href: "#overview" },
    { id: "curriculum",icon: "🧩", label: "What You'll Learn",href: "#curriculum" },
    { id: "who",       icon: "🫶", label: "Who It's For",     href: "#who" },
    { id: "day",       icon: "🗓️", label: "Training Flow",    href: "#day" },
    { id: "after",     icon: "✅", label: "After Training",   href: "#after" },
    { id: "inquiry",   icon: "📩", label: "Inquiry",          href: "#inquiry" },
  ];

  const introParagraphs = [
    "Reiki Level 1 is where everything becomes simple. You learn the basics properly, practice with guidance, and build a self-healing routine you can actually keep.",
    "This level is perfect if you want more calm in your day, stronger emotional balance, or a grounded way to support yourself and your family — without needing any previous experience.",
  ];

  const priceInfo = {
    label: "Starting From",
    amount: "$300",
    duration: "Per Level Program",
    includes: [
      "Guided hands-on learning",
      "Beginner-friendly support",
      "Attunement (initiation)",
      "Post-training integration plan",
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
          badge={{ icon: "🌱", text: "Reiki Training · Level 1" }}
          title="Reiki Level 1 (L1) Training"
          subtitle="Learn Reiki from the ground up — clear technique, real practice, and a self-healing routine you can trust."
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
                  title="Start with a strong foundation"
                  paragraphs={introParagraphs}
                  variant="green"
                />
              </section>

              {/* Curriculum */}
              <section id="curriculum" aria-labelledby="curriculum-heading" className="mt-10">
                <ModuleCard
                  icon="🧩"
                  title="What you'll learn in Level 1"
                  description="Level 1 is focused on understanding the method and building a self-practice. We keep the learning practical — so you don't leave with just notes, you leave with confidence."
                  badges={[
                    "What Reiki is (simple + practical)",
                    "History & principles",
                    "Self-healing routine",
                    "Hand positions",
                    "Energy hygiene & grounding",
                    "Practice guidance",
                  ]}
                  link={{ href: "#day", label: "See training flow" }}
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

              {/* Who it's for */}
              <section id="who" aria-labelledby="who-heading" className="mt-10">
                <ModuleCard
                  icon="🫶"
                  title="Who L1 is for"
                  description="If you want a grounded practice you can return to — even when life is busy — L1 is a great start. No experience needed, no prior knowledge required."
                  badges={[
                    "Complete beginners",
                    "People under stress",
                    "Healers & caregivers",
                    "Yoga & meditation students",
                    "Anyone wanting self-healing tools",
                    "Those planning to go pro later",
                  ]}
                  link={{ href: "#inquiry", label: "Ask about the next batch" }}
                  variant="green"
                />
              </section>

              {/* Training flow */}
              <section id="day" aria-labelledby="day-heading" className="mt-10">
                <ModuleCard
                  icon="🗓️"
                  title="Training flow — what it feels like"
                  description="We teach in a calm rhythm: learn, practice, reflect, repeat. You'll have time to ask questions and you'll get guided practice — so it feels real, not rushed."
                  badges={[
                    "Clear explanations",
                    "Guided practice",
                    "Partner practice (optional)",
                    "Q&A time",
                    "Integration guidance",
                  ]}
                  link={{ href: "#after", label: "After training support" }}
                  variant="green"
                >
                  <div className="mt-5">
                    <InfoCard
                      title="What to bring"
                      body="Comfortable clothes, a notebook, and an open mind. That's enough — we'll guide everything else."
                    />
                  </div>
                </ModuleCard>
              </section>

              {/* After training */}
              <section id="after" aria-labelledby="after-heading" className="mt-10">
                <ModuleCard
                  icon="✅"
                  title="After training — so the practice sticks"
                  description="Most people learn Reiki best by doing it regularly — small sessions done consistently. We'll guide you with a simple plan after L1 so your practice keeps growing."
                  badges={[
                    "Daily self-practice",
                    "21-day routine (optional)",
                    "Grounding habits",
                    "Confidence building",
                  ]}
                  link={{ href: "#inquiry", label: "Join the next L1 batch" }}
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
                      q: "Do I need any experience to join Reiki Level 1?",
                      a: "No experience is needed at all. Reiki Level 1 is designed specifically for complete beginners and focuses on building a strong foundation through self-healing and daily practice.",
                    },
                    {
                      q: "What is included in Reiki Level 1 training?",
                      a: "Level 1 covers what Reiki is, its history and principles, a self-healing routine, hand positions, energy hygiene, grounding, attunement (initiation), and a post-training integration plan.",
                    },
                    {
                      q: "Can I use Reiki Level 1 to help others?",
                      a: "Level 1 is primarily focused on self-healing. You can informally support close family members, but working with others professionally is covered in Level 2.",
                    },
                    {
                      q: "What happens after completing Reiki Level 1?",
                      a: "After L1 you receive a certificate and guidance for a 21-day self-practice routine. If you wish to work professionally with others, you can progress to Reiki Level 2.",
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
                  title="Ready to Start Your Reiki Journey?"
                  description="Message us your preferred dates and your goal — self-healing, stress relief, helping family, or a professional path. We'll share the next batch details."
                  buttons={[
                    { icon: "📩", label: "Contact for L1 Training",  href: "/contact" },
                    { icon: "🎓", label: "Back to Reiki Training",   href: "/training/reiki" },
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