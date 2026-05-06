export type Cat = "Templates" | "Teardowns" | "Playbooks" | "Tools" | "Checklists";

export type Resource = {
  slug: string;
  cat: Cat;
  title: string;
  desc: string;
  cta: string;
  meta: string;
  tag?: "New" | "Popular" | "Updated";
  reads?: string;
  featured?: boolean;
  /** Long-form body sections rendered on the detail page */
  body: Section[];
  /** Optional bullet list of what's inside */
  whatsInside?: string[];
  /** Optional FAQ on the detail page */
  faq?: { q: string; a: string }[];
};

export type Section =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "quote"; text: string; by?: string }
  | { type: "list"; items: string[] }
  | { type: "email"; subject: string; lines: string[]; reply?: string }
  | { type: "code"; text: string };

export const RESOURCES: Resource[] = [
  {
    slug: "dominos-uae-cold-email-teardown",
    cat: "Teardowns",
    title: "How a 3-line cold email booked Domino's UAE",
    desc: "Line-by-line breakdown of the sequence that got an F&B leadership team to ask for a deck. Subject line, opener, CTA, follow-up — and why every word is there.",
    cta: "Read teardown",
    meta: "8 min read",
    tag: "Popular",
    reads: "12.4k reads",
    featured: true,
    whatsInside: [
      "The exact 3-line email that got the reply",
      "Why the subject line broke pattern",
      "The 1-line research that made it work",
      "The follow-up that actually closed the meeting",
    ],
    body: [
      { type: "h2", text: "The setup" },
      { type: "p", text: "Client sold a kitchen-ops SaaS into QSR chains across MENA. We had 80 target accounts, a 7-day trial of Apollo, and zero brand. Domino's UAE was a tier-1 account with a director who had ignored every BDR who'd ever pitched her." },
      { type: "p", text: "I sent one 3-line email. She replied in 14 minutes." },
      { type: "h2", text: "The email" },
      {
        type: "email",
        subject: "quick idea for Domino's UAE growth",
        lines: [
          "Hi {firstName} —",
          "Saw the Q3 KSA expansion announcement. The thing that bites every QSR scaling that fast is order-throughput per store at peak.",
          "We took Alamar from 14 → 11 min ticket time in 6 weeks. Worth a 15-min look?",
          "— Vansh",
        ],
        reply: "Let me loop in our director. Friday 4pm UAE work?",
      },
      { type: "h2", text: "Why every line is there" },
      { type: "list", items: [
        "Subject is lowercase and specific — not 'partnership opportunity'.",
        "Line 1 references something real and recent (Q3 KSA expansion).",
        "Line 2 names a problem in their language ('order-throughput at peak'), not ours.",
        "Line 3 is proof + soft ask. No calendar link, no 15-question form.",
      ] },
      { type: "h2", text: "The follow-up that closed it" },
      { type: "p", text: "Most reps stop here. The reply landed me a director, not a meeting. I sent one more email two days later confirming Friday and adding a single line: 'No deck, no demo — just 15 min on what's breaking in your peak hours.' That sentence is what got the calendar invite back." },
      { type: "quote", text: "Cold email isn't dead. Bad cold email is dead.", by: "Me, every Tuesday" },
    ],
    faq: [
      { q: "Will this work in my industry?", a: "If you sell B2B and your buyers are real humans with LinkedIn profiles, yes. The structure (specific reference → their language → soft ask) is industry-agnostic." },
      { q: "Does the email length matter?", a: "Under 75 words wins on mobile. Anything longer gets the half-read-then-archived treatment." },
    ],
  },
  {
    slug: "3-line-cold-email-formula",
    cat: "Templates",
    title: "The 3-line cold email formula (5 variants)",
    desc: "Subject + opener + ask. The exact structure I use for 7%+ reply rates. Fill-in-the-blank variants for SaaS, agencies, services, and dev tools.",
    cta: "Copy templates",
    meta: "Google Doc",
    tag: "Popular",
    reads: "8.9k copies",
    whatsInside: [
      "5 fill-in-the-blank variants",
      "20 subject-line patterns that get opened",
      "Personalisation tokens cheat-sheet",
      "Common rewrites — before / after",
    ],
    body: [
      { type: "h2", text: "The formula" },
      { type: "list", items: [
        "Line 1 — a specific, recent reference to them (not 'I love what you're doing').",
        "Line 2 — a problem in their words, not your features.",
        "Line 3 — proof + a 15-min ask. No calendar link in the first email.",
      ] },
      { type: "h2", text: "Variant A — SaaS to mid-market" },
      {
        type: "email",
        subject: "{Company}'s {recent thing} + a quick idea",
        lines: [
          "Hi {firstName} —",
          "Noticed {specific public signal — funding, hire, launch, expansion}.",
          "Most teams hitting that stage end up bottlenecked on {their pain in their language}.",
          "We took {comparable company} from {before} to {after}. Worth a 15-min look?",
        ],
      },
      { type: "h2", text: "Variant B — Agency / services" },
      {
        type: "email",
        subject: "quick idea for {Company}",
        lines: [
          "Hi {firstName} —",
          "Saw your team is hiring {role} — usually a sign of {pain}.",
          "We help companies like {peer} {outcome in 1 line}.",
          "Want me to send the 90-second loom?",
        ],
      },
      { type: "p", text: "Three more variants live inside the Google Doc — for dev tools, fintech, and outbound to founders. All editable." },
    ],
  },
  {
    slug: "icp-definition-worksheet",
    cat: "Playbooks",
    title: "ICP definition worksheet (12 questions)",
    desc: "The 12 questions that force you to get specific about who you're actually selling to. Fill this before you touch Apollo or you'll burn your domain.",
    cta: "Download PDF",
    meta: "PDF · 4 pages",
    reads: "5.2k downloads",
    whatsInside: [
      "12 forcing-function questions",
      "Tier 1 / 2 / 3 scoring rubric",
      "ICP one-pager template",
      "3 worked examples (SaaS, agency, dev tool)",
    ],
    body: [
      { type: "h2", text: "Why most ICPs are useless" },
      { type: "p", text: "An ICP that says 'B2B SaaS companies, 50-500 employees, in North America' is not an ICP. It's a filter. A real ICP names the buyer, the trigger event, and the budget owner — and tells you when to disqualify." },
      { type: "h2", text: "The 12 questions" },
      { type: "list", items: [
        "What just changed in their world that makes this urgent?",
        "Who pays — and is that the same person who feels the pain?",
        "What's the cheapest version of the status-quo they're using today?",
        "What would make them disqualify you in the first 2 minutes?",
        "What's the 1-sentence version of your pitch they'd repeat to a peer?",
        "How does success look 90 days in?",
        "What's the failure mode that kills the pilot?",
        "Where do they actually hang out — Slack, LinkedIn, conferences?",
        "Who else is in the buying committee?",
        "What's the realistic deal size in year one?",
        "How long is the sales cycle, honestly?",
        "Which 5 logos would prove your case if you had them?",
      ] },
      { type: "p", text: "The PDF includes the scoring rubric and three filled-in examples." },
    ],
  },
  {
    slug: "tam-mapping-spreadsheet",
    cat: "Tools",
    title: "TAM mapping spreadsheet",
    desc: "Tier (T1/T2/T3) and prioritise accounts before any campaign. Pre-built formulas, sample data, and a scoring rubric you can edit.",
    cta: "Get the sheet",
    meta: "Google Sheet",
    tag: "Updated",
    reads: "4.1k copies",
    whatsInside: [
      "Pre-built tier formulas (T1/T2/T3)",
      "Account scoring rubric (10 signals)",
      "Sample data — 50 rows, real fields",
      "Apollo / Clay / Sales Nav field map",
    ],
    body: [
      { type: "h2", text: "How to use it" },
      { type: "list", items: [
        "Duplicate the sheet (File → Make a copy).",
        "Paste your raw account list into the 'Accounts' tab.",
        "Edit the scoring rubric on the 'Rubric' tab to match your ICP.",
        "The 'Tiered' tab auto-sorts T1/T2/T3 with reasoning columns.",
      ] },
      { type: "p", text: "Built so you can hand it to a junior SDR and they can run a tiering exercise without asking what 'fit' means." },
    ],
  },
  {
    slug: "5-touch-follow-up-sequence",
    cat: "Templates",
    title: "5-touch follow-up sequence",
    desc: "Timing, tone, and what to say when they ghost. Includes the breakup email that pulls 30% of all replies.",
    cta: "Copy sequence",
    meta: "Google Doc",
    reads: "3.8k copies",
    whatsInside: [
      "5 emails, written end-to-end",
      "Timing chart (day 1, 3, 7, 12, 18)",
      "The breakup email that gets 30% of all replies",
      "Tone shifts per touch",
    ],
    body: [
      { type: "h2", text: "Cadence" },
      { type: "list", items: [
        "Day 1 — opener (the 3-line formula).",
        "Day 3 — short bump, single new angle.",
        "Day 7 — value drop (a teardown, a number, a 1-line case study).",
        "Day 12 — direct ask, no fluff.",
        "Day 18 — breakup. Pulls more replies than touches 2-4 combined.",
      ] },
      { type: "h2", text: "The breakup that works" },
      {
        type: "email",
        subject: "closing the loop",
        lines: [
          "Hi {firstName} — assuming this isn't a priority right now, so I'll stop.",
          "If that's wrong, just hit reply with a 1.",
          "Either way, good luck with {specific thing}.",
        ],
      },
      { type: "p", text: "The 'reply with a 1' line drops the friction to almost zero. Real humans actually hit reply." },
    ],
  },
  {
    slug: "outbound-stack-zero-budget",
    cat: "Playbooks",
    title: "Outbound stack for zero budget",
    desc: "Apollo free tier + Clay credits + Claude + a secondary Gmail. The exact stack to run real outbound before you have a budget.",
    cta: "Read playbook",
    meta: "12 min read",
    reads: "6.7k reads",
    whatsInside: [
      "The exact tools (with free-tier limits)",
      "How to stretch 50 Apollo credits / mo",
      "Claude prompts for personalisation at scale",
      "Domain warmup on a $0 budget",
    ],
    body: [
      { type: "h2", text: "The stack" },
      { type: "list", items: [
        "Apollo (free) — 50 credits/mo, enough for ~200 enriched contacts.",
        "Clay (free trial) — for the contacts Apollo can't find.",
        "Claude (free) — research + first-line personalisation.",
        "Secondary Gmail on a fresh domain (~$10 one-time on Cloudflare).",
        "Mailtester / Glockapps free tier for deliverability checks.",
      ] },
      { type: "h2", text: "Volume cap on this stack" },
      { type: "p", text: "Realistic ceiling: 30-40 emails a day, 5-day week, ~600/mo. That's enough to book 3-5 meetings if your copy is good. Spend before this is a waste." },
    ],
  },
  {
    slug: "deliverability-preflight-checklist",
    cat: "Checklists",
    title: "Deliverability pre-flight checklist",
    desc: "SPF, DKIM, DMARC, domain warmup, send volume, blacklists. The 22-point check I run before any new domain sends a single email.",
    cta: "Get checklist",
    meta: "PDF · 2 pages",
    tag: "New",
    reads: "2.1k downloads",
    whatsInside: [
      "22 pre-flight checks (one tickbox each)",
      "DNS record templates (SPF / DKIM / DMARC)",
      "Warmup schedule — week 1 to week 4",
      "Blacklist check URLs",
    ],
    body: [
      { type: "h2", text: "The non-negotiables" },
      { type: "list", items: [
        "SPF record published and aligned.",
        "DKIM signing on the sending domain.",
        "DMARC at p=none for first 30 days, then p=quarantine.",
        "Custom tracking domain (never the default).",
        "Warmup tool running for 14 days minimum before live sends.",
        "Inbox placement test in Gmail / Outlook / Yahoo.",
      ] },
      { type: "p", text: "Skip any of these and you can write the world's best email — it'll still land in spam." },
    ],
  },
  {
    slug: "14-percent-reply-teardown",
    cat: "Teardowns",
    title: "Why this sequence got 14% reply (and 0 unsubs)",
    desc: "A live campaign for a US dev-tools client. Targeting, copy choices, A/B winner, and what I'd do differently next time.",
    cta: "Read teardown",
    meta: "10 min read",
    reads: "3.4k reads",
    body: [
      { type: "h2", text: "The numbers" },
      { type: "list", items: [
        "Sent: 412 emails across 3 touches",
        "Open rate: 64%",
        "Reply rate: 14.1%",
        "Positive replies: 23",
        "Meetings booked: 11",
        "Unsubscribes: 0",
      ] },
      { type: "h2", text: "Why it worked" },
      { type: "p", text: "Tight ICP (412 contacts, not 4,000), a real research signal in every email (their GitHub release notes), and a CTA that didn't ask for 30 minutes." },
      { type: "h2", text: "What I'd change" },
      { type: "p", text: "Touch 2 was almost identical to touch 1 in tone — should've been a value drop, not a bump. Estimated I left 4-5 meetings on the table." },
    ],
  },
  {
    slug: "reply-rate-calculator",
    cat: "Tools",
    title: "Reply-rate calculator",
    desc: "Plug in volume, reply %, qualification %, and show rate. See exactly how many emails you need to send to hit your meeting target.",
    cta: "Open calculator",
    meta: "Google Sheet",
    reads: "1.9k copies",
    whatsInside: [
      "Inputs: volume, reply %, qualification %, show rate",
      "Output: meetings booked & cost-per-meeting",
      "Sensitivity table for reply-rate scenarios",
    ],
    body: [
      { type: "h2", text: "Why this matters" },
      { type: "p", text: "Most founders set 'meetings/mo' targets without doing the maths backwards. Plug your numbers in and the sheet tells you the volume you actually need — and whether your goal is realistic on your current copy." },
    ],
  },
  {
    slug: "pre-send-copy-review",
    cat: "Checklists",
    title: "Pre-send copy review (17 points)",
    desc: "Spam triggers, length, personalization tokens, CTA clarity, mobile rendering. The checklist I run before any sequence goes live.",
    cta: "Get checklist",
    meta: "PDF · 2 pages",
    reads: "1.6k downloads",
    body: [
      { type: "h2", text: "The 17 checks" },
      { type: "list", items: [
        "Subject under 50 chars",
        "Body under 75 words",
        "Zero spam-trigger words (free, guarantee, click here…)",
        "Every personalisation token has a fallback",
        "CTA is one clear ask, not three",
        "Renders cleanly on a 375px screen",
        "Reads like a human wrote it in 2 minutes",
        "...10 more in the PDF",
      ] },
    ],
  },
  {
    slug: "0-to-5-meetings-30-days",
    cat: "Playbooks",
    title: "From 0 → 5 meetings/mo in 30 days",
    desc: "Week-by-week plan for founders running outbound themselves. Tools, lists, copy, cadence, and the exact daily 90-minute block.",
    cta: "Read playbook",
    meta: "15 min read",
    tag: "New",
    reads: "2.8k reads",
    whatsInside: [
      "Week-by-week task list",
      "Daily 90-minute block — what to do each day",
      "Tool stack (free + paid)",
      "Realistic targets per week",
    ],
    body: [
      { type: "h2", text: "Week 1 — setup" },
      { type: "list", items: [
        "Buy a fresh sending domain.",
        "Set up SPF / DKIM / DMARC.",
        "Start warmup tool.",
        "Write ICP one-pager.",
        "Build first 100-account list.",
      ] },
      { type: "h2", text: "Week 2 — copy + first sends" },
      { type: "list", items: [
        "Write 3-line opener + 4 follow-ups.",
        "Send 20/day, mon-fri.",
        "No tweaks until 100 sent.",
      ] },
      { type: "h2", text: "Week 3-4 — iterate" },
      { type: "p", text: "By end of week 4 you should have your first 2-3 meetings booked. The playbook covers exactly what to change if you don't." },
    ],
  },
  {
    slug: "linkedin-cold-opener-pack",
    cat: "Templates",
    title: "LinkedIn DM cold opener pack",
    desc: "12 LinkedIn opener templates that don't sound like every other founder pitching their seed round. With response screenshots.",
    cta: "Copy openers",
    meta: "Google Doc",
    reads: "4.6k copies",
    whatsInside: [
      "12 opener templates",
      "Response-rate data per template",
      "Screenshots of real replies",
      "Connection-request copy that gets accepted 70%+",
    ],
    body: [
      { type: "h2", text: "Why most LinkedIn DMs fail" },
      { type: "p", text: "They open with 'Hi {firstName}, I came across your profile' and end with a calendar link. The buyer has seen this 200 times this month. The pack inside has 12 patterns that break that — comment-first, peer-reference, and the 'just-curious' opener that pulls the highest reply rate." },
    ],
  },
];

export const CATS: ("All" | Cat)[] = ["All", "Templates", "Teardowns", "Playbooks", "Tools", "Checklists"];

export const CAT_COLOR: Record<Cat, string> = {
  Templates: "var(--secondary)",
  Teardowns: "var(--primary)",
  Playbooks: "color-mix(in oklab, var(--primary) 70%, var(--secondary))",
  Tools: "var(--accent)",
  Checklists: "color-mix(in oklab, var(--secondary) 60%, var(--accent))",
};

export const TAG_COLOR: Record<NonNullable<Resource["tag"]>, string> = {
  New: "var(--secondary)",
  Popular: "var(--primary)",
  Updated: "var(--accent)",
};
