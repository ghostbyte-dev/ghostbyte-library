"use client";

import { useEffect, useState } from "react";
import { ICollection } from "../../types/types";
import Collection from "../../components/Collection";

const Page = () => {
  const category = "ai-art";

  const [categoryData, setCategoryData] = useState<ICollection | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadCategoryData = async () => {
      if (category) {
        try {
          const data = await import(`../../../data/design/${category}.ts`);
          setCategoryData(data.default);
        } catch (error) {
          setCategoryData(null);
        } finally {
          setLoading(false);
        }
      }
    };

    loadCategoryData();
  }, [category]);

  return (
    <div className="w-full">
      {loading ? (
        <p>Loading...</p>
      ) : categoryData ? (
        <>
          <h1 className="text-3xl font-bold">{categoryData.name}</h1>
          <Collection name={categoryData.name} items={categoryData.items} />
        </>
      ) : (
        <p>Category not found</p>
      )}
    </div>
  );
};

export default Page;
