import ServiceSlider from "./ServiceSlider";

const Services = () => {
  return (
    <section
      id="services"
      className="relative overflow-hidden border-b border-white/10 bg-black"
    >
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32">

        {/* Section Header */}
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">

          <div>
            <span className="inline-flex rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-2 text-xs font-medium uppercase tracking-[0.16em] text-white/45">
              Our services
            </span>

            <h2 className="mt-5 max-w-xl text-3xl font-semibold leading-tight tracking-[-0.035em] text-white sm:text-4xl lg:text-5xl">
              Everything you need to{" "}
              <span className="text-white/40">
                grow online.
              </span>
            </h2>
          </div>

          <div className="lg:ml-auto lg:max-w-xl">
            <p className="text-base leading-7 text-white/45 sm:text-lg sm:leading-8">
              From building your brand to generating demand, our services work
              together as one connected growth system designed around your
              business goals.
            </p>
          </div>

        </div>

        {/* Services Slider */}
        <div className="mt-12 sm:mt-14 lg:mt-16">
          <ServiceSlider />
        </div>

        {/* Bottom CTA */}
        <div className="mt-8 flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/[0.025] p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">

          <div>
            <p className="text-sm font-medium text-white">
              Not sure which service you need?
            </p>

            <p className="mt-1 text-sm text-white/40">
              Tell us about your goals and we'll recommend the right strategy.
            </p>
          </div>

          <a
            href="#contact"
            className="group inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-white transition-all duration-200 hover:border-white/25 hover:bg-white/[0.08] sm:w-auto"
          >
            Talk to an expert

            <span className="transition-transform duration-200 group-hover:translate-x-1">
              →
            </span>
          </a>

        </div>

      </div>
    </section>
  );
};

export default Services;