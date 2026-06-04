import { useState } from "react";
import { profile, macros, goalMetrics } from "../data/plan";

export default function Hero() {
  const [hover, setHover] = useState(false);
  return (
    <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white shadow-2xl">
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute -top-40 -right-24 h-96 w-96 rounded-full bg-indigo-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-24 h-96 w-96 rounded-full bg-rose-500/20 blur-3xl" />
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-400/10 blur-3xl" />

      <div className="relative grid gap-10 p-8 md:p-12 lg:grid-cols-5 lg:p-16">
        <div className="lg:col-span-3">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/90 backdrop-blur">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            ARENA · Custom 12-Week Plan
          </div>
          <h1 className="text-4xl font-black leading-tight md:text-5xl lg:text-6xl">
            12-Week <span className="bg-gradient-to-r from-amber-300 via-orange-400 to-rose-400 bg-clip-text text-transparent">Total Body</span> Transformation
          </h1>
          <p className="mt-4 text-lg text-slate-300 md:text-xl">
            Complete Workout · Nutrition · Meal Plan · Lifestyle Guide
          </p>

          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              { k: "Male", v: "Sex" },
              { k: `${profile.age} yrs`, v: "Age" },
              { k: `${profile.height} cm`, v: "Height" },
              { k: "Navi Mumbai", v: "Location" },
            ].map((it) => (
              <div key={it.v} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur">
                <div className="text-xs uppercase tracking-wider text-slate-400">{it.v}</div>
                <div className="mt-1 text-lg font-bold">{it.k}</div>
              </div>
            ))}
          </div>

          {/* Weight transformation bar */}
          <div
            className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            <div className="mb-3 flex items-center justify-between text-sm font-medium text-slate-300">
              <span>⚡ Current</span>
              <span className="text-amber-300">-7 kg target</span>
              <span>🏆 Goal</span>
            </div>
            <div className="relative">
              <div className="h-3 w-full overflow-hidden rounded-full bg-slate-700/60">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-emerald-400 via-amber-400 to-rose-400 transition-all duration-1000"
                  style={{ width: hover ? "95%" : "8%" }}
                />
              </div>
              <div className="mt-3 flex items-center justify-between">
                <div>
                  <div className="text-3xl font-black">{profile.weightCurrent}<span className="text-base font-medium text-slate-400"> kg</span></div>
                  <div className="text-xs uppercase tracking-wider text-slate-400">Start</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-black text-amber-300">↘ 7</div>
                  <div className="text-xs uppercase tracking-wider text-slate-400">kg loss</div>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-black text-emerald-300">{profile.weightGoal}<span className="text-base font-medium text-slate-400"> kg</span></div>
                  <div className="text-xs uppercase tracking-wider text-slate-400">Target</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Profile at a glance */}
        <div className="lg:col-span-2">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.02] p-6 backdrop-blur-lg">
            <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-amber-300">
              📊 Your Profile At a Glance
            </div>

            <div className="mt-5 space-y-3">
              {goalMetrics.map((m) => (
                <div key={m.label} className="rounded-xl border border-white/10 bg-slate-900/40 p-4">
                  <div className="flex items-center justify-between text-xs uppercase tracking-wider text-slate-400">
                    <span>{m.label}</span>
                    <span className="rounded-full bg-emerald-400/15 px-2 py-0.5 text-emerald-300">{m.delta}</span>
                  </div>
                  <div className="mt-2 flex items-baseline justify-between">
                    <div className="text-xl font-bold">{m.current}</div>
                    <div className="text-sm text-slate-400">→</div>
                    <div className="text-xl font-bold text-emerald-300">{m.goal}</div>
                  </div>
                </div>
              ))}
              <div className="rounded-xl border border-amber-300/30 bg-amber-300/10 p-4 text-sm text-amber-100">
                <span className="font-bold">Abs:</span> Hidden → 4-pack / shadow 6-pack
              </div>
            </div>

            {/* Macros */}
            <div className="mt-6 rounded-2xl border border-white/10 bg-slate-900/40 p-5">
              <div className="flex items-baseline justify-between">
                <div className="text-sm font-semibold text-slate-200">🍽️ Daily Macros</div>
                <div className="text-2xl font-black text-white">~{macros.calories.toLocaleString()}<span className="text-sm font-medium text-slate-400"> kcal</span></div>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
                <MacroChip label="Protein" value={macros.protein} star highlight />
                <MacroChip label="Carbs" value={macros.carbs} />
                <MacroChip label="Fats" value={macros.fats} />
                <MacroChip label="Fiber" value={macros.fiber} />
                <MacroChip label="Water" value={macros.water} wide />
              </div>
            </div>

            <div className="mt-5 text-center text-sm text-slate-400">
              🥘 {profile.diet}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MacroChip({
  label,
  value,
  star,
  highlight,
  wide,
}: {
  label: string;
  value: string;
  star?: boolean;
  highlight?: boolean;
  wide?: boolean;
}) {
  return (
    <div
      className={`${wide ? "col-span-2" : ""} flex items-center justify-between rounded-xl border px-3 py-2.5 ${
        highlight ? "border-amber-300/40 bg-amber-300/10 text-amber-100" : "border-white/10 bg-white/5 text-slate-200"
      }`}
    >
      <span className="text-xs font-medium uppercase tracking-wide">{label}{star && " ★"}</span>
      <span className="font-bold">{value}</span>
    </div>
  );
}
