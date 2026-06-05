import React from "react";
import Link from "next/link";
import { Breadcrumb } from "@/components/jivan/Breadcrumb";
import { PageHero } from "@/components/jivan/PageHero";
import { QuickNavigation } from "@/components/jivan/QuickNavigation";
import { CTASection } from "@/components/jivan/yoga/CTASection";
import { ArrowRight } from "lucide-react";

type ServiceCard = {
  title: string;
  description: string;
  href: string;
  icon: string;
  highlights?: string[];
  links?: { label: string; href: string }[];
};

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

const accentMap: Record<
  string,
  { bar: string; badge: string; dot: string; pill: string }
> = {
  red: {
    bar: "from-red-700 via-rose-600 to-red-800",
    badge: "bg-red-50 text-red-800 border-red-100",
    dot: "bg-red-600",
    pill: "bg-red-50 text-red-800 border-red-100 hover:bg-red-100",
  },
  green: {
    bar: "from-emerald-700 via-green-600 to-emerald-900",
    badge: "bg-green-50 text-green-800 border-green-100",
    dot: "bg-green-600",
    pill: "bg-green-50 text-green-800 border-green-100 hover:bg-green-100",
  },
  purple: {
    bar: "from-purple-700 via-fuchsia-500 to-purple-900",
    badge: "bg-purple-50 text-purple-800 border-purple-100",
    dot: "bg-purple-600",
    pill: "bg-purple-50 text-purple-800 border-purple-100 hover:bg-purple-100",
  },
  gold: {
    bar: "from-amber-700 via-yellow-500 to-amber-900",
    badge: "bg-amber-50 text-amber-800 border-amber-100",
    dot: "bg-amber-500",
    pill: "bg-amber-50 text-amber-800 border-amber-100 hover:bg-amber-100",
  },
};

function SectionHeader({
  eyebrow = "Jivan Parivartan",
  title,
  subtitle,
  accent = "green",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  accent?: "red" | "green" | "purple" | "gold";
}) {
  const a = accentMap[accent];

  return (
    <div className="mb-10 text-center">
      <p
        className={cn(
          "inline-flex items-center rounded-full border px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em]",
          a.badge
        )}
      >
        {eyebrow}
      </p>
      <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-4 text-slate-600 text-base sm:text-lg max-w-[860px] mx-auto leading-relaxed">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}

function ServiceGrid({
  cards,
  accent = "green",
}: {
  cards: ServiceCard[];
  accent?: "red" | "green" | "purple" | "gold";
}) {
  const a = accentMap[accent];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-7 items-stretch">
      {cards.map((s) => (
        <article
          key={s.href}
          className="rounded-[28px] bg-white border border-[#e7e2da] shadow-[0_10px_35px_rgba(15,23,42,0.07)] hover:shadow-[0_20px_50px_rgba(15,23,42,0.12)] transition-all duration-300 overflow-hidden flex flex-col h-full hover:-translate-y-1"
        >
          <div className={`h-[3px] bg-gradient-to-r ${a.bar}`} />

          <div className="p-7 flex flex-col h-full">
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0">
                <h3 className="text-xl font-extrabold text-slate-900">{s.title}</h3>
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
                      <span
                        className={cn("mt-2 w-2 h-2 rounded-full shrink-0", a.dot)}
                      />
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
                      className={cn(
                        "text-xs font-bold border px-3 py-2 rounded-full transition",
                        a.pill
                      )}
                    >
                      {l.label}
                    </Link>
                  ))}
                </div>
              </>
            ) : null}

            <div className="mt-auto pt-7 grid grid-cols-2 gap-3">
              <Link
                href={s.href}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-[14px] font-bold text-white bg-gradient-to-br from-slate-900 to-slate-800 hover:from-slate-800 hover:to-slate-700 transition shadow"
              >
                Explore
                <ArrowRight size={15} />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-5 py-3 rounded-[14px] font-bold text-slate-900 bg-slate-100 border border-slate-200 hover:bg-slate-200 transition"
              >
                Enquire
              </Link>
            </div>
          </div>
        </article>
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
    { id: "meditation-retreats", icon: "🌄", label: "Meditation & Retreats", href: "#meditation-retreats" },
    { id: "healing", icon: "✨", label: "Healing", href: "#healing" },
    { id: "training", icon: "🎓", label: "Training", href: "#training" },
    { id: "contact", icon: "📞", label: "Contact", href: "#contact" },
  ];

  const yogaServices: ServiceCard[] = [
    {
      title: "Yoga",
      href: "/yoga",
      icon: "🧘",
      description:
        "A focused path for yogic discipline, practice, philosophy, breathwork, and embodied transformation.",
      highlights: [
        "Foundational and advanced yoga learning",
        "Traditional practice-based approach",
        "Meditation, pranayama, and mudra integration",
      ],
      links: [
        { label: "200 Hrs Yoga Teacher Training", href: "/yoga/200hrs-teacher-training" },
        { label: "500 Hrs Yoga Teacher Training", href: "/yoga/500hrs-teacher-training" },
      ],
    },
  ];

  const meditationRetreatServices: ServiceCard[] = [
    {
      title: "Meditation & Retreats",
      href: "/meditation",
      icon: "🌄",
      description:
        "Immersive retreats and meditative experiences designed for clarity, rest, renewal, and inner transformation.",
      highlights: [
        "Spiritual retreats in multiple formats",
        "Corporate wellness experiences",
        "Luxury and Himalayan retreat journeys",
      ],
      links: [
        { label: "Morning Meditation", href: "/meditation/morning-meditation" },
        { label: "Transformation Program", href: "/meditation/transformation-program" },
        { label: "Trekking Retreat", href: "/meditation/trekking-retreat" },
        { label: "Corporate Retreat", href: "/corporate-retreat" },
        { label: "Luxury Himalayan Retreat", href: "/luxury-himalayan-retreat" },
      ],
    },
  ];

  const healingServices: ServiceCard[] = [
    {
      title: "Healing",
      href: "/healing",
      icon: "✨",
      description:
        "A complete healing pathway combining sound healing, Reiki-based therapies, and sacred balancing practices.",
      highlights: [
        "Sound and singing bowl healing modalities",
        "Reiki and energy balancing",
        "Sacred healing practices for alignment",
      ],
      links: [
        { label: "Vedic Sound Healing", href: "/healing/vedic-sound-healing" },
        { label: "Vedic Sound Therapy", href: "/healing/vedic-sound-therapy" },
        { label: "Mudra & Yantra Healing", href: "/healing/mudra-yantra" },
        { label: "Tibetan Sound Healing", href: "/healing/tibetan-sound-healing" },
        { label: "Sound Massage", href: "/healing/sound-massage" },
        { label: "5 Elements Balancing", href: "/healing/5-elements-balancing" },
        { label: "Reiki", href: "/healing/reiki" },
        { label: "Reiki Energy Healing", href: "/healing/reiki-energy-healing" },
        { label: "Singing Bowl", href: "/healing/singing-bowl" },
        { label: "Sound Healing", href: "/healing/sound-healing" },
      ],
    },
  ];

  const trainingServices: ServiceCard[] = [
    {
      title: "Training",
      href: "/training",
      icon: "🎓",
      description:
        "Professional and spiritual training programs for yoga, Reiki, and singing bowl practice.",
      highlights: [
        "Teacher training and structured learning",
        "Reiki progression levels",
        "Singing bowl basic and advanced learning",
      ],
      links: [
        { label: "200 Hrs Yoga Teacher Training", href: "/yoga/200hrs-teacher-training" },
        { label: "500 Hrs Yoga Teacher Training", href: "/yoga/500hrs-teacher-training" },
        { label: "Reiki Training", href: "/reiki/training" },
        { label: "Singing Bowl Training", href: "/singing-bowl/singing-bowl-training" },
        { label: "Basic Singing Bowl Training", href: "/singing-bowl/training-basic" },
        { label: "Advanced Singing Bowl Training", href: "/singing-bowl/training-advance" },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#faf6f1] bg-[url('/img/design/color-page.jpg')] bg-repeat bg-center">
      <Breadcrumb items={breadcrumbItems} />

      <PageHero
        badge={{ icon: "🌿", text: "Our Offerings" }}
        title="Our Services"
        subtitle="A refined wellness ecosystem built around four clear pathways: Yoga, Meditation & Retreats, Healing, and Training."
        stats={[
          { number: "4", label: "Core Pathways" },
          { number: "Yoga", label: "Practice & Teaching" },
          { number: "Healing", label: "Energy & Sound" },
          { number: "Retreats", label: "Rest & Renewal" },
        ]}
        ctas={[
          { label: "Explore Services", href: "#overview", primary: true },
          { label: "Contact Us", href: "/contact" },
        ]}
        variant="green"
        backgroundImage="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=2000&q=80"
      />

      <QuickNavigation items={quickNavItems} variant="green" />

      <div className="max-w-[1200px] mx-auto px-5 py-16">
        <section
          id="overview"
          className="rounded-[32px] bg-white border border-[#e7e2da] shadow-[0_10px_35px_rgba(15,23,42,0.08)] overflow-hidden"
        >
          <div className="h-[3px] bg-gradient-to-r from-emerald-700 via-green-500 to-emerald-900" />
          <div className="p-10 md:p-8 sm:p-6">
            <SectionHeader
              title="A clearer and more premium service structure"
              subtitle="This version simplifies the experience by organizing your offerings into only four high-level pathways, which matches the grouped navigation style shown in your screenshots."
              accent="green"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                { title: "Yoga", text: "Practice, teacher training, discipline, and yogic philosophy." },
                { title: "Meditation & Retreats", text: "Daily meditation, immersive retreats, and wellness journeys." },
                { title: "Healing", text: "Sound healing, Reiki, singing bowl work, and sacred balancing." },
                { title: "Training", text: "Structured learning pathways for yoga, Reiki, and singing bowl practice." },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-[22px] bg-[#faf8f4] border border-[#ece5da] p-5"
                >
                  <h3 className="text-base font-extrabold text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="yoga" className="mt-16">
          <SectionHeader
            title="Yoga"
            subtitle="A dedicated pathway for practice, discipline, and teacher training."
            accent="red"
          />
          <ServiceGrid cards={yogaServices} accent="red" />
        </section>

        <section id="meditation-retreats" className="mt-16">
          <SectionHeader
            title="Meditation & Retreats"
            subtitle="Programs and immersive journeys for calmness, inner reflection, and restorative retreat experiences."
            accent="green"
          />
          <ServiceGrid cards={meditationRetreatServices} accent="green" />
        </section>

        <section id="healing" className="mt-16">
          <SectionHeader
            title="Healing"
            subtitle="A healing pathway that groups sound healing, Reiki, and sacred energy-balancing modalities together."
            accent="purple"
          />
          <ServiceGrid cards={healingServices} accent="purple" />
        </section>

        <section id="training" className="mt-16">
          <SectionHeader
            title="Training"
            subtitle="Professional learning paths for yoga teachers, Reiki practitioners, and singing bowl facilitators."
            accent="gold"
          />
          <ServiceGrid cards={trainingServices} accent="gold" />
        </section>

        <section id="contact" className="mt-16">
          <CTASection
            title="Need guidance choosing the right path?"
            description="Tell us whether you are looking for personal healing, yoga study, retreat experience, or professional training, and we will help you choose the right service."
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