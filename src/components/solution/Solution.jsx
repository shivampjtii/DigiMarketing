const Solution = () => {
  const steps = [
    {
      number: "01",
      title: "Strategy",
      description:
        "We start with your business goals, audience, market, and competitive landscape to build a clear growth strategy.",
    },
    {
      number: "02",
      title: "Execution",
      description:
        "Our specialists turn the strategy into high-quality campaigns, content, experiences, and acquisition systems.",
    },
    {
      number: "03",
      title: "Optimization",
      description:
        "We continuously analyze performance, test new opportunities, and eliminate what isn't contributing to growth.",
    },
    {
      number: "04",
      title: "Scale",
      description:
        "Once we identify what works, we double down on the highest-performing channels and build a predictable growth engine.",
    },
  ];

  const outcomes = [
    "More qualified leads",
    "Lower acquisition costs",
    "Stronger brand visibility",
    "Higher conversion rates",
    "Clear marketing attribution",
    "Predictable growth",
  ];

  return (
    <section
      id="solution"
      className="relative overflow-hidden border-b border-white/[0.06] bg-[#080808]"
    >
      {/* Background orange glow */}
      <div className="pointer-events-none absolute right-[-180px] top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-orange-500/[0.055] blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32">

        {/* Section Header */}
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">

          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/[0.06] px-3.5 py-2">
              <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-orange-300 sm:text-xs">
                The solution
              </span>
            </div>

            <h2 className="mt-5 max-w-xl text-3xl font-semibold leading-[1.08] tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl">
              From marketing activity to
              <span className="block bg-gradient-to-r from-orange-300 via-orange-500 to-orange-300 bg-clip-text text-transparent">
                measurable growth.
              </span>
            </h2>
          </div>

          <div className="lg:ml-auto lg:max-w-xl">
            <p className="text-base leading-7 text-white/40 sm:text-lg sm:leading-8">
              We connect strategy, creative, technology, and performance
              marketing into one growth system designed around the metrics
              that actually matter to your business.
            </p>
          </div>

        </div>

        {/* Growth Framework */}
        <div className="mt-14 sm:mt-16 lg:mt-20">

          <div className="grid gap-3 lg:grid-cols-4">

            {steps.map((step, index) => (
              <div
                key={step.number}
                className="group relative rounded-2xl border border-white/[0.07] bg-[#0B0B0B] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-orange-500/25 hover:bg-[#0D0D0D] sm:p-6"
              >
                {/* Number */}
                <div className="flex items-center justify-between">

                  <span className="text-xs font-semibold tracking-[0.15em] text-orange-500/70">
                    {step.number}
                  </span>

                  {index < steps.length - 1 && (
                    <span className="hidden text-orange-500/30 lg:block">
                      →
                    </span>
                  )}

                </div>

                {/* Icon */}
                <div className="mt-8 flex h-11 w-11 items-center justify-center rounded-xl border border-orange-500/15 bg-orange-500/[0.06] text-orange-400">
                  {index === 0 && "◎"}
                  {index === 1 && "↗"}
                  {index === 2 && "⌁"}
                  {index === 3 && "↗"}
                </div>

                {/* Content */}
                <h3 className="mt-6 text-lg font-semibold tracking-tight text-white sm:text-xl">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-white/35">
                  {step.description}
                </p>

                {/* Bottom accent */}
                <div className="mt-7 h-px w-8 bg-orange-500/40 transition-all duration-300 group-hover:w-16 group-hover:bg-orange-400" />
              </div>
            ))}

          </div>

        </div>

        {/* Outcomes */}
        <div className="mt-14 overflow-hidden rounded-2xl border border-white/[0.07] bg-[#0A0A0A] sm:mt-16 lg:mt-20">

          <div className="grid lg:grid-cols-[0.8fr_1.2fr]">

            {/* Left */}
            <div className="relative overflow-hidden border-b border-white/[0.07] p-6 sm:p-8 lg:border-b-0 lg:border-r lg:p-10">

              <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-orange-500/[0.08] blur-3xl" />

              <div className="relative">

                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-orange-400">
                  What changes
                </p>

                <h3 className="mt-4 max-w-sm text-2xl font-semibold leading-tight tracking-[-0.03em] text-white sm:text-3xl">
                  Marketing becomes a growth system.
                </h3>

                <p className="mt-4 max-w-md text-sm leading-6 text-white/35">
                  Every channel has a role, every campaign has a purpose, and
                  every important decision is backed by performance data.
                </p>

              </div>

            </div>

            {/* Right */}
            <div className="p-6 sm:p-8 lg:p-10">

              <div className="grid gap-x-8 gap-y-5 sm:grid-cols-2">

                {outcomes.map((outcome, index) => (
                  <div
                    key={outcome}
                    className="flex items-center gap-3 border-b border-white/[0.06] pb-4"
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-orange-500/[0.10] text-xs font-semibold text-orange-400">
                      ✓
                    </span>

                    <span className="text-sm font-medium text-white/65">
                      {outcome}
                    </span>
                  </div>
                ))}

              </div>

            </div>

          </div>

        </div>

        {/* Bottom CTA */}
        <div className="mt-12 flex flex-col items-center text-center sm:mt-14">

          <p className="text-sm text-white/30">
            Ready to replace guesswork with a growth strategy?
          </p>

          <a
            href="#services"
            className="group mt-4 inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-orange-300"
          >
            Explore our growth services

            <span className="text-orange-400 transition-transform duration-200 group-hover:translate-x-1">
              →
            </span>
          </a>

        </div>

      </div>
    </section>
  );
};

export default Solution;