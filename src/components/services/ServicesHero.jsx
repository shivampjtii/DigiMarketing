import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

import Container from "../shared/layout/Container";

const ServicesHero = () => {
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
              Our Services
            </span>
          </div>

          {/* Heading */}
          <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-black sm:text-5xl lg:text-6xl xl:text-7xl">
            Digital Services Built to Create{" "}
            <span className="text-orange-500">Real Growth.</span>
          </h1>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-black/60 sm:text-lg sm:leading-8">
            From strategy and creative execution to performance and technology,
            we help businesses build a stronger digital presence and turn
            opportunities into measurable results.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              to="/contact"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-orange-500 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-orange-500/20 transition-all duration-200 hover:bg-orange-600 active:scale-[0.98]"
            >
              Let's Work Together

              <ArrowRight
                size={18}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </Link>

            <Link
              to="/case-studies"
              className="inline-flex items-center justify-center rounded-xl border border-black/10 bg-white px-6 py-3.5 text-sm font-semibold text-black transition-all duration-200 hover:border-orange-300 hover:bg-orange-50"
            >
              View Our Work
            </Link>
          </div>
        </div>

        {/* Service Categories */}
        <div className="mx-auto mt-14 grid max-w-5xl grid-cols-2 gap-3 sm:mt-16 sm:grid-cols-3 lg:grid-cols-5 lg:gap-4">
          {[
            "SEO & Strategy",
            "Content",
            "Social Media",
            "Performance",
            "Web Development",
          ].map((service) => (
            <div
              key={service}
              className="rounded-2xl border border-black/10 bg-white px-4 py-4 text-center text-xs font-semibold text-black shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-orange-200 hover:text-orange-500 sm:text-sm"
            >
              {service}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ServicesHero;