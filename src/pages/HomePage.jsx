import Navbar from "../components/navbar/Navbar";
import Hero from "../components/hero/Hero";
import TrustBar from "../components/trust/TrustBar";
import PainPoints from "../components/problems/PainPoints";
import Solution from "../components/solution/Solution";

import Services from "../components/services/Services";

import Results from "../components/results/Results";

import CaseStudies from "../components/case-studies/CaseStudies";

import Pricing from "../components/pricing/Pricing";
import ComparisonTable from "../components/pricing/ComparisonTable";

import Testimonials from "../components/testimonials/Testimonials";

import FAQ from "../components/faq/FAQ";

import FinalCTA from "../components/cta/FinalCTA";

import Footer from "../components/footer/Footer";

const HomePage = () => {
  return (
    <div className="min-h-screen overflow-x-hidden bg-black text-white">

      {/* Navigation */}
      <Navbar />

      <main>

        {/* Hero */}
        <Hero />

        {/* Social Proof / Client Logos */}
        <TrustBar />

        {/* Customer Problems */}
        <PainPoints />

        {/* Solution / Value Proposition */}
        <Solution />

        {/* Services */}
        <Services />

        {/* Results */}
        <Results />

        {/* Case Studies */}
        <CaseStudies />

        {/* Pricing */}
        <Pricing />

        {/* Pricing Comparison */}
        <ComparisonTable />

        {/* Testimonials */}
        <Testimonials />

        {/* FAQ */}
        <FAQ />

        {/* Final Conversion CTA */}
        <FinalCTA />

      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
};

export default HomePage;