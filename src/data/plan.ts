export const profile = {
  gender: "Male",
  age: 33,
  height: 169,
  weightCurrent: 73,
  weightGoal: 66,
  location: "Navi Mumbai",
  diet: "Indian Vegetarian + Eggs + Chicken (1x/week)",
};

export const macros = {
  calories: 2100,
  protein: "140-150g",
  carbs: "190-210g",
  fats: "50-60g",
  fiber: "30-35g",
  water: "3-4 L/day",
};

export const goalMetrics = [
  { label: "Weight", current: "73 kg", goal: "66 kg", delta: "-7 kg" },
  { label: "Body Fat", current: "~22-24%", goal: "~14-16%", delta: "-8%" },
  { label: "Waist", current: "~86-88 cm", goal: "~78-80 cm", delta: "-8 cm" },
  { label: "Lean Mass", current: "Baseline", goal: "+2-3 kg", delta: "Gain" },
];

export const phases = [
  {
    key: "phase1",
    badge: "🔵 Phase 1",
    weeks: "Weeks 1-4",
    title: "Foundation & Form",
    color: "from-sky-500 to-blue-600",
    bg: "bg-sky-50",
    text: "text-sky-700",
    border: "border-sky-200",
    split: "Full body · 3x/week",
    volume: "3 sets × 10-12 reps",
    focus: "Movement quality & mind-muscle connection",
    rest: "60-90s",
    rpe: "RPE 6-7 / RIR 3-4",
  },
  {
    key: "phase2",
    badge: "🟡 Phase 2",
    weeks: "Weeks 5-8",
    title: "Strength Building",
    color: "from-amber-400 to-yellow-500",
    bg: "bg-amber-50",
    text: "text-amber-700",
    border: "border-amber-200",
    split: "Upper/Lower split · 4x/week",
    volume: "4 sets × 8-10 reps",
    focus: "Progressive overload & controlled reps",
    rest: "60-90s",
    rpe: "RPE 7-8 / RIR 2-3",
  },
  {
    key: "phase3",
    badge: "🔴 Phase 3",
    weeks: "Weeks 9-12",
    title: "Intensity & Definition",
    color: "from-rose-500 to-red-600",
    bg: "bg-rose-50",
    text: "text-rose-700",
    border: "border-rose-200",
    split: "Push/Pull/Legs · 5-6x/week",
    volume: "4 sets × 6-10 reps",
    focus: "Metabolic stress & muscle density",
    rest: "45-75s",
    rpe: "RPE 8-9 / RIR 1-2",
  },
];

export const cardio = [
  { phase: "Phase 1", weeks: "1-4", type: "Incline walk (5-10%, 3-4 km/h)", freq: "3x/week post-workout", duration: "15-20 min" },
  { phase: "Phase 2", weeks: "5-8", type: "Incline walk / Light jog / Cycling", freq: "3-4x/week", duration: "20-25 min" },
  { phase: "Phase 3", weeks: "9-12", type: "HIIT: 30s sprint / 90s rest × 6-8 rounds", freq: "2x/week on off days", duration: "15-20 min" },
];

export const proteinSources = [
  { name: "Soya chunks", value: "52g", unit: "/100g" },
  { name: "Eggs", value: "13g", unit: "/each" },
  { name: "Low-fat Paneer", value: "18-20g", unit: "/100g" },
  { name: "Chicken breast", value: "31g", unit: "/100g" },
  { name: "Moong dal", value: "7-8g", unit: "/100g" },
  { name: "Masoor dal", value: "9g", unit: "/100g" },
  { name: "Rajma", value: "9g", unit: "/100g" },
  { name: "Chole", value: "9g", unit: "/100g" },
  { name: "Low-fat curd", value: "3.5g", unit: "/100g" },
  { name: "Toned milk", value: "3.4g", unit: "/100ml" },
];

export const sampleDays = [
  {
    key: "A",
    title: "Sample Day A — Regular (Eggs & Veg)",
    totals: "~2,100 kcal · P: ~145g · C: ~205g · F: ~55g",
    meals: [
      { time: "7:00 AM", icon: "🌅", meal: "Pre-Workout", desc: "Black coffee / green tea + 100ml toned milk" },
      { time: "7:30-8:30 AM", icon: "🏋️", meal: "Workout", desc: "Sip water with a pinch of salt" },
      { time: "9:00 AM", icon: "🍳", meal: "Breakfast", desc: "3 whole eggs + 2 multigrain roti + 1 bowl curd + cucumber salad" },
      { time: "12:00 PM", icon: "🥜", meal: "Mid-Meal", desc: "1 apple + 5-6 soaked almonds + green tea" },
      { time: "2:00 PM", icon: "🍛", meal: "Lunch", desc: "1.5 katori brown rice / 3 roti + 1 bowl moong dal + 1 bowl seasonal sabzi + curd" },
      { time: "5:00 PM", icon: "🍵", meal: "Snack", desc: "Makhana (20g) + 1 cup low-fat milk (200ml) OR 1 boiled egg" },
      { time: "7:30 PM", icon: "🥗", meal: "Dinner", desc: "1 bowl soya chunk sabzi (30g dry) + 2 multigrain roti + onion-tomato salad" },
      { time: "10:00 PM", icon: "🌙", meal: "Bedtime", desc: "1 cup warm toned milk (150ml) + turmeric" },
    ],
  },
  {
    key: "B",
    title: "Sample Day B — Soya & Paneer Focus",
    totals: "~2,080 kcal · P: ~148g · C: ~195g · F: ~52g",
    meals: [
      { time: "7:30 AM", icon: "🌅", meal: "Breakfast", desc: "Paneer bhurji (100g low-fat paneer) + 2 multigrain roti + mint chutney" },
      { time: "11:00 AM", icon: "🥜", meal: "Mid-Meal", desc: "1 banana + 1 tsp peanut butter" },
      { time: "1:30 PM", icon: "🍛", meal: "Lunch", desc: "3 roti + 1 bowl masoor dal + 1 bowl bhindi sabzi + salad" },
      { time: "4:30 PM", icon: "🍵", meal: "Snack", desc: "Sprouts chaat (1 bowl mix sprouts) + lemon + chaat masala" },
      { time: "7:30 PM", icon: "🥗", meal: "Dinner", desc: "Soya chunk curry (35g dry) + 1 bowl brown rice + cucumber raita" },
      { time: "10:00 PM", icon: "🌙", meal: "Bedtime", desc: "1 cup warm milk (150ml) + pinch of nutmeg" },
    ],
  },
  {
    key: "C",
    title: "Sample Day C — Chicken Day (1x/week)",
    totals: "~2,120 kcal · P: ~150g · C: ~190g · F: ~50g",
    meals: [
      { time: "8:00 AM", icon: "🍳", meal: "Breakfast", desc: "2 eggs (boiled) + 2 roti + 1 bowl curd" },
      { time: "11:30 AM", icon: "🥜", meal: "Mid-Meal", desc: "1 apple + 5 almonds" },
      { time: "1:30 PM", icon: "🍛", meal: "Lunch", desc: "Chicken breast (150g, grilled/tawa) + 3 roti + salad + mint chutney" },
      { time: "5:00 PM", icon: "🍵", meal: "Snack", desc: "Makhana (20g) + green tea" },
      { time: "7:30 PM", icon: "🥗", meal: "Dinner", desc: "1 bowl paneer sabzi (75g paneer) + 2 roti + salad" },
      { time: "10:00 PM", icon: "🌙", meal: "Bedtime", desc: "1 cup warm milk (150ml)" },
    ],
  },
];

export const weeklyRotation = [
  { day: "Mon", breakfast: "3 eggs + 2 roti + curd", lunch: "Brown rice + moong dal + sabzi", snack: "Apple + almonds", dinner: "Soya chunk sabzi + 2 roti", stars: "🥚🥚🥚 Soya" },
  { day: "Tue", breakfast: "Paneer bhurji + 2 roti", lunch: "3 roti + masoor dal + sabzi", snack: "Makhana + milk", dinner: "Soya chunk curry + rice", stars: "🧀 Soya" },
  { day: "Wed", breakfast: "3 eggs + 1 roti + curd", lunch: "Brown rice + chole + salad", snack: "Banana + peanuts", dinner: "Paneer sabzi + 2 roti", stars: "🥚🥚🥚🧀" },
  { day: "Thu", breakfast: "Sprouts + 2 roti", lunch: "3 roti + rajma + sabzi", snack: "Apple + curd", dinner: "Soya chunk + 2 roti", stars: "🌱 Soya" },
  { day: "Fri", breakfast: "3 eggs + 2 roti", lunch: "Brown rice + moong dal + sabzi", snack: "Makhana + green tea", dinner: "Paneer bhurji + 1 roti + salad", stars: "🥚🥚🥚🧀" },
  { day: "Sat", breakfast: "Oats (50g) + milk + nuts", lunch: "3 roti + chole + onion salad", snack: "Sprouts chaat", dinner: "Soya chunk sabzi + 2 roti", stars: "🌱 Soya" },
  { day: "Sun", breakfast: "2 eggs + 2 roti + curd", lunch: "Chicken (150g) + 3 roti + salad", snack: "Banana + almonds", dinner: "Light: paneer sabzi + 1 roti", stars: "🍗🥚🧀" },
];

export const dailyRoutine = [
  { time: "6:30 AM", activity: "Wake up + 500ml warm water + lemon", note: "Hydrate immediately" },
  { time: "7:00-7:30 AM", activity: "Pre-workout snack + coffee/tea", note: "Light carbs" },
  { time: "7:30-8:30 AM", activity: "🏋️ WORKOUT", note: "Train fasted or with pre-workout snack" },
  { time: "9:00 AM", activity: "🍳 Post-workout breakfast", note: "High protein meal" },
  { time: "10:00 AM-1:00 PM", activity: "Work / Daily tasks", note: "Drink water" },
  { time: "12:00 PM", activity: "🥜 Mid-meal snack", note: "Fruit + nuts" },
  { time: "1:30-2:00 PM", activity: "🍛 Lunch", note: "Dal + roti/rice + sabzi" },
  { time: "2:30-5:00 PM", activity: "Work / tasks", note: "Stay active, walk around" },
  { time: "5:00 PM", activity: "🍵 Evening snack", note: "Makhana / sprouts / milk" },
  { time: "6:30-7:00 PM", activity: "Light walk / stretching", note: "10-15 min" },
  { time: "7:30 PM", activity: "🥗 Dinner", note: "Protein-rich, lighter on carbs" },
  { time: "9:00-10:00 PM", activity: "Screen off / wind down", note: "Read / meditate" },
  { time: "10:00 PM", activity: "🌙 Warm milk + sleep", note: "7-8 hours sleep — critical!" },
];

export const milestones = [
  { week: "1", phase: "Foundation", weight: "72.5 kg", focus: "Form & consistency", milestone: "✅ Establish routine" },
  { week: "2", phase: "Foundation", weight: "72.0 kg", focus: "Protein hitting 140g", milestone: "✅ Macro discipline" },
  { week: "3", phase: "Foundation", weight: "71.3 kg", focus: "Sleep & water routine", milestone: "✅ Habits locked" },
  { week: "4", phase: "Foundation", weight: "70.7 kg", focus: "End of Phase 1", milestone: "🎯 -2.3 kg | Photos" },
  { week: "5", phase: "Strength", weight: "70.2 kg", focus: "Increase weights", milestone: "✅ Upper/Lower split" },
  { week: "6", phase: "Strength", weight: "69.5 kg", focus: "Progressive overload", milestone: "✅ Strength gains" },
  { week: "7", phase: "Strength", weight: "68.8 kg", focus: "Cardio consistency", milestone: "✅ NEAT steps 10k" },
  { week: "8", phase: "Strength", weight: "68.2 kg", focus: "End of Phase 2", milestone: "🎯 -4.8 kg | Photos" },
  { week: "9", phase: "Intensity", weight: "67.7 kg", focus: "PPL split starts", milestone: "✅ Higher frequency" },
  { week: "10", phase: "Intensity", weight: "67.2 kg", focus: "HIIT cardio", milestone: "✅ Fat loss accelerates" },
  { week: "11", phase: "Intensity", weight: "66.6 kg", focus: "Peak definition", milestone: "✅ Abs becoming visible" },
  { week: "12", phase: "Intensity", weight: "66.0 kg", focus: "Final push", milestone: "🏆 TARGET ACHIEVED!" },
];

export const tracking = [
  { metric: "Weight", how: "Digital scale, morning, post-toilet", freq: "Weekly (Mon)", target: "66-67 kg" },
  { metric: "Waist circumference", how: "Tape at navel level", freq: "Bi-weekly", target: "78-80 cm" },
  { metric: "Body fat % (estimate)", how: "Navy method or calipers", freq: "Every 4 weeks", target: "~14-16%" },
  { metric: "Strength (lifts)", how: "Notebook or app", freq: "Every session", target: "Progressive increase" },
  { metric: "Calories", how: "HealthifyMe / MyFitnessPal", freq: "Daily", target: "2,050-2,150" },
  { metric: "Protein", how: "Same app", freq: "Daily", target: "140-150g" },
  { metric: "Steps", how: "Phone / fitness band", freq: "Daily", target: "8,000-10,000" },
  { metric: "Water", how: "Bottle tracking", freq: "Daily", target: "3-4 L" },
  { metric: "Sleep", how: "Track manually", freq: "Daily", target: "7-8 hrs" },
  { metric: "Progress photos", how: "Phone camera", freq: "Every 4 weeks", target: "Visual change" },
];

export const challenges = [
  { icon: "😫", title: "I'm hungry all the time", solution: "Add more voluminous vegetables. Drink water before meals. Spread protein across more meals. Eat slowly — 20 min per meal." },
  { icon: "😴", title: "I feel tired/low energy", solution: "Check sleep (7+ hrs). Ensure carb intake isn't too low. Eat a small pre-workout meal (banana + coffee). Stay hydrated." },
  { icon: "🍽️", title: "I'm eating out / social events", solution: "Choose grilled or tandoor options. Skip rice/bread. Eat protein first. Drink water or buttermilk — avoid sugary drinks. One meal off won't ruin progress." },
  { icon: "📉", title: "Weight isn't dropping", solution: "Recalculate calories — are you weighing food? Check water retention (salt intake). Re-check macros." },
  { icon: "💪", title: "Not seeing muscle definition", solution: "Body recomp takes time. Keep deficit consistent, increase training intensity. Photos every 4 weeks will show what scale doesn't." },
  { icon: "🔄", title: "I missed a workout/meal", solution: "Don't double down. Just get back on track with the next scheduled session. One missed day doesn't matter — a missed week does." },
];

export const dos = [
  "Trust the process — results take 4-6 weeks to show",
  "Track everything — what gets measured gets managed",
  "Prioritize protein at every meal",
  "Sleep 7-8 hours — it's when your body transforms",
  "Drink 3-4 L water daily",
  "Take progress photos every 4 weeks",
  "Be patient and consistent",
];

export const donts = [
  "Don't starve yourself — severe deficits kill muscle",
  "Don't compare to others — your journey is unique",
  "Don't skip protein to save calories",
  "Don't weigh yourself every day",
  "Don't overtrain — recovery is training",
  "Don't quit — even slow progress is still progress",
];

export const foodsToAvoid = [
  "Fried foods (samosa, pakora, bhatura)",
  "Sugary drinks (soda, packaged juice)",
  "White rice → replace with brown rice",
  "Maida-based items (naan, bread, pasta)",
  "Processed snacks (chips, biscuits)",
  "Excess ghee/oil",
  "Alcohol (completely avoid during transformation)",
];
