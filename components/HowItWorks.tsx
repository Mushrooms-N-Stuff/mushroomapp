import SectionHeader from "./SectionHeader";
import { ResearchIcon, TranslateIcon, GuideIcon } from "./Icons";

const steps = [
  {
    n: "01",
    Icon: ResearchIcon,
    title: "We analyze scientific research",
    body:
      "We read peer-reviewed studies, meta-analyses, and clinical trials across the functional mushroom literature.",
  },
  {
    n: "02",
    Icon: TranslateIcon,
    title: "We translate findings into clear insights",
    body:
      "We distill what the evidence actually says into plain language — without hype, hedging, or academic jargon.",
  },
  {
    n: "03",
    Icon: GuideIcon,
    title: "We guide you to quality supplements",
    body:
      "When the research warrants it, we recommend products we've vetted for sourcing, extraction, and testing.",
  },
];

export default function HowItWorks() {
  return (
    <section className="container-editorial py-24 lg:py-32">
      <SectionHeader
        eyebrow="How it works"
        title="A simple, transparent process."
        description="We read the research so you don't have to — then we show our work."
      />

      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
        {steps.map(({ n, Icon, title, body }, idx) => (
          <div key={n} className="relative">
            {idx !== steps.length - 1 && (
              <div className="hidden md:block absolute top-8 left-[calc(100%-1rem)] w-full h-px bg-forest/10" aria-hidden />
            )}
            <div className="relative w-16 h-16 rounded-full bg-cream border border-forest/10 flex items-center justify-center text-forest">
              <Icon size={24} />
              <span className="absolute -top-2 -right-2 font-serif text-[0.7rem] text-gold bg-cream px-1.5 rounded-full border border-gold/30">
                {n}
              </span>
            </div>
            <h3 className="mt-6 font-serif text-[1.25rem] text-forest leading-snug">
              {title}
            </h3>
            <p className="mt-3 text-[0.98rem] leading-relaxed text-charcoal/70">
              {body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
