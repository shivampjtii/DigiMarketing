import { SlidersHorizontal } from "lucide-react";

import Container from "../shared/layout/Container";

const CaseStudiesFilter = ({ activeFilter, setActiveFilter }) => {
  const filters = [
    "All Work",
    "SEO",
    "Content",
    "Social Media",
    "Paid Advertising",
    "Web Development",
  ];

  return (
    <section id="case-studies" className="scroll-mt-20 bg-white pb-2 sm:pb-2">
      <Container>
        <div className="flex flex-col gap-5 py-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2">
            <SlidersHorizontal size={18} className="text-orange-500" />

            <span className="text-sm font-bold text-black">
              Filter by service
            </span>
          </div>

          <div className="-mx-1 flex gap-2 overflow-x-auto px-1 pb-1 sm:mx-0 sm:flex-wrap sm:justify-end sm:overflow-visible sm:p-0">
            {filters.map((filter) => {
              const isActive = activeFilter === filter;

              return (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  className={`shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200 ${
                    isActive
                      ? "bg-black text-white shadow-sm"
                      : "bg-orange-50 text-black/60 hover:bg-orange-100 hover:text-black"
                  }`}
                >
                  {filter}
                </button>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CaseStudiesFilter;