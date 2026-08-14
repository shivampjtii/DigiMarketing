import { useState } from "react";
import ServiceCard from "./ServiceCard";
import { services } from "../../data/services";

const ServiceSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const totalServices = services.length;

  const nextSlide = () => {
    setActiveIndex((current) =>
      current === totalServices - 1 ? 0 : current + 1
    );
  };

  const previousSlide = () => {
    setActiveIndex((current) =>
      current === 0 ? totalServices - 1 : current - 1
    );
  };

  if (!services.length) {
    return null;
  }

  return (
    <div className="relative">

      {/* Slider */}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{
            transform: `translateX(-${activeIndex * 100}%)`,
          }}
        >
          {services.map((service) => (
            <div
              key={service.id}
              className="w-full shrink-0 px-0.5"
            >
              <ServiceCard
                number={service.number}
                icon={service.icon}
                title={service.title}
                description={service.description}
                benefits={service.benefits}
                cta={service.cta}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Controls */}
      <div className="mt-6 flex items-center justify-between">

        {/* Pagination */}
        <div className="flex items-center gap-2">
          {services.map((service, index) => (
            <button
              key={service.id}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`Go to ${service.title}`}
              aria-current={activeIndex === index}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                activeIndex === index
                  ? "w-8 bg-white"
                  : "w-1.5 bg-white/20 hover:bg-white/40"
              }`}
            />
          ))}
        </div>

        {/* Previous / Next */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={previousSlide}
            aria-label="Previous service"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/60 transition-all duration-200 hover:border-white/20 hover:bg-white/[0.08] hover:text-white active:scale-95"
          >
            ←
          </button>

          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next service"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/60 transition-all duration-200 hover:border-white/20 hover:bg-white/[0.08] hover:text-white active:scale-95"
          >
            →
          </button>
        </div>

      </div>
    </div>
  );
};

export default ServiceSlider;