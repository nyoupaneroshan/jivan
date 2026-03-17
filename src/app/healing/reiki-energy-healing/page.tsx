import React from "react";
import { Breadcrumb } from "@/components/jivan/Breadcrumb";
import { PageHero } from "@/components/jivan/PageHero";
import { QuickNavigation } from "@/components/jivan/QuickNavigation";
import { IntroSection } from "@/components/jivan/yoga/IntroSection";
import { ModuleCard } from "@/components/jivan/ModuleCard";
import { CTASection } from "@/components/jivan/yoga/CTASection";
import { SidebarWidget } from "@/components/jivan/SidebarWidget";
import { generateUpcomingBatches } from "@/utils/batchGenerator";

export default function ReikiEnergyHealingSessionPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Reiki", href: "/reiki" },
    { label: "Reiki Energy Healing" },
  ];

  const heroStats = [
    { number: "1:1", label: "Private session" },
    { number: "Fully clothed", label: "Comfort-first" },
    { number: "Gentle", label: "Non-invasive" },
    { number: "All Levels", label: "Welcome" },
  ];

  const heroCTAs = [
    { label: "Book Session", href: "#book", primary: true },
    { label: "What to expect", href: "#what-to-expect" },
  ];

  const quickNavItems = [
    { id: "overview", icon: "✨", label: "Overview", href: "#overview" },
    { id: "what-to-expect", icon: "🛏️", label: "What to expect", href: "#what-to-expect" },
    { id: "benefits", icon: "🌿", label: "Benefits", href: "#benefits" },
    { id: "sensations", icon: "🫶", label: "Common experiences", href: "#sensations" },
    { id: "care", icon: "✅", label: "Care notes", href: "#care" },
    { id: "book", icon: "📅", label: "Book", href: "#book" },
  ];

  const introParagraphs = [
    "A Reiki energy healing session is a quiet space to slow down. You don’t need to explain everything perfectly—just come as you are, and we’ll guide you gently.",
    "Reiki is commonly described as a Japanese energy healing technique that supports deep relaxation and stress reduction through gentle touch (or hands placed just above the body). People often report feeling calmer, lighter, and more settled afterwards. [web:249]",
  ];

  const priceInfo = {
    label: "Starting From",
    amount: "$50",
    duration: "Per Session",
    includes: ["1:1 Reiki Session", "Energy Balancing", "Relaxation", "Integration time"],
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
        badge={{ icon: "✨", text: "Reiki Energy Healing" }}
        title="Reiki Energy Healing (1:1 Session)"
        subtitle="A gentle session for deep relaxation, emotional balance, and a calmer nervous system."
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
                title="A calm reset—without pushing"
                paragraphs={introParagraphs}
                variant="green"
              />
            </section>

            <section id="what-to-expect" className="mt-12">
              <ModuleCard
                icon="🛏️"
                title="What to expect in your Reiki session"
                description="There’s no one “perfect” way a Reiki session should feel. Typically, you’ll lie down fully clothed in a quiet space. The practitioner places hands lightly on or just above different areas of the body, and you’re simply invited to rest. Many people feel deeply relaxed, some even fall asleep. [web:249]"
                badges={[
                  "Fully clothed",
                  "Light touch / hands above body",
                  "Quiet, comfortable space",
                  "Deep relaxation",
                ]}
                link={{ href: "#care", label: "Care notes & comfort tips" }}
                defaultExpanded={true}
                variant="green"
              >
                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white/80 backdrop-blur rounded-xl p-6 border border-green-100 shadow-sm">
                    <h4 className="text-lg font-bold text-green-900 mb-2">Before we start</h4>
                    <p className="text-sm text-gray-700">
                      We’ll do a short check-in. If you have an intention (sleep, stress, emotional heaviness, clarity),
                      share it—if not, that’s okay too.
                    </p>
                  </div>

                  <div className="bg-white/80 backdrop-blur rounded-xl p-6 border border-green-100 shadow-sm">
                    <h4 className="text-lg font-bold text-green-900 mb-2">During the session</h4>
                    <p className="text-sm text-gray-700">
                      You can adjust your position any time and ask for a blanket or support for your knees—comfort matters. [web:249]
                    </p>
                  </div>
                </div>
              </ModuleCard>
            </section>

            <section id="benefits" className="mt-12">
              <ModuleCard
                icon="🌿"
                title="What Reiki can support"
                description="The most common outcome people report is an immediate sense of stress release and deep relaxation. Some also notice better sleep, clearer thinking, and more emotional steadiness over time. [web:249]"
                badges={[
                  "Stress reduction",
                  "Deep relaxation",
                  "Emotional balance",
                  "Better sleep support",
                  "Mental clarity",
                  "Grounding",
                ]}
                link={{ href: "#book", label: "Book your session" }}
                variant="green"
              />
            </section>

            <section id="sensations" className="mt-12">
              <ModuleCard
                icon="🫶"
                title="Common experiences (and what’s normal)"
                description="People often describe feeling warmth from the practitioner’s hands, tingling, heaviness/lightness, or a peaceful ‘in-between’ state. It’s also normal to feel very little physically—many still feel better afterwards. [web:249]"
                badges={[
                  "Warmth",
                  "Tingling",
                  "Deep calm",
                  "Emotional release",
                  "Sleepy / meditative",
                  "Subtle shifts",
                ]}
                link={{ href: "#care", label: "Read care notes" }}
                variant="green"
              >
                <div className="mt-6 bg-white/80 backdrop-blur rounded-xl p-6 border border-green-100 shadow-sm">
                  <h4 className="text-lg font-bold text-green-900 mb-2">If emotions come up</h4>
                  <p className="text-sm text-gray-700">
                    Sometimes people feel like crying, laughing, or simply becoming very quiet. That’s okay—there’s no need
                    to “hold it in.” We keep the space safe and respectful.
                  </p>
                </div>
              </ModuleCard>
            </section>

            <section id="care" className="mt-12">
              <ModuleCard
                icon="✅"
                title="Care notes (to keep it gentle)"
                description="Reiki should feel supportive. We always adjust pacing and touch style based on your comfort."
                badges={["Comfort-first", "Adjustable", "Beginner-friendly", "Respectful space"]}
                link={{ href: "#book", label: "Book with confidence" }}
                variant="green"
              >
                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white/80 backdrop-blur rounded-xl p-6 border border-green-100 shadow-sm">
                    <h4 className="text-lg font-bold text-green-900 mb-2">Before</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>Wear comfortable clothes.</li>
                      <li>Avoid rushing—arrive 5–10 minutes early.</li>
                      <li>Skip heavy meals right before the session.</li>
                    </ul>
                  </div>

                  <div className="bg-white/80 backdrop-blur rounded-xl p-6 border border-green-100 shadow-sm">
                    <h4 className="text-lg font-bold text-green-900 mb-2">After</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>Drink water and rest if you feel sleepy.</li>
                      <li>Keep the day light if possible.</li>
                      <li>Journaling helps integration.</li>
                    </ul>
                  </div>
                </div>
              </ModuleCard>
            </section>

            <section id="book" className="mt-12">
              <CTASection
                title="Book a Reiki Energy Healing Session"
                description="Tell us your intention (stress, sleep, emotional heaviness, clarity) and we’ll guide the session gently."
                buttons={[
                  { icon: "📅", label: "Book Session", href: "/contact" },
                  { icon: "🎓", label: "Explore Reiki Training", href: "/reiki/training" },
                ]}
                variant="green"
                backgroundEmoji="✨"
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
