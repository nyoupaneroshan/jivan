import React from "react";
import { Breadcrumb } from "@/components/jivan/Breadcrumb";
import { PageHero } from "@/components/jivan/PageHero";
import { QuickNavigation } from "@/components/jivan/QuickNavigation";
import { CTASection } from "@/components/jivan/yoga/CTASection";
import { SidebarWidget } from "@/components/jivan/SidebarWidget";
import { generateUpcomingBatches } from "@/utils/batchGenerator";

type BenefitCard = {
  icon: string;
  title: string;
  description: string;
};

type SessionType = {
  icon: string;
  title: string;
  duration: string;
  description: string;
  features: string[];
};

type ProcessStep = {
  number: number;
  title: string;
  description: string;
};

export default function SingingBowlHealingPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Singing Bowl", href: "/singing-bowl" },
    { label: "Healing & Therapy" },
  ];

  const quickNavItems = [
    { id: "overview", icon: "📋", label: "Overview", href: "#overview" },
    { id: "benefits", icon: "✨", label: "Benefits", href: "#benefits" },
    { id: "sessions", icon: "💆", label: "Session Types", href: "#sessions" },
    { id: "process", icon: "🔄", label: "Healing Process", href: "#process" },
    { id: "book-now", icon: "📅", label: "Book Now", href: "#book-now" },
  ];

  const heroStats = [
    { number: "60–90 Min", label: "Session" },
    { number: "Therapeutic", label: "Sound" },
    { number: "Energy", label: "Balancing" },
    { number: "All Levels", label: "Welcome" },
  ];

  const heroCTAs = [
    { label: "Book Now", href: "#book-now", primary: true },
    { label: "View Benefits", href: "#benefits" },
  ];

  const overviewTitle = "What is Singing Bowl Healing?";
  const overviewParagraphs = [
    "Singing Bowl Healing is an ancient therapeutic practice that uses the harmonic vibrations and resonant sounds of Himalayan singing bowls to promote physical, emotional, mental, and spiritual healing. When the bowls are played with intention and technique, they produce pure tones that create specific frequencies proven to induce deep relaxation, reduce stress, and restore balance to the body's energy systems.",
    "The vibrations penetrate deep into the body's tissues, cells, and organs, helping to release tension, clear energy blockages, and stimulate the body's natural healing mechanisms. Each singing bowl is carefully selected and tuned to work with specific chakras, organs, and conditions, making each healing session a personalized therapeutic experience.",
  ];

  // From PHP benefits section [file:2]
  const benefits: BenefitCard[] = [
    {
      icon: "😌",
      title: "Stress & Anxiety Relief",
      description:
        "Deep relaxation that calms the nervous system, reduces cortisol levels, and alleviates chronic stress and anxiety.",
    },
    {
      icon: "❤️",
      title: "Emotional Healing",
      description:
        "Release trapped emotions, heal emotional wounds, and restore inner peace and emotional balance.",
    },
    {
      icon: "🧠",
      title: "Mental Clarity",
      description:
        "Clear mental fog, improve focus and concentration, and enhance cognitive function and memory.",
    },
    {
      icon: "💊",
      title: "Pain Management",
      description:
        "Natural pain relief for chronic conditions, muscle tension, headaches, and physical discomfort.",
    },
    {
      icon: "⚡",
      title: "Energy Balance",
      description:
        "Clear chakra blockages, restore energy flow, and harmonize the body's subtle energy systems.",
    },
    {
      icon: "✨",
      title: "Spiritual Growth",
      description:
        "Deepen meditation practice, enhance spiritual awareness, and facilitate inner transformation.",
    },
  ];

  // From PHP session types section [file:2]
  const sessionTypes: SessionType[] = [
    {
      icon: "💆",
      title: "Individual Healing Session",
      duration: "60 Minutes",
      description:
        "A personalized one-on-one healing session where the practitioner works directly with you, assessing your specific needs and conditions. The bowls are played around and on your body while you lie comfortably in a meditative state. This intimate session allows for deep, focused healing tailored to your unique energy patterns and health concerns.",
      features: [
        "Personal Assessment",
        "Customized Treatment",
        "One-on-One Attention",
        "Deep Healing",
      ],
    },
    {
      icon: "🛁",
      title: "Group Sound Bath",
      duration: "75 Minutes",
      description:
        "Experience the powerful healing energy of singing bowls in a group setting. Participants lie in a circle while the practitioner moves through the space, creating waves of healing sound that wash over everyone. The collective energy amplifies the healing effects, creating a deeply meditative and transformative experience. Perfect for community healing and shared consciousness exploration.",
      features: ["Collective Energy", "Community Healing", "Multiple Bowls", "Extended Session"],
    },
    {
      icon: "🎯",
      title: "Targeted Therapy Session",
      duration: "45 Minutes",
      description:
        "Focused healing sessions designed to address specific physical conditions, pain points, or energy blockages. Using specially tuned bowls and advanced techniques, the practitioner concentrates on particular areas of concern such as chronic pain, injury recovery, or specific chakra imbalances. Ideal for those seeking relief from specific ailments or conditions.",
      features: [
        "Condition-Specific",
        "Pain Relief Focus",
        "Therapeutic Approach",
        "Intensive Treatment",
      ],
    },
    {
      icon: "📦",
      title: "Healing Package",
      duration: "Series of 5 Sessions",
      description:
        "A comprehensive healing journey consisting of five progressive sessions scheduled over several weeks. Each session builds upon the previous one, allowing for deeper healing, sustained transformation, and lasting results. Perfect for addressing chronic conditions, deep emotional healing, or significant life transitions. Includes personalized guidance and homework practices between sessions.",
      features: ["Progressive Healing", "Sustained Results", "Discounted Rate", "Ongoing Support"],
    },
  ];

  // From PHP process section (4 steps) [file:2]
  const processSteps: ProcessStep[] = [
    {
      number: 1,
      title: "Consultation",
      description: "Brief discussion about your health, concerns, and healing intentions.",
    },
    {
      number: 2,
      title: "Relaxation",
      description: "Comfortable positioning with cushions and blankets for deep relaxation.",
    },
    {
      number: 3,
      title: "Healing",
      description: "Therapeutic sound bath with bowls played around and on your body.",
    },
    {
      number: 4,
      title: "Integration",
      description: "Gentle return to awareness with time to integrate the healing experience.",
    },
  ];

  const ctaButtons = [
    { icon: "📅", label: "Book Individual Session", href: "#" },
    { icon: "👥", label: "Join Group Session", href: "#" },
  ];

  
  const priceInfo = {
    label: "Individual Session",
    amount: "$500",
    duration: "60 Minutes",
    includes: [
      "Group Session $150",
      "Targeted Therapy $200",
      "5-Session Package $1,000",
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
        badge={{ icon: "💜", text: "Therapeutic Sound Healing" }}
        title="Singing Bowl Healing & Therapy"
        subtitle="Experience Deep Healing Through Ancient Vibrational Sound"
        stats={heroStats}
        ctas={heroCTAs}
        variant="green"
        backgroundImage="https://images.unsplash.com/photo-1545389336-cf090694435e?w=1920"
      />

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

            {/* Benefits Grid */}
            <section id="benefits" className="mt-14">
              <div className="text-center mb-10">
                <h2 className="text-4xl md:text-3xl font-extrabold text-gray-900">
                  Healing Benefits
                </h2>
                <p className="mt-3 text-gray-600 text-lg md:text-base">
                  Experience comprehensive healing on all levels of your being
                </p>
              </div>

              <div className="grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-7">
                {benefits.map((b) => (
                  <div
                    key={b.title}
                    className="bg-white rounded-2xl p-10 md:p-8 sm:p-6 text-center shadow-md hover:shadow-xl transition-all border-t-[3px] border-green-600"
                  >
                    <div className="text-5xl mb-5">{b.icon}</div>
                    <h3 className="text-xl font-extrabold text-gray-900 mb-3">{b.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-[15px]">{b.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Session Types */}
            <section id="sessions" className="mt-14">
              <div className="text-center mb-10">
                <h2 className="text-4xl md:text-3xl font-extrabold text-gray-900">
                  Healing Session Options
                </h2>
                <p className="mt-3 text-gray-600 text-lg md:text-base">
                  Choose the session that best fits your needs
                </p>
              </div>

              <div className="space-y-7">
                {sessionTypes.map((s) => (
                  <div
                    key={s.title}
                    className="bg-white rounded-2xl p-10 md:p-8 sm:p-6 shadow-lg border-l-[6px] border-green-600 relative overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 w-28 h-28 bg-gradient-to-br from-green-50 to-transparent rounded-bl-full opacity-70" />

                    <div className="flex items-start justify-between gap-6 flex-wrap relative z-[1]">
                      <div className="flex items-center gap-5">
                        <div className="w-16 h-16 md:w-14 md:h-14 rounded-2xl bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center text-3xl text-white shadow-md">
                          {s.icon}
                        </div>
                        <div>
                          <h3 className="text-2xl md:text-xl font-extrabold text-gray-900">
                            {s.title}
                          </h3>
                        </div>
                      </div>

                      <div className="shrink-0">
                        <span className="inline-flex items-center px-5 py-2 rounded-full text-sm font-bold text-green-800 bg-gradient-to-br from-green-50 to-white border border-green-200">
                          {s.duration}
                        </span>
                      </div>
                    </div>

                    <p className="mt-6 text-gray-700 leading-relaxed text-[16px] md:text-[15px] relative z-[1]">
                      {s.description}
                    </p>

                    <div className="mt-7 grid grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-4 relative z-[1]">
                      {s.features.map((f) => (
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

            {/* Healing Process */}
            <section
              id="process"
              className="mt-14 bg-gradient-to-br from-green-50 to-white rounded-2xl p-10 md:p-8 sm:p-6 shadow-lg"
            >
              <div className="text-center mb-10">
                <h2 className="text-4xl md:text-3xl font-extrabold text-gray-900">
                  The Healing Process
                </h2>
                <p className="mt-3 text-gray-600 text-lg md:text-base">
                  What to expect during your singing bowl healing session
                </p>
              </div>

              <div className="grid grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-8">
                {processSteps.map((step, idx) => (
                  <div key={step.number} className="text-center relative">
                    <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-gradient-to-br from-green-500 to-green-700 text-white font-extrabold text-2xl flex items-center justify-center shadow-md">
                      {step.number}
                    </div>
                    <h4 className="text-lg font-extrabold text-gray-900 mb-2">{step.title}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>

                    {/* Arrow between steps (not for last) */}
                    {idx < processSteps.length - 1 && (
                      <div className="hidden md:hidden lg:block absolute right-[-30px] top-8 text-3xl text-green-600 opacity-30">
                        →
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* CTA */}
            <section id="book-now" className="mt-14">
              <CTASection
                title="Ready to Experience Deep Healing?"
                description="Book your personalized singing bowl healing session today"
                buttons={ctaButtons}
                variant="green"
                backgroundEmoji="🎵"
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
