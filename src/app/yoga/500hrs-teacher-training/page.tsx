import React from "react";
import { Breadcrumb } from "@/components/jivan/Breadcrumb";
import { PageHero } from "@/components/jivan/PageHero";
import { QuickNavigation } from "@/components/jivan/QuickNavigation";
import { ModuleCard } from "@/components/jivan/ModuleCard";
import { TheoryCards } from "@/components/jivan/yoga/TheoryCards";
import { CTASection } from "@/components/jivan/yoga/CTASection";
import { SidebarWidget } from "@/components/jivan/SidebarWidget";
import { IntroSection } from "@/components/jivan/yoga/IntroSection";
import { generateUpcomingBatches } from "@/utils/batchGenerator";

export default function Yoga500HoursPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Yoga", href: "/yoga" },
    { label: "500 Hours Advanced Training" },
  ];

  const heroStats = [
    { number: "150+", label: "Asanas" },
    { number: "12 Weeks", label: "Duration" },
    { number: "500", label: "Training Hours" },
    { number: "Advanced", label: "Level" },
  ];

  const heroCTAs = [
    { label: "Enroll Now", href: "#enroll", primary: true },
    { label: "View Curriculum", href: "#overview" },
  ];

  // Removed emoji icons to keep navigation clean and premium.
  const quickNavItems = [
  { id: "overview", icon: "•", label: "Overview", href: "#overview" },
  { id: "surya-chandra", icon: "•", label: "Surya & Chandra Namaskar", href: "#surya-chandra" },
  { id: "ashtanga", icon: "•", label: "Ashtanga Mahayoga", href: "#ashtanga" },
  { id: "hatha", icon: "•", label: "Hatha Yoga", href: "#hatha" },
  { id: "pranayam", icon: "•", label: "Pranayama (10 techniques)", href: "#pranayam" },
  { id: "mudra", icon: "•", label: "Mudra & Meditation", href: "#mudra" },
  { id: "meditation", icon: "•", label: "Advanced Meditation", href: "#meditation" },
  { id: "mantra", icon: "•", label: "Mantra Sadhana", href: "#mantra" },
  { id: "naturopathy", icon: "•", label: "Naturopathy", href: "#naturopathy" },
  { id: "theory", icon: "•", label: "Theory", href: "#theory" },
  { id: "enroll", icon: "•", label: "Enroll", href: "#enroll" },
];


  // More natural, grounded copy aligned with your “sanctuary / healing journey” tone.
  const introParagraphs = [
    "The 500 Hours Advanced Yoga Teacher Training is an immersive program for practitioners who want to deepen their personal practice and teach with clarity, confidence, and integrity.",
    "You will study traditional yoga methods alongside modern teaching skills—so you can support students safely, communicate effectively, and guide classes with depth and authenticity.",
  ];

  // Removed emojis from card icons for a more professional look.
  // If your components require an icon string, keep it neutral (e.g., "•" or "—").
  const theoryCards = [
    {
      icon: "—",
      title: "History of Yoga",
      description:
        "Study yoga’s evolution through classical sources, key lineages, and how teachings translated into modern practice.",
      link: { href: "#", label: "Learn more" },
    },
    {
      icon: "—",
      title: "Ashtanga Mahayoga",
      description:
        "Explore Patanjali’s Yoga Sutras and the eight-limbed path with practical guidance for daily life and teaching.",
      link: { href: "#", label: "Learn more" },
    },
    {
      icon: "—",
      title: "Yoga Anatomy & Physiology",
      description:
        "Build advanced understanding of movement, alignment, and body mechanics to teach safely and effectively.",
      link: { href: "#", label: "Learn more" },
    },
  ];

  const ctaButtons = [
    { icon: "", label: "Download Brochure", href: "#" },
    { icon: "", label: "Apply Now", href: "#" },
  ];

  const priceInfo = {
    label: "Starting from",
    amount: "$2,200",
    duration: "12-week program",
    includes: [
      "Accommodation included",
      "Vegetarian meals",
      "All study materials",
      "Advanced certification",
      "Mantra and naturopathy modules",
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
    address: "Tarkeshwor-5, Kathmandu",
  };

  return (
    // Main background now uses “green” theme instead of beige/texture wallpaper.
    <div className="min-h-screen bg-[#faf6f1] bg-[url('/img/design/color-page.jpg')] bg-repeat bg-center">
      <Breadcrumb items={breadcrumbItems} />

      <PageHero
        badge={{ icon: "", text: "Advanced Yoga Teacher Training" }}
        title="500 Hours Advanced Yoga Teacher Training"
        subtitle="Traditional practice, modern teaching, and deep personal transformation"
        stats={heroStats}
        ctas={heroCTAs}
        variant="green"
        backgroundImage="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1920"
      />

      {/* Use green variant (instead of dark-red) for consistency */}
      <QuickNavigation items={quickNavItems} variant="red" />

      <div className="max-w-[1400px] mx-auto px-5 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12">
          {/* Main Content */}
          <div>
            <section id="overview">
              <IntroSection title="Program Overview" paragraphs={introParagraphs} variant="green" />

              {/* Professional callout (no emoji, no loud gradient) */}
              <div className="text-center mt-8">
                <span className="inline-flex items-center gap-2 bg-emerald-900/50 text-emerald-50 px-5 py-2 rounded-full text-sm font-semibold ring-1 ring-emerald-700/40">
                  Advanced certification pathway
                </span>
              </div>
            </section>

            <section id="surya-chandra" className="mt-16">
              <ModuleCard
                icon=""
                title="Surya & Chandra Namaskar (Classical)"
                description="Learn the classical sequences and their breath-led rhythm. You’ll study alignment, safe transitions, and how to teach both energizing and cooling variations with confidence."
                badges={[
                  "Surya sequence (12 postures)",
                  "Chandra sequence (14 postures)",
                  "Breath coordination",
                  "Alignment and flow",
                  "Energy balance",
                ]}
                link={{ href: "#", label: "View module details" }}
                advanced
                advancedText="Available in the 500-hour curriculum"
                defaultExpanded
                variant="green"
              />
            </section>

            <section id="ashtanga">
              <ModuleCard
                icon=""
                title="Ashtanga Mahayoga (Maharshi Patanjali)"
                description="Go deeper into disciplined practice and teaching methodology. Emphasis is placed on sequencing, alignment fundamentals, and the inner aspects of practice that support consistency and focus."
                badges={[
                  "Structured practice",
                  "Sequencing principles",
                  "Bandha and drishti foundations",
                  "Teaching methodology",
                ]}
                link={{ href: "#", label: "View module details" }}
                variant="green"
              />
            </section>

            <section id="hatha">
              <ModuleCard
                icon=""
                title="Hatha Yoga (Advanced)"
                description="Train in classical Hatha techniques with attention to stability, breath, and precision. You’ll explore stronger postures, intelligent progressions, and therapeutic adaptations."
                badges={[
                  "Advanced asana practice",
                  "Strength and stability",
                  "Therapeutic applications",
                  "Breath and awareness",
                ]}
                link={{ href: "#", label: "View module details" }}
                variant="green"
              />
            </section>

            <section id="pranayam">
              <ModuleCard
                icon=""
                title="Pranayama (10 techniques)"
                description="Study classical pranayama methods with clear safety guidelines and progressive training. You’ll learn how to teach breathwork responsibly and adapt it to different student needs."
                badges={[
                  "10 classical techniques",
                  "Safety and contraindications",
                  "Progressive training",
                  "Nadi purification focus",
                ]}
                link={{ href: "#", label: "View module details" }}
                advanced
                advancedText="Advanced breathwork training included"
                variant="green"
              />
            </section>

            <section id="mudra">
              <ModuleCard
                icon=""
                title="Mudra & Meditation"
                description="Learn traditional mudras and how to integrate them into meditation. The focus is on steady attention, subtle energy awareness, and practical guidance for teaching."
                badges={[
                  "Traditional mudras",
                  "Meditation integration",
                  "Chakra awareness",
                  "Teaching application",
                ]}
                link={{ href: "#", label: "View module details" }}
                variant="green"
              />
            </section>

            <section id="meditation">
              <ModuleCard
                icon=""
                title="Advanced Meditation Techniques"
                description="Explore structured meditation practices such as Trataka and Yoga Nidra, with guidance on sequencing, pacing, and how to hold space for students."
                badges={[
                  "Trataka",
                  "Yoga Nidra",
                  "Chakra focus practices",
                  "Guided teaching skills",
                ]}
                link={{ href: "#", label: "View module details" }}
                variant="green"
              />
            </section>

            <section id="mantra">
              <ModuleCard
                icon=""
                title="Mantra Sadhana (Birth Chart Analysis)"
                description="Learn a traditional approach to mantra selection using birth chart analysis. This module focuses on disciplined practice, correct approach, and how to build a sustainable sadhana routine."
                badges={[
                  "Mantra selection approach",
                  "Personalized sadhana",
                  "Consistency and routine",
                  "Traditional framework",
                ]}
                link={{ href: "#", label: "View module details" }}
                advanced
                advancedText="Specialized module in the 500-hour training"
                variant="green"
              />
            </section>

            <section id="naturopathy">
              <ModuleCard
                icon=""
                title="Naturopathy & Holistic Healing"
                description="Understand natural wellness systems and how lifestyle supports healing. You’ll explore foundational methods such as diet guidance, basic therapies, and sustainable daily habits."
                badges={[
                  "Diet therapy basics",
                  "Herbal foundations",
                  "Hydro and mud therapy overview",
                  "Massage and recovery",
                  "Fasting and detox principles",
                  "Acupressure basics",
                ]}
                link={{ href: "#", label: "View module details" }}
                advanced
                advancedText="Holistic wellness module included"
                variant="green"
              />
            </section>

            <section id="theory" className="mt-16">
              <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
                  Theory & Philosophy
                </h2>
                <p className="text-base md:text-lg text-emerald-100/80">
                  A clear, structured study of yoga’s foundations—so your teaching is informed, safe, and authentic.
                </p>
              </div>

              <TheoryCards cards={theoryCards} variant="red" />
            </section>

            <section id="enroll" className="mt-16">
              <CTASection
                title="Enroll in the 500 Hours Advanced Training"
                description="Choose your upcoming batch and begin a focused, supportive journey of practice and teaching."
                buttons={ctaButtons}
                variant="green"
                backgroundEmoji="" // Removed emoji for a more professional CTA.
              />
            </section>
          </div>

          {/* Sidebar */}
          <div>
            <SidebarWidget
              price={priceInfo}
              batches={batches}
              contact={contact}
              showInquiryForm
              variant="green"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
