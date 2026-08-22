import { ArrowDown, Sparkles } from "lucide-react";

import Container from "../shared/layout/Container";

const CaseStudiesHero = () => {
  return (
    <section className="relative overflow-hidden bg-white py-10 sm:py-14 lg:py-12">
      {/* Background Decorations */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-orange-100/70 blur-3xl sm:h-96 sm:w-96" />

        <div className="absolute -bottom-40 -left-32 h-80 w-80 rounded-full bg-orange-50 blur-3xl sm:h-[30rem] sm:w-[30rem]" />
      </div>

      <Container className="relative">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-4 py-2">
            <Sparkles size={15} className="text-orange-500" />

            <span className="text-xs font-bold uppercase tracking-[0.16em] text-orange-600">
              Our Work
            </span>
          </div>

          {/* Heading */}
          <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-black sm:text-5xl lg:text-6xl xl:text-7xl">
            Ideas, Strategy, and Work That Create{" "}
            <span className="text-orange-500">Real Progress.</span>
          </h1>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-black/60 sm:text-lg sm:leading-8">
            Explore how we approach real business challenges, turn strategy
            into action, and build digital solutions designed around meaningful
            outcomes.
          </p>

          {/* Scroll Button */}
          <a
            href="#case-studies"
            className="group mt-8 inline-flex items-center gap-2 text-sm font-bold text-black transition-colors hover:text-orange-500"
          >
            Explore our work

            <ArrowDown
              size={18}
              className="transition-transform duration-200 group-hover:translate-y-1"
            />
          </a>
        </div>

        {/* Stats */}
        <div className="mx-auto mt-12 grid max-w-3xl grid-cols-1 gap-4 sm:mt-16 sm:grid-cols-3">
          <div className="rounded-2xl border border-black/10 bg-white/80 p-5 text-center shadow-sm backdrop-blur-sm">
            <p className="text-2xl font-bold tracking-tight text-black sm:text-3xl">
              Strategy
            </p>

            <p className="mt-1 text-xs text-black/50 sm:text-sm">
              Built around business goals
            </p>
          </div>

          <div className="rounded-2xl border border-black/10 bg-white/80 p-5 text-center shadow-sm backdrop-blur-sm">
            <p className="text-2xl font-bold tracking-tight text-black sm:text-3xl">
              Execution
            </p>

            <p className="mt-1 text-xs text-black/50 sm:text-sm">
              Focused on what matters
            </p>
          </div>

          <div className="rounded-2xl border border-black/10 bg-white/80 p-5 text-center shadow-sm backdrop-blur-sm">
            <p className="text-2xl font-bold tracking-tight text-black sm:text-3xl">
              Results
            </p>

            <p className="mt-1 text-xs text-black/50 sm:text-sm">
              Measured with real insights
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CaseStudiesHero;