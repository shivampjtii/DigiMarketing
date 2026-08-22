import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import { pricingFaqs } from "../../data/faqs";
import FAQAccordion from "../shared/faq/FAQAccordion";
import Container from "../shared/layout/Container";
import SectionHeading from "../shared/section/SectionHeading";

const PricingFAQ = () => {
  return (
    <section className="bg-white py-10 sm:py-14 lg:py-12">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 xl:gap-20">
          {/* Left Content */}
          <div>
            <SectionHeading
              badge="Pricing FAQs"
              title="Questions About Our Pricing?"
              description="Here are answers to some common questions about our plans, pricing, and how we work."
              align="left"
            />

            <div className="mt-8">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 text-sm font-bold text-black transition-colors hover:text-orange-500"
              >
                Still have questions? Talk to us

                <ArrowRight
                  size={18}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>

          {/* FAQ List */}
          <div className="rounded-3xl border border-black/10 bg-white p-3 flex flex-col gap-3 shadow-sm sm:p-5">
            {pricingFaqs.map((faq, index) => (
              <FAQAccordion
                key={faq.question}
                question={faq.question}
                answer={faq.answer}
                defaultOpen={index === 0}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default PricingFAQ;