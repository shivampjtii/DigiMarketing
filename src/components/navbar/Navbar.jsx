import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Solutions", href: "#solutions" },
    { name: "Results", href: "#results" },
    { name: "Pricing", href: "#pricing" },
    { name: "About", href: "#about" },
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/80 backdrop-blur-xl">
      <nav className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
        
        {/* Logo */}
        <a
          href="#"
          className="flex items-center gap-2.5"
          aria-label="Digital Marketing Agency Home"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-sm font-black text-black">
            D
          </div>

          <span className="text-lg font-semibold tracking-tight text-white">
            DIGROW
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-white/60 transition-colors duration-200 hover:text-white"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black transition-all duration-200 hover:bg-white/90"
          >
            Get Started

            <span className="transition-transform duration-200 group-hover:translate-x-0.5">
              →
            </span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-white transition-colors hover:bg-white/10 lg:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          <div className="flex w-5 flex-col gap-1.5">
            <span
              className={`h-0.5 w-full bg-white transition-all duration-200 ${
                isOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />

            <span
              className={`h-0.5 w-full bg-white transition-all duration-200 ${
                isOpen ? "opacity-0" : ""
              }`}
            />

            <span
              className={`h-0.5 w-full bg-white transition-all duration-200 ${
                isOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </nav>

      {/* Mobile Navigation */}
      <div
        className={`overflow-hidden border-t border-white/10 bg-black transition-all duration-300 lg:hidden ${
          isOpen ? "max-h-100 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-auto max-w-7xl px-5 py-5 sm:px-6">
          <div className="flex flex-col">
            
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={handleLinkClick}
                className="border-b border-white/10 py-4 text-sm font-medium text-white/70 transition-colors hover:text-white"
              >
                {link.name}
              </a>
            ))}

            {/* Mobile CTA */}
            <a
              href="#contact"
              onClick={handleLinkClick}
              className="mt-5 flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition-colors hover:bg-white/90"
            >
              Get Started
            </a>

          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;