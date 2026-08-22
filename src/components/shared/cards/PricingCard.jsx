import { Check, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const PricingCard = ({
  name,
  description,
  price,
  gst = true,
  features = [],
  targetUsers,
  popular = false,
  customPricing = false,
  ctaText = "Buy Now",
  ctaLink = "/contact",
  className = "",
}) => {
  return (
    <article
      className={`relative flex h-full flex-col rounded-3xl border bg-white p-6 transition-all duration-300 sm:p-7 ${
        popular
          ? "border-orange-500 shadow-xl shadow-orange-500/15 lg:-translate-y-3"
          : "border-black/10 hover:-translate-y-1 hover:border-orange-200 hover:shadow-xl hover:shadow-orange-500/10"
      } ${className}`}
    >
      {/* Popular Badge */}
      {popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="whitespace-nowrap rounded-full bg-orange-500 px-4 py-1.5 text-xs font-bold text-white shadow-lg shadow-orange-500/20">
            MOST POPULAR
          </span>
        </div>
      )}

      {/* Plan Header */}
      <div>
        <h3 className="text-xl font-bold tracking-tight text-black sm:text-2xl">
          {name}
        </h3>

        <p className="mt-3 min-h-12 text-sm leading-6 text-black/60">
          {description}
        </p>
      </div>

      {/* Price */}
      <div className="mt-7 border-y border-black/10 py-6">
        {customPricing ? (
          <>
            <p className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
              Custom Pricing
            </p>

            <p className="mt-2 text-sm text-black/50">
              Tailored to your business requirements
            </p>
          </>
        ) : (
          <>
            <div className="flex items-end gap-1">
              <span className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
                ₹{price}
              </span>

              <span className="mb-1 text-sm text-black/50">
                / month
              </span>
            </div>

            {gst && (
              <p className="mt-2 text-sm text-black/50">
                + 18% GST applicable
              </p>
            )}
          </>
        )}
      </div>

      {/* Target Users */}
      {targetUsers && (
        <div className="mt-6 rounded-2xl bg-orange-50 p-4">
          <p className="text-xs font-bold uppercase tracking-wider text-orange-600">
            Best For
          </p>

          <p className="mt-1.5 text-sm font-medium leading-6 text-black/75">
            {targetUsers}
          </p>
        </div>
      )}

      {/* Features */}
      <div className="mt-7">
        <p className="text-sm font-bold text-black">
          What's included:
        </p>

        <ul className="mt-4 space-y-3">
          {features.map((feature, index) => (
            <li
              key={index}
              className="flex items-start gap-3 text-sm leading-6 text-black/65"
            >
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                <Check size={13} strokeWidth={3} />
              </span>

              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* CTA */}
      <div className="mt-auto pt-8">
        <Link
          to={ctaLink}
          className={`group flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3.5 text-sm font-semibold transition-all duration-200 active:scale-[0.98] ${
            popular
              ? "bg-orange-500 text-white shadow-lg shadow-orange-500/20 hover:bg-orange-600"
              : "border border-black/10 bg-white text-black hover:border-orange-500 hover:bg-orange-50 hover:text-orange-600"
          }`}
        >
          {ctaText}

          <ArrowRight
            size={17}
            className="transition-transform duration-200 group-hover:translate-x-1"
          />
        </Link>
      </div>
    </article>
  );
};

export default PricingCard;