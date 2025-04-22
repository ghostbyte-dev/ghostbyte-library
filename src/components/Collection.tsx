"use client";

import { useEffect, useState } from "react";
import type { ICollection, IItem } from "../types/types";
import Card from "./Card";
import aiArtData from "../../data/design/ai-art";
import browserExtensionsData from "../../data/design/extensions";
import typographyData from "../../data/design/fonts";
import bestPracticesData from "../../data/design/best-practices";
import illustrationsData from "../../data/design/illustrations";
import stockPhotosData from "../../data/design/stock-photos";
import colorsData from "../../data/design/colors";
import inspirationData from "../../data/design/inspiration";
import uiComponentsData from "../../data/design/ui-components";
import designToolsData from "../../data/design/tools";
import designSystemsData from "../../data/design/systems";
import designGamesData from "../../data/design/games";
import iconsData from "../../data/design/icons";
import { ResourceCard } from "./ResourceCard";

const Collection = ({ collection }: { collection: string }) => {
  const [categoryData, setCategoryData] = useState<ICollection | null>(null);

  useEffect(() => {
    if (collection === "ai-art") {
      setCategoryData(aiArtData);
    } else if (collection === "fonts") {
      setCategoryData(typographyData);
    } else if (collection === "extensions") {
      setCategoryData(browserExtensionsData);
    } else if (collection === "best-practices") {
      setCategoryData(bestPracticesData);
    } else if (collection === "illustrations") {
      setCategoryData(illustrationsData);
    } else if (collection === "stock-photos") {
      setCategoryData(stockPhotosData);
    } else if (collection === "colors") {
      setCategoryData(colorsData);
    } else if (collection === "inspiration") {
      setCategoryData(inspirationData);
    } else if (collection === "ui-components") {
      setCategoryData(uiComponentsData);
    } else if (collection === "tools") {
      setCategoryData(designToolsData);
    } else if (collection === "design-systems") {
      setCategoryData(designSystemsData);
    } else if (collection === "games") {
      setCategoryData(designGamesData);
    } else if (collection === "systems") {
      setCategoryData(designSystemsData);
    } else if (collection === "icons") {
      setCategoryData(iconsData);
    }
  }, [collection]);

  return (
    <div className="p-4">
      {categoryData && (
        <>
          <div className="container mt-36 mb-20 flex flex-col items-center">
            {/*  <div className={`p-2 rounded-md ${gradient}`}>
              <Icon size={20} className="text-white" />
            </div> */}

            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-300">
              {categoryData.name}
            </h1>

            <p className="max-w-[900px] mt-4 text-zinc-400 text-center md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {categoryData.introduction}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {categoryData?.items.map((item: IItem) => {
              return (
                <div key={item.name}>
                  <ResourceCard
                    title={item.name}
                    description={item.description}
                    url={item.url}
                    logo={item.logo}
                    tags={item.tags}
                  />
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default Collection;
