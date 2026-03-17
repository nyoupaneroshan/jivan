import React from "react";
import { Breadcrumb } from "@/components/jivan/Breadcrumb";
import { PageHero } from "@/components/jivan/PageHero";
import { QuickNavigation } from "@/components/jivan/QuickNavigation";
import { IntroSection } from "@/components/jivan/yoga/IntroSection";
import { ModuleCard } from "@/components/jivan/ModuleCard";
import { CTASection } from "@/components/jivan/yoga/CTASection";
import { SidebarWidget } from "@/components/jivan/SidebarWidget";
import { generateUpcomingBatches } from "@/utils/batchGenerator";

type Course = {
  id: string;
  icon: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  href: string;
};

export default function SingingBowlTrainingPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Training", href: "/training" },
    { label: "Singing Bowl Training" },
  ];

  const heroStats = [
    { number: "3 Days", label: "Basic course" },
    { number: "7 Days", label: "Advanced course" },
    { number: "Hands-on", label: "Practice" },
    { number: "All Levels", label: "Welcome" },
  ];

  const heroCTAs = [
    { label: "Explore Courses", href: "#courses", primary: true },
    { label: "Training Inquiry", href: "#inquiry" },
  ];

  const quickNavItems = [
    { id: "overview", icon: "📋", label: "Overview", href: "#overview" },
    { id: "courses", icon: "🎓", label: "Courses", href: "#courses" },
    { id: "basic", icon: "🌱", label: "3 Days Basic", href: "#basic" },
    { id: "advanced", icon: "🔥", label: "7 Days Advanced", href: "#advanced" },
    { id: "who", icon: "🫶", label: "Who it's for", href: "#who" },
    { id: "how", icon: "🧩", label: "How we teach", href: "#how" },
    { id: "inquiry", icon: "📩", label: "Inquiry", href: "#inquiry" },
  ];

  const introParagraphs = [
    "Singing bowl training is both an art and a healing skill. We teach it in a grounded way—clear technique, safe use, and real session flow you can repeat confidently.",
    "If you’re learning for personal practice, the basic course is a beautiful start. If you want to work professionally (or go deeper into chakra work and therapy application), the advanced course is the right track.",
  ];

  // Update these hrefs if your real routes are different
  const courses: Course[] = [
    {
      id: "basic",
      icon: "",
      title: "3 Days Basic Course",
      subtitle: "Strong foundation + correct technique",
      description:
        "This course is for learning the essentials properly: how to choose bowls, how to play them with clean sound, and how to create a calm, safe session for yourself and others.",
      highlights: [
        "Introduction to singing bowls",
        "Correct holding & striking",
        "Rimming technique (clean tone)",
        "Basic session structure",
        "Safety & comfort-first practice",
        "Self-practice routine",
      ],
      href: "/training/singing-bowl-basic",
    },
    {
      id: "advanced",
      icon: "",
      title: "7 Days Advanced Course",
      subtitle: "Therapy application + deeper healing work",
      description:
        "Advanced training is for those who want deeper skill: stronger session flow, working with intention, and applying bowls in a more therapeutic way—especially for chakra balancing, stress, and emotional reset work.",
      highlights: [
        "Advanced playing techniques",
        "Chakra-based session flow",
        "Group sound bath guidance",
        "Client handling & ethics",
        "Professional setup & practice",
        "Advanced certification path",
      ],
      href: "/training/singing-bowl-advanced",
    },
  ];

  const priceInfo = {
    label: "Starting From",
    amount: "$200",
    duration: "Training / Program",
    includes: [
      "Hands-on practice",
      "Guided learning",
      "Small group support",
      "Certificate (where applicable)",
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
        badge={{ icon: "🎵", text: "Singing Bowl Training" }}
        title="Singing Bowl Training"
        subtitle="Learn correct technique, safe practice, and real session flow—basic to advanced."
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
                title="Learn it properly—so your sound feels clean and healing"
                paragraphs={introParagraphs}
                variant="green"
              />
            </section>

            <section id="courses" className="mt-12">
              <div className="rounded-2xl bg-white/85 backdrop-blur border border-green-100 shadow-sm p-8">
                <h2 className="text-2xl font-extrabold text-gray-900">Choose your course</h2>
                <p className="mt-2 text-gray-700">
                  Start with Basic if you’re new. Choose Advanced if you already practice and want deeper therapy-level
                  application.
                </p>

                <div className="mt-7 grid grid-cols-1 gap-6">
                  {courses.map((c) => (
                    <div
                      key={c.id}
                      id={c.id}
                      className="rounded-2xl bg-white/80 border border-green-100 shadow-sm p-7"
                    >
                      <div className="flex items-start justify-between gap-6 flex-wrap">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-green-500 to-green-700 text-white flex items-center justify-center text-2xl shadow-sm">
                            {c.icon}
                          </div>
                          <div>
                            <h3 className="text-xl font-extrabold text-gray-900">{c.title}</h3>
                            <p className="mt-1 text-sm text-gray-600">{c.subtitle}</p>
                          </div>
                        </div>

                        <a
                          href={c.href}
                          className="inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-green-500 to-green-700 text-white px-5 py-2.5 font-bold shadow-sm hover:shadow-md transition"
                        >
                          View details <span aria-hidden>→</span>
                        </a>
                      </div>

                      <p className="mt-4 text-gray-700 leading-relaxed">{c.description}</p>

                      <div className="mt-5 grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-3">
                        {c.highlights.map((h) => (
                          <div
                            key={h}
                            className="text-center px-4 py-3 rounded-xl font-semibold text-green-800 bg-gradient-to-br from-green-50 to-white border border-green-100"
                          >
                            {h}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section id="who" className="mt-12">
              <ModuleCard
                icon=""
                title="Who this training is for"
                description="This training is for beginners and practitioners who want clean technique and a calm, professional approach—without rushing or performing."
                badges={[
                  "Beginners",
                  "Yoga/meditation teachers",
                  "Wellness practitioners",
                  "Therapists & healers",
                  "Spiritual seekers",
                  "Anyone drawn to sound",
                ]}
                link={{ href: "#inquiry", label: "Ask about the next batch" }}
                defaultExpanded={true}
                variant="green"
              />
            </section>

            <section id="how" className="mt-12">
              <ModuleCard
                icon="🧩"
                title="How we teach"
                description="We teach by doing. You’ll practice technique, learn session flow, and get guidance so your sound feels stable, clean, and calming—not harsh or random."
                badges={[
                  "Hands-on technique",
                  "Safe use & guidance",
                  "Session structure",
                  "Q&A support",
                  "Practice feedback",
                ]}
                link={{ href: "#inquiry", label: "Training inquiry" }}
                variant="green"
              />
            </section>

            <section id="inquiry" className="mt-12">
              <CTASection
                title="Singing Bowl Training Inquiry"
                description="Tell us whether you want Basic (3 days) or Advanced (7 days), your dates, and your goal (self-practice or professional work). We’ll share the next batch details."
                buttons={[
                  { icon: "📩", label: "Contact for Training", href: "/contact" },
                  { icon: "🎵", label: "Explore Singing Bowl Healing", href: "/healing/singing-bowl" },
                ]}
                variant="green"
                backgroundEmoji="🎓"
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
