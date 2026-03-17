import React from "react";
import { Breadcrumb } from "@/components/jivan/Breadcrumb";
import { PageHero } from "@/components/jivan/PageHero";
import { QuickNavigation } from "@/components/jivan/QuickNavigation";
import { IntroSection } from "@/components/jivan/yoga/IntroSection";
import { ModuleCard } from "@/components/jivan/ModuleCard";
import { CTASection } from "@/components/jivan/yoga/CTASection";
import { SidebarWidget } from "@/components/jivan/SidebarWidget";
import { generateUpcomingBatches } from "@/utils/batchGenerator";

type ProgramLink = { id: string; label: string; href: string; note?: string };

export default function SoundHealingPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Healing", href: "/healing" },
    { label: "Sound Healing" },
  ];

  const heroStats = [
    { number: "60 mins", label: "Most popular" },
    { number: "1:1 / Group", label: "Formats" },
    { number: "Gentle", label: "Nervous system" },
    { number: "All Levels", label: "Welcome" },
  ];

  const heroCTAs = [
    { label: "Book a Session", href: "#book", primary: true },
    { label: "See Programs", href: "#programs" },
  ];

  const quickNavItems = [
    { id: "overview", icon: "🎧", label: "Overview", href: "#overview" },
    { id: "programs", icon: "🧾", label: "Programs", href: "#programs" },
    { id: "benefits", icon: "🌿", label: "Benefits", href: "#benefits" },
    { id: "what-to-expect", icon: "🛏️", label: "What to expect", href: "#what-to-expect" },
    { id: "safety", icon: "🫶", label: "Care & safety", href: "#safety" },
    { id: "book", icon: "📅", label: "Book", href: "#book" },
  ];

  const introParagraphs = [
    "Sound healing is a quiet, guided experience designed to help your system settle. When we slow the breath and let the body relax, the mind naturally becomes less noisy—and that’s where real restoration starts.",
    "In our sessions we work with sound intentionally (tone, rhythm, vibration, and silence). Some people feel deep relaxation right away; others notice clearer breathing, better sleep, emotional release, or simply a calmer baseline in daily life.",
  ];

  const programs: ProgramLink[] = [
    {
      id: "sound-singingbowl",
      label: "Sound & Singing Bowl Healing",
      href: "/healing/sound-healing",
      note: "A balanced session and the best place to start.",
    },
    {
      id: "vedic-sound",
      label: "Vedic Sound Healing (60 mins)",
      href: "/healing/vedic-sound-healing",
      note: "For inner clarity, mantra-based calm, and deep grounding.",
    },
    {
      id: "vedic-therapy",
      label: "Vedic Sound Therapy (60 mins)",
      href: "/healing/vedic-sound-therapy",
      note: "A more structured therapeutic flow—great as a regular practice.",
    },
    {
      id: "tibetan",
      label: "Tibetan Sound Healing (60 mins)",
      href: "/healing/tibetan-sound-healing",
      note: "Deep, bowl-based vibration for full-body relaxation.",
    },
    {
      id: "mantra",
      label: "Mantra Healing (60 mins)",
      href: "/healing/mantra",
      note: "Helpful when your mind is overactive and you want focus.",
    },
    {
      id: "mudra-yantra",
      label: "Mudra & Yantra Healing (30 mins)",
      href: "/healing/mudra-yantra",
      note: "Short, clear, and powerful—great when time is limited.",
    },
    {
      id: "elements",
      label: "5 Elements Balancing (30 mins)",
      href: "/healing/5-elements-balancing",
      note: "For balance across body–mind–energy.",
    },
    {
      id: "sound-massage",
      label: "Sound Massage Therapy (15 mins)",
      href: "/healing/sound-massage",
      note: "A quick reset for tension—perfect add-on.",
    },
  ];

  const priceInfo = {
    label: "Starting From",
    amount: "$50",
    duration: "Per Session",
    includes: ["1:1 Sessions", "Group Options", "Packages Available", "Multiple Modalities"],
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
        badge={{ icon: "🎧", text: "Sound Healing • Deep Rest • Balance" }}
        title="Sound Healing"
        subtitle="A calm, guided session to help your mind slow down and your body return to ease."
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
                title="A quiet practice for a busy mind"
                paragraphs={introParagraphs}
                variant="green"
              />
            </section>

            <section id="programs" className="mt-12">
              <div className="rounded-2xl bg-white/85 backdrop-blur border border-green-100 shadow-sm p-8">
                <div className="flex items-start justify-between gap-6 flex-wrap">
                  <div>
                    <h2 className="text-2xl font-extrabold text-gray-900">Programs</h2>
                    <p className="mt-2 text-gray-700 max-w-3xl">
                      If you’re new, choose a 60-minute session first. If you want a gentle introduction, start with
                      15–30 minutes and build from there.
                    </p>
                  </div>

                  <div className="rounded-full bg-green-50 border border-green-100 px-4 py-2 text-sm font-bold text-green-800">
                    Starting from $200 / session
                  </div>
                </div>

                <div className="mt-7 grid grid-cols-2 md:grid-cols-1 gap-4">
                  {programs.map((p) => (
                    <a
                      key={p.id}
                      href={p.href}
                      className="group rounded-xl bg-white/80 border border-green-100 hover:border-green-200 shadow-sm hover:shadow-md transition-all p-5"
                    >
                      <div className="flex items-center justify-between gap-4">
                        <h3 className="font-extrabold text-gray-900 group-hover:text-green-800 transition-colors">
                          {p.label}
                        </h3>
                        <span className="text-green-700 font-bold text-lg transition-transform group-hover:translate-x-0.5">
                          →
                        </span>
                      </div>
                      {p.note && <p className="mt-2 text-sm text-gray-600">{p.note}</p>}
                    </a>
                  ))}
                </div>
              </div>
            </section>

            <section id="benefits" className="mt-12">
              <ModuleCard
                icon="🌿"
                title="What sound healing can support"
                description="Everyone experiences sound differently, but these are the most common reasons people come in. We keep the session gentle and adjust based on what you need that day."
                badges={[
                  "Stress & anxiety support",
                  "Better sleep",
                  "Mental clarity",
                  "Emotional release",
                  "Deep relaxation",
                  "Meditation support",
                ]}
                link={{ href: "#book", label: "Book a session" }}
                defaultExpanded={true}
                variant="green"
              >
                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white/80 backdrop-blur rounded-xl p-6 border border-green-100 shadow-sm">
                    <h4 className="text-lg font-bold text-green-900 mb-2">Good to know</h4>
                    <p className="text-sm text-gray-700">
                      This is a wellness practice meant to support relaxation and balance. It’s not a replacement for
                      medical care—but it can be a powerful complement to your self-care routine.
                    </p>
                  </div>

                  <div className="bg-white/80 backdrop-blur rounded-xl p-6 border border-green-100 shadow-sm">
                    <h4 className="text-lg font-bold text-green-900 mb-2">How many sessions?</h4>
                    <p className="text-sm text-gray-700">
                      One session can feel deeply restorative. For longer-term change (stress patterns, sleep, emotional
                      heaviness), many people prefer a small series (3–5 sessions).
                    </p>
                  </div>
                </div>
              </ModuleCard>
            </section>

            <section id="what-to-expect" className="mt-12">
              <ModuleCard
                icon="🛏️"
                title="What to expect in a session"
                description="Comfort first. We start with a short check-in, then guide you into breath and relaxation. The sound journey begins slowly and ends with quiet integration—so you leave feeling steady, not rushed."
                badges={[
                  "Short check-in",
                  "Comfortable setup",
                  "Guided relaxation",
                  "Sound journey",
                  "Quiet integration",
                ]}
                link={{ href: "#programs", label: "Choose your program" }}
                variant="green"
              >
                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white/80 backdrop-blur rounded-xl p-6 border border-green-100 shadow-sm">
                    <h4 className="text-lg font-bold text-green-900 mb-2">Before you come</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>Wear comfortable clothes.</li>
                      <li>Try to arrive 5–10 minutes early.</li>
                      <li>Avoid a heavy meal right before.</li>
                      <li>Tell us about sound sensitivity or headaches.</li>
                    </ul>
                  </div>

                  <div className="bg-white/80 backdrop-blur rounded-xl p-6 border border-green-100 shadow-sm">
                    <h4 className="text-lg font-bold text-green-900 mb-2">After the session</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>Drink water and keep your day light if possible.</li>
                      <li>Rest if you feel sleepy (very common).</li>
                      <li>Notice sleep and mood for 24–48 hours.</li>
                      <li>Journaling helps integration.</li>
                    </ul>
                  </div>
                </div>
              </ModuleCard>
            </section>

            <section id="safety" className="mt-12">
              <ModuleCard
                icon="🫶"
                title="Care & safety (we keep it gentle)"
                description="Sound healing should feel supportive, not overwhelming. We always adjust volume, pacing, and instruments based on your comfort."
                badges={[
                  "Comfort-first",
                  "Adjustable intensity",
                  "Beginner-friendly",
                  "Respectful practice",
                ]}
                link={{ href: "#book", label: "Book with confidence" }}
                variant="green"
              >
                <div className="mt-6 bg-white/80 backdrop-blur rounded-xl p-6 border border-green-100 shadow-sm">
                  <h4 className="text-lg font-bold text-green-900 mb-2">Please tell us if…</h4>
                  <p className="text-sm text-gray-700">
                    You are pregnant, have epilepsy/seizure history, severe sound sensitivity, or any medical condition
                    where you’d like a gentler approach. We can modify the session appropriately.
                  </p>
                </div>
              </ModuleCard>
            </section>

            <section id="book" className="mt-12">
              <CTASection
                title="Book a sound healing session"
                description="Tell us your goal (sleep, stress, clarity, emotional release) and how much time you have (15/30/60 mins). We’ll recommend the best option."
                buttons={[
                  { icon: "📅", label: "Book a Session", href: "/contact" },
                  { icon: "🎵", label: "Explore Singing Bowl Healing", href: "/healing/singing-bowl" },
                ]}
                variant="green"
                backgroundEmoji="🎧"
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
