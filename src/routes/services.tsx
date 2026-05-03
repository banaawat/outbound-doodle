import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Cold Email, Meeting Setting, TAM Mapping | Vansh" },
      { name: "description", content: "End-to-end outbound: cold email, meeting setting, TAM mapping, lead generation, and email copywriting for B2B SaaS." },
      { property: "og:title", content: "Services — Vansh" },
      { property: "og:description", content: "No vague growth consulting. Here's exactly what you're getting." },
    ],
  }),
  component: Services,
});

const SERVICES = [
  {
    icon: "✉️",
    title: "Cold Email & Outbound Campaigns",
    desc: "End-to-end cold email campaigns — from ICP definition and list building to copywriting, sequencing, and campaign management. I write emails that sound like a human wrote them in 2 minutes, because that's exactly what gets replies.",
    includes: ["ICP Definition", "Prospect List (100–500 contacts)", "3-Step Email Sequence", "A/B Testing", "Weekly Reporting"],
    best: "Early-stage B2B SaaS founders who haven't cracked outbound yet",
  },
  {
    icon: "📅",
    title: "Meeting Setting & Pipeline Generation",
    desc: "I run the full outbound motion and hand you booked meetings with qualified prospects. You show up, I make sure the calendar is full. Targeted at Indian B2B SaaS selling to enterprise or mid-market.",
    includes: ["Prospect Research", "Personalised Outreach", "Follow-up Sequences", "Meeting Coordination", "CRM Logging"],
    best: "Founders or AEs who need pipeline but don't have an SDR yet",
  },
  {
    icon: "🗺️",
    title: "TAM Mapping & ICP Research",
    desc: "Before you send a single email, you need to know exactly who you're going after and why. I build your Total Addressable Market from scratch — segmented, prioritised, and ready to work.",
    includes: ["Industry & Company Segmentation", "Buyer Persona Definition", "Account Tiering (T1/T2/T3)", "Competitor Landscape", "Exported Prospect List"],
    best: "Companies entering a new market or vertical",
  },
  {
    icon: "🔍",
    title: "Lead Generation & List Building",
    desc: "Targeted, verified prospect lists built using Apollo, LinkedIn Sales Navigator, and manual research. No scraped garbage lists — every lead is filtered, enriched, and relevant to your ICP.",
    includes: ["Company + Contact Filtering", "Email Verification", "LinkedIn + Apollo Enrichment", "Custom Fields (funding, headcount, tech stack)", "CSV Delivery"],
    best: "Sales teams who need fresh pipeline fuel fast",
  },
  {
    icon: "✍️",
    title: "Email Copywriting & Sequence Strategy",
    desc: "High-converting cold email copy written from scratch — icebreakers that reference something real, CTAs that don't sound desperate, and PS lines people actually read. Also includes full sequence strategy: timing, touchpoints, channel mix.",
    includes: ["3–5 Email Sequence", "Subject Line Variants", "Icebreaker Research (per persona)", "PS Line Strategy", "Deliverability Checklist"],
    best: "Teams who have the tools but can't get replies",
  },
];

function Services() {
  return (
    <PageShell>
      <section className="max-w-5xl mx-auto px-5 sm:px-8 pt-16 pb-10">
        <h1 className="font-display text-5xl sm:text-7xl">
          What I <span className="squiggle">actually</span> do.
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          No vague "growth consulting". Here's exactly what you're getting.
        </p>
      </section>

      <section className="max-w-5xl mx-auto px-5 sm:px-8 space-y-8 pb-16">
        {SERVICES.map((s, i) => (
          <article
            key={s.title}
            className="doodle-card p-8 sm:p-10"
            style={{ transform: i % 2 === 0 ? "rotate(-0.3deg)" : "rotate(0.3deg)" }}
          >
            <div className="flex items-start gap-5 flex-col sm:flex-row">
              <div className="text-6xl">{s.icon}</div>
              <div className="flex-1">
                <h2 className="font-serif-d text-3xl sm:text-4xl mb-3">{s.title}</h2>
                <p className="text-foreground/80 text-lg leading-relaxed">{s.desc}</p>
                <div className="mt-5">
                  <div className="text-sm font-semibold uppercase tracking-wide text-muted-foreground mb-2">Includes</div>
                  <div className="flex flex-wrap gap-2">
                    {s.includes.map((it) => (
                      <span key={it} className="pill">{it}</span>
                    ))}
                  </div>
                </div>
                <p className="mt-5 text-sm">
                  <span className="font-display text-xl text-secondary">Best for: </span>
                  <span className="text-foreground/80">{s.best}</span>
                </p>
              </div>
            </div>
          </article>
        ))}
      </section>

      {/* PACKAGES */}
      <section className="max-w-5xl mx-auto px-5 sm:px-8 pb-20">
        <h2 className="font-display text-5xl sm:text-6xl mb-2">
          Pick a <span className="squiggle">package</span>.
        </h2>
        <p className="text-muted-foreground mb-8">Or build a custom one — most clients do.</p>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              name: "Starter",
              price: "$1.5K",
              per: "/ month",
              tag: "For founders testing outbound",
              features: ["1 ICP segment", "200 prospects/mo", "3-step sequence", "Weekly report"],
              accent: "var(--accent)",
              tagBg: "var(--ink)",
            },
            {
              name: "Growth",
              price: "$3K",
              per: "/ month",
              tag: "Most popular",
              features: ["2–3 ICP segments", "500 prospects/mo", "5-step multichannel sequence", "A/B testing", "Weekly call + report"],
              accent: "var(--primary)",
              tagBg: "var(--secondary)",
              featured: true,
            },
            {
              name: "Done-for-you",
              price: "Custom",
              per: "",
              tag: "Full outbound team replacement",
              features: ["Unlimited segments", "1,000+ prospects/mo", "Multichannel + LinkedIn", "Inbox + CRM management", "Booked-meeting guarantee"],
              accent: "var(--secondary)",
              tagBg: "var(--ink)",
            },
          ].map((p) => (
            <div
              key={p.name}
              className="doodle-card p-7 flex flex-col relative"
              style={p.featured ? { background: "color-mix(in oklab, var(--accent) 25%, white)", transform: "rotate(-0.5deg) translateY(-6px)" } : {}}
            >
              {p.featured && (
                <span className="sticker sticker-orange absolute -top-4 -right-3" style={{ transform: "rotate(8deg)" }}>
                  ★ pick this
                </span>
              )}
              <div className="font-display text-4xl">{p.name}</div>
              <div className="mt-2 mb-1 flex items-baseline gap-1">
                <span className="font-serif-d text-5xl" style={{ color: p.accent }}>{p.price}</span>
                <span className="text-muted-foreground">{p.per}</span>
              </div>
              <p className="text-sm text-muted-foreground mb-5">{p.tag}</p>
              <ul className="space-y-2 mb-6 flex-1">
                {p.features.map((f) => (
                  <li key={f} className="flex gap-2 text-foreground/85">
                    <span style={{ color: p.accent }}>✦</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="btn-doodle text-center justify-center">
                Get started →
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-5 sm:px-8 pb-24 text-center">
        <p className="font-display text-3xl sm:text-4xl mb-6">
          Not sure which one you need? Let's <span className="highlight">figure it out</span> together.
        </p>
        <Link to="/contact" className="btn-doodle btn-orange font-display text-xl">Book a Free Call →</Link>
      </section>
    </PageShell>
  );
}
