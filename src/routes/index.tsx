import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import heroImg from "@/assets/hero-pineapple.jpg";
import cayenneImg from "@/assets/var-cayenne.jpg";
import redSpanishImg from "@/assets/var-redspanish.jpg";
import sugarloafImg from "@/assets/var-sugarloaf.jpg";
import geometryImg from "@/assets/pineapple-geometry.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const varieties = [
  {
    name: "Smooth Cayenne",
    origin: "Hawaii",
    img: cayenneImg,
    blurb: "The global standard. High sugar content and a low-fiber texture perfect for canning.",
    stats: { brix: "14°", weight: "2.5kg", acid: "0.6%" },
  },
  {
    name: "Red Spanish",
    origin: "Caribbean",
    img: redSpanishImg,
    blurb: "Robust and hardy. Distinct reddish skin, spicy aromatic notes, exceptional shelf life.",
    stats: { brix: "12°", weight: "1.8kg", acid: "0.9%" },
  },
  {
    name: "Kona Sugarloaf",
    origin: "Mexico / Hawaii",
    img: sugarloafImg,
    blurb: "The elite dessert fruit. Pale flesh so sweet it lacks the typical acidic bite.",
    stats: { brix: "18°", weight: "2.0kg", acid: "0.3%" },
  },
];

const facts = [
  {
    q: "How do they grow?",
    a: "Pineapples do not grow on trees. They are a cluster of individual berries that fuse together around a central core, emerging from the ground as a single bromeliad stalk.",
  },
  {
    q: "What is Bromelain?",
    a: "A unique enzyme that breaks down proteins. It's why pineapple is a natural meat tenderizer — and why your tongue might tingle after a snack.",
  },
  {
    q: "Historical currency?",
    a: "In 18th-century Europe, a single fruit could cost the equivalent of $8,000. People often rented them for parties to display wealth rather than eat them.",
  },
  {
    q: "How long to grow one?",
    a: "A single plant takes nearly two years to produce one fruit. Patience is the secret ingredient of the tropics.",
  },
];

const timeline = [
  { year: "1493", title: "Columbus Encounters", body: "First recorded by Europeans in Guadeloupe. Named piña for its likeness to a pine cone." },
  { year: "1660", title: "Royal Obsession", body: "Charles II of England receives one as a diplomatic gift. Pineapple mania spreads across Europe." },
  { year: "1720s", title: "The Pineries", body: "Hothouse cultivation begins on English estates. Growing one fruit costs the modern equivalent of a small car." },
  { year: "1901", title: "Dole in Hawaii", body: "James Dole founds the Hawaiian Pineapple Company, industrialising the fruit for the world." },
];

const quiz = [
  { q: "A pineapple is botanically…", options: ["A single berry", "A cluster of fused berries", "A tropical nut"], answer: 1 },
  { q: "The scale pattern follows which sequence?", options: ["Fibonacci", "Prime numbers", "Golden mean only"], answer: 0 },
  { q: "Bromelain is best known for…", options: ["Coloring the flesh", "Tenderizing protein", "Ripening the crown"], answer: 1 },
];

function Index() {
  const [openFact, setOpenFact] = useState<number | null>(0);
  const [qIndex, setQIndex] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const current = quiz[qIndex];
  const done = qIndex >= quiz.length;

  return (
    <div className="bg-pulp text-ink font-sans selection:bg-fruit/30">
      <nav className="sticky top-0 z-50 bg-pulp/80 backdrop-blur-md border-b border-ink/5">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-serif text-xl font-semibold tracking-tight text-leaf">Ananas.</span>
          <div className="hidden md:flex gap-8 items-center">
            <a href="#varieties" className="text-sm font-medium hover:text-fruit transition-colors">Varieties</a>
            <a href="#history" className="text-sm font-medium hover:text-fruit transition-colors">History</a>
            <a href="#nutrition" className="text-sm font-medium hover:text-fruit transition-colors">Nutrition</a>
            <a href="#quiz" className="text-sm font-medium hover:text-fruit transition-colors">Quiz</a>
            <a href="#quiz" className="bg-leaf text-pulp px-4 py-2 rounded-full text-sm font-medium hover:opacity-90 transition-opacity">Test yourself</a>
          </div>
        </div>
      </nav>

      <section className="py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6 flex flex-col items-center text-center">
          <span className="inline-block px-3 py-1 rounded-full bg-fruit/10 text-fruit text-xs font-semibold tracking-widest uppercase mb-6">The Sovereign of Tropics</span>
          <h1 className="font-serif text-5xl md:text-7xl font-medium leading-none text-balance max-w-[20ch] mb-8 text-leaf">
            Nature's Most Geometric Masterpiece
          </h1>
          <p className="text-lg md:text-xl text-pretty max-w-[48ch] text-ink/70 mb-12">
            Beyond the crown and the golden scales lies a five-hundred-year journey from the wild basins of South America to the tables of royalty.
          </p>
          <img
            src={heroImg}
            alt="A single pineapple resting on a warm stone pedestal"
            width={1600}
            height={900}
            className="w-full aspect-[21/9] object-cover rounded-xl ring-1 ring-black/5"
          />
        </div>
      </section>

      <section id="varieties" className="py-24 bg-white/40">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between md:items-end mb-16 gap-6">
            <div className="max-w-[56ch]">
              <h2 className="font-serif text-4xl font-medium leading-tight mb-4 text-leaf">The Great Cultivars</h2>
              <p className="text-ink/60">From the honey-sweet Sugarloaf to the fibrous Red Spanish, explore the distinct architectures of the genus Ananas.</p>
            </div>
            <span className="text-[11px] uppercase tracking-widest text-ink/40">03 varieties · hover to inspect</span>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {varieties.map((v) => (
              <article key={v.name} className="group relative bg-pulp p-1 rounded-3xl ring-1 ring-black/5 overflow-hidden transition-transform hover:-translate-y-1 duration-300">
                <div className="relative overflow-hidden rounded-[20px]">
                  <img
                    src={v.img}
                    alt={v.name}
                    width={800}
                    height={800}
                    loading="lazy"
                    className="w-full aspect-square object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-ink/80 via-ink/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="grid grid-cols-3 gap-2 text-pulp">
                      {Object.entries(v.stats).map(([k, val]) => (
                        <div key={k} className="text-center">
                          <div className="font-serif text-base">{val}</div>
                          <div className="text-[9px] uppercase tracking-widest opacity-70">{k}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-baseline justify-between mb-2">
                    <h3 className="font-serif text-xl font-medium">{v.name}</h3>
                    <span className="text-[10px] uppercase tracking-widest text-ink/40">{v.origin}</span>
                  </div>
                  <p className="text-sm text-ink/60 text-pretty">{v.blurb}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-leaf">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-fruit/20 text-fruit text-xs font-semibold tracking-widest uppercase mb-6">Botanical Notes</span>
              <h2 className="font-serif text-4xl font-medium leading-tight text-pulp mb-8 text-balance">The Bromeliad Mystery</h2>
              <div className="divide-y divide-pulp/10 border-y border-pulp/10">
                {facts.map((f, i) => {
                  const open = openFact === i;
                  return (
                    <button
                      key={f.q}
                      onClick={() => setOpenFact(open ? null : i)}
                      className="w-full text-left py-5"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-pulp text-lg font-medium">{f.q}</span>
                        <span className={`text-pulp/50 text-2xl transition-transform ${open ? "rotate-45" : ""}`}>+</span>
                      </div>
                      <div className={`grid transition-all duration-300 ${open ? "grid-rows-[1fr] opacity-100 mt-3" : "grid-rows-[0fr] opacity-0"}`}>
                        <p className="overflow-hidden text-pulp/70 max-w-[52ch] text-sm leading-relaxed">{f.a}</p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
            <div className="relative">
              <img
                src={geometryImg}
                alt="Macro view of pineapple skin geometry"
                width={1000}
                height={1200}
                loading="lazy"
                className="w-full aspect-[4/5] object-cover rounded-3xl ring-1 ring-pulp/10"
              />
              <div className="absolute -bottom-6 -left-6 bg-fruit p-6 rounded-2xl ring-1 ring-black/5 max-w-[220px]">
                <p className="text-leaf font-serif text-xl font-semibold leading-tight">8 : 13 : 21</p>
                <p className="text-leaf/80 text-xs mt-2">The scales of a pineapple spiral in exact Fibonacci ratios.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="history" className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-medium text-leaf mb-4">Five Centuries of Obsession</h2>
            <p className="text-ink/60 mx-auto max-w-[56ch]">From colonial curiosity to industrial commodity — the pineapple's journey across oceans and dining rooms.</p>
          </div>
          <ol className="relative border-l border-leaf/15 ml-3 space-y-12">
            {timeline.map((t) => (
              <li key={t.year} className="pl-8 relative">
                <span className="absolute -left-[7px] top-1.5 size-3 rounded-full bg-fruit ring-4 ring-pulp" />
                <div className="font-serif text-fruit text-sm tracking-wide">{t.year}</div>
                <h3 className="font-serif text-2xl text-leaf mt-1">{t.title}</h3>
                <p className="text-ink/60 mt-2 max-w-[60ch]">{t.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="nutrition" className="py-24 bg-white/40">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-medium text-leaf mb-4">The Anatomy of Vitality</h2>
            <p className="text-ink/60 mx-auto max-w-[56ch]">Per 100g of raw fruit, the pineapple delivers a concentrated burst of tropical micro-nutrients.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-ink/5 rounded-3xl overflow-hidden ring-1 ring-black/5">
            {[
              { l: "Vitamin C", v: "80%", s: "Daily Value" },
              { l: "Manganese", v: "46%", s: "Daily Value" },
              { l: "Fiber", v: "1.4g", s: "Per 100g" },
              { l: "Calories", v: "50", s: "Per 100g" },
            ].map((n) => (
              <div key={n.l} className="bg-pulp p-10">
                <span className="text-fruit text-sm font-semibold mb-2 block">{n.l}</span>
                <span className="text-4xl font-serif text-leaf">{n.v}</span>
                <span className="text-xs text-ink/40 block mt-1 uppercase tracking-wider">{n.s}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="quiz" className="py-24">
        <div className="max-w-2xl mx-auto px-6">
          <div className="text-center mb-10">
            <span className="inline-block px-3 py-1 rounded-full bg-fruit/10 text-fruit text-xs font-semibold tracking-widest uppercase mb-4">Interactive</span>
            <h2 className="font-serif text-4xl font-medium text-leaf">Pineapple Paradox</h2>
            <p className="text-ink/60 mt-3">Three questions. One crown.</p>
          </div>

          <div className="bg-pulp ring-1 ring-black/5 rounded-3xl p-8 md:p-10 shadow-sm">
            {!done ? (
              <>
                <div className="flex items-center justify-between text-[11px] uppercase tracking-widest text-ink/40 mb-4">
                  <span>Question {qIndex + 1} of {quiz.length}</span>
                  <span>Score {score}</span>
                </div>
                <h3 className="font-serif text-2xl text-leaf mb-6">{current.q}</h3>
                <div className="space-y-3">
                  {current.options.map((opt, i) => {
                    const isPicked = picked === i;
                    const isCorrect = picked !== null && i === current.answer;
                    const isWrong = isPicked && i !== current.answer;
                    return (
                      <button
                        key={opt}
                        disabled={picked !== null}
                        onClick={() => {
                          setPicked(i);
                          if (i === current.answer) setScore((s) => s + 1);
                        }}
                        className={`w-full text-left px-5 py-4 rounded-xl border transition-all ${
                          isCorrect
                            ? "border-leaf bg-leaf/5 text-leaf"
                            : isWrong
                              ? "border-fruit bg-fruit/5"
                              : "border-ink/10 hover:border-leaf/40 hover:bg-white/60"
                        } disabled:cursor-not-allowed`}
                      >
                        <span className="font-medium">{opt}</span>
                      </button>
                    );
                  })}
                </div>
                {picked !== null && (
                  <button
                    onClick={() => {
                      setPicked(null);
                      setQIndex((i) => i + 1);
                    }}
                    className="mt-6 bg-leaf text-pulp px-5 py-3 rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
                  >
                    {qIndex + 1 === quiz.length ? "See result" : "Next question"}
                  </button>
                )}
              </>
            ) : (
              <div className="text-center py-6">
                <div className="font-serif text-5xl text-leaf mb-2">{score} / {quiz.length}</div>
                <p className="text-ink/60 mb-6">
                  {score === quiz.length
                    ? "Crowned. You know your bromeliads."
                    : score >= 2
                      ? "Solid harvest. A worthy pineapple citizen."
                      : "The crown eludes you. Read on and try again."}
                </p>
                <button
                  onClick={() => {
                    setScore(0);
                    setQIndex(0);
                    setPicked(null);
                  }}
                  className="bg-fruit text-leaf px-5 py-3 rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
                >
                  Play again
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      <footer className="bg-pulp border-t border-ink/5 py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="flex items-center gap-4">
              <span className="font-serif text-2xl font-semibold text-leaf">Ananas.</span>
              <p className="text-sm text-ink/40">The definitive digital archive of the bromeliad family.</p>
            </div>
            <div className="flex gap-6">
              <a href="#varieties" className="text-sm text-ink/60 hover:text-fruit transition-colors">Varieties</a>
              <a href="#history" className="text-sm text-ink/60 hover:text-fruit transition-colors">History</a>
              <a href="#nutrition" className="text-sm text-ink/60 hover:text-fruit transition-colors">Nutrition</a>
              <a href="#quiz" className="text-sm text-ink/60 hover:text-fruit transition-colors">Quiz</a>
            </div>
          </div>
          <div className="mt-10 pt-6 border-t border-ink/5 flex flex-col md:flex-row justify-between gap-2">
            <span className="text-[11px] uppercase tracking-widest text-ink/30">© 2026 Ananas Editorial</span>
            <span className="text-[11px] uppercase tracking-widest text-ink/30">Designed for Enthusiasts</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
