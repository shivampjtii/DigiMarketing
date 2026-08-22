import {
  BarChart3,
  Lightbulb,
  Rocket,
  Search,
  Target,
} from "lucide-react";

import Container from "../shared/layout/Container";
import SectionHeading from "../shared/section/SectionHeading";

const ServiceProcess = () => {
  const steps = [
    {
      number: "01",
      icon: Search,
      title: "Discover",
      description:
        "We learn about your business, audience, market, current challenges, and the opportunities that can create the most impact.",
    },
    {
      number: "02",
      icon: Lightbulb,
      title: "Strategize",
      description:
        "We turn insights into a focused plan with clear priorities, the right channels, and measurable goals.",
    },
    {
      number: "03",
      icon: Rocket,
      title: "Execute",
      description:
        "Our team puts the strategy into action through campaigns, content, technology, and carefully planned execution.",
    },
    {
      number: "04",
      icon: BarChart3,
      title: "Measure",
      description:
        "We track meaningful performance data to understand what is working and where improvements are needed.",
    },
    {
      number: "05",
      icon: Target,
      title: "Optimize",
      description:
        "We continuously refine the approach, improve performance, and focus on creating stronger results over time.",
    },
  ];

  return (
    <section className="bg-white py-10 sm:py-14 lg:py-12">
      <Container>
        {/* Heading */}
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            badge="Our Process"
            title="From First Conversation to Continuous Growth."
            description="Our process is designed to create clarity at every stage, so every action has a purpose and every decision is connected to your goals."
            align="center"
          />
        </div>

        {/* Process */}
        <div className="relative mt-12 lg:mt-16">
          {/* Desktop Connecting Line */}
          <div className="absolute left-[10%] right-[10%] top-10 hidden h-px bg-black/10 xl:block" />

          <div className="relative grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 xl:gap-5">
            {steps.map((step) => {
              const Icon = step.icon;

              return (
                <article
                  key={step.number}
                  className="group relative rounded-3xl border border-black/10 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-xl hover:shadow-black/5 sm:p-7"
                >
                  {/* Icon */}
                  <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full border border-orange-100 bg-white shadow-sm">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-50 text-orange-500 transition-all duration-300 group-hover:scale-110 group-hover:bg-orange-500 group-hover:text-white">
                      <Icon size={22} />
                    </div>
                  </div>

                  {/* Number */}
                  <p className="mt-6 text-xs font-bold uppercase tracking-[0.18em] text-orange-500">
                    Step {step.number}
                  </p>

                  {/* Title */}
                  <h3 className="mt-3 text-xl font-bold tracking-tight text-black">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-sm leading-7 text-black/60">
                    {step.description}
                  </p>

                  {/* Accent */}
                  <div className="mt-6 h-1 w-8 rounded-full bg-orange-500 transition-all duration-300 group-hover:w-14" />
                </article>
              );
            })}
          </div>
        </div>

        {/* Bottom Message */}
        <div className="mt-10 rounded-3xl border border-orange-100 bg-orange-50/60 p-6 text-center sm:mt-14 sm:p-8">
          <p className="mx-auto max-w-2xl text-sm leading-7 text-black/65 sm:text-base">
            <span className="font-bold text-black">No guesswork.</span> No
            disconnected activities. Just a clear process designed to move your
            business forward.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default ServiceProcess;