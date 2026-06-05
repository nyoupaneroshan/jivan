import React from "react";
import type { Metadata } from "next";
import { Breadcrumb } from "@/components/jivan/Breadcrumb";
import { PageHero } from "@/components/jivan/PageHero";
import { QuickNavigation } from "@/components/jivan/QuickNavigation";
import { ModuleCard } from "@/components/jivan/ModuleCard";
import { TheoryCards } from "@/components/jivan/yoga/TheoryCards";
import { CTASection } from "@/components/jivan/yoga/CTASection";
import { SidebarWidget } from "@/components/jivan/SidebarWidget";
import { IntroSection } from "@/components/jivan/yoga/IntroSection";
import { generateUpcomingBatches } from "@/utils/batchGenerator";

// ─── SEO Metadata ─────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "500 Hours Advanced Yoga Teacher Training in Kathmandu | Jivan Parivartan",
  description:
    "Deepen your practice with our 500-Hour Advanced Yoga Teacher Training in Kathmandu, Nepal. 12-week immersive program covering Ashtanga, Hatha, Pranayama, Mantra Sadhana, Naturopathy & more. Accommodation and meals included.",
  keywords: [
    "500 hours yoga teacher training Nepal",
    "advanced yoga teacher training Kathmandu",
    "Yoga Alliance 500 hours Nepal",
    "Ashtanga advanced yoga Nepal",
    "Mantra Sadhana yoga Nepal",
    "naturopathy yoga training",
    "Jivan Parivartan 500 hour yoga",
    "yoga retreat Kathmandu 2025",
  ],
  alternates: {
    canonical: "https://jivanparivartan.com/yoga/500-hours-advanced-training",
  },
  openGraph: {
    title: "500 Hours Advanced Yoga Teacher Training | Jivan Parivartan, Kathmandu",
    description:
      "Traditional practice, modern teaching, and deep personal transformation. 12-week advanced training covering Ashtanga, Hatha, 10 Pranayama techniques, Mantra Sadhana & Naturopathy in Kathmandu.",
    url: "https://jivanparivartan.com/yoga/500-hours-advanced-training",
    siteName: "Jivan Parivartan",
    images: [
      {
        url: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1200",
        width: 1200,
        height: 630,
        alt: "500 Hours Advanced Yoga Teacher Training at Jivan Parivartan, Kathmandu",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "500 Hours Advanced Yoga Teacher Training | Jivan Parivartan",
    description:
      "12-week advanced yoga training in Kathmandu. Ashtanga, Hatha, Pranayama, Mantra Sadhana & Naturopathy. Meals & accommodation included.",
    images: ["https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1200"],
  },
};

// ─── JSON-LD Structured Data ──────────────────────────────────────────────────

const courseJsonLd = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "500 Hours Advanced Yoga Teacher Training",
  description:
    "A 12-week advanced Yoga Alliance certified teacher training covering Ashtanga Mahayoga, Hatha Yoga, 10 Pranayama techniques, Mudra Meditation, Mantra Sadhana, and Naturopathy in Kathmandu, Nepal.",
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
  url: "https://jivanparivartan.com/yoga/500-hours-advanced-training",
  image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1200",
  offers: {
    "@type": "Offer",
    price: "2200",
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
    validFrom: new Date().toISOString().split("T")[0],
  },
  hasCourseInstance: {
    "@type": "CourseInstance",
    courseMode: "onsite",
    duration: "P12W",
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
  coursePrerequisites: "Prior yoga experience recommended. Suitable for practitioners looking to deepen their practice.",
  numberOfCredits: 500,
  educationalCredentialAwarded: "Yoga Alliance RYT-500 Certification",
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
      name: "500 Hours Advanced Training",
      item: "https://jivanparivartan.com/yoga/500-hours-advanced-training",
    },
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do I need prior yoga experience for the 500 Hours Training?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, some prior yoga experience is recommended. This is an advanced program designed for practitioners who want to deepen their practice and develop high-level teaching skills.",
      },
    },
    {
      "@type": "Question",
      name: "What makes the 500 Hours different from the 200 Hours training?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The 500 Hours program goes significantly deeper — covering 10 Pranayama techniques, Mantra Sadhana with birth chart analysis, Naturopathy and holistic healing, advanced meditation (Trataka & Yoga Nidra), and the classical Chandra Namaskar. It's a complete advanced certification pathway.",
      },
    },
    {
      "@type": "Question",
      name: "What is included in the 500 Hours course fee?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The fee includes accommodation, vegetarian meals, all study materials, the Mantra and Naturopathy modules, and your Yoga Alliance RYT-500 certification.",
      },
    },
    {
      "@type": "Question",
      name: "How long is the 500 Hours Yoga Teacher Training program?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The program runs for 12 weeks and covers 500 hours of training across Ashtanga, Hatha Yoga, Pranayama, Mudra Meditation, Mantra Sadhana, Naturopathy, and Yoga Theory.",
      },
    },
  ],
};

// ─── Static Data ──────────────────────────────────────────────────────────────

const theoryCards = [
  {
    icon: "📜",
    title: "History of Yoga",
    description:
      "Study yoga's evolution through classical sources, key lineages, and how teachings translated into modern practice.",
    link: { href: "#", label: "Learn more" },
  },
  {
    icon: "🌿",
    title: "Ashtanga Mahayoga",
    description:
      "Explore Patanjali's Yoga Sutras and the eight-limbed path with practical guidance for daily life and teaching.",
    link: { href: "#", label: "Learn more" },
  },
  {
    icon: "🫀",
    title: "Yoga Anatomy & Physiology",
    description:
      "Build advanced understanding of movement, alignment, and body mechanics to teach safely and effectively.",
    link: { href: "#", label: "Learn more" },
  },
];

const modules = [
  {
    id: "surya-chandra",
    icon: "🌓",
    title: "Surya & Chandra Namaskar (Classical)",
    description:
      "Learn the classical sequences and their breath-led rhythm. Study alignment, safe transitions, and how to teach both energizing and cooling variations with confidence.",
    badges: [
      "Surya sequence — 12 postures",
      "Chandra sequence — 14 postures",
      "Breath coordination",
      "Alignment & flow",
      "Energy balance",
    ],
    advanced: true,
    advancedText: "Available in the 500-hour curriculum",
    defaultExpanded: true,
  },
  {
    id: "ashtanga",
    icon: "🌞",
    title: "Ashtanga Mahayoga (Maharshi Patanjali)",
    description:
      "Go deeper into disciplined practice and teaching methodology. Emphasis on sequencing, alignment fundamentals, and the inner aspects of practice that support consistency and focus.",
    badges: [
      "Structured practice",
      "Sequencing principles",
      "Bandha & drishti foundations",
      "Teaching methodology",
    ],
  },
  {
    id: "hatha",
    icon: "🧘",
    title: "Hatha Yoga (Advanced)",
    description:
      "Train in classical Hatha techniques with attention to stability, breath, and precision. Explore stronger postures, intelligent progressions, and therapeutic adaptations.",
    badges: [
      "Advanced asana practice",
      "Strength & stability",
      "Therapeutic applications",
      "Breath & awareness",
    ],
  },
  {
    id: "pranayam",
    icon: "🌬️",
    title: "Pranayama — 10 Techniques",
    description:
      "Study classical pranayama methods with clear safety guidelines and progressive training. Learn how to teach breathwork responsibly and adapt it to different student needs.",
    badges: [
      "10 classical techniques",
      "Safety & contraindications",
      "Progressive training",
      "Nadi purification focus",
    ],
    advanced: true,
    advancedText: "Advanced breathwork training included",
  },
  {
    id: "mudra",
    icon: "🤲",
    title: "Mudra & Meditation",
    description:
      "Learn traditional mudras and how to integrate them into meditation. Focus on steady attention, subtle energy awareness, and practical guidance for teaching.",
    badges: [
      "Traditional mudras",
      "Meditation integration",
      "Chakra awareness",
      "Teaching application",
    ],
  },
  {
    id: "meditation",
    icon: "🧠",
    title: "Advanced Meditation Techniques",
    description:
      "Explore structured meditation practices such as Trataka and Yoga Nidra, with guidance on sequencing, pacing, and how to hold space for students.",
    badges: ["Trataka", "Yoga Nidra", "Chakra focus practices", "Guided teaching skills"],
  },
  {
    id: "mantra",
    icon: "🕉️",
    title: "Mantra Sadhana — Birth Chart Analysis",
    description:
      "Learn a traditional approach to mantra selection using birth chart analysis. This module focuses on disciplined practice, correct approach, and building a sustainable sadhana routine.",
    badges: [
      "Mantra selection approach",
      "Personalised sadhana",
      "Consistency & routine",
      "Traditional framework",
    ],
    advanced: true,
    advancedText: "Specialised module in the 500-hour training",
  },
  {
    id: "naturopathy",
    icon: "🌱",
    title: "Naturopathy & Holistic Healing",
    description:
      "Understand natural wellness systems and how lifestyle supports healing. Explore foundational methods including diet guidance, basic therapies, and sustainable daily habits.",
    badges: [
      "Diet therapy basics",
      "Herbal foundations",
      "Hydro & mud therapy overview",
      "Massage & recovery",
      "Fasting & detox principles",
      "Acupressure basics",
    ],
    advanced: true,
    advancedText: "Holistic wellness module included",
  },
] as const;

// ─── Page Component ───────────────────────────────────────────────────────────

export default function Yoga500HoursPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Yoga", href: "/yoga" },
    { label: "500 Hours Advanced Training" },
  ];

  const heroStats = [
    { number: "150+", label: "Āsanas" },
    { number: "12 Weeks", label: "Duration" },
    { number: "500", label: "Training Hours" },
    { number: "Advanced", label: "Level" },
  ];

  const heroCTAs = [
    { label: "Enroll Now", href: "#enroll", primary: true },
    { label: "View Curriculum", href: "#overview" },
  ];

  const quickNavItems = [
    { id: "overview",      icon: "🗺️", label: "Overview",              href: "#overview" },
    { id: "surya-chandra", icon: "🌓", label: "Surya & Chandra",       href: "#surya-chandra" },
    { id: "ashtanga",      icon: "🌞", label: "Ashtanga",              href: "#ashtanga" },
    { id: "hatha",         icon: "🧘", label: "Hatha Yoga",            href: "#hatha" },
    { id: "pranayam",      icon: "🌬️", label: "Pranayama",             href: "#pranayam" },
    { id: "mudra",         icon: "🤲", label: "Mudra & Meditation",    href: "#mudra" },
    { id: "meditation",    icon: "🧠", label: "Adv. Meditation",       href: "#meditation" },
    { id: "mantra",        icon: "🕉️", label: "Mantra Sadhana",        href: "#mantra" },
    { id: "naturopathy",   icon: "🌱", label: "Naturopathy",           href: "#naturopathy" },
    { id: "theory",        icon: "📖", label: "Theory",                href: "#theory" },
    { id: "enroll",        icon: "✅", label: "Enroll",                href: "#enroll" },
  ];

  const introParagraphs = [
    "The 500 Hours Advanced Yoga Teacher Training is an immersive program for practitioners who want to deepen their personal practice and teach with clarity, confidence, and integrity.",
    "You will study traditional yoga methods alongside modern teaching skills — so you can support students safely, communicate effectively, and guide classes with depth and authenticity.",
  ];

  const ctaButtons = [
    { icon: "📥", label: "Download Brochure", href: "#" },
    { icon: "✍️", label: "Apply Now", href: "#enroll" },
  ];

  const priceInfo = {
    label: "Starting from",
    amount: "$2,200",
    duration: "12 Weeks • All Inclusive",
    includes: [
      "Accommodation included",
      "Vegetarian meals daily",
      "All study materials",
      "Mantra & Naturopathy modules",
      "RYT-500 Certification",
    ],
  };

  const batches = generateUpcomingBatches({
    intervalMonths: 3,
    totalBatches: 3,
    batchDay: 1,
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

      <div className="min-h-screen bg-[#faf6f1] bg-[url('/img/design/color-page.jpg')] bg-repeat bg-center">
        {/* Accessibility skip link */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-white focus:text-green-800 focus:rounded-lg focus:shadow-lg focus:font-semibold focus:text-sm"
        >
          Skip to main content
        </a>

        <Breadcrumb items={breadcrumbItems} />

        <PageHero
          badge={{ icon: "🏅", text: "Advanced Yoga Teacher Training" }}
          title="500 Hours Advanced Yoga Teacher Training"
          subtitle="Traditional practice, modern teaching, and deep personal transformation"
          stats={heroStats}
          ctas={heroCTAs}
          variant="green"
          backgroundImage="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1920"
        />

        <QuickNavigation items={quickNavItems} variant="red" />

        {/* ── Main Layout ──────────────────────────────────────────── */}
        <main
          id="main-content"
          className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16"
        >
          {/* Mobile sidebar — above content on small screens */}
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
                  title="Program Overview"
                  paragraphs={introParagraphs}
                  variant="green"
                />
                <div className="text-center mt-8">
                  <span className="inline-flex items-center gap-2 bg-emerald-900/50 text-emerald-50 px-5 py-2 rounded-full text-sm font-semibold ring-1 ring-emerald-700/40">
                    Advanced certification pathway — Yoga Alliance RYT-500
                  </span>
                </div>
              </section>

              {/* Modules — rendered from data array, no repetition */}
              {modules.map((mod) => (
                <section
                  key={mod.id}
                  id={mod.id}
                  aria-labelledby={`${mod.id}-heading`}
                  className="mt-10"
                >
                  <ModuleCard
                    icon={mod.icon}
                    title={mod.title}
                    description={mod.description}
                    badges={[...mod.badges]}
                    link={{ href: "#", label: "View module details" }}
                    variant="green"
                    advanced={"advanced" in mod ? mod.advanced : undefined}
                    advancedText={"advancedText" in mod ? mod.advancedText : undefined}
                    defaultExpanded={"defaultExpanded" in mod ? mod.defaultExpanded : undefined}
                  />
                </section>
              ))}

              {/* Theory & Philosophy */}
              <section id="theory" aria-labelledby="theory-heading" className="mt-16">
                <div className="text-center mb-10">
                  <h2
                    id="theory-heading"
                    className="text-3xl md:text-4xl font-bold text-white mb-3"
                  >
                    Theory & Philosophy
                  </h2>
                  <p className="text-base md:text-lg text-emerald-100/80 max-w-2xl mx-auto">
                    A clear, structured study of yoga's foundations — so your teaching is
                    informed, safe, and authentic.
                  </p>
                </div>
                <TheoryCards cards={theoryCards} variant="red" />
              </section>

              {/* FAQ — visible on page, mirrors JSON-LD above */}
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
                      q: "Do I need prior yoga experience?",
                      a: "Yes, some prior experience is recommended. This advanced program is designed for practitioners ready to deepen their practice and develop high-level teaching skills.",
                    },
                    {
                      q: "What makes the 500 Hours different from the 200 Hours?",
                      a: "The 500 Hours goes significantly deeper — covering 10 Pranayama techniques, Mantra Sadhana with birth chart analysis, Naturopathy and holistic healing, advanced meditation (Trataka & Yoga Nidra), and classical Chandra Namaskar.",
                    },
                    {
                      q: "What is included in the course fee?",
                      a: "Accommodation, vegetarian meals, all study materials, Mantra and Naturopathy modules, and your Yoga Alliance RYT-500 certification are all included.",
                    },
                    {
                      q: "How long is the program?",
                      a: "The program runs for 12 weeks covering 500 hours across Ashtanga, Hatha Yoga, Pranayama, Mudra, Mantra Sadhana, Naturopathy, and Yoga Theory.",
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
              <section id="enroll" aria-labelledby="enroll-heading" className="mt-10">
                <CTASection
                  title="Enroll in the 500 Hours Advanced Training"
                  description="Choose your upcoming batch and begin a focused, supportive journey of practice and teaching."
                  buttons={ctaButtons}
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