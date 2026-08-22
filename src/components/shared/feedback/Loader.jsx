const Loader = ({
  size = "md",
  text = "",
  fullScreen = false,
  className = "",
}) => {
  const sizes = {
    sm: "h-5 w-5 border-2",
    md: "h-8 w-8 border-[3px]",
    lg: "h-12 w-12 border-4",
  };

  const loader = (
    <div
      className={`flex flex-col items-center justify-center gap-3 ${className}`}
      role="status"
      aria-live="polite"
    >
      <div
        className={`${sizes[size]} animate-spin rounded-full border-black/10 border-t-orange-500`}
      />

      {text && (
        <p className="text-sm font-medium text-black/60">
          {text}
        </p>
      )}
    </div>
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 z-[100] flex items-center justify-center bg-white/90 backdrop-blur-sm">
        {loader}
      </div>
    );
  }

  return loader;
};

export default Loader;