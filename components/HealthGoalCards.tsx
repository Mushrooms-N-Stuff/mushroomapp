import Link from "next/link";
import SectionHeader from "./SectionHeader";
import { healthGoals } from "@/lib/content";
import { goalIconMap } from "./Icons";

export default function HealthGoalCards() {
  return (
    <section className="container-editorial py-24 lg:py-32">
      <SectionHeader
        eyebrow="Start with a goal"
        title="What are you optimizing for?"
        description="Each pillar collects the research, mushrooms, and protocols most relevant to one outcome."
      />

      <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {healthGoals.map((goal) => {
          const Icon = goalIconMap[goal.icon];
          return (
            <Link
              key={goal.slug}
              href={`/health-goals/${goal.slug}`}
              className="card card-hover group p-6 flex flex-col justify-between min-h-[190px]"
            >
              <div className="w-10 h-10 rounded-full bg-sage/20 text-forest flex items-center justify-center transition-colors duration-300 group-hover:bg-forest group-hover:text-cream">
                <Icon size={20} />
              </div>
              <div className="mt-6">
                <h3 className="font-serif text-[1.125rem] text-forest leading-snug">
                  {goal.title}
                </h3>
                <p className="mt-1.5 text-[0.82rem] text-charcoal/55">
                  {goal.short}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
