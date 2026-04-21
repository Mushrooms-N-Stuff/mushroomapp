import Link from "next/link";
import PageShell from "@/components/PageShell";
import { mushrooms } from "@/lib/content";
import { ArrowRightIcon } from "@/components/Icons";

export const metadata = { title: "Mushrooms" };

export default function MushroomsIndex() {
  return (
    <PageShell
      eyebrow="Library"
      title="Functional mushrooms, one by one."
      description="Evidence-based overviews of the most researched functional mushrooms — mechanisms, dosage, safety, and what the studies actually show."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-content">
        {mushrooms.map((m) => (
          <Link
            key={m.slug}
            href={`/mushrooms/${m.slug}`}
            className="card card-hover p-7 group"
          >
            <p className="font-serif italic text-[0.85rem] text-charcoal/50">
              {m.latin}
            </p>
            <h2 className="mt-2 font-serif text-[1.35rem] text-forest leading-snug">
              {m.name}
            </h2>
            <p className="mt-3 text-[0.95rem] leading-relaxed text-charcoal/70">
              {m.short}
            </p>
            <span className="mt-6 inline-flex items-center gap-1.5 text-[0.85rem] font-medium text-forest group-hover:translate-x-0.5 transition-transform">
              Explore
              <ArrowRightIcon size={14} />
            </span>
          </Link>
        ))}
      </div>
    </PageShell>
  );
}
