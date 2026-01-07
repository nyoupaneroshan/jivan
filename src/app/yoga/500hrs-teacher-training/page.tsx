import React from "react";
import { Breadcrumb } from "@/components/jivan/Breadcrumb";
import { PageHero } from "@/components/jivan/PageHero";
import { QuickNavigation } from "@/components/jivan/QuickNavigation";
// import {IntroSection} from "@/components/jivan/yoga/500hrs/IntroSection";
import { ModuleCard } from "@/components/jivan/ModuleCard";
import { TheoryCards } from "@/components/jivan/yoga/TheoryCards";
import { CTASection } from "@/components/jivan/yoga/CTASection";
import { SidebarWidget } from "@/components/jivan/SidebarWidget";
import { IntroSection } from "@/components/jivan/yoga/IntroSection";
import { generateUpcomingBatches } from "@/utils/batchGenerator";


export default function Yoga500HoursPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Yoga", href: "/yoga" },
    { label: "500 Hours Advanced Training" },
  ];

  const heroStats = [
    { number: "150+", label: "Asanas" },
    { number: "12 Weeks", label: "Duration" },
    { number: "500", label: "Hours Training" },
    { number: "Expert Level", label: "Certification" },
  ];

  const heroCTAs = [
    { label: "Enroll Now", href: "#enroll", primary: true },
    { label: "View Curriculum", href: "#overview" },
  ];

  const quickNavItems = [
    { id: "overview", icon: "📋", label: "Overview", href: "#overview" },
    { id: "surya-chandra", icon: "☀️", label: "Surya & Chandra Namaskar", href: "#surya-chandra" },
    { id: "ashtanga", icon: "🧘", label: "Ashtanga Mahayoga", href: "#ashtanga" },
    { id: "hatha", icon: "🕉️", label: "Hatha Yoga", href: "#hatha" },
    { id: "pranayam", icon: "🌬️", label: "Pranayam (10 Types)", href: "#pranayam" },
    { id: "mudra", icon: "🙏", label: "Mudra Meditation", href: "#mudra" },
    { id: "meditation", icon: "🧘‍♀️", label: "Meditation", href: "#meditation" },
    { id: "mantra", icon: "🔮", label: "Mantra Sadhana", href: "#mantra" },
    { id: "naturopathy", icon: "🌿", label: "Naturopathy", href: "#naturopathy" },
    { id: "theory", icon: "📚", label: "Theory", href: "#theory" },
    { id: "enroll", icon: "✏️", label: "Enroll Now", href: "#enroll" },
  ];

  const introParagraphs = [
    "Our 500 Hours Advanced Yoga Teacher Training is a comprehensive, immersive program designed for serious practitioners and aspiring master teachers. This advanced certification builds upon foundational knowledge, diving deep into traditional yoga practices, advanced asanas, spiritual philosophy, and holistic healing modalities including Mantra Sadhana and Naturopathy.",
    "This intensive training combines ancient wisdom with modern teaching methodology, preparing you to guide students at all levels with confidence, depth, and authenticity.",
  ];

  const theoryCards = [
    {
      icon: "📜",
      title: "History of Yoga",
      description: "Comprehensive study of yoga's evolution from Vedic times through modern practice, including lineage studies and textual analysis.",
      link: { href: "#", label: "Read More" },
    },
    {
      icon: "🕉️",
      title: "Ashtanga Maha Yoga",
      description: "In-depth study of Patanjali's Yoga Sutras, eight-limbed path, and their practical application in teaching and daily life.",
      link: { href: "#", label: "Read More" },
    },
    {
      icon: "🧬",
      title: "Yoga Anatomy & Physiology",
      description: "Advanced anatomical and physiological understanding with expert guidance on body mechanics and therapeutic applications.",
      link: { href: "#", label: "Read More" },
    },
  ];

  const ctaButtons = [
    { icon: "📥", label: "Download Brochure", href: "#" },
    { icon: "✏️", label: "Apply Now", href: "#" },
  ];

  const priceInfo = {
    label: "Starting From",
    amount: "$2,000",
    duration: "12 Weeks Program",
    includes: [
      "Accommodation Included",
      "Vegetarian Meals",
      "All Study Materials",
      "Advanced Certification",
      "Mantra & Naturopathy",
    ],
  };

  const batches = generateUpcomingBatches({
  intervalMonths: 3,
  totalBatches: 3,
  batchDay: 1,
});


  const contact = {
    phone: ["+977 9818514837", "+977 9863049261"],
    email: "info@jivanparivartan.com",
    address: "Tarkeshwor-5, Kathmandu",
  };

  return (
    <div className="min-h-screen bg-[#faf6f1] bg-[url('/img/design/color-page.jpg')] bg-repeat bg-center">
      <Breadcrumb items={breadcrumbItems} />

      <PageHero
        badge={{ icon: "⭐", text: "Advanced Yoga Alliance Certified Program" }}
        title="500 Hours Advanced Yoga Teacher Training"
        subtitle="Master the Art & Science of Traditional Yoga"
        stats={heroStats}
        ctas={heroCTAs}
        variant="dark-red"
        backgroundImage="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1920"
      />

      <QuickNavigation items={quickNavItems} variant="dark-red" />

      <div className="max-w-[1400px] mx-auto px-5 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12">
          {/* Main Content */}
          <div>
            <section id="overview">
              <IntroSection
                title="Advanced Program Overview"
                paragraphs={introParagraphs}
                variant="dark-red"
              />
              <div className="text-center mt-6">
                <span className="inline-block bg-gradient-to-br from-yellow-400 to-orange-500 text-gray-900 px-6 py-2 rounded-full text-sm font-bold">
                  ⭐ Advanced Certification ⭐
                </span>
              </div>
            </section>

            {/* Module 1: Surya & Chandra Namaskar */}
            <section id="surya-chandra" className="mt-16">
              <ModuleCard
                icon="☀️"
                title="Classical Surya & Chandra Namaskar"
                description="Our Surya Namaskar and Chandra Namaskar Course teaches the classical sequences of 26 combined Āsanas designed to harmonize the body's solar and lunar energies. Students learn the proper alignment, breath coordination, and flow of Surya Namaskar's 12 energizing postures along with Chandra Namaskar's 14 calming, cooling movements."
                badges={[
                  "12 Surya Namaskar Poses",
                  "14 Chandra Namaskar Poses",
                  "Solar Energy Activation",
                  "Lunar Energy Balance",
                  "Prāṇa Awareness",
                ]}
                link={{ href: "#", label: "Learn More About This Module" }}
                advanced={true}
                advancedText="🌟 Exclusive to 500 Hours Training: Solar & Lunar Energy Harmonization"
                defaultExpanded={true}
                variant="dark-red"
              />
            </section>

            {/* Module 2: Ashtanga Mahayoga */}
            <section id="ashtanga">
              <ModuleCard
                icon="🧘"
                title="Ashtanga Mahayoga (Maharshi Patanjali)"
                description="Advanced Ashtanga training with complete primary and intermediate series. Master 100+ traditional Āsanas with precise alignment, bandhas, drishti, and vinyasa flow. Integrate advanced prāṇāyāma, mantra, and meditation techniques for spiritual awakening."
                badges={[
                  "Advanced Sequences",
                  "Intermediate Series",
                  "Bandha Mastery",
                  "Spiritual Integration",
                ]}
                link={{ href: "#", label: "Learn More About This Module" }}
                variant="dark-red"
              />
            </section>

            {/* Module 3: Hatha Yoga */}
            <section id="hatha">
              <ModuleCard
                icon="🕉️"
                title="Hatha Yoga (Advanced)"
                description="Deep exploration of 100+ classical Hatha Yoga Āsanas including advanced inversions, arm balances, and therapeutic variations. Master prāṇāyāma, mudras, bandhas, and chakra activation techniques for complete energy transformation."
                badges={[
                  "100+ Advanced Āsanas",
                  "Inversions & Arm Balances",
                  "Therapeutic Applications",
                  "Chakra Activation",
                ]}
                link={{ href: "#", label: "Learn More About This Module" }}
                variant="dark-red"
              />
            </section>

            {/* Module 4: Pranayam */}
            <section id="pranayam">
              <ModuleCard
                icon="🌬️"
                title="Pranayam (10 Advanced Techniques)"
                description="Complete mastery of 10 classical pranayama techniques including advanced variations. Learn Anulom Vilom, Bhastrika, Kapalbhati, Bhramari, Ujjayi, Sheetali, Sheetkari, Nadi Shodhana, Surya Bhedana, and Chandra Bhedana for complete prāṇa control and spiritual awakening."
                badges={[
                  "10 Classical Techniques",
                  "Advanced Variations",
                  "Nadi Purification",
                  "Energy Mastery",
                  "Kundalini Activation",
                ]}
                link={{ href: "#", label: "Learn More About This Module" }}
                advanced={true}
                advancedText="🌟 Master 10 Advanced Pranayama Techniques for Energy Mastery"
                variant="dark-red"
              />
            </section>

            {/* Module 5: Mudra Meditation */}
            <section id="mudra">
              <ModuleCard
                icon="🙏"
                title="Mudra Meditation"
                description="Comprehensive training in traditional mudras for energy channeling, chakra activation, and deep meditation. Learn hand mudras, body mudras, and meditation mudras for spiritual transformation and healing."
                badges={[
                  "Traditional Mudras",
                  "Energy Channeling",
                  "Chakra Activation",
                  "Healing Applications",
                ]}
                link={{ href: "#", label: "Learn More About This Module" }}
                variant="dark-red"
              />
            </section>

            {/* Module 6: Advanced Meditation */}
            <section id="meditation">
              <ModuleCard
                icon="🧘‍♀️"
                title="Advanced Meditation Techniques"
                description="Master advanced meditation techniques including Trataka, Yoga Nidra, Chakra Dhyana, Kundalini meditation, and transcendental awareness practices. Learn to guide others into deep meditative states."
                badges={[
                  "Advanced Techniques",
                  "Yoga Nidra",
                  "Chakra Dhyana",
                  "Transcendental States",
                ]}
                link={{ href: "#", label: "Learn More About This Module" }}
                variant="dark-red"
              />
            </section>

            {/* Module 7: Mantra Sadhana */}
            <section id="mantra">
              <ModuleCard
                icon="🔮"
                title="Mantra Sadhana by Birth Chart Analysis"
                description="Our Mantra Sadhana Course through Birth Chart analysis teaches how to select the right mantra based on one's planetary positions and energy patterns. Students learn how specific mantras strengthen weak planets, balance energies, and support mental and spiritual growth."
                badges={[
                  "Birth Chart Analysis",
                  "Planetary Mantras",
                  "Energy Balancing",
                  "Personalized Practice",
                  "Spiritual Growth",
                ]}
                link={{ href: "#", label: "Learn More About This Module" }}
                advanced={true}
                advancedText="🌟 Exclusive to 500 Hours: Personalized Mantra Selection through Vedic Astrology"
                variant="dark-red"
              />
            </section>

            {/* Module 8: Naturopathy */}
            <section id="naturopathy">
              <ModuleCard
                icon="🌿"
                title="Naturopathy & Holistic Healing"
                description="Our Naturopathy Course covers a wide range of natural healing methods designed to restore balance and support long-term wellness. Students learn major branches of naturopathy such as diet therapy, herbal therapy, hydrotherapy, mud therapy, massage therapy, fasting therapy, yogic therapy, and acupressure."
                badges={[
                  "Diet Therapy",
                  "Herbal Medicine",
                  "Hydrotherapy",
                  "Mud Therapy",
                  "Massage Therapy",
                  "Fasting Protocols",
                  "Acupressure",
                  "Detoxification",
                ]}
                link={{ href: "#", label: "Learn More About This Module" }}
                advanced={true}
                advancedText="🌟 Exclusive to 500 Hours: Complete Natural Healing System"
                variant="dark-red"
              />
            </section>

            {/* Theory Section */}
            <section id="theory">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-3xl font-bold text-gray-800 mb-4">
                  Theory & Philosophy (Advanced)
                </h2>
                <p className="text-lg text-gray-600">
                  Deep scholarly study of yoga's philosophical, anatomical, and historical foundations
                </p>
              </div>
              <TheoryCards cards={theoryCards} variant="dark-red" />
            </section>

            {/* CTA Section */}
            <section id="enroll">
              <CTASection
                title="Ready to Master Advanced Yoga?"
                description="Join our next 500 Hours Advanced Training and become a master yoga teacher"
                buttons={ctaButtons}
                variant="dark-red"
                backgroundEmoji="🧘"
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
              variant="dark-red"
            />
          </div>
        </div>
      </div>
    </div>
  );
}