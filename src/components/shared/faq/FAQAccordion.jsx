import { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQAccordion = ({
  question,
  answer,
  defaultOpen = false,
  className = "",
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div
      className={`overflow-hidden rounded-2xl border border-black/10 bg-white transition-all duration-300 ${
        isOpen
          ? "border-orange-200 shadow-lg shadow-orange-500/5"
          : "hover:border-orange-200"
      } ${className}`}
    >
      {/* Question */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6 sm:py-6"
      >
        <span className="text-base font-semibold leading-6 text-black sm:text-lg">
          {question}
        </span>

        {/* Toggle Icon */}
        <span
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-all duration-300 ${
            isOpen
              ? "rotate-180 bg-orange-500 text-white"
              : "bg-orange-50 text-orange-600"
          }`}
        >
          <ChevronDown size={20} strokeWidth={2.5} />
        </span>
      </button>

      {/* Answer */}
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-5 pb-5 sm:px-6 sm:pb-6">
            <div className="border-t border-black/5 pt-4 sm:pt-5">
              <p className="max-w-3xl text-sm leading-7 text-black/60 sm:text-base sm:leading-8">
                {answer}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQAccordion;