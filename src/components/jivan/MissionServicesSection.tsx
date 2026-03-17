"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export function MissionServices() {
  const missionGoals = [
    {
      id: 1,
      icon: "🌿",
      title: "Facilitate Healing",
      description: "Guide individuals toward physical, emotional, and spiritual wellness",
    },
    {
      id: 2,
      icon: "✨",
      title: "Empower Growth",
      description: "Foster self-awareness and personal transformation",
    },
    {
      id: 3,
      icon: "🧘",
      title: "Promote Holistic Well-being",
      description: "Integrate mind, body, and spirit for complete health",
    },
    {
      id: 4,
      icon: "🤝",
      title: "Cultivate Community",
      description: "Create supportive spaces for shared healing journeys",
    },
  ];

  const services = [
    {
      id: 1,
      icon: "⚡",
      title: "Energy Healing",
      description:
        "Experience profound Reiki and energy work to restore balance, clear blockages, and revitalize your body's natural healing systems.",
      link: "/healing-training/energy-healing",
    },
    {
      id: 2,
      icon: "🧠",
      title: "Meditation & Mindfulness",
      description:
        "Discover inner peace through guided meditation, breathwork, and mindfulness practices for mental clarity and emotional balance.",
      link: "/meditation",
    },
    {
      id: 3,
      icon: "🕉️",
      title: "Yoga & Movement",
      description:
        "Explore transformative yoga practices and movement therapies that strengthen the body, calm the mind, and open the heart.",
      link: "/yoga",
    },
    {
      id: 4,
      icon: "💬",
      title: "Counseling & Therapy",
      description:
        "Work with compassionate therapists to address emotional challenges, trauma, and psychological well-being through holistic approaches.",
      link: "/healing-training/counselling",
    },
    {
      id: 5,
      icon: "🔔",
      title: "Singing Bowl Therapy",
      description:
        "Immerse yourself in healing sound vibrations that align chakras, reduce stress, and facilitate deep meditation and cellular renewal.",
      link: "/healing-training/singing-bowl",
    },
    {
      id: 6,
      icon: "🏢",
      title: "Corporate Wellness",
      description:
        "Transform your organization through customized corporate retreat programs designed for team building and strategic renewal.",
      link: "/corporate-retreat",
    },
  ];

  return (
    <>
      {/* Mission Section */}
      <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden bg-[#f5f0e8]">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed opacity-30"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80')",
          }}
        />

        {/* Decorative Elements */}
        <div className="absolute top-10 sm:top-20 right-5 sm:right-10 w-40 h-40 sm:w-64 sm:h-64 bg-green-600/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 sm:bottom-20 left-5 sm:left-10 w-48 h-48 sm:w-80 sm:h-80 bg-amber-700/5 rounded-full blur-3xl" />

        <div className="max-w-[1400px] mx-auto px-4 sm:px-5 lg:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-[45%_55%] gap-8 sm:gap-10 lg:gap-16 items-center">
            {/* Image Column */}
            <div className="relative order-2 lg:order-1">
              <div className="relative rounded-2xl sm:rounded-[20px] overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-500 group">
                <Image
                  src="/img/slider/Singing_Bowl.jpg"
                  alt="Holistic Wellness at Jivan Parivartan"
                  width={600}
                  height={500}
                  className="w-full h-[400px] sm:h-[450px] md:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                {/* Overlay Badge */}
                <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 bg-gradient-to-br from-green-600 to-green-700 text-white p-4 sm:p-6 rounded-xl sm:rounded-[15px] shadow-2xl backdrop-blur-sm max-w-[240px] sm:max-w-[280px]">
                  <div className="text-3xl sm:text-[42px] mb-2">🕉️</div>
                  <h3 className="text-lg sm:text-[22px] font-bold leading-tight">
                    Holistic Wellness for Mind, Body & Spirit
                  </h3>
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-full text-xs sm:text-[13px] font-bold uppercase tracking-wider mb-4 border border-green-200">
                <span className="w-1.5 h-1.5 rounded-full bg-green-600 animate-pulse" />
                Our Purpose
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-gray-900 mb-4 sm:mb-6 leading-tight">
                Our Mission
              </h2>
              <p className="text-sm sm:text-base lg:text-[16px] leading-relaxed text-gray-700 mb-6 sm:mb-8">
                Our mission is to empower individuals to discover their inner strength and
                resilience, fostering a deep sense of self-awareness and self-compassion. Through
                our dedicated team of experienced practitioners and a variety of healing
                modalities, we strive to:
              </p>

              {/* Mission Goals Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 mb-6 sm:mb-8">
                {missionGoals.map((goal) => (
                  <div
                    key={goal.id}
                    className="bg-white/80 backdrop-blur-sm p-4 sm:p-5 rounded-xl sm:rounded-[12px] border-l-4 border-green-600 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="flex items-start gap-2.5 sm:gap-3">
                      <span className="text-2xl sm:text-[32px] leading-none flex-shrink-0">{goal.icon}</span>
                      <div className="min-w-0">
                        <h4 className="text-base sm:text-[17px] font-bold text-gray-900 mb-1">{goal.title}</h4>
                        <p className="text-xs sm:text-[13px] text-gray-600 leading-relaxed">
                          {goal.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-sm sm:text-base lg:text-[16px] leading-relaxed text-gray-700 mb-6 sm:mb-8">
                We invite you to explore our center, meet our team, and embark on a journey of
                self-discovery and healing. Whether you're seeking relief from physical discomfort,
                emotional healing, or a deeper connection to your inner self, Jivan Parivartan is
                here to support you every step of the way.
              </p>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-br from-green-600 to-green-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-sm sm:text-base shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              >
                <span>Book a Session</span>
                <span className="text-lg sm:text-xl">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - FIXED BACKGROUND */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#f5f0e8] bg-[url('/img/design/color-page.jpg')] bg-repeat bg-center relative">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-5 lg:px-6 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-10 sm:mb-12 lg:mb-14">
            <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-full text-xs sm:text-[13px] font-bold uppercase tracking-wider mb-4 border border-green-200">
              <span className="w-1.5 h-1.5 rounded-full bg-green-600 animate-pulse" />
              What We Offer
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-gray-900 mb-4 sm:mb-5 leading-tight px-4">
              Our Services
            </h2>
            <p className="text-sm sm:text-base lg:text-[16px] leading-relaxed text-gray-700 max-w-[700px] mx-auto px-4">
              At Jivan Parivartan, we offer a comprehensive range of healing modalities designed to
              nurture your complete well-being.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mb-10 sm:mb-12">
            {services.map((service) => (
              <Link
                key={service.id}
                href={service.link}
                className="group bg-white p-6 sm:p-7 lg:p-8 rounded-2xl sm:rounded-[15px] shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-t-4 border-green-600"
              >
                <div className="text-4xl sm:text-5xl lg:text-[48px] mb-3 sm:mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                  {service.icon}
                </div>
                <h3 className="text-lg sm:text-xl lg:text-[20px] font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-green-700 transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm lg:text-[14px] leading-relaxed text-gray-600 mb-3 sm:mb-4">
                  {service.description}
                </p>
                <div className="flex items-center gap-2 text-green-700 font-semibold text-xs sm:text-sm group-hover:gap-3 transition-all">
                  <span>Learn More</span>
                  <span className="text-base sm:text-lg">→</span>
                </div>
              </Link>
            ))}
          </div>

          {/* CTA Card */}
          <div className="relative bg-gradient-to-br from-green-600 to-green-800 rounded-2xl sm:rounded-[20px] p-8 sm:p-10 lg:p-12 text-center shadow-2xl overflow-hidden">
            {/* Decorative circles */}
            <div className="absolute top-0 right-0 w-40 h-40 sm:w-64 sm:h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-32 h-32 sm:w-48 sm:h-48 bg-white/10 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2" />

            <div className="relative z-10">
              <div className="text-4xl sm:text-5xl lg:text-[56px] mb-3 sm:mb-4">🌟</div>
              <h3 className="text-2xl sm:text-3xl lg:text-[32px] font-extrabold text-white mb-3 sm:mb-4 leading-tight px-4">
                Ready to Begin Your Healing Journey?
              </h3>
              <p className="text-sm sm:text-base lg:text-[16px] text-white/90 mb-6 sm:mb-8 max-w-[600px] mx-auto px-4">
                Book a personalized session today and experience the transformative power of
                holistic wellness.
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 px-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-white text-green-700 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-sm sm:text-base shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
                >
                  <span>Book a Session</span>
                  <span className="text-lg sm:text-xl">→</span>
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white border-2 border-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-sm sm:text-base hover:bg-white/20 transition-all duration-300"
                >
                  <span>View All Services</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
