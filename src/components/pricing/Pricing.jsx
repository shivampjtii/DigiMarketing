import PricingCard from "./PricingCard";

const Pricing = () => {
  const plans = [
    {
      name: "Brand Kickstart",
      price: "₹XX",
      description:
        "A strong foundation for businesses ready to establish a professional digital presence.",
      target:
        "Best for startups and businesses building their digital foundation.",
      popular: false,
      features: [
        "Digital marketing strategy",
        "Social media management",
        "Basic SEO optimization",
        "Monthly content plan",
        "Performance reporting",
        "Monthly strategy consultation",
      ],
      cta: "Get Started",
    },
    {
      name: "Growth Engine",
      price: "₹XX",
      description:
        "A complete growth system designed to consistently attract and convert qualified customers.",
      target:
        "Best for growing businesses looking for consistent lead generation.",
      popular: true,
      features: [
        "Everything in Brand Kickstart",
        "Advanced SEO strategy",
        "Google & Meta advertising",
        "Conversion optimization",
        "Content creation",
        "Weekly performance tracking",
        "Dedicated growth strategist",
      ],
      cta: "Start Growing",
    },
    {
      name: "Revenue Accelerator",
      price: "₹XX",
      description:
        "An aggressive performance-focused solution built around revenue, acquisition and scale.",
      target:
        "Best for established businesses ready to accelerate revenue.",
      popular: false,
      features: [
        "Everything in Growth Engine",
        "Advanced paid acquisition",
        "Full-funnel strategy",
        "Advanced CRO",
        "Marketing automation",
        "Detailed attribution",
        "Bi-weekly strategy reviews",
        "Priority support",
      ],
      cta: "Accelerate Growth",
    },
    {
      name: "Infinity Enterprise",
      price: "Custom",
      description:
        "A tailored enterprise growth partnership built around complex marketing and business objectives.",
      target:
        "Best for enterprises and high-growth organizations.",
      popular: false,
      features: [
        "Everything in Revenue Accelerator",
        "Custom growth strategy",
        "Multi-channel campaigns",
        "Enterprise SEO",
        "Advanced analytics",
        "Custom reporting dashboards",
        "Dedicated strategy team",
        "Priority execution",
        "Custom integrations",
      ],
      cta: "Talk to an Expert",
    },
  ];

  return (
    <section
      id="pricing"
      className="relative overflow-hidden border-b border-white/[0.06] bg-[#080808]"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[450px] w-[700px] -translate-x-1/2 rounded-full bg-orange-500/[0.045] blur-[140px]" />

      <div className="pointer-events-none absolute -right-40 bottom-20 h-80 w-80 rounded-full bg-orange-600/[0.035] blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32">

        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">

          <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/[0.06] px-3.5 py-2">
            <span className="h-1.5 w-1.5 rounded-full bg-orange-500 shadow-[0_0_8px_rgba(249,115,22,0.6)]" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-orange-300 sm:text-xs">
              Simple & transparent pricing
            </span>
          </div>

          <h2 className="mt-5 text-3xl font-semibold leading-[1.08] tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl">
            Choose the growth plan
            <span className="block bg-gradient-to-r from-orange-300 via-orange-500 to-orange-300 bg-clip-text text-transparent">
              built for your stage.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/40 sm:text-lg sm:leading-8">
            Start with the level of support your business needs today and
            scale your marketing capabilities as your growth accelerates.
          </p>

        </div>

        {/* Pricing Cards */}
        <div className="mt-14 grid gap-4 md:grid-cols-2 xl:grid-cols-4 lg:mt-16">

          {plans.map((plan) => (
            <PricingCard
              key={plan.name}
              plan={plan}
            />
          ))}

        </div>

        {/* GST Note */}
        <div className="mt-5 flex justify-center">
          <p className="text-[10px] leading-5 text-white/20 sm:text-xs">
            All listed prices are exclusive of 18% GST. Final pricing may
            vary based on scope and business requirements.
          </p>
        </div>

        {/* Custom Requirement */}
        <div className="relative mt-12 overflow-hidden rounded-2xl border border-orange-500/15 bg-orange-500/[0.035] sm:mt-14">

          <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-orange-500/[0.08] blur-[80px]" />

          <div className="relative flex flex-col gap-6 p-6 sm:p-8 lg:flex-row lg:items-center lg:justify-between lg:p-10">

            <div className="max-w-2xl">

              <div className="flex items-center gap-2">

                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-orange-500/10 text-xs text-orange-400">
                  ✦
                </span>

                <span className="text-xs font-semibold uppercase tracking-[0.15em] text-orange-300">
                  Need something different?
                </span>

              </div>

              <h3 className="mt-4 text-xl font-semibold tracking-tight text-white sm:text-2xl">
                Let's build a growth plan around your business.
              </h3>

              <p className="mt-2 text-sm leading-6 text-white/35">
                Have a unique business model, larger team, or specific
                marketing requirements? We'll create a custom strategy and
                scope around your goals.
              </p>

            </div>

            <a
              href="#contact"
              className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-orange-500 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-orange-500/10 transition-all duration-200 hover:bg-orange-400 hover:shadow-orange-500/20 active:scale-[0.98]"
            >
              Discuss Your Requirements

              <span className="transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </a>

          </div>

        </div>

        {/* Bottom Trust */}
        <div className="mt-10 flex flex-col items-center justify-center gap-3 text-center sm:flex-row sm:gap-4">

          <div className="flex items-center gap-2">
            <span className="text-orange-400">✓</span>

            <span className="text-xs text-white/30">
              No long-term contracts
            </span>
          </div>

          <span className="hidden h-1 w-1 rounded-full bg-white/15 sm:block" />

          <div className="flex items-center gap-2">
            <span className="text-orange-400">✓</span>

            <span className="text-xs text-white/30">
              Transparent reporting
            </span>
          </div>

          <span className="hidden h-1 w-1 rounded-full bg-white/15 sm:block" />

          <div className="flex items-center gap-2">
            <span className="text-orange-400">✓</span>

            <span className="text-xs text-white/30">
              Strategy-first approach
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Pricing;