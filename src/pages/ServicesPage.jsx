import ServiceDetails from "../components/services/ServiceDetails";
import ServiceProcess from "../components/services/ServiceProcess";
import ServiceResults from "../components/services/ServiceResults";
import ServicesCTA from "../components/services/ServicesCTA";
import ServicesHero from "../components/services/ServicesHero";
import ServicesOverview from "../components/services/ServicesOverview";

const ServicesPage = () => {
  return (
    <>
      <ServicesHero />

      <ServicesOverview />

      <ServiceDetails />

      <ServiceProcess />

      <ServiceResults />

      <ServicesCTA />
    </>
  );
};

export default ServicesPage;