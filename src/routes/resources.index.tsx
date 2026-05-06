import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { PageShell } from "@/components/PageShell";
import brewLogo from "@/assets/logo-brew.png";
import { RESOURCES, CATS, CAT_COLOR, TAG_COLOR, type Cat } from "@/data/resources";

export const Route = createFileRoute("/resources/")({
  head: () => ({
    meta: [
      { title: "Cold Email Templates, Teardowns & Outbound Playbooks | Banaawat" },
      {
        name: "description",
        content:
          "Free cold email templates, ICP frameworks, TAM spreadsheets, deliverability checklists, and weekly outbound teardowns. Built from real B2B SaaS campaigns.",
      },
      { property: "og:title", content: "The Outbound Library — free templates, teardowns & playbooks" },
      { property: "og:description", content: "Everything I use to book 80+ meetings a quarter. Free. No email gate." },
    ],
  }),
  component: Resources,
});

const POPULAR_TOPICS = [
  "cold email subject lines",
  "deliverability",
  "Apollo workflows",
  "Clay enrichment",
  "follow-up cadence",
  "ICP scoring",
  "founder-led outbound",
  "domain warmup",
];

function Resources() {
  const [cat, setCat] = useState<"All" | Cat>("All");
  const [q, setQ] = useState("");

  const filtered = useMemo(() => {
    return RESOURCES.filter((r) => {
      if (cat !== "All" && r.cat !== cat) return false;
      if (q && !(r.title + r.desc).toLowerCase().includes(q.toLowerCase())) return false;
      return true;
    });
  }, [cat, q]);

  const featured = RESOURCES.find((r) => r.featured)!;
  const grid = filtered.filter((r) => !r.featured);

  return (
    <PageShell>
      {/* HERO */}
      <section className="border-b-2 border-dashed border-foreground/30 bg-[color-mix(in_oklab,var(--accent)_18%,white)]">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 pt-16 pb-12">
          <div className="grid lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-12">
              <span className="pill mb-5 inline-flex" style={{ background: "white" }}>
                🎁 Free · No email required · {RESOURCES.length} resources & counting
              </span>
              <h1 className="font-serif-d text-5xl sm:text-6xl lg:text-7xl leading-[1] tracking-tight">
                The outbound library.
              </h1>
              <p className="mt-5 max-w-2xl text-lg text-foreground/80">
                Templates, teardowns, playbooks, and tools I actually use to book meetings for B2B SaaS clients.
                Updated weekly. Stolen often. <Link to="/contact" className="underline underline-offset-4 decoration-2 decoration-secondary">Hire me</Link> if you'd rather skip the DIY.
              </p>

              {/* Search */}
              <div className="mt-7 flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <input
                    type="text"
                    value={q}
                    onChange={(e) => setQ(e.target.value)}
                    placeholder="Search 'subject lines', 'follow-up', 'ICP'…"
                    className="w-full px-5 py-3.5 rounded-md border-2 border-dashed border-foreground/70 bg-white font-sans focus:outline-none focus:border-primary"
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground">⌕</span>
                </div>
                <a href="#newsletter" className="btn-doodle btn-primary font-sans font-bold">
                  Get weekly drops →
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CATEGORY PILLS */}
      <section className="sticky top-0 z-20 bg-background/95 backdrop-blur border-b-2 border-dashed border-foreground/20">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-3 flex gap-2 overflow-x-auto">
          {CATS.map((c) => {
            const active = cat === c;
            return (
              <button
                key={c}
                onClick={() => setCat(c)}
                className="px-4 py-1.5 rounded-full border-2 font-semibold text-sm whitespace-nowrap transition-all"
                style={{
                  background: active ? "var(--ink)" : "white",
                  color: active ? "white" : "var(--ink)",
                  borderColor: "var(--ink)",
                  borderStyle: active ? "solid" : "dashed",
                }}
              >
                {c}
                {c !== "All" && (
                  <span className="ml-1.5 opacity-60 text-xs">
                    {RESOURCES.filter((r) => r.cat === c).length}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </section>

      {/* FEATURED — only show on All */}
      {cat === "All" && !q && (
        <section className="max-w-6xl mx-auto px-5 sm:px-8 pt-12 pb-8">
          <div className="flex items-baseline gap-3 mb-4">
            <span className="font-display text-2xl">★ Most popular this month</span>
          </div>
          <article className="doodle-card overflow-hidden grid md:grid-cols-2 bg-card">
            <div className="p-8 sm:p-10 flex flex-col justify-center order-2 md:order-1">
              <div className="flex items-center gap-2 mb-4">
                <span
                  className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded"
                  style={{ background: CAT_COLOR[featured.cat], color: "white" }}
                >
                  {featured.cat}
                </span>
                <span className="text-xs text-muted-foreground">{featured.meta}</span>
                <span className="text-xs text-muted-foreground">· {featured.reads}</span>
              </div>
              <h2 className="font-serif-d text-3xl sm:text-4xl leading-tight mb-3">{featured.title}</h2>
              <p className="text-foreground/75 text-base leading-relaxed">{featured.desc}</p>
              <div className="mt-6">
                <Link
                  to="/resources/$slug"
                  params={{ slug: featured.slug }}
                  className="btn-doodle btn-primary font-sans font-bold"
                >
                  {featured.cta} →
                </Link>
              </div>
            </div>
            {/* visual preview block */}
            <div
              className="order-1 md:order-2 relative min-h-[260px] p-8 flex items-center justify-center border-l-2 border-dashed border-foreground/30"
              style={{ background: "color-mix(in oklab, var(--primary) 6%, white)" }}
            >
              <div className="space-y-2 w-full max-w-xs font-mono text-xs">
                <div className="bg-white border border-foreground/20 rounded px-3 py-2 shadow-sm">
                  <div className="text-muted-foreground text-[10px]">Subject</div>
                  <div className="font-semibold">quick idea for Domino's UAE growth</div>
                </div>
                <div className="bg-white border border-foreground/20 rounded px-3 py-2 shadow-sm">
                  <div className="text-foreground/80">Hi {"{firstName}"} —</div>
                  <div className="text-foreground/80 mt-1">Saw your Q3 expansion into KSA…</div>
                  <div className="text-primary mt-1">[ + 2 more lines ]</div>
                </div>
                <div className="bg-emerald-50 border border-emerald-300 rounded px-3 py-2 shadow-sm">
                  <div className="text-emerald-700 font-semibold">↩ Reply · 14 min later</div>
                  <div className="text-foreground/80 mt-1">"Let me loop in our director…"</div>
                </div>
              </div>
            </div>
          </article>
        </section>
      )}

      {/* GRID */}
      <section className="max-w-6xl mx-auto px-5 sm:px-8 pt-6 pb-12">
        <div className="flex items-center justify-between mb-5">
          <h2 className="font-display text-3xl">
            {cat === "All" ? "Everything" : cat}
            <span className="text-muted-foreground text-base font-sans ml-2">({grid.length})</span>
          </h2>
          {(cat !== "All" || q) && (
            <button
              onClick={() => {
                setCat("All");
                setQ("");
              }}
              className="text-sm font-semibold underline underline-offset-4 decoration-2 decoration-secondary"
            >
              Clear filters
            </button>
          )}
        </div>

        {grid.length === 0 ? (
          <div className="doodle-card-soft p-10 text-center bg-card">
            <p className="font-display text-2xl mb-2">Nothing matches that yet.</p>
            <p className="text-muted-foreground">Try a different keyword or category.</p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {grid.map((r) => (
              <Link
                key={r.title}
                to="/resources/$slug"
                params={{ slug: r.slug }}
                className="doodle-card p-5 flex flex-col bg-card group"
              >
                <div className="flex items-center justify-between mb-3">
                  <span
                    className="text-[0.65rem] font-bold uppercase tracking-wider px-2 py-0.5 rounded"
                    style={{
                      background: CAT_COLOR[r.cat],
                      color: r.cat === "Tools" ? "var(--ink)" : "white",
                    }}
                  >
                    {r.cat}
                  </span>
                  {r.tag && (
                    <span
                      className="text-[0.65rem] font-bold uppercase tracking-wider px-2 py-0.5 rounded border-2"
                      style={{ borderColor: TAG_COLOR[r.tag], color: TAG_COLOR[r.tag] }}
                    >
                      {r.tag}
                    </span>
                  )}
                </div>
                <h3 className="font-serif-d text-xl leading-tight mb-2">{r.title}</h3>
                <p className="text-foreground/70 text-sm leading-relaxed flex-1">{r.desc}</p>
                <div className="mt-4 pt-3 border-t border-dashed border-foreground/20 flex items-center justify-between">
                  <span className="font-semibold text-sm text-primary group-hover:underline underline-offset-4">
                    {r.cta} →
                  </span>
                  <span className="text-[0.7rem] text-muted-foreground font-mono">
                    {r.reads || r.meta}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>

      {/* POPULAR TOPICS */}
      <section className="max-w-6xl mx-auto px-5 sm:px-8 pb-14">
        <h2 className="font-display text-3xl mb-4">Popular searches</h2>
        <div className="flex flex-wrap gap-2">
          {POPULAR_TOPICS.map((t) => (
            <button
              key={t}
              onClick={() => setQ(t)}
              className="pill bg-card hover:-translate-y-0.5 transition-transform"
            >
              {t}
            </button>
          ))}
        </div>
      </section>

      {/* NEWSLETTER */}
      <section id="newsletter" className="max-w-6xl mx-auto px-5 sm:px-8 pb-16">
        <div
          className="doodle-card p-8 sm:p-12"
          style={{ background: "color-mix(in oklab, var(--primary) 6%, white)" }}
        >
          <div className="grid md:grid-cols-[1.4fr_1fr] gap-8 items-center">
            <div>
              <img src={brewLogo} alt="The Banaawati Brew" className="h-16 sm:h-20 w-auto mb-4" />
              <h3 className="font-serif-d text-3xl sm:text-4xl leading-tight mb-3">
                One email a week. Real campaigns. Real numbers.
              </h3>
              <p className="text-foreground/75">
                New templates, teardowns of cold emails I sent that month, and what's working in outbound right now. No fluff, no pitch, no "growth hacks."
              </p>
              <ul className="mt-4 space-y-1.5 text-sm text-foreground/80">
                <li>✓ Subject lines that actually get opened</li>
                <li>✓ Real reply screenshots (anonymized)</li>
                <li>✓ One new template or teardown each week</li>
              </ul>
            </div>
            <NewsletterForm />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-3xl mx-auto px-5 sm:px-8 pb-24 text-center">
        <p className="font-display text-3xl mb-4">
          Want me to do this <span className="highlight">for you</span> instead?
        </p>
        <Link to="/contact" className="btn-doodle btn-orange font-sans font-bold text-lg">
          Book a free 20-min call →
        </Link>
      </section>
    </PageShell>
  );
}

function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("https://api.brevo.com/v3/contacts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "api-key": "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",
        },
        body: JSON.stringify({ email, listIds: [1] }),
      });
      if (res.status === 201 || res.status === 204) {
        setStatus("success");
      } else {
        const body = await res.json().catch(() => ({}));
        if (body?.code === "duplicate_parameter") {
          setStatus("success");
        } else {
          setStatus("error");
        }
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col gap-3 items-start">
        <p className="font-display text-2xl">You're in! 🎉</p>
        <p className="text-sm text-foreground/70">First issue hits your inbox next week.</p>
      </div>
    );
  }

  return (
    <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@company.com"
        className="px-4 py-3.5 rounded-md border-2 border-dashed border-foreground/70 bg-white font-sans focus:outline-none focus:border-primary"
        required
      />
      {status === "error" && (
        <p className="text-sm text-red-600">Something went wrong — try again.</p>
      )}
      <button
        type="submit"
        disabled={status === "sending"}
        className="btn-doodle btn-primary font-sans font-bold text-base disabled:opacity-60"
      >
        {status === "sending" ? "Subscribing…" : "Subscribe — it's free →"}
      </button>
      <p className="text-xs text-muted-foreground">No spam. Unsubscribe in one click.</p>
    </form>
  );
}
