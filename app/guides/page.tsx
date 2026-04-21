import Link from "next/link";
import PageShell from "@/components/PageShell";
import { ArrowRightIcon } from "@/components/Icons";

const guides = [
  {
    slug: "beginners-guide",
    title: "Beginner's Guide to Functional Mushrooms",
    summary: "Start here — what they are, how they work, and what to expect.",
  },
  {
    slug: "choose-supplement",
    title: "How to Choose a Quality Mushroom Supplement",
    summary: "Fruiting body vs. mycelium, beta-glucan testing, and label red flags.",
  },
  {
    slug: "dosage",
    title: "Mushroom Dosage Guide",
    summary: "Informational dosage ranges across the five most-researched species.",
  },
  {
    slug: "mushrooms-vs-coffee",
    title: "Functional Mushrooms vs. Coffee",
    summary: "When to reach for one, the other, or both — and why.",
  },
];

export const metadata = { title: "Guides" };

export default function Guides() {
  return (
    <PageShell
      eyebrow="Guides"
      title="Start here."
      description="Foundational guides covering the essentials of functional mushrooms."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-content">
        {guides.map((g) => (
          <Link
            key={g.slug}
            href={`/guides/${g.slug}`}
            className="card card-hover p-8 group"
          >
            <h2 className="font-serif text-[1.25rem] text-forest leading-snug">
              {g.title}
            </h2>
            <p className="mt-3 text-[0.95rem] leading-relaxed text-charcoal/70">
              {g.summary}
            </p>
            <span className="mt-6 inline-flex items-center gap-1.5 text-[0.85rem] font-medium text-forest group-hover:translate-x-0.5 transition-transform">
              Read guide <ArrowRightIcon size={14} />
            </span>
          </Link>
        ))}
      </div>
    </PageShell>
  );
}
