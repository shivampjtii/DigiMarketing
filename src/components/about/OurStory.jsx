import { ArrowRight, Quote } from "lucide-react";
import { Link } from "react-router-dom";

import Container from "../shared/layout/Container";
import SectionHeading from "../shared/section/SectionHeading";

const OurStory = () => {
  return (
    <section className="bg-orange-50/50 py-10 sm:py-12 lg:py-14">
      <Container>
        <div className="grid items-stretch gap-10 lg:grid-cols-2 lg:gap-16 xl:gap-20">
          {/* Content */}
          <div className="flex flex-col">
            <SectionHeading
              badge="Our Story"
              title="We Started With a Simple Question."
              description="Why should businesses invest in digital marketing without clearly understanding what is creating real growth?"
              align="left"
            />

            <div className="mt-8 space-y-5 text-sm leading-7 text-black/60 sm:text-base sm:leading-8">
              <p>
                We saw businesses spending time, money, and energy across
                multiple digital channels without a clear strategy connecting
                those efforts to their actual business goals.
              </p>

              <p>
                There was plenty of activity, but not always enough clarity.
                Campaigns were launched, content was published, and reports
                were delivered, yet one important question often remained:
                <span className="font-semibold text-black">
                  {" "}
                  Is this actually helping the business grow?
                </span>
              </p>

              <p>
                That is why we built a more focused approach—one that begins
                with understanding the business, identifying the right
                opportunities, and creating digital strategies with a clear
                purpose behind every decision.
              </p>
            </div>

            {/* Quote */}
            <div className="mt-8 rounded-2xl border-l-4 border-orange-500 bg-white p-5 shadow-sm sm:p-6">
              <Quote size={24} className="text-orange-500" />

              <p className="mt-4 text-base font-semibold leading-7 text-black sm:text-lg">
                Good marketing should not simply create attention. It should
                create progress.
              </p>
            </div>

            {/* CTA */}
            <Link
              to="/contact"
              className="group mt-8 inline-flex w-fit items-center gap-2 text-sm font-bold text-black transition-colors hover:text-orange-500"
            >
              Let's talk about your growth goals

              <ArrowRight
                size={18}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </Link>
          </div>

          {/* Image */}
          <div className="min-h-[380px] lg:min-h-0">
            <div className="h-full overflow-hidden rounded-3xl border border-black/10 bg-white shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1400&q=85"
                alt="Business team collaborating on strategy"
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default OurStory;