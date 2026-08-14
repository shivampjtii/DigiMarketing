const PricingCard = ({ plan }) => {
  const {
    name,
    description,
    price,
    billing,
    target,
    features = [],
    cta = "Get Started",
    featured = false,
    badge,
  } = plan;

  return (
    <article
      className={`group relative flex h-full flex-col overflow-hidden rounded-3xl border p-6 transition-all duration-300 sm:p-7 ${
        featured
          ? "border-white/30 bg-white/[0.08] shadow-2xl shadow-white/[0.03]"
          : "border-white/10 bg-white/[0.025] hover:border-white/20 hover:bg-white/[0.045]"
      }`}
    >
      {/* Featured Badge */}
      {featured && (
        <div className="absolute right-5 top-5 rounded-full border border-white/15 bg-white px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-black">
          {badge || "Most Popular"}
        </div>
      )}

      {/* Plan Header */}
      <div className={featured ? "pr-20" : ""}>
        <p className="text-xs font-medium uppercase tracking-[0.16em] text-white/35">
          {target}
        </p>

        <h3 className="mt-4 text-2xl font-semibold tracking-tight text-white">
          {name}
        </h3>

        <p className="mt-3 min-h-[72px] text-sm leading-6 text-white/40">
          {description}
        </p>
      </div>

      {/* Price */}
      <div className="mt-7 border-y border-white/10 py-6">
        {price === "Custom" ? (
          <>
            <p className="text-3xl font-semibold tracking-tight text-white">
              Custom
            </p>

            <p className="mt-1 text-xs text-white/35">
              Tailored to your business
            </p>
          </>
        ) : (
          <>
            <div className="flex items-end gap-2">
              <span className="text-3xl font-semibold tracking-tight text-white">
                {price}
              </span>

              {billing && (
                <span className="mb-1 text-xs text-white/35">
                  {billing}
                </span>
              )}
            </div>

            <p className="mt-2 text-xs text-white/35">
              + 18% GST
            </p>
          </>
        )}
      </div>

      {/* CTA */}
      <a
        href="#contact"
        className={`mt-6 flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-all duration-200 active:scale-[0.98] ${
          featured
            ? "bg-white text-black hover:bg-white/90"
            : "border border-white/15 bg-white/[0.04] text-white hover:border-white/25 hover:bg-white/[0.08]"
        }`}
      >
        {cta}

        <span className="transition-transform duration-200 group-hover:translate-x-1">
          →
        </span>
      </a>

      {/* Features */}
      <div className="mt-7 flex-1">
        <p className="text-xs font-medium uppercase tracking-[0.14em] text-white/30">
          What's included
        </p>

        <ul className="mt-5 space-y-3.5">
          {features.map((feature, index) => (
            <li
              key={index}
              className="flex items-start gap-3"
            >
              <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] text-[9px] text-white/70">
                ✓
              </span>

              <span className="text-sm leading-5 text-white/50">
                {feature}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Bottom Indicator */}
      <div className="mt-8 flex items-center gap-2 border-t border-white/10 pt-5">
        <span
          className={`h-1.5 w-1.5 rounded-full ${
            featured ? "bg-white" : "bg-white/30"
          }`}
        />

        <span className="text-[11px] text-white/30">
          {featured ? "Recommended for growth" : "Flexible growth plan"}
        </span>
      </div>

      {/* Decorative Glow */}
      <div
        className={`pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full blur-3xl transition-all duration-500 ${
          featured
            ? "bg-white/[0.06]"
            : "bg-white/[0.02] group-hover:bg-white/[0.04]"
        }`}
      />
    </article>
  );
};

export default PricingCard;