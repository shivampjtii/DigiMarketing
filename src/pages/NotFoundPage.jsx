import { ArrowLeft, Home } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden bg-white px-4 py-16 sm:px-6 lg:px-8">
      {/* Background Decorations */}
      <div className="pointer-events-none absolute -left-32 top-0 h-72 w-72 rounded-full bg-orange-100 blur-3xl" />

      <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-orange-100 blur-3xl" />

      {/* Content */}
      <div className="relative mx-auto max-w-2xl text-center">
        {/* 404 */}
        <div className="relative">
          <p className="select-none text-[120px] font-black leading-none tracking-tighter text-orange-500 sm:text-[170px] lg:text-[220px]">
            404
          </p>

          <div className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl bg-black text-white shadow-xl sm:h-20 sm:w-20">
            ?
          </div>
        </div>

        {/* Badge */}
        <div className="mt-2 inline-flex rounded-full bg-orange-50 px-4 py-2">
          <span className="text-xs font-bold uppercase tracking-[0.16em] text-orange-600">
            Page Not Found
          </span>
        </div>

        {/* Heading */}
        <h1 className="mt-6 text-3xl font-bold tracking-tight text-black sm:text-4xl lg:text-5xl">
          Oops! You seem to be lost.
        </h1>

        {/* Description */}
        <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-black/60 sm:text-base sm:leading-8">
          The page you're looking for doesn't exist, may have been moved, or
          the URL might be incorrect.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            to="/"
            className="group inline-flex items-center justify-center gap-2 rounded-xl bg-orange-500 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-orange-600 active:scale-[0.98]"
          >
            <Home size={18} />

            Back to Home
          </Link>

          <button
            type="button"
            onClick={() => navigate(-1)}
            className="group inline-flex items-center justify-center gap-2 rounded-xl border border-black/10 bg-white px-6 py-3.5 text-sm font-semibold text-black transition-all duration-200 hover:border-orange-300 hover:bg-orange-50"
          >
            <ArrowLeft
              size={18}
              className="transition-transform duration-200 group-hover:-translate-x-1"
            />

            Go Back
          </button>
        </div>
      </div>
    </section>
  );
};

export default NotFoundPage;