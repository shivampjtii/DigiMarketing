import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import { homeFaqs } from "../../data/faqs";
import FAQAccordion from "../shared/faq/FAQAccordion";
import Container from "../shared/layout/Container";
import SectionHeading from "../shared/section/SectionHeading";

const FAQPreview = () => {
  return (
    <section className="bg-white py-0 sm:py-2 lg:py-0">
      <Container>
        <div className="grid items-start gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12 xl:gap-16">
          {/* Left Content */}
          <div>
            <SectionHeading
              badge="FAQs"
              title="Frequently Asked Questions"
              description="Everything you need to know about our services, process, and how we help businesses grow."
              align="left"
            />

            <div className="mt-6">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 text-sm font-bold text-black transition-colors hover:text-orange-500"
              >
                Have more questions? Contact us

                <ArrowRight
                  size={18}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>

          {/* FAQ List */}
          <div className="rounded-3xl border border-black/10 bg-white p-2 flex flex-col gap-3 shadow-sm sm:p-4">
            {homeFaqs.map((faq, index) => (
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

export default FAQPreview;