import { useState, useEffect } from "react";
import Hero from "./components/Hero";
import ScienceSection from "./components/ScienceSection";
import TrainingSection from "./components/TrainingSection";
import NutritionSection from "./components/NutritionSection";
import LifestyleSection, { TrackingSection, MilestonesSection, ChallengesSection } from "./components/LifestyleSection";

type NavKey = "home" | "science" | "training" | "nutrition" | "lifestyle" | "tracking" | "milestones" | "mindset";

const nav: { key: NavKey; label: string; icon: string }[] = [
  { key: "home", label: "Overview", icon: "🏠" },
  { key: "science", label: "Science", icon: "🧬" },
  { key: "training", label: "Training", icon: "🏋️" },
  { key: "nutrition", label: "Nutrition", icon: "🍽️" },
  { key: "lifestyle", label: "Routine", icon: "🕐" },
  { key: "tracking", label: "Tracking", icon: "📈" },
  { key: "milestones", label: "Milestones", icon: "🎯" },
  { key: "mindset", label: "Mindset", icon: "🏆" },
];

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<NavKey>("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setActive(id as NavKey);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50/30 text-slate-800">
      {/* Top Nav */}
      <header className={`sticky top-0 z-40 w-full transition-all ${scrolled ? "border-b border-slate-200 bg-white/80 backdrop-blur-xl shadow-sm" : "bg-transparent"}`}>
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 md:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 via-violet-500 to-rose-500 font-black text-white shadow-lg shadow-indigo-200">A</div>
            <div>
              <div className="text-sm font-black text-slate-900">ARENA Transform</div>
              <div className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">12-Week Plan</div>
            </div>
          </div>
          <nav className="hidden items-center gap-1 lg:flex">
            {nav.map((n) => (
              <button
                key={n.key}
                onClick={() => scrollTo(n.key)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  active === n.key ? "bg-slate-900 text-white" : "text-slate-600 hover:bg-slate-100"
                }`}
              >
                <span className="mr-1">{n.icon}</span>
                {n.label}
              </button>
            ))}
          </nav>
          <button
            onClick={() => scrollTo("home")}
            className="rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 px-5 py-2 text-sm font-bold text-white shadow-lg shadow-indigo-200 transition hover:from-indigo-500 hover:to-violet-500"
          >
            Start Today
          </button>
        </div>
        {/* Mobile nav scroll */}
        <div className="flex gap-1 overflow-x-auto border-t border-slate-100 bg-white/80 px-2 py-2 backdrop-blur lg:hidden">
          {nav.map((n) => (
            <button
              key={n.key}
              onClick={() => scrollTo(n.key)}
              className="whitespace-nowrap rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700"
            >
              {n.icon} {n.label}
            </button>
          ))}
        </div>
      </header>

      <main className="mx-auto max-w-7xl space-y-16 px-4 py-8 md:px-8 md:py-12">
        <div id="home"><Hero /></div>
        <div id="science"><ScienceSection /></div>
        <div id="training"><TrainingSection /></div>
        <div id="nutrition"><NutritionSection /></div>
        <div id="lifestyle"><LifestyleSection /></div>
        <div id="tracking"><TrackingSection /></div>
        <div id="milestones"><MilestonesSection /></div>
        <div id="mindset"><ChallengesSection /></div>

        <footer className="rounded-3xl border border-slate-200 bg-white p-6 text-center text-sm text-slate-500 shadow-sm md:p-8">
          <div className="mx-auto max-w-2xl">
            <div className="font-semibold text-slate-700">🔥 12-Week Total Body Transformation System</div>
            <div className="mt-1">Customized for Male · 33 yrs · 169 cm · 73 kg → 66 kg</div>
            <div className="mt-1">📍 Navi Mumbai · 🥘 Indian Vegetarian + Eggs + Chicken (1x/week) · 🏋️ Home/Gym with Dumbbells</div>
            <div className="mt-4 text-xs text-slate-400">Built with Arena — Content is user-generated and based on the source plan.</div>
          </div>
        </footer>
      </main>
    </div>
  );
}
