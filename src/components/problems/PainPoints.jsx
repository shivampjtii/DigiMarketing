const PainPoints = () => {
  const painPoints = [
    {
      number: "01",
      icon: "↗",
      title: "Inconsistent Lead Flow",
      description:
        "Your business gets leads one month and struggles to generate them the next. Growth shouldn't depend on unpredictable campaigns or referrals.",
      impact: "Unpredictable revenue",
    },
    {
      number: "02",
      icon: "₹",
      title: "Rising Acquisition Costs",
      description:
        "You're spending more on ads and marketing without seeing proportional returns, making every new customer increasingly expensive.",
      impact: "Lower profitability",
    },
    {
      number: "03",
      icon: "◎",
      title: "Low Online Visibility",
      description:
        "Your customers are searching, comparing, and making decisions online while your brand struggles to appear where those decisions happen.",
      impact: "Lost opportunities",
    },
    {
      number: "04",
      icon: "↘",
      title: "Marketing Without Direction",
      description:
        "SEO, social media, content, and advertising are running independently without a unified strategy connecting them to business outcomes.",
      impact: "Wasted resources",
    },
    {
      number: "05",
      icon: "◌",
      title: "Traffic That Doesn't Convert",
      description:
        "Getting visitors is only half the battle. Without the right messaging and customer journey, valuable traffic leaves without taking action.",
      impact: "Missed revenue",
    },
    {
      number: "06",
      icon: "⌁",
      title: "No Clear Performance Data",
      description:
        "You can't confidently tell what's working, what's wasting budget, or where your next marketing investment should go.",
      impact: "Poor decisions",
    },
  ];

  return (
    <section
      id="problems"
      className="relative overflow-hidden border-b border-white/[0.06] bg-[#050505]"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute -left-40 top-1/3 h-80 w-80 rounded-full bg-orange-600/[0.035] blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32">

        {/* Section Header */}
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">

          <div>
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/15 bg-orange-500/[0.05] px-3.5 py-2">
              <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-orange-300 sm:text-xs">
                The problem
              </span>
            </div>

            {/* Heading */}
            <h2 className="mt-5 max-w-xl text-3xl font-semibold leading-[1.08] tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl">
              Your marketing shouldn't feel like
              <span className="text-white/35">
                {" "}
                guesswork.
              </span>
            </h2>
          </div>

          {/* Description */}
          <div className="lg:ml-auto lg:max-w-xl">
            <p className="text-base leading-7 text-white/40 sm:text-lg sm:leading-8">
              Most businesses don't have a marketing problem. They have a
              clarity problem. Too many channels, disconnected campaigns, and
              activity without a clear connection to revenue.
            </p>

            <div className="mt-5 flex items-center gap-3">
              <span className="h-px w-8 bg-orange-500/60" />

              <span className="text-xs font-medium text-white/30">
                Sound familiar?
              </span>
            </div>
          </div>

        </div>

        {/* Pain Point Cards */}
        <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">

          {painPoints.map((point) => (
            <article
              key={point.number}
              className="group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-[#090909] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-orange-500/20 hover:bg-[#0B0B0B] sm:p-6"
            >

              {/* Orange Hover Glow */}
              <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-orange-500/[0.07] opacity-0 blur-3xl transition-opacity duration-300 group-hover:opacity-100" />

              {/* Top Row */}
              <div className="relative flex items-center justify-between">

                {/* Number */}
                <span className="text-xs font-semibold tracking-[0.12em] text-orange-500/60">
                  {point.number}
                </span>

                {/* Icon */}
                <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.025] text-sm text-white/40 transition-all duration-300 group-hover:border-orange-500/20 group-hover:bg-orange-500/[0.08] group-hover:text-orange-400">
                  {point.icon}
                </div>

              </div>

              {/* Content */}
              <div className="relative mt-8">

                <h3 className="text-lg font-semibold tracking-tight text-white sm:text-xl">
                  {point.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-white/35">
                  {point.description}
                </p>

              </div>

              {/* Impact */}
              <div className="relative mt-7 flex items-center gap-2 border-t border-white/[0.06] pt-4">

                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-orange-500/[0.08] text-[9px] text-orange-400">
                  !
                </span>

                <span className="text-[11px] font-medium text-white/30">
                  {point.impact}
                </span>

              </div>

            </article>
          ))}

        </div>

        {/* Bottom Transition */}
        <div className="mt-12 flex flex-col items-center justify-center text-center sm:mt-14">

          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-white/[0.08]" />

            <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-white/25">
              There's a better way
            </span>

            <span className="h-px w-8 bg-white/[0.08]" />
          </div>

          <a
            href="#solution"
            className="group mt-4 inline-flex items-center gap-2 text-sm font-semibold text-white/60 transition-colors hover:text-white"
          >
            See how we solve it

            <span className="text-orange-400 transition-transform duration-200 group-hover:translate-x-1">
              →
            </span>
          </a>

        </div>

      </div>
    </section>
  );
};

export default PainPoints;