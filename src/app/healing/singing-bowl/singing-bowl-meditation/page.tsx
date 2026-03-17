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
  features: string[];
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

export default function SingingBowlMeditationPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Singing Bowl", href: "/singing-bowl" },
    { label: "Meditation" },
  ];

  const quickNavItems = [
    { id: "overview", icon: "📋", label: "Overview", href: "#overview" },
    { id: "types", icon: "🎵", label: "Meditation Types", href: "#types" },
    { id: "benefits", icon: "✨", label: "Benefits", href: "#benefits" },
    { id: "expect", icon: "🔍", label: "What to Expect", href: "#expect" },
    { id: "join-session", icon: "📅", label: "Join Session", href: "#join-session" },
  ];

  const heroStats = [
    { number: "45–90", label: "Minutes" },
    { number: "Guided", label: "Session" },
    { number: "Sound", label: "Immersion" },
    { number: "All Levels", label: "Welcome" },
  ];

  const heroCTAs = [
    { label: "Join a Session", href: "#join-session", primary: true },
    { label: "Learn More", href: "#overview" },
  ];

  const overviewTitle = "What is Singing Bowl Meditation?";
  const overviewParagraphs = [
    "Singing Bowl Meditation is a deeply immersive practice that combines traditional meditation techniques with the therapeutic sounds and vibrations of Himalayan singing bowls. Unlike silent meditation, the harmonious tones guide you effortlessly into deeper states of consciousness, making it accessible even for beginners who struggle with traditional meditation methods.",
    "During the session, you lie comfortably as the practitioner creates layers of healing sound around you. The vibrations penetrate your body, calming brain waves, slowing the breath, and inducing a profound state of relaxation. This sonic journey helps quiet the mental chatter, release emotional blockages, and connect you with your inner stillness and peace.",
  ];

  // From PHP meditation types section [file:3]
  const meditationTypes: MeditationType[] = [
    {
      icon: "🌅",
      title: "Morning Awakening Meditation",
      duration: "45 Minutes",
      description:
        "Start your day with clarity and positive energy. This uplifting session uses higher-frequency bowls and energizing techniques to awaken your consciousness, stimulate mental alertness, and set powerful intentions for the day ahead. Perfect for those seeking morning inspiration and focused energy.",
      features: ["Energy Activation", "Mental Clarity", "Positive Mindset", "Intention Setting"],
    },
    {
      icon: "🌙",
      title: "Evening Relaxation Meditation",
      duration: "60 Minutes",
      description:
        "Release the day's stress and prepare for deep, restorative sleep. This calming session uses lower-frequency bowls and soothing techniques to slow down your nervous system, release tension, and guide you into profound relaxation. Ideal for unwinding after a busy day and promoting restful sleep.",
      features: ["Stress Release", "Deep Relaxation", "Sleep Preparation", "Tension Relief"],
    },
    {
      icon: "🌟",
      title: "Deep Spiritual Meditation",
      duration: "90 Minutes",
      description:
        "Journey into expanded states of consciousness and spiritual connection. This extended session combines singing bowls with guided visualization, breathwork, and sacred mantras to facilitate profound spiritual experiences, inner wisdom access, and transcendental states. For experienced meditators seeking deeper exploration.",
      features: [
        "Spiritual Awakening",
        "Transcendental States",
        "Inner Wisdom",
        "Consciousness Expansion",
      ],
    },
    {
      icon: "🕯️",
      title: "Group Meditation Circle",
      duration: "75 Minutes",
      description:
        "Experience the amplified energy of group consciousness in a shared meditation space. Participants sit or lie in a circle as singing bowls are played from the center, creating a unified field of healing vibration. The collective intention and energy enhance individual experiences, fostering community connection and shared transformation.",
      features: ["Collective Energy", "Community Connection", "Shared Intention", "Amplified Healing"],
    },
  ];

  // From PHP benefits grid [file:3]
  const benefits: BenefitCard[] = [
    {
      icon: "🧠",
      title: "Mental Clarity",
      description:
        "Clear mental fog, reduce overthinking, and enhance focus, concentration, and cognitive function.",
    },
    {
      icon: "😌",
      title: "Stress Reduction",
      description:
        "Lower cortisol levels, calm the nervous system, and achieve deep states of relaxation and peace.",
    },
    {
      icon: "💤",
      title: "Better Sleep",
      description:
        "Improve sleep quality, combat insomnia, and establish healthy sleep patterns naturally.",
    },
    {
      icon: "❤️",
      title: "Emotional Balance",
      description:
        "Process emotions healthily, release emotional blockages, and cultivate inner harmony.",
    },
    {
      icon: "✨",
      title: "Spiritual Growth",
      description:
        "Deepen spiritual practice, access higher consciousness, and connect with inner wisdom.",
    },
    {
      icon: "🌈",
      title: "Energy Alignment",
      description:
        "Balance chakras, clear energy blockages, and restore natural vitality and flow.",
    },
  ];

  // From PHP “What to Expect” steps 1–8 [file:3]
  const expectSteps: ExpectStep[] = [
    {
      number: 1,
      title: "Arrival & Settling",
      description:
        "Arrive 10 minutes early to settle in, use facilities, and transition from daily life into sacred space.",
    },
    {
      number: 2,
      title: "Brief Introduction",
      description:
        "Quick orientation about the session format, what to expect, and how to maximize your experience.",
    },
    {
      number: 3,
      title: "Comfortable Positioning",
      description:
        "Lie down on yoga mats with cushions, blankets, and eye pillows for complete comfort.",
    },
    {
      number: 4,
      title: "Opening Practice",
      description:
        "Begin with gentle breathing exercises and intention setting to prepare mind and body.",
    },
    {
      number: 5,
      title: "Sound Meditation",
      description:
        "Immerse in the healing sounds and vibrations as bowls are played around you.",
    },
    {
      number: 6,
      title: "Silent Integration",
      description:
        "Rest in silence after the sounds fade, allowing deep integration of the experience.",
    },
    {
      number: 7,
      title: "Gentle Return",
      description:
        "Slowly bring awareness back to the body with gentle movements and stretches.",
    },
    {
      number: 8,
      title: "Optional Sharing",
      description:
        "Opportunity to share experiences and insights in a supportive group setting.",
    },
  ];

  // Sidebar (your current code has $100, but PHP shows 1,500. Keep your value if you want.)
  const priceInfo = {
    label: "Individual Session",
    amount: "$100",
    duration: "45–90 Minutes",
    includes: ["Group Session $800", "5-Session Package $6,000", "Monthly Unlimited $8,000"],
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

  const ctaButtons = [
    { icon: "📅", label: "View Schedule", href: "#" },
    { icon: "✅", label: "Book Session", href: "#" },
  ];

  return (
    <div className="min-h-screen bg-[#eaf7ee] bg-[url('/img/design/color-page.jpg')] bg-repeat bg-center">
      <Breadcrumb items={breadcrumbItems} />

      <PageHero
        badge={{ icon: "🎵", text: "Guided Sound Meditation" }}
        title="Singing Bowl Meditation"
        subtitle="Journey Into Deep Inner Peace Through Sacred Sound"
        stats={heroStats}
        ctas={heroCTAs}
        variant="green"
        backgroundImage="https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?q=80&w=2672&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dw=1920"
      />

      {/* Keep variant=red until QuickNavigation supports green to avoid crashes */}
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
            <section id="types" className="mt-14 mb-[10px]">

              <div className="text-center mb-10">
                <h2 className="text-4xl md:text-3xl font-extrabold text-gray-900">
                  Meditation Session Types
                </h2>
                <p className="mt-3 text-gray-600 text-lg md:text-base">
                  Choose the meditation experience that resonates with you
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
                        <div>
                          <h3 className="text-2xl md:text-xl font-extrabold text-gray-900">
                            {t.title}
                          </h3>
                        </div>
                      </div>

                      <div className="shrink-0">
                        <span className="inline-flex items-center px-5 py-2 rounded-full text-sm font-bold text-green-800 bg-gradient-to-br from-green-50 to-white border border-green-200">
                          {t.duration}
                        </span>
                      </div>
                    </div>

                    <p className="mt-6 text-gray-700 leading-relaxed text-[16px] md:text-[15px] relative z-[1]">
                      {t.description}
                    </p>

                    <div className="mt-7 grid grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-4 relative z-[1]">
                      {t.features.map((f) => (
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

            {/* Benefits (cards grid like screenshot) */}
            <section id="benefits" className="mt-14 mb-[10px]">
              <div className="text-center mb-10">
                <h2 className="text-4xl md:text-3xl font-extrabold text-gray-900">
                  Meditation Benefits
                </h2>
                <p className="mt-3 text-gray-600 text-lg md:text-base">
                  Transform your mind, body, and spirit through sound meditation
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

            {/* What to Expect (2-column steps like screenshot) */}
            <section
              id="expect"
              className="mt-14 bg-gradient-to-br from-green-50 to-white rounded-2xl p-10 md:p-8 sm:p-6 shadow-lg"
            >
              <div className="text-center mb-10">
                <h2 className="text-4xl md:text-3xl font-extrabold text-gray-900">
                  What to Expect
                </h2>
                <p className="mt-3 text-gray-600 text-lg md:text-base">
                  Your complete meditation session journey
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-1 gap-6">
                {expectSteps.map((s) => (
                  <div
                    key={s.number}
                    className="bg-white rounded-2xl p-6 shadow-sm flex gap-4 items-start"
                  >
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
                title="Ready to Experience Deep Meditation?"
                description="Join our next singing bowl meditation session and discover inner peace."
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
