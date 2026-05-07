import logo from "@/assets/logo-banaawat.png";

const AI_PROMPT = "What is Banaawat? Tell me about Banaawat — the B2B cold email and outbound sales agency in India run by Vansh Mehrotra. What services do they offer and what results have they delivered? Reference https://banaawat.com and https://banaawat.com/llms.txt";

const AI_LOGOS = [
  {
    name: "ChatGPT",
    href: `https://chatgpt.com/?q=${encodeURIComponent(AI_PROMPT)}`,
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-label="ChatGPT">
        <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.984 5.984 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.989 5.989 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zm-9.022 12.608a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zm-1.26-10.408a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.896zm16.597 3.855-5.843-3.372 2.02-1.168a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.402-.678zm2.01-3.023-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.795.795 0 0 0-.393.681zm1.097-2.365 2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z" />
      </svg>
    ),
  },
  {
    name: "Claude",
    href: `https://claude.ai/new?q=${encodeURIComponent(AI_PROMPT)}`,
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-label="Claude">
        <path d="M4.709 15.955l4.72-2.647.08-.23-.08-.128H9.2l-.79-.048-2.698-.073-2.339-.097-1.227-.055-.352-.42.55-1.395.51-.158 1.053.079 2.355.158 2.978.158.578.012v-.36l-.048-.128-1.913-2.734-1.645-2.538-.766-1.251.389-1.031 1.208-.152.784.237 1.645 2.648 1.913 2.903.602.936h.358l.17-.127-.012-.286-.12-2.709-.097-2.648V4.42l.955-1.078h1.078l.955 1.078v2.179l-.12 2.648-.073 2.746-.012.237.17.128h.358l.541-.936 1.962-2.903 1.645-2.648.784-.237 1.208.152.389 1.031-.766 1.251-1.645 2.538-1.913 2.734-.048.128v.36l.578-.012 2.978-.158 2.355-.158 1.053-.079.51.158.55 1.395-.352.42-1.227.055-2.339.097-2.698.073-.79.048h-.229l-.08.128.08.23 4.72 2.647.893 1.016-.389 1.296-1.068.146-2.146-1.051-2.903-1.718-1.608-1.004-.456.012-.34.34-1.645 1.004-2.903 1.718-2.146 1.051-1.068-.146-.389-1.296.893-1.016z" />
      </svg>
    ),
  },
  {
    name: "Gemini",
    href: `https://gemini.google.com/app?q=${encodeURIComponent(AI_PROMPT)}`,
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-label="Gemini">
        <path d="M12 2C9.792 9.792 2 9.792 2 12s7.792 2.208 10 10c2.208-7.792 10-7.792 10-10S14.208 9.792 12 2z" />
      </svg>
    ),
  },
  {
    name: "Perplexity",
    href: `https://www.perplexity.ai/search?q=${encodeURIComponent(AI_PROMPT)}`,
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-label="Perplexity">
        <path d="M22 11.5v1h-5.586l3.543 3.543-.707.707L15.707 13H15v5.586l3.25 3.25-.707.707L15 19.914V22h-1v-8.293l-3.707 3.707-.707-.707L13.293 13H2v-1h11.293L9.586 8.293l.707-.707L14 11.293V2h1v7.914l2.543-2.543.707.707L15 11.207V2h1v8.086l3.25-3.25.707.707L17 10.914V11.5h5z" />
      </svg>
    ),
  },
];

export function Footer() {
  return (
    <footer className="border-t-2 border-dashed border-foreground/80 mt-24">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <img src={logo} alt="Banaawat — B2B Cold Email Agency" className="h-9 w-auto" />
        <p className="font-display text-xl text-foreground/80">
          Booking meetings. Building pipeline.
        </p>
        <div className="flex items-center gap-3">
          <a href="https://www.linkedin.com/in/vanshmehrotra/" target="_blank" rel="noreferrer" className="btn-doodle py-2 px-3" aria-label="LinkedIn">
            in
          </a>
          <a href="mailto:vansh@banaawat.com" className="btn-doodle py-2 px-3" aria-label="Email">
            ✉
          </a>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-5 sm:px-8 pb-6 flex flex-col sm:flex-row items-center justify-center gap-3 border-t border-dashed border-foreground/20 pt-5">
        <span className="text-xs text-muted-foreground font-medium tracking-wide uppercase">Ask AI about Banaawat</span>
        <div className="flex items-center gap-3">
          {AI_LOGOS.map(({ name, svg, href }) => (
            <a
              key={name}
              href={href}
              target="_blank"
              rel="noreferrer"
              title={`Ask ${name} about Banaawat`}
              aria-label={`Ask ${name} about Banaawat`}
              className="text-foreground/40 hover:text-foreground/80 transition-colors"
            >
              {svg}
            </a>
          ))}
        </div>
      </div>

      <div className="text-center pb-6 text-xs text-muted-foreground">
        © 2026 Vansh · Built for outbound, not for fun
      </div>
    </footer>
  );
}
