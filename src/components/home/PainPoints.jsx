import { AlertCircle, BarChart3, EyeOff, Target } from "lucide-react";

import Container from "../shared/layout/Container";

const PainPoints = () => {
  const painPoints = [
    {
      icon: EyeOff,
      number: "01",
      title: "Low Online Visibility",
      description:
        "Your ideal customers are searching online, but your business isn't showing up where it matters most.",
    },
    {
      icon: Target,
      number: "02",
      title: "Poor Quality Leads",
      description:
        "You may be getting traffic and enquiries, but they aren't turning into valuable customers.",
    },
    {
      icon: BarChart3,
      number: "03",
      title: "Unclear Marketing Results",
      description:
        "Money is being spent on marketing without clear data showing what is actually working.",
    },
    {
      icon: AlertCircle,
      number: "04",
      title: "Disconnected Strategy",
      description:
        "SEO, social media, advertising, and content work separately instead of supporting one growth strategy.",
    },
  ];

  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20">
      <Container>
        {/* Section Heading */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-orange-500" />

            <span className="text-xs font-bold uppercase tracking-[0.16em] text-orange-600 sm:text-sm">
              The Challenge
            </span>
          </div>

          <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-black sm:text-4xl lg:text-5xl">
            Is Your Digital Marketing Working as Hard as It Should?
          </h2>

          <p className="mt-4 max-w-2xl text-base leading-7 text-black/60 sm:text-lg sm:leading-8">
            Many businesses invest in digital marketing but struggle to turn
            that investment into measurable business growth.
          </p>
        </div>

        {/* Pain Points */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {painPoints.map((point) => {
            const Icon = point.icon;

            return (
              <article
                key={point.number}
                className="group relative overflow-hidden rounded-3xl border border-black/10 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-xl hover:shadow-orange-500/10 sm:p-6"
              >
                {/* Background Number */}
                <span className="pointer-events-none absolute -right-2 -top-5 text-8xl font-black tracking-tighter text-orange-500/[0.06] transition-transform duration-300 group-hover:scale-110">
                  {point.number}
                </span>

                {/* Icon */}
                <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-50 text-orange-500 transition-all duration-300 group-hover:bg-orange-500 group-hover:text-white">
                  <Icon size={22} strokeWidth={2} />
                </div>

                {/* Number */}
                <p className="relative mt-5 text-xs font-bold uppercase tracking-[0.16em] text-orange-500">
                  Problem {point.number}
                </p>

                {/* Title */}
                <h3 className="relative mt-2 text-lg font-bold tracking-tight text-black sm:text-xl">
                  {point.title}
                </h3>

                {/* Description */}
                <p className="relative mt-3 text-sm leading-6 text-black/60">
                  {point.description}
                </p>

                {/* Bottom accent */}
                <div className="relative mt-5 h-1 w-10 rounded-full bg-orange-100 transition-all duration-300 group-hover:w-full group-hover:bg-orange-500" />
              </article>
            );
          })}
        </div>

        {/* Bottom statement */}
        <div className="mt-8 rounded-3xl border border-orange-100 bg-orange-50 px-5 py-5 text-left sm:px-8 sm:py-6 lg:mt-10">
          <p className="text-lg font-semibold tracking-tight text-black sm:text-xl lg:text-2xl">
            Great marketing shouldn't feel like guesswork.
            <span className="text-orange-500">
              {" "}
              It should drive measurable growth.
            </span>
          </p>
        </div>
      </Container>
    </section>
  );
};

export default PainPoints;