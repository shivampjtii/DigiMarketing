import { Check, Minus } from "lucide-react";

import Container from "../shared/layout/Container";
import SectionHeading from "../shared/section/SectionHeading";

const PlanComparison = () => {
  const comparisonRows = [
    {
      feature: "Digital Strategy",
      brandKickstart: true,
      growthEngine: true,
      revenueAccelerator: true,
      infinityEnterprise: true,
    },
    {
      feature: "Brand Positioning",
      brandKickstart: true,
      growthEngine: true,
      revenueAccelerator: true,
      infinityEnterprise: true,
    },
    {
      feature: "SEO Optimization",
      brandKickstart: "Basic",
      growthEngine: "Advanced",
      revenueAccelerator: "Comprehensive",
      infinityEnterprise: "Enterprise",
    },
    {
      feature: "Content Strategy",
      brandKickstart: true,
      growthEngine: true,
      revenueAccelerator: true,
      infinityEnterprise: true,
    },
    {
      feature: "Content Creation",
      brandKickstart: false,
      growthEngine: "Limited",
      revenueAccelerator: "Included",
      infinityEnterprise: "Custom",
    },
    {
      feature: "Social Media Marketing",
      brandKickstart: false,
      growthEngine: true,
      revenueAccelerator: true,
      infinityEnterprise: true,
    },
    {
      feature: "Paid Advertising",
      brandKickstart: false,
      growthEngine: "Basic Campaigns",
      revenueAccelerator: "Multi-Channel",
      infinityEnterprise: "Custom Scale",
    },
    {
      feature: "Landing Page Optimization",
      brandKickstart: false,
      growthEngine: false,
      revenueAccelerator: true,
      infinityEnterprise: true,
    },
    {
      feature: "Conversion Optimization",
      brandKickstart: false,
      growthEngine: false,
      revenueAccelerator: true,
      infinityEnterprise: true,
    },
    {
      feature: "Performance Reporting",
      brandKickstart: "Monthly",
      growthEngine: "Detailed",
      revenueAccelerator: "Advanced",
      infinityEnterprise: "Custom",
    },
    {
      feature: "Analytics & Insights",
      brandKickstart: "Basic",
      growthEngine: "Advanced",
      revenueAccelerator: "Advanced",
      infinityEnterprise: "Enterprise",
    },
    {
      feature: "Dedicated Account Manager",
      brandKickstart: false,
      growthEngine: false,
      revenueAccelerator: true,
      infinityEnterprise: true,
    },
    {
      feature: "Strategy Review",
      brandKickstart: "Monthly",
      growthEngine: "Bi-Weekly",
      revenueAccelerator: "Weekly",
      infinityEnterprise: "Custom",
    },
    {
      feature: "Support",
      brandKickstart: "Email",
      growthEngine: "Priority",
      revenueAccelerator: "Priority",
      infinityEnterprise: "Dedicated",
    },
  ];

  const renderValue = (value) => {
    if (value === true) {
      return (
        <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-orange-50 text-orange-500">
          <Check size={15} strokeWidth={3} />
        </span>
      );
    }

    if (value === false) {
      return <Minus size={18} className="text-black/25" />;
    }

    return (
      <span className="text-xs font-medium leading-5 text-black/65 sm:text-sm">
        {value}
      </span>
    );
  };

  const plans = [
    {
      key: "brandKickstart",
      name: "Brand Kickstart",
      price: "₹XX",
      subtitle: "+ 18% GST",
    },
    {
      key: "growthEngine",
      name: "Growth Engine",
      price: "₹XX",
      subtitle: "+ 18% GST",
      popular: true,
    },
    {
      key: "revenueAccelerator",
      name: "Revenue Accelerator",
      price: "₹XX",
      subtitle: "+ 18% GST",
    },
    {
      key: "infinityEnterprise",
      name: "Infinity Enterprise",
      price: "Custom",
      subtitle: "Pricing",
    },
  ];

  return (
    <section className="bg-white py-10 sm:py-14 lg:py-12">
      <Container>
        {/* Section Heading */}
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            badge="Compare Plans"
            title="Find the Right Plan for Your Growth."
            description="Compare all four plans side by side and choose the level of strategy, execution, and support that best fits your business."
            align="center"
          />
        </div>

        {/* Comparison Table */}
        <div className="mt-10 overflow-hidden rounded-3xl border border-black/10 bg-white shadow-sm lg:mt-12">
          <div className="overflow-x-auto">
            <table className="min-w-[1100px] w-full border-collapse">
              <thead>
                <tr className="border-b border-black/10">
                  {/* Features */}
                  <th className="min-w-[220px] px-6 py-6 text-left text-sm font-bold text-black sm:px-8">
                    Features
                  </th>

                  {/* Plans */}
                  {plans.map((plan) => (
                    <th
                      key={plan.key}
                      className={`min-w-[190px] px-5 py-6 text-center ${
                        plan.popular ? "bg-black" : ""
                      }`}
                    >
                      <div>
                        {plan.popular && (
                          <span className="inline-block rounded-full bg-orange-500 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                            Most Popular
                          </span>
                        )}

                        <p
                          className={`${
                            plan.popular ? "mt-3" : ""
                          } text-xs font-bold uppercase tracking-[0.12em] text-orange-500`}
                        >
                          {plan.name}
                        </p>

                        <p
                          className={`mt-3 text-base font-bold sm:text-lg ${
                            plan.popular ? "text-white" : "text-black"
                          }`}
                        >
                          {plan.price}
                        </p>

                        <p
                          className={`mt-1 text-xs font-medium ${
                            plan.popular
                              ? "text-white/45"
                              : "text-black/40"
                          }`}
                        >
                          {plan.subtitle}
                        </p>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {comparisonRows.map((row, index) => (
                  <tr
                    key={row.feature}
                    className={
                      index !== comparisonRows.length - 1
                        ? "border-b border-black/5"
                        : ""
                    }
                  >
                    {/* Feature */}
                    <td className="px-6 py-5 text-sm font-semibold text-black sm:px-8">
                      {row.feature}
                    </td>

                    {/* Brand Kickstart */}
                    <td className="px-5 py-5 text-center">
                      <div className="flex justify-center">
                        {renderValue(row.brandKickstart)}
                      </div>
                    </td>

                    {/* Growth Engine */}
                    <td className="bg-black/5 px-5 py-5 text-center">
                      <div className="flex justify-center">
                        {renderValue(row.growthEngine)}
                      </div>
                    </td>

                    {/* Revenue Accelerator */}
                    <td className="px-5 py-5 text-center">
                      <div className="flex justify-center">
                        {renderValue(row.revenueAccelerator)}
                      </div>
                    </td>

                    {/* Infinity Enterprise */}
                    <td className="px-5 py-5 text-center">
                      <div className="flex justify-center">
                        {renderValue(row.infinityEnterprise)}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Mobile Note */}
        <p className="mt-4 text-center text-xs text-black/40 lg:hidden">
          Swipe horizontally to compare all four plans.
        </p>
      </Container>
    </section>
  );
};

export default PlanComparison;