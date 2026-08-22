import PlanComparison from "../components/pricing/PlanComparison";
import PricingAddons from "../components/pricing/PricingAddons";
import PricingCTA from "../components/pricing/PricingCTA";
import PricingFAQ from "../components/pricing/PricingFAQ";
import PricingHero from "../components/pricing/PricingHero";
import PricingPlans from "../components/pricing/PricingPlans";

const PricingPage = () => {
  return (
    <>
      <PricingHero />

      <PricingPlans />

      <PlanComparison />

      <PricingAddons />

      <PricingFAQ />

      <PricingCTA />
    </>
  );
};

export default PricingPage;