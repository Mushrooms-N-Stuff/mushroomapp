import Link from "next/link";
import Image from "next/image";

const columns = [
  {
    heading: "Explore",
    links: [
      { href: "/mushrooms", label: "Mushrooms" },
      { href: "/health-goals", label: "Health Goals" },
      { href: "/research-library", label: "Research Library" },
      { href: "/stacks", label: "Stacks" },
    ],
  },
  {
    heading: "Learn",
    links: [
      { href: "/guides/beginners-guide", label: "Beginner's Guide" },
      { href: "/guides/choose-supplement", label: "Choose a Supplement" },
      { href: "/guides/dosage", label: "Dosage Guide" },
      { href: "/guides/mushrooms-vs-coffee", label: "Mushrooms vs. Coffee" },
    ],
  },
  {
    heading: "Company",
    links: [
      { href: "/about", label: "About" },
      { href: "/methodology", label: "Methodology" },
      { href: "/contact", label: "Contact" },
      { href: "/newsletter", label: "Newsletter" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { href: "/privacy", label: "Privacy" },
      { href: "/affiliate-disclosure", label: "Affiliate Disclosure" },
      { href: "/terms", label: "Terms" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="mt-32 bg-forest text-cream">
      <div className="container-editorial py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          <div className="lg:col-span-4">
            <Link href="/" aria-label="Mushrooms & Stuff home" className="inline-block">
              <Image
                src="/brand/logo-horizontal-cream.png"
                alt="Mushrooms & Stuff"
                width={1500}
                height={600}
                className="w-auto h-20"
              />
            </Link>
            <p className="mt-6 max-w-sm text-cream/70 text-[0.95rem] leading-relaxed">
              Scientific clarity for better health decisions. We translate research
              on functional mushrooms into simple, actionable insights.
            </p>
            <p className="mt-8 eyebrow !text-cream/50">Read the research, skip the hype</p>
          </div>

          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            {columns.map((col) => (
              <div key={col.heading}>
                <h4 className="font-sans text-[0.72rem] uppercase tracking-eyebrow text-cream/50 font-medium !text-cream/50">
                  {col.heading}
                </h4>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-[0.92rem] text-cream/80 hover:text-gold transition-colors duration-200"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-cream/10 flex flex-col md:flex-row gap-4 md:items-center md:justify-between text-[0.82rem] text-cream/50">
          <p>© {new Date().getFullYear()} Mushrooms &amp; Stuff. All rights reserved.</p>
          <p className="max-w-md md:text-right">
            Editorial content. Not medical advice. Always consult a qualified
            healthcare professional.
          </p>
        </div>
      </div>
    </footer>
  );
}
