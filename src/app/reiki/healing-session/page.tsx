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

type SessionOption = {
  icon: string;
  title: string;
  duration: string;
  description: string;
};

type ProcessStep = {
  number: number;
  title: string;
  description: string;
};

export default function ReikiHealingSessionPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Reiki", href: "/reiki" },
    { label: "Healing Session" },
  ];

  // PHP: overview, benefits, sessions, process, book-now [file:41]
  const quickNavItems = [
    { id: "overview", icon: "📋", label: "Overview", href: "#overview" },
    { id: "benefits", icon: "✨", label: "Benefits", href: "#benefits" },
    { id: "sessions", icon: "💆", label: "Session Types", href: "#sessions" },
    { id: "process", icon: "🔄", label: "Healing Process", href: "#process" },
    { id: "book-now", icon: "📅", label: "Book Now", href: "#book-now" },
  ];

  // PHP hero title/subtitle [file:41]
  const heroStats = [
    { number: "45–60", label: "Minutes" },
    { number: "1:1", label: "Session" },
    { number: "Energy", label: "Balance" },
    { number: "All Levels", label: "Welcome" },
  ];

  const heroCTAs = [
    { label: "Book Now", href: "#book-now", primary: true },
    { label: "View Benefits", href: "#benefits" },
  ];

  const overviewTitle = "What is a Reiki Healing Session?";
  const overviewParagraphs = [
    "A Reiki healing session is a gentle, non-invasive energy healing practice where a certified practitioner channels universal life energy through light hand placements to support physical, emotional, and mental wellbeing.",
    "You remain fully clothed and rest comfortably while the practitioner works with your energy field to promote deep relaxation, chakra balancing, and natural healing integration.",
  ];

  // PHP benefits grid has 6 cards (icon + title + description) [file:41]
  const benefits: BenefitCard[] = [
    {
      icon: "💆",
      title: "Stress & Anxiety Relief",
      description:
        "Deep relaxation that calms the nervous system, reduces cortisol, and promotes a peaceful state of mind.",
    },
    {
      icon: "💪",
      title: "Pain Management",
      description:
        "Natural support for chronic conditions, headaches, muscle tension, and physical discomfort through relaxation and energy flow.",
    },
    {
      icon: "❤️",
      title: "Emotional Healing",
      description:
        "Release emotional blockages, support healing from past experiences, and restore emotional balance with gentle energy work.",
    },
    {
      icon: "⚡",
      title: "Energy Balancing",
      description:
        "Clear chakra blockages, restore energy flow, and harmonize subtle energy systems for steadiness and vitality.",
    },
    {
      icon: "🌟",
      title: "Immune Support",
      description:
        "Strengthen the body’s natural healing response by supporting deep rest, recovery, and regulation.",
    },
    {
      icon: "🧠",
      title: "Mental Clarity",
      description:
        "Reduce mental clutter and support focus by settling the mind into a calm, restorative state.",
    },
  ];

  // PHP session options: 4 cards with title + duration + description [file:41]
  // Note: In the PHP file, feature badges exist but didn’t parse reliably; this keeps the design consistent without them. [file:41]
  const sessionOptions: SessionOption[] = [
    {
      icon: "🧘",
      title: "Individual Healing Session",
      duration: "60 Minutes",
      description:
        "A personalized one-on-one Reiki session tailored to your specific needs. Ideal for stress relief, emotional balance, chakra alignment, and overall wellbeing.",
    },
    {
      icon: "🎯",
      title: "Targeted Treatment Session",
      duration: "45 Minutes",
      description:
        "Focused Reiki work for a specific concern (stress, pain area, emotional heaviness, fatigue, or chakra imbalance). Great for quick but powerful support.",
    },
    {
      icon: "🌙",
      title: "Distance Healing Session",
      duration: "45 Minutes",
      description:
        "Receive Reiki energy remotely from the comfort of your home. Helpful when travel isn’t possible, while still supporting relaxation and balance.",
    },
    {
      icon: "📦",
      title: "Healing Package",
      duration: "Series of 5 Sessions",
      description:
        "A progressive healing journey across multiple sessions for deeper transformation, consistent support, and longer-term results.",
    },
  ];

  // PHP process steps (4) [file:41]
  const processSteps: ProcessStep[] = [
    {
      number: 1,
      title: "Consultation",
      description:
        "Brief discussion about your health concerns and healing intentions.",
    },
    {
      number: 2,
      title: "Preparation",
      description:
        "Rest comfortably on a treatment table, fully clothed, with soothing guidance to settle your breath and body.",
    },
    {
      number: 3,
      title: "Energy Healing",
      description:
        "Practitioner channels Reiki energy through gentle hand positions to support balance and release blockages.",
    },
    {
      number: 4,
      title: "Integration",
      description:
        "Rest peacefully as energy integrates, then return gently to awareness with grounding support.",
    },
  ];

  const ctaButtons = [
    { icon: "📅", label: "Book a Session", href: "#" },
    { icon: "💬", label: "Send Inquiry", href: "#" },
  ];

  // PHP sidebar price is $2,000 [file:41]
  const priceInfo = {
    label: "Starting From",
    amount: "$2,000",
    duration: "Per Session",
    includes: ["1:1 Reiki Session", "Energy Balancing", "Chakra Alignment", "Relaxation & Integration"],
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
        badge={{ icon: "✨", text: "Reiki Healing Session" }}
        title="Reiki Healing Session"
        subtitle="Experience Deep Healing Through Ancient Energy Medicine"
        stats={heroStats}
        ctas={heroCTAs}
        variant="green"
        backgroundImage="https://images.unsplash.com/photo-1545389336-cf090694435e?w=1920"
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

            {/* Benefits (grid like your other updated pages) */}
            <section id="benefits" className="mt-14">
              <div className="text-center mb-10">
                <h2 className="text-4xl md:text-3xl font-extrabold text-gray-900">
                  Healing Benefits
                </h2>
                <p className="mt-3 text-gray-600 text-lg md:text-base">
                  Experience comprehensive support across mind, body, and energy
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

            {/* Session Options (stacked cards + duration pill) */}
            <section id="sessions" className="mt-14">
              <div className="text-center mb-10">
                <h2 className="text-4xl md:text-3xl font-extrabold text-gray-900">
                  Session Options
                </h2>
                <p className="mt-3 text-gray-600 text-lg md:text-base">
                  Choose the Reiki session format that fits your needs
                </p>
              </div>

              <div className="space-y-7">
                {sessionOptions.map((s) => (
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
                        <h3 className="text-2xl md:text-xl font-extrabold text-gray-900">
                          {s.title}
                        </h3>
                      </div>

                      <span className="inline-flex items-center px-5 py-2 rounded-full text-sm font-bold text-green-800 bg-gradient-to-br from-green-50 to-white border border-green-200">
                        {s.duration}
                      </span>
                    </div>

                    <p className="mt-6 text-gray-700 leading-relaxed text-[16px] md:text-[15px] relative z-[1]">
                      {s.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Healing Process (4 steps row like the PHP pattern) */}
            <section
              id="process"
              className="mt-14 bg-gradient-to-br from-green-50 to-white rounded-2xl p-10 md:p-8 sm:p-6 shadow-lg"
            >
              <div className="text-center mb-10">
                <h2 className="text-4xl md:text-3xl font-extrabold text-gray-900">
                  The Healing Process
                </h2>
                <p className="mt-3 text-gray-600 text-lg md:text-base">
                  What to expect during your Reiki healing session
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

                    {idx < processSteps.length - 1 && (
                      <div className="hidden lg:block absolute right-[-30px] top-8 text-3xl text-green-600 opacity-30">
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
                title="Ready to Experience Reiki Healing?"
                description="Book your Reiki healing session today and begin your journey toward calm, balance, and clarity."
                buttons={ctaButtons}
                variant="green"
                backgroundEmoji="✨"
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
