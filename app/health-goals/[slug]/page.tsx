import { notFound } from "next/navigation";
import PageShell from "@/components/PageShell";
import { healthGoals, mushrooms, articles } from "@/lib/content";
import ArticleCard from "@/components/ArticleCard";
import Link from "next/link";
import { ArrowRightIcon } from "@/components/Icons";

export function generateStaticParams() {
  return healthGoals.map((g) => ({ slug: g.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const g = healthGoals.find((x) => x.slug === params.slug);
  if (!g) return {};
  return { title: g.title, description: g.description };
}

export default function HealthGoalPage({ params }: { params: { slug: string } }) {
  const g = healthGoals.find((x) => x.slug === params.slug);
  if (!g) notFound();

  const relatedMushrooms = mushrooms.filter((m) =>
    m.primaryGoals.includes(g.slug),
  );
  const relatedArticles = articles.filter((a) => a.goal === g.slug);

  return (
    <PageShell
      eyebrow="Health goal"
      title={g.title}
      description={g.description}
      backHref="/health-goals"
      backLabel="All health goals"
    >
      <div className="max-w-content space-y-16">
        {relatedMushrooms.length > 0 && (
          <section>
            <h2 className="font-serif text-h1 text-forest">Mushrooms for {g.title.toLowerCase()}</h2>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {relatedMushrooms.map((m) => (
                <Link
                  key={m.slug}
                  href={`/mushrooms/${m.slug}`}
                  className="card card-hover p-6 group"
                >
                  <p className="font-serif italic text-[0.82rem] text-charcoal/50">
                    {m.latin}
                  </p>
                  <h3 className="mt-2 font-serif text-[1.2rem] text-forest">
                    {m.name}
                  </h3>
                  <p className="mt-2 text-[0.9rem] leading-relaxed text-charcoal/70">
                    {m.short}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-[0.82rem] text-forest group-hover:translate-x-0.5 transition-transform">
                    Explore <ArrowRightIcon size={14} />
                  </span>
                </Link>
              ))}
            </div>
          </section>
        )}

        {relatedArticles.length > 0 && (
          <section>
            <h2 className="font-serif text-h1 text-forest">Research on {g.title.toLowerCase()}</h2>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
              {relatedArticles.map((a) => (
                <ArticleCard key={a.slug} article={a} />
              ))}
            </div>
          </section>
        )}
      </div>
    </PageShell>
  );
}
