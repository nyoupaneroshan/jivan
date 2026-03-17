import React from "react";
import { Breadcrumb } from "@/components/jivan/Breadcrumb";
import { PageHero } from "@/components/jivan/PageHero";
import { QuickNavigation } from "@/components/jivan/QuickNavigation";
import { IntroSection } from "@/components/jivan/yoga/IntroSection";
import { ModuleCard } from "@/components/jivan/ModuleCard";
import { CTASection } from "@/components/jivan/yoga/CTASection";
import { SidebarWidget } from "@/components/jivan/SidebarWidget";
import { generateUpcomingBatches } from "@/utils/batchGenerator";

export default function ReikiLevel1TrainingPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Training", href: "/training" },
    { label: "Reiki Training", href: "/training/reiki" },
    { label: "Reiki Level 1 (L1)" },
  ];

  const heroStats = [
    { number: "L1", label: "Foundation" },
    { number: "Self-healing", label: "Daily practice" },
    { number: "Hands-on", label: "Simple method" },
    { number: "Beginners", label: "Welcome" },
  ];

  const heroCTAs = [
    { label: "Training Inquiry", href: "#inquiry", primary: true },
    { label: "See Curriculum", href: "#curriculum" },
  ];

  const quickNavItems = [
    { id: "overview", icon: "📋", label: "Overview", href: "#overview" },
    { id: "curriculum", icon: "🧩", label: "What you’ll learn", href: "#curriculum" },
    { id: "who", icon: "🫶", label: "Who it’s for", href: "#who" },
    { id: "day", icon: "🗓️", label: "Training flow", href: "#day" },
    { id: "after", icon: "✅", label: "After training", href: "#after" },
    { id: "inquiry", icon: "📩", label: "Inquiry", href: "#inquiry" },
  ];

  const introParagraphs = [
    "Reiki Level 1 is where everything becomes simple. You learn the basics properly, practice with guidance, and build a self-healing routine you can actually keep.",
    "This level is perfect if you want more calm in your day, stronger emotional balance, or a grounded way to support yourself and your family—without needing any previous experience.",
  ];

  // Keep consistent with your other pages unless you have separate training pricing.
  const priceInfo = {
    label: "Starting From",
    amount: "$300",
    duration: "Training / Session",
    includes: [
      "Guided learning",
      "Hands-on practice",
      "Beginner-friendly support",
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
        badge={{ icon: "✨", text: "Reiki Training • Level 1" }}
        title="Reiki Level 1 (L1) Training"
        subtitle="Learn Reiki from the ground up—clear technique, real practice, and a self-healing routine you can trust."
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
                title="Start with a strong foundation"
                paragraphs={introParagraphs}
                variant="green"
              />
            </section>

            <section id="curriculum" className="mt-12">
              <ModuleCard
                icon="🧩"
                title="What you’ll learn in Level 1"
                description="Level 1 is focused on understanding the method and building a self-practice. We keep the learning practical—so you don’t leave with just notes, you leave with confidence."
                badges={[
                  "What Reiki is (simple + practical)",
                  "History & principles",
                  "Self-healing routine",
                  "Hand positions",
                  "Energy hygiene & grounding",
                  "Practice guidance",
                ]}
                link={{ href: "#day", label: "See training flow" }}
                defaultExpanded={true}
                variant="green"
              >
                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white/80 backdrop-blur rounded-xl p-6 border border-green-100 shadow-sm">
                    <h4 className="text-lg font-bold text-green-900 mb-2">Self-healing (the heart of L1)</h4>
                    <p className="text-sm text-gray-700">
                      You’ll learn a simple self-treatment sequence you can do at home—especially helpful for stress,
                      sleep support, and emotional steadiness.
                    </p>
                  </div>

                  <div className="bg-white/80 backdrop-blur rounded-xl p-6 border border-green-100 shadow-sm">
                    <h4 className="text-lg font-bold text-green-900 mb-2">Attunement / initiation</h4>
                    <p className="text-sm text-gray-700">
                      If your Reiki tradition includes attunement, Level 1 typically involves an initiation process led
                      by the teacher to support your connection and practice. (We’ll explain clearly what to expect.)
                    </p>
                  </div>
                </div>
              </ModuleCard>
            </section>

            <section id="who" className="mt-12">
              <ModuleCard
                icon="🫶"
                title="Who L1 is for"
                description="If you want a grounded practice you can return to—even when life is busy—L1 is a great start."
                badges={[
                  "Complete beginners",
                  "People under stress",
                  "Healers & caregivers",
                  "Yoga/meditation students",
                  "Anyone wanting self-healing tools",
                  "Those planning to go pro later",
                ]}
                link={{ href: "#inquiry", label: "Ask about the next batch" }}
                variant="green"
              />
            </section>

            <section id="day" className="mt-12">
              <ModuleCard
                icon="🗓️"
                title="Training flow (what it feels like)"
                description="We teach in a calm rhythm: learn, practice, reflect, repeat. You’ll have time to ask questions and you’ll get guided practice—so it feels real, not rushed."
                badges={[
                  "Clear explanations",
                  "Guided practice",
                  "Partner practice (optional)",
                  "Q&A time",
                  "Integration guidance",
                ]}
                link={{ href: "#after", label: "After training support" }}
                variant="green"
              >
                <div className="mt-6 bg-white/80 backdrop-blur rounded-xl p-6 border border-green-100 shadow-sm">
                  <h4 className="text-lg font-bold text-green-900 mb-2">What to bring</h4>
                  <p className="text-sm text-gray-700">
                    Comfortable clothes, a notebook, and an open mind. That’s enough. We’ll guide everything else.
                  </p>
                </div>
              </ModuleCard>
            </section>

            <section id="after" className="mt-12">
              <ModuleCard
                icon="✅"
                title="After training (so the practice sticks)"
                description="Most people learn Reiki best by doing it regularly—small sessions done consistently. We’ll guide you with a simple plan after L1."
                badges={[
                  "Daily self-practice",
                  "21-day routine (optional)",
                  "Grounding habits",
                  "Confidence building",
                ]}
                link={{ href: "#inquiry", label: "Join the next L1 batch" }}
                variant="green"
              >
                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white/80 backdrop-blur rounded-xl p-6 border border-green-100 shadow-sm">
                    <h4 className="text-lg font-bold text-green-900 mb-2">If you want to become a practitioner</h4>
                    <p className="text-sm text-gray-700">
                      L1 is the starting point. After you build steady self-practice, L2 is where you typically deepen
                      practice with others and refine your session structure.
                    </p>
                  </div>

                  <div className="bg-white/80 backdrop-blur rounded-xl p-6 border border-green-100 shadow-sm">
                    <h4 className="text-lg font-bold text-green-900 mb-2">If you want personal healing only</h4>
                    <p className="text-sm text-gray-700">
                      That’s completely valid. Many people stop at L1 and still get huge value from a consistent self-healing routine.
                    </p>
                  </div>
                </div>
              </ModuleCard>
            </section>

            <section id="inquiry" className="mt-12">
              <CTASection
                title="Reiki Level 1 (L1) Training Inquiry"
                description="Message us your preferred dates and your goal (self-healing, stress relief, learning to help family, or professional path). We’ll share the next batch details."
                buttons={[
                  { icon: "📩", label: "Contact for L1 Training", href: "/contact" },
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
