"use client";

import { ICollection, IItem } from "../types/types";
import Card from "./Card";

const Collection = (collection: ICollection) => {
  return (
    <div className="p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {collection.items.map((item: IItem) => {
          return (
            <div key={item.name}>
              <Card
                name={item.name}
                description={item.description}
                url={item.url}
                img={item.img}
                screenshot={item.img}
                tags={item.tags}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Collection;
