import Link from "next/link";
import PageShell from "@/components/PageShell";
import { stacks } from "@/lib/content";
import { ArrowRightIcon } from "@/components/Icons";

export const metadata = { title: "Stacks" };

export default function StacksIndex() {
  return (
    <PageShell
      eyebrow="Curated stacks"
      title="Thoughtful combinations, one goal at a time."
      description="Each stack is anchored by a mushroom with the strongest research for that outcome."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-content">
        {stacks.map((s) => (
          <Link key={s.slug} href={`/stacks/${s.slug}`} className="card card-hover p-8 group">
            <p className="eyebrow mb-3">{s.base}</p>
            <h2 className="font-serif text-[1.35rem] text-forest leading-snug">
              {s.name}
            </h2>
            <p className="mt-3 text-[0.95rem] leading-relaxed text-charcoal/70">
              {s.description}
            </p>
            <span className="mt-6 inline-flex items-center gap-1.5 text-[0.85rem] font-medium text-forest group-hover:translate-x-0.5 transition-transform">
              Explore stack <ArrowRightIcon size={14} />
            </span>
          </Link>
        ))}
      </div>
    </PageShell>
  );
}
