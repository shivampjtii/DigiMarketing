const Badge = ({
  children,
  className = "",
  variant = "primary",
}) => {
  const variants = {
    primary:
      "border border-orange-200 bg-orange-50 text-orange-600",

    dark:
      "bg-black text-white",

    light:
      "border border-black/10 bg-white text-black/70",

    success:
      "border border-green-200 bg-green-50 text-green-700",
  };

  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold tracking-wide ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
};

export default Badge;