import { Link } from "react-router-dom";
import { ArrowLeft, Home } from "lucide-react";

const NotFound = () => {
  return (
    <section className="flex min-h-[70vh] items-center bg-white py-16 sm:py-20 lg:py-28">
      <div className="mx-auto flex w-full max-w-3xl flex-col items-center px-5 text-center sm:px-6 lg:px-8">
        {/* 404 */}
        <div className="relative">
          <span className="text-[100px] font-black leading-none tracking-tighter text-black sm:text-[150px] lg:text-[200px]">
            4
          </span>

          <span className="relative mx-1 inline-flex h-20 w-20 items-center justify-center rounded-full bg-orange-500 text-4xl font-black text-white shadow-xl shadow-orange-500/25 sm:mx-3 sm:h-28 sm:w-28 sm:text-5xl lg:h-36 lg:w-36 lg:text-6xl">
            0
          </span>

          <span className="text-[100px] font-black leading-none tracking-tighter text-black sm:text-[150px] lg:text-[200px]">
            4
          </span>
        </div>

        {/* Badge */}
        <span className="mt-6 inline-flex rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-orange-600">
          Page Not Found
        </span>

        {/* Heading */}
        <h1 className="mt-5 text-3xl font-bold tracking-tight text-black sm:text-4xl lg:text-5xl">
          Oops! You're a little off track.
        </h1>

        {/* Description */}
        <p className="mt-4 max-w-xl text-base leading-7 text-black/60 sm:text-lg sm:leading-8">
          The page you're looking for doesn't exist, may have been moved, or
          the URL might be incorrect.
        </p>

        {/* Actions */}
        <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-orange-500 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-orange-500/20 transition-all duration-200 hover:bg-orange-600 active:scale-[0.98]"
          >
            <Home size={18} />
            Back to Home
          </Link>

          <button
            type="button"
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-black/10 bg-white px-6 py-3.5 text-sm font-semibold text-black transition-all duration-200 hover:border-orange-300 hover:bg-orange-50 hover:text-orange-600 active:scale-[0.98]"
          >
            <ArrowLeft size={18} />
            Go Back
          </button>
        </div>
      </div>
    </section>
  );
};

export default NotFound;