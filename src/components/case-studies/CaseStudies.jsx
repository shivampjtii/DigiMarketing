import CaseStudyCard from "./CaseStudyCard";
import { caseStudies } from "../../data/caseStudies";

const CaseStudies = () => {
  return (
    <section
      id="case-studies"
      className="relative overflow-hidden border-b border-white/10 bg-black"
    >
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32">

        {/* Section Header */}
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">

          <div>
            <span className="inline-flex rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-2 text-xs font-medium uppercase tracking-[0.16em] text-white/45">
              Case studies
            </span>

            <h2 className="mt-5 max-w-xl text-3xl font-semibold leading-tight tracking-[-0.035em] text-white sm:text-4xl lg:text-5xl">
              Strategy that creates{" "}
              <span className="text-white/40">
                measurable outcomes.
              </span>
            </h2>
          </div>

          <p className="max-w-xl text-base leading-7 text-white/45 sm:text-lg sm:leading-8 lg:ml-auto">
            Explore how we combine strategy, creative, performance, and
            optimization to solve different growth challenges.
          </p>

        </div>

        {/* Case Studies */}
        <div className="mt-14 space-y-5 sm:mt-16">

          {caseStudies.map((study, index) => (
            <CaseStudyCard
              key={study.id}
              study={study}
              featured={index === 0}
            />
          ))}

        </div>

        {/* Bottom CTA */}
        <div className="mt-8 flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/[0.025] p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">

          <div>
            <p className="text-sm font-medium text-white">
              Want results like these?
            </p>

            <p className="mt-1 text-sm leading-6 text-white/40">
              Let's build a growth strategy around your business.
            </p>
          </div>

          <a
            href="#contact"
            className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition-all duration-200 hover:bg-white/90 active:scale-[0.98] sm:w-auto"
          >
            Start a conversation

            <span className="transition-transform duration-200 group-hover:translate-x-1">
              →
            </span>
          </a>

        </div>

      </div>
    </section>
  );
};

export default CaseStudies;