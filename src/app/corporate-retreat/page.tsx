"use client";

import React from "react";
import Link from "next/link";
import { Breadcrumb } from "@/components/jivan/Breadcrumb";
import { PageHero } from "@/components/jivan/PageHero";
import { QuickNavigation } from "@/components/jivan/QuickNavigation";
import { SidebarWidget } from "@/components/jivan/SidebarWidget";

export default function CorporateRetreatPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Meditation & Retreats", href: "/meditation" },
    { label: "Corporate Wellness Retreat" },
  ];

  const quickNavItems = [
    { id: "overview", icon: "📋", label: "Overview", href: "#overview" },
    { id: "components", icon: "🎯", label: "Key Components", href: "#components" },
    { id: "facilitators", icon: "👥", label: "Facilitators", href: "#facilitators" },
    { id: "benefits", icon: "✓", label: "Benefits", href: "#benefits" },
    { id: "contact", icon: "📞", label: "Contact", href: "#contact" },
  ];

  const heroStats = [
    { number: "Custom", label: "Duration" },
    { number: "On-site", label: "Available" },
    { number: "All", label: "Team Sizes" },
    { number: "Flexible", label: "Schedule" },
  ];

  const heroCTAs = [
    { label: "View Program", href: "#components", primary: true },
    { label: "Enquire Now", href: "#contact" },
  ];

  const programComponents = [
    {
      title: "Stress Management and Mental Relaxation",
      description:
        "Guided techniques specifically designed to release work-related stress and mental pressure. These sessions help employees understand the sources of their stress and provide practical tools for managing daily workplace challenges. Through proven relaxation methods, participants learn to identify tension patterns and develop healthy coping mechanisms that can be applied immediately in their professional environment.",
    },
    {
      title: "Yoga Sessions",
      description:
        "Led by Yogi Adwaitmani and Yogi Anupam Chidananda, these sessions feature simple yet powerful yoga practices focused on improving physical health, flexibility, posture, and energy levels. The practices are carefully designed to be suitable for all age groups and fitness levels, ensuring that every employee can participate comfortably regardless of their previous experience with yoga. The sessions emphasize workplace-relevant benefits such as improved stamina, reduced physical tension from desk work, and enhanced overall vitality.",
    },
    {
      title: "Meditation Practices",
      description:
        "Conducted by Maa Nisha Kabir, these deep and guided meditation sessions are designed to enhance focus, mental clarity, emotional stability, and inner awareness. The practices teach employees how to cultivate a calm and centered state of mind that supports better decision-making, improved concentration, and emotional resilience. Participants learn meditation techniques that can be easily integrated into their daily routines, helping them maintain mental balance even during high-pressure situations at work.",
    },
    {
      title: "Sound Healing Therapy",
      description:
        "Facilitated by Anish Swami, these therapeutic sessions use traditional Himalayan singing bowls to create healing sound vibrations. The sound healing is designed to calm the nervous system, release deep-seated tension, and restore inner harmony. This ancient practice has been shown to reduce anxiety, improve sleep quality, and promote overall well-being. The deeply relaxing nature of sound therapy helps employees access profound states of rest and rejuvenation.",
    },
    {
      title: "Spiritual Guidance",
      description:
        "Sessions conducted by Maa Nisha Kabir and her experienced team focus on inner awareness, self-healing, emotional well-being, and positive life transformation. These sessions provide employees with insights into their inner landscape, helping them develop greater self-understanding and emotional intelligence. The guidance supports personal growth, helps resolve internal conflicts, and cultivates a more positive and purposeful approach to both work and life.",
    },
  ];

  const facilitators = [
    {
      name: "Yogi Adwaitmani",
      role: "Yoga Instructor",
      expertise: "Physical wellness, flexibility, and energy enhancement through yoga practices",
    },
    {
      name: "Yogi Anupam Chidananda",
      role: "Yoga Instructor",
      expertise: "Holistic yoga practices suitable for all fitness levels and age groups",
    },
    {
      name: "Maa Nisha Kabir",
      role: "Meditation Guide & Spiritual Teacher",
      expertise: "Deep meditation, spiritual guidance, and emotional well-being practices",
    },
    {
      name: "Anish Swami",
      role: "Sound Healing Therapist",
      expertise: "Traditional Himalayan singing bowl therapy and nervous system healing",
    },
  ];

  const benefits = [
    {
      category: "Mental Well-being",
      points: [
        "Significant reduction in work-related stress and mental fatigue",
        "Enhanced mental clarity and improved decision-making abilities",
        "Better emotional stability and resilience in challenging situations",
        "Increased focus and concentration during work hours",
      ],
    },
    {
      category: "Physical Health",
      points: [
        "Improved flexibility, posture, and physical energy levels",
        "Reduced physical tension from prolonged desk work",
        "Better overall vitality and stamina throughout the workday",
        "Enhanced awareness of body and physical well-being",
      ],
    },
    {
      category: "Professional Performance",
      points: [
        "Renewed motivation and positive approach to work challenges",
        "Improved productivity and work efficiency",
        "Better teamwork and interpersonal relationships",
        "Enhanced creativity and problem-solving capabilities",
      ],
    },
    {
      category: "Organizational Impact",
      points: [
        "Healthier and more positive organizational culture",
        "Reduced employee burnout and absenteeism",
        "Improved employee satisfaction and retention",
        "Stronger sense of community and team cohesion",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#f5f0e8] bg-[url('/img/design/color-page.jpg')] bg-repeat bg-center">
      <Breadcrumb items={breadcrumbItems} />

      <PageHero
        badge={{ icon: "", text: "Workplace Wellness Program" }}
        title="Corporate Wellness Retreat"
        subtitle="Structured retreat programs designed to refresh your workforce, enhance work efficiency, and promote emotional balance in today's fast-paced corporate environment"
        stats={heroStats}
        ctas={heroCTAs}
        variant="green"
        backgroundImage="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920"
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
                    In today's fast-paced corporate environment, employees often face high levels of
                    stress, mental fatigue, and burnout, which can impact both personal well-being
                    and professional performance. Understanding this need, Jivan Paribartan offers a
                    structured retreat program aimed at refreshing workers, enhancing work
                    efficiency, and promoting emotional balance.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4 text-justify">
                    The primary purpose of this program is to help employees rejuvenate mentally and
                    physically, improve concentration, build resilience, and return to work with
                    renewed motivation and positivity. A balanced and relaxed workforce ultimately
                    contributes to higher productivity, better teamwork, and a healthier
                    organizational culture.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-justify">
                    We would be honored to collaborate with your organization in organizing this
                    wellness retreat at a mutually convenient time and location. The program can be
                    customized according to your company's requirements and duration preferences,
                    ensuring maximum benefit for your team while aligning with your organizational
                    schedule and objectives.
                  </p>
                </div>
              </div>
            </section>

            {/* Key Components Section */}
            <section id="components" className="mb-12">
              <div className="bg-white rounded-xl p-8 sm:p-10 shadow-lg">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b pb-4">
                  Key Program Components
                </h2>
                <div className="space-y-8">
                  {programComponents.map((component, index) => (
                    <div key={index} className="border-l-4 border-green-600 pl-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {component.title}
                      </h3>
                      <p className="text-gray-700 leading-relaxed text-justify">{component.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Facilitators Section */}
            <section id="facilitators" className="mb-12">
              <div className="bg-white rounded-xl p-8 sm:p-10 shadow-lg">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b pb-4">
                  Expert Facilitators
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6 text-justify">
                  Our corporate retreat program is led by a team of highly experienced and dedicated
                  practitioners, each bringing their unique expertise to create a comprehensive
                  wellness experience for your employees.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {facilitators.map((facilitator, index) => (
                    <div
                      key={index}
                      className="bg-gradient-to-br from-green-50 to-white border border-green-100 rounded-lg p-6"
                    >
                      <h3 className="text-lg font-bold text-gray-900 mb-2">
                        {facilitator.name}
                      </h3>
                      <p className="text-green-700 font-semibold mb-3">{facilitator.role}</p>
                      <p className="text-sm text-gray-600 text-justify">{facilitator.expertise}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Benefits Section */}
            <section id="benefits" className="mb-12">
              <div className="bg-white rounded-xl p-8 sm:p-10 shadow-lg">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b pb-4">
                  Program Benefits
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6 text-justify">
                  Our corporate wellness retreat delivers comprehensive benefits that positively
                  impact individual employees, team dynamics, and overall organizational success.
                </p>
                <div className="space-y-8">
                  {benefits.map((benefit, index) => (
                    <div key={index}>
                      <h3 className="text-xl font-bold text-green-700 mb-4">
                        {benefit.category}
                      </h3>
                      <ul className="space-y-3">
                        {benefit.points.map((point, pointIndex) => (
                          <li key={pointIndex} className="flex items-start gap-3">
                            <span className="text-green-600 font-bold text-lg mt-0.5 flex-shrink-0">✓</span>
                            <span className="text-gray-700 text-justify">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Customization Section */}
            <section className="mb-12">
              <div className="bg-white rounded-xl p-8 sm:p-10 shadow-lg">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b pb-4">
                  Flexible and Customizable
                </h2>
                <div className="prose max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-4 text-justify">
                    We understand that every organization has unique needs, schedules, and
                    objectives. Our corporate wellness retreat program is designed to be fully
                    flexible and can be customized according to your specific requirements.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                      <h3 className="font-bold text-gray-900 mb-3">Program Duration</h3>
                      <p className="text-sm text-gray-700 text-justify">
                        Choose from half-day sessions to multi-day retreats based on your
                        organization's schedule and objectives. We can design programs ranging from
                        intensive one-day experiences to comprehensive multi-day transformations.
                      </p>
                    </div>
                    <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                      <h3 className="font-bold text-gray-900 mb-3">Location Options</h3>
                      <p className="text-sm text-gray-700 text-justify">
                        We offer both on-site programs at your company premises and off-site
                        retreats at carefully selected peaceful venues. The choice depends on your
                        preference and the experience you wish to create for your team.
                      </p>
                    </div>
                    <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                      <h3 className="font-bold text-gray-900 mb-3">Group Size</h3>
                      <p className="text-sm text-gray-700 text-justify">
                        Our program can accommodate groups of various sizes, from small department
                        teams to large company-wide events. We ensure that every participant
                        receives adequate attention and support regardless of group size.
                      </p>
                    </div>
                    <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                      <h3 className="font-bold text-gray-900 mb-3">Content Focus</h3>
                      <p className="text-sm text-gray-700 text-justify">
                        Emphasize specific components based on your team's needs. Whether you want
                        to focus more on stress management, physical wellness, meditation, or team
                        building, we can adjust the program accordingly.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <section id="contact" className="bg-gradient-to-br from-green-600 to-green-800 rounded-xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">
                Ready to Transform Your Workplace Culture?
              </h3>
              <p className="text-lg mb-6 opacity-90 text-justify">
                Thank you for considering our proposal. We look forward to the opportunity to
                contribute to the well-being and success of your workforce. Contact us today to
                discuss how we can design a customized wellness retreat for your organization.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-white text-green-700 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors"
                >
                  Contact Us
                </Link>
                <a
                  href="tel:+9779818514837"
                  className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white/10 transition-colors"
                >
                  Call Now
                </a>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div>
            <SidebarWidget
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
