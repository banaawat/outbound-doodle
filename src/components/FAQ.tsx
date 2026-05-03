import { useState } from "react";

const FAQS = [
  {
    q: "How long until I see meetings booked?",
    a: "Realistically, 2–4 weeks from kickoff. Week 1 is TAM + copy. Week 2 the first sequence sends. Replies and meetings start landing in week 3–4 once follow-ups land. Anyone promising results in 7 days is lying.",
  },
  {
    q: "What if cold email is dead?",
    a: "It isn't. Bad cold email is dead. The companies you've heard of all run outbound — they just don't run the spammy version. I write the version that actually gets read.",
  },
  {
    q: "Do you use AI to write the emails?",
    a: "I use AI for research and grunt work — never for writing. If your email looks like ChatGPT wrote it, it dies in the trash with the other 200 ChatGPT emails that day.",
  },
  {
    q: "Will you sign an NDA / non-compete?",
    a: "Yes to NDAs. No to industry exclusivity unless we structure that into the engagement. I don't take on direct competitors at the same time.",
  },
  {
    q: "What industries do you work with?",
    a: "B2B SaaS — primarily Indian companies selling to enterprise/mid-market in India, the Middle East, and SEA. I've also worked F&B, retail, and fintech outbound.",
  },
  {
    q: "Do you do LinkedIn outbound too?",
    a: "Yes — LinkedIn + email multichannel sequences. Connection request, value-add comment, then the email. Way better than spraying InMail.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="max-w-3xl mx-auto px-5 sm:px-8 pb-24">
      <h2 className="font-display text-5xl sm:text-6xl mb-2">
        Questions you're <span className="squiggle">probably</span> asking.
      </h2>
      <p className="text-muted-foreground mb-8">The honest answers.</p>

      <div className="space-y-4">
        {FAQS.map((f, i) => {
          const isOpen = open === i;
          return (
            <div key={f.q} className="doodle-card overflow-hidden">
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                className="w-full text-left p-5 flex items-start gap-4 justify-between"
              >
                <span className="font-serif-d text-xl sm:text-2xl flex-1">{f.q}</span>
                <span
                  className="font-display text-3xl leading-none transition-transform shrink-0"
                  style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0)", color: "var(--secondary)" }}
                >
                  +
                </span>
              </button>
              {isOpen && (
                <div className="px-5 pb-5 text-foreground/80 leading-relaxed border-t-2 border-dashed border-foreground/30 pt-4">
                  {f.a}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
