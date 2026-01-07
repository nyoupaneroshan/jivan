import React from "react";
import { Breadcrumb } from "@/components/jivan/Breadcrumb";
import { PageHero } from "@/components/jivan/PageHero";
import { QuickNavigation } from "@/components/jivan/QuickNavigation";
import { IntroSection } from "@/components/jivan/yoga/IntroSection";
import { ModuleCard } from "@/components/jivan/ModuleCard";
import { TheoryCards } from "@/components/jivan/yoga/TheoryCards";
import { CTASection } from "@/components/jivan/yoga/CTASection";
import { SidebarWidget } from "@/components/jivan/SidebarWidget";
import { generateUpcomingBatches } from "@/utils/batchGenerator";

export default function SingingBowlPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Healing", href: "/healing" },
    { label: "Singing Bowl Training" },
  ];

  const heroStats = [
    { number: "7 Chakras", label: "Sound Healing" },
    { number: "Multiple", label: "Programs" },
    { number: "Expert", label: "Guidance" },
    { number: "All Levels", label: "Welcome" },
  ];

  const heroCTAs = [
    { label: "Book a Session", href: "#enroll", primary: true },
    { label: "Learn More", href: "#overview" },
  ];

  const quickNavItems = [
    { id: "overview", icon: "📋", label: "Overview", href: "#overview" },
    { id: "healing-therapy", icon: "💆", label: "Healing Therapy", href: "#healing-therapy" },
    { id: "meditation", icon: "🧘", label: "Singing Bowl Meditations", href: "#meditation" },
    { id: "training", icon: "🎓", label: "Training Programs", href: "#training" },
    { id: "energy-healing", icon: "✨", label: "Energy Healing", href: "#energy-healing" },
    { id: "chakra-healing", icon: "🌈", label: "7 Chakra Healing", href: "#chakra-healing" },
    { id: "enroll", icon: "✏️", label: "Book Session", href: "#enroll" },
  ];

  const introParagraphs = [
    "Singing bowls, also known as Himalayan bowls or Tibetan singing bowls, are ancient instruments that produce harmonious sounds and vibrations when played. These sacred instruments have been used for centuries in meditation, healing, and spiritual practices across Nepal, Tibet, and the Himalayas.",
    "The pure tones and vibrations created by singing bowls help calm the mind, balance energy centers (chakras), reduce stress, and promote deep relaxation and healing.",
  ];

  const theoryCards = [
    {
      icon: "📜",
      title: "History of Sound Healing",
      description:
        "Explore the ancient origins of singing bowls and their traditional use for meditation and healing practices.",
      link: { href: "#", label: "Read More" },
    },
    {
      icon: "🔊",
      title: "Science of Vibration",
      description:
        "Understand how frequencies and resonance influence the nervous system, mind, and energetic body.",
      link: { href: "#", label: "Read More" },
    },
    {
      icon: "🌈",
      title: "Chakra System",
      description:
        "Learn how singing bowls can support chakra balancing using vibrational sound therapy.",
      link: { href: "#", label: "Read More" },
    },
  ];

  const ctaButtons = [
    { icon: "📅", label: "Book Healing Session", href: "#" },
    { icon: "🎓", label: "Join Training", href: "#" },
  ];

  // PHP page shows: Starting From 200 / Per Session + list items. [file:1]
  const priceInfo = {
    label: "Starting From",
    amount: "$200",
    duration: "Per Session",
    includes: [
      "Individual Sessions",
      "Group Sessions Available",
      "Package Discounts",
      "Training Programs",
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
    address: "Tarkeshwor-5, Kathmandu",
  };

  return (
    <div className="min-h-screen bg-[#eaf7ee] bg-[url('/img/design/color-page.jpg')] bg-repeat bg-center">
      <Breadcrumb items={breadcrumbItems} />

      <PageHero
        badge={{ icon: "🎵", text: "Ancient Healing Sound Therapy" }}
        title="Singing Bowl Healing & Training"
        subtitle="Experience the Transformative Power of Vibrational Sound Healing"
        stats={heroStats}
        ctas={heroCTAs}
        variant="green"
        backgroundImage="https://images.unsplash.com/photo-1545389336-cf090694435e?w=1920"
      />

      {/* Keep 'red' if QuickNavigation doesn't support green yet */}
      <QuickNavigation items={quickNavItems} variant="red" />

      <div className="max-w-[1400px] mx-auto px-5 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12">
          <div>
            <section id="overview">
              <IntroSection
                title="The Ancient Art of Singing Bowl Healing"
                paragraphs={introParagraphs}
                variant="green"
              />
            </section>

            <section id="healing-therapy">
              <ModuleCard
                icon="💆"
                title="Singing Bowl Healing Therapy"
                description="Experience profound healing through the therapeutic vibrations of authentic Himalayan singing bowls. Our sound therapy sessions use specific frequencies and techniques to release tension, clear energy blockages, and restore balance to your body, mind, and spirit."
                badges={[
                  "Stress Release",
                  "Pain Relief",
                  "Energy Balancing",
                  "Deep Relaxation",
                  "Emotional Healing",
                  "Chakra Alignment",
                ]}
                link={{ href: "#", label: "Learn More About Healing Sessions" }}
                defaultExpanded={true}
                variant="red"
              />
            </section>

            <section id="meditation">
              <ModuleCard
                icon="🧘"
                title="Singing Bowl Meditation"
                description="Immerse yourself in guided meditation sessions enhanced by the sacred sounds of singing bowls. The pure tones and vibrations create a meditative atmosphere that helps you reach deeper states of consciousness, inner peace, and spiritual connection."
                badges={[
                  "Guided Meditation",
                  "Deep Relaxation",
                  "Mindfulness Practice",
                  "Spiritual Connection",
                ]}
                link={{ href: "#", label: "Learn More About Meditation" }}
                variant="red"
              />
            </section>

            <section id="training">
              <ModuleCard
                icon="🎓"
                title="Singing Bowl Training Programs"
                description="Learn the ancient art of singing bowl therapy and become a certified practitioner. Our comprehensive training programs teach you the traditional techniques, healing principles, and practical applications of singing bowl therapy. We offer two levels of certification."
                badges={[
                  "Basic Training (12 Hours)",
                  "Advanced Training (35 Hours)",
                  "Certification",
                  "Professional Practice",
                ]}
                link={{ href: "#", label: "View Training Programs" }}
                variant="red"
              >
                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white/80 backdrop-blur rounded-xl p-6 border border-green-100 shadow-sm">
                    <h4 className="text-lg font-bold text-green-900 mb-2">
                      Basic Training
                    </h4>
                    <div className="text-2xl font-extrabold text-green-700 mb-3">
                      12 Hours
                    </div>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>Introduction to Singing Bowls</li>
                      <li>Basic Playing Techniques</li>
                      <li>Sound Vibration Principles</li>
                      <li>Simple Healing Methods</li>
                      <li>Self-Practice Techniques</li>
                      <li>Basic Certification</li>
                    </ul>
                  </div>

                  <div className="bg-white/80 backdrop-blur rounded-xl p-6 border border-green-100 shadow-sm">
                    <h4 className="text-lg font-bold text-green-900 mb-2">
                      Advanced Training
                    </h4>
                    <div className="text-2xl font-extrabold text-green-700 mb-3">
                      35 Hours
                    </div>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>Advanced Playing Techniques</li>
                      <li>Chakra Healing Methods</li>
                      <li>Group Sound Bath Sessions</li>
                      <li>Therapeutic Applications</li>
                      <li>Professional Practice Setup</li>
                      <li>Advanced Certification</li>
                    </ul>
                  </div>
                </div>
              </ModuleCard>
            </section>

            <section id="energy-healing">
              <ModuleCard
                icon="✨"
                title="Energy Healing with Maa Nisha Kabir"
                description="Experience profound energy healing sessions guided by Maa Nisha Kabir. These sessions combine singing bowl therapy with Reiki, chakra balancing, aura cleansing, and spiritual guidance."
                badges={[
                  "Reiki Integration",
                  "Aura Cleansing",
                  "Karmic Healing",
                  "Spiritual Guidance",
                  "Energy Balancing",
                  "Personal Transformation",
                ]}
                link={{ href: "#", label: "Learn More About Energy Healing" }}
                variant="red"
              />
            </section>

            <section id="chakra-healing">
              <ModuleCard
                icon="🌈"
                title="7 Chakra Healing with Singing Bowl"
                description="A specialized healing session focused on balancing and activating all seven major chakras using precisely tuned singing bowls to clear blockages and restore energy flow."
                badges={[
                  "Root Chakra (Muladhara)",
                  "Sacral Chakra (Svadhisthana)",
                  "Solar Plexus (Manipura)",
                  "Heart Chakra (Anahata)",
                  "Throat Chakra (Vishuddha)",
                  "Third Eye (Ajna)",
                  "Crown (Sahasrara)",
                  "Complete Energy Alignment",
                ]}
                link={{ href: "#", label: "Learn More About Chakra Healing" }}
                variant="red"
              />
            </section>

            <section id="theory">
              <TheoryCards cards={theoryCards} variant="red" />
            </section>

            <section id="enroll">
              <CTASection
                title="Ready to Experience Sound Healing?"
                description="Book your healing session or training program today and begin your journey to wellness."
                buttons={ctaButtons}
                variant="green"
                backgroundEmoji="🎵"
              />
            </section>
          </div>

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
