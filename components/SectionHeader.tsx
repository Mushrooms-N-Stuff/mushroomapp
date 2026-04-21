import Link from "next/link";
import { ArrowRightIcon } from "./Icons";

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  cta?: { href: string; label: string };
  align?: "left" | "center";
};

export default function SectionHeader({
  eyebrow,
  title,
  description,
  cta,
  align = "left",
}: Props) {
  const alignCls = align === "center" ? "text-center mx-auto" : "";
  return (
    <div className={`max-w-3xl ${alignCls}`}>
      {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
      <h2 className="font-serif text-h1 text-forest">{title}</h2>
      {description && (
        <p className="mt-5 text-[1.05rem] leading-relaxed text-charcoal/70 max-w-2xl">
          {description}
        </p>
      )}
      {cta && (
        <div className={`mt-6 ${align === "center" ? "flex justify-center" : ""}`}>
          <Link href={cta.href} className="btn-ghost">
            {cta.label}
            <ArrowRightIcon size={16} />
          </Link>
        </div>
      )}
    </div>
  );
}
