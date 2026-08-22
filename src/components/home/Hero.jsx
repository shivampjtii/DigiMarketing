import { ArrowRight, Play } from "lucide-react";

import Container from "../shared/layout/Container";
import PrimaryButton from "../shared/buttons/PrimaryButton";
import SecondaryButton from "../shared/buttons/SecondaryButton";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-white pt-10 pb-14 sm:pt-14 sm:pb-16 lg:pt-16 lg:pb-20">
      {/* Background decorations */}
      <div className="pointer-events-none absolute left-0 top-0 h-72 w-72 rounded-full bg-orange-100/70 blur-3xl" />

      <div className="pointer-events-none absolute right-0 top-0 h-80 w-80 rounded-full bg-orange-200/50 blur-3xl" />

      <Container className="relative">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
          {/* Left Content */}
          <div className="max-w-2xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-orange-500" />

              <span className="text-xs font-bold uppercase tracking-[0.16em] text-orange-600 sm:text-sm">
                Digital Growth Partner
              </span>
            </div>

            {/* Heading */}
            <h1 className="mt-5 text-4xl font-bold leading-[1.1] tracking-tight text-black sm:text-5xl lg:text-6xl xl:text-7xl">
              Turn Your Digital Presence Into{" "}
              <span className="text-orange-500">
                Real Business Growth.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-5 max-w-xl text-base leading-7 text-black/60 sm:text-lg sm:leading-8">
              We help ambitious businesses attract the right audience, generate
              qualified leads, and scale revenue with data-driven digital
              marketing strategies.
            </p>

            {/* Buttons */}
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
              <PrimaryButton
                to="/contact"
                icon={ArrowRight}
                className="w-full sm:w-auto"
              >
                Get a Free Strategy Call
              </PrimaryButton>

              <SecondaryButton
                to="/case-studies"
                icon={Play}
                className="w-full sm:w-auto"
              >
                See Our Work
              </SecondaryButton>
            </div>

            {/* Trust points */}
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-black/60">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-orange-500" />
                Data-driven strategies
              </div>

              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-orange-500" />
                Transparent reporting
              </div>

              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-orange-500" />
                Growth-focused execution
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
            <div className="relative overflow-hidden rounded-3xl border border-black/10 bg-orange-50 shadow-2xl shadow-black/10">
              <img
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=85"
                alt="Digital marketing team working together on a business growth strategy"
                className="aspect-[4/5] w-full object-cover sm:aspect-[16/11] lg:aspect-[4/5]"
              />

              {/* Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

              {/* Image caption */}
              <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/20 bg-white/90 p-4 shadow-lg backdrop-blur-md sm:bottom-6 sm:left-6 sm:right-auto sm:max-w-xs sm:p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-orange-600">
                  Built for Growth
                </p>

                <p className="mt-1 text-sm font-bold text-black sm:text-base">
                  Strategy. Creativity. Performance.
                </p>
              </div>
            </div>

            {/* Decorative element */}
            <div className="absolute -right-4 top-10 hidden h-24 w-24 rounded-full border-8 border-orange-200/60 lg:block" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;