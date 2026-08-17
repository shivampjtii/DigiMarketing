import ServiceSlider from "./ServiceSlider";

const Services = () => {
  return (
    <section
      id="services"
      className="relative overflow-hidden border-b border-white/[0.06] bg-[#050505]"
    >
      {/* Background orange glow */}
      <div className="pointer-events-none absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-orange-500/[0.045] blur-[140px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-orange-600/[0.035] blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32">

        {/* Section Header */}
        <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-end">

          {/* Heading */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/[0.06] px-3.5 py-2">
              <span className="h-1.5 w-1.5 rounded-full bg-orange-500 shadow-[0_0_8px_rgba(249,115,22,0.6)]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-orange-300 sm:text-xs">
                What we do
              </span>
            </div>

            <h2 className="mt-5 max-w-2xl text-3xl font-semibold leading-[1.08] tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl">
              Everything you need to
              <span className="block bg-gradient-to-r from-orange-300 via-orange-500 to-orange-300 bg-clip-text text-transparent">
                grow digitally.
              </span>
            </h2>
          </div>

          {/* Description */}
          <div className="lg:ml-auto lg:max-w-lg">
            <p className="text-base leading-7 text-white/40 sm:text-lg sm:leading-8">
              From attracting the right audience to converting them into
              customers, our services work together as one connected growth
              system.
            </p>

            <div className="mt-5 flex items-center gap-3">
              <span className="h-px w-8 bg-orange-500/60" />

              <span className="text-xs text-white/30">
                Explore our capabilities
              </span>
            </div>
          </div>

        </div>

        {/* Services Slider */}
        <div className="mt-12 sm:mt-14 lg:mt-16">
          <ServiceSlider />
        </div>

        {/* Bottom Service Summary */}
        <div className="mt-12 grid gap-3 sm:grid-cols-3 sm:mt-14">

          <div className="rounded-xl border border-white/[0.06] bg-white/[0.015] p-4 sm:p-5">
            <div className="flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-orange-500/[0.08] text-xs text-orange-400">
                ◎
              </span>

              <span className="text-sm font-medium text-white/70">
                Strategy First
              </span>
            </div>

            <p className="mt-3 text-xs leading-5 text-white/30">
              Every service starts with your business goals and customer
              journey.
            </p>
          </div>

          <div className="rounded-xl border border-white/[0.06] bg-white/[0.015] p-4 sm:p-5">
            <div className="flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-orange-500/[0.08] text-xs text-orange-400">
                ↗
              </span>

              <span className="text-sm font-medium text-white/70">
                Performance Driven
              </span>
            </div>

            <p className="mt-3 text-xs leading-5 text-white/30">
              We measure success through business outcomes, not vanity
              metrics.
            </p>
          </div>

          <div className="rounded-xl border border-white/[0.06] bg-white/[0.015] p-4 sm:p-5">
            <div className="flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-orange-500/[0.08] text-xs text-orange-400">
                ⌁
              </span>

              <span className="text-sm font-medium text-white/70">
                Built to Scale
              </span>
            </div>

            <p className="mt-3 text-xs leading-5 text-white/30">
              We build systems that can grow alongside your business.
            </p>
          </div>

        </div>

        {/* CTA */}
        <div className="mt-12 flex flex-col items-center text-center sm:mt-14">

          <p className="text-sm text-white/30">
            Don't see exactly what you need?
          </p>

          <a
            href="#contact"
            className="group mt-3 inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-orange-300"
          >
            Talk to our growth team

            <span className="text-orange-400 transition-transform duration-200 group-hover:translate-x-1">
              →
            </span>
          </a>

        </div>

      </div>
    </section>
  );
};

export default Services;