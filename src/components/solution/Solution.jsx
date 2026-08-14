const Solution = () => {
  const steps = [
    {
      number: "01",
      title: "Strategy",
      description:
        "We understand your audience, goals, market, and competitors to build a growth strategy around your business.",
    },
    {
      number: "02",
      title: "Execution",
      description:
        "Our specialists turn the strategy into campaigns, content, creative, SEO, and experiences that drive action.",
    },
    {
      number: "03",
      title: "Optimization",
      description:
        "We continuously analyze performance, identify opportunities, and optimize every channel for better efficiency.",
    },
    {
      number: "04",
      title: "Growth",
      description:
        "The result is a connected marketing engine designed to generate qualified demand and sustainable revenue.",
    },
  ];

  return (
    <section
      id="solutions"
      className="relative overflow-hidden border-b border-white/10 bg-black"
    >
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32">

        {/* Header */}
        <div className="max-w-3xl">
          <span className="inline-flex rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-2 text-xs font-medium uppercase tracking-[0.16em] text-white/45">
            Our approach
          </span>

          <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-[-0.035em] text-white sm:text-4xl lg:text-5xl">
            One connected system.
            <br />
            <span className="text-white/40">
              Built for measurable growth.
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-7 text-white/45 sm:text-lg sm:leading-8">
            Instead of treating every marketing channel separately, we connect
            strategy, creative, technology, and performance into one growth
            system built around your business objectives.
          </p>
        </div>

        {/* Growth Framework */}
        <div className="mt-14 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] lg:mt-20">

          {/* Framework Header */}
          <div className="border-b border-white/10 px-5 py-5 sm:px-7 lg:px-8">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-medium text-white">
                  The growth framework
                </p>

                <p className="mt-1 text-xs text-white/35">
                  From strategy to measurable business outcomes
                </p>
              </div>

              <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-black/30 px-3 py-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-white" />

                <span className="text-[11px] text-white/45">
                  Data-driven
                </span>
              </div>
            </div>
          </div>

          {/* Steps */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <article
                key={step.number}
                className={`group relative p-6 sm:p-7 lg:p-8 ${
                  index !== steps.length - 1
                    ? "border-b border-white/10 md:border-r"
                    : ""
                } ${
                  index === 1
                    ? "lg:border-b-0"
                    : ""
                } ${
                  index === 2
                    ? "lg:border-b-0"
                    : ""
                }`}
              >
                {/* Step Number */}
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium tracking-[0.15em] text-white/25">
                    {step.number}
                  </span>

                  <span className="text-white/20 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-white/50">
                    →
                  </span>
                </div>

                {/* Icon / Indicator */}
                <div className="mt-12 flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04]">
                  <div className="h-2 w-2 rounded-full bg-white/60" />
                </div>

                {/* Content */}
                <h3 className="mt-6 text-xl font-semibold tracking-tight text-white">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-white/40">
                  {step.description}
                </p>

                {/* Bottom Line */}
                <div className="mt-7 h-px w-8 bg-white/20 transition-all duration-300 group-hover:w-14 group-hover:bg-white/50" />
              </article>
            ))}
          </div>
        </div>

        {/* Outcomes */}
        <div className="mt-5 grid gap-5 lg:grid-cols-[1fr_1.5fr]">

          {/* Main Outcome */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.025] p-6 sm:p-8">
            <span className="text-xs font-medium uppercase tracking-[0.16em] text-white/30">
              The outcome
            </span>

            <h3 className="mt-5 max-w-md text-2xl font-semibold leading-tight tracking-tight text-white sm:text-3xl">
              Every marketing decision works toward the same business goal.
            </h3>

            <p className="mt-4 max-w-md text-sm leading-6 text-white/40 sm:text-base sm:leading-7">
              More qualified attention. Better conversion. Lower acquisition
              costs. Stronger customer relationships. Sustainable growth.
            </p>
          </div>

          {/* Outcome Metrics */}
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:gap-4">

            <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-5 sm:p-6">
              <p className="text-2xl font-semibold tracking-tight text-white">
                +184%
              </p>

              <p className="mt-2 text-xs leading-5 text-white/35">
                Qualified lead growth
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-5 sm:p-6">
              <p className="text-2xl font-semibold tracking-tight text-white">
                3.2×
              </p>

              <p className="mt-2 text-xs leading-5 text-white/35">
                Average ROAS
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-5 sm:p-6">
              <p className="text-2xl font-semibold tracking-tight text-white">
                -32%
              </p>

              <p className="mt-2 text-xs leading-5 text-white/35">
                Lower acquisition cost
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-5 sm:p-6">
              <p className="text-2xl font-semibold tracking-tight text-white">
                +72%
              </p>

              <p className="mt-2 text-xs leading-5 text-white/35">
                Organic traffic
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Solution;