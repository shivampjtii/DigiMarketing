import {
  BarChart3,
  BriefcaseBusiness,
  TrendingUp,
  Users,
} from "lucide-react";

import Container from "../shared/layout/Container";

const TrustBar = () => {
  const stats = [
    {
      value: "250+",
      label: "Projects Delivered",
      icon: BriefcaseBusiness,
    },
    {
      value: "98%",
      label: "Client Retention",
      icon: Users,
    },
    {
      value: "300%",
      label: "Average Growth",
      icon: TrendingUp,
    },
    {
      value: "₹10Cr+",
      label: "Revenue Generated",
      icon: BarChart3,
    },
  ];

  return (
    <section className="relative border-y border-black/10 bg-orange-50/60">
      <Container>
        <div className="grid grid-cols-2 divide-x divide-y divide-black/10 lg:grid-cols-4 lg:divide-y-0">
          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.label}
                className={`flex flex-col items-center justify-center px-4 py-8 text-center sm:px-6 sm:py-10 lg:py-12 ${
                  index === 0 || index === 2
                    ? "lg:border-l-0"
                    : ""
                }`}
              >
                {/* Icon */}
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-orange-500 shadow-sm sm:h-12 sm:w-12">
                  <Icon size={21} strokeWidth={2} />
                </div>

                {/* Value */}
                <p className="mt-4 text-2xl font-bold tracking-tight text-black sm:text-3xl lg:text-4xl">
                  {stat.value}
                </p>

                {/* Label */}
                <p className="mt-1.5 max-w-[140px] text-xs font-medium leading-5 text-black/55 sm:max-w-none sm:text-sm">
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

export default TrustBar;