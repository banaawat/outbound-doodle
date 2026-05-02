import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { Logos } from "@/components/Logos";

export const Route = createFileRoute("/proof")({
  head: () => ({
    meta: [
      { title: "Social Proof — Real replies, real meetings | Vansh" },
      { name: "description", content: "Cold email replies from Flipkart, ADNOC, KFC and more. $150K+ pipeline, 7% reply rate, 80+ SQLs." },
      { property: "og:title", content: "Real replies. Real meetings. Real companies." },
      { property: "og:description", content: "What outbound looks like when it actually works." },
    ],
  }),
  component: Proof,
});

const STATS = [
  { v: "500+", l: "Accounts targeted" },
  { v: "$150K+", l: "Pipeline generated" },
  { v: "7%", l: "Reply rate (avg: 2–3%)" },
  { v: "80+", l: "SQLs delivered" },
];

function Proof() {
  return (
    <PageShell>
      <section className="max-w-5xl mx-auto px-5 sm:px-8 pt-16 pb-10">
        <h1 className="font-display text-5xl sm:text-7xl">
          Real <span className="squiggle">replies</span>. Real meetings. Real companies.
        </h1>
      </section>

      {/* EMAIL CARD */}
      <section className="max-w-3xl mx-auto px-5 sm:px-8 pb-20">
        <div className="doodle-card p-0 overflow-hidden" style={{ transform: "rotate(-0.6deg)" }}>
          <div className="bg-muted/60 px-5 py-3 border-b-2 border-dashed border-foreground/70 flex items-center gap-2 text-sm">
            <span className="w-3 h-3 rounded-full bg-secondary inline-block" />
            <span className="w-3 h-3 rounded-full bg-accent inline-block" />
            <span className="w-3 h-3 rounded-full bg-primary inline-block" />
            <span className="ml-3 font-medium">Re: Your last email</span>
          </div>
          <div className="p-7 sm:p-10 relative">
            <span className="sticker sticker-orange absolute -top-4 right-6" style={{ transform: "rotate(4deg)" }}>
              Day 3 of sequence 🎯
            </span>
            <p className="text-sm text-muted-foreground mb-3">From: Bilal Qureshi · Consumer Insights Director</p>
            <p className="font-display text-3xl sm:text-4xl leading-snug">
              "Appreciate your constant follow-up with relevant insights — hence{" "}
              <span className="highlight">not sure to address you as a real person or an AI bot</span> 😉
              Let me know when we can e-meet next week."
            </p>
          </div>
        </div>
      </section>

      {/* LOGOS */}
      <section className="max-w-6xl mx-auto px-5 sm:px-8 pb-16">
        <p className="font-display text-3xl text-center mb-6">
          Companies where I've booked the <span className="squiggle-blue">first meeting</span>
        </p>
        <Logos />
      </section>

      {/* STATS */}
      <section className="max-w-5xl mx-auto px-5 sm:px-8 pb-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {STATS.map((s) => (
            <div key={s.l} className="doodle-card p-6 text-center">
              <div className="font-display text-5xl text-primary">{s.v}</div>
              <div className="text-sm text-muted-foreground mt-2">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-5 sm:px-8 pb-24">
        <p className="font-display text-3xl sm:text-4xl text-center leading-snug">
          "Cold email isn't magic. It's <span className="highlight">systems</span>, research, and copy that doesn't make people cringe. I've built that."
        </p>
      </section>
    </PageShell>
  );
}
