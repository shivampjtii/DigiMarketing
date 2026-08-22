import { ChevronLeft, ChevronRight } from "lucide-react";
import IconButton from "../buttons/IconButton";

const SliderControls = ({
  onPrevious,
  onNext,
  previousLabel = "Previous slide",
  nextLabel = "Next slide",
  className = "",
}) => {
  return (
    <div
      className={`flex items-center gap-3 ${className}`}
      aria-label="Slider controls"
    >
      <IconButton
        icon={ChevronLeft}
        onClick={onPrevious}
        ariaLabel={previousLabel}
        variant="default"
        size="md"
      />

      <IconButton
        icon={ChevronRight}
        onClick={onNext}
        ariaLabel={nextLabel}
        variant="primary"
        size="md"
      />
    </div>
  );
};

export default SliderControls;