const StatCard = ({
  value,
  label,
  description,
  icon: Icon,
  className = "",
}) => {
  return (
    <div
      className={`group flex h-full flex-col rounded-2xl border border-black/10 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-lg hover:shadow-orange-500/10 sm:rounded-3xl sm:p-6 ${className}`}
    >
      {/* Icon */}
      {Icon && (
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-50 text-orange-500 transition-transform duration-300 group-hover:scale-110 sm:h-12 sm:w-12">
          <Icon size={22} strokeWidth={2} />
        </div>
      )}

      {/* Value */}
      <h3 className={`font-bold tracking-tight text-black ${
        Icon ? "mt-5" : ""
      } text-3xl sm:text-4xl lg:text-5xl`}>
        {value}
      </h3>

      {/* Label */}
      {label && (
        <p className="mt-2 text-sm font-semibold text-black sm:text-base">
          {label}
        </p>
      )}

      {/* Description */}
      {description && (
        <p className="mt-2 text-sm leading-6 text-black/55">
          {description}
        </p>
      )}
    </div>
  );
};

export default StatCard;