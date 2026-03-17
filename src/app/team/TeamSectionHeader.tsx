import React from "react";

type Variant = "orange" | "green" | "red";

const VARIANT_STYLES: Record<Variant, { accent: string; bg: string }> = {
  orange: {
    accent: "#FF6B35",
    bg: "from-white to-[#fff5f0]",
  },
  green: {
    accent: "#2D6A4F",
    bg: "from-white to-[#f0fff4]",
  },
  red: {
    accent: "#8B0000",
    bg: "from-white to-[#fff5e6]",
  },
};

export function TeamSectionHeader({
  title,
  description,
  variant = "green",
}: {
  title: string;
  description: string;
  variant?: Variant;
}) {
  const styles = VARIANT_STYLES[variant];

  return (
    <div
      className="bg-white/90 bg-[url('/img/design/cream.jpg')] bg-cover bg-center rounded-[15px] p-8 md:p-10 mb-8 shadow-[0_4px_20px_rgba(0,0,0,0.08)] border-t-[4px]"
      style={{
        borderTopColor: styles.accent,
        background: `linear-gradient(135deg, ${styles.bg.replace("from-", "").replace(" to-", ", ")}), url('/img/design/cream.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h2 className="text-[28px] md:text-[34px] font-bold text-[#333] text-center mb-3">
        {title}
      </h2>
      <p className="text-[15px] md:text-[17px] text-[#666] text-center max-w-[700px] mx-auto leading-[1.7]">
        {description}
      </p>
    </div>
  );
}
