import SectionBadge from "./SectionBadge";

const SectionHeading = ({
  badge,
  title,
  description,
  align = "center",
  className = "",
  titleClassName = "",
  descriptionClassName = "",
}) => {
  const alignmentStyles = {
    left: "items-start text-left",
    center: "items-center text-center",
  };

  return (
    <div
      className={`flex max-w-3xl flex-col ${alignmentStyles[align]} ${className}`}
    >
      {/* Section Badge */}
      {badge && <SectionBadge>{badge}</SectionBadge>}

      {/* Section Title */}
      {title && (
        <h2
          className={`mt-4 text-3xl font-bold leading-tight tracking-tight text-black sm:mt-5 sm:text-4xl lg:text-5xl ${titleClassName}`}
        >
          {title}
        </h2>
      )}

      {/* Section Description */}
      {description && (
        <p
          className={`mt-4 max-w-2xl text-base leading-7 text-black/60 sm:mt-5 sm:text-lg sm:leading-8 ${descriptionClassName}`}
        >
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;