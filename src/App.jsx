import { BrowserRouter, Route, Routes } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import AboutPage from "./pages/AboutPage";
import CaseStudiesPage from "./pages/CaseStudiesPage";
import CaseStudyDetailsPage from "./pages/CaseStudyDetailsPage";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import PricingPage from "./pages/PricingPage";
import ServicesPage from "./pages/ServicesPage";

const App = () => {
  return (
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />

          <Route path="/about" element={<AboutPage />} />

          <Route path="/services" element={<ServicesPage />} />

          <Route path="/pricing" element={<PricingPage />} />

          <Route path="/case-studies" element={<CaseStudiesPage />} />

          <Route
            path="/case-studies/:slug"
            element={<CaseStudyDetailsPage />}
          />

          <Route path="/contact" element={<ContactPage />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
  );
};

export default App;