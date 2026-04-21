import Hero from "@/components/Hero";
import HealthGoalCards from "@/components/HealthGoalCards";
import FeaturedMushrooms from "@/components/FeaturedMushrooms";
import HowItWorks from "@/components/HowItWorks";
import FeaturedArticles from "@/components/FeaturedArticles";
import RecommendedStacks from "@/components/RecommendedStacks";
import EmailOptin from "@/components/EmailOptin";
import TrustSection from "@/components/TrustSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <HealthGoalCards />
      <FeaturedMushrooms />
      <HowItWorks />
      <FeaturedArticles />
      <RecommendedStacks />
      <EmailOptin />
      <TrustSection />
    </>
  );
}
