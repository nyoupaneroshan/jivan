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
 
export default function Yoga200HoursPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Yoga", href: "/yoga" },
    { label: "200 Hours Teacher Training" },
  ];

  const heroStats = [
    { number: "100+", label: "Asanas" },
    { number: "8 Weeks", label: "Duration" },
    { number: "200", label: "Hours Training" },
    { number: "All Levels", label: "Welcome" },
  ];

  const heroCTAs = [
    { label: "Enroll Now", href: "#enroll", primary: true },
    { label: "View Curriculum", href: "#overview" },
  ];

  const quickNavItems = [
    { id: "overview", icon: "📋", label: "Overview", href: "#overview" },
    { id: "ashtanga", icon: "🧘", label: "Ashtanga Mahayoga", href: "#ashtanga" },
    { id: "hatha", icon: "🕉️", label: "Hatha Yoga", href: "#hatha" },
    { id: "pranayam", icon: "🌬️", label: "Pranayam", href: "#pranayam" },
    { id: "mudra", icon: "🙏", label: "Mudra Meditation", href: "#mudra" },
    { id: "meditation", icon: "🧘‍♀️", label: "Meditation", href: "#meditation" },
    { id: "theory", icon: "📚", label: "Theory", href: "#theory" },
    { id: "enroll", icon: "✏️", label: "Enroll Now", href: "#enroll" },
  ];

  const introParagraphs = [
    "Our comprehensive 200 Hours Yoga Teacher Training is designed to provide you with a deep understanding of yoga philosophy, practice, and teaching methodology. This immersive program covers traditional Ashtanga Mahayoga, Hatha Yoga, Pranayama, Meditation, and the spiritual aspects of yoga, preparing you to become a confident and knowledgeable yoga teacher.",
  ];

  const theoryCards = [
    {
      icon: "📜",
      title: "History of Yoga",
      description:
        "Explore the ancient origins and evolution of yoga through the ages, from Vedic times to modern practice.",
      link: { href: "#", label: "Read More" },
    },
    {
      icon: "🕉️",
      title: "Ashtanga Maha Yoga",
      description:
        "Study the eight-limbed path of Patanjali's Yoga Sutras and its application in daily life.",
      link: { href: "#", label: "Read More" },
    },
    {
      icon: "🧬",
      title: "Yoga Anatomy",
      description:
        "Understand the physiological and anatomical aspects of yoga with expert guidance from Dr. [Name].",
      link: { href: "#", label: "Read More" },
    },
  ];

  const ctaButtons = [
    { icon: "📥", label: "Download Brochure", href: "#" },
    { icon: "✏️", label: "Apply Now", href: "#" },
  ];

  const priceInfo = {
    label: "Starting From",
    amount: "$1,400",
    duration: "8 Weeks Program",
    includes: [
      "Accommodation Included",
      "Vegetarian Meals",
      "Study Materials",
      "Certification",
    ],
  };

  const batches = generateUpcomingBatches({
  intervalMonths: 3,
  totalBatches: 3,
  batchDay: 5,
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
        badge={{ icon: "🏆", text: "Yoga Alliance Certified Program" }}
        title="200 Hours Yoga Teacher Training"
        subtitle="Transform Your Practice Into Your Profession"
        stats={heroStats}
        ctas={heroCTAs}
        variant="green"
        backgroundImage="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1920"
      />

      <QuickNavigation items={quickNavItems} variant="red" />

      <div className="max-w-[1400px] mx-auto px-5 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12">
          {/* Main Content */}
          <div>
            <section id="overview">
              <IntroSection
                title="Program Overview"
                paragraphs={introParagraphs}
                variant="green"
              />
            </section>

            {/* Module 1: Ashtanga Mahayoga */}
            <section id="ashtanga">
              <ModuleCard
                icon="🧘"
                title="Ashtanga Mahayoga (Maharshi Patanjali)"
                description="Our Ashtanga Mahayoga training offers a complete journey through more than 100 traditional Āsanas with proper technique and breath awareness. Each Āsana is taught with correct alignment, drishti, bandhas, and breath control. The training also integrates prāṇāyāma, mantra, meditation, and spiritual techniques that purify the mind and awaken inner awareness."
                badges={[
                  "100+ Traditional Āsanas",
                  "Breath Awareness",
                  "Bandhas & Drishti",
                  "Spiritual Growth",
                ]}
                link={{
                  href: "#",
                  label: "Learn More About This Module",
                }}
                defaultExpanded={true}
                variant="red"
              >
                <div className="my-6 space-y-4">
                  <div className="relative pl-20 pb-6 border-l-4 border-[#C41E3A] ml-8">
                    <div className="absolute left-[-13px] top-1 w-6 h-6 bg-[#C41E3A] rounded-full border-4 border-white shadow-lg" />
                    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
                      <h4 className="text-lg font-bold text-gray-800 mb-2 flex items-center gap-2">
                        Surya Namaskar A{" "}
                        <span className="inline-block bg-gradient-to-br from-[#C41E3A] to-[#8B0000] text-white px-3 py-1 rounded-full text-xs font-semibold">
                          12 Āsanas
                        </span>
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Traditional sun salutation sequence building heat and energy
                      </p>
                    </div>
                  </div>

                  <div className="relative pl-20 pb-6 border-l-4 border-[#C41E3A] ml-8">
                    <div className="absolute left-[-13px] top-1 w-6 h-6 bg-[#C41E3A] rounded-full border-4 border-white shadow-lg" />
                    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
                      <h4 className="text-lg font-bold text-gray-800 mb-2 flex items-center gap-2">
                        Surya Namaskar B{" "}
                        <span className="inline-block bg-gradient-to-br from-[#C41E3A] to-[#8B0000] text-white px-3 py-1 rounded-full text-xs font-semibold">
                          20 Āsanas
                        </span>
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Advanced sun salutation with warrior poses
                      </p>
                    </div>
                  </div>

                  <div className="relative pl-20 pb-6 border-l-4 border-[#C41E3A] ml-8">
                    <div className="absolute left-[-13px] top-1 w-6 h-6 bg-[#C41E3A] rounded-full border-4 border-white shadow-lg" />
                    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
                      <h4 className="text-lg font-bold text-gray-800 mb-2 flex items-center gap-2">
                        Standing Sequence{" "}
                        <span className="inline-block bg-gradient-to-br from-[#C41E3A] to-[#8B0000] text-white px-3 py-1 rounded-full text-xs font-semibold">
                          20 Postures
                        </span>
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Grounding postures for strength and stability
                      </p>
                    </div>
                  </div>

                  <div className="relative pl-20 pb-6 border-l-4 border-[#C41E3A] ml-8">
                    <div className="absolute left-[-13px] top-1 w-6 h-6 bg-[#C41E3A] rounded-full border-4 border-white shadow-lg" />
                    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
                      <h4 className="text-lg font-bold text-gray-800 mb-2 flex items-center gap-2">
                        Sitting Sequence{" "}
                        <span className="inline-block bg-gradient-to-br from-[#C41E3A] to-[#8B0000] text-white px-3 py-1 rounded-full text-xs font-semibold">
                          30 Postures
                        </span>
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Flexibility-enhancing and hip-opening postures
                      </p>
                    </div>
                  </div>

                  <div className="relative pl-20 pb-6 border-l-4 border-[#C41E3A] ml-8">
                    <div className="absolute left-[-13px] top-1 w-6 h-6 bg-[#C41E3A] rounded-full border-4 border-white shadow-lg" />
                    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
                      <h4 className="text-lg font-bold text-gray-800 mb-2 flex items-center gap-2">
                        Closing Sequence{" "}
                        <span className="inline-block bg-gradient-to-br from-[#C41E3A] to-[#8B0000] text-white px-3 py-1 rounded-full text-xs font-semibold">
                          10 Āsanas
                        </span>
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Calming poses to prepare for meditation
                      </p>
                    </div>
                  </div>

                  <div className="relative pl-20 ml-8">
                    <div className="absolute left-[-13px] top-1 w-6 h-6 bg-[#C41E3A] rounded-full border-4 border-white shadow-lg" />
                    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
                      <h4 className="text-lg font-bold text-gray-800 mb-2 flex items-center gap-2">
                        Finishing Sequence{" "}
                        <span className="inline-block bg-gradient-to-br from-[#C41E3A] to-[#8B0000] text-white px-3 py-1 rounded-full text-xs font-semibold">
                          8 Āsanas
                        </span>
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Final relaxation and integration poses
                      </p>
                    </div>
                  </div>
                </div>
              </ModuleCard>
            </section>

            {/* Module 2: Hatha Yoga */}
            <section id="hatha">
              <ModuleCard
                icon="🕉️"
                title="Hatha Yoga"
                description="Our Hatha Yoga program explores 100 classical Āsanas designed to balance strength, flexibility, breath, and inner awareness. The practice is structured to gently open the body, beginning with foundational warm-up postures and gradually moving into standing, sitting, twisting, backbending, forward-bending, inverted, and restorative Āsanas."
                badges={[
                  "100 Classical Āsanas",
                  "Prāṇāyāma Integration",
                  "Mudras & Bandhas",
                  "Chakra Balancing",
                ]}
                link={{
                  href: "#",
                  label: "Learn More About This Module",
                }}
                variant="red"
              />
            </section>

            {/* Module 3: Pranayam */}
            <section id="pranayam">
              <ModuleCard
                icon="🌬️"
                title="Pranayam (Breath Control)"
                description="Pranayama is the yogic science of breath control that harmonizes the body, mind, and spirit. Master powerful techniques that cleanse energy channels, enhance vitality, and awaken spiritual awareness."
                badges={[
                  "Anulom Vilom",
                  "Bhastrika",
                  "Kapalbhati",
                  "Bhramari",
                  "Ujjayi",
                ]}
                link={{
                  href: "#",
                  label: "Learn More About This Module",
                }}
                variant="red"
              />
            </section>

            {/* Module 4: Mudra Meditation */}
            <section id="mudra">
              <ModuleCard
                icon="🙏"
                title="Mudra Meditation"
                description="Our Mudra Meditation Course teaches a wide range of traditional mudras that balance energy, calm the mind, and deepen spiritual awareness. Through simple hand gestures combined with guided breathing and meditation, students learn to activate prāṇa, focus the mind, and connect with the subconscious."
                badges={[
                  "Energy Activation",
                  "Chakra Connection",
                  "Mental Clarity",
                  "Emotional Healing",
                ]}
                link={{
                  href: "#",
                  label: "Learn More About This Module",
                }}
                variant="red"
              />
            </section>

            {/* Module 5: Meditation Technique */}
            <section id="meditation">
              <ModuleCard
                icon="🧘‍♀️"
                title="Meditation Technique"
                description="Our Meditation Technique Course offers a variety of powerful methods designed to help students reach inner peace and deep mental clarity. Through breath awareness, mantra chanting, mindful silence, visualization, and subconscious-healing practices, participants learn to calm the mind and awaken inner stillness."
                badges={[
                  "Breath Awareness",
                  "Mantra Chanting",
                  "Visualization",
                  "Mindfulness",
                ]}
                link={{
                  href: "#",
                  label: "Learn More About This Module",
                }}
                variant="red"
              />
            </section>

            {/* Theory Section */}
            <section id="theory">
              <TheoryCards cards={theoryCards} variant="red" />
            </section>

            {/* CTA Section */}
            <section id="enroll">
              <CTASection
                title="Ready to Begin Your Journey?"
                description="Join our next batch and transform your life through the ancient science of yoga"
                buttons={ctaButtons}
                variant="red"
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
              variant="red"
            />
          </div>
        </div>
      </div>
    </div>
  );
}