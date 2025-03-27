export interface ITag {
    name: string;
}


export interface IItem {
    name: string;
    description: string;
    url: string;
    logo: string;
    screenshot?: string;
    tags: ITag[];
}

export interface ICollection {
    name: string;
    items: IItem[];
}