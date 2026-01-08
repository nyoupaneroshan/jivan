import React from "react";
import { Breadcrumb } from "@/components/jivan/Breadcrumb";
import { PageHero } from "@/components/jivan/PageHero";
import { QuickNavigation } from "@/components/jivan/QuickNavigation";
import { CTASection } from "@/components/jivan/yoga/CTASection";
import { SidebarWidget } from "@/components/jivan/SidebarWidget";
import { generateUpcomingBatches } from "@/utils/batchGenerator";

type ScheduleItem = {
  time: string;
  title: string;
  tag: string;
  description: string;
  bullets?: string[];
};

type TransformationCard = {
  icon: string;
  title: string;
  description: string;
};

type ExpectItem = {
  number: number;
  title: string;
  description: string;
};

type Testimonial = {
  text: string;
  initials: string;
  name: string;
  role: string;
  location: string;
};

export default function TransformationProgramPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Meditation Retreat", href: "/meditation-retreat" },
    { label: "Transformation Program" },
  ];

  // Main sections in PHP [file:3]
  const quickNavItems = [
    { id: "overview", icon: "📋", label: "Overview", href: "#overview" },
    { id: "schedule", icon: "🗓️", label: "Full Schedule", href: "#schedule" },
    { id: "areas", icon: "✨", label: "Areas", href: "#areas" },
    { id: "expect", icon: "🔎", label: "What to Expect", href: "#expect" },
    { id: "stories", icon: "💬", label: "Testimonials", href: "#stories" },
    { id: "book", icon: "✅", label: "Reserve", href: "#book" },
  ];

  // Hero (PHP) [file:3]
  const heroStats = [
    { number: "8", label: "Hours" },
    { number: "12–15", label: "Participants" },
    { number: "Deep Dive", label: "Practices" },
    { number: "Breakthrough", label: "Focus" },
  ];

  const heroCTAs = [
    { label: "Reserve Your Spot", href: "#book", primary: true },
    { label: "View Full Schedule", href: "#schedule" },
  ];

  // Overview (PHP) [file:3]
  const overviewTitle = "A Day That Changes Everything";
  const overviewParagraphs = [
    "Are you ready for a profound shift? Our One Day Special Transformation Program is an intensive, immersive experience designed to catalyze rapid personal growth and spiritual awakening. In just 8 hours, you'll journey through powerful practices that usually take weeks to experience—meditation, breathwork, energy healing, emotional release work, and conscious self-inquiry—all carefully sequenced to create breakthroughs and lasting change.",
    "This isn't just another workshop. It's a deep dive into your authentic self, guided by experienced facilitators who create a safe, supportive container for transformation. Through a combination of ancient wisdom practices and modern psychological techniques, you'll identify and release self-limiting beliefs, heal emotional wounds, reconnect with your inner truth, and gain clarity on your life's purpose. Participants consistently report life-changing insights, profound peace, emotional breakthroughs, and a renewed sense of purpose and direction.",
  ];

  // Full schedule (PHP) [file:3]
  const schedule: ScheduleItem[] = [
    {
      time: "8:00 AM",
      title: "Arrival & Sacred Opening",
      tag: "30 mins",
      description:
        "Welcome ceremony, intention setting, and creating sacred space. Connect with facilitators and fellow participants. Establish group agreements and set your personal transformation intentions for the day.",
    },
    {
      time: "8:30 AM",
      title: "Mindfulness Foundation",
      tag: "60 mins",
      description:
        "Begin with grounding meditation practices to center your awareness and quiet the mind. Learn powerful mindfulness techniques for observing thoughts and emotions without judgment.",
      bullets: [
        "Breath awareness meditation",
        "Body scan relaxation",
        "Present moment anchoring",
      ],
    },
    {
      time: "9:30 AM",
      title: "Conscious Self-Inquiry",
      tag: "90 mins",
      description:
        "Deep guided exploration into your core beliefs, patterns, and conditioning. Through powerful questioning techniques and journaling exercises, uncover what's been holding you back.",
      bullets: [
        "Identifying limiting beliefs",
        "Exploring life patterns",
        "Discovering authentic desires",
        "Personal insight journaling",
      ],
    },
    {
      time: "11:00 AM",
      title: "Nourishing Break",
      tag: "30 mins",
      description:
        "Healthy refreshments and mindful eating practice. Time to integrate morning insights in silence or gentle conversation.",
    },
    {
      time: "11:30 AM",
      title: "Transformational Breathwork",
      tag: "75 mins",
      description:
        "Powerful pranayama and holotropic breathwork session designed to access non-ordinary states of consciousness, release stored emotions, and activate your body's innate healing wisdom.",
      bullets: [
        "Advanced pranayama techniques",
        "Emotional release breathing",
        "Energy activation practices",
        "Integration and grounding",
      ],
    },
    {
      time: "1:00 PM",
      title: "Wholesome Lunch",
      tag: "60 min",
      description:
        "Nutritious vegetarian lunch served mindfully. Time for rest, reflection, nature walk, or silent contemplation.",
    },
    {
      time: "2:00 PM",
      title: "Chakra Energy Healing",
      tag: "75 min",
      description:
        "Deep energy work focusing on clearing, balancing, and activating your seven main chakras. Experience singing bowl therapy, Reiki healing, and guided energy meditation.",
      bullets: [
        "Chakra assessment and balancing",
        "Singing bowl sound healing",
        "Reiki energy transmission",
        "Kundalini awakening practices",
      ],
    },
    {
      time: "3:15 PM",
      title: "Forgiveness & Release Work",
      tag: "60 min",
      description:
        "Powerful exercises for releasing resentment, forgiving self and others, and letting go of what no longer serves. Emotional healing through compassion practices and ritual release.",
      bullets: [
        "Ho'oponopono forgiveness practice",
        "Letter writing and burning ceremony",
        "Loving-kindness meditation",
        "Cord-cutting visualization",
      ],
    },
    {
      time: "4:15 PM",
      title: "Vision & Manifestation",
      tag: "60 min",
      description:
        "Create a clear vision for your transformed life. Learn manifestation techniques, set powerful intentions, and create a personal action plan for sustainable change.",
      bullets: [
        "Vision board creation",
        "Goal setting and clarity work",
        "Manifestation meditation",
        "Personal commitment ceremony",
      ],
    },
    {
      time: "5:15 PM",
      title: "Integration & Closing Circle",
      tag: "45 min",
      description:
        "Share experiences, insights, and commitments in sacred circle. Receive ongoing support resources and close the day with gratitude practice and blessings.",
    },
  ];

  // Areas of transformation (PHP) [file:3]
  const areas: TransformationCard[] = [
    {
      icon: "🧠",
      title: "Mental Clarity",
      description:
        "Clear mental fog, release negative thought patterns, and gain new perspectives on life challenges.",
    },
    {
      icon: "❤️",
      title: "Emotional Healing",
      description:
        "Release stored emotions, heal past wounds, and develop emotional resilience and balance.",
    },
    {
      icon: "🧩",
      title: "Limiting Beliefs",
      description:
        "Identify and dissolve beliefs that have been holding you back from your true potential.",
    },
    {
      icon: "🔍",
      title: "Self-Awareness",
      description:
        "Deepen understanding of who you truly are beneath conditioned patterns and social masks.",
    },
    {
      icon: "🧭",
      title: "Life Purpose",
      description:
        "Gain clarity on your deeper calling and what truly matters to you in this life.",
    },
    {
      icon: "✨",
      title: "Spiritual Connection",
      description:
        "Reconnect with your higher self, universal consciousness, and spiritual essence.",
    },
    {
      icon: "👑",
      title: "Inner Power",
      description:
        "Reclaim your personal power, set healthy boundaries, and step into authentic leadership.",
    },
    {
      icon: "🕊️",
      title: "Peace & Freedom",
      description:
        "Experience profound inner peace and freedom from anxiety, fear, and stress.",
    },
    {
      icon: "🚀",
      title: "Forward Momentum",
      description:
        "Leave with clear action steps, renewed motivation, and tools for lasting change.",
    },
  ];

  // What to expect (PHP) [file:3]
  const expect: ExpectItem[] = [
    {
      number: 1,
      title: "Safe Container",
      description:
        "Confidential, supportive environment held by experienced facilitators trained in trauma-informed practices.",
    },
    {
      number: 2,
      title: "Emotional Release",
      description:
        "You may experience tears, laughter, anger, or joy as stuck emotions move through and out of your system.",
    },
    {
      number: 3,
      title: "Breakthrough Moments",
      description:
        "Expect sudden insights, aha moments, and shifts in perspective that change how you see yourself and life.",
    },
    {
      number: 4,
      title: "Small Group Setting",
      description:
        "Limited to 12-15 participants to ensure personal attention and deep, meaningful work.",
    },
    {
      number: 5,
      title: "Ongoing Support",
      description:
        "Receive follow-up resources, practices for home, and optional integration sessions after the program.",
    },
    {
      number: 6,
      title: "Life-Changing Results",
      description:
        "Many participants report this single day as one of the most significant experiences of their lives.",
    },
  ];

  // Testimonials (PHP) [file:3]
  const testimonials: Testimonial[] = [
    {
      text:
        "In just one day, I released decades of pain I'd been carrying. The breathwork session took me to places I didn't know existed within me. I left feeling lighter, clearer, and more alive than I've felt in years. This program gave me my life back.",
      initials: "SM",
      name: "Sita Maharjan",
      role: "Entrepreneur",
      location: "Kathmandu",
    },
    {
      text:
        "I was skeptical that one day could really change anything, but I was desperate. This program exceeded all expectations. I finally understood patterns I've been repeating my whole life and gained practical tools to break them. Six months later, my relationships, career, and inner peace have completely transformed.",
      initials: "RB",
      name: "Rajesh Basnet",
      role: "Software Engineer",
      location: "Pokhara",
    },
  ];

  // CTA (PHP book section) [file:3]
  const ctaButtons = [
    { icon: "✅", label: "Reserve Your Spot", href: "/contact" },
    { icon: "📞", label: "Call Us", href: "tel:+9779818514837" },
  ];

  // Sidebar pricing (PHP) [file:3]
  const priceInfo = {
    label: "Complete Program",
    amount: "12,000",
    duration: "Full Day 8 Hours",
    includes: [
      "All sessions included",
      "Lunch & refreshments",
      "Materials & journal",
      "Follow-up resources",
      "Certificate of completion",
    ],
  };

  // PHP “Upcoming Dates” list includes Jan 12, 2026 etc. [file:3]
  // If you prefer these exact dates instead of generated ones, tell me and I’ll hardcode them.
  const batches = generateUpcomingBatches({
    intervalMonths: 1,
    totalBatches: 3,
    batchDay: 12,
  });

  const contact = {
    phone: ["+977 9818514837"],
    email: "info@jivanparivartan.com",
    address: "Tarkeshwor-5, Kathmandu",
  };

  return (
    <div className="min-h-screen bg-[#faf6f1] bg-[url('/img/design/color-page.jpg')] bg-repeat bg-center">
      <Breadcrumb items={breadcrumbItems} />

      <PageHero
        badge={{ icon: "🔮", text: "Life-Changing Experience" }}
        title="One Day Special Transformation Program"
        subtitle="Break Through Limitations, Release Patterns & Awaken Your True Potential"
        stats={heroStats}
        ctas={heroCTAs}
        variant="green"
        backgroundImage="/img/transformation-hero.jpg"
      />

      {/* Keep red until QuickNavigation supports purple without crashing */}
      <QuickNavigation items={quickNavItems} variant="red" />

      <div className="max-w-[1400px] mx-auto px-5 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12">
          {/* Main */}
          <div>
            {/* Overview */}
            <section
              id="overview"
              className="bg-gradient-to-br from-white to-purple-50 p-10 md:p-8 sm:p-6 rounded-2xl shadow-lg border-t-4 border-purple-700"
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

            {/* Schedule */}
            <section id="schedule" className="mt-14">
              <div className="text-center mb-10">
                <h2 className="text-4xl md:text-3xl font-extrabold text-gray-900">
                  Your Transformation Journey
                </h2>
                <p className="mt-3 text-gray-600 text-lg md:text-base">
                  Carefully designed 8-hour intensive program
                </p>
              </div>

              <div className="space-y-7">
                {schedule.map((s) => (
                  <div
                    key={`${s.time}-${s.title}`}
                    className="bg-white rounded-2xl p-10 md:p-8 sm:p-6 shadow-lg border-l-[6px] border-purple-700 relative overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 w-28 h-28 bg-gradient-to-br from-purple-50 to-transparent rounded-bl-full opacity-70" />

                    <div className="flex items-start justify-between gap-6 flex-wrap relative z-[1]">
                      <div className="flex items-center gap-5">
                        <span className="inline-flex items-center px-5 py-2 rounded-full text-sm font-extrabold text-white bg-gradient-to-br from-purple-700 to-purple-900 shadow-sm">
                          {s.time}
                        </span>

                        <h3 className="text-2xl md:text-xl font-extrabold text-gray-900">
                          {s.title}
                        </h3>
                      </div>

                      <span className="inline-flex items-center px-5 py-2 rounded-full text-sm font-bold text-purple-800 bg-gradient-to-br from-purple-50 to-white border border-purple-200">
                        {s.tag}
                      </span>
                    </div>

                    <p className="mt-6 text-gray-700 leading-relaxed text-[16px] md:text-[15px] relative z-[1]">
                      {s.description}
                    </p>

                    {s.bullets?.length ? (
                      <ul className="mt-5 space-y-2 text-gray-700 text-[15px] relative z-[1]">
                        {s.bullets.map((b) => (
                          <li key={b} className="flex gap-2">
                            <span className="text-purple-700 font-extrabold">•</span>
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                ))}
              </div>
            </section>

            {/* Areas */}
            <section id="areas" className="mt-14">
              <div className="text-center mb-10">
                <h2 className="text-4xl md:text-3xl font-extrabold text-gray-900">
                  Areas of Transformation
                </h2>
                <p className="mt-3 text-gray-600 text-lg md:text-base">
                  What you'll shift in just one day
                </p>
              </div>

              <div className="grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-7">
                {areas.map((a) => (
                  <div
                    key={a.title}
                    className="bg-white rounded-2xl p-10 md:p-8 sm:p-6 text-center shadow-md hover:shadow-xl transition-all border-t-[3px] border-purple-700"
                  >
                    <div className="text-5xl mb-5">{a.icon}</div>
                    <h3 className="text-xl font-extrabold text-gray-900 mb-3">
                      {a.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-[15px]">
                      {a.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* What to Expect */}
            <section id="expect" className="mt-14">
              <div className="text-center mb-10">
                <h2 className="text-4xl md:text-3xl font-extrabold text-gray-900">
                  What to Expect
                </h2>
                <p className="mt-3 text-gray-600 text-lg md:text-base">
                  Preparing for your transformation day
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-1 gap-6">
                {expect.map((e) => (
                  <div
                    key={e.number}
                    className="bg-white rounded-2xl p-6 shadow-sm flex gap-4 items-start border-l-4 border-purple-700"
                  >
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-700 to-purple-900 text-white font-extrabold flex items-center justify-center shrink-0">
                      {e.number}
                    </div>
                    <div>
                      <h4 className="text-lg font-extrabold text-gray-900 mb-1">
                        {e.title}
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {e.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Testimonials */}
            <section
              id="stories"
              className="mt-14 bg-gradient-to-br from-purple-50 to-white rounded-2xl p-10 md:p-8 sm:p-6 shadow-lg"
            >
              <div className="text-center mb-10">
                <h2 className="text-4xl md:text-3xl font-extrabold text-gray-900">
                  Transformation Stories
                </h2>
                <p className="mt-3 text-gray-600 text-lg md:text-base">
                  What past participants experienced
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-1 gap-6">
                {testimonials.map((t) => (
                  <div
                    key={t.name}
                    className="bg-white rounded-2xl p-8 shadow-sm border-l-4 border-purple-700"
                  >
                    <p className="text-gray-700 leading-relaxed italic">
                      {t.text}
                    </p>

                    <div className="mt-6 flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-700 to-purple-900 text-white font-extrabold flex items-center justify-center">
                        {t.initials}
                      </div>
                      <div>
                        <h4 className="text-base font-extrabold text-gray-900 leading-tight">
                          {t.name}
                        </h4>
                        <p className="text-sm text-gray-600">
                          {t.role}, {t.location}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* CTA / Book */}
            <section id="book" className="mt-14">
              <CTASection
                title="Ready for Your Transformation?"
                description="Limited spaces available—reserve your spot today"
                buttons={ctaButtons}
                variant="green"
                backgroundEmoji="🔮"
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
