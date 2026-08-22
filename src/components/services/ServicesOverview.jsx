import {
  BarChart3,
  Code2,
  Megaphone,
  PenTool,
  Search,
  Share2,
} from "lucide-react";

import Container from "../shared/layout/Container";
import SectionHeading from "../shared/section/SectionHeading";

const ServicesOverview = () => {
  const services = [
    {
      icon: Search,
      number: "01",
      title: "SEO & Strategy",
      description:
        "Build a stronger foundation with research, search optimization, and a strategy connected to your business goals.",
      features: ["SEO Audits", "Keyword Strategy", "Growth Planning"],
    },
    {
      icon: PenTool,
      number: "02",
      title: "Content Strategy",
      description:
        "Create purposeful content that communicates your value, attracts the right audience, and supports long-term growth.",
      features: ["Content Planning", "Copywriting", "Brand Messaging"],
    },
    {
      icon: Share2,
      number: "03",
      title: "Social Media",
      description:
        "Build a stronger and more consistent presence across the platforms where your audience spends their time.",
      features: ["Social Strategy", "Content Creation", "Community Growth"],
    },
    {
      icon: Megaphone,
      number: "04",
      title: "Performance Marketing",
      description:
        "Launch and optimize campaigns designed to turn attention into qualified leads, customers, and measurable outcomes.",
      features: ["Paid Campaigns", "Conversion Tracking", "Optimization"],
    },
    {
      icon: Code2,
      number: "05",
      title: "Web Development",
      description:
        "Create fast, modern, and conversion-focused websites that give your business a stronger digital foundation.",
      features: ["Website Design", "Development", "Conversion Focus"],
    },
    {
      icon: BarChart3,
      number: "06",
      title: "Analytics & Growth",
      description:
        "Turn data into useful insights and make better decisions by tracking the metrics that matter to your business.",
      features: ["Performance Analysis", "Reporting", "Growth Insights"],
    },
  ];

  return (
    <section className="bg-white py-10 sm:py-14 lg:py-12">
      <Container>
        {/* Heading */}
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            badge="What We Do"
            title="The Right Services for Every Stage of Growth."
            description="We combine strategy, creativity, technology, and data to create a connected digital approach instead of a collection of disconnected activities."
            align="center"
          />
        </div>

        {/* Services Grid */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-6">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className="group relative overflow-hidden rounded-3xl border border-black/10 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-xl hover:shadow-black/5 sm:p-7"
              >
                {/* Background Number */}
                <span className="pointer-events-none absolute -right-3 -top-7 text-8xl font-black tracking-tighter text-orange-500/[0.06]">
                  {service.number}
                </span>

                <div className="relative">
                  {/* Icon and Number */}
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-50 text-orange-500 transition-all duration-300 group-hover:scale-110 group-hover:bg-orange-500 group-hover:text-white">
                      <Icon size={22} />
                    </div>

                    <span className="text-xs font-bold tracking-[0.16em] text-black/30">
                      {service.number}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="mt-7 text-xl font-bold tracking-tight text-black">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-black/60">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="mt-6 space-y-2 border-t border-black/5 pt-5">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-xs font-medium text-black/60 sm:text-sm"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default ServicesOverview;