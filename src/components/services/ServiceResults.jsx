import {
  ArrowUpRight,
  BarChart3,
  CircleCheck,
  TrendingUp,
  Users,
} from "lucide-react";

import Container from "../shared/layout/Container";
import SectionHeading from "../shared/section/SectionHeading";

const ServiceResults = () => {
  const results = [
    {
      icon: TrendingUp,
      title: "Stronger Growth Direction",
      description:
        "Clear strategies designed around the opportunities that can make the biggest difference to your business.",
    },
    {
      icon: Users,
      title: "Better Audience Connection",
      description:
        "Marketing and digital experiences built to reach, engage, and convert the right people.",
    },
    {
      icon: BarChart3,
      title: "Clearer Performance Insights",
      description:
        "Meaningful reporting that helps you understand what is working and where improvements can be made.",
    },
  ];

  const principles = [
    "Focus on metrics that matter",
    "Make decisions based on real insights",
    "Continuously improve performance",
    "Keep business goals at the center",
  ];

  return (
    <section className="bg-orange-50/50 py-10 sm:py-14 lg:py-12">
      <Container>
        {/* Heading */}
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            badge="Results That Matter"
            title="Focused on Progress, Not Just Activity."
            description="We believe good digital work should move your business forward. That means focusing on meaningful outcomes instead of simply producing more activity."
            align="center"
          />
        </div>

        {/* Result Cards */}
        <div className="mt-12 grid gap-5 md:grid-cols-3 lg:mt-16 lg:gap-6">
          {results.map((result, index) => {
            const Icon = result.icon;

            return (
              <article
                key={result.title}
                className="group relative overflow-hidden rounded-3xl border border-black/10 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-xl hover:shadow-black/5 sm:p-8"
              >
                {/* Background Number */}
                <span className="absolute -right-2 -top-6 text-8xl font-black tracking-tighter text-orange-500/[0.06]">
                  0{index + 1}
                </span>

                <div className="relative">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-50 text-orange-500 transition-all duration-300 group-hover:scale-110 group-hover:bg-orange-500 group-hover:text-white">
                    <Icon size={25} />
                  </div>

                  <h3 className="mt-7 text-xl font-bold tracking-tight text-black">
                    {result.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-black/60">
                    {result.description}
                  </p>

                  <div className="mt-7 flex items-center gap-2 text-sm font-semibold text-orange-500">
                    <span>Outcome focused</span>

                    <ArrowUpRight
                      size={17}
                      className="transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom Result Statement */}
        <div className="mt-10 overflow-hidden rounded-3xl bg-black sm:mt-14">
          <div className="grid items-center gap-8 p-7 sm:p-10 lg:grid-cols-[1fr_0.9fr] lg:gap-12 lg:p-14">
            {/* Left Content */}
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-orange-500">
                Our Measurement Philosophy
              </p>

              <h3 className="mt-4 text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl lg:text-4xl">
                The goal is not more marketing.
                <span className="block text-orange-500">
                  The goal is better progress.
                </span>
              </h3>

              <p className="mt-5 max-w-xl text-sm leading-7 text-white/60 sm:text-base sm:leading-8">
                Every strategy, campaign, and digital experience should have a
                reason behind it. We focus on understanding performance and
                using what we learn to create stronger results over time.
              </p>
            </div>

            {/* Principles */}
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm sm:p-8">
              <p className="text-sm font-bold text-white">
                What guides our decisions
              </p>

              <ul className="mt-6 space-y-4">
                {principles.map((principle) => (
                  <li
                    key={principle}
                    className="flex items-start gap-3 text-sm leading-6 text-white/65"
                  >
                    <CircleCheck
                      size={20}
                      className="mt-0.5 shrink-0 text-orange-500"
                    />

                    <span>{principle}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ServiceResults;