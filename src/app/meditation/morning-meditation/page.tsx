import React from "react";
import { Breadcrumb } from "@/components/jivan/Breadcrumb";
import { PageHero } from "@/components/jivan/PageHero";
import { QuickNavigation } from "@/components/jivan/QuickNavigation";
import { CTASection } from "@/components/jivan/yoga/CTASection";
import { SidebarWidget } from "@/components/jivan/SidebarWidget";
import { generateUpcomingBatches } from "@/utils/batchGenerator";

type DetailCard = {
  icon: string;
  title: string;
  description: string;
};

type DaySchedule = {
  day: string;
  title: string;
  description: string;
};

type BenefitCard = {
  icon: string;
  title: string;
  description: string;
};

type TechniqueStep = {
  number: number;
  title: string;
  description: string;
};

export default function MorningMeditationPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Meditation Retreat", href: "/meditation-retreat" },
    { label: "Morning Meditation" },
  ];

  // PHP quick nav: overview, details, schedule, benefits, techniques, join [file:2]
  const quickNavItems = [
    { id: "overview", icon: "📋", label: "Overview", href: "#overview" },
    { id: "details", icon: "🧾", label: "Session Details", href: "#details" },
    { id: "schedule", icon: "🗓️", label: "Weekly Schedule", href: "#schedule" },
    { id: "benefits", icon: "✨", label: "Benefits", href: "#benefits" },
    { id: "techniques", icon: "🧠", label: "Techniques", href: "#techniques" },
    { id: "join", icon: "✅", label: "Join Now", href: "#join" },
  ];

  // PHP hero: title/subtitle/time badge + CTAs [file:2]
  const heroStats = [
    { number: "6:00–8:00", label: "AM (Nepal Time)" },
    { number: "Daily", label: "Mon–Sun" },
    { number: "Online", label: "Zoom" },
    { number: "All Levels", label: "Welcome" },
  ];

  const heroCTAs = [
    { label: "Join Now", href: "#join", primary: true },
    { label: "View Schedule", href: "#schedule" },
  ];

  // Overview (PHP) [file:2]
  const overviewTitle = "Your Daily Dose of Peace";
  const overviewParagraphs = [
    "Transform your mornings with our live online meditation sessions, conducted daily from 6:00 AM to 8:00 AM Nepal Time. Join a global community of practitioners from the comfort of your home, office, or wherever you are in the world. Our expert facilitators guide you through powerful meditation techniques, breathwork practices, and mindfulness exercises designed to set a positive tone for your entire day.",
    "Whether you're a complete beginner or experienced meditator, our sessions accommodate all levels. Each morning offers a different focus—from breathwork and chakra meditation to guided visualization and mantra practice. With live instruction, community support, and recordings available for those who miss sessions, you'll never feel alone on your meditation journey. Start your day with intention, clarity, and calm.",
  ];

  // How it works (PHP: details grid 6) [file:2]
  const details: DetailCard[] = [
    {
      icon: "🌍",
      title: "Join From Anywhere",
      description:
        "Access via Zoom, Google Meet, or your preferred platform. All you need is internet and a quiet space.",
    },
    {
      icon: "🎙️",
      title: "Live Guidance",
      description:
        "Expert teachers lead each session with clear instructions, making meditation accessible for everyone.",
    },
    {
      icon: "🎥",
      title: "Recordings Available",
      description:
        "Missed a session? Access recordings anytime to maintain your daily practice consistency.",
    },
    {
      icon: "🤝",
      title: "Community Support",
      description:
        "Connect with fellow practitioners, share experiences, and grow together in a supportive environment.",
    },
    {
      icon: "📱",
      title: "Mobile Friendly",
      description:
        "Practice on your phone, tablet, laptop, or desktop—whatever works best for you.",
    },
    {
      icon: "🧩",
      title: "Flexible Commitment",
      description:
        "Join daily, weekly, or whenever you can. Pay per session, weekly, or monthly—your choice.",
    },
  ];

  // Weekly schedule (PHP: Monday–Sunday) [file:2]
  const schedule: DaySchedule[] = [
    {
      day: "Monday",
      title: "Mindfulness Meditation",
      description:
        "Start the week grounded with present-moment awareness. Learn to observe thoughts without judgment and cultivate mental clarity for the week ahead.",
    },
    {
      day: "Tuesday",
      title: "Breathwork (Pranayama)",
      description:
        "Energize your body and calm your mind with powerful breathing techniques. Increase oxygen flow, reduce stress, and boost vitality.",
    },
    {
      day: "Wednesday",
      title: "Chakra Meditation",
      description:
        "Balance your energy centers through focused chakra work. Each week we focus on a different chakra, rotating through all seven.",
    },
    {
      day: "Thursday",
      title: "Loving-Kindness (Metta)",
      description:
        "Cultivate compassion for yourself and others. Powerful practice for emotional healing, reducing anger, and increasing wellbeing.",
    },
    {
      day: "Friday",
      title: "Mantra Meditation",
      description:
        "Use sacred sounds and mantras to quiet the mind. Experience the vibrational power of traditional Sanskrit mantras.",
    },
    {
      day: "Saturday",
      title: "Guided Visualization",
      description:
        "Journey inward with creative visualization techniques. Manifest intentions, release blocks, and connect with your inner wisdom.",
    },
    {
      day: "Sunday",
      title: "Silent Meditation & Q&A",
      description:
        "Deep silent practice followed by open discussion. Ask questions, share experiences, and deepen your understanding.",
    },
  ];

  // Benefits (PHP: 9) [file:2]
  const benefits: BenefitCard[] = [
    {
      icon: "🌅",
      title: "Better Mornings",
      description:
        "Start each day centered, calm, and energized instead of rushed and stressed.",
    },
    {
      icon: "🎯",
      title: "Mental Clarity",
      description:
        "Improve focus, concentration, and decision-making throughout your day.",
    },
    {
      icon: "🧘",
      title: "Reduced Stress",
      description: "Lower cortisol levels and build resilience to daily challenges.",
    },
    {
      icon: "😴",
      title: "Better Sleep",
      description:
        "Regular morning meditation improves sleep quality and helps regulate circadian rhythm.",
    },
    {
      icon: "📆",
      title: "Consistent Practice",
      description:
        "Daily routine and community accountability help you stick with your practice.",
    },
    {
      icon: "⚖️",
      title: "Emotional Balance",
      description:
        "Develop equanimity, reduce reactivity, and respond to life with wisdom.",
    },
    {
      icon: "⚡",
      title: "Increased Energy",
      description:
        "Feel more vital and alive throughout the day with morning practice.",
    },
    {
      icon: "🏁",
      title: "Goal Achievement",
      description:
        "Set daily intentions and maintain focus on what truly matters.",
    },
    {
      icon: "✨",
      title: "Spiritual Growth",
      description:
        "Deepen your connection to your true self and higher consciousness.",
    },
  ];

  // Techniques (PHP: 6) [file:2]
  const techniques: TechniqueStep[] = [
    {
      number: 1,
      title: "Breath Awareness",
      description:
        "Foundation practice of following the natural breath to anchor attention in the present moment.",
    },
    {
      number: 2,
      title: "Body Scan",
      description:
        "Systematic relaxation technique moving awareness through the body, releasing tension.",
    },
    {
      number: 3,
      title: "Mantra Repetition",
      description:
        'Using sacred sounds like "Om" or personalized mantras to quiet mental chatter.',
    },
    {
      number: 4,
      title: "Visualization",
      description:
        "Guided imagery journeys for healing, manifestation, and inner exploration.",
    },
    {
      number: 5,
      title: "Loving-Kindness",
      description:
        "Metta practice cultivating compassion for self and others through phrases of goodwill.",
    },
    {
      number: 6,
      title: "Chakra Meditation",
      description:
        "Working with the seven energy centers to balance and harmonize your subtle body.",
    },
  ];

  // CTA (PHP join section) [file:2]
  const ctaButtons = [
    { icon: "📝", label: "Register Now", href: "/contact" },
    { icon: "📞", label: "Call Us", href: "tel:+9779818514837" },
  ];

  // Sidebar pricing (PHP) [file:2]
  const priceInfo = {
    label: "Starting From",
    amount: "$500",
    duration: "Per Session",
    includes: ["Drop-in 500/session", "Weekly Pass 2,500", "Monthly Unlimited 8,000", "3-Month Package 20,000"],
  };

  // Optional: keep same batches widget structure used in your project
  const batches = generateUpcomingBatches({
    intervalMonths: 1,
    totalBatches: 3,
    batchDay: 10,
  });

  const contact = {
    phone: ["+977 9818514837"],
    email: "info@jivanparivartan.com",
    address: "WhatsApp support available",
  };

  return (
    <div className="min-h-screen bg-[#faf6f1] bg-[url('/img/design/color-page.jpg')] bg-repeat bg-center">
      <Breadcrumb items={breadcrumbItems} />

      <PageHero
        badge={{ icon: "🌅", text: "Daily Online Sessions" }}
        title="Morning Online Meditation"
        subtitle="Start Your Day with Peace, Clarity & Positive Energy"
        stats={heroStats}
        ctas={heroCTAs}
        // Orange theme in PHP [file:2]
        variant="red"
        backgroundImage="/img/morning-meditation-hero.jpg"
      />

      {/* Keep red until QuickNavigation supports orange without crashing */}
      <QuickNavigation items={quickNavItems} variant="red" />

      <div className="max-w-[1400px] mx-auto px-5 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12">
          {/* Main */}
          <div>
            {/* Overview */}
            <section
              id="overview"
              className="bg-gradient-to-br from-white to-orange-50 p-10 md:p-8 sm:p-6 rounded-2xl shadow-lg border-t-4 border-orange-600"
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

            {/* Session Details */}
            <section id="details" className="mt-14">
              <div className="text-center mb-10">
                <h2 className="text-4xl md:text-3xl font-extrabold text-gray-900">
                  How It Works
                </h2>
                <p className="mt-3 text-gray-600 text-lg md:text-base">
                  Simple, accessible, and effective online meditation
                </p>
              </div>

              <div className="grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-7">
                {details.map((d) => (
                  <div
                    key={d.title}
                    className="bg-white rounded-2xl p-10 md:p-8 sm:p-6 text-center shadow-md hover:shadow-xl transition-all border-t-[3px] border-orange-600"
                  >
                    <div className="text-5xl mb-5">{d.icon}</div>
                    <h3 className="text-xl font-extrabold text-gray-900 mb-3">
                      {d.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-[15px]">
                      {d.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Weekly Schedule */}
            <section
              id="schedule"
              className="mt-14 bg-gradient-to-br from-orange-50 to-white rounded-2xl p-10 md:p-8 sm:p-6 shadow-lg"
            >
              <div className="text-center mb-10">
                <h2 className="text-4xl md:text-3xl font-extrabold text-gray-900">
                  Weekly Meditation Schedule
                </h2>
                <p className="mt-3 text-gray-600 text-lg md:text-base">
                  Different focus each day for holistic development
                </p>
              </div>

              <div className="space-y-5">
                {schedule.map((s) => (
                  <div
                    key={s.day}
                    className="bg-white rounded-2xl p-6 shadow-sm flex gap-4 items-start border-l-4 border-orange-600"
                  >
                    <div className="min-w-[110px] h-[56px] rounded-xl bg-gradient-to-br from-orange-500 to-orange-700 text-white font-extrabold flex items-center justify-center shrink-0">
                      {s.day}
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

            {/* Benefits */}
            <section id="benefits" className="mt-14">
              <div className="text-center mb-10">
                <h2 className="text-4xl md:text-3xl font-extrabold text-gray-900">
                  Daily Meditation Benefits
                </h2>
                <p className="mt-3 text-gray-600 text-lg md:text-base">
                  Transform your life one morning at a time
                </p>
              </div>

              <div className="grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-7">
                {benefits.map((b) => (
                  <div
                    key={b.title}
                    className="bg-white rounded-2xl p-10 md:p-8 sm:p-6 text-center shadow-md hover:shadow-xl transition-all border-t-[3px] border-orange-600"
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

            {/* Techniques */}
            <section
              id="techniques"
              className="mt-14 bg-gradient-to-br from-orange-50 to-white rounded-2xl p-10 md:p-8 sm:p-6 shadow-lg"
            >
              <div className="text-center mb-10">
                <h2 className="text-4xl md:text-3xl font-extrabold text-gray-900">
                  Meditation Techniques You'll Learn
                </h2>
                <p className="mt-3 text-gray-600 text-lg md:text-base">
                  Build a comprehensive meditation toolkit
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-1 gap-6">
                {techniques.map((t) => (
                  <div
                    key={t.number}
                    className="bg-white rounded-2xl p-6 shadow-sm flex gap-4 items-start"
                  >
                    <div className="w-11 h-11 rounded-full bg-gradient-to-br from-orange-500 to-orange-700 text-white font-extrabold flex items-center justify-center shrink-0">
                      {t.number}
                    </div>
                    <div>
                      <h4 className="text-lg font-extrabold text-gray-900 mb-1">
                        {t.title}
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {t.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Join */}
            <section id="join" className="mt-14">
              <CTASection
                title="Join Our Morning Meditation Community"
                description="Start transforming your mornings and your life today"
                buttons={ctaButtons}
                variant="red"
                backgroundEmoji="🌅"
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
