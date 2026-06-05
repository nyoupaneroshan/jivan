"use client";

import React from "react";
import Link from "next/link";
import { Breadcrumb } from "@/components/jivan/Breadcrumb";
import { PageHero } from "@/components/jivan/PageHero";
import { QuickNavigation } from "@/components/jivan/QuickNavigation";
import { SidebarWidget } from "@/components/jivan/SidebarWidget";

type HealingItem = {
  title: string;
  slug: string;
  duration: string;
  category: "Sound Healing" | "Energy Healing" | "Sacred Practices";
  short: string;
  related: string[];
};

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Healing" },
];

const quickNavItems = [
  { id: "overview", icon: "✨", label: "Overview", href: "#overview" },
  { id: "modalities", icon: "🪷", label: "Modalities", href: "#modalities" },
  { id: "pathways", icon: "🌿", label: "Pathways", href: "#pathways" },
  { id: "benefits", icon: "🔔", label: "Benefits", href: "#benefits" },
  { id: "contact", icon: "📩", label: "Book", href: "#contact" },
];

const heroStats = [
  { number: "10", label: "Healing Paths" },
  { number: "15–60", label: "Minutes" },
  { number: "1:1", label: "Guided" },
  { number: "All", label: "Levels" },
];

const heroCTAs = [
  { label: "Explore Modalities", href: "#modalities", primary: true },
  { label: "Book a Session", href: "#contact" },
];

const healingItems: HealingItem[] = [
  {
    title: "5 Elements Balancing",
    slug: "/healing/5-elements-balancing",
    duration: "30 mins",
    category: "Sacred Practices",
    short:
      "A balancing practice inspired by the five elements to support grounding, clarity, vitality, and inner harmony.",
    related: ["/healing/mudra-yantra", "/healing/reiki"],
  },
  {
    title: "Mudra & Yantra Healing",
    slug: "/healing/mudra-yantra",
    duration: "30 mins",
    category: "Sacred Practices",
    short:
      "A focused healing modality using symbolic spiritual tools, hand gestures, and intention to support concentration and energetic alignment.",
    related: ["/healing/5-elements-balancing", "/healing/vedic-sound-healing"],
  },
  {
    title: "Reiki",
    slug: "/healing/reiki",
    duration: "60 mins",
    category: "Energy Healing",
    short:
      "A gentle energy-based healing approach that supports emotional calm, natural flow, and inner restoration.",
    related: ["/healing/reiki-energy-healing", "/healing/5-elements-balancing"],
  },
  {
    title: "Reiki Energy Healing",
    slug: "/healing/reiki-energy-healing",
    duration: "60 mins",
    category: "Energy Healing",
    short:
      "A one-to-one Reiki session designed to help release tension, regulate emotional heaviness, and invite deep relaxation.",
    related: ["/healing/reiki", "/healing/sound-healing"],
  },
  {
    title: "Singing Bowl Healing",
    slug: "/healing/singing-bowl",
    duration: "60 mins",
    category: "Sound Healing",
    short:
      "A vibrational healing experience using bowls and resonance to calm the mind and soften physical and energetic tension.",
    related: ["/healing/tibetan-sound-healing", "/healing/sound-massage"],
  },
  {
    title: "Sound Healing",
    slug: "/healing/sound-healing",
    duration: "60 mins",
    category: "Sound Healing",
    short:
      "A broad therapeutic sound experience designed to support stillness, relaxation, and energetic reset.",
    related: ["/healing/vedic-sound-healing", "/healing/reiki-energy-healing"],
  },
  {
    title: "Sound Massage",
    slug: "/healing/sound-massage",
    duration: "15 mins",
    category: "Sound Healing",
    short:
      "A short but effective vibrational therapy session for immediate calm, body relaxation, and subtle energetic movement.",
    related: ["/healing/singing-bowl", "/healing/tibetan-sound-healing"],
  },
  {
    title: "Tibetan Sound Healing",
    slug: "/healing/tibetan-sound-healing",
    duration: "60 mins",
    category: "Sound Healing",
    short:
      "A Tibetan bowl-based healing approach designed to encourage meditative awareness, calm, and vibrational harmony.",
    related: ["/healing/singing-bowl", "/healing/sound-massage"],
  },
  {
    title: "Vedic Sound Healing",
    slug: "/healing/vedic-sound-healing",
    duration: "60 mins",
    category: "Sound Healing",
    short:
      "A sound-led healing session rooted in Vedic principles, supporting clarity, stillness, and emotional balance.",
    related: ["/healing/vedic-sound-therapy", "/healing/mudra-yantra"],
  },
  {
    title: "Vedic Sound Therapy",
    slug: "/healing/vedic-sound-therapy",
    duration: "60 mins",
    category: "Sound Healing",
    short:
      "A structured therapeutic sound session focused on vibrational support, inner quiet, and subtle energetic restoration.",
    related: ["/healing/vedic-sound-healing", "/healing/sound-healing"],
  },
];

const groupedItems = {
  "Sound Healing": healingItems.filter((item) => item.category === "Sound Healing"),
  "Energy Healing": healingItems.filter((item) => item.category === "Energy Healing"),
  "Sacred Practices": healingItems.filter((item) => item.category === "Sacred Practices"),
};

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
      style={{ boxShadow: "0 8px 28px rgba(23, 30, 22, 0.06)" }}
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

export default function HealingPage() {
  return (
    <div className="min-h-screen bg-[#f7f2ea] bg-[url('/img/design/color-page.jpg')] bg-repeat bg-center">
      <Breadcrumb items={breadcrumbItems} />

      <PageHero
        badge={{ icon: "🪷", text: "Healing Journey" }}
        title="Healing Therapies for Calm, Balance, and Inner Renewal"
        subtitle="Explore interconnected healing pathways across sound, Reiki, and sacred practices. Each page leads naturally to related modalities so visitors can discover the right healing experience."
        stats={heroStats}
        ctas={heroCTAs}
        variant="green"
        backgroundImage="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1920"
      />

      <QuickNavigation items={quickNavItems} variant="green" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-5 lg:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_360px] gap-8 lg:gap-12">
          <main className="space-y-10">
            <section id="overview">
              <SectionCard className="p-7 sm:p-10">
                <SectionHeading
                  eyebrow="Healing Overview"
                  title="A connected healing ecosystem, not just separate pages"
                  subtitle="Your healing section now works best when every therapy helps the visitor discover the next relevant modality."
                />
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    The healing section should guide users from the broad overview page into specific
                    healing experiences such as sound therapy, Reiki, Tibetan bowl work, elemental
                    balancing, and sacred practice-based sessions.
                  </p>
                  <p>
                    Instead of treating each page as isolated, the site should connect related
                    therapies together. That means each therapy page should include links back to the
                    healing overview, links to related modalities, and strong call-to-actions for
                    inquiry and booking.
                  </p>
                </div>
              </SectionCard>
            </section>

            <section id="modalities">
              <SectionCard className="p-7 sm:p-10">
                <SectionHeading
                  eyebrow="Healing Modalities"
                  title="Explore each healing path"
                  subtitle="Grouped clearly so the visitor can understand the full range of offerings."
                />

                <div className="space-y-10">
                  {Object.entries(groupedItems).map(([group, items]) => (
                    <div key={group}>
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-5">{group}</h3>
                      <div className="grid md:grid-cols-2 gap-5">
                        {items.map((item) => (
                          <div
                            key={item.slug}
                            className="rounded-2xl border border-[#E7E0D7] bg-[#fcfbf8] p-6"
                          >
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-3">
                              <h4 className="text-xl font-bold text-gray-900">{item.title}</h4>
                              <span className="inline-flex items-center rounded-full bg-emerald-50 text-emerald-800 border border-emerald-100 px-3 py-1 text-xs font-semibold w-fit">
                                {item.duration}
                              </span>
                            </div>

                            <p className="text-gray-700 leading-relaxed mb-5">{item.short}</p>

                            <div className="flex flex-wrap gap-3">
                              <Link
                                href={item.slug}
                                className="inline-flex items-center justify-center rounded-xl bg-emerald-700 text-white px-4 py-2.5 text-sm font-semibold hover:bg-emerald-800 transition-colors"
                              >
                                View Details
                              </Link>

                              {item.related.slice(0, 2).map((related) => (
                                <Link
                                  key={related}
                                  href={related}
                                  className="inline-flex items-center justify-center rounded-xl border border-[#D9D1C5] bg-white text-gray-700 px-4 py-2.5 text-sm font-semibold hover:border-emerald-300 hover:text-emerald-800 transition-colors"
                                >
                                  Related Therapy
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </SectionCard>
            </section>

          

           

            <section
              id="contact"
              className="rounded-3xl bg-gradient-to-br from-emerald-700 to-emerald-900 text-white p-8 sm:p-10 shadow-lg"
            >
              <p className="text-[11px] uppercase tracking-[0.18em] font-bold text-emerald-100 mb-3">
                Book a Healing Session
              </p>
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">
               
              </h3>
              <p className="text-white/85 text-base leading-relaxed max-w-3xl mb-6">
                 Book today and start your healing journey with us. Each session is designed to support your unique needs and guide you towards calm, balance, and inner renewal.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-white text-emerald-800 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-colors"
                >
                  Book Now
                </Link>
                <Link
                  href="/healing/sound-healing"
                  className="inline-flex items-center justify-center gap-2 bg-transparent border border-white/30 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition-colors"
                >
                  Start with Sound Healing
                </Link>
              </div>
            </section>
          </main>

          <aside className="lg:sticky lg:top-24 self-start">
            <SidebarWidget
              price={{
                label: "Healing Sessions",
                amount: "Contact Us",
                duration: "custom guidance",
                includes: [
                  "Sound healing options",
                  "Reiki sessions",
                  "Sacred practice sessions",
                  "One-to-one guidance",
                  "Suitable for all levels",
                ],
                viewAllPricingLink: "/contact",
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