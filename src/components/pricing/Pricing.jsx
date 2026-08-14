import PricingCard from "./PricingCard";
import { pricingPlans } from "../../data/pricing";

const Pricing = () => {
  return (
    <section
      id="pricing"
      className="relative overflow-hidden border-b border-white/10 bg-black"
    >
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32">

        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">

          <span className="inline-flex rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-2 text-xs font-medium uppercase tracking-[0.16em] text-white/45">
            Pricing
          </span>

          <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-[-0.035em] text-white sm:text-4xl lg:text-5xl">
            Choose the plan that{" "}
            <span className="text-white/40">
              fits your growth.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/45 sm:text-lg sm:leading-8">
            Start where you are and scale when you're ready. Every plan is
            designed around measurable business outcomes, not unnecessary
            complexity.
          </p>

        </div>

        {/* Pricing Cards */}
        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-3">

          {pricingPlans.map((plan) => (
            <PricingCard
              key={plan.id}
              plan={plan}
            />
          ))}

        </div>

        {/* Pricing Note */}
        <div className="mt-8 flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/[0.025] p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">

          <div>
            <p className="text-sm font-medium text-white">
              All prices are exclusive of GST
            </p>

            <p className="mt-1 text-xs leading-5 text-white/35 sm:text-sm">
              Plans can be customized based on your business goals,
              requirements, and growth stage.
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex w-full items-center justify-center rounded-full border border-white/15 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-white transition-all duration-200 hover:border-white/25 hover:bg-white/[0.08] sm:w-auto"
          >
            Need a custom plan?
          </a>

        </div>

        {/* Bottom Trust Message */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs text-white/30">
          <span>✓ No long-term lock-in</span>
          <span>✓ Dedicated strategy</span>
          <span>✓ Transparent reporting</span>
          <span>✓ Scalable plans</span>
        </div>

      </div>
    </section>
  );
};

export default Pricing;