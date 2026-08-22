import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

import Container from "../shared/layout/Container";

const CaseStudiesGrid = ({ activeFilter }) => {
  const caseStudies = [
    {
      title: "Building a Stronger Organic Growth Strategy",
      category: "SEO",
      client: "Growth-Focused Brand",
      description:
        "A focused SEO and content strategy designed to improve visibility, attract relevant traffic, and build sustainable organic growth.",
      result: "Improved organic visibility",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Turning Content Into a Consistent Growth Channel",
      category: "Content",
      client: "Digital Business",
      description:
        "A structured content approach built around audience needs, search opportunities, and clear business objectives.",
      result: "Stronger audience engagement",
      image:
        "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Creating a More Effective Social Media Presence",
      category: "Social Media",
      client: "Growing Consumer Brand",
      description:
        "A refined social media strategy focused on consistent messaging, stronger engagement, and meaningful audience interaction.",
      result: "More consistent engagement",
      image:
        "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Optimizing Campaigns for Better Performance",
      category: "Paid Advertising",
      client: "E-Commerce Business",
      description:
        "A performance-focused campaign strategy built to improve targeting, optimize spending, and generate better-quality opportunities.",
      result: "More efficient campaign performance",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Redesigning the Digital Experience",
      category: "Web Development",
      client: "Service-Based Company",
      description:
        "A modern website experience designed around clearer messaging, improved usability, and stronger conversion opportunities.",
      result: "Improved user experience",
      image:
        "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Combining Strategy Across Multiple Channels",
      category: "Strategy",
      client: "Ambitious Growing Business",
      description:
        "An integrated digital approach connecting strategy, content, SEO, and performance activity around shared business goals.",
      result: "A clearer direction for growth",
      image:
        "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80",
    },
  ];

  const filteredCaseStudies =
    activeFilter === "All Work"
      ? caseStudies
      : caseStudies.filter(
          (caseStudy) => caseStudy.category === activeFilter
        );

  return (
    <section className="bg-white py-10 sm:py-14 lg:py-12">
      <Container>
        {filteredCaseStudies.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
            {filteredCaseStudies.map((caseStudy) => (
              <article
                key={caseStudy.title}
                className="group overflow-hidden rounded-3xl border border-black/10 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-xl hover:shadow-black/5"
              >
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-black/5">
                  <img
                    src={caseStudy.image}
                    alt={caseStudy.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-black/20 transition-colors duration-300 group-hover:bg-black/30" />

                  {/* Category */}
                  <div className="absolute left-4 top-4">
                    <span className="rounded-full bg-white px-3 py-1.5 text-xs font-bold text-black shadow-sm">
                      {caseStudy.category}
                    </span>
                  </div>

                  {/* Top Right Icon */}
                  <Link
                    to="/case-studies"
                    aria-label={`View ${caseStudy.title}`}
                    className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-orange-500 text-white opacity-100 shadow-lg transition-all duration-300 sm:-translate-y-2 sm:opacity-0 sm:group-hover:translate-y-0 sm:group-hover:opacity-100"
                  >
                    <ArrowUpRight size={18} />
                  </Link>
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6 lg:p-7">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-orange-500">
                    {caseStudy.client}
                  </p>

                  <h2 className="mt-3 text-xl font-bold leading-tight tracking-tight text-black sm:text-2xl">
                    {caseStudy.title}
                  </h2>

                  <p className="mt-3 text-sm leading-7 text-black/60">
                    {caseStudy.description}
                  </p>

                  {/* Result */}
                  <div className="mt-6 border-t border-black/10 pt-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-black/40">
                      Focus
                    </p>

                    <p className="mt-1 text-sm font-semibold text-black">
                      {caseStudy.result}
                    </p>
                  </div>

                  {/* Link */}
                  <Link
                    to="/case-studies"
                    className="group/link mt-6 inline-flex items-center gap-2 text-sm font-bold text-black transition-colors hover:text-orange-500"
                  >
                    View case study

                    <ArrowUpRight
                      size={17}
                      className="transition-transform duration-200 group-hover/link:translate-x-1 group-hover/link:-translate-y-1"
                    />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="rounded-3xl border border-dashed border-black/15 py-16 text-center">
            <h2 className="text-xl font-bold text-black">
              No case studies found
            </h2>

            <p className="mt-2 text-sm text-black/60">
              There are currently no case studies in this category.
            </p>
          </div>
        )}
      </Container>
    </section>
  );
};

export default CaseStudiesGrid;