import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const CaseStudyCard = ({
  title,
  category,
  description,
  image,
  results = [],
  slug,
  className = "",
}) => {
  return (
    <article
      className={`group flex h-full flex-col overflow-hidden rounded-3xl border border-black/10 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-xl hover:shadow-orange-500/10 ${className}`}
    >
      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden bg-orange-50">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Image Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

        {/* Category */}
        {category && (
          <span className="absolute left-5 top-5 rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-orange-600 shadow-sm">
            {category}
          </span>
        )}

        {/* View Button */}
        <Link
          to={`/case-studies/${slug}`}
          aria-label={`View ${title} case study`}
          className="absolute bottom-5 right-5 flex h-11 w-11 items-center justify-center rounded-full bg-orange-500 text-white shadow-lg shadow-orange-500/30 transition-all duration-300 hover:bg-orange-600 group-hover:scale-105"
        >
          <ArrowUpRight size={20} />
        </Link>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="text-xl font-bold tracking-tight text-black sm:text-2xl">
          {title}
        </h3>

        {description && (
          <p className="mt-3 text-sm leading-6 text-black/60 sm:text-base sm:leading-7">
            {description}
          </p>
        )}

        {/* Results */}
        {results.length > 0 && (
          <div className="mt-6 grid grid-cols-2 gap-3 border-t border-black/10 pt-5">
            {results.slice(0, 2).map((result, index) => (
              <div key={index}>
                <p className="text-lg font-bold tracking-tight text-orange-500 sm:text-xl">
                  {result.value}
                </p>

                <p className="mt-1 text-xs font-medium leading-5 text-black/50">
                  {result.label}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* CTA */}
        <div className="mt-auto pt-6">
          <Link
            to={`/case-studies/${slug}`}
            className="inline-flex items-center gap-2 text-sm font-semibold text-black transition-colors hover:text-orange-600"
          >
            View Case Study

            <ArrowUpRight
              size={18}
              className="transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default CaseStudyCard;