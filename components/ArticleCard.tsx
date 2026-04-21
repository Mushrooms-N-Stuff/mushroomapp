import Link from "next/link";
import { Article } from "@/lib/content";
import { ArrowRightIcon } from "./Icons";

type Props = {
  article: Article;
  size?: "default" | "feature";
};

export default function ArticleCard({ article, size = "default" }: Props) {
  const isFeature = size === "feature";
  return (
    <Link
      href={`/articles/${article.slug}`}
      className={`card card-hover group flex flex-col p-7 ${
        isFeature ? "md:col-span-2 md:p-10" : ""
      }`}
    >
      <div className="flex items-center gap-3">
        <span className="tag bg-forest/[0.06] text-forest/80">{article.category}</span>
        <span className="text-[0.78rem] text-charcoal/45">{article.readingTime}</span>
      </div>

      <h3
        className={`mt-6 font-serif text-forest leading-snug ${
          isFeature ? "text-[1.75rem]" : "text-[1.2rem]"
        }`}
      >
        {article.title}
      </h3>

      <p className="mt-3 text-[0.95rem] leading-relaxed text-charcoal/70 flex-1">
        {article.summary}
      </p>

      <span className="mt-6 inline-flex items-center gap-1.5 text-[0.85rem] font-medium text-forest transition-transform duration-300 group-hover:translate-x-0.5">
        Read article
        <ArrowRightIcon size={14} />
      </span>
    </Link>
  );
}
