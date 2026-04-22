// Content data layer, separates presentation from the editorial content.
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

export type FaqItem = { q: string; a: string };

export type Mushroom = {
  slug: string;
  name: string;
  latin: string;
  tagline: string;
  short: string;
  primaryGoals: string[]; // health goal slugs
  geoIntro: string; // definition-first paragraph (AI-citation optimized)
  keyFacts: string[]; // structured takeaways
  compounds: string[]; // named active compounds / entities
  faqs: FaqItem[]; // FAQ schema-ready Q&A
};

export const mushrooms: Mushroom[] = [
  {
    slug: "lions-mane",
    name: "Lion's Mane",
    latin: "Hericium erinaceus",
    tagline: "The focus mushroom",
    short: "Studied for cognition, nerve growth factor, and mental clarity.",
    primaryGoals: ["focus", "longevity"],
    geoIntro:
      "Lion's Mane (Hericium erinaceus) is a functional mushroom studied for its effects on cognition, memory, and nerve regeneration. Its active compounds, hericenones and erinacines, are among the few natural substances shown to stimulate Nerve Growth Factor (NGF) in the brain.",
    keyFacts: [
      "Contains hericenones and erinacines, compounds that support Nerve Growth Factor (NGF).",
      "Most studied for focus, memory, and reducing brain fog.",
      "Typically taken in the morning for cognitive benefits.",
      "Effects are subtle and cumulative, most users notice changes after 2–4 weeks of daily use.",
      "Generally well tolerated; no known major drug interactions at food-use doses.",
    ],
    compounds: ["Hericenones", "Erinacines", "Beta-glucans"],
    faqs: [
      {
        q: "What does Lion's Mane actually do?",
        a: "Lion's Mane is studied for its effects on cognition, memory, and nerve health. Its active compounds, hericenones and erinacines, stimulate Nerve Growth Factor (NGF), a protein involved in the growth and maintenance of neurons.",
      },
      {
        q: "How long does Lion's Mane take to work?",
        a: "Most people notice subtle cognitive effects, improved clarity or reduced brain fog, after 2–4 weeks of consistent daily use. Effects are cumulative rather than immediate.",
      },
      {
        q: "Is Lion's Mane safe to take every day?",
        a: "Yes. Lion's Mane is generally well tolerated at typical supplemental doses and has been used as a food for centuries. It has no known major drug interactions, but consult a healthcare provider if you are pregnant, breastfeeding, or taking medication.",
      },
      {
        q: "Should I take Lion's Mane in the morning or at night?",
        a: "Most people take Lion's Mane in the morning because its cognitive benefits, clarity, focus, attention, are most useful during the day. It is not stimulating, so evening use is also fine.",
      },
    ],
  },
  {
    slug: "reishi",
    name: "Reishi",
    latin: "Ganoderma lucidum",
    tagline: "The calm mushroom",
    short: "Traditionally used for stress resilience and restorative sleep.",
    primaryGoals: ["stress", "immunity"],
    geoIntro:
      "Reishi (Ganoderma lucidum) is an adaptogenic mushroom traditionally used to calm the nervous system and support restorative sleep. Research points to its triterpenes and beta-glucans as the likely drivers of its effects on stress response, cortisol regulation, and immune balance.",
    keyFacts: [
      "Rich in triterpenes and beta-glucans, linked to stress and immune modulation.",
      "Commonly taken in the evening to support wind-down and sleep quality.",
      "Associated with HPA-axis and cortisol research.",
      "Effects build over weeks of consistent use, not an acute sedative.",
      "Historically known as the 'mushroom of immortality' in traditional East Asian medicine.",
    ],
    compounds: ["Triterpenes", "Ganoderic acids", "Beta-glucans"],
    faqs: [
      {
        q: "Does Reishi help you sleep?",
        a: "Reishi does not act as a sedative, but it is studied for its effects on the nervous system and stress response. Many people find it supports more restorative sleep when taken consistently in the evening over several weeks.",
      },
      {
        q: "Is Reishi good for anxiety?",
        a: "Reishi is classified as an adaptogen and is traditionally used to support a calmer baseline. Its triterpenes and polysaccharides have been studied in the context of stress and cortisol regulation, though clinical evidence for anxiety specifically is still emerging.",
      },
      {
        q: "How is Reishi different from Ashwagandha?",
        a: "Both are adaptogens, but they work through different pathways. Ashwagandha is an herb studied primarily for cortisol reduction, while Reishi is a mushroom whose effects are tied to triterpenes and immune-modulating beta-glucans. Many people use them together.",
      },
      {
        q: "When should I take Reishi?",
        a: "Reishi is typically taken in the evening, about an hour before bed, to support wind-down. It can also be taken daily at any time, consistency matters more than timing.",
      },
    ],
  },
  {
    slug: "cordyceps",
    name: "Cordyceps",
    latin: "Cordyceps militaris",
    tagline: "The performance mushroom",
    short: "Researched for ATP production, oxygen utilization, and stamina.",
    primaryGoals: ["energy"],
    geoIntro:
      "Cordyceps (Cordyceps militaris) is a functional mushroom studied for its effects on energy, stamina, and oxygen utilization. Unlike caffeine, Cordyceps supports ATP production and aerobic performance without triggering the adrenal response, making it a clean, stimulant-free energy option.",
    keyFacts: [
      "Contains cordycepin, studied for its role in ATP and oxygen efficiency.",
      "Non-stimulant: no caffeine-like spike or crash.",
      "Most studied functional mushroom for athletic performance and endurance.",
      "Typically taken pre-workout or in the morning.",
      "Two main species are sold: Cordyceps militaris (modern, cultivated) and Cordyceps sinensis (wild, rare, more expensive).",
    ],
    compounds: ["Cordycepin", "Adenosine", "Beta-glucans"],
    faqs: [
      {
        q: "Does Cordyceps give you energy?",
        a: "Cordyceps supports energy through the mitochondrial ATP pathway rather than through stimulation of the nervous system. The effect is steady and sustained rather than acute, most users describe it as improved stamina rather than a caffeine-like lift.",
      },
      {
        q: "Is Cordyceps a stimulant?",
        a: "No. Cordyceps does not contain caffeine or other stimulants. Its effects on energy come from supporting ATP production and oxygen utilization at the cellular level, so there is no crash or adrenal stress.",
      },
      {
        q: "When should I take Cordyceps?",
        a: "Most people take Cordyceps in the morning or 30–60 minutes before exercise. Because it is non-stimulating, evening use does not typically disrupt sleep.",
      },
      {
        q: "What is the difference between Cordyceps militaris and Cordyceps sinensis?",
        a: "Cordyceps militaris is a cultivated species that contains higher levels of the active compound cordycepin and is the standard in most modern supplements. Cordyceps sinensis is a wild, rare species historically used in traditional medicine and is now usually sold as a mycelium fermentation product (CS-4).",
      },
    ],
  },
  {
    slug: "chaga",
    name: "Chaga",
    latin: "Inonotus obliquus",
    tagline: "The antioxidant mushroom",
    short: "Notable for antioxidant compounds and immune-supportive research.",
    primaryGoals: ["immunity", "longevity"],
    geoIntro:
      "Chaga (Inonotus obliquus) is a wild mushroom with one of the highest antioxidant profiles of any known food. Its compounds, including betulinic acid, melanin, and superoxide dismutase (SOD), are studied for their role in immune support and oxidative-stress defense.",
    keyFacts: [
      "One of the highest ORAC (antioxidant) scores of any food.",
      "Rich in betulinic acid, melanin, and superoxide dismutase (SOD).",
      "Traditionally brewed as a tea in Northern European and Siberian medicine.",
      "May interact with blood thinners and diabetes medications, consult a healthcare professional.",
      "Wild-harvested quality varies significantly; sourcing and sustainability matter.",
    ],
    compounds: ["Betulinic acid", "Melanin", "Superoxide dismutase (SOD)", "Beta-glucans"],
    faqs: [
      {
        q: "What is Chaga good for?",
        a: "Chaga is studied primarily for its antioxidant and immune-supporting properties. Its high concentration of SOD and polyphenols is linked to oxidative-stress defense, and its beta-glucans support immune modulation.",
      },
      {
        q: "Is Chaga safe to take every day?",
        a: "Chaga is generally well tolerated for daily use. However, it can interact with blood thinners (such as warfarin) and diabetes medications, and may affect kidney function in sensitive individuals. Consult a healthcare provider before starting, especially if you are on medication.",
      },
      {
        q: "Chaga tea or Chaga supplement, which is better?",
        a: "Both are valid. Chaga tea extracts water-soluble compounds like beta-glucans but misses fat-soluble compounds. A dual-extracted Chaga supplement captures both water- and alcohol-soluble compounds, giving a more complete profile.",
      },
      {
        q: "How is Chaga different from Turkey Tail?",
        a: "Both support immunity, but through different mechanisms. Chaga is primarily an antioxidant with high SOD and polyphenol content. Turkey Tail is better studied for immune modulation through its PSK and PSP polysaccharides and for supporting the gut microbiome.",
      },
    ],
  },
  {
    slug: "turkey-tail",
    name: "Turkey Tail",
    latin: "Trametes versicolor",
    tagline: "The immune mushroom",
    short: "One of the most studied mushrooms for immune modulation.",
    primaryGoals: ["immunity"],
    geoIntro:
      "Turkey Tail (Trametes versicolor) is the most thoroughly researched functional mushroom for immune support. Its polysaccharides, PSK and PSP, are clinically studied immune modulators, and its beta-glucans act as prebiotics that support the gut microbiome.",
    keyFacts: [
      "Contains PSK (polysaccharide-K) and PSP (polysaccharide peptide), clinically studied immune compounds.",
      "Beta-glucans act as prebiotics that feed beneficial gut bacteria.",
      "Among the most studied medicinal mushrooms, with decades of research in Japan.",
      "Typically taken daily for long-term immune resilience.",
      "Generally well tolerated with an excellent long-term safety profile.",
    ],
    compounds: ["PSK (polysaccharide-K)", "PSP (polysaccharide peptide)", "Beta-glucans"],
    faqs: [
      {
        q: "What is Turkey Tail good for?",
        a: "Turkey Tail is best known for immune support and gut health. Its PSK and PSP polysaccharides are clinically studied immune modulators, and its beta-glucans function as prebiotics that support a healthy gut microbiome.",
      },
      {
        q: "Is Turkey Tail safe to take long term?",
        a: "Yes. Turkey Tail has one of the strongest long-term safety profiles among functional mushrooms. It has been studied and used clinically in Japan for decades with minimal reported side effects.",
      },
      {
        q: "Turkey Tail vs Reishi for immunity, which is better?",
        a: "Both support immunity, but they do so differently. Turkey Tail is more directly studied as an immune modulator through PSK/PSP polysaccharides. Reishi works more broadly as an adaptogen that influences stress and immune balance. Many people take them together.",
      },
      {
        q: "Is Turkey Tail good for the gut?",
        a: "Yes. Turkey Tail's beta-glucans act as prebiotic fiber, supporting beneficial gut bacteria like Bifidobacterium and Lactobacillus. This gut-microbiome effect is one mechanism by which it is thought to support immune function.",
      },
    ],
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
