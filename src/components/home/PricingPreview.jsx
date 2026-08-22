import { ArrowRight, Check } from "lucide-react";
import { Link } from "react-router-dom";

import Container from "../shared/layout/Container";
import SectionHeading from "../shared/section/SectionHeading";
import PricingCard from "../shared/cards/PricingCard";

const PricingPreview = () => {
  const plans = [
    {
      name: "Brand Kickstart",
      description:
        "For businesses building a professional digital presence and strong marketing foundation.",
      price: "₹XX",
      period: "/month + 18% GST",
      features: [
        "Digital marketing strategy",
        "Social media management",
        "Basic content creation",
        "Monthly performance report",
        "Email support",
      ],
      buttonText: "Buy Now",
    },
    {
      name: "Growth Engine",
      description:
        "For businesses ready to generate consistent visibility, engagement, and qualified leads.",
      price: "₹XX",
      period: "/month + 18% GST",
      features: [
        "Everything in Brand Kickstart",
        "SEO & content strategy",
        "Social media campaigns",
        "Lead generation campaigns",
        "Monthly strategy review",
      ],
      buttonText: "Buy Now",
      popular: true,
    },
    {
      name: "Revenue Accelerator",
      description:
        "For growth-focused businesses looking to improve conversions and scale revenue.",
      price: "₹XX",
      period: "/month + 18% GST",
      features: [
        "Everything in Growth Engine",
        "Performance marketing",
        "Conversion optimization",
        "Advanced analytics",
        "Dedicated growth support",
      ],
      buttonText: "Buy Now",
    },
    {
      name: "Infinity Enterprise",
      description:
        "For established businesses that need a completely customized multi-channel growth strategy.",
      price: "Custom",
      period: "Tailored pricing",
      features: [
        "Complete custom growth strategy",
        "Multi-channel marketing campaigns",
        "Dedicated growth team",
        "Advanced reporting & analytics",
        "Priority support and consulting",
      ],
      buttonText: "Contact Us",
    },
  ];

  return (
    <section className="bg-orange-50/50 py-12 sm:py-14 lg:py-16">
      <Container>
        {/* Heading */}
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            badge="Pricing Plans"
            title="Choose the Right Plan for Your Business Growth."
            description="Flexible digital marketing solutions designed for businesses at every stage of their growth journey."
            align="left"
            className="max-w-2xl"
          />

          <Link
            to="/pricing"
            className="group inline-flex w-fit shrink-0 items-center gap-2 text-sm font-bold text-black transition-colors hover:text-orange-500"
          >
            Compare All Plans

            <ArrowRight
              size={18}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </Link>
        </div>

        {/* Pricing Cards */}
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:mt-10 lg:grid-cols-4 lg:items-stretch lg:gap-6">
          {plans.map((plan) => (
            <PricingCard
              key={plan.name}
              name={plan.name}
              description={plan.description}
              price={plan.price}
              period={plan.period}
              features={plan.features}
              buttonText={plan.buttonText}
              popular={plan.popular}
            />
          ))}
        </div>

        {/* Bottom Note */}
        <div className="mt-8 flex flex-col items-center justify-center gap-3 text-center sm:flex-row lg:mt-10">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-orange-100 text-orange-600">
            <Check size={18} />
          </div>

          <p className="text-sm text-black/60">
            Not sure which plan is right for your business?{" "}
            <Link
              to="/contact"
              className="font-semibold text-orange-600 transition-colors hover:text-orange-700"
            >
              Talk to our team for a tailored recommendation.
            </Link>
          </p>
        </div>
      </Container>
    </section>
  );
};

export default PricingPreview;