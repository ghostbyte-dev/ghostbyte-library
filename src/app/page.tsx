"use client"

import { GhostIcon, Heart, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { CategoryCard } from "../components/CategoryCard";
import { ArrowRight, Star } from "phosphor-react";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";
import CTA from "../components/CTA";
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
