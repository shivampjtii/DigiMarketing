import { Eye, Target } from "lucide-react";

import Container from "../shared/layout/Container";
import SectionHeading from "../shared/section/SectionHeading";

const Mission = () => {
  const items = [
    {
      icon: Target,
      badge: "Our Mission",
      title: "Make Digital Growth Clear, Strategic, and Measurable.",
      description:
        "Our mission is to help ambitious businesses make smarter digital decisions. We combine strategic thinking, creative execution, and data-driven optimization to create work that contributes to meaningful business growth.",
    },
    {
      icon: Eye,
      badge: "Our Vision",
      title: "Become the Growth Partner Businesses Can Rely On.",
      description:
        "We envision a digital landscape where businesses no longer have to guess whether their marketing is working. Our goal is to create clarity, build stronger digital foundations, and help brands grow with confidence.",
    },
  ];

  return (
    <section className="bg-white py-10 sm:py-14 lg:py-12">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <SectionHeading
            badge="What Drives Us"
            title="Built Around Purpose. Focused on Progress."
            description="Everything we do starts with a clear purpose and stays focused on creating long-term value for the businesses we work with."
            align="center"
          />
        </div>

        <div className="mt-12 grid gap-6 lg:mt-16 lg:grid-cols-2 lg:gap-8">
          {items.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.badge}
                className="group relative overflow-hidden rounded-3xl border border-black/10 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-xl hover:shadow-black/5 sm:p-8 lg:p-10"
              >
                {/* Background Decoration */}
                <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-orange-50 transition-transform duration-500 group-hover:scale-150" />

                <div className="relative">
                  {/* Icon */}
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500 text-white shadow-lg shadow-orange-500/20">
                    <Icon size={25} />
                  </div>

                  {/* Badge */}
                  <p className="mt-8 text-xs font-bold uppercase tracking-[0.16em] text-orange-500">
                    {item.badge}
                  </p>

                  {/* Title */}
                  <h3 className="mt-3 max-w-md text-2xl font-bold leading-tight tracking-tight text-black sm:text-3xl">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-5 max-w-lg text-sm leading-7 text-black/60 sm:text-base sm:leading-8">
                    {item.description}
                  </p>

                  {/* Bottom Accent */}
                  <div className="mt-8 h-1 w-12 rounded-full bg-orange-500 transition-all duration-300 group-hover:w-20" />
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default Mission;