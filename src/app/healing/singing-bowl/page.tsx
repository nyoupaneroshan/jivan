import React from "react";
import { Breadcrumb } from "@/components/jivan/Breadcrumb";
import { PageHero } from "@/components/jivan/PageHero";
import { QuickNavigation } from "@/components/jivan/QuickNavigation";
import { IntroSection } from "@/components/jivan/yoga/IntroSection";
import { ModuleCard } from "@/components/jivan/ModuleCard";
import { TheoryCards } from "@/components/jivan/yoga/TheoryCards";
import { CTASection } from "@/components/jivan/yoga/CTASection";
import { SidebarWidget } from "@/components/jivan/SidebarWidget";
import { generateUpcomingBatches } from "@/utils/batchGenerator";

type ProgramLink = { id: string; label: string; href: string; isGroup?: boolean };

export default function SingingBowlPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Healing", href: "/healing" },
    { label: "Singing Bowl Healing" },
  ];

  const heroStats = [
    { number: "7 Chakras", label: "Balancing focus" },
    { number: "Multiple", label: "Session options" },
    { number: "Guided", label: "With care" },
    { number: "All Levels", label: "Beginner-friendly" },
  ];

  const heroCTAs = [
    { label: "Book a Session", href: "#enroll", primary: true },
    { label: "See Programs", href: "#programs" },
  ];

  const quickNavItems = [
    { id: "overview", icon: "", label: "Overview", href: "#overview" },
    { id: "programs", icon: "", label: "Programs", href: "#programs" },
    { id: "healing-therapy", icon: "", label: "Healing Therapy", href: "#healing-therapy" },
    { id: "meditation", icon: "", label: "Meditations", href: "#meditation" },
    { id: "training", icon: "", label: "Training", href: "#training" },
    { id: "energy-healing", icon: "", label: "Energy Healing", href: "#energy-healing" },
    { id: "chakra-healing", icon: "", label: "7 Chakra Healing", href: "#chakra-healing" },
    { id: "enroll", icon: "", label: "Book", href: "#enroll" },
  ];

  const introParagraphs = [
    "Singing bowls (Himalayan/Tibetan bowls) have been used across the Himalayas for generations—sometimes for meditation, sometimes for ceremony, and often simply to bring the mind back to stillness.",
    "In our sessions, we use the sound gently and intentionally. The goal isn’t to “push” anything—just to help you settle, breathe deeper, and feel more balanced from the inside out.",
  ];

  const programs: ProgramLink[] = [
    {
      id: "singing-bowl-group",
      label: "Singing Bowl Healing",
      href: "/healing/singing-bowl",
      isGroup: true,
    },
    { id: "sound-healing", label: "Sound & Singing Bowl Healing", href: "/healing/sound-healing" },
    { id: "vedic-sound", label: "Vedic Sound Healing (60 mins)", href: "/healing/vedic-sound-healing" },
    { id: "vedic-therapy", label: "Vedic Sound Therapy (60 mins)", href: "/healing/vedic-sound-therapy" },
    { id: "mantra", label: "Mantra Healing (60 mins)", href: "/healing/mantra" },
    { id: "mudra-yantra", label: "Mudra & Yantra Healing (30 mins)", href: "/healing/mudra-yantra" },
    { id: "tibetan", label: "Tibetan Sound Healing (60 mins)", href: "/healing/tibetan-sound-healing" },
    { id: "sound-massage", label: "Sound Massage Therapy (15 mins)", href: "/healing/sound-massage" },
    { id: "elements", label: "5 Elements Balancing (30 mins)", href: "/healing/5-elements-balancing" },
  ];

  const theoryCards = [
    {
      icon: "",
      title: "Where sound healing comes from",
      description:
        "A short look at how sound has been used traditionally—beyond trends—through the Himalayan spiritual culture.",
      link: { href: "#overview", label: "Start here" },
    },
    {
      icon: "",
      title: "Vibration & the nervous system",
      description:
        "Why a calm rhythm of sound + breath can help you downshift from stress and return to steadiness.",
      link: { href: "#healing-therapy", label: "Healing therapy" },
    },
    {
      icon: "",
      title: "Chakras (simple, practical)",
      description:
        "A grounded way to understand chakra-balancing work without overcomplicating it.",
      link: { href: "#chakra-healing", label: "Chakra healing" },
    },
  ];

  const ctaButtons = [
    { icon: "", label: "Book Healing Session", href: "#enroll" },
    { icon: "🎓", label: "Ask About Training", href: "#training" },
  ];

  const priceInfo = {
    label: "Starting From",
    amount: "$200",
    duration: "Per Session",
    includes: [
      "Individual Sessions",
      "Group Sessions Available",
      "Package Discounts",
      "Training Programs",
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
        badge={{ icon: "🎵", text: "Sound Healing • Singing Bowls • Mantra" }}
        title="Singing Bowl Healing"
        subtitle="A quiet, grounding experience—designed to help you relax deeply and return to balance."
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
                title="A simple way to feel lighter"
                paragraphs={introParagraphs}
                variant="green"
              />
            </section>

            <section id="programs" className="mt-12">
              <div className="rounded-2xl bg-white/85 backdrop-blur border border-green-100 shadow-sm p-8">
                <div className="flex items-start justify-between gap-6 flex-wrap">
                  <div>
                    <h2 className="text-2xl font-extrabold text-gray-900">Choose your session</h2>
                    <p className="mt-2 text-gray-700 max-w-3xl">
                      If you’re not sure where to begin, start with a 60-minute option. If you want a quick reset,
                      the shorter therapies are great too.
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
                      className="group rounded-xl bg-white/80 border border-green-100 hover:border-green-200 shadow-sm hover:shadow-md transition-all p-5 flex items-center justify-between gap-4"
                    >
                      <div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <h3 className="font-extrabold text-gray-900 group-hover:text-green-800 transition-colors">
                            {p.label}
                          </h3>
                          {p.isGroup && (
                            <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-green-100 text-green-800 border border-green-200">
                              Group available
                            </span>
                          )}
                        </div>
                        <p className="mt-1 text-sm text-gray-600">
                          View details and book when you’re ready.
                        </p>
                      </div>

                      <span className="text-green-700 font-bold text-lg transition-transform group-hover:translate-x-0.5">
                        →
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </section>

            <section id="healing-therapy" className="mt-12">
              <ModuleCard
                icon=""
                title="Singing Bowl Healing Therapy"
                description="A calm, full-body reset using authentic Himalayan bowls. We work with vibration to soften stress, release physical tightness, and support emotional balance—without forcing anything."
                badges={[
                  "Stress Release",
                  "Deep Relaxation",
                  "Energy Balancing",
                  "Emotional Reset",
                  "Better Sleep Support",
                  "Chakra Alignment",
                ]}
                link={{ href: "#programs", label: "Explore sessions & durations" }}
                defaultExpanded={true}
                variant="red"
              />
            </section>

            <section id="meditation" className="mt-12">
              <ModuleCard
                icon=""
                title="Singing Bowl Meditation"
                description="Guided meditation supported by sacred tones. It’s especially helpful if your mind runs fast—sound makes it easier to settle into a quieter space."
                badges={["Guided Meditation", "Mindfulness", "Inner Calm", "Deeper Stillness"]}
                link={{ href: "#programs", label: "Pick a meditation-style session" }}
                variant="red"
              />
            </section>

            <section id="training" className="mt-12">
              <ModuleCard
                icon=""
                title="Training Programs"
                description="For those who want to learn properly—from technique to practical application. Ideal for yoga teachers, wellness practitioners, and serious students."
                badges={[
                  "Basic Training (12 Hours)",
                  "Advanced Training (35 Hours)",
                  "Certification",
                  "Professional Practice",
                ]}
                link={{ href: "#enroll", label: "Training inquiry" }}
                variant="red"
              >
                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white/80 backdrop-blur rounded-xl p-6 border border-green-100 shadow-sm">
                    <h4 className="text-lg font-bold text-green-900 mb-2">Basic Training</h4>
                    <div className="text-2xl font-extrabold text-green-700 mb-3">12 Hours</div>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>Introduction to Singing Bowls</li>
                      <li>Basic Playing Techniques</li>
                      <li>Sound Vibration Principles</li>
                      <li>Simple Healing Methods</li>
                      <li>Self-Practice Techniques</li>
                      <li>Basic Certification</li>
                    </ul>
                  </div>

                  <div className="bg-white/80 backdrop-blur rounded-xl p-6 border border-green-100 shadow-sm">
                    <h4 className="text-lg font-bold text-green-900 mb-2">Advanced Training</h4>
                    <div className="text-2xl font-extrabold text-green-700 mb-3">35 Hours</div>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>Advanced Playing Techniques</li>
                      <li>Chakra Healing Methods</li>
                      <li>Group Sound Bath Sessions</li>
                      <li>Therapeutic Applications</li>
                      <li>Professional Practice Setup</li>
                      <li>Advanced Certification</li>
                    </ul>
                  </div>
                </div>
              </ModuleCard>
            </section>

            <section id="energy-healing" className="mt-12">
              <ModuleCard
                icon=""
                title="Energy Healing"
                description="A deeper session for clarity and inner alignment—combining sound with energy work in a grounded, supportive way."
                badges={[
                  "Aura Cleansing",
                  "Energy Balancing",
                  "Spiritual Guidance",
                  "Personal Transformation",
                ]}
                link={{ href: "#programs", label: "See energy-focused options" }}
                variant="red"
              />
            </section>

            <section id="chakra-healing" className="mt-12">
              <ModuleCard
                icon=""
                title="7 Chakra Healing with Singing Bowl"
                description="A structured session designed to harmonize all seven chakras. Great when you want a full energetic reset and a calm, centered feeling afterward."
                badges={[
                  "Root (Muladhara)",
                  "Sacral (Svadhisthana)",
                  "Solar Plexus (Manipura)",
                  "Heart (Anahata)",
                  "Throat (Vishuddha)",
                  "Third Eye (Ajna)",
                  "Crown (Sahasrara)",
                ]}
                link={{ href: "#programs", label: "Choose a chakra session" }}
                variant="red"
              />
            </section>

            <section id="theory" className="mt-12">
              <TheoryCards cards={theoryCards} variant="red" />
            </section>

            <section id="enroll" className="mt-12">
              <CTASection
                title="Want help choosing the right session?"
                description="Tell us your goal and time (15/30/60 minutes) and we’ll recommend the best fit."
                buttons={ctaButtons}
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
