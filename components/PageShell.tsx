import Link from "next/link";
import { ArrowRightIcon } from "./Icons";

// Lightweight page shell for routes that are scaffolded but not yet fully built.
// Keeps the visual language consistent while content is being developed.

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: React.ReactNode;
  backHref?: string;
  backLabel?: string;
};

export default function PageShell({
  eyebrow,
  title,
  description,
  children,
  backHref = "/",
  backLabel = "Back to home",
}: Props) {
  return (
    <>
      <header className="hero-gradient border-b border-forest/[0.06]">
        <div className="container-editorial pt-14 pb-20 lg:pt-20 lg:pb-28">
          <div className="max-w-3xl">
            {eyebrow && <p className="eyebrow mb-5">{eyebrow}</p>}
            <h1 className="font-serif text-hero text-forest">{title}</h1>
            {description && (
              <p className="mt-6 text-[1.1rem] leading-relaxed text-charcoal/70 max-w-2xl">
                {description}
              </p>
            )}
          </div>
        </div>
      </header>
      <div className="container-editorial py-16 lg:py-24">{children}</div>
      <div className="container-editorial pb-24">
        <Link href={backHref} className="btn-ghost">
          <span className="rotate-180">
            <ArrowRightIcon size={16} />
          </span>
          {backLabel}
        </Link>
      </div>
    </>
  );
}
