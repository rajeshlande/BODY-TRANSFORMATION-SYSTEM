import { useState } from "react";
import { cardio, phases } from "../data/plan";
import { SectionHeader } from "./ScienceSection";

const phase1Exercises = [
  { name: "Goblet Squat (dumbbell/kettlebell)", sets: "3 × 10-12", rest: "60s", note: "Go to parallel, chest up" },
  { name: "Dumbbell Bench Press", sets: "3 × 10-12", rest: "60s", note: "Slow eccentric, full ROM" },
  { name: "Dumbbell Row (single arm)", sets: "3 × 10-12/side", rest: "60s", note: "Squeeze at top, flat back" },
  { name: "Standing Dumbbell Shoulder Press", sets: "3 × 10-12", rest: "60s", note: "Core braced, don't arch" },
  { name: "Dumbbell Romanian Deadlift", sets: "3 × 12", rest: "60s", note: "Soft knees, hinge at hips" },
  { name: "Plank", sets: "3 × 30-45s", rest: "45s", note: "Straight line head to heels" },
  { name: "Cardio finisher: Jumping Jacks / High Knees", sets: "3 × 45s / 15s rest", rest: "–", note: "Optional or incline walk 15 min" },
];

const phase1Schedule = [
  { day: "Mon", label: "Full Body A", color: "bg-sky-500" },
  { day: "Tue", label: "Rest / Light Walk", color: "bg-slate-300" },
  { day: "Wed", label: "Full Body B", color: "bg-sky-500" },
  { day: "Thu", label: "Rest / Light Walk", color: "bg-slate-300" },
  { day: "Fri", label: "Full Body C", color: "bg-sky-500" },
  { day: "Sat", label: "Active Recovery", color: "bg-emerald-400" },
  { day: "Sun", label: "Rest", color: "bg-slate-300" },
];

const phase2Days: Record<string, { ex: string; sets: string; rest: string }[]> = {
  "Upper A": [
    { ex: "Dumbbell Bench Press", sets: "4 × 8-10", rest: "75s" },
    { ex: "Dumbbell Row (two-arm)", sets: "4 × 8-10", rest: "75s" },
    { ex: "Standing Overhead Press", sets: "3 × 8-10", rest: "60s" },
    { ex: "Pull-ups (or Lat Pulldown / Band Assisted)", sets: "3 × max", rest: "60s" },
    { ex: "Dumbbell Lateral Raises", sets: "3 × 12", rest: "45s" },
    { ex: "Push-ups (weighted if possible)", sets: "3 × failure", rest: "60s" },
  ],
  "Lower A": [
    { ex: "Dumbbell Goblet Squat", sets: "4 × 10", rest: "75s" },
    { ex: "Dumbbell RDL", sets: "4 × 10", rest: "75s" },
    { ex: "Walking Lunges (dumbbell)", sets: "3 × 10/side", rest: "60s" },
    { ex: "Glute Bridge (weighted)", sets: "3 × 12-15", rest: "60s" },
    { ex: "Calf Raises (standing)", sets: "3 × 15-20", rest: "45s" },
  ],
  "Upper B": [
    { ex: "Incline Dumbbell Press", sets: "4 × 8-10", rest: "75s" },
    { ex: "Bent Over Row", sets: "4 × 8-10", rest: "75s" },
    { ex: "Arnold Press", sets: "3 × 8-10", rest: "60s" },
    { ex: "Dumbbell Pullover", sets: "3 × 10-12", rest: "60s" },
    { ex: "Bicep Curls + Tricep Overhead Ext (superset)", sets: "3 × 10-12 each", rest: "45s" },
    { ex: "Face Pulls (band or dumbbell)", sets: "3 × 15", rest: "45s" },
  ],
  "Lower B": [
    { ex: "Dumbbell Bulgarian Split Squat", sets: "3 × 8-10/side", rest: "75s" },
    { ex: "Dumbbell Hip Thrust", sets: "4 × 10-12", rest: "75s" },
    { ex: "Dumbbell Step-ups", sets: "3 × 10/side", rest: "60s" },
    { ex: "Leg Curl (sliding or band)", sets: "3 × 12-15", rest: "60s" },
    { ex: "Plank Side Taps / Pallof Press", sets: "3 × 12/side", rest: "45s" },
  ],
};

const phase2Schedule = [
  { day: "Mon", label: "Upper A", color: "bg-amber-500" },
  { day: "Tue", label: "Lower A", color: "bg-amber-500" },
  { day: "Wed", label: "Rest", color: "bg-slate-300" },
  { day: "Thu", label: "Upper B", color: "bg-amber-500" },
  { day: "Fri", label: "Lower B", color: "bg-amber-500" },
  { day: "Sat", label: "Active Recovery", color: "bg-emerald-400" },
  { day: "Sun", label: "Rest", color: "bg-slate-300" },
];

const phase3Days: Record<string, { ex: string; sets: string; rest: string }[]> = {
  Push: [
    { ex: "Dumbbell Flat Bench Press", sets: "4 × 8-10", rest: "60s" },
    { ex: "Incline Dumbbell Press", sets: "4 × 8-10", rest: "60s" },
    { ex: "Dumbbell Shoulder Press", sets: "3 × 8-10", rest: "60s" },
    { ex: "Lateral Raises (cable or dumbbell)", sets: "3 × 12-15", rest: "45s" },
    { ex: "Tricep Dips (bench or parallel)", sets: "3 × failure", rest: "45s" },
    { ex: "Push-ups", sets: "2 × failure", rest: "45s" },
  ],
  Pull: [
    { ex: "Dumbbell Rows", sets: "4 × 8-10", rest: "60s" },
    { ex: "Pull-ups / Lat Pulldown", sets: "4 × max-8", rest: "60s" },
    { ex: "Single Arm Dumbbell Row", sets: "3 × 10/side", rest: "60s" },
    { ex: "Face Pulls", sets: "3 × 15", rest: "45s" },
    { ex: "Bicep Curls", sets: "3 × 10-12", rest: "45s" },
    { ex: "Shrugs (dumbbell)", sets: "3 × 12-15", rest: "45s" },
  ],
  Legs: [
    { ex: "Goblet Squat (heavier)", sets: "4 × 8-10", rest: "75s" },
    { ex: "Dumbbell RDL", sets: "4 × 8-10", rest: "75s" },
    { ex: "Walking Lunges", sets: "3 × 10-12/side", rest: "60s" },
    { ex: "Bulgarian Split Squat", sets: "3 × 8-10/side", rest: "60s" },
    { ex: "Calf Raises", sets: "4 × 15-20", rest: "45s" },
    { ex: "Plank + Leg Raises (superset)", sets: "3 × 45s + 12", rest: "45s" },
  ],
};

const phase3Schedule = [
  { day: "Mon", label: "Push", color: "bg-rose-500" },
  { day: "Tue", label: "Pull", color: "bg-rose-500" },
  { day: "Wed", label: "Legs", color: "bg-rose-500" },
  { day: "Thu", label: "Push", color: "bg-rose-500" },
  { day: "Fri", label: "Pull", color: "bg-rose-500" },
  { day: "Sat", label: "Legs / Rec", color: "bg-emerald-400" },
  { day: "Sun", label: "Rest", color: "bg-slate-300" },
];

export default function TrainingSection() {
  const [phase, setPhase] = useState<1 | 2 | 3>(1);

  return (
    <section className="space-y-8">
      <SectionHeader eyebrow="🏋️ Training System" title="12-Week Progressive Overload" subtitle="Three phases — each one builds on the last. Add 2.5-5% weight or 1-2 reps each week when form is clean." />

      {/* Phase tabs */}
      <div className="flex flex-wrap gap-2 rounded-2xl border border-slate-200 bg-white p-2 shadow-sm">
        {phases.map((p, i) => (
          <button
            key={p.key}
            onClick={() => setPhase((i + 1) as 1 | 2 | 3)}
            className={`flex-1 min-w-[180px] rounded-xl px-4 py-3 text-sm font-bold transition ${
              phase === i + 1
                ? `bg-gradient-to-br ${p.color} text-white shadow-lg`
                : "text-slate-600 hover:bg-slate-100"
            }`}
          >
            {p.badge} · {p.title}
          </button>
        ))}
      </div>

      {/* Phase content */}
      {phase === 1 && (
        <div className="space-y-6">
          <ScheduleGrid schedule={phase1Schedule} />
          <ExerciseTable title="Full Body — 3 days/week" exercises={phase1Exercises} accent="sky" />
        </div>
      )}
      {phase === 2 && (
        <div className="space-y-6">
          <ScheduleGrid schedule={phase2Schedule} />
          <div className="grid gap-6 lg:grid-cols-2">
            {Object.entries(phase2Days).map(([day, list]) => (
              <ExerciseTable
                key={day}
                title={day}
                exercises={list.map((e) => ({ name: e.ex, sets: e.sets, rest: e.rest }))}
                accent="amber"
                compact
              />
            ))}
          </div>
        </div>
      )}
      {phase === 3 && (
        <div className="space-y-6">
          <ScheduleGrid schedule={phase3Schedule} />
          <div className="grid gap-6 lg:grid-cols-3">
            {Object.entries(phase3Days).map(([day, list]) => (
              <ExerciseTable
                key={day}
                title={day}
                exercises={list.map((e) => ({ name: e.ex, sets: e.sets, rest: e.rest }))}
                accent="rose"
              />
            ))}
          </div>
        </div>
      )}

      {/* Cardio */}
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
        <div className="mb-5 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-rose-500 to-red-600 text-white">🔥</div>
          <div>
            <h3 className="text-xl font-black text-slate-900">Cardio / LISS Protocol</h3>
            <p className="text-sm text-slate-500">Daily step goal: <span className="font-bold text-indigo-700">8,000-10,000 steps</span> EVERY day (NEAT)</p>
          </div>
        </div>
        <div className="overflow-hidden rounded-2xl border border-slate-200">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50 text-xs font-bold uppercase tracking-wider text-slate-600">
              <tr>
                <th className="px-4 py-3">Phase</th>
                <th className="px-4 py-3">Cardio Type</th>
                <th className="px-4 py-3">Frequency</th>
                <th className="px-4 py-3">Duration</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {cardio.map((c) => (
                <tr key={c.phase} className="bg-white hover:bg-slate-50">
                  <td className="px-4 py-3 font-bold text-slate-900">{c.phase}<div className="text-xs font-normal text-slate-500">Weeks {c.weeks}</div></td>
                  <td className="px-4 py-3 text-slate-700">{c.type}</td>
                  <td className="px-4 py-3 text-slate-700">{c.freq}</td>
                  <td className="px-4 py-3 font-bold text-indigo-700">{c.duration}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Progressive overload callout */}
      <div className="rounded-3xl border border-amber-200 bg-gradient-to-br from-amber-50 to-orange-50 p-6 shadow-sm">
        <div className="flex items-start gap-4">
          <div className="text-3xl">💡</div>
          <div>
            <h4 className="text-lg font-black text-slate-900">Progressive Overload Rule</h4>
            <p className="mt-1 text-slate-700">Add <span className="font-bold">2.5-5% weight</span> or <span className="font-bold">1-2 reps</span> each week when you hit all reps with good form. <span className="font-bold text-indigo-700">Track every session.</span></p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ScheduleGrid({ schedule }: { schedule: { day: string; label: string; color: string }[] }) {
  return (
    <div className="grid gap-3 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:grid-cols-7 md:p-6">
      {schedule.map((s) => (
        <div key={s.day} className="rounded-xl border border-slate-200 bg-slate-50/50 p-3 text-center">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-500">{s.day}</div>
          <div className={`mx-auto mt-2 h-1.5 w-12 rounded-full ${s.color}`} />
          <div className="mt-2 text-xs font-semibold text-slate-800">{s.label}</div>
        </div>
      ))}
    </div>
  );
}

function ExerciseTable({
  title,
  exercises,
  accent,
  compact,
}: {
  title: string;
  exercises: { name: string; sets: string; rest: string; note?: string }[];
  accent: "sky" | "amber" | "rose";
  compact?: boolean;
}) {
  const accentBg: Record<string, string> = {
    sky: "from-sky-500 to-blue-600",
    amber: "from-amber-400 to-orange-500",
    rose: "from-rose-500 to-red-600",
  };
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className={`bg-gradient-to-r ${accentBg[accent]} px-5 py-4 text-white`}>
        <h4 className="text-lg font-black">{title}</h4>
      </div>
      <div className="divide-y divide-slate-100">
        {exercises.map((ex, idx) => (
          <div key={ex.name} className={`grid gap-2 px-5 py-3.5 hover:bg-slate-50 ${compact ? "grid-cols-12" : "grid-cols-12"}`}>
            <div className="col-span-1 text-sm font-bold text-slate-400">{String(idx + 1).padStart(2, "0")}</div>
            <div className="col-span-6 text-sm font-semibold text-slate-900 md:col-span-7">{ex.name}{ex.note && <div className="mt-0.5 text-xs font-normal italic text-slate-500">{ex.note}</div>}</div>
            <div className="col-span-3 text-right text-sm font-bold text-indigo-700 md:col-span-3">{ex.sets}</div>
            <div className="col-span-2 text-right text-xs font-semibold text-slate-500">{ex.rest}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
