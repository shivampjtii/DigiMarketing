const ServiceCard = ({ service, active = false }) => {
  if (!service) return null;

  return (
    <article
      className={`group relative flex h-full min-h-[430px] flex-col overflow-hidden rounded-3xl border p-6 transition-all duration-300 sm:p-7 lg:p-8 ${
        active
          ? "border-orange-500/30 bg-[#0D0B09] shadow-2xl shadow-orange-950/20"
          : "border-white/[0.07] bg-[#090909] hover:border-orange-500/20 hover:bg-[#0C0C0C]"
      }`}
    >
      {/* Background Orange Glow */}
      <div
        className={`pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-orange-500/[0.08] blur-[80px] transition-opacity duration-500 ${
          active
            ? "opacity-100"
            : "opacity-0 group-hover:opacity-100"
        }`}
      />

      {/* Subtle Bottom Gradient */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-orange-500/[0.025] to-transparent" />

      <div className="relative flex h-full flex-col">

        {/* Top Row */}
        <div className="flex items-center justify-between">

          {/* Number */}
          <span
            className={`text-xs font-semibold tracking-[0.16em] ${
              active ? "text-orange-400" : "text-orange-500/60"
            }`}
          >
            {service.number}
          </span>

          {/* Icon */}
          <div
            className={`flex h-12 w-12 items-center justify-center rounded-2xl border text-lg transition-all duration-300 ${
              active
                ? "border-orange-500/25 bg-orange-500/10 text-orange-400"
                : "border-white/[0.08] bg-white/[0.025] text-white/40 group-hover:border-orange-500/20 group-hover:bg-orange-500/[0.08] group-hover:text-orange-400"
            }`}
          >
            {service.icon}
          </div>
        </div>

        {/* Title */}
        <div className="mt-9">
          <h3 className="text-2xl font-semibold tracking-[-0.03em] text-white sm:text-3xl">
            {service.title}
          </h3>

          <p className="mt-4 max-w-md text-sm leading-6 text-white/40 sm:text-[15px]">
            {service.description}
          </p>
        </div>

        {/* Benefits */}
        <div className="mt-7 space-y-3">
          {service.benefits?.map((benefit) => (
            <div
              key={benefit}
              className="flex items-start gap-3"
            >
              <span
                className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[10px] ${
                  active
                    ? "bg-orange-500/15 text-orange-400"
                    : "bg-white/[0.05] text-orange-500/70"
                }`}
              >
                ✓
              </span>

              <span className="text-xs leading-5 text-white/45">
                {benefit}
              </span>
            </div>
          ))}
        </div>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Bottom */}
        <div className="mt-8 border-t border-white/[0.07] pt-5">

          <a
            href="#contact"
            className="group/link inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-orange-300"
          >
            {service.cta || "Explore Service"}

            <span className="text-orange-400 transition-transform duration-200 group-hover/link:translate-x-1">
              →
            </span>
          </a>

          {/* Progress Accent */}
          <div className="mt-5 h-1 overflow-hidden rounded-full bg-white/[0.05]">
            <div
              className={`h-full rounded-full bg-gradient-to-r from-orange-600 to-orange-300 transition-all duration-500 ${
                active
                  ? "w-2/3"
                  : "w-1/4 group-hover:w-2/3"
              }`}
            />
          </div>

        </div>

      </div>
    </article>
  );
};

export default ServiceCard;