const FinalCTA = () => {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-black"
    >
      {/* Background Elements */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.04] blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32">

        {/* Main CTA */}
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] px-6 py-14 text-center sm:px-10 sm:py-16 lg:px-16 lg:py-20">

          {/* Decorative Grid */}
          <div className="pointer-events-none absolute inset-0 opacity-[0.04]">
            <div
              className="h-full w-full"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
                backgroundSize: "50px 50px",
              }}
            />
          </div>

          {/* Glow */}
          <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-white/[0.06] blur-3xl" />

          <div className="relative mx-auto max-w-3xl">

            {/* Eyebrow */}
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-3.5 py-2 text-xs font-medium uppercase tracking-[0.16em] text-white/45">
              <span className="h-1.5 w-1.5 rounded-full bg-white" />
              Let's build something great
            </span>

            {/* Heading */}
            <h2 className="mt-6 text-3xl font-semibold leading-[1.08] tracking-[-0.04em] text-white sm:text-4xl lg:text-6xl">
              Ready to turn your marketing into a{" "}
              <span className="text-white/40">
                growth engine?
              </span>
            </h2>

            {/* Description */}
            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/45 sm:text-lg sm:leading-8">
              Tell us where your business is today, where you want to go, and
              we'll help you build a digital growth strategy to get there.
            </p>

            {/* CTA Buttons */}
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">

              <a
                href="#contact-form"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-black transition-all duration-200 hover:bg-white/90 active:scale-[0.98] sm:w-auto"
              >
                Book a Free Strategy Call

                <span className="transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </a>

              <a
                href="#pricing"
                className="inline-flex w-full items-center justify-center rounded-full border border-white/15 bg-white/[0.03] px-7 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:border-white/25 hover:bg-white/[0.08] active:scale-[0.98] sm:w-auto"
              >
                View Pricing
              </a>

            </div>

            {/* Trust Notes */}
            <div className="mt-7 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-white/30">
              <span>✓ No long-term commitment</span>
              <span className="hidden h-1 w-1 rounded-full bg-white/20 sm:block" />
              <span>✓ Free initial consultation</span>
              <span className="hidden h-1 w-1 rounded-full bg-white/20 sm:block" />
              <span>✓ Tailored recommendations</span>
            </div>

          </div>

        </div>

        {/* Contact Information */}
        <div
          id="contact-form"
          className="mt-5 grid gap-5 md:grid-cols-3"
        >

          {/* Contact */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-5 sm:p-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04]">
              <span className="text-sm text-white/60">
                @
              </span>
            </div>

            <p className="mt-5 text-xs font-medium uppercase tracking-[0.14em] text-white/30">
              Email
            </p>

            <a
              href="mailto:hello@digrow.example"
              className="mt-2 block text-sm font-medium text-white transition-colors hover:text-white/70"
            >
              hello@digrow.example
            </a>
          </div>

          {/* Consultation */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-5 sm:p-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04]">
              <span className="text-sm text-white/60">
                ↗
              </span>
            </div>

            <p className="mt-5 text-xs font-medium uppercase tracking-[0.14em] text-white/30">
              Consultation
            </p>

            <p className="mt-2 text-sm font-medium text-white">
              30-minute strategy session
            </p>
          </div>

          {/* Response */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-5 sm:p-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04]">
              <span className="h-2 w-2 rounded-full bg-white" />
            </div>

            <p className="mt-5 text-xs font-medium uppercase tracking-[0.14em] text-white/30">
              Response time
            </p>

            <p className="mt-2 text-sm font-medium text-white">
              Usually within 1 business day
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default FinalCTA;