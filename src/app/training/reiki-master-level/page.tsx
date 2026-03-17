import React from "react";
import { Breadcrumb } from "@/components/jivan/Breadcrumb";
import { PageHero } from "@/components/jivan/PageHero";
import { QuickNavigation } from "@/components/jivan/QuickNavigation";
import { IntroSection } from "@/components/jivan/yoga/IntroSection";
import { ModuleCard } from "@/components/jivan/ModuleCard";
import { CTASection } from "@/components/jivan/yoga/CTASection";
import { SidebarWidget } from "@/components/jivan/SidebarWidget";
import { generateUpcomingBatches } from "@/utils/batchGenerator";

export default function ReikiMasterLevelTrainingPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Training", href: "/training" },
    { label: "Reiki Training", href: "/training/reiki" },
    { label: "Reiki Master Level (L3)" },
  ];

  const heroStats = [
    { number: "L3", label: "Master level" },
    { number: "Deep", label: "Practice & presence" },
    { number: "Mentorship", label: "Support" },
    { number: "Leadership", label: "Optional teaching" },
  ];

  const heroCTAs = [
    { label: "Master Inquiry", href: "#inquiry", primary: true },
    { label: "What you’ll learn", href: "#curriculum" },
  ];

  const quickNavItems = [
    { id: "overview", icon: "📋", label: "Overview", href: "#overview" },
    { id: "curriculum", icon: "🧩", label: "What you’ll learn", href: "#curriculum" },
    { id: "mastery", icon: "🧘", label: "Mastery focus", href: "#mastery" },
    { id: "teaching", icon: "🎓", label: "Teaching path", href: "#teaching" },
    { id: "requirements", icon: "✅", label: "Requirements", href: "#requirements" },
    { id: "inquiry", icon: "📩", label: "Inquiry", href: "#inquiry" },
  ];

  const introParagraphs = [
    "Reiki Master Level (L3) is for serious students who want to carry the practice with maturity—deepening presence, clarity, and responsibility.",
    "Some people come to L3 to teach. Others come simply because Reiki has become part of their life and they want the next layer of depth. Either is valid—this training is held with care, not ego.",
  ];

  const priceInfo = {
    label: "Starting From",
    amount: "$350",
    duration: "Training / Program",
    includes: [
      "Master-level guidance",
      "Practice refinement",
      "Mentorship support",
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
        badge={{ icon: "👑", text: "Reiki Training • Master Level" }}
        title="Reiki Master Level (L3)"
        subtitle="A deep training for mastery, mentorship, and the responsibility of holding space for others."
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
                title="Mastery is a way of being"
                paragraphs={introParagraphs}
                variant="green"
              />
            </section>

            <section id="curriculum" className="mt-12">
              <ModuleCard
                icon="🧩"
                title="What you’ll learn in Master Level (L3)"
                description="Master level is not about collecting techniques. It’s about refinement—how you practice, how you hold space, and how you guide others with clarity and humility."
                badges={[
                  "Master-level session refinement",
                  "Deeper chakra/energy balancing",
                  "Advanced grounding & protection",
                  "Holding space with maturity",
                  "Ethics & responsibility",
                  "Long-term integration",
                ]}
                link={{ href: "#mastery", label: "Mastery focus" }}
                defaultExpanded={true}
                variant="green"
              >
                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white/80 backdrop-blur rounded-xl p-6 border border-green-100 shadow-sm">
                    <h4 className="text-lg font-bold text-green-900 mb-2">Presence over performance</h4>
                    <p className="text-sm text-gray-700">
                      The deeper the work, the simpler it becomes. We focus on grounded presence, clear intention, and
                      steady practice—so your sessions feel safe and effective.
                    </p>
                  </div>

                  <div className="bg-white/80 backdrop-blur rounded-xl p-6 border border-green-100 shadow-sm">
                    <h4 className="text-lg font-bold text-green-900 mb-2">Mentorship style</h4>
                    <p className="text-sm text-gray-700">
                      This level is often smaller and more guided. We give feedback, answer real questions, and help you
                      integrate the practice into your life—not just your notes.
                    </p>
                  </div>
                </div>
              </ModuleCard>
            </section>

            <section id="mastery" className="mt-12">
              <ModuleCard
                icon="🧘"
                title="Mastery focus (what changes in L3)"
                description="At this level, the training is less about learning “new things” and more about becoming steady: consistent practice, clean energetic boundaries, and the ability to support others without absorbing their heaviness."
                badges={[
                  "Stronger boundaries",
                  "Clear session structure",
                  "Deeper inner steadiness",
                  "More intuitive clarity",
                  "Ethical practice",
                ]}
                link={{ href: "#requirements", label: "Requirements" }}
                variant="green"
              >
                <div className="mt-6 bg-white/80 backdrop-blur rounded-xl p-6 border border-green-100 shadow-sm">
                  <h4 className="text-lg font-bold text-green-900 mb-2">For practitioners</h4>
                  <p className="text-sm text-gray-700">
                    If you’re already working with clients, we can help you refine your flow, communication, consent,
                    and your personal energetic hygiene—so your work stays sustainable.
                  </p>
                </div>
              </ModuleCard>
            </section>

            <section id="teaching" className="mt-12">
              <ModuleCard
                icon="🎓"
                title="Teaching path (optional)"
                description="If you feel called to teach, we guide you on how to share Reiki responsibly—how to hold training space, how to support students, and how to teach without ego."
                badges={[
                  "Teaching mindset",
                  "Student support",
                  "Clear explanations",
                  "Practice-based learning",
                  "Responsible guidance",
                ]}
                link={{ href: "#inquiry", label: "Ask about Master training" }}
                variant="green"
              />
            </section>

            <section id="requirements" className="mt-12">
              <ModuleCard
                icon="✅"
                title="Requirements (so L3 stays strong)"
                description="Master level works best when you’ve already built a steady foundation. If you’re unsure, message us—tell us your background and we’ll guide you honestly."
                badges={[
                  "L1 completed",
                  "L2 completed",
                  "Regular practice",
                  "Emotional stability",
                  "Willingness to learn",
                ]}
                link={{ href: "#inquiry", label: "Check eligibility" }}
                variant="green"
              >
                <div className="mt-6 bg-white/80 backdrop-blur rounded-xl p-6 border border-green-100 shadow-sm">
                  <h4 className="text-lg font-bold text-green-900 mb-2">If you’re not ready yet</h4>
                  <p className="text-sm text-gray-700">
                    That’s not a failure—it’s timing. We can recommend a practice plan or suggest repeating sessions until
                    your foundation feels stable.
                  </p>
                </div>
              </ModuleCard>
            </section>

            <section id="inquiry" className="mt-12">
              <CTASection
                title="Reiki Master Level (L3) Inquiry"
                description="Tell us your Reiki background (L1/L2 completion), your practice experience, and whether you want mastery for personal growth or teaching. We’ll share the next available batch."
                buttons={[
                  { icon: "📩", label: "Contact for L3 Training", href: "/contact" },
                  { icon: "✨", label: "Back to Reiki Training", href: "/training/reiki" },
                ]}
                variant="green"
                backgroundEmoji="👑"
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
