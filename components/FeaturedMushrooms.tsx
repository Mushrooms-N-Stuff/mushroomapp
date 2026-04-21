import Link from "next/link";
import SectionHeader from "./SectionHeader";
import { mushrooms } from "@/lib/content";
import { ArrowRightIcon } from "./Icons";

export default function FeaturedMushrooms() {
  return (
    <section className="bg-sand/60 border-y border-forest/[0.06]">
      <div className="container-editorial py-24 lg:py-32">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <SectionHeader
            eyebrow="Featured mushrooms"
            title="Five functional mushrooms, grounded in evidence."
            description="Start with the species that have the deepest research base and the clearest use cases."
          />
          <Link href="/mushrooms" className="btn-ghost">
            View all mushrooms
            <ArrowRightIcon size={16} />
          </Link>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {mushrooms.map((m, i) => (
            <Link
              key={m.slug}
              href={`/mushrooms/${m.slug}`}
              className="card card-hover group p-7 flex flex-col justify-between min-h-[260px]"
            >
              <div className="flex items-start justify-between">
                <span className="font-serif text-[2.5rem] text-forest/15 leading-none">
                  0{i + 1}
                </span>
                <span className="tag bg-forest/[0.04] text-forest/60">
                  {m.primaryGoals[0]}
                </span>
              </div>

              <div className="mt-10">
                <h3 className="font-serif text-[1.25rem] text-forest leading-tight">
                  {m.name}
                </h3>
                <p className="mt-1 font-serif italic text-[0.82rem] text-charcoal/50">
                  {m.latin}
                </p>
                <p className="mt-4 text-[0.9rem] leading-relaxed text-charcoal/70">
                  {m.short}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-forest/[0.08] flex items-center justify-between">
                <span className="eyebrow">{m.tagline}</span>
                <ArrowRightIcon
                  size={14}
                  className="text-forest/40 transition-all duration-300 group-hover:translate-x-1 group-hover:text-forest"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
