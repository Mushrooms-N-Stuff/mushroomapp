import Link from "next/link";
import { notFound } from "next/navigation";
import PageShell from "@/components/PageShell";
import { mushrooms, articles } from "@/lib/content";
import ArticleCard from "@/components/ArticleCard";

export function generateStaticParams() {
  return mushrooms.map((m) => ({ slug: m.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const m = mushrooms.find((x) => x.slug === params.slug);
  if (!m) return {};
  return {
    title: m.name,
    description: m.short,
  };
}

export default function MushroomDetail({
  params,
}: {
  params: { slug: string };
}) {
  const m = mushrooms.find((x) => x.slug === params.slug);
  if (!m) notFound();

  const related = articles.filter((a) => a.mushroom === m.slug);

  return (
    <PageShell
      eyebrow={m.latin}
      title={m.name}
      description={m.short}
      backHref="/mushrooms"
      backLabel="All mushrooms"
    >
      <div className="max-w-content">
        <div className="p-8 rounded-2xl bg-sand/70 border border-forest/[0.08] max-w-3xl">
          <p className="eyebrow mb-2">Known for</p>
          <p className="font-serif text-[1.5rem] text-forest leading-snug">
            {m.tagline}
          </p>
          <p className="mt-4 text-[1rem] leading-relaxed text-charcoal/70">
            This is the hub page for {m.name}. Full evidence-based overview
            coming soon — in the meantime, explore the articles and related
            resources below.
          </p>
        </div>

        {related.length > 0 && (
          <div className="mt-16">
            <h2 className="font-serif text-h1 text-forest">
              Articles on {m.name}
            </h2>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
              {related.map((a) => (
                <ArticleCard key={a.slug} article={a} />
              ))}
            </div>
          </div>
        )}

        <div className="mt-16 flex flex-wrap gap-3">
          {m.primaryGoals.map((g) => (
            <Link
              key={g}
              href={`/health-goals/${g}`}
              className="tag bg-forest/[0.06] text-forest hover:bg-forest hover:text-cream transition-colors"
            >
              Explore {g}
            </Link>
          ))}
        </div>
      </div>
    </PageShell>
  );
}
