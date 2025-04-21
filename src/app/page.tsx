"use client";

import HeroSection from "../components/landingpage/HeroSection";
import Footer from "../components/Footer";
import CTA from "../components/landingpage/CTA";
import PopularCategories from "../components/landingpage/PopularCategories";

const Home = () => {
  return (
    <div className="bg-gray-900 md:ml-64 min-h-screen w-full flex flex-col items-center">
      <HeroSection />

      <PopularCategories />

      <CTA />

      <Footer />
    </div>
  );
};

export default Home;
