import { notFound } from "next/navigation";
import type { Metadata } from "next";
import ArticleTemplate, { ArticleTemplateProps } from "@/components/ArticleTemplate";

// Article content lives alongside the route for now. Swap for MDX/CMS later
// without changing the template's API.
const articleData: Record<string, ArticleTemplateProps> = {
  "lions-mane-benefits": {
    eyebrow: "Cognition",
    title: "Lion's Mane and the Science of Mental Clarity",
    summary:
      "Lion's Mane (Hericium erinaceus) is one of the most studied mushrooms for cognition. Research points to effects on nerve growth factor (NGF), mild cognitive support, and mood — though the evidence is more promising than definitive.",
    category: "Lion's Mane",
    readingTime: "8 min read",
    publishedAt: "April 2026",
    updatedAt: "April 2026",
    keyBenefits: [
      "Supports focus and mental clarity in small human trials",
      "Contains compounds (hericenones, erinacines) linked to nerve growth factor",
      "Early research suggests benefits for mild cognitive impairment",
      "May support mood and reduce mild anxiety symptoms",
      "Generally well-tolerated in short-term studies",
    ],
    howItWorks: [
      {
        title: "Nerve growth factor (NGF)",
        body: "Lion's Mane contains hericenones (in the fruiting body) and erinacines (in the mycelium) — compounds that have been shown in lab studies to stimulate NGF production. NGF supports the growth, maintenance, and repair of neurons.",
      },
      {
        title: "BDNF and neuroplasticity",
        body: "Some research suggests Lion's Mane may also influence brain-derived neurotrophic factor (BDNF), another protein involved in neuroplasticity — the brain's ability to form new connections.",
      },
      {
        title: "Anti-inflammatory effects",
        body: "Chronic neuroinflammation is linked to cognitive decline. Several compounds in Lion's Mane appear to modulate inflammatory markers in the brain, though most of this work is preclinical.",
      },
    ],
    whoItsFor: [
      "Knowledge workers looking for sustained focus without stimulant side effects",
      "Adults concerned about long-term cognitive health",
      "People interested in mood support with a gentler mechanism than SSRIs",
      "Anyone building a nootropic stack with an evidence-based foundation",
    ],
    dosage: {
      range: "500 mg – 3,000 mg per day",
      notes:
        "Most human trials have used doses in this range, typically split across morning and afternoon. Effects appear to build over weeks rather than hours. Extract concentration matters more than raw weight — look for standardized beta-glucans.",
    },
    safety: [
      "Generally well-tolerated; side effects in trials are rare and mild (mostly digestive).",
      "Allergic reactions are possible, especially for people sensitive to other fungi.",
      "Long-term safety data is limited — most studies are 8–16 weeks.",
      "Consult your doctor if pregnant, nursing, or taking blood thinners.",
    ],
    researchHighlights: [
      {
        summary:
          "A 16-week Japanese trial in adults with mild cognitive impairment found significant improvements on a cognitive function scale vs. placebo — effects diminished after discontinuation.",
        citation: "Mori et al., Phytotherapy Research, 2009",
      },
      {
        summary:
          "A double-blind study in menopausal women reported reduced irritation and anxiety after four weeks of Lion's Mane cookies compared with placebo.",
        citation: "Nagano et al., Biomedical Research, 2010",
      },
      {
        summary:
          "Preclinical work consistently shows that hericenones and erinacines can stimulate NGF synthesis in cultured neural cells.",
        citation: "Kawagishi et al., Heterocycles, 1994; later confirmed by multiple groups.",
      },
      {
        summary:
          "A 2023 pilot trial in healthy young adults found short-term improvements in speed of performance on a cognitive task after a single dose.",
        citation: "Docherty et al., Nutrients, 2023",
      },
    ],
    product: {
      name: "Lion's Mane Organic Extract Capsules",
      brand: "Real Mushrooms",
      why: "Made from 100% organic fruiting bodies (no mycelium-on-grain fillers), third-party tested for beta-glucans, and transparently labeled. Our preferred option when the research calls for quality mushroom extract.",
      href: "https://www.realmushrooms.com/product/lions-mane-extract-capsules/",
    },
    faqs: [
      {
        q: "What is Lion's Mane?",
        a: "Lion's Mane (Hericium erinaceus) is an edible and medicinal mushroom with a long history of use in traditional East Asian medicine. It's studied today primarily for its potential effects on cognition, nerve health, and mood.",
      },
      {
        q: "What are Lion's Mane benefits?",
        a: "The most researched benefits are focus and cognitive support, potential neuroprotective effects via NGF, mood support, and general immune modulation. The evidence is strongest for mild cognitive support in older adults and smaller-scale mood improvements.",
      },
      {
        q: "What is the right Lion's Mane dosage?",
        a: "Most human studies use 500–3,000 mg per day of a standardized extract, often split into two doses. Effects typically build over 4–8 weeks. Informational only — check with a healthcare provider for personal guidance.",
      },
      {
        q: "Are there Lion's Mane side effects?",
        a: "Reported side effects are rare and mild — most commonly digestive discomfort. Allergic reactions are possible. Long-term safety data is limited because most trials run 8–16 weeks.",
      },
      {
        q: "Can Lion's Mane help with brain fog?",
        a: "Small trials and anecdotal reports suggest Lion's Mane may help with day-to-day mental clarity, particularly for people with mild cognitive complaints. It shouldn't be considered a treatment — but the research on cognition is among the most promising of any functional mushroom.",
      },
    ],
    related: [
      {
        href: "/mushrooms/lions-mane",
        label: "Lion's Mane — Full overview",
        kind: "mushroom",
      },
      {
        href: "/health-goals/focus",
        label: "All research for Focus & Brain Fog",
        kind: "goal",
      },
      {
        href: "/stacks/focus-stack",
        label: "The Focus Stack",
        kind: "stack",
      },
      {
        href: "/guides/choose-supplement",
        label: "How to choose a quality mushroom supplement",
        kind: "guide",
      },
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(articleData).map((slug) => ({ slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const article = articleData[params.slug];
  if (!article) return {};
  return {
    title: article.title,
    description: article.summary,
    openGraph: {
      title: article.title,
      description: article.summary,
      type: "article",
    },
  };
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = articleData[params.slug];
  if (!article) notFound();
  return <ArticleTemplate {...article} />;
}
