import React from "react";
import { Breadcrumb } from "@/components/jivan/Breadcrumb";
import { PageHero } from "@/components/jivan/PageHero";
import { QuickNavigation } from "@/components/jivan/QuickNavigation";
import { CTASection } from "@/components/jivan/yoga/CTASection";
import { SidebarWidget } from "@/components/jivan/SidebarWidget";
import { generateUpcomingBatches } from "@/utils/batchGenerator";

type ProgramCard = {
  icon: string;
  title: string;
  duration: string;
  description: string;
  features: string[];
};

type ScheduleItem = {
  time: string;
  title: string;
  description: string;
};

type BenefitCard = {
  icon: string;
  title: string;
  description: string;
};

export default function TrekkingRetreatPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Meditation Retreat", href: "/meditation-retreat" },
    { label: "Trekking Retreat" },
  ];

  // PHP quick nav: overview, programs, schedule, benefits, book [file:4]
  const quickNavItems = [
    { id: "overview", icon: "📋", label: "Overview", href: "#overview" },
    { id: "programs", icon: "🧾", label: "Programs", href: "#programs" },
    { id: "schedule", icon: "🗓️", label: "Daily Schedule", href: "#schedule" },
    { id: "benefits", icon: "✨", label: "Benefits", href: "#benefits" },
    { id: "book", icon: "✅", label: "Book Now", href: "#book" },
  ];

  // Hero (PHP) [file:4]
  const heroStats = [
    { number: "3–6", label: "Days" },
    { number: "Pre/Post", label: "Support" },
    { number: "Altitude", label: "Breathwork" },
    { number: "Recovery", label: "Therapies" },
  ];

  const heroCTAs = [
    { label: "Book Retreat", href: "#book", primary: true },
    { label: "View Programs", href: "#programs" },
  ];

  // Overview (PHP) [file:4]
  const overviewTitle = "Complete Trekkers Wellness Experience";
  const overviewParagraphs = [
    "Embarking on a Himalayan trek is an incredible adventure, but the physical demands of high-altitude trekking require proper preparation and recovery. Our specialized Pre & Post Trekking Retreat is designed to optimize your trekking experience from start to finish. Whether you're preparing for Everest Base Camp, Annapurna Circuit, or any Himalayan trek, our comprehensive program ensures your body and mind are ready for the challenge.",
    "After years of cramped flights and before hitting demanding mountain trails, your body needs to acclimatize, stretch, and find its center. Our pre-trek program focuses on flexibility training, altitude preparation breathing exercises, mental readiness, and physical conditioning. Post-trek, when your muscles are fatigued and joints ache, our recovery treatments including deep tissue massage, gentle yoga, and rejuvenation therapies help you heal faster and integrate your mountain experience.",
  ];

  // Programs (PHP: 3 cards) [file:4]
  const programs: ProgramCard[] = [
    {
      icon: "🏔️",
      title: "Pre-Trek Preparation Retreat",
      duration: "3 Days",
      description:
        "Prepare your body and mind for the challenges ahead. After a long flight, you need to stretch, acclimatize, and center yourself before hitting the trails. Our 3-day pre-trek program helps you adjust physically and mentally to Nepal's environment, building the confidence and readiness needed for a successful trek. Includes daily yoga focusing on leg strength and flexibility, pranayama for altitude breathing, guided meditation, Ayurvedic massage, nutritional guidance, and mental preparation sessions.",
      features: [
        "Altitude Acclimatization",
        "Strength Building Yoga",
        "Breathing Techniques",
        "Mental Preparation",
        "Flexibility Training",
        "Ayurvedic Massage",
      ],
    },
    {
      icon: "💆",
      title: "Post-Trek Recovery Retreat",
      duration: "3 Days",
      description:
        "Your muscles are tired, joints ache, and your body deserves proper recovery. Our specialized post-trek program is designed to accelerate healing and help you process the profound experience you've just had. Approximately 70% of trekkers in Kathmandu seek recovery services, highlighting the importance of proper post-trek care. Includes trekkers recovery massage (deep tissue + Swedish techniques), gentle restorative yoga, hot stone therapy, muscle inflammation treatment, and integration meditation to reflect on your journey.",
      features: [
        "Deep Tissue Massage",
        "Muscle Recovery",
        "Hot Stone Therapy",
        "Restorative Yoga",
        "Inflammation Relief",
        "Experience Integration",
      ],
    },
    {
      icon: "🎒",
      title: "Complete Trekkers Package",
      duration: "6 Days Total",
      description:
        "The ultimate trekking wellness experience combining both pre-trek preparation and post-trek recovery. Book both programs together and save 20%. Ideal for serious trekkers who want comprehensive support before, during with take-home practices, and after their Himalayan adventure. Includes everything from both programs plus a personalized trek survival kit with breathing exercises, self-massage techniques, and mindfulness practices to use on the trail.",
      features: [
        "Complete Preparation",
        "Full Recovery",
        "Trek Survival Kit",
        "Ongoing Support",
        "20% Discount",
        "Priority Booking",
      ],
    },
  ];

  // Daily schedule (PHP) [file:4]
  const dailySchedule: ScheduleItem[] = [
    {
      time: "6:45 AM",
      title: "Morning Cleansing Tea",
      description:
        "Optional Jala Neti (yogic nasal cleanse) and herbal tea to start your day refreshed.",
    },
    {
      time: "7:00 AM",
      title: "Pranayama & Meditation",
      description:
        "Breathwork exercises essential for high altitude, followed by guided meditation or mantra practice.",
    },
    {
      time: "8:00 AM",
      title: "Asana Practice",
      description:
        "Pre-trek: Strength and flexibility yoga. Post-trek: Gentle restorative stretches for recovery.",
    },
    {
      time: "9:30 AM",
      title: "Healthy Breakfast",
      description:
        "Nutritious meal designed for trekkers—high energy, easily digestible, with local organic ingredients.",
    },
    {
      time: "11:00 AM",
      title: "Therapeutic Massage or Workshop",
      description:
        "Ayurvedic massage, trekkers recovery therapy, or educational session on altitude wellness.",
    },
    {
      time: "1:00 PM",
      title: "Lunch & Rest Time",
      description:
        "Wholesome lunch followed by personal time for rest, journaling, or exploring the local area.",
    },
    {
      time: "4:00 PM",
      title: "Gentle Yoga or Nature Walk",
      description:
        "Light stretching session or guided walk to help with acclimatization and stress relief.",
    },
    {
      time: "6:00 PM",
      title: "Evening Meditation",
      description:
        "Calming meditation practice to integrate the day’s experiences and prepare for rest.",
    },
    {
      time: "7:00 PM",
      title: "Dinner & Sharing Circle",
      description:
        "Nourishing dinner followed by optional group sharing about trekking experiences and goals.",
    },
  ];

  // Benefits (PHP: 9) [file:4]
  const benefits: BenefitCard[] = [
    {
      icon: "🌬️",
      title: "Better Acclimatization",
      description:
        "Pre-trek breathing exercises and gentle conditioning help your body adjust to altitude gradually.",
    },
    {
      icon: "🦵",
      title: "Reduced Injury Risk",
      description:
        "Proper flexibility training and strengthening reduces the chance of sprains, strains, and overuse injuries.",
    },
    {
      icon: "🧘",
      title: "Mental Readiness",
      description:
        "Meditation and mindfulness practices build the mental resilience needed for challenging treks.",
    },
    {
      icon: "⚡",
      title: "Faster Recovery",
      description:
        "Specialized massage techniques accelerate muscle healing and reduce post-trek soreness by 40-60%.",
    },
    {
      icon: "😌",
      title: "Stress Relief",
      description:
        "Release pre-trek anxiety or decompress after intense trekking through therapeutic practices.",
    },
    {
      icon: "🏃",
      title: "Enhanced Performance",
      description:
        "Arrive at trailhead strong, flexible, and confident—significantly improving your trekking experience.",
    },
    {
      icon: "🩹",
      title: "Pain Management",
      description:
        "Targeted treatments for common trekking pain points: knees, calves, shoulders, and lower back.",
    },
    {
      icon: "🧠",
      title: "Experience Integration",
      description:
        "Post-trek reflection practices help you process and integrate the profound mountain experience.",
    },
    {
      icon: "🛡️",
      title: "Injury Prevention",
      description:
        "Learn self-care techniques you can use on the trail to prevent common trekking injuries.",
    },
  ];

  // CTA (PHP book section) [file:4]
  const ctaButtons = [
    { icon: "✅", label: "Book Retreat", href: "/contact" },
    { icon: "📞", label: "Call Us", href: "tel:+9779818514837" },
  ];

  // Sidebar pricing (PHP) [file:4]
  const priceInfo = {
    label: "Starting From",
    amount: "8,000",
    duration: "3-Day Program",
    includes: ["Pre-Trek 8,000", "Post-Trek 9,000", "Complete Package 13,600", "All meals & accommodation included"],
  };

  // Not in PHP, but kept to match your existing component structure.
  const batches = generateUpcomingBatches({
    intervalMonths: 1,
    totalBatches: 3,
    batchDay: 10,
  });

  // Contact (PHP) [file:4]
  const contact = {
    phone: ["+977 9818514837"],
    email: "info@jivanparivartan.com",
    address: "Tarkeshwor-5, Kathmandu (Daily 6 AM - 8 PM)",
  };

  return (
    <div className="min-h-screen bg-[#faf6f1] bg-[url('/img/design/color-page.jpg')] bg-repeat bg-center">
      <Breadcrumb items={breadcrumbItems} />

      <PageHero
        badge={{ icon: "🏔️", text: "Trekkers Wellness Program" }}
        title="Pre & Post Trekking Retreat"
        subtitle="Prepare Your Body & Mind — Recover with Healing Therapies"
        stats={heroStats}
        ctas={heroCTAs}
        variant="green"
        backgroundImage="/img/trekking-retreat-hero.jpg"
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
              className="bg-gradient-to-br from-white to-green-50 p-10 md:p-8 sm:p-6 rounded-2xl shadow-lg border-t-4 border-green-700"
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

            {/* Programs */}
            <section id="programs" className="mt-14">
              <div className="text-center mb-10">
                <h2 className="text-4xl md:text-3xl font-extrabold text-gray-900">
                  Choose Your Program
                </h2>
                <p className="mt-3 text-gray-600 text-lg md:text-base">
                  Pre-trek preparation or post-trek recovery—we support your entire journey
                </p>
              </div>

              <div className="space-y-7">
                {programs.map((p) => (
                  <div
                    key={p.title}
                    className="bg-white rounded-2xl p-10 md:p-8 sm:p-6 shadow-lg border-l-[6px] border-green-700 relative overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 w-28 h-28 bg-gradient-to-br from-green-50 to-transparent rounded-bl-full opacity-70" />

                    <div className="flex items-start justify-between gap-6 flex-wrap relative z-[1]">
                      <div className="flex items-center gap-5">
                        <div className="w-16 h-16 md:w-14 md:h-14 rounded-2xl bg-gradient-to-br from-green-600 to-green-800 flex items-center justify-center text-3xl text-white shadow-md">
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

                    <div className="mt-6 grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-3 relative z-[1]">
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

            {/* Daily Schedule */}
            <section
              id="schedule"
              className="mt-14 bg-gradient-to-br from-green-50 to-white rounded-2xl p-10 md:p-8 sm:p-6 shadow-lg"
            >
              <div className="text-center mb-10">
                <h2 className="text-4xl md:text-3xl font-extrabold text-gray-900">
                  Sample Daily Schedule
                </h2>
                <p className="mt-3 text-gray-600 text-lg md:text-base">
                  A typical day in our trekking retreat program
                </p>
              </div>

              <div className="space-y-5">
                {dailySchedule.map((s) => (
                  <div
                    key={`${s.time}-${s.title}`}
                    className="bg-white rounded-2xl p-6 shadow-sm flex gap-4 items-start border-l-4 border-green-700"
                  >
                    <div className="min-w-[90px] text-green-800 font-extrabold text-base md:text-sm">
                      {s.time}
                    </div>
                    <div>
                      <h4 className="text-lg font-extrabold text-gray-900 mb-1">
                        {s.title}
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {s.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Benefits */}
            <section id="benefits" className="mt-14">
              <div className="text-center mb-10">
                <h2 className="text-4xl md:text-3xl font-extrabold text-gray-900">
                  Program Benefits
                </h2>
                <p className="mt-3 text-gray-600 text-lg md:text-base">
                  Why trekkers choose our pre & post retreat programs
                </p>
              </div>

              <div className="grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-7">
                {benefits.map((b) => (
                  <div
                    key={b.title}
                    className="bg-white rounded-2xl p-10 md:p-8 sm:p-6 text-center shadow-md hover:shadow-xl transition-all border-t-[3px] border-green-700"
                  >
                    <div className="text-5xl mb-5">{b.icon}</div>
                    <h3 className="text-xl font-extrabold text-gray-900 mb-3">
                      {b.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-[15px]">
                      {b.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* CTA / Book */}
            <section id="book" className="mt-14">
              <CTASection
                title="Ready for Your Trek?"
                description="Book your pre-trek preparation or post-trek recovery retreat today"
                buttons={ctaButtons}
                variant="green"
                backgroundEmoji="🏔️"
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
