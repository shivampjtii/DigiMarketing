const Footer = () => {
  const services = [
    { name: "SEO", href: "#services" },
    { name: "Paid Advertising", href: "#services" },
    { name: "Social Media", href: "#services" },
    { name: "Branding", href: "#services" },
    { name: "Content Creation", href: "#services" },
  ];

  const company = [
    { name: "About Us", href: "#about" },
    { name: "Our Results", href: "#results" },
    { name: "Case Studies", href: "#case-studies" },
    { name: "Pricing", href: "#pricing" },
    { name: "Contact", href: "#contact" },
  ];

  const resources = [
    { name: "FAQs", href: "#faq" },
    { name: "Services", href: "#services" },
    { name: "Get Started", href: "#contact" },
  ];

  const socialLinks = [
    { name: "LinkedIn", href: "#" },
    { name: "Instagram", href: "#" },
    { name: "X", href: "#" },
  ];

  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* Main Footer */}
        <div className="grid gap-12 py-14 sm:py-16 lg:grid-cols-[1.5fr_1fr_1fr_0.8fr] lg:gap-10 lg:py-20">

          {/* Brand */}
          <div className="max-w-sm">

            <a
              href="#"
              className="inline-flex items-center gap-2.5"
              aria-label="DIGROW Home"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-sm font-black text-black">
                D
              </div>

              <span className="text-lg font-semibold tracking-tight text-white">
                DIGROW
              </span>
            </a>

            <p className="mt-5 text-sm leading-6 text-white/40">
              A digital growth partner helping ambitious businesses turn
              strategy, creativity, and technology into measurable growth.
            </p>

            <a
              href="#contact"
              className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white"
            >
              Start a conversation

              <span className="text-white/35 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-white">
                →
              </span>
            </a>

          </div>

          {/* Services */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-white/35">
              Services
            </h3>

            <ul className="mt-5 space-y-3.5">
              {services.map((service) => (
                <li key={service.name}>
                  <a
                    href={service.href}
                    className="text-sm text-white/45 transition-colors duration-200 hover:text-white"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-white/35">
              Company
            </h3>

            <ul className="mt-5 space-y-3.5">
              {company.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-sm text-white/45 transition-colors duration-200 hover:text-white"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-white/35">
              Resources
            </h3>

            <ul className="mt-5 space-y-3.5">
              {resources.map((resource) => (
                <li key={resource.name}>
                  <a
                    href={resource.href}
                    className="text-sm text-white/45 transition-colors duration-200 hover:text-white"
                  >
                    {resource.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Newsletter / Contact Strip */}
        <div className="border-y border-white/10 py-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

            <div>
              <p className="text-sm font-medium text-white">
                Ready to grow your business?
              </p>

              <p className="mt-1 text-xs text-white/35 sm:text-sm">
                Let's talk about your next growth opportunity.
              </p>
            </div>

            <a
              href="#contact"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition-all duration-200 hover:bg-white/90 active:scale-[0.98] sm:w-fit"
            >
              Get Started
              <span>→</span>
            </a>

          </div>
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col gap-6 py-7 sm:py-8 lg:flex-row lg:items-center lg:justify-between">

          {/* Copyright */}
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
            <p className="text-xs text-white/30">
              © 2026 DIGROW. All rights reserved.
            </p>

            <span className="hidden h-1 w-1 rounded-full bg-white/15 sm:block" />

            <p className="text-xs text-white/25">
              Digital growth, built with purpose.
            </p>
          </div>

          {/* Legal */}
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <a
              href="#"
              className="text-xs text-white/30 transition-colors hover:text-white/60"
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="text-xs text-white/30 transition-colors hover:text-white/60"
            >
              Terms of Service
            </a>
          </div>

          {/* Social */}
          <div className="flex items-center gap-2">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                aria-label={social.name}
                className="flex h-8 items-center justify-center rounded-full border border-white/10 px-3 text-[11px] font-medium text-white/35 transition-all duration-200 hover:border-white/20 hover:bg-white/[0.05] hover:text-white"
              >
                {social.name}
              </a>
            ))}
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;