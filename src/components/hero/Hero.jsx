const Hero = () => {
  return (
    <section
      id="hero"
      className="relative overflow-hidden border-b border-white/10 bg-black"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-white/[0.04] blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 pb-20 pt-16 sm:px-6 sm:pb-24 sm:pt-20 lg:px-8 lg:pb-28 lg:pt-28">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">

          {/* Left Content */}
          <div className="max-w-3xl">

            {/* Eyebrow */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-2">
              <span className="h-1.5 w-1.5 rounded-full bg-white" />

              <span className="text-xs font-medium tracking-wide text-white/60 sm:text-sm">
                DIGITAL GROWTH PARTNER
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Turn your digital presence into a{" "}
              <span className="text-white/45">
                growth engine.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-2xl text-base leading-7 text-white/55 sm:text-lg sm:leading-8">
              We combine strategy, creative, performance marketing, and
              data-driven optimization to help ambitious businesses attract
              more customers and grow revenue.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-black transition-all duration-200 hover:bg-white/90 active:scale-[0.98]"
              >
                Start Growing

                <span className="transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </a>

              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.03] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-white/[0.08] active:scale-[0.98]"
              >
                Explore Services
              </a>
            </div>

            {/* Trust Metrics */}
            <div className="mt-10 grid max-w-xl grid-cols-3 border-y border-white/10 py-5">
              <div className="pr-3">
                <p className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
                  150+
                </p>
                <p className="mt-1 text-[11px] leading-4 text-white/40 sm:text-xs">
                  Businesses
                  <br />
                  Scaled
                </p>
              </div>

              <div className="border-l border-white/10 px-3">
                <p className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
                  3.2×
                </p>
                <p className="mt-1 text-[11px] leading-4 text-white/40 sm:text-xs">
                  Average
                  <br />
                  ROAS
                </p>
              </div>

              <div className="border-l border-white/10 pl-3">
                <p className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
                  184%
                </p>
                <p className="mt-1 text-[11px] leading-4 text-white/40 sm:text-xs">
                  Avg. Lead
                  <br />
                  Growth
                </p>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative mx-auto w-full max-w-xl lg:mx-0 lg:ml-auto">

            {/* Main Dashboard */}
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.045] p-4 shadow-2xl shadow-black/40 sm:p-5">

              {/* Dashboard Header */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <p className="text-xs text-white/40">
                    Campaign Overview
                  </p>

                  <p className="mt-1 text-sm font-medium text-white">
                    Growth Performance
                  </p>
                </div>

                <div className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5">
                  <span className="text-[11px] text-white/60">
                    Last 30 days
                  </span>
                </div>
              </div>

              {/* Revenue */}
              <div className="mt-5 rounded-2xl border border-white/10 bg-black/40 p-4 sm:p-5">
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <p className="text-xs text-white/40">
                      Generated Revenue
                    </p>

                    <p className="mt-2 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                      ₹24.8L
                    </p>
                  </div>

                  <div className="rounded-full bg-white/10 px-2.5 py-1">
                    <span className="text-[11px] font-medium text-white">
                      +28.4%
                    </span>
                  </div>
                </div>

                {/* Graph */}
                <div className="mt-6 flex h-28 items-end gap-1.5 sm:h-32">
                  {[32, 45, 38, 55, 48, 68, 58, 72, 65, 84, 76, 94].map(
                    (height, index) => (
                      <div
                        key={index}
                        className="flex-1 rounded-t-md bg-white/10"
                        style={{ height: `${height}%` }}
                      >
                        <div
                          className="h-full rounded-t-md bg-white/50"
                          style={{
                            height: `${Math.min(height + 8, 100)}%`,
                          }}
                        />
                      </div>
                    )
                  )}
                </div>

                <div className="mt-3 flex justify-between text-[10px] text-white/25">
                  <span>Week 01</span>
                  <span>Week 02</span>
                  <span>Week 03</span>
                  <span>Week 04</span>
                </div>
              </div>

              {/* Campaign Metrics */}
              <div className="mt-3 grid grid-cols-2 gap-3">

                <div className="rounded-2xl border border-white/10 bg-black/40 p-4">
                  <div className="flex items-center justify-between">
                    <p className="text-xs text-white/40">
                      Qualified Leads
                    </p>

                    <span className="text-[10px] text-white/50">
                      +42%
                    </span>
                  </div>

                  <p className="mt-3 text-xl font-semibold text-white">
                    2,840
                  </p>

                  <div className="mt-3 h-1 overflow-hidden rounded-full bg-white/10">
                    <div className="h-full w-[78%] rounded-full bg-white/60" />
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/40 p-4">
                  <div className="flex items-center justify-between">
                    <p className="text-xs text-white/40">
                      Conversion Rate
                    </p>

                    <span className="text-[10px] text-white/50">
                      +18%
                    </span>
                  </div>

                  <p className="mt-3 text-xl font-semibold text-white">
                    8.64%
                  </p>

                  <div className="mt-3 h-1 overflow-hidden rounded-full bg-white/10">
                    <div className="h-full w-[64%] rounded-full bg-white/60" />
                  </div>
                </div>

              </div>
            </div>

            {/* Floating Growth Card */}
            <div className="absolute -bottom-5 -left-3 rounded-2xl border border-white/10 bg-[#0b0b0b]/95 p-4 shadow-2xl shadow-black/50 backdrop-blur-xl sm:-left-8">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10">
                  <span className="text-sm text-white">↗</span>
                </div>

                <div>
                  <p className="text-[10px] text-white/40">
                    Monthly Growth
                  </p>

                  <p className="mt-0.5 text-sm font-semibold text-white">
                    +36.8%
                  </p>
                </div>
              </div>
            </div>

            {/* Floating Status Card */}
            <div className="absolute -right-2 -top-5 hidden rounded-2xl border border-white/10 bg-[#0b0b0b]/95 p-3.5 shadow-2xl shadow-black/50 backdrop-blur-xl sm:block sm:-right-6">
              <div className="flex items-center gap-2.5">
                <span className="h-2 w-2 rounded-full bg-white" />

                <div>
                  <p className="text-[10px] text-white/40">
                    Campaign Status
                  </p>

                  <p className="mt-0.5 text-xs font-medium text-white">
                    Performing above target
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 h-24 w-full bg-gradient-to-t from-black to-transparent" />
    </section>
  );
};

export default Hero;