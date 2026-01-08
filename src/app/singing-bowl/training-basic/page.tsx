import React from "react";
import { Breadcrumb } from "@/components/jivan/Breadcrumb";
import { PageHero } from "@/components/jivan/PageHero";
import { QuickNavigation } from "@/components/jivan/QuickNavigation";
import { CTASection } from "@/components/jivan/yoga/CTASection";
import { SidebarWidget } from "@/components/jivan/SidebarWidget";
import { generateUpcomingBatches } from "@/utils/batchGenerator";

type HighlightCard = {
  icon: string;
  title: string;
  description: string;
};

type SessionItem = {
  time: string;
  title: string;
  description: string;
};

type DaySchedule = {
  dayNumber: number;
  title: string;
  duration: string;
  sessions: SessionItem[];
};

type CurriculumModule = {
  number: number;
  title: string;
  topics: string[];
};

type AudienceCard = {
  icon: string;
  title: string;
  description: string;
};

type RequirementList = {
  title: string;
  items: string[];
};

type CertFeature = {
  icon: string;
  title: string;
  description: string;
};

export default function BasicSoundHealingCoursePage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Singing Bowl", href: "/singing-bowl" },
    { label: "Training", href: "/singing-bowl/training" },
    { label: "Basic Course" },
  ];

  const quickNavItems = [
    { id: "overview", icon: "📋", label: "Overview", href: "#overview" },
    { id: "highlights", icon: "✨", label: "Course Highlights", href: "#highlights" },
    { id: "schedule", icon: "📅", label: "Schedule", href: "#schedule" },
    { id: "curriculum", icon: "📚", label: "What You'll Learn", href: "#curriculum" },
    { id: "audience", icon: "👥", label: "Who Should Attend", href: "#audience" },
    { id: "requirements", icon: "📝", label: "Requirements", href: "#requirements" },
    { id: "enroll", icon: "✍️", label: "Enroll Now", href: "#enroll" },
  ];

  const heroStats = [
    { number: "3 Days", label: "Duration" },
    { number: "15 Hours", label: "Training" },
    { number: "10", label: "Max Students" },
    { number: "$250", label: "Investment" },
  ];

  const heroCTAs = [
    { label: "Enroll Now", href: "#enroll", primary: true },
    { label: "View Schedule", href: "#schedule" },
  ];

  const overviewTitle = "Course Overview";
  const overviewParagraphs = [
    "Welcome to the world of sound healing! This 3-day intensive introductory course is designed for complete beginners who want to learn the fundamentals of Tibetan Singing Bowl therapy. No prior experience is required—just an open mind and willingness to learn. Over 15 hours of hands-on training, you'll discover the ancient art of using sound vibrations for healing, relaxation, and meditation.",
    "Our expert instructors will guide you through proper bowl selection, playing techniques, basic sound theory, and simple healing protocols. You'll learn to use singing bowls for personal self-care, informal sessions with friends and family, meditation enhancement, and creating peaceful environments. By the end of this course, you'll have the confidence and skills to begin your sound healing journey, with solid foundations to build upon if you choose to pursue professional training.",
  ];

  // Course Highlights from PHP
  const highlights: HighlightCard[] = [
    {
      icon: "🙌",
      title: "Hands-On Practice",
      description: "70% practical training with real singing bowls under expert guidance.",
    },
    {
      icon: "👨‍🏫",
      title: "Expert Instruction",
      description: "Learn from masters with 15+ years of teaching experience.",
    },
    {
      icon: "📖",
      title: "Complete Manual",
      description: "Comprehensive training manual with illustrations and techniques.",
    },
    {
      icon: "🏆",
      title: "Certificate",
      description: "Official certificate of completion for your achievement.",
    },
    {
      icon: "👥",
      title: "Small Groups",
      description: "Maximum 10 students ensures personalized attention.",
    },
    {
      icon: "♾️",
      title: "Lifetime Access",
      description: "Join alumni network with ongoing support and resources.",
    },
  ];

  // 3-Day Schedule from PHP
  const schedule: DaySchedule[] = [
    {
      dayNumber: 1,
      title: "Foundations & Bowl Basics",
      duration: "5 Hours",
      sessions: [
        {
          time: "9:00 AM",
          title: "Welcome & Introduction",
          description:
            "Course overview, introductions, setting intentions, understanding sound healing history.",
        },
        {
          time: "10:00 AM",
          title: "Understanding Singing Bowls",
          description:
            "Types of bowls, materials, how they're made, choosing quality bowls, care and maintenance.",
        },
        {
          time: "11:30 AM",
          title: "Basic Playing Techniques",
          description:
            "Holding the bowl, striker techniques, creating pure tones, rim singing, troubleshooting common issues.",
        },
        {
          time: "1:00 PM",
          title: "Lunch Break",
          description: "Light meal provided. Rest and integrate morning learning.",
        },
        {
          time: "2:00 PM",
          title: "Sound Theory Basics",
          description:
            "Frequency, vibration, resonance, how sound affects the body, scientific research on sound healing.",
        },
        {
          time: "3:30 PM",
          title: "Practice Session",
          description:
            "Hands-on practice with different bowl types, feedback from instructor, Q&A.",
        },
      ],
    },
    {
      dayNumber: 2,
      title: "Chakras & Healing Applications",
      duration: "5 Hours",
      sessions: [
        {
          time: "9:00 AM",
          title: "Introduction to Chakras",
          description:
            "Seven chakra system, locations, colors, functions, signs of imbalance, how sound affects chakras.",
        },
        {
          time: "10:30 AM",
          title: "Chakra Bowl Selection",
          description:
            "Matching bowls to chakras, understanding frequencies, creating chakra sets, testing bowls.",
        },
        {
          time: "12:00 PM",
          title: "Self-Healing Techniques",
          description:
            "Using bowls for personal healing, meditation with bowls, stress relief, grounding practices.",
        },
        {
          time: "1:00 PM",
          title: "Lunch Break",
          description: "Healthy meal and rest period.",
        },
        {
          time: "2:00 PM",
          title: "Simple Healing Protocols",
          description:
            "Basic session structure, working with others, creating sacred space, setting intentions.",
        },
        {
          time: "3:30 PM",
          title: "Partner Practice",
          description:
            "Practice sessions in pairs, giving and receiving healing, feedback and refinement.",
        },
      ],
    },
    {
      dayNumber: 3,
      title: "Integration & Practical Skills",
      duration: "5 Hours",
      sessions: [
        {
          time: "9:00 AM",
          title: "Creating Sound Baths",
          description:
            "Designing simple sound bath experiences, sequencing, timing, combining multiple bowls.",
        },
        {
          time: "10:30 AM",
          title: "Working with Different Needs",
          description:
            "Adapting sessions for stress, anxiety, sleep issues, pain relief, emotional release.",
        },
        {
          time: "12:00 PM",
          title: "Ethics & Best Practices",
          description:
            "Professional conduct, boundaries, contraindications, safety considerations.",
        },
        {
          time: "1:00 PM",
          title: "Lunch Break",
          description: "Final meal together, informal discussion.",
        },
        {
          time: "2:00 PM",
          title: "Final Practice & Assessment",
          description:
            "Demonstrate learned techniques, receive personalized feedback, address remaining questions.",
        },
        {
          time: "3:30 PM",
          title: "Closing Ceremony",
          description:
            "Group sound bath experience, certificate presentation, next steps guidance, celebration!",
        },
      ],
    },
  ];

  // Curriculum Modules from PHP
  const curriculumModules: CurriculumModule[] = [
    {
      number: 1,
      title: "Bowl Mastery",
      topics: [
        "Types and materials of singing bowls",
        "How to select quality bowls",
        "Proper holding techniques",
        "Striker methods and variations",
        "Creating clear, pure tones",
        "Rim singing techniques",
        "Bowl care and maintenance",
      ],
    },
    {
      number: 2,
      title: "Sound Theory",
      topics: [
        "Frequency and vibration basics",
        "How sound affects the body",
        "Resonance principles",
        "Scientific research overview",
        "Brainwave states and sound",
        "Therapeutic applications",
      ],
    },
    {
      number: 3,
      title: "Chakra System",
      topics: [
        "Seven main chakras explained",
        "Chakra locations and functions",
        "Signs of chakra imbalance",
        "Matching bowls to chakras",
        "Chakra healing sequences",
        "Balancing techniques",
      ],
    },
    {
      number: 4,
      title: "Healing Practice",
      topics: [
        "Self-healing with bowls",
        "Simple session protocols",
        "Creating sacred space",
        "Working with others safely",
        "Stress relief techniques",
        "Meditation enhancement",
        "Basic sound bath creation",
      ],
    },
  ];

  // Who Should Attend from PHP
  const audienceCards: AudienceCard[] = [
    {
      icon: "🌟",
      title: "Wellness Enthusiasts",
      description: "Anyone interested in holistic healing and personal development.",
    },
    {
      icon: "🌱",
      title: "Beginners",
      description: "No experience needed—start from scratch with expert guidance.",
    },
    {
      icon: "💆",
      title: "Therapists",
      description: "Massage therapists, counselors wanting to add sound healing.",
    },
    {
      icon: "🧘",
      title: "Yoga Teachers",
      description: "Enhance classes with singing bowl techniques.",
    },
    {
      icon: "😌",
      title: "Stress Managers",
      description: "Professionals seeking effective stress relief tools.",
    },
    {
      icon: "🙏",
      title: "Spiritual Seekers",
      description: "Those exploring meditation and spiritual practices.",
    },
  ];

  // Requirements from PHP
  const requirements: RequirementList[] = [
    {
      title: "No Prerequisites Needed",
      items: [
        "No prior experience required",
        "No musical background needed",
        "Open to all ages 16+",
        "Just bring curiosity and openness",
      ],
    },
    {
      title: "What to Bring",
      items: [
        "Comfortable clothing",
        "Notebook for taking notes",
        "Water bottle",
        "Open mind and heart",
        "Bowls provided for training",
      ],
    },
  ];

  // Certification Features from PHP
  const certFeatures: CertFeature[] = [
    {
      icon: "🧘‍♀️",
      title: "Personal Practice",
      description: "Use bowls confidently for self-healing",
    },
    {
      icon: "🤝",
      title: "Share With Others",
      description: "Offer informal sessions to family & friends",
    },
    {
      icon: "📈",
      title: "Continue Learning",
      description: "Progress to Professional Practitioner Course",
    },
  ];

  const certificationDescription =
    "Upon successfully completing the 3-day Basic Sound Healing Course, you'll receive an official Certificate of Completion from Jivan Parivartan Sound Healing Academy. This certificate acknowledges your training in fundamental singing bowl techniques and qualifies you to:";

  // Sidebar data
  const priceInfo = {
    label: "Complete Course",
    amount: "$250",
    duration: "3 Days • 15 Hours",
    includes: [
      "All training sessions",
      "Training manual",
      "Practice bowls provided",
      "Certificate",
      "Tea & refreshments",
      "Lifetime alumni support",
    ],
  };

  const batches = generateUpcomingBatches({
    intervalMonths: 1,
    totalBatches: 4,
    batchDay: 10,
  });

  const contact = {
    phone: ["+977 9818514837", "+977 9863049261"],
    email: "info@jivanparivartan.com",
    address: "Tarkeshwor-5, Kathmandu",
  };

  const ctaButtons = [
    { icon: "✍️", label: "Enroll Now", href: "#" },
    { icon: "📞", label: "Call to Book", href: "tel:+9779818514837" },
  ];

  return (
    <div className="min-h-screen bg-[#faf6f1] bg-[url('/img/design/color-page.jpg')] bg-repeat bg-center">
      <Breadcrumb items={breadcrumbItems} />

      <PageHero
        badge={{ icon: "🎓", text: "Beginner Level" }}
        title="Basic Sound Healing Course"
        subtitle="Your Introduction to Singing Bowl Therapy"
        stats={heroStats}
        ctas={heroCTAs}
        variant="green"
        backgroundImage="https://images.unsplash.com/photo-1599447292795-755c8f91d921?q=80&w=2670&auto=format&fit=crop"
      />

      <QuickNavigation items={quickNavItems} variant="red" />

      <div className="max-w-[1400px] mx-auto px-5 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12">
          {/* Main Content */}
          <div>
            {/* Overview */}
            <section
              id="overview"
              className="bg-gradient-to-br from-white to-purple-50 p-10 md:p-8 sm:p-6 rounded-2xl shadow-lg border-t-4 border-purple-600"
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

            {/* Course Highlights */}
            <section id="highlights" className="mt-14 mb-[10px]">
              <div className="text-center mb-10">
                <h2 className="text-4xl md:text-3xl font-extrabold text-gray-900">
                  Course Highlights
                </h2>
                <p className="mt-3 text-gray-600 text-lg md:text-base">
                  What makes this training special
                </p>
              </div>

              <div className="grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-7">
                {highlights.map((h) => (
                  <div
                    key={h.title}
                    className="bg-white rounded-2xl p-10 md:p-8 sm:p-6 text-center shadow-md hover:shadow-xl transition-all border-t-[3px] border-purple-600"
                  >
                    <div className="text-5xl mb-5">{h.icon}</div>
                    <h3 className="text-xl font-extrabold text-gray-900 mb-3">
                      {h.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-[15px]">
                      {h.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Daily Schedule */}
            <section
              id="schedule"
              className="mt-14 bg-gradient-to-br from-purple-50 to-white rounded-2xl p-10 md:p-8 sm:p-6 shadow-lg"
            >
              <div className="text-center mb-10">
                <h2 className="text-4xl md:text-3xl font-extrabold text-gray-900">
                  3-Day Training Schedule
                </h2>
                <p className="mt-3 text-gray-600 text-lg md:text-base">
                  Detailed breakdown of what you'll learn each day
                </p>
              </div>

              <div className="space-y-10">
                {schedule.map((day) => (
                  <div key={day.dayNumber} className="space-y-5">
                    <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-xl p-6 flex justify-between items-center">
                      <h3 className="text-2xl font-extrabold">
                        Day {day.dayNumber}: {day.title}
                      </h3>
                      <span className="text-sm opacity-90">{day.duration}</span>
                    </div>

                    <div className="space-y-4">
                      {day.sessions.map((session, idx) => (
                        <div
                          key={idx}
                          className="flex gap-5 bg-white rounded-xl p-5 shadow-sm border-l-4 border-purple-600"
                        >
                          <div className="min-w-[90px] font-bold text-purple-600 text-[15px]">
                            {session.time}
                          </div>
                          <div className="flex-1">
                            <h4 className="text-[17px] font-extrabold text-gray-900 mb-2">
                              {session.title}
                            </h4>
                            <p className="text-gray-600 text-[14px] leading-relaxed">
                              {session.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Curriculum - What You'll Learn */}
            <section id="curriculum" className="mt-14 mb-[10px]">
              <div className="text-center mb-10">
                <h2 className="text-4xl md:text-3xl font-extrabold text-gray-900">
                  What You'll Learn
                </h2>
                <p className="mt-3 text-gray-600 text-lg md:text-base">
                  Comprehensive curriculum covering all essential topics
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-1 gap-7">
                {curriculumModules.map((module) => (
                  <div
                    key={module.number}
                    className="bg-white rounded-2xl p-10 md:p-8 sm:p-6 shadow-lg border-l-[5px] border-purple-600"
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-purple-700 text-white font-extrabold text-xl flex items-center justify-center shrink-0">
                        {module.number}
                      </div>
                      <h3 className="text-2xl font-extrabold text-gray-900">
                        {module.title}
                      </h3>
                    </div>

                    <ul className="space-y-3">
                      {module.topics.map((topic, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-3 text-gray-700 text-[15px] pb-3 border-b border-gray-100 last:border-0"
                        >
                          <span className="text-purple-600 text-lg font-bold mt-[-2px] shrink-0">
                            ✓
                          </span>
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Who Should Attend */}
            <section
              id="audience"
              className="mt-14 bg-gradient-to-br from-purple-50 to-white rounded-2xl p-10 md:p-8 sm:p-6 shadow-lg"
            >
              <div className="text-center mb-10">
                <h2 className="text-4xl md:text-3xl font-extrabold text-gray-900">
                  Who Should Attend
                </h2>
                <p className="mt-3 text-gray-600 text-lg md:text-base">
                  This course is perfect for
                </p>
              </div>

              <div className="grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6">
                {audienceCards.map((card) => (
                  <div
                    key={card.title}
                    className="bg-white rounded-xl p-6 text-center shadow-sm border-t-3 border-purple-600"
                  >
                    <div className="text-5xl mb-4">{card.icon}</div>
                    <h4 className="text-lg font-extrabold text-gray-900 mb-2">
                      {card.title}
                    </h4>
                    <p className="text-gray-600 text-[14px] leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Requirements */}
            <section
              id="requirements"
              className="mt-14 bg-white rounded-2xl p-10 md:p-8 sm:p-6 shadow-lg border-l-[5px] border-purple-600"
            >
              <h2 className="text-3xl md:text-2xl font-extrabold text-gray-900 mb-10 text-center">
                Prerequisites & What to Bring
              </h2>

              <div className="grid grid-cols-2 md:grid-cols-1 gap-10">
                {requirements.map((req) => (
                  <div key={req.title}>
                    <h3 className="text-2xl font-extrabold text-gray-900 mb-5">
                      {req.title}
                    </h3>
                    <ul className="space-y-3">
                      {req.items.map((item, idx) => (
                        <li
                          key={idx}
                          className="flex items-center gap-3 text-gray-700 text-[15px] pb-3 border-b border-gray-100 last:border-0"
                        >
                          <span className="text-purple-600 text-xl font-bold shrink-0">
                            ✓
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Certification */}
            <section className="mt-14 bg-gradient-to-br from-purple-600 to-purple-700 text-white rounded-2xl p-10 md:p-8 sm:p-6 shadow-lg text-center">
              <div className="text-8xl mb-6">🏆</div>
              <h2 className="text-3xl md:text-2xl font-extrabold mb-6">
                Certificate of Completion
              </h2>
              <p className="text-[17px] leading-relaxed opacity-95 max-w-3xl mx-auto mb-8">
                {certificationDescription}
              </p>

              <div className="grid grid-cols-3 md:grid-cols-1 gap-6 max-w-4xl mx-auto">
                {certFeatures.map((feat) => (
                  <div
                    key={feat.title}
                    className="bg-white/15 backdrop-blur-md rounded-xl p-6 border border-white/20"
                  >
                    <div className="text-4xl mb-3">{feat.icon}</div>
                    <h4 className="text-lg font-bold mb-2">{feat.title}</h4>
                    <p className="text-sm opacity-90">{feat.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* CTA */}
            <section id="enroll" className="mt-14">
              <CTASection
                title="Ready to Begin Your Sound Healing Journey?"
                description="Limited spots available—secure your place in the next batch"
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
