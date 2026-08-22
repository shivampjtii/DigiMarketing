import { ArrowRight, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

import Container from "../shared/layout/Container";
import SectionHeading from "../shared/section/SectionHeading";
import CaseStudyCard from "../shared/cards/CaseStudyCard";

const FeaturedCaseStudies = () => {
  const caseStudies = [
    {
      title: "Scaling Organic Growth for a Growing Brand",
      category: "SEO & Content Strategy",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
      result: "+185% Organic Traffic",
      slug: "organic-growth",
    },
    {
      title: "Turning Paid Campaigns Into Qualified Leads",
      category: "Performance Marketing",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
      result: "3.2x ROAS",
      slug: "performance-marketing",
    },
    {
      title: "Building a High-Converting Digital Presence",
      category: "Website Development",
      image:
        "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=1200&q=80",
      result: "+72% Conversions",
      slug: "website-growth",
    },
  ];

  return (
    <section className="overflow-hidden bg-white py-12 sm:py-14 lg:py-16">
      <Container>
        {/* Section Heading */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            badge="Our Work"
            title="Real Strategies. Real Business Results."
            description="Explore how we help businesses turn digital opportunities into measurable growth."
            align="left"
            className="max-w-2xl"
          />

          <Link
            to="/case-studies"
            className="group inline-flex w-fit items-center gap-2 text-sm font-bold text-black transition-colors hover:text-orange-500"
          >
            View All Case Studies

            <ArrowRight
              size={18}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </Link>
        </div>

        {/* Case Studies */}
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:mt-10 lg:grid-cols-3 lg:gap-6">
          {caseStudies.map((study) => (
            <CaseStudyCard
              key={study.slug}
              title={study.title}
              category={study.category}
              image={study.image}
              result={study.result}
              slug={study.slug}
            />
          ))}
        </div>

        {/* Bottom Highlight */}
        <div className="mt-8 overflow-hidden rounded-3xl border border-black/10 bg-black lg:mt-10">
          <div className="grid lg:grid-cols-2">
            {/* Content */}
            <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-500 text-white">
                  <TrendingUp size={21} />
                </div>

                <p className="text-sm font-semibold uppercase tracking-[0.14em] text-orange-400">
                  Results That Matter
                </p>
              </div>

              <h3 className="mt-5 max-w-xl text-2xl font-bold tracking-tight text-white sm:text-3xl">
                We focus on outcomes that actually move your business forward.
              </h3>

              <p className="mt-3 max-w-xl text-sm leading-7 text-white/60 sm:text-base">
                More than impressions and vanity metrics, we focus on
                visibility, qualified leads, conversions, customer acquisition,
                and sustainable growth.
              </p>

              <Link
                to="/case-studies"
                className="group mt-6 inline-flex w-fit items-center gap-2 rounded-xl bg-orange-500 px-5 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-orange-600"
              >
                Explore Our Results

                <ArrowRight
                  size={18}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </Link>
            </div>

            {/* Image */}
            <div className="relative min-h-[280px] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=85"
                alt="Digital marketing analytics and business growth"
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-black/40" />

              <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/10 bg-black/60 p-4 backdrop-blur-md">
                <p className="text-sm font-semibold text-white">
                  Data-Driven Growth
                </p>

                <p className="mt-1 text-xs leading-5 text-white/60">
                  Strategies designed around measurable business outcomes and
                  sustainable performance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FeaturedCaseStudies;