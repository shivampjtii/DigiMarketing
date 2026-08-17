const MobileMenu = ({ isOpen, onClose, navLinks }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="relative mt-2 overflow-hidden rounded-2xl border border-white/[0.08] bg-[#080808]/95 shadow-2xl shadow-black/40 backdrop-blur-xl lg:hidden">

      {/* Orange Glow */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-orange-500/[0.10] blur-3xl" />

      <div className="relative p-3">

        {/* Navigation Links */}
        <div className="space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={onClose}
              className="group flex items-center justify-between rounded-xl px-4 py-3.5 text-sm font-medium text-white/60 transition-all duration-200 hover:bg-orange-500/[0.06] hover:text-white"
            >
              <span>{link.name}</span>

              <span className="translate-x-[-4px] text-orange-400 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100">
                →
              </span>
            </a>
          ))}

          {/* Resources */}
          <a
            href="#faq"
            onClick={onClose}
            className="group flex items-center justify-between rounded-xl px-4 py-3.5 text-sm font-medium text-white/60 transition-all duration-200 hover:bg-orange-500/[0.06] hover:text-white"
          >
            <span>Resources</span>

            <span className="translate-x-[-4px] text-orange-400 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100">
              →
            </span>
          </a>
        </div>

        {/* Divider */}
        <div className="my-3 h-px bg-white/[0.07]" />

        {/* CTA */}
        <a
          href="#contact"
          onClick={onClose}
          className="group flex w-full items-center justify-center gap-2 rounded-xl bg-orange-500 px-5 py-3.5 text-sm font-semibold text-white shadow-lg shadow-orange-500/10 transition-all duration-200 hover:bg-orange-400 hover:shadow-orange-500/20 active:scale-[0.98]"
        >
          Start a Project

          <span className="transition-transform duration-200 group-hover:translate-x-1">
            →
          </span>
        </a>

        {/* Bottom Message */}
        <div className="mt-4 flex items-center justify-center gap-2 pb-1 text-[11px] text-white/25">
          <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
          Let's grow something meaningful.
        </div>

      </div>
    </div>
  );
};

export default MobileMenu;