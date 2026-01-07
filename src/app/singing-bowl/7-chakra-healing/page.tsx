import React from "react";
import { Breadcrumb } from "@/components/jivan/Breadcrumb";
import { PageHero } from "@/components/jivan/PageHero";
import { QuickNavigation } from "@/components/jivan/QuickNavigation";
import { CTASection } from "@/components/jivan/yoga/CTASection";
import { SidebarWidget } from "@/components/jivan/SidebarWidget";
import { generateUpcomingBatches } from "@/utils/batchGenerator";

type ChakraItem = {
  number: number;
  title: string;
  subtitle?: string;
  description: string;
  colorLabel: string;
  elementLabel: string;
  focusAreas: string[];
};

type BenefitCard = {
  icon: string;
  title: string;
  description: string;
};

export default function SevenChakraHealingPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Singing Bowl", href: "/singing-bowl" },
    { label: "7 Chakra Healing" },
  ];

  // PHP: overview, chakras, benefits, book [file:7]
  const quickNavItems = [
    { id: "overview", icon: "📋", label: "Overview", href: "#overview" },
    { id: "chakras", icon: "🌈", label: "7 Chakras", href: "#chakras" },
    { id: "benefits", icon: "✨", label: "Benefits", href: "#benefits" },
    { id: "book", icon: "📅", label: "Book Session", href: "#book" },
  ];

  // PHP hero title/subtitle [file:7]
  const heroStats = [
    { number: "7 Chakras", label: "Balanced" },
    { number: "Sound", label: "Frequencies" },
    { number: "Deep", label: "Relaxation" },
    { number: "All Levels", label: "Welcome" },
  ];

  const heroCTAs = [
    { label: "Book Session", href: "#book", primary: true },
    { label: "View Chakras", href: "#chakras" },
  ];

  // PHP overview section header is “Healing Through Sacred Sound” [file:7]
  const overviewTitle = "Healing Through Sacred Sound";
  const overviewParagraphs = [
    "7 Chakra Healing with Singing Bowl is a specialized sound therapy session focused on balancing and activating all seven major chakras (energy centers) using precisely tuned Himalayan singing bowls.",
    "Each chakra corresponds to specific vibration patterns and qualities; the resonant tones help clear energetic blockages, support emotional release, and restore a natural flow of vitality through the whole system.",
  ];

  // PHP shows chakra list as numbered items 1–7 (h3 labels) [file:7]
  const chakras: ChakraItem[] = [
    {
      number: 1,
      title: "Root Chakra (Muladhara)",
      description:
        "Grounding and stability. Supports a sense of safety, strength, and connection to the earth.",
      colorLabel: "Red",
      elementLabel: "Earth",
      focusAreas: ["Security", "Stability", "Grounding", "Survival energy"],
    },
    {
      number: 2,
      title: "Sacral Chakra (Svadhisthana)",
      description:
        "Emotions and creativity. Helps flow, pleasure, and healthy emotional expression.",
      colorLabel: "Orange",
      elementLabel: "Water",
      focusAreas: ["Creativity", "Emotional flow", "Sensuality", "Joy"],
    },
    {
      number: 3,
      title: "Solar Plexus Chakra (Manipura)",
      description:
        "Personal power and confidence. Supports motivation, willpower, and self-esteem.",
      colorLabel: "Yellow",
      elementLabel: "Fire",
      focusAreas: ["Confidence", "Willpower", "Self-esteem", "Inner strength"],
    },
    {
      number: 4,
      title: "Heart Chakra (Anahata)",
      description:
        "Love and compassion. Supports openness, connection, and emotional healing.",
      colorLabel: "Green",
      elementLabel: "Air",
      focusAreas: ["Compassion", "Forgiveness", "Connection", "Emotional healing"],
    },
    {
      number: 5,
      title: "Throat Chakra (Vishuddha)",
      description:
        "Communication and truth. Supports clear expression and authentic voice.",
      colorLabel: "Blue",
      elementLabel: "Ether",
      focusAreas: ["Communication", "Truth", "Expression", "Listening"],
    },
    {
      number: 6,
      title: "Third Eye Chakra (Ajna)",
      description:
        "Intuition and insight. Supports clarity, awareness, and inner guidance.",
      colorLabel: "Indigo",
      elementLabel: "Light",
      focusAreas: ["Intuition", "Awareness", "Insight", "Mental clarity"],
    },
    {
      number: 7,
      title: "Crown Chakra (Sahasrara)",
      description:
        "Spiritual connection. Supports transcendence, peace, and higher consciousness.",
      colorLabel: "Violet/White",
      elementLabel: "Cosmic",
      focusAreas: ["Spirituality", "Inner peace", "Connection", "Consciousness"],
    },
  ];

  // PHP benefits section heading exists; exact card copy is styled similarly to your other pages [file:7]
  const benefits: BenefitCard[] = [
    {
      icon: "🌈",
      title: "Complete Chakra Alignment",
      description:
        "Support balanced energy flow across all seven centers for holistic wellbeing.",
    },
    {
      icon: "😌",
      title: "Deep Relaxation",
      description:
        "Calm the nervous system and release tension through resonant sound immersion.",
    },
    {
      icon: "❤️",
      title: "Emotional Release",
      description:
        "Encourage gentle processing of emotions and clearing of energetic blockages.",
    },
    {
      icon: "🧠",
      title: "Mental Clarity",
      description:
        "Support focus and inner stillness by reducing mental noise and overthinking.",
    },
    {
      icon: "✨",
      title: "Spiritual Connection",
      description:
        "Deepen meditation and connect with higher awareness through sacred frequencies.",
    },
    {
      icon: "⚡",
      title: "Renewed Vitality",
      description:
        "Restore natural vitality and flow by harmonizing the body’s subtle energy system.",
    },
  ];

  const ctaButtons = [
    { icon: "📅", label: "Book Chakra Healing", href: "#" },
    { icon: "💬", label: "Ask a Question", href: "#" },
  ];

   
  const priceInfo = {
    label: "Starting From",
    amount: "$300",
    duration: "Per Session",
    includes: ["Full 7 Chakra Balancing", "Sound Bath Therapy", "Grounding & Integration", "Guided Support"],
  };

  const batches = generateUpcomingBatches({
    intervalMonths: 2,
    totalBatches: 3,
    batchDay: 15,
  });

  const contact = {
    phone: ["+977 9818514837", "+977 9863049261"],
    email: "info@jivanparivartan.com",
    address: "Tarkeshwor-5, Kathmandu",
  };

  return (
    <div className="min-h-screen bg-[#eaf7ee] bg-[url('/img/design/color-page.jpg')] bg-repeat bg-center">
      <Breadcrumb items={breadcrumbItems} />

      <PageHero
        badge={{ icon: "🌈", text: "Chakra Sound Healing" }}
        title="7 Chakra Healing"
        subtitle="Balance Your Energy Centers Through Sacred Sound Frequencies"
        stats={heroStats}
        ctas={heroCTAs}
        variant="green"
        backgroundImage="https://images.unsplash.com/photo-1529693662653-9d480530a697?w=1920"
      />

      {/* Keep red until QuickNavigation supports green without crashing */}
      <QuickNavigation items={quickNavItems} variant="red" />

      <div className="max-w-[1400px] mx-auto px-5 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12">
          {/* Main */}
          <div>
            {/* Overview */}
            <section
              id="overview"
              className="bg-gradient-to-br from-white to-green-50 p-10 md:p-8 sm:p-6 rounded-2xl shadow-lg border-t-4 border-green-600"
            >
              <h2 className="text-3xl md:text-2xl font-extrabold text-gray-900 mb-6">
                {overviewTitle}
              </h2>

              <div className="space-y-5 text-gray-700 leading-relaxed text-[17px] md:text-[15px]">
                {overviewParagraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
            </section>

            {/* Chakras */}
            <section id="chakras" className="mt-14">
              <div className="text-center mb-10">
                <h2 className="text-4xl md:text-3xl font-extrabold text-gray-900">
                  The Seven Energy Centers
                </h2>
                <p className="mt-3 text-gray-600 text-lg md:text-base">
                  Explore each chakra and how sound frequencies support balance
                </p>
              </div>

              <div className="space-y-7">
                {chakras.map((c) => (
                  <div
                    key={c.number}
                    className="bg-white rounded-2xl p-10 md:p-8 sm:p-6 shadow-lg border-l-[6px] border-green-600 relative overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 w-28 h-28 bg-gradient-to-br from-green-50 to-transparent rounded-bl-full opacity-70" />

                    <div className="flex items-start justify-between gap-6 flex-wrap relative z-[1]">
                      <div className="flex items-center gap-5">
                        <div className="w-16 h-16 md:w-14 md:h-14 rounded-2xl bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center text-2xl text-white shadow-md font-extrabold">
                          {c.number}
                        </div>

                        <div>
                          <h3 className="text-2xl md:text-xl font-extrabold text-gray-900">
                            {c.number}. {c.title}
                          </h3>

                          <div className="mt-2 flex flex-wrap gap-2">
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold text-green-800 bg-gradient-to-br from-green-50 to-white border border-green-200">
                              Color: {c.colorLabel}
                            </span>
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold text-green-800 bg-gradient-to-br from-green-50 to-white border border-green-200">
                              Element: {c.elementLabel}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <p className="mt-6 text-gray-700 leading-relaxed text-[16px] md:text-[15px] relative z-[1]">
                      {c.description}
                    </p>

                    <div className="mt-7 grid grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-4 relative z-[1]">
                      {c.focusAreas.map((f) => (
                        <div
                          key={f}
                          className="text-center px-4 py-3 rounded-xl font-semibold text-green-800 bg-gradient-to-br from-green-50 to-white border border-green-100"
                        >
                          {f}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Benefits */}
            <section id="benefits" className="mt-14">
              <div className="text-center mb-10">
                <h2 className="text-4xl md:text-3xl font-extrabold text-gray-900">
                  Benefits of 7 Chakra Sound Healing
                </h2>
                <p className="mt-3 text-gray-600 text-lg md:text-base">
                  Experience balance across mind, body, and spirit
                </p>
              </div>

              <div className="grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-7">
                {benefits.map((b) => (
                  <div
                    key={b.title}
                    className="bg-white rounded-2xl p-10 md:p-8 sm:p-6 text-center shadow-md hover:shadow-xl transition-all border-t-[3px] border-green-600"
                  >
                    <div className="text-5xl mb-5">{b.icon}</div>
                    <h3 className="text-xl font-extrabold text-gray-900 mb-3">
                      {b.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-[15px]">
                      {b.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* CTA / Book */}
            <section id="book" className="mt-14">
              <CTASection
                title="Experience Chakra Balancing"
                description="Book your 7 Chakra Healing session and restore harmony through sacred sound."
                buttons={ctaButtons}
                variant="green"
                backgroundEmoji="🌈"
              />
            </section>
          </div>

          {/* Sidebar */}
          <div>
            <SidebarWidget
              price={priceInfo}
              batches={batches}
              contact={contact}
              showInquiryForm={true}
              variant="red"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
