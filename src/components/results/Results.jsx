const Results = () => {
  const results = [
    {
      value: "+184%",
      label: "Qualified Leads",
      description: "Average increase in qualified opportunities generated.",
    },
    {
      value: "3.2×",
      label: "Average ROAS",
      description: "Average return generated across performance campaigns.",
    },
    {
      value: "-32%",
      label: "Acquisition Cost",
      description: "Average reduction in customer acquisition costs.",
    },
    {
      value: "+72%",
      label: "Organic Traffic",
      description: "Average increase in organic search visibility.",
    },
  ];

  const performanceAreas = [
    {
      label: "Lead Generation",
      value: 84,
    },
    {
      label: "Brand Visibility",
      value: 76,
    },
    {
      label: "Conversion Rate",
      value: 68,
    },
    {
      label: "Marketing Efficiency",
      value: 91,
    },
  ];

  return (
    <section
      id="results"
      className="relative overflow-hidden border-b border-white/[0.06] bg-[#080808]"
    >
      {/* Background Orange Glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-80 w-[600px] -translate-x-1/2 rounded-full bg-orange-500/[0.045] blur-[130px]" />

      <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32">

        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">

          <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/[0.06] px-3.5 py-2">
            <span className="h-1.5 w-1.5 rounded-full bg-orange-500 shadow-[0_0_8px_rgba(249,115,22,0.6)]" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-orange-300 sm:text-xs">
              Results that matter
            </span>
          </div>

          <h2 className="mt-5 text-3xl font-semibold leading-[1.08] tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl">
            We don't chase
            <span className="text-white/35"> vanity metrics.</span>
            <span className="block bg-gradient-to-r from-orange-300 via-orange-500 to-orange-300 bg-clip-text text-transparent">
              We build business results.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/40 sm:text-lg sm:leading-8">
            Every strategy is connected to measurable business outcomes —
            from qualified leads and revenue to acquisition efficiency and
            long-term visibility.
          </p>

        </div>

        {/* Main Metrics */}
        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.07] sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">

          {results.map((result, index) => (
            <div
              key={result.label}
              className="group relative bg-[#0A0A0A] p-6 transition-colors duration-300 hover:bg-[#0D0D0D] sm:p-7 lg:p-8"
            >

              {/* Orange top line */}
              <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-orange-500/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              {/* Number */}
              <div className="flex items-start justify-between">

                <p className="text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
                  {result.value}
                </p>

                <span className="text-[10px] font-medium text-orange-400/60">
                  0{index + 1}
                </span>

              </div>

              {/* Label */}
              <p className="mt-4 text-sm font-semibold text-white/70">
                {result.label}
              </p>

              {/* Description */}
              <p className="mt-2 text-xs leading-5 text-white/30">
                {result.description}
              </p>

              {/* Accent */}
              <div className="mt-6 h-1 w-8 overflow-hidden rounded-full bg-white/[0.06]">
                <div className="h-full w-full rounded-full bg-orange-500/70" />
              </div>

            </div>
          ))}

        </div>

        {/* Performance Overview */}
        <div className="mt-4 overflow-hidden rounded-2xl border border-white/[0.07] bg-[#0A0A0A] lg:mt-5">

          <div className="grid lg:grid-cols-[0.8fr_1.2fr]">

            {/* Left Content */}
            <div className="relative overflow-hidden border-b border-white/[0.07] p-6 sm:p-8 lg:border-b-0 lg:border-r lg:p-10">

              <div className="pointer-events-none absolute -bottom-20 -right-20 h-48 w-48 rounded-full bg-orange-500/[0.07] blur-3xl" />

              <div className="relative">

                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-orange-400">
                  Performance snapshot
                </p>

                <h3 className="mt-4 max-w-sm text-2xl font-semibold leading-tight tracking-[-0.03em] text-white sm:text-3xl">
                  Turning marketing investment into measurable momentum.
                </h3>

                <p className="mt-4 max-w-md text-sm leading-6 text-white/35">
                  We continuously track the metrics that influence your
                  pipeline, revenue, and customer acquisition efficiency.
                </p>

                <div className="mt-7 flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-orange-500/[0.08] text-sm text-orange-400">
                    ↗
                  </div>

                  <div>
                    <p className="text-xs font-medium text-white/60">
                      Data-backed decisions
                    </p>

                    <p className="mt-0.5 text-[10px] text-white/25">
                      Optimized continuously
                    </p>
                  </div>
                </div>

              </div>

            </div>

            {/* Progress Metrics */}
            <div className="p-6 sm:p-8 lg:p-10">

              <div className="space-y-7">

                {performanceAreas.map((area) => (
                  <div key={area.label}>

                    <div className="flex items-center justify-between">

                      <span className="text-xs font-medium text-white/50">
                        {area.label}
                      </span>

                      <span className="text-xs font-semibold text-white/70">
                        {area.value}%
                      </span>

                    </div>

                    <div className="mt-2.5 h-2 overflow-hidden rounded-full bg-white/[0.05]">

                      <div
                        className="h-full rounded-full bg-gradient-to-r from-orange-600 via-orange-500 to-orange-300"
                        style={{
                          width: `${area.value}%`,
                        }}
                      />

                    </div>

                  </div>
                ))}

              </div>

              {/* Bottom note */}
              <div className="mt-8 flex items-center gap-2 border-t border-white/[0.06] pt-5">

                <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />

                <p className="text-[10px] text-white/25">
                  Performance varies by industry, market, and campaign
                  objectives.
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* Bottom CTA */}
        <div className="mt-12 flex flex-col items-center text-center sm:mt-14">

          <p className="text-sm text-white/30">
            Your numbers can tell a better story.
          </p>

          <a
            href="#case-studies"
            className="group mt-3 inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-orange-300"
          >
            See how we create results

            <span className="text-orange-400 transition-transform duration-200 group-hover:translate-x-1">
              →
            </span>
          </a>

        </div>

      </div>
    </section>
  );
};

export default Results;