const TrustBar = () => {
  const clients = [
    {
      name: "NEXORA",
      symbol: "N",
    },
    {
      name: "LUMINA",
      symbol: "L",
    },
    {
      name: "VERTEX",
      symbol: "V",
    },
    {
      name: "ORBITAL",
      symbol: "O",
    },
    {
      name: "MOSAIC",
      symbol: "M",
    },
  ];

  const stats = [
    {
      value: "150+",
      label: "Businesses Scaled",
    },
    {
      value: "₹12Cr+",
      label: "Revenue Influenced",
    },
    {
      value: "3.2×",
      label: "Average ROAS",
    },
    {
      value: "94%",
      label: "Client Retention",
    },
  ];

  return (
    <section
      id="trust"
      className="relative overflow-hidden border-y border-white/[0.06] bg-[#080808]"
    >
      {/* Subtle Orange Glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-40 w-[500px] -translate-x-1/2 rounded-full bg-orange-500/[0.04] blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-5 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">

        {/* Trust Heading */}
        <div className="text-center">

          <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/25 sm:text-xs">
            Trusted by ambitious businesses
          </p>

          <div className="mx-auto mt-3 h-px w-8 bg-orange-500/60" />

        </div>

        {/* Client Logos */}
        <div className="mt-9 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">

          {clients.map((client) => (
            <div
              key={client.name}
              className="group flex h-16 items-center justify-center gap-2.5 rounded-xl border border-white/[0.06] bg-white/[0.015] px-4 transition-all duration-300 hover:border-orange-500/20 hover:bg-orange-500/[0.03]"
            >

              {/* Logo Symbol */}
              <div className="flex h-7 w-7 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-[10px] font-bold text-white/40 transition-colors duration-300 group-hover:border-orange-500/20 group-hover:bg-orange-500/10 group-hover:text-orange-400">
                {client.symbol}
              </div>

              {/* Company Name */}
              <span className="text-xs font-semibold tracking-[0.12em] text-white/30 transition-colors duration-300 group-hover:text-white/60">
                {client.name}
              </span>

            </div>
          ))}

        </div>

        {/* Divider */}
        <div className="my-12 h-px bg-white/[0.06] sm:my-14" />

        {/* Stats */}
        <div className="grid grid-cols-2 divide-x divide-white/[0.07] lg:grid-cols-4">

          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`px-4 text-center sm:px-6 ${
                index >= 2 ? "mt-8 lg:mt-0" : ""
              }`}
            >

              {/* Value */}
              <p className="text-2xl font-semibold tracking-[-0.03em] text-white sm:text-3xl lg:text-4xl">
                {stat.value}
              </p>

              {/* Orange Indicator */}
              <div className="mx-auto mt-2 h-1 w-5 rounded-full bg-orange-500/70" />

              {/* Label */}
              <p className="mt-3 text-[10px] leading-5 text-white/30 sm:text-xs">
                {stat.label}
              </p>

            </div>
          ))}

        </div>

        {/* Bottom Trust Statement */}
        <div className="mt-12 flex flex-col items-center justify-center gap-3 text-center sm:mt-14 sm:flex-row sm:gap-4">

          <div className="flex items-center gap-1">
            <span className="text-xs text-orange-400">★★★★★</span>
          </div>

          <span className="text-xs text-white/30">
            4.9/5 average client satisfaction
          </span>

          <span className="hidden h-1 w-1 rounded-full bg-white/15 sm:block" />

          <span className="text-xs text-white/25">
            Results backed by data, not vanity metrics.
          </span>

        </div>

      </div>
    </section>
  );
};

export default TrustBar;