import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { Logos } from "@/components/Logos";
import emailReply from "@/assets/email-reply.png";

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
        <div className="doodle-card p-4 sm:p-5 relative" style={{ transform: "rotate(-0.6deg)" }}>
          <span className="sticker sticker-orange absolute -top-4 right-6 z-10" style={{ transform: "rotate(4deg)" }}>
            Day 3 of sequence 🎯
          </span>
          <span className="sticker sticker-white absolute -top-4 -left-3 z-10" style={{ transform: "rotate(-5deg)" }}>
            📧 real reply
          </span>
          <div className="bg-muted/60 px-5 py-3 border-2 border-dashed border-foreground/70 border-b-0 flex items-center gap-2 text-sm rounded-t-md">
            <span className="w-3 h-3 rounded-full bg-secondary inline-block" />
            <span className="w-3 h-3 rounded-full bg-accent inline-block" />
            <span className="w-3 h-3 rounded-full bg-primary inline-block" />
            <span className="ml-3 font-medium">Re: Your last email</span>
          </div>
          <div className="overflow-hidden border-2 border-dashed border-foreground/70 bg-white rounded-b-md">
            <img
              src={emailReply}
              alt="Cold email reply: appreciate your constant follow-up with relevant insights, not sure to address you as a real person or an AI bot. Let me know when we can e-meet next week."
              className="w-full block"
              style={{ objectFit: "cover", objectPosition: "center bottom", aspectRatio: "1500 / 240" }}
            />
          </div>
          <p className="mt-4 text-base font-medium">— Domino's UAE</p>
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

      {/* CASE STUDIES */}
      <section className="max-w-5xl mx-auto px-5 sm:px-8 pb-20">
        <h2 className="font-display text-5xl sm:text-6xl mb-2">
          A few <span className="squiggle">case studies</span>.
        </h2>
        <p className="text-muted-foreground mb-10">Names changed where I'm under NDA. Numbers are real.</p>

        <div className="space-y-8">
          {[
            {
              tag: "F&B · Middle East",
              tagBg: "var(--secondary)",
              title: "Got Domino's UAE on a call from a 3-email sequence",
              problem: "Founder of an F&B SaaS wanted to break into Middle East QSR chains. Zero pipeline, zero brand recognition.",
              what: "Mapped 80 QSR accounts across UAE/KSA. Wrote a 3-step sequence built around a region-specific insight, not a feature pitch.",
              result: "5 replies in week 1. Domino's UAE looped in their leadership team and asked for a deck. Pipeline value: ~$45K.",
              metric: "5 replies",
              metricLabel: "in week 1",
            },
            {
              tag: "B2B SaaS · India",
              tagBg: "var(--primary)",
              title: "Pushed reply rate from 2% to 7% for an Indian SaaS",
              problem: "Mid-stage SaaS was getting under 2% reply rate on cold campaigns. Sequences were generic, list was bloated.",
              what: "Cut the prospect list by 60%. Rewrote sequences with persona-specific icebreakers. Switched to multichannel (email + LinkedIn).",
              result: "Reply rate jumped to 7% in 6 weeks. SQLs/month tripled. Founder fired the SDR agency they were paying.",
              metric: "7%",
              metricLabel: "reply rate (was 2%)",
            },
            {
              tag: "Fintech · India",
              tagBg: "var(--accent)",
              title: "Booked 12 meetings with banks in 60 days",
              problem: "Fintech wanted to sell a compliance tool to private banks. Long sales cycles, hard to reach the right person.",
              what: "Built a tiered TAM of 40 banks. Researched each compliance head individually. Wrote 1:1 personalised first emails — no templates.",
              result: "12 booked meetings in 60 days. 3 moved to procurement. Founder said it was 'the best outbound quarter we've ever had'.",
              metric: "12",
              metricLabel: "meetings in 60 days",
            },
          ].map((c, i) => (
            <article
              key={c.title}
              className="doodle-card p-7 sm:p-9 grid md:grid-cols-[1fr_220px] gap-6"
              style={{ transform: i % 2 === 0 ? "rotate(-0.3deg)" : "rotate(0.3deg)" }}
            >
              <div>
                <span
                  className="sticker"
                  style={{ background: c.tagBg, color: c.tagBg === "var(--accent)" ? "var(--ink)" : "white", transform: "rotate(-2deg)" }}
                >
                  {c.tag}
                </span>
                <h3 className="font-serif-d text-2xl sm:text-3xl mt-4 mb-3">{c.title}</h3>
                <div className="space-y-3 text-foreground/80">
                  <p><span className="font-display text-xl text-secondary">Problem: </span>{c.problem}</p>
                  <p><span className="font-display text-xl text-secondary">What I did: </span>{c.what}</p>
                  <p><span className="font-display text-xl text-secondary">Result: </span>{c.result}</p>
                </div>
              </div>
              <div
                className="rounded-xl border-2 border-dashed border-foreground p-5 flex flex-col items-center justify-center text-center"
                style={{ background: "color-mix(in oklab, var(--accent) 30%, white)" }}
              >
                <div className="font-display text-6xl text-primary leading-none">{c.metric}</div>
                <div className="text-sm text-muted-foreground mt-2">{c.metricLabel}</div>
              </div>
            </article>
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
