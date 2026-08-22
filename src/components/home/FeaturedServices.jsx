import { useState } from "react";
import {
  ArrowRight,
  BarChart3,
  ChevronLeft,
  ChevronRight,
  Megaphone,
  Palette,
  PenTool,
  Search,
  Globe2,
} from "lucide-react";
import { Link } from "react-router-dom";
import Container from "../shared/layout/Container";
import SectionHeading from "../shared/section/SectionHeading";

const FeaturedServices = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const services = [
    {
      icon: Search,
      title: "SEO & Content Strategy",
      description:
        "Improve search visibility and attract high-intent audiences with a strategy built for sustainable organic growth.",
      benefits: [
        "Higher search engine visibility",
        "Qualified organic traffic",
        "Long-term sustainable growth",
      ],
      number: "01",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=85",
    },
    {
      icon: BarChart3,
      title: "Paid Advertising",
      description:
        "Launch data-driven advertising campaigns designed to generate qualified leads, conversions, and measurable returns.",
      benefits: [
        "Targeted customer acquisition",
        "Conversion-focused campaigns",
        "Measurable ROI and performance",
      ],
      number: "02",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=85",
    },
    {
      icon: Megaphone,
      title: "Social Media Marketing",
      description:
        "Build a stronger digital presence and create meaningful engagement with the audience that matters to your business.",
      benefits: [
        "Stronger brand awareness",
        "Consistent audience engagement",
        "Strategic content planning",
      ],
      number: "03",
      image:
        "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1400&q=85",
    },
    {
      icon: Palette,
      title: "Branding & Creative",
      description:
        "Create a memorable brand identity that communicates your value clearly and helps you stand out in your market.",
      benefits: [
        "Clear brand positioning",
        "Consistent visual identity",
        "Stronger market differentiation",
      ],
      number: "04",
      image:
        "https://images.unsplash.com/photo-1545235617-9465d2a55698?auto=format&fit=crop&w=1400&q=85",
    },
    {
      icon: PenTool,
      title: "Content Creation",
      description:
        "Create valuable, relevant content that builds trust, captures attention, and moves potential customers toward action.",
      benefits: [
        "High-quality marketing content",
        "Better audience engagement",
        "Content built for conversion",
      ],
      number: "05",
      image:
        "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1400&q=85",
    },
    {
      icon: Globe2,
      title: "Website Development",
      description:
        "Build fast, modern, and conversion-focused digital experiences that support your marketing and business goals.",
      benefits: [
        "Modern responsive design",
        "Better user experience",
        "Conversion-focused pages",
      ],
      number: "06",
      image:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1400&q=85",
    },
  ];

  const activeService = services[activeIndex];
  const ActiveIcon = activeService.icon;

  const handlePrevious = () => {
    setActiveIndex((previous) =>
      previous === 0 ? services.length - 1 : previous - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((previous) =>
      previous === services.length - 1 ? 0 : previous + 1
    );
  };

  return (
    <section className="overflow-hidden bg-orange-50/50 py-10 sm:py-12 lg:py-14">
      <Container>
        {/* Heading */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            badge="What We Do"
            title="The Services That Power Your Growth."
            description="From strategy to execution, we bring the right digital marketing capabilities together to help your business move forward."
            align="left"
            className="max-w-2xl"
          />

          <Link
            to="/services"
            className="group inline-flex w-fit shrink-0 items-center gap-2 text-sm font-bold text-black transition-colors hover:text-orange-500"
          >
            Explore All Services
            <ArrowRight
              size={18}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </Link>
        </div>

        {/* Service Slider */}
        <div className="relative mt-8 overflow-hidden rounded-3xl border border-black/10 bg-white shadow-sm lg:mt-10">
          <div className="grid lg:grid-cols-2">
            {/* Image */}
            <div className="relative min-h-[300px] sm:min-h-[380px] lg:min-h-[480px]">
              <img
                key={activeService.image}
                src={activeService.image}
                alt={activeService.title}
                className="absolute inset-0 h-full w-full object-cover object-center"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

              <div className="absolute left-5 top-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500 text-white shadow-lg sm:left-8 sm:top-8">
                <ActiveIcon size={26} />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                <p className="text-sm font-semibold tracking-[0.2em] text-orange-300">
                  SERVICE {activeService.number}
                </p>

                <p className="mt-2 text-2xl font-bold text-white sm:text-3xl">
                  {activeService.title}
                </p>
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-12">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-orange-500">
                Digital Growth Service
              </p>

              <h3 className="mt-4 text-3xl font-bold tracking-tight text-black sm:text-4xl">
                {activeService.title}
              </h3>

              <p className="mt-4 max-w-xl text-sm leading-7 text-black/60 sm:text-base">
                {activeService.description}
              </p>

              <div className="mt-7 space-y-3">
                {activeService.benefits.map((benefit) => (
                  <div
                    key={benefit}
                    className="flex items-center gap-3 text-sm font-medium text-black/75"
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-orange-100 text-xs font-bold text-orange-600">
                      ✓
                    </span>

                    {benefit}
                  </div>
                ))}
              </div>

              <Link
                to="/services"
                className="group mt-8 inline-flex w-fit items-center gap-2 rounded-xl bg-orange-500 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-orange-600 active:scale-[0.98]"
              >
                Explore This Service
                <ArrowRight
                  size={18}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </Link>

              {/* Slider Footer */}
              <div className="mt-8 flex items-center justify-between border-t border-black/10 pt-6">
                <p className="text-sm font-semibold text-black/50">
                  {String(activeIndex + 1).padStart(2, "0")} /{" "}
                  {String(services.length).padStart(2, "0")}
                </p>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handlePrevious}
                    aria-label="Previous service"
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-black/10 text-black transition-colors hover:bg-orange-500 hover:text-white"
                  >
                    <ChevronLeft size={20} />
                  </button>

                  <button
                    type="button"
                    onClick={handleNext}
                    aria-label="Next service"
                    className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-500 text-white transition-colors hover:bg-orange-600"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Service Navigation */}
        <div className="mt-5 flex gap-2 overflow-x-auto pb-1">
          {services.map((service, index) => (
            <button
              key={service.number}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`shrink-0 rounded-full px-4 py-2.5 text-sm font-semibold transition-all ${
                activeIndex === index
                  ? "bg-orange-500 text-white"
                  : "border border-black/10 bg-white text-black/60 hover:border-orange-300 hover:text-orange-500"
              }`}
            >
              {service.title}
            </button>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-8 flex flex-col items-center justify-between gap-5 rounded-3xl border border-black/10 bg-white px-6 py-6 text-center shadow-sm sm:px-8 sm:py-7 lg:mt-10 lg:flex-row lg:text-left">
          <div>
            <p className="text-lg font-bold tracking-tight text-black sm:text-xl">
              Not sure which service is right for you?
            </p>

            <p className="mt-1 text-sm leading-6 text-black/60">
              We'll help you identify the biggest opportunities for your
              business.
            </p>
          </div>

          <Link
            to="/contact"
            className="group inline-flex shrink-0 items-center gap-2 rounded-xl bg-orange-500 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-orange-600 active:scale-[0.98]"
          >
            Talk to Us
            <ArrowRight
              size={18}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default FeaturedServices;