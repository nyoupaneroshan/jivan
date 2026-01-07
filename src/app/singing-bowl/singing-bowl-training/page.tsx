import React from "react";
import { Breadcrumb } from "@/components/jivan/Breadcrumb";
import { PageHero } from "@/components/jivan/PageHero";
import { QuickNavigation } from "@/components/jivan/QuickNavigation";
import { CTASection } from "@/components/jivan/yoga/CTASection";
import { SidebarWidget } from "@/components/jivan/SidebarWidget";
import { generateUpcomingBatches } from "@/utils/batchGenerator";

type TrainingCourse = {
  icon: string;
  title: string;
  level: string;
  duration: string;
  price: string;
  description: string;
  highlights: string[];
  detailsLink: string;
};

type WhyChooseCard = {
  icon: string;
  title: string;
  description: string;
};

type CertificationBenefit = string;

export default function SingingBowlTrainingPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Singing Bowl", href: "/singing-bowl" },
    { label: "Training Programs" },
  ];

  const quickNavItems = [
    { id: "overview", icon: "📋", label: "Overview", href: "#overview" },
    { id: "courses", icon: "🎓", label: "Training Programs", href: "#courses" },
    { id: "why-us", icon: "⭐", label: "Why Train With Us", href: "#why-us" },
    { id: "certification", icon: "🏆", label: "Certification", href: "#certification" },
    { id: "enroll", icon: "✍️", label: "Enroll Now", href: "#enroll" },
  ];

  const heroStats = [
    { number: "3-7", label: "Days" },
    { number: "Small", label: "Classes" },
    { number: "Certified", label: "Training" },
    { number: "15+", label: "Years Experience" },
  ];

  const heroCTAs = [
    { label: "View Courses", href: "#courses", primary: true },
    { label: "Enroll Now", href: "#enroll" },
  ];

  const overviewTitle = "Master the Ancient Art of Sound Healing";
  const overviewParagraphs = [
    "Step into the transformative world of Tibetan Singing Bowl therapy through our comprehensive training programs. Whether you're a complete beginner curious about sound healing or an experienced practitioner seeking certification, our courses provide hands-on training in this ancient Himalayan healing art. Learn to play traditional singing bowls, understand frequency and vibration, master healing techniques, and build a fulfilling career as a sound healing practitioner.",
    "Our training is conducted in Nepal—the birthplace of singing bowl traditions—by experienced masters who have dedicated their lives to this sacred practice. You'll learn authentic techniques passed down through generations, work with high-quality Himalayan singing bowls, receive personalized instruction in small groups, and earn internationally recognized certification upon completion. Transform your life while learning to transform others through the healing power of sound.",
  ];

  // Training courses from PHP file
  const trainingCourses: TrainingCourse[] = [
    {
      icon: "🎵",
      title: "Basic Sound Healing Course",
      level: "Beginner Level",
      duration: "3 Days • 15 Hours",
      price: "$250",
      description:
        "Perfect for beginners who want to learn the fundamentals of singing bowl sound healing. This introductory course covers basic playing techniques, understanding different bowl types, simple healing protocols, and self-care practices. By the end, you'll be able to use singing bowls for personal healing and informal sessions with friends and family.",
      highlights: [
        "Bowl Playing Techniques",
        "Sound Theory Basics",
        "Self-Healing Practices",
        "Chakra Introduction",
        "Certificate of Completion",
      ],
      detailsLink: "/training/basic-course",
    },
    {
      icon: "🎓",
      title: "Professional Practitioner Course",
      level: "Intermediate Level",
      duration: "7 Days • 35 Hours",
      price: "$650",
      description:
        "Comprehensive training for those serious about becoming professional sound healing practitioners. Learn advanced techniques, conduct full healing sessions, understand energy anatomy, integrate multiple healing modalities, and build a sound healing practice. Includes business guidance and marketing support for launching your practice.",
      highlights: [
        "Advanced Techniques",
        "Full Session Protocols",
        "Energy Anatomy",
        "Client Management",
        "Business Setup",
        "Professional Certificate",
      ],
      detailsLink: "/training/professional-course",
    },
  ];

  // Why Train With Us from PHP file
  const whyChooseCards: WhyChooseCard[] = [
    {
      icon: "🏔️",
      title: "Authentic Lineage",
      description:
        "Learn from masters trained in traditional Himalayan methods, not westernized versions.",
    },
    {
      icon: "👨‍🏫",
      title: "Expert Instructors",
      description:
        "15+ years of teaching experience with hundreds of certified practitioners worldwide.",
    },
    {
      icon: "👥",
      title: "Small Class Sizes",
      description:
        "Maximum 10 students per batch ensures personalized attention and hands-on practice.",
    },
    {
      icon: "🎵",
      title: "Quality Instruments",
      description:
        "Train with authentic, high-grade Himalayan singing bowls crafted by master artisans.",
    },
    {
      icon: "🏆",
      title: "Recognized Certification",
      description:
        "Internationally accepted certificates allowing you to practice professionally worldwide.",
    },
    {
      icon: "🤝",
      title: "Lifetime Support",
      description:
        "Join our global community with ongoing mentorship, resources, and refresher opportunities.",
    },
  ];

  // Certification benefits from PHP file
  const certificationBenefits: CertificationBenefit[] = [
    "Practice professionally as a sound healing practitioner",
    "Offer private sessions and sound bath experiences",
    "Teach introductory workshops in your community",
    "Register with international sound healing associations",
    "Integrate sound healing into existing wellness practices",
    "Continue to advanced certifications and specializations",
  ];

  const certificationDescription =
    "Upon successful completion of your chosen course, you'll receive an official certificate from Jivan Parivartan Sound Healing Academy. Our certifications are recognized internationally and qualify you to:";

  const certificationFooter =
    "All certificates include your training hours, course content covered, and instructor credentials, meeting the standards required by professional associations globally.";

  // Sidebar data
  const priceInfo = {
    label: "Course Pricing",
    amount: "$250 - $650",
    duration: "3-7 Days",
    includes: [
      "Training manual & materials",
      "Practice singing bowls",
      "Certification upon completion",
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
    { icon: "📞", label: "Call Us", href: "tel:+9779818514837" },
  ];

  return (
    <div className="min-h-screen bg-[#faf6f1] bg-[url('/img/design/color-page.jpg')] bg-repeat bg-center">
      <Breadcrumb items={breadcrumbItems} />

      <PageHero
        badge={{ icon: "🎓", text: "Professional Certification" }}
        title="Singing Bowl Training Programs"
        subtitle="Become a Certified Sound Healing Practitioner"
        stats={heroStats}
        ctas={heroCTAs}
        variant="red"
        backgroundImage="https://images.unsplash.com/photo-1545389336-cf090694435e?q=80&w=2664&auto=format&fit=crop"
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

            {/* Training Programs */}
            <section id="courses" className="mt-14 mb-[10px]">
              <div className="text-center mb-10">
                <h2 className="text-4xl md:text-3xl font-extrabold text-gray-900">
                  Training Programs
                </h2>
                <p className="mt-3 text-gray-600 text-lg md:text-base">
                  Choose the program that matches your goals and experience level
                </p>
              </div>

              <div className="space-y-7">
                {trainingCourses.map((course) => (
                  <div
                    key={course.title}
                    className="bg-white rounded-2xl p-10 md:p-8 sm:p-6 shadow-lg border-l-[6px] border-purple-600 relative overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 w-28 h-28 bg-gradient-to-br from-purple-50 to-transparent rounded-bl-full opacity-70" />

                    <div className="flex items-start justify-between gap-6 flex-wrap relative z-[1]">
                      <div className="flex items-center gap-5">
                        <div className="w-16 h-16 md:w-14 md:h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center text-3xl text-white shadow-md">
                          {course.icon}
                        </div>
                        <div>
                          <h3 className="text-2xl md:text-xl font-extrabold text-gray-900">
                            {course.title}
                          </h3>
                          <span className="inline-block mt-1 px-3 py-1 rounded-full text-xs font-bold text-purple-800 bg-gradient-to-br from-purple-50 to-white border border-purple-200">
                            {course.level}
                          </span>
                        </div>
                      </div>

                      <div className="shrink-0 text-right">
                        <div className="text-3xl font-extrabold text-purple-600 mb-1">
                          {course.price}
                        </div>
                        <span className="inline-flex items-center px-4 py-1 rounded-full text-sm font-bold text-purple-800 bg-gradient-to-br from-purple-50 to-white border border-purple-200">
                          {course.duration}
                        </span>
                      </div>
                    </div>

                    <p className="mt-6 text-gray-700 leading-relaxed text-[16px] md:text-[15px] relative z-[1]">
                      {course.description}
                    </p>

                    <div className="mt-7 grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 relative z-[1]">
                      {course.highlights.map((h) => (
                        <div
                          key={h}
                          className="text-center px-4 py-3 rounded-xl font-semibold text-purple-800 bg-gradient-to-br from-purple-50 to-white border border-purple-100"
                        >
                          {h}
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 pt-5 border-t-2 border-gray-100 relative z-[1]">
                      <a
                        href={course.detailsLink}
                        className="inline-block bg-gradient-to-br from-purple-600 to-purple-700 text-white px-8 py-3 rounded-full font-bold text-[15px] shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
                      >
                        View Full Details →
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Why Train With Us */}
            <section id="why-us" className="mt-14 mb-[10px]">
              <div className="text-center mb-10">
                <h2 className="text-4xl md:text-3xl font-extrabold text-gray-900">
                  Why Train With Us
                </h2>
                <p className="mt-3 text-gray-600 text-lg md:text-base">
                  What makes our training exceptional
                </p>
              </div>

              <div className="grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-7">
                {whyChooseCards.map((card) => (
                  <div
                    key={card.title}
                    className="bg-white rounded-2xl p-10 md:p-8 sm:p-6 text-center shadow-md hover:shadow-xl transition-all border-t-[3px] border-purple-600"
                  >
                    <div className="text-5xl mb-5">{card.icon}</div>
                    <h3 className="text-xl font-extrabold text-gray-900 mb-3">
                      {card.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-[15px]">
                      {card.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

           

            {/* CTA */}
            <section id="enroll" className="mt-14">
              <CTASection
                title="Start Your Sound Healing Journey"
                description="Join our next training batch and become a certified practitioner"
                buttons={ctaButtons}
                variant="red"
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
