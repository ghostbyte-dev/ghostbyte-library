import { CategoryCard } from "./CategoryCard";

export default function PopularCategories() {
  return (
    <section className="py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-cyan-300 bg-clip-text text-transparent mb-4">
          Popular Categories
        </h2>
        <p className="text-gray-300">
          Browse some of the most visited sections in our library.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <CategoryCard
          title="Typography"
          icon="type"
          description="Fonts, type systems, and text styling resources"
          gradient="from-purple-500 to-pink-500"
        />
        <CategoryCard
          title="AI Art"
          icon="palette"
          description="AI-powered art generation tools and resources"
          gradient="from-cyan-500 to-blue-500"
        />
        <CategoryCard
          title="Stock Photos"
          icon="image"
          description="Free and premium stock photography collections"
          gradient="from-green-500 to-emerald-500"
        />
        <CategoryCard
          title="Design Tools"
          icon="wrench"
          description="Software and utilities for designers"
          gradient="from-orange-500 to-amber-500"
        />
        <CategoryCard
          title="Icons"
          icon="shapes"
          description="Icon libraries, packs and creation tools"
          gradient="from-red-500 to-rose-500"
        />
        <CategoryCard
          title="UI Components"
          icon="layout"
          description="Ready-to-use interface components and kits"
          gradient="from-violet-500 to-indigo-500"
        />
      </div>
    </section>
  );
}
