import React from "react";
import { Breadcrumb } from "@/components/jivan/Breadcrumb";
import { PageHero } from "@/components/jivan/PageHero";
import { QuickNavigation } from "@/components/jivan/QuickNavigation";
import { CTASection } from "@/components/jivan/yoga/CTASection";
import { SidebarWidget } from "@/components/jivan/SidebarWidget";
import { generateUpcomingBatches } from "@/utils/batchGenerator";

type ReikiModule = {
  id: string;
  icon: string;
  title: string;
  description: string;
  badges: string[];
  link: { href: string; label: string };
};

export default function ReikiPage() {
  const breadcrumbItems = [{ label: "Home", href: "/" }, { label: "Reiki" }];

  const quickNavItems = [
    { id: "overview", icon: "📋", label: "Overview", href: "#overview" },
    { id: "healing-session", icon: "✨", label: "Healing Session", href: "#healing-session" },
    { id: "meditation", icon: "🧘", label: "Reiki Meditation", href: "#meditation" },
    { id: "training", icon: "🎓", label: "Reiki Training", href: "#training" },
    { id: "stress-management", icon: "😌", label: "Stress Management", href: "#stress-management" },
    { id: "book-session", icon: "📅", label: "Book Session", href: "#book-session" },
  ];

  const heroStats = [
    { number: "1:1", label: "Sessions" },
    { number: "Training", label: "Available" },
    { number: "Energy", label: "Balancing" },
    { number: "All Levels", label: "Welcome" },
  ];

  const heroCTAs = [
    { label: "Book Session", href: "#book-session", primary: true },
    { label: "Learn Reiki", href: "#training" },
  ];

  const overviewTitle = "What is Reiki?";
  const overviewParagraphs = [
    'Reiki is a Japanese energy healing practice that supports relaxation, stress reduction, and emotional balance through gentle, non-invasive touch (or hands placed just above the body).',
    'The word “Reiki” is often explained as “universal life energy.” In a session, the practitioner helps you settle into a calmer state so your natural healing response can work better—physically, mentally, and emotionally.',
    "Most people describe Reiki as peaceful and grounding. You don’t have to “believe” anything for it to be helpful—just come as you are.",
  ];

  const modules: ReikiModule[] = [
    {
      id: "healing-session",
      icon: "✨",
      title: "Reiki Healing Session",
      description:
        "A calm 1:1 session to help you reset and feel lighter. We work gently with energy flow and chakra balance—supporting relaxation, emotional release, and a clearer inner state.",
      badges: [
        "Energy Balancing",
        "Deep Relaxation",
        "Stress Reduction",
        "Emotional Healing",
        "Chakra Alignment",
        "Grounding",
      ],
      link: { href: "/reiki/healing-session", label: "Learn More About Healing Sessions" },
    },
    {
      id: "meditation",
      icon: "🧘",
      title: "Reiki Meditation",
      description:
        "A guided meditative experience with Reiki support. Ideal if your mind runs fast—this helps you settle into stillness with less effort and more softness.",
      badges: ["Guided Meditation", "Inner Peace", "Energy Connection", "Spiritual Growth"],
      link: { href: "/reiki/meditation", label: "Learn More About Reiki Meditation" },
    },
    {
      id: "training",
      icon: "🎓",
      title: "Reiki Training",
      description:
        "Learn Reiki in a grounded, practical way. We offer traditional levels with attunements, hands-on practice, and guidance—so you can practice confidently for yourself and others.",
      badges: [
        "Level 1: Beginner",
        "Level 2: Practitioner",
        "Master Level",
        "Certification",
        "Hands-on Practice",
        "Support",
      ],
      link: { href: "/reiki/training", label: "Learn More About Training" },
    },
    {
      id: "stress-management",
      icon: "😌",
      title: "Reiki for Stress Management",
      description:
        "When stress sits in the body, thinking alone doesn’t always fix it. These sessions are designed to calm the nervous system and help you return to a steady baseline—especially during burnout, anxiety, or emotional overload.",
      badges: [
        "Anxiety Support",
        "Nervous System Calming",
        "Burnout Recovery",
        "Emotional Balance",
        "Self-Care Support",
        "Mental Clarity",
      ],
      link: { href: "/reiki/stress-management", label: "Learn More About Stress Management" },
    },
  ];

  const ctaButtons = [
    { icon: "📅", label: "Book a Reiki Session", href: "#book-session" },
    { icon: "🎓", label: "Join Reiki Training", href: "#training" },
  ];

  const priceInfo = {
    label: "Starting From",
    amount: "$200",
    duration: "Per Session",
    includes: ["1:1 Reiki Session", "Energy Balancing", "Chakra Alignment", "Relaxation & Integration"],
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
        badge={{ icon: "✨", text: "Reiki • Calm • Energy Balance" }}
        title="Reiki Healing & Training"
        subtitle="A gentle, grounding practice for stress relief, emotional balance, and deeper rest."
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
            <section
              id="overview"
              className="bg-gradient-to-br from-white to-green-50 p-10 md:p-8 sm:p-6 rounded-2xl shadow-lg border-t-4 border-green-600"
            >
              <h2 className="text-3xl md:text-2xl font-extrabold text-gray-900 mb-6">
                {overviewTitle}
              </h2>

              <div className="space-y-5 text-gray-700 leading-relaxed text-[17px] md:text-[15px]">
                {overviewParagraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>

              <div className="mt-8 grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
                {["Fully clothed", "Gentle touch", "Quiet space"].map((t) => (
                  <div
                    key={t}
                    className="text-center px-4 py-3 rounded-xl font-semibold text-green-800 bg-gradient-to-br from-green-50 to-white border border-green-100"
                  >
                    {t}
                  </div>
                ))}
              </div>
            </section>

            <div className="mt-14 space-y-7">
              {modules.map((m) => (
                <section key={m.id} id={m.id}>
                  <div className="bg-white rounded-2xl p-10 md:p-8 sm:p-6 shadow-lg border-l-[6px] border-green-600 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-28 h-28 bg-gradient-to-br from-green-50 to-transparent rounded-bl-full opacity-70" />

                    <div className="flex items-start justify-between gap-6 flex-wrap relative z-[1]">
                      <div className="flex items-center gap-5">
                        <div className="w-16 h-16 md:w-14 md:h-14 rounded-2xl bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center text-3xl text-white shadow-md">
                          {m.icon}
                        </div>
                        <div>
                          <h3 className="text-2xl md:text-xl font-extrabold text-gray-900">
                            {m.title}
                          </h3>
                          <p className="mt-1 text-sm text-gray-600">
                            A calm, guided option—tailored to your needs.
                          </p>
                        </div>
                      </div>
                    </div>

                    <p className="mt-6 text-gray-700 leading-relaxed text-[16px] md:text-[15px] relative z-[1]">
                      {m.description}
                    </p>

                    <div className="mt-7 grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 relative z-[1]">
                      {m.badges.map((b) => (
                        <div
                          key={b}
                          className="text-center px-4 py-3 rounded-xl font-semibold text-green-800 bg-gradient-to-br from-green-50 to-white border border-green-100"
                        >
                          {b}
                        </div>
                      ))}
                    </div>

                    <div className="mt-7 relative z-[1]">
                      <a
                        href={m.link.href}
                        className="inline-flex items-center gap-2 bg-gradient-to-br from-green-500 to-green-700 text-white px-6 py-3 rounded-full font-semibold shadow-sm hover:shadow-md transition"
                      >
                        {m.link.label}
                        <span aria-hidden>→</span>
                      </a>
                    </div>
                  </div>
                </section>
              ))}
            </div>

            <section id="book-session" className="mt-14">
              <CTASection
                title="Ready for a Reiki session?"
                description="Share what you’re feeling (stress, sleep issues, emotional heaviness, low energy) and we’ll recommend the best option."
                buttons={ctaButtons}
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
