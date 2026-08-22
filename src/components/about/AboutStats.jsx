import { Award, BarChart3, Users, Zap } from "lucide-react";

import Container from "../shared/layout/Container";

const AboutStats = () => {
  const stats = [
    {
      icon: Users,
      value: "50+",
      label: "Businesses Supported",
    },
    {
      icon: BarChart3,
      value: "200%",
      label: "Average Growth Focus",
    },
    {
      icon: Award,
      value: "15+",
      label: "Successful Projects",
    },
    {
      icon: Zap,
      value: "24/7",
      label: "Commitment to Growth",
    },
  ];

  return (
    <section className="bg-black py-10 sm:py-14 lg:py-12">
      <Container>
        <div className="grid grid-cols-2 divide-x divide-y divide-white/10 overflow-hidden rounded-3xl border border-white/10 lg:grid-cols-4 lg:divide-y-0">
          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.label}
                className={`group p-5 sm:p-7 lg:p-8 ${
                  index === 0 ? "border-b lg:border-b-0" : ""
                } ${index === 2 ? "lg:border-b-0" : ""}`}
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-500/10 text-orange-500 transition-transform duration-300 group-hover:scale-110">
                    <Icon size={20} />
                  </div>

                  <span className="text-xs font-semibold uppercase tracking-[0.12em] text-white/40">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <p className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                  {stat.value}
                </p>

                <p className="mt-2 text-sm leading-6 text-white/55 sm:text-base">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default AboutStats;