import { phases } from "../data/plan";

export default function ScienceSection() {
  return (
    <section className="space-y-8">
      <SectionHeader eyebrow="🧬 The Science" title="Body Recomposition" subtitle="Simultaneous fat loss and muscle gain is achievable on a modest deficit when protein and resistance training are adequate." />

      <div className="grid gap-6 md:grid-cols-3">
        <InfoCard
          icon="⚖️"
          title="Calorie Strategy"
          items={[
            { k: "Maintenance", v: "~2,500 kcal" },
            { k: "Deficit", v: "~400 kcal" },
            { k: "Intake", v: "2,050-2,150 kcal" },
            { k: "Deficit from", v: "Carbs & fats — NOT protein" },
          ]}
          accent="from-sky-500 to-indigo-600"
        />
        <InfoCard
          icon="💪"
          title="Protein Priority"
          items={[
            { k: "Target", v: "1.6-2.2 g/kg BW" },
            { k: "At 66 kg goal", v: "~140-150 g/day" },
            { k: "Meal distribution", v: "4-5 meals" },
            { k: "Critical for", v: "Muscle preservation in deficit" },
          ]}
          accent="from-amber-400 to-orange-500"
        />
        <InfoCard
          icon="🏋️"
          title="12-Week Training System"
          items={[
            { k: "Phases", v: "Foundation → Strength → Intensity" },
            { k: "Volume progression", v: "3 → 4 → 4 sets" },
            { k: "Rep range", v: "12 → 10 → 6-10" },
            { k: "Key principle", v: "Progressive overload — every session" },
          ]}
          accent="from-rose-500 to-red-600"
        />
      </div>

      {/* Phase overview */}
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
        <div className="mb-6 flex items-start justify-between gap-4">
          <div>
            <div className="text-sm font-semibold uppercase tracking-wider text-indigo-600">Progressive Overload</div>
            <h3 className="mt-1 text-2xl font-black text-slate-900 md:text-3xl">12-Week Training Phases</h3>
          </div>
          <div className="hidden rounded-2xl bg-indigo-50 px-4 py-2 text-xs font-semibold text-indigo-700 md:block">
            🔵 🟡 🔴 🏆
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {phases.map((p) => (
            <div key={p.key} className={`rounded-2xl border ${p.border} ${p.bg} p-6 transition-transform hover:-translate-y-1 hover:shadow-lg`}>
              <div className={`inline-block rounded-full bg-gradient-to-r ${p.color} px-3 py-1 text-xs font-bold text-white`}>{p.badge}</div>
              <div className="mt-3 text-xs font-medium uppercase tracking-wider text-slate-500">{p.weeks}</div>
              <div className="mt-1 text-xl font-black text-slate-900">{p.title}</div>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                <li className="flex items-start gap-2"><span className="mt-0.5 text-slate-400">▸</span> {p.split}</li>
                <li className="flex items-start gap-2"><span className="mt-0.5 text-slate-400">▸</span> {p.volume}</li>
                <li className="flex items-start gap-2"><span className="mt-0.5 text-slate-400">▸</span> {p.focus}</li>
                <li className="flex items-start gap-2"><span className="mt-0.5 text-slate-400">▸</span> Rest {p.rest}</li>
                <li className="flex items-start gap-2"><span className="mt-0.5 text-slate-400">▸</span> {p.rpe}</li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function InfoCard({ icon, title, items, accent }: { icon: string; title: string; items: { k: string; v: string }[]; accent: string }) {
  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:shadow-lg">
      <div className={`bg-gradient-to-br ${accent} p-6 text-white`}>
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/20 text-xl backdrop-blur">{icon}</div>
          <h3 className="text-lg font-black">{title}</h3>
        </div>
      </div>
      <div className="divide-y divide-slate-100 p-4">
        {items.map((it) => (
          <div key={it.k} className="flex items-start justify-between gap-4 py-3 text-sm">
            <span className="text-slate-500">{it.k}</span>
            <span className="text-right font-bold text-slate-900">{it.v}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function SectionHeader({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle?: string }) {
  return (
    <div className="max-w-3xl">
      <div className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600">{eyebrow}</div>
      <h2 className="mt-2 text-3xl font-black leading-tight text-slate-900 md:text-4xl">{title}</h2>
      {subtitle && <p className="mt-3 text-base text-slate-600 md:text-lg">{subtitle}</p>}
    </div>
  );
}
