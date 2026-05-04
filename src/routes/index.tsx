import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { Logos } from "@/components/Logos";
import { DoodleArrow, Star } from "@/components/Squiggle";
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
      <section className="relative dot-grid overflow-hidden">
        {/* drifting color blobs */}
        <span className="hero-blob" style={{ background: "var(--accent)", width: 380, height: 380, top: -80, left: -80, animationDelay: "0s" }} />
        <span className="hero-blob" style={{ background: "color-mix(in oklab, var(--secondary) 60%, white)", width: 320, height: 320, top: 120, right: -60, animationDelay: "3s" }} />
        <span className="hero-blob" style={{ background: "color-mix(in oklab, var(--primary) 35%, white)", width: 260, height: 260, bottom: -60, left: "30%", animationDelay: "6s" }} />

        <div className="max-w-6xl mx-auto px-5 sm:px-8 pt-16 pb-24 relative">
          <div className="absolute right-6 top-10 hidden md:block">
            <span className="sticker sticker-orange" style={{ transform: "rotate(-3deg)" }}>
              Open to new clients ✦
            </span>
          </div>

          {/* floating doodles */}
          <Star className="absolute top-24 right-[18%] w-7 h-7 hidden md:block drift-star" color="var(--secondary)" />
          <Star className="absolute bottom-32 left-[6%] w-5 h-5 hidden md:block drift-star" color="var(--primary)" />

          <div className="inline-flex items-center gap-2 mb-5 pill" style={{ background: "color-mix(in oklab, var(--accent) 40%, white)" }}>
            <span className="w-2 h-2 rounded-full bg-secondary inline-block animate-pulse" />
            <span className="font-medium">Outbound specialist · Gurgaon → Worldwide</span>
          </div>

          <h1 className="font-display text-5xl sm:text-7xl lg:text-[5.5rem] leading-[1] max-w-5xl">
            I book <span className="squiggle">meetings</span> with brands you've{" "}
            <span className="highlight">actually heard of</span>.
          </h1>

          <p className="mt-6 max-w-2xl text-lg sm:text-xl text-foreground/80 font-sans">
            Outbound sales, cold email, and meeting generation — for Indian B2B SaaS companies ready to move fast.
          </p>

          <div className="mt-10 flex flex-wrap gap-5 items-center">
            <Link to="/contact" className="btn-doodle btn-orange font-display text-xl px-7 py-4 inline-flex items-center gap-2">
              Book a free 20-min call
              <span aria-hidden>→</span>
            </Link>
            <Link to="/proof" className="font-display text-xl text-foreground squiggle-blue">
              or see the replies
            </Link>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span className="flex -space-x-1">
                <span className="w-2 h-2 rounded-full bg-secondary inline-block" />
                <span className="w-2 h-2 rounded-full bg-primary inline-block" />
                <span className="w-2 h-2 rounded-full bg-accent inline-block" />
              </span>
              <span>2 spots open this month</span>
            </div>
          </div>

          {/* quick stat strip */}
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { v: "$150K+", l: "pipeline", bg: "var(--accent)", rot: "-1deg" },
              { v: "80+", l: "SQLs booked", bg: "color-mix(in oklab, var(--secondary) 25%, white)", rot: "0.8deg" },
              { v: "7%", l: "reply rate", bg: "color-mix(in oklab, var(--primary) 12%, white)", rot: "-0.6deg" },
              { v: "3+ yrs", l: "outbound", bg: "var(--card)", rot: "1.2deg" },
            ].map((s, i) => (
              <div
                key={s.l}
                className="doodle-card px-4 py-3 flex flex-col items-start gap-0.5 stat-float"
                style={{ background: s.bg, transform: `rotate(${s.rot})`, animationDelay: `${i * 0.4}s` }}
              >
                <span className="font-display text-3xl sm:text-4xl text-primary leading-none">{s.v}</span>
                <span className="text-xs sm:text-sm text-foreground/70 font-medium">{s.l}</span>
              </div>
            ))}
          </div>

          <div className="mt-14 flex items-center gap-3 text-muted-foreground">
            <DoodleArrow className="w-10 h-12 text-secondary" />
            <span className="font-display text-2xl">meetings booked with</span>
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
