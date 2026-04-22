import Link from "next/link";
import { ArrowRightIcon } from "./Icons";

const pillars = [
  {
    k: "Peer-reviewed sources",
    v: "Every claim is traceable to published research, studies, meta-analyses, systematic reviews.",
  },
  {
    k: "Plain-language summaries",
    v: "We summarize findings without jargon, without hype, and without overstating the evidence.",
  },
  {
    k: "Transparent affiliations",
    v: "We disclose affiliate relationships openly and only recommend products we've independently vetted.",
  },
];

export default function TrustSection() {
  return (
    <section className="container-editorial pb-24 lg:pb-32">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
        <div className="lg:col-span-5 lg:sticky lg:top-28">
          <p className="eyebrow mb-5">Our methodology</p>
          <h2 className="font-serif text-h1 text-forest">
            Our content is based on peer-reviewed research.
          </h2>
          <p className="mt-5 text-[1.05rem] leading-relaxed text-charcoal/70">
            We take the science seriously. Here's how we decide what to publish,
            what to recommend, and what to leave out.
          </p>
          <Link href="/methodology" className="mt-8 btn-ghost">
            Read our full methodology
            <ArrowRightIcon size={16} />
          </Link>
        </div>

        <div className="lg:col-span-7 divide-y divide-forest/[0.08]">
          {pillars.map((p, i) => (
            <div key={p.k} className="py-7 first:pt-0 flex gap-6">
              <span className="font-serif text-[1.75rem] text-gold leading-none w-10 shrink-0">
                0{i + 1}
              </span>
              <div>
                <h3 className="font-serif text-[1.2rem] text-forest">{p.k}</h3>
                <p className="mt-2 text-[0.98rem] leading-relaxed text-charcoal/70">
                  {p.v}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
