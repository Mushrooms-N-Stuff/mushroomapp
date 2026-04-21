import PageShell from "@/components/PageShell";
import ArticleCard from "@/components/ArticleCard";
import { articles } from "@/lib/content";

export const metadata = { title: "Research Library" };

export default function ResearchLibrary() {
  return (
    <PageShell
      eyebrow="Research library"
      title="Simplified research summaries."
      description="Organized by mushroom, health benefit, and strength of evidence — so you can find what the science actually says."
    >
      <div className="max-w-content">
        <div className="flex flex-wrap gap-2 mb-10">
          {["All", "Lion's Mane", "Reishi", "Cordyceps", "Chaga", "Turkey Tail", "Guide"].map(
            (t) => (
              <button
                key={t}
                className="tag bg-forest/[0.04] text-forest/70 hover:bg-forest hover:text-cream transition-colors"
              >
                {t}
              </button>
            ),
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {articles.map((a) => (
            <ArticleCard key={a.slug} article={a} />
          ))}
        </div>
      </div>
    </PageShell>
  );
}
