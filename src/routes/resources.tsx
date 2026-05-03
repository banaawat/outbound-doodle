import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { Star } from "@/components/Squiggle";

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

type Resource = {
  cat: "Template" | "Framework" | "Tool" | "Breakdown" | "Guide";
  title: string;
  desc: string;
  cta: string;
  meta: string;
  featured?: boolean;
};

const RESOURCES: Resource[] = [
  {
    cat: "Breakdown",
    title: "Cold Email Teardown: The Reply That Booked Domino's UAE",
    desc: "Line-by-line breakdown of the 3-email sequence that got a F&B leadership team to loop in their director and ask for a deck. Subject lines, openers, why it worked.",
    cta: "Read the Breakdown →",
    meta: "8 min read",
    featured: true,
  },
  {
    cat: "Template",
    title: "The 3-Line Cold Email Formula",
    desc: "The exact structure I use to get 7%+ reply rates. Subject + opener + CTA. Includes 5 fill-in-the-blank variants for SaaS, agencies, and services.",
    cta: "Copy the Template →",
    meta: "Google Doc",
  },
  {
    cat: "Framework",
    title: "ICP Definition Worksheet",
    desc: "12 questions that force you to get specific about who you're actually selling to. Fill this before you touch Apollo or you'll burn your domain.",
    cta: "Download PDF →",
    meta: "PDF · 4 pages",
  },
  {
    cat: "Tool",
    title: "TAM Mapping Spreadsheet",
    desc: "The exact Google Sheet I use to segment, tier (T1/T2/T3), and prioritise accounts before any campaign. Pre-built formulas + sample data.",
    cta: "Get the Sheet →",
    meta: "Google Sheet",
  },
  {
    cat: "Template",
    title: "Follow-Up Sequence (5 Touches)",
    desc: "The exact follow-up cadence — timing, tone, and what to say when they ghost. Includes the breakup email that gets 30% of replies.",
    cta: "Copy the Template →",
    meta: "Google Doc",
  },
  {
    cat: "Guide",
    title: "The Outbound Stack for Zero Budget",
    desc: "Apollo free tier + Clay credits + Claude + a secondary Gmail domain. How to run real outbound before you have a budget. The exact stack I started with.",
    cta: "Read the Guide →",
    meta: "12 min read",
  },
];

const CAT_COLOR: Record<Resource["cat"], string> = {
  Template: "var(--secondary)",
  Framework: "var(--primary)",
  Tool: "var(--accent)",
  Breakdown: "var(--secondary)",
  Guide: "var(--primary)",
};

const CATS: Resource["cat"][] = ["Template", "Framework", "Tool", "Breakdown", "Guide"];

function Resources() {
  const featured = RESOURCES.find((r) => r.featured)!;
  const rest = RESOURCES.filter((r) => !r.featured);

  return (
    <PageShell>
      {/* HERO */}
      <section className="max-w-5xl mx-auto px-5 sm:px-8 pt-16 pb-10 relative">
        <Star className="absolute right-10 top-14 w-6 h-6 hidden md:block" color="var(--secondary)" />
        <span className="pill mb-5 inline-flex" style={{ background: "color-mix(in oklab, var(--accent) 40%, white)" }}>
          🎁 Free · No email gate · Just take them
        </span>
        <h1 className="font-display text-5xl sm:text-7xl">
          Steal my stuff. <span className="squiggle">Seriously</span>.
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-foreground/80">
          The templates, frameworks, and tools I actually use to run outbound for paying clients.
          Copy, fork, remix — whatever helps you book meetings.
        </p>

        <div className="mt-7 flex flex-wrap gap-2">
          {CATS.map((c) => (
            <a
              key={c}
              href={`#cat-${c.toLowerCase()}`}
              className="pill hover:-translate-y-0.5 transition-transform"
              style={{ background: CAT_COLOR[c], color: c === "Tool" ? "var(--ink)" : "white" }}
            >
              {c}s
            </a>
          ))}
        </div>
      </section>

      {/* FEATURED */}
      <section className="max-w-5xl mx-auto px-5 sm:px-8 pb-12">
        <div className="flex items-center gap-2 mb-4">
          <span className="font-display text-2xl">★ Most popular</span>
          <span className="text-muted-foreground text-sm">— start here</span>
        </div>
        <article
          className="doodle-card p-8 sm:p-10 relative"
          style={{ background: "color-mix(in oklab, var(--accent) 25%, white)", transform: "rotate(-0.4deg)" }}
        >
          <span
            className="sticker absolute -top-4 -left-3"
            style={{ background: CAT_COLOR[featured.cat], color: "white", transform: "rotate(-4deg)" }}
          >
            {featured.cat}
          </span>
          <span className="sticker sticker-orange absolute -top-4 -right-3" style={{ transform: "rotate(6deg)" }}>
            real client · real reply
          </span>
          <h2 className="font-serif-d text-3xl sm:text-4xl mb-3 mt-2">{featured.title}</h2>
          <p className="text-foreground/80 text-lg leading-relaxed max-w-3xl">{featured.desc}</p>
          <div className="mt-6 flex items-center gap-5 flex-wrap">
            <a href="#" className="btn-doodle btn-orange font-display text-lg">{featured.cta}</a>
            <span className="text-muted-foreground text-sm">{featured.meta}</span>
          </div>
        </article>
      </section>

      {/* GRID */}
      <section className="max-w-5xl mx-auto px-5 sm:px-8 pb-16">
        <h2 className="font-display text-4xl sm:text-5xl mb-2">
          The <span className="squiggle-blue">vault</span>.
        </h2>
        <p className="text-muted-foreground mb-8">Everything else, organised by type.</p>
        <div className="grid md:grid-cols-2 gap-6">
          {rest.map((r, i) => (
            <article
              key={r.title}
              id={`cat-${r.cat.toLowerCase()}`}
              className="doodle-card p-6 flex flex-col"
              style={{ transform: i % 2 === 0 ? "rotate(-0.3deg)" : "rotate(0.3deg)" }}
            >
              <div className="flex items-center justify-between mb-3">
                <span
                  className="sticker"
                  style={{ background: CAT_COLOR[r.cat], color: r.cat === "Tool" ? "var(--ink)" : "white", transform: "rotate(-2deg)" }}
                >
                  {r.cat}
                </span>
                <span className="text-xs text-muted-foreground font-mono">{r.meta}</span>
              </div>
              <h3 className="font-serif-d text-2xl mb-2">{r.title}</h3>
              <p className="text-foreground/75 flex-1 leading-relaxed">{r.desc}</p>
              <a href="#" className="mt-5 font-display text-xl text-primary squiggle self-start">{r.cta}</a>
            </article>
          ))}
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="max-w-4xl mx-auto px-5 sm:px-8 pb-16">
        <div className="doodle-card p-8 sm:p-10" style={{ background: "color-mix(in oklab, var(--primary) 8%, white)" }}>
          <div className="grid md:grid-cols-[1.4fr_1fr] gap-6 items-center">
            <div>
              <h3 className="font-display text-3xl sm:text-4xl mb-2">
                Get new drops in your inbox.
              </h3>
              <p className="text-foreground/75">
                One email a week. New templates, teardowns of cold emails I sent that month, and what's working in outbound right now. No fluff.
              </p>
            </div>
            <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="you@company.com"
                className="px-4 py-3 rounded-md border-2 border-dashed border-foreground/70 bg-white font-sans focus:outline-none focus:border-primary"
                required
              />
              <button type="submit" className="btn-doodle btn-primary font-display text-lg">
                Subscribe →
              </button>
              <p className="text-xs text-muted-foreground">No spam. Unsubscribe whenever.</p>
            </form>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-3xl mx-auto px-5 sm:px-8 pb-24 text-center">
        <p className="font-display text-2xl mb-4">
          Want me to do this <span className="highlight">for you</span> instead?
        </p>
        <Link to="/contact" className="btn-doodle btn-orange font-display text-xl">Book a Free Call →</Link>
      </section>
    </PageShell>
  );
}
