import { Link } from "react-router-dom";

const Logo = ({ showLink = false }) => {
  const logoContent = (
    <div className="flex items-center gap-2.5">
      {/* Logo Mark */}
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500 shadow-lg shadow-orange-500/20">
        <span className="text-lg font-black tracking-tight text-white">
          D
        </span>
      </div>

      {/* Brand Name */}
      <div className="flex items-baseline">
        <span className="text-xl font-bold tracking-tight text-black sm:text-2xl">
          Digi
        </span>

        <span className="text-xl font-bold tracking-tight text-orange-500 sm:text-2xl">
          Grow
        </span>
      </div>
    </div>
  );

  if (showLink) {
    return (
      <Link
        to="/"
        aria-label="DigiGrow Home"
        className="inline-flex"
      >
        {logoContent}
      </Link>
    );
  }

  return logoContent;
};

export default Logo;