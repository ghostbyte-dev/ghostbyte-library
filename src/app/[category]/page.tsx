import Link from "next/link";
import Collection from "../../components/Collection";
import { Heart } from "lucide-react";
import Footer from "../../components/Footer";

const categoryTitles: { [key: string]: string } = {
  "ai-art": "AI Art",
  fonts: "Typography",
  extensions: "Browser Extensions",
  "best-practices": "Best Practices",
  illustrations: "Illustrations",
  "stock-photos": "Stock Photos",
  colors: "Colors",
  inspiration: "Inspiration",
  "ui-components": "UI Components",
  tools: "Design Tools",
  "design-systems": "Design Systems",
  games: "Design Games",
  systems: "Design Systems",
  icons: "Icons",
};

export async function generateStaticParams() {
  const categories = [
    "ai-art",
    "fonts",
    "extensions",
    "best-practices",
    "illustrations",
    "stock-photos",
    "colors",
    "inspiration",
    "ui-components",
    "tools",
    "design-systems",
    "games",
    "systems",
    "icons",
  ];

  return categories.map((category) => ({ category }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const categoryName = categoryTitles[category] || category;

  const metadata = {
    title: `${categoryName} - Ghostbyte Library`,
    description: `Explore the best collection of ${category.replace(
      /-/g,
      " "
    )} curated by Ghostbyte Library.`,
    openGraph: {
      title: `${category.replace(/-/g, " ").toUpperCase()} - Ghostbyte Library`,
      description: `Explore the best collection of ${category.replace(
        /-/g,
        " "
      )} curated by Ghostbyte Library.`,
      url: `https://ghostbyte.dev/${category}`,
      siteName: "Ghostbyte Library",
    },
  };

  return metadata;
}

export default async function Page({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;

  return (
    <div className="w-full md:ml-64">
      {category && (
        <>
          <Collection collection={category} />

          <div className="h-20" />
          <Footer />
        </>
      )}
    </div>
  );
}
