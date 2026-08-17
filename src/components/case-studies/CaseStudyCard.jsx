const CaseStudyCard = ({ study, featured = false }) => {
  if (!study) return null;

  return (
    <article
      className={`group relative overflow-hidden rounded-3xl border ${
        featured
          ? "border-orange-500/20 bg-[#0A0A0A]"
          : "border-white/[0.07] bg-[#090909]"
      }`}
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-72 w-72 rounded-full bg-orange-500/[0.08] blur-[110px]" />

      <div className="relative grid lg:grid-cols-[1.15fr_0.85fr]">

        {/* =========================================
            LEFT CONTENT
        ========================================== */}

        <div className="border-b border-white/[0.07] p-6 sm:p-8 lg:border-b-0 lg:border-r lg:p-10 xl:p-12">

          {/* Company Header */}
          <div className="flex flex-wrap items-center justify-between gap-4">

            <div className="flex items-center gap-3">

              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-orange-500/20 bg-orange-500/[0.08] text-sm font-bold text-orange-400">
                {study.logo}
              </div>

              <div>
                <p className="text-sm font-semibold text-white">
                  {study.company}
                </p>

                <p className="mt-0.5 text-[10px] text-white/30">
                  {study.industry}
                </p>
              </div>

            </div>

            <span className="rounded-full border border-orange-500/15 bg-orange-500/[0.05] px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.12em] text-orange-300">
              {study.category}
            </span>

          </div>

          {/* Title */}
          <h3 className="mt-10 max-w-2xl text-2xl font-semibold leading-[1.1] tracking-[-0.035em] text-white sm:text-3xl lg:text-4xl">
            {study.title}
          </h3>

          {/* Description */}
          <p className="mt-5 max-w-2xl text-sm leading-7 text-white/40 sm:text-base">
            {study.description}
          </p>

          {/* Strategy */}
          <div className="mt-8 rounded-2xl border border-white/[0.06] bg-white/[0.015] p-5">

            <div className="flex items-center gap-2">

              <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-orange-500/[0.10] text-[10px] text-orange-400">
                ↗
              </span>

              <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-orange-300">
                Strategy
              </span>

            </div>

            <p className="mt-3 text-sm leading-6 text-white/45">
              {study.strategy}
            </p>

          </div>

          {/* Services */}
          <div className="mt-7">

            <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-white/25">
              Services delivered
            </p>

            <div className="mt-3 flex flex-wrap gap-2">

              {study.services?.map((service) => (
                <span
                  key={service}
                  className="rounded-full border border-white/[0.07] bg-white/[0.02] px-3 py-1.5 text-[10px] text-white/40 transition-colors duration-200 hover:border-orange-500/20 hover:text-orange-300"
                >
                  {service}
                </span>
              ))}

            </div>

          </div>

        </div>

        {/* =========================================
            RIGHT RESULTS
        ========================================== */}

        <div className="relative flex flex-col justify-between p-6 sm:p-8 lg:p-10 xl:p-12">

          {/* Results Header */}
          <div>

            <div className="flex items-center justify-between">

              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-orange-400">
                  The results
                </p>

                <h4 className="mt-2 text-lg font-semibold tracking-tight text-white">
                  Measurable impact
                </h4>
              </div>

              <div className="rounded-full border border-white/[0.07] bg-white/[0.02] px-3 py-1.5 text-[10px] text-white/30">
                {study.duration}
              </div>

            </div>

            {/* Result Grid */}
            <div className="mt-8 grid grid-cols-2 gap-3">

              {study.results?.map((result, index) => (
                <div
                  key={result.label}
                  className="group/result rounded-2xl border border-white/[0.07] bg-white/[0.02] p-4 transition-all duration-300 hover:border-orange-500/20 hover:bg-orange-500/[0.03] sm:p-5"
                >

                  <div className="flex items-start justify-between gap-2">

                    <span className="text-2xl font-semibold tracking-[-0.04em] text-white sm:text-3xl">
                      {result.value}
                    </span>

                    <span className="text-[9px] font-medium text-orange-500/50">
                      0{index + 1}
                    </span>

                  </div>

                  <p className="mt-2 text-[10px] leading-4 text-white/30 sm:text-xs">
                    {result.label}
                  </p>

                  <div className="mt-4 h-1 overflow-hidden rounded-full bg-white/[0.05]">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-orange-600 to-orange-300 transition-all duration-500 group-hover/result:w-full"
                      style={{
                        width: `${Math.min(
                          35 + index * 15,
                          85
                        )}%`,
                      }}
                    />
                  </div>

                </div>
              ))}

            </div>

          </div>

          {/* Bottom Result Statement */}
          <div className="mt-8 border-t border-white/[0.07] pt-6">

            <div className="flex items-start gap-3">

              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-orange-500/[0.08] text-sm text-orange-400">
                ✓
              </div>

              <div>
                <p className="text-xs font-semibold text-white/65">
                  Growth backed by data
                </p>

                <p className="mt-1 text-[10px] leading-5 text-white/25">
                  Every result is tracked against meaningful business
                  objectives and performance indicators.
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Bottom Accent */}
      <div className="h-px bg-gradient-to-r from-transparent via-orange-500/30 to-transparent" />
    </article>
  );
};

export default CaseStudyCard;