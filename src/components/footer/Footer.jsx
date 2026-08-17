const Footer = () => {
  const services = [
    "SEO",
    "Paid Advertising",
    "Social Media Marketing",
    "Branding",
    "Content Creation",
    "Conversion Optimization",
  ];

  const company = [
    {
      label: "About Us",
      href: "#about",
    },
    {
      label: "Case Studies",
      href: "#case-studies",
    },
    {
      label: "Results",
      href: "#results",
    },
    {
      label: "Pricing",
      href: "#pricing",
    },
    {
      label: "FAQ",
      href: "#faq",
    },
  ];

  const socialLinks = [
    {
      label: "LinkedIn",
      href: "#",
    },
    {
      label: "Instagram",
      href: "#",
    },
    {
      label: "X / Twitter",
      href: "#",
    },
  ];

  return (
    <footer className="relative overflow-hidden bg-[#030303]">

      {/* Top Orange Line */}
      <div className="h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent" />

      {/* Background Glow */}
      <div className="pointer-events-none absolute -left-40 top-0 h-80 w-80 rounded-full bg-orange-500/[0.025] blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* Main Footer */}
        <div className="grid gap-12 py-16 sm:py-20 lg:grid-cols-[1.3fr_0.7fr_0.7fr_0.8fr] lg:gap-10 lg:py-24">

          {/* =========================================
              BRAND
          ========================================== */}

          <div className="max-w-sm">

            {/* Logo */}
            <a
              href="#"
              className="inline-flex items-center gap-2.5"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-orange-500 text-sm font-bold text-white shadow-lg shadow-orange-500/10">
                D
              </span>

              <span className="text-lg font-bold tracking-[-0.03em] text-white">
                Digrow
                <span className="text-orange-500">.</span>
              </span>
            </a>

            {/* Description */}
            <p className="mt-5 text-sm leading-6 text-white/30">
              A performance-driven digital marketing partner helping
              ambitious businesses turn attention into measurable growth.
            </p>

            {/* Mini CTA */}
            <a
              href="#contact"
              className="group mt-6 inline-flex items-center gap-2 text-xs font-semibold text-white transition-colors hover:text-orange-300"
            >
              Start growing with us

              <span className="text-orange-400 transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </a>

            {/* Contact */}
            <div className="mt-8 space-y-2 border-t border-white/[0.06] pt-6">

              <a
                href="mailto:hello@digrow.co"
                className="block text-xs text-white/30 transition-colors hover:text-orange-300"
              >
                hello@digrow.co
              </a>

              <a
                href="tel:+919999999999"
                className="block text-xs text-white/30 transition-colors hover:text-orange-300"
              >
                +91 99999 99999
              </a>

            </div>

          </div>

          {/* =========================================
              SERVICES
          ========================================== */}

          <div>

            <h3 className="text-[10px] font-semibold uppercase tracking-[0.18em] text-orange-400">
              Services
            </h3>

            <ul className="mt-5 space-y-3.5">

              {services.map((service) => (
                <li key={service}>

                  <a
                    href="#services"
                    className="group inline-flex items-center gap-2 text-xs text-white/30 transition-colors hover:text-white/70"
                  >
                    <span className="h-px w-0 bg-orange-500 transition-all duration-200 group-hover:w-3" />

                    {service}
                  </a>

                </li>
              ))}

            </ul>

          </div>

          {/* =========================================
              COMPANY
          ========================================== */}

          <div>

            <h3 className="text-[10px] font-semibold uppercase tracking-[0.18em] text-orange-400">
              Company
            </h3>

            <ul className="mt-5 space-y-3.5">

              {company.map((item) => (
                <li key={item.label}>

                  <a
                    href={item.href}
                    className="group inline-flex items-center gap-2 text-xs text-white/30 transition-colors hover:text-white/70"
                  >
                    <span className="h-px w-0 bg-orange-500 transition-all duration-200 group-hover:w-3" />

                    {item.label}
                  </a>

                </li>
              ))}

            </ul>

          </div>

          {/* =========================================
              SOCIAL / CTA
          ========================================== */}

          <div>

            <h3 className="text-[10px] font-semibold uppercase tracking-[0.18em] text-orange-400">
              Connect
            </h3>

            <div className="mt-5 space-y-3">

              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="group flex items-center justify-between rounded-xl border border-white/[0.06] bg-white/[0.015] px-3.5 py-3 transition-all duration-200 hover:border-orange-500/20 hover:bg-orange-500/[0.04]"
                >

                  <span className="text-xs text-white/35 transition-colors group-hover:text-white/70">
                    {social.label}
                  </span>

                  <span className="text-xs text-orange-400/50 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-orange-400">
                    ↗
                  </span>

                </a>
              ))}

            </div>

            {/* Newsletter */}
            <div className="mt-6">

              <p className="text-xs font-medium text-white/50">
                Get growth insights
              </p>

              <div className="mt-3 flex overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.02] focus-within:border-orange-500/30">

                <input
                  type="email"
                  placeholder="Your email"
                  className="min-w-0 flex-1 bg-transparent px-3.5 py-3 text-xs text-white outline-none placeholder:text-white/20"
                />

                <button
                  type="button"
                  aria-label="Subscribe"
                  className="flex w-11 shrink-0 items-center justify-center bg-orange-500 text-white transition-colors hover:bg-orange-400"
                >
                  →
                </button>

              </div>

            </div>

          </div>

        </div>

        {/* Bottom CTA Strip */}
        <div className="border-y border-white/[0.06] py-6">

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

            <div>

              <p className="text-sm font-semibold text-white/70">
                Ready to grow?
              </p>

              <p className="mt-1 text-xs text-white/25">
                Let's turn your marketing into a growth engine.
              </p>

            </div>

            <a
              href="#contact"
              className="group inline-flex items-center gap-2 text-xs font-semibold text-orange-400 transition-colors hover:text-orange-300"
            >
              Book a consultation

              <span className="transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </a>

          </div>

        </div>

        {/* Legal / Copyright */}
        <div className="flex flex-col gap-5 py-7 sm:flex-row sm:items-center sm:justify-between">

          <p className="text-[10px] text-white/20">
            © {new Date().getFullYear()} Digrow. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">

            <a
              href="#"
              className="text-[10px] text-white/20 transition-colors hover:text-white/50"
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="text-[10px] text-white/20 transition-colors hover:text-white/50"
            >
              Terms of Service
            </a>

            <a
              href="#"
              className="text-[10px] text-white/20 transition-colors hover:text-white/50"
            >
              Cookie Policy
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;