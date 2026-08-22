import ConsultationCTA from "../components/contact/ConsultationCTA";
import ContactFAQ from "../components/contact/ContactFAQ";
import ContactForm from "../components/contact/ContactForm";
import ContactHero from "../components/contact/ContactHero";
import ContactInfo from "../components/contact/ContactInfo";

const ContactPage = () => {
  return (
    <>
      <ContactHero />

      <ContactInfo />

      <ContactForm />

      <ConsultationCTA />

      <ContactFAQ />
    </>
  );
};

export default ContactPage;