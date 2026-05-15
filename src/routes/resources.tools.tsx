import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useState } from "react";
import { PageShell } from "@/components/PageShell";
import { generateAi } from "@/lib/ai.functions";

const TITLE = "Free Outbound Tools for Indian B2B SaaS | Banaawat";
const DESC =
  "5 free interactive tools for B2B SaaS founders, sales heads & SDRs: ICP validator, cold email icebreaker, sequence timing, LinkedIn note scorer, and email tone analyzer. No signup.";

export const Route = createFileRoute("/resources/tools")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: "https://banaawat.com/resources/tools" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
    ],
    links: [{ rel: "canonical", href: "https://banaawat.com/resources/tools" }],
  }),
  component: ToolsPage,
});

type ToolKey = "icp" | "icebreaker" | "sequence" | "linkedin" | "tone";

const TOOLS: { key: ToolKey; name: string; desc: string }[] = [
  { key: "icp", name: "ICP Validator (India Edition)", desc: "Pressure-test your ICP against the Indian B2B SaaS reality." },
  { key: "icebreaker", name: "Cold Email Icebreaker Generator", desc: "3 researched opening lines for any prospect, in seconds." },
  { key: "sequence", name: "Outbound Sequence Timing Calculator", desc: "Get a touchpoint cadence calibrated for seniority, ACV, and channel." },
  { key: "linkedin", name: "LinkedIn Connection Note Scorer", desc: "Score and rewrite your connection note before you send it." },
  { key: "tone", name: "Email Tone Analyzer — Founder vs SDR Voice", desc: "Find out whether your cold email reads like a founder or a templated SDR." },
];

function ToolsPage() {
  const [open, setOpen] = useState<ToolKey | null>("icp");

  const toggle = (k: ToolKey) => setOpen((p) => (p === k ? null : k));

  return (
    <PageShell>
      {/* HERO */}
      <section className="border-b-2 border-dashed border-foreground/30 bg-[color-mix(in_oklab,var(--accent)_18%,white)]">
        <div className="max-w-5xl mx-auto px-5 sm:px-8 pt-16 pb-12">
          <span className="pill mb-5 inline-flex" style={{ background: "white" }}>
            🛠️ Free Tools · No signup · No bullshit
          </span>
          <h1 className="font-serif-d text-5xl sm:text-6xl lg:text-7xl leading-[1] tracking-tight">
            Free Tools for Outbound.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-foreground/80">
            Built for Indian B2B founders. No signup. No bullshit. Five tools that do one thing well — and ship the answer in seconds.
          </p>
        </div>
      </section>

      {/* TOOLS */}
      <section className="max-w-4xl mx-auto px-5 sm:px-8 py-12 space-y-5">
        {TOOLS.map((t) => (
          <ToolCard
            key={t.key}
            tool={t}
            isOpen={open === t.key}
            onToggle={() => toggle(t.key)}
          ></ToolCard>
        ))}
      </section>

      {/* FOOTER NOTE */}
      <section className="max-w-4xl mx-auto px-5 sm:px-8 pb-20">
        <div className="doodle-card-soft p-6 text-center">
          <p className="text-sm text-foreground/70">
            All tools on this page are open source. View the code on GitHub →{" "}
            <a
              href="https://github.com/banaawat/free-tools"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 decoration-2 decoration-secondary font-semibold"
            >
              github.com/banaawat/free-tools
            </a>
          </p>
        </div>
      </section>
    </PageShell>
  );
}

function ToolCard({
  tool,
  isOpen,
  onToggle,
}: {
  tool: { key: ToolKey; name: string; desc: string };
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <article className="doodle-card overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full text-left p-6 flex items-start justify-between gap-4"
        aria-expanded={isOpen}
      >
        <div>
          <h2 className="font-display text-2xl sm:text-3xl">{tool.name}</h2>
          <p className="mt-2 text-foreground/70">{tool.desc}</p>
        </div>
        <span className="shrink-0 mt-2 font-semibold text-primary">
          {isOpen ? "Close ✕" : "Try it →"}
        </span>
      </button>

      {isOpen && (
        <div className="border-t-2 border-dashed border-foreground/30 p-6 bg-[color-mix(in_oklab,var(--accent)_7%,white)]">
          <ToolForm toolKey={tool.key} />
          <p className="mt-6 text-xs text-foreground/50">
            Powered by Claude AI · Built by Banaawat
          </p>
        </div>
      )}
    </article>
  );
}

function ToolForm({ toolKey }: { toolKey: ToolKey }) {
  const ai = useServerFn(generateAi);
  const [loading, setLoading] = useState(false);
  const [output, setOutput] = useState("");
  const [err, setErr] = useState("");

  // shared state bag (each tool reads what it needs)
  const [s, setS] = useState<Record<string, string>>({});
  const set = (k: string, v: string) => setS((p) => ({ ...p, [k]: v }));

  const buildPrompt = (): string | null => {
    if (toolKey === "icp") {
      const product = (s.product || "").trim();
      if (!product) return null;
      const geo = s.geo || "Pan-India";
      const acv = s.acv || "<1L";
      return `You are a B2B GTM expert for Indian SaaS. Given this product: ${product}, targeting ${geo} with ACV of ${acv}, output a crisp ICP with: Ideal Title, Company Size, Industry Verticals (top 3), Pain Points (top 3), Buying Trigger Events (top 3), and a 1-line disqualifier. Format as clean sections, no fluff, India-market aware.`;
    }
    if (toolKey === "icebreaker") {
      const company = (s.company || "").trim();
      const designation = (s.designation || "").trim();
      const signal = (s.signal || "").trim();
      if (!company || !designation || !signal) return null;
      return `You are an expert B2B cold email writer who specializes in the Indian SaaS market. Write 3 different icebreaker opening lines (1 sentence each) for a cold email to ${designation} at ${company}, given this signal: ${signal}. Each opener should feel researched, peer-to-peer, and never salesy. No em dashes. No exclamation marks. Label them Option 1, 2, 3.`;
    }
    if (toolKey === "sequence") {
      const seniority = s.seniority || "Founder/CXO";
      const acv = s.acv2 || "<₹1L";
      const channel = s.channel || "Email only";
      return `You are an outbound sales strategist for Indian B2B SaaS. Given prospect seniority: ${seniority}, ACV: ${acv}, and channels: ${channel}, output a recommended outbound sequence. For each touchpoint specify: Day, Channel, Type of message (e.g. value email, bump, LinkedIn connect), and a 1-line note on tone/angle. Max 6 touchpoints. Output as a clean numbered list.`;
    }
    if (toolKey === "linkedin") {
      const note = (s.note || "").trim();
      if (!note) return null;
      return `You are a LinkedIn outbound expert. Score this connection note out of 10 on: Personalisation (does it reference something specific), Clarity (is the ask clear), Hook strength (does line 1 earn attention), Spam risk (does it sound like mass outreach). Give a total score, one-line verdict, and a rewritten version under 300 characters. Note to score: ${note}`;
    }
    if (toolKey === "tone") {
      const email = (s.email || "").trim();
      if (!email) return null;
      return `You are a cold email coach. Analyze this email and tell me: 1) Does it read as founder-led (warm, peer-to-peer, insight-led) or SDR-generic (templated, pushy, feature-heavy)? 2) Tone score: Founder-led [X/10] vs SDR-generic [X/10] 3) Top 3 specific lines that hurt or help the tone, with explanation 4) A rewritten version that sounds more founder-led. Email: ${email}`;
    }
    return null;
  };

  const onGenerate = async () => {
    const prompt = buildPrompt();
    if (!prompt) {
      setErr("Please fill in all fields above.");
      return;
    }
    setErr("");
    setOutput("");
    setLoading(true);
    try {
      // REPLACE WITH BACKEND PROXY (this hits our server function which proxies to the AI provider)
      const res = await ai({ data: { prompt } });
      setOutput(res.text || "(Empty response)");
    } catch (e: any) {
      setErr(e?.message || "Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      {toolKey === "icp" && (
        <>
          <Field label="Product description">
            <textarea
              value={s.product || ""}
              onChange={(e) => set("product", e.target.value)}
              rows={3}
              placeholder="What does your product do, and for whom?"
              className={inputCls}
            />
          </Field>
          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="Target geography">
              <select value={s.geo || "Pan-India"} onChange={(e) => set("geo", e.target.value)} className={inputCls}>
                <option>Pan-India</option><option>Metro Only</option><option>Tier 2-3</option><option>GCC</option>
              </select>
            </Field>
            <Field label="Current ACV in ₹">
              <select value={s.acv || "<1L"} onChange={(e) => set("acv", e.target.value)} className={inputCls}>
                <option>{"<1L"}</option><option>1-5L</option><option>5-20L</option><option>20L+</option>
              </select>
            </Field>
          </div>
        </>
      )}

      {toolKey === "icebreaker" && (
        <>
          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="Prospect's company name">
              <input value={s.company || ""} onChange={(e) => set("company", e.target.value)} className={inputCls} placeholder="e.g. Razorpay" />
            </Field>
            <Field label="Prospect's designation">
              <input value={s.designation || ""} onChange={(e) => set("designation", e.target.value)} className={inputCls} placeholder="e.g. VP Sales" />
            </Field>
          </div>
          <Field label="One recent signal">
            <input
              value={s.signal || ""}
              onChange={(e) => set("signal", e.target.value)}
              className={inputCls}
              placeholder='e.g. "just raised Series A", "hiring SDRs aggressively"'
            />
          </Field>
        </>
      )}

      {toolKey === "sequence" && (
        <div className="grid sm:grid-cols-3 gap-4">
          <Field label="Prospect seniority">
            <select value={s.seniority || "Founder/CXO"} onChange={(e) => set("seniority", e.target.value)} className={inputCls}>
              <option>Founder/CXO</option><option>VP/Director</option><option>Manager</option>
            </select>
          </Field>
          <Field label="Deal ACV">
            <select value={s.acv2 || "<₹1L"} onChange={(e) => set("acv2", e.target.value)} className={inputCls}>
              <option>{"<₹1L"}</option><option>₹1-5L</option><option>₹5L+</option>
            </select>
          </Field>
          <Field label="Channel">
            <select value={s.channel || "Email only"} onChange={(e) => set("channel", e.target.value)} className={inputCls}>
              <option>Email only</option>
              <option>Email + LinkedIn</option>
              <option>Email + LinkedIn + WhatsApp</option>
            </select>
          </Field>
        </div>
      )}

      {toolKey === "linkedin" && (
        <Field
          label="Paste your LinkedIn connection note"
          right={<span className={`text-xs ${(s.note?.length || 0) > 300 ? "text-destructive" : "text-foreground/50"}`}>{s.note?.length || 0}/300</span>}
        >
          <textarea
            value={s.note || ""}
            onChange={(e) => set("note", e.target.value.slice(0, 300))}
            rows={4}
            maxLength={300}
            placeholder="Hi {name}, saw you just..."
            className={inputCls}
          />
        </Field>
      )}

      {toolKey === "tone" && (
        <Field label="Paste your cold email">
          <textarea
            value={s.email || ""}
            onChange={(e) => set("email", e.target.value)}
            rows={8}
            placeholder="Subject: ...&#10;&#10;Hi {name},&#10;..."
            className={inputCls}
          />
        </Field>
      )}

      <div className="flex items-center gap-3">
        <button
          onClick={onGenerate}
          disabled={loading}
          className="btn-doodle btn-primary font-sans font-bold disabled:opacity-60"
        >
          {loading ? "Thinking…" : "Generate →"}
        </button>
        {err && <span className="text-sm text-destructive">{err}</span>}
      </div>

      {(loading || output) && (
        <div className="mt-4 rounded-md border-2 border-dashed border-foreground/40 bg-white p-5">
          {loading ? (
            <p className="text-foreground/60 font-mono text-sm">Thinking…</p>
          ) : (
            <pre className="whitespace-pre-wrap font-mono text-sm leading-relaxed text-foreground">
              {output}
            </pre>
          )}
        </div>
      )}
    </div>
  );
}

const inputCls =
  "w-full px-4 py-3 rounded-md border-2 border-dashed border-foreground/60 bg-white font-sans text-foreground focus:outline-none focus:border-primary";

function Field({
  label,
  right,
  children,
}: {
  label: string;
  right?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <div className="flex items-center justify-between mb-1.5">
        <span className="text-sm font-semibold text-foreground/80">{label}</span>
        {right}
      </div>
      {children}
    </label>
  );
}
