import { useEffect, useState, useCallback } from "react";
import { supabase } from "./supabase";
import { RESOURCES, type Resource, type Section } from "@/data/resources";

export type RemoteResource = Resource & {
  isNew?: boolean;
  orderIndex?: number;
  secondaryCta?: string | null;
  secondaryCtaUrl?: string | null;
  canvasData?: any | null;
  dateAdded?: string | null;
  status?: string;
};

export type PopularSearch = {
  id?: string | number;
  label: string;
  query?: string;
  orderIndex?: number;
};

const DEFAULT_POPULAR: PopularSearch[] = [
  { label: "cold email subject lines" },
  { label: "deliverability" },
  { label: "Apollo workflows" },
  { label: "Clay enrichment" },
  { label: "follow-up cadence" },
  { label: "ICP scoring" },
  { label: "founder-led outbound" },
  { label: "domain warmup" },
];

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
    whatsInside: row.whats_inside ?? row.whatsInside ?? undefined,
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

function mapSearchRow(row: any): PopularSearch {
  const label = row.label ?? row.tag ?? row.query ?? "";
  return {
    id: row.id,
    label,
    query: row.query ?? label,
    orderIndex: row.order_index ?? undefined,
  };
}

async function seedIfEmpty() {
  try {
    const { count, error } = await supabase
      .from("resources")
      .select("*", { count: "exact", head: true });
    if (error || (count ?? 0) > 0) return;
    const rows = RESOURCES.map((r, i) => ({
      slug: r.slug,
      cat: r.cat,
      title: r.title,
      desc: r.desc,
      cta: r.cta,
      meta: r.meta,
      tag: r.tag ?? null,
      reads: r.reads ?? null,
      featured: !!r.featured,
      body: r.body,
      whats_inside: r.whatsInside ?? null,
      faq: r.faq ?? null,
      is_new: r.tag === "New",
      order_index: i + 1,
      status: "published",
    }));
    await supabase.from("resources").insert(rows);
  } catch (e) {
    console.error("Supabase seed failed:", e);
  }
}

export function useResources() {
  const [resources, setResources] = useState<RemoteResource[]>(RESOURCES as RemoteResource[]);
  const [popularSearches, setPopularSearches] = useState<PopularSearch[]>(DEFAULT_POPULAR);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchAll = useCallback(async () => {
    try {
      const [{ data: rData, error: rErr }, { data: sData }] = await Promise.all([
        supabase
          .from("resources")
          .select("*")
          .eq("status", "published")
          .order("order_index", { ascending: true }),
        supabase
          .from("popular_searches")
          .select("*")
          .order("order_index", { ascending: true }),
      ]);

      if (rErr) throw rErr;

      if (!rData || rData.length === 0) {
        await seedIfEmpty();
        const { data: retry } = await supabase
          .from("resources")
          .select("*")
          .eq("status", "published")
          .order("order_index", { ascending: true });
        if (retry && retry.length) {
          setResources(retry.map(mapRow));
        } else {
          setResources(RESOURCES as RemoteResource[]);
        }
      } else {
        setResources(rData.map(mapRow));
      }

      if (sData && sData.length) {
        setPopularSearches(sData.map(mapSearchRow));
      }
      setError(null);
    } catch (e: any) {
      console.error("Supabase fetch failed:", e);
      setError(e);
      setResources(RESOURCES as RemoteResource[]);
      setPopularSearches(DEFAULT_POPULAR);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchAll();
    const channel = supabase
      .channel("resources-live")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "resources" },
        () => fetchAll(),
      )
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "popular_searches" },
        () => fetchAll(),
      )
      .subscribe();
    return () => {
      supabase.removeChannel(channel);
    };
  }, [fetchAll]);

  return { resources, popularSearches, loading, error, refetch: fetchAll };
}
