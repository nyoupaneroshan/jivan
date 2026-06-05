"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import { Breadcrumb } from "@/components/jivan/Breadcrumb";
import { PageHero } from "@/components/jivan/PageHero";
import { QuickNavigation } from "@/components/jivan/QuickNavigation";
import { SidebarWidget } from "@/components/jivan/SidebarWidget";

type ProgramKey = "1-day" | "3-day" | "5-day" | "7-day";

type RetreatDay = {
  day: number;
  title: string;
  activities: string;
  meals: string;
};

type PricingOption = {
  type: string;
  price: string;
  includes: string;
};

type PricingGroup = {
  duration: string;
  options: PricingOption[];
};

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Meditation & Retreats", href: "/meditation" },
  { label: "Spiritual Retreats" },
];

const quickNavItems = [
  { id: "overview", icon: "🌿", label: "Overview", href: "#overview" },
  { id: "programs", icon: "🗓️", label: "Programs", href: "#programs" },
  { id: "itinerary", icon: "🧘", label: "Itinerary", href: "#itinerary" },
  { id: "pricing", icon: "💲", label: "Pricing", href: "#pricing" },
  { id: "included", icon: "✓", label: "Inclusions", href: "#included" },
];

const heroStats = [
  { number: "1–7", label: "Days" },
  { number: "4-Star", label: "Hotels" },
  { number: "All", label: "Levels" },
  { number: "Year Round", label: "Available" },
];

const heroCTAs = [
  { label: "View Programs", href: "#programs", primary: true },
  { label: "Book Now", href: "#contact" },
];

const sidebarPricing: Record<ProgramKey, { amount: string; label: string }> = {
  "1-day": { amount: "$250", label: "Starting From" },
  "3-day": { amount: "$1,050", label: "Starting From" },
  "5-day": { amount: "$1,450", label: "Starting From" },
  "7-day": { amount: "$2,100", label: "Starting From" },
};

const retreatItineraries: Record<ProgramKey, RetreatDay[]> = {
  "1-day": [
    {
      day: 1,
      title: "Complete Wellness Day",
      activities:
        "The day begins with a gentle yoga session designed to awaken the body and release accumulated tension. After a nourishing vegetarian breakfast, participants enjoy rest and integration time before moving into a stress management therapy session for practical calm and mental clarity. Following lunch, yoga nidra and stop meditation support deep rest and inner stillness. The day closes with a sound bath healing session using vibrational practices to balance the body’s energy and promote overall well-being.",
      meals: "Breakfast, Lunch, Tea and Snacks",
    },
  ],
  "3-day": [
    {
      day: 1,
      title: "Foundation and Relaxation",
      activities:
        "The first day focuses on stepping away from routine and entering a more relaxed state. Gentle yoga, breathwork, a nourishing breakfast, stress management therapy, yoga nidra, and stop meditation create a strong foundation of rest and openness. The evening sound bath helps release stress and begins the inward journey.",
      meals: "Breakfast, Lunch, Tea and Snacks",
    },
    {
      day: 2,
      title: "Energy Awakening and Inner Balance",
      activities:
        "Morning yoga becomes more energizing, supported by pranayama practices to balance the nervous system. Kirtan meditation, deeper emotional awareness work, singing bowl therapy, deep heart meditation, and kundalini-based practices help restore vitality, emotional stability, and a sense of inner connection.",
      meals: "Breakfast, Lunch, Tea and Snacks",
    },
    {
      day: 3,
      title: "Nature Connection and Integration",
      activities:
        "The final day emphasizes nature immersion and integration. A guided hike, mindfulness in natural surroundings, chanting meditation, tychiin meditation, and nature love meditation help participants ground the retreat experience. The closing integration session supports reflection, clarity, and carrying the benefits home.",
      meals: "Breakfast, Lunch, Tea and Snacks",
    },
  ],
  "5-day": [
    {
      day: 1,
      title: "Physical Relaxation and Mental Release",
      activities:
        "The opening day helps participants slow down, release physical tension, and begin settling into a protected retreat space. Gentle yoga, stress management work, and sound bath healing establish the receptive state needed for deeper inner work.",
      meals: "Breakfast, Lunch, Tea and Snacks",
    },
    {
      day: 2,
      title: "Emotional Balance and Energy Awareness",
      activities:
        "Day two works with the emotional body and subtle energy systems. Pranayama, kirtan meditation, emotional balance practices, singing bowl therapy, deep heart meditation, and kundalini meditation help participants feel lighter, steadier, and more alive.",
      meals: "Breakfast, Lunch, Tea and Snacks",
    },
    {
      day: 3,
      title: "Nature Connection and Grounding",
      activities:
        "The midpoint of the retreat reconnects participants with nature through hiking, forest-based awareness, chanting, and grounding meditations. This day stabilizes the spiritual opening of earlier sessions and supports embodiment, reverence, and inner silence.",
      meals: "Breakfast, Lunch, Tea and Snacks",
    },
    {
      day: 4,
      title: "Deep Cleansing and Energetic Alignment",
      activities:
        "The fourth day deepens the process through light yoga, deep triangular breathing, silence, Tibetan meditation music, deep heart meditation, humming meditation, kirtan self-singing, sharing, and kundalini practice. This creates a powerful sense of clearing, release, and subtle energetic balance.",
      meals: "Breakfast, Lunch, Tea and Snacks",
    },
    {
      day: 5,
      title: "Integration and Mountain Connection",
      activities:
        "The retreat concludes with mountain connection and reflection. A scenic visit to Kakani or Dhulikhel and Namobuddha supports gratitude, sacred contemplation, and integration. Participants leave with more clarity, peace, and inner strength.",
      meals: "Breakfast, Lunch, Tea and Snacks",
    },
  ],
  "7-day": [
    {
      day: 1,
      title: "Foundation and Relaxation",
      activities:
        "The first day establishes a calm foundation through gentle yoga, stress management principles, and sound bath healing. Participants transition away from everyday stress and begin entering a slower, more reflective state.",
      meals: "Breakfast, Lunch, Tea and Snacks",
    },
    {
      day: 2,
      title: "Energy Awakening and Emotional Balance",
      activities:
        "The second day builds on relaxation by introducing pranayama, kirtan meditation, singing bowl therapy, deep heart meditation, and kundalini meditation. Emotional awareness deepens and participants often begin experiencing powerful release and clarity.",
      meals: "Breakfast, Lunch, Tea and Snacks",
    },
    {
      day: 3,
      title: "Nature Immersion and Grounding",
      activities:
        "This day emphasizes connection with nature through forest and jungle meditation, chanting, tychiin meditation, and nature love meditation. It brings grounding and balance to the retreat process.",
      meals: "Breakfast, Lunch, Tea and Snacks",
    },
    {
      day: 4,
      title: "Deep Cleansing and Alignment",
      activities:
        "The fourth day marks a deeper stage of transformation through triangular breathing, silence, deep heart meditation, humming meditation, kirtan self-singing, sharing, and kundalini work. This often becomes a breakthrough point in the journey.",
      meals: "Breakfast, Lunch, Tea and Snacks",
    },
    {
      day: 5,
      title: "Sacred Fire and Deep Transformation",
      activities:
        "Day five introduces Hawan Kriya fire ceremony, followed by integration time, yoga nidra, Nataraja dancing meditation, swimming pool meditation, laughing meditation, and kirtan celebration. This day supports symbolic release and emotional renewal.",
      meals: "Breakfast, Lunch, Tea and Snacks",
    },
    {
      day: 6,
      title: "Detoxification and Integration",
      activities:
        "The sixth day focuses on cleansing and synthesis through detoxification yoga, philosophical teachings, bhajan singing, Shakti Chalika meditation, free movement, and combined sound bath and kundalini practice. It helps participants integrate body, mind, and spiritual insight.",
      meals: "Breakfast, Lunch, Tea and Snacks",
    },
    {
      day: 7,
      title: "Sunrise Completion and Mountain Blessing",
      activities:
        "The final day begins with sunrise yoga and meditation, followed by celebration, a mountain journey, contemplation, nature time, closing ceremony, and integration circle. It marks a ceremonial completion and prepares participants to carry their experience into daily life.",
      meals: "Breakfast, Lunch, Tea and Snacks",
    },
  ],
};

const pricingOptions: PricingGroup[] = [
  {
    duration: "1 Day Retreat",
    options: [
      {
        type: "Single Deluxe Room with Overnight Stay",
        price: "USD 380",
        includes:
          "4-star resort accommodation (2 Nights 1 Day), meals, guided sessions, wellness activities",
      },
      {
        type: "Double Sharing Room with Overnight Stay",
        price: "USD 350",
        includes:
          "4-star resort accommodation (2 Nights 1 Day), all meals, guided sessions, wellness activities",
      },
      {
        type: "Day Program Only (Non-Residential)",
        price: "USD 250",
        includes:
          "4-star resort breakfast, meal, evening snacks, guided sessions, wellness activities",
      },
    ],
  },
  {
    duration: "3 Day Retreat",
    options: [
      {
        type: "Sharing Deluxe Room (2 persons)",
        price: "USD 1,050",
        includes:
          "4-star resort accommodation (4 Nights 3 Day), all meals, guided sessions, wellness activities",
      },
      {
        type: "Single Deluxe Room",
        price: "USD 1,200",
        includes:
          "4-star resort accommodation (4 Nights 3 Day), all meals, guided sessions, wellness activities",
      },
    ],
  },
  {
    duration: "5 Day Retreat",
    options: [
      {
        type: "Sharing Deluxe Room (2 persons)",
        price: "USD 1,450",
        includes:
          "4-star resort accommodation (6 Nights 5 Day), all meals, guided sessions, wellness activities",
      },
      {
        type: "Single Deluxe Room",
        price: "USD 1,600",
        includes:
          "4-star resort accommodation (6 Nights 5 Day), all meals, guided sessions, wellness activities",
      },
    ],
  },
  {
    duration: "7 Day Retreat",
    options: [
      {
        type: "Sharing Deluxe Room (2 persons)",
        price: "USD 2,100",
        includes:
          "4-star resort accommodation (8 Nights 7 Day), all meals, guided sessions, wellness activities",
      },
      {
        type: "Single Deluxe Room",
        price: "USD 2,400",
        includes:
          "4-star resort accommodation (8 Nights 7 Day), all meals, guided sessions, wellness activities",
      },
    ],
  },
];

const programDescriptions: Record<
  ProgramKey,
  { title: string; intro: string; details: string[]; shortTag: string }
> = {
  "1-day": {
    title: "One Day Wellness and Spiritual Retreat",
    shortTag: "Quick Reset",
    intro:
      "Our one-day retreat is designed to deliver deep relaxation, gentle healing, and inner renewal in a short but meaningful format. It is ideal for those seeking a restorative pause from mental pressure, fatigue, or emotional overload.",
    details: [
      "Participants move through a carefully balanced day of yoga, meditation, healing practices, rest, and nourishing meals. The structure supports calm, clarity, and stress release without rushing the experience.",
      "This format works especially well for individuals, small groups, or organizations looking for a focused wellness intervention with immediate emotional and physical benefits.",
    ],
  },
  "3-day": {
    title: "Three Day Wellness and Spiritual Retreat",
    shortTag: "Deep Balance",
    intro:
      "The three-day retreat offers enough time to slow down, release stress, and reconnect with inner balance. It combines body-based practice, meditative stillness, sound healing, and guided rest in a peaceful environment.",
    details: [
      "Over three days, participants naturally move from surface-level relaxation into deeper emotional balance and energetic renewal. The progression is supportive, accessible, and deeply grounding.",
      "Nature immersion, silence, and integration practices ensure that participants do not just feel temporarily better, but leave with a steadier and more centered inner state.",
    ],
  },
  "5-day": {
    title: "Five Day Wellness and Spiritual Retreat",
    shortTag: "Transformation",
    intro:
      "The five-day retreat is designed for participants ready for a more complete healing journey. With more time, the body settles, the mind softens, and deeper emotional and spiritual work becomes possible.",
    details: [
      "Each day builds on the previous one, moving from relaxation into energy awareness, nature connection, cleansing, and spiritual integration. This creates a fuller arc of transformation.",
      "The five-day format is ideal for people seeking meaningful inner reset without committing to a full week, while still experiencing strong emotional, mental, and energetic benefits.",
    ],
  },
  "7-day": {
    title: "Seven Day Complete Transformation Retreat",
    shortTag: "Complete Journey",
    intro:
      "The seven-day retreat is our most immersive spiritual and wellness journey. It allows time for advanced practices, sacred ceremonies, profound integration, and a more lasting inner shift.",
    details: [
      "Participants move beyond simple relaxation into deeper release, healing, purification, and self-understanding. The added days create space for profound integration and inner transformation.",
      "This program is especially suited to those seeking a serious retreat experience with strong personal, emotional, and spiritual depth.",
    ],
  },
};

const includedItems = [
  "Comprehensive yoga classes guided by experienced teachers",
  "Sattvic yogic Nepali meals with minimal spices that support yoga and meditation",
  "Breakfast and evening tea with light snacks",
  "All applicable taxes for the course",
  "Yoga books and study materials as outlined in the syllabus",
  "Shared yoga mat for daily practice during the course",
  "Access to nature walks, meditation sessions, and wellness activities",
  "Energy healing practices and sound therapy sessions",
  "Four-star hotel accommodation for residential programs",
  "Pickup from Tribhuvan International Airport and Kathmandu Valley",
];

const excludedItems = [
  "Meals beyond the provided menu or special dietary preferences",
  "Personal yoga mats if you wish to take one home after the course",
  "Pick-up and drop-off services other than Tribhuvan International Airport or Kathmandu Valley",
  "Sightseeing or travel excursions outside the course schedule",
  "Visa fees, travel insurance, and airport taxes",
  "International flight expenses",
  "Personal expenses and incidentals",
];

function SectionCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`bg-white rounded-2xl border border-[#E7E0D7] shadow-sm ${className}`}
      style={{ boxShadow: "0 6px 24px rgba(20, 20, 20, 0.05)" }}
    >
      {children}
    </div>
  );
}

function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-8">
      {eyebrow ? (
        <p className="text-[11px] uppercase tracking-[0.18em] font-bold text-emerald-700 mb-3">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight">{title}</h2>
      {subtitle ? (
        <p className="mt-3 text-gray-600 max-w-3xl leading-relaxed">{subtitle}</p>
      ) : null}
    </div>
  );
}

export default function RetreatPage() {
  const [selectedProgram, setSelectedProgram] = useState<ProgramKey>("1-day");

  const selectedItinerary = useMemo(
    () => retreatItineraries[selectedProgram],
    [selectedProgram]
  );

  const selectedDescription = useMemo(
    () => programDescriptions[selectedProgram],
    [selectedProgram]
  );

  const currentPricing = useMemo(
    () => sidebarPricing[selectedProgram],
    [selectedProgram]
  );

  return (
    <div className="min-h-screen bg-[#f7f2ea] bg-[url('/img/design/color-page.jpg')] bg-repeat bg-center">
      <Breadcrumb items={breadcrumbItems} />

      <PageHero
        badge={{ icon: "🌿", text: "Personal Wellness Journey" }}
        title="Wellness and Spiritual Retreats"
        subtitle="Flexible retreat programs from one to seven days designed for deep relaxation, healing, and inner renewal in peaceful natural surroundings."
        stats={heroStats}
        ctas={heroCTAs}
        variant="green"
        backgroundImage="https://images.unsplash.com/photo-1545389336-cf090694435e?w=1920"
      />

      <QuickNavigation items={quickNavItems} variant="green" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-5 lg:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_360px] gap-8 lg:gap-12">
          <main className="space-y-10">
            <section id="overview">
              <SectionCard className="p-7 sm:p-10">
                <SectionHeading
                  eyebrow="Retreat Overview"
                  title="A calm, structured path for body, mind, and spirit"
                  subtitle="Designed for individuals seeking deep restoration, emotional balance, spiritual clarity, and meaningful time away from daily pressure."
                />

                <div className="grid md:grid-cols-3 gap-4 mb-8">
                  {[
                    {
                      title: "Flexible Duration",
                      desc: "Choose from one day to seven days depending on your time and intention.",
                    },
                    {
                      title: "Holistic Healing",
                      desc: "Yoga, meditation, breathwork, sound therapy, nature immersion, and rest.",
                    },
                    {
                      title: "Comfortable Stay",
                      desc: "Residential packages include peaceful four-star accommodation and vegetarian meals.",
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="rounded-2xl bg-[#faf8f4] border border-[#ECE5DA] p-5"
                    >
                      <h3 className="text-base font-bold text-gray-900">{item.title}</h3>
                      <p className="mt-2 text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>

                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Our Wellness and Spiritual Retreat offers a nurturing journey for the body,
                    mind, and spirit. We have thoughtfully designed flexible retreat durations to
                    suit different schedules and needs, from a one-day escape to a full seven-day
                    transformational experience.
                  </p>
                  <p>
                    Each program blends yoga, pranayama, meditation, healing practices, and nature
                    connection in a safe and supportive environment. The rhythm is intentionally
                    spacious, allowing participants to rest, integrate, and reconnect with a calmer
                    inner state.
                  </p>
                  <p>
                    Whether you seek immediate stress relief, emotional healing, spiritual
                    development, or deeper transformation, our facilitators guide you through a
                    carefully structured process of self-discovery and renewal.
                  </p>
                </div>
              </SectionCard>
            </section>

            <section id="programs">
              <SectionCard className="p-7 sm:p-10">
                <SectionHeading
                  eyebrow="Choose Your Program"
                  title="Select the retreat duration that fits your intention"
                  subtitle="Each format has its own depth, rhythm, and transformation arc."
                />

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                  {(Object.keys(programDescriptions) as ProgramKey[]).map((duration) => {
                    const active = selectedProgram === duration;
                    const label =
                      duration === "1-day"
                        ? "1 Day"
                        : duration === "3-day"
                        ? "3 Days"
                        : duration === "5-day"
                        ? "5 Days"
                        : "7 Days";

                    return (
                      <button
                        key={duration}
                        onClick={() => setSelectedProgram(duration)}
                        className={[
                          "rounded-2xl border px-5 py-5 text-left transition-all",
                          active
                            ? "border-emerald-700 bg-emerald-50 shadow-md"
                            : "border-[#E5DED4] bg-white hover:border-emerald-300 hover:bg-[#fcfbf8]",
                        ].join(" ")}
                        aria-pressed={active}
                      >
                        <div
                          className={`text-xl font-bold ${
                            active ? "text-emerald-800" : "text-gray-900"
                          }`}
                        >
                          {label}
                        </div>
                        <div className="mt-1 text-sm text-gray-600">
                          {programDescriptions[duration].shortTag}
                        </div>
                      </button>
                    );
                  })}
                </div>

                <div className="rounded-2xl bg-[#fcfbf8] border border-[#ECE5DA] p-6 sm:p-7">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                    {selectedDescription.title}
                  </h3>
                  <p className="mt-4 text-gray-700 leading-relaxed">
                    {selectedDescription.intro}
                  </p>
                  <div className="mt-4 space-y-4">
                    {selectedDescription.details.map((paragraph, index) => (
                      <p key={index} className="text-gray-700 leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </SectionCard>
            </section>

            <section id="itinerary">
              <SectionCard className="p-7 sm:p-10">
                <SectionHeading
                  eyebrow="Detailed Flow"
                  title={`${selectedProgram.replace("-day", "")} day retreat itinerary`}
                  subtitle="A premium structure with guided practice, integration time, mindful meals, and healing support."
                />

                <div className="space-y-5">
                  {selectedItinerary.map((day) => (
                    <div
                      key={`${selectedProgram}-${day.day}`}
                      className="rounded-2xl border border-[#E7E0D7] bg-[#fdfcf9] p-5 sm:p-6"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 rounded-full bg-emerald-700 text-white flex items-center justify-center font-bold shadow-sm">
                            {day.day}
                          </div>
                        </div>

                        <div className="min-w-0 flex-1">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-3">
                            <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                              {day.title}
                            </h3>
                            <span className="inline-flex items-center rounded-full bg-emerald-50 text-emerald-800 border border-emerald-100 px-3 py-1 text-xs font-semibold">
                              {day.meals}
                            </span>
                          </div>

                          <p className="text-gray-700 leading-relaxed">{day.activities}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </SectionCard>
            </section>

            <section id="pricing">
              <SectionCard className="p-7 sm:p-10">
                <SectionHeading
                  eyebrow="Transparent Pricing"
                  title="Retreat pricing options"
                  subtitle="Choose the accommodation style and duration that best suits your preference."
                />

                <div className="space-y-8">
                  {pricingOptions.map((pricing) => (
                    <div key={pricing.duration}>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">{pricing.duration}</h3>

                      <div className="overflow-x-auto rounded-2xl border border-[#E5DED4]">
                        <table className="w-full border-collapse min-w-[760px]">
                          <thead>
                            <tr className="bg-[#f5f9f5]">
                              <th className="px-4 py-4 text-left text-sm font-semibold text-gray-900 border-b border-[#E5DED4]">
                                Accommodation Type
                              </th>
                              <th className="px-4 py-4 text-left text-sm font-semibold text-gray-900 border-b border-[#E5DED4]">
                                Price
                              </th>
                              <th className="px-4 py-4 text-left text-sm font-semibold text-gray-900 border-b border-[#E5DED4]">
                                Includes
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {pricing.options.map((option, index) => (
                              <tr key={index} className="bg-white hover:bg-[#fcfbf8]">
                                <td className="px-4 py-4 text-sm text-gray-700 border-b border-[#EFE8DE]">
                                  {option.type}
                                </td>
                                <td className="px-4 py-4 text-sm font-bold text-emerald-700 border-b border-[#EFE8DE] whitespace-nowrap">
                                  {option.price}
                                </td>
                                <td className="px-4 py-4 text-sm text-gray-700 border-b border-[#EFE8DE]">
                                  {option.includes}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 rounded-2xl bg-emerald-50 border border-emerald-100 p-6">
                  <h4 className="font-bold text-gray-900 mb-3">Important notes</h4>
                  <ul className="space-y-2 text-sm text-gray-700 leading-relaxed">
                    <li>
                      All retreat packages include access to nature walks, meditation sessions, yoga
                      classes, energy healing practices, and group workshops.
                    </li>
                    <li>
                      Meals are prepared with fresh, wholesome ingredients sourced locally to support
                      well-being, calm, and gentle detoxification.
                    </li>
                    <li>
                      Booking in advance is strongly recommended, especially for single occupancy
                      accommodations and peak travel periods.
                    </li>
                  </ul>
                </div>
              </SectionCard>
            </section>

            <section id="included">
              <SectionCard className="p-7 sm:p-10">
                <SectionHeading
                  eyebrow="Inclusions"
                  title="What’s included and not included"
                  subtitle="Clear expectations create a smoother and more trustworthy retreat experience."
                />

                <div className="grid lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Included in the course fee</h3>
                    <ul className="space-y-3">
                      {includedItems.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <span className="mt-1 text-emerald-600 font-bold">✓</span>
                          <span className="text-gray-700 leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Not included</h3>
                    <ul className="space-y-3">
                      {excludedItems.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <span className="mt-1 text-rose-600 font-bold">✗</span>
                          <span className="text-gray-700 leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </SectionCard>
            </section>

            <section
              id="contact"
              className="rounded-3xl bg-gradient-to-br from-emerald-700 to-emerald-900 text-white p-8 sm:p-10 shadow-lg"
            >
              <p className="text-[11px] uppercase tracking-[0.18em] font-bold text-emerald-100 mb-3">
                Begin Your Journey
              </p>
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                Ready to book your retreat?
              </h3>
              <p className="text-white/85 text-base leading-relaxed max-w-3xl mb-6">
                Invest in your well-being and choose the retreat duration that matches your current
                need—whether that is a quick reset, emotional balance, or a deeper transformational
                experience.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-white text-emerald-800 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-colors"
                >
                  Book Your Retreat
                </Link>
                <a
                  href="tel:+9779818514837"
                  className="inline-flex items-center justify-center gap-2 bg-transparent border border-white/30 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition-colors"
                >
                  Call Now
                </a>
              </div>
            </section>
          </main>

          <aside className="lg:sticky lg:top-24 self-start">
            <SidebarWidget
  price={{
    label: currentPricing.label,
    amount: currentPricing.amount,
    duration: "per person",
    includes: [
      "Experienced instructors",
      "Sattvic yogic meals",
      "Accommodation (residential)",
      "All guided sessions",
      "Wellness activities",
      "Study materials",
    ],
    viewAllPricingLink: "#pricing",
  }}
  contact={{
    phone: ["+977 9818514837", "+977 9808514837"],
    email: "jivanparivartan9@gmail.com",
    address: "Kathmandu, Nepal",
  }}
  showInquiryForm={true}
  variant="green"
/>
          </aside>
        </div>
      </div>
    </div>
  );
}