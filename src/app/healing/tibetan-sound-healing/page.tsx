import React from "react";
import { Breadcrumb } from "@/components/jivan/Breadcrumb";
import { PageHero } from "@/components/jivan/PageHero";
import { QuickNavigation } from "@/components/jivan/QuickNavigation";
import { IntroSection } from "@/components/jivan/yoga/IntroSection";
import { ModuleCard } from "@/components/jivan/ModuleCard";
import { CTASection } from "@/components/jivan/yoga/CTASection";
import { SidebarWidget } from "@/components/jivan/SidebarWidget";
import { generateUpcomingBatches } from "@/utils/batchGenerator";

export default function TibetanSoundHealingPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Healing", href: "/healing" },
    { label: "Tibetan Sound Healing (60 mins)" },
  ];

  const heroStats = [
    { number: "60 mins", label: "Session length" },
    { number: "Tibetan", label: "Bowl tradition" },
    { number: "Deep", label: "Relaxation" },
    { number: "1:1 / Group", label: "Formats" },
  ];

  const heroCTAs = [
    { label: "Book a Session", href: "#book", primary: true },
    { label: "See Overview", href: "#overview" },
  ];

  const quickNavItems = [
    { id: "overview", icon: "🥣", label: "Overview", href: "#overview" },
    { id: "what-it-is", icon: "🔔", label: "What it is", href: "#what-it-is" },
    { id: "benefits", icon: "🌿", label: "Benefits", href: "#benefits" },
    { id: "what-to-expect", icon: "🛏️", label: "What to expect", href: "#what-to-expect" },
    { id: "care", icon: "✅", label: "Care notes", href: "#care" },
    { id: "book", icon: "📅", label: "Book", href: "#book" },
  ];

  const introParagraphs = [
    "Tibetan Sound Healing is one of the most grounding forms of sound work. It uses the natural tone and vibration of Himalayan/Tibetan singing bowls to help the body relax deeply and the mind become quiet.",
    "Most people don’t come for “something mystical.” They come because they’re tired—mentally, emotionally, physically. This session is designed to feel safe, steady, and deeply settling.",
  ];

  const priceInfo = {
    label: "Starting From",
    amount: "$50",
    duration: "Per Session (60 mins)",
    includes: ["1:1 Sessions", "Group Options", "Bowl-based sound journey", "Packages Available"],
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
        badge={{ icon: "🥣", text: "Tibetan Bowls • Vibration • Deep Rest" }}
        title="Tibetan Sound Healing (60 mins)"
        subtitle="A bowl-based sound session to soften stress, calm the nervous system, and help you feel grounded again."
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
                title="Heavy mind? Tight body? This helps you melt back into calm."
                paragraphs={introParagraphs}
                variant="green"
              />
            </section>

            <section id="what-it-is" className="mt-12">
              <ModuleCard
                icon="🔔"
                title="What Tibetan sound healing is"
                description="In this session, we work primarily with Tibetan/Himalayan singing bowls. The sound isn’t just something you hear—it’s something you feel. The bowls create a rich tone with layers of vibration that can help your system downshift from stress into rest."
                badges={["Bowl-based", "Vibration you can feel", "Quiet guidance", "Deep settling"]}
                link={{ href: "#what-to-expect", label: "See the session flow" }}
                defaultExpanded={true}
                variant="green"
              >
                <div className="mt-6 bg-white/80 backdrop-blur rounded-xl p-6 border border-green-100 shadow-sm">
                  <h4 className="text-lg font-bold text-green-900 mb-2">Why bowls feel so grounding</h4>
                  <p className="text-sm text-gray-700">
                    Tibetan bowls produce a deep, warm tone with natural overtones. That layered sound can feel like a
                    “sound blanket” around the body—supporting stillness without forcing concentration.
                  </p>
                </div>
              </ModuleCard>
            </section>

            <section id="benefits" className="mt-12">
              <ModuleCard
                icon="🌿"
                title="What this session can support"
                description="People usually choose Tibetan sound healing when they want deep relaxation and a grounded reset. Many report reduced tension and anxiety and an improved sense of wellbeing after singing bowl sound meditation experiences. [web:215]"
                badges={[
                  "Stress & tension relief",
                  "Deep relaxation",
                  "Better sleep support",
                  "Emotional release",
                  "Mindfulness",
                  "Grounding",
                ]}
                link={{ href: "#book", label: "Book a 60-minute session" }}
                variant="green"
              />
            </section>

            <section id="what-to-expect" className="mt-12">
              <ModuleCard
                icon="🛏️"
                title="What to expect (60 minutes)"
                description="We begin with a short check-in, then you lie down (or sit if needed). The bowls are played gently and steadily. We end with quiet time so your system can integrate—no rush, no sudden ending."
                badges={["Short check-in", "Comfortable setup", "Bowl sound journey", "Quiet integration"]}
                link={{ href: "#care", label: "Before & after tips" }}
                variant="green"
              >
                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white/80 backdrop-blur rounded-xl p-6 border border-green-100 shadow-sm">
                    <h4 className="text-lg font-bold text-green-900 mb-2">During the session</h4>
                    <p className="text-sm text-gray-700">
                      You don’t have to “do it right.” Just breathe naturally and let the sound do the work. If anything
                      feels too strong, we adjust immediately.
                    </p>
                  </div>

                  <div className="bg-white/80 backdrop-blur rounded-xl p-6 border border-green-100 shadow-sm">
                    <h4 className="text-lg font-bold text-green-900 mb-2">After the session</h4>
                    <p className="text-sm text-gray-700">
                      Many people feel calm, soft, and grounded. Some feel sleepy. Drink water and keep your day light if you
                      can—your nervous system will thank you.
                    </p>
                  </div>
                </div>
              </ModuleCard>
            </section>

            <section id="care" className="mt-12">
              <ModuleCard
                icon="✅"
                title="Care notes (we keep it gentle)"
                description="Sound healing should feel supportive. We adjust volume, pacing, and placement depending on your comfort and sensitivity."
                badges={["Comfort-first", "Adjustable intensity", "Beginner-friendly", "Respectful practice"]}
                link={{ href: "#book", label: "Book with confidence" }}
                variant="green"
              >
                <div className="mt-6 bg-white/80 backdrop-blur rounded-xl p-6 border border-green-100 shadow-sm">
                  <h4 className="text-lg font-bold text-green-900 mb-2">Please tell us if…</h4>
                  <p className="text-sm text-gray-700">
                    You are pregnant, have epilepsy/seizure history, strong sound sensitivity, or any condition where you
                    want the gentlest possible approach. We’ll modify the session.
                  </p>
                </div>
              </ModuleCard>
            </section>

            <section id="book" className="mt-12">
              <CTASection
                title="Book Tibetan Sound Healing (60 mins)"
                description="Tell us what you need most right now—deep rest, stress relief, emotional release, or grounding—and we’ll guide the session accordingly."
                buttons={[
                  { icon: "📅", label: "Book Session", href: "/contact" },
                  { icon: "🎧", label: "Back to Sound Healing", href: "/healing/sound-healing" },
                ]}
                variant="green"
                backgroundEmoji="🥣"
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
