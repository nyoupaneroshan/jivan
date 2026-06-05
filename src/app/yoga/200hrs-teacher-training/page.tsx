import React from "react";
import type { Metadata } from "next";
import { Breadcrumb } from "@/components/jivan/Breadcrumb";
import { PageHero } from "@/components/jivan/PageHero";
import { QuickNavigation } from "@/components/jivan/QuickNavigation";
import { IntroSection } from "@/components/jivan/yoga/IntroSection";
import { ModuleCard } from "@/components/jivan/ModuleCard";
import { TheoryCards } from "@/components/jivan/yoga/TheoryCards";
import { CTASection } from "@/components/jivan/yoga/CTASection";
import { SidebarWidget } from "@/components/jivan/SidebarWidget";
import { generateUpcomingBatches } from "@/utils/batchGenerator";

// ─── SEO Metadata ─────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "200 Hours Yoga Teacher Training in Kathmandu | Jivan Parivartan",
  description:
    "Join our Yoga Alliance certified 200-Hour Yoga Teacher Training in Kathmandu, Nepal. Master Ashtanga, Hatha Yoga, Pranayama, Mudra & Meditation in an 8-week immersive program. Accommodation & meals included.",
  keywords: [
    "200 hours yoga teacher training Nepal",
    "yoga teacher training Kathmandu",
    "Yoga Alliance certified training",
    "Ashtanga yoga Nepal",
    "Hatha yoga teacher training",
    "Pranayama course Nepal",
    "Jivan Parivartan yoga",
  ],
  alternates: {
    canonical: "https://jivanparivartan.com/yoga/200-hours-teacher-training",
  },
  openGraph: {
    title: "200 Hours Yoga Teacher Training | Jivan Parivartan, Kathmandu",
    description:
      "Transform your practice into your profession. Yoga Alliance certified 8-week immersive training covering Ashtanga, Hatha, Pranayama & Meditation in the heart of Kathmandu.",
    url: "https://jivanparivartan.com/yoga/200-hours-teacher-training",
    siteName: "Jivan Parivartan",
    images: [
      {
        url: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1200",
        width: 1200,
        height: 630,
        alt: "200 Hours Yoga Teacher Training at Jivan Parivartan, Kathmandu",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "200 Hours Yoga Teacher Training | Jivan Parivartan",
    description:
      "Yoga Alliance certified 8-week immersive training in Kathmandu. Ashtanga, Hatha, Pranayama, Mudra & Meditation. Meals & accommodation included.",
    images: ["https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1200"],
  },
};

// ─── JSON-LD Structured Data ──────────────────────────────────────────────────

const courseJsonLd = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "200 Hours Yoga Teacher Training",
  description:
    "A comprehensive Yoga Alliance certified 200-hour teacher training program covering Ashtanga Mahayoga, Hatha Yoga, Pranayama, Mudra Meditation, and Yoga Philosophy over 8 weeks in Kathmandu, Nepal.",
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
  url: "https://jivanparivartan.com/yoga/200-hours-teacher-training",
  image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1200",
  offers: {
    "@type": "Offer",
    price: "1200",
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
    validFrom: new Date().toISOString().split("T")[0],
  },
  hasCourseInstance: {
    "@type": "CourseInstance",
    courseMode: "onsite",
    duration: "P8W",
    location: {
      "@type": "Place",
      name: "Jivan Parivartan Yoga Center",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Tarkeshwor-5",
        addressLocality: "Kathmandu",
        addressCountry: "NP",
      },
    },
  },
  coursePrerequisites: "Open to all levels — no prior yoga experience required.",
  numberOfCredits: 200,
  educationalCredentialAwarded: "Yoga Alliance RYT-200 Certification",
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://jivanparivartan.com/" },
    { "@type": "ListItem", position: 2, name: "Yoga", item: "https://jivanparivartan.com/yoga" },
    {
      "@type": "ListItem",
      position: 3,
      name: "200 Hours Teacher Training",
      item: "https://jivanparivartan.com/yoga/200-hours-teacher-training",
    },
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is this course suitable for beginners?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, this 200 Hours Yoga Teacher Training is open to all levels. No prior yoga experience is required to join.",
      },
    },
    {
      "@type": "Question",
      name: "What is included in the course fee?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The course fee includes accommodation, vegetarian meals, study materials, and the Yoga Alliance RYT-200 certification.",
      },
    },
    {
      "@type": "Question",
      name: "How long is the 200 Hours Yoga Teacher Training?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The program is 8 weeks long and covers 200 hours of training including Ashtanga, Hatha Yoga, Pranayama, Mudra Meditation, and Yoga Theory.",
      },
    },
    {
      "@type": "Question",
      name: "Where is the training held?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The training is held at Jivan Parivartan Yoga Center, Tarkeshwor-5, Kathmandu, Nepal.",
      },
    },
  ],
};

// ─── Sequence Data ────────────────────────────────────────────────────────────

const ashtangaSequences = [
  {
    title: "Surya Namaskar A",
    count: "12 Āsanas",
    description: "Traditional sun salutation sequence building heat and energy.",
  },
  {
    title: "Surya Namaskar B",
    count: "20 Āsanas",
    description: "Advanced sun salutation with warrior poses.",
  },
  {
    title: "Standing Sequence",
    count: "20 Postures",
    description: "Grounding postures for strength and stability.",
  },
  {
    title: "Sitting Sequence",
    count: "30 Postures",
    description: "Flexibility-enhancing and hip-opening postures.",
  },
  {
    title: "Closing Sequence",
    count: "10 Āsanas",
    description: "Calming poses to prepare for meditation.",
  },
  {
    title: "Finishing Sequence",
    count: "8 Āsanas",
    description: "Final relaxation and integration poses.",
  },
];

// ─── Page Component ───────────────────────────────────────────────────────────

export default function Yoga200HoursPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Yoga", href: "/yoga" },
    { label: "200 Hours Teacher Training" },
  ];

  const heroStats = [
    { number: "100+", label: "Āsanas" },
    { number: "8 Weeks", label: "Duration" },
    { number: "200", label: "Hours Training" },
    { number: "All Levels", label: "Welcome" },
  ];

  const heroCTAs = [
    { label: "Enroll Now", href: "#enroll", primary: true },
    { label: "View Curriculum", href: "#overview" },
  ];

  const quickNavItems = [
    { id: "overview", icon: "🗺️", label: "Overview", href: "#overview" },
    { id: "ashtanga", icon: "🌞", label: "Ashtanga", href: "#ashtanga" },
    { id: "hatha", icon: "🧘", label: "Hatha Yoga", href: "#hatha" },
    { id: "pranayam", icon: "🌬️", label: "Pranayam", href: "#pranayam" },
    { id: "mudra", icon: "🤲", label: "Mudra", href: "#mudra" },
    { id: "meditation", icon: "🧠", label: "Meditation", href: "#meditation" },
    { id: "theory", icon: "📖", label: "Theory", href: "#theory" },
    { id: "enroll", icon: "✅", label: "Enroll", href: "#enroll" },
  ];

  const introParagraphs = [
    "Our comprehensive 200 Hours Yoga Teacher Training is designed to provide you with a deep understanding of yoga philosophy, practice, and teaching methodology. This immersive program covers traditional Ashtanga Mahayoga, Hatha Yoga, Pranayama, Meditation, and the spiritual aspects of yoga — preparing you to become a confident, knowledgeable, and inspiring yoga teacher.",
  ];

  const theoryCards = [
    {
      icon: "📜",
      title: "History of Yoga",
      description:
        "Explore the ancient origins and evolution of yoga through the ages, from Vedic times to modern practice.",
      link: { href: "#", label: "Read More" },
    },
    {
      icon: "🌿",
      title: "Ashtanga Maha Yoga",
      description:
        "Study the eight-limbed path of Patanjali's Yoga Sutras and its application in daily life and teaching.",
      link: { href: "#", label: "Read More" },
    },
    {
      icon: "🫀",
      title: "Yoga Anatomy",
      description:
        "Understand the physiological and anatomical aspects of yoga with expert guidance from medical professionals.",
      link: { href: "#", label: "Read More" },
    },
  ];

  const ctaButtons = [
    { icon: "📥", label: "Download Brochure", href: "#" },
    { icon: "✍️", label: "Apply Now", href: "#enroll" },
  ];

  const priceInfo = {
    label: "Starting From",
    amount: "$1,200",
    duration: "8 Weeks • All Inclusive",
    includes: [
      "Accommodation Included",
      "Vegetarian Meals Included",
      "Study Materials & Manuals",
      "RYT-200 Certification",
    ],
  };

  const batches = generateUpcomingBatches({
    intervalMonths: 3,
    totalBatches: 3,
    batchDay: 5,
  });

  const contact = {
    phone: ["+977 9818514837", "+977 9863049261"],
    email: "info@jivanparivartan.com",
    address: "Tarkeshwor-5, Kathmandu, Nepal",
  };

  return (
    <>
      {/* ── JSON-LD Structured Data ──────────────────────────────────── */}
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

      {/* ── Page Wrapper ─────────────────────────────────────────────── */}
      <div className="min-h-screen bg-[#faf6f1] bg-[url('/img/design/color-page.jpg')] bg-repeat bg-center">
        {/* Skip to main content — accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-white focus:text-green-800 focus:rounded-lg focus:shadow-lg focus:font-semibold focus:text-sm"
        >
          Skip to main content
        </a>

        <Breadcrumb items={breadcrumbItems} />

        <PageHero
          badge={{ icon: "🏅", text: "Yoga Alliance Certified Program" }}
          title="200 Hours Yoga Teacher Training"
          subtitle="Transform Your Practice Into Your Profession"
          stats={heroStats}
          ctas={heroCTAs}
          variant="green"
          backgroundImage="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1920"
        />

        <QuickNavigation items={quickNavItems} variant="red" />

        {/* ── Main Layout ────────────────────────────────────────────── */}
        <main
          id="main-content"
          className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16"
        >
          {/* Mobile sidebar — shown above content on small screens */}
          <div className="block lg:hidden mb-10">
            <SidebarWidget
              price={priceInfo}
              batches={batches}
              contact={contact}
              showInquiryForm={true}
              variant="forest"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] xl:grid-cols-[1fr_380px] gap-10 xl:gap-14">
            {/* ── Main Content ─────────────────────────────────────── */}
            <div className="min-w-0">

              {/* Overview */}
              <section id="overview" aria-labelledby="overview-heading">
                <IntroSection
                  title="Program Overview"
                  paragraphs={introParagraphs}
                  variant="green"
                />
              </section>

              {/* Module 1: Ashtanga Mahayoga */}
              <section id="ashtanga" aria-labelledby="ashtanga-heading">
                <ModuleCard
                  icon="🌞"
                  title="Ashtanga Mahayoga (Maharshi Patanjali)"
                  description="Our Ashtanga Mahayoga training offers a complete journey through more than 100 traditional Āsanas with proper technique and breath awareness. Each Āsana is taught with correct alignment, drishti, bandhas, and breath control. The training integrates prāṇāyāma, mantra, meditation, and spiritual techniques that purify the mind and awaken inner awareness."
                  badges={[
                    "100+ Traditional Āsanas",
                    "Breath Awareness",
                    "Bandhas & Drishti",
                    "Spiritual Growth",
                  ]}
                  link={{ href: "#", label: "Learn More About This Module" }}
                  defaultExpanded={true}
                  variant="green"
                >
                  {/* Sequence Timeline */}
                  <div className="mt-6 mb-2" role="list" aria-label="Ashtanga sequence breakdown">
                    {ashtangaSequences.map((seq, i) => {
                      const isLast = i === ashtangaSequences.length - 1;
                      return (
                        <div
                          key={seq.title}
                          role="listitem"
                          className={`relative pl-10 ml-3 ${!isLast ? "pb-5 border-l-2 border-green-200" : "pb-0"}`}
                        >
                          {/* Timeline dot */}
                          <div
                            className="absolute left-[-9px] top-1 w-[18px] h-[18px] rounded-full border-[3px] border-white shadow-md"
                            style={{ background: "#166534" }}
                            aria-hidden="true"
                          />

                          <div className="bg-white rounded-xl px-5 py-4 shadow-sm hover:shadow-md transition-shadow duration-200 border border-[#E8F5E9]">
                            <div className="flex flex-wrap items-center gap-2 mb-1">
                              <h4 className="text-[15px] font-semibold text-[#1A1714]">
                                {seq.title}
                              </h4>
                              <span
                                className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full text-white"
                                style={{ background: "#166534" }}
                              >
                                {seq.count}
                              </span>
                            </div>
                            <p className="text-[13px] text-[#6B6560] leading-relaxed">
                              {seq.description}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </ModuleCard>
              </section>

              {/* Module 2: Hatha Yoga */}
              <section id="hatha" aria-labelledby="hatha-heading">
                <ModuleCard
                  icon="🧘"
                  title="Hatha Yoga"
                  description="Our Hatha Yoga program explores 100 classical Āsanas designed to balance strength, flexibility, breath, and inner awareness. The practice is structured to gently open the body — beginning with foundational warm-up postures and gradually moving into standing, sitting, twisting, backbending, forward-bending, inverted, and restorative Āsanas."
                  badges={[
                    "100 Classical Āsanas",
                    "Prāṇāyāma Integration",
                    "Mudras & Bandhas",
                    "Chakra Balancing",
                  ]}
                  link={{ href: "#", label: "Learn More About This Module" }}
                  variant="green"
                />
              </section>

              {/* Module 3: Pranayam */}
              <section id="pranayam" aria-labelledby="pranayam-heading">
                <ModuleCard
                  icon="🌬️"
                  title="Pranayam — Breath Control"
                  description="Pranayama is the yogic science of breath control that harmonizes the body, mind, and spirit. Master powerful techniques that cleanse energy channels, enhance vitality, and awaken spiritual awareness through disciplined breathwork."
                  badges={[
                    "Anulom Vilom",
                    "Bhastrika",
                    "Kapalbhati",
                    "Bhramari",
                    "Ujjayi",
                  ]}
                  link={{ href: "#", label: "Learn More About This Module" }}
                  variant="green"
                />
              </section>

              {/* Module 4: Mudra Meditation */}
              <section id="mudra" aria-labelledby="mudra-heading">
                <ModuleCard
                  icon="🤲"
                  title="Mudra Meditation"
                  description="Our Mudra Meditation course teaches a wide range of traditional mudras that balance energy, calm the mind, and deepen spiritual awareness. Through simple hand gestures combined with guided breathing and meditation, students learn to activate prāṇa, focus the mind, and connect with the subconscious."
                  badges={[
                    "Energy Activation",
                    "Chakra Connection",
                    "Mental Clarity",
                    "Emotional Healing",
                  ]}
                  link={{ href: "#", label: "Learn More About This Module" }}
                  variant="green"
                />
              </section>

              {/* Module 5: Meditation */}
              <section id="meditation" aria-labelledby="meditation-heading">
                <ModuleCard
                  icon="🧠"
                  title="Meditation Techniques"
                  description="Our Meditation Techniques course offers a variety of powerful methods designed to help students reach inner peace and deep mental clarity. Through breath awareness, mantra chanting, mindful silence, visualization, and subconscious-healing practices, participants learn to calm the mind and awaken inner stillness."
                  badges={[
                    "Breath Awareness",
                    "Mantra Chanting",
                    "Visualization",
                    "Mindfulness",
                  ]}
                  link={{ href: "#", label: "Learn More About This Module" }}
                  variant="green"
                />
              </section>

              {/* Theory */}
              <section id="theory" aria-labelledby="theory-heading">
                <TheoryCards cards={theoryCards} variant="red" />
              </section>

              {/* FAQ — visible on page, feeds JSON-LD above */}
              <section
                id="faq"
                aria-labelledby="faq-heading"
                className="mt-10 mb-2"
              >
                <h2
                  id="faq-heading"
                  className="text-[22px] font-bold text-[#1A1714] mb-6"
                >
                  Frequently Asked Questions
                </h2>
                <dl className="space-y-4">
                  {[
                    {
                      q: "Is this course suitable for beginners?",
                      a: "Yes — this training is open to all levels. No prior yoga experience is needed to join and thrive in the program.",
                    },
                    {
                      q: "What is included in the course fee?",
                      a: "Accommodation, vegetarian meals, study materials, and your Yoga Alliance RYT-200 certification are all included in the fee.",
                    },
                    {
                      q: "How long is the program?",
                      a: "The program runs for 8 weeks covering 200 hours of training across Ashtanga, Hatha Yoga, Pranayama, Mudra Meditation, and Yoga Theory.",
                    },
                    {
                      q: "Where is the training held?",
                      a: "Training takes place at Jivan Parivartan Yoga Center, Tarkeshwor-5, Kathmandu, Nepal.",
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
              <section id="enroll" aria-labelledby="enroll-heading">
                <CTASection
                  title="Ready to Begin Your Journey?"
                  description="Join our next batch and transform your life through the ancient science of yoga."
                  buttons={ctaButtons}
                  variant="green"
                  backgroundEmoji="🌿"
                />
              </section>
            </div>

            {/* ── Desktop Sidebar ───────────────────────────────────── */}
            <div className="hidden lg:block">
              <SidebarWidget
                price={priceInfo}
                batches={batches}
                contact={contact}
                showInquiryForm={true}
                variant="forest"
              />
            </div>
          </div>
        </main>
      </div>
    </>
  );
}