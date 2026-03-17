import React from "react";
import { Breadcrumb } from "@/components/jivan/Breadcrumb";
import { PageHero } from "@/components/jivan/PageHero";
import { IntroSection } from "@/components/jivan/yoga/IntroSection";
import { ProgramComparison } from "@/components/jivan/yoga/ProgramComparison";
import { BenefitsGrid } from "@/components/jivan/yoga/BenefitsGrid";
import { CurriculumGrid } from "@/components/jivan/yoga/CurriculumGrid";
import { CTASection } from "@/components/jivan/yoga/CTASection";
import { QuickNavigation } from "@/components/jivan/QuickNavigation";

export default function YogaPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Yoga Teacher Training" },
  ];

  const quickNavItems = [
    { id: "overview", icon: "", label: "Overview", href: "#overview" },
    { id: "programs", icon: "", label: "Programs", href: "#programs" },
    { id: "benefits", icon: "", label: "Benefits", href: "#benefits" },
    { id: "curriculum", icon: "", label: "Curriculum", href: "#curriculum" },
    { id: "contact", icon: "", label: "Enroll", href: "#contact" },
  ];

  const heroStats = [
    { number: "200/500", label: "Hour Programs" },
    { number: "Certified", label: "Instructors" },
    { number: "Traditional", label: "Methodology" },
    { number: "Himalayan", label: "Setting" },
  ];

  const heroCTAs = [
    { label: "View Programs", href: "#programs", primary: true },
    { label: "Enroll Now", href: "/contact" },
  ];

  const introParagraphs = [
    "Embark on a life-changing journey in the birthplace of yoga. Our Yoga Teacher Training programs in Nepal offer authentic teachings rooted in ancient wisdom, combined with modern pedagogical approaches. Learn from experienced masters in a serene Himalayan setting that has inspired yogis for millennia.",
    "Whether you're beginning your teaching journey with our 200-hour foundation program or deepening your practice with our advanced 500-hour training, you'll gain comprehensive knowledge of asanas, pranayama, meditation, philosophy, anatomy, and teaching methodology. Graduate as a confident, skilled teacher ready to share the gift of yoga with the world.",
  ];

  const programs = [
    {
      badge: "Foundation",
      title: "200 Hour Yoga Teacher Training",
      duration: "Duration: 4 Weeks Intensive",
      description:
        "Perfect for beginners and dedicated practitioners wanting to deepen their practice and begin teaching. This foundational program covers all essential aspects of yoga teaching according to traditional Yogic principles.",
      highlights: [
        "Ashtang Mahayoga (Maharshi Patanjali)",
        "Hatha Yoga - Traditional Asanas",
        "Pranayam - Breath Control Techniques",
        "Mudra Meditation Practices",
        "Multiple Meditation Techniques",
        "History & Philosophy of Yoga",
        "Yoga Anatomy by Medical Doctor",
        "Teaching Methodology",
        "Certificate Upon Completion",
      ],
      link: {
        href: "/yoga/200hrs-teacher-training",
        label: "View 200 Hour Details",
      },
    },
    {
      badge: "Advanced",
      title: "500 Hour Yoga Teacher Training",
      duration: "Duration: 8 Weeks Comprehensive",
      description:
        "Advanced training for experienced practitioners and teachers. Dive deeper into yogic wisdom, master advanced techniques, and develop expertise in specialized areas including Ayurveda and Naturopathy.",
      highlights: [
        "Classical Surya & Chandra Namaskar",
        "Advanced Ashtang Mahayoga",
        "Advanced Hatha Yoga Techniques",
        "Comprehensive Pranayam Mastery",
        "Advanced Meditation & Mudra",
        "In-Depth Philosophy & Scriptures",
        "Advanced Anatomy & Physiology",
        "Mantra Sadhana & Birth Chart Analysis",
        "Naturopathy & Natural Healing",
        "Advanced Teaching Methods",
        "Professional Certification",
      ],
      link: {
        href: "/yoga/500hrs-teacher-training",
        label: "View 500 Hour Details",
      },
    },
  ];

  const benefits = [
    {
      icon: "",
      title: "Himalayan Setting",
      description:
        "Practice in the spiritual energy of the Himalayas, where ancient yogis discovered these sacred teachings.",
    },
    {
      icon: "",
      title: "Expert Teachers",
      description:
        "Learn from certified masters with decades of experience in traditional yoga and modern teaching methods.",
    },
    {
      icon: "",
      title: "Traditional Wisdom",
      description:
        "Study authentic yoga philosophy directly from ancient texts like Yoga Sutras and Bhagavad Gita.",
    },
    {
      icon: "",
      title: "International Certification",
      description:
        "Receive globally recognized certification upon completion, enabling you to teach worldwide.",
    },
    {
      icon: "",
      title: "Holistic Approach",
      description:
        "Integrate physical practice with meditation, philosophy, anatomy, and spiritual development.",
    },
    {
      icon: "",
      title: "Small Class Sizes",
      description:
        "Personal attention with limited students per batch ensures individual guidance and support.",
    },
  ];

  const curriculumItems = [
    {
      icon: "",
      title: "Asana Practice",
      topics: [
        "Ashtang Mahayoga sequences",
        "Traditional Hatha Yoga postures",
        "Surya & Chandra Namaskar variations",
        "Alignment principles and adjustments",
        "Modifications for different levels",
      ],
    },
    {
      icon: "",
      title: "Pranayama",
      topics: [
        "Fundamental breathing techniques",
        "Advanced breath control practices",
        "Energy management through breath",
        "Therapeutic applications",
        "Integration with asana practice",
      ],
    },
    {
      icon: "",
      title: "Meditation & Mudra",
      topics: [
        "Various meditation techniques",
        "Mudra and their benefits",
        "Concentration practices (Dharana)",
        "Mindfulness training",
        "Spiritual development practices",
      ],
    },
    {
      icon: "",
      title: "Philosophy & History",
      topics: [
        "Yoga Sutras of Patanjali",
        "Bhagavad Gita teachings",
        "Eight limbs of Yoga (Ashtanga)",
        "History and evolution of Yoga",
        "Yogic lifestyle and ethics",
      ],
    },
    {
      icon: "",
      title: "Anatomy & Physiology",
      topics: [
        "Musculoskeletal system",
        "Effects of yoga on body systems",
        "Common injuries and prevention",
        "Anatomical alignment",
        "Therapeutic applications",
      ],
    },
    {
      icon: "",
      title: "Teaching Methodology",
      topics: [
        "Class planning and sequencing",
        "Verbal and physical adjustments",
        "Working with different students",
        "Creating safe environments",
        "Professional ethics and business",
      ],
    },
  ];

  const ctaButtons = [
    { icon: "", label: "200 Hour Program", href: "/yoga/200hrs-teacher-training" },
    { icon: "", label: "500 Hour Program", href: "/yoga/500hrs-teacher-training" },
    { icon: "", label: "Contact Us", href: "/contact" },
  ];

  return (
    <div className="min-h-screen bg-[#faf6f1] bg-[url('/img/design/color-page.jpg')] bg-repeat bg-center">
      <Breadcrumb items={breadcrumbItems} />

      <PageHero
        badge={{ icon: "", text: "Certified Training" }}
        title="Yoga Teacher Training in Nepal"
        subtitle="Transform Your Life & Inspire Others - Traditional Yoga in the Himalayas"
        stats={heroStats}
        ctas={heroCTAs}
        variant="green"
        backgroundImage="/img/yoga-hero.jpg"
      />

      <QuickNavigation items={quickNavItems} variant="green" />

      <div className="max-w-[1400px] mx-auto px-5 py-16">
        <section id="overview">
          <IntroSection
            title="Begin Your Journey as a Certified Yoga Teacher"
            paragraphs={introParagraphs}
            variant="green"
          />
        </section>

        <section id="programs">
          <ProgramComparison programs={programs} variant="green" />
        </section>

        <section id="benefits">
          <BenefitsGrid benefits={benefits} />
        </section>

        <section id="curriculum">
          <CurriculumGrid items={curriculumItems} />
        </section>

        <section id="contact">
          <CTASection
            title="Start Your Yoga Teaching Journey Today"
            description="Join our next training batch and transform your life through yoga"
            buttons={ctaButtons}
            variant="green"
            backgroundEmoji=""
          />
        </section>
      </div>
    </div>
  );
}
