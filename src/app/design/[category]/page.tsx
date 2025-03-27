import Collection from "../../../components/Collection";

export default async function Page({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;

  console.log(category);

  return (
    <div className="w-full">
      {!category ? (
        <p>Loading...</p>
      ) :  (
        <>
          <h1 className="text-3xl font-bold">fief</h1>
          <Collection collection={category} />
        </>
      )}
    </div>
  );
}
