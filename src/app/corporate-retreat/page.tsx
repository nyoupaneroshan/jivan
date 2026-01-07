import React from "react";
import { Breadcrumb } from "@/components/jivan/Breadcrumb";
import { PageHero } from "@/components/jivan/PageHero";
import { QuickNavigation } from "@/components/jivan/QuickNavigation";
import { CTASection } from "@/components/jivan/yoga/CTASection";

type BenefitCard = {
  icon: string;
  title: string;
  description: string;
};

type RetreatType = {
  icon: string;
  title: string;
  duration: string;
  description: string;
  features: string[];
};

type ActivityItem = {
  number: number;
  title: string;
  description: string;
};

type PricingPlan = {
  title: string;
  price: string;
  duration: string;
  features: string[];
  featured?: boolean;
  ctaLabel: string;
  ctaHref: string;
};

type Testimonial = {
  text: string;
  initials: string;
  name: string;
  role: string;
};

function SectionHeader({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="text-center mb-10">
      <p className="text-xs font-extrabold tracking-[0.25em] text-blue-700/80 uppercase">
        Corporate Wellness
      </p>
      <h2 className="mt-3 text-4xl md:text-3xl font-extrabold text-slate-900 leading-tight">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-4 text-slate-600 text-lg md:text-base max-w-[780px] mx-auto leading-relaxed">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}

export default function CorporateRetreatPage() {
  const images = {
    hero: "https://picsum.photos/seed/corporate-retreat-hero/1920/1080",
  };

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Corporate Wellness Retreats" },
  ];

  const quickNavItems = [
    { id: "overview", icon: "📋", label: "Overview", href: "#overview" },
    { id: "benefits", icon: "✨", label: "Benefits", href: "#benefits" },
    { id: "formats", icon: "🧾", label: "Retreat Formats", href: "#formats" },
    { id: "included", icon: "🧠", label: "What's Included", href: "#included" },
    { id: "pricing", icon: "💳", label: "Pricing", href: "#pricing" },
    { id: "testimonials", icon: "💬", label: "Testimonials", href: "#testimonials" },
    { id: "contact", icon: "📞", label: "Contact", href: "#contact" },
  ];

  const heroStats = [
    { number: "85%", label: "Reduced Stress" },
    { number: "70%", label: "Better Team Cohesion" },
    { number: "60%", label: "Productivity Increase" },
    { number: "50%", label: "Lower Turnover" },
  ];

  const heroCTAs = [
    { label: "Request Proposal", href: "#contact", primary: true },
    { label: "Learn More", href: "#overview" },
  ];

  const overviewTitle = "Transform Your Workplace Culture";
  const overviewParagraphs = [
    "In today's high-pressure business environment, employee wellbeing is no longer optional—it's essential. Our corporate wellness retreats combine evidence-based wellness practices with team-building experiences designed specifically for modern workplaces. Whether your team is facing burnout, communication challenges, or simply needs rejuvenation, our customized programs deliver measurable results.",
    "From one-day intensive sessions to multi-day immersive retreats, we create experiences that reduce stress, improve mental health, strengthen team bonds, and boost overall productivity. Backed by research showing that wellness programs can increase employee engagement by up to 70% and reduce healthcare costs significantly, investing in your team's wellbeing is investing in your company's future.",
  ];

  const benefits: BenefitCard[] = [
    {
      icon: "🔥",
      title: "Reduced Burnout",
      description:
        "Combat workplace stress and exhaustion through mindfulness, yoga, and relaxation techniques proven to lower cortisol levels.",
    },
    {
      icon: "🤝",
      title: "Stronger Team Bonds",
      description:
        "Build trust and cohesion through collaborative activities that break down silos and improve interpersonal relationships.",
    },
    {
      icon: "🎯",
      title: "Enhanced Productivity",
      description:
        "Employees return energized, focused, and motivated, leading to measurable improvements in performance metrics.",
    },
    {
      icon: "🧠",
      title: "Mental Health Support",
      description:
        "Provide tools for stress management, emotional regulation, and resilience that employees use long after the retreat.",
    },
    {
      icon: "💡",
      title: "Innovation Boost",
      description:
        "Creative workshops and fresh perspectives spark new ideas and problem-solving approaches.",
    },
    {
      icon: "📉",
      title: "Lower Turnover",
      description:
        "Show employees they're valued, increasing retention rates and reducing recruitment costs significantly.",
    },
  ];

  const retreatTypes: RetreatType[] = [
    {
      icon: "⚡",
      title: "One-Day Power Retreat",
      duration: "8 Hours",
      description:
        "Perfect for busy teams with limited time. This intensive one-day program packs maximum impact into 8 hours, combining wellness activities, team-building exercises, and stress management workshops. Ideal for quarterly team development or project kickoffs. Includes yoga, meditation, team challenges, wellness workshops, and healthy meals.",
      features: [
        "Morning Yoga Session",
        "Team Building Games",
        "Stress Management Workshop",
        "Healthy Lunch Included",
        "Mindfulness Training",
        "Takeaway Wellness Tools",
      ],
    },
    {
      icon: "🌿",
      title: "Weekend Wellness Escape",
      duration: "2-3 Days",
      description:
        "Our most popular option provides deeper immersion without extended time away from work. Teams disconnect from daily stress while engaging in yoga, meditation, outdoor activities, and collaborative workshops. Includes accommodation at a serene retreat center, all meals, and a comprehensive wellness program designed to reset mind and body.",
      features: [
        "Accommodation Included",
        "Daily Yoga & Meditation",
        "Outdoor Adventures",
        "All Meals Provided",
        "Leadership Workshops",
        "Evening Relaxation",
      ],
    },
    {
      icon: "🏔️",
      title: "Extended Transformation Retreat",
      duration: "5-7 Days",
      description:
        "For organizations committed to deep cultural change and team transformation. This extended program allows time for profound personal and collective growth through intensive wellness practices, strategic planning sessions, skill-building workshops, and outdoor adventures. Includes luxury accommodation, all activities, meals, and follow-up support for lasting impact.",
      features: [
        "Luxury Accommodation",
        "Comprehensive Program",
        "Strategic Planning",
        "Adventure Activities",
        "Personal Development",
        "Post-Retreat Support",
      ],
    },
    {
      icon: "🧩",
      title: "Custom Corporate Program",
      duration: "Flexible",
      description:
        "Every organization is unique. We design fully customized programs tailored to your specific goals, challenges, team size, and budget. Whether you need executive leadership retreats, department-specific wellness days, or company-wide wellness initiatives, we create bespoke experiences. Includes needs assessment consultation and post-program evaluation.",
      features: [
        "Needs Assessment",
        "Custom Activities",
        "Flexible Scheduling",
        "Any Location",
        "Scalable Groups",
        "ROI Tracking",
      ],
    },
  ];

  const activities: ActivityItem[] = [
    {
      number: 1,
      title: "Yoga & Movement",
      description:
        "Daily yoga sessions adapted for all fitness levels to reduce physical tension and improve energy.",
    },
    {
      number: 2,
      title: "Guided Meditation",
      description:
        "Mindfulness and meditation practices to calm the mind, reduce stress, and improve focus.",
    },
    {
      number: 3,
      title: "Team Building Games",
      description:
        "Collaborative challenges and problem-solving activities that strengthen bonds and communication.",
    },
    {
      number: 4,
      title: "Wellness Workshops",
      description:
        "Educational sessions on stress management, work-life balance, and healthy habits.",
    },
    {
      number: 5,
      title: "Sound Healing",
      description:
        "Therapeutic singing bowl sessions that promote deep relaxation and nervous system reset.",
    },
    {
      number: 6,
      title: "Outdoor Adventures",
      description:
        "Nature walks, hiking, or adventure activities that energize and inspire teamwork.",
    },
    {
      number: 7,
      title: "Reiki Energy Work",
      description:
        "Optional healing sessions for deep stress release and emotional balance.",
    },
    {
      number: 8,
      title: "Nutritious Meals",
      description:
        "Healthy, delicious meals designed to nourish the body and support wellness goals.",
    },
  ];

  const pricingPlans: PricingPlan[] = [
    {
      title: "One-Day Retreat",
      price: "2,500",
      duration: "Per Person",
      features: [
        "8-hour program",
        "Yoga & meditation",
        "Team building",
        "Wellness workshop",
        "Healthy meals",
        "Wellness kit",
      ],
      ctaLabel: "Request Quote",
      ctaHref: "/contact",
    },
    {
      title: "Weekend Escape",
      price: "12,000",
      duration: "Per Person",
      featured: true,
      features: [
        "2-3 day program",
        "Accommodation",
        "All activities",
        "All meals included",
        "Adventure options",
        "Follow-up support",
      ],
      ctaLabel: "Request Quote",
      ctaHref: "/contact",
    },
    {
      title: "Custom Program",
      price: "Custom",
      duration: "Contact Us",
      features: [
        "Tailored duration",
        "Custom activities",
        "Any location",
        "Flexible group size",
        "Specialized needs",
        "ROI tracking",
      ],
      ctaLabel: "Contact Us",
      ctaHref: "/contact",
    },
  ];

  const testimonials: Testimonial[] = [
    {
      text:
        "Our team came back completely transformed. The stress levels dropped noticeably, and we've seen a 40% improvement in collaboration. This retreat was worth every rupee.",
      initials: "SK",
      name: "Sanjay Kumar",
      role: "CEO, Tech Solutions Pvt Ltd",
    },
    {
      text:
        "We were facing major burnout issues in our marketing team. The weekend retreat helped rebuild morale and gave everyone practical tools to manage stress. Highly recommend!",
      initials: "PM",
      name: "Priya Malik",
      role: "HR Director, Creative Agency",
    },
    {
      text:
        "The custom program they designed for our leadership team was exactly what we needed. Professional, impactful, and perfectly executed. Our executives still talk about it months later.",
      initials: "RK",
      name: "Ramesh Khatri",
      role: "Managing Director, Financial Services",
    },
    {
      text:
        "Best investment we've made in employee wellness. The team bonding improved dramatically, and productivity is up. Planning our second retreat already!",
      initials: "AS",
      name: "Anita Sharma",
      role: "Founder, E-commerce Startup",
    },
  ];

  const contactButtons = [
    { icon: "📞", label: "Call Us", href: "tel:+9779818514837" },
    { icon: "✉️", label: "Email Us", href: "mailto:info@jivanparivartan.com" },
    { icon: "📝", label: "Request Proposal", href: "/contact" },
  ];

  return (
    <div className="min-h-screen bg-[#faf6f1] bg-[url('/img/design/color-page.jpg')] bg-repeat bg-center">
      <Breadcrumb items={breadcrumbItems} />

      <PageHero
        badge={{ icon: "🏢", text: "Invest in Your Team’s Wellbeing" }}
        title="Corporate Wellness Retreats"
        subtitle="Build Stronger Teams, Boost Productivity & Reduce Burnout"
        stats={heroStats}
        ctas={heroCTAs}
        variant="red"
        backgroundImage={images.hero}
      />

      <QuickNavigation items={quickNavItems} variant="red" />

      <div className="max-w-[1200px] mx-auto px-5 py-16">
        {/* Overview [file:5] */}
        <section
          id="overview"
          className="relative overflow-hidden rounded-3xl bg-white/80 backdrop-blur border border-slate-200 shadow-[0_10px_35px_rgba(15,23,42,0.08)]"
        >
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-green-700 via-sky-500 to-green-700" />
          <div className="p-10 md:p-8 sm:p-6">
            <SectionHeader
              title={overviewTitle}
              subtitle="A modern wellness retreat approach that supports performance, retention, and team alignment."
            />

            <div className="space-y-6 text-slate-700 leading-relaxed text-[17px] md:text-[15px] max-w-[920px] mx-auto">
              {overviewParagraphs.map((p, idx) => (
                <p key={idx} className="text-center">
                  {p}
                </p>
              ))}
            </div>

            <div className="mt-10 grid grid-cols-4 md:grid-cols-2 gap-4 max-w-[980px] mx-auto">
              {heroStats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl bg-white border border-slate-200 px-5 py-4 shadow-sm"
                >
                  <div className="text-2xl font-extrabold text-slate-900">
                    {s.number}
                  </div>
                  <div className="mt-1 text-xs uppercase tracking-wider text-slate-500 font-bold">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits [file:5] */}
        <section id="benefits" className="mt-16">
          <SectionHeader
            title="Proven Benefits for Your Organization"
            subtitle="Research-backed outcomes that transform workplace culture."
          />

          <div className="grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-lg transition-all"
              >
                <div className="p-8">
                  <div className="inline-flex items-center gap-3">
                    <span className="w-12 h-12 rounded-2xl bg-gradient-to-br from-green-700 to-green-900 text-white flex items-center justify-center text-2xl shadow-sm">
                      {b.icon}
                    </span>
                    <h3 className="text-lg font-extrabold text-slate-900">
                      {b.title}
                    </h3>
                  </div>

                  <p className="mt-4 text-slate-600 leading-relaxed text-sm">
                    {b.description}
                  </p>

                  <div className="mt-6 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
                  <p className="mt-4 text-xs font-bold text-green-700/80 tracking-wider uppercase">
                    Evidence-led facilitation
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Retreat formats [file:5] */}
        <section id="formats" className="mt-16">
          <SectionHeader
            title="Tailored Retreat Formats"
            subtitle="Choose the program that fits your team’s time, goals, and depth of change."
          />

          <div className="space-y-6">
            {retreatTypes.map((r) => (
              <div
                key={r.title}
                className="rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-lg transition-all overflow-hidden"
              >
                <div className="p-8 md:p-6">
                  <div className="flex items-start justify-between gap-6 flex-wrap">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-700 to-green-900 text-white flex items-center justify-center text-2xl shadow-sm">
                        {r.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl md:text-xl font-extrabold text-slate-900">
                          {r.title}
                        </h3>
                        <p className="mt-1 text-sm text-slate-600">
                          Designed for measurable culture and wellbeing outcomes.
                        </p>
                      </div>
                    </div>

                    <span className="inline-flex items-center px-4 py-2 rounded-full text-xs font-extrabold tracking-wider uppercase text-green-800 bg-green-50 border border-green-100">
                      {r.duration}
                    </span>
                  </div>

                  <p className="mt-6 text-slate-700 leading-relaxed text-[15px]">
                    {r.description}
                  </p>

                  <div className="mt-6 grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-3">
                    {r.features.map((f) => (
                      <div
                        key={f}
                        className="rounded-2xl bg-slate-50 border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-700"
                      >
                        {f}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="h-1 bg-gradient-to-r from-green-700 via-sky-500 to-green-700" />
              </div>
            ))}
          </div>
        </section>

        {/* Included [file:5] */}
        <section id="included" className="mt-16">
          <div className="rounded-3xl bg-gradient-to-br from-green-50 to-white border border-green-100 shadow-sm overflow-hidden">
            <div className="p-10 md:p-8 sm:p-6">
              <SectionHeader
                title="What's Included in Our Retreats"
                subtitle="A balanced mix of wellness, resilience tools, and team alignment experiences."
              />

              <div className="grid grid-cols-2 md:grid-cols-1 gap-5">
                {activities.map((a) => (
                  <div
                    key={a.number}
                    className="rounded-3xl bg-white border border-slate-200 shadow-sm p-6 flex gap-4"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-green-700 to-green-900 text-white font-extrabold flex items-center justify-center shrink-0">
                      {a.number}
                    </div>
                    <div>
                      <h4 className="text-base font-extrabold text-slate-900">
                        {a.title}
                      </h4>
                      <p className="mt-1 text-sm text-slate-600 leading-relaxed">
                        {a.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="h-1 bg-gradient-to-r from-green-700 via-sky-500 to-green-700" />
          </div>
        </section>

        {/* Pricing (UPDATED: 1 col mobile, 2 col md, 3 col lg; equal height) [file:5] */}
        <section id="pricing" className="mt-16">
          <SectionHeader
            title="Investment in Your Team"
            subtitle="Flexible pricing options to fit your budget."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 items-stretch">
            {pricingPlans.map((p) => (
              <div
                key={p.title}
                className={[
                  "relative rounded-3xl bg-white border shadow-sm hover:shadow-xl transition-all overflow-hidden flex flex-col h-full",
                  p.featured ? "border-green-600" : "border-slate-200",
                ].join(" ")}
              >
                {p.featured ? (
                  <>
                    <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-green-700 via-sky-500 to-green-700" />
                    <div className="absolute top-5 right-5 rounded-full bg-green-700 text-white text-xs font-extrabold px-3 py-1">
                      Most Popular
                    </div>
                  </>
                ) : (
                  <div className="absolute inset-x-0 top-0 h-1 bg-slate-100" />
                )}

                <div className="p-8 flex flex-col h-full">
                  <div>
                    <h3 className="text-xl font-extrabold text-slate-900">
                      {p.title}
                    </h3>

                    <div className="mt-4">
                      <div className="text-4xl font-extrabold text-green-800 leading-none">
                        {p.price}
                      </div>
                      <div className="mt-2 text-sm text-slate-500 font-semibold">
                        {p.duration}
                      </div>
                    </div>

                    <div className="mt-6 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

                    <ul className="mt-6 space-y-3 text-sm text-slate-700">
                      {p.features.map((f) => (
                        <li key={f} className="flex gap-3">
                          <span className="mt-1.5 w-2 h-2 rounded-full bg-green-700 shrink-0" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href={p.ctaHref}
                    className={[
                      "mt-auto inline-flex w-full items-center justify-center px-6 py-3 rounded-full font-extrabold transition",
                      p.featured
                        ? "text-white bg-gradient-to-br from-blue-700 to-blue-900 shadow hover:shadow-lg"
                        : "text-blue-800 bg-blue-50 border border-blue-100 hover:bg-blue-100",
                    ].join(" ")}
                  >
                    {p.ctaLabel}
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-2xl bg-slate-50 border border-slate-200 p-5 text-center text-sm text-slate-600">
            Group discounts available for teams of 20+. Prices include all activities, materials, and facilitators.
          </div>
        </section>

        {/* Testimonials [file:5] */}
        <section id="testimonials" className="mt-16">
          <SectionHeader
            title="What Companies Say"
            subtitle="Real results from organizations like yours."
          />

          <div className="grid grid-cols-2 md:grid-cols-1 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="rounded-3xl bg-white border border-slate-200 shadow-sm p-8"
              >
                <div className="flex items-start gap-4">
                  <div className="text-4xl text-blue-700 leading-none">“</div>
                  <p className="text-slate-700 leading-relaxed italic">{t.text}</p>
                </div>

                <div className="mt-7 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-700 to-blue-900 text-white font-extrabold flex items-center justify-center">
                    {t.initials}
                  </div>
                  <div>
                    <div className="text-base font-extrabold text-slate-900">
                      {t.name}
                    </div>
                    <div className="text-sm text-slate-600">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA [file:5] */}
        <section id="contact" className="mt-16">
          <CTASection
            title="Ready to Transform Your Team?"
            description="Let's discuss how a wellness retreat can benefit your organization"
            buttons={contactButtons}
            variant="red"
            backgroundEmoji="🏢"
          />
        </section>
      </div>
    </div>
  );
}
