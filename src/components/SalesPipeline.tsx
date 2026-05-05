import { Star } from "./Squiggle";

/**
 * Animated sales pipeline visual.
 * Shows leads flowing through stages: Prospects → Sent → Replied → Booked
 * with little "lead" dots that travel down the pipeline on a loop.
 */
export function SalesPipeline() {
  const stages = [
    { label: "Prospects", count: "1,240", color: "var(--accent)", icon: "👥" },
    { label: "Emails sent", count: "3,720", color: "color-mix(in oklab, var(--primary) 25%, white)", icon: "✉️" },
    { label: "Replies", count: "260", color: "color-mix(in oklab, var(--secondary) 35%, white)", icon: "💬" },
    { label: "Meetings booked", color: "var(--secondary)", count: "82", icon: "📅", highlight: true },
  ];

  return (
    <div className="relative w-full">
      {/* The pipeline card */}
      <div className="doodle-card p-5 sm:p-6 relative bg-card">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-secondary animate-pulse inline-block" />
            <span className="font-display text-2xl">live pipeline</span>
          </div>
          <span className="sticker sticker-blue text-xs" style={{ transform: "rotate(3deg)" }}>
            this month
          </span>
        </div>

        {/* Stages */}
        <div className="relative space-y-3">
          {stages.map((s, i) => (
            <div key={s.label} className="relative">
              <div
                className="doodle-card-soft flex items-center justify-between px-4 py-3"
                style={{
                  background: s.color,
                  width: `${100 - i * 8}%`,
                  marginLeft: `${i * 4}%`,
                  color: s.highlight ? "var(--secondary-foreground)" : "var(--ink)",
                }}
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{s.icon}</span>
                  <span className="font-semibold text-sm sm:text-base">{s.label}</span>
                </div>
                <span className="font-serif-d text-2xl sm:text-3xl leading-none">{s.count}</span>
              </div>

              {/* Connector line + traveling dot */}
              {i < stages.length - 1 && (
                <div className="relative h-5 ml-6">
                  <svg viewBox="0 0 20 20" className="h-5 w-5" aria-hidden>
                    <path
                      d="M10 1 L10 17 M5 12 L10 18 L15 12"
                      fill="none"
                      stroke="var(--ink)"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeDasharray="3 3"
                    />
                  </svg>
                  <span
                    className="absolute left-1.5 w-3 h-3 rounded-full border-2 border-foreground bg-secondary pipeline-lead"
                    style={{ animationDelay: `${i * 0.6}s` }}
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom stat */}
        <div className="mt-5 pt-4 border-t-2 border-dashed border-foreground/40 flex items-center justify-between">
          <span className="text-xs uppercase tracking-wide font-semibold text-muted-foreground">
            Conversion: prospect → booked
          </span>
          <span className="font-serif-d text-3xl text-primary">6.6%</span>
        </div>
      </div>

      {/* Floating sticker on top */}
      <span
        className="sticker sticker-orange absolute -top-4 -right-3 z-10 text-xs"
        style={{ transform: "rotate(8deg)" }}
      >
        +12 booked this week 🎯
      </span>
    </div>
  );
}
