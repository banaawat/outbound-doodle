import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { Star } from "@/components/Squiggle";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Vansh | Outbound Sales Specialist" },
      { name: "description", content: "3+ years running cold email and LinkedIn outbound across India and the Middle East. $150K+ in pipeline generated." },
      { property: "og:title", content: "About Vansh" },
      { property: "og:description", content: "The person on the other end of that reply." },
    ],
  }),
  component: About,
});

const STATS = [
  { v: "$150K+", l: "Pipeline Generated" },
  { v: "80+", l: "SQLs Delivered" },
  { v: "500+", l: "Accounts Targeted" },
  { v: "7%", l: "Reply Rate Achieved" },
];

const TOOLS = ["Apollo.io", "Clay", "HubSpot", "LinkedIn Sales Nav", "Instantly", "Lemlist", "Google Workspace"];

function About() {
  return (
    <PageShell>
      <section className="max-w-5xl mx-auto px-5 sm:px-8 pt-16 pb-12">
        <h1 className="font-display text-5xl sm:text-7xl leading-[1.05]">
          The person on the other end of that <span className="squiggle">reply</span>.
        </h1>
      </section>

      <section className="max-w-5xl mx-auto px-5 sm:px-8 pb-16 grid md:grid-cols-[280px_1fr] gap-12 items-start">
        <div className="flex flex-col items-center">
          <div className="relative">
            <div
              className="w-56 h-56 rounded-full bg-accent flex items-center justify-center font-display text-7xl text-foreground"
              style={{ border: "3px dashed var(--ink)", boxShadow: "5px 5px 0 var(--ink)" }}
            >
              V
            </div>
            <Star className="absolute -top-2 -right-2 w-8 h-8" color="var(--secondary)" />
            <Star className="absolute -bottom-2 -left-3 w-6 h-6" color="var(--primary)" />
          </div>
          <span className="sticker mt-6">Based in Gurgaon, India 📍</span>
        </div>

        <div className="space-y-5 text-lg leading-relaxed text-foreground/85">
          <p>
            I'm Vansh — an outbound specialist with 3+ years running cold email and LinkedIn campaigns across India and the Middle East.
          </p>
          <p>
            I've generated <span className="highlight">$150K+ in pipeline</span>, booked meetings with Flipkart, ADNOC, KFC, McDonald's, and Emirates NBD, and taken reply rates from 4% to 7% across 500+ targeted accounts.
          </p>
          <p>
            I've been the person building the sequences, writing the copy, mapping the TAM, and managing the entire outbound motion — not just advising on it.
          </p>
          <p>
            Now I do that for B2B SaaS founders who'd rather close deals than figure out Apollo.
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-5 sm:px-8 pb-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {STATS.map((s) => (
            <div key={s.l} className="doodle-card p-5 text-center">
              <div className="font-display text-5xl text-primary">{s.v}</div>
              <div className="text-sm text-muted-foreground mt-1">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-5 sm:px-8 pb-20">
        <div className="doodle-card p-10 text-center" style={{ background: "color-mix(in oklab, var(--secondary) 12%, white)" }}>
          <p className="font-display text-4xl sm:text-5xl">
            "Cold email isn't dead. <span className="squiggle-blue">Bad cold email</span> is dead."
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-5 sm:px-8 pb-24">
        <h2 className="font-display text-4xl mb-5">My stack</h2>
        <div className="flex flex-wrap gap-3">
          {TOOLS.map((t) => (
            <span key={t} className="pill">{t}</span>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
