import { Sparkles } from "lucide-react";
import Link from "next/link";
import { ArrowRight, Star } from "phosphor-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen py-16 px-6 flex justify-center items-center">
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center justify-center p-1 mb-6 rounded-full bg-dark text-light text-sm font-medium">
          <div className="flex items-center space-x-1 px-3 py-1 rounded-full">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Curated collection of digital resources</span>
          </div>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
          <span>Discover Digital Resources</span>
        </h1>

        <p className="text-xl mb-10 max-w-2xl mx-auto">
          An ever-growing collection of useful websites, hidden gems, and
          essential online tools for creators and developers.
        </p>

        <div className="flex justify-center">
          <Link
            href="/#popular"
            className="flex bg-dark font-semibold text-white border-0 h-12 px-6 rounded-md"
          >
            <span className="relative z-10 flex items-center">
              Browse Popular Categories
              <ArrowRight className="ml-2 h-4 w-4" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
