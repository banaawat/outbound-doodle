import { Star } from "./Squiggle";

const STEPS = [
  {
    n: "01",
    title: "We talk",
    desc: "20-min call. I figure out who you sell to, what's broken, and whether I'm actually the right person for it.",
    color: "var(--primary)",
  },
  {
    n: "02",
    title: "I map your TAM",
    desc: "Industry, company size, geo, tech stack, signals. You get a tiered list of accounts that match your ICP — not 10,000 random emails.",
    color: "var(--secondary)",
  },
  {
    n: "03",
    title: "I write the sequence",
    desc: "3–5 emails. Sounds like a human. Doesn't open with 'Hope you're doing well'. You approve before anything sends.",
    color: "var(--accent)",
  },
  {
    n: "04",
    title: "We launch + iterate",
    desc: "Campaign goes live. Weekly reports. We kill what doesn't work and double down on what does. Replies come in, meetings get booked.",
    color: "var(--primary)",
  },
];

export function Process() {
  return (
    <section className="max-w-5xl mx-auto px-5 sm:px-8 pb-20">
      <div className="flex items-end gap-3 mb-3">
        <h2 className="font-display text-5xl sm:text-6xl">
          How we'll <span className="squiggle-blue">work</span> together.
        </h2>
        <Star className="w-7 h-7 mb-3 hidden sm:block" color="var(--secondary)" />
      </div>
      <p className="text-muted-foreground mb-10">Four steps. No mystery. No "growth hacking" fluff.</p>

      <div className="grid md:grid-cols-2 gap-6">
        {STEPS.map((s, i) => (
          <article
            key={s.n}
            className="doodle-card p-7 relative"
            style={{ transform: i % 2 === 0 ? "rotate(-0.5deg)" : "rotate(0.5deg)" }}
          >
            <div
              className="absolute -top-5 -left-3 font-display text-5xl px-3 py-0.5 rounded-md border-2 border-dashed border-foreground"
              style={{ background: s.color, color: s.color === "var(--accent)" ? "var(--ink)" : "white", boxShadow: "3px 3px 0 var(--ink)" }}
            >
              {s.n}
            </div>
            <h3 className="font-serif-d text-3xl mt-3 mb-2">{s.title}</h3>
            <p className="text-foreground/75 leading-relaxed">{s.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
