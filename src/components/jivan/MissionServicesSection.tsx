"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export function MissionServices() {
  const missionGoals = [
    { id: 1, title: "Facilitate\nHealing" },
    { id: 2, title: "Empower\nGrowth" },
    { id: 3, title: "Promote\nHolistic Well-being" },
    { id: 4, title: "Cultivate\nCommunity" },
  ];

  const services = [
    {
      id: 1,
      title: "Energy Healing",
      description: "Explore the profound effects of energy work to restore balance and vitality.",
    },
    {
      id: 2,
      title: "Meditation and Mindfulness",
      description: "Learn to quiet the mind and find inner peace through meditation and mindfulness practices.",
    },
    {
      id: 3,
      title: "Yoga and Movement",
      description: "Discover the benefits of yoga and movement therapies for physical and emotional well-being.",
    },
    {
      id: 4,
      title: "Counseling and Therapy",
      description: "Work with experienced therapists to address emotional and psychological challenges.",
    },
    {
      id: 5,
      title: "Singing Bowl Therapy",
      description: "Our Singing Bowl Therapy sessions are designed to provide a holistic healing experience that aligns mind, body, and spirit.",
    },
  ];

  return (
    <>
      <section
        className="relative py-20 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920')",
        }}
      >
        <div className="absolute inset-0 bg-[#f5f0e8]/92" />
        
        <div className="max-w-[1400px] mx-auto px-10 md:px-5 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-[45%_55%] gap-16 lg:gap-16 items-center">
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/img/singing-bowl.jpg"
                  alt="Holistic Wellness"
                  width={600}
                  height={500}
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute bottom-8 md:bottom-5 left-8 md:left-5 bg-[#5E3523]/95 text-white p-8 md:p-6 rounded-xl backdrop-blur-sm">
                  <h3 className="text-3xl md:text-xl font-bold leading-tight">
                    Promote<br />Holistic Well-<br />being
                  </h3>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-5xl md:text-4xl font-bold text-gray-800 mb-8">Our Mission</h2>
              <p className="text-base leading-relaxed text-gray-600 mb-9">
                Our mission is to empower individuals to discover their inner strength and resilience, fostering a deep sense of self-awareness and self-compassion. Through our dedicated team of experienced practitioners and a variety of healing modalities, we strive to:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-9">
                {missionGoals.map((goal) => (
                  <div key={goal.id} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#6B4423] to-[#8B5A3C] flex items-center justify-center flex-shrink-0 shadow-lg">
                      <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-800 whitespace-pre-line">
                        {goal.title}
                      </h4>
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-base leading-relaxed text-gray-600 mb-8">
                We invite you to explore our center, meet our team, and embark on a journey of self-discovery and healing. Whether you're seeking relief from physical discomfort, emotional healing, or a deeper connection to your inner self, Jivan Parivartan is here to support you every step of the way.
              </p>

              <Link
                href="#"
                className="inline-block bg-gradient-to-br from-[#5E3523] to-[#8B5A3C] text-white px-10 py-4 rounded-lg font-semibold text-base shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all"
              >
                Book a Session
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#f5f0e8]">
        <div className="max-w-[1400px] mx-auto px-10 md:px-5">
          <div className="mb-12">
            <h2 className="text-5xl md:text-4xl font-bold text-gray-800 mb-5">Our Services</h2>
            <p className="text-base leading-relaxed text-gray-600 max-w-2xl">
              At Jivan Parivartan, we offer a wide range of healing modalities, including but not limited to:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white p-9 md:p-8 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all cursor-pointer"
              >
                <h3 className="text-xl font-bold text-gray-800 mb-4">{service.title}</h3>
                <p className="text-[15px] leading-relaxed text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-white border-4 border-gray-800 rounded-xl p-12 md:p-9 text-center mt-10">
            <h3 className="text-3xl md:text-2xl font-bold text-gray-800 mb-8 leading-tight">
              Book a session to<br />experience our<br />services
            </h3>
            <Link
              href="#"
              className="inline-block bg-gradient-to-br from-[#5E3523] to-[#8B5A3C] text-white px-12 py-4 rounded-lg font-semibold text-base shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all"
            >
              Book a session
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}