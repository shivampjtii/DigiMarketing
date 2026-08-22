import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const ServiceCard = ({
  title,
  description,
  image,
  icon: Icon,
  features = [],
  link = "/services",
  className = "",
}) => {
  return (
    <article
      className={`group flex h-full flex-col overflow-hidden rounded-3xl border border-black/10 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-xl hover:shadow-orange-500/10 ${className}`}
    >
      {/* Image */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-orange-50">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Icon */}
        {Icon && (
          <div className="absolute left-5 top-5 flex h-12 w-12 items-center justify-center rounded-xl bg-white/95 text-orange-500 shadow-lg backdrop-blur-sm">
            <Icon size={23} strokeWidth={2} />
          </div>
        )}

        {/* Bottom gradient */}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="text-xl font-bold tracking-tight text-black sm:text-2xl">
          {title}
        </h3>

        <p className="mt-3 text-sm leading-6 text-black/60 sm:text-base sm:leading-7">
          {description}
        </p>

        {/* Features */}
        {features.length > 0 && (
          <ul className="mt-5 space-y-2">
            {features.slice(0, 3).map((feature, index) => (
              <li
                key={index}
                className="flex items-start gap-2 text-sm text-black/70"
              >
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-500" />

                <span>{feature}</span>
              </li>
            ))}
          </ul>
        )}

        {/* CTA */}
        <div className="mt-auto pt-6">
          <Link
            to={link}
            className="inline-flex items-center gap-2 text-sm font-semibold text-orange-600 transition-colors hover:text-orange-700"
          >
            Explore Service

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

export default ServiceCard;