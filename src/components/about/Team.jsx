import {
  BarChart3,
  Code2,
  Megaphone,
  Palette,
  Search,
  Users,
} from "lucide-react";

import Container from "../shared/layout/Container";
import SectionHeading from "../shared/section/SectionHeading";

const Team = () => {
  const expertise = [
    {
      icon: Megaphone,
      title: "Digital Marketing",
      description:
        "Growth-focused campaigns designed to reach the right audience and create meaningful results.",
    },
    {
      icon: Search,
      title: "SEO & Strategy",
      description:
        "Research-driven strategies that help businesses improve visibility and build sustainable growth.",
    },
    {
      icon: Palette,
      title: "Creative & Content",
      description:
        "Content and creative experiences that communicate clearly and strengthen your brand.",
    },
    {
      icon: BarChart3,
      title: "Performance",
      description:
        "Data-driven optimization focused on improving campaigns and maximizing opportunities.",
    },
    {
      icon: Code2,
      title: "Web Development",
      description:
        "Fast, modern, and conversion-focused digital experiences built around business objectives.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description:
        "A collaborative approach that keeps strategy, communication, and execution aligned.",
    },
  ];

  return (
    <section className="bg-white py-10 sm:py-14 lg:py-12">
      <Container>
        {/* Heading */}
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            badge="Our Expertise"
            title="Different Skills. One Shared Focus."
            description="Our strength comes from combining different areas of expertise around one objective: helping businesses create meaningful digital growth."
            align="center"
          />
        </div>

        {/* Expertise Grid */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-6">
          {expertise.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group rounded-3xl border border-black/10 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-xl hover:shadow-black/5 sm:p-7"
              >
                {/* Icon */}
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-50 text-orange-500 transition-transform duration-300 group-hover:scale-110 group-hover:bg-orange-500 group-hover:text-white">
                  <Icon size={22} />
                </div>

                {/* Content */}
                <h3 className="mt-6 text-lg font-bold text-black">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-black/60">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom Section */}
        <div className="mt-10 overflow-hidden rounded-3xl bg-black sm:mt-14">
          <div className="grid items-center gap-8 p-7 sm:p-10 lg:grid-cols-[1fr_0.9fr] lg:gap-12 lg:p-12">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-orange-500">
                One Team, One Direction
              </p>

              <h3 className="mt-4 text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl lg:text-4xl">
                Strategy works best when everyone is moving toward the same
                goal.
              </h3>

              <p className="mt-5 max-w-xl text-sm leading-7 text-white/60 sm:text-base">
                We bring different skills together to create a connected
                approach—from understanding the challenge to executing the
                strategy and improving performance over time.
              </p>
            </div>

            {/* Visual Stats */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                <p className="text-3xl font-bold text-orange-500">01</p>

                <p className="mt-2 text-sm font-semibold text-white">
                  Shared Strategy
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                <p className="text-3xl font-bold text-orange-500">02</p>

                <p className="mt-2 text-sm font-semibold text-white">
                  Clear Execution
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                <p className="text-3xl font-bold text-orange-500">03</p>

                <p className="mt-2 text-sm font-semibold text-white">
                  Continuous Learning
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                <p className="text-3xl font-bold text-orange-500">04</p>

                <p className="mt-2 text-sm font-semibold text-white">
                  Better Results
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Team;