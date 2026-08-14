const MobileMenu = ({ isOpen, navLinks, onClose }) => {
  return (
    <div
      className={`lg:hidden overflow-hidden border-t border-white/10 bg-black/95 backdrop-blur-xl transition-all duration-300 ease-in-out ${
        isOpen
          ? "max-h-[500px] opacity-100"
          : "max-h-0 opacity-0"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 py-6 sm:px-6">
        <div className="flex flex-col">

          {/* Navigation Links */}
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={onClose}
              className="group flex items-center justify-between border-b border-white/10 py-4 text-sm font-medium text-white/70 transition-colors duration-200 hover:text-white"
            >
              <span>{link.name}</span>

              <span className="text-white/30 transition-all duration-200 group-hover:translate-x-1 group-hover:text-white">
                →
              </span>
            </a>
          ))}

          {/* Mobile CTA */}
          <a
            href="#contact"
            onClick={onClose}
            className="mt-6 flex items-center justify-center rounded-full bg-white px-5 py-3.5 text-sm font-semibold text-black transition-all duration-200 hover:bg-white/90 active:scale-[0.98]"
          >
            Get Started
          </a>

        </div>
      </div>
    </div>
  );
};

export default MobileMenu;