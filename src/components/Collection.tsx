"use client";

import Card from "./Card";

const Collection = (collection: Collection) => {
  return (
    <div className="p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {collection.items.map((item: Item) => {
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
