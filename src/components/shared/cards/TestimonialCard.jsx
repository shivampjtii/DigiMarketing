import { Quote, Star } from "lucide-react";

const TestimonialCard = ({
  name,
  role,
  company,
  image,
  testimonial,
  rating = 5,
  className = "",
}) => {
  return (
    <article
      className={`relative flex h-full flex-col rounded-3xl border border-black/10 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-xl hover:shadow-orange-500/10 sm:p-8 ${className}`}
    >
      {/* Quote Icon */}
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-50 text-orange-500">
        <Quote size={24} strokeWidth={2} />
      </div>

      {/* Rating */}
      <div className="mt-6 flex items-center gap-1">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star
            key={index}
            size={17}
            className={
              index < rating
                ? "fill-orange-400 text-orange-400"
                : "fill-transparent text-black/15"
            }
          />
        ))}
      </div>

      {/* Testimonial */}
      <blockquote className="mt-5 flex-1">
        <p className="text-base leading-7 text-black/70 sm:text-lg sm:leading-8">
          “{testimonial}”
        </p>
      </blockquote>

      {/* Client */}
      <div className="mt-8 flex items-center gap-3 border-t border-black/10 pt-5">
        {image ? (
          <img
            src={image}
            alt={name}
            className="h-12 w-12 rounded-full object-cover"
          />
        ) : (
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-orange-100 text-sm font-bold text-orange-600">
            {name?.charAt(0)}
          </div>
        )}

        <div className="min-w-0">
          <h4 className="truncate text-sm font-bold text-black sm:text-base">
            {name}
          </h4>

          <p className="mt-0.5 truncate text-xs text-black/50 sm:text-sm">
            {role}
            {company && (
              <>
                <span className="mx-1">•</span>
                {company}
              </>
            )}
          </p>
        </div>
      </div>
    </article>
  );
};

export default TestimonialCard;