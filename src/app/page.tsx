"use client";

import HeroSection from "../components/landingpage/HeroSection";
import Footer from "../components/Footer";
import CTA from "../components/landingpage/CTA";
import PopularCategories from "../components/landingpage/PopularCategories";

const Home = () => {
  return (
    <div className="md:ml-64 w-full">
      <HeroSection />

      <PopularCategories />

      <CTA />

      <Footer />
    </div>
  );
};

export default Home;
