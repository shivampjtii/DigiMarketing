import { ArrowRight, Check, Plus } from "lucide-react";
import { Link } from "react-router-dom";

import Container from "../shared/layout/Container";
import SectionHeading from "../shared/section/SectionHeading";

const PricingAddons = () => {
  const addons = [
    {
      title: "Additional Content",
      description:
        "Add more strategic content to support campaigns, SEO, and audience engagement.",
      price: "From ₹4,999",
      features: [
        "Additional content pieces",
        "Strategy-aligned messaging",
        "Flexible monthly requirements",
      ],
    },
    {
      title: "Paid Advertising",
      description:
        "Add focused paid campaigns to reach the right audience and create measurable opportunities.",
      price: "From ₹7,999",
      features: [
        "Campaign setup",
        "Audience targeting",
        "Performance optimization",
      ],
    },
    {
      title: "Website Support",
      description:
        "Keep your website updated, optimized, and aligned with your changing business requirements.",
      price: "From ₹5,999",
      features: [
        "Website updates",
        "Performance improvements",
        "Ongoing technical support",
      ],
    },
  ];

  return (
    <section className="bg-orange-50/50 py-10 sm:py-14 lg:py-12">
      <Container>
        {/* Heading */}
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            badge="Add-On Services"
            title="Need Something More? Build a Plan Around Your Business."
            description="Add extra services when your business needs additional support. Choose what creates the most value without paying for things you don't need."
            align="center"
          />
        </div>

        {/* Add-on Cards */}
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-6">
          {addons.map((addon) => (
            <article
              key={addon.title}
              className="group flex flex-col rounded-3xl border border-black/10 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-xl hover:shadow-black/5 sm:p-8"
            >
              {/* Icon */}
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-50 text-orange-500 transition-all duration-300 group-hover:scale-110 group-hover:bg-orange-500 group-hover:text-white">
                <Plus size={22} />
              </div>

              {/* Content */}
              <h3 className="mt-6 text-xl font-bold tracking-tight text-black">
                {addon.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-black/60">
                {addon.description}
              </p>

              {/* Price */}
              <div className="mt-6 border-y border-black/5 py-4">
                <p className="text-xs font-medium uppercase tracking-[0.14em] text-black/40">
                  Starting at
                </p>

                <p className="mt-1 text-2xl font-bold tracking-tight text-black">
                  {addon.price}
                </p>
              </div>

              {/* Features */}
              <ul className="mt-6 flex-1 space-y-3">
                {addon.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-sm leading-6 text-black/60"
                  >
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-orange-50 text-orange-500">
                      <Check size={13} strokeWidth={3} />
                    </span>

                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Link
                to="/contact"
                className="group/link mt-8 inline-flex items-center gap-2 text-sm font-bold text-black transition-colors hover:text-orange-500"
              >
                Add to your plan

                <ArrowRight
                  size={17}
                  className="transition-transform duration-200 group-hover/link:translate-x-1"
                />
              </Link>
            </article>
          ))}
        </div>

        {/* Bottom Message */}
        <div className="mt-10 rounded-3xl border border-orange-100 bg-white p-6 text-center shadow-sm sm:mt-14 sm:p-8">
          <p className="text-sm font-medium text-black/70 sm:text-base">
            Don't see exactly what you need?
          </p>

          <Link
            to="/contact"
            className="mt-2 inline-flex items-center gap-2 text-sm font-bold text-orange-500 transition-colors hover:text-orange-600"
          >
            Let's create a custom solution
            <ArrowRight size={17} />
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default PricingAddons;