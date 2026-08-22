import { Outlet } from "react-router-dom";

import Navbar from "../components/shared/navbar/Navbar";
import Footer from "../components/shared/footer/Footer";
import useScrollTop from "../hooks/useScrollToTop";
import PageWrapper from "../components/shared/layout/PageWrapper";

const MainLayout = () => {
  useScrollTop();

  return (
    <PageWrapper className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />
    </PageWrapper>
  );
};

export default MainLayout;