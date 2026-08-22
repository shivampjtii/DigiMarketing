import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

import Container from "../shared/layout/Container";

const PricingHero = () => {
  const highlights = [
    "Flexible plans for different stages of growth",
    "Clear deliverables with no unnecessary complexity",
    "Custom solutions available for specific requirements",
  ];

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
              Simple & Transparent Pricing
            </span>
          </div>

          {/* Heading */}
          <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-black sm:text-5xl lg:text-6xl xl:text-7xl">
            Choose a Plan That Supports Your{" "}
            <span className="text-orange-500">Next Stage of Growth.</span>
          </h1>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-black/60 sm:text-lg sm:leading-8">
            Whether you're building your digital foundation or looking to scale
            what already works, our plans are designed to give you the right
            level of strategy, execution, and support.
          </p>

          {/* CTA */}
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href="#pricing-plans"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-orange-500 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-orange-500/20 transition-all duration-200 hover:bg-orange-600 active:scale-[0.98]"
            >
              Explore Plans

              <ArrowRight
                size={18}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </a>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-xl border border-black/10 bg-white px-6 py-3.5 text-sm font-semibold text-black transition-all duration-200 hover:border-orange-300 hover:bg-orange-50"
            >
              Need a Custom Plan?
            </Link>
          </div>
        </div>

        {/* Highlights */}
        <div className="mx-auto mt-12 grid max-w-5xl gap-3 sm:mt-16 sm:grid-cols-3 sm:gap-4">
          {highlights.map((highlight) => (
            <div
              key={highlight}
              className="flex items-start gap-3 rounded-2xl border border-black/10 bg-white/80 p-4 text-left shadow-sm backdrop-blur-sm"
            >
              <CheckCircle2
                size={20}
                className="mt-0.5 shrink-0 text-orange-500"
              />

              <p className="text-sm leading-6 text-black/65">{highlight}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default PricingHero;