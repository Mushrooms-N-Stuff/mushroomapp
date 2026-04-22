import Link from "next/link";
import PageShell from "@/components/PageShell";
import JsonLd from "@/components/JsonLd";
import { comparisons } from "@/lib/comparisons";
import { breadcrumbSchema } from "@/lib/seo";

export const metadata = {
  title: "Compare — Functional Mushroom Comparisons",
  description:
    "Side-by-side, evidence-based comparisons of functional mushrooms and supplements — Lion's Mane vs Reishi, Cordyceps vs caffeine, Reishi vs ashwagandha, and more.",
  alternates: { canonical: "/compare" },
};

export default function ComparePage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Compare", url: "/compare" },
        ])}
      />
      <PageShell
        eyebrow="Compare"
        title="Mushroom comparisons, side by side."
        description="Evidence-based comparisons for the questions real people ask — which mushroom fits which goal, and how to choose between them."
      >
        <div className="max-w-content">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {comparisons.map((c) => (
              <Link
                key={c.slug}
                href={`/compare/${c.slug}`}
                className="group block p-7 rounded-2xl bg-sand/70 border border-forest/[0.08] hover:border-forest/30 transition-colors"
              >
                <p className="eyebrow mb-3">
                  {c.left.name} <span className="opacity-60">vs</span>{" "}
                  {c.right.name}
                </p>
                <h2 className="font-serif text-[1.5rem] text-forest leading-snug">
                  {c.title}
                </h2>
                <p className="mt-3 text-[1rem] leading-relaxed text-charcoal/70">
                  {c.subtitle}
                </p>
                <p className="mt-5 text-[0.88rem] text-forest/80 group-hover:text-forest transition-colors">
                  Read comparison →
                </p>
              </Link>
            ))}
          </div>
        </div>
      </PageShell>
    </>
  );
}
