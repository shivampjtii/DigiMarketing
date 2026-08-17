import { useState } from "react";
import CaseStudyCard from "./CaseStudyCard";
import { caseStudies } from "../../data/caseStudies";

const CaseStudies = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeStudy = caseStudies[activeIndex];

  const previousStudy = () => {
    setActiveIndex((current) =>
      current === 0 ? caseStudies.length - 1 : current - 1
    );
  };

  const nextStudy = () => {
    setActiveIndex((current) =>
      current === caseStudies.length - 1 ? 0 : current + 1
    );
  };

  return (
    <section
      id="case-studies"
      className="relative overflow-hidden border-b border-white/[0.06] bg-[#050505]"
    >
      {/* Orange Background Glow */}
      <div className="pointer-events-none absolute -right-40 top-1/4 h-96 w-96 rounded-full bg-orange-500/[0.045] blur-[140px]" />

      <div className="pointer-events-none absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-orange-600/[0.03] blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32">

        {/* Section Header */}
        <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-end">

          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/[0.06] px-3.5 py-2">
              <span className="h-1.5 w-1.5 rounded-full bg-orange-500 shadow-[0_0_8px_rgba(249,115,22,0.6)]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-orange-300 sm:text-xs">
                Case studies
              </span>
            </div>

            <h2 className="mt-5 max-w-2xl text-3xl font-semibold leading-[1.08] tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl">
              Strategy is good.
              <span className="block text-white/35">
                Results are better.
              </span>
            </h2>
          </div>

          <div className="lg:ml-auto lg:max-w-lg">
            <p className="text-base leading-7 text-white/40 sm:text-lg sm:leading-8">
              Explore how we combine strategy, creative, and performance
              marketing to solve real business challenges and create
              measurable growth.
            </p>
          </div>

        </div>

        {/* Case Study */}
        <div className="mt-12 sm:mt-14 lg:mt-16">

          <CaseStudyCard
            study={activeStudy}
            featured={true}
          />

        </div>

        {/* Navigation */}
        <div className="mt-6 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

          {/* Study Indicators */}
          <div className="flex items-center gap-2">

            {caseStudies.map((study, index) => (
              <button
                key={study.id}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`View case study ${index + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  activeIndex === index
                    ? "w-8 bg-orange-500"
                    : "w-1.5 bg-white/15 hover:bg-white/30"
                }`}
              />
            ))}

            <span className="ml-2 text-[10px] uppercase tracking-[0.15em] text-white/20">
              {String(activeIndex + 1).padStart(2, "0")} /{" "}
              {String(caseStudies.length).padStart(2, "0")}
            </span>

          </div>

          {/* Controls */}
          <div className="flex items-center gap-2">

            <button
              type="button"
              onClick={previousStudy}
              aria-label="Previous case study"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.02] text-white/50 transition-all duration-200 hover:border-orange-500/30 hover:bg-orange-500/[0.06] hover:text-orange-400 active:scale-95"
            >
              ←
            </button>

            <button
              type="button"
              onClick={nextStudy}
              aria-label="Next case study"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-orange-500/20 bg-orange-500/[0.06] text-orange-400 transition-all duration-200 hover:border-orange-500/40 hover:bg-orange-500/10 active:scale-95"
            >
              →
            </button>

          </div>

        </div>

        {/* Quick Case Study Navigation */}
        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">

          {caseStudies.map((study, index) => (
            <button
              key={study.id}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`group rounded-xl border p-4 text-left transition-all duration-300 ${
                activeIndex === index
                  ? "border-orange-500/25 bg-orange-500/[0.06]"
                  : "border-white/[0.06] bg-white/[0.015] hover:border-white/10 hover:bg-white/[0.025]"
              }`}
            >

              <div className="flex items-center justify-between">

                <span
                  className={`text-[10px] font-semibold tracking-[0.14em] ${
                    activeIndex === index
                      ? "text-orange-400"
                      : "text-white/20"
                  }`}
                >
                  0{index + 1}
                </span>

                <span
                  className={`text-xs transition-transform duration-200 group-hover:translate-x-1 ${
                    activeIndex === index
                      ? "text-orange-400"
                      : "text-white/20"
                  }`}
                >
                  →
                </span>

              </div>

              <p
                className={`mt-4 text-xs font-semibold ${
                  activeIndex === index
                    ? "text-white"
                    : "text-white/45"
                }`}
              >
                {study.company}
              </p>

              <p className="mt-1 text-[10px] text-white/25">
                {study.industry}
              </p>

            </button>
          ))}

        </div>

        {/* Bottom CTA */}
        <div className="mt-12 flex flex-col items-center text-center sm:mt-14">

          <p className="text-sm text-white/30">
            Want your business to be our next success story?
          </p>

          <a
            href="#contact"
            className="group mt-3 inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-orange-300"
          >
            Start a conversation

            <span className="text-orange-400 transition-transform duration-200 group-hover:translate-x-1">
              →
            </span>
          </a>

        </div>

      </div>
    </section>
  );
};

export default CaseStudies;