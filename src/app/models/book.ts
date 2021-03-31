import { Author } from "./author";
import { Category } from "./category";

export interface Book {
    id: number;
    title: string;
    authors: string;
    categories: string;
    images: string[]
}
