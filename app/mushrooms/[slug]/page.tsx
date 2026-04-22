import Link from "next/link";
import { notFound } from "next/navigation";
import PageShell from "@/components/PageShell";
import { mushrooms, articles, healthGoals } from "@/lib/content";
import ArticleCard from "@/components/ArticleCard";
import JsonLd from "@/components/JsonLd";
import {
  articleSchema,
  faqSchema,
  breadcrumbSchema,
} from "@/lib/seo";

export function generateStaticParams() {
  return mushrooms.map((m) => ({ slug: m.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const m = mushrooms.find((x) => x.slug === params.slug);
  if (!m) return {};
  const title = `${m.name} (${m.latin}): Benefits, Research & Uses`;
  const description = m.geoIntro;
  return {
    title,
    description,
    alternates: { canonical: `/mushrooms/${m.slug}` },
    openGraph: {
      title: `${m.name} — ${m.tagline}`,
      description,
      url: `/mushrooms/${m.slug}`,
      type: "article",
    },
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
  const goals = healthGoals.filter((g) => m.primaryGoals.includes(g.slug));

  const pageUrl = `/mushrooms/${m.slug}`;

  return (
    <>
      <JsonLd
        data={[
          articleSchema({
            headline: `${m.name} (${m.latin}): Benefits, Research & Uses`,
            description: m.geoIntro,
            url: pageUrl,
          }),
          faqSchema(m.faqs),
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Mushrooms", url: "/mushrooms" },
            { name: m.name, url: pageUrl },
          ]),
        ]}
      />

      <PageShell
        eyebrow={m.latin}
        title={m.name}
        description={m.tagline}
        backHref="/mushrooms"
        backLabel="All mushrooms"
      >
        <div className="max-w-content">
          {/* GEO-optimized definition lead — first citable paragraph */}
          <div className="max-w-3xl">
            <p className="text-[1.125rem] leading-relaxed text-charcoal/80">
              {m.geoIntro}
            </p>
          </div>

          {/* Key takeaways — structured for AI extraction */}
          <section
            aria-labelledby="key-facts-heading"
            className="mt-12 p-8 rounded-2xl bg-sand/70 border border-forest/[0.08] max-w-3xl"
          >
            <h2
              id="key-facts-heading"
              className="eyebrow mb-4"
            >
              Key facts
            </h2>
            <ul className="space-y-3">
              {m.keyFacts.map((fact, i) => (
                <li
                  key={i}
                  className="flex gap-3 text-[1rem] leading-relaxed text-charcoal/80"
                >
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-forest shrink-0" />
                  <span>{fact}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Active compounds — entity signals for AI */}
          <section
            aria-labelledby="compounds-heading"
            className="mt-12 max-w-3xl"
          >
            <h2
              id="compounds-heading"
              className="font-serif text-h2 text-forest"
            >
              Active compounds
            </h2>
            <p className="mt-3 text-[1rem] leading-relaxed text-charcoal/70">
              The bioactive compounds researchers associate with {m.name}:
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {m.compounds.map((c) => (
                <span
                  key={c}
                  className="tag bg-forest/[0.06] text-forest"
                >
                  {c}
                </span>
              ))}
            </div>
          </section>

          {/* FAQ — GEO gold, matched with FAQPage schema above */}
          <section
            aria-labelledby="faq-heading"
            className="mt-16 max-w-3xl"
          >
            <h2
              id="faq-heading"
              className="font-serif text-h2 text-forest"
            >
              Frequently asked questions
            </h2>
            <div className="mt-8 space-y-8">
              {m.faqs.map((f, i) => (
                <div key={i}>
                  <h3 className="font-serif text-[1.25rem] text-forest leading-snug">
                    {f.q}
                  </h3>
                  <p className="mt-3 text-[1rem] leading-relaxed text-charcoal/75">
                    {f.a}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Related articles */}
          {related.length > 0 && (
            <section className="mt-16">
              <h2 className="font-serif text-h2 text-forest">
                Articles on {m.name}
              </h2>
              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                {related.map((a) => (
                  <ArticleCard key={a.slug} article={a} />
                ))}
              </div>
            </section>
          )}

          {/* Linked goal pillars */}
          {goals.length > 0 && (
            <section className="mt-16 max-w-3xl">
              <h2 className="font-serif text-h2 text-forest">
                Explore by health goal
              </h2>
              <div className="mt-6 flex flex-wrap gap-3">
                {goals.map((g) => (
                  <Link
                    key={g.slug}
                    href={`/health-goals/${g.slug}`}
                    className="tag bg-forest/[0.06] text-forest hover:bg-forest hover:text-cream transition-colors"
                  >
                    {g.title}
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      </PageShell>
    </>
  );
}
