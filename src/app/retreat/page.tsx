"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumb } from "@/components/jivan/Breadcrumb";
import { PageHero } from "@/components/jivan/PageHero";
import { QuickNavigation } from "@/components/jivan/QuickNavigation";
import { SidebarWidget } from "@/components/jivan/SidebarWidget";

type RetreatDay = {
  day: number;
  title: string;
  activities: string;
  meals: string;
};

export default function RetreatPage() {
  const [selectedProgram, setSelectedProgram] = useState<string>("1-day");

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Meditation & Retreats", href: "/meditation" },
    { label: "Spiritual Retreats" },
  ];

  const quickNavItems = [
    { id: "overview", icon: "", label: "Overview", href: "#overview" },
    { id: "programs", icon: "", label: "Programs", href: "#programs" },
    { id: "itinerary", icon: "", label: "Itinerary", href: "#itinerary" },
    { id: "pricing", icon: "", label: "Cost", href: "#pricing" },
    { id: "included", icon: "✓", label: "Inclusions", href: "#included" },
  ];

  const heroStats = [
    { number: "1-7", label: "Days" },
    { number: "4 Star", label: "Hotels" },
    { number: "All", label: "Levels" },
    { number: "Year Round", label: "Available" },
  ];

  const heroCTAs = [
    { label: "View Programs", href: "#programs", primary: true },
    { label: "Book Now", href: "#contact" },
  ];

  // Pricing data for sidebar
  const sidebarPricing = {
    "1-day": {
      amount: "$250",
      label: "Starting From",
    },
    "3-day": {
      amount: "$1,050",
      label: "Starting From",
    },
    "5-day": {
      amount: "$1,450",
      label: "Starting From",
    },
    "7-day": {
      amount: "$2,100",
      label: "Starting From",
    },
  };

  const retreatItineraries = {
    "1-day": [
      {
        day: 1,
        title: "Complete Wellness Day",
        activities:
          "The day begins with a gentle yoga session designed to awaken the body and release any accumulated tension. Following this, participants enjoy a nutritious vegetarian breakfast prepared with fresh, locally sourced ingredients. A one-hour rest period allows for proper digestion and integration of the morning practice. The afternoon includes a comprehensive stress management therapy session, where participants learn practical techniques for managing daily pressures and cultivating mental clarity. After a wholesome lunch featuring traditional Nepali dishes and seasonal vegetables, the program continues with yoga nidra, a guided relaxation practice that promotes deep rest and rejuvenation. Stop meditation follows, offering participants tools to quiet the mind and develop present-moment awareness. A mindful tea break provides an opportunity for informal conversation and reflection. The day concludes with a transformative sound bath healing session, where the vibrations of singing bowls help balance the body's energy centers and promote overall well-being. Participants return home feeling refreshed, centered, and equipped with practices they can continue independently.",
        meals: "Breakfast, Lunch, Tea and Snacks",
      },
    ],
    "3-day": [
      {
        day: 1,
        title: "Foundation and Relaxation",
        activities:
          "The first day focuses on helping participants step away from their daily routines and settle into the retreat environment. The morning begins with a yoga session that emphasizes gentle stretching and breathwork to release physical tension. After a nourishing breakfast, participants enjoy a rest period that allows the body to adjust to the slower pace of retreat life. The afternoon includes a stress management therapy session where facilitators introduce foundational concepts of mindfulness and relaxation. Following lunch, yoga nidra provides deep restoration, while stop meditation helps calm mental chatter. A tea break offers time for quiet reflection or gentle conversation with fellow participants. The evening features a sound bath healing session, where the resonant tones of traditional instruments help participants release stress and begin their journey inward. The day establishes a foundation of relaxation and openness for the deeper work ahead.",
        meals: "Breakfast, Lunch, Tea and Snacks",
      },
      {
        day: 2,
        title: "Energy Awakening and Inner Balance",
        activities:
          "Building on the previous day's foundation, the second day introduces practices that work with the body's subtle energy systems. Morning yoga incorporates more dynamic movements to awaken vitality, followed by pranayama breathing techniques that help regulate the nervous system and enhance mental clarity. After breakfast and a rest period, participants engage in kirtan meditation, a practice that uses sound and music to open the heart and cultivate joy. The stress management session deepens with exploration of emotional patterns and practical tools for maintaining balance in daily life. Following lunch, singing bowl therapy provides a profound experience of vibrational healing, helping to clear energetic blockages and restore harmony. Deep heart meditation guides participants into a space of compassion and self-acceptance. After tea, kundalini meditation introduces gentle awakening of the body's dormant energy, promoting feelings of aliveness and expanded awareness. The day concludes with participants feeling more energized, balanced, and connected to their inner resources.",
        meals: "Breakfast, Lunch, Tea and Snacks",
      },
      {
        day: 3,
        title: "Nature Connection and Integration",
        activities:
          "The final day emphasizes connection with nature and integration of the retreat experience. After an early breakfast, participants embark on a guided hike through beautiful natural surroundings, practicing walking meditation and mindful observation of the environment. The jungle setting provides a powerful backdrop for guidance meditation, where facilitators help participants connect with their intuition and inner wisdom. A light lunch is enjoyed in nature, fostering appreciation for simple pleasures and natural abundance. The afternoon includes chanting meditation, which uses sacred sounds to deepen spiritual connection and cultivate inner peace. Tychiin meditation follows, a practice that combines breath and visualization to enhance mental focus and clarity. Nature love meditation helps participants develop reverence for the natural world and recognize their interconnection with all life. After a contemplative tea break, the retreat concludes with an integration session where participants reflect on their experiences, share insights with the group, and develop plans for incorporating retreat practices into their daily lives. Participants return to their hotels carrying a sense of renewal, clarity, and deeper connection to themselves and the world around them.",
        meals: "Breakfast, Lunch, Tea and Snacks",
      },
    ],
    "5-day": [
      {
        day: 1,
        title: "Physical Relaxation and Mental Release",
        activities:
          "The opening day creates a container of safety and support for the retreat journey ahead. Gentle yoga practices help participants release accumulated physical tension and begin the process of letting go. The stress management session introduces foundational principles that will be developed throughout the week. Sound bath healing at day's end helps participants settle deeply into the retreat space and opens pathways for healing and transformation. This day establishes the relaxed, receptive state necessary for deeper work in the days to come.",
        meals: "Breakfast, Lunch, Tea and Snacks",
      },
      {
        day: 2,
        title: "Emotional Balance and Energy Awareness",
        activities:
          "As participants become more relaxed, the second day begins working with the emotional body and subtle energy systems. Pranayama practices help regulate emotions and enhance vitality. Kirtan meditation opens the heart center and cultivates joy and devotion. The stress management session addresses emotional patterns and provides tools for maintaining equilibrium. Singing bowl therapy and deep heart meditation work synergistically to release emotional blockages and promote healing. Kundalini meditation gently awakens dormant energy, helping participants feel more alive and present. By evening, participants often report feeling lighter, more centered, and emotionally balanced.",
        meals: "Breakfast, Lunch, Tea and Snacks",
      },
      {
        day: 3,
        title: "Nature Connection and Grounding",
        activities:
          "The midpoint of the retreat emphasizes grounding and connection with nature. The guided hike provides an opportunity to practice mindfulness in motion and appreciate natural beauty. Jungle meditation deepens participants' sense of belonging to the natural world. Chanting, tychiin, and nature love meditations help participants ground the energy awakened in previous days and develop reverence for life in all its forms. This day provides essential balance, ensuring that the spiritual opening occurring in the retreat remains connected to earth and embodiment.",
        meals: "Breakfast, Lunch, Tea and Snacks",
      },
      {
        day: 4,
        title: "Deep Cleansing and Energetic Alignment",
        activities:
          "The fourth day represents a deepening of the retreat experience. Light yoga combined with deep triangular breathing helps release deeply held patterns and toxins. The fifteen-minute silence allows participants to touch profound stillness and inner quiet. Breakfast accompanied by Tibetan meditation music creates a contemplative atmosphere that supports continued inner work. Deep heart meditation helps participants access and release old emotional wounds. Humming meditation and kirtan self-singing activate healing vibrations throughout the body. The sharing session provides an opportunity for participants to witness and be witnessed by the group, fostering connection and mutual support. Kundalini meditation continues the work of awakening and balancing the body's energy systems. By the end of this day, participants often experience a sense of lightness and clarity as old patterns release and energy flows more freely.",
        meals: "Breakfast, Lunch, Tea and Snacks",
      },
      {
        day: 5,
        title: "Integration and Mountain Connection",
        activities:
          "The final day takes participants into the mountains for a profound integration experience. The scenic hike to Kakani or Dhulikhel offers breathtaking views and an opportunity to reflect on the week's journey. The visit to Namobuddha, a sacred Buddhist site, provides a powerful spiritual experience and helps participants connect with something greater than themselves. Meditation in this mountain setting allows for deep contemplation and appreciation of the transformation that has occurred. The return journey and final evening at the hotel provide time for rest, reflection, and preparation for re-entry into daily life. Participants leave carrying the peace, clarity, and vitality cultivated during the retreat, along with practices and insights they can continue to develop at home.",
        meals: "Breakfast, Lunch, Tea and Snacks",
      },
    ],
    "7-day": [
      {
        day: 1,
        title: "Foundation and Relaxation",
        activities:
          "The seven-day retreat begins with establishing a strong foundation for the transformative journey ahead. Participants ease into retreat life through gentle yoga that helps release physical tension accumulated from daily stress. The stress management session introduces core principles and practices that will be developed throughout the week. Sound bath healing provides a profound experience of vibrational medicine, helping participants relax deeply and open to the healing process. This first day is intentionally gentle, allowing participants to transition from their busy external lives to the quieter, more reflective pace of retreat. By evening, most participants report feeling noticeably more relaxed and present.",
        meals: "Breakfast, Lunch, Tea and Snacks",
      },
      {
        day: 2,
        title: "Energy Awakening and Emotional Balance",
        activities:
          "Building on the previous day's relaxation, day two begins working more actively with the body's energy systems and emotional landscape. Pranayama breathing practices help regulate the nervous system and enhance vitality. Kirtan meditation uses devotional singing to open the heart and cultivate joy. The stress management session addresses emotional patterns and provides practical tools for maintaining balance. Singing bowl therapy works at a cellular level to release blockages and restore harmony. Deep heart meditation creates space for emotional healing and self-compassion. Kundalini meditation gently awakens the body's dormant spiritual energy, helping participants feel more alive and connected. This day often brings increased emotional awareness and release.",
        meals: "Breakfast, Lunch, Tea and Snacks",
      },
      {
        day: 3,
        title: "Nature Immersion and Grounding",
        activities:
          "The third day takes participants into nature for a powerful grounding experience. The guided hike through forest and jungle provides an opportunity to practice mindfulness in motion and develop appreciation for the natural world. Meditation in the jungle setting helps participants feel their connection to the earth and all living beings. Chanting meditation uses sacred sounds to deepen spiritual awareness. Tychiin meditation combines breath and visualization to enhance mental focus. Nature love meditation cultivates reverence and gratitude for the environment. This day provides essential balance, ensuring that the spiritual energy awakened earlier in the retreat remains grounded and connected to the earth.",
        meals: "Breakfast, Lunch, Tea and Snacks",
      },
      {
        day: 4,
        title: "Deep Cleansing and Alignment",
        activities:
          "The fourth day marks a significant deepening of the retreat experience. Light yoga combined with deep triangular breathing helps release patterns and toxins held deep in the body. The fifteen-minute period of complete silence allows participants to touch profound stillness and inner peace. Breakfast accompanied by Tibetan meditation music maintains a contemplative atmosphere. Deep heart meditation provides space for working with difficult emotions and old wounds. Humming meditation and kirtan self-singing create healing vibrations throughout the body. The group sharing session offers an opportunity for participants to express their experiences and feel witnessed and supported. Kundalini meditation continues the work of awakening and balancing energy. Many participants report significant breakthroughs and releases during this pivotal day.",
        meals: "Breakfast, Lunch, Tea and Snacks",
      },
      {
        day: 5,
        title: "Sacred Fire and Deep Transformation",
        activities:
          "Day five introduces the ancient practice of fire ceremony, or Hawan Kriya, a powerful purification ritual that works on physical, emotional, and spiritual levels. The ceremony begins with careful preparation and invocation, followed by offerings made into the sacred fire while mantras are chanted. This practice helps burn away old patterns and obstacles while invoking blessings and positive energy. Following the ceremony, participants enjoy a special breakfast and then rest for two hours, allowing the transformative effects of the fire ritual to integrate. The afternoon brings yoga nidra, an extended guided relaxation that promotes profound rest and healing. Nataraja dancing meditation uses sacred movement to liberate energy and express joy. Swimming pool meditation offers a unique experience of consciousness while floating, helping participants access altered states of awareness. Laughing meditation releases tension and cultivates joy. The day concludes with a celebratory kirtan session, where participants sing and dance together, embodying the transformation that has occurred.",
        meals: "Breakfast, Lunch, Tea and Snacks",
      },
      {
        day: 6,
        title: "Detoxification and Integration",
        activities:
          "The sixth day focuses on cleansing and integrating the profound experiences of the previous days. Detoxification yoga incorporates principles from panchakarma, the ancient Ayurvedic cleansing system, helping the body release toxins on all levels. The concept presentation and sharing session provides a framework for understanding the retreat experience from philosophical and spiritual perspectives. Bhajan singing connects participants with devotional traditions and opens the heart. Following lunch and a substantial rest period, Shakti Chalika meditation works with the divine feminine energy for healing and empowerment. Dance and free movement allow spontaneous expression and release. Sound bath combined with kundalini practice creates a powerful synergy, helping energy flow freely throughout the body. This day brings together physical cleansing, philosophical understanding, and energetic integration.",
        meals: "Breakfast, Lunch, Tea and Snacks",
      },
      {
        day: 7,
        title: "Sunrise Completion and Mountain Blessing",
        activities:
          "The final day begins before dawn with sunrise yoga and meditation, honoring the completion of the retreat journey and the new beginning participants are stepping into. A special breakfast celebration acknowledges the transformation that has occurred and the connections formed within the group. The journey to Kakani mountain provides spectacular views and an opportunity for contemplation and gratitude. Lunch in this natural setting becomes a ceremony of nourishment and appreciation. Time for rest and sunbathing allows participants to simply be, integrating all they have experienced. The jungle resort experience offers a final immersion in nature before returning to regular life. A closing ceremony marks the formal completion of the retreat, with participants sharing reflections and setting intentions for continuing their practice at home. The integration circle provides space for honoring each person's unique journey and the collective experience of the group. As participants prepare for their return journey, they carry with them not only the peace and clarity cultivated during the week but also practical tools and insights they can continue to work with. Many report that this comprehensive seven-day journey represents a true turning point in their relationship with themselves and their spiritual path.",
        meals: "Breakfast, Lunch, Tea and Snacks",
      },
    ],
  };

  const pricingOptions = [
    {
      duration: "1 Day Retreat",
      options: [
        {
          type: "Single Deluxe Room with Overnight Stay",
          price: "USD 380",
          includes: "4-star resort accommodation (2 Nights 1 Day), meals, guided sessions, wellness activities",
        },
        {
          type: "Double Sharing Room with Overnight Stay",
          price: "USD 350",
          includes: "4-star resort accommodation (2 Nights 1 Day), all meals, guided sessions, wellness activities",
        },
        {
          type: "Day Program Only (Non-Residential)",
          price: "USD 250",
          includes: "4-star resort: Breakfast, Meal, evening snacks, guided sessions, wellness activities",
        },
      ],
    },
    {
      duration: "3 Day Retreat",
      options: [
        {
          type: "Sharing Deluxe Room (2 persons)",
          price: "USD 1,050",
          includes: "4-star resort accommodation (4 Nights 3 Day), all meals, guided sessions, wellness activities",
        },
        {
          type: "Single Deluxe Room",
          price: "USD 1,200",
          includes: "4-star resort accommodation (4 Nights 3 Day), all meals, guided sessions, wellness activities",
        },
      ],
    },
    {
      duration: "5 Day Retreat",
      options: [
        {
          type: "Sharing Deluxe Room (2 persons)",
          price: "USD 1,450",
          includes: "4-star resort accommodation (6 Nights 5 Day), all meals, guided sessions, wellness activities",
        },
        {
          type: "Single Deluxe Room",
          price: "USD 1,600",
          includes: "4-star resort accommodation (6 Nights 5 Day), all meals, guided sessions, wellness activities",
        },
      ],
    },
    {
      duration: "7 Day Retreat",
      options: [
        {
          type: "Sharing Deluxe Room (2 persons)",
          price: "USD 2,100",
          includes: "4-star resort accommodation (8 Nights 7 Day), all meals, guided sessions, wellness activities",
        },
        {
          type: "Single Deluxe Room",
          price: "USD 2,400",
          includes: "4-star resort accommodation (8 Nights 7 Day), all meals, guided sessions, wellness activities",
        },
      ],
    },
  ];

  const programDescriptions = {
    "1-day": {
      title: "One Day Wellness and Spiritual Retreat",
      intro:
        "Our One Day Wellness and Spiritual Retreat Program is thoughtfully designed to offer deep relaxation, healing, and inner renewal within a single day. The retreat provides a harmonious blend of physical practices, meditative techniques, energy healing, and mindful rest, allowing participants to step away from daily stress and reconnect with their inner balance.",
      details: [
        "Throughout the day, participants experience a structured flow of activities that nurture the body, calm the mind, and uplift the spirit. Guided sessions and a peaceful environment support mental clarity, emotional calm, and overall well-being. The program encourages stress release, improved focus, emotional balance, and renewed energy while maintaining a gentle pace that allows proper rest and integration.",
        "Wholesome meals and mindful breaks further enhance the sense of relaxation and rejuvenation. This one-day retreat is ideal for individuals and organizations seeking a meaningful wellness experience in a short time frame. Participants leave feeling refreshed, centered, and positively re-energized, carrying a sense of calm, awareness, and motivation back into their personal and professional lives.",
      ],
    },
    "3-day": {
      title: "Three Day Wellness and Spiritual Retreat",
      intro:
        "Our Three Day Wellness and Spiritual Retreat Program is designed to help participants slow down, release stress, and reconnect with their inner balance. The retreat gently combines yoga, pranayama, meditation, healing sessions, sound therapy, and mindful rest to support physical health, mental clarity, and emotional well-being. It offers a peaceful break from daily routines while creating space for relaxation, awareness, and self-care.",
      details: [
        "Over the three days, participants experience a natural flow from stress relief and body relaxation to energy awakening and inner awareness. Practices such as stress management sessions, sound bath healing, chakra meditation, kundalini meditation, and guided silence help calm the mind, balance emotions, and restore inner harmony. Healthy meals, rest periods, and sharing sessions support a comfortable and nurturing retreat experience.",
        "The final phase of the retreat focuses on connection with nature and inner silence. Activities like hiking, forest meditation, prayer meditation, and quiet time in nature allow participants to ground themselves deeply and integrate the retreat experience. By the end of the program, participants return feeling refreshed, centered, and mentally lighter, carrying renewed energy, clarity, and positivity into their personal and professional lives.",
      ],
    },
    "5-day": {
      title: "Five Day Wellness and Spiritual Retreat",
      intro:
        "Our One to Five Day Wellness and Spiritual Retreat Program is designed to suit different needs, time availability, and levels of inner readiness. Each additional day gently deepens the experience, allowing participants to move from relaxation and stress relief toward energy awakening, emotional healing, and spiritual awareness. The program blends movement, meditation, healing practices, nature connection, and mindful rest in a safe and supportive environment.",
      details: [
        "Day one focuses on physical relaxation and mental release. Participants begin by letting go of daily stress, calming the nervous system, and settling into the retreat space. This day helps reset the body and mind, creating a foundation of relaxation, clarity, and openness for the days ahead. Day two emphasizes emotional balance and inner energy awareness. As the body becomes more relaxed, practices support stress management, deeper focus, and gentle activation of inner energy. Participants often feel lighter, more centered, and emotionally stable by the end of this day.",
        "Day three is dedicated to connection with nature and inner silence. Time spent in natural surroundings supports grounding, reflection, and deep mental calm. This day allows participants to integrate their experiences through quiet awareness, prayerful presence, and mindful movement in nature. Day four moves into deeper cleansing and energetic alignment. Participants experience a stronger sense of inner awareness, balance, and subtle energy flow. This day supports emotional release, inner clarity, and a deeper connection with one's inner self.",
        "Day five focuses on spiritual depth and integration. The retreat gently brings together all previous experiences through heart-centered awareness, sacred practices, and reflection. A visit to the mountains and sacred sites provides a powerful culmination to the retreat journey. Participants leave with a sense of completion, inner strength, and lasting calm, ready to carry the retreat's benefits into daily life. This flexible retreat program is ideal for individuals and organizations seeking meaningful wellness experiences, whether for a single day of relaxation or a five-day journey of deep inner transformation.",
      ],
    },
    "7-day": {
      title: "Seven Day Complete Transformation Retreat",
      intro:
        "Our Seven Day Complete Transformation Retreat represents the most comprehensive wellness and spiritual experience we offer. Building upon the foundation of shorter retreats, this extended program allows for profound and lasting transformation through advanced practices, sacred ceremonies, and deep inner work. The additional days provide essential time for integration and for working with more subtle aspects of consciousness and healing.",
      details: [
        "The first three days follow a similar pattern to our shorter retreats, establishing relaxation, emotional balance, and connection with nature. However, the extended timeframe allows these foundational practices to go deeper, creating a more stable platform for the transformative work of the latter half of the retreat. Participants have more time to release chronic stress patterns, develop trust in the process, and open to healing on multiple levels.",
        "Days four through seven introduce advanced practices including Hawan Kriya fire ceremony, extended yoga nidra, Nataraja dancing meditation, swimming pool meditation, detoxification yoga with panchakarma principles, Shakti Chalika meditation, and philosophical study. These practices work synergistically to promote deep purification, energetic activation, and spiritual awakening. The fire ceremony on day five represents a powerful turning point, helping participants release old patterns and step into new possibilities.",
        "The final days emphasize integration and grounding of the profound experiences that have occurred. Participants learn to embody their insights and develop sustainable practices for continuing their growth after the retreat ends. The journey to the mountains on the final day provides a ceremonial completion, allowing participants to offer gratitude, set intentions, and honor their transformation. Many participants describe this seven-day journey as a defining moment in their spiritual path, providing clarity, healing, and direction that continues to unfold long after the retreat concludes.",
      ],
    },
  };

  const selectedItinerary = retreatItineraries[selectedProgram as keyof typeof retreatItineraries];
  const selectedDescription =
    programDescriptions[selectedProgram as keyof typeof programDescriptions];
  const currentPricing = sidebarPricing[selectedProgram as keyof typeof sidebarPricing];

  return (
    <div className="min-h-screen bg-[#f5f0e8] bg-[url('/img/design/color-page.jpg')] bg-repeat bg-center">
      <Breadcrumb items={breadcrumbItems} />

      <PageHero
        badge={{ icon: "", text: "Personal Wellness Journey" }}
        title="Wellness and Spiritual Retreats"
        subtitle="Flexible retreat programs from one to seven days designed for deep relaxation, healing, and inner renewal in peaceful natural surroundings"
        stats={heroStats}
        ctas={heroCTAs}
        variant="green"
        backgroundImage="https://images.unsplash.com/photo-1545389336-cf090694435e?w=1920"
      />

      <QuickNavigation items={quickNavItems} variant="green" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-5 lg:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-8 lg:gap-12">
          {/* Main Content */}
          <div>
            {/* Overview Section */}
            <section id="overview" className="mb-12">
              <div className="bg-white rounded-xl p-8 sm:p-10 shadow-lg">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b pb-4">
                  Overview
                </h2>
                <div className="prose max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-4 text-justify">
                    Our Wellness and Spiritual Retreat offers a nurturing journey for the body, mind,
                    and spirit. We have thoughtfully designed flexible retreat durations to suit
                    different schedules and needs, from a one-day escape to a full seven-day
                    transformational experience. All programs include accommodation in comfortable
                    four-star hotels, healthy vegetarian meals, guided sessions by experienced
                    facilitators, and access to all retreat facilities and activities.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4 text-justify">
                    Each program blends physical practices such as yoga and pranayama with meditative
                    techniques including various forms of seated and moving meditation. Energy healing
                    modalities such as sound bath therapy and chakra balancing are integrated
                    throughout. The retreats emphasize connection with nature through outdoor activities
                    and meditation in natural settings. All practices occur in a safe and supportive
                    environment that encourages both individual growth and group connection.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-justify">
                    Whether you seek immediate stress relief, emotional healing, spiritual development,
                    or comprehensive transformation, our experienced facilitators guide you through a
                    carefully structured journey of self-discovery and renewal. The programs are suitable
                    for individuals at all levels of experience, from complete beginners to those with
                    established practices. Advance booking is recommended as spaces are limited,
                    particularly for single room accommodations.
                  </p>
                </div>
              </div>
            </section>

            {/* Program Selection */}
            <section id="programs" className="mb-12">
              <div className="bg-white rounded-xl p-8 sm:p-10 shadow-lg">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b pb-4">
                  Choose Your Retreat Duration
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                  {["1-day", "3-day", "5-day", "7-day"].map((duration) => (
                    <button
                      key={duration}
                      onClick={() => setSelectedProgram(duration)}
                      className={`p-5 rounded-lg border-2 transition-all text-center ${
                        selectedProgram === duration
                          ? "border-green-600 bg-green-50 shadow-md"
                          : "border-gray-200 bg-white hover:border-green-300"
                      }`}
                    >
                      <div
                        className={`text-2xl font-bold mb-1 ${
                          selectedProgram === duration ? "text-green-700" : "text-gray-900"
                        }`}
                      >
                        {duration === "1-day" && "1 Day"}
                        {duration === "3-day" && "3 Days"}
                        {duration === "5-day" && "5 Days"}
                        {duration === "7-day" && "7 Days"}
                      </div>
                      <div className="text-sm text-gray-600">
                        {duration === "1-day" && "Quick Reset"}
                        {duration === "3-day" && "Deep Balance"}
                        {duration === "5-day" && "Transformation"}
                        {duration === "7-day" && "Complete Journey"}
                      </div>
                    </button>
                  ))}
                </div>

                {selectedDescription && (
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {selectedDescription.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-4 text-justify">
                      {selectedDescription.intro}
                    </p>
                    {selectedDescription.details.map((paragraph, index) => (
                      <p key={index} className="text-gray-700 leading-relaxed mb-4 text-justify">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            </section>

            {/* Detailed Itinerary */}
            {selectedItinerary && (
              <section id="itinerary" className="mb-12">
                <div className="bg-white rounded-xl p-8 sm:p-10 shadow-lg">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b pb-4">
                    Detailed Itinerary
                  </h2>
                  <div className="space-y-8">
                    {selectedItinerary.map((day) => (
                      <div key={day.day} className="border-l-4 border-green-600 pl-6">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="bg-green-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg flex-shrink-0">
                            {day.day}
                          </div>
                          <h3 className="text-xl font-bold text-gray-900">{day.title}</h3>
                        </div>
                        <p className="text-gray-700 leading-relaxed mb-3 text-justify">{day.activities}</p>
                        <p className="text-sm font-semibold text-gray-600">
                          Meals: {day.meals}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            )}

            {/* Cost Section */}
            <section id="pricing" className="mb-12">
              <div className="bg-white rounded-xl p-8 sm:p-10 shadow-lg">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b pb-4">
                  Cost
                </h2>
                <div className="space-y-8">
                  {pricingOptions.map((pricing) => (
                    <div key={pricing.duration}>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">
                        {pricing.duration}
                      </h3>
                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse">
                          <thead>
                            <tr className="bg-green-50">
                              <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">
                                Accommodation Type
                              </th>
                              <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">
                                Price
                              </th>
                              <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">
                                Includes
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {pricing.options.map((option, index) => (
                              <tr key={index} className="hover:bg-gray-50">
                                <td className="border border-gray-300 px-4 py-3 text-gray-700">
                                  {option.type}
                                </td>
                                <td className="border border-gray-300 px-4 py-3 font-bold text-green-700">
                                  {option.price}
                                </td>
                                <td className="border border-gray-300 px-4 py-3 text-gray-700 text-sm">
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

                <div className="mt-8 bg-green-50 border border-green-200 rounded-lg p-6">
                  <h4 className="font-bold text-gray-900 mb-3">Important Notes</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="text-justify">
                      All retreat packages include access to nature walks, meditation sessions, yoga
                      classes, energy healing practices, and group workshops.
                    </li>
                    <li className="text-justify">
                      Meals are prepared with fresh, wholesome ingredients sourced locally to support
                      your detoxification and well-being.
                    </li>
                    <li className="text-justify">
                      Group activities are thoughtfully designed to foster genuine connection,
                      personal reflection, and inner growth.
                    </li>
                    <li className="text-justify">
                      Booking in advance is strongly recommended as rooms are limited, especially for
                      single occupancy accommodations.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* What's Included Section */}
            <section id="included" className="mb-12">
              <div className="bg-white rounded-xl p-8 sm:p-10 shadow-lg">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b pb-4">
                  What's Included in the Course Fee
                </h2>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 font-bold mt-1">✓</span>
                    <span className="text-gray-700">
                      Comprehensive yoga classes guided by experienced teachers
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 font-bold mt-1">✓</span>
                    <span className="text-gray-700">
                      Sattvic yogic Nepali meals with minimal spices that nourish the body, calm the mind, and support yoga and meditation.
                    </span>
                  </li>
                  
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 font-bold mt-1">✓</span>
                    <span className="text-gray-700">
                      Breakfast and evening tea with light snacks to nourish and refresh participants
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 font-bold mt-1">✓</span>
                    <span className="text-gray-700">All applicable taxes for the course</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 font-bold mt-1">✓</span>
                    <span className="text-gray-700">
                      Yoga books and study materials as outlined in the syllabus
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 font-bold mt-1">✓</span>
                    <span className="text-gray-700">
                      Shared yoga mat for daily practice during the course
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 font-bold mt-1">✓</span>
                    <span className="text-gray-700">
                      Access to nature walks, meditation sessions, and wellness activities
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 font-bold mt-1">✓</span>
                    <span className="text-gray-700">
                      Energy healing practices and sound therapy sessions
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 font-bold mt-1">✓</span>
                    <span className="text-gray-700">
                      Four-star hotel accommodation for residential programs
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 font-bold mt-1">✓</span>
                    <span className="text-gray-700">
                     Pickup from Tribhuvan International Airport and Kathmandu Valley.
                    </span>
                  </li>
                </ul>

                <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b pb-4">
                  What's Not Included in the Course Fee
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold mt-1">✗</span>
                    <span className="text-gray-700">
                      Meals beyond the provided menu or special dietary preferences
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold mt-1">✗</span>
                    <span className="text-gray-700">
                      Personal yoga mats if you wish to take one home after the course. Shared mats
                      are provided for class use.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold mt-1">✗</span>
                    <span className="text-gray-700">
                      Pick-up and drop-off services other than Tribhuvan International Airport or Kathmandu Valley
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold mt-1">✗</span>
                    <span className="text-gray-700">
                      Sightseeing or travel excursions outside the course schedule
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold mt-1">✗</span>
                    <span className="text-gray-700">
                      Visa fees, travel insurance, and airport taxes
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold mt-1">✗</span>
                    <span className="text-gray-700">International flight expenses</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold mt-1">✗</span>
                    <span className="text-gray-700">Personal expenses and incidentals</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Booking Section */}
            <section className="bg-gradient-to-br from-green-600 to-green-800 rounded-xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Ready to Begin Your Journey?</h3>
              <p className="text-lg mb-6 opacity-90 text-justify">
                Invest in your well-being and embark on a transformative experience tailored to your
                pace, preference, and schedule. Contact us to book your retreat or learn more about
                our programs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 bg-white text-green-700 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors"
                >
                  Book Your Retreat
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white/10 transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div>
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
                viewAllPricingLink: "#pricing"
              }}
              contact={{
                phone: ["+977 9818514837", "+977 9808514837"],
                email: "jivanparivartan9@gmail.com",
                address: "Kathmandu, Nepal",
              }}
              showInquiryForm={true}
              variant="green"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
