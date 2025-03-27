"use client"

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Collection from '../../components/Collection';

// Define the Item type if you haven't already
interface Tag {
  name: string;
}

interface Item {
  name: string;
  description: string;
  url: string;
  img: string;
  tags: Tag[];
}

const Page = () => {

  const category = "ai-art"

  const [categoryData, setCategoryData] = useState<Item[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadCategoryData = async () => {
      if (category) {
        try {
          // Dynamically import the TypeScript data file
          const data = await import(`../../../data/design/${category}.ts`);
          setCategoryData(data.default); // Assuming you're exporting the default data array
        } catch (error) {
          setCategoryData(null); // Handle case where category file does not exist
        } finally {
          setLoading(false);
        }
      }
    };

    loadCategoryData();
  }, [category]);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : categoryData ? (
        <>
          <h1>{categoryData[0]?.name}</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            <Collection name='fief' items={categoryData}/>
          </div>
        </>
      ) : (
        <p>Category not found</p>
      )}
    </div>
  );
};

export default Page;
