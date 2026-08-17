import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";
import { services } from "../../data/services";

const ServiceSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(1);

  // Responsive number of cards
  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth >= 1280) {
        setVisibleCount(3);
      } else if (window.innerWidth >= 768) {
        setVisibleCount(2);
      } else {
        setVisibleCount(1);
      }
    };

    updateVisibleCount();

    window.addEventListener("resize", updateVisibleCount);

    return () => {
      window.removeEventListener("resize", updateVisibleCount);
    };
  }, []);

  const maxIndex = Math.max(0, services.length - visibleCount);

  const nextSlide = () => {
    setActiveIndex((current) =>
      current >= maxIndex ? 0 : current + 1
    );
  };

  const previousSlide = () => {
    setActiveIndex((current) =>
      current <= 0 ? maxIndex : current - 1
    );
  };

  useEffect(() => {
    if (activeIndex > maxIndex) {
      setActiveIndex(maxIndex);
    }
  }, [activeIndex, maxIndex]);

  return (
    <div className="w-full">

      {/* Slider */}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{
            transform: `translateX(-${
              activeIndex * (100 / visibleCount)
            }%)`,
          }}
        >
          {services.map((service, index) => (
            <div
              key={service.id}
              className="w-full shrink-0 px-1.5 md:w-1/2 xl:w-1/3"
            >
              <ServiceCard
                service={service}
                active={index === activeIndex}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Controls */}
      <div className="mt-7 flex items-center justify-between">

        {/* Pagination */}
        <div className="flex items-center gap-1.5">
          {Array.from({ length: maxIndex + 1 }).map(
            (_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`Go to service slide ${index + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? "w-7 bg-orange-500"
                    : "w-1.5 bg-white/15 hover:bg-white/30"
                }`}
              />
            )
          )}
        </div>

        {/* Previous / Next */}
        <div className="flex items-center gap-2">

          <button
            type="button"
            onClick={previousSlide}
            aria-label="Previous service"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.02] text-white/50 transition-all duration-200 hover:border-orange-500/30 hover:bg-orange-500/[0.06] hover:text-orange-400 active:scale-95"
          >
            ←
          </button>

          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next service"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-orange-500/20 bg-orange-500/[0.06] text-orange-400 transition-all duration-200 hover:border-orange-500/40 hover:bg-orange-500/10 active:scale-95"
          >
            →
          </button>

        </div>

      </div>

      {/* Current Service Indicator */}
      <div className="mt-4 flex items-center justify-between text-[10px] uppercase tracking-[0.15em] text-white/20">

        <span>
          Services
        </span>

        <span>
          {String(activeIndex + 1).padStart(2, "0")}{" "}
          /{" "}
          {String(maxIndex + 1).padStart(2, "0")}
        </span>

      </div>

    </div>
  );
};

export default ServiceSlider;