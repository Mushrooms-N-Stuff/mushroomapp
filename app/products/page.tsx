import PageShell from "@/components/PageShell";

export const metadata = { title: "Products" };

export default function Products() {
  return (
    <PageShell
      eyebrow="Products"
      title="The supplements we actually recommend."
      description="A small, carefully vetted list. We only include products that meet our sourcing, extraction, and testing standards."
    >
      <div className="prose-article max-w-reading">
        <p>
          Our primary affiliate partner is <a href="https://www.realmushrooms.com/" target="_blank" rel="nofollow sponsored noopener">Real Mushrooms</a> —
          100% organic fruiting bodies, third-party tested for beta-glucans,
          and transparently labeled.
        </p>
        <p>Full product pages coming soon.</p>
      </div>
    </PageShell>
  );
}
