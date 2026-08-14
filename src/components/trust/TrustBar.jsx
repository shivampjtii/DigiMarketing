const TrustBar = () => {
  const clients = [
    "NEXORA",
    "VERTEX",
    "LUMINA",
    "ORBITAL",
    "PULSE",
  ];

  return (
    <section
      id="trust"
      className="border-b border-white/10 bg-black"
    >
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-6 lg:px-8">
        
        {/* Trust Header */}
        <div className="text-center">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/35 sm:text-sm">
            Trusted by ambitious businesses
          </p>
        </div>

        {/* Client Logos */}
        <div className="mt-8 grid grid-cols-2 items-center gap-x-6 gap-y-6 sm:grid-cols-3 lg:grid-cols-5">
          {clients.map((client) => (
            <div
              key={client}
              className="flex h-10 items-center justify-center"
            >
              <span className="text-sm font-bold tracking-[0.18em] text-white/25 transition-colors duration-200 hover:text-white/50 sm:text-base">
                {client}
              </span>
            </div>
          ))}
        </div>

        {/* Metrics */}
        <div className="mt-10 border-t border-white/10 pt-8">
          <div className="grid grid-cols-2 gap-y-8 sm:grid-cols-4 sm:divide-x sm:divide-white/10">

            {/* Metric 1 */}
            <div className="text-center sm:px-6">
              <p className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                150+
              </p>

              <p className="mt-1 text-xs text-white/40 sm:text-sm">
                Businesses scaled
              </p>
            </div>

            {/* Metric 2 */}
            <div className="text-center sm:px-6">
              <p className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                ₹12Cr+
              </p>

              <p className="mt-1 text-xs text-white/40 sm:text-sm">
                Revenue influenced
              </p>
            </div>

            {/* Metric 3 */}
            <div className="text-center sm:px-6">
              <p className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                3.2×
              </p>

              <p className="mt-1 text-xs text-white/40 sm:text-sm">
                Average ROAS
              </p>
            </div>

            {/* Metric 4 */}
            <div className="text-center sm:px-6">
              <p className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                94%
              </p>

              <p className="mt-1 text-xs text-white/40 sm:text-sm">
                Client retention
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBar;