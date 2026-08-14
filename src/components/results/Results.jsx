const Results = () => {
  const results = [
    {
      value: "+184%",
      label: "Qualified Leads",
      description: "Average increase in qualified inbound leads.",
    },
    {
      value: "3.2×",
      label: "Average ROAS",
      description: "More revenue generated from every ad investment.",
    },
    {
      value: "-32%",
      label: "Acquisition Cost",
      description: "Lower customer acquisition costs through optimization.",
    },
    {
      value: "+72%",
      label: "Organic Traffic",
      description: "Average growth in high-intent organic traffic.",
    },
  ];

  return (
    <section
      id="results"
      className="relative overflow-hidden border-b border-white/10 bg-black"
    >
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32">

        {/* Header */}
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">

          <div>
            <span className="inline-flex rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-2 text-xs font-medium uppercase tracking-[0.16em] text-white/45">
              Performance
            </span>

            <h2 className="mt-5 max-w-xl text-3xl font-semibold leading-tight tracking-[-0.035em] text-white sm:text-4xl lg:text-5xl">
              We measure success by{" "}
              <span className="text-white/40">
                what moves your business.
              </span>
            </h2>
          </div>

          <p className="max-w-xl text-base leading-7 text-white/45 sm:text-lg sm:leading-8 lg:ml-auto">
            Vanity metrics don't pay the bills. We focus on the numbers that
            matter — qualified demand, revenue, acquisition efficiency, and
            sustainable growth.
          </p>

        </div>

        {/* Results Dashboard */}
        <div className="mt-14 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] lg:mt-20">

          {/* Dashboard Header */}
          <div className="flex flex-col gap-4 border-b border-white/10 px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-7 lg:px-8">

            <div>
              <p className="text-sm font-medium text-white">
                Growth performance
              </p>

              <p className="mt-1 text-xs text-white/35">
                Aggregated results across campaigns
              </p>
            </div>

            <div className="flex w-fit items-center gap-2 rounded-full border border-white/10 bg-black/30 px-3 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-white" />

              <span className="text-[11px] text-white/45">
                Performance above target
              </span>
            </div>

          </div>

          {/* Metrics */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4">
            {results.map((result, index) => (
              <div
                key={result.label}
                className={`p-6 sm:p-7 lg:p-8 ${
                  index !== results.length - 1
                    ? "border-b border-white/10 sm:border-r"
                    : ""
                } ${
                  index === 1
                    ? "lg:border-b-0"
                    : ""
                } ${
                  index === 2
                    ? "sm:border-b-0"
                    : ""
                }`}
              >
                <p className="text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
                  {result.value}
                </p>

                <p className="mt-4 text-sm font-medium text-white">
                  {result.label}
                </p>

                <p className="mt-2 max-w-xs text-sm leading-6 text-white/35">
                  {result.description}
                </p>

                {/* Progress indicator */}
                <div className="mt-6 h-1 overflow-hidden rounded-full bg-white/10">
                  <div
                    className="h-full rounded-full bg-white/50"
                    style={{
                      width: `${[84, 72, 68, 78][index]}%`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Insight */}
        <div className="mt-5 grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">

          {/* Main Statement */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.025] p-6 sm:p-8">

            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04]">
              <span className="text-sm text-white/60">
                ↗
              </span>
            </div>

            <h3 className="mt-7 max-w-2xl text-2xl font-semibold leading-tight tracking-tight text-white sm:text-3xl">
              Better marketing starts with better decisions.
            </h3>

            <p className="mt-4 max-w-2xl text-sm leading-6 text-white/40 sm:text-base sm:leading-7">
              Every campaign is continuously measured, tested, and refined so
              your marketing budget moves toward the channels and audiences
              that create the greatest business impact.
            </p>

          </div>

          {/* Insight Card */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.025] p-6 sm:p-8">

            <p className="text-xs font-medium uppercase tracking-[0.16em] text-white/30">
              Our focus
            </p>

            <div className="mt-6 space-y-4">

              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <span className="text-sm text-white/50">
                  Acquisition
                </span>

                <span className="text-sm font-medium text-white">
                  More qualified
                </span>
              </div>

              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <span className="text-sm text-white/50">
                  Conversion
                </span>

                <span className="text-sm font-medium text-white">
                  Higher intent
                </span>
              </div>

              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <span className="text-sm text-white/50">
                  Efficiency
                </span>

                <span className="text-sm font-medium text-white">
                  Lower CAC
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm text-white/50">
                  Growth
                </span>

                <span className="text-sm font-medium text-white">
                  Sustainable
                </span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Results;