import React from "react";
import { Breadcrumb } from "@/components/jivan/Breadcrumb";
import { PageHero } from "@/components/jivan/PageHero";
import { QuickNavigation } from "@/components/jivan/QuickNavigation";
import { IntroSection } from "@/components/jivan/yoga/IntroSection";
import { ModuleCard } from "@/components/jivan/ModuleCard";
import { CTASection } from "@/components/jivan/yoga/CTASection";
import { SidebarWidget } from "@/components/jivan/SidebarWidget";
import { generateUpcomingBatches } from "@/utils/batchGenerator";

export default function SingingBowlBasic3DaysPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Training", href: "/training" },
    { label: "Singing Bowl Training", href: "/training/singing-bowl" },
    { label: "Basic (3 Days)" },
  ];

  const heroStats = [
    { number: "3 Days", label: "Basic course" },
    { number: "Hands-on", label: "Real practice" },
    { number: "Technique", label: "Clean sound" },
    { number: "Beginner", label: "Friendly" },
  ];

  const heroCTAs = [
    { label: "Training Inquiry", href: "#inquiry", primary: true },
    { label: "See Curriculum", href: "#curriculum" },
  ];

  const quickNavItems = [
    { id: "overview", icon: "📋", label: "Overview", href: "#overview" },
    { id: "curriculum", icon: "🧩", label: "Curriculum", href: "#curriculum" },
    { id: "day-wise", icon: "🗓️", label: "Day-wise plan", href: "#day-wise" },
    { id: "who", icon: "🫶", label: "Who it's for", href: "#who" },
    { id: "what-you-get", icon: "🎁", label: "What you get", href: "#what-you-get" },
    { id: "inquiry", icon: "📩", label: "Inquiry", href: "#inquiry" },
  ];

  const introParagraphs = [
    "This 3-day basic course is the best starting point if you’re new to singing bowls or you want to fix your technique and learn it properly.",
    "We keep it practical: clean sound, correct handling, safe session structure, and enough guided practice so you feel confident using bowls for self-care or simple sessions for others.",
  ];

  // Keep pricing consistent with your other pages (adjust if you have a dedicated training fee)
  const priceInfo = {
    label: "Starting From",
    amount: "$450",
    duration: "Training / Program",
    includes: ["Hands-on practice", "Guided learning", "Beginner-friendly support", "Certificate (where applicable)"],
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
        badge={{ icon: "🎵", text: "Singing Bowl Training • Basic" }}
        title="Singing Bowl Basic Course (3 Days)"
        subtitle="Learn clean technique, safe practice, and a simple session flow you can repeat with confidence."
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
                title="Start strong—so your sound feels clean and calming"
                paragraphs={introParagraphs}
                variant="green"
              />
            </section>

            <section id="curriculum" className="mt-12">
              <ModuleCard
                icon=""
                title="What you’ll learn"
                description="This course focuses on the essentials that matter most: technique, comfort-first setup, and a basic structure for sessions. By the end, you’ll know exactly what to do—and what to avoid."
                badges={[
                  "Understanding bowls (types & tones)",
                  "How to hold & place bowls safely",
                  "Striking technique (clean sound)",
                  "Rimming technique (stable vibration)",
                  "Session setup & client comfort",
                  "Basic session flow (start → finish)",
                ]}
                link={{ href: "#day-wise", label: "See the day-wise plan" }}
                defaultExpanded={true}
                variant="green"
              >
                <div className="mt-6 bg-white/80 backdrop-blur rounded-xl p-6 border border-green-100 shadow-sm">
                  <h4 className="text-lg font-bold text-green-900 mb-2">Real goal of Basic</h4>
                  <p className="text-sm text-gray-700">
                    Not fancy tricks—clean sound, steady rhythm, safe placement, and calm confidence.
                  </p>
                </div>
              </ModuleCard>
            </section>

            <section id="day-wise" className="mt-12">
              <ModuleCard
                icon=""
                title="Day-wise plan (simple and practical)"
                description="We teach in a calm rhythm: learn → practice → feedback. The exact flow can shift based on group pace, but this is the general structure."
                badges={["Practice-first", "Feedback", "Comfort & safety", "Confidence building"]}
                link={{ href: "#what-you-get", label: "What you get after training" }}
                variant="green"
              >
                <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white/80 backdrop-blur rounded-xl p-6 border border-green-100 shadow-sm">
                    <p className="text-sm font-bold text-green-800">Day 1</p>
                    <h4 className="mt-2 text-lg font-bold text-gray-900">Foundation</h4>
                    <ul className="mt-3 space-y-2 text-sm text-gray-700">
                      <li>Intro to bowls, sound, and intention</li>
                      <li>Holding + posture + comfort setup</li>
                      <li>Basic striking technique (clean tone)</li>
                      <li>Common mistakes and fixes</li>
                    </ul>
                  </div>

                  <div className="bg-white/80 backdrop-blur rounded-xl p-6 border border-green-100 shadow-sm">
                    <p className="text-sm font-bold text-green-800">Day 2</p>
                    <h4 className="mt-2 text-lg font-bold text-gray-900">Technique + flow</h4>
                    <ul className="mt-3 space-y-2 text-sm text-gray-700">
                      <li>Rimming technique (steady vibration)</li>
                      <li>Sound layering (simple, not noisy)</li>
                      <li>Timing and pacing</li>
                      <li>Guided practice + feedback</li>
                    </ul>
                  </div>

                  <div className="bg-white/80 backdrop-blur rounded-xl p-6 border border-green-100 shadow-sm">
                    <p className="text-sm font-bold text-green-800">Day 3</p>
                    <h4 className="mt-2 text-lg font-bold text-gray-900">Session practice</h4>
                    <ul className="mt-3 space-y-2 text-sm text-gray-700">
                      <li>Basic session structure (start → finish)</li>
                      <li>Working with a partner (optional)</li>
                      <li>Comfort & boundaries</li>
                      <li>How to practice at home</li>
                    </ul>
                  </div>
                </div>
              </ModuleCard>
            </section>

            <section id="who" className="mt-12">
              <ModuleCard
                icon=""
                title="Who this course is for"
                description="This is a great fit if you want a grounded start and a real skill—not just a one-time experience."
                badges={[
                  "Beginners",
                  "Yoga/meditation students",
                  "Wellness practitioners",
                  "People learning for self-care",
                  "Those planning advanced later",
                ]}
                link={{ href: "#inquiry", label: "Ask about the next batch" }}
                variant="green"
              />
            </section>

            <section id="what-you-get" className="mt-12">
              <ModuleCard
                icon=""
                title="What you get after training"
                description="We want you to leave with a clear practice you can repeat, not confusion."
                badges={["Practice plan", "Confidence", "Safe structure", "Support"]}
                link={{ href: "#inquiry", label: "Join Basic (3 Days)" }}
                variant="green"
              >
                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white/80 backdrop-blur rounded-xl p-6 border border-green-100 shadow-sm">
                    <h4 className="text-lg font-bold text-green-900 mb-2">A simple home routine</h4>
                    <p className="text-sm text-gray-700">
                      A short self-practice flow you can do even on busy days—so the skill stays in your hands.
                    </p>
                  </div>

                  <div className="bg-white/80 backdrop-blur rounded-xl p-6 border border-green-100 shadow-sm">
                    <h4 className="text-lg font-bold text-green-900 mb-2">Readiness for Advanced</h4>
                    <p className="text-sm text-gray-700">
                      If you want deeper therapy-level work, this basic foundation makes the 7-day advanced course feel smooth.
                    </p>
                  </div>
                </div>
              </ModuleCard>
            </section>

            <section id="inquiry" className="mt-12">
              <CTASection
                title="Basic (3 Days) Training Inquiry"
                description="Tell us your preferred dates and your goal (self-practice / professional path). We’ll share the next batch details and what to prepare."
                buttons={[
                  { icon: "📩", label: "Contact for Basic Training", href: "/contact" },
                  { icon: "🎓", label: "Back to Singing Bowl Training", href: "/training/singing-bowl" },
                ]}
                variant="green"
                backgroundEmoji="🎵"
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
