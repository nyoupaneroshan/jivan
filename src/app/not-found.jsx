import Link from "next/link";

export default function NotFound() {
  return (
    <div className="relative min-h-[100svh] overflow-hidden bg-[#061a12]">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-emerald-500/20 blur-[90px]" />
        <div className="absolute top-20 -right-40 h-[520px] w-[520px] rounded-full bg-teal-400/15 blur-[90px]" />
        <div className="absolute -bottom-56 left-1/3 h-[620px] w-[620px] rounded-full bg-green-600/15 blur-[100px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/30 to-black/60" />
        <div className="absolute inset-0 opacity-[0.08] [background-image:radial-gradient(#ffffff_1px,transparent_1px)] [background-size:18px_18px]" />
      </div>

      {/* Content */}
      <div className="relative mx-auto flex min-h-[100svh] max-w-[1200px] items-center px-6 py-16 sm:px-5 sm:py-12">
        {/* IMPORTANT: switch to 1 col earlier for better tablet/mobile */}
        <div className="grid w-full grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-12">
          {/* Left: text */}
          <div className="flex flex-col justify-center">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur">
              <span className="text-base">🌿</span>
              Jivan Parivartan
            </div>

            <h1 className="mt-6 text-[64px] font-extrabold leading-[0.95] tracking-tight text-white sm:text-[48px]">
              404
            </h1>

            <h2 className="mt-4 text-2xl font-bold text-white sm:text-xl">
              This page couldn’t be found
            </h2>

            <p className="mt-4 max-w-[60ch] text-[15.5px] leading-relaxed text-white/70">
              The link may be broken, or the page may have been moved. Return to
              the homepage to continue exploring programs, retreats, and healing
              sessions.
            </p>

            {/* Actions (stack on mobile for better touch targets) */}
            <div className="mt-8 flex flex-wrap items-center gap-4 sm:flex-col sm:items-stretch">
              <Link
                href="/"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-full px-7 py-3.5 font-semibold text-white shadow-lg shadow-emerald-600/20
                           bg-gradient-to-r from-emerald-600 via-green-600 to-teal-500
                           transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-emerald-600/30
                           active:translate-y-0 active:scale-[0.98]
                           focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-300/40"
              >
                <span className="pointer-events-none absolute -left-24 top-0 h-full w-24 bg-white/20 blur-md rotate-12 transition-all duration-700 group-hover:left-[120%]" />
                <span className="relative">Back to Home</span>
                <span className="relative ml-2 inline-block transition-transform duration-300 group-hover:translate-x-0.5">
                  →
                </span>
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-7 py-3.5 font-semibold text-white/90
                           backdrop-blur transition-all duration-300 hover:bg-white/10 hover:-translate-y-0.5
                           sm:w-full"
              >
                Contact us
              </Link>
            </div>

            {/* Helpful links (single column on mobile) */}
            <div className="mt-10 grid grid-cols-3 gap-4 md:grid-cols-3 sm:grid-cols-1">
              {[
                { label: "Explore Programs", href: "/services", desc: "Browse all offerings." },
                { label: "Meditation & Retreat", href: "/meditation", desc: "Find stillness & renewal." },
                { label: "Reiki Healing", href: "/reiki", desc: "Balance energy & calm." },
              ].map((x) => (
                <Link
                  key={x.href}
                  href={x.href}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5 text-white/90 backdrop-blur
                             transition-all duration-300 hover:bg-white/10 hover:-translate-y-0.5"
                >
                  <div className="font-extrabold">{x.label}</div>
                  <div className="mt-2 text-sm text-white/70">{x.desc}</div>
                </Link>
              ))}
            </div>
          </div>

          {/* Right: illustration card */}
          <div className="flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-[520px] rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur sm:p-6">
              <div className="absolute -top-10 -right-10 h-44 w-44 rounded-full bg-emerald-400/20 blur-2xl" />
              <div className="absolute -bottom-12 -left-10 h-52 w-52 rounded-full bg-teal-300/15 blur-2xl" />

              <div className="relative">
                <div className="text-white/70 text-sm font-semibold tracking-wide">
                  Lost, but not alone
                </div>

                <div className="mt-4 rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-transparent p-6 sm:p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="text-white font-extrabold text-lg">
                        Take a breath.
                      </div>
                      <div className="mt-2 text-white/70 text-sm leading-relaxed">
                        Sometimes the best next step is simply returning to what
                        feels grounded.
                      </div>
                    </div>

                    <div className="relative h-16 w-16 shrink-0">
                      <div className="absolute inset-0 rounded-full bg-emerald-400/20 blur-lg animate-pulse" />
                      <div className="absolute inset-2 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 opacity-70" />
                      <div className="absolute inset-[14px] rounded-full bg-white/80 flex items-center justify-center text-xl">
                        🧘
                      </div>
                    </div>
                  </div>
                </div>

                {/* Mobile-friendly: 2 columns on mobile, 2 columns on desktop; no tiny cramped 4-up */}
                <div className="mt-6 grid grid-cols-2 gap-4 sm:gap-3">
                  {[
                    { k: "Tip", v: "Use the menu above to navigate." },
                    { k: "Help", v: "Contact us if you need guidance." },
                    { k: "Explore", v: "Programs, retreats, and healing." },
                    { k: "Return", v: "Home is one click away." },
                  ].map((b) => (
                    <div
                      key={b.k}
                      className="rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-3 text-white/80"
                    >
                      <div className="text-[11px] uppercase tracking-[2px] text-white/50">
                        {b.k}
                      </div>
                      <div className="mt-2 text-sm font-semibold text-white/80 leading-snug">
                        {b.v}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 text-xs text-white/45">
                  Error code: 404 • Jivan Parivartan
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/40 to-transparent" />
    </div>
  );
}
