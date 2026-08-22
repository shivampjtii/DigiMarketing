import { useState } from "react";

import CaseStudiesCTA from "../components/case-studies/CaseStudiesCTA";
import CaseStudiesFilter from "../components/case-studies/CaseStudiesFilter";
import CaseStudiesGrid from "../components/case-studies/CaseStudiesGrid";
import CaseStudiesHero from "../components/case-studies/CaseStudiesHero";

const CaseStudiesPage = () => {
  const [activeFilter, setActiveFilter] = useState("All Work");

  return (
    <>
      <CaseStudiesHero />

      <CaseStudiesFilter
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
      />

      <CaseStudiesGrid activeFilter={activeFilter} />

      <CaseStudiesCTA />
    </>
  );
};

export default CaseStudiesPage;