import Link from "next/link";
import { notFound } from "next/navigation";
import PageShell from "@/components/PageShell";
import JsonLd from "@/components/JsonLd";
import { comparisons } from "@/lib/comparisons";
import {
  articleSchema,
  faqSchema,
  breadcrumbSchema,
} from "@/lib/seo";

export function generateStaticParams() {
  return comparisons.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const c = comparisons.find((x) => x.slug === params.slug);
  if (!c) return {};
  return {
    title: `${c.title}: Evidence-Based Comparison`,
    description: c.metaDescription,
    alternates: { canonical: `/compare/${c.slug}` },
    openGraph: {
      title: c.title,
      description: c.metaDescription,
      url: `/compare/${c.slug}`,
      type: "article",
    },
  };
}

export default function ComparisonDetail({
  params,
}: {
  params: { slug: string };
}) {
  const c = comparisons.find((x) => x.slug === params.slug);
  if (!c) notFound();

  const pageUrl = `/compare/${c.slug}`;

  return (
    <>
      <JsonLd
        data={[
          articleSchema({
            headline: `${c.title}: Evidence-Based Comparison`,
            description: c.metaDescription,
            url: pageUrl,
          }),
          faqSchema(c.faqs),
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Compare", url: "/compare" },
            { name: c.title, url: pageUrl },
          ]),
        ]}
      />

      <PageShell
        eyebrow="Comparison"
        title={c.title}
        description={c.subtitle}
        backHref="/compare"
        backLabel="All comparisons"
      >
        <div className="max-w-content">
          {/* Definition-first opener */}
          <div className="max-w-3xl">
            <p className="text-[1.125rem] leading-relaxed text-charcoal/80">
              {c.geoIntro}
            </p>
          </div>

          {/* TL;DR, the direct answer AI engines love to cite */}
          <section
            aria-labelledby="tldr-heading"
            className="mt-12 p-8 rounded-2xl bg-sand/70 border border-forest/[0.08] max-w-3xl"
          >
            <h2 id="tldr-heading" className="eyebrow mb-4">
              The short answer
            </h2>
            <p className="text-[1rem] leading-relaxed text-charcoal/80">
              {c.tldr}
            </p>
          </section>

          {/* Subject cards */}
          <section className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-7 rounded-2xl bg-cream border border-forest/[0.08]">
              <p className="eyebrow mb-2">{c.left.latin ?? "Option A"}</p>
              <h3 className="font-serif text-[1.5rem] text-forest leading-snug">
                {c.left.name}
              </h3>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-charcoal/70">
                {c.left.oneLiner}
              </p>
              {c.left.href && (
                <Link
                  href={c.left.href}
                  className="mt-5 inline-block text-[0.88rem] text-forest underline decoration-forest/30 underline-offset-4 hover:decoration-forest transition-colors"
                >
                  Read the full {c.left.name} guide →
                </Link>
              )}
            </div>
            <div className="p-7 rounded-2xl bg-cream border border-forest/[0.08]">
              <p className="eyebrow mb-2">{c.right.latin ?? "Option B"}</p>
              <h3 className="font-serif text-[1.5rem] text-forest leading-snug">
                {c.right.name}
              </h3>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-charcoal/70">
                {c.right.oneLiner}
              </p>
              {c.right.href && (
                <Link
                  href={c.right.href}
                  className="mt-5 inline-block text-[0.88rem] text-forest underline decoration-forest/30 underline-offset-4 hover:decoration-forest transition-colors"
                >
                  Read the full {c.right.name} guide →
                </Link>
              )}
            </div>
          </section>

          {/* Comparison table, structured for AI extraction */}
          <section
            aria-labelledby="compare-table-heading"
            className="mt-16"
          >
            <h2
              id="compare-table-heading"
              className="font-serif text-h2 text-forest"
            >
              Side-by-side comparison
            </h2>
            <div className="mt-6 overflow-x-auto rounded-2xl border border-forest/[0.12]">
              <table className="w-full border-collapse text-left">
                <thead className="bg-sand/50">
                  <tr>
                    <th
                      scope="col"
                      className="p-5 text-[0.78rem] uppercase tracking-eyebrow text-forest/70 font-normal"
                    >
                      Attribute
                    </th>
                    <th
                      scope="col"
                      className="p-5 text-[0.88rem] text-forest font-medium border-l border-forest/[0.08]"
                    >
                      {c.left.name}
                    </th>
                    <th
                      scope="col"
                      className="p-5 text-[0.88rem] text-forest font-medium border-l border-forest/[0.08]"
                    >
                      {c.right.name}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {c.rows.map((row, i) => (
                    <tr
                      key={i}
                      className="border-t border-forest/[0.08] align-top"
                    >
                      <th
                        scope="row"
                        className="p-5 text-[0.88rem] text-charcoal/80 font-medium"
                      >
                        {row.attribute}
                      </th>
                      <td className="p-5 text-[0.95rem] leading-relaxed text-charcoal/75 border-l border-forest/[0.08]">
                        {row.left}
                      </td>
                      <td className="p-5 text-[0.95rem] leading-relaxed text-charcoal/75 border-l border-forest/[0.08]">
                        {row.right}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* When to choose which */}
          <section className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-7 rounded-2xl bg-cream border border-forest/[0.08]">
              <h3 className="font-serif text-[1.25rem] text-forest leading-snug">
                Choose {c.left.name} if…
              </h3>
              <ul className="mt-5 space-y-3">
                {c.chooseLeft.map((item, i) => (
                  <li
                    key={i}
                    className="flex gap-3 text-[0.95rem] leading-relaxed text-charcoal/80"
                  >
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-forest shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-7 rounded-2xl bg-cream border border-forest/[0.08]">
              <h3 className="font-serif text-[1.25rem] text-forest leading-snug">
                Choose {c.right.name} if…
              </h3>
              <ul className="mt-5 space-y-3">
                {c.chooseRight.map((item, i) => (
                  <li
                    key={i}
                    className="flex gap-3 text-[0.95rem] leading-relaxed text-charcoal/80"
                  >
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-forest shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Can you take them together */}
          <section
            aria-labelledby="together-heading"
            className="mt-16 max-w-3xl"
          >
            <h2
              id="together-heading"
              className="font-serif text-h2 text-forest"
            >
              Can you take them together?
            </h2>
            <p className="mt-5 text-[1rem] leading-relaxed text-charcoal/80">
              {c.together}
            </p>
          </section>

          {/* FAQs */}
          <section aria-labelledby="faq-heading" className="mt-16 max-w-3xl">
            <h2
              id="faq-heading"
              className="font-serif text-h2 text-forest"
            >
              Frequently asked questions
            </h2>
            <div className="mt-8 space-y-8">
              {c.faqs.map((f, i) => (
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

          {/* Other comparisons */}
          <section className="mt-20">
            <h2 className="font-serif text-h2 text-forest">
              Other comparisons
            </h2>
            <div className="mt-6 flex flex-wrap gap-3">
              {comparisons
                .filter((x) => x.slug !== c.slug)
                .map((x) => (
                  <Link
                    key={x.slug}
                    href={`/compare/${x.slug}`}
                    className="tag bg-forest/[0.06] text-forest hover:bg-forest hover:text-cream transition-colors"
                  >
                    {x.title}
                  </Link>
                ))}
            </div>
          </section>
        </div>
      </PageShell>
    </>
  );
}
