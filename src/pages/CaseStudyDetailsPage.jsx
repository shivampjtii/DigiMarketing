import { ArrowLeft, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { Link, useParams } from "react-router-dom";

import { caseStudies } from "../data/caseStudies";
import Container from "../components/shared/layout/Container";

const CaseStudyDetailsPage = () => {
  const { slug } = useParams();

  const caseStudy = caseStudies.find((item) => item.slug === slug);

  if (!caseStudy) {
    return (
      <section className="flex min-h-[70vh] items-center bg-white py-20">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">
              Case Study Not Found
            </p>

            <h1 className="mt-4 text-4xl font-bold tracking-tight text-black sm:text-5xl">
              We couldn't find this case study.
            </h1>

            <p className="mt-5 text-base leading-7 text-black/60">
              The case study you are looking for may have been removed or the
              link may be incorrect.
            </p>

            <Link
              to="/case-studies"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-500"
            >
              <ArrowLeft size={18} />
              Back to Case Studies
            </Link>
          </div>
        </Container>
      </section>
    );
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-black py-16 text-white sm:py-20 lg:py-28">
        <Container>
          <Link
            to="/case-studies"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-white/70 transition hover:text-white"
          >
            <ArrowLeft
              size={18}
              className="transition-transform group-hover:-translate-x-1"
            />
            Back to Case Studies
          </Link>

          <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-end">
            <div>
              <span className="inline-flex rounded-full bg-orange-500/10 px-4 py-2 text-sm font-semibold text-orange-400">
                {caseStudy.category}
              </span>

              <h1 className="mt-6 max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                {caseStudy.title}
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-7 text-white/65 sm:text-lg">
                {caseStudy.description}
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8">
              <p className="text-sm font-medium text-white/50">Client</p>

              <p className="mt-2 text-xl font-semibold">
                {caseStudy.client}
              </p>

              <div className="mt-6 border-t border-white/10 pt-6">
                <p className="text-sm font-medium text-white/50">Result</p>

                <p className="mt-2 text-lg font-semibold text-orange-400">
                  {caseStudy.result}
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Featured Image */}
      <section className="bg-white py-10 sm:py-14 lg:py-20">
        <Container>
          <div className="overflow-hidden rounded-3xl">
            <img
              src={caseStudy.image}
              alt={caseStudy.title}
              className="h-[260px] w-full object-cover sm:h-[400px] lg:h-[560px]"
            />
          </div>
        </Container>
      </section>

      {/* Details */}
      <section className="bg-white pb-16 sm:pb-20 lg:pb-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">
                The Approach
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-black sm:text-4xl">
                A strategy built around meaningful growth.
              </h2>
            </div>

            <div>
              <p className="text-base leading-8 text-black/65 sm:text-lg">
                Every project starts with understanding the business, its
                audience, and the opportunities available. For this case study,
                we focused on creating a clearer strategy and connecting each
                activity to a meaningful business objective.
              </p>

              <p className="mt-6 text-base leading-8 text-black/65 sm:text-lg">
                The work was designed to create a stronger foundation for
                sustainable growth while improving the overall digital
                experience and performance of the business.
              </p>

              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {[
                  "Clear strategic direction",
                  "Audience-focused approach",
                  "Performance tracking",
                  "Continuous optimization",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-2xl bg-neutral-100 p-4"
                  >
                    <CheckCircle2
                      size={20}
                      className="shrink-0 text-orange-500"
                    />

                    <span className="text-sm font-semibold text-black">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-neutral-100 py-16 sm:py-20 lg:py-28">
        <Container>
          <div className="rounded-3xl bg-black px-6 py-12 text-center text-white sm:px-10 sm:py-16 lg:px-16">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-400">
              Let's Work Together
            </p>

            <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Ready to create your next growth story?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/60">
              Let's discuss your business, your goals, and how we can build a
              strategy that moves you forward.
            </p>

            <Link
              to="/contact"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-orange-500 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-orange-400"
            >
              Start a Conversation

              <ArrowUpRight
                size={18}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
};

export default CaseStudyDetailsPage;