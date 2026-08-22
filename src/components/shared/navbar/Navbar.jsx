import { Link, NavLink } from "react-router-dom";
import { Menu } from "lucide-react";
import Logo from "../ui/Logo";
import MobileMenu from "./MobileMenu";

const Navbar = ({ isMenuOpen, setIsMenuOpen }) => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
    { name: "Case Studies", path: "/case-studies" },
    { name: "Pricing", path: "/pricing" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
        
        {/* Logo */}
        <Link to="/" aria-label="Digrow home">
          <Logo />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `relative rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? "text-orange-600"
                    : "text-black/60 hover:text-black"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.name}

                  <span
                    className={`absolute bottom-0 left-1/2 h-0.5 -translate-x-1/2 rounded-full bg-orange-500 transition-all duration-300 ${
                      isActive ? "w-5" : "w-0"
                    }`}
                  />
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-3 lg:flex">
          <Link
            to="/contact"
            className="text-sm font-medium text-black/70 transition-colors hover:text-black"
          >
            Contact
          </Link>

          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 rounded-full bg-orange-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-orange-500/20 transition-all duration-200 hover:bg-orange-600 hover:shadow-orange-500/30 active:scale-[0.98]"
          >
            Get Started

            <span className="transition-transform duration-200 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsMenuOpen(true)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-black/10 bg-white text-black transition-all hover:border-orange-500/30 hover:bg-orange-50 lg:hidden"
          aria-label="Open navigation menu"
          aria-expanded={isMenuOpen}
        >
          <Menu size={21} strokeWidth={2} />
        </button>
      </div>

      {/* Mobile Menu */}
      <MobileMenu
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        navLinks={navLinks}
      />
    </header>
  );
};

export default Navbar;