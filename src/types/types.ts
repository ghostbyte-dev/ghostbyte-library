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

interface Collection {
    name: string;
    items: Item[];
}