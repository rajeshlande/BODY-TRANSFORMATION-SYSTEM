import { useState } from "react";
import { proteinSources, sampleDays, weeklyRotation } from "../data/plan";
import { SectionHeader } from "./ScienceSection";

export default function NutritionSection() {
  const [tab, setTab] = useState(0);
  const day = sampleDays[tab];

  return (
    <section className="space-y-8">
      <SectionHeader eyebrow="🍽️ Nutrition & Meals" title="2,100 kcal Plan" subtitle="Indian Vegetarian + Eggs + Chicken (1x/week). No whey protein. Protein from soya, eggs, paneer, dal, curd." />

      {/* Totals banner */}
      <div className="grid gap-3 rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-900 to-indigo-950 p-6 text-white shadow-lg md:grid-cols-5 md:p-8">
        <Stat label="kcal" value="2,100" highlight />
        <Stat label="Protein" value="145g" />
        <Stat label="Carbs" value="200g" />
        <Stat label="Fats" value="55g" />
        <Stat label="Fiber" value="32g" />
      </div>

      {/* Protein sources */}
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
        <div className="mb-4 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-indigo-700 text-white">🥘</div>
          <div>
            <h3 className="text-xl font-black text-slate-900">Key Protein Sources</h3>
            <p className="text-sm text-slate-500">No whey — whole-food based</p>
          </div>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-5">
          {proteinSources.map((p, i) => (
            <div key={p.name} className="rounded-xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-4 hover:shadow-md transition-shadow">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-500">#{i + 1}</div>
              <div className="mt-1 text-sm font-bold text-slate-900">{p.name}</div>
              <div className="mt-2 text-lg font-black text-indigo-700">{p.value}<span className="text-xs font-medium text-slate-500">{p.unit}</span></div>
            </div>
          ))}
        </div>
      </div>

      {/* Sample days */}
      <div className="space-y-4">
        <div className="flex flex-wrap gap-2">
          {sampleDays.map((d, i) => (
            <button
              key={d.key}
              onClick={() => setTab(i)}
              className={`rounded-full px-5 py-2.5 text-sm font-bold transition ${
                tab === i
                  ? "bg-indigo-600 text-white shadow-lg shadow-indigo-200"
                  : "border border-slate-200 bg-white text-slate-700 hover:border-indigo-300"
              }`}
            >
              Day {d.key}
            </button>
          ))}
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          <div className="mb-5">
            <h3 className="text-2xl font-black text-slate-900">{day.title}</h3>
            <div className="mt-1 text-sm font-semibold text-indigo-700">{day.totals}</div>
          </div>
          <div className="grid gap-3 md:grid-cols-2">
            {day.meals.map((m) => (
              <div key={m.meal} className="rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-4 hover:border-indigo-200">
                <div className="flex items-start gap-3">
                  <div className="text-2xl">{m.icon}</div>
                  <div className="flex-1">
                    <div className="flex items-baseline justify-between">
                      <div className="text-sm font-bold text-slate-900">{m.meal}</div>
                      <div className="text-xs font-semibold text-slate-500">{m.time}</div>
                    </div>
                    <div className="mt-1 text-sm text-slate-700">{m.desc}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Weekly rotation */}
      <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
        <div className="border-b border-slate-200 p-6 md:p-8">
          <h3 className="text-xl font-black text-slate-900">📆 Weekly Meal Rotation</h3>
          <p className="text-sm text-slate-500">Repeat across 12 weeks</p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[900px] text-left text-sm">
            <thead className="bg-slate-50 text-xs font-bold uppercase tracking-wider text-slate-600">
              <tr>
                <th className="px-4 py-3">Day</th>
                <th className="px-4 py-3">Breakfast</th>
                <th className="px-4 py-3">Lunch</th>
                <th className="px-4 py-3">Snack</th>
                <th className="px-4 py-3">Dinner</th>
                <th className="px-4 py-3">Protein</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {weeklyRotation.map((r, i) => (
                <tr key={r.day} className={i % 2 === 0 ? "bg-white" : "bg-slate-50/40"}>
                  <td className="px-4 py-3 font-bold text-slate-900">{r.day}</td>
                  <td className="px-4 py-3 text-slate-700">{r.breakfast}</td>
                  <td className="px-4 py-3 text-slate-700">{r.lunch}</td>
                  <td className="px-4 py-3 text-slate-700">{r.snack}</td>
                  <td className="px-4 py-3 text-slate-700">{r.dinner}</td>
                  <td className="px-4 py-3 font-semibold text-indigo-700">{r.stars}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Cooking tips */}
      <div className="grid gap-4 md:grid-cols-3">
        <TipCard icon="🍳" title="Cooking Tips" text="Use minimum oil (2-3 tsp/day total. Ghee in moderation (1 tsp for roti). Leafy greens & sabzi with every meal. Drink 3-4 L water." />
        <TipCard icon="📦" title="Meal Prep" text="Boil eggs, cook soya chunks, chop veggies, prep dal, cook brown rice, roast makhana. Batch on weekends for 2-3 days." />
        <TipCard icon="🚰" title="Hydration" text="Wake up: 500 ml warm water + lemon. Throughout day: 2.5-3 L. Post-workout: 500 ml. Before bed: 200 ml." />
      </div>
    </section>
  );
}

function Stat({ label, value, highlight }: { label: string; value: string; highlight?: boolean }) {
  return (
    <div className={`rounded-2xl border px-5 py-4 ${highlight ? "border-amber-300/40 bg-amber-400/10 text-amber-200" : "border-white/10 bg-white/5"}`}>
      <div className="text-xs font-semibold uppercase tracking-wider text-slate-300">{label}</div>
      <div className={`mt-1 text-3xl font-black ${highlight ? "text-amber-300" : "text-white"}`}>{value}</div>
    </div>
  );
}

function TipCard({ icon, title, text }: { icon: string; title: string; text: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="mb-2 text-3xl">{icon}</div>
      <h4 className="text-lg font-black text-slate-900">{title}</h4>
      <p className="mt-2 text-sm text-slate-600">{text}</p>
    </div>
  );
}
