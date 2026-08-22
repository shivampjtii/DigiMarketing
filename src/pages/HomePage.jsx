import Hero from "../components/home/Hero";
import TrustBar from "../components/home/TrustBar";
import PainPoints from "../components/home/PainPoints";
import Solution from "../components/home/Solution";
import Results from "../components/home/Results";
import FeaturedServices from "../components/home/FeaturedServices";
import FeaturedCaseStudies from "../components/home/FeaturedCaseStudies";
import PricingPreview from "../components/home/PricingPreview";
import Testimonials from "../components/home/Testimonials";
import FAQPreview from "../components/home/FAQPreview";
import FinalCTA from "../components/home/FinalCTA";

const Home = () => {
  return (
    <>
      <Hero />
      <TrustBar />
      <PainPoints />
      <Solution />
      <Results />
      <FeaturedServices />
      <FeaturedCaseStudies />
      <PricingPreview />
      <Testimonials />
      <FAQPreview />
      <FinalCTA />
    </>
  );
};

export default Home;