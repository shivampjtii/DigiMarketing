import { useState } from "react";
import { Quote, Star } from "lucide-react";

import Container from "../shared/layout/Container";
import SectionHeading from "../shared/section/SectionHeading";
import SliderControls from "../shared/slider/SliderControls";
import SliderDots from "../shared/slider/SliderDots";

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Rahul Sharma",
      role: "Founder, GrowthLabs",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=1200&q=85",
      quote:
        "The team completely changed how we approach digital marketing. We now have a clear strategy, better visibility, and a much stronger pipeline of qualified leads.",
      rating: 5,
    },
    {
      id: 2,
      name: "Priya Mehta",
      role: "Marketing Director, Elevate",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=85",
      quote:
        "What impressed us most was the transparency. We always knew what was happening, why decisions were being made, and how our campaigns were performing.",
      rating: 5,
    },
    {
      id: 3,
      name: "Arjun Kapoor",
      role: "Co-Founder, NextScale",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1200&q=85",
      quote:
        "They don't just execute campaigns—they think strategically about the business. The improvement in our conversions and lead quality has been significant.",
      rating: 5,
    },
  ];

  const activeTestimonial = testimonials[activeIndex];

  const handlePrevious = () => {
    setActiveIndex((previous) =>
      previous === 0 ? testimonials.length - 1 : previous - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((previous) =>
      previous === testimonials.length - 1 ? 0 : previous + 1
    );
  };

  return (
    <section className="overflow-hidden bg-white py-12 sm:py-16 lg:py-20">
      <Container>
        {/* Header */}
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            badge="Client Stories"
            title="Trusted by Businesses Focused on Growth."
            description="We believe the best proof of our work comes from the businesses we help grow."
            align="left"
            className="max-w-2xl"
          />

          {/* Desktop Controls */}
          <div className="hidden shrink-0 lg:block">
            <SliderControls
              onPrevious={handlePrevious}
              onNext={handleNext}
            />
          </div>
        </div>

        {/* Testimonial Card */}
        <div className="relative mt-8 overflow-hidden rounded-3xl border border-black/10 bg-orange-50/60 lg:mt-10">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
            {/* Client Image */}
            <div className="relative min-h-[300px] sm:min-h-[360px] lg:min-h-[460px]">
              <img
                key={activeTestimonial.id}
                src={activeTestimonial.image}
                alt={activeTestimonial.name}
                className="absolute inset-0 h-full w-full object-cover object-top transition-opacity duration-300"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

              {/* Client Information */}
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                <p className="text-xl font-bold text-white sm:text-2xl">
                  {activeTestimonial.name}
                </p>

                <p className="mt-1 text-sm text-white/75">
                  {activeTestimonial.role}
                </p>
              </div>
            </div>

            {/* Testimonial Content */}
            <div className="relative flex flex-col justify-center p-6 sm:p-8 lg:p-10 xl:p-12">
              {/* Quote Icon */}
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500 text-white shadow-lg shadow-orange-500/20">
                <Quote size={22} fill="currentColor" />
              </div>

              {/* Rating */}
              <div className="mt-6 flex items-center gap-1">
                {Array.from({
                  length: activeTestimonial.rating,
                }).map((_, index) => (
                  <Star
                    key={index}
                    size={17}
                    className="fill-orange-500 text-orange-500"
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="mt-5 text-lg font-medium leading-relaxed tracking-tight text-black sm:text-xl lg:text-2xl xl:text-3xl">
                "{activeTestimonial.quote}"
              </blockquote>

              {/* Slide Indicator */}
              <div className="mt-7 flex items-center justify-between border-t border-black/10 pt-5">
                <p className="text-sm font-medium text-black/50">
                  {String(activeIndex + 1).padStart(2, "0")} /{" "}
                  {String(testimonials.length).padStart(2, "0")}
                </p>

                <SliderDots
                  totalSlides={testimonials.length}
                  activeIndex={activeIndex}
                  onDotClick={setActiveIndex}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Controls */}
        <div className="mt-5 flex justify-center lg:hidden">
          <SliderControls
            onPrevious={handlePrevious}
            onNext={handleNext}
          />
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;