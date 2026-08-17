import { useState } from "react";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    {
      name: "Services",
      href: "#services",
    },
    {
      name: "Results",
      href: "#results",
    },
    {
      name: "Case Studies",
      href: "#case-studies",
    },
    {
      name: "Pricing",
      href: "#pricing",
    },
    {
      name: "About",
      href: "#about",
    },
  ];

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50">
        <div className="mx-auto max-w-7xl px-4 pt-4 sm:px-6 lg:px-8">
          <nav className="relative flex h-16 items-center justify-between rounded-2xl border border-white/[0.08] bg-[#050505]/85 px-4 shadow-2xl shadow-black/20 backdrop-blur-xl sm:px-5">

            {/* Subtle Orange Glow */}
            <div className="pointer-events-none absolute -left-20 top-1/2 h-24 w-24 -translate-y-1/2 rounded-full bg-orange-500/[0.08] blur-3xl" />

            {/* Logo */}
            <a
              href="#"
              className="group relative flex items-center gap-2.5"
              aria-label="DIGROW Home"
            >
              <div className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-xl bg-orange-500 text-sm font-black text-white shadow-lg shadow-orange-500/20 transition-all duration-300 group-hover:bg-orange-400 group-hover:shadow-orange-500/30">
                <span>D</span>
              </div>

              <span className="text-lg font-semibold tracking-[-0.03em] text-white">
                DIGROW
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden items-center gap-1 lg:flex">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="rounded-lg px-3.5 py-2 text-sm font-medium text-white/50 transition-all duration-200 hover:bg-white/[0.04] hover:text-white"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden items-center gap-3 lg:flex">
              <a
                href="#faq"
                className="rounded-lg px-3 py-2 text-sm font-medium text-white/45 transition-colors hover:text-white"
              >
                Resources
              </a>

              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full bg-orange-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-orange-500/15 transition-all duration-200 hover:bg-orange-400 hover:shadow-orange-500/25 active:scale-[0.98]"
              >
                Start a Project

                <span className="transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setIsMenuOpen((current) => !current)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
              className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] transition-all duration-200 hover:border-orange-500/30 hover:bg-orange-500/[0.06] lg:hidden"
            >
              <div className="flex w-5 flex-col gap-1.5">
                <span
                  className={`h-px w-full bg-white transition-all duration-300 ${
                    isMenuOpen
                      ? "translate-y-[3.5px] rotate-45"
                      : ""
                  }`}
                />

                <span
                  className={`h-px w-full bg-white transition-all duration-200 ${
                    isMenuOpen ? "opacity-0" : ""
                  }`}
                />

                <span
                  className={`h-px w-full bg-white transition-all duration-300 ${
                    isMenuOpen
                      ? "-translate-y-[3.5px] -rotate-45"
                      : ""
                  }`}
                />
              </div>
            </button>

          </nav>

          {/* Mobile Menu */}
          <MobileMenu
            isOpen={isMenuOpen}
            onClose={() => setIsMenuOpen(false)}
            navLinks={navLinks}
          />
        </div>
      </header>

      {/* Prevents content from sitting underneath fixed navbar */}
      <div className="h-24" />
    </>
  );
};

export default Navbar;