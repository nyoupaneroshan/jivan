// src/components/jivan/StatsGrid.tsx
type StatProps = { icon: string; number: string; label: string };

function Stat({ icon, number, label }: StatProps) {
  return (
    <div className="flex flex-col items-center rounded-xl bg-gradient-to-br from-[#8B4513] to-[#A0522D] px-6 py-6 text-center text-white shadow-md">
      <div className="mb-2 text-3xl">{icon}</div>
      <div className="text-2xl font-bold">{number}</div>
      <div className="mt-1 text-[11px] uppercase tracking-wide text-white/80">
        {label}
      </div>
    </div>
  );
}

export function StatsGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <Stat icon="🎯" number="20,000+" label="Total Healings" />
      <Stat icon="👥" number="5,000+" label="Happy Clients" />
      <Stat icon="🏆" number="15+" label="Years Experience" />
      <Stat icon="⭐" number="500+" label="Retreats Conducted" />
    </div>
  );
}
