import Link from "next/link";

type Variant = "orange" | "green";

export function CTASection({
  title,
  description,
  buttons,
  variant = "green",
  backgroundEmoji,
}: {
  title: string;
  description: string;
  buttons: { icon?: string; label: string; href: string }[];
  variant?: Variant;
  backgroundEmoji?: string;
}) {
  const theme =
    variant === "orange"
      ? {
          bg: "from-[#FF6B35] to-[#FF8C00]",
          text: "text-[#FF6B35]",
        }
      : {
          bg: "from-[#2D6A4F] to-[#34A853]",
          text: "text-[#2D6A4F]",
        };

  return (
    <section
      className={[
        "relative overflow-hidden rounded-[20px] px-8 md:px-14 py-14 md:py-20 text-center text-white",
        "shadow-[0_8px_40px_rgba(0,0,0,0.18)]",
        `bg-gradient-to-br ${theme.bg}`,
        "mt-14",
      ].join(" ")}
    >
      {backgroundEmoji ? (
        <div className="absolute -top-16 -right-10 text-[220px] opacity-[0.08] select-none">
          {backgroundEmoji}
        </div>
      ) : null}

      <div className="relative z-10">
        <h2 className="text-[30px] md:text-[42px] font-black">{title}</h2>
        <p className="mt-4 text-[16px] md:text-[20px] opacity-95">
          {description}
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          {buttons.map((b, idx) => (
            <Link
              key={idx}
              href={b.href}
              className={[
                "inline-flex items-center gap-2 rounded-full px-10 py-4 font-bold text-[16px] bg-white",
                theme.text,
                "shadow-[0_4px_20px_rgba(255,255,255,0.25)] hover:-translate-y-1 transition",
              ].join(" ")}
            >
              {b.icon ? <span>{b.icon}</span> : null}
              <span>{b.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
