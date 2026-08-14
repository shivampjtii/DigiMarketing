import { useState } from "react";
import { testimonials } from "../../data/testimonials";

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!testimonials.length) {
    return null;
  }

  const activeTestimonial = testimonials[activeIndex];

  const nextTestimonial = () => {
    setActiveIndex((current) =>
      current === testimonials.length - 1 ? 0 : current + 1
    );
  };

  const previousTestimonial = () => {
    setActiveIndex((current) =>
      current === 0 ? testimonials.length - 1 : current - 1
    );
  };

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden border-b border-white/10 bg-black"
    >
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32">

        {/* Header */}
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">

          <div>
            <span className="inline-flex rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-2 text-xs font-medium uppercase tracking-[0.16em] text-white/45">
              Client stories
            </span>

            <h2 className="mt-5 max-w-xl text-3xl font-semibold leading-tight tracking-[-0.035em] text-white sm:text-4xl lg:text-5xl">
              Don't take our word for it.
              <span className="text-white/40">
                {" "}
                Hear from our clients.
              </span>
            </h2>
          </div>

          <p className="max-w-xl text-base leading-7 text-white/45 sm:text-lg sm:leading-8 lg:ml-auto">
            Real businesses, real challenges, and measurable outcomes. Here's
            what our clients have to say about working with our team.
          </p>

        </div>

        {/* Featured Testimonial */}
        <div className="mt-14 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] lg:mt-16">

          <div className="grid lg:grid-cols-[1.3fr_0.7fr]">

            {/* Quote */}
            <div className="p-6 sm:p-8 lg:p-12">

              {/* Rating */}
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, index) => (
                  <span
                    key={index}
                    className="text-sm text-white"
                  >
                    ★
                  </span>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="mt-8 max-w-3xl text-2xl font-medium leading-[1.3] tracking-tight text-white sm:text-3xl lg:text-4xl">
                "{activeTestimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="mt-10 flex items-center gap-4">

                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.05]">
                  <span className="text-sm font-semibold text-white/70">
                    {activeTestimonial.name?.charAt(0)}
                  </span>
                </div>

                <div>
                  <p className="text-sm font-semibold text-white">
                    {activeTestimonial.name}
                  </p>

                  <p className="mt-0.5 text-xs text-white/35">
                    {activeTestimonial.role}
                    {activeTestimonial.company
                      ? ` · ${activeTestimonial.company}`
                      : ""}
                  </p>
                </div>

              </div>

            </div>

            {/* Result Panel */}
            <div className="border-t border-white/10 bg-white/[0.02] p-6 sm:p-8 lg:border-l lg:border-t-0 lg:p-10">

              <p className="text-xs font-medium uppercase tracking-[0.16em] text-white/30">
                Business impact
              </p>

              <div className="mt-8 space-y-6">

                {activeTestimonial.results?.map((result) => (
                  <div
                    key={result.label}
                    className="border-b border-white/10 pb-5 last:border-b-0 last:pb-0"
                  >
                    <p className="text-3xl font-semibold tracking-tight text-white">
                      {result.value}
                    </p>

                    <p className="mt-1 text-xs leading-5 text-white/35">
                      {result.label}
                    </p>
                  </div>
                ))}

              </div>

            </div>

          </div>

          {/* Controls */}
          <div className="flex items-center justify-between border-t border-white/10 px-6 py-4 sm:px-8">

            {/* Pagination */}
            <div className="flex items-center gap-2">
              {testimonials.map((testimonial, index) => (
                <button
                  key={testimonial.id}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-label={`View testimonial from ${testimonial.name}`}
                  aria-current={activeIndex === index}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    activeIndex === index
                      ? "w-8 bg-white"
                      : "w-1.5 bg-white/20 hover:bg-white/40"
                  }`}
                />
              ))}
            </div>

            {/* Navigation */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={previousTestimonial}
                aria-label="Previous testimonial"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-sm text-white/50 transition-all hover:border-white/20 hover:bg-white/[0.08] hover:text-white active:scale-95"
              >
                ←
              </button>

              <button
                type="button"
                onClick={nextTestimonial}
                aria-label="Next testimonial"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-sm text-white/50 transition-all hover:border-white/20 hover:bg-white/[0.08] hover:text-white active:scale-95"
              >
                →
              </button>
            </div>

          </div>

        </div>

        {/* Supporting Testimonials */}
        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

          {testimonials.slice(0, 3).map((testimonial) => (
            <button
              key={testimonial.id}
              type="button"
              onClick={() =>
                setActiveIndex(
                  testimonials.findIndex(
                    (item) => item.id === testimonial.id
                  )
                )
              }
              className={`group rounded-2xl border p-5 text-left transition-all duration-300 sm:p-6 ${
                activeTestimonial.id === testimonial.id
                  ? "border-white/20 bg-white/[0.05]"
                  : "border-white/10 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.04]"
              }`}
            >
              <div className="flex items-center justify-between">

                <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04]">
                  <span className="text-xs font-semibold text-white/60">
                    {testimonial.name?.charAt(0)}
                  </span>
                </div>

                <span className="text-xs text-white/20 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-white/50">
                  →
                </span>

              </div>

              <p className="mt-5 line-clamp-3 text-sm leading-6 text-white/45">
                "{testimonial.quote}"
              </p>

              <div className="mt-5">
                <p className="text-xs font-semibold text-white">
                  {testimonial.name}
                </p>

                <p className="mt-1 text-[11px] text-white/30">
                  {testimonial.role}
                  {testimonial.company
                    ? ` · ${testimonial.company}`
                    : ""}
                </p>
              </div>

            </button>
          ))}

        </div>

        {/* Trust Footer */}
        <div className="mt-10 flex flex-col items-center justify-center gap-3 text-center sm:flex-row sm:gap-5">

          <div className="flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, index) => (
              <span
                key={index}
                className="text-xs text-white"
              >
                ★
              </span>
            ))}
          </div>

          <span className="text-xs text-white/30">
            4.9/5 average client satisfaction
          </span>

          <span className="hidden h-1 w-1 rounded-full bg-white/20 sm:block" />

          <span className="text-xs text-white/30">
            150+ businesses supported
          </span>

        </div>

      </div>
    </section>
  );
};

export default Testimonials;