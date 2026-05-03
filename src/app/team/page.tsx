import React from "react";
import { Breadcrumb } from "@/components/jivan/Breadcrumb";
import { PageHero } from "@/components/jivan/PageHero";
import { TeamGrid } from "@/components/jivan/team/TeamGrid";
import { CTASection } from "@/components/jivan/yoga/CTASection";
import { TeamSectionHeader } from "./TeamSectionHeader";
import { link } from "fs";

export const metadata = {
  title: "Our Team - Jivan Parivartan",
  description: "Meet the dedicated team behind Jivan Parivartan Holistic Wellness Center",
};

export default function TeamPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Our Team" },
  ];

  const heroStats = [
    { number: "5+", label: "Team Members" },
    { number: "20+", label: "Years Experience" },
    { number: "Certified", label: "Instructors" },
    { number: "Holistic", label: "Approach" },
  ];

  const heroCTAs = [
    { label: "Contact Us", href: "/contact", primary: true },
    { label: "View Programs", href: "/yoga" },
  ];

  // Core Team
  const coreTeam = [
    {
      name: "Maa Nisha Kabir",
      link: "/team/maa-nisha",
      role: "Founder & Lead Instructor",
      bio: "With over 15 years of experience in traditional yoga and holistic healing, Nisha Maa is the visionary founder of Jivan Parivartan. Her deep understanding of Ashtanga Mahayoga, Pranayama, and spiritual practices guides our entire wellness philosophy.",
      image: "/img/team/nisha-maa.JPG",
      specialties: ["Ashtanga Yoga", "Meditation", "Spiritual Guidance", "Pranayama"],
      contact: {
        email: "nisha@jivanparivartan.com",
      },
    },
    {
      name: "Swami Anish",
      link: "/team/anish",
      role: "Co-Founder & Operations Lead",
      bio: "Swami Anish brings extensive experience in wellness center management and yoga program development. His vision for integrating traditional practices with modern methodologies has shaped Jivan Parivartan into a world-class training center.",
      image: "/img/team/anish.jpg",
      specialties: ["Center Management", "Program Development", "Student Guidance", "Yoga Philosophy"],
      contact: {
        email: "anish@jivanparivartan.com",
      },
    },
  ];

  // Yoga Instructors
  const yogaInstructors = [
    {
      name: "Yogi Awdaitmani",
      link: "/team/awdaitmani",
      role: "Senior Yoga Instructor",
      bio: "Mani is a certified yoga instructor specializing in Hatha Yoga and advanced asana practice. With a gentle yet disciplined teaching style, Mani helps students of all levels deepen their practice safely and effectively.",
      image: "/img/team/yogi-awdaitmani.jpg",
      specialties: ["Hatha Yoga", "Asana Alignment", "Beginner Training", "Therapeutic Yoga"],
      contact: {
        email: "mani@jivanparivartan.com",
      },
    },
    {
      name: "Anupam Chidananda",
      link: "/team/anupam",
      role: "Yoga Instructor & Meditation Guide",
      bio: "Anupam Raj brings years of experience in teaching meditation, mudra practices, and yogic philosophy. His classes focus on inner transformation and spiritual awakening through traditional techniques.",
      image: "/img/team/anupam.jpg",
      specialties: ["Meditation", "Mudra Practice", "Yoga Philosophy", "Mantra Sadhana"],
      contact: {
        email: "anupam@jivanparivartan.com",
      },
    },
  ];

  // Technical Team
  const technicalTeam = [
    {
      name: "Roshan",
      role: "Technical & Digital Manager",
      bio: "Roshan manages our digital presence, online booking systems, and ensures smooth technical operations. He bridges traditional wellness practices with modern technology to enhance student experience.",
      image: "/img/team/roshan.jpg",
      specialties: ["Web Development", "Digital Systems", "Online Scheduling", "Technical Support"],
      contact: {
        email: "roshan@jivanparivartan.com",
      },
    },
  ];

  const ctaButtons = [
    { icon: "📞", label: "Contact Us", href: "/contact" },
    { icon: "📅", label: "Book a Session", href: "/contact#enroll" },
  ];

  return (
    <div className="min-h-screen bg-[#faf6f1] bg-[url('/img/design/color-page.jpg')] bg-repeat bg-center">
      <Breadcrumb items={breadcrumbItems} />

      <PageHero
        badge={{ icon: "👥", text: "Meet Our Team" }}
        title="Dedicated to Your Wellness Journey"
        subtitle="Meet the experienced professionals guiding you toward holistic health and inner transformation"
        stats={heroStats}
        ctas={heroCTAs}
        variant="green"
        backgroundImage="/img/team-hero.jpg"
      />

      <div className="max-w-[1400px] mx-auto px-5 py-16 space-y-20">
        {/* Core Team Section */}
        <section>
          <TeamSectionHeader
            title="Core Leadership"
            description="Visionary founders committed to bringing authentic yoga and holistic wellness to every student"
            variant="green"
          />
          <TeamGrid members={coreTeam} variant="green" columns={2} />
        </section>

        {/* Yoga Instructors Section */}
        <section>
          <TeamSectionHeader
            title="Yoga Instructors"
            description="Expert teachers guiding your practice with traditional wisdom and modern techniques"
            variant="green"
          />
          <TeamGrid members={yogaInstructors} variant="green" columns={2} />
        </section>

        {/* Technical Team Section */}
        <section>
          <TeamSectionHeader
            title="Technical Support"
            description="Behind-the-scenes expertise ensuring seamless experiences"
            variant="green"
          />
          <TeamGrid members={technicalTeam} variant="green" columns={1} />
        </section>

        {/* CTA Section */}
        <CTASection
          title="Ready to Start Your Wellness Journey?"
          description="Connect with our team and discover the transformative power of traditional yoga"
          buttons={ctaButtons}
          variant="green"
          backgroundEmoji="🕉️"
        />
      </div>
    </div>
  );
}
