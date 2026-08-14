const CaseStudyCard = ({ study, featured = false }) => {
  return (
    <article
      className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] transition-all duration-300 hover:border-white/20 hover:bg-white/[0.045] ${
        featured ? "p-6 sm:p-8 lg:p-10" : "p-6 sm:p-7 lg:p-8"
      }`}
    >
      {/* Top Row */}
      <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">

        {/* Brand / Category */}
        <div>
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05]">
              <span className="text-sm font-bold text-white/70">
                {study.logo || study.company?.charAt(0)}
              </span>
            </div>

            <div>
              <p className="text-sm font-semibold text-white">
                {study.company}
              </p>

              <p className="mt-0.5 text-xs text-white/35">
                {study.category}
              </p>
            </div>
          </div>
        </div>

        {/* Industry */}
        <span className="w-fit rounded-full border border-white/10 bg-black/30 px-3 py-1.5 text-[11px] font-medium text-white/45">
          {study.industry}
        </span>

      </div>

      {/* Main Content */}
      <div
        className={`mt-10 grid gap-10 ${
          featured
            ? "lg:grid-cols-[1fr_0.9fr]"
            : "lg:grid-cols-[1fr_1fr]"
        } lg:items-end`}
      >

        {/* Challenge / Strategy */}
        <div>

          <span className="text-xs font-medium uppercase tracking-[0.16em] text-white/25">
            The challenge
          </span>

          <h3
            className={`mt-4 max-w-2xl font-semibold leading-tight tracking-tight text-white ${
              featured
                ? "text-2xl sm:text-3xl"
                : "text-xl sm:text-2xl"
            }`}
          >
            {study.title}
          </h3>

          <p className="mt-4 max-w-2xl text-sm leading-6 text-white/40 sm:text-base sm:leading-7">
            {study.description}
          </p>

          {/* Strategy */}
          {study.strategy && (
            <div className="mt-7 border-l border-white/15 pl-4">
              <p className="text-xs font-medium uppercase tracking-[0.14em] text-white/25">
                Strategy
              </p>

              <p className="mt-2 text-sm leading-6 text-white/55">
                {study.strategy}
              </p>
            </div>
          )}

        </div>

        {/* Results */}
        <div className="rounded-2xl border border-white/10 bg-black/30 p-5 sm:p-6">

          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <p className="text-xs font-medium uppercase tracking-[0.14em] text-white/30">
              Results
            </p>

            <span className="text-xs text-white/25">
              {study.duration || "90 days"}
            </span>
          </div>

          <div className="mt-5 grid grid-cols-2 gap-5">

            {study.results?.map((result) => (
              <div key={result.label}>
                <p className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                  {result.value}
                </p>

                <p className="mt-1 text-xs leading-5 text-white/35">
                  {result.label}
                </p>
              </div>
            ))}

          </div>

        </div>

      </div>

      {/* Bottom Row */}
      <div className="mt-8 flex flex-col gap-4 border-t border-white/10 pt-5 sm:flex-row sm:items-center sm:justify-between">

        {/* Services Used */}
        <div className="flex flex-wrap gap-2">
          {study.services?.map((service) => (
            <span
              key={service}
              className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[11px] text-white/40"
            >
              {service}
            </span>
          ))}
        </div>

        {/* CTA */}
        <a
          href="#contact"
          className="group/cta inline-flex w-fit items-center gap-2 text-sm font-semibold text-white"
        >
          View case study

          <span className="text-white/35 transition-all duration-200 group-hover/cta:translate-x-1 group-hover/cta:text-white">
            →
          </span>
        </a>

      </div>

      {/* Decorative Element */}
      <div className="pointer-events-none absolute -right-24 -top-24 h-48 w-48 rounded-full bg-white/[0.025] blur-3xl transition-all duration-500 group-hover:bg-white/[0.05]" />
    </article>
  );
};

export default CaseStudyCard;