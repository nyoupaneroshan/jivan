import React from "react";
import { Breadcrumb } from "@/components/jivan/Breadcrumb";
import { PageHero } from "@/components/jivan/PageHero";
import { QuickNavigation } from "@/components/jivan/QuickNavigation";
import { IntroSection } from "@/components/jivan/yoga/IntroSection";
import { ModuleCard } from "@/components/jivan/ModuleCard";
import { CTASection } from "@/components/jivan/yoga/CTASection";
import { SidebarWidget } from "@/components/jivan/SidebarWidget";
import { generateUpcomingBatches } from "@/utils/batchGenerator";

export default function SingingBowlAdvanced7DaysPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Training", href: "/training" },
    { label: "Singing Bowl Training", href: "/training/singing-bowl" },
    { label: "Advanced (7 Days)" },
  ];

  const heroStats = [
    { number: "7 Days", label: "Advanced course" },
    { number: "Therapy-level", label: "Session skills" },
    { number: "Group + 1:1", label: "Formats" },
    { number: "Practice", label: "Daily" },
  ];

  const heroCTAs = [
    { label: "Training Inquiry", href: "#inquiry", primary: true },
    { label: "See Curriculum", href: "#curriculum" },
  ];

  const quickNavItems = [
    { id: "overview", icon: "Training", label: "Overview", href: "#overview" },
    { id: "curriculum", icon: "Curriculum", label: "Curriculum", href: "#curriculum" },
    { id: "day-wise", icon: "Schedule", label: "Day-wise plan", href: "#day-wise" },
    { id: "professional", icon: "Practice", label: "Professional practice", href: "#professional" },
    { id: "who", icon: "Fit", label: "Who it’s for", href: "#who" },
    { id: "inquiry", icon: "Contact", label: "Inquiry", href: "#inquiry" },
  ];

  const introParagraphs = [
    "This 7-day advanced course is for students who want to go beyond technique and learn how to hold real therapeutic sessions with confidence and care.",
    "We focus on clean sound, clear structure, and professional-level session flow. You will practice daily, learn how to work with different needs, and build a repeatable framework for both one-to-one and group settings.",
  ];

  const priceInfo = {
    label: "Starting From",
    amount: "$800",
    duration: "Training / Program",
    includes: [
      "Hands-on practice",
      "Guided learning",
      "Small group support",
      "Certificate (where applicable)",
    ],
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
        badge={{ icon: "", text: "Singing Bowl Training Advanced" }}
        title="Singing Bowl Advanced Course (7 Days)"
        subtitle="Therapy-level training for confident sessions, chakra-focused flows, and professional practice."
        stats={heroStats}
        ctas={heroCTAs}
        variant="green"
        backgroundImage="https://images.unsplash.com/photo-1545389336-cf090694435e?w=1920"
      />

      <QuickNavigation items={quickNavItems} variant="red" />

      <div className="max-w-[1400px] mx-auto px-5 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12">
          <div>
            <section id="overview">
              <IntroSection
                title="Advanced training for real sessions"
                paragraphs={introParagraphs}
                variant="green"
              />
            </section>

            <section id="curriculum" className="mt-12">
              <ModuleCard
                icon=" "
                title="What you will learn"
                description="Advanced is about depth and structure. You will learn how to build sessions that are calm, safe, and effective, with clear pacing and purpose."
                badges={[
                  "Advanced playing technique",
                  "Layering and pacing",
                  "Chakra-based session structure",
                  "Working with intentions safely",
                  "Group sound bath guidance",
                  "Professional session flow",
                ]}
                link={{ href: "#day-wise", label: "See the day-wise plan" }}
                defaultExpanded={true}
                variant="green"
              >
                <div className="mt-6 bg-white/80 backdrop-blur rounded-xl p-6 border border-green-100 shadow-sm">
                  <h4 className="text-lg font-bold text-green-900 mb-2">Focus of the course</h4>
                  <p className="text-sm text-gray-700">
                    The goal is not to play more bowls. The goal is to create a clean, grounded sound field and guide a
                    session with clarity and confidence.
                  </p>
                </div>
              </ModuleCard>
            </section>

            <section id="day-wise" className="mt-12">
              <ModuleCard
                icon=" "
                title="Day-wise plan (7 days)"
                description="This outline is the common flow. The exact timing may adjust depending on the group pace and practice needs."
                badges={[
                  "Practice daily",
                  "Feedback and refinement",
                  "Session building",
                  "Group facilitation",
                ]}
                link={{ href: "#professional", label: "Professional practice module" }}
                variant="green"
              >
                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white/80 backdrop-blur rounded-xl p-6 border border-green-100 shadow-sm">
                    <p className="text-sm font-bold text-green-800">Days 1 to 2</p>
                    <h4 className="mt-2 text-lg font-bold text-gray-900">Refine technique</h4>
                    <ul className="mt-3 space-y-2 text-sm text-gray-700">
                      <li>Clean tone, stability, and control</li>
                      <li>Advanced rimming and striking refinement</li>
                      <li>Layering without overstimulation</li>
                      <li>Practice with feedback</li>
                    </ul>
                  </div>

                  <div className="bg-white/80 backdrop-blur rounded-xl p-6 border border-green-100 shadow-sm">
                    <p className="text-sm font-bold text-green-800">Days 3 to 4</p>
                    <h4 className="mt-2 text-lg font-bold text-gray-900">Therapeutic session flow</h4>
                    <ul className="mt-3 space-y-2 text-sm text-gray-700">
                      <li>Chakra-based structure and pacing</li>
                      <li>Intention setting and integration</li>
                      <li>Working with comfort and sensitivity</li>
                      <li>Closing a session cleanly</li>
                    </ul>
                  </div>

                  <div className="bg-white/80 backdrop-blur rounded-xl p-6 border border-green-100 shadow-sm">
                    <p className="text-sm font-bold text-green-800">Days 5 to 6</p>
                    <h4 className="mt-2 text-lg font-bold text-gray-900">Group facilitation</h4>
                    <ul className="mt-3 space-y-2 text-sm text-gray-700">
                      <li>Holding group space with confidence</li>
                      <li>Sound bath planning and flow</li>
                      <li>Volume control and room setup</li>
                      <li>Practice leading a group session</li>
                    </ul>
                  </div>

                  <div className="bg-white/80 backdrop-blur rounded-xl p-6 border border-green-100 shadow-sm">
                    <p className="text-sm font-bold text-green-800">Day 7</p>
                    <h4 className="mt-2 text-lg font-bold text-gray-900">Integration and next steps</h4>
                    <ul className="mt-3 space-y-2 text-sm text-gray-700">
                      <li>Final supervised practice session</li>
                      <li>Personal improvement plan</li>
                      <li>Professional guidance and practice steps</li>
                      <li>Completion and certification discussion</li>
                    </ul>
                  </div>
                </div>
              </ModuleCard>
            </section>

            <section id="professional" className="mt-12">
              <ModuleCard
                icon=" "
                title="Professional practice and ethics"
                description="If you plan to work with others, structure and ethics matter. We cover comfort-first practice, consent, safe intensity, and how to keep sessions grounded."
                badges={[
                  "Client comfort-first",
                  "Consent and boundaries",
                  "Safe intensity control",
                  "Session documentation basics",
                  "Sustainable practice habits",
                ]}
                link={{ href: "#inquiry", label: "Ask about enrollment" }}
                variant="green"
              />
            </section>

            <section id="who" className="mt-12">
              <ModuleCard
                icon=" "
                title="Who this course is for"
                description="This course is best if you already have basic familiarity with bowls or you want a deeper therapy-level skill set."
                badges={[
                  "Basic course graduates",
                  "Wellness practitioners",
                  "Yoga and meditation teachers",
                  "Healers and facilitators",
                  "People building professional skills",
                ]}
                link={{ href: "/training/singing-bowl/basic-3-days", label: "Start with Basic (3 Days)" }}
                variant="green"
              />
            </section>

            <section id="inquiry" className="mt-12">
              <CTASection
                title="Advanced (7 Days) Training Inquiry"
                description="Share your background (beginner or basic course completed), preferred dates, and your goal. We will respond with the next batch details and preparation notes."
                buttons={[
                  { icon: "Contact", label: "Contact for Advanced Training", href: "/contact" },
                  { icon: "Training", label: "Back to Singing Bowl Training", href: "/training/singing-bowl" },
                ]}
                variant="green"
                backgroundEmoji="Training"
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
