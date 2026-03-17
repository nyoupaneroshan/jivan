import React from "react";
import { Breadcrumb } from "@/components/jivan/Breadcrumb";
import { PageHero } from "@/components/jivan/PageHero";
import { QuickNavigation } from "@/components/jivan/QuickNavigation";
import { CTASection } from "@/components/jivan/yoga/CTASection";
import { SidebarWidget } from "@/components/jivan/SidebarWidget";
import { generateUpcomingBatches } from "@/utils/batchGenerator";

type ModuleSection = {
  id: string;
  icon: string;
  title: string;
  description: string;
  badges: string[];
  link: { href: string; label: string };
};

export default function MeditationProgramsPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Meditation" },
  ];

  // PHP ids + nav [file:45]
  const quickNavItems = [
    { id: "overview", icon: "📋", label: "Overview", href: "#overview" },
    { id: "trekking-retreat", icon: "🏔️", label: "Trekking Retreat", href: "#trekking-retreat" },
    { id: "morning-meditation", icon: "🌅", label: "Morning Meditation", href: "#morning-meditation" },
    { id: "transformation", icon: "✨", label: "Transformation Program", href: "#transformation" },
    { id: "join", icon: "📅", label: "Join Program", href: "#join" },
  ];

  // PHP hero title/subtitle [file:45]
  const heroStats = [
    { number: "Retreats", label: "Available" },
    { number: "Daily", label: "Meditation" },
    { number: "1-Day", label: "Immersion" },
    { number: "All Levels", label: "Welcome" },
  ];

  const heroCTAs = [
    { label: "Join Program", href: "#join", primary: true },
    { label: "Explore Programs", href: "#trekking-retreat" },
  ];

  // PHP overview [file:45]
  const overviewTitle = "Discover Inner Peace & Transformation";
  const overviewParagraphs = [
    "Our meditation and retreat programs offer transformative experiences designed to help you disconnect from daily stress, reconnect with your inner self, and return to life with renewed clarity and purpose. Whether you're seeking adventure combined with mindfulness, daily meditation practice, or intensive personal transformation, we offer programs to support your journey to wellness and self-discovery.",
  ];

  // PHP sections are module-card style with module-description + feature-badge list + module-link [file:45]
  const modules: ModuleSection[] = [
    {
      id: "trekking-retreat",
      icon: "🏔️",
      title: "Trekking Retreat Program",
      description:
        "Perfect for trekkers and adventurers, our specialized retreat program helps you prepare physically and mentally before your trek and recover deeply afterward. It combines mindfulness, body conditioning, and integration support so your trek becomes a complete transformational journey.",
      badges: [
        "Pre-Trek Preparation",
        "Physical Conditioning",
        "Mental Readiness",
        "Post-Trek Recovery",
        "Muscle Healing",
        "Experience Integration",
      ],
      link: { href: "/meditation/trekking-retreat", label: "Learn More About Trekking Retreat" },
    },
    {
      id: "morning-meditation",
      icon: "🌅",
      title: "Daily Morning Meditation",
      description:
        "Start your day with peace and intention through our daily online meditation sessions. Join from anywhere in the world for guided practice, grounding, and community energy that supports consistency and inner clarity.",
      badges: [
        "Daily Live Sessions",
        "Online Access",
        "Guided Practice",
        "Community Support",
        "Flexible Schedule",
        "Recording Access",
      ],
      link: { href: "/meditation/morning-meditation", label: "Learn More About Morning Meditation" },
    },
    {
      id: "transformation",
      icon: "✨",
      title: "One-Day Transformation Program",
      description:
        "An intensive one-day immersion designed to catalyze profound personal transformation. This special program combines multiple modalities and expert facilitation to help you break through limiting patterns and reset your inner direction.",
      badges: [
        "Full Day Immersion",
        "Multiple Modalities",
        "Personal Breakthrough",
        "Expert Facilitation",
        "Small Groups",
        "Life Changing",
      ],
      link: { href: "/meditation/transformation-program", label: "Learn More About Transformation" },
    },
  ];

  // PHP join section [file:45]
  const ctaButtons = [
    { icon: "📅", label: "Join a Program", href: "#" },
    { icon: "💬", label: "Send Inquiry", href: "#" },
  ];

  // PHP sidebar price [file:45]
  const priceInfo = {
    label: "Starting From",
    amount: "$500",
    duration: "Per Program",
    includes: [
      "Guided Meditation",
      "Retreat Options",
      "Practical Integration",
      "Supportive Community",
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
        badge={{ icon: "🧘", text: "Meditation & Retreats" }}
        title="Meditation & Retreat Programs"
        subtitle="Reconnect, Rejuvenate & Transform Your Life"
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

            {/* Modules */}
            <div className="mt-14 space-y-7">
              {modules.map((m) => (
                <section key={m.id} id={m.id}>
                  <div className="bg-white rounded-2xl p-10 md:p-8 sm:p-6 shadow-lg border-l-[6px] border-green-600 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-28 h-28 bg-gradient-to-br from-green-50 to-transparent rounded-bl-full opacity-70" />

                    <div className="flex items-start justify-between gap-6 flex-wrap relative z-[1]">
                      <div className="flex items-center gap-5">
                        <div className="w-16 h-16 md:w-14 md:h-14 rounded-2xl bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center text-3xl text-white shadow-md">
                          {m.icon}
                        </div>

                        <h3 className="text-2xl md:text-xl font-extrabold text-gray-900">
                          {m.title}
                        </h3>
                      </div>
                    </div>

                    <p className="mt-6 text-gray-700 leading-relaxed text-[16px] md:text-[15px] relative z-[1]">
                      {m.description}
                    </p>

                    <div className="mt-7 grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 relative z-[1]">
                      {m.badges.map((b) => (
                        <div
                          key={b}
                          className="text-center px-4 py-3 rounded-xl font-semibold text-green-800 bg-gradient-to-br from-green-50 to-white border border-green-100"
                        >
                          {b}
                        </div>
                      ))}
                    </div>

                    <div className="mt-7 relative z-[1]">
                      <a
                        href={m.link.href}
                        className="inline-flex items-center gap-2 bg-gradient-to-br from-green-500 to-green-700 text-white px-6 py-3 rounded-full font-semibold shadow-sm hover:shadow-md transition"
                      >
                        {m.link.label}
                        <span aria-hidden>→</span>
                      </a>
                    </div>
                  </div>
                </section>
              ))}
            </div>

            {/* CTA */}
            <section id="join" className="mt-14">
              <CTASection
                title="Ready to Begin Your Transformation?"
                description="Join our meditation and retreat programs and discover your path to inner peace"
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
