import Link from "next/link";
import SectionHeader from "./SectionHeader";
import { stacks } from "@/lib/content";
import { ArrowRightIcon } from "./Icons";

export default function RecommendedStacks() {
  return (
    <section className="bg-forest text-cream">
      <div className="container-editorial py-24 lg:py-32">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div className="max-w-3xl">
            <p className="eyebrow !text-gold mb-4">Curated stacks</p>
            <h2 className="font-serif text-h1 !text-cream">
              Thoughtful combinations, built around one primary goal.
            </h2>
            <p className="mt-5 text-[1.05rem] leading-relaxed text-cream/70 max-w-2xl">
              Each stack is anchored by a mushroom with the strongest research for
              that outcome, and rounded out with complementary compounds.
            </p>
          </div>
          <Link href="/stacks" className="text-gold hover:text-gold/80 inline-flex items-center gap-2 text-[0.9rem] font-medium">
            View all stacks
            <ArrowRightIcon size={16} />
          </Link>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {stacks.map((s) => (
            <Link
              key={s.slug}
              href={`/stacks/${s.slug}`}
              className="group p-7 rounded-2xl border border-cream/10 bg-cream/[0.02] hover:bg-cream/[0.05] transition-all duration-500 ease-editorial hover:-translate-y-1"
            >
              <p className="text-[0.72rem] uppercase tracking-eyebrow text-gold/80 font-medium">
                {s.base}
              </p>
              <h3 className="mt-3 font-serif text-[1.35rem] !text-cream leading-snug">
                {s.name}
              </h3>
              <p className="mt-4 text-[0.92rem] leading-relaxed text-cream/65">
                {s.description}
              </p>
              <span className="mt-8 inline-flex items-center gap-1.5 text-[0.82rem] text-cream/70 group-hover:text-gold transition-colors">
                Explore stack
                <ArrowRightIcon size={13} />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
