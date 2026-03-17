import React from "react";
import { Breadcrumb } from "@/components/jivan/Breadcrumb";
import { PageHero } from "@/components/jivan/PageHero";
import { QuickNavigation } from "@/components/jivan/QuickNavigation";
import { IntroSection } from "@/components/jivan/yoga/IntroSection";
import { ModuleCard } from "@/components/jivan/ModuleCard";
import { CTASection } from "@/components/jivan/yoga/CTASection";
import { SidebarWidget } from "@/components/jivan/SidebarWidget";
import { generateUpcomingBatches } from "@/utils/batchGenerator";

export default function ReikiLevel2TrainingPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Training", href: "/training" },
    { label: "Reiki Training", href: "/training/reiki" },
    { label: "Reiki Level 2 (L2)" },
  ];

  const heroStats = [
    { number: "L2", label: "Practitioner path" },
    { number: "Deeper", label: "Energy practice" },
    { number: "Hands-on", label: "Session skills" },
    { number: "Guided", label: "With support" },
  ];

  const heroCTAs = [
    { label: "Training Inquiry", href: "#inquiry", primary: true },
    { label: "See Curriculum", href: "#curriculum" },
  ];

  const quickNavItems = [
    { id: "overview", icon: "📋", label: "Overview", href: "#overview" },
    { id: "curriculum", icon: "🧩", label: "What you’ll learn", href: "#curriculum" },
    { id: "practice", icon: "🤝", label: "Practice & sessions", href: "#practice" },
    { id: "ethics", icon: "🫶", label: "Ethics & boundaries", href: "#ethics" },
    { id: "after", icon: "✅", label: "After training", href: "#after" },
    { id: "inquiry", icon: "📩", label: "Inquiry", href: "#inquiry" },
  ];

  const introParagraphs = [
    "Reiki Level 2 is where your practice becomes more confident and more consistent—especially if you want to work with others in a structured way.",
    "L2 is often chosen by people who already have the foundation (L1) and now want deeper practice, clearer session flow, and stronger energetic awareness—with guidance and real feedback.",
  ];

  const priceInfo = {
    label: "Starting From",
    amount: "$300",
    duration: "Training / Session",
    includes: [
      "Guided learning",
      "Hands-on practice",
      "Session structure guidance",
      "Certificate (where applicable)",
    ],
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
        badge={{ icon: "✨", text: "Reiki Training • Level 2" }}
        title="Reiki Level 2 (L2) Training"
        subtitle="Deepen your Reiki practice—build practitioner confidence, session structure, and stronger energetic awareness."
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
              <IntroSection
                title="Where practice turns into confidence"
                paragraphs={introParagraphs}
                variant="green"
              />
            </section>

            <section id="curriculum" className="mt-12">
              <ModuleCard
                icon="🧩"
                title="What you’ll learn in Level 2"
                description="L2 is more practice-driven. We refine the basics, deepen your sensitivity, and help you build a clean, repeatable session structure so you can work with others in a grounded way."
                badges={[
                  "Deeper energetic awareness",
                  "Working with others (structured)",
                  "Session flow & pacing",
                  "Chakra balancing approach",
                  "Clearing & grounding",
                  "Practice refinement",
                ]}
                link={{ href: "#practice", label: "How practice works" }}
                defaultExpanded={true}
                variant="green"
              >
                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white/80 backdrop-blur rounded-xl p-6 border border-green-100 shadow-sm">
                    <h4 className="text-lg font-bold text-green-900 mb-2">More than “more techniques”</h4>
                    <p className="text-sm text-gray-700">
                      L2 is about clarity: what to do, when to do it, how to stay grounded, and how to read the session
                      without overthinking.
                    </p>
                  </div>

                  <div className="bg-white/80 backdrop-blur rounded-xl p-6 border border-green-100 shadow-sm">
                    <h4 className="text-lg font-bold text-green-900 mb-2">Attunement / initiation (if applicable)</h4>
                    <p className="text-sm text-gray-700">
                      If your Reiki tradition includes it, L2 typically has a deeper initiation to support your practice
                      at the next level. We explain the process clearly before we begin.
                    </p>
                  </div>
                </div>
              </ModuleCard>
            </section>

            <section id="practice" className="mt-12">
              <ModuleCard
                icon="🤝"
                title="Practice & session skills"
                description="You’ll do guided practice and (optional) partner practice. We focus on real session skills: how to begin, how to pace, how to stay present, and how to close a session cleanly."
                badges={[
                  "Guided practice",
                  "Partner practice (optional)",
                  "Session opening & closing",
                  "Grounded presence",
                  "Feedback & improvement",
                ]}
                link={{ href: "#ethics", label: "Ethics & boundaries" }}
                variant="green"
              >
                <div className="mt-6 bg-white/80 backdrop-blur rounded-xl p-6 border border-green-100 shadow-sm">
                  <h4 className="text-lg font-bold text-green-900 mb-2">Professional-style structure (without pressure)</h4>
                  <p className="text-sm text-gray-700">
                    Even if you don’t plan to work professionally, learning structure makes your Reiki cleaner and more
                    effective—because you’re not guessing.
                  </p>
                </div>
              </ModuleCard>
            </section>

            <section id="ethics" className="mt-12">
              <ModuleCard
                icon="🫶"
                title="Ethics & boundaries (very important in L2)"
                description="When you start working with others, clarity matters. We cover consent, communication, and how to hold space respectfully—without trying to “fix” people."
                badges={[
                  "Consent & comfort-first",
                  "Clear communication",
                  "Healthy boundaries",
                  "Scope & responsibility",
                  "Respectful practice",
                ]}
                link={{ href: "#after", label: "After training plan" }}
                variant="green"
              />
            </section>

            <section id="after" className="mt-12">
              <ModuleCard
                icon="✅"
                title="After training (so your L2 stays strong)"
                description="L2 becomes powerful when you keep it consistent. We’ll share a simple practice plan and recommendations for how to build confidence with real sessions."
                badges={[
                  "Regular self-practice",
                  "Practice with others (gentle)",
                  "Session journaling",
                  "Consistency over intensity",
                ]}
                link={{ href: "#inquiry", label: "Join the next L2 batch" }}
                variant="green"
              >
                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white/80 backdrop-blur rounded-xl p-6 border border-green-100 shadow-sm">
                    <h4 className="text-lg font-bold text-green-900 mb-2">If you want to practice professionally</h4>
                    <p className="text-sm text-gray-700">
                      We’ll guide you on session structure, client comfort, and how to build a simple, ethical practice.
                    </p>
                  </div>

                  <div className="bg-white/80 backdrop-blur rounded-xl p-6 border border-green-100 shadow-sm">
                    <h4 className="text-lg font-bold text-green-900 mb-2">If you’re doing this for personal growth</h4>
                    <p className="text-sm text-gray-700">
                      L2 can still be a beautiful step—many people take it just to deepen their calm, clarity, and inner
                      steadiness.
                    </p>
                  </div>
                </div>
              </ModuleCard>
            </section>

            <section id="inquiry" className="mt-12">
              <CTASection
                title="Reiki Level 2 (L2) Training Inquiry"
                description="Tell us if you’ve completed L1, your preferred dates, and your goal (personal growth or practitioner path). We’ll share the next batch details."
                buttons={[
                  { icon: "📩", label: "Contact for L2 Training", href: "/contact" },
                  { icon: "✨", label: "Back to Reiki Training", href: "/training/reiki" },
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
