import { ArrowRight, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

import Container from "../shared/layout/Container";

const CaseStudiesCTA = () => {
  return (
    <section className="bg-orange-50/50 py-10 sm:py-14 lg:py-12">
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-black px-6 py-12 sm:px-10 sm:py-16 lg:px-16 lg:py-20">
          {/* Background Decorations */}
          <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-orange-500/20 blur-3xl sm:h-80 sm:w-80" />

          <div className="pointer-events-none absolute -bottom-28 -left-20 h-64 w-64 rounded-full bg-orange-500/10 blur-3xl sm:h-80 sm:w-80" />

          <div className="relative mx-auto max-w-3xl text-center">
            {/* Icon */}
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500 text-white shadow-lg shadow-orange-500/20">
              <MessageCircle size={26} />
            </div>

            {/* Badge */}
            <p className="mt-6 text-xs font-bold uppercase tracking-[0.18em] text-orange-500">
              Your Success Story Could Be Next
            </p>

            {/* Heading */}
            <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
              Have a Challenge You Want to{" "}
              <span className="text-orange-500">Solve?</span>
            </h2>

            {/* Description */}
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/60 sm:text-base sm:leading-8">
              Every business has different challenges and opportunities. Let's
              talk about where you are now, where you want to go, and how the
              right digital strategy can help move your business forward.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-orange-500 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-orange-500/20 transition-all duration-200 hover:bg-orange-600 active:scale-[0.98]"
              >
                Start a Conversation

                <ArrowRight
                  size={18}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </Link>

              <Link
                to="/services"
                className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:border-orange-500/50 hover:bg-white/10"
              >
                Explore Our Services
              </Link>
            </div>

            {/* Bottom Text */}
            <p className="mt-6 text-xs leading-6 text-white/35 sm:text-sm">
              Start with a simple conversation about your goals.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CaseStudiesCTA;