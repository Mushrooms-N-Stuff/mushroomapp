import Link from "next/link";
import PageShell from "@/components/PageShell";
import { healthGoals } from "@/lib/content";
import { goalIconMap, ArrowRightIcon } from "@/components/Icons";

export const metadata = { title: "Health Goals" };

export default function HealthGoalsIndex() {
  return (
    <PageShell
      eyebrow="Browse by outcome"
      title="What are you optimizing for?"
      description="Each pillar collects the mushrooms, research, and protocols most relevant to a single health goal."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-content">
        {healthGoals.map((g) => {
          const Icon = goalIconMap[g.icon];
          return (
            <Link
              key={g.slug}
              href={`/health-goals/${g.slug}`}
              className="card card-hover p-8 flex items-start gap-6 group"
            >
              <span className="w-12 h-12 rounded-full bg-sage/20 text-forest flex items-center justify-center shrink-0">
                <Icon size={22} />
              </span>
              <div className="flex-1">
                <h2 className="font-serif text-[1.35rem] text-forest leading-snug">
                  {g.title}
                </h2>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-charcoal/70">
                  {g.description}
                </p>
              </div>
              <ArrowRightIcon
                size={18}
                className="mt-2 text-forest/35 group-hover:text-forest group-hover:translate-x-0.5 transition-all"
              />
            </Link>
          );
        })}
      </div>
    </PageShell>
  );
}
