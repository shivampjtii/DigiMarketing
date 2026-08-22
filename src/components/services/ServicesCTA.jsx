import { ArrowRight, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

import Container from "../shared/layout/Container";

const ServicesCTA = () => {
  return (
    <section className="bg-white py-10 sm:py-14 lg:py-12">
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-black px-6 py-12 sm:px-10 sm:py-16 lg:px-16 lg:py-20">
          {/* Background Decorations */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-orange-500/20 blur-3xl" />

          <div className="pointer-events-none absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-orange-500/10 blur-3xl" />

          <div className="relative mx-auto max-w-3xl text-center">
            {/* Icon */}
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500 text-white shadow-lg shadow-orange-500/20">
              <MessageCircle size={26} />
            </div>

            {/* Badge */}
            <p className="mt-6 text-xs font-bold uppercase tracking-[0.18em] text-orange-500">
              Let's Build Something Better
            </p>

            {/* Heading */}
            <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
              Ready to Build a Stronger{" "}
              <span className="text-orange-500">Digital Strategy?</span>
            </h2>

            {/* Description */}
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/60 sm:text-base sm:leading-8">
              Tell us about your business, your current challenges, and where
              you want to go. We'll help you identify the right next steps for
              meaningful digital growth.
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
                to="/case-studies"
                className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:border-orange-500/50 hover:bg-white/10"
              >
                View Our Work
              </Link>
            </div>

            {/* Small Trust Text */}
            <p className="mt-6 text-xs text-white/35 sm:text-sm">
              No complicated process. Start with a simple conversation.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ServicesCTA;