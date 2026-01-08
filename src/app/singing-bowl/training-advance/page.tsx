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

type DaySchedule = {
  dayNumber: number;
  title: string;
  duration: string;
  morning: string;
  afternoon: string;
};

type CurriculumModule = {
  icon: string;
  title: string;
  topics: string[];
};

type BusinessCard = {
  icon: string;
  title: string;
  description: string;
};

type PrerequisiteList = {
  title: string;
  items: string[];
};

type CertFeature = {
  icon: string;
  title: string;
  description: string;
};

export default function ProfessionalPractitionerCoursePage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Singing Bowl", href: "/singing-bowl" },
    { label: "Training", href: "/singing-bowl/training" },
    { label: "Professional Course" },
  ];

  const quickNavItems = [
    { id: "overview", icon: "📋", label: "Overview", href: "#overview" },
    { id: "benefits", icon: "💼", label: "Professional Benefits", href: "#benefits" },
    { id: "schedule", icon: "📅", label: "7-Day Schedule", href: "#schedule" },
    { id: "curriculum", icon: "📚", label: "Curriculum", href: "#curriculum" },
    { id: "business", icon: "💡", label: "Business Training", href: "#business" },
    { id: "prerequisites", icon: "✅", label: "Prerequisites", href: "#prerequisites" },
    { id: "enroll", icon: "✍️", label: "Enroll Now", href: "#enroll" },
  ];

  const heroStats = [
    { number: "7 Days", label: "Intensive" },
    { number: "35 Hours", label: "Training" },
    { number: "10", label: "Max Students" },
    { number: "$650", label: "Investment" },
  ];

  const heroCTAs = [
    { label: "Enroll Now", href: "#enroll", primary: true },
    { label: "View Curriculum", href: "#curriculum" },
  ];

  const overviewTitle = "Professional Training Overview";
  const overviewParagraphs = [
    "This comprehensive 7-day intensive course is designed for individuals serious about building a professional sound healing practice. Whether you're transitioning careers, adding sound healing to your existing wellness services, or pursuing your calling as a healer, this training provides everything you need to practice confidently and effectively as a certified sound healing practitioner.",
    "Over 35 hours of in-depth training, you'll master advanced singing bowl techniques, conduct full healing sessions, understand energy anatomy and chakra systems, integrate multiple healing modalities, work with diverse client needs, build ethical practices, and develop business skills for a sustainable practice. This course goes far beyond basic bowl playing—you'll learn the art, science, and business of professional sound healing. Graduates leave ready to serve clients immediately with confidence, competence, and professionalism.",
  ];

  // Professional Benefits from PHP
  const benefits: BenefitCard[] = [
    {
      icon: "💼",
      title: "Career Opportunities",
      description: "Launch your own practice or work in spas, yoga studios, wellness centers.",
    },
    {
      icon: "🎓",
      title: "Professional Credentials",
      description: "Internationally recognized certification for credibility and insurance.",
    },
    {
      icon: "💰",
      title: "Income Potential",
      description: "Charge $80-150 per session with skills that pay for themselves quickly.",
    },
    {
      icon: "🎵",
      title: "Advanced Techniques",
      description: "Master professional-level skills not taught in basic courses.",
    },
    {
      icon: "👥",
      title: "Diverse Clientele",
      description: "Learn to work with various conditions, ages, and client needs.",
    },
    {
      icon: "📊",
      title: "Business Training",
      description: "Marketing, pricing, legalities—everything to run a successful practice.",
    },
    {
      icon: "📚",
      title: "Continuing Education",
      description: "Lifetime access to advanced workshops and refresher trainings.",
    },
    {
      icon: "🌐",
      title: "Professional Network",
      description: "Join a global community of practitioners for referrals and support.",
    },
    {
      icon: "❤️",
      title: "Meaningful Work",
      description: "Build a fulfilling career helping others heal and transform.",
    },
  ];

  // 7-Day Schedule from PHP
  const schedule: DaySchedule[] = [
    {
      dayNumber: 1,
      title: "Foundations & Advanced Techniques",
      duration: "5 Hours",
      morning:
        "Welcome, course overview, professional ethics and standards, review of basic techniques, advanced bowl playing methods (multiple strikers, complex rhythms, harmonic layering), working with different bowl types and materials.",
      afternoon:
        "Sound theory deep dive—frequency, harmonics, binaural beats, entrainment, scientific research on sound healing, how sound affects brainwaves and nervous system, practical applications of theory.",
    },
    {
      dayNumber: 2,
      title: "Energy Anatomy & Chakra Mastery",
      duration: "5 Hours",
      morning:
        "Comprehensive chakra system study—seven main chakras, minor chakras, kundalini energy, chakra assessment techniques, identifying imbalances, understanding psychological and emotional correlations.",
      afternoon:
        "Advanced chakra balancing protocols, working with specific chakra issues, using bowl frequencies for targeted healing, integrating crystals and essential oils with sound, hands-on practice with partner work.",
    },
    {
      dayNumber: 3,
      title: "Full Session Protocols",
      duration: "5 Hours",
      morning:
        "Structuring professional sessions—intake process, client assessment, creating treatment plans, session flow and timing, creating sacred space, setting intentions, opening and closing rituals.",
      afternoon:
        "Hands-on session practice—conducting full 60-90 minute sessions, working with real clients (volunteers), receiving supervision and feedback, refining techniques and presence.",
    },
    {
      dayNumber: 4,
      title: "Specialized Applications",
      duration: "5 Hours",
      morning:
        "Working with specific conditions—anxiety and stress, depression, trauma and PTSD, chronic pain, insomnia, grief and loss, life transitions, contraindications and safety protocols.",
      afternoon:
        "Sound bath creation and facilitation—designing group sound healing experiences, working with multiple participants, venue selection and setup, combining instruments (bowls, gongs, chimes), guided meditation integration.",
    },
    {
      dayNumber: 5,
      title: "Multi-Modal Integration",
      duration: "5 Hours",
      morning:
        "Integrating sound with other modalities—Reiki and energy healing, massage therapy, yoga and movement, counseling and talk therapy, aromatherapy, crystal healing, breathwork.",
      afternoon:
        "Distance/remote sound healing techniques, recording therapeutic sound tracks, creating guided meditations with bowls, online session best practices, technology and equipment for virtual sessions.",
    },
    {
      dayNumber: 6,
      title: "Business & Professional Practice",
      duration: "5 Hours",
      morning:
        "Setting up your practice—business structure options, licensing and insurance requirements, pricing strategies, policies and forms, record keeping, professional boundaries and ethics.",
      afternoon:
        "Marketing and client attraction—building your brand, website and social media, creating service offerings, networking strategies, partnerships with wellness centers, teaching workshops, growing your practice sustainably.",
    },
    {
      dayNumber: 7,
      title: "Assessment & Certification",
      duration: "5 Hours",
      morning:
        "Final practice sessions—demonstrate full session protocol, receive final feedback and guidance, Q&A on any remaining topics, reviewing key concepts and techniques.",
      afternoon:
        "Written assessment on theory and ethics, practical skills demonstration, creating your personal action plan for launching practice, certificate ceremony, closing circle and celebration!",
    },
  ];

  // Advanced Curriculum from PHP
  const curriculumModules: CurriculumModule[] = [
    {
      icon: "🎵",
      title: "Advanced Techniques",
      topics: [
        "Multiple striker techniques",
        "Harmonic layering and overtones",
        "Complex rhythmic patterns",
        "Bowl combinations and sequencing",
        "Intuitive playing and improvisation",
        "Working with large and small bowls",
        "Maintenance and bowl selection",
      ],
    },
    {
      icon: "⚡",
      title: "Energy Healing",
      topics: [
        "Seven chakra system mastery",
        "Energy assessment techniques",
        "Aura reading and cleansing",
        "Kundalini and energy channels",
        "Blockage identification",
        "Balancing protocols",
        "Protecting your own energy",
      ],
    },
    {
      icon: "👤",
      title: "Client Work",
      topics: [
        "Professional intake procedures",
        "Client assessment methods",
        "Treatment planning",
        "Session structuring (60-90 min)",
        "Working with diverse needs",
        "Contraindications and safety",
        "Follow-up and progression",
      ],
    },
    {
      icon: "🎯",
      title: "Specialized Protocols",
      topics: [
        "Stress and anxiety relief",
        "Trauma-informed approaches",
        "Chronic pain management",
        "Sleep disorders",
        "Emotional healing and grief",
        "Life transitions support",
        "Spiritual awakening facilitation",
      ],
    },
    {
      icon: "🔔",
      title: "Sound Bath Facilitation",
      topics: [
        "Designing group experiences",
        "Venue selection and setup",
        "Working with multiple instruments",
        "Group dynamics management",
        "Combining sound with meditation",
        "Creating themed sound journeys",
        "Marketing group events",
      ],
    },
    {
      icon: "🔗",
      title: "Integration Methods",
      topics: [
        "Sound with Reiki energy work",
        "Integration with massage",
        "Yoga and movement pairing",
        "Crystal therapy combination",
        "Aromatherapy enhancement",
        "Breathwork synchronization",
        "Counseling integration",
      ],
    },
  ];

  // Business Training from PHP
  const businessCards: BusinessCard[] = [
    {
      icon: "🏢",
      title: "Business Setup",
      description: "Legal structures, licensing, insurance, policies, contracts.",
    },
    {
      icon: "💵",
      title: "Pricing Strategy",
      description: "Setting rates, packages, discounts, payment processing.",
    },
    {
      icon: "📱",
      title: "Marketing & Branding",
      description: "Website, social media, SEO, content marketing strategies.",
    },
    {
      icon: "📅",
      title: "Scheduling Systems",
      description: "Online booking, CRM, client management software.",
    },
    {
      icon: "🤝",
      title: "Networking",
      description: "Building referral relationships, partnerships, collaborations.",
    },
    {
      icon: "📈",
      title: "Growth Strategies",
      description: "Scaling your practice, teaching workshops, online offerings.",
    },
  ];

  // Prerequisites from PHP
  const prerequisites: PrerequisiteList[] = [
    {
      title: "Recommended Background",
      items: [
        "Basic Course completion or equivalent",
        "Some experience with singing bowls",
        "Understanding of chakras helpful",
        "Meditation or wellness background beneficial",
        "Genuine calling to healing work",
        "Commitment to professional practice",
      ],
    },
    {
      title: "What You'll Need",
      items: [
        "Comfortable clothing for 7 days",
        "Notebook and writing materials",
        "Open mind and dedicated focus",
        "Physical ability to play bowls",
        "Willingness to practice and grow",
        "Bowls provided during training",
      ],
    },
  ];

  // Certification Features from PHP
  const certFeatures: CertFeature[] = [
    {
      icon: "💼",
      title: "Practice Professionally",
      description: "Offer paid sessions to clients",
    },
    {
      icon: "🔔",
      title: "Facilitate Sound Baths",
      description: "Host group healing events",
    },
    {
      icon: "👨‍🏫",
      title: "Teach Workshops",
      description: "Share sound healing basics",
    },
    {
      icon: "🏆",
      title: "Register Professionally",
      description: "Join healing associations",
    },
  ];

  const certificationDescription =
    "Upon successful completion of the 7-day Professional Practitioner Course, including practical demonstrations and written assessment, you'll receive an official Professional Sound Healing Practitioner Certificate from Jivan Parivartan Sound Healing Academy, recognized internationally and qualifying you to:";

  // Sidebar data
  const priceInfo = {
    label: "Professional Course",
    amount: "$650",
    duration: "7 Days • 35 Hours",
    includes: [
      "35 hours intensive training",
      "Comprehensive manual",
      "Practice bowls provided",
      "Professional certificate",
      "Business startup kit",
      "Meals & refreshments",
      "Lifetime mentorship",
    ],
  };

  const batches = generateUpcomingBatches({
    intervalMonths: 1,
    totalBatches: 4,
    batchDay: 15,
  });

  const contact = {
    phone: ["+977 9818514837", "+977 9863049261"],
    email: "info@jivanparivartan.com",
    address: "Tarkeshwor-5, Kathmandu",
  };

  const ctaButtons = [
    { icon: "✍️", label: "Enroll Now", href: "#" },
    { icon: "📞", label: "Call to Discuss", href: "tel:+9779818514837" },
  ];

  return (
    <div className="min-h-screen bg-[#faf6f1] bg-[url('/img/design/color-page.jpg')] bg-repeat bg-center">
      <Breadcrumb items={breadcrumbItems} />

      <PageHero
        badge={{ icon: "🎓", text: "Professional Level" }}
        title="Professional Practitioner Course"
        subtitle="Become a Certified Sound Healing Professional"
        stats={heroStats}
        ctas={heroCTAs}
        variant="green"
        backgroundImage="https://images.unsplash.com/photo-1600618528240-fb9fc964b853?q=80&w=2670&auto=format&fit=crop"
      />

      <QuickNavigation items={quickNavItems} variant="red" />

      <div className="max-w-[1400px] mx-auto px-5 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12">
          {/* Main Content */}
          <div>
            {/* Overview */}
            <section
              id="overview"
              className="bg-gradient-to-br from-white to-purple-50 p-10 md:p-8 sm:p-6 rounded-2xl shadow-lg border-t-[5px] border-purple-600"
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

            {/* Professional Benefits */}
            <section id="benefits" className="mt-14 mb-[10px]">
              <div className="text-center mb-10">
                <h2 className="text-4xl md:text-3xl font-extrabold text-gray-900">
                  Why Choose Professional Training
                </h2>
                <p className="mt-3 text-gray-600 text-lg md:text-base">
                  Benefits of becoming a certified practitioner
                </p>
              </div>

              <div className="grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-7">
                {benefits.map((b) => (
                  <div
                    key={b.title}
                    className="bg-white rounded-2xl p-10 md:p-8 sm:p-6 text-center shadow-md hover:shadow-xl transition-all border-t-[4px] border-purple-600"
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

            {/* 7-Day Schedule */}
            <section
              id="schedule"
              className="mt-14 bg-gradient-to-br from-purple-50 to-white rounded-2xl p-10 md:p-8 sm:p-6 shadow-lg"
            >
              <div className="text-center mb-10">
                <h2 className="text-4xl md:text-3xl font-extrabold text-gray-900">
                  7-Day Professional Training Schedule
                </h2>
                <p className="mt-3 text-gray-600 text-lg md:text-base">
                  Intensive curriculum covering all aspects of professional practice
                </p>
              </div>

              <div className="space-y-8">
                {schedule.map((day) => (
                  <div key={day.dayNumber} className="space-y-5">
                    <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-xl p-6 flex justify-between items-center">
                      <h3 className="text-2xl font-extrabold">
                        Day {day.dayNumber}: {day.title}
                      </h3>
                      <span className="text-sm opacity-90">{day.duration}</span>
                    </div>

                    <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-purple-600">
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-bold text-gray-900 text-[16px] mb-2">
                            Morning:
                          </h4>
                          <p className="text-gray-700 text-[15px] leading-relaxed">
                            {day.morning}
                          </p>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900 text-[16px] mb-2">
                            Afternoon:
                          </h4>
                          <p className="text-gray-700 text-[15px] leading-relaxed">
                            {day.afternoon}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Advanced Curriculum */}
            <section id="curriculum" className="mt-14 mb-[10px]">
              <div className="text-center mb-10">
                <h2 className="text-4xl md:text-3xl font-extrabold text-gray-900">
                  Comprehensive Curriculum
                </h2>
                <p className="mt-3 text-gray-600 text-lg md:text-base">
                  Advanced topics covered in professional training
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-1 gap-7">
                {curriculumModules.map((module) => (
                  <div
                    key={module.title}
                    className="bg-white rounded-2xl p-10 md:p-8 sm:p-6 shadow-lg border-l-[5px] border-purple-600"
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-600 to-purple-700 text-white text-2xl flex items-center justify-center shrink-0">
                        {module.icon}
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

            {/* Business Training */}
            <section
              id="business"
              className="mt-14 bg-gradient-to-br from-purple-50 to-white rounded-2xl p-10 md:p-8 sm:p-6 shadow-lg"
            >
              <div className="text-center mb-10">
                <h2 className="text-4xl md:text-3xl font-extrabold text-gray-900">
                  Business & Practice Management
                </h2>
                <p className="mt-3 text-gray-600 text-lg md:text-base">
                  Everything you need to build a successful sound healing practice
                </p>
              </div>

              <div className="grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6">
                {businessCards.map((card) => (
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

            {/* Prerequisites */}
            <section
              id="prerequisites"
              className="mt-14 bg-white rounded-2xl p-10 md:p-8 sm:p-6 shadow-lg border-l-[5px] border-purple-600"
            >
              <h2 className="text-3xl md:text-2xl font-extrabold text-gray-900 mb-10 text-center">
                Prerequisites & Requirements
              </h2>

              <div className="grid grid-cols-2 md:grid-cols-1 gap-10">
                {prerequisites.map((req) => (
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

            {/* CTA */}
            <section id="enroll" className="mt-14">
              <CTASection
                title="Launch Your Professional Sound Healing Career"
                description="Transform lives while building a meaningful, sustainable practice"
                buttons={ctaButtons}
                variant="green"
                backgroundEmoji="🎓"
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
