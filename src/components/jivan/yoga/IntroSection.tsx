type Variant = "orange" | "green";

export function IntroSection({
  title,
  paragraphs,
  variant = "green",
}: {
  title: string;
  paragraphs: string[];
  variant?: Variant;
}) {
  const accent =
    variant === "orange"
      ? { border: "border-[#FF6B35]", bg: "from-white to-[#fff5f0]" }
      : { border: "border-[#2D6A4F]", bg: "from-white to-[#f0fff4]" };

  return (
    <section
      className={[
        "rounded-[20px] p-10 md:p-14 mb-14 shadow-[0_4px_30px_rgba(0,0,0,0.1)]",
        `bg-gradient-to-br ${accent.bg}`,
        "border-t-[5px]",
        accent.border,
      ].join(" ")}
    >
      <h2 className="text-[28px] md:text-[38px] font-bold text-[#333] text-center">
        {title}
      </h2>

      <div className="mt-6 space-y-5 max-w-[1000px] mx-auto text-center">
        {paragraphs.map((p, i) => (
          <p key={i} className="text-[#555] text-[16px] md:text-[18px] leading-[2]">
            {p}
          </p>
        ))}
      </div>
    </section>
  );
}
