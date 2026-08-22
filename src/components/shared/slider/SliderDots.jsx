const SliderDots = ({
  totalSlides,
  activeIndex,
  onDotClick,
  className = "",
}) => {
  if (!totalSlides || totalSlides <= 1) {
    return null;
  }

  return (
    <div
      className={`flex items-center justify-center gap-2 ${className}`}
      role="tablist"
      aria-label="Slider navigation"
    >
      {Array.from({ length: totalSlides }).map((_, index) => {
        const isActive = index === activeIndex;

        return (
          <button
            key={index}
            type="button"
            onClick={() => onDotClick?.(index)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              isActive
                ? "w-8 bg-orange-500"
                : "w-2.5 bg-black/15 hover:bg-orange-300"
            }`}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={isActive ? "true" : undefined}
          />
        );
      })}
    </div>
  );
};

export default SliderDots;