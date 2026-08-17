const FinalCTA = () => {
  const trustPoints = [
    "Free initial consultation",
    "No long-term commitment",
    "Strategy built around your goals",
  ];

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#050505]"
    >
      {/* Large Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/[0.08] blur-[150px]" />

      {/* Secondary Glows */}
      <div className="pointer-events-none absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-orange-600/[0.05] blur-[120px]" />

      <div className="pointer-events-none absolute -right-40 top-0 h-80 w-80 rounded-full bg-orange-400/[0.04] blur-[120px]" />

      {/* Grid */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.025]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 py-24 sm:px-6 sm:py-28 lg:px-8 lg:py-36">

        {/* Main CTA Card */}
        <div className="relative overflow-hidden rounded-[2rem] border border-orange-500/20 bg-[#0A0908] shadow-2xl shadow-orange-950/20">

          {/* Inner Glow */}
          <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-[70%] -translate-x-1/2 rounded-full bg-orange-500/[0.08] blur-[100px]" />

          <div className="relative px-6 py-14 text-center sm:px-10 sm:py-16 lg:px-16 lg:py-20 xl:px-24 xl:py-24">

            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/[0.07] px-4 py-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-400 opacity-30" />
                <span className="relative h-2 w-2 rounded-full bg-orange-500" />
              </span>

              <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-orange-300 sm:text-xs">
                Ready to grow?
              </span>
            </div>

            {/* Heading */}
            <h2 className="mx-auto mt-7 max-w-4xl text-4xl font-semibold leading-[1.05] tracking-[-0.045em] text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Stop guessing.
              <span className="block bg-gradient-to-r from-orange-300 via-orange-500 to-orange-300 bg-clip-text text-transparent">
                Start growing.
              </span>
            </h2>

            {/* Description */}
            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/40 sm:text-lg sm:leading-8">
              Let's build a digital marketing system that attracts the right
              customers, turns attention into action, and creates measurable
              business growth.
            </p>

            {/* CTA Buttons */}
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">

              <a
                href="mailto:hello@digrow.co"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-orange-500 px-7 py-3.5 text-sm font-semibold text-white shadow-xl shadow-orange-500/20 transition-all duration-200 hover:bg-orange-400 hover:shadow-orange-500/30 active:scale-[0.98] sm:w-auto"
              >
                Book a Free Consultation

                <span className="transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </a>

              <a
                href="tel:+919999999999"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-7 py-3.5 text-sm font-semibold text-white/70 transition-all duration-200 hover:border-orange-500/25 hover:bg-orange-500/[0.05] hover:text-white active:scale-[0.98] sm:w-auto"
              >
                Talk to an Expert
              </a>

            </div>

            {/* Trust Points */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-3">

              {trustPoints.map((point, index) => (
                <div
                  key={point}
                  className="flex items-center gap-2"
                >
                  <span className="flex h-4 w-4 items-center justify-center rounded-full bg-orange-500/10 text-[9px] text-orange-400">
                    ✓
                  </span>

                  <span className="text-[10px] text-white/25 sm:text-xs">
                    {point}
                  </span>

                  {index < trustPoints.length - 1 && (
                    <span className="ml-2 hidden h-1 w-1 rounded-full bg-white/10 sm:block" />
                  )}
                </div>
              ))}

            </div>

          </div>

          {/* Bottom Accent */}
          <div className="h-px bg-gradient-to-r from-transparent via-orange-500/60 to-transparent" />

        </div>

        {/* Bottom Contact Information */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 text-center sm:flex-row sm:gap-6">

          <a
            href="mailto:hello@digrow.co"
            className="text-xs text-white/30 transition-colors hover:text-orange-300"
          >
            hello@digrow.co
          </a>

          <span className="hidden h-1 w-1 rounded-full bg-white/15 sm:block" />

          <a
            href="tel:+919999999999"
            className="text-xs text-white/30 transition-colors hover:text-orange-300"
          >
            +91 99999 99999
          </a>

          <span className="hidden h-1 w-1 rounded-full bg-white/15 sm:block" />

          <span className="text-xs text-white/20">
            India · Working globally
          </span>

        </div>

      </div>
    </section>
  );
};

export default FinalCTA;