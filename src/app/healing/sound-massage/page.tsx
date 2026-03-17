import React from "react";
import { Breadcrumb } from "@/components/jivan/Breadcrumb";
import { PageHero } from "@/components/jivan/PageHero";
import { QuickNavigation } from "@/components/jivan/QuickNavigation";
import { IntroSection } from "@/components/jivan/yoga/IntroSection";
import { ModuleCard } from "@/components/jivan/ModuleCard";
import { CTASection } from "@/components/jivan/yoga/CTASection";
import { SidebarWidget } from "@/components/jivan/SidebarWidget";
import { generateUpcomingBatches } from "@/utils/batchGenerator";

export default function SoundMassageTherapyPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Healing", href: "/healing" },
    { label: "Sound Massage Therapy (15 mins)" },
  ];

  const heroStats = [
    { number: "15 mins", label: "Session length" },
    { number: "Bowl-based", label: "Vibration" },
    { number: "Fast", label: "Tension relief" },
    { number: "Add-on", label: "Or standalone" },
  ];

  const heroCTAs = [
    { label: "Book a Session", href: "#book", primary: true },
    { label: "See Overview", href: "#overview" },
  ];

  const quickNavItems = [
    { id: "overview", icon: "🎵", label: "Overview", href: "#overview" },
    { id: "what-it-is", icon: "🥣", label: "What it is", href: "#what-it-is" },
    { id: "best-for", icon: "🌿", label: "Best for", href: "#best-for" },
    { id: "session-flow", icon: "⏱️", label: "15-min flow", href: "#session-flow" },
    { id: "care", icon: "✅", label: "Care notes", href: "#care" },
    { id: "book", icon: "📅", label: "Book", href: "#book" },
  ];

  const introParagraphs = [
    "Sound Massage Therapy is a short, body-focused reset. Instead of “talking through stress,” we work through the body—using gentle sound and vibration to help tight areas soften quickly.",
    "It’s only 15 minutes, so it’s perfect when you’re busy, traveling, or you want a quick add-on after a longer healing session. The experience is simple: you stay fully clothed, get comfortable, and let the vibration do the work.",
  ];

  const priceInfo = {
    label: "Starting From",
    amount: "$40",
    duration: "Per Session (15 mins)",
    includes: ["Fully clothed", "Short tension reset", "Add-on friendly", "Packages Available"],
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
        badge={{ icon: "⏱️", text: "15 mins • Quick Reset • Body Calm" }}
        title="Sound Massage Therapy (15 mins)"
        subtitle="A short, bowl-based vibration session to release tension fast and help you feel lighter in your body."
        stats={heroStats}
        ctas={heroCTAs}
        variant="green"
        backgroundImage="https://images.unsplash.com/photo-1545389336-cf090694435e?w=1920"
      />

      {/* Keep 'red' if QuickNavigation doesn't support green yet */}
      <QuickNavigation items={quickNavItems} variant="red" />

      <div className="max-w-[1400px] mx-auto px-5 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12">
          <div>
            <section id="overview">
              <IntroSection
                title="Quick body relief—without a long session"
                paragraphs={introParagraphs}
                variant="green"
              />
            </section>

            <section id="what-it-is" className="mt-12">
              <ModuleCard
                icon="🥣"
                title="What sound massage therapy is"
                description="Sound massage focuses on gentle vibration in and around the body. Singing bowls are commonly placed on (or close to) the fully clothed body and played softly, creating a soothing combination of sound + vibration that encourages deep relaxation and tension release. [web:226][web:227]"
                badges={[
                  "Fully clothed",
                  "Gentle vibration",
                  "Short and focused",
                  "Comfort-first",
                ]}
                link={{ href: "#session-flow", label: "See the 15-minute flow" }}
                defaultExpanded={true}
                variant="green"
              >
                <div className="mt-6 bg-white/80 backdrop-blur rounded-xl p-6 border border-green-100 shadow-sm">
                  <h4 className="text-lg font-bold text-green-900 mb-2">Why it feels so effective</h4>
                  <p className="text-sm text-gray-700">
                    Many sound massage approaches describe the vibration as a gentle rhythmic “massage” effect that can help
                    the body let go of stored tension, while the sound supports a calmer, more meditative state. [web:226][web:182]
                  </p>
                </div>
              </ModuleCard>
            </section>

            <section id="best-for" className="mt-12">
              <ModuleCard
                icon="🌿"
                title="Best for"
                description="This is a great choice when you want relief quickly. People often use short sound sessions to settle stress, soften tightness, and feel more relaxed in a short time window. [web:226][web:229]"
                badges={[
                  "Neck/shoulder tension",
                  "Busy mind",
                  "Quick relaxation",
                  "Travel fatigue",
                  "Pre-event calm",
                  "Add-on after healing",
                ]}
                link={{ href: "#book", label: "Book 15 minutes" }}
                variant="green"
              />
            </section>

            <section id="session-flow" className="mt-12">
              <ModuleCard
                icon="⏱️"
                title="15-minute session flow"
                description="We keep it simple: a quick check-in, comfortable setup, targeted vibration work, then a short quiet finish. You’ll leave feeling lighter, not rushed."
                badges={[
                  "Short check-in",
                  "Comfortable setup",
                  "Targeted sound massage",
                  "Quick integration",
                ]}
                link={{ href: "#care", label: "Before & after tips" }}
                variant="green"
              >
                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white/80 backdrop-blur rounded-xl p-6 border border-green-100 shadow-sm">
                    <h4 className="text-lg font-bold text-green-900 mb-2">Standalone</h4>
                    <p className="text-sm text-gray-700">
                      Perfect when you’re short on time but still want something real and body-based.
                    </p>
                  </div>

                  <div className="bg-white/80 backdrop-blur rounded-xl p-6 border border-green-100 shadow-sm">
                    <h4 className="text-lg font-bold text-green-900 mb-2">Best as an add-on</h4>
                    <p className="text-sm text-gray-700">
                      Add it after sound healing / meditation for a more “physical” finish and extra grounding.
                    </p>
                  </div>
                </div>
              </ModuleCard>
            </section>

            <section id="care" className="mt-12">
              <ModuleCard
                icon="✅"
                title="Care notes (keep it comfortable)"
                description="This is meant to feel gentle. We can always lower intensity, change placement, or pause if you’re sensitive."
                badges={["Adjustable intensity", "Comfort-first", "Beginner-friendly"]}
                link={{ href: "#book", label: "Book with confidence" }}
                variant="green"
              >
                <div className="mt-6 bg-white/80 backdrop-blur rounded-xl p-6 border border-green-100 shadow-sm">
                  <h4 className="text-lg font-bold text-green-900 mb-2">Please tell us if…</h4>
                  <p className="text-sm text-gray-700">
                    You have strong sound sensitivity, epilepsy/seizure history, or any condition where you prefer the
                    gentlest approach. We’ll adjust the session accordingly.
                  </p>
                </div>
              </ModuleCard>
            </section>

            <section id="book" className="mt-12">
              <CTASection
                title="Book Sound Massage Therapy (15 mins)"
                description="Great when you want quick tension relief. Tell us where you feel it most (neck, shoulders, chest, back), and we’ll keep the session focused."
                buttons={[
                  { icon: "📅", label: "Book Session", href: "/contact" },
                  { icon: "🎧", label: "Back to Sound Healing", href: "/healing/sound-healing" },
                ]}
                variant="green"
                backgroundEmoji="⏱️"
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
