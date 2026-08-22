import { Link } from "react-router-dom";

const SecondaryButton = ({
  children,
  to,
  onClick,
  type = "button",
  disabled = false,
  className = "",
  icon: Icon,
}) => {
  const baseStyles =
    "group inline-flex items-center justify-center gap-2 rounded-xl border border-black/15 bg-white px-5 py-3 text-sm font-semibold text-black shadow-sm transition-all duration-200 hover:border-orange-500 hover:bg-orange-50 hover:text-orange-600 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 sm:px-6 sm:py-3.5";

  const content = (
    <>
      <span>{children}</span>

      {Icon && (
        <Icon
          size={18}
          strokeWidth={2}
          className="transition-transform duration-200 group-hover:translate-x-1"
        />
      )}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={`${baseStyles} ${className}`}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${className}`}
    >
      {content}
    </button>
  );
};

export default SecondaryButton;