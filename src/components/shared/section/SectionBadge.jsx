const SectionBadge = ({ children, className = "" }) => {
  return (
    <div
      className={`inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-3.5 py-1.5 ${className}`}
    >
      <span className="h-2 w-2 rounded-full bg-orange-500" />

      <span className="text-xs font-bold uppercase tracking-[0.16em] text-orange-600 sm:text-sm">
        {children}
      </span>
    </div>
  );
};

export default SectionBadge;