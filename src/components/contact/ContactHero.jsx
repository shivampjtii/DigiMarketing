import { ArrowDown, MessageCircle } from "lucide-react";

import Container from "../shared/layout/Container";

const ContactHero = () => {
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
            <MessageCircle size={15} className="text-orange-500" />

            <span className="text-xs font-bold uppercase tracking-[0.16em] text-orange-600">
              Contact Us
            </span>
          </div>

          {/* Heading */}
          <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-black sm:text-5xl lg:text-6xl xl:text-7xl">
            Let's Talk About What's{" "}
            <span className="text-orange-500">Next for Your Business.</span>
          </h1>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-black/60 sm:text-lg sm:leading-8">
            Whether you have a specific project in mind, need help with your
            digital strategy, or simply want to explore what's possible, we'd
            love to hear from you.
          </p>

          {/* Scroll Link */}
          <a
            href="#contact-form"
            className="group mt-8 inline-flex items-center gap-2 text-sm font-bold text-black transition-colors hover:text-orange-500"
          >
            Start the conversation

            <ArrowDown
              size={18}
              className="transition-transform duration-200 group-hover:translate-y-1"
            />
          </a>
        </div>
      </Container>
    </section>
  );
};

export default ContactHero;