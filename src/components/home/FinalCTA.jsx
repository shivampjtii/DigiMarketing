import { ArrowRight, CheckCircle2, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

import Container from "../shared/layout/Container";

const FinalCTA = () => {
  const benefits = [
    "Free initial consultation",
    "Strategy tailored to your business",
    "No obligation to get started",
  ];

  return (
    <section className="relative overflow-hidden bg-white py-0 sm:py-0 lg:py-18">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-100/70 blur-3xl" />

        <div className="absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-orange-200/40 blur-3xl" />

        <div className="absolute -right-20 top-0 h-64 w-64 rounded-full bg-orange-100/60 blur-3xl" />
      </div>

      <Container className="relative">
        <div className="overflow-hidden rounded-[2rem] bg-black">
          <div className="relative px-6 py-14 text-center sm:px-10 sm:py-16 lg:px-16 lg:py-24">
            {/* Orange decoration */}
            <div className="pointer-events-none absolute -left-20 -top-20 h-56 w-56 rounded-full bg-orange-500/20 blur-3xl" />

            <div className="pointer-events-none absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-orange-500/15 blur-3xl" />

            <div className="relative mx-auto max-w-3xl">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-orange-400/20 bg-orange-500/10 px-4 py-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-orange-500 text-white">
                  <MessageCircle size={12} />
                </span>

                <span className="text-xs font-bold uppercase tracking-[0.16em] text-orange-400">
                  Let's Grow Together
                </span>
              </div>

              {/* Heading */}
              <h2 className="mt-6 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl xl:text-6xl">
                Ready to Turn Your Digital Potential Into{" "}
                <span className="text-orange-500">Real Growth?</span>
              </h2>

              {/* Description */}
              <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/60 sm:text-lg sm:leading-8">
                Let's talk about your business, your goals, and the biggest
                opportunities waiting for you online.
              </p>

              {/* CTA Buttons */}
              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row sm:items-center">
                <Link
                  to="/contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-xl bg-orange-500 px-6 py-4 text-sm font-semibold text-white shadow-lg shadow-orange-500/20 transition-all duration-200 hover:bg-orange-600 hover:shadow-orange-500/30 active:scale-[0.98]"
                >
                  Book a Free Strategy Call

                  <ArrowRight
                    size={18}
                    className="transition-transform duration-200 group-hover:translate-x-1"
                  />
                </Link>

                <Link
                  to="/services"
                  className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/[0.05] px-6 py-4 text-sm font-semibold text-white transition-all duration-200 hover:border-orange-500/50 hover:bg-orange-500/10"
                >
                  Explore Our Services
                </Link>
              </div>

              {/* Benefits */}
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap sm:gap-x-6 sm:gap-y-3">
                {benefits.map((benefit) => (
                  <div
                    key={benefit}
                    className="flex items-center gap-2 text-sm text-white/60"
                  >
                    <CheckCircle2
                      size={17}
                      className="shrink-0 text-orange-500"
                    />

                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FinalCTA;