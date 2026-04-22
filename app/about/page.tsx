import PageShell from "@/components/PageShell";

export const metadata = { title: "About" };

export default function About() {
  return (
    <PageShell
      eyebrow="About"
      title="We read the research so you don't have to."
      description="Mushrooms & Stuff is an editorial publication focused on functional mushrooms, grounded in science, translated into plain language, and built to respect your time."
    >
      <div className="prose-article max-w-reading">
        <p>
          We started Mushrooms &amp; Stuff because the space between academic
          research and consumer wellness content is often where truth gets lost.
          Papers are dense. Supplement marketing is loud. Most readers end up
          somewhere in between, unsure who to trust.
        </p>
        <p>
          Our approach is simple: we read the studies, summarize what they
          actually found, and point toward quality products when the evidence
          warrants it, and not when it doesn't.
        </p>
        <h2>What we cover</h2>
        <p>
          Functional mushrooms with meaningful research behind them:
          Lion's Mane, Reishi, Cordyceps, Chaga, and Turkey Tail. We organize
          content by mushroom, by health goal, and by strength of evidence.
        </p>
        <h2>What we don't do</h2>
        <ul>
          <li>Overstate the evidence.</li>
          <li>Hide affiliate relationships.</li>
          <li>Treat wellness like a personality.</li>
        </ul>
      </div>
    </PageShell>
  );
}
