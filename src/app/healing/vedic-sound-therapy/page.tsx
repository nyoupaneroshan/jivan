import React from "react";
import { Breadcrumb } from "@/components/jivan/Breadcrumb";
import { PageHero } from "@/components/jivan/PageHero";
import { QuickNavigation } from "@/components/jivan/QuickNavigation";
import { IntroSection } from "@/components/jivan/yoga/IntroSection";
import { ModuleCard } from "@/components/jivan/ModuleCard";
import { CTASection } from "@/components/jivan/yoga/CTASection";
import { SidebarWidget } from "@/components/jivan/SidebarWidget";
import { generateUpcomingBatches } from "@/utils/batchGenerator";

export default function VedicSoundTherapyPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Healing", href: "/healing" },
    { label: "Vedic Sound Therapy (60 mins)" },
  ];

  const heroStats = [
    { number: "60 mins", label: "Session length" },
    { number: "Vedic", label: "Sound practice" },
    { number: "Structured", label: "Therapy flow" },
    { number: "1:1 / Group", label: "Formats" },
  ];

  const heroCTAs = [
    { label: "Book a Session", href: "#book", primary: true },
    { label: "See Overview", href: "#overview" },
  ];

  const quickNavItems = [
    { id: "overview", icon: "🕉️", label: "Overview", href: "#overview" },
    { id: "who-its-for", icon: "🫶", label: "Who it’s for", href: "#who-its-for" },
    { id: "session-flow", icon: "🛏️", label: "Session flow", href: "#session-flow" },
    { id: "benefits", icon: "🌿", label: "Benefits", href: "#benefits" },
    { id: "care", icon: "✅", label: "Care notes", href: "#care" },
    { id: "book", icon: "📅", label: "Book", href: "#book" },
  ];

  const introParagraphs = [
    "Vedic Sound Therapy is a calm, structured 60-minute session designed for people who want something steady and repeatable—like a practice you can return to weekly or monthly.",
    "Compared to a more “floating” sound bath, this feels guided and grounded. We keep the pace gentle, work with sound intentionally, and leave space at the end so you walk out feeling clear—not overstimulated.",
  ];

  const priceInfo = {
    label: "Starting From",
    amount: "$50",
    duration: "Per Session (60 mins)",
    includes: ["1:1 Sessions", "Group Options", "Packages Available", "Calm guided flow"],
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
        badge={{ icon: "🕉️", text: "Vedic • Therapy • Inner Balance" }}
        title="Vedic Sound Therapy (60 mins)"
        subtitle="A structured sound session for relaxation, regulation, and a calmer baseline you can maintain."
        stats={heroStats}
        ctas={heroCTAs}
        variant="green"
        backgroundImage="https://images.unsplash.com/photo-1529693662653-9d480530a697?w=1920"
      />

      {/* Keep 'red' if QuickNavigation doesn't support green yet */}
      <QuickNavigation items={quickNavItems} variant="red" />

      <div className="max-w-[1400px] mx-auto px-5 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12">
          <div>
            <section id="overview">
              <IntroSection
                title="A steady session you can come back to"
                paragraphs={introParagraphs}
                variant="green"
              />
            </section>

            <section id="who-its-for" className="mt-12">
              <ModuleCard
                icon="🫶"
                title="Who Vedic Sound Therapy is great for"
                description="This format is best when you want consistency: a calm, supportive session you can repeat without guessing what you’ll get each time."
                badges={[
                  "Busy mind",
                  "Stress support",
                  "Sleep support",
                  "Emotional heaviness",
                  "Grounding",
                  "Beginner-friendly",
                ]}
                link={{ href: "#book", label: "Book a 60-minute session" }}
                defaultExpanded={true}
                variant="green"
              >
                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white/80 backdrop-blur rounded-xl p-6 border border-green-100 shadow-sm">
                    <h4 className="text-lg font-bold text-green-900 mb-2">If you want “deep work”</h4>
                    <p className="text-sm text-gray-700">
                      We can still go deep—just in a gentle way. Therapy doesn’t have to be intense to be effective.
                    </p>
                  </div>

                  <div className="bg-white/80 backdrop-blur rounded-xl p-6 border border-green-100 shadow-sm">
                    <h4 className="text-lg font-bold text-green-900 mb-2">If you’re sensitive</h4>
                    <p className="text-sm text-gray-700">
                      Tell us what you need. We adjust volume, pacing, and intensity so it feels safe and supportive.
                    </p>
                  </div>
                </div>
              </ModuleCard>
            </section>

            <section id="session-flow" className="mt-12">
              <ModuleCard
                icon="🛏️"
                title="Session flow (60 minutes)"
                description="Comfort first. We start with a short check-in, then guide you into breath and relaxation. The sound work begins slowly, builds gently, and ends with quiet integration."
                badges={[
                  "Check-in",
                  "Breath + settling",
                  "Guided sound work",
                  "Quiet integration",
                ]}
                link={{ href: "#care", label: "Before & after tips" }}
                variant="green"
              >
                <div className="mt-6 bg-white/80 backdrop-blur rounded-xl p-6 border border-green-100 shadow-sm">
                  <h4 className="text-lg font-bold text-green-900 mb-2">What makes it “therapy”</h4>
                  <p className="text-sm text-gray-700">
                    The session is organized with intention—so it supports regulation and balance, not just relaxation in the moment.
                    It’s designed to feel repeatable and stable, especially if you’re building a routine.
                  </p>
                </div>
              </ModuleCard>
            </section>

            <section id="benefits" className="mt-12">
              <ModuleCard
                icon="🌿"
                title="What you may notice over time"
                description="Some people feel a shift right away. Most people notice the deeper changes after a few sessions—especially if stress has been building for a long time."
                badges={[
                  "Calmer baseline",
                  "Better sleep",
                  "Less overthinking",
                  "Emotional steadiness",
                  "More grounded energy",
                  "Clearer focus",
                ]}
                link={{ href: "/healing/vedic-sound-healing", label: "Compare with Vedic Sound Healing" }}
                variant="green"
              />
            </section>

            <section id="care" className="mt-12">
              <ModuleCard
                icon="✅"
                title="Care notes (so it feels good)"
                description="Small things make the session smoother. We always keep this gentle and adjustable."
                badges={["Comfort-first", "Adjustable intensity", "Respectful practice"]}
                link={{ href: "#book", label: "Book now" }}
                variant="green"
              >
                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white/80 backdrop-blur rounded-xl p-6 border border-green-100 shadow-sm">
                    <h4 className="text-lg font-bold text-green-900 mb-2">Before</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>Wear comfortable clothes.</li>
                      <li>Avoid heavy meals right before.</li>
                      <li>Arrive 5–10 minutes early.</li>
                      <li>Tell us about sound sensitivity or headaches.</li>
                    </ul>
                  </div>

                  <div className="bg-white/80 backdrop-blur rounded-xl p-6 border border-green-100 shadow-sm">
                    <h4 className="text-lg font-bold text-green-900 mb-2">After</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>Drink water and rest if you feel sleepy.</li>
                      <li>Keep the day light if possible.</li>
                      <li>Journaling helps integration.</li>
                      <li>Consider a short series (3–5 sessions).</li>
                    </ul>
                  </div>
                </div>
              </ModuleCard>
            </section>

            <section id="book" className="mt-12">
              <CTASection
                title="Book Vedic Sound Therapy (60 mins)"
                description="Tell us what you’re looking for (sleep, stress relief, mental clarity, emotional balance) and we’ll guide the session accordingly."
                buttons={[
                  { icon: "📅", label: "Book Session", href: "/contact" },
                  { icon: "🎧", label: "Back to Sound Healing", href: "/healing/sound-healing" },
                ]}
                variant="green"
                backgroundEmoji="🕉️"
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
