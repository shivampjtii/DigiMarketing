import AboutCTA from "../components/about/AboutCTA";
import AboutHero from "../components/about/AboutHero";
import AboutStats from "../components/about/AboutStats";
import HowWeWork from "../components/about/HowWeWork";
import Mission from "../components/about/Mission";
import OurStory from "../components/about/OurStory";
import Team from "../components/about/Team";
import WhyChooseUs from "../components/about/WhyChooseUs";

const AboutPage = () => {
  return (
    <>
      <AboutHero />

      <AboutStats />

      <OurStory />

      <Mission />

      <WhyChooseUs />

      <HowWeWork />

      <Team />

      <AboutCTA />
    </>
  );
};

export default AboutPage;