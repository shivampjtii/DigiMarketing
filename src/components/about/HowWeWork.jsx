import { ArrowUpRight, Search, Target, Rocket, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";

import Container from "../shared/layout/Container";
import SectionHeading from "../shared/section/SectionHeading";

const HowWeWork = () => {
  const steps = [
    {
      number: "01",
      icon: Search,
      title: "Understand",
      description:
        "We start by understanding your business, audience, market, challenges, and growth objectives.",
    },
    {
      number: "02",
      icon: Target,
      title: "Strategize",
      description:
        "We identify the biggest opportunities and build a focused strategy around meaningful business goals.",
    },
    {
      number: "03",
      icon: Rocket,
      title: "Execute",
      description:
        "Our team turns the strategy into action with carefully planned campaigns, content, and digital experiences.",
    },
    {
      number: "04",
      icon: BarChart3,
      title: "Optimize",
      description:
        "We measure performance, learn from the data, and continuously improve the strategy for better results.",
    },
  ];

  return (
    <section className="bg-orange-50/50 py-10 sm:py-14 lg:py-12">
      <Container>
        {/* Section Heading */}
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            badge="How We Work"
            title="A Clear Process Built Around Your Growth."
            description="We combine strategy, execution, and continuous optimization to turn your digital presence into meaningful business results."
            align="center"
          />
        </div>

        {/* Process Steps */}
        <div className="relative mt-12 lg:mt-16">
          {/* Desktop Connecting Line */}
          <div className="absolute left-[12.5%] right-[12.5%] top-10 hidden h-px bg-black/10 lg:block" />

          <div className="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {steps.map((step) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.number}
                  className="group relative rounded-3xl border border-black/10 bg-white p-6 transition-all duration-300 hover:-translate-y-2 hover:border-orange-200 hover:shadow-xl hover:shadow-black/5 sm:p-7"
                >
                  {/* Step Number */}
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold tracking-[0.18em] text-black/35">
                      STEP {step.number}
                    </span>

                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-50 text-orange-500 transition-transform duration-300 group-hover:scale-110">
                      <Icon size={21} />
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="mt-8 text-xl font-bold tracking-tight text-black">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-black/60">
                    {step.description}
                  </p>

                  {/* Bottom Number */}
                  <div className="mt-8 border-t border-black/5 pt-5">
                    <span className="text-4xl font-black tracking-tighter text-orange-500/15">
                      {step.number}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 flex flex-col items-center justify-between gap-5 rounded-3xl border border-black/10 bg-white p-6 sm:flex-row sm:p-8">
          <div>
            <h3 className="text-lg font-bold text-black sm:text-xl">
              Ready to start growing with a clear strategy?
            </h3>

            <p className="mt-2 text-sm leading-6 text-black/60">
              Let's discuss your goals and identify the right next steps for
              your business.
            </p>
          </div>

          <Link
            to="/contact"
            className="group inline-flex shrink-0 items-center gap-2 rounded-xl bg-orange-500 px-5 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-orange-600 active:scale-[0.98]"
          >
            Start a Conversation

            <ArrowUpRight
              size={17}
              className="transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default HowWeWork;