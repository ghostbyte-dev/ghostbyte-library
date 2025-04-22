import { Sparkles } from "lucide-react";
import Link from "next/link";
import { ArrowRight, Star } from "phosphor-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen py-16 px-6 flex justify-center items-center">
      {/* Decorative elements */}
      <div className="absolute -left-20 top-10 h-64 w-64 rounded-full bg-purple-600/10 blur-3xl" />
      <div className="absolute right-20 top-40 h-40 w-40 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="absolute left-40 bottom-0 h-60 w-60 rounded-full bg-violet-500/10 blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center justify-center p-1 mb-6 rounded-full bg-gradient-to-r from-purple-500/20 to-violet-500/20 text-purple-300 text-sm font-medium">
          <div className="flex items-center space-x-1 px-3 py-1 rounded-full bg-purple-950/50">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Curated collection of digital resources</span>
          </div>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
          <span className="bg-gradient-to-r from-purple-400 via-violet-400 to-cyan-300 bg-clip-text text-transparent">
            Discover Digital Resources
          </span>
        </h1>

        <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
          An ever-growing collection of useful websites, hidden gems, and
          essential online tools for creators and developers.
        </p>

        {/* Featured categories */}
        {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-10">
          <div className="flex flex-col items-center p-4 rounded-xl bg-purple-900/10 border border-purple-800/30 hover:bg-purple-900/20 hover:border-purple-700/40 transition-colors">
            <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 mb-3">
              <Star className="h-6 w-6 text-white" />
            </div>
            <span className="text-white font-medium">Most Popular</span>
          </div>
          <div className="flex flex-col items-center p-4 rounded-xl bg-cyan-900/10 border border-cyan-800/30 hover:bg-cyan-900/20 hover:border-cyan-700/40 transition-colors">
            <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 mb-3">
              <Star className="h-6 w-6 text-white" />
            </div>
            <span className="text-white font-medium">New Additions</span>
          </div>
          <div className="flex flex-col items-center p-4 rounded-xl bg-violet-900/10 border border-violet-800/30 hover:bg-violet-900/20 hover:border-violet-700/40 transition-colors">
            <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-gradient-to-br from-violet-500 to-indigo-500 mb-3">
              <Star className="h-6 w-6 text-white" />
            </div>
            <span className="text-white font-medium">Free Resources</span>
          </div>
          <div className="flex flex-col items-center p-4 rounded-xl bg-pink-900/10 border border-pink-800/30 hover:bg-pink-900/20 hover:border-pink-700/40 transition-colors">
            <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-gradient-to-br from-pink-500 to-rose-500 mb-3">
              <Star className="h-6 w-6 text-white" />
            </div>
            <span className="text-white font-medium">Editor's Choice</span>
          </div>
        </div> */}

        <div className="flex justify-center">
          <Link
            href="/#popular"
            className="flex bg-gradient-to-r font-semibold from-purple-700 to-cyan-600 hover:from-purple-800 hover:to-cyan-700 text-white border-0 h-12 px-6 rounded-md"
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
