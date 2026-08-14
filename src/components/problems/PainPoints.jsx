const PainPoints = () => {
  const problems = [
    {
      number: "01",
      title: "Leads aren't consistent",
      description:
        "Your pipeline depends on random campaigns, referrals, or short-term spikes instead of a predictable acquisition system.",
      metric: "Unpredictable growth",
    },
    {
      number: "02",
      title: "Marketing feels expensive",
      description:
        "You're spending on ads and content without knowing which channels are actually generating profitable customers.",
      metric: "High acquisition costs",
    },
    {
      number: "03",
      title: "Your brand gets overlooked",
      description:
        "A weak digital presence makes it harder to stand out, build trust, and turn attention into meaningful conversations.",
      metric: "Low brand visibility",
    },
  ];

  return (
    <section
      id="problems"
      className="relative overflow-hidden border-b border-white/10 bg-black"
    >
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32">

        {/* Section Heading */}
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">

          <div>
            <span className="inline-flex rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-2 text-xs font-medium uppercase tracking-[0.16em] text-white/45">
              The problem
            </span>

            <h2 className="mt-5 max-w-xl text-3xl font-semibold leading-tight tracking-[-0.035em] text-white sm:text-4xl lg:text-5xl">
              Marketing shouldn't feel like{" "}
              <span className="text-white/40">
                guesswork.
              </span>
            </h2>
          </div>

          <p className="max-w-xl text-base leading-7 text-white/45 lg:ml-auto lg:text-lg lg:leading-8">
            Most businesses don't have a marketing problem. They have a
            disconnected marketing system. When strategy, creative, channels,
            and data don't work together, growth becomes unpredictable.
          </p>
        </div>

        {/* Problem Cards */}
        <div className="mt-14 grid gap-4 md:grid-cols-3 lg:mt-16">
          {problems.map((problem) => (
            <article
              key={problem.number}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] p-6 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.045] sm:p-7"
            >
              {/* Number */}
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium tracking-[0.15em] text-white/25">
                  {problem.number}
                </span>

                <span className="text-xs text-white/25 transition-transform duration-300 group-hover:translate-x-1">
                  ↗
                </span>
              </div>

              {/* Content */}
              <div className="mt-12">
                <h3 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
                  {problem.title}
                </h3>

                <p className="mt-4 text-sm leading-6 text-white/45 sm:text-base sm:leading-7">
                  {problem.description}
                </p>
              </div>

              {/* Bottom Metric */}
              <div className="mt-8 border-t border-white/10 pt-4">
                <p className="text-xs font-medium uppercase tracking-[0.12em] text-white/30">
                  {problem.metric}
                </p>
              </div>

              {/* Subtle hover line */}
              <div className="absolute bottom-0 left-0 h-px w-0 bg-white/40 transition-all duration-500 group-hover:w-full" />
            </article>
          ))}
        </div>

        {/* Bottom Message */}
        <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.025] p-5 sm:mt-12 sm:p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

            <div className="flex items-start gap-3">
              <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.05]">
                <span className="text-xs text-white/60">!</span>
              </div>

              <div>
                <p className="text-sm font-medium text-white">
                  The result?
                </p>

                <p className="mt-1 text-sm leading-6 text-white/40">
                  More effort, higher costs, and less predictable growth.
                </p>
              </div>
            </div>

            <div className="hidden h-px flex-1 bg-white/10 sm:mx-8 sm:block" />

            <p className="text-sm font-medium text-white/60">
              There's a better way.
              <span className="ml-2 text-white">→</span>
            </p>

          </div>
        </div>

      </div>
    </section>
  );
};

export default PainPoints;