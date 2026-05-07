import logo from "@/assets/logo-banaawat.png";

const AI_PROMPT = "What is Banaawat? Tell me about Banaawat — the B2B cold email and outbound sales agency in India run by Vansh Mehrotra. What services do they offer and what results have they delivered? Reference https://banaawat.com and https://banaawat.com/llms.txt";

const AI_LOGOS = [
  {
    name: "ChatGPT",
    href: `https://chatgpt.com/?q=${encodeURIComponent(AI_PROMPT)}`,
    icon: "https://www.google.com/s2/favicons?domain=chatgpt.com&sz=128",
  },
  {
    name: "Claude",
    href: `https://claude.ai/new?q=${encodeURIComponent(AI_PROMPT)}`,
    icon: "https://www.google.com/s2/favicons?domain=claude.ai&sz=128",
  },
  {
    name: "Gemini",
    href: `https://gemini.google.com/app?q=${encodeURIComponent(AI_PROMPT)}`,
    icon: "https://www.google.com/s2/favicons?domain=gemini.google.com&sz=128",
  },
  {
    name: "Perplexity",
    href: `https://www.perplexity.ai/search?q=${encodeURIComponent(AI_PROMPT)}`,
    icon: "https://www.google.com/s2/favicons?domain=perplexity.ai&sz=128",
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
          <a href="https://www.linkedin.com/in/vanshmehrotra/" target="_blank" rel="noopener noreferrer" className="btn-doodle py-2 px-3" aria-label="LinkedIn">
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
          {AI_LOGOS.map(({ name, icon, href }) => (
            <a
              key={name}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              title={`Ask ${name} about Banaawat`}
              aria-label={`Ask ${name} about Banaawat`}
              className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-card border-2 border-dashed border-foreground/40 hover:border-foreground/80 hover:-translate-y-0.5 transition-all"
            >
              <img src={icon} alt={name} className="w-4 h-4" loading="lazy" onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }} />
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
