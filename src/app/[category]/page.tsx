import Link from "next/link";
import Collection from "../../components/Collection";

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

export default async function Page({ params }: { params: { category: string } }) {
  const { category } = await params; // Ensure params is awaited

  return (
    <div className="w-full md:ml-64">
      <Collection collection={category} />

      <div className="mt-10 pb-10 text-center text-white">
        Developed with ❤️ by{" "}
        <Link href="https://ghostbyte.dev">
          <strong className="text-white">Ghostbyte</strong>
        </Link>
      </div>
    </div>
  );
}
