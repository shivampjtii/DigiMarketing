import {
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";

import Container from "../shared/layout/Container";

const ContactInfo = () => {
  const contactDetails = [
    {
      icon: Mail,
      label: "Email Us",
      value: "hello@youragency.com",
      href: "mailto:hello@youragency.com",
      description: "Send us an email and we'll get back to you.",
    },
    {
      icon: Phone,
      label: "Call Us",
      value: "+91 98765 43210",
      href: "tel:+919876543210",
      description: "Talk directly with our team.",
    },
    {
      icon: MessageCircle,
      label: "Let's Chat",
      value: "Book a Consultation",
      href: "#contact-form",
      description: "Tell us about your business and goals.",
    },
  ];

  return (
    <section className="bg-orange-50/50 py-10 sm:py-14 lg:py-12">
      <Container>
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:gap-12 xl:gap-16">
          {/* Left Content */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-orange-500">
              Get In Touch
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-black sm:text-4xl lg:text-5xl">
              We'd Love to Hear{" "}
              <span className="text-orange-500">From You.</span>
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-black/60 sm:text-base sm:leading-8">
              Have a question, project, or idea? Reach out through the channel
              that works best for you. We're here to understand what you need
              and help you find the right next step.
            </p>

            {/* Extra Information */}
            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-orange-500 shadow-sm">
                  <Clock3 size={19} />
                </div>

                <div>
                  <p className="text-sm font-bold text-black">
                    Working Hours
                  </p>

                  <p className="mt-1 text-sm leading-6 text-black/60">
                    Monday to Friday, 9:00 AM to 6:00 PM
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-orange-500 shadow-sm">
                  <MapPin size={19} />
                </div>

                <div>
                  <p className="text-sm font-bold text-black">
                    Based In
                  </p>

                  <p className="mt-1 text-sm leading-6 text-black/60">
                    Working with ambitious businesses everywhere.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Cards */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-3">
            {contactDetails.map((item) => {
              const Icon = item.icon;

              return (
                <a
                  key={item.label}
                  href={item.href}
                  className="group rounded-3xl border border-black/10 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-xl hover:shadow-black/5"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-50 text-orange-500 transition-all duration-300 group-hover:scale-110 group-hover:bg-orange-500 group-hover:text-white">
                    <Icon size={22} />
                  </div>

                  <p className="mt-6 text-xs font-bold uppercase tracking-[0.15em] text-black/40">
                    {item.label}
                  </p>

                  <p className="mt-2 text-base font-bold text-black">
                    {item.value}
                  </p>

                  <p className="mt-2 text-sm leading-6 text-black/60">
                    {item.description}
                  </p>
                </a>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ContactInfo;