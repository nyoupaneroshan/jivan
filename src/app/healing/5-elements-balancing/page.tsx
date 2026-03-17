import React from "react";
import { Breadcrumb } from "@/components/jivan/Breadcrumb";
import { PageHero } from "@/components/jivan/PageHero";
import { QuickNavigation } from "@/components/jivan/QuickNavigation";
import { IntroSection } from "@/components/jivan/yoga/IntroSection";
import { ModuleCard } from "@/components/jivan/ModuleCard";
import { CTASection } from "@/components/jivan/yoga/CTASection";
import { SidebarWidget } from "@/components/jivan/SidebarWidget";
import { generateUpcomingBatches } from "@/utils/batchGenerator";

export default function FiveElementsBalancingPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Healing", href: "/healing" },
    { label: "5 Elements Balancing (30 mins)" },
  ];

  const heroStats = [
    { number: "30 mins", label: "Session length" },
    { number: "5 Elements", label: "Balance focus" },
    { number: "Gentle", label: "Reset & grounding" },
    { number: "Quick", label: "Easy to repeat" },
  ];

  const heroCTAs = [
    { label: "Book a Session", href: "#book", primary: true },
    { label: "See Overview", href: "#overview" },
  ];

  const quickNavItems = [
    { id: "overview", icon: "🌿", label: "Overview", href: "#overview" },
    { id: "elements", icon: "🧭", label: "The 5 elements", href: "#elements" },
    { id: "signs", icon: "🫶", label: "Signs of imbalance", href: "#signs" },
    { id: "session-flow", icon: "⏱️", label: "30-min flow", href: "#session-flow" },
    { id: "aftercare", icon: "✅", label: "Aftercare", href: "#aftercare" },
    { id: "book", icon: "📅", label: "Book", href: "#book" },
  ];

  const introParagraphs = [
    "5 Elements Balancing is a short, grounding session designed to bring you back into a more “even” state—emotionally, mentally, and energetically.",
    "When life is busy, it’s common to feel scattered, heavy, restless, or drained. This session is a gentle reset that helps you feel centered again—without needing a long process.",
  ];

  const priceInfo = {
    label: "Starting From",
    amount: "$30",
    duration: "Per Session (30 mins)",
    includes: ["Short guided session", "Grounding & calming", "Beginner-friendly", "Packages Available"],
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
        badge={{ icon: "🌿", text: "5 Elements • Grounding • Balance" }}
        title="5 Elements Balancing (30 mins)"
        subtitle="A short, calming session to restore inner balance and help you feel steady again."
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
                title="A simple reset when you feel ‘off’"
                paragraphs={introParagraphs}
                variant="green"
              />
            </section>

            <section id="elements" className="mt-12">
              <ModuleCard
                icon="🧭"
                title="The 5 elements (what we balance)"
                description="Different traditions describe the 5 elements in slightly different ways. In our sessions, we use the “elements” as a simple map for balance—grounding (earth), flow (water), warmth (fire), breath/space (air/ether), and clarity (space/ether)."
                badges={[
                  "Grounding (Earth)",
                  "Flow (Water)",
                  "Warmth (Fire)",
                  "Breath (Air)",
                  "Space (Ether)",
                ]}
                link={{ href: "#session-flow", label: "See the 30-minute flow" }}
                defaultExpanded={true}
                variant="green"
              >
                <div className="mt-6 bg-white/80 backdrop-blur rounded-xl p-6 border border-green-100 shadow-sm">
                  <h4 className="text-lg font-bold text-green-900 mb-2">What “balancing” means here</h4>
                  <p className="text-sm text-gray-700">
                    It’s not about being perfect. It’s about returning to your natural rhythm—so you feel more calm, clear,
                    and emotionally steady.
                  </p>
                </div>
              </ModuleCard>
            </section>

            <section id="signs" className="mt-12">
              <ModuleCard
                icon="🫶"
                title="Signs you may benefit from this session"
                description="People usually choose 5 Elements Balancing when they feel “out of alignment” but don’t necessarily want a long session."
                badges={[
                  "Overthinking",
                  "Restlessness",
                  "Low energy",
                  "Emotional heaviness",
                  "Feeling ungrounded",
                  "Poor sleep support",
                ]}
                link={{ href: "#book", label: "Book a 30-minute session" }}
                variant="green"
              />
            </section>

            <section id="session-flow" className="mt-12">
              <ModuleCard
                icon="⏱️"
                title="Session flow (30 minutes)"
                description="Short check-in, guided settling breath, element-balancing practice, then a calm closing. The goal is to leave you feeling stable and clear—not sleepy and rushed."
                badges={[
                  "Short check-in",
                  "Breath + grounding",
                  "Element balancing",
                  "Quiet integration",
                ]}
                link={{ href: "#aftercare", label: "Aftercare tips" }}
                variant="green"
              >
                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white/80 backdrop-blur rounded-xl p-6 border border-green-100 shadow-sm">
                    <h4 className="text-lg font-bold text-green-900 mb-2">Standalone</h4>
                    <p className="text-sm text-gray-700">
                      Great when you want a clean reset in the middle of a stressful week.
                    </p>
                  </div>

                  <div className="bg-white/80 backdrop-blur rounded-xl p-6 border border-green-100 shadow-sm">
                    <h4 className="text-lg font-bold text-green-900 mb-2">As an add-on</h4>
                    <p className="text-sm text-gray-700">
                      Works beautifully after sound healing or mantra work—like a grounding “seal” at the end.
                    </p>
                  </div>
                </div>
              </ModuleCard>
            </section>

            <section id="aftercare" className="mt-12">
              <ModuleCard
                icon="✅"
                title="Aftercare (to keep the balance)"
                description="The session is short—so small habits help you keep the effect longer."
                badges={["Simple", "Repeatable", "Beginner-friendly"]}
                link={{ href: "#book", label: "Book now" }}
                variant="green"
              >
                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white/80 backdrop-blur rounded-xl p-6 border border-green-100 shadow-sm">
                    <h4 className="text-lg font-bold text-green-900 mb-2">After the session</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>Drink water.</li>
                      <li>Take 2–5 minutes of quiet before you rush.</li>
                      <li>Keep your day a little lighter if possible.</li>
                    </ul>
                  </div>

                  <div className="bg-white/80 backdrop-blur rounded-xl p-6 border border-green-100 shadow-sm">
                    <h4 className="text-lg font-bold text-green-900 mb-2">Simple 3-day reset</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>5 minutes slow breathing daily.</li>
                      <li>One short walk (even 10 minutes).</li>
                      <li>Less screen time at night for better sleep.</li>
                    </ul>
                  </div>
                </div>
              </ModuleCard>
            </section>

            <section id="book" className="mt-12">
              <CTASection
                title="Book 5 Elements Balancing (30 mins)"
                description="Tell us what you’re feeling most right now (restless, heavy, scattered, low energy) and we’ll guide the session toward balance."
                buttons={[
                  { icon: "📅", label: "Book Session", href: "/contact" },
                  { icon: "🎧", label: "Back to Sound Healing", href: "/healing/sound-healing" },
                ]}
                variant="green"
                backgroundEmoji="🌿"
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
