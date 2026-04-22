import Link from "next/link";
import { ArrowRightIcon, CheckIcon } from "./Icons";

export type ArticleSection = {
  id: string;
  heading: string;
};

export type ResearchHighlight = {
  summary: string;
  citation?: string;
};

export type FAQ = {
  q: string;
  a: string;
};

export type RelatedLink = {
  href: string;
  label: string;
  kind?: "mushroom" | "goal" | "guide" | "stack";
};

export type ProductRec = {
  name: string;
  brand: string;
  why: string;
  href: string;
};

export type ArticleTemplateProps = {
  eyebrow?: string;
  title: string;
  summary: string;
  category: string;
  readingTime: string;
  publishedAt?: string;
  updatedAt?: string;
  keyBenefits: string[];
  howItWorks: { title: string; body: string }[];
  whoItsFor: string[];
  dosage: { range: string; notes: string };
  safety: string[];
  researchHighlights: ResearchHighlight[];
  product: ProductRec;
  faqs: FAQ[];
  related: RelatedLink[];
};

export default function ArticleTemplate(props: ArticleTemplateProps) {
  const {
    eyebrow,
    title,
    summary,
    category,
    readingTime,
    publishedAt,
    updatedAt,
    keyBenefits,
    howItWorks,
    whoItsFor,
    dosage,
    safety,
    researchHighlights,
    product,
    faqs,
    related,
  } = props;

  const sections: ArticleSection[] = [
    { id: "quick-summary", heading: "Quick Summary" },
    { id: "key-benefits", heading: "Key Benefits" },
    { id: "how-it-works", heading: "How It Works" },
    { id: "who-its-for", heading: "Who It's For" },
    { id: "dosage", heading: "Dosage" },
    { id: "safety", heading: "Safety Considerations" },
    { id: "research", heading: "Research Highlights" },
    { id: "recommended", heading: "Recommended Product" },
    { id: "faq", heading: "FAQ" },
  ];

  // FAQPage structured data for GEO / AI surfaces
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: summary,
    datePublished: publishedAt,
    dateModified: updatedAt ?? publishedAt,
    articleSection: category,
    publisher: {
      "@type": "Organization",
      name: "Mushrooms & Stuff",
    },
  };

  return (
    <article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Article header */}
      <header className="hero-gradient border-b border-forest/[0.06]">
        <div className="container-editorial pt-14 pb-20 lg:pt-20 lg:pb-28">
          <div className="max-w-reading">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="tag bg-forest/[0.08] text-forest">{category}</span>
              {eyebrow && <span className="eyebrow">{eyebrow}</span>}
              <span className="text-[0.78rem] text-charcoal/55">{readingTime}</span>
            </div>
            <h1 className="font-serif text-display text-forest">{title}</h1>
            <p className="mt-7 text-[1.15rem] leading-relaxed text-charcoal/70">
              {summary}
            </p>
            {(publishedAt || updatedAt) && (
              <p className="mt-8 text-[0.8rem] text-charcoal/50">
                {publishedAt && <>Published {publishedAt}</>}
                {updatedAt && publishedAt && <> · </>}
                {updatedAt && <>Updated {updatedAt}</>}
              </p>
            )}
          </div>
        </div>
      </header>

      {/* Body + ToC */}
      <div className="container-editorial py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Sticky table of contents */}
          <aside className="hidden lg:block lg:col-span-3">
            <div className="sticky top-28">
              <p className="eyebrow mb-4">In this article</p>
              <ul className="space-y-2 border-l border-forest/[0.08] pl-4">
                {sections.map((s) => (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      className="text-[0.88rem] text-charcoal/60 hover:text-forest transition-colors"
                    >
                      {s.heading}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Main content */}
          <div className="lg:col-span-9 prose-article">
            {/* Quick Summary */}
            <section id="quick-summary" className="scroll-mt-28">
              <div className="rounded-2xl bg-sand/70 border border-forest/[0.06] p-7 lg:p-8">
                <p className="eyebrow mb-3">Quick summary</p>
                <p className="!mb-0 text-[1.05rem] leading-relaxed text-charcoal/85">
                  {summary}
                </p>
              </div>
            </section>

            {/* Key Benefits */}
            <section id="key-benefits" className="scroll-mt-28">
              <h2>Key Benefits</h2>
              <ul className="!space-y-3">
                {keyBenefits.map((b) => (
                  <li key={b} className="flex gap-3 !pl-0 before:hidden">
                    <span className="mt-1 text-gold shrink-0">
                      <CheckIcon size={18} />
                    </span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* How It Works */}
            <section id="how-it-works" className="scroll-mt-28">
              <h2>How It Works</h2>
              <p>
                Here's a simplified look at the mechanism of action, how the
                compounds involved are thought to produce the effects reported in
                the research.
              </p>
              <div className="mt-6 space-y-5">
                {howItWorks.map((h) => (
                  <div
                    key={h.title}
                    className="p-6 rounded-xl border border-forest/[0.08] bg-white"
                  >
                    <h3 className="!mt-0">{h.title}</h3>
                    <p className="!mb-0">{h.body}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Who It's For */}
            <section id="who-its-for" className="scroll-mt-28">
              <h2>Who It's For</h2>
              <ul>
                {whoItsFor.map((w) => <li key={w}>{w}</li>)}
              </ul>
            </section>

            {/* Dosage */}
            <section id="dosage" className="scroll-mt-28">
              <h2>Dosage</h2>
              <div className="p-6 rounded-xl border border-forest/[0.08] bg-white">
                <p className="eyebrow mb-2">General informational range</p>
                <p className="font-serif text-[1.5rem] text-forest !mb-2 leading-tight">
                  {dosage.range}
                </p>
                <p className="text-[0.95rem] !mb-0 text-charcoal/70">
                  {dosage.notes}
                </p>
              </div>
              <p className="mt-4 text-[0.85rem] text-charcoal/55">
                Informational only. Not medical advice. Consult a qualified
                healthcare professional before starting any new supplement.
              </p>
            </section>

            {/* Safety Considerations */}
            <section id="safety" className="scroll-mt-28">
              <h2>Safety Considerations</h2>
              <ul>
                {safety.map((s) => <li key={s}>{s}</li>)}
              </ul>
            </section>

            {/* Research Highlights */}
            <section id="research" className="scroll-mt-28">
              <h2>Research Highlights</h2>
              <p>
                Simplified bullet summaries of notable studies. Each item
                summarizes a single finding, follow the citations for the full
                context.
              </p>
              <div className="mt-6 space-y-4">
                {researchHighlights.map((r, i) => (
                  <div key={i} className="flex gap-4">
                    <span className="font-serif text-[1.1rem] text-gold w-6 shrink-0 pt-0.5">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <p className="!mb-1">{r.summary}</p>
                      {r.citation && (
                        <p className="text-[0.78rem] text-charcoal/50 !mb-0 font-sans italic">
                          {r.citation}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Recommended Product (affiliate) */}
            <section id="recommended" className="scroll-mt-28">
              <h2>Recommended Product</h2>
              <div className="rounded-2xl bg-forest text-cream p-8 lg:p-10 not-prose">
                <p className="text-[0.72rem] uppercase tracking-eyebrow text-gold/90 font-medium">
                  Our pick · {product.brand}
                </p>
                <h3 className="!mt-3 font-serif text-[1.75rem] !text-cream leading-tight">
                  {product.name}
                </h3>
                <p className="mt-4 text-[0.98rem] leading-relaxed text-cream/75 max-w-xl">
                  {product.why}
                </p>
                <a
                  href={product.href}
                  rel="nofollow sponsored noopener"
                  target="_blank"
                  className="mt-7 inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-gold text-forest text-sm font-medium transition-all hover:-translate-y-0.5"
                >
                  View product
                  <ArrowRightIcon size={16} />
                </a>
                <p className="mt-5 text-[0.75rem] text-cream/45">
                  Affiliate link. We may earn a commission at no cost to you.
                  See our{" "}
                  <Link href="/affiliate-disclosure" className="underline decoration-gold underline-offset-4">
                    affiliate disclosure
                  </Link>
                  .
                </p>
              </div>
            </section>

            {/* FAQ */}
            <section id="faq" className="scroll-mt-28">
              <h2>FAQ</h2>
              <div className="divide-y divide-forest/[0.08] border-y border-forest/[0.08]">
                {faqs.map((f) => (
                  <details key={f.q} className="group py-5">
                    <summary className="cursor-pointer list-none flex items-start justify-between gap-4">
                      <span className="font-serif text-[1.1rem] text-forest leading-snug">
                        {f.q}
                      </span>
                      <span className="shrink-0 mt-1 text-forest/40 transition-transform duration-300 group-open:rotate-45">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                          <path d="M12 5v14M5 12h14" />
                        </svg>
                      </span>
                    </summary>
                    <p className="mt-3 !mb-0 text-charcoal/75">{f.a}</p>
                  </details>
                ))}
              </div>
            </section>

            {/* Related / internal linking */}
            {related.length > 0 && (
              <section className="scroll-mt-28 not-prose mt-16">
                <div className="divider-rule">
                  <span className="eyebrow">Related reading</span>
                </div>
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {related.map((r) => (
                    <Link
                      key={r.href}
                      href={r.href}
                      className="group flex items-center justify-between gap-4 p-5 rounded-xl border border-forest/[0.08] bg-white hover:border-forest/25 transition-colors"
                    >
                      <div>
                        {r.kind && (
                          <p className="text-[0.68rem] uppercase tracking-eyebrow text-charcoal/45">
                            {r.kind}
                          </p>
                        )}
                        <p className="mt-1 font-serif text-[1rem] text-forest">
                          {r.label}
                        </p>
                      </div>
                      <ArrowRightIcon
                        size={16}
                        className="text-forest/40 group-hover:translate-x-0.5 group-hover:text-forest transition-all"
                      />
                    </Link>
                  ))}
                </div>
              </section>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
