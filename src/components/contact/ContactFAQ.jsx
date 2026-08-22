import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import { contactFaqs } from "../../data/faqs";
import FAQAccordion from "../shared/faq/FAQAccordion";
import Container from "../shared/layout/Container";
import SectionHeading from "../shared/section/SectionHeading";

const ContactFAQ = () => {
  return (
    <section className="bg-white py-10 sm:py-14 lg:py-12">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 xl:gap-20">
          {/* Left Content */}
          <div>
            <SectionHeading
              badge="FAQs"
              title="Frequently Asked Questions"
              description="Find answers to common questions about working with us and getting started."
              align="left"
            />

            <div className="mt-8">
              <Link
                to="/pricing"
                className="group inline-flex items-center gap-2 text-sm font-bold text-black transition-colors hover:text-orange-500"
              >
                View our pricing

                <ArrowRight
                  size={18}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>

          {/* FAQ List */}
          <div className="rounded-3xl border border-black/10 bg-white p-3 flex flex-col gap-3 shadow-sm sm:p-5">
            {contactFaqs.map((faq, index) => (
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

export default ContactFAQ;