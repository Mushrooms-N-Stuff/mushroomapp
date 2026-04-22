import Link from "next/link";
import { ArrowRightIcon } from "./Icons";

export default function Hero() {
  return (
    <section className="relative overflow-hidden hero-gradient grain">
      <div className="container-editorial relative pt-16 pb-24 lg:pt-28 lg:pb-36">
        <div className="max-w-4xl">
          <p className="eyebrow mb-6">
            <span className="inline-flex items-center gap-2">
              <span className="w-6 h-px bg-gold" />
              Evidence-based functional mushrooms
            </span>
          </p>

          <h1 className="font-serif text-hero text-forest max-w-[18ch]">
            Functional mushrooms, explained by the research.
          </h1>

          <p className="mt-7 max-w-2xl text-[1.125rem] leading-relaxed text-charcoal/75">
            Evidence-based guidance on Lion&rsquo;s Mane, Reishi, Cordyceps,
            Chaga, and Turkey Tail, for focus, stress, energy, immunity,
            and longevity. Peer-reviewed science, translated clearly, with no
            hype.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link href="/mushrooms" className="btn-primary">
              Explore Mushrooms
              <ArrowRightIcon size={16} className="ml-2" />
            </Link>
            <Link href="/health-goals" className="btn-secondary">
              Browse by Health Goal
            </Link>
          </div>

          {/* Small credibility strip, reinforces trust without being loud */}
          <div className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-3 text-[0.82rem] text-charcoal/55">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-sage" />
              Peer-reviewed sources
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-sage" />
              Plain-language summaries
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-sage" />
              Honest affiliate guidance
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
