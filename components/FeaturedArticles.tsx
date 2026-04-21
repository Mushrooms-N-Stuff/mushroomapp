import Link from "next/link";
import SectionHeader from "./SectionHeader";
import ArticleCard from "./ArticleCard";
import { articles } from "@/lib/content";
import { ArrowRightIcon } from "./Icons";

export default function FeaturedArticles() {
  const featured = articles.slice(0, 5);
  return (
    <section className="container-editorial py-24 lg:py-32">
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
        <SectionHeader
          eyebrow="From the library"
          title="Evidence, translated."
          description="Research-backed articles on how functional mushrooms actually work."
        />
        <Link href="/research-library" className="btn-ghost">
          Browse the research library
          <ArrowRightIcon size={16} />
        </Link>
      </div>

      <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-4">
        <ArticleCard article={featured[0]} size="feature" />
        <ArticleCard article={featured[1]} />
        <ArticleCard article={featured[2]} />
        <ArticleCard article={featured[3]} />
        <ArticleCard article={featured[4]} />
      </div>
    </section>
  );
}
