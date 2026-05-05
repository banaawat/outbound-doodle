import { useEffect, useState } from "react";

/**
 * Live pipeline dashboard — clean, data-driven look.
 * Shows funnel metrics with subtle counter animation and a sparkline.
 */
export function SalesPipeline() {
  const targets = [
    { label: "Prospects sourced", value: 1240, delta: "+128 this wk" },
    { label: "Emails delivered", value: 3720, delta: "98.4% inbox" },
    { label: "Positive replies", value: 260, delta: "7.0% rate" },
    { label: "Meetings booked", value: 82, delta: "+12 this wk", accent: true },
  ];

  const [counts, setCounts] = useState(targets.map(() => 0));

  useEffect(() => {
    const start = performance.now();
    const dur = 1400;
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      const e = 1 - Math.pow(1 - p, 3);
      setCounts(targets.map((s) => Math.round(s.value * e)));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  // funnel widths derived from values
  const max = targets[0].value;
  const widths = targets.map((s) => 30 + (s.value / max) * 70);

  // sparkline path
  const spark = [12, 18, 14, 22, 19, 28, 24, 32, 30, 38, 35, 42];
  const sparkMax = Math.max(...spark);
  const sparkPath = spark
    .map((v, i) => `${i === 0 ? "M" : "L"} ${(i / (spark.length - 1)) * 100} ${40 - (v / sparkMax) * 36}`)
    .join(" ");

  return (
    <div className="relative w-full">
      <div className="doodle-card bg-card overflow-hidden">
        {/* Header bar */}
        <div className="flex items-center justify-between px-5 py-3 border-b-2 border-dashed border-foreground/30 bg-[color-mix(in_oklab,var(--primary)_5%,white)]">
          <div className="flex items-center gap-2">
            <span className="flex gap-1">
              <span className="w-2.5 h-2.5 rounded-full bg-secondary" />
              <span className="w-2.5 h-2.5 rounded-full bg-accent" />
              <span className="w-2.5 h-2.5 rounded-full bg-primary" />
            </span>
            <span className="font-mono text-xs text-muted-foreground ml-1">pipeline.live</span>
          </div>
          <div className="flex items-center gap-2 text-xs">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse inline-block" />
            <span className="font-mono text-muted-foreground">streaming · last 30d</span>
          </div>
        </div>

        {/* Top KPI */}
        <div className="px-5 pt-5 pb-3 flex items-end justify-between gap-4">
          <div>
            <div className="text-xs uppercase tracking-wider font-semibold text-muted-foreground">Conversion</div>
            <div className="flex items-baseline gap-2 mt-1">
              <span className="font-serif-d text-5xl leading-none text-foreground">6.6%</span>
              <span className="text-emerald-600 font-semibold text-sm">▲ 1.2%</span>
            </div>
            <div className="text-xs text-muted-foreground mt-1">Prospect → meeting booked</div>
          </div>
          <svg viewBox="0 0 100 40" className="w-32 h-12" preserveAspectRatio="none" aria-hidden>
            <path d={sparkPath} fill="none" stroke="var(--primary)" strokeWidth="2" />
            <path d={`${sparkPath} L 100 40 L 0 40 Z`} fill="var(--primary)" opacity="0.08" />
          </svg>
        </div>

        {/* Funnel rows */}
        <div className="px-5 pb-5 space-y-2.5">
          {targets.map((s, i) => (
            <div key={s.label} className="space-y-1">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-foreground/80">{s.label}</span>
                <span className="font-mono text-muted-foreground">{s.delta}</span>
              </div>
              <div className="relative h-9 rounded-md bg-muted/60 overflow-hidden border border-foreground/10">
                <div
                  className="absolute inset-y-0 left-0 flex items-center px-3 transition-[width] duration-700 ease-out"
                  style={{
                    width: `${widths[i]}%`,
                    background: s.accent
                      ? "linear-gradient(90deg, var(--secondary), color-mix(in oklab, var(--secondary) 70%, var(--primary)))"
                      : "linear-gradient(90deg, color-mix(in oklab, var(--primary) 85%, white), color-mix(in oklab, var(--primary) 60%, white))",
                  }}
                >
                  <span className="font-serif-d text-xl text-white drop-shadow-sm">
                    {counts[i].toLocaleString()}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer ticker */}
        <div className="px-5 py-3 border-t-2 border-dashed border-foreground/30 bg-[color-mix(in_oklab,var(--accent)_15%,white)] flex items-center justify-between text-xs">
          <span className="font-mono text-foreground/70">
            <span className="text-emerald-700 font-semibold">+ meeting booked</span> · Series B SaaS · 2m ago
          </span>
          <span className="font-mono text-muted-foreground">82 / mo</span>
        </div>
      </div>
    </div>
  );
}
