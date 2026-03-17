import React from "react";
import { Breadcrumb } from "@/components/jivan/Breadcrumb";
import { PageHero } from "@/components/jivan/PageHero";
import { QuickNavigation } from "@/components/jivan/QuickNavigation";
import { IntroSection } from "@/components/jivan/yoga/IntroSection";
import { ModuleCard } from "@/components/jivan/ModuleCard";
import { CTASection } from "@/components/jivan/yoga/CTASection";
import { SidebarWidget } from "@/components/jivan/SidebarWidget";
import { generateUpcomingBatches } from "@/utils/batchGenerator";

export default function MantraMudraYantraHealingPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Healing", href: "/healing" },
    { label: "Mantra, Mudra & Yantra Healing (30 mins)" },
  ];

  const heroStats = [
    { number: "30 mins", label: "Session length" },
    { number: "Mantra", label: "Sound focus" },
    { number: "Mudra", label: "Hand seals" },
    { number: "Yantra", label: "Visual focus" },
  ];

  const heroCTAs = [
    { label: "Book a Session", href: "#book", primary: true },
    { label: "See Overview", href: "#overview" },
  ];

  // No emojis (as requested)
  const quickNavItems = [
    { id: "overview", icon: "Overview", label: "Overview", href: "#overview" },
    { id: "how-it-works", icon: "Method", label: "How it works", href: "#how-it-works" },
    { id: "benefits", icon: "Benefits", label: "Benefits", href: "#benefits" },
    { id: "session-flow", icon: "Flow", label: "Session flow", href: "#session-flow" },
    { id: "tips", icon: "Tips", label: "Tips", href: "#tips" },
    { id: "book", icon: "Book", label: "Book", href: "#book" },
  ];

  const introParagraphs = [
    "Mantra, Mudra & Yantra Healing is a short, focused 30-minute session designed to settle the mind quickly and bring your energy into a calmer rhythm.",
    "Mantra gives the mind a sound anchor, mudra gives the body a steady signal, and yantra gives the eyes a clean point of focus. Together, they help you feel clear, grounded, and centered without needing a long session.",
  ];

  const priceInfo = {
    label: "Starting From",
    amount: "$30",
    duration: "Per Session (30 mins)",
    includes: ["Short guided session", "Beginner-friendly", "Mantra + mudra + yantra method", "Packages Available"],
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
        badge={{ icon: "", text: "Mantra, Mudra and Yantra" }}
        title="Mantra, Mudra & Yantra Healing (30 mins)"
        subtitle="A short guided practice for calm focus, energetic balance, and mental clarity."
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
                title="Short session. Clear mind. Centered energy."
                paragraphs={introParagraphs}
                variant="green"
              />
            </section>

            <section id="how-it-works" className="mt-12">
              <ModuleCard
                icon=" "
                title="How it works (simple and practical)"
                description="This session uses three anchors at the same time: mantra for the mind, mudra for the body, and yantra for focused attention. When all three are steady, the nervous system settles faster and your inner state becomes clearer—without forcing silence."
                badges={["Mind anchor (mantra)", "Body anchor (mudra)", "Visual anchor (yantra)", "Gentle guidance"]}
                link={{ href: "#session-flow", label: "See the 30-minute flow" }}
                defaultExpanded={true}
                variant="green"
              >
                <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white/80 backdrop-blur rounded-xl p-6 border border-green-100 shadow-sm">
                    <h4 className="text-lg font-bold text-green-900 mb-2">Mantra</h4>
                    <p className="text-sm text-gray-700">
                      A steady sound repetition that helps reduce mental noise and brings attention back to one point.
                    </p>
                  </div>

                  <div className="bg-white/80 backdrop-blur rounded-xl p-6 border border-green-100 shadow-sm">
                    <h4 className="text-lg font-bold text-green-900 mb-2">Mudra</h4>
                    <p className="text-sm text-gray-700">
                      A simple hand position that supports calm breathing and a more grounded body state.
                    </p>
                  </div>

                  <div className="bg-white/80 backdrop-blur rounded-xl p-6 border border-green-100 shadow-sm">
                    <h4 className="text-lg font-bold text-green-900 mb-2">Yantra</h4>
                    <p className="text-sm text-gray-700">
                      A gentle visual focus that helps attention stabilize, especially for overthinking and mental fatigue.
                    </p>
                  </div>
                </div>
              </ModuleCard>
            </section>

            <section id="benefits" className="mt-12">
              <ModuleCard
                icon=" "
                title="What this session can support"
                description="Because it is short and focused, this session is ideal when you want a quick inner reset—especially for stress, mental noise, and emotional heaviness."
                badges={[
                  "Quick calm",
                  "Less overthinking",
                  "Clarity and focus",
                  "Grounding",
                  "Emotional balance",
                  "Energy alignment",
                ]}
                link={{ href: "#book", label: "Book a 30-minute session" }}
                variant="green"
              />
            </section>

            <section id="session-flow" className="mt-12">
              <ModuleCard
                icon=" "
                title="Session flow (30 minutes)"
                description="We keep it clean and supportive: short check-in, gentle settling breath, guided mantra with mudra, yantra focus, then a quiet closing so you leave feeling clear."
                badges={["Check-in", "Breath", "Mantra + mudra + yantra", "Integration"]}
                link={{ href: "#tips", label: "Tips to get the best result" }}
                variant="green"
              >
                <div className="mt-6 bg-white/80 backdrop-blur rounded-xl p-6 border border-green-100 shadow-sm">
                  <h4 className="text-lg font-bold text-green-900 mb-2">Best use-case</h4>
                  <p className="text-sm text-gray-700">
                    This is ideal as a reset session between busy days, or as an add-on after sound healing when you want a
                    more focused, meditative finish.
                  </p>
                </div>
              </ModuleCard>
            </section>

            <section id="tips" className="mt-12">
              <ModuleCard
                icon=" "
                title="Small tips (so it feels deeper)"
                description="A few small things help the session land beautifully, especially because it is only 30 minutes."
                badges={["Beginner-friendly", "Comfort-first", "Gentle pace"]}
                link={{ href: "#book", label: "Book now" }}
                variant="green"
              >
                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white/80 backdrop-blur rounded-xl p-6 border border-green-100 shadow-sm">
                    <h4 className="text-lg font-bold text-green-900 mb-2">Before</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>Keep your phone on silent before you arrive.</li>
                      <li>Avoid a heavy meal right before.</li>
                      <li>Come with one clear intention (calm, focus, grounding).</li>
                    </ul>
                  </div>

                  <div className="bg-white/80 backdrop-blur rounded-xl p-6 border border-green-100 shadow-sm">
                    <h4 className="text-lg font-bold text-green-900 mb-2">After</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>Take 2 minutes of quiet before jumping back to work.</li>
                      <li>Drink water.</li>
                      <li>If you liked it, repeat weekly for steadier results.</li>
                    </ul>
                  </div>
                </div>
              </ModuleCard>
            </section>

            <section id="book" className="mt-12">
              <CTASection
                title="Book Mantra, Mudra & Yantra Healing (30 mins)"
                description="Tell us what you want most right now—calm, focus, grounding, or emotional balance—and we will guide the session accordingly."
                buttons={[
                  { icon: "Book", label: "Book Session", href: "/contact" },
                  { icon: "Back", label: "Back to Healing", href: "/healing" },
                ]}
                variant="green"
                backgroundEmoji=""
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
