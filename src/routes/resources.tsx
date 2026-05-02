import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";

export const Route = createFileRoute("/resources")({
  head: () => ({
    meta: [
      { title: "Free Outbound Templates & Frameworks | Vansh" },
      { name: "description", content: "Free cold email templates, ICP worksheets, TAM spreadsheets, and outbound guides. Steal them." },
      { property: "og:title", content: "Steal my stuff. Seriously." },
      { property: "og:description", content: "Templates, frameworks, and tools I actually use — free." },
    ],
  }),
  component: Resources,
});

const RESOURCES = [
  { cat: "Template", title: "The 3-Line Cold Email Formula", desc: "The exact structure I use to get 7% reply rates. Subject line + opener + CTA. Copy it.", cta: "Copy the Template →" },
  { cat: "Framework", title: "ICP Definition Worksheet", desc: "12 questions that force you to get specific about who you're actually selling to. Fill this before you touch Apollo.", cta: "Download PDF →" },
  { cat: "Tool", title: "TAM Mapping Spreadsheet", desc: "The exact Google Sheet I use to segment, tier, and prioritise accounts before any campaign.", cta: "Get the Sheet →" },
  { cat: "Breakdown", title: "Cold Email Teardown: What Makes Bilal Reply", desc: "A line-by-line breakdown of the sequence that got a Director of Consumer Insights to loop in their team and ask for a deck.", cta: "Read the Breakdown →" },
  { cat: "Guide", title: "The Outbound Stack for Zero Budget", desc: "Apollo free tier + Clay credits + Claude + a secondary Gmail domain. How to run real outbound before you have a budget.", cta: "Read the Guide →" },
  { cat: "Template", title: "Follow-Up Sequence Template (5 Touches)", desc: "The exact follow-up cadence — timing, tone, and what to say when they ghost you.", cta: "Copy the Template →" },
];

const CAT_COLOR: Record<string, string> = {
  Template: "var(--secondary)",
  Framework: "var(--primary)",
  Tool: "var(--accent)",
  Breakdown: "var(--secondary)",
  Guide: "var(--primary)",
};

function Resources() {
  return (
    <PageShell>
      <section className="max-w-5xl mx-auto px-5 sm:px-8 pt-16 pb-10">
        <h1 className="font-display text-5xl sm:text-7xl">
          Steal my stuff. <span className="squiggle">Seriously</span>.
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Templates, frameworks, and tools I actually use — free.
        </p>
      </section>

      <section className="max-w-5xl mx-auto px-5 sm:px-8 pb-16">
        <div className="grid md:grid-cols-2 gap-6">
          {RESOURCES.map((r, i) => (
            <article key={r.title} className="doodle-card p-6 flex flex-col" style={{ transform: i % 2 === 0 ? "rotate(-0.3deg)" : "rotate(0.3deg)" }}>
              <span
                className="sticker self-start mb-3"
                style={{ background: CAT_COLOR[r.cat], color: r.cat === "Tool" ? "var(--ink)" : "white", transform: "rotate(-2deg)" }}
              >
                {r.cat}
              </span>
              <h3 className="font-serif-d text-2xl mb-2">{r.title}</h3>
              <p className="text-foreground/75 flex-1">{r.desc}</p>
              <a href="#" className="mt-5 font-display text-xl text-primary squiggle self-start">{r.cta}</a>
            </article>
          ))}
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-5 sm:px-8 pb-24 text-center">
        <p className="font-display text-2xl">
          More coming. Building this as I go.{" "}
          <a href="https://x.com" target="_blank" rel="noreferrer" className="text-primary squiggle">Follow along →</a>
        </p>
      </section>
    </PageShell>
  );
}
