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

      <section className="max-w-3xl mx-auto px-5 sm:px-8 pb-24 text-center">
        <p className="font-display text-3xl sm:text-4xl mb-6">
          Not sure which one you need? Let's <span className="highlight">figure it out</span> together.
        </p>
        <Link to="/contact" className="btn-doodle btn-orange font-display text-xl">Book a Free Call →</Link>
      </section>
    </PageShell>
  );
}
