import React from "react";
import { Breadcrumb } from "@/components/jivan/Breadcrumb";
import { PageHero } from "@/components/jivan/PageHero";
import { QuickNavigation } from "@/components/jivan/QuickNavigation";
import { IntroSection } from "@/components/jivan/yoga/IntroSection";
import { ModuleCard } from "@/components/jivan/ModuleCard";
import { CTASection } from "@/components/jivan/yoga/CTASection";
import { SidebarWidget } from "@/components/jivan/SidebarWidget";
import { generateUpcomingBatches } from "@/utils/batchGenerator";

type TrainingLink = {
  id: string;
  label: string;
  href: string;
  note?: string;
};

export default function TrainingPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Training" },
  ];

  const heroStats = [
    { number: "Reiki", label: "L1–L3" },
    { number: "Singing Bowl", label: "Basic & Advanced" },
    { number: "Small groups", label: "Better learning" },
    { number: "Practical", label: "Hands-on focus" },
  ];

  const heroCTAs = [
    { label: "Explore Trainings", href: "#trainings", primary: true },
    { label: "Upcoming Batches", href: "#sidebar", primary: false },
  ];

  const quickNavItems = [
    { id: "overview", icon: "📋", label: "Overview", href: "#overview" },
    { id: "trainings", icon: "🎓", label: "Trainings", href: "#trainings" },
    { id: "reiki", icon: "✨", label: "Reiki Training", href: "#reiki" },
    { id: "singing-bowl", icon: "🎵", label: "Singing Bowl Training", href: "#singing-bowl" },
    { id: "enroll", icon: "📩", label: "Inquiry", href: "#enroll" },
  ];

  const introParagraphs = [
    "Training is where your practice becomes steady. We keep it practical, supportive, and easy to apply—whether you’re learning for personal growth or to work professionally.",
    "Choose Reiki (Level 1–3) if you want a structured energy healing path, or Singing Bowl Training if you’re drawn to vibration, sound, and therapeutic session work.",
  ];

  // These links match your screenshot structure. Update hrefs to your exact routes if needed. [file:264]
  const reikiLinks: TrainingLink[] = [
    { id: "reiki-l1", label: "Reiki Level 1 (L1)", href: "/training/reiki-level-1", note: "Foundation, self-healing, basics." },
    { id: "reiki-l2", label: "Reiki Level 2 (L2)", href: "/training/reiki-level-2", note: "Deeper practice, practitioner track." },
    { id: "reiki-l3", label: "Reiki Master Level (L3)", href: "/training/reiki-master-level", note: "Master path, leadership & teaching." },
  ];

  const singingBowlLinks: TrainingLink[] = [
    { id: "sb-basic", label: "3 Days Basic Course", href: "/training/singing-bowl-basic", note: "Techniques + safe session structure." },
    { id: "sb-advanced", label: "7 Days Advanced Course", href: "/training/singing-bowl-advanced", note: "Deeper therapy, chakra work, pro setup." },
  ];

  const priceInfo = {
    label: "Starting From",
    amount: "$200",
    duration: "Per Session / Program",
    includes: [
      "Hands-on practice",
      "Guided learning",
      "Small group support",
      "Certificate (where applicable)",
    ],
  };

  // Batches are optional for a training page, but you already use this widget pattern.
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
        badge={{ icon: "🎓", text: "Training Programs" }}
        title="Training"
        subtitle="Learn Reiki and Singing Bowl therapy with a calm, practical approach—built for real practice, not just theory."
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
                title="Choose the path that fits you"
                paragraphs={introParagraphs}
                variant="green"
              />
            </section>

            <section id="trainings" className="mt-12">
              <div className="rounded-2xl bg-white/85 backdrop-blur border border-green-100 shadow-sm p-8">
                <h2 className="text-2xl font-extrabold text-gray-900">Training options</h2>
                <p className="mt-2 text-gray-700">
                  If you’re not sure where to begin, message us—tell us your goal and time, and we’ll recommend the right starting point.
                </p>

                <div className="mt-7 grid grid-cols-2 md:grid-cols-1 gap-6">
                  <div className="rounded-2xl bg-white/80 border border-green-100 shadow-sm p-7">
                    <h3 className="text-xl font-extrabold text-green-900" id="reiki">
                      Reiki Training
                    </h3>
                    <p className="mt-2 text-gray-700">
                      A structured path from foundation to mastery.
                    </p>

                    <div className="mt-5 space-y-3">
                      {reikiLinks.map((x) => (
                        <a
                          key={x.id}
                          href={x.href}
                          className="group flex items-center justify-between gap-4 rounded-xl bg-white/85 border border-green-100 hover:border-green-200 p-4 transition"
                        >
                          <div>
                            <p className="font-extrabold text-gray-900 group-hover:text-green-800 transition-colors">
                              → {x.label}
                            </p>
                            {x.note && <p className="mt-1 text-sm text-gray-600">{x.note}</p>}
                          </div>
                          <span className="text-green-700 font-bold text-lg group-hover:translate-x-0.5 transition-transform">
                            →
                          </span>
                        </a>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-2xl bg-white/80 border border-green-100 shadow-sm p-7">
                    <h3 className="text-xl font-extrabold text-green-900" id="singing-bowl">
                      Singing Bowl Training
                    </h3>
                    <p className="mt-2 text-gray-700">
                      Learn the art of therapeutic sound—safe technique, session flow, and professional practice.
                    </p>

                    <div className="mt-5 space-y-3">
                      {singingBowlLinks.map((x) => (
                        <a
                          key={x.id}
                          href={x.href}
                          className="group flex items-center justify-between gap-4 rounded-xl bg-white/85 border border-green-100 hover:border-green-200 p-4 transition"
                        >
                          <div>
                            <p className="font-extrabold text-gray-900 group-hover:text-green-800 transition-colors">
                              → {x.label}
                            </p>
                            {x.note && <p className="mt-1 text-sm text-gray-600">{x.note}</p>}
                          </div>
                          <span className="text-green-700 font-bold text-lg group-hover:translate-x-0.5 transition-transform">
                            →
                          </span>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="enroll" className="mt-12">
              <CTASection
                title="Want help choosing the right training?"
                description="Tell us your background (beginner / practitioner) and your goal (self-healing / professional practice). We’ll guide you to the best level."
                buttons={[
                  { icon: "📩", label: "Training Inquiry", href: "/contact" },
                  { icon: "📅", label: "Upcoming Batches", href: "#sidebar" },
                ]}
                variant="green"
                backgroundEmoji="🎓"
              />
            </section>
          </div>

          <div id="sidebar">
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
