const Hero = () => {
  const metrics = [
    {
      value: "+184%",
      label: "Qualified Leads",
      change: "+24.8%",
    },
    {
      value: "3.2×",
      label: "ROAS",
      change: "+18.4%",
    },
    {
      value: "-32%",
      label: "Acquisition Cost",
      change: "-12.6%",
    },
    {
      value: "+72%",
      label: "Organic Traffic",
      change: "+21.3%",
    },
  ];

  const channels = [
    {
      name: "Organic Search",
      percentage: 42,
    },
    {
      name: "Paid Advertising",
      percentage: 31,
    },
    {
      name: "Social Media",
      percentage: 18,
    },
    {
      name: "Referral",
      percentage: 9,
    },
  ];

  const campaigns = [
    {
      name: "Google Search",
      status: "Active",
      leads: "428",
      growth: "+28%",
    },
    {
      name: "Meta Campaign",
      status: "Active",
      leads: "316",
      growth: "+19%",
    },
    {
      name: "SEO Growth",
      status: "Optimizing",
      leads: "284",
      growth: "+34%",
    },
  ];

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#050505]"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-[-180px] h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-orange-500/[0.09] blur-[140px]" />

      <div className="pointer-events-none absolute -right-40 top-[35%] h-80 w-80 rounded-full bg-orange-600/[0.05] blur-[120px]" />

      {/* Grid */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.035]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 pb-20 pt-16 sm:px-6 sm:pb-24 sm:pt-20 lg:px-8 lg:pb-32 lg:pt-24">

        {/* ================= HERO CONTENT ================= */}

        <div className="mx-auto max-w-5xl text-center">

          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/[0.06] px-4 py-2 text-xs font-medium text-orange-300 sm:text-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.8)]" />

            Digital Growth Partner
          </div>

          {/* Heading */}
          <h1 className="mx-auto mt-7 max-w-5xl text-4xl font-semibold leading-[1.05] tracking-[-0.045em] text-white sm:text-5xl md:text-6xl lg:text-7xl xl:text-[80px]">
            Marketing that
            <span className="block">
              drives{" "}
              <span className="bg-gradient-to-r from-orange-300 via-orange-500 to-orange-300 bg-clip-text text-transparent">
                measurable growth.
              </span>
            </span>
          </h1>

          {/* Description */}
          <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-white/45 sm:text-lg sm:leading-8 lg:text-xl">
            We help ambitious businesses turn strategy, creativity, and
            technology into predictable customer acquisition and sustainable
            revenue growth.
          </p>

          {/* CTA */}
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">

            <a
              href="#contact"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-orange-500 px-7 py-3.5 text-sm font-semibold text-white shadow-xl shadow-orange-500/20 transition-all duration-200 hover:bg-orange-400 hover:shadow-orange-500/30 active:scale-[0.98] sm:w-auto"
            >
              Start Growing Now

              <span className="transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </a>

            <a
              href="#case-studies"
              className="inline-flex w-full items-center justify-center rounded-full border border-white/10 bg-white/[0.03] px-7 py-3.5 text-sm font-semibold text-white/70 transition-all duration-200 hover:border-orange-500/30 hover:bg-orange-500/[0.05] hover:text-white active:scale-[0.98] sm:w-auto"
            >
              See Our Results
            </a>

          </div>

          {/* Trust Indicators */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-3 text-xs text-white/30 sm:text-sm">

            <div className="flex items-center gap-2">
              <span className="text-orange-400">✓</span>
              150+ businesses scaled
            </div>

            <span className="hidden h-1 w-1 rounded-full bg-white/15 sm:block" />

            <div className="flex items-center gap-2">
              <span className="text-orange-400">✓</span>
              Data-driven strategies
            </div>

            <span className="hidden h-1 w-1 rounded-full bg-white/15 sm:block" />

            <div className="flex items-center gap-2">
              <span className="text-orange-400">✓</span>
              Transparent reporting
            </div>

          </div>

        </div>

        {/* ================= DASHBOARD ================= */}

        <div className="relative mx-auto mt-16 max-w-6xl sm:mt-20 lg:mt-24">

          {/* Dashboard Glow */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/[0.07] blur-[100px]" />

          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#090909] shadow-2xl shadow-black/50 sm:rounded-3xl">

            {/* Browser Bar */}
            <div className="flex h-12 items-center justify-between border-b border-white/[0.07] px-4 sm:px-5">

              <div className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
                <span className="h-2.5 w-2.5 rounded-full bg-orange-500" />
              </div>

              <div className="hidden h-7 w-52 items-center justify-center rounded-lg border border-white/[0.06] bg-white/[0.02] sm:flex">
                <span className="text-[10px] text-white/20">
                  dashboard.digrow.co
                </span>
              </div>

              <div className="h-6 w-10 rounded-md bg-white/[0.03]" />

            </div>

            {/* Dashboard */}
            <div className="grid md:grid-cols-[190px_1fr] lg:grid-cols-[210px_1fr]">

              {/* ================= SIDEBAR ================= */}

              <aside className="hidden border-r border-white/[0.07] p-4 md:block">

                {/* Logo */}
                <div className="flex items-center gap-2 px-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-orange-500 text-xs font-black text-white">
                    D
                  </div>

                  <span className="text-xs font-semibold text-white">
                    DIGROW
                  </span>
                </div>

                {/* Menu */}
                <div className="mt-8 space-y-1">

                  <div className="flex items-center gap-3 rounded-lg bg-orange-500/10 px-3 py-2.5 text-xs font-medium text-orange-400">
                    <span>◉</span>
                    Overview
                  </div>

                  <div className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-xs text-white/35">
                    <span>◫</span>
                    Campaigns
                  </div>

                  <div className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-xs text-white/35">
                    <span>⌁</span>
                    Analytics
                  </div>

                  <div className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-xs text-white/35">
                    <span>◎</span>
                    Audience
                  </div>

                  <div className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-xs text-white/35">
                    <span>▤</span>
                    Reports
                  </div>

                </div>

                {/* Bottom Sidebar */}
                <div className="mt-10 rounded-xl border border-orange-500/10 bg-orange-500/[0.04] p-3">
                  <p className="text-[10px] text-white/30">
                    Monthly goal
                  </p>

                  <p className="mt-1 text-sm font-semibold text-white">
                    82% achieved
                  </p>

                  <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/[0.06]">
                    <div className="h-full w-[82%] rounded-full bg-orange-500" />
                  </div>
                </div>

              </aside>

              {/* ================= MAIN DASHBOARD ================= */}

              <div className="min-w-0 p-4 sm:p-6 lg:p-7">

                {/* Dashboard Header */}
                <div className="flex items-start justify-between gap-4">

                  <div>
                    <p className="text-[10px] uppercase tracking-[0.14em] text-white/25">
                      Overview
                    </p>

                    <h3 className="mt-1 text-lg font-semibold tracking-tight text-white sm:text-xl">
                      Marketing Performance
                    </h3>
                  </div>

                  <button className="hidden rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-[10px] text-white/40 sm:block">
                    Last 30 days
                    <span className="ml-2">⌄</span>
                  </button>

                </div>

                {/* ================= METRICS ================= */}

                <div className="mt-6 grid grid-cols-2 gap-3 lg:grid-cols-4">

                  {metrics.map((metric) => (
                    <div
                      key={metric.label}
                      className="rounded-xl border border-white/[0.07] bg-white/[0.02] p-3.5 transition-colors hover:border-orange-500/20 sm:p-4"
                    >
                      <p className="text-[10px] text-white/30">
                        {metric.label}
                      </p>

                      <p className="mt-2 text-xl font-semibold tracking-tight text-white sm:text-2xl">
                        {metric.value}
                      </p>

                      <p className="mt-1 text-[10px] font-medium text-orange-400">
                        {metric.change}
                      </p>
                    </div>
                  ))}

                </div>

                {/* ================= CHART + CHANNELS ================= */}

                <div className="mt-4 grid gap-4 lg:grid-cols-[1.5fr_0.7fr]">

                  {/* Chart */}
                  <div className="rounded-xl border border-white/[0.07] bg-white/[0.02] p-4 sm:p-5">

                    <div className="flex items-center justify-between">

                      <div>
                        <p className="text-[10px] text-white/30">
                          Growth performance
                        </p>

                        <p className="mt-1 text-sm font-medium text-white">
                          Revenue & Acquisition
                        </p>
                      </div>

                      <span className="rounded-md bg-orange-500/10 px-2 py-1 text-[9px] font-medium text-orange-400">
                        +28.4%
                      </span>

                    </div>

                    {/* Chart */}
                    <div className="relative mt-6 h-40">

                      {/* Grid Lines */}
                      <div className="absolute inset-x-0 top-0 border-t border-white/[0.05]" />
                      <div className="absolute inset-x-0 top-1/4 border-t border-white/[0.05]" />
                      <div className="absolute inset-x-0 top-2/4 border-t border-white/[0.05]" />
                      <div className="absolute inset-x-0 top-3/4 border-t border-white/[0.05]" />
                      <div className="absolute inset-x-0 bottom-0 border-t border-white/[0.05]" />

                      <svg
                        viewBox="0 0 700 180"
                        className="absolute inset-0 h-full w-full"
                        preserveAspectRatio="none"
                      >
                        <defs>
                          <linearGradient
                            id="heroOrangeGradient"
                            x1="0"
                            x2="0"
                            y1="0"
                            y2="1"
                          >
                            <stop
                              offset="0%"
                              stopColor="#F97316"
                              stopOpacity="0.28"
                            />

                            <stop
                              offset="100%"
                              stopColor="#F97316"
                              stopOpacity="0"
                            />
                          </linearGradient>
                        </defs>

                        <path
                          d="M0 150 C70 140 90 128 145 133 C200 138 220 102 275 110 C330 118 350 78 405 88 C460 98 485 54 535 65 C590 77 630 28 700 35 L700 180 L0 180 Z"
                          fill="url(#heroOrangeGradient)"
                        />

                        <path
                          d="M0 150 C70 140 90 128 145 133 C200 138 220 102 275 110 C330 118 350 78 405 88 C460 98 485 54 535 65 C590 77 630 28 700 35"
                          fill="none"
                          stroke="#F97316"
                          strokeWidth="3"
                          strokeLinecap="round"
                        />

                        <circle
                          cx="535"
                          cy="65"
                          r="5"
                          fill="#F97316"
                        />

                        <circle
                          cx="535"
                          cy="65"
                          r="10"
                          fill="#F97316"
                          opacity="0.12"
                        />

                      </svg>

                    </div>

                    {/* Chart Labels */}
                    <div className="flex justify-between text-[9px] text-white/20">
                      <span>Week 01</span>
                      <span>Week 02</span>
                      <span>Week 03</span>
                      <span>Week 04</span>
                    </div>

                  </div>

                  {/* Channels */}
                  <div className="rounded-xl border border-white/[0.07] bg-white/[0.02] p-4 sm:p-5">

                    <p className="text-[10px] text-white/30">
                      Acquisition channels
                    </p>

                    <p className="mt-1 text-sm font-medium text-white">
                      Traffic Sources
                    </p>

                    <div className="mt-6 space-y-5">

                      {channels.map((channel) => (
                        <div key={channel.name}>

                          <div className="flex items-center justify-between">
                            <span className="text-[10px] text-white/45">
                              {channel.name}
                            </span>

                            <span className="text-[10px] font-medium text-white/60">
                              {channel.percentage}%
                            </span>
                          </div>

                          <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/[0.06]">
                            <div
                              className="h-full rounded-full bg-gradient-to-r from-orange-600 to-orange-400"
                              style={{
                                width: `${channel.percentage}%`,
                              }}
                            />
                          </div>

                        </div>
                      ))}

                    </div>

                  </div>

                </div>

                {/* ================= CAMPAIGNS ================= */}

                <div className="mt-4 rounded-xl border border-white/[0.07] bg-white/[0.02]">

                  <div className="flex items-center justify-between border-b border-white/[0.07] px-4 py-3.5 sm:px-5">

                    <div>
                      <p className="text-[10px] text-white/30">
                        Campaign performance
                      </p>

                      <p className="mt-1 text-sm font-medium text-white">
                        Active Campaigns
                      </p>
                    </div>

                    <span className="text-[10px] text-orange-400">
                      View all →
                    </span>

                  </div>

                  <div className="divide-y divide-white/[0.05]">

                    {campaigns.map((campaign) => (
                      <div
                        key={campaign.name}
                        className="grid grid-cols-[1fr_auto] items-center gap-4 px-4 py-3 sm:grid-cols-[1.5fr_0.8fr_0.5fr_0.5fr] sm:px-5"
                      >

                        <div>
                          <p className="text-xs font-medium text-white/70">
                            {campaign.name}
                          </p>

                          <p className="mt-0.5 text-[9px] text-white/25 sm:hidden">
                            {campaign.status}
                          </p>
                        </div>

                        <span className="hidden text-[10px] text-white/30 sm:block">
                          {campaign.status}
                        </span>

                        <span className="text-right text-xs text-white/50">
                          {campaign.leads}
                          <span className="ml-1 text-[9px] text-white/20">
                            leads
                          </span>
                        </span>

                        <span className="text-right text-[10px] font-medium text-orange-400">
                          {campaign.growth}
                        </span>

                      </div>
                    ))}

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* Bottom Trust */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs text-white/25">

          <span>Trusted by ambitious businesses</span>

          <span className="hidden h-1 w-1 rounded-full bg-orange-500 sm:block" />

          <span>Data-driven marketing</span>

          <span className="hidden h-1 w-1 rounded-full bg-orange-500 sm:block" />

          <span>Built for measurable growth</span>

        </div>

      </div>
    </section>
  );
};

export default Hero;