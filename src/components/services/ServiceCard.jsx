const ServiceCard = ({
  number,
  icon,
  title,
  description,
  benefits = [],
  cta = "Explore Service",
}) => {
  return (
    <article className="group relative flex h-full min-h-[440px] flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] p-6 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.045] sm:p-7 lg:p-8">

      {/* Top */}
      <div className="flex items-center justify-between">
        <span className="text-xs font-medium tracking-[0.16em] text-white/25">
          {number}
        </span>

        <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-lg text-white/70 transition-all duration-300 group-hover:border-white/20 group-hover:bg-white/[0.08]">
          {icon}
        </div>
      </div>

      {/* Content */}
      <div className="mt-12">
        <h3 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
          {title}
        </h3>

        <p className="mt-4 max-w-lg text-sm leading-6 text-white/45 sm:text-base sm:leading-7">
          {description}
        </p>
      </div>

      {/* Benefits */}
      <div className="mt-7 space-y-3">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="flex items-start gap-3"
          >
            <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] text-[9px] text-white/70">
              ✓
            </span>

            <span className="text-sm text-white/55">
              {benefit}
            </span>
          </div>
        ))}
      </div>

      {/* Bottom */}
      <div className="mt-auto pt-8">
        <div className="mb-5 h-px w-full bg-white/10" />

        <a
          href="#contact"
          className="group/cta inline-flex items-center gap-2 text-sm font-semibold text-white"
        >
          {cta}

          <span className="text-white/40 transition-all duration-200 group-hover/cta:translate-x-1 group-hover/cta:text-white">
            →
          </span>
        </a>
      </div>

      {/* Decorative Glow */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-white/[0.03] blur-3xl transition-all duration-500 group-hover:bg-white/[0.06]" />
    </article>
  );
};

export default ServiceCard;