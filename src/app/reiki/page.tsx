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
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Reiki" },
  ];

  // PHP ids + quick nav: overview, healing-session, meditation, training, stress-management, book-session [file:40]
  const quickNavItems = [
    { id: "overview", icon: "📋", label: "Overview", href: "#overview" },
    { id: "healing-session", icon: "✨", label: "Healing Session", href: "#healing-session" },
    { id: "meditation", icon: "🧘", label: "Reiki Meditation", href: "#meditation" },
    { id: "training", icon: "🎓", label: "Reiki Training", href: "#training" },
    { id: "stress-management", icon: "😌", label: "Stress Management", href: "#stress-management" },
    { id: "book-session", icon: "📅", label: "Book Session", href: "#book-session" },
  ];

  // PHP hero title/subtitle [file:40]
  const heroStats = [
    { number: "1:1", label: "Sessions" },
    { number: "Training", label: "Available" },
    { number: "Energy", label: "Healing" },
    { number: "All Levels", label: "Welcome" },
  ];

  const heroCTAs = [
    { label: "Book Session", href: "#book-session", primary: true },
    { label: "Learn Reiki", href: "#training" },
  ];

  // PHP overview paragraph (single) [file:40]
  const overviewTitle = "What is Reiki?";
  const overviewParagraphs = [
    'Reiki is a Japanese energy healing technique that promotes relaxation, stress reduction, and healing through the gentle laying on of hands. The word "Reiki" comes from the Japanese words "rei" (universal) and "ki" (life energy). Reiki practitioners use their hands to deliver energy to your body, improving the flow and balance of your energy to support healing.',
  ];

  // PHP has 4 module-card blocks for these sections + badges + learn-more links [file:40]
  const modules: ReikiModule[] = [
    {
      id: "healing-session",
      icon: "✨",
      title: "Reiki Healing Session",
      description:
        "Experience the profound healing power of Reiki in a personalized one-on-one session. Our certified Reiki practitioners channel universal life energy to help balance your chakras, release emotional blocks, and support your body’s natural healing process.",
      badges: [
        "Energy Balancing",
        "Pain Relief",
        "Stress Reduction",
        "Emotional Healing",
        "Chakra Alignment",
        "Deep Relaxation",
      ],
      link: { href: "/reiki/healing-session", label: "Learn More About Healing Sessions" },
    },
    {
      id: "meditation",
      icon: "🧘",
      title: "Reiki Meditation",
      description:
        "Combine the powerful healing effects of Reiki with guided meditation for a deeply transformative experience. Reiki meditation helps quiet the mind, deepen inner awareness, and strengthen your connection to subtle energy.",
      badges: ["Guided Meditation", "Energy Connection", "Spiritual Growth", "Inner Peace"],
      link: { href: "/reiki/meditation", label: "Learn More About Reiki Meditation" },
    },
    {
      id: "training",
      icon: "🎓",
      title: "Reiki Training",
      description:
        "Learn the sacred art of Reiki healing through our comprehensive training programs. We offer all three levels of traditional Reiki training with attunements, hands-on practice, and certification so you can practice confidently.",
      badges: [
        "Level 1: Beginner",
        "Level 2: Practitioner",
        "Master Level",
        "Certification",
        "Hands-on Practice",
        "Lifetime Support",
      ],
      link: { href: "/reiki/training", label: "Learn More About Training" },
    },
    {
      id: "stress-management",
      icon: "😌",
      title: "Reiki for Stress Management",
      description:
        "Specialized Reiki sessions designed for stress relief and anxiety management. These calming sessions use targeted techniques to settle the nervous system, support emotional regulation, and guide you into deep restorative rest.",
      badges: [
        "Anxiety Relief",
        "Nervous System Calming",
        "Burnout Recovery",
        "Self-Care Techniques",
        "Emotional Balance",
        "Mental Clarity",
      ],
      link: { href: "/reiki/stress-management", label: "Learn More About Stress Management" },
    },
  ];

  // PHP CTA section [file:40]
  const ctaButtons = [
    { icon: "📅", label: "Book a Reiki Session", href: "#" },
    { icon: "🎓", label: "Join Reiki Training", href: "#" },
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
        badge={{ icon: "✨", text: "Energy Healing" }}
        title="Reiki Healing & Training"
        subtitle="Experience the Power of Energy Healing for Mind, Body & Spirit"
        stats={heroStats}
        ctas={heroCTAs}
        variant="green"
        backgroundImage="https://images.unsplash.com/photo-1545389336-cf090694435e?w=1920"
      />

      {/* Keep red until QuickNavigation supports green without crashing */}
      <QuickNavigation items={quickNavItems} variant="red" />

      <div className="max-w-[1400px] mx-auto px-5 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12">
          {/* Main */}
          <div>
            {/* Overview */}
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
            </section>

            {/* Modules (PHP module-card style) */}
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
                        <h3 className="text-2xl md:text-xl font-extrabold text-gray-900">
                          {m.title}
                        </h3>
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

            {/* CTA */}
            <section id="book-session" className="mt-14">
              <CTASection
                title="Ready to Experience Reiki Healing?"
                description="Book your session or training today and begin your healing journey"
                buttons={ctaButtons}
                variant="green"
                backgroundEmoji="✨"
              />
            </section>
          </div>

          {/* Sidebar */}
          <div>
            <SidebarWidget
              price={priceInfo}
              batches={batches}
              contact={contact}
              showInquiryForm={true}
              variant="red"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
