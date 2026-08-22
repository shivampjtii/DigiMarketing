import {
  BarChart3,
  Lightbulb,
  Rocket,
  Target,
  ArrowRight,
} from "lucide-react";

import { Link } from "react-router-dom";

import Container from "../shared/layout/Container";
import SectionHeading from "../shared/section/SectionHeading";

const Solution = () => {
  const solutions = [
    {
      number: "01",
      icon: Target,
      title: "Understand Your Business",
      description:
        "We start by understanding your business, audience, competitors, and growth objectives before creating a strategy.",
    },
    {
      number: "02",
      icon: Lightbulb,
      title: "Build the Right Strategy",
      description:
        "We create a focused digital marketing strategy designed around the channels and opportunities that matter most.",
    },
    {
      number: "03",
      icon: Rocket,
      title: "Execute With Precision",
      description:
        "Our team turns strategy into action through creative campaigns, optimized content, and performance-focused execution.",
    },
    {
      number: "04",
      icon: BarChart3,
      title: "Measure and Improve",
      description:
        "We continuously analyze performance, identify opportunities, and improve campaigns to drive better results.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-black py-16 sm:py-20 lg:py-28">
      {/* Background decorations */}
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-orange-500/10 blur-3xl" />

      <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-orange-600/10 blur-3xl" />

      <Container className="relative">
        {/* Heading */}
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-orange-400">
            Our Solution
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            A Clear Process Built for{" "}
            <span className="text-orange-500">Measurable Growth.</span>
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-white/60 sm:text-lg sm:leading-8">
            We replace scattered marketing efforts with a structured approach
            that connects strategy, execution, and performance.
          </p>
        </div>

        {/* Solution Steps */}
        <div className="relative mt-10 grid gap-4 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4 lg:gap-6">
          {/* Connecting line - desktop only */}
          <div className="absolute left-0 right-0 top-[52px] hidden h-px bg-gradient-to-r from-transparent via-orange-500/40 to-transparent lg:block" />

          {solutions.map((solution) => {
            const Icon = solution.icon;

            return (
              <article
                key={solution.number}
                className="group relative rounded-3xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-orange-500/40 hover:bg-white/[0.07] sm:p-6"
              >
                {/* Number */}
                <span className="absolute right-5 top-5 text-sm font-bold text-orange-400/60">
                  {solution.number}
                </span>

                {/* Icon */}
                <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500 text-white shadow-lg shadow-orange-500/20 transition-transform duration-300 group-hover:scale-110">
                  <Icon size={25} strokeWidth={2} />
                </div>

                {/* Content */}
                <h3 className="mt-6 text-lg font-bold text-white sm:text-xl">
                  {solution.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-white/55">
                  {solution.description}
                </p>

                {/* Hover accent */}
                <div className="mt-6 h-px w-full bg-white/10">
                  <div className="h-full w-0 bg-orange-500 transition-all duration-500 group-hover:w-full" />
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 flex flex-col gap-5 rounded-3xl border border-orange-500/20 bg-orange-500/[0.08] p-6 sm:p-8 lg:mt-14 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h3 className="text-xl font-bold text-white sm:text-2xl">
              Stop guessing. Start growing with a clear strategy.
            </h3>

            <p className="mt-2 text-sm leading-6 text-white/60 sm:text-base">
              Let's create a digital growth strategy tailored to your business.
            </p>
          </div>

          <Link
            to="/contact"
            className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-orange-500 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-orange-600 active:scale-[0.98]"
          >
            Talk to an Expert

            <ArrowRight
              size={18}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default Solution;