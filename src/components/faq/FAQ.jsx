import { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How quickly can we get started?",
      answer:
        "Once we understand your goals and requirements, we can typically begin the onboarding process within a few business days. We'll first align on your strategy, priorities, and success metrics.",
    },
    {
      question: "Which digital marketing services do you provide?",
      answer:
        "We provide SEO, paid advertising, social media marketing, branding, content creation, conversion optimization, analytics, and customized growth strategies.",
    },
    {
      question: "How do I know which pricing plan is right for my business?",
      answer:
        "It depends on your current growth stage, goals, and the level of support you need. Brand Kickstart is designed for businesses building their foundation, while Growth Engine and Revenue Accelerator are built for businesses focused on scaling. Enterprise requirements can be handled through Infinity Enterprise.",
    },
    {
      question: "Is advertising spend included in the pricing?",
      answer:
        "No. Advertising platform spend is separate from our service fees. This keeps your media budget transparent and allows us to recommend an investment level based on your goals.",
    },
    {
      question: "Can I customize a pricing plan?",
      answer:
        "Yes. Our plans provide a starting framework, but services can be customized based on your business model, target audience, market, goals, and required channels.",
    },
    {
      question: "How do you measure campaign performance?",
      answer:
        "We focus on meaningful business metrics such as qualified leads, conversion rates, customer acquisition cost, return on ad spend, organic traffic, and revenue contribution.",
    },
    {
      question: "Do you guarantee specific marketing results?",
      answer:
        "Marketing performance depends on factors such as your market, offer, competition, budget, and customer behavior. We don't promise unrealistic outcomes. Instead, we use continuous testing, measurement, and optimization to improve performance.",
    },
    {
      question: "Can we start with one service and scale later?",
      answer:
        "Absolutely. You can start with the service most relevant to your current objective and expand into a broader growth strategy as your business evolves.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section
      id="faq"
      className="relative overflow-hidden border-b border-white/10 bg-black"
    >
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32">

        {/* Header */}
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">

          <div className="lg:sticky lg:top-28">
            <span className="inline-flex rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-2 text-xs font-medium uppercase tracking-[0.16em] text-white/45">
              FAQ
            </span>

            <h2 className="mt-5 max-w-md text-3xl font-semibold leading-tight tracking-[-0.035em] text-white sm:text-4xl lg:text-5xl">
              Questions?
              <br />
              <span className="text-white/40">
                We've got answers.
              </span>
            </h2>

            <p className="mt-6 max-w-md text-base leading-7 text-white/45">
              Everything you need to know before getting started. Can't find
              what you're looking for?
            </p>

            <a
              href="#contact"
              className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white"
            >
              Talk to our team

              <span className="text-white/35 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-white">
                →
              </span>
            </a>
          </div>

          {/* FAQ List */}
          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={faq.question}
                  className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                    isOpen
                      ? "border-white/20 bg-white/[0.045]"
                      : "border-white/10 bg-white/[0.02] hover:border-white/20"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-6 px-5 py-5 text-left sm:px-6 sm:py-6"
                  >
                    <span className="text-sm font-medium leading-6 text-white sm:text-base">
                      {faq.question}
                    </span>

                    <span
                      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-sm text-white/50 transition-transform duration-300 ${
                        isOpen ? "rotate-45 text-white" : ""
                      }`}
                    >
                      +
                    </span>
                  </button>

                  {/* Answer */}
                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="border-t border-white/10 px-5 pb-5 pt-4 sm:px-6 sm:pb-6">
                        <p className="max-w-2xl text-sm leading-6 text-white/40 sm:text-base sm:leading-7">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* Bottom CTA */}
        <div className="mt-12 rounded-3xl border border-white/10 bg-white/[0.025] p-6 sm:mt-14 sm:p-8 lg:mt-16">

          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">

            <div>
              <p className="text-base font-medium text-white">
                Still have questions?
              </p>

              <p className="mt-1 text-sm leading-6 text-white/40">
                Let's talk about your goals and figure out the right next step.
              </p>
            </div>

            <a
              href="#contact"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-black transition-all duration-200 hover:bg-white/90 active:scale-[0.98] sm:w-auto"
            >
              Book a free consultation

              <span className="transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </a>

          </div>

        </div>

      </div>
    </section>
  );
};

export default FAQ;