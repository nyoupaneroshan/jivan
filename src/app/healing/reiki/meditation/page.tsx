import React from "react";
import { Breadcrumb } from "@/components/jivan/Breadcrumb";
import { PageHero } from "@/components/jivan/PageHero";
import { QuickNavigation } from "@/components/jivan/QuickNavigation";
import { CTASection } from "@/components/jivan/yoga/CTASection";
import { SidebarWidget } from "@/components/jivan/SidebarWidget";
import { generateUpcomingBatches } from "@/utils/batchGenerator";

type MeditationType = {
  icon: string;
  title: string;
  duration: string;
  description: string;
};

type BenefitCard = {
  icon: string;
  title: string;
  description: string;
};

type ExpectStep = {
  number: number;
  title: string;
  description: string;
};

export default function ReikiMeditationPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Reiki", href: "/reiki" },
    { label: "Meditation" },
  ];

  // PHP ids + nav: overview, types, benefits, expect, join-session [file:42]
  const quickNavItems = [
    { id: "overview", icon: "📋", label: "Overview", href: "#overview" },
    { id: "types", icon: "🎵", label: "Meditation Types", href: "#types" },
    { id: "benefits", icon: "✨", label: "Benefits", href: "#benefits" },
    { id: "expect", icon: "🔍", label: "What to Expect", href: "#expect" },
    { id: "join-session", icon: "📅", label: "Join Session", href: "#join-session" },
  ];

  // PHP hero title/subtitle [file:42]
  const heroStats = [
    { number: "60–90", label: "Minutes" },
    { number: "Guided", label: "Practice" },
    { number: "Energy", label: "Healing" },
    { number: "All Levels", label: "Welcome" },
  ];

  const heroCTAs = [
    { label: "Join Session", href: "#join-session", primary: true },
    { label: "View Types", href: "#types" },
  ];

  const overviewTitle = "Overview";
  const overviewParagraphs = [
    "Reiki Meditation combines guided meditation with Reiki energy flow to deepen relaxation, clear energetic blockages, and support spiritual growth. It helps settle the mind and bring awareness into the body while working gently with your energy field.",
    "This practice is suitable for beginners and experienced meditators, offering a calming and restorative experience that supports emotional healing, inner clarity, and a stronger connection to your natural life force energy.",
  ];

  // PHP meditation cards (4) [file:42]
  const meditationTypes: MeditationType[] = [
    {
      icon: "🌅",
      title: "Chakra Balancing Meditation",
      duration: "60 Minutes",
      description:
        "A guided Reiki meditation focused on balancing and harmonizing the chakras to restore energy flow and stability across the whole system.",
    },
    {
      icon: "🌙",
      title: "Healing & Release Meditation",
      duration: "75 Minutes",
      description:
        "A deeper session designed to support emotional release and gentle healing using guided meditation with Reiki energy flow.",
    },
    {
      icon: "🌟",
      title: "Spiritual Connection Meditation",
      duration: "90 Minutes",
      description:
        "An extended Reiki meditation to deepen spiritual awareness, strengthen intuition, and support inner wisdom and higher consciousness.",
    },
    {
      icon: "👥",
      title: "Group Reiki Meditation",
      duration: "60 Minutes",
      description:
        "A shared Reiki-guided meditation experience where the collective group energy supports deeper calm, connection, and transformation.",
    },
  ];

  // PHP benefits grid (6) [file:42]
  const benefits: BenefitCard[] = [
    {
      icon: "🧠",
      title: "Mental Clarity",
      description:
        "Clear mental fog, reduce overthinking, and achieve enhanced focus and cognitive function.",
    },
    {
      icon: "😌",
      title: "Deep Relaxation",
      description:
        "Achieve profound states of relaxation that calm the nervous system and reduce stress.",
    },
    {
      icon: "❤️",
      title: "Emotional Healing",
      description:
        "Support gentle emotional release, ease heaviness, and restore inner balance over time.",
    },
    {
      icon: "✨",
      title: "Spiritual Growth",
      description:
        "Deepen spiritual connection, expand awareness, and strengthen your relationship with inner wisdom.",
    },
    {
      icon: "⚡",
      title: "Energy Balance",
      description:
        "Improve energy flow by clearing blockages and supporting chakra alignment through Reiki energy work.",
    },
    {
      icon: "🌈",
      title: "Inner Harmony",
      description:
        "Cultivate calm, stability, and a grounded sense of peace that carries into daily life.",
    },
  ];

  // PHP expect list (8) [file:42]
  const expectSteps: ExpectStep[] = [
    {
      number: 1,
      title: "Arrival & Settling",
      description:
        "Arrive early to transition into sacred space and set your intentions for the session.",
    },
    {
      number: 2,
      title: "Comfortable Positioning",
      description:
        "Lie or sit comfortably with cushions, blankets, and support for complete relaxation.",
    },
    {
      number: 3,
      title: "Opening Practice",
      description:
        "Begin with gentle breathing and grounding to prepare the mind and body.",
    },
    {
      number: 4,
      title: "Reiki Energy Flow",
      description:
        "Receive Reiki energy through guided attention and energetic activation techniques.",
    },
    {
      number: 5,
      title: "Guided Meditation",
      description:
        "Move into deeper meditation with visualization, awareness, and calm inner focus.",
    },
    {
      number: 6,
      title: "Silent Integration",
      description:
        "Rest in silence allowing the practice to integrate into the body and energy field.",
    },
    {
      number: 7,
      title: "Gentle Return",
      description:
        "Return slowly with light movements, grounding, and breath awareness.",
    },
    {
      number: 8,
      title: "Closing & Sharing",
      description:
        "Opportunity to reflect, ask questions, and share insights (optional).",
    },
  ];

  const ctaButtons = [
    { icon: "📅", label: "Join Reiki Meditation", href: "#" },
    { icon: "💬", label: "Send Inquiry", href: "#" },
  ];

  // PHP sidebar price is "$ 1,800" [file:42]
  const priceInfo = {
    label: "Starting From",
    amount: "$ 1,800",
    duration: "Per Session",
    includes: ["Guided Reiki Meditation", "Energy Balancing", "Silent Integration", "Grounding & Closing"],
  };

  const batches = generateUpcomingBatches({
    intervalMonths: 1,
    totalBatches: 3,
    batchDay: 10,
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
        badge={{ icon: "🧘", text: "Reiki Meditation" }}
        title="Reiki Meditation"
        subtitle="Deepen Your Practice Through Universal Life Force Energy"
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

            {/* Meditation Types */}
            <section id="types" className="mt-14">
              <div className="text-center mb-10">
                <h2 className="text-4xl md:text-3xl font-extrabold text-gray-900">
                  Meditation Types
                </h2>
                <p className="mt-3 text-gray-600 text-lg md:text-base">
                  Choose the Reiki meditation experience that resonates with you
                </p>
              </div>

              <div className="space-y-7">
                {meditationTypes.map((t) => (
                  <div
                    key={t.title}
                    className="bg-white rounded-2xl p-10 md:p-8 sm:p-6 shadow-lg border-l-[6px] border-green-600 relative overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 w-28 h-28 bg-gradient-to-br from-green-50 to-transparent rounded-bl-full opacity-70" />

                    <div className="flex items-start justify-between gap-6 flex-wrap relative z-[1]">
                      <div className="flex items-center gap-5">
                        <div className="w-16 h-16 md:w-14 md:h-14 rounded-2xl bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center text-3xl text-white shadow-md">
                          {t.icon}
                        </div>

                        <h3 className="text-2xl md:text-xl font-extrabold text-gray-900">
                          {t.title}
                        </h3>
                      </div>

                      <span className="inline-flex items-center px-5 py-2 rounded-full text-sm font-bold text-green-800 bg-gradient-to-br from-green-50 to-white border border-green-200">
                        {t.duration}
                      </span>
                    </div>

                    <p className="mt-6 text-gray-700 leading-relaxed text-[16px] md:text-[15px] relative z-[1]">
                      {t.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Benefits */}
            <section id="benefits" className="mt-14">
              <div className="text-center mb-10">
                <h2 className="text-4xl md:text-3xl font-extrabold text-gray-900">
                  Benefits
                </h2>
                <p className="mt-3 text-gray-600 text-lg md:text-base">
                  Transform your mind, body, and spirit through Reiki meditation
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

            {/* What to Expect */}
            <section
              id="expect"
              className="mt-14 bg-gradient-to-br from-green-50 to-white rounded-2xl p-10 md:p-8 sm:p-6 shadow-lg"
            >
              <div className="text-center mb-10">
                <h2 className="text-4xl md:text-3xl font-extrabold text-gray-900">
                  What to Expect
                </h2>
                <p className="mt-3 text-gray-600 text-lg md:text-base">
                  Your complete Reiki meditation session journey
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-1 gap-6">
                {expectSteps.map((s) => (
                  <div key={s.number} className="bg-white rounded-2xl p-6 shadow-sm flex gap-4 items-start">
                    <div className="w-11 h-11 rounded-full bg-gradient-to-br from-green-500 to-green-700 text-white font-extrabold flex items-center justify-center shrink-0">
                      {s.number}
                    </div>
                    <div>
                      <h4 className="text-lg font-extrabold text-gray-900 mb-1">
                        {s.title}
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {s.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* CTA */}
            <section id="join-session" className="mt-14">
              <CTASection
                title="Join a Reiki Meditation Session"
                description="Reserve your place for a guided Reiki meditation and experience deeper calm, clarity, and energy balance."
                buttons={ctaButtons}
                variant="green"
                backgroundEmoji="🧘"
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
