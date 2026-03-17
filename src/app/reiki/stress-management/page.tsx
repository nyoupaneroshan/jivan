import React from "react";
import { Breadcrumb } from "@/components/jivan/Breadcrumb";
import { PageHero } from "@/components/jivan/PageHero";
import { QuickNavigation } from "@/components/jivan/QuickNavigation";
import { CTASection } from "@/components/jivan/yoga/CTASection";
import { SidebarWidget } from "@/components/jivan/SidebarWidget";
import { generateUpcomingBatches } from "@/utils/batchGenerator";

type SignCard = {
  icon: string;
  title: string;
  description: string;
};

type ProgramCard = {
  icon: string;
  title: string;
  duration: string;
  description: string;
  features: string[];
};

type TechniqueStep = {
  number: number;
  title: string;
  description: string;
};

export default function StressManagementPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Reiki", href: "/reiki" },
    { label: "Stress Management" },
  ];

  // PHP quick nav: overview, signs, programs, techniques, book-now [file:1]
  const quickNavItems = [
    { id: "overview", icon: "📋", label: "Overview", href: "#overview" },
    { id: "signs", icon: "⚠️", label: "Stress Signs", href: "#signs" },
    { id: "programs", icon: "🧾", label: "Programs", href: "#programs" },
    { id: "techniques", icon: "🧠", label: "Techniques", href: "#techniques" },
    { id: "book-now", icon: "📅", label: "Book Now", href: "#book-now" },
  ];

  // PHP hero: Reiki for Stress Management / subtitle / CTAs [file:1]
  const heroStats = [
    { number: "60", label: "Minutes" },
    { number: "Natural", label: "Relief" },
    { number: "Drug-Free", label: "Support" },
    { number: "Same-day", label: "Available" },
  ];

  const heroCTAs = [
    { label: "Book Relief Session", href: "#book-now", primary: true },
    { label: "Learn More", href: "#overview" },
  ];

  // PHP Overview text [file:1]
  const overviewTitle = "Why Reiki for Stress Management?";
  const overviewParagraphs = [
    "In today's fast-paced world, chronic stress and anxiety have become epidemic. Traditional stress management often focuses only on symptoms, but Reiki addresses the root cause by working with your body's energy system. When stress disrupts your energy flow, it manifests as tension, anxiety, pain, and exhaustion. Reiki gently restores balance, releasing stress at its energetic source.",
    "Our specialized Reiki sessions for stress management combine targeted energy healing with relaxation techniques, breathwork, and practical self-care strategies. Whether you're dealing with work stress, anxiety, burnout, or life transitions, Reiki provides natural, drug-free relief that addresses body, mind, and spirit.",
  ];

  // PHP signs grid (6) [file:1]
  const signs: SignCard[] = [
    {
      icon: "💪",
      title: "Physical Symptoms",
      description:
        "Tension headaches, muscle pain, digestive issues, fatigue, sleep problems, and weakened immunity.",
    },
    {
      icon: "💔",
      title: "Emotional Signs",
      description:
        "Anxiety, irritability, mood swings, feeling overwhelmed, depression, and emotional exhaustion.",
    },
    {
      icon: "🧠",
      title: "Mental Effects",
      description:
        "Racing thoughts, difficulty concentrating, memory problems, constant worry, and decision fatigue.",
    },
    {
      icon: "🔄",
      title: "Behavioral Changes",
      description:
        "Withdrawing from others, procrastination, using substances to cope, and neglecting self-care.",
    },
    {
      icon: "💼",
      title: "Work Burnout",
      description:
        "Feeling drained, loss of motivation, decreased productivity, and cynicism about work.",
    },
    {
      icon: "🔋",
      title: "Energy Depletion",
      description:
        "Chronic exhaustion, feeling empty, lack of enthusiasm, and inability to recharge.",
    },
  ];

  // PHP programs (4) [file:1]
  const programs: ProgramCard[] = [
    {
      icon: "🌿",
      title: "Single Stress Relief Session",
      duration: "60 Minutes",
      description:
        "Immediate relief for acute stress or anxiety. This focused session targets your nervous system with Reiki energy, helping you shift from fight-or-flight to rest-and-digest mode. Perfect for stressful periods, before important events, or when you need immediate calming. Walk out feeling lighter, calmer, and more centered.",
      features: ["Immediate Relief", "Nervous System Reset", "Deep Relaxation", "Same-Day Available"],
    },
    {
      icon: "🧘",
      title: "Stress Management Package",
      duration: "5 Sessions",
      description:
        "Comprehensive program for chronic stress or burnout recovery. Five progressive sessions over 4-6 weeks create lasting change in how your body handles stress. Includes energy healing, stress management tools, breathwork practices, and personalized self-care plan. Ideal for sustained transformation and building resilience.",
      features: ["5 Healing Sessions", "Stress Tools", "Lasting Results", "Discounted Rate"],
    },
    {
      icon: "🌙",
      title: "Anxiety-Specific Healing",
      duration: "75 Minutes",
      description:
        "Specialized treatment for anxiety disorders, panic attacks, and generalized anxiety. Combines Reiki with anxiety-relief techniques, grounding practices, and emotional release work. Focuses on calming the nervous system, clearing fear-based energy, and restoring inner peace. Includes breathing exercises you can use anytime anxiety strikes.",
      features: ["Anxiety Relief", "Panic Attack Prevention", "Grounding Techniques", "Take-Home Tools"],
    },
    {
      icon: "🔥",
      title: "Burnout Recovery Program",
      duration: "8 Weeks",
      description:
        "Intensive program for severe burnout and exhaustion. Eight weekly sessions address physical depletion, emotional exhaustion, and mental fatigue at the energetic level. Includes Reiki healing, life balance coaching, boundary setting guidance, and energy restoration practices. Designed to help you rebuild your vitality and find sustainable work-life balance.",
      features: ["8 Weekly Sessions", "Life Balance Coaching", "Energy Restoration", "Complete Recovery"],
    },
  ];

  // PHP techniques list (6) [file:1]
  const techniques: TechniqueStep[] = [
    {
      number: 1,
      title: "Stress Assessment",
      description:
        "Brief discussion about your stress triggers, symptoms, and goals for relief.",
    },
    {
      number: 2,
      title: "Nervous System Calming",
      description:
        "Gentle breathwork and grounding to shift from stress response to relaxation.",
    },
    {
      number: 3,
      title: "Energy Healing",
      description:
        "Targeted Reiki to release tension, clear stress energy, and restore balance.",
    },
    {
      number: 4,
      title: "Tension Release",
      description:
        "Focus on areas holding stress: shoulders, neck, jaw, and solar plexus.",
    },
    {
      number: 5,
      title: "Emotional Clearing",
      description:
        "Safe release of suppressed emotions contributing to stress and anxiety.",
    },
    {
      number: 6,
      title: "Self-Care Training",
      description:
        "Learn simple Reiki self-treatment and stress management techniques.",
    },
  ];

  // PHP CTA section text + buttons [file:1]
  const ctaButtons = [
    { icon: "📅", label: "Book Single Session", href: "#" },
    { icon: "🧾", label: "Choose Package", href: "#" },
  ];

  // Sidebar: PHP shows pricing items + contact info [file:1]
  const priceInfo = {
    label: "Session Pricing",
    amount: "2,500",
    duration: "60 Minutes",
    includes: ["Anxiety Session 2,800", "5-Session Package 11,000", "Burnout Program 18,000"],
  };

  // Reuse your existing batches widget (dynamic), even though PHP hardcodes programs [file:1]
  const batches = generateUpcomingBatches({
    intervalMonths: 1,
    totalBatches: 3,
    batchDay: 10,
  });

  // PHP contact/urgent help uses phone + email + address [file:1]
  const contact = {
    phone: ["+977 9818514837"],
    email: "info@jivanparivartan.com",
    address: "Tarkeshwor-5, Kathmandu",
  };

  return (
    <div className="min-h-screen bg-[#faf6f1] bg-[url('/img/design/color-page.jpg')] bg-repeat bg-center">
      <Breadcrumb items={breadcrumbItems} />

      <PageHero
        badge={{ icon: "🌿", text: "Natural Stress Relief & Anxiety Management" }}
        title="Reiki for Stress Management"
        subtitle="Find Relief from Chronic Stress, Anxiety & Burnout"
        stats={heroStats}
        ctas={heroCTAs}
        variant="green"
        // PHP uses local hero image in CSS; keep equivalent via backgroundImage [file:1]
        backgroundImage="/img/stress-management-hero.jpg"
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

            {/* Stress Signs */}
            <section id="signs" className="mt-14">
              <div className="text-center mb-10">
                <h2 className="text-4xl md:text-3xl font-extrabold text-gray-900">
                  Common Signs You Need Stress Relief
                </h2>
                <p className="mt-3 text-gray-600 text-lg md:text-base">
                  Recognize when your body and mind are calling for help
                </p>
              </div>

              <div className="grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-7">
                {signs.map((s) => (
                  <div
                    key={s.title}
                    className="bg-white rounded-2xl p-10 md:p-8 sm:p-6 text-center shadow-md hover:shadow-xl transition-all border-t-[3px] border-green-600"
                  >
                    <div className="text-5xl mb-5">{s.icon}</div>
                    <h3 className="text-xl font-extrabold text-gray-900 mb-3">
                      {s.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-[15px]">
                      {s.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Programs */}
            <section id="programs" className="mt-14">
              <div className="text-center mb-10">
                <h2 className="text-4xl md:text-3xl font-extrabold text-gray-900">
                  Stress Relief Programs
                </h2>
                <p className="mt-3 text-gray-600 text-lg md:text-base">
                  Choose the program that fits your stress level and schedule
                </p>
              </div>

              <div className="space-y-7">
                {programs.map((p) => (
                  <div
                    key={p.title}
                    className="bg-white rounded-2xl p-10 md:p-8 sm:p-6 shadow-lg border-l-[6px] border-green-600 relative overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 w-28 h-28 bg-gradient-to-br from-green-50 to-transparent rounded-bl-full opacity-70" />

                    <div className="flex items-start justify-between gap-6 flex-wrap relative z-[1]">
                      <div className="flex items-center gap-5">
                        <div className="w-16 h-16 md:w-14 md:h-14 rounded-2xl bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center text-3xl text-white shadow-md">
                          {p.icon}
                        </div>

                        <h3 className="text-2xl md:text-xl font-extrabold text-gray-900">
                          {p.title}
                        </h3>
                      </div>

                      <span className="inline-flex items-center px-5 py-2 rounded-full text-sm font-bold text-green-800 bg-gradient-to-br from-green-50 to-white border border-green-200">
                        {p.duration}
                      </span>
                    </div>

                    <p className="mt-6 text-gray-700 leading-relaxed text-[16px] md:text-[15px] relative z-[1]">
                      {p.description}
                    </p>

                    <div className="mt-6 grid grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-3 relative z-[1]">
                      {p.features.map((f) => (
                        <div
                          key={f}
                          className="text-center px-4 py-3 rounded-lg text-sm font-semibold text-green-800 bg-gradient-to-br from-green-50 to-white border border-green-100"
                        >
                          {f}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Techniques */}
            <section
              id="techniques"
              className="mt-14 bg-gradient-to-br from-green-50 to-white rounded-2xl p-10 md:p-8 sm:p-6 shadow-lg"
            >
              <div className="text-center mb-10">
                <h2 className="text-4xl md:text-3xl font-extrabold text-gray-900">
                  What Happens During a Session
                </h2>
                <p className="mt-3 text-gray-600 text-lg md:text-base">
                  Your complete stress relief session experience
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-1 gap-6">
                {techniques.map((t) => (
                  <div
                    key={t.number}
                    className="bg-white rounded-2xl p-6 shadow-sm flex gap-4 items-start"
                  >
                    <div className="w-11 h-11 rounded-full bg-gradient-to-br from-green-500 to-green-700 text-white font-extrabold flex items-center justify-center shrink-0">
                      {t.number}
                    </div>
                    <div>
                      <h4 className="text-lg font-extrabold text-gray-900 mb-1">
                        {t.title}
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {t.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* CTA / Book Now */}
            <section id="book-now" className="mt-14">
              <CTASection
                title="Ready to Find Relief from Stress?"
                description="Book your stress management session and start feeling better today"
                buttons={ctaButtons}
                variant="green"
                backgroundEmoji="🌿"
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

            {/* If you want the PHP “Need Urgent Help?” as a separate widget exactly, tell me your SidebarWidget API
                or share that component and it can be added as a second SidebarWidget-like block. [file:1] */}
          </div>
        </div>
      </div>
    </div>
  );
}
