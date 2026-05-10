import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { PageShell } from "@/components/PageShell";
import { RESOURCES, CAT_COLOR, TAG_COLOR, type Section, type Resource, type Cat } from "@/data/resources";
import { CanvasRenderer } from "@/components/CanvasRenderer";
import { supabase } from "@/lib/supabase";
import type { RemoteResource } from "@/lib/useResources";

export const Route = createFileRoute("/resources/$slug")({
  loader: ({ params }) => ({ slug: params.slug }),
  head: ({ params }) => {
    const r = RESOURCES.find((x) => x.slug === params.slug);
    const url = `https://banaawat.com/resources/${params.slug}`;
    const ogImage = "https://banaawat.com/og-image.png";
    if (!r) {
      return {
        meta: [{ title: `${params.slug} | Banaawat` }],
        links: [{ rel: "canonical", href: url }],
      };
    }
    return {
      meta: [
        { title: `${r.title} | Banaawat` },
        { name: "description", content: r.desc },
        { property: "og:title", content: r.title },
        { property: "og:description", content: r.desc },
        { property: "og:url", content: url },
        { property: "og:image", content: ogImage },
        { name: "twitter:title", content: r.title },
        { name: "twitter:description", content: r.desc },
        { name: "twitter:image", content: ogImage },
      ],
      links: [{ rel: "canonical", href: url }],
    };
  },
  errorComponent: ({ error }) => (
    <PageShell>
      <section className="max-w-3xl mx-auto px-5 sm:px-8 py-24 text-center">
        <h1 className="font-display text-4xl mb-4">Something broke.</h1>
        <p className="text-muted-foreground mb-6">{error.message}</p>
        <Link to="/resources" className="btn-doodle font-sans font-bold">
          ← Back to resources
        </Link>
      </section>
    </PageShell>
  ),
  notFoundComponent: () => (
    <PageShell>
      <section className="max-w-3xl mx-auto px-5 sm:px-8 py-24 text-center">
        <h1 className="font-display text-5xl mb-4">Not in the library yet.</h1>
        <p className="text-muted-foreground mb-6">That resource doesn't exist (or got renamed).</p>
        <Link to="/resources" className="btn-doodle btn-primary font-sans font-bold">
          ← Back to all resources
        </Link>
      </section>
    </PageShell>
  ),
  component: ResourcePage,
});

function mapRow(row: any): RemoteResource {
  const reads = row.reads ?? 0;
  const copies = row.copies ?? 0;
  const metricLabel =
    reads > 0 ? `${reads.toLocaleString()} reads`
    : copies > 0 ? `${copies.toLocaleString()} copies`
    : (row.meta ?? "");
  return {
    slug: row.slug ?? row.id,
    cat: row.cat ?? row.category,
    title: row.title,
    desc: row.desc ?? row.description ?? "",
    cta: row.cta ?? "Read more",
    meta: row.meta ?? metricLabel,
    tag: row.tag ?? (row.is_new ? "New" : row.popular ? "Popular" : undefined),
    reads: reads || copies || undefined,
    featured: !!row.featured,
    body: (row.body as Section[]) ?? [],
    whatsInside: row.whats_inside ?? undefined,
    faq: row.faq ?? row.faqs ?? undefined,
    isNew: !!row.is_new,
    orderIndex: row.order_index ?? undefined,
    secondaryCta: row.secondary_cta ?? null,
    secondaryCtaUrl: row.secondary_cta_url ?? null,
    canvasData: row.canvas_data ?? null,
    dateAdded: row.date_added ?? null,
    status: row.status ?? "published",
  };
}

function ResourcePage() {
  const { slug } = Route.useLoaderData() as { slug: string };
  const fallback = RESOURCES.find((x) => x.slug === slug) as Resource | undefined;
  const [r, setR] = useState<RemoteResource | Resource | null>(fallback ?? null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    async function load() {
      try {
        const { data, error } = await supabase
          .from("resources")
          .select("*")
          .eq("id", slug)
          .eq("status", "published")
          .maybeSingle();
        if (cancelled) return;
        if (error) throw error;
        if (data) setR(mapRow(data));
        else if (!fallback) setR(null);
      } catch (e) {
        console.error("Supabase fetch failed:", e);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }
    load();
    const channel = supabase
      .channel(`resource-${slug}`)
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "resources", filter: `id=eq.${slug}` },
        () => load(),
      )
      .subscribe();
    return () => {
      cancelled = true;
      supabase.removeChannel(channel);
    };
  }, [slug]);

  if (loading && !r) {
    return (
      <PageShell>
        <div className="max-w-3xl mx-auto px-5 sm:px-8 py-16 animate-pulse">
          <div className="h-4 w-24 bg-foreground/10 rounded mb-6" />
          <div className="h-12 w-3/4 bg-foreground/10 rounded mb-4" />
          <div className="h-5 w-full bg-foreground/10 rounded mb-2" />
          <div className="h-5 w-5/6 bg-foreground/10 rounded mb-6" />
          <div className="h-40 w-full bg-foreground/10 rounded" />
        </div>
      </PageShell>
    );
  }

  if (!r) {
    return (
      <PageShell>
        <section className="max-w-3xl mx-auto px-5 sm:px-8 py-24 text-center">
          <h1 className="font-display text-5xl mb-4">Not in the library yet.</h1>
          <p className="text-muted-foreground mb-6">That resource doesn't exist (or got renamed).</p>
          <Link to="/resources" className="btn-doodle btn-primary font-sans font-bold">
            ← Back to all resources
          </Link>
        </section>
      </PageShell>
    );
  }

  const remote = r as RemoteResource;
  const canvasBlocks =
    remote.canvasData && Array.isArray(remote.canvasData?.blocks)
      ? remote.canvasData.blocks
      : null;

  const related = RESOURCES.filter((x) => x.slug !== r.slug && x.cat === r.cat).slice(0, 3);

  return (
    <PageShell>
      <section
        className="border-b-2 border-dashed border-foreground/30"
        style={{ background: "color-mix(in oklab, var(--accent) 14%, white)" }}
      >
        <div className="max-w-3xl mx-auto px-5 sm:px-8 pt-12 pb-12">
          <Link
            to="/resources"
            className="text-sm font-semibold text-muted-foreground hover:text-foreground"
          >
            ← All resources
          </Link>
          <div className="flex flex-wrap items-center gap-2 mt-5 mb-4">
            <span
              className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded"
              style={{ background: CAT_COLOR[r.cat as Cat], color: r.cat === "Tools" ? "var(--ink)" : "white" }}
            >
              {r.cat}
            </span>
            {r.tag && (
              <span
                className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded border-2"
                style={{ borderColor: TAG_COLOR[r.tag as NonNullable<typeof r.tag>], color: TAG_COLOR[r.tag as NonNullable<typeof r.tag>] }}
              >
                {r.tag}
              </span>
            )}
            <span className="text-xs text-muted-foreground">{r.meta}</span>
            {r.reads && <span className="text-xs text-muted-foreground">· {r.reads}</span>}
          </div>
          <h1 className="font-serif-d text-4xl sm:text-5xl leading-[1.05] tracking-tight">
            {r.title}
          </h1>
          <p className="mt-5 text-lg text-foreground/80">{r.desc}</p>

          <div className="mt-7 flex flex-wrap gap-3">
            <a href="#" className="btn-doodle btn-primary font-sans font-bold">
              {r.cta} →
            </a>
            {remote.secondaryCta && (
              <a
                href={remote.secondaryCtaUrl ?? "#"}
                className="btn-doodle font-sans font-bold"
              >
                {remote.secondaryCta}
              </a>
            )}
            <Link to="/contact" className="btn-doodle font-sans font-bold">
              Have me run this for you
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-5 sm:px-8 py-12 grid lg:grid-cols-[1fr_220px] gap-12">
        <article className="space-y-6">
          {canvasBlocks ? (
            <CanvasRenderer blocks={canvasBlocks} />
          ) : (
            <>
              {r.whatsInside && r.whatsInside.length > 0 && (
                <div className="doodle-card p-6 bg-card not-prose">
                  <div className="font-display text-2xl mb-3">What's inside</div>
                  <ul className="space-y-2">
                    {r.whatsInside.map((it) => (
                      <li key={it} className="flex items-start gap-3 text-foreground/85">
                        <span className="mt-1 inline-flex w-5 h-5 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-bold flex-shrink-0">
                          ✓
                        </span>
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {(r.body ?? []).map((section, i) => (
                <SectionRender key={i} section={section} />
              ))}

              {r.faq && r.faq.length > 0 && (
                <div className="pt-4">
                  <h2 className="font-display text-3xl mb-4">FAQ</h2>
                  <div className="space-y-4">
                    {r.faq.map((f) => (
                      <div key={f.q} className="doodle-card-soft p-5 bg-card">
                        <div className="font-serif-d text-xl mb-1.5">{f.q}</div>
                        <p className="text-foreground/75">{f.a}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}

          <div className="doodle-card p-7 mt-8" style={{ background: "color-mix(in oklab, var(--secondary) 10%, white)" }}>
            <h3 className="font-serif-d text-2xl mb-2">
              Want this run for you instead?
            </h3>
            <p className="text-foreground/75 mb-4">
              I do this for B2B SaaS founders for a living. 20 minutes, no pitch — just figure out if it's a fit.
            </p>
            <Link to="/contact" className="btn-doodle btn-orange font-sans font-bold">
              Book a free call →
            </Link>
          </div>
        </article>

        <aside className="hidden lg:block">
          <div className="sticky top-24 space-y-4 text-sm">
            <div className="font-display text-xl">More in {r.cat}</div>
            <div className="space-y-3">
              {related.length === 0 ? (
                <p className="text-muted-foreground">More coming soon.</p>
              ) : (
                related.map((rel) => (
                  <Link
                    key={rel.slug}
                    to="/resources/$slug"
                    params={{ slug: rel.slug }}
                    className="block doodle-card-soft p-3 bg-card hover:-translate-y-0.5 transition-transform"
                  >
                    <div className="font-serif-d text-base leading-tight mb-1">{rel.title}</div>
                    <div className="text-xs text-muted-foreground">{rel.meta}</div>
                  </Link>
                ))
              )}
            </div>
          </div>
        </aside>
      </div>
    </PageShell>
  );
}

function SectionRender({ section }: { section: Section }) {
  switch (section.type) {
    case "h2":
      return <h2 className="font-display text-3xl sm:text-4xl mt-6">{section.text}</h2>;
    case "p":
      return <p className="text-lg text-foreground/85 leading-relaxed">{section.text}</p>;
    case "list":
      return (
        <ul className="space-y-2 pl-1">
          {section.items.map((it) => (
            <li key={it} className="flex items-start gap-3 text-foreground/85">
              <span className="mt-2 inline-block w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0" />
              <span>{it}</span>
            </li>
          ))}
        </ul>
      );
    case "quote":
      return (
        <blockquote
          className="doodle-card-soft p-6 italic font-serif-d text-2xl leading-snug bg-card"
          style={{ borderLeftWidth: 6, borderLeftColor: "var(--secondary)" }}
        >
          "{section.text}"
          {section.by && <div className="not-italic font-sans text-sm text-muted-foreground mt-2">— {section.by}</div>}
        </blockquote>
      );
    case "email":
      return (
        <div className="doodle-card overflow-hidden bg-card">
          <div className="px-5 py-3 border-b-2 border-dashed border-foreground/30 bg-[color-mix(in_oklab,var(--primary)_5%,white)]">
            <div className="text-[0.65rem] uppercase tracking-wider text-muted-foreground font-semibold">Subject</div>
            <div className="font-semibold">{section.subject}</div>
          </div>
          <div className="p-5 space-y-2 font-mono text-sm leading-relaxed">
            {section.lines.map((ln, i) => (
              <p key={i} className="whitespace-pre-wrap">{ln}</p>
            ))}
          </div>
          {section.reply && (
            <div className="px-5 py-4 border-t-2 border-dashed border-emerald-300 bg-emerald-50">
              <div className="text-xs font-bold uppercase tracking-wider text-emerald-700 mb-1">↩ Reply</div>
              <div className="font-mono text-sm text-foreground/85">"{section.reply}"</div>
            </div>
          )}
        </div>
      );
    case "code":
      return (
        <pre className="doodle-card-soft p-5 bg-card overflow-x-auto font-mono text-sm">
          {section.text}
        </pre>
      );
  }
}
