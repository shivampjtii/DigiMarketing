import { useState } from "react";

const FAQ = () => {
  const faqs = [
    {
      question: "What services does Digrow provide?",
      answer:
        "We provide end-to-end digital marketing services including SEO, paid advertising, social media marketing, branding, content creation, conversion optimization, and performance analytics. Our services can be combined into a customized growth strategy based on your business objectives.",
      category: "Services",
    },
    {
      question: "How do you decide which marketing strategy is right for us?",
      answer:
        "We start by understanding your business model, target audience, competitive landscape, existing marketing performance, and revenue goals. From there, we identify the channels with the highest potential and build a strategy around measurable business outcomes.",
      category: "Strategy",
    },
    {
      question: "How long does it take to see results?",
      answer:
        "The timeline depends on the channels and objectives involved. Paid campaigns can generate initial data and leads relatively quickly, while SEO and organic growth typically require more time. We establish realistic milestones and continuously optimize based on performance.",
      category: "Results",
    },
    {
      question: "Do you work with startups and small businesses?",
      answer:
        "Yes. Our Brand Kickstart and Growth Engine plans are specifically designed for startups and growing businesses that need a structured digital marketing foundation without committing to an enterprise-level engagement.",
      category: "Plans",
    },
    {
      question: "Can I customize a pricing plan?",
      answer:
        "Absolutely. The plans provide a starting framework, but your marketing requirements may be unique. We can customize the services, scope, channels, reporting, and support level around your business objectives.",
      category: "Pricing",
    },
    {
      question: "Do you require a long-term contract?",
      answer:
        "Our engagement structure is designed to remain flexible. We focus on demonstrating value through measurable performance rather than locking businesses into unnecessarily long commitments. Specific terms depend on the scope of the engagement.",
      category: "Plans",
    },
    {
      question: "How do you measure campaign performance?",
      answer:
        "We track metrics that connect marketing activity to business outcomes. Depending on the campaign, this can include qualified leads, conversion rates, customer acquisition cost, ROAS, organic traffic, revenue contribution, and other relevant KPIs.",
      category: "Results",
    },
    {
      question: "Will we receive regular performance reports?",
      answer:
        "Yes. Reporting frequency depends on your plan, but every engagement includes performance visibility. Higher-tier plans include more detailed reporting, attribution analysis, and strategy reviews.",
      category: "Reporting",
    },
  ];

  const [openIndex, setOpenIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    "All",
    ...new Set(faqs.map((faq) => faq.category)),
  ];

  const filteredFaqs =
    activeCategory === "All"
      ? faqs
      : faqs.filter((faq) => faq.category === activeCategory);

  const toggleFAQ = (index) => {
    setOpenIndex((current) =>
      current === index ? -1 : index
    );
  };

  return (
    <section
      id="faq"
      className="relative overflow-hidden border-b border-white/[0.06] bg-[#080808]"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-orange-500/[0.04] blur-[120px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-orange-600/[0.035] blur-[130px]" />

      <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32">

        {/* Header */}
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">

          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/[0.06] px-3.5 py-2">
              <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-orange-300 sm:text-xs">
                FAQ
              </span>
            </div>

            <h2 className="mt-5 max-w-lg text-3xl font-semibold leading-[1.08] tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl">
              Questions before
              <span className="block bg-gradient-to-r from-orange-300 via-orange-500 to-orange-300 bg-clip-text text-transparent">
                getting started?
              </span>
            </h2>
          </div>

          <div className="lg:ml-auto lg:max-w-xl">
            <p className="text-base leading-7 text-white/40 sm:text-lg sm:leading-8">
              We've answered the questions businesses ask us most often.
              If you still can't find what you're looking for, our team is
              happy to help.
            </p>
          </div>

        </div>

        {/* Category Navigation */}
        <div className="mt-10 overflow-x-auto pb-2 scrollbar-none">

          <div className="flex min-w-max items-center gap-2">

            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => {
                  setActiveCategory(category);
                  setOpenIndex(0);
                }}
                className={`rounded-full border px-4 py-2 text-xs font-medium transition-all duration-200 ${
                  activeCategory === category
                    ? "border-orange-500/30 bg-orange-500/10 text-orange-300"
                    : "border-white/[0.07] bg-white/[0.02] text-white/35 hover:border-white/15 hover:text-white/60"
                }`}
              >
                {category}
              </button>
            ))}

          </div>

        </div>

        {/* FAQ Content */}
        <div className="mt-8 grid gap-5 lg:grid-cols-[0.3fr_1fr]">

          {/* Left Information */}
          <div className="hidden lg:block">

            <div className="sticky top-28 rounded-2xl border border-white/[0.07] bg-[#0A0A0A] p-6">

              {/* Icon */}
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-orange-500/15 bg-orange-500/[0.07] text-lg text-orange-400">
                ?
              </div>

              <h3 className="mt-6 text-lg font-semibold text-white">
                Still have questions?
              </h3>

              <p className="mt-3 text-xs leading-5 text-white/30">
                Every business is different. If you have a question about
                strategy, pricing, timelines, or our services, let's talk.
              </p>

              <a
                href="#contact"
                className="group mt-6 inline-flex items-center gap-2 text-xs font-semibold text-white transition-colors hover:text-orange-300"
              >
                Talk to our team

                <span className="text-orange-400 transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </a>

              {/* Support Status */}
              <div className="mt-8 border-t border-white/[0.06] pt-5">

                <div className="flex items-center gap-2">

                  <span className="relative flex h-2 w-2">
                    <span className="absolute h-full w-full animate-ping rounded-full bg-orange-400 opacity-30" />
                    <span className="relative h-2 w-2 rounded-full bg-orange-500" />
                  </span>

                  <span className="text-[10px] text-white/25">
                    Growth team available
                  </span>

                </div>

              </div>

            </div>

          </div>

          {/* Accordion */}
          <div className="space-y-2">

            {filteredFaqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={faq.question}
                  className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                    isOpen
                      ? "border-orange-500/20 bg-[#0D0B09]"
                      : "border-white/[0.07] bg-[#0A0A0A] hover:border-white/10"
                  }`}
                >

                  {/* Question */}
                  <button
                    type="button"
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center gap-4 px-4 py-5 text-left sm:px-6 sm:py-6"
                  >

                    {/* Number */}
                    <span
                      className={`hidden w-7 shrink-0 text-[10px] font-semibold tracking-[0.12em] sm:block ${
                        isOpen
                          ? "text-orange-400"
                          : "text-white/20"
                      }`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    {/* Question */}
                    <span
                      className={`flex-1 text-sm font-semibold transition-colors sm:text-[15px] ${
                        isOpen
                          ? "text-white"
                          : "text-white/55"
                      }`}
                    >
                      {faq.question}
                    </span>

                    {/* Category */}
                    <span className="hidden rounded-full border border-white/[0.06] bg-white/[0.02] px-2.5 py-1 text-[9px] text-white/20 md:block">
                      {faq.category}
                    </span>

                    {/* Toggle */}
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-sm transition-all duration-300 ${
                        isOpen
                          ? "rotate-45 border-orange-500/25 bg-orange-500/10 text-orange-400"
                          : "border-white/10 bg-white/[0.02] text-white/30"
                      }`}
                    >
                      +
                    </span>

                  </button>

                  {/* Answer */}
                  <div
                    className={`grid transition-[grid-template-rows] duration-300 ${
                      isOpen
                        ? "grid-rows-[1fr]"
                        : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">

                      <div className="border-t border-white/[0.06] px-4 pb-6 pt-4 sm:px-[4.5rem]">

                        <p className="max-w-3xl text-sm leading-7 text-white/35">
                          {faq.answer}
                        </p>

                        {/* Answer Accent */}
                        <div className="mt-5 flex items-center gap-2">

                          <span className="h-px w-6 bg-orange-500/50" />

                          <span className="text-[9px] uppercase tracking-[0.14em] text-white/20">
                            Digrow
                          </span>

                        </div>

                      </div>

                    </div>
                  </div>

                </div>
              );
            })}

          </div>

        </div>

        {/* Bottom CTA */}
        <div className="mt-14 overflow-hidden rounded-2xl border border-orange-500/15 bg-orange-500/[0.035] sm:mt-16">

          <div className="relative flex flex-col gap-5 p-6 sm:p-8 lg:flex-row lg:items-center lg:justify-between lg:px-10 lg:py-8">

            <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-orange-500/[0.08] blur-[70px]" />

            <div className="relative">

              <p className="text-sm font-semibold text-white">
                Didn't find your answer?
              </p>

              <p className="mt-1 text-xs text-white/30">
                Tell us what you're trying to achieve and we'll help you find
                the right approach.
              </p>

            </div>

            <a
              href="#contact"
              className="group relative inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-500/10 transition-all duration-200 hover:bg-orange-400 hover:shadow-orange-500/20 active:scale-[0.98]"
            >
              Ask Our Team

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