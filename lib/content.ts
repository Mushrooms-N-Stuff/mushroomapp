// Content data layer — separates presentation from the editorial content.
// Replace with CMS / MDX pipeline later without changing component APIs.

export type HealthGoal = {
  slug: string;
  title: string;
  short: string;
  description: string;
  icon: "focus" | "stress" | "energy" | "immunity" | "longevity";
};

export const healthGoals: HealthGoal[] = [
  {
    slug: "focus",
    title: "Improve Focus",
    short: "Clarity & cognition",
    description: "Mushrooms studied for attention, mental clarity, and neural support.",
    icon: "focus",
  },
  {
    slug: "stress",
    title: "Reduce Stress",
    short: "Calm & resilience",
    description: "Adaptogens with research on cortisol, calm, and nervous-system balance.",
    icon: "stress",
  },
  {
    slug: "energy",
    title: "Increase Energy",
    short: "Stamina & performance",
    description: "Compounds linked to mitochondrial function and aerobic performance.",
    icon: "energy",
  },
  {
    slug: "immunity",
    title: "Support Immunity",
    short: "Defense & balance",
    description: "Beta-glucans and polysaccharides studied for immune modulation.",
    icon: "immunity",
  },
  {
    slug: "longevity",
    title: "Longevity",
    short: "Healthspan & cellular health",
    description: "Research on antioxidants, inflammation, and long-term vitality.",
    icon: "longevity",
  },
];

export type Mushroom = {
  slug: string;
  name: string;
  latin: string;
  tagline: string;
  short: string;
  primaryGoals: string[]; // health goal slugs
};

export const mushrooms: Mushroom[] = [
  {
    slug: "lions-mane",
    name: "Lion's Mane",
    latin: "Hericium erinaceus",
    tagline: "The focus mushroom",
    short: "Studied for cognition, nerve growth factor, and mental clarity.",
    primaryGoals: ["focus", "longevity"],
  },
  {
    slug: "reishi",
    name: "Reishi",
    latin: "Ganoderma lucidum",
    tagline: "The calm mushroom",
    short: "Traditionally used for stress resilience and restorative sleep.",
    primaryGoals: ["stress", "immunity"],
  },
  {
    slug: "cordyceps",
    name: "Cordyceps",
    latin: "Cordyceps militaris",
    tagline: "The performance mushroom",
    short: "Researched for ATP production, oxygen utilization, and stamina.",
    primaryGoals: ["energy"],
  },
  {
    slug: "chaga",
    name: "Chaga",
    latin: "Inonotus obliquus",
    tagline: "The antioxidant mushroom",
    short: "Notable for antioxidant compounds and immune-supportive research.",
    primaryGoals: ["immunity", "longevity"],
  },
  {
    slug: "turkey-tail",
    name: "Turkey Tail",
    latin: "Trametes versicolor",
    tagline: "The immune mushroom",
    short: "One of the most studied mushrooms for immune modulation.",
    primaryGoals: ["immunity"],
  },
];

export type Stack = {
  slug: string;
  name: string;
  base: string;
  description: string;
  goal: string;
};

export const stacks: Stack[] = [
  {
    slug: "focus-stack",
    name: "Focus Stack",
    base: "Lion's Mane based",
    description: "A cognition-first pairing centered on Lion's Mane for clarity and sustained attention.",
    goal: "focus",
  },
  {
    slug: "stress-stack",
    name: "Stress Stack",
    base: "Reishi based",
    description: "An adaptogenic blend built around Reishi to support a calmer, more resilient baseline.",
    goal: "stress",
  },
  {
    slug: "energy-stack",
    name: "Energy Stack",
    base: "Cordyceps based",
    description: "A Cordyceps-forward stack studied for stamina, oxygen efficiency, and steady output.",
    goal: "energy",
  },
  {
    slug: "immune-stack",
    name: "Immune Stack",
    base: "Chaga based",
    description: "An antioxidant-rich stack centered on Chaga to support daily immune resilience.",
    goal: "immunity",
  },
];

export type Article = {
  slug: string;
  title: string;
  summary: string;
  category: string;
  readingTime: string;
  mushroom?: string;
  goal?: string;
};

export const articles: Article[] = [
  {
    slug: "lions-mane-benefits",
    title: "Lion's Mane and the Science of Mental Clarity",
    summary:
      "What the research actually says about Hericium erinaceus, nerve growth factor, and everyday focus.",
    category: "Lion's Mane",
    readingTime: "8 min read",
    mushroom: "lions-mane",
    goal: "focus",
  },
  {
    slug: "reishi-sleep-stress",
    title: "Reishi for Stress and Sleep: A Research Overview",
    summary:
      "How Reishi's triterpenes and polysaccharides have been studied in the context of calm and recovery.",
    category: "Reishi",
    readingTime: "7 min read",
    mushroom: "reishi",
    goal: "stress",
  },
  {
    slug: "cordyceps-energy",
    title: "Cordyceps and Cellular Energy, Explained Simply",
    summary:
      "ATP, oxygen utilization, and why athletes keep circling back to this mushroom.",
    category: "Cordyceps",
    readingTime: "6 min read",
    mushroom: "cordyceps",
    goal: "energy",
  },
  {
    slug: "chaga-antioxidants",
    title: "Chaga: Antioxidants, Immunity, and the Evidence",
    summary:
      "A grounded look at one of the most antioxidant-dense foods ever studied.",
    category: "Chaga",
    readingTime: "9 min read",
    mushroom: "chaga",
    goal: "immunity",
  },
  {
    slug: "turkey-tail-immunity",
    title: "Turkey Tail: The Most Researched Immune Mushroom",
    summary:
      "PSK, PSP, and what decades of research tell us about Trametes versicolor.",
    category: "Turkey Tail",
    readingTime: "10 min read",
    mushroom: "turkey-tail",
    goal: "immunity",
  },
  {
    slug: "how-to-choose-supplement",
    title: "How to Choose a Quality Mushroom Supplement",
    summary:
      "Fruiting body vs. mycelium, beta-glucan testing, and the questions worth asking.",
    category: "Guide",
    readingTime: "11 min read",
  },
];
