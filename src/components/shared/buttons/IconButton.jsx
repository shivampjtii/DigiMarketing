const IconButton = ({
  icon: Icon,
  onClick,
  type = "button",
  ariaLabel = "Button",
  disabled = false,
  className = "",
  variant = "default",
  size = "md",
}) => {
  const variants = {
    default:
      "border border-black/10 bg-white text-black hover:border-orange-500/30 hover:bg-orange-50 hover:text-orange-600",

    primary:
      "bg-orange-500 text-white hover:bg-orange-600 shadow-md shadow-orange-500/20",

    dark:
      "bg-black text-white hover:bg-black/85",

    ghost:
      "bg-transparent text-black hover:bg-orange-50 hover:text-orange-600",
  };

  const sizes = {
    sm: "h-9 w-9",
    md: "h-11 w-11",
    lg: "h-13 w-13",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      className={`inline-flex shrink-0 items-center justify-center rounded-xl transition-all duration-200 active:scale-95 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {Icon && <Icon size={size === "sm" ? 18 : size === "lg" ? 24 : 21} />}
    </button>
  );
};

export default IconButton;