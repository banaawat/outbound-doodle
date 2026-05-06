import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { Star } from "@/components/Squiggle";

const ABOUT_TITLE = "About Vansh Mehrotra — B2B Outbound Sales Specialist | Banaawat";
const ABOUT_DESC = "Vansh Mehrotra is a Gurgaon-based outbound sales specialist with 3+ years running cold email and LinkedIn campaigns for B2B SaaS across India and the Middle East. $1M+ pipeline generated.";
const OG_IMAGE = "https://banaawat.com/og-image.png";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: ABOUT_TITLE },
      { name: "description", content: ABOUT_DESC },
      { property: "og:title", content: ABOUT_TITLE },
      { property: "og:description", content: ABOUT_DESC },
      { property: "og:url", content: "https://banaawat.com/about" },
      { property: "og:image", content: OG_IMAGE },
      { name: "twitter:title", content: ABOUT_TITLE },
      { name: "twitter:description", content: ABOUT_DESC },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [
      { rel: "canonical", href: "https://banaawat.com/about" },
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


const PRINCIPLES = [
  { t: "Specific beats clever", d: "A boring email referencing something real beats a witty one referencing nothing." },
  { t: "Volume is a tax", d: "If your copy is good, you don't need 10,000 emails. You need 500 to the right people." },
  { t: "Follow-ups close", d: "First email gets the open. Touches 3–5 get the reply. Most people quit at touch 2." },
  { t: "Honesty travels", d: "Tell them why you're emailing. Tell them what you want. Skip the manipulation tactics." },
];

const TOOLS = ["Apollo.io", "Clay", "HubSpot", "LinkedIn Sales Nav", "Instantly", "Lemlist", "Smartlead", "Google Workspace"];

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

      {/* PRINCIPLES */}
      <section className="max-w-5xl mx-auto px-5 sm:px-8 pb-20">
        <h2 className="font-display text-5xl sm:text-6xl mb-2">
          What I <span className="highlight">believe</span> about outbound.
        </h2>
        <p className="text-muted-foreground mb-8">Four rules I don't break.</p>
        <div className="grid sm:grid-cols-2 gap-5">
          {PRINCIPLES.map((p, i) => (
            <div
              key={p.t}
              className="doodle-card p-6"
              style={{ transform: i % 2 ? "rotate(0.4deg)" : "rotate(-0.4deg)" }}
            >
              <h3 className="font-serif-d text-2xl mb-2">{p.t}</h3>
              <p className="text-foreground/75">{p.d}</p>
            </div>
          ))}
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
