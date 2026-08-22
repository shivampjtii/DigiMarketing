import { SearchX } from "lucide-react";

const EmptyState = ({
  title = "Nothing found",
  description = "We couldn't find what you're looking for.",
  icon: Icon = SearchX,
  action,
}) => {
  return (
    <div className="flex w-full flex-col items-center justify-center rounded-2xl border border-dashed border-black/15 bg-orange-50/30 px-6 py-14 text-center sm:px-10 sm:py-20">
      {/* Icon */}
      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-100 text-orange-600">
        <Icon size={26} strokeWidth={1.8} />
      </div>

      {/* Content */}
      <h3 className="text-xl font-bold tracking-tight text-black sm:text-2xl">
        {title}
      </h3>

      <p className="mt-3 max-w-md text-sm leading-6 text-black/60 sm:text-base">
        {description}
      </p>

      {/* Optional Action */}
      {action && <div className="mt-6">{action}</div>}
    </div>
  );
};

export default EmptyState;