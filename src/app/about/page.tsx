import React from "react";
import { Breadcrumb } from "@/components/jivan/Breadcrumb";
import { PageHero } from "@/components/jivan/PageHero";
import { QuickNavigation } from "@/components/jivan/QuickNavigation";
import { CTASection } from "@/components/jivan/yoga/CTASection";
import { SidebarWidget } from "@/components/jivan/SidebarWidget";
import { generateUpcomingBatches } from "@/utils/batchGenerator";

const SITE = {
  name: "Jivan Parivartan",
  url: "https://jivanparivartan.com",
  phone1: "+977 9818514837",
  phone2: "+977 9863049261",
  email: "info@jivanparivartan.com",
  address: "Tarkeshwor-5, Kathmandu, Nepal",
};

type Value = {
  icon: string;
  title: string;
  description: string;
};

type Pillar = {
  icon: string;
  title: string;
  description: string;
};

type Testimonial = {
  text: string;
  name: string;
  location: string;
  initials: string;
};

export default function AboutPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "About" },
  ];

  // Reduced nav: only what matters on About (professional + non-redundant). [page:1]
  const quickNavItems = [
    { id: "overview", icon: "🌿", label: "Who we are", href: "#overview" },
    { id: "mission-vision", icon: "🎯", label: "Mission & Vision", href: "#mission-vision" },
    { id: "values", icon: "🕊️", label: "Values", href: "#values" },
    { id: "story", icon: "📖", label: "Our story", href: "#story" },
    { id: "team", icon: "👥", label: "Team", href: "#team" },
    { id: "testimonials", icon: "💬", label: "Stories", href: "#testimonials" },
    { id: "cta", icon: "📅", label: "Begin", href: "#cta" },
  ];

  const heroStats = [
    { number: "Kathmandu", label: "Based in Nepal" },
    { number: "Holistic", label: "Wellness approach" },
    { number: "Retreats", label: "Programs & sessions" },
    { number: "Support", label: "Community-focused" },
  ];

  const heroCTAs = [
    { label: "Book a Session", href: "/contact", primary: true },
    { label: "Explore Programs", href: "/programs" },
  ];

  const pillars: Pillar[] = [
    {
      icon: "🧘",
      title: "Mindfulness & meditation",
      description:
        "Practices that build clarity, resilience, and a steady inner foundation.",
    },
    {
      icon: "✨",
      title: "Energy-based healing",
      description:
        "Gentle modalities that support balance, release, and deep rest.",
    },
    {
      icon: "🌿",
      title: "Nature-centered renewal",
      description:
        "Spaces and programs designed to reset the nervous system and restore perspective.",
    },
    {
      icon: "🤍",
      title: "Compassionate guidance",
      description:
        "A safe, respectful environment where your journey is honored as unique.",
    },
  ];

  const values: Value[] = [
    {
      icon: "🌿",
      title: "Holistic wellness",
      description:
        "Healing is supported across mind, body, heart, and soul—not in isolation.",
    },
    {
      icon: "🤍",
      title: "Compassion",
      description:
        "Care, empathy, and a non-judgmental space for every seeker.",
    },
    {
      icon: "🪞",
      title: "Authenticity",
      description:
        "Your path is your own. Practices are adapted to you with respect and humility.",
    },
    {
      icon: "🧭",
      title: "Integrity",
      description:
        "Transformation is guided ethically—grounded in truth and depth, not trends.",
    },
  ];

  const testimonials: Testimonial[] = [
    {
      text:
        "The retreat helped me find peace I never thought possible. I returned home with clarity, calm, and a softer heart.",
      name: "Anju",
      location: "Kathmandu",
      initials: "A",
    },
    {
      text:
        "I gained resilience and strength I didn’t know I had. The environment felt safe, grounded, and truly transformational.",
      name: "Suresh",
      location: "Pokhara",
      initials: "S",
    },
  ];

  const priceInfo = {
    label: "Start Your Journey",
    amount: "Custom",
    duration: "Programs & Sessions",
    includes: ["Beginner-friendly", "Personalized guidance", "Retreat & training tracks", "Community support"],
  };

  const batches = generateUpcomingBatches({
    intervalMonths: 2,
    totalBatches: 3,
    batchDay: 15,
  });

  const contact = {
    phone: [SITE.phone1, SITE.phone2],
    email: SITE.email,
    address: SITE.address,
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.name,
    url: SITE.url,
    email: SITE.email,
    telephone: [SITE.phone1, SITE.phone2],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kathmandu",
      addressRegion: "Bagmati Province",
      addressCountry: "NP",
      streetAddress: "Tarkeshwor-5",
    },
  };

  return (
    <div className="min-h-screen bg-[#eaf7ee] bg-[url('/img/design/color-page.jpg')] bg-repeat bg-center">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Breadcrumb items={breadcrumbItems} />

      <PageHero
        badge={{ icon: "🌿", text: "About Jivan Parivartan" }}
        title="About Jivan Parivartan – A Sanctuary for Transformation"
        subtitle="Empowering Healing • Inspiring Growth • Transforming Life"
        stats={heroStats}
        ctas={heroCTAs}
        variant="green"
        backgroundImage="https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1920"
      />

      <QuickNavigation items={quickNavItems} variant="red" />

      <div className="max-w-[1400px] mx-auto px-5 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12">
          {/* Main */}
          <div>
            {/* Overview (Editorial layout) */}
            <section
              id="overview"
              className="bg-gradient-to-br from-white to-green-50 rounded-2xl shadow-lg border-t-4 border-green-600 overflow-hidden"
            >
              <div className="p-10 md:p-8 sm:p-6">
                <h2 className="text-3xl md:text-2xl font-extrabold text-gray-900 mb-4">
                  Welcome to Jivan Parivartan
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-1 gap-8">
                  <div className="text-gray-700 leading-relaxed text-[16px] md:text-[15px] space-y-4">
                    <p>
                      Jivan Parivartan is a holistic wellness and transformation center based in Kathmandu, Nepal, created as
                      a sanctuary for those seeking calm, clarity, and meaningful inner growth.
                    </p>
                    <p>
                      Healing is approached as a balance of mind, body, heart, and soul—supporting people to rediscover inner
                      strength, resilience, and purpose through grounded practices.
                    </p>
                  </div>

                  <div className="bg-white rounded-2xl p-6 shadow-sm border border-green-100">
                    <div className="text-sm font-bold text-green-700">What you’ll find here</div>
                    <ul className="mt-4 space-y-3 text-sm text-gray-700">
                      {[
                        "A safe space for healing and self-discovery",
                        "Nature-centered environments for renewal",
                        "Guided retreats, trainings, and 1:1 support",
                        "Practical tools you can carry into daily life",
                      ].map((x) => (
                        <li key={x} className="flex items-start gap-2">
                          <span className="mt-[2px] inline-flex w-5 h-5 items-center justify-center rounded-full bg-green-100 text-green-700 font-bold">
                            ✓
                          </span>
                          <span>{x}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Premium “pillar strip” */}
              <div className="bg-white border-t border-green-100">
                <div className="p-8 md:p-6 grid grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-5">
                  {pillars.map((p) => (
                    <div key={p.title} className="rounded-2xl bg-gradient-to-br from-green-50 to-white border border-green-100 p-6">
                      <div className="text-3xl">{p.icon}</div>
                      <div className="mt-3 font-extrabold text-gray-900">{p.title}</div>
                      <div className="mt-2 text-sm text-gray-600 leading-relaxed">{p.description}</div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Mission & Vision (combined to reduce redundancy) */}
            <section id="mission-vision" className="mt-14">
              <div className="text-center mb-10">
                <h2 className="text-4xl md:text-3xl font-extrabold text-gray-900">
                  Mission & Vision
                </h2>
                <p className="mt-3 text-gray-600 text-lg md:text-base">
                  A clear purpose, and a long-term view of wellbeing as a journey.
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-1 gap-7">
                <div className="bg-white rounded-2xl p-10 md:p-8 sm:p-6 shadow-lg border-l-[6px] border-green-600">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-green-500 to-green-700 text-white flex items-center justify-center text-xl font-extrabold">
                      🎯
                    </div>
                    <h3 className="text-2xl md:text-xl font-extrabold text-gray-900">Our Mission</h3>
                  </div>

                  <p className="mt-5 text-gray-700 leading-relaxed text-[16px] md:text-[15px]">
                    Empower individuals to explore, heal, and grow through meditation, energy healing, yoga, sound therapies,
                    and supportive guidance—within safe, nature-centered environments that inspire resilience and deep personal
                    transformation.
                  </p>

                  <div className="mt-7 grid grid-cols-2 sm:grid-cols-1 gap-3">
                    {[
                      "Holistic healing support",
                      "Emotional empowerment",
                      "Mental clarity & spiritual awareness",
                      "Community and belonging",
                    ].map((t) => (
                      <div
                        key={t}
                        className="text-center px-4 py-3 rounded-xl font-semibold text-green-800 bg-gradient-to-br from-green-50 to-white border border-green-100 text-sm"
                      >
                        {t}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-white rounded-2xl p-10 md:p-8 sm:p-6 shadow-lg border border-green-100">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-green-500 to-green-700 text-white flex items-center justify-center text-xl font-extrabold">
                      🌟
                    </div>
                    <h3 className="text-2xl md:text-xl font-extrabold text-gray-900">Our Vision</h3>
                  </div>

                  <p className="mt-5 text-gray-700 leading-relaxed text-[16px] md:text-[15px]">
                    A world where every person has access to deep healing, inner peace, and tools for living a balanced,
                    purpose-driven life—where wellbeing is supported as a lifelong journey.
                  </p>

                  <div className="mt-7 bg-white rounded-2xl p-6 border border-green-100">
                    <div className="text-sm font-bold text-gray-900">What “transformation” means here</div>
                    <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                      Not an escape—real change that integrates into daily life through habits, self-awareness, and grounded
                      inner resilience.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Values */}
            <section id="values" className="mt-14">
              <div className="text-center mb-10">
                <h2 className="text-4xl md:text-3xl font-extrabold text-gray-900">
                  Beliefs & Values
                </h2>
                <p className="mt-3 text-gray-600 text-lg md:text-base">
                  The principles behind every experience we offer.
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-7">
                {values.map((v) => (
                  <div key={v.title} className="bg-white rounded-2xl p-8 shadow-lg border-t-[3px] border-green-600">
                    <div className="text-4xl">{v.icon}</div>
                    <h3 className="mt-4 text-xl font-extrabold text-gray-900">{v.title}</h3>
                    <p className="mt-2 text-gray-600 leading-relaxed text-sm">{v.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Story */}
            <section id="story" className="mt-14">
              <div className="text-center mb-10">
                <h2 className="text-4xl md:text-3xl font-extrabold text-gray-900">
                  Our Story
                </h2>
                <p className="mt-3 text-gray-600 text-lg md:text-base">
                  Built to support people through stress, life transitions, and deeper self-awareness.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-10 md:p-8 sm:p-6 shadow-lg border-l-[6px] border-green-600">
                <div className="space-y-5 text-gray-700 leading-relaxed text-[16px] md:text-[15px]">
                  <p>
                    Jivan Parivartan has become a trusted sanctuary for those seeking healing—from emotional stress and life
                    challenges to spiritual inquiry and deeper self-awareness.
                  </p>
                  <p>
                    Over years of retreats, personalized sessions, and transformative programs, individuals have been guided
                    toward balance, calm, and renewed purpose—supported by compassionate facilitation and practical tools.
                  </p>
                </div>
              </div>
            </section>

            {/* Team (single clean highlight, no placeholders) */}
            <section id="team" className="mt-14">
              <div className="text-center mb-10">
                <h2 className="text-4xl md:text-3xl font-extrabold text-gray-900">
                  Our Guides & Practitioners
                </h2>
                <p className="mt-3 text-gray-600 text-lg md:text-base">
                  Safe spaces are built by skilled hands and kind hearts.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-10 md:p-8 sm:p-6 shadow-lg border border-green-100">
                <div className="flex items-start gap-5 flex-wrap">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-green-700 text-white flex items-center justify-center font-extrabold text-xl">
                    MN
                  </div>
                  <div className="flex-1 min-w-[240px]">
                    <div className="text-xl font-extrabold text-gray-900">Maa Nisha Kabir</div>
                    <div className="mt-1 text-sm text-gray-600">Founder & Spiritual Guide</div>
                    <p className="mt-4 text-sm text-gray-700 leading-relaxed">
                      Facilitates meditation and transformation practices with a grounded, compassionate approach—supporting
                      emotional healing, spiritual growth, and inner resilience.
                    </p>

                    <div className="mt-6 grid grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-3">
                      {["Meditation", "Energy Work", "Retreats", "Inner Transformation"].map((t) => (
                        <div
                          key={t}
                          className="text-center px-4 py-3 rounded-xl font-semibold text-green-800 bg-gradient-to-br from-green-50 to-white border border-green-100 text-sm"
                        >
                          {t}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="min-w-[260px] bg-gradient-to-br from-green-50 to-white border border-green-100 rounded-2xl p-6">
                    <div className="text-sm font-bold text-gray-900">Want to meet the full team?</div>
                    <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                      Contact us for practitioner availability, sessions, or to receive a program recommendation.
                    </p>
                    <a
                      href="/contact"
                      className="mt-4 inline-flex items-center gap-2 bg-gradient-to-br from-green-500 to-green-700 text-white px-6 py-3 rounded-full font-semibold shadow-sm hover:shadow-md transition"
                    >
                      Contact Us <span aria-hidden>→</span>
                    </a>
                  </div>
                </div>
              </div>
            </section>

            {/* Testimonials */}
            <section
              id="testimonials"
              className="mt-14 bg-gradient-to-br from-green-50 to-white rounded-2xl p-10 md:p-8 sm:p-6 shadow-lg"
            >
              <div className="text-center mb-10">
                <h2 className="text-4xl md:text-3xl font-extrabold text-gray-900">
                  Stories of Transformation
                </h2>
                <p className="mt-3 text-gray-600 text-lg md:text-base">
                  Experiences shared by participants.
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-1 gap-7">
                {testimonials.map((t) => (
                  <div key={t.text} className="bg-white rounded-2xl p-8 shadow-sm border border-green-100">
                    <p className="text-gray-700 leading-relaxed">“{t.text}”</p>
                    <div className="mt-6 flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-green-700 text-white font-extrabold flex items-center justify-center">
                        {t.initials}
                      </div>
                      <div>
                        <div className="font-extrabold text-gray-900">{t.name}</div>
                        <div className="text-sm text-gray-600">{t.location}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* CTA */}
            <section id="cta" className="mt-14">
              <CTASection
                title="Begin Your Journey"
                description="Whether you’re seeking healing, deeper understanding, or personal transformation—support is available."
                buttons={[
                  { icon: "📅", label: "Book a Session", href: "/contact" },
                  { icon: "🧭", label: "Explore Programs", href: "/programs" },
                ]}
                variant="green"
                backgroundEmoji="🌿"
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
