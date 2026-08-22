import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

import Container from "../layout/Container";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      label: "Facebook",
      icon: FaFacebookF,
      href: "#",
    },
    {
      label: "Instagram",
      icon: FaInstagram,
      href: "#",
    },
    {
      label: "LinkedIn",
      icon: FaLinkedinIn,
      href: "#",
    },
    {
      label: "X",
      icon: FaXTwitter,
      href: "#",
    },
  ];

  const serviceLinks = [
    {
      label: "SEO & Strategy",
      href: "/services",
    },
    {
      label: "Content Strategy",
      href: "/services",
    },
    {
      label: "Social Media",
      href: "/services",
    },
    {
      label: "Performance Marketing",
      href: "/services",
    },
    {
      label: "Web Development",
      href: "/services",
    },
  ];

  const companyLinks = [
    {
      label: "About Us",
      href: "/about",
    },
    {
      label: "Our Services",
      href: "/services",
    },
    {
      label: "Case Studies",
      href: "/case-studies",
    },
    {
      label: "Pricing",
      href: "/pricing",
    },
    {
      label: "Contact",
      href: "/contact",
    },
  ];

  return (
    <footer className="bg-black text-white">
      {/* Top CTA */}
      <div className="border-b border-white/10">
        <Container>
          <div className="flex flex-col gap-6 py-10 sm:py-12 lg:flex-row lg:items-center lg:justify-between lg:py-14">
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-orange-500">
                Ready to Grow?
              </p>

              <h2 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
                Let's Build Something That{" "}
                <span className="text-orange-500">Moves Your Business Forward.</span>
              </h2>
            </div>

            <Link
              to="/contact"
              className="group inline-flex w-fit items-center justify-center gap-2 rounded-xl bg-orange-500 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-orange-600 active:scale-[0.98]"
            >
              Start a Conversation

              <ArrowUpRight
                size={18}
                className="transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </div>
        </Container>
      </div>

      {/* Main Footer */}
      <Container>
        <div className="grid gap-10 py-12 sm:py-16 lg:grid-cols-12 lg:gap-8 lg:py-20">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Link
              to="/"
              className="text-2xl font-bold tracking-tight text-white"
            >
              Your<span className="text-orange-500">Brand</span>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-7 text-white/55 sm:text-base">
              We help ambitious businesses build stronger digital strategies,
              create meaningful experiences, and turn opportunities into
              measurable growth.
            </p>

            {/* Social Links */}
            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-white/70 transition-all duration-200 hover:border-orange-500 hover:bg-orange-500 hover:text-white"
                  >
                    <Icon size={17} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Services */}
          <div className="sm:grid sm:grid-cols-2 sm:gap-8 lg:col-span-5">
            <div>
              <h3 className="text-sm font-bold text-white">Services</h3>

              <ul className="mt-5 space-y-3">
                {serviceLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-sm text-white/55 transition-colors hover:text-orange-500"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div className="mt-8 sm:mt-0">
              <h3 className="text-sm font-bold text-white">Company</h3>

              <ul className="mt-5 space-y-3">
                {companyLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-sm text-white/55 transition-colors hover:text-orange-500"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-bold text-white">Get in Touch</h3>

            <ul className="mt-5 space-y-4">
              <li className="flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/5 text-orange-500">
                  <Mail size={17} />
                </div>

                <div>
                  <p className="text-xs text-white/35">Email us</p>

                  <a
                    href="mailto:hello@yourbrand.com"
                    className="mt-1 block text-sm text-white/65 transition-colors hover:text-orange-500"
                  >
                    hello@yourbrand.com
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/5 text-orange-500">
                  <Phone size={17} />
                </div>

                <div>
                  <p className="text-xs text-white/35">Call us</p>

                  <a
                    href="tel:+910000000000"
                    className="mt-1 block text-sm text-white/65 transition-colors hover:text-orange-500"
                  >
                    +91 00000 00000
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/5 text-orange-500">
                  <MapPin size={17} />
                </div>

                <div>
                  <p className="text-xs text-white/35">Location</p>

                  <p className="mt-1 text-sm text-white/65">
                    India
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </Container>

      {/* Bottom Footer */}
      <div className="border-t border-white/10">
        <Container>
          <div className="flex flex-col gap-4 py-6 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
            <p className="text-xs text-white/40 sm:text-sm">
              © {currentYear} YourBrand. All rights reserved.
            </p>

            <div className="flex justify-center gap-5 sm:justify-end">
              <Link
                to="/privacy-policy"
                className="text-xs text-white/40 transition-colors hover:text-orange-500 sm:text-sm"
              >
                Privacy Policy
              </Link>

              <Link
                to="/terms"
                className="text-xs text-white/40 transition-colors hover:text-orange-500 sm:text-sm"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;