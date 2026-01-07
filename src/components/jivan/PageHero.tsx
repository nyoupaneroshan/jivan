import Link from "next/link";

type Variant = "orange" | "green";

type HeroStat = { number: string; label: string };
type HeroCTA = { label: string; href: string; primary?: boolean };

export function PageHero({
  badge,
  title,
  subtitle,
  stats,
  ctas,
  variant = "green",
  backgroundImage,
}: {
  badge?: { icon?: string; text: string };
  title: string;
  subtitle?: string;
  stats?: HeroStat[];
  ctas?: HeroCTA[];
  variant?: Variant;
  backgroundImage?: string;
}) {
  const theme =
    variant === "orange"
      ? {
          overlay: "from-[#FF6B35]/95 via-[#FF8C00]/85 to-[#FF6B35]/75",
          primaryText: "text-[#FF6B35]",
          pillBg: "bg-white/20",
          pillBorder: "border-white/30",
          primaryBtn: "bg-white text-[#FF6B35]",
          secondaryBtn: "border-white text-white hover:bg-white/20",
        }
      : {
          // Green theme (based on your contact PHP green vibe)
          overlay: "from-[#093815]/95 via-[#0B3D1C]/92 to-[#0B3D1C]/85",
          primaryText: "text-[#2D6A4F]",
          pillBg: "bg-white/20",
          pillBorder: "border-white/30",
          primaryBtn: "bg-white text-[#2D6A4F]",
          secondaryBtn: "border-white text-white hover:bg-white/20",
        };

  return (
    <section className="relative min-h-[560px] md:min-h-[600px] flex items-center justify-center px-5 pt-20 pb-16 text-white overflow-hidden">
      {!!backgroundImage && (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${backgroundImage}')` }}
        />
      )}

      <div className={`absolute inset-0 bg-gradient-to-br ${theme.overlay}`} />

      <div className="relative z-10 text-center max-w-[1100px] mx-auto">
        {badge?.text && (
          <div
            className={`inline-flex items-center gap-2 ${theme.pillBg} px-7 py-3 rounded-full backdrop-blur border-2 ${theme.pillBorder} text-[12px] md:text-[14px] font-semibold uppercase tracking-[2px]`}
          >
            {badge.icon ? <span className="text-lg">{badge.icon}</span> : null}
            <span>{badge.text}</span>
          </div>
        )}

        <h1 className="mt-6 text-[36px] md:text-[56px] font-black leading-tight drop-shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
          {title}
        </h1>

        {subtitle ? (
          <p className="mt-4 text-[16px] md:text-[22px] opacity-95">
            {subtitle}
          </p>
        ) : null}

        {stats?.length ? (
          <div className="mt-10 flex flex-wrap justify-center gap-6 md:gap-12">
            {stats.map((s, idx) => (
              <div key={idx} className="text-center">
                <span className="block text-[28px] md:text-[40px] font-bold">
                  {s.number}
                </span>
                <span className="block text-[12px] md:text-[13px] opacity-90 uppercase tracking-[1.5px] font-medium">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        ) : null}

        {ctas?.length ? (
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            {ctas.map((cta, idx) => {
              const isPrimary = !!cta.primary;
              return (
                <Link
                  key={idx}
                  href={cta.href}
                  className={[
                    "inline-block px-10 py-4 rounded-full font-bold text-[15px] md:text-[16px] transition",
                    "shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:-translate-y-1",
                    isPrimary ? theme.primaryBtn : `border-2 ${theme.secondaryBtn}`,
                  ].join(" ")}
                >
                  {cta.label}
                </Link>
              );
            })}
          </div>
        ) : null}
      </div>
    </section>
  );
}
