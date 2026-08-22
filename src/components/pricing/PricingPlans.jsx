import { Check, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import Container from "../shared/layout/Container";
import SectionHeading from "../shared/section/SectionHeading";

const PricingPlans = () => {
  const plans = [
    {
      name: "Brand Kickstart",
      targetUser: "For startups and businesses building their digital presence.",
      description:
        "A focused foundation for businesses that need the right strategy and essential digital marketing support.",
      price: "₹XX",
      gst: "+ 18% GST",
      period: "/ month",
      features: [
        "Digital marketing strategy",
        "Basic SEO optimization",
        "Monthly content planning",
        "Social media support",
        "Monthly performance reporting",
      ],
      buttonText: "Buy Now",
      popular: false,
    },
    {
      name: "Growth Engine",
      targetUser: "For growing businesses ready to generate consistent leads.",
      description:
        "A growth-focused plan designed to strengthen visibility, engagement, and lead generation across key channels.",
      price: "₹XX",
      gst: "+ 18% GST",
      period: "/ month",
      features: [
        "Everything in Brand Kickstart",
        "Advanced SEO strategy",
        "Content creation support",
        "Social media management",
        "Campaign optimization",
        "Detailed performance reporting",
      ],
      buttonText: "Buy Now",
      popular: true,
    },
    {
      name: "Revenue Accelerator",
      targetUser: "For ambitious businesses focused on revenue and ROI.",
      description:
        "A comprehensive marketing plan built to improve conversions, optimize campaigns, and accelerate measurable growth.",
      price: "₹XX",
      gst: "+ 18% GST",
      period: "/ month",
      features: [
        "Everything in Growth Engine",
        "Paid advertising campaigns",
        "Conversion optimization",
        "Advanced analytics",
        "Website performance optimization",
        "Priority growth support",
      ],
      buttonText: "Buy Now",
      popular: false,
    },
    {
      name: "Infinity Enterprise",
      targetUser: "For established businesses with complex or large-scale requirements.",
      description:
        "A fully customized digital marketing solution built around your business goals, team, and growth requirements.",
      price: "Custom",
      gst: "Pricing",
      period: "",
      features: [
        "Custom digital growth strategy",
        "Multi-channel marketing",
        "Dedicated strategy support",
        "Custom campaigns and reporting",
        "Advanced analytics and optimization",
        "Enterprise-level flexibility",
      ],
      buttonText: "Contact Us",
      popular: false,
    },
  ];

  return (
    <section
      id="pricing-plans"
      className="scroll-mt-20 bg-orange-50/50 py-10 sm:py-14 lg:py-12"
    >
      <Container>
        {/* Section Heading */}
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            badge="Pricing Plans"
            title="Choose the Right Plan for Your Growth."
            description="Flexible digital marketing plans designed for businesses at different stages—from building your digital foundation to scaling revenue with a fully customized strategy."
            align="center"
          />
        </div>

        {/* Pricing Cards */}
        <div className="mx-auto mt-12 grid max-w-7xl gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-6">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`relative flex min-h-full flex-col rounded-3xl border p-6 sm:p-7 ${
                plan.popular
                  ? "border-orange-500 bg-black shadow-xl shadow-orange-500/10"
                  : "border-black/10 bg-white shadow-sm"
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="whitespace-nowrap rounded-full bg-orange-500 px-4 py-1.5 text-xs font-bold text-white shadow-lg">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Plan Name */}
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-orange-500">
                  {plan.name}
                </p>

                {/* Target User */}
                <p
                  className={`mt-4 min-h-[72px] text-sm font-semibold leading-6 ${
                    plan.popular ? "text-white" : "text-black"
                  }`}
                >
                  {plan.targetUser}
                </p>

                {/* Description */}
                <p
                  className={`mt-3 min-h-[96px] text-sm leading-6 ${
                    plan.popular ? "text-white/60" : "text-black/60"
                  }`}
                >
                  {plan.description}
                </p>

                {/* Price */}
                <div className="mt-6">
                  <div className="flex flex-wrap items-end gap-x-2">
                    <span
                      className={`text-3xl font-bold tracking-tight sm:text-4xl ${
                        plan.popular ? "text-white" : "text-black"
                      }`}
                    >
                      {plan.price}
                    </span>

                    {plan.period && (
                      <span
                        className={`mb-1 text-sm ${
                          plan.popular ? "text-white/50" : "text-black/45"
                        }`}
                      >
                        {plan.period}
                      </span>
                    )}
                  </div>

                  <p
                    className={`mt-1 text-xs ${
                      plan.popular ? "text-white/50" : "text-black/45"
                    }`}
                  >
                    {plan.gst}
                  </p>
                </div>
              </div>

              {/* Divider */}
              <div
                className={`my-7 h-px ${
                  plan.popular ? "bg-white/10" : "bg-black/10"
                }`}
              />

              {/* Features */}
              <div className="flex-1">
                <p
                  className={`text-sm font-bold ${
                    plan.popular ? "text-white" : "text-black"
                  }`}
                >
                  What's included
                </p>

                <ul className="mt-5 space-y-3">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className={`flex items-start gap-3 text-sm leading-6 ${
                        plan.popular ? "text-white/65" : "text-black/60"
                      }`}
                    >
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-orange-500/10 text-orange-500">
                        <Check size={13} strokeWidth={3} />
                      </span>

                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <Link
                to="/contact"
                className={`group mt-8 inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3.5 text-sm font-semibold transition-all duration-200 active:scale-[0.98] ${
                  plan.popular
                    ? "bg-orange-500 text-white hover:bg-orange-600"
                    : "border border-black/10 bg-white text-black hover:border-orange-300 hover:bg-orange-50 hover:text-orange-600"
                }`}
              >
                {plan.buttonText}

                <ArrowRight
                  size={17}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </Link>
            </article>
          ))}
        </div>

        {/* Pricing Note */}
        <div className="mx-auto mt-8 max-w-3xl text-center">
          <p className="text-sm leading-7 text-black/50">
            All prices are subject to 18% GST where applicable. Need a solution
            tailored to your business? Our Infinity Enterprise plan can be
            customized around your specific goals and requirements.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default PricingPlans;