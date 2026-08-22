import { NavLink } from "react-router-dom";

const NavLinks = ({ links, onLinkClick, mobile = false }) => {
  return (
    <>
      {links.map((link) => (
        <NavLink
          key={link.name}
          to={link.path}
          onClick={onLinkClick}
          className={({ isActive }) =>
            mobile
              ? `flex items-center justify-between rounded-xl px-4 py-3.5 text-base font-medium transition-all ${
                  isActive
                    ? "bg-orange-50 text-orange-600"
                    : "text-black/70 hover:bg-orange-50/70 hover:text-black"
                }`
              : `relative rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? "text-orange-600"
                    : "text-black/60 hover:text-black"
                }`
          }
        >
          {({ isActive }) => (
            <>
              <span>{link.name}</span>

              {mobile ? (
                <span
                  className={`text-lg transition-transform ${
                    isActive
                      ? "translate-x-0 text-orange-500"
                      : "translate-x-[-4px] text-black/20"
                  }`}
                >
                  →
                </span>
              ) : (
                <span
                  className={`absolute bottom-0 left-1/2 h-0.5 -translate-x-1/2 rounded-full bg-orange-500 transition-all duration-300 ${
                    isActive ? "w-5" : "w-0"
                  }`}
                />
              )}
            </>
          )}
        </NavLink>
      ))}
    </>
  );
};

export default NavLinks;