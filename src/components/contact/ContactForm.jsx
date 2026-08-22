import { Send } from "lucide-react";
import { useState } from "react";

import Container from "../shared/layout/Container";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    budget: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Contact form data:", formData);

    setIsSubmitted(true);

    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      service: "",
      budget: "",
      message: "",
    });
  };

  return (
    <section
      id="contact-form"
      className="scroll-mt-20 bg-white py-10 sm:py-14 lg:py-12"
    >
      <Container>
        <div className="mx-auto max-w-5xl">
          {/* Heading */}
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-orange-500">
              Tell Us About Your Project
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-black sm:text-4xl lg:text-5xl">
              Let's Start With a{" "}
              <span className="text-orange-500">Conversation.</span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-black/60 sm:text-base sm:leading-8">
              Tell us a little about your business, your goals, and what you're
              looking to achieve. The more context you provide, the better we
              can understand how to help.
            </p>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="mt-10 rounded-3xl border border-black/10 bg-white p-5 shadow-sm sm:mt-12 sm:p-8 lg:p-10"
          >
            {/* Personal Information */}
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="text-sm font-semibold text-black"
                >
                  Your Name <span className="text-orange-500">*</span>
                </label>

                <input
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                  className="mt-2 w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm text-black outline-none transition-all placeholder:text-black/35 focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="text-sm font-semibold text-black"
                >
                  Email Address <span className="text-orange-500">*</span>
                </label>

                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@company.com"
                  required
                  className="mt-2 w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm text-black outline-none transition-all placeholder:text-black/35 focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="text-sm font-semibold text-black"
                >
                  Phone Number
                </label>

                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 98765 43210"
                  className="mt-2 w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm text-black outline-none transition-all placeholder:text-black/35 focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10"
                />
              </div>

              <div>
                <label
                  htmlFor="company"
                  className="text-sm font-semibold text-black"
                >
                  Company Name
                </label>

                <input
                  id="company"
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Your company"
                  className="mt-2 w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm text-black outline-none transition-all placeholder:text-black/35 focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10"
                />
              </div>
            </div>

            {/* Project Information */}
            <div className="mt-5 grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="service"
                  className="text-sm font-semibold text-black"
                >
                  What Do You Need Help With?
                </label>

                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="mt-2 w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm text-black outline-none transition-all focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10"
                >
                  <option value="">Select a service</option>
                  <option value="SEO">SEO</option>
                  <option value="Content Strategy">Content Strategy</option>
                  <option value="Social Media">Social Media</option>
                  <option value="Paid Advertising">Paid Advertising</option>
                  <option value="Web Development">Web Development</option>
                  <option value="Digital Strategy">Digital Strategy</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="budget"
                  className="text-sm font-semibold text-black"
                >
                  Approximate Budget
                </label>

                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="mt-2 w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm text-black outline-none transition-all focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10"
                >
                  <option value="">Select a budget range</option>
                  <option value="Under ₹10,000">Under ₹10,000</option>
                  <option value="₹10,000 - ₹25,000">
                    ₹10,000 - ₹25,000
                  </option>
                  <option value="₹25,000 - ₹50,000">
                    ₹25,000 - ₹50,000
                  </option>
                  <option value="₹50,000+">₹50,000+</option>
                  <option value="Not Sure Yet">Not Sure Yet</option>
                </select>
              </div>
            </div>

            {/* Message */}
            <div className="mt-5">
              <label
                htmlFor="message"
                className="text-sm font-semibold text-black"
              >
                Tell Us About Your Project{" "}
                <span className="text-orange-500">*</span>
              </label>

              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your business, your goals, challenges, and what you'd like to achieve..."
                required
                rows={6}
                className="mt-2 w-full resize-none rounded-xl border border-black/10 bg-white px-4 py-3 text-sm leading-7 text-black outline-none transition-all placeholder:text-black/35 focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10"
              />
            </div>

            {/* Submit Area */}
            <div className="mt-6 flex flex-col gap-4 border-t border-black/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-xs leading-6 text-black/45 sm:max-w-md">
                By submitting this form, you agree to be contacted regarding
                your enquiry.
              </p>

              <button
                type="submit"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-orange-500 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-orange-500/20 transition-all duration-200 hover:bg-orange-600 active:scale-[0.98]"
              >
                Send Enquiry

                <Send
                  size={17}
                  className="transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </button>
            </div>

            {/* Success Message */}
            {isSubmitted && (
              <div className="mt-5 rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm font-medium text-green-700">
                Thanks for reaching out! Your enquiry has been submitted
                successfully.
              </div>
            )}
          </form>
        </div>
      </Container>
    </section>
  );
};

export default ContactForm;