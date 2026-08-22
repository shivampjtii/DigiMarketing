import {
  BarChart3,
  CheckCircle2,
  Lightbulb,
  ShieldCheck,
  Users,
} from "lucide-react";

import Container from "../shared/layout/Container";
import SectionHeading from "../shared/section/SectionHeading";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Lightbulb,
      title: "Strategy Before Execution",
      description:
        "We take the time to understand your business, goals, audience, and opportunities before deciding what actions to take.",
    },
    {
      icon: BarChart3,
      title: "Focused on Meaningful Results",
      description:
        "We focus on the metrics that matter to your business instead of chasing vanity numbers that do not create real value.",
    },
    {
      icon: ShieldCheck,
      title: "Clear & Transparent Approach",
      description:
        "You always know what we are doing, why we are doing it, and how the work is contributing to your overall goals.",
    },
    {
      icon: Users,
      title: "Flexible & Collaborative Partnership",
      description:
        "We work closely with your team and adapt our approach as your business goals, priorities, and opportunities evolve.",
    },
  ];

  const benefits = [
    "Business-focused digital strategy",
    "Clear communication and reporting",
    "Data-driven decision making",
    "Flexible approach built around your goals",
  ];

  return (
    <section className="bg-orange-50/50 py-10 sm:py-12 lg:py-14">
      <Container>
        <div className="grid items-stretch gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12 xl:gap-16">
          {/* Left Content */}
          <div className="flex flex-col">
            <SectionHeading
              badge="Why Choose Us"
              title="More Than a Service Provider. A Partner in Your Growth."
              description="We believe the best results come from strong strategy, clear communication, and a genuine understanding of the business behind the brand."
              align="left"
            />

            <div className="mt-8 flex-1 rounded-3xl bg-black p-6 sm:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-orange-500">
                What You Can Expect
              </p>

              <ul className="mt-6 space-y-4">
                {benefits.map((benefit) => (
                  <li
                    key={benefit}
                    className="flex items-start gap-3 text-sm leading-6 text-white/75 sm:text-base"
                  >
                    <CheckCircle2
                      size={20}
                      className="mt-0.5 shrink-0 text-orange-500"
                    />

                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Cards */}
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;

              return (
                <div
                  key={reason.title}
                  className="group flex gap-4 rounded-3xl border border-black/10 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-xl hover:shadow-black/5 sm:p-6"
                >
                  {/* Number */}
                  <span className="hidden text-sm font-bold text-black/20 xl:block">
                    0{index + 1}
                  </span>

                  <div className="flex min-w-0 flex-1 flex-col">
                    {/* Icon */}
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-orange-50 text-orange-500 transition-all duration-300 group-hover:scale-110 group-hover:bg-orange-500 group-hover:text-white">
                      <Icon size={22} />
                    </div>

                    {/* Content */}
                    <div className="mt-5">
                      <h3 className="text-lg font-bold text-black sm:text-xl">
                        {reason.title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-black/60">
                        {reason.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default WhyChooseUs;