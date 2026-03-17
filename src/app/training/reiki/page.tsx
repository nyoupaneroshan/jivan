import React from "react";
import { Breadcrumb } from "@/components/jivan/Breadcrumb";
import { PageHero } from "@/components/jivan/PageHero";
import { QuickNavigation } from "@/components/jivan/QuickNavigation";
import { IntroSection } from "@/components/jivan/yoga/IntroSection";
import { ModuleCard } from "@/components/jivan/ModuleCard";
import { CTASection } from "@/components/jivan/yoga/CTASection";
import { SidebarWidget } from "@/components/jivan/SidebarWidget";
import { generateUpcomingBatches } from "@/utils/batchGenerator";

type Level = {
  id: string;
  icon: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  href: string;
};

export default function ReikiTrainingPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Training", href: "/training" },
    { label: "Reiki Training" },
  ];

  const heroStats = [
    { number: "L1–L3", label: "Levels" },
    { number: "Hands-on", label: "Practice" },
    { number: "Small group", label: "Support" },
    { number: "All levels", label: "Welcome" },
  ];

  const heroCTAs = [
    { label: "Explore Levels", href: "#levels", primary: true },
    { label: "Training Inquiry", href: "#inquiry" },
  ];

  const quickNavItems = [
    { id: "overview", icon: "📋", label: "Overview", href: "#overview" },
    { id: "levels", icon: "🎓", label: "Levels", href: "#levels" },
    { id: "who", icon: "🫶", label: "Who it's for", href: "#who" },
    { id: "how", icon: "🧩", label: "How we teach", href: "#how" },
    { id: "path", icon: "🛤️", label: "Choose your level", href: "#path" },
    { id: "inquiry", icon: "📩", label: "Inquiry", href: "#inquiry" },
  ];

  const introParagraphs = [
    "Reiki training is a simple, practical path—learn the method, practice it correctly, and build confidence step by step.",
    "Whether you’re learning for self-healing, supporting family, or becoming a practitioner, we keep the training grounded: clear technique, real practice, and guidance you can actually use.",
  ];

  // Update these URLs to your actual routes if needed
  const levels: Level[] = [
    {
      id: "l1",
      icon: "🌱",
      title: "Reiki Level 1 (L1)",
      subtitle: "Foundation + self-healing",
      description:
        "L1 is where you build your base. You learn the fundamentals, how to practice safely, and how to work with yourself first—so your Reiki becomes stable and consistent.",
      highlights: [
        "Self-healing routine",
        "Basics of energy work",
        "Hand positions & flow",
        "Grounding + protection",
        "Confidence to practice daily",
      ],
      href: "/training/reiki-level-1",
    },
    {
      id: "l2",
      icon: "🔥",
      title: "Reiki Level 2 (L2)",
      subtitle: "Deeper practice + practitioner track",
      description:
        "L2 is for those who want to go deeper and work more confidently with others. It’s more practice-focused, with stronger emphasis on session structure and consistency.",
      highlights: [
        "More structured sessions",
        "Working with others (ethically)",
        "Energy sensitivity & awareness",
        "Practice feedback & improvement",
        "Path toward professional work",
      ],
      href: "/training/reiki-level-2",
    },
    {
      id: "l3",
      icon: "👑",
      title: "Reiki Master Level (L3)",
      subtitle: "Mastery, leadership, and teaching",
      description:
        "The Master level is for serious students ready to carry the practice with responsibility—deepening presence, clarity, and the ability to guide others.",
      highlights: [
        "Master-level depth",
        "Mentorship & leadership",
        "Teaching pathway (if desired)",
        "Advanced practice refinement",
        "Long-term integration",
      ],
      href: "/training/reiki-master-level",
    },
  ];

  const priceInfo = {
    label: "Starting From",
    amount: "$200",
    duration: "Per Session / Program",
    includes: ["Hands-on practice", "Guided learning", "Small group support", "Certificate (where applicable)"],
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
        badge={{ icon: "✨", text: "Reiki Training" }}
        title="Reiki Training (L1 • L2 • Master)"
        subtitle="Learn Reiki with a calm, practical approach—built for real practice, not just theory."
        stats={heroStats}
        ctas={heroCTAs}
        variant="green"
        backgroundImage="https://images.unsplash.com/photo-1545389336-cf090694435e?w=1920"
      />

      {/* Keep red until QuickNavigation supports green */}
      <QuickNavigation items={quickNavItems} variant="red" />

      <div className="max-w-[1400px] mx-auto px-5 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12">
          <div>
            <section id="overview">
              <IntroSection title="A steady path from beginner to master" paragraphs={introParagraphs} variant="green" />
            </section>

            <section id="levels" className="mt-12">
              <div className="rounded-2xl bg-white/85 backdrop-blur border border-green-100 shadow-sm p-8">
                <h2 className="text-2xl font-extrabold text-gray-900">Reiki training levels</h2>
                <p className="mt-2 text-gray-700">
                  Start where you are. If you’re unsure, we’ll guide you to the right level after a quick conversation.
                </p>

                <div className="mt-7 grid grid-cols-1 gap-6">
                  {levels.map((lvl) => (
                    <div key={lvl.id} id={lvl.id} className="rounded-2xl bg-white/80 border border-green-100 shadow-sm p-7">
                      <div className="flex items-start justify-between gap-6 flex-wrap">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-green-500 to-green-700 text-white flex items-center justify-center text-2xl shadow-sm">
                            {lvl.icon}
                          </div>
                          <div>
                            <h3 className="text-xl font-extrabold text-gray-900">{lvl.title}</h3>
                            <p className="mt-1 text-sm text-gray-600">{lvl.subtitle}</p>
                          </div>
                        </div>

                        <a
                          href={lvl.href}
                          className="inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-green-500 to-green-700 text-white px-5 py-2.5 font-bold shadow-sm hover:shadow-md transition"
                        >
                          View details <span aria-hidden>→</span>
                        </a>
                      </div>

                      <p className="mt-4 text-gray-700 leading-relaxed">{lvl.description}</p>

                      <div className="mt-5 grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-3">
                        {lvl.highlights.map((h) => (
                          <div
                            key={h}
                            className="text-center px-4 py-3 rounded-xl font-semibold text-green-800 bg-gradient-to-br from-green-50 to-white border border-green-100"
                          >
                            {h}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section id="who" className="mt-12">
              <ModuleCard
                icon="🫶"
                title="Who this training is for"
                description="If you want a practice that feels calm, supportive, and repeatable—Reiki is a great fit. Many people join for self-healing first, and later decide whether they want to practice professionally."
                badges={[
                  "Beginners",
                  "Yoga / wellness practitioners",
                  "Caregivers",
                  "People under stress",
                  "Spiritual seekers",
                  "Future practitioners",
                ]}
                link={{ href: "#path", label: "Choose your level" }}
                variant="green"
                defaultExpanded={true}
              />
            </section>

            <section id="how" className="mt-12">
              <ModuleCard
                icon="🧩"
                title="How we teach"
                description="We keep it practical: simple explanations, lots of guided practice, and feedback. You learn how to do Reiki in a real-world way—so you leave with confidence, not confusion."
                badges={[
                  "Hands-on practice",
                  "Clear technique",
                  "Small group support",
                  "Ethics & boundaries",
                  "Integration guidance",
                ]}
                link={{ href: "#inquiry", label: "Ask about the next batch" }}
                variant="green"
              />
            </section>

            <section id="path" className="mt-12">
              <ModuleCard
                icon="🛤️"
                title="Choose your level (quick guide)"
                description="If you’re brand new, start with L1. If you’ve already done L1 and want deeper work with others, go for L2. If Reiki is already part of your life and you feel called to lead or teach, explore Master level."
                badges={["L1 = Start", "L2 = Deeper", "L3 = Master", "We can guide you"]}
                link={{ href: "#inquiry", label: "Get a recommendation" }}
                variant="green"
              />
            </section>

            <section id="inquiry" className="mt-12">
              <CTASection
                title="Reiki Training Inquiry"
                description="Tell us your level (beginner/L1 done/L2 done) and your goal. We’ll recommend the right training and share the next available batch."
                buttons={[
                  { icon: "📩", label: "Contact for Training", href: "/contact" },
                  { icon: "✨", label: "Explore Reiki Healing", href: "/reiki" },
                ]}
                variant="green"
                backgroundEmoji="🎓"
              />
            </section>
          </div>

          <div>
            <SidebarWidget
              price={priceInfo}
              batches={batches}
              contact={contact}
              showInquiryForm={true}
              variant="green"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
