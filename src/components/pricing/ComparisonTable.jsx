import { pricingPlans } from "../../data/pricing";

const ComparisonTable = () => {
  const comparisonFeatures = [
    {
      name: "Marketing Strategy",
      values: [true, true, true, true],
    },
    {
      name: "SEO Optimization",
      values: [true, true, true, true],
    },
    {
      name: "Social Media Marketing",
      values: [true, true, true, true],
    },
    {
      name: "Content Creation",
      values: [true, true, true, true],
    },
    {
      name: "Paid Advertising",
      values: [false, true, true, true],
    },
    {
      name: "Conversion Optimization",
      values: [false, true, true, true],
    },
    {
      name: "Advanced Analytics",
      values: [false, true, true, true],
    },
    {
      name: "Dedicated Account Manager",
      values: [false, false, true, true],
    },
    {
      name: "Custom Campaign Strategy",
      values: [false, false, true, true],
    },
    {
      name: "Priority Support",
      values: [false, false, true, true],
    },
    {
      name: "Enterprise Solutions",
      values: [false, false, false, true],
    },
    {
      name: "Dedicated Growth Team",
      values: [false, false, false, true],
    },
  ];

  return (
    <section
      id="comparison"
      className="relative overflow-hidden border-b border-white/10 bg-black"
    >
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">

        {/* Header */}
        <div className="max-w-2xl">
          <span className="inline-flex rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-2 text-xs font-medium uppercase tracking-[0.16em] text-white/45">
            Compare plans
          </span>

          <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-[-0.035em] text-white sm:text-4xl">
            Find the right level of{" "}
            <span className="text-white/40">
              support for your growth.
            </span>
          </h2>

          <p className="mt-5 max-w-xl text-base leading-7 text-white/45">
            Compare what's included in each plan and choose the capabilities
            that match your current growth stage.
          </p>
        </div>

        {/* Mobile Scroll Hint */}
        <div className="mt-8 flex items-center gap-2 text-xs text-white/30 lg:hidden">
          <span>←</span>
          <span>Swipe to compare plans</span>
          <span>→</span>
        </div>

        {/* Table */}
        <div className="mt-6 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] sm:mt-8">

          <div className="overflow-x-auto">

            <table className="w-full min-w-[850px] border-collapse text-left">

              {/* Table Header */}
              <thead>
                <tr className="border-b border-white/10">

                  {/* Feature Column */}
                  <th className="sticky left-0 z-10 min-w-[250px] bg-[#050505] px-5 py-5 text-xs font-medium uppercase tracking-[0.14em] text-white/35 sm:px-6">
                    Features
                  </th>

                  {/* Plan Columns */}
                  {pricingPlans.map((plan) => (
                    <th
                      key={plan.id}
                      className={`min-w-[150px] px-5 py-5 text-center sm:px-6 ${
                        plan.featured
                          ? "bg-white/[0.04]"
                          : ""
                      }`}
                    >
                      <div className="text-sm font-semibold text-white">
                        {plan.name}
                      </div>

                      {plan.featured && (
                        <span className="mt-2 inline-block rounded-full bg-white px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.1em] text-black">
                          Popular
                        </span>
                      )}
                    </th>
                  ))}

                </tr>
              </thead>

              {/* Table Body */}
              <tbody>

                {comparisonFeatures.map((feature, rowIndex) => (
                  <tr
                    key={feature.name}
                    className={`border-b border-white/10 last:border-b-0 ${
                      rowIndex % 2 === 1
                        ? "bg-white/[0.01]"
                        : ""
                    }`}
                  >

                    {/* Feature Name */}
                    <td className="sticky left-0 z-10 bg-[#050505] px-5 py-4 text-sm font-medium text-white/60 sm:px-6">
                      {feature.name}
                    </td>

                    {/* Feature Values */}
                    {pricingPlans.map((plan, planIndex) => (
                      <td
                        key={plan.id}
                        className={`px-5 py-4 text-center sm:px-6 ${
                          plan.featured
                            ? "bg-white/[0.025]"
                            : ""
                        }`}
                      >
                        {feature.values[planIndex] ? (
                          <span className="mx-auto flex h-6 w-6 items-center justify-center rounded-full border border-white/15 bg-white/[0.05] text-xs text-white/80">
                            ✓
                          </span>
                        ) : (
                          <span className="text-sm text-white/15">
                            —
                          </span>
                        )}
                      </td>
                    ))}

                  </tr>
                ))}

              </tbody>

            </table>

          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-6 flex flex-col gap-5 rounded-2xl border border-white/10 bg-white/[0.025] p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">

          <div>
            <p className="text-sm font-medium text-white">
              Still unsure which plan is right for you?
            </p>

            <p className="mt-1 text-sm leading-6 text-white/40">
              Talk to our team and we'll recommend the right starting point.
            </p>
          </div>

          <a
            href="#contact"
            className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition-all duration-200 hover:bg-white/90 active:scale-[0.98] sm:w-auto"
          >
            Get a recommendation

            <span className="transition-transform duration-200 group-hover:translate-x-1">
              →
            </span>
          </a>

        </div>

      </div>
    </section>
  );
};

export default ComparisonTable;