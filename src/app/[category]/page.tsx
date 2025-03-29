import Link from "next/link";
import Collection from "../../components/Collection";

export default async function Page({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;

  console.log(category);

  return (
    <div className="w-full md:ml-64">
      {!category ? (
        <p>Loading...</p>
      ) : (
        <>
          <Collection collection={category} />
        </>
      )}

      <div className="mt-10 pb-10 text-center text-white">
        Developed with ❤️ by{" "}
        <Link href="https://ghostbyte.dev">
          <strong className="text-white">Ghostbyte</strong>
        </Link>
      </div>
    </div>
  );
}
