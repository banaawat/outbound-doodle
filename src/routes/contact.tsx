import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageShell } from "@/components/PageShell";

const CONTACT_TITLE = "Contact Banaawat — Book a Free Outbound Strategy Call";
const CONTACT_DESC = "Book a free 20-minute strategy call with Vansh. Outbound sales, cold email, and pipeline building for B2B SaaS founders in India. Reply within 24 hours.";
const OG_IMAGE = "https://banaawat.com/og-image.png";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: CONTACT_TITLE },
      { name: "description", content: CONTACT_DESC },
      { property: "og:title", content: CONTACT_TITLE },
      { property: "og:description", content: CONTACT_DESC },
      { property: "og:url", content: "https://banaawat.com/contact" },
      { property: "og:image", content: OG_IMAGE },
      { name: "twitter:title", content: CONTACT_TITLE },
      { name: "twitter:description", content: CONTACT_DESC },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [
      { rel: "canonical", href: "https://banaawat.com/contact" },
    ],
  }),
  component: Contact,
});

type Status = "idle" | "sending" | "success" | "error";

async function submitContact(data: Record<string, string>) {
  await Promise.allSettled([
    fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ access_key: "c542e371-4351-4878-9725-ce28c7995d0c", ...data }),
    }),
    fetch("https://script.google.com/macros/s/AKfycbxdcZ2swUxMnrsqGb_DRSofVQxo0HH-1fJDVlUheGXDV61qPAs5fHpfIGlRgQS8MGLf/exec", {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }),
  ]);
}

function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const fd = new FormData(e.currentTarget);
    try {
      await submitContact({
        name: fd.get("name") as string,
        company: fd.get("company") as string,
        email: fd.get("email") as string,
        service: fd.get("service") as string,
        message: fd.get("message") as string,
      });
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <PageShell>
      <section className="max-w-5xl mx-auto px-5 sm:px-8 pt-16 pb-10">
        <h1 className="font-display text-5xl sm:text-7xl">
          Let's talk <span className="squiggle">pipeline</span>.
        </h1>
      </section>

      <section className="max-w-5xl mx-auto px-5 sm:px-8 pb-24 grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="font-display text-3xl mb-4">Best for:</h2>
          <ul className="space-y-3 text-lg">
            <li className="flex gap-3"><span className="text-secondary">✦</span> B2B SaaS companies in India</li>
            <li className="flex gap-3"><span className="text-primary">✦</span> Founders with a product but no outbound motion</li>
            <li className="flex gap-3"><span className="text-secondary">✦</span> Sales teams who need more pipeline, not more advice</li>
          </ul>

          <div className="mt-8">
            <span className="sticker sticker-orange">Usually reply within 24 hours ⚡</span>
          </div>

          <div className="mt-10 space-y-3">
            <p className="text-foreground/80">
              <span className="text-muted-foreground text-sm block">Email</span>
              <a href="mailto:vansh@example.com" className="font-display text-2xl text-primary squiggle">vansh@example.com</a>
            </p>
            <p className="text-foreground/80">
              <span className="text-muted-foreground text-sm block">LinkedIn</span>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="font-display text-2xl text-primary squiggle">/in/vansh</a>
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="doodle-card p-7 sm:p-8 space-y-4">
          {status === "success" ? (
            <div className="py-12 text-center">
              <div className="text-6xl mb-3">📬</div>
              <p className="font-display text-3xl">Sent! I'll reply within 24h.</p>
            </div>
          ) : (
            <>
              <Field label="Name"><input required name="name" className="form-input" /></Field>
              <Field label="Company"><input required name="company" className="form-input" /></Field>
              <Field label="Email"><input required type="email" name="email" className="form-input" /></Field>
              <Field label="What do you need?">
                <select name="service" className="form-input" defaultValue="">
                  <option value="" disabled>Pick one…</option>
                  <option>Cold Email Campaigns</option>
                  <option>Meeting Setting</option>
                  <option>TAM Mapping</option>
                  <option>Lead Generation</option>
                  <option>Email Copywriting</option>
                  <option>Not Sure Yet</option>
                </select>
              </Field>
              <Field label="Message">
                <textarea required name="message" rows={4} className="form-input" />
              </Field>
              {status === "error" && (
                <p className="text-sm text-red-600">Something went wrong — try emailing me directly.</p>
              )}
              <button
                type="submit"
                disabled={status === "sending"}
                className="btn-doodle btn-orange font-display text-xl w-full justify-center disabled:opacity-60"
              >
                {status === "sending" ? "Sending…" : "Send it →"}
              </button>
            </>
          )}
        </form>
      </section>

      <style>{`
        .form-input {
          width: 100%;
          padding: 0.7rem 0.85rem;
          border: 2px dashed var(--ink);
          border-radius: 10px;
          background: var(--background);
          font-family: var(--font-sans);
          font-size: 1rem;
          outline: none;
          transition: box-shadow 150ms;
        }
        .form-input:focus { box-shadow: 3px 3px 0 var(--primary); }
      `}</style>
    </PageShell>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="font-display text-xl block mb-1">{label}</span>
      {children}
    </label>
  );
}
