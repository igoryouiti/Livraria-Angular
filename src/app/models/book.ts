import { PricingGroup } from "../enums/pricingGroup";
import { Author } from "./author";
import { Category } from "./category";
import { Dimension } from "./dimension";

export interface Book {
    id: number;
    active: boolean;
    title: string;
    year: Date;
    publisher: string;
    edition: string;
    isbn: string;
    pagesNumber: number;
    synopsis: string;
    dimension: Dimension;  //criar dimension
    pricingGroup: PricingGroup; // criar pricing group
    basePrice: number;
    barCode: string;
    authors: Author[];
    categories: Category[];
    images: string[];
    inactivationReason: string;
    activationReason: string;
}
