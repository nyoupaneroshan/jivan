import React from "react";
import { Breadcrumb } from "@/components/jivan/Breadcrumb";
import { PageHero } from "@/components/jivan/PageHero";
import { QuickNavigation } from "@/components/jivan/QuickNavigation";
import { CTASection } from "@/components/jivan/yoga/CTASection";
import { SidebarWidget } from "@/components/jivan/SidebarWidget";
import { generateUpcomingBatches } from "@/utils/batchGenerator";

type TrainingLevel = {
  id: "level-1" | "level-2" | "master";
  icon: string;
  title: string;
  duration: string;
  description: string;
  badges: string[];
  highlights: string[];
};

export default function ReikiTrainingPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Reiki", href: "/reiki" },
    { label: "Training & Certification" },
  ];

  // PHP: overview, level-1, level-2, master, enroll [file:44]
  const quickNavItems = [
    { id: "overview", icon: "📋", label: "Overview", href: "#overview" },
    { id: "level-1", icon: "1️⃣", label: "Level 1", href: "#level-1" },
    { id: "level-2", icon: "2️⃣", label: "Level 2", href: "#level-2" },
    { id: "master", icon: "👑", label: "Master Level", href: "#master" },
    { id: "enroll", icon: "📝", label: "Enroll Now", href: "#enroll" },
  ];

  // PHP hero title/subtitle [file:44]
  const heroStats = [
    { number: "3 Levels", label: "Path" },
    { number: "Attunements", label: "Included" },
    { number: "Certified", label: "Training" },
    { number: "Lifetime", label: "Support" },
  ];

  const heroCTAs = [
    { label: "Enroll Now", href: "#enroll", primary: true },
    { label: "View Levels", href: "#level-1" },
  ];

  // PHP overview section [file:44]
  const overviewTitle = "Reiki Training Journey";
  const overviewParagraphs = [
    "Our comprehensive Reiki training program follows the traditional Usui Reiki system, offering three progressive levels of certification. Each level builds upon the previous one, providing you with complete mastery of this ancient healing art. Whether you want to heal yourself, help others, or become a Reiki Master Teacher, we guide you through every step of your journey.",
    "All training includes attunements (energy initiations), hands-on practice, comprehensive manuals, ongoing support, and certification upon completion. Learn from experienced Reiki Masters in a supportive, sacred environment.",
  ];

  // PHP: each level section has duration + feature-badge items [file:44]
  // (The PHP parsing shows duration + badges clearly; full paragraph + bullet list exists but is harder to auto-extract reliably.) [file:44]
  const levels: TrainingLevel[] = [
    {
      id: "level-1",
      icon: "1️⃣",
      title: "Reiki Level 1 (Beginner)",
      duration: "2 Days",
      description:
        "Begin your Reiki journey with a strong foundation in self-healing, energy awareness, and hands-on practice. Ideal for personal healing and everyday wellbeing support.",
      badges: [
        "Self-Healing Focus",
        "1 Attunement",
        "Certificate Included",
        "Manual Provided",
        "Lifetime Support",
      ],
      highlights: [
        "Introduction to Reiki principles and history",
        "Self-treatment and daily Reiki practice",
        "Hand positions for basic healing",
        "Energy sensing and grounding techniques",
      ],
    },
    {
      id: "level-2",
      icon: "2️⃣",
      title: "Reiki Level 2 (Practitioner)",
      duration: "2 Days",
      description:
        "Deepen your practice and learn how to treat others more professionally. Includes sacred symbols and distance healing techniques to expand your healing capacity.",
      badges: [
        "Heal Others",
        "3 Sacred Symbols",
        "Distance Healing",
        "Professional Practice",
        "Certificate Included",
      ],
      highlights: [
        "Reiki symbols and how to use them",
        "Distance healing techniques",
        "More advanced healing protocols",
        "Ethics and practitioner guidance",
      ],
    },
    {
      id: "master",
      icon: "👑",
      title: "Reiki Master Level",
      duration: "3–4 Days",
      description:
        "Become a Reiki Master Teacher and learn how to teach all levels, perform attunements, and guide others through their Reiki journey with mastery and responsibility.",
      badges: [
        "Teach All Levels",
        "Master Symbol",
        "Perform Attunements",
        "Advanced Techniques",
        "Master Certificate",
        "Teaching Materials",
      ],
      highlights: [
        "Master symbol and advanced techniques",
        "How to perform attunements",
        "Teaching structure for Levels 1–2",
        "Practice sessions and mentoring",
      ],
    },
  ];

  // PHP CTA enroll section [file:44]
  const ctaButtons = [
    { icon: "📝", label: "Enroll in Next Training", href: "#" },
    { icon: "💬", label: "Ask About Schedule", href: "#" },
  ];

  // PHP sidebar price: $ 15,000 [file:44]
  const priceInfo = {
    label: "Starting From",
    amount: "$ 15,000",
    duration: "Training Package",
    includes: ["Attunements", "Manuals", "Hands-on Practice", "Certification", "Ongoing Support"],
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
        badge={{ icon: "🎓", text: "Reiki Training" }}
        title="Reiki Training & Certification"
        subtitle="Become a Certified Reiki Healer - All Levels Available"
        stats={heroStats}
        ctas={heroCTAs}
        variant="green"
        backgroundImage="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1920"
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

            {/* Levels */}
            <div className="mt-14 space-y-7">
              {levels.map((lvl) => (
                <section key={lvl.id} id={lvl.id}>
                  <div className="bg-white rounded-2xl p-10 md:p-8 sm:p-6 shadow-lg border-l-[6px] border-green-600 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-28 h-28 bg-gradient-to-br from-green-50 to-transparent rounded-bl-full opacity-70" />

                    <div className="flex items-start justify-between gap-6 flex-wrap relative z-[1]">
                      <div className="flex items-center gap-5">
                        <div className="w-16 h-16 md:w-14 md:h-14 rounded-2xl bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center text-3xl text-white shadow-md">
                          {lvl.icon}
                        </div>

                        <div>
                          <h3 className="text-2xl md:text-xl font-extrabold text-gray-900">
                            {lvl.title}
                          </h3>
                          <div className="mt-2">
                            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-bold text-green-800 bg-gradient-to-br from-green-50 to-white border border-green-200">
                              Duration: {lvl.duration}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <p className="mt-6 text-gray-700 leading-relaxed text-[16px] md:text-[15px] relative z-[1]">
                      {lvl.description}
                    </p>

                    {/* Badge grid (PHP: feature-badge list) [file:44] */}
                    <div className="mt-7 grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 relative z-[1]">
                      {lvl.badges.map((b) => (
                        <div
                          key={b}
                          className="text-center px-4 py-3 rounded-xl font-semibold text-green-800 bg-gradient-to-br from-green-50 to-white border border-green-100"
                        >
                          {b}
                        </div>
                      ))}
                    </div>

                    {/* Highlights list */}
                    <div className="mt-7 relative z-[1]">
                      <h4 className="text-lg font-extrabold text-gray-900 mb-3">
                        What you’ll learn
                      </h4>
                      <ul className="grid grid-cols-2 md:grid-cols-1 gap-2 text-sm text-gray-700">
                        {lvl.highlights.map((h) => (
                          <li key={h} className="flex items-start gap-2">
                            <span className="mt-[2px] inline-flex w-5 h-5 items-center justify-center rounded-full bg-green-100 text-green-700 font-bold">
                              ✓
                            </span>
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </section>
              ))}
            </div>

            {/* CTA */}
            <section id="enroll" className="mt-14">
              <CTASection
                title="Ready to Begin Your Reiki Journey?"
                description="Enroll in our next training and become a certified Reiki practitioner"
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
