import {
  ArrowRight,
  BarChart3,
  Check,
  Code2,
  Megaphone,
  Search,
} from "lucide-react";
import { Link } from "react-router-dom";

import Container from "../shared/layout/Container";
import SectionHeading from "../shared/section/SectionHeading";

const ServiceDetails = () => {
  const services = [
    {
      icon: Search,
      number: "01",
      title: "SEO & Digital Strategy",
      description:
        "Build a strong digital foundation with a clear strategy designed around your audience, competition, and business goals.",
      points: [
        "Technical and on-page SEO",
        "Keyword and competitor research",
        "Content and growth strategy",
        "Long-term organic visibility",
      ],
    },
    {
      icon: Megaphone,
      number: "02",
      title: "Performance Marketing",
      description:
        "Create campaigns that focus on more than impressions and clicks by connecting marketing activity to meaningful business outcomes.",
      points: [
        "Paid advertising campaigns",
        "Audience targeting",
        "Conversion optimization",
        "Performance monitoring",
      ],
    },
    {
      icon: Code2,
      number: "03",
      title: "Website Development",
      description:
        "Create fast, modern, and conversion-focused digital experiences that give your business a stronger online presence.",
      points: [
        "Modern responsive websites",
        "User-focused design",
        "Fast and scalable development",
        "Conversion-focused experiences",
      ],
    },
    {
      icon: BarChart3,
      number: "04",
      title: "Analytics & Optimization",
      description:
        "Turn performance data into useful insights and continuously improve your digital strategy based on what actually works.",
      points: [
        "Performance tracking",
        "Clear reporting",
        "Data-driven insights",
        "Continuous optimization",
      ],
    },
  ];

  return (
    <section className="bg-orange-50/50 py-10 sm:py-14 lg:py-12">
      <Container>
        {/* Section Heading */}
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            badge="Service Details"
            title="Built Around What Your Business Actually Needs."
            description="Every business is different. We combine the right services into a focused approach based on your goals, challenges, and growth opportunities."
            align="center"
          />
        </div>

        {/* Service Details */}
        <div className="mt-12 space-y-6 lg:mt-16 lg:space-y-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isReversed = index % 2 !== 0;

            return (
              <article
                key={service.title}
                className="overflow-hidden rounded-3xl border border-black/10 bg-white"
              >
                <div
                  className={`grid items-center lg:grid-cols-2 ${
                    isReversed ? "lg:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  {/* Visual Side */}
                  <div className="relative min-h-[280px] overflow-hidden bg-black p-6 sm:min-h-[340px] sm:p-8 lg:min-h-full lg:p-12">
                    {/* Decorative Background */}
                    <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-orange-500/20 blur-3xl" />

                    <div className="absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-orange-500/10 blur-3xl" />

                    <div className="relative flex h-full flex-col justify-between">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold uppercase tracking-[0.18em] text-orange-500">
                          Service {service.number}
                        </span>

                        <span className="text-5xl font-black tracking-tighter text-white/10 sm:text-6xl">
                          {service.number}
                        </span>
                      </div>

                      <div className="mt-12">
                        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-500 text-white shadow-lg shadow-orange-500/20">
                          <Icon size={30} />
                        </div>

                        <p className="mt-6 max-w-sm text-xl font-bold leading-tight text-white sm:text-2xl">
                          Strategy and execution working together for meaningful
                          progress.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Content Side */}
                  <div className="p-6 sm:p-8 lg:p-12">
                    <span className="text-xs font-bold uppercase tracking-[0.16em] text-orange-500">
                      {service.number} — Our Approach
                    </span>

                    <h3 className="mt-4 text-2xl font-bold tracking-tight text-black sm:text-3xl">
                      {service.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-black/60 sm:text-base sm:leading-8">
                      {service.description}
                    </p>

                    <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                      {service.points.map((point) => (
                        <li
                          key={point}
                          className="flex items-start gap-2 text-sm leading-6 text-black/70"
                        >
                          <Check
                            size={18}
                            className="mt-0.5 shrink-0 text-orange-500"
                          />

                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      to="/contact"
                      className="group mt-8 inline-flex items-center gap-2 text-sm font-bold text-black transition-colors hover:text-orange-500"
                    >
                      Discuss this service

                      <ArrowRight
                        size={18}
                        className="transition-transform duration-200 group-hover:translate-x-1"
                      />
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default ServiceDetails;