import React from "react";
import Link from "next/link";
import { Breadcrumb } from "@/components/jivan/Breadcrumb";
import { QuickNavigation } from "@/components/jivan/QuickNavigation";
import { CTASection } from "@/components/jivan/yoga/CTASection";

type ServiceCard = {
  title: string;
  description: string;
  href: string;
  icon: string;
  highlights?: string[];
  links?: { label: string; href: string }[];
};

function SectionHeader({
  eyebrow = "Jivan Parivartan",
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="text-center mb-10">
      <p className="text-xs font-extrabold tracking-[0.25em] text-slate-700/70 uppercase">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-4xl md:text-3xl font-extrabold text-slate-900 leading-tight">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-4 text-slate-600 text-lg md:text-base max-w-[860px] mx-auto leading-relaxed">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}

function ServiceGrid({
  cards,
  accent = "red",
}: {
  cards: ServiceCard[];
  accent?: "red" | "blue" | "green" | "orange" | "purple" | "gold";
}) {
  const accentMap: Record<string, string> = {
    red: "from-red-600 via-rose-500 to-red-700",
    blue: "from-blue-700 via-sky-500 to-blue-900",
    green: "from-emerald-700 via-green-500 to-emerald-900",
    orange: "from-orange-600 via-amber-400 to-orange-900",
    purple: "from-purple-700 via-fuchsia-500 to-purple-900",
    gold: "from-amber-700 via-yellow-500 to-amber-900",
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 items-stretch">
      {cards.map((s) => (
        <div
          key={s.href}
          className="rounded-3xl bg-white border border-slate-200 shadow-[0_10px_35px_rgba(15,23,42,0.08)] hover:shadow-[0_18px_45px_rgba(15,23,42,0.12)] transition-all overflow-hidden flex flex-col h-full"
        >
          <div className={`h-1 bg-gradient-to-r ${accentMap[accent]}`} />

          <div className="p-7 flex flex-col h-full">
            <div>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-extrabold text-slate-900">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                    {s.description}
                  </p>
                </div>

                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-700 text-white flex items-center justify-center text-2xl shadow-sm shrink-0">
                  {s.icon}
                </div>
              </div>

              {s.highlights?.length ? (
                <>
                  <div className="mt-5 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
                  <ul className="mt-5 space-y-2 text-sm text-slate-700">
                    {s.highlights.map((h) => (
                      <li key={h} className="flex gap-3">
                        <span className="mt-2 w-2 h-2 rounded-full bg-slate-800 shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </>
              ) : null}

              {s.links?.length ? (
                <>
                  <div className="mt-5 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
                  <div className="mt-5 flex flex-wrap gap-2">
                    {s.links.map((l) => (
                      <Link
                        key={l.href}
                        href={l.href}
                        className="text-xs font-extrabold text-slate-700 bg-slate-50 border border-slate-200 px-3 py-2 rounded-full hover:bg-slate-100 transition"
                      >
                        {l.label}
                      </Link>
                    ))}
                  </div>
                </>
              ) : null}
            </div>

            <div className="mt-auto pt-7 grid grid-cols-2 gap-3">
              <Link
                href={s.href}
                className="inline-flex items-center justify-center px-5 py-3 rounded-full font-extrabold text-white bg-gradient-to-br from-slate-900 to-slate-800 hover:from-slate-800 hover:to-slate-700 transition shadow"
              >
                Explore
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-5 py-3 rounded-full font-extrabold text-slate-900 bg-slate-100 border border-slate-200 hover:bg-slate-200 transition"
              >
                Enquire
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function ServicesPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Our Services" },
  ];

  const quickNavItems = [
    { id: "overview", icon: "📌", label: "Overview", href: "#overview" },
    { id: "yoga", icon: "🧘", label: "Yoga", href: "#yoga" },
    { id: "singing-bowl", icon: "🔔", label: "Singing Bowl", href: "#singing-bowl" },
    { id: "reiki", icon: "✨", label: "Reiki", href: "#reiki" },
    { id: "meditation", icon: "🌅", label: "Meditation & Retreat", href: "#meditation" },
    { id: "retreats", icon: "🏔️", label: "Special Retreats", href: "#retreats" },
    { id: "gallery", icon: "🖼️", label: "Gallery", href: "#gallery" },
    { id: "contact", icon: "📞", label: "Contact", href: "#contact" },
  ];

  // ROUTES exactly as your nav
  const servicesYoga: ServiceCard[] = [
    {
      title: "200 hrs Yoga Teacher Training",
      href: "/yoga/200hrs-teacher-training",
      icon: "🧘‍♀️",
      description:
        "Foundational teacher training focused on traditional practice, discipline, and yogic lifestyle.",
      highlights: [
        "Ashtang Mahayoga (Maharshi Patanjali)",
        "Hatha Yoga",
        "Pranayam, Mudra & Meditation",
        "Yoga theory, history & anatomy",
      ],
      links: [
        { label: "Ashtanga", href: "/yoga/200hrs-teacher-training#ashtanga" },
        { label: "Hatha", href: "/yoga/200hrs-teacher-training#hatha" },
        { label: "Pranayam", href: "/yoga/200hrs-teacher-training#pranayam" },
        { label: "Mudra", href: "/yoga/200hrs-teacher-training#mudra" },
        { label: "Meditation", href: "/yoga/200hrs-teacher-training#meditation" },
        { label: "Anatomy", href: "/yoga/200hrs-teacher-training#anatomy" },
      ],
    },
    {
      title: "500 hrs Yoga Teacher Training",
      href: "/yoga/500hrs-teacher-training",
      icon: "🧘‍♂️",
      description:
        "Advanced program for deeper mastery, stronger teaching structure, and spiritual integration.",
      highlights: [
        "Classical Surya & Chandra Namaskar",
        "Mantra sadhana (birth-chart based)",
        "Naturopathy + advanced meditation work",
      ],
      links: [
        { label: "Surya/Chandra", href: "/yoga/500hrs-teacher-training#surya-chandra" },
        { label: "Mantra", href: "/yoga/500hrs-teacher-training#mantra" },
        { label: "Naturopathy", href: "/yoga/500hrs-teacher-training#naturopathy" },
      ],
    },
  ];

  const servicesSingingBowl: ServiceCard[] = [
    {
      title: "Singing Bowl Healing and Therapy",
      href: "/singing-bowl/singing-bowl-healing",
      icon: "🔔",
      description:
        "Sound-based relaxation and energetic balancing sessions using therapeutic singing bowl vibration.",
    },
    {
      title: "Singing Bowl Meditation",
      href: "/singing-bowl/singing-bowl-meditation",
      icon: "🕯️",
      description:
        "Guided meditation enhanced with sound to support deep calm, focus, and inner stillness.",
    },
    {
      title: "Singing Bowl Training",
      href: "/singing-bowl/singing-bowl-training",
      icon: "🎓",
      description:
        "Learn how to play and apply singing bowls for self-practice and professional sessions.",
      links: [
        { label: "12 hrs Basic", href: "/singing-bowl/training-basic" },
        { label: "35 hrs Advance", href: "/singing-bowl/training-advance" },
      ],
    },
    {
      title: "Energy Healing with Maa Nisha Kabir",
      href: "/singing-bowl/energy-healing",
      icon: "✨",
      description:
        "Energy healing sessions designed to support emotional release and energetic clarity.",
    },
    {
      title: "7 Chakra Healing with Singing Bowl",
      href: "/singing-bowl/7-chakra-healing",
      icon: "🧿",
      description:
        "Chakra-focused sound healing to support alignment across the seven primary energy centers.",
    },
  ];

  const servicesReiki: ServiceCard[] = [
    {
      title: "Reiki Healing Session",
      href: "/reiki/healing-session",
      icon: "🤲",
      description:
        "A calming session intended to support relaxation, emotional balance, and overall wellbeing.",
    },
    {
      title: "Reiki Meditation",
      href: "/reiki/meditation",
      icon: "🧘",
      description:
        "Meditation practice combined with Reiki principles to support inner stability and awareness.",
    },
    {
      title: "Reiki Training",
      href: "/reiki/training",
      icon: "📘",
      description:
        "Structured training for those who want to learn Reiki and practice ethically with confidence.",
    },
    {
      title: "Stress Management",
      href: "/reiki/stress-management",
      icon: "🧠",
      description:
        "A focused offering for stress reduction using wellness practices and calming techniques.",
    },
  ];

  const servicesMeditation: ServiceCard[] = [
    {
      title: "Pre and Post Trekking Retreat",
      href: "/meditation/trekking-retreat",
      icon: "🥾",
      description:
        "A specialized retreat supporting trekkers before and after their journey through restorative wellness practices.",
    },
    {
      title: "Morning Online Meditation (6:00 am - 8:00 am)",
      href: "/meditation/morning-meditation",
      icon: "🌅",
      description:
        "Daily guided online practice designed to start the day with clarity, calmness, and steady energy.",
    },
    {
      title: "One day special Transformation Program",
      href: "/meditation/transformation-program",
      icon: "🪷",
      description:
        "An intensive one-day experience designed for deep inner shift through structured guided practices.",
    },
  ];

  const specialRetreats: ServiceCard[] = [
    {
      title: "Luxury Himalayan Retreat",
      href: "/luxury-himalayan-retreat",
      icon: "🏔️",
      description:
        "A premium retreat experience combining Himalayan landscapes, spiritual depth, and curated comfort.",
    },
    {
      title: "Corporate Retreat",
      href: "/corporate-retreat",
      icon: "🏢",
      description:
        "Corporate wellness retreats supporting stress reduction, team bonding, and sustainable wellbeing habits.",
    },
  ];

  // Use your own hero image if you have it; keeping same layout style.
  const heroBg =
    "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=2000&q=80";

  return (
    <div className="min-h-screen bg-[#faf6f1] bg-[url('/img/design/color-page.jpg')] bg-repeat bg-center">
      <Breadcrumb items={breadcrumbItems} />

      {/* HERO (soft box like your existing hero/badge patterns) */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-center bg-cover"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/35 to-black/60" />

        <div className="relative max-w-[1200px] mx-auto px-5 py-20 md:py-16">
          <div className="max-w-[980px] mx-auto">
            <div className="rounded-3xl bg-white/12 backdrop-blur-xl border border-white/20 shadow-[0_20px_70px_rgba(0,0,0,0.35)] overflow-hidden">
              <div className="h-1 bg-gradient-to-r from-red-600 via-rose-500 to-red-700" />
              <div className="p-10 md:p-8 sm:p-6 text-center text-white">
                <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 border border-white/20 text-xs font-extrabold tracking-[0.18em] uppercase">
                  🌿 Our Offerings
                </div>

                <h1 className="mt-5 text-5xl md:text-4xl sm:text-3xl font-extrabold leading-tight">
                  Our Services
                </h1>

                <p className="mt-5 text-white/85 text-lg md:text-base leading-relaxed max-w-[860px] mx-auto">
                  Yoga, healing, meditation, retreats, and wellness programs designed to
                  support inner peace, strength, and transformation.
                </p>

                <div className="mt-8 flex flex-wrap gap-4 justify-center">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center px-8 py-3 rounded-full font-extrabold text-slate-900 bg-white hover:bg-white/90 transition shadow"
                  >
                    Contact Us
                  </Link>
                  <Link
                    href="/gallery"
                    className="inline-flex items-center justify-center px-8 py-3 rounded-full font-extrabold text-white bg-white/10 border border-white/25 hover:bg-white/15 transition"
                  >
                    View Gallery
                  </Link>
                </div>

                <div className="mt-10 grid grid-cols-4 md:grid-cols-2 gap-4">
                  {[
                    { number: "Yoga", label: "Training & Practice" },
                    { number: "Healing", label: "Reiki & Sound" },
                    { number: "Retreats", label: "Nature & Renewal" },
                    { number: "Corporate", label: "Team Wellbeing" },
                  ].map((s) => (
                    <div
                      key={s.label}
                      className="rounded-2xl bg-white/10 border border-white/15 px-5 py-4"
                    >
                      <div className="text-xl font-extrabold">{s.number}</div>
                      <div className="mt-1 text-[11px] uppercase tracking-wider text-white/80 font-bold">
                        {s.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <p className="mt-6 text-center text-white/70 text-sm">
              For bookings and customised programs, please use the contact page.
            </p>
          </div>
        </div>
      </section>

      <QuickNavigation items={quickNavItems} variant="red" />

      <div className="max-w-[1200px] mx-auto px-5 py-16">
        {/* OVERVIEW */}
        <section
          id="overview"
          className="rounded-3xl bg-white border border-slate-200 shadow-[0_10px_35px_rgba(15,23,42,0.08)] overflow-hidden"
        >
          <div className="h-1 bg-gradient-to-r from-red-600 via-rose-500 to-red-700" />
          <div className="p-10 md:p-8 sm:p-6">
            <SectionHeader
              title="A complete wellness ecosystem"
              subtitle="Choose a path that suits your intention—professional training, daily practice, deep healing, or immersive retreat experiences."
            />

            <div className="grid grid-cols-3 md:grid-cols-1 gap-6">
              {[
                {
                  title: "For individuals",
                  text:
                    "Meditation, Reiki, singing bowl sessions, and guided programs to support calmness, clarity, and growth.",
                },
                {
                  title: "For practitioners",
                  text:
                    "Yoga teacher training and sound training pathways for structured learning and deeper mastery.",
                },
                {
                  title: "For teams & groups",
                  text:
                    "Corporate retreats and customized programs built for stress reduction, bonding, and sustainable wellbeing habits.",
                },
              ].map((c) => (
                <div
                  key={c.title}
                  className="rounded-3xl bg-slate-50 border border-slate-200 p-6"
                >
                  <h3 className="text-base font-extrabold text-slate-900">
                    {c.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                    {c.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTIONS */}
        <section id="yoga" className="mt-16">
          <SectionHeader
            title="Yoga"
            subtitle="Teacher training programs designed for deep practice, disciplined learning, and long-term growth."
          />
          <ServiceGrid cards={servicesYoga} accent="red" />
        </section>

        <section id="singing-bowl" className="mt-16">
          <SectionHeader
            title="Singing Bowl"
            subtitle="Sound healing sessions, meditations, and training programs with clear learning pathways."
          />
          <ServiceGrid cards={servicesSingingBowl} accent="orange" />
        </section>

        <section id="reiki" className="mt-16">
          <SectionHeader
            title="Reiki"
            subtitle="Energy healing sessions, meditation, training, and stress-focused support."
          />
          <ServiceGrid cards={servicesReiki} accent="purple" />
        </section>

        <section id="meditation" className="mt-16">
          <SectionHeader
            title="Meditation & Retreat"
            subtitle="Programs for daily calm, trekking preparation/recovery, and deeper transformation work."
          />
          <ServiceGrid cards={servicesMeditation} accent="green" />
        </section>

        <section id="retreats" className="mt-16">
          <SectionHeader
            title="Special Retreats"
            subtitle="Immersive experiences for individuals and organizations—premium journeys and corporate wellness retreats."
          />
          <ServiceGrid cards={specialRetreats} accent="gold" />
        </section>

        {/* GALLERY CARD */}
        <section id="gallery" className="mt-16">
          <div className="rounded-3xl bg-white border border-slate-200 shadow-sm overflow-hidden">
            <div className="h-1 bg-gradient-to-r from-slate-700 via-slate-500 to-slate-800" />
            <div className="p-10 md:p-8 sm:p-6">
              <SectionHeader
                title="Our Gallery"
                subtitle="See glimpses of our retreats, trainings, and wellness sessions."
              />
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/gallery"
                  className="inline-flex items-center justify-center px-8 py-3 rounded-full font-extrabold text-white bg-slate-900 hover:bg-slate-800 transition"
                >
                  Visit Gallery
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-3 rounded-full font-extrabold text-slate-900 bg-slate-100 border border-slate-200 hover:bg-slate-200 transition"
                >
                  Book / Enquire
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT CTA (same pattern used across pages) */}
        <section id="contact" className="mt-16">
          <CTASection
            title="Need help choosing the right service?"
            description="Share your goal (stress reduction, healing, teacher training, retreat planning, or corporate wellbeing) and we’ll guide you to the right program."
            buttons={[
              { icon: "📞", label: "Call Us", href: "tel:+9779818514837" },
              { icon: "✉️", label: "Email Us", href: "mailto:info@jivanparivartan.com" },
              { icon: "📝", label: "Contact Page", href: "/contact" },
            ]}
            variant="green"
            backgroundEmoji="🌿"
          />
        </section>
      </div>
    </div>
  );
}
