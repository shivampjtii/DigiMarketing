import { Link } from "react-router-dom";
import { X } from "lucide-react";
import NavLinks from "./NavLinks";

const MobileMenu = ({ isMenuOpen, setIsMenuOpen, navLinks }) => {
  return (
    <>
      {/* Backdrop */}
      <div
        onClick={() => setIsMenuOpen(false)}
        className={`fixed inset-0 z-40 bg-black/20 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          isMenuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      />

      {/* Mobile Menu */}
      <div
        className={`fixed left-0 right-0 top-0 z-50 border-b border-black/10 bg-white shadow-2xl transition-all duration-300 ease-out lg:hidden ${
          isMenuOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0"
        }`}
      >
        {/* Top Section */}
        <div className="flex h-[72px] items-center justify-end px-5 sm:px-6">
          <button
            type="button"
            onClick={() => setIsMenuOpen(false)}
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-black/10 text-black transition-colors hover:border-orange-500/30 hover:bg-orange-50"
            aria-label="Close navigation menu"
          >
            <X size={21} strokeWidth={2} />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="border-t border-black/5 px-5 py-5 sm:px-6">
          <div className="flex flex-col gap-1">
            <NavLinks
              links={navLinks}
              mobile={true}
              onLinkClick={() => setIsMenuOpen(false)}
            />
          </div>
        </nav>

        {/* CTA Section */}
        <div className="border-t border-black/5 px-5 py-6 sm:px-6">
          <p className="mb-4 text-xs leading-5 text-black/50">
            Ready to turn your digital presence into measurable growth?
          </p>

          <Link
            to="/contact"
            onClick={() => setIsMenuOpen(false)}
            className="group flex items-center justify-center gap-2 rounded-xl bg-orange-500 px-5 py-3.5 text-sm font-semibold text-white shadow-lg shadow-orange-500/20 transition-all hover:bg-orange-600 active:scale-[0.98]"
          >
            Get Started

            <span className="transition-transform duration-200 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;