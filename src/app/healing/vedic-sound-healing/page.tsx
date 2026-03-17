import React from "react";
import { Breadcrumb } from "@/components/jivan/Breadcrumb";
import { PageHero } from "@/components/jivan/PageHero";
import { QuickNavigation } from "@/components/jivan/QuickNavigation";
import { IntroSection } from "@/components/jivan/yoga/IntroSection";
import { ModuleCard } from "@/components/jivan/ModuleCard";
import { CTASection } from "@/components/jivan/yoga/CTASection";
import { SidebarWidget } from "@/components/jivan/SidebarWidget";
import { generateUpcomingBatches } from "@/utils/batchGenerator";

export default function VedicSoundHealingPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Healing", href: "/healing" },
    { label: "Vedic Sound Healing (60 mins)" },
  ];

  const heroStats = [
    { number: "60 mins", label: "Session length" },
    { number: "Vedic", label: "Mantra-based" },
    { number: "Deep", label: "Relaxation" },
    { number: "1:1 / Group", label: "Formats" },
  ];

  const heroCTAs = [
    { label: "Book a Session", href: "#book", primary: true },
    { label: "See Overview", href: "#overview" },
  ];

  const quickNavItems = [
    { id: "overview", icon: "🕉️", label: "Overview", href: "#overview" },
    { id: "what-makes-vedic", icon: "📿", label: "What makes it Vedic", href: "#what-makes-vedic" },
    { id: "benefits", icon: "🌿", label: "Benefits", href: "#benefits" },
    { id: "what-to-expect", icon: "🛏️", label: "What to expect", href: "#what-to-expect" },
    { id: "preparation", icon: "✅", label: "Before & after", href: "#preparation" },
    { id: "book", icon: "📅", label: "Book", href: "#book" },
  ];

  const introParagraphs = [
    "Vedic Sound Healing is a calmer, more devotional style of sound work. It’s not just “relaxing music”—it’s a guided practice using sacred sound (often mantra/Sanskrit-based tones) to help the mind settle and the heart feel more open.",
    "Many people come to it when they’re mentally overloaded, emotionally heavy, or simply tired of trying too hard. The session is gentle and held with care—so you can rest deeply, and let your system reset in a natural way.",
  ];

  // Keep pricing consistent with your other pages unless you want a different anchor here
  const priceInfo = {
    label: "Starting From",
    amount: "$50",
    duration: "Per Session (60 mins)",
    includes: ["1:1 Sessions", "Group Options", "Calm guided flow", "Packages Available"],
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
        badge={{ icon: "🕉️", text: "Vedic • Mantra • Inner Stillness" }}
        title="Vedic Sound Healing (60 mins)"
        subtitle="A mantra-based sound session for deep calm, clarity, and gentle inner alignment."
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
                title="A quieter kind of healing"
                paragraphs={introParagraphs}
                variant="green"
              />
            </section>

            <section id="what-makes-vedic" className="mt-12">
              <ModuleCard
                icon="📿"
                title="What makes it “Vedic”?"
                description="Vedic sound healing is rooted in sacred sound traditions and often uses mantra/Sanskrit sounds to support relaxation, inner awareness, and a sense of spiritual connection. Many descriptions of Vedic sound healing highlight the role of mantra and the emphasis on Sanskrit as a vibrational language. [web:198]"
                badges={["Mantra-based", "Sanskrit sound", "Meditative", "Gentle guidance"]}
                link={{ href: "#what-to-expect", label: "See how the session flows" }}
                defaultExpanded={true}
                variant="green"
              >
                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white/80 backdrop-blur rounded-xl p-6 border border-green-100 shadow-sm">
                    <h4 className="text-lg font-bold text-green-900 mb-2">Compared to a sound bath</h4>
                    <p className="text-sm text-gray-700">
                      A sound bath can be more “ambient” and spacious. Vedic sound healing usually feels more guided and
                      intentional—like a practice you can carry with you after the session. [web:198]
                    </p>
                  </div>

                  <div className="bg-white/80 backdrop-blur rounded-xl p-6 border border-green-100 shadow-sm">
                    <h4 className="text-lg font-bold text-green-900 mb-2">Chakra/energy alignment theme</h4>
                    <p className="text-sm text-gray-700">
                      Many Vedic sound healing approaches describe sound as supportive for chakra balance and energetic
                      alignment, alongside deep relaxation.  
                    </p>
                  </div>
                </div>
              </ModuleCard>
            </section>

            <section id="benefits" className="mt-12">
              <ModuleCard
                icon="🌿"
                title="What this session can support"
                description="People usually book Vedic Sound Healing when they want a calmer mind and a softer inner state—not just for one day, but as a shift they can keep feeling afterwards. Common descriptions include deep relaxation, stress relief, mindfulness/inner awareness, and spiritual growth themes. [web:194][web:198]"
                badges={[
                  "Deep relaxation",
                  "Stress relief",
                  "Mindfulness",
                  "Emotional release",
                  "Clarity & focus",
                  "Spiritual connection",
                ]}
                link={{ href: "#book", label: "Book a 60-minute session" }}
                variant="green"
              />
            </section>

            <section id="what-to-expect" className="mt-12">
              <ModuleCard
                icon="🛏️"
                title="What to expect (60 minutes)"
                description="We keep it simple and comfortable. You’ll lie down (or sit if you prefer), we begin with a short check-in, then we guide you into breath and relaxation. The sound work is gentle and steady, and we end with quiet integration so you don’t feel rushed."
                badges={["Short check-in", "Breath + settling", "Guided sound", "Quiet integration"]}
                link={{ href: "#preparation", label: "Before & after tips" }}
                variant="green"
              >
                <div className="mt-6 bg-white/80 backdrop-blur rounded-xl p-6 border border-green-100 shadow-sm">
                  <h4 className="text-lg font-bold text-green-900 mb-2">How you may feel afterwards</h4>
                  <p className="text-sm text-gray-700">
                    Many people report feeling calmer, lighter, more grounded, and mentally clearer after Vedic sound
                    healing experiences—especially when the session includes soothing tones and a gentle guided flow. [web:198]
                  </p>
                </div>
              </ModuleCard>
            </section>

            <section id="preparation" className="mt-12">
              <ModuleCard
                icon="✅"
                title="Before & after (small things that help a lot)"
                description="A few simple habits make the experience smoother and deeper."
                badges={["Comfort-first", "Gentle pace", "Beginner-friendly"]}
                link={{ href: "#book", label: "Book now" }}
                variant="green"
              >
                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white/80 backdrop-blur rounded-xl p-6 border border-green-100 shadow-sm">
                    <h4 className="text-lg font-bold text-green-900 mb-2">Before</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>Wear comfortable clothes.</li>
                      <li>Avoid heavy meals right before.</li>
                      <li>Arrive 5–10 minutes early so you can settle.</li>
                      <li>Tell us if you have headaches or sound sensitivity.</li>
                    </ul>
                  </div>

                  <div className="bg-white/80 backdrop-blur rounded-xl p-6 border border-green-100 shadow-sm">
                    <h4 className="text-lg font-bold text-green-900 mb-2">After</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>Drink water and rest if you feel sleepy.</li>
                      <li>Keep the day light if you can.</li>
                      <li>Journaling helps integration.</li>
                      <li>Consider a short series (3–5) if you want deeper change.</li>
                    </ul>
                  </div>
                </div>
              </ModuleCard>
            </section>

            <section id="book" className="mt-12">
              <CTASection
                title="Book Vedic Sound Healing (60 mins)"
                description="Tell us your intention (sleep, stress, clarity, emotional release) and we’ll guide you into the right pace for your session."
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