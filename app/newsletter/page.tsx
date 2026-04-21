import PageShell from "@/components/PageShell";
import EmailOptin from "@/components/EmailOptin";

export const metadata = { title: "Newsletter" };

export default function Newsletter() {
  return (
    <PageShell
      eyebrow="Newsletter"
      title="Research-backed insights, once a week."
      description="One email. No hype. Unsubscribe anytime."
    >
      <EmailOptin />
    </PageShell>
  );
}
