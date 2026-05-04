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
        {/* drifting color blobs */}
        <span className="hero-blob" style={{ background: "var(--accent)", width: 460, height: 460, top: -120, left: -100, animationDelay: "0s" }} />
        <span className="hero-blob" style={{ background: "color-mix(in oklab, var(--secondary) 70%, white)", width: 380, height: 380, top: 80, right: -80, animationDelay: "3s" }} />
        <span className="hero-blob" style={{ background: "color-mix(in oklab, var(--primary) 40%, white)", width: 320, height: 320, bottom: -80, left: "35%", animationDelay: "6s" }} />

        <div className="max-w-6xl mx-auto px-5 sm:px-8 pt-14 pb-20 relative">
          {/* floating doodles */}
          <Star className="absolute top-20 left-[46%] w-7 h-7 hidden md:block drift-star" color="var(--secondary)" />
          <Star className="absolute bottom-32 left-[2%] w-6 h-6 hidden md:block drift-star" color="var(--primary)" />

          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* LEFT — copy */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 mb-5 pill" style={{ background: "color-mix(in oklab, var(--accent) 50%, white)" }}>
                <span className="w-2 h-2 rounded-full bg-secondary inline-block animate-pulse" />
                <span className="font-semibold tracking-wide uppercase text-xs">Outbound specialist · Gurgaon → Worldwide</span>
              </div>

              <h1 className="font-serif-d text-[clamp(2rem,5.2vw,4.25rem)] leading-[1.02] tracking-tight">
                I book{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 italic font-display text-primary">meetings</span>
                  <svg viewBox="0 0 300 30" className="absolute left-0 right-0 -bottom-1 w-full h-3" preserveAspectRatio="none" aria-hidden>
                    <path d="M2 15 Q 75 2 150 15 T 298 15" fill="none" stroke="var(--secondary)" strokeWidth="5" strokeLinecap="round" />
                  </svg>
                </span>{" "}
                with brands you've{" "}
                <span className="highlight">actually heard of</span>.
              </h1>

              <p className="mt-5 max-w-xl text-base sm:text-lg text-foreground/80 font-sans leading-snug">
                Outbound, cold email, and meeting generation — built for B2B SaaS teams who want pipeline, <em className="font-serif-d not-italic">fast</em>.
              </p>

              <div className="mt-7 flex flex-wrap gap-4 items-center">
                <Link to="/contact" className="btn-doodle btn-orange font-display text-xl sm:text-2xl px-6 py-3 inline-flex items-center gap-2">
                  Book a free 20-min call
                  <span aria-hidden>→</span>
                </Link>
                <Link to="/proof" className="font-display text-xl text-foreground squiggle-blue">
                  or see the replies
                </Link>
              </div>
              <div className="mt-3 flex items-center gap-2 text-sm text-muted-foreground">
                <span className="flex -space-x-1">
                  <span className="w-2.5 h-2.5 rounded-full bg-secondary inline-block border border-foreground" />
                  <span className="w-2.5 h-2.5 rounded-full bg-primary inline-block border border-foreground" />
                  <span className="w-2.5 h-2.5 rounded-full bg-accent inline-block border border-foreground" />
                </span>
                <span className="font-medium">Only 2 spots open this month</span>
              </div>

              {/* quick stat strip */}
              <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { v: "$150K+", l: "pipeline", bg: "var(--accent)", rot: "-1.5deg", color: "var(--ink)" },
                  { v: "80+", l: "SQLs booked", bg: "var(--secondary)", rot: "1deg", color: "var(--secondary-foreground)" },
                  { v: "7%", l: "reply rate", bg: "var(--primary)", rot: "-0.8deg", color: "var(--primary-foreground)" },
                  { v: "3+ yrs", l: "outbound", bg: "var(--card)", rot: "1.4deg", color: "var(--ink)" },
                ].map((s, i) => (
                  <div
                    key={s.l}
                    className="doodle-card px-3 py-2.5 flex flex-col items-start gap-0.5 stat-float"
                    style={{ background: s.bg, color: s.color, transform: `rotate(${s.rot})`, animationDelay: `${i * 0.5}s` }}
                  >
                    <span className="font-serif-d text-2xl sm:text-3xl leading-none" style={{ color: s.color }}>{s.v}</span>
                    <span className="text-[0.65rem] sm:text-xs font-semibold uppercase tracking-wide opacity-80">{s.l}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT — animated pipeline */}
            <div className="lg:col-span-5 relative">
              <span className="sticker sticker-orange absolute -top-6 right-0 z-20 hidden md:inline-flex" style={{ transform: "rotate(-4deg)" }}>
                Open to new clients ✦
              </span>
              <SalesPipeline />
            </div>
          </div>

          <div className="mt-14 flex items-center gap-3 text-foreground">
            <DoodleArrow className="w-10 h-12 text-secondary" />
            <span className="font-display text-2xl sm:text-3xl">meetings booked with</span>
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
