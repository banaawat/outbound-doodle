import { useState } from "react";

type Block = {
  id?: string;
  type: string;
  text?: string;
  html?: string;
  content?: string;
  items?: any[];
  fontSize?: number | string;
  fontWeight?: number | string;
  color?: string;
  background?: string;
  fill?: string;
  border?: string;
  borderRadius?: number | string;
  shadow?: string;
  height?: number | string;
  width?: number | string;
  // email-preview
  subject?: string;
  body?: string;
  bodyLines?: string[];
  reply?: string;
  // faq
  faqs?: { q: string; a: string }[];
  // cta
  ctaLabel?: string;
  ctaUrl?: string;
  // line/divider
  thickness?: number | string;
  style?: string;
  // generic style passthrough
  styles?: Record<string, any>;
};

const ORANGE = "#f5611a";
const INK = "#1a1a1a";

function styleFromBlock(b: Block): React.CSSProperties {
  return {
    fontSize: b.fontSize as any,
    fontWeight: b.fontWeight as any,
    color: b.color,
    background: b.background ?? b.fill,
    ...(b.styles ?? {}),
  };
}

export function CanvasRenderer({ blocks }: { blocks: Block[] }) {
  if (!Array.isArray(blocks) || blocks.length === 0) return null;
  return (
    <div className="space-y-5">
      {blocks.map((b, i) => (
        <BlockRender key={b.id ?? i} block={b} />
      ))}
    </div>
  );
}

function BlockRender({ block: b }: { block: Block }) {
  const text = b.text ?? b.content ?? "";
  const items = (b.items ?? []) as any[];

  switch (b.type) {
    case "heading-h1":
    case "h1":
      return (
        <h1 className="font-serif-d text-4xl sm:text-5xl leading-tight" style={styleFromBlock(b)}>
          {text}
        </h1>
      );
    case "heading-h2":
    case "h2":
      return (
        <h2 className="font-display text-3xl sm:text-4xl mt-2" style={styleFromBlock(b)}>
          {text}
        </h2>
      );
    case "body-text":
    case "paragraph":
    case "p":
      if (b.html) {
        return (
          <div
            className="text-lg text-foreground/85 leading-relaxed"
            style={styleFromBlock(b)}
            dangerouslySetInnerHTML={{ __html: b.html }}
          />
        );
      }
      return (
        <p className="text-lg text-foreground/85 leading-relaxed" style={styleFromBlock(b)}>
          {text}
        </p>
      );
    case "bullet-list":
    case "list":
      return (
        <ul className="space-y-2 pl-1">
          {items.map((it, idx) => (
            <li key={idx} className="flex items-start gap-3 text-foreground/85">
              <span
                className="mt-2 inline-block w-1.5 h-1.5 rounded-full flex-shrink-0"
                style={{ background: ORANGE }}
              />
              <span>{typeof it === "string" ? it : it.text ?? it.content}</span>
            </li>
          ))}
        </ul>
      );
    case "numbered-list":
      return (
        <ol className="space-y-2 pl-1 list-none">
          {items.map((it, idx) => (
            <li key={idx} className="flex items-start gap-3 text-foreground/85">
              <span className="font-bold flex-shrink-0" style={{ color: ORANGE }}>
                {idx + 1}.
              </span>
              <span>{typeof it === "string" ? it : it.text ?? it.content}</span>
            </li>
          ))}
        </ol>
      );
    case "email-preview":
    case "email": {
      const lines = b.bodyLines ?? (b.body ? b.body.split("\n") : []);
      return (
        <div
          className="overflow-hidden bg-card"
          style={{ border: `1.5px dashed ${INK}`, borderRadius: 6 }}
        >
          <div className="px-5 py-3 border-b" style={{ borderColor: "rgba(0,0,0,0.15)", borderStyle: "dashed" }}>
            <div className="text-[0.65rem] uppercase tracking-wider text-muted-foreground font-semibold">
              SUBJECT
            </div>
            <div className="font-semibold">{b.subject}</div>
          </div>
          <div className="p-5 space-y-2 font-mono text-[14px] leading-relaxed">
            {lines.map((ln, idx) => (
              <p key={idx} className="whitespace-pre-wrap">{ln}</p>
            ))}
          </div>
          {b.reply && (
            <div className="px-5 py-4 border-t-2 border-dashed" style={{ borderColor: ORANGE }}>
              <div
                className="text-xs font-bold uppercase tracking-wider mb-1"
                style={{ color: ORANGE }}
              >
                REPLY
              </div>
              <div className="font-mono text-sm text-foreground/85">"{b.reply}"</div>
            </div>
          )}
        </div>
      );
    }
    case "blockquote":
    case "quote":
      return (
        <blockquote
          className="p-6 italic font-serif-d text-2xl leading-snug bg-card"
          style={{ borderLeft: `3px dashed ${ORANGE}` }}
        >
          {text}
        </blockquote>
      );
    case "whats-inside": {
      const list = items.length ? items : (b as any).list ?? [];
      return (
        <div className="p-6 bg-card" style={{ border: `1.5px dashed ${INK}`, borderRadius: 6 }}>
          <div className="font-display text-2xl mb-3">What's inside</div>
          <ul className="space-y-2">
            {list.map((it: any, idx: number) => (
              <li key={idx} className="flex items-start gap-3 text-foreground/85">
                <span
                  className="mt-1 inline-flex w-5 h-5 items-center justify-center rounded-full text-white text-xs font-bold flex-shrink-0"
                  style={{ background: "#3b82f6" }}
                >
                  ✓
                </span>
                <span>{typeof it === "string" ? it : it.text ?? it.content}</span>
              </li>
            ))}
          </ul>
        </div>
      );
    }
    case "faq":
      return <FAQBlock faqs={b.faqs ?? (items as any) ?? []} />;
    case "cta-box":
    case "cta":
      return (
        <div
          className="p-7 bg-card"
          style={{ border: `1.5px dashed ${INK}`, borderRadius: 6 }}
        >
          {b.subject && <h3 className="font-serif-d text-2xl mb-2">{b.subject}</h3>}
          {text && <p className="text-foreground/75 mb-4">{text}</p>}
          {b.ctaLabel && (
            <a
              href={b.ctaUrl ?? "#"}
              className="btn-doodle font-sans font-bold inline-block"
              style={{ background: ORANGE, color: "white" }}
            >
              {b.ctaLabel} →
            </a>
          )}
        </div>
      );
    case "divider":
      return (
        <hr
          style={{
            borderTop: `${b.thickness ?? 1}px ${b.style ?? "dashed"} ${b.color ?? "rgba(0,0,0,0.3)"}`,
            ...(b.styles ?? {}),
          }}
        />
      );
    case "spacer":
      return <div style={{ height: b.height ?? 24 }} />;
    case "rectangle":
      return (
        <div
          style={{
            background: b.fill ?? b.background,
            border: b.border,
            borderRadius: b.borderRadius,
            boxShadow: b.shadow,
            width: b.width ?? "100%",
            height: b.height ?? 80,
            ...(b.styles ?? {}),
          }}
        />
      );
    case "line":
      return (
        <div
          style={{
            height: b.thickness ?? 1,
            background: b.color ?? INK,
            width: b.width ?? "100%",
            ...(b.styles ?? {}),
          }}
        />
      );
    case "text-box":
      return (
        <div
          className="leading-relaxed"
          style={styleFromBlock(b)}
          {...(b.html ? { dangerouslySetInnerHTML: { __html: b.html } } : {})}
        >
          {b.html ? null : text}
        </div>
      );
    default:
      return null;
  }
}

function FAQBlock({ faqs }: { faqs: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="space-y-3">
      {faqs.map((f, i) => {
        const isOpen = open === i;
        return (
          <div
            key={i}
            className="bg-card overflow-hidden"
            style={{ border: `1.5px dashed ${INK}`, borderRadius: 6 }}
          >
            <button
              className="w-full text-left px-5 py-4 font-bold"
              onClick={() => setOpen(isOpen ? null : i)}
            >
              {f.q}
            </button>
            {isOpen && (
              <div className="px-5 pb-5 text-foreground/80 leading-relaxed border-t border-dashed">
                {f.a}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
