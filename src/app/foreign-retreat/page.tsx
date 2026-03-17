import Link from "next/link";
import { Breadcrumb } from "@/components/jivan/Breadcrumb";
import { PageHero } from "@/components/jivan/PageHero";

type IncludedItem = { title: string; desc: string };
type DayPlan = { day: string; title: string; points: string[] };

const included: IncludedItem[] = [
  {
    title: "Daily yoga and meditation",
    desc: "A refined rhythm of movement, breathwork, and stillness tailored to your level and goals.",
  },
  {
    title: "Luxury wellness and healing sessions",
    desc: "Mantra practices, mindfulness, and optional private healing sessions based on your preferences and needs.",
  },
  {
    title: "International guest support",
    desc: "Assistance with arrival coordination, local guidance, and a smooth retreat experience for international travelers.",
  },
  {
    title: "Private hosting and flexible pacing",
    desc: "A calm, high-touch experience with privacy, comfort, and a schedule that can adapt to your energy each day.",
  },
  {
    title: "Accommodation and meals",
    desc: "3-star lodge accommodation at Lodge Thasang Village with nourishing vegetarian meals aligned with the retreat rhythm.",
  },
  {
    title: "Local transport (in-retreat)",
    desc: "Ground transfers during programmed retreat days and curated local experiences as per itinerary.",
  },
];

const samplePlan: DayPlan[] = [
  {
    day: "Day 1",
    title: "Arrival at Thasang and grounding",
    points: [
      "Arrival support and lodge check-in at Lodge Thasang Village",
      "Gentle welcome session (stretching and breathwork)",
      "Evening meditation and intention setting",
    ],
  },
  {
    day: "Day 2",
    title: "Reset the body, calm the mind",
    points: [
      "Morning pranayama and gentle Hatha flow",
      "Guided mindfulness with quiet time",
      "Optional private healing session (by request)",
    ],
  },
  {
    day: "Day 3",
    title: "Deepen practice and stability",
    points: [
      "Meditation training (technique and personal practice plan)",
      "Journaling and integration time",
      "Evening mantra practice and seated meditation",
    ],
  },
  {
    day: "Day 4",
    title: "Nature immersion and mindful walking",
    points: [
      "Guided mindful walk and local nature exploration near Thasang",
      "Breath-led relaxation and grounding practice",
      "Evening restorative session (gentle movement and meditation)",
    ],
  },
  {
    day: "Day 5",
    title: "Healing and inner work",
    points: [
      "Yoga for nervous system balance",
      "Private coaching session (goals, habits, and continuity plan)",
      "Evening deep meditation and reflection",
    ],
  },
  {
    day: "Day 6",
    title: "Retreat peak day",
    points: [
      "Longer morning practice (flow, breath, stillness)",
      "Quiet afternoon (rest, reading, reflection)",
      "Closing circle and gratitude practice",
    ],
  },
  {
    day: "Day 7",
    title: "Departure and take-home plan",
    points: [
      "Light morning session",
      "Personalized continuation plan",
      "Departure coordination and onward travel support",
    ],
  },
];

const faqs = [
  {
    q: "What is the price?",
    a: "International Luxury Retreat starts from $10,000 for 7 days. Final pricing depends on season, room type at Lodge Thasang Village, group size, and optional upgrades.",
  },
  {
    q: "What kind of accommodation is included?",
    a: "The retreat includes 3-star accommodation at Lodge Thasang Village (Thasang). Upgrades may be possible depending on availability and season.",
  },
  {
    q: "Is this suitable for beginners?",
    a: "Yes. The program is tailored to your experience level. The focus is safe progress, calm, and clarity.",
  },
  {
    q: "What’s included vs not included?",
    a: "Included items are listed on this page. International flights, visa, travel insurance, and personal expenses are usually not included unless agreed in writing.",
  },
];

export default function InternationalLuxuryRetreatPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "International Luxury Retreat" },
  ];

  return (
    <div className="min-h-screen bg-[#eaf7ee] bg-[url('/img/design/color-page.jpg')] bg-repeat bg-center">
      <Breadcrumb items={breadcrumbItems} />

      <PageHero
        badge={{ icon: "", text: "International Luxury Retreat" }}
        title="International Luxury Retreat"
        subtitle="A 7-day premium retreat at Lodge Thasang Village (3-star accommodation), curated for deep rest, clarity, and guided practice in a serene setting."
        stats={[
          { number: "7 Days", label: "Program length" },
          { number: "From $10,000", label: "Starting price" },
          { number: "Lodge Thasang", label: "3-star stay" },
          { number: "Private hosting", label: "Premium support" },
        ]}
        ctas={[
          { label: "Request itinerary", href: "#inquiry", primary: true },
          { label: "See program", href: "#program" },
        ]}
        variant="green"
        backgroundImage="https://images.unsplash.com/photo-1526779259212-756e04f08db3?w=1920"
      />

      <div className="max-w-[1200px] mx-auto px-5 pb-20">
        <section className="pt-14">
          <div className="grid grid-cols-3 lg:grid-cols-3 md:grid-cols-1 gap-6">
            <div className="rounded-2xl bg-white/85 backdrop-blur border border-green-100 shadow-sm p-7">
              <h2 className="text-xl font-extrabold text-green-900">Designed for international guests</h2>
              <p className="mt-2 text-gray-700">
                Clear coordination, calm hosting, and support from arrival to departure.
              </p>
            </div>
            <div className="rounded-2xl bg-white/85 backdrop-blur border border-green-100 shadow-sm p-7">
              <h2 className="text-xl font-extrabold text-green-900">Luxury, not rush</h2>
              <p className="mt-2 text-gray-700">
                A premium pace with privacy, comfort, and daily practices designed for deep restoration.
              </p>
            </div>
            <div className="rounded-2xl bg-white/85 backdrop-blur border border-green-100 shadow-sm p-7">
              <h2 className="text-xl font-extrabold text-green-900">A take-home practice plan</h2>
              <p className="mt-2 text-gray-700">
                You leave with a personal routine that is realistic and sustainable after you return home.
              </p>
            </div>
          </div>
        </section>

        <section className="pt-14" id="included">
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <div>
              <h2 className="text-3xl font-black text-gray-900">What’s included</h2>
              <p className="mt-2 text-gray-700 max-w-2xl">
                A premium 7-day structure with daily practice, integration time, and optional healing support,
                hosted at Lodge Thasang Village.
              </p>
            </div>

            <div className="rounded-full bg-white/80 backdrop-blur border border-green-100 px-5 py-2 text-sm font-semibold text-green-800">
              Starting from $10,000
            </div>
          </div>

          <div className="mt-8 grid grid-cols-2 lg:grid-cols-2 md:grid-cols-1 gap-6">
            {included.map((x) => (
              <div
                key={x.title}
                className="rounded-2xl bg-white/85 backdrop-blur border border-green-100 shadow-sm p-7"
              >
                <h3 className="text-lg font-extrabold text-gray-900">{x.title}</h3>
                <p className="mt-2 text-gray-700">{x.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="pt-14" id="program">
          <h2 className="text-3xl font-black text-gray-900">Sample 7-day flow</h2>
          <p className="mt-2 text-gray-700 max-w-3xl">
            This is a sample outline; your final itinerary is tailored to your pace, goals, and comfort level while staying
            based at Lodge Thasang Village.
          </p>

          <div className="mt-8 grid grid-cols-2 lg:grid-cols-2 md:grid-cols-1 gap-6">
            {samplePlan.map((d) => (
              <div
                key={d.day}
                className="rounded-2xl bg-white/85 backdrop-blur border border-green-100 shadow-sm p-7"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="inline-flex items-center rounded-full bg-green-50 text-green-800 border border-green-100 px-3 py-1 text-sm font-bold">
                    {d.day}
                  </span>
                </div>
                <h3 className="mt-3 text-xl font-extrabold text-gray-900">{d.title}</h3>
                <ul className="mt-3 space-y-2 text-gray-700">
                  {d.points.map((p) => (
                    <li key={p} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-green-600 shrink-0" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="pt-14" id="vip">
          <div className="rounded-3xl bg-gradient-to-r from-green-700 to-green-800 text-white p-10 border border-white/10 shadow-lg">
            <h2 className="text-3xl font-black">Luxury upgrades (optional)</h2>
            <p className="mt-2 text-white/85 max-w-3xl">
              Add comfort and exclusivity: premium room choices (subject to availability), private driver support, photography,
              extended nights, and specialized private healing sessions aligned with your goals.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              {[
                "Private driver support",
                "Premium room preference",
                "Extra healing sessions",
                "Extended program",
                "Photography support",
                "Concierge coordination",
              ].map((t) => (
                <span
                  key={t}
                  className="px-4 py-2 rounded-full bg-white/10 border border-white/15 text-sm font-semibold"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="pt-14" id="inquiry">
          <div className="grid grid-cols-[1.2fr_.8fr] lg:grid-cols-[1.2fr_.8fr] md:grid-cols-1 gap-8 items-start">
            <div className="rounded-2xl bg-white/85 backdrop-blur border border-green-100 shadow-sm p-8">
              <h2 className="text-3xl font-black text-gray-900">Request your itinerary</h2>
              <p className="mt-2 text-gray-700">
                Tell us your dates, interests (meditation, yoga, healing, nature immersion), and comfort level. We will
                send a customized 7-day International Luxury Retreat plan based at Lodge Thasang Village with pricing.
              </p>

              <form className="mt-7 grid grid-cols-2 md:grid-cols-1 gap-4">
                <label className="block">
                  <span className="text-sm font-semibold text-gray-700">Full name</span>
                  <input
                    className="mt-2 w-full rounded-xl border border-green-100 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-green-400/40"
                    placeholder="Your name"
                  />
                </label>

                <label className="block">
                  <span className="text-sm font-semibold text-gray-700">Email</span>
                  <input
                    type="email"
                    className="mt-2 w-full rounded-xl border border-green-100 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-green-400/40"
                    placeholder="you@example.com"
                  />
                </label>

                <label className="block">
                  <span className="text-sm font-semibold text-gray-700">WhatsApp / Phone</span>
                  <input
                    className="mt-2 w-full rounded-xl border border-green-100 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-green-400/40"
                    placeholder="+1 ..."
                  />
                </label>

                <label className="block">
                  <span className="text-sm font-semibold text-gray-700">Preferred dates</span>
                  <input
                    className="mt-2 w-full rounded-xl border border-green-100 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-green-400/40"
                    placeholder="e.g., March 10–17, 2026"
                  />
                </label>

                <label className="block col-span-2 md:col-span-1">
                  <span className="text-sm font-semibold text-gray-700">What do you want from this retreat?</span>
                  <textarea
                    className="mt-2 w-full rounded-xl border border-green-100 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-green-400/40 min-h-[120px]"
                    placeholder="Goals, preferences, health notes, comfort level..."
                  />
                </label>

                <button
                  type="button"
                  className="col-span-2 md:col-span-1 rounded-xl bg-gradient-to-r from-green-600 to-green-700 text-white font-bold py-3.5 shadow-lg hover:opacity-95 transition"
                >
                  Send inquiry
                </button>

                <p className="col-span-2 md:col-span-1 text-xs text-gray-600">
                  By sending, you agree we may contact you about your retreat plan.
                </p>
              </form>
            </div>

            <div className="md:static sticky top-6">
              <div className="rounded-2xl bg-white/85 backdrop-blur border border-green-100 shadow-sm p-7">
                <h3 className="text-xl font-extrabold text-gray-900">Quick actions</h3>
                <p className="mt-2 text-gray-700">
                  Prefer fast coordination? Message us and we will share a tailored itinerary based at Lodge Thasang Village.
                </p>

                <div className="mt-5 grid gap-3">
                  <Link
                    href="#inquiry"
                    className="text-center rounded-xl bg-green-700 text-white font-bold py-3 hover:bg-green-800 transition"
                  >
                    Request itinerary
                  </Link>
                  <Link
                    href="/contact"
                    className="text-center rounded-xl bg-white border border-green-200 text-green-900 font-bold py-3 hover:bg-green-50 transition"
                  >
                    Contact page
                  </Link>
                </div>

                <div className="mt-6 rounded-xl bg-green-50 border border-green-100 p-4">
                  <p className="text-sm text-green-900 font-semibold">Price anchor</p>
                  <p className="mt-1 text-sm text-gray-700">
                    From $10,000 (final quote depends on room type, season, group size, and customization).
                  </p>
                </div>
              </div>

              <div className="mt-6 rounded-2xl bg-white/85 backdrop-blur border border-green-100 shadow-sm p-7">
                <h3 className="text-xl font-extrabold text-gray-900">FAQs</h3>
                <div className="mt-4 space-y-4">
                  {faqs.map((f) => (
                    <div key={f.q}>
                      <p className="font-bold text-gray-900">{f.q}</p>
                      <p className="mt-1 text-gray-700">{f.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pt-14">
          <div className="rounded-3xl bg-white/85 backdrop-blur border border-green-100 shadow-sm p-10 flex items-center justify-between gap-6 flex-wrap">
            <div>
              <h2 className="text-2xl font-black text-gray-900">Ready to plan your International Luxury Retreat?</h2>
              <p className="mt-2 text-gray-700">
                We will send a customized 7-day itinerary based at Lodge Thasang Village with clear inclusions and pricing.
              </p>
            </div>
            <Link
              href="#inquiry"
              className="rounded-xl bg-gradient-to-r from-green-600 to-green-700 text-white font-bold px-7 py-3.5 shadow-lg hover:opacity-95 transition"
            >
              Request itinerary
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
