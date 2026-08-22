import { ArrowRight } from "lucide-react";
import PrimaryButton from "../buttons/PrimaryButton";
import SecondaryButton from "../buttons/SecondaryButton";

const CTASection = ({
  badge,
  title,
  description,
  primaryText = "Get Started",
  primaryLink = "/contact",
  secondaryText,
  secondaryLink,
  className = "",
}) => {
  return (
    <section
      className={`relative overflow-hidden bg-black py-16 sm:py-20 lg:py-28 ${className}`}
    >
      {/* Orange Background Decorations */}
      <div className="pointer-events-none absolute -left-24 top-0 h-64 w-64 rounded-full bg-orange-500/20 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-32 -right-20 h-80 w-80 rounded-full bg-orange-600/20 blur-3xl" />

      <div className="relative mx-auto flex max-w-4xl flex-col items-center px-5 text-center sm:px-6 lg:px-8">
        {/* Badge */}
        {badge && (
          <span className="inline-flex items-center gap-2 rounded-full border border-orange-400/20 bg-orange-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-orange-400">
            <span className="h-2 w-2 rounded-full bg-orange-500" />
            {badge}
          </span>
        )}

        {/* Title */}
        <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
          {title}
        </h2>

        {/* Description */}
        {description && (
          <p className="mt-5 max-w-2xl text-base leading-7 text-white/60 sm:text-lg sm:leading-8">
            {description}
          </p>
        )}

        {/* Buttons */}
        <div className="mt-8 flex w-full flex-col items-stretch justify-center gap-3 sm:w-auto sm:flex-row sm:items-center">
          <PrimaryButton
            to={primaryLink}
            icon={ArrowRight}
            className="w-full sm:w-auto"
          >
            {primaryText}
          </PrimaryButton>

          {secondaryText && secondaryLink && (
            <SecondaryButton
              to={secondaryLink}
              className="w-full border-white/20 bg-transparent text-white hover:border-orange-500 hover:bg-orange-500/10 hover:text-white sm:w-auto"
            >
              {secondaryText}
            </SecondaryButton>
          )}
        </div>
      </div>
    </section>
  );
};

export default CTASection;