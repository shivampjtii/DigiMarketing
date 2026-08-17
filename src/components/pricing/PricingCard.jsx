const PricingCard = ({ plan }) => {
  if (!plan) return null;

  return (
    <article
      className={`group relative flex h-full flex-col overflow-hidden rounded-3xl border p-6 transition-all duration-300 sm:p-7 ${
        plan.popular
          ? "border-orange-500/40 bg-[#0D0B09] shadow-2xl shadow-orange-950/20"
          : "border-white/[0.07] bg-[#0A0A0A] hover:border-orange-500/20 hover:bg-[#0D0D0D]"
      }`}
    >
      {/* Popular Glow */}
      {plan.popular && (
        <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-orange-500/[0.10] blur-[90px]" />
      )}

      {/* Bottom Glow */}
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-48 w-48 rounded-full bg-orange-500/[0.04] blur-[80px]" />

      <div className="relative flex h-full flex-col">

        {/* Popular Badge */}
        <div className="min-h-[28px]">
          {plan.popular && (
            <span className="inline-flex items-center gap-1.5 rounded-full bg-orange-500 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.12em] text-white shadow-lg shadow-orange-500/20">
              <span className="h-1 w-1 rounded-full bg-white" />
              Most Popular
            </span>
          )}
        </div>

        {/* Plan Name */}
        <div className="mt-5">

          <h3 className="text-xl font-semibold tracking-[-0.02em] text-white">
            {plan.name}
          </h3>

          <p className="mt-3 min-h-[72px] text-xs leading-5 text-white/35">
            {plan.description}
          </p>

        </div>

        {/* Price */}
        <div className="mt-7">

          <div className="flex items-end gap-1">

            <span
              className={`text-3xl font-semibold tracking-[-0.04em] sm:text-4xl ${
                plan.popular
                  ? "text-orange-300"
                  : "text-white"
              }`}
            >
              {plan.price}
            </span>

            {plan.price !== "Custom" && (
              <span className="mb-1 text-[10px] text-white/25">
                + 18% GST
              </span>
            )}

          </div>

          {plan.price === "Custom" ? (
            <p className="mt-2 text-[10px] text-white/25">
              Tailored to your requirements
            </p>
          ) : (
            <p className="mt-2 text-[10px] text-white/25">
              Starting price
            </p>
          )}

        </div>

        {/* Target User */}
        <div className="mt-6 rounded-xl border border-white/[0.06] bg-white/[0.02] p-3.5">

          <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-orange-400/80">
            Best for
          </p>

          <p className="mt-1.5 text-[11px] leading-5 text-white/40">
            {plan.target}
          </p>

        </div>

        {/* Divider */}
        <div className="my-6 h-px bg-white/[0.07]" />

        {/* Features */}
        <div>

          <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-white/25">
            What's included
          </p>

          <ul className="mt-4 space-y-3">

            {plan.features?.map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-2.5"
              >
                <span
                  className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full text-[8px] ${
                    plan.popular
                      ? "bg-orange-500/15 text-orange-400"
                      : "bg-white/[0.06] text-orange-500/80"
                  }`}
                >
                  ✓
                </span>

                <span className="text-xs leading-5 text-white/45">
                  {feature}
                </span>
              </li>
            ))}

          </ul>

        </div>

        {/* Spacer */}
        <div className="flex-1" />

        {/* CTA */}
        <div className="mt-8">

          <a
            href="#contact"
            className={`group/cta flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3.5 text-sm font-semibold transition-all duration-200 active:scale-[0.98] ${
              plan.popular
                ? "bg-orange-500 text-white shadow-lg shadow-orange-500/15 hover:bg-orange-400 hover:shadow-orange-500/25"
                : "border border-white/10 bg-white/[0.03] text-white/70 hover:border-orange-500/25 hover:bg-orange-500/[0.06] hover:text-white"
            }`}
          >
            {plan.cta || "Get Started"}

            <span className="transition-transform duration-200 group-hover/cta:translate-x-1">
              →
            </span>
          </a>

        </div>

        {/* Bottom Accent */}
        <div className="mt-5 flex items-center justify-center gap-2">

          <span
            className={`h-px transition-all duration-300 ${
              plan.popular
                ? "w-10 bg-orange-500/60"
                : "w-5 bg-white/10 group-hover:w-10 group-hover:bg-orange-500/40"
            }`}
          />

        </div>

      </div>
    </article>
  );
};

export default PricingCard;