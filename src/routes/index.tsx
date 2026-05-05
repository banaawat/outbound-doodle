import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { Logos } from "@/components/Logos";
import { DoodleArrow, Star } from "@/components/Squiggle";
import { SalesPipeline } from "@/components/SalesPipeline";
import { Process } from "@/components/Process";
import { FAQ } from "@/components/FAQ";
import emailReply from "@/assets/email-reply.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vansh — Outbound sales & cold email for B2B SaaS" },
      { name: "description", content: "I book meetings with brands you've actually heard of. Outbound, cold email, and pipeline generation for Indian B2B SaaS." },
      { property: "og:title", content: "Vansh — Outbound for B2B SaaS" },
      { property: "og:description", content: "Cold email, meeting setting, and pipeline generation that actually replies." },
    ],
  }),
  component: Home,
});

const SERVICES_TEASER = [
  { icon: "✉️", title: "Cold Email Campaigns", desc: "End-to-end sequences that sound human and book meetings." },
  { icon: "📅", title: "Meeting Setting", desc: "I run outbound, you take the calls. Calendar full." },
  { icon: "🗺️", title: "TAM & ICP Mapping", desc: "Know exactly who you're going after, before you send." },
];

function Home() {
  return (
    <PageShell>
      {/* HERO */}
      <section className="relative dot-grid overflow-hidden border-b-2 border-dashed border-foreground/80">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 pt-14 pb-16 relative">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* LEFT — copy */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 mb-6 pill" style={{ background: "var(--card)" }}>
                <span className="w-2 h-2 rounded-full bg-secondary inline-block animate-pulse" />
                <span className="font-semibold tracking-wide uppercase text-xs">Outbound for B2B SaaS · 80+ meetings booked</span>
              </div>

              <h1 className="font-serif-d text-[clamp(2.5rem,6vw,5rem)] leading-[0.98] tracking-tight">
                Cold email that books{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 text-primary">qualified meetings</span>
                  <svg viewBox="0 0 300 30" className="absolute left-0 right-0 -bottom-1 w-full h-3" preserveAspectRatio="none" aria-hidden>
                    <path d="M2 15 Q 75 2 150 15 T 298 15" fill="none" stroke="var(--secondary)" strokeWidth="5" strokeLinecap="round" />
                  </svg>
                </span>
                {" "}— not unsubscribes.
              </h1>

              <p className="mt-6 max-w-xl text-lg sm:text-xl text-foreground/80 font-sans leading-snug">
                I run done-for-you outbound that puts <strong>5–15 sales-qualified meetings</strong> on your calendar every month. No retainers locked behind 6-month contracts. No spray-and-pray.
              </p>

              {/* Value bullets */}
              <ul className="mt-6 space-y-2.5 max-w-xl">
                {[
                  "Built and shipped in 14 days — not 6 weeks",
                  "Replies from CXOs at brands you've heard of",
                  "Pay for meetings booked, not emails sent",
                ].map((b) => (
                  <li key={b} className="flex items-start gap-3 text-base sm:text-lg">
                    <span className="mt-1 inline-flex w-5 h-5 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-bold flex-shrink-0">✓</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap gap-4 items-center">
                <Link to="/contact" className="btn-doodle btn-primary font-sans font-bold text-base sm:text-lg px-7 py-4 inline-flex items-center gap-2">
                  Book your free strategy call
                  <span aria-hidden>→</span>
                </Link>
                <Link to="/proof" className="font-sans font-semibold text-base text-foreground underline underline-offset-4 decoration-2 decoration-secondary">
                  See real replies →
                </Link>
              </div>
              <div className="mt-3 flex items-center gap-3 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-secondary inline-block" />
                  <span className="font-medium">2 spots left for May</span>
                </span>
                <span className="opacity-60">·</span>
                <span>20 min · No pitch</span>
              </div>

              {/* quick stat strip */}
              <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { v: "$150K+", l: "pipeline generated" },
                  { v: "80+", l: "SQLs booked" },
                  { v: "7%", l: "avg reply rate" },
                  { v: "14 days", l: "to first meeting" },
                ].map((s) => (
                  <div key={s.l} className="doodle-card-soft px-3 py-2.5 flex flex-col items-start gap-0.5 bg-card">
                    <span className="font-serif-d text-2xl sm:text-3xl leading-none text-primary">{s.v}</span>
                    <span className="text-[0.65rem] sm:text-xs font-semibold uppercase tracking-wide text-muted-foreground">{s.l}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT — animated pipeline */}
            <div className="lg:col-span-5 relative">
              <SalesPipeline />
            </div>
          </div>

          <div className="mt-14 flex items-center gap-3 text-foreground">
            <DoodleArrow className="w-10 h-12 text-secondary" />
            <span className="font-display text-2xl sm:text-3xl">trusted by teams at</span>
          </div>
        </div>
      </section>

      {/* LOGOS */}
      <section className="max-w-6xl mx-auto px-5 sm:px-8 pb-16">
        <Logos />
        <p className="text-center font-display text-2xl text-muted-foreground mt-6">…and counting</p>
      </section>

      {/* PULL QUOTE */}
      <section className="max-w-4xl mx-auto px-5 sm:px-8 pb-24">
        <div
          className="doodle-card p-4 sm:p-5 relative"
          style={{ transform: "rotate(-1deg)", background: "color-mix(in oklab, var(--accent) 35%, white)" }}
        >
          <span className="sticker sticker-orange absolute -top-4 -right-3 z-10" style={{ transform: "rotate(6deg)" }}>
            Day 3 of sequence 🎯
          </span>
          <span className="sticker sticker-white absolute -top-4 -left-3 z-10" style={{ transform: "rotate(-6deg)" }}>
            📧 real reply
          </span>
          <div className="overflow-hidden rounded-md border-2 border-dashed border-foreground/70 bg-white">
            <img
              src={emailReply}
              alt="Cold email reply: appreciate your constant follow-up with relevant insights, not sure to address you as a real person or an AI bot. Let me know when we can e-meet next week."
              className="w-full block"
              style={{ objectFit: "cover", objectPosition: "center bottom", aspectRatio: "1500 / 220" }}
            />
          </div>
          <p className="mt-4 text-base font-medium">— Domino's UAE</p>
        </div>
      </section>

      {/* SERVICES TEASER */}
      <section className="max-w-6xl mx-auto px-5 sm:px-8 pb-20">
        <h2 className="font-display text-5xl sm:text-6xl mb-2">
          What I <span className="squiggle-blue">do</span>.
        </h2>
        <p className="text-muted-foreground mb-8">A taste — full menu on the services page.</p>
        <div className="grid md:grid-cols-3 gap-6">
          {SERVICES_TEASER.map((s) => (
            <div key={s.title} className="doodle-card p-6">
              <div className="text-4xl mb-3">{s.icon}</div>
              <h3 className="font-serif-d text-2xl mb-2">{s.title}</h3>
              <p className="text-foreground/70">{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <Link to="/services" className="font-display text-2xl text-primary squiggle">
            See all services →
          </Link>
        </div>
      </section>

      {/* PROCESS */}
      <Process />

      {/* FAQ */}
      <FAQ />

      {/* CTA BANNER */}
      <section className="max-w-6xl mx-auto px-5 sm:px-8 pb-24">
        <div className="doodle-card p-10 sm:p-14 text-center" style={{ background: "color-mix(in oklab, var(--primary) 8%, white)" }}>
          <div className="flex justify-center gap-3 mb-3">
            <Star className="w-6 h-6" color="var(--secondary)" />
            <Star className="w-6 h-6" color="var(--primary)" />
            <Star className="w-6 h-6" color="var(--accent)" />
          </div>
          <h2 className="font-display text-5xl sm:text-6xl">
            Got a <span className="highlight">pipeline problem</span>? Let's fix it.
          </h2>
          <Link to="/contact" className="btn-doodle btn-orange mt-8 inline-flex font-display text-xl">
            Book a Free 20-Min Call →
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
