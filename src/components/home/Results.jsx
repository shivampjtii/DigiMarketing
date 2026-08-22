import {
  ArrowUpRight,
  BarChart3,
  CircleDollarSign,
  TrendingUp,
  Users,
} from "lucide-react";

import Container from "../shared/layout/Container";
import SectionHeading from "../shared/section/SectionHeading";

const Results = () => {
  const metrics = [
    {
      icon: TrendingUp,
      value: "300%",
      label: "Average Growth",
    },
    {
      icon: Users,
      value: "2.5x",
      label: "More Qualified Leads",
    },
    {
      icon: CircleDollarSign,
      value: "₹10Cr+",
      label: "Revenue Generated",
    },
  ];

  return (
    <section className="overflow-hidden bg-white py-12 sm:py-16 lg:py-20">
      <Container>
        <div className="grid items-stretch gap-8 lg:grid-cols-2 lg:gap-10 xl:gap-12">
          
          {/* Left Content */}
          <div className="flex flex-col">
            <SectionHeading
              badge="Real Results"
              title="Marketing That Creates an Impact You Can Measure."
              description="We focus on meaningful business outcomes—not vanity metrics. Every strategy is built to create measurable improvements in visibility, leads, conversions, and growth."
              align="left"
            />

            {/* Metrics */}
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {metrics.map((metric) => {
                const Icon = metric.icon;

                return (
                  <div
                    key={metric.label}
                    className="group rounded-2xl border border-black/10 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-lg hover:shadow-orange-500/10"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-50 text-orange-500 transition-all duration-300 group-hover:bg-orange-500 group-hover:text-white">
                      <Icon size={20} />
                    </div>

                    <p className="mt-5 text-2xl font-bold tracking-tight text-black sm:text-3xl">
                      {metric.value}
                    </p>

                    <p className="mt-1 text-xs leading-5 text-black/55 sm:text-sm">
                      {metric.label}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Result statement */}
            <div className="mt-5 flex items-start gap-3 rounded-2xl border border-orange-100 bg-orange-50 p-4 sm:p-5">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-orange-500 text-white">
                <BarChart3 size={18} />
              </div>

              <div>
                <p className="font-semibold text-black">
                  Clear reporting. Better decisions.
                </p>

                <p className="mt-1 text-sm leading-6 text-black/60">
                  Know exactly what is working, where your investment is going,
                  and what opportunities can drive the next stage of growth.
                </p>
              </div>
            </div>
          </div>

          {/* Right Results Visual */}
          <div className="relative mx-auto flex w-full max-w-xl lg:max-w-none">
            {/* Decorative background */}
            <div className="absolute -right-8 -top-8 h-48 w-48 rounded-full bg-orange-100 blur-2xl" />

            {/* Dashboard */}
            <div className="relative flex h-full w-full flex-col overflow-hidden rounded-3xl border border-black/10 bg-black p-5 shadow-2xl shadow-black/15 sm:p-6">
              
              {/* Dashboard header */}
              <div className="flex items-center justify-between border-b border-white/10 pb-5">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-orange-400">
                    Performance Overview
                  </p>

                  <h3 className="mt-1 text-lg font-bold text-white">
                    Growth Dashboard
                  </h3>
                </div>

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500 text-white">
                  <ArrowUpRight size={20} />
                </div>
              </div>

              {/* Main Growth Result */}
              <div className="mt-5 flex flex-1 flex-col rounded-2xl border border-white/10 bg-white/[0.05] p-5 sm:p-6">
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <p className="text-sm text-white/50">
                      Overall Business Growth
                    </p>

                    <p className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                      +300%
                    </p>

                    <p className="mt-2 text-sm font-medium text-orange-400">
                      ↑ Increased performance
                    </p>
                  </div>

                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-orange-500/15 text-orange-400">
                    <TrendingUp size={28} />
                  </div>
                </div>

                {/* Graph */}
                <div className="mt-auto pt-6">
                  <div className="flex h-28 items-end gap-2 sm:h-36">
                    <div className="h-[22%] flex-1 rounded-t-md bg-orange-500/20" />
                    <div className="h-[32%] flex-1 rounded-t-md bg-orange-500/30" />
                    <div className="h-[28%] flex-1 rounded-t-md bg-orange-500/35" />
                    <div className="h-[48%] flex-1 rounded-t-md bg-orange-500/45" />
                    <div className="h-[62%] flex-1 rounded-t-md bg-orange-500/60" />
                    <div className="h-[55%] flex-1 rounded-t-md bg-orange-500/70" />
                    <div className="h-[76%] flex-1 rounded-t-md bg-orange-500/80" />
                    <div className="h-full flex-1 rounded-t-md bg-orange-500" />
                  </div>

                  <div className="mt-3 flex justify-between text-[10px] uppercase tracking-wider text-white/30">
                    <span>Start</span>
                    <span>Month 3</span>
                    <span>Month 6</span>
                    <span>Now</span>
                  </div>
                </div>
              </div>

              {/* Bottom stats */}
              <div className="mt-4 grid grid-cols-2 gap-4">
                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                  <p className="text-xs text-white/45">
                    Qualified Leads
                  </p>

                  <p className="mt-2 text-xl font-bold text-white">
                    2.5×
                  </p>

                  <p className="mt-1 text-xs text-orange-400">
                    Growth
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                  <p className="text-xs text-white/45">
                    Conversion Rate
                  </p>

                  <p className="mt-2 text-xl font-bold text-white">
                    +72%
                  </p>

                  <p className="mt-1 text-xs text-orange-400">
                    Improvement
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Results;