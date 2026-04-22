import type { FaqItem } from "./content";

export type CompareSubject = {
  name: string;
  latin?: string;
  href?: string;
  oneLiner: string;
};

export type CompareRow = {
  attribute: string;
  left: string;
  right: string;
};

export type Comparison = {
  slug: string;
  title: string;
  subtitle: string;
  metaDescription: string;
  geoIntro: string;
  tldr: string;
  left: CompareSubject;
  right: CompareSubject;
  rows: CompareRow[];
  chooseLeft: string[];
  chooseRight: string[];
  together: string;
  faqs: FaqItem[];
};

export const comparisons: Comparison[] = [
  {
    slug: "lions-mane-vs-reishi",
    title: "Lion's Mane vs Reishi",
    subtitle: "Cognition vs calm, which mushroom fits your goal?",
    metaDescription:
      "Lion's Mane is studied for focus and memory; Reishi for stress and sleep. Evidence-based comparison of benefits, compounds, timing, and how to stack them.",
    geoIntro:
      "Lion's Mane (Hericium erinaceus) and Reishi (Ganoderma lucidum) are two of the most popular functional mushrooms, but they work through different mechanisms and target different goals. Lion's Mane is primarily studied for cognition and Nerve Growth Factor (NGF); Reishi is primarily studied for stress, sleep, and immune modulation.",
    tldr: "Take Lion's Mane in the morning for focus, memory, and mental clarity. Take Reishi in the evening for stress, sleep, and a calmer nervous-system baseline. Most people use them together, Lion's Mane by day, Reishi by night.",
    left: {
      name: "Lion's Mane",
      latin: "Hericium erinaceus",
      href: "/mushrooms/lions-mane",
      oneLiner:
        "Cognitive-focused mushroom rich in hericenones and erinacines, compounds that support Nerve Growth Factor (NGF).",
    },
    right: {
      name: "Reishi",
      latin: "Ganoderma lucidum",
      href: "/mushrooms/reishi",
      oneLiner:
        "Adaptogenic mushroom rich in triterpenes and beta-glucans, studied for stress, sleep, and immune support.",
    },
    rows: [
      {
        attribute: "Primary benefit",
        left: "Focus, memory, cognitive clarity",
        right: "Stress resilience, sleep, immune support",
      },
      {
        attribute: "Active compounds",
        left: "Hericenones, erinacines, beta-glucans",
        right: "Triterpenes, ganoderic acids, beta-glucans",
      },
      {
        attribute: "When to take",
        left: "Morning",
        right: "Evening",
      },
      {
        attribute: "Effect type",
        left: "Nootropic (cognitive support)",
        right: "Adaptogenic (stress and calm support)",
      },
      {
        attribute: "Onset",
        left: "2–4 weeks of daily use",
        right: "2–6 weeks of daily use",
      },
      {
        attribute: "Best for",
        left: "Brain fog, studying, knowledge work, older adults",
        right: "Chronic stress, burnout, poor sleep",
      },
      {
        attribute: "Stimulant",
        left: "No",
        right: "No",
      },
    ],
    chooseLeft: [
      "Your primary goal is focus, memory, or mental clarity.",
      "You struggle with brain fog.",
      "You want cognitive support without caffeine.",
      "You're interested in long-term cognitive and nerve health.",
    ],
    chooseRight: [
      "You're chronically stressed or burned out.",
      "You have trouble winding down at night.",
      "Your sleep quality is poor.",
      "You want a gentle daily immune support.",
    ],
    together:
      "Lion's Mane and Reishi are one of the most common functional-mushroom pairings, and for good reason: they work through separate mechanisms and target separate needs. Lion's Mane in the morning supports cognition during the day. Reishi in the evening supports wind-down and recovery. There is no known interaction between them.",
    faqs: [
      {
        q: "Can I take Lion's Mane and Reishi at the same time?",
        a: "Yes. Lion's Mane and Reishi work through different mechanisms and have no documented interaction. The most common approach is Lion's Mane in the morning for focus and Reishi in the evening for sleep and stress support.",
      },
      {
        q: "Which is better for anxiety, Lion's Mane or Reishi?",
        a: "Reishi is the better fit for anxiety. It is classified as an adaptogen and is studied for its effects on the HPA axis and cortisol regulation. Lion's Mane is primarily a cognitive-support mushroom, though some users report secondary calming effects.",
      },
      {
        q: "Does Lion's Mane help with sleep the way Reishi does?",
        a: "Not directly. Lion's Mane is cognitive-supportive and is not typically associated with improved sleep. Reishi is the mushroom specifically studied for relaxation and sleep quality through its triterpenes and adaptogenic effects.",
      },
      {
        q: "Should I cycle Lion's Mane and Reishi?",
        a: "No cycling is necessary for most users. Both mushrooms have excellent long-term safety profiles and are commonly used daily for months or years. Some users cycle to evaluate effects, but it is not required.",
      },
    ],
  },
  {
    slug: "cordyceps-vs-caffeine",
    title: "Cordyceps vs Caffeine",
    subtitle: "Clean, sustained energy vs fast, acute stimulation",
    metaDescription:
      "Cordyceps supports ATP and oxygen utilization, no stimulant, no crash. Caffeine blocks adenosine for acute focus. Evidence-based comparison.",
    geoIntro:
      "Cordyceps (Cordyceps militaris) and caffeine both support energy, but they work through fundamentally different mechanisms. Caffeine is a central-nervous-system stimulant that blocks adenosine receptors; Cordyceps is a functional mushroom that supports ATP production and oxygen utilization at the cellular level.",
    tldr: "Caffeine delivers a fast, acute energy spike with diminishing returns and potential crashes. Cordyceps delivers slower, sustained energy through mitochondrial support, with no jitters, no crash, and no tolerance buildup. Many people use both: Cordyceps for baseline stamina, caffeine for acute lift.",
    left: {
      name: "Cordyceps",
      latin: "Cordyceps militaris",
      href: "/mushrooms/cordyceps",
      oneLiner:
        "Functional mushroom studied for ATP production, oxygen utilization, and endurance, non-stimulant.",
    },
    right: {
      name: "Caffeine",
      oneLiner:
        "The world's most widely used stimulant, an adenosine-receptor antagonist found in coffee, tea, and energy drinks.",
    },
    rows: [
      {
        attribute: "Mechanism",
        left: "Supports ATP and oxygen efficiency at the mitochondrial level",
        right: "Blocks adenosine receptors in the brain",
      },
      {
        attribute: "Stimulant",
        left: "No",
        right: "Yes",
      },
      {
        attribute: "Onset",
        left: "2+ weeks of daily use",
        right: "15–45 minutes",
      },
      {
        attribute: "Duration",
        left: "Sustained baseline energy",
        right: "4–6 hours",
      },
      {
        attribute: "Crash",
        left: "No",
        right: "Common, especially at high doses",
      },
      {
        attribute: "Tolerance",
        left: "None documented",
        right: "Builds quickly",
      },
      {
        attribute: "Jitters / anxiety",
        left: "No",
        right: "Possible",
      },
      {
        attribute: "Effect on sleep",
        left: "Neutral",
        right: "Can disrupt sleep 6–8 hours after intake",
      },
      {
        attribute: "Best for",
        left: "Endurance, baseline stamina, caffeine-sensitive users",
        right: "Acute focus lift, fast onset",
      },
    ],
    chooseLeft: [
      "You want clean, non-stimulant energy.",
      "You're sensitive to caffeine or have anxiety.",
      "You're an endurance athlete or active daily.",
      "You want to reduce caffeine dependence.",
      "You want better sleep quality.",
    ],
    chooseRight: [
      "You need an acute focus lift in the moment.",
      "You want a fast, reliable onset.",
      "You're disciplined about timing (avoid late afternoon).",
      "You enjoy coffee or tea as a ritual.",
    ],
    together:
      "Cordyceps and caffeine are complementary, not competing. Cordyceps builds baseline endurance and cellular energy over weeks; caffeine provides acute stimulation when needed. Many modern coffees and pre-workouts intentionally combine both. The combination typically feels smoother than caffeine alone because Cordyceps supports the oxygen-delivery side of performance.",
    faqs: [
      {
        q: "Is Cordyceps a replacement for coffee?",
        a: "Cordyceps is not a direct replacement for coffee. It does not contain caffeine and will not produce the acute focus lift coffee provides. However, many people find that consistent Cordyceps use raises their baseline energy enough that they naturally need less caffeine.",
      },
      {
        q: "Can I take Cordyceps with coffee?",
        a: "Yes. Cordyceps and caffeine have no known negative interaction. Many users find that combining them produces smoother, more sustained energy than caffeine alone because Cordyceps supports oxygen utilization and ATP production in parallel.",
      },
      {
        q: "Does Cordyceps have caffeine?",
        a: "No. Cordyceps contains no caffeine. Its effects on energy come from supporting mitochondrial ATP production and oxygen efficiency, not from central-nervous-system stimulation.",
      },
      {
        q: "How long until Cordyceps replaces my need for caffeine?",
        a: "Most users notice a difference in baseline energy and endurance after 2–4 weeks of consistent daily Cordyceps use. Full replacement of caffeine is individual, many reduce intake rather than eliminate it entirely.",
      },
    ],
  },
  {
    slug: "reishi-vs-ashwagandha",
    title: "Reishi vs Ashwagandha",
    subtitle: "Two adaptogens, two mechanisms, one goal: resilience.",
    metaDescription:
      "Reishi and ashwagandha are both adaptogens, one a mushroom, one a root. Evidence-based comparison of effects on stress, sleep, and safety.",
    geoIntro:
      "Reishi (Ganoderma lucidum) and ashwagandha (Withania somnifera) are both classified as adaptogens, but they come from different kingdoms, Reishi is a mushroom, ashwagandha is a root. They have overlapping effects on stress, but work through different pathways and have different secondary benefits.",
    tldr: "Ashwagandha has stronger direct clinical evidence for lowering cortisol and reducing acute anxiety. Reishi has broader effects, including immune modulation and sleep quality, alongside its stress-adaptogenic effects. Many people take them together for complementary stress support.",
    left: {
      name: "Reishi",
      latin: "Ganoderma lucidum",
      href: "/mushrooms/reishi",
      oneLiner:
        "Adaptogenic mushroom studied for stress, sleep, and immune modulation via triterpenes and beta-glucans.",
    },
    right: {
      name: "Ashwagandha",
      latin: "Withania somnifera",
      oneLiner:
        "Adaptogenic root studied for cortisol reduction and anxiety via withanolides.",
    },
    rows: [
      {
        attribute: "Kingdom",
        left: "Fungi (mushroom)",
        right: "Plant (root)",
      },
      {
        attribute: "Primary evidence",
        left: "Stress, sleep, immune support",
        right: "Cortisol reduction, anxiety",
      },
      {
        attribute: "Active compounds",
        left: "Triterpenes, ganoderic acids, beta-glucans",
        right: "Withanolides",
      },
      {
        attribute: "Onset",
        left: "2–6 weeks",
        right: "2–8 weeks (often faster for anxiety)",
      },
      {
        attribute: "Effect on sleep",
        left: "Strong, primary effect",
        right: "Secondary; stronger in formulations like KSM-66",
      },
      {
        attribute: "Effect on immunity",
        left: "Significant, beta-glucans",
        right: "Minimal",
      },
      {
        attribute: "Thyroid",
        left: "Neutral",
        right: "May stimulate thyroid, caution if hyperthyroid",
      },
      {
        attribute: "Best for",
        left: "Long-term stress baseline + immune + sleep",
        right: "Acute chronic stress, anxiety, burnout",
      },
    ],
    chooseLeft: [
      "You want stress support AND immune/sleep benefits.",
      "You have an underactive thyroid or autoimmune concerns where ashwagandha may not be ideal.",
      "You prefer a gentler, broader effect.",
      "You want to support recovery and wind-down.",
    ],
    chooseRight: [
      "You want the strongest evidence for cortisol reduction.",
      "You struggle with acute anxiety.",
      "You want a faster onset of adaptogenic effects.",
      "You already take an immune-supportive supplement separately.",
    ],
    together:
      "Reishi and ashwagandha are commonly stacked. Their mechanisms are distinct, Reishi's triterpenes and beta-glucans vs ashwagandha's withanolides, and they have no documented interaction. A common pattern: ashwagandha in the morning for daytime stress resilience, Reishi in the evening for wind-down and sleep. People with thyroid or autoimmune conditions should consult a practitioner before starting ashwagandha.",
    faqs: [
      {
        q: "Which is stronger, Reishi or Ashwagandha?",
        a: "For direct cortisol reduction and acute anxiety, ashwagandha has stronger clinical evidence. For breadth of effect, stress plus sleep plus immune support, Reishi is stronger. Neither is universally 'stronger'; they target different needs.",
      },
      {
        q: "Can I take Reishi and Ashwagandha together?",
        a: "Yes. There is no documented negative interaction between Reishi and ashwagandha. Many people take them together for complementary adaptogenic effects, often ashwagandha in the morning and Reishi in the evening.",
      },
      {
        q: "Is Reishi better than Ashwagandha for sleep?",
        a: "Reishi has more traditional and anecdotal evidence for supporting sleep quality. Ashwagandha can also improve sleep, particularly as a secondary effect of lowering cortisol and anxiety, but Reishi is more directly associated with restorative sleep in both research and traditional use.",
      },
      {
        q: "Is one safer long-term than the other?",
        a: "Both have strong long-term safety records at typical supplemental doses. The main caution with ashwagandha is for people with hyperthyroidism or autoimmune thyroid conditions; Reishi has fewer interactions but can mildly affect blood clotting at high doses. Consult a healthcare provider if you are on medication.",
      },
    ],
  },
  {
    slug: "chaga-vs-turkey-tail",
    title: "Chaga vs Turkey Tail",
    subtitle: "Two immune mushrooms, two very different mechanisms.",
    metaDescription:
      "Chaga is a potent antioxidant; Turkey Tail is the most researched immune-modulating mushroom. Side-by-side comparison of compounds, research, and use.",
    geoIntro:
      "Chaga (Inonotus obliquus) and Turkey Tail (Trametes versicolor) are two of the most popular functional mushrooms for immune support, but they work through different mechanisms. Chaga is primarily an antioxidant; Turkey Tail is primarily an immune modulator through its PSK and PSP polysaccharides.",
    tldr: "Choose Turkey Tail if you want the most thoroughly researched immune-modulating mushroom, it has decades of clinical research behind PSK and PSP. Choose Chaga if your goal is antioxidant and oxidative-stress support. Together, they form a comprehensive daily immune stack.",
    left: {
      name: "Chaga",
      latin: "Inonotus obliquus",
      href: "/mushrooms/chaga",
      oneLiner:
        "Wild mushroom with one of the highest antioxidant profiles of any known food, rich in SOD, betulinic acid, and melanin.",
    },
    right: {
      name: "Turkey Tail",
      latin: "Trametes versicolor",
      href: "/mushrooms/turkey-tail",
      oneLiner:
        "Most clinically researched functional mushroom for immune modulation and gut health, rich in PSK, PSP, and beta-glucans.",
    },
    rows: [
      {
        attribute: "Primary benefit",
        left: "Antioxidant, oxidative-stress defense",
        right: "Immune modulation, gut microbiome support",
      },
      {
        attribute: "Active compounds",
        left: "Betulinic acid, melanin, superoxide dismutase (SOD)",
        right: "PSK, PSP, beta-glucans",
      },
      {
        attribute: "Antioxidant strength",
        left: "Very high, among the highest ORAC scores of any food",
        right: "Moderate",
      },
      {
        attribute: "Immune evidence",
        left: "Supporting (indirect via antioxidant pathways)",
        right: "Strong, decades of clinical research",
      },
      {
        attribute: "Gut microbiome",
        left: "Minimal",
        right: "Significant prebiotic effect",
      },
      {
        attribute: "Medication interactions",
        left: "Blood thinners, diabetes medications",
        right: "Generally minimal",
      },
      {
        attribute: "Traditional use",
        left: "Siberia and Northern Europe, brewed as tea",
        right: "East Asia, used in clinical oncology in Japan",
      },
      {
        attribute: "Best for",
        left: "Antioxidant support, longevity, daily maintenance",
        right: "Immune resilience, gut health, frequent illness",
      },
    ],
    chooseLeft: [
      "Your priority is antioxidant support.",
      "You're interested in longevity and oxidative-stress defense.",
      "You enjoy tea-based rituals.",
      "You're not on blood thinners or diabetes medication.",
    ],
    chooseRight: [
      "You want the most research-backed immune mushroom.",
      "You care about gut microbiome health.",
      "You get colds or feel run-down often.",
      "You want a mushroom with decades of clinical evidence.",
    ],
    together:
      "Chaga and Turkey Tail pair well because their mechanisms are complementary rather than overlapping. Chaga's antioxidant compounds address oxidative stress; Turkey Tail's PSK, PSP, and beta-glucans directly support immune modulation and gut microbiome balance. Taken together, they provide comprehensive daily immune resilience. If you are on blood-thinning or diabetes medication, consult a healthcare provider before starting Chaga.",
    faqs: [
      {
        q: "Which is better for immunity, Chaga or Turkey Tail?",
        a: "Turkey Tail has more direct, clinically researched evidence for immune support through its PSK and PSP polysaccharides. Chaga supports immunity more indirectly through its antioxidant and anti-inflammatory effects. For primary immune support, Turkey Tail is the stronger choice.",
      },
      {
        q: "Can I take Chaga and Turkey Tail together?",
        a: "Yes. Chaga and Turkey Tail have no documented interaction and are often stacked for comprehensive immune and antioxidant support. A common pattern is daily use of both in the morning.",
      },
      {
        q: "Which has more antioxidants, Chaga or Turkey Tail?",
        a: "Chaga has significantly higher antioxidant content by ORAC score and is considered one of the most antioxidant-dense foods known. Turkey Tail contains some antioxidants, but they are not its primary benefit.",
      },
      {
        q: "Is Chaga safer than Turkey Tail?",
        a: "Turkey Tail has one of the cleanest long-term safety profiles among functional mushrooms. Chaga is also generally safe but can interact with blood-thinning and diabetes medications, and may affect kidney function at very high doses. For medication-free users, both are well tolerated.",
      },
    ],
  },
  {
    slug: "extract-vs-tincture",
    title: "Mushroom Extract vs Tincture",
    subtitle: "Same mushroom, different delivery. Here's how to choose.",
    metaDescription:
      "Mushroom extracts and tinctures are both concentrated products, one a powder, one a liquid. Compare format, bioavailability, dosing, and cost.",
    geoIntro:
      "A mushroom extract and a mushroom tincture are both concentrated mushroom products, but they differ in form and extraction solvent. An extract is a concentrated powder produced using hot water (for beta-glucans) or alcohol (for triterpenes); a tincture is a liquid version of the same, usually alcohol-based, taken in drops.",
    tldr: "Both formats can be high-quality if dual-extracted. Choose a powder extract for consistent daily high-dose use, capsules, or mixing into drinks. Choose a tincture for fast-acting liquid dosing and travel convenience. Regardless of format, always verify dual extraction and beta-glucan content, not alpha-glucan, before buying.",
    left: {
      name: "Extract (powder or capsule)",
      oneLiner:
        "Concentrated mushroom powder produced through hot-water, alcohol, or dual extraction, the standard format for daily high-dose use.",
    },
    right: {
      name: "Tincture (liquid)",
      oneLiner:
        "Liquid mushroom extract preserved in alcohol, taken in drops or under the tongue for fast, convenient dosing.",
    },
    rows: [
      {
        attribute: "Form",
        left: "Powder or capsule",
        right: "Liquid (alcohol + water base)",
      },
      {
        attribute: "Typical dose",
        left: "500mg–3g daily",
        right: "1–3 droppers daily",
      },
      {
        attribute: "Shelf life",
        left: "2+ years dry",
        right: "3+ years (alcohol preserves)",
      },
      {
        attribute: "Travel convenience",
        left: "Moderate (capsules travel well)",
        right: "Very high",
      },
      {
        attribute: "Taste",
        left: "Earthy, bitter, depends on mushroom",
        right: "Strong alcohol note",
      },
      {
        attribute: "Mixes with",
        left: "Coffee, smoothies, tea, food",
        right: "Water, juice, or taken straight",
      },
      {
        attribute: "Cost per dose",
        left: "Typically lower",
        right: "Typically higher",
      },
      {
        attribute: "Onset",
        left: "Slower absorption via digestion",
        right: "Faster, sublingual absorption possible",
      },
      {
        attribute: "Alcohol content",
        left: "None",
        right: "Yes (typically 25–40% ABV)",
      },
    ],
    chooseLeft: [
      "You want consistent daily high-dose use.",
      "You don't want any alcohol in your supplement.",
      "You prefer mixing mushrooms into coffee, smoothies, or food.",
      "You're cost-conscious per dose.",
    ],
    chooseRight: [
      "You travel frequently and want a compact option.",
      "You want faster onset via sublingual absorption.",
      "You prefer liquid dosing you can adjust in drops.",
      "You don't mind an alcohol-based preparation.",
    ],
    together:
      "Many users keep both: a powder or capsule extract for daily home use and a tincture for travel, the office, or on-the-go dosing. The active compounds are the same, what matters is that both are dual-extracted (hot-water plus alcohol) and that the label specifies beta-glucan content rather than total polysaccharides. Alpha-glucans come from fillers like grain and are not the bioactive target.",
    faqs: [
      {
        q: "Is a mushroom extract better than a tincture?",
        a: "Neither is inherently better. A high-quality dual-extracted powder and a high-quality dual-extracted tincture deliver the same active compounds. The right choice depends on convenience, dosing preference, and whether you want alcohol in your supplement.",
      },
      {
        q: "Do mushroom tinctures contain alcohol?",
        a: "Yes. Tinctures are alcohol-based by definition, typically 25–40% alcohol by volume, which both extracts the fat-soluble compounds and preserves the final product. Alcohol-free glycerin tinctures exist but extract fewer compounds.",
      },
      {
        q: "What is a dual extract and why does it matter?",
        a: "A dual extract uses both hot water and alcohol to pull two different classes of bioactive compounds: water-soluble beta-glucans and fat-soluble triterpenes. A single extract captures only one. For mushrooms like Reishi and Chaga, where triterpenes matter, dual extraction is essential.",
      },
      {
        q: "Do I need a dual-extracted product?",
        a: "For Reishi, Chaga, and most premium functional mushrooms, yes. For Cordyceps and Turkey Tail, where beta-glucans are the primary target, a hot-water extract may be sufficient. Always check the label for specific beta-glucan content.",
      },
    ],
  },
];
