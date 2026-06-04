import { dailyRoutine, challenges, dos, donts, foodsToAvoid, tracking, milestones } from "../data/plan";
import { SectionHeader } from "./ScienceSection";

export default function LifestyleSection() {
  return (
    <section className="space-y-8">
      <SectionHeader eyebrow="🕐 Lifestyle" title="Daily Routine, Sleep & Mindset" subtitle="The stuff that's often ignored — but makes the biggest difference." />

      {/* Daily routine */}
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
        <div className="mb-5 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-violet-700 text-white">🕐</div>
          <h3 className="text-xl font-black text-slate-900">Ideal Daily Routine</h3>
        </div>
        <div className="relative pl-8">
          <div className="absolute left-3 top-1 bottom-1 w-0.5 bg-gradient-to-b from-indigo-200 via-slate-200 to-emerald-200" />
          {dailyRoutine.map((r) => (
            <div key={r.time} className="relative mb-5 last:mb-0">
              <div className="absolute -left-[26px] top-1 flex h-5 w-5 items-center justify-center rounded-full border-2 border-white bg-gradient-to-br from-indigo-500 to-violet-600 shadow">
                <div className="h-1.5 w-1.5 rounded-full bg-white" />
              </div>
              <div className="rounded-xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-4 hover:border-indigo-200">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-indigo-600">{r.time}</span>
                  <span className="text-sm font-bold text-slate-900 md:hidden">{r.activity}</span>
                </div>
                <div className="mt-1 hidden text-base font-bold text-slate-900 md:block">{r.activity}</div>
                <div className="mt-1 text-sm text-slate-600">{r.note}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sleep & recovery */}
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-indigo-50 to-violet-50 p-6 shadow-sm md:p-8">
          <div className="mb-3 text-3xl">🛌</div>
          <h3 className="text-xl font-black text-slate-900">Sleep — Non-Negotiable</h3>
          <ul className="mt-4 space-y-2 text-sm text-slate-700">
            {[
              "7-8 hours every night",
              "Consistent bedtime by 10-10:30 PM",
              "No screens 30 min before bed",
              "Cool, dark room",
              "Sleep is when muscle repairs & fat burns",
            ].map((x) => (
              <li key={x} className="flex items-start gap-2"><span className="mt-1 text-indigo-500">✓</span> {x}</li>
            ))}
          </ul>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-emerald-50 to-teal-50 p-6 shadow-sm md:p-8">
          <div className="mb-3 text-3xl">🧘</div>
          <h3 className="text-xl font-black text-slate-900">Active Recovery Days</h3>
          <ul className="mt-4 space-y-2 text-sm text-slate-700">
            {[
              "20-30 min walk outdoors",
              "Stretching / foam rolling — 10 min",
              "Deep breathing or meditation — 5 min",
              "Yoga (Suryanamaskar × 5-10 rounds)",
              "Light mobility drills",
            ].map((x) => (
              <li key={x} className="flex items-start gap-2"><span className="mt-1 text-emerald-600">✓</span> {x}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Foods to avoid */}
      <div className="rounded-3xl border border-rose-200 bg-gradient-to-br from-rose-50 to-orange-50 p-6 shadow-sm md:p-8">
        <div className="mb-4 flex items-center gap-3">
          <div className="text-3xl">🚫</div>
          <h3 className="text-xl font-black text-slate-900">Foods to Avoid / Minimize</h3>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
          {foodsToAvoid.map((f) => (
            <div key={f} className="flex items-start gap-3 rounded-xl border border-rose-200/60 bg-white/70 p-3 text-sm text-slate-800">
              <span className="text-rose-500">✕</span>
              <span>{f}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TrackingSection() {
  return (
    <section className="space-y-8">
      <SectionHeader eyebrow="📈 Accountability" title="Tracking System" subtitle="What gets measured, gets managed. Keep these metrics weekly." />

      <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-900 text-xs font-bold uppercase tracking-wider text-white">
            <tr>
              <th className="px-5 py-4">Metric</th>
              <th className="px-5 py-4">How to Track</th>
              <th className="px-5 py-4">Frequency</th>
              <th className="px-5 py-4">Target by Week 12</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {tracking.map((t, i) => (
              <tr key={t.metric} className={i % 2 === 0 ? "bg-white" : "bg-slate-50/40"}>
                <td className="px-5 py-3 font-bold text-slate-900">{t.metric}</td>
                <td className="px-5 py-3 text-slate-700">{t.how}</td>
                <td className="px-5 py-3 font-semibold text-indigo-700">{t.freq}</td>
                <td className="px-5 py-3 font-bold text-emerald-700">{t.target}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="rounded-3xl border border-indigo-200 bg-gradient-to-br from-indigo-50 to-violet-50 p-6 shadow-sm md:p-8">
        <div className="mb-4 flex items-center gap-3">
          <div className="text-3xl">📱</div>
          <h3 className="text-xl font-black text-slate-900">Recommended Apps</h3>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            { app: "HealthifyMe / MyFitnessPal", for: "Calorie & macro tracking" },
            { app: "Strong / FitNotes", for: "Workout logging (weights & reps)" },
            { app: "Google Fit / Apple Health", for: "Steps & daily activity" },
          ].map((a) => (
            <div key={a.app} className="rounded-2xl border border-indigo-200 bg-white p-4">
              <div className="text-sm font-black text-slate-900">{a.app}</div>
              <div className="mt-1 text-xs text-slate-500">{a.for}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function MilestonesSection() {
  return (
    <section className="space-y-8">
      <SectionHeader eyebrow="🎯 Week-by-Week" title="12-Week Milestones" subtitle="Expected weight trajectory with phase-specific focus points." />
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {milestones.map((m, i) => {
          const phaseColor =
            m.phase === "Foundation"
              ? "from-sky-500 to-blue-600"
              : m.phase === "Strength"
              ? "from-amber-400 to-orange-500"
              : "from-rose-500 to-red-600";
          const isPeak = i === 11;
          return (
            <div
              key={m.week}
              className={`relative overflow-hidden rounded-2xl border p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg ${
                isPeak ? "border-amber-300 bg-gradient-to-br from-amber-50 to-orange-50 ring-2 ring-amber-300" : "border-slate-200 bg-white"
              }`}
            >
              <div className={`absolute right-0 top-0 bg-gradient-to-br ${phaseColor} px-3 py-1 text-xs font-bold text-white`}>Week {m.week}</div>
              <div className="mt-4 text-xs font-semibold uppercase tracking-wider text-slate-500">{m.phase}</div>
              <div className="mt-1 text-3xl font-black text-slate-900">{m.weight}</div>
              <div className="mt-2 text-sm text-slate-600"><span className="font-bold text-slate-900">Focus:</span> {m.focus}</div>
              <div className="mt-3 rounded-xl bg-slate-900/5 px-3 py-2 text-sm font-semibold text-slate-800">{m.milestone}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export function ChallengesSection() {
  return (
    <section className="space-y-8">
      <SectionHeader eyebrow="⚠️ Reality Check" title="Common Challenges & Solutions" subtitle="You'll run into these. Here's how to handle them." />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {challenges.map((c) => (
          <div key={c.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-indigo-300 hover:shadow-md">
            <div className="mb-2 text-3xl">{c.icon}</div>
            <h4 className="text-base font-black text-slate-900">&ldquo;{c.title}&rdquo;</h4>
            <p className="mt-2 text-sm text-slate-600">{c.solution}</p>
          </div>
        ))}
      </div>

      {/* Do's and Don'ts */}
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-3xl border border-emerald-200 bg-gradient-to-br from-emerald-50 to-teal-50 p-6 shadow-sm">
          <div className="mb-4 flex items-center gap-3">
            <div className="text-3xl">✅</div>
            <h3 className="text-xl font-black text-slate-900">Do's</h3>
          </div>
          <ul className="space-y-3">
            {dos.map((d) => (
              <li key={d} className="flex items-start gap-3 rounded-xl bg-white/70 p-3 text-sm text-slate-800">
                <span className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500 text-xs font-black text-white">✓</span>
                <span>{d}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-3xl border border-rose-200 bg-gradient-to-br from-rose-50 to-orange-50 p-6 shadow-sm">
          <div className="mb-4 flex items-center gap-3">
            <div className="text-3xl">❌</div>
            <h3 className="text-xl font-black text-slate-900">Don'ts</h3>
          </div>
          <ul className="space-y-3">
            {donts.map((d) => (
              <li key={d} className="flex items-start gap-3 rounded-xl bg-white/70 p-3 text-sm text-slate-800">
                <span className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-rose-500 text-xs font-black text-white">✕</span>
                <span>{d}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Closing */}
      <div className="rounded-3xl bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 p-8 text-center text-white shadow-2xl md:p-12">
        <div className="text-4xl">🏆</div>
        <h3 className="mt-3 text-2xl font-black md:text-3xl">Your 12-Week Transformation Mindset</h3>
        <p className="mx-auto mt-4 max-w-3xl text-slate-300 md:text-lg">
          You're not just losing 7 kg. You're building a stronger, leaner, healthier version of yourself that will last long after these 12 weeks. <span className="font-bold text-white">Your future self will thank you for starting today.</span>
        </p>
      </div>
    </section>
  );
}
